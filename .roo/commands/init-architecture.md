Insert this in **Orchestrator** mode to run the architecture kickoff sequence before normal orchestration.

<!-- INIT: mode=Orchestrator; style=Architecture -->
## Steps
1. **Product Architect**
   - Switch to 🧭 Product Architect.
   - Ask the "Kickoff 12" in a single message and wait for answers.
   - Write `docs/PRD.md` and `docs/Assumptions.md`.
   - Append "## Handoff → UX Architect" to `docs/PRD.md` with 5–8 bullets of open items.
2. **UX Architect**
   - Switch to 🎨 UX Architect.
   - Read `docs/PRD.md` and `docs/Assumptions.md`.
   - Create/overwrite `docs/UX-Brief.md` and `docs/Acceptance-Criteria.md`.
   - Append "## Handoff → Solution Architect" to `docs/UX-Brief.md`.
3. **Solution Architect**
   - Switch to 🏗️ Solution Architect.
   - Read `docs/PRD.md`, `docs/UX-Brief.md`, `docs/Acceptance-Criteria.md`, and `docs/Assumptions.md`.
   - Clarify up to **3 questions** only if blocking; otherwise proceed with assumptions.
   - Create/overwrite `docs/ImplementationGuide.md` and `docs/Tech-Choices.md`.
   - Generate or overwrite `.roo/rules-code/00-style.md`, `10-testing.md`, `20-architecture.md`, `30-pipelines.md`, `40-security.md`, and stack-specific rule files as needed.
4. **Return to Orchestrator**
   - Switch back to Orchestrator mode.
   - Read all docs and `.roo/rules-code` rules.
   - Produce `.roo-orchestrator/Memory/Implementation_Plan.md`, `.roo-orchestrator/Memory/BACKLOG.md`, and update `.roo-orchestrator/Memory/ledger.md`.
   - Propose the smallest next task and insert `/handoff-code` pre-filled with that task.

## Acceptance
- All docs and `.roo/rules-code` files created or updated.
- Orchestrator memory initialized and first task proposed.
