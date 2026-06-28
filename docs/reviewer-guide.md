# Reviewer Guide

Use this guide if you are evaluating Architect of Intelligence for AI platform, TypeScript, or structured workflow engineering roles.

## 30-Second Review

- Start with `README.md` for the platform concept and integration list.
- Open `docs/architecture.md` to see route, schema, provider, fallback, and reporting flow.
- Inspect `src/server.ts` for API workflow handling.
- Inspect `src/lib/ai/schemas.ts` and `src/lib/env.ts` for contracts and configuration.

## What This Project Demonstrates

- Typed AI workflow contracts.
- Server-side validation with Zod.
- Optional AI provider and integration boundaries.
- Degraded-mode behavior when services are unavailable.
- Bilingual Arabic/English AI product thinking.

## Quick Technical Path

```bash
npm install
npm run lint
npm run build
```

## Prototype Boundaries

- AI output quality needs fixtures and evaluation checks.
- Optional integrations need environment-specific deployment notes.
- Supabase and analytics behavior should be tested with real staging credentials before production use.

## Related Repositories

- [Abdulelah AI Portfolio](https://github.com/Abdulel3h/Abdulelah)
- [ChatUB](https://github.com/Abdulel3h/ChatUB)
