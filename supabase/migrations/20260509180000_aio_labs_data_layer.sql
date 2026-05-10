create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text,
  intent text not null,
  urgency text not null check (urgency in ('later', 'this-quarter', 'now')),
  company_type text not null,
  ai_maturity text not null check (ai_maturity in ('emerging', 'promising', 'high-leverage')),
  source text not null default 'aio-labs-web',
  created_at timestamptz not null default now()
);

create table if not exists public.scanner_sessions (
  id uuid primary key default gen_random_uuid(),
  inputs jsonb not null,
  generated_outputs jsonb not null,
  score integer not null check (score between 0 and 100),
  recommended_system text not null,
  cta_clicked boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.user_events (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  page text not null,
  properties jsonb not null default '{}'::jsonb,
  source text not null default 'aio-labs-web',
  created_at timestamptz not null default now()
);

create index if not exists leads_email_idx on public.leads (email);
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists scanner_sessions_created_at_idx on public.scanner_sessions (created_at desc);
create index if not exists user_events_name_created_at_idx on public.user_events (name, created_at desc);

alter table public.leads enable row level security;
alter table public.scanner_sessions enable row level security;
alter table public.user_events enable row level security;

revoke all on public.leads from anon, authenticated;
revoke all on public.scanner_sessions from anon, authenticated;
revoke all on public.user_events from anon, authenticated;

create policy "service role can manage leads"
on public.leads
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');

create policy "service role can manage scanner sessions"
on public.scanner_sessions
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');

create policy "service role can manage user events"
on public.user_events
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');
