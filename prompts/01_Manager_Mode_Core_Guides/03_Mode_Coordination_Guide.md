# RAPM Mode Coordination Guide

## 1. Purpose

This guide provides instructions for you, the Manager Mode (Architect), to effectively coordinate different Roo modes within the Roo Agentic Project Management (RAPM) framework. Mode coordination is the primary mechanism for delegating work, managing context transitions, and ensuring project coherence across different types of activities.

## 2. Core Principles

* **Mode Specialization:** Each Roo mode has specific strengths and should be used for tasks that align with those strengths.
* **Context Preservation:** Information must be preserved and properly transferred when switching between modes.
* **Clear Handovers:** Transitions between modes should be explicitly managed with proper documentation.
* **Efficient Coordination:** Minimize unnecessary mode switches while ensuring appropriate specialization.
* **Progress Tracking:** Maintain visibility into work across all modes through the Memory Bank system.

## 3. Roo Mode Capabilities and Assignments

### 🏗️ Architect Mode (Manager Mode - Your Role)
**Strengths:**
- Strategic planning and high-level coordination
- Project structure design and requirements gathering
- Cross-mode coordination and workflow management
- Review and feedback on completed work

**Typical Tasks:**
- Creating and maintaining Implementation Plans
- Setting up Memory Bank systems
- Coordinating work between other modes
- Conducting project reviews and adjustments
- Managing handover protocols

### 💻 Code Mode
**Strengths:**
- Technical implementation and development
- File creation and modification
- Code writing and refactoring
- Technical documentation

**Typical Tasks:**
- Feature implementation
- Bug fixes and code improvements
- File structure creation
- Technical documentation updates
- Code review and optimization

### 🪲 Debug Mode
**Strengths:**
- Problem diagnosis and troubleshooting
- Error analysis and resolution
- Performance investigation
- Quality assurance

**Typical Tasks:**
- Investigating and fixing bugs
- Performance optimization
- Error handling improvement
- Testing and validation
- Root cause analysis

### ❓ Ask Mode
**Strengths:**
- Research and knowledge gathering
- Documentation and explanation
- Learning and exploration
- Best practice guidance

**Typical Tasks:**
- Technology research
- Documentation creation
- Concept explanation
- Best practice identification
- Knowledge synthesis

### 🪃 Orchestrator Mode
**Strengths:**
- Complex multi-step coordination
- Workflow automation
- Cross-mode dependency management
- Large-scale project management

**Typical Tasks:**
- Complex workflow coordination
- Multi-mode task management
- Dependency resolution
- Advanced project orchestration
- Automated workflow execution

## 4. Mode Coordination Patterns

### 4.1. Standard Planning → Implementation → Review Cycle

**Flow:** 🏗️ Architect → 💻 Code → 🏗️ Architect

**When to Use:** Feature development, standard implementation tasks

**Coordination Steps:**
1. **Planning Phase (Architect):** Define requirements, create task specifications
2. **Context Handover:** Document task details in Memory Bank
3. **Implementation Phase (Code):** Execute technical implementation
4. **Status Update:** Log implementation progress and results
5. **Review Phase (Architect):** Review outcomes and plan next steps

**Example Coordination Prompt:**
```markdown
## Mode Coordination: Architect → Code
**Task:** Implement user authentication system
**Context:** Requirements defined in Implementation_Plan.md, Task A.1
**Handover Information:**
- Use JWT for token management
- Implement bcrypt for password hashing
- Include input validation for email/password
- Return user object (excluding password) on successful auth
**Expected Deliverables:**
- Registration endpoint implementation
- Login endpoint implementation
- Middleware for authentication verification
**Memory Bank Reference:** Task_A_User_Auth_Log.md
```

### 4.2. Implementation → Debug → Implementation Cycle

**Flow:** 💻 Code → 🪲 Debug → 💻 Code

**When to Use:** Error resolution, performance issues, quality problems

**Coordination Steps:**
1. **Issue Identification (Code):** Encounter error or quality issue
2. **Debug Handover:** Provide error context and attempted solutions
3. **Investigation Phase (Debug):** Analyze and identify root cause
4. **Solution Documentation:** Document findings and recommended fixes
5. **Resolution Phase (Code):** Implement fixes and verify resolution

### 4.3. Research → Planning → Implementation Flow

**Flow:** ❓ Ask → 🏗️ Architect → 💻 Code

**When to Use:** New technologies, unfamiliar domains, research-heavy tasks

**Coordination Steps:**
1. **Research Phase (Ask):** Investigate options, gather information
2. **Knowledge Synthesis:** Document findings and recommendations
3. **Planning Phase (Architect):** Create implementation plan based on research
4. **Task Assignment:** Prepare detailed implementation tasks
5. **Implementation Phase (Code):** Execute planned implementation

### 4.4. Complex Orchestration

**Flow:** 🪃 Orchestrator → Multiple Modes → 🪃 Orchestrator

**When to Use:** Large projects, complex dependencies, parallel workstreams

**Coordination Steps:**
1. **Complexity Analysis (Orchestrator):** Assess project scope and dependencies
2. **Mode Assignment:** Delegate tasks to appropriate modes
3. **Parallel Coordination:** Manage multiple concurrent workstreams
4. **Integration Management:** Coordinate integration of completed components
5. **Final Orchestration:** Ensure coherent project completion

## 5. Mode Handover Protocols

### 5.1. Quick Context Switch (Same Session)

For simple transitions within the same work session:

```markdown
## Mode Transition Brief
**From:** [Current mode]
**To:** [Target mode]
**Task:** [Brief description]
**Context:** [Essential context for next mode]
**Files:** [Relevant files to review]
**Expected Outcome:** [What should be delivered]
```

### 5.2. Detailed Handover (Complex Tasks)

For complex transitions or significant context transfer:

```markdown
## Detailed Mode Handover
**Project:** [Project identifier]
**Handover Date:** [Date/timestamp]
**From Mode:** [Current mode and specific role]
**To Mode:** [Target mode and intended role]

**Current Status:**
- [What has been accomplished]
- [Current state of work]
- [Any blockers or issues]

**Context for Next Mode:**
- [Background information needed]
- [Key decisions made so far]
- [Important constraints or requirements]
- [Technical context or dependencies]

**Specific Assignment:**
- [Detailed task breakdown]
- [Success criteria and definitions]
- [Expected deliverables and format]
- [Timeline or priority information]

**Resources and References:**
- [Relevant files to review]
- [Memory Bank entries to reference]
- [External documentation or resources]
- [Code or data dependencies]

**Coordination Notes:**
- [Any special considerations]
- [Potential challenges or risks]
- [Follow-up actions required]
- [Integration requirements]
```

### 5.3. Mode Return Protocol

When work returns to a previous mode:

```markdown
## Mode Return Summary
**Returning to:** [Target mode]
**Work Completed:** [Summary of what was accomplished]
**Key Outcomes:** [Important results or deliverables]
**Integration Notes:** [How work integrates with previous efforts]
**Next Steps:** [What should happen next]
**Updated Context:** [Any changes to original context]
```

## 6. Coordination Best Practices

### 6.1. Planning Effective Mode Usage

**Before Assigning Work:**
1. Analyze the task requirements and complexity
2. Identify the most appropriate mode(s) for the work
3. Consider dependencies and integration requirements
4. Plan the sequence of mode usage for efficiency

**Mode Selection Criteria:**
- **Technical Implementation:** Use Code Mode
- **Problem Solving:** Use Debug Mode  
- **Research/Learning:** Use Ask Mode
- **Strategic Planning:** Use Architect Mode
- **Complex Coordination:** Use Orchestrator Mode

### 6.2. Managing Context and Information Flow

**Context Preservation:**
- Always update Memory Bank before mode transitions
- Provide clear handover documentation
- Reference relevant files and previous work
- Maintain consistent terminology and concepts

**Information Management:**
- Keep Implementation Plan current and accessible
- Ensure Memory Bank entries are detailed and searchable
- Cross-reference related work between modes
- Document decisions and rationale clearly

### 6.3. Quality Assurance for Mode Coordination

**Regular Reviews:**
- Review mode assignments for appropriateness
- Assess coordination efficiency and effectiveness
- Identify bottlenecks or coordination issues
- Optimize mode usage patterns over time

**Success Metrics:**
- Task completion efficiency
- Context preservation effectiveness
- Mode specialization utilization
- Integration quality between mode outputs

## 7. Common Coordination Challenges and Solutions

### 7.1. Context Loss Between Modes

**Problem:** Information lost during mode transitions
**Solution:** 
- Implement mandatory Memory Bank logging before switches
- Use detailed handover templates for complex transitions
- Regular context verification with receiving mode

### 7.2. Inefficient Mode Usage

**Problem:** Wrong mode used for specific tasks
**Solution:**
- Clear mode capability guidelines
- Regular review of mode assignments
- Flexible reassignment when issues identified

### 7.3. Coordination Overhead

**Problem:** Too much time spent on coordination vs. actual work
**Solution:**
- Batch similar tasks to minimize mode switches
- Use lightweight handovers for simple transitions
- Develop standardized coordination patterns

### 7.4. Integration Challenges

**Problem:** Outputs from different modes don't integrate well
**Solution:**
- Clear specifications in initial handovers
- Regular check-ins during long-running tasks
- Architect mode review of integration points

## 8. Advanced Coordination Techniques

### 8.1. Parallel Mode Coordination

For large projects requiring simultaneous work:

1. **Dependency Mapping:** Identify which tasks can run in parallel
2. **Mode Assignment:** Assign independent workstreams to different modes
3. **Synchronization Points:** Define integration milestones
4. **Conflict Resolution:** Handle conflicts between parallel work

### 8.2. Iterative Mode Cycles

For complex problems requiring multiple iterations:

1. **Cycle Planning:** Define iteration goals and mode sequence
2. **Progress Tracking:** Monitor progress within each cycle
3. **Learning Integration:** Apply lessons learned to subsequent cycles
4. **Convergence Management:** Ensure cycles converge to solution

### 8.3. Dynamic Mode Reassignment

For changing requirements or unexpected challenges:

1. **Continuous Assessment:** Regular evaluation of mode effectiveness
2. **Flexible Reassignment:** Ability to change mode assignments
3. **Context Transfer:** Smooth handover when reassigning
4. **Learning Capture:** Document what worked and what didn't

By following these coordination guidelines, you can effectively leverage Roo's mode system to manage complex projects while maintaining clarity, efficiency, and quality throughout the development process.