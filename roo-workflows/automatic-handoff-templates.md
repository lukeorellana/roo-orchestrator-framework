# Automatic Handoff Templates for RAPM

This document provides standardized templates for each Roo mode to automatically generate handoff prompts when completing tasks. This eliminates manual prompt creation and ensures seamless task transitions.

## Core Handoff Template Structure

Every handoff prompt should follow this structure:

```
TASK COMPLETE: [Brief completion summary]

HANDOFF TO: [Target Mode Icon & Name]
COPY PROMPT BELOW:
================================
[Complete prompt for next mode]
================================
```

## Mode-Specific Handoff Templates

### 🏗️ Architect Mode → Implementation Modes

**When Architect Mode completes planning/coordination:**

```
TASK COMPLETE: [Planning phase/review completed]

HANDOFF TO: [💻 Code Mode / 🪲 Debug Mode / ❓ Ask Mode / 🪃 Orchestrator Mode]
COPY PROMPT BELOW:
================================
You are [Target Mode] for the [Project Name] project.

CONTEXT:
- Read Implementation_Plan.md [specific section/phase]
- Review Memory_Bank.md entries from [timeframe/specific entries]
- Current project status: [brief status]

TASK OBJECTIVE:
[Clear, specific objective from Implementation Plan]

DETAILED STEPS:
1. [Step 1]
2. [Step 2]
3. [Step 3]

EXPECTED OUTPUT:
- [Specific deliverable 1]
- [Specific deliverable 2]
- [Any files to create/modify]

LOGGING INSTRUCTIONS:
Log your work to Memory_Bank.md using the standard format. Include:
- Actions taken
- Files modified/created
- Any issues encountered
- Status (complete/blocked/in-progress)

NEXT STEPS AFTER COMPLETION:
Generate handoff prompt for [next mode] to handle [next task type].
================================
```

### 💻 Code Mode → Other Modes

**When Code Mode completes implementation:**

```
TASK COMPLETE: [Implementation summary - files created/modified]

HANDOFF TO: [🪲 Debug Mode / 🏗️ Architect Mode / ❓ Ask Mode]
COPY PROMPT BELOW:
================================
You are [Target Mode] for the [Project Name] project.

CONTEXT:
- Implementation just completed: [brief description]
- Files modified: [list of files]
- Read latest Memory_Bank.md entry for full details
- Review Implementation_Plan.md [relevant section]

TASK OBJECTIVE:
[Next logical step - testing/review/documentation/etc.]

FOCUS AREAS:
- [Specific area 1 - e.g., test new database functions]
- [Specific area 2 - e.g., verify error handling]
- [Specific area 3 - e.g., check integration points]

EXPECTED OUTPUT:
- [Specific deliverable]
- Issue report (if any problems found)
- Recommendations for next steps

LOG TO: Memory_Bank.md with standard format
================================
```

**Code Mode → Architect Mode (for review/next phase planning):**

```
TASK COMPLETE: [Implementation phase completed]

HANDOFF TO: 🏗️ Architect Mode (Project Manager)
COPY PROMPT BELOW:
================================
You are the Project Manager (Architect Mode) for [Project Name].

COMPLETED WORK:
- Implementation phase: [specific phase/feature completed]
- Files created/modified: [list]
- Status: [Complete/Blocked/Needs review]

REVIEW NEEDED:
Please review the latest Memory_Bank.md entries and determine:
1. Whether this phase meets requirements
2. What the next phase should be
3. Which mode should handle the next work

UPDATE REQUIRED:
- Update Implementation_Plan.md progress status
- Prepare next task assignment
- Coordinate next phase planning

DECISION POINTS:
- [Any specific decisions needed]
- [Technical choices to make]
- [Priority adjustments needed]
================================
```

### 🪲 Debug Mode → Other Modes

**When Debug Mode completes troubleshooting:**

```
TASK COMPLETE: [Debugging summary - issues found/fixed]

HANDOFF TO: [💻 Code Mode / 🏗️ Architect Mode / ❓ Ask Mode]
COPY PROMPT BELOW:
================================
You are [Target Mode] for the [Project Name] project.

DEBUGGING RESULTS:
- Issues found: [number and brief description]
- Issues resolved: [what was fixed]
- Outstanding issues: [what remains]
- Root causes: [technical details]

CONTEXT:
- Read Memory_Bank.md latest debugging session
- Review Implementation_Plan.md [relevant section]
- Check affected files: [list]

TASK OBJECTIVE:
[Next step based on debug results - implement fixes/update plan/document findings]

SPECIFIC ACTIONS:
1. [Action 1]
2. [Action 2]
3. [Action 3]

EXPECTED OUTPUT:
[Deliverable based on debug findings]

LOG TO: Memory_Bank.md
================================
```

### ❓ Ask Mode → Other Modes

**When Ask Mode completes research/documentation:**

```
TASK COMPLETE: [Research/documentation summary]

HANDOFF TO: [💻 Code Mode / 🏗️ Architect Mode / 🪲 Debug Mode]
COPY PROMPT BELOW:
================================
You are [Target Mode] for the [Project Name] project.

RESEARCH COMPLETED:
- Topic investigated: [topic]
- Key findings: [bullet points]
- Recommendations: [specific recommendations]
- Documentation created: [files/sections]

CONTEXT:
- Read Memory_Bank.md latest research entry
- Review new documentation in [file/location]
- Implementation_Plan.md [relevant section]

TASK OBJECTIVE:
[Apply research findings - implement solution/update plan/test approach]

IMPLEMENTATION GUIDANCE:
- [Specific guidance point 1]
- [Specific guidance point 2]
- [Technical considerations]

EXPECTED OUTPUT:
[Deliverable that applies the research]

LOG TO: Memory_Bank.md
================================
```

### 🪃 Orchestrator Mode → Other Modes

**When Orchestrator Mode completes complex workflow coordination:**

```
TASK COMPLETE: [Complex workflow summary]

HANDOFF TO: [💻 Code Mode / 🪲 Debug Mode / ❓ Ask Mode / 🏗️ Architect Mode]
COPY PROMPT BELOW:
================================
You are [Target Mode] for the [Project Name] project.

WORKFLOW COMPLETED:
- Multi-step process: [description]
- Phases completed: [list]
- Integration status: [status]
- Dependencies resolved: [list]

CONTEXT:
- Read Memory_Bank.md workflow entries
- Review Implementation_Plan.md updated sections
- Check integration points: [specific areas]

TASK OBJECTIVE:
[Next focused task after complex workflow]

FOCUS:
[Specific area now ready for focused work]

EXPECTED OUTPUT:
[Deliverable now possible due to workflow completion]

LOG TO: Memory_Bank.md
================================
```

## Implementation Guidelines

### For Each Mode

1. **Always include the task completion summary**
2. **Clearly specify which mode to switch to**
3. **Provide complete context references**
4. **Give specific, actionable objectives**
5. **Include clear expected outputs**
6. **Specify logging requirements**

### Handoff Decision Logic

**Code Mode handoffs to:**
- 🪲 Debug Mode: When implementation needs testing/verification
- 🏗️ Architect Mode: When phase is complete and needs review/next phase planning
- ❓ Ask Mode: When implementation reveals need for research/documentation

**Debug Mode handoffs to:**
- 💻 Code Mode: When bugs are identified and need fixes
- 🏗️ Architect Mode: When debugging reveals systemic issues requiring plan updates
- ❓ Ask Mode: When issues require research/investigation

**Ask Mode handoffs to:**
- 💻 Code Mode: When research provides implementation guidance
- 🏗️ Architect Mode: When research suggests plan modifications
- 🪲 Debug Mode: When research identifies testing strategies

**Architect Mode handoffs to:**
- 💻 Code Mode: For implementation tasks
- 🪲 Debug Mode: For testing/verification tasks
- ❓ Ask Mode: For research/documentation tasks
- 🪃 Orchestrator Mode: For complex multi-step workflows

**Orchestrator Mode handoffs to:**
- Any mode based on the next focused work type needed

## Benefits of This System

1. **Zero Context Loss**: Completing mode knows exactly what context next mode needs
2. **Reduced Cognitive Load**: User just copies and switches modes
3. **Consistent Quality**: Standardized handoffs ensure nothing is missed
4. **Faster Workflow**: Eliminates manual prompt creation step
5. **Better Continuity**: Seamless progression through Implementation Plan
6. **Smart Dispatching**: Each mode becomes an intelligent task router

This automatic handoff system maintains all the quality benefits of RAPM's structured approach while dramatically reducing the manual overhead of coordinating between Roo modes.