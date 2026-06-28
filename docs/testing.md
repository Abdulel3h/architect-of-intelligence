# Testing and CI

This repository now exposes a blocking build/dependency gate and non-blocking quality diagnostics in GitHub Actions.

## Local Validation

Run these commands before opening a pull request:

```bash
npm ci
npm audit --omit=dev --audit-level=high
npm run lint
npm run typecheck
npm run build
```

## CI Workflow

`.github/workflows/ci.yml` runs on pull requests and pushes to `main`.

The workflow has two jobs:

- `validate` is blocking and fails on high-severity production dependency advisories or production build failures.
- `quality-diagnostics` runs lint and TypeScript checks as a non-blocking job while existing quality debt is resolved.

## Known Failing Diagnostics

The current codebase is not yet ready for a blocking lint/typecheck gate.

Known local failures:

- `npm run lint` fails on repository-wide Prettier line-ending and formatting findings.
- `npm run typecheck` fails on missing analytics `source` fields, strict indexing of AI system metadata, pricing-card typing, and Vercel build config typing.
- `npm run build` passes locally, with TanStack/Nitro bundling warnings from dependencies.

These checks are still valuable because they make the debt visible on every pull request without blocking documentation-only or audit-focused maintenance.

## Recommended Next Tests

- Fix TypeScript errors and promote `typecheck` to the blocking job.
- Normalize formatting and promote `lint` to the blocking job.
- Add API integration tests for opportunity scanning, architecture generation, and agent runtime fallback behavior.
- Add browser smoke tests for the homepage and AI workflow forms.
