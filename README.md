# Roo Agentic Project Management

A structured workflow framework for Roo that enables coordinated handoffs between specialized AI modes for complex project management and development tasks.

## What This Does

This framework transforms Roo from a single-mode assistant into an orchestrated multi-agent system where different specialized modes work together on complex projects:

- **Orchestrator Mode**: Plans tasks, coordinates between modes, and maintains project memory
- **Code Mode**: Implements features, writes code, and creates tests
- **Debug Mode**: Runs applications, debugs issues, and verifies functionality  
- **Ask Mode**: Gathers missing information and clarifies requirements

Instead of manually copying context between modes, this system maintains structured handoffs and shared memory for seamless collaboration.

## Prerequisites

- VS Code with the Roo extension installed
- A project that could benefit from multi-step development workflows

## Quick Start

1. **Open this repository in VS Code** with the Roo extension active

2. **Switch to Orchestrator mode** in Roo

3. **Start the workflow** by asking:
   ```
   Plan the smallest next step for this repo and emit a HANDOFF.
   ```

4. **Follow the handoffs** using these commands:
   - Type `/to-code` to switch to Code mode with the current handoff
   - Type `/to-debug` to switch to Debug mode with the current handoff  
   - Type `/to-ask` to switch to Ask mode with the current handoff

5. **Each mode will**:
   - Execute the handoff instructions
   - Complete the assigned work
   - Return results to Orchestrator
   - Automatically switch back to Orchestrator mode

6. **Repeat** until your project is complete

## How It Works

### The Handoff System

All coordination happens through structured handoffs stored in [`Memory/handoffs.md`](Memory/handoffs.md:1):

**Handoff Format (Orchestrator → Target Mode)**:
```markdown
<!-- HANDOFF: target=Code; return=Orchestrator -->
## Objective
Clear description of what needs to be accomplished

## Files_To_Touch  
- path/to/file1.js
- path/to/file2.py

## Commands
- npm test
- npm run build

## Acceptance_Tests
- [ ] Feature works as expected
- [ ] All tests pass

## Context_Short
- Key background information
- Important constraints
- Relevant decisions made
```

**Result Format (Target Mode → Orchestrator)**:
```markdown
<!-- RESULT: from=Code; to=Orchestrator; status=success -->
## Summary
What was accomplished

## Changes
- Modified file1.js to add new feature
- Created test file for validation

## Evidence  
- Test output showing success
- Screenshots or logs

## Next_Step_Suggestion
Recommended next action
```

### Project Memory

The system maintains persistent memory in the [`Memory/`](Memory/) directory:

- **[`handoffs.md`](Memory/handoffs.md)** - Complete log of all handoffs and results
- **[`ledger.md`](Memory/ledger.md)** - Timeline summary of orchestrator decisions
- **`Implementation_Plan.md`** - High-level project plan (created automatically)

### Mode Specializations

Each mode has specific capabilities defined in [`prompts/`](prompts/):

- **[Orchestrator](prompts/orchestrator.system.md)**: Plans, coordinates, maintains memory
- **[Code](prompts/code.system.md)**: Writes code, implements features, creates tests  
- **[Debug](prompts/debug.system.md)**: Runs tests, debugs issues, verifies functionality
- **[Ask](prompts/ask.system.md)**: Gathers requirements, clarifies ambiguities

## Project Structure

```
roo-agentic-project-management/
├── .roomodes                          # Mode configurations
├── README.md                          # This file
├── Memory/                            # Project memory (append-only)
│   ├── handoffs.md                    # Complete handoff log
│   └── ledger.md                      # Timeline summary
├── prompts/                           # System prompts for each mode
│   ├── orchestrator.system.md         # Orchestrator mode instructions
│   ├── code.system.md                 # Code mode instructions  
│   ├── debug.system.md                # Debug mode instructions
│   └── ask.system.md                  # Ask mode instructions
└── roo-workflows/                     # Workflow documentation
    └── mode-coordination-patterns.md  # Usage patterns and examples
```

## Best Practices

- **Keep objectives small**: Each handoff should represent ≤ 45 minutes of work
- **Use specific acceptance tests**: Make success criteria verifiable and measurable
- **Maintain context**: The Memory/ directory preserves all decisions and context
- **Trust the process**: Let each mode complete its work before moving to the next step

## Benefits

- **Eliminates context switching overhead**: No manual copy/paste between modes
- **Maintains project memory**: All decisions and changes are tracked
- **Enables complex workflows**: Break large projects into manageable, coordinated steps
- **Provides audit trail**: Complete history of what was done and why
- **Reduces cognitive load**: Each mode focuses on its specialty without losing the big picture

## Customization

You can modify the behavior by editing:
- **[`.roomodes`](.roomodes)** - Add or modify mode configurations
- **[`prompts/*.system.md`](prompts/)** - Customize how each mode behaves
- **[`roo-workflows/`](roo-workflows/)** - Document your own workflow patterns

## Troubleshooting

- **Handoffs not working?** Check that you're in Orchestrator mode when starting
- **Modes not switching?** Use the exact slash commands: `/to-code`, `/to-debug`, `/to-ask`
- **Lost context?** Check [`Memory/handoffs.md`](Memory/handoffs.md) for the complete history
- **Need to restart?** Orchestrator can pick up from any point using the Memory/ files

---

This framework transforms ad-hoc AI assistance into a structured, coordinated development process that scales with project complexity while maintaining full traceability.
