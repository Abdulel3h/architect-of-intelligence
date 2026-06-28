# Engineering Principles

This repository follows the public portfolio standard used across Abdulelah Alkhathami's flagship AI projects.

## Principles

- Treat AI workflows as typed system contracts.
- Keep fallback behavior explicit when providers are unavailable.
- Separate public client configuration from server-only secrets.
- Design bilingual output as a product requirement, not an afterthought.
- Document integration boundaries for every optional service.

## Applied Here

- Zod schemas define AI workflow inputs and outputs.
- Server logic includes deterministic degraded-mode responses.
- Environment validation separates public and private configuration.
- The architecture document maps optional OpenAI, Supabase, Resend, PostHog, and cache services.
