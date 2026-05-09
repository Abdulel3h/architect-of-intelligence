# Performance Governance

Sprint 2 rule: premium feel must come from hierarchy, clarity, spacing, and useful interaction before heavy effects.

## Budgets

- Initial client chunk target: <= 180KB.
- Interactive route chunk target: <= 360KB.
- Heavy visual chunk ceiling: <= 520KB.
- Continuous animations: one system at a time.
- Hero entrance motion: <= 550ms.

## Lazy Loading Policy

- Three.js must stay behind a static fallback and a runtime kill-switch.
- AI Lab tools can be interactive, but each tool should remain independently loadable.
- Future diagrams should prefer CSS/HTML or Mermaid text before adding graph libraries.
- LLM flows should show deterministic progress/report shells before network completion.

## Animation Rules

- Animate containers instead of individual letters for primary messaging.
- No always-on animation outside the hero visual.
- Respect `prefers-reduced-motion`.
- Mobile gets static or reduced visual systems by default.
