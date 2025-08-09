# Roo Mode Coordination: Orchestrated Handoffs

**Start here:** Run in **Orchestrator** mode.
- Orchestrator emits a HANDOFF to Code/Debug/Ask and appends it to Memory/handoffs.md.
- Use the provided objective, commands, and acceptance tests.
- The target mode executes and returns a RESULT back to Orchestrator.
- Orchestrator reads the RESULT, updates plan/memory, and issues the next HANDOFF.

## Slash commands (lightweight)
Until Roo supports background auto-switching, use short trigger phrases in your message:
- `/to-code` — switch to Code mode with the most recent HANDOFF.
- `/to-debug` — switch to Debug mode with the most recent HANDOFF.
- `/to-ask` — switch to Ask mode with the most recent HANDOFF.

Map these to VS Code snippets or keybindings if desired.
