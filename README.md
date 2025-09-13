# spec-driven-development

Spec-first, test-gated AI coding with Roo.

**Loop:** AC → Plan → Tests-first → Minimal code → One command → Evidence → Commit to trunk.

## Why
- Clear “done” up front (Acceptance Criteria).
- Small, green, trunk-friendly commits.
- Lower token spend and less rework.

## How to use

1) **Run Architects once** (Product → UX → Solution) to generate `docs/`:
   - 🖽️ Product Architect → `docs/PRD.md`, `docs/Assumptions.md`
   - 🎨 UX Architect → `docs/UX-Brief.md`, `docs/Acceptance-Criteria.md`
   - 🏗️ Solution Architect → `docs/ImplementationGuide.md`, `docs/Tech-Choices.md` and (optionally) stack-specific `.roo/rules-code/*`
   - Also maintains `docs/Slice-Backlog.md` (rolling-wave backlog).

2) **Create a slice spec fast**:
   - Switch to **📝 Slice Spec Writer** mode.
   - Give a one-line goal (e.g., “TypeORM DataSource using Azure AD token”).
   - It writes a new section in `docs/Acceptance-Criteria.md` with:
     - 3–8 AC bullets
     - 3-line Plan (Files 1–2, one Command, one Artifact)
     - Updates `docs/Slice-Backlog.md` if present.

3) **Execute the slice**:
   - Switch to **Code** mode.
   - Code mode enforces the gate (see `.roo/rules-code/99-preflight.md`):
     - If AC/Plan missing → replies **BLOCKED** and gives a template.
     - If AC were only in chat → auto-creates/updates `docs/Acceptance-Criteria.md`.
     - Tests-first → minimal change → run **one command** → show trimmed logs.
   - Make a small trunk commit.

4) **Repeat**
   - New chat per slice.
   - Let Solution Architect refresh `docs/Slice-Backlog.md` when scope changes.

### Slice Backlog
`docs/Slice-Backlog.md` is owned by Solution Architect. Keep ~12–20 small slices, with the top 5 fully specified (ready blocks).

### Credits
Inspired in part by Switch Dimension’s “AI Dev Project Setup”.
