# Technical Decisions

| Decision | Rationale | Tradeoff |
| --- | --- | --- |
| Use TanStack Start | Supports modern React routing and server-oriented workflow endpoints. | Smaller ecosystem than more common frameworks. |
| Use Zod schemas | Keeps AI workflow contracts explicit and reviewable. | Schema updates must stay aligned with UI expectations. |
| Include deterministic fallbacks | Makes the platform usable without every integration configured. | Fallback output is less capable than provider-backed generation. |
| Keep integrations optional | Supports local review and staged deployment. | Documentation must clearly describe degraded modes. |
