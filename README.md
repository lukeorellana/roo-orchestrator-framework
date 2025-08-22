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

1. Paste this prompt into Roo task to have Agent bootstrap folders into your project repo:
```
System objective: Bootstrap this repo with the Roo Orchestrator Framework.

Do the following atomically:
1) Detect OS (macOS/Linux or Windows PowerShell).
2) In a temp directory, run:
   git clone https://github.com/lukeorellana/roo-orchestrator-framework <temp>
3) Copy into the current repo root:
   - <temp>/.roomodes                       → .roomodes   (overwrite)
   - <temp>/.roo/commands/**                → .roo/commands/ (merge/overwrite)
   - <temp>/Implementation_Plan.md          → Implementation_Plan.md (only if missing)
   - <temp>/BACKLOG.md                      → BACKLOG.md (only if missing)
   - <temp>/Memory/handoffs.md, ledger.md   → Memory/ (only if missing)
4) Print a short “Bootstrap OK” report listing created/updated paths.
5) Do NOT modify any other files.

Acceptance checks (must pass):
- `.roomodes` present in repo root and contains the custom modes.
- `.roo/commands/` exists and includes the slash commands (e.g., init/handoff/result/return).
- If missing before, `Implementation_Plan.md`, `BACKLOG.md`, and `Memory/{handoffs.md,ledger.md}` now exist.
- Final console output shows each path written.

If shell access is unavailable, tell me exactly which commands to run for my OS instead of proceeding.

```
2. **Switch to Orchestrator mode** in Roo.
3. **Initialize & interview:** run `/init-orchestrator`. It will:
   - Interview you in **3–4 rounds** (vision/scope → current state → architecture → roadmap).
   - Create/refresh **Implementation_Plan.md** and seed **Memory/** entries.
   - Build a **BACKLOG.md** of ≤45-minute tasks with acceptance checks.
   - If unknowns block progress, it will HANDOFF to **Ask** with top questions; if evidence is needed, HANDOFF to **Code** to run safe commands and paste outputs.
4. **Start the first tiny task:** run `/handoff-code`, describe a ≤45m objective, files, commands, and acceptance tests.
5. **Code mode implements** and returns a **RESULT** block with evidence.
6. **Orchestrator verifies evidence**, updates **Memory/** and the **BACKLOG**, then `/return-to-orchestrator` to continue the loop.
7. Repeat until done.

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
