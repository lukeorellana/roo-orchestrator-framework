# README Addendum — APM-Style Init Interview

The `/init-orchestrator` command runs a **multi-round interview** modeled on APM’s initialization flow.
After the interview, Orchestrator generates:
- `Implementation_Plan.md`
- `BACKLOG.md` (≤45-minute tasks with acceptance checks)
- `Memory/ledger.md` and `Memory/handoffs.md` seed entries

If unknowns remain, Orchestrator will hand off to **Ask**; if evidence is needed (e.g., `tree` or `pytest` output),
it will hand off to **Code** to run the commands and paste the results.