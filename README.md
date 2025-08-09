# Roo Orchestrator Framework

This fork packages an **Orchestrator-first** workflow for Roo so you don't have to copy/paste context between modes.

## How to use
1. Open this repo in VS Code with the Roo extension.
2. Switch to **Orchestrator** mode.
3. Ask: “Plan the smallest next step for this repo and emit a HANDOFF.”
4. Use `/to-code`, `/to-debug`, or `/to-ask` (type it in the chat) to switch modes with the most recent handoff.
5. The target mode executes, appends a **RESULT**, and returns to Orchestrator.
6. Repeat until done.

## Hand-off contract
Append-only, machine-parsable blocks in **Memory/handoffs.md**:

**Handoff (Orchestrator -> {Code|Debug|Ask})**
```
<!-- HANDOFF: target=Code; return=Orchestrator -->
## Objective
…
## Files_To_Touch
- …
## Commands
- …
## Acceptance_Tests
- [ ] …
## Context_Short
- bullet
```

**Result (Mode -> Orchestrator)**
```
<!-- RESULT: from=Code; to=Orchestrator; status=success -->
## Summary
## Changes
- …
## Evidence
- …
## Next_Step_Suggestion
```

## Notes
- Keep objectives <= 45 minutes work.
- Acceptance tests must be verifiable.
- Memory is append-only for auditability.
