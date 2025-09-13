# Code Mode – Architecture (Bootstrap)
- Prefer layered structure (api|app|domain|infra).
- Keep side-effects at edges; pure domain logic in `domain/`.
- No cross-layer imports (e.g., `infra` must not import `app`).
