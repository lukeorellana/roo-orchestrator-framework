# Code Mode – Pipelines (Bootstrap)
- CI stages: fmt → lint → test → build → package → (optional) deploy.
- Required checks before merge: format clean, lint clean, tests green.
- Produce artifacts in `dist/` or `build/`; avoid committing generated files.
