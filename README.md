# Roo Orchestrator Framework (APM-style for Roo)

A Roo-native orchestration workflow that mirrors Agentic Project Management (APM): Orchestrator plans and delegates; specialist modes implement, debug, or ask; results are verified and logged, and the loop repeats.

## What This Does
- Turns Roo into a multi-mode system with **Orchestrator / Code / Debug / Ask**.
- Standardizes **HANDOFF** and **RESULT** blocks so agents interoperate without copy/paste.
- Maintains project memory and a living plan to keep momentum and traceability.

## Prerequisites
- VS Code with the Roo extension
- A repo you want to work in (tests recommended but not required)

## Quick Start
1. **Switch to Orchestrator mode** in Roo.
2. **Initialize & interview:** run `/init-orchestrator`. It will:
   - Interview you in **3–4 rounds** (vision/scope → current state → architecture → roadmap).
   - Create/refresh **Implementation_Plan.md** and seed **Memory/** entries.
   - Build a **BACKLOG.md** of ≤45-minute tasks with acceptance checks.
   - If unknowns block progress, it will HANDOFF to **Ask** with top questions; if evidence is needed, HANDOFF to **Code** to run safe commands and paste outputs.
3. **Start the first tiny task:** run `/handoff-code`, describe a ≤45m objective, files, commands, and acceptance tests.
4. **Code mode implements** and returns a **RESULT** block with evidence.
5. **Orchestrator verifies evidence**, updates **Memory/** and the **BACKLOG**, then `/return-to-orchestrator` to continue the loop.
6. Repeat until done.

## Handoff System
**Orchestrator → Target (HANDOFF)**
```
<!-- HANDOFF: target=Code; return=Orchestrator -->
## Objective
<≤45m objective>

## Files_To_Touch
- <paths>

## Commands
- <cmds>

## Acceptance_Tests
- [ ] <check 1>
- [ ] <check 2>

## Context_Short
- <bullets>
```

**Target → Orchestrator (RESULT)**
```
<!-- RESULT: from=Code; to=Orchestrator; status=success -->
## Summary
<what changed>

## Changes
- <files>

## Evidence
- <logs/screens/test output>

## Next_Step_Suggestion
- <smallest next step>
```

## Project Memory
- `Memory/handoffs.md` — Append-only log of handoffs and results
- `Memory/ledger.md` — Summaries of notable results and decisions
- `Implementation_Plan.md` — Living plan (Orchestrator maintains)
- `BACKLOG.md` — ≤45-minute tasks with acceptance checks

## Modes & Config
- `.roomodes` defines the four custom modes and guardrails (≤45m scope, format enforcement, memory updates).
- `.roo/commands/` provides slash commands to insert exact blocks and switch modes.

### Slash Commands (Reference)
- `/init-orchestrator` — APM-style multi-round interview + plan/backlog/memory
- `/handoff-code` — delegate a small implementation task
- `/handoff-debug` — delegate a diagnosis/fix
- `/handoff-ask` — delegate clarification
- `/result-success`, `/result-fail` — standardized result blocks
- `/return-to-orchestrator` — update memory and switch back

## Best Practices
- Keep each handoff ≤45 minutes; split bigger items into backlog tasks.
- Always include **Acceptance_Tests** and require **Evidence** in RESULTs.
- Orchestrator updates **Memory/** and **Implementation_Plan.md** continuously.

## Troubleshooting
- Handoffs not triggering? Ensure you used the slash command templates.
- Modes not switching? Use `/return-to-orchestrator` after a RESULT.
- Missing context? Check `Memory/handoffs.md`, `Memory/ledger.md`, and `Implementation_Plan.md`.

---
This framework eliminates copy/paste and gives you APM-like orchestration—inside Roo.