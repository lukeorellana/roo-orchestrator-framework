# Roo Architect Trunk Pack

This repository provides three kickoff Architect modes and lightweight Code-mode rules for a trunk-based, slice-first workflow in Roo.

## Architect Kickoff
Use these modes at project start or major pivots to generate docs and stack rules under `.roo-orchestrator/` and `.roo/`:

1. **🧭 Product Architect** — writes `.roo-orchestrator/docs/PRD.md` and `.roo-orchestrator/docs/Assumptions.md`
2. **🎨 UX Architect** — writes `.roo-orchestrator/docs/UX-Brief.md` and `.roo-orchestrator/docs/Acceptance-Criteria.md`
3. **🏗️ Solution Architect** — writes `.roo-orchestrator/docs/ImplementationGuide.md` and `.roo-orchestrator/docs/Tech-Choices.md`, and (re)generates stack rules in `.roo/rules-code/`

## Trunk-Based Slice Workflow

Daily coding uses **Code mode** plus a tiny slice contract:
1) Write 3–8 Acceptance Criteria bullets in `.roo-orchestrator/docs/Acceptance-Criteria.md`.
2) Plan in 3 lines: **Files** (1–2), **Command** (`make quickcheck`), **Artifact** (one file/result).
3) Ask Code mode to add tests first, make the smallest change, and run the command.
4) Commit to trunk in small, green steps.

Use Architect modes only at project start or major pivots to refresh PRD, UX, and Implementation Guide and to regenerate `.roo/rules-code/*`.

**Credits:** Big kudos to Switch Dimension for the inspiration and excellent write‑up on AI project setup.
Read the guide: <https://notes.switchdimension.com/AI-Dev-Project-Setup-Prompts-18fb5b07a94380758bd6e92baa5e8c98>
