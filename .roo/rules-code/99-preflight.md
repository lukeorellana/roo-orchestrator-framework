# Code Mode – Preflight (Slice Gate)
- Before coding, add 3–8 bullets to `.roo-orchestrator/docs/Acceptance-Criteria.md` for the slice.
- Plan in three lines: **Files** (1–2), **Command** (`make quickcheck`), **Artifact** (one file/result).
- Write or update failing tests first; keep changes minimal.
- Run `make quickcheck` and capture evidence from the run.
- Commit only when tests pass and all acceptance criteria are met.
