Insert this in **Orchestrator** mode to run an APM-style initialization interview,
then generate the plan, memory, and backlog.

<!-- INIT: mode=Orchestrator; style=APM -->
## Instructions
- Run a **multi-round interview** (3–4 rounds max) to understand the project.
- In each round, ask only the questions for that round, then WAIT for answers.
- After the interview completes, produce the requested artifacts (below).
- Keep outputs concise and action-oriented. Use checklists whenever possible.

## Round 1 — Vision & Scope
Ask:
1) Primary goal(s) and success criteria (how will we know we’re done)?
2) In-scope vs **explicitly** out-of-scope?
3) Key stakeholders and decision-makers; who approves scope changes?
4) Target users and primary user journeys?
5) Hard constraints (deadline, budget, compliance, security, data residency)?

## Round 2 — Current State & Assets
Ask:
1) What exists today (codebases, docs, designs, APIs, datasets)?
2) Repos/dirs to consider first (give paths)?
3) Known issues, blockers, or risks already identified?
4) Tooling & environments (build, test, CI/CD, cloud, secrets handling)?
5) Definition of Done for a typical task (tests? review? deployment? docs)?

## Round 3 — Architecture & Tech Choices
Ask:
1) Languages/frameworks, versions, and must-use libraries?
2) Interfaces/contracts that must not break (APIs, events, schemas)?
3) Performance/SLOs, capacity, or data quality targets?
4) Observability expectations (logs, metrics, traces, dashboards)?
5) Security/privacy requirements (authZ/authN, PII/PHI, key management)?

## Round 4 — Roadmap & Risks (optional if already clear)
Ask:
1) Near-term milestones (2–4 weeks), with dates if known?
2) High-risk bets or areas of uncertainty to de-risk early?
3) Rollback/mitigation strategy if a milestone slips?
4) Any non-negotiables (stakeholder promises, demo dates, contracts)?

## Produce (after interview)
1) **Implementation_Plan.md** — include:
   - Goals, Constraints
   - Deliverables (with acceptance criteria)
   - Work Breakdown by Milestone → Tasks (each task with guiding notes)
   - Ownership: which Roo mode (Code/Debug/Ask) is expected to execute
2) **BACKLOG.md** — prioritized list of ≤45-minute tasks, with **Acceptance** checks.
3) **Memory/ledger.md** — init summary (what we learned, decisions taken).
4) **Memory/handoffs.md** — if unknowns remain, **HANDOFF to Ask** with top questions.
5) If evidence is needed (tree, tests, configs), emit a **HANDOFF to Code** to run safe commands and paste outputs back.

## Acceptance (for Orchestrator to self-check)
- [ ] Interview completed in ≤4 rounds
- [ ] Implementation_Plan.md created/updated
- [ ] BACKLOG.md created with ≤45-minute tasks
- [ ] Memory files updated
- [ ] Handoff(s) created if unknowns block the next step

## Next Step
- After artifacts are ready, propose the **smallest next task** and insert `/handoff-code` pre-filled with that task.