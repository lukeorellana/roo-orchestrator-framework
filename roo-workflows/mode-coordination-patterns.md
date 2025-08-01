# Roo Mode Coordination Patterns for RAPM

This document provides proven patterns for coordinating work between different Roo modes within the RAPM framework.

## Core Coordination Principles

1. **Clear Mode Responsibilities:** Each mode has specific strengths and should be used accordingly
2. **Structured Handovers:** Context must be preserved when transitioning between modes
3. **Memory Bank Integration:** All modes contribute to and reference the shared Memory Bank
4. **Todo List Synchronization:** Progress tracking through Roo's todo system

## Standard Mode Coordination Patterns

### Pattern 1: Planning → Implementation → Review

**Flow:** 🏗️ Architect → 💻 Code → 🏗️ Architect

**Use Case:** Feature development with planning and review cycles

**Steps:**
1. **Architect Mode:** Create implementation plan and task breakdown
2. **Mode Handover:** Document current context in Memory Bank
3. **Code Mode:** Implement planned features
4. **Context Return:** Log implementation results to Memory Bank
5. **Architect Mode:** Review results and plan next steps

**Example Handover:**
```markdown
## Mode Transition: Architect → Code
**Context:** User authentication system implementation
**Current Status:** Plan created in Implementation_Plan.md
**Next Actions:** Implement user registration endpoint as specified in Task A.1
**Key Constraints:** Use bcrypt for password hashing, return JWT tokens
**Memory Bank Reference:** See "Task A.1 Planning" entry
```

### Pattern 2: Implementation → Debug → Implementation

**Flow:** 💻 Code → 🪲 Debug → 💻 Code

**Use Case:** Development with error resolution

**Steps:**
1. **Code Mode:** Attempt implementation
2. **Error Encountered:** Log error details to Memory Bank
3. **Debug Mode:** Analyze and resolve the issue
4. **Solution Documentation:** Document solution in Memory Bank
5. **Code Mode:** Apply solution and continue implementation

**Debug Mode Activation:**
```markdown
## Debug Session Request
**Error Context:** [Specific error message/behavior]
**Code Location:** [File and line references]
**Attempted Solutions:** [What was already tried]
**Environment:** [Relevant system/dependency info]
```

### Pattern 3: Research → Planning → Implementation

**Flow:** ❓ Ask → 🏗️ Architect → 💻 Code

**Use Case:** Projects requiring research and knowledge gathering

**Steps:**
1. **Ask Mode:** Research technologies, best practices, requirements
2. **Knowledge Documentation:** Create research summaries in Memory Bank
3. **Architect Mode:** Create implementation plan based on research
4. **Planning Documentation:** Update Implementation_Plan.md
5. **Code Mode:** Execute planned implementation

### Pattern 4: Complex Multi-Mode Orchestration

**Flow:** 🪃 Orchestrator → Multiple Modes → 🪃 Orchestrator

**Use Case:** Large-scale projects with complex dependencies

**Steps:**
1. **Orchestrator Mode:** Analyze project complexity and dependencies
2. **Mode Assignment:** Delegate specific tasks to appropriate modes
3. **Parallel Coordination:** Monitor multiple workstreams
4. **Integration:** Coordinate integration of completed components
5. **Final Review:** Comprehensive project review and completion

## Context Handover Protocols

### Lightweight Handover (Same Session)

For simple mode transitions within the same work session:

```markdown
## Quick Context Switch
**From Mode:** [Current mode]
**To Mode:** [Target mode]
**Task:** [Brief task description]
**Context:** [Key context needed]
**Expected Output:** [What should be delivered]
```

### Detailed Handover (Complex Transitions)

For complex transitions or when significant context is involved:

```markdown
## Detailed Mode Handover
**Project:** [Project name/identifier]
**From Mode:** [Current mode and role]
**To Mode:** [Target mode and role]
**Handover Date:** [Date/timestamp]

**Current Status:**
- [Key accomplishments]
- [Current state of work]
- [Open items/blockers]

**Context for Next Mode:**
- [Relevant background information]
- [Key decisions made]
- [Important constraints/requirements]

**Specific Tasks:**
- [Detailed task breakdown]
- [Success criteria]
- [Expected deliverables]

**Resources:**
- [Relevant files/documentation]
- [Memory Bank references]
- [External resources]

**Notes:**
- [Any special considerations]
- [Potential challenges]
- [Recommendations]
```

## Todo List Integration Patterns

### Task Progression Tracking

Use Roo's todo system to track progress across modes:

```markdown
## Project Todo List
- [x] Requirements gathering (Ask Mode)
- [x] Initial architecture design (Architect Mode)
- [-] Core implementation (Code Mode) - In Progress
- [ ] Error handling implementation (Code Mode)
- [ ] Testing and debugging (Debug Mode)
- [ ] Documentation update (Ask Mode)
- [ ] Final review (Architect Mode)
```

### Mode-Specific Todo Management

Each mode can maintain its specific todos while contributing to the overall project progress:

**Architect Mode Todos:**
- [ ] Review implementation plan
- [ ] Coordinate next sprint planning
- [ ] Update project roadmap

**Code Mode Todos:**
- [ ] Implement user authentication
- [ ] Add input validation
- [ ] Write unit tests

**Debug Mode Todos:**
- [ ] Investigate performance issue
- [ ] Fix memory leak
- [ ] Update error handling

## Anti-Patterns to Avoid

### 1. Mode Confusion
**Problem:** Using wrong mode for specific tasks
**Solution:** Stick to mode specializations, use handover protocols

### 2. Context Loss
**Problem:** Information lost during mode transitions
**Solution:** Mandatory Memory Bank logging before mode switches

### 3. Inefficient Mode Switching
**Problem:** Too frequent mode changes disrupting workflow
**Solution:** Batch similar work, plan mode usage strategically

### 4. Incomplete Handovers
**Problem:** Next mode lacks necessary context
**Solution:** Use detailed handover templates, verify context transfer

## Advanced Coordination Techniques

### Parallel Mode Coordination

For large projects, coordinate multiple workstreams:

1. **Orchestrator Planning:** Map out parallel work tracks
2. **Mode Assignment:** Assign specific modes to different tracks
3. **Synchronization Points:** Define integration milestones
4. **Conflict Resolution:** Handle conflicts between parallel tracks

### Dynamic Mode Selection

Adapt mode usage based on current needs:

1. **Context Assessment:** Evaluate current project state
2. **Mode Mapping:** Map tasks to optimal modes
3. **Efficiency Optimization:** Minimize unnecessary mode switches
4. **Progress Monitoring:** Track effectiveness of mode choices

## Monitoring and Optimization

### Coordination Metrics

Track the effectiveness of mode coordination:

- **Mode Switch Frequency:** How often modes are changed
- **Context Preservation:** How well context is maintained
- **Task Completion Rate:** Efficiency of mode-specific work
- **Error Resolution Time:** Speed of debug cycles

### Continuous Improvement

- **Pattern Documentation:** Document successful coordination patterns
- **Anti-Pattern Identification:** Identify and avoid problematic patterns
- **Workflow Refinement:** Continuously improve coordination processes
- **Knowledge Sharing:** Share effective patterns with team/community

By following these coordination patterns, you can maximize the effectiveness of Roo's mode system while maintaining the structured approach that makes RAPM powerful for complex project management.