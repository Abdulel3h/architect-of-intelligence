# Architect of Intelligence

Architect of Intelligence is a production-oriented AI infrastructure and consulting platform prototype built with TanStack Start, React, TypeScript, and server-side AI workflow endpoints.

## Overview

The app presents an AI systems platform with opportunity scanning, architecture generation, lead capture, event logging, bilingual Arabic/English output, and graceful fallbacks when external AI or data services are unavailable.

## Features

- AI opportunity scanner with structured output
- AI architecture generator with Mermaid-style flow output
- Agent runtime endpoint with internal and user-facing output separation
- Bilingual Arabic and English response modes
- Server-side input validation with Zod
- Rate limiting by route and IP bucket
- Optional OpenAI, Supabase, Resend, PostHog, Upstash, Turnstile, and R2 integrations
- Production error page normalization for SSR failures
- Performance governance notes for heavy effects and animation budgets

## Architecture

```text
Browser
  -> TanStack Start routes
  -> src/server.ts API handler
  -> Zod schemas validate request payloads
  -> optional OpenAI JSON response generation
  -> fallback deterministic outputs when integrations are missing
  -> optional Supabase/Resend/PostHog persistence and notifications
```

## Tech Stack

- TanStack Start
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Zod
- OpenAI Chat Completions API
- Supabase REST API
- Resend
- PostHog
- Upstash Redis concepts
- Cloudflare/Vercel deployment configuration

## Installation

```bash
npm install
cp .env.example .env
npm run dev
```

## Usage

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

Optional environment variables are documented in `src/lib/env.ts`. Server-only values such as API keys should never be exposed to client-side `VITE_` variables.

## Screenshots

The repository includes screenshot/preview assets in `src/assets` and public images. Add updated product screenshots for the opportunity scanner, architecture generator, and bilingual agent flow.

## System Design

- `src/server.ts` owns API routing, body validation, rate limiting, AI calls, fallbacks, Supabase writes, and Resend reports.
- `src/lib/env.ts` validates public and server-only environment configuration.
- `src/lib/ai/schemas.ts` defines strict input/output contracts.
- `src/routes/` contains TanStack route pages.
- `src/lib/performance/README.md` documents performance budgets and animation rules.

## Folder Structure

```text
src/routes/            TanStack route definitions
src/components/        Shared UI components
src/lib/               Environment, AI schemas, performance, SEO, errors
src/server.ts          Server/API entrypoint
public/                Robots, sitemap, icons, fonts
supabase/migrations/   Data-layer migration
```

## Challenges

- The README and env defaults reference model/provider values that must be kept current.
- Many integrations are optional, so degraded-mode behavior must stay documented.
- Arabic and English outputs need separate quality review.
- Server-only environment variables require careful handling.

## Future Work

- Add integration tests for `/api/ai/opportunity-scan`, `/api/ai/architecture`, and `/api/ai/agent-run`.
- Add screenshots for each AI workflow.
- Document the Supabase schema in more detail.
- Add deployment notes for Vercel and Cloudflare separately.
- Add an evaluation set for AI output quality.

## License

No license file is currently present. All rights are reserved by default unless a license is added.

## Author

Abdulelah Alkhathami

## Contact

- Website: [abdulelah.de](https://www.abdulelah.de)
- GitHub: [Abdulel3h](https://github.com/Abdulel3h)

