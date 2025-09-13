# Roo Slice-First Workflow

This repo demonstrates a slim, repo-native loop: tiny slices, tests first, and evidence.

## Trunk-Based Slice Workflow

Daily coding uses **Code mode** plus a tiny slice contract:
1) Write 3–8 Acceptance Criteria bullets in `docs/Acceptance-Criteria.md`.
2) Plan in 3 lines: **Files** (1–2), **Command** (e.g., `make quickcheck`), **Artifact** (one file/result).
3) Ask Code mode to add tests first, make the smallest change, and run the command.
4) Commit to trunk in small, green steps.

Use **🧭 Product → 🎨 UX → 🏗️ Solution Architect** modes only at project start or major pivots to refresh PRD/UX/Implementation Guide and regenerate `.roo/rules-code/*`.
Credit: Switch Dimension’s guide linked above.

## Memory & Handoff
- `docs/DecisionLog.md` – short rationale entries and evidence links.
- `schemas/handoff.schema.json` – JSON schema for slice handoff requests.
- `schemas/result.schema.json` – JSON schema for slice results with evidence logs.

## Credits
This setup is inspired in part by Switch Dimension’s “AI Dev Project Setup” guide.
<https://notes.switchdimension.com/AI-Dev-Project-Setup-Prompts-18fb5b07a94380758bd6e92baa5e8c98>
