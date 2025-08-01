# Manager Task Initiation Guide

## How the Manager (Architect Mode) Kicks Off Tasks

**Yes! The Manager can absolutely initiate and kick off tasks for other Roo modes.** This is a core function of the Manager role in RAPM - preparing detailed task assignments and coordinating their execution.

## 1. Manager Task Initiation Workflow

### Step 1: Task Preparation (Architect Mode)

```markdown
## Manager Task Initiation Process

### A. Review Implementation Plan
1. Use read_file to review Implementation_Plan.md
2. Identify next task to be executed
3. Determine appropriate Roo mode for the task

### B. Gather Context
1. Use search_files to find relevant background information
2. Use read_file to review related Memory Bank entries
3. Use list_files to understand current project structure

### C. Prepare Task Assignment
1. Create detailed task assignment document
2. Include all necessary context and requirements
3. Specify expected deliverables and success criteria
```

### Step 2: Task Assignment Creation

The Manager creates a comprehensive task assignment file:

```markdown
## Example: Manager Creates Task Assignment

### Task Assignment File: `tasks/Task_A2_API_Endpoints.md`

# Task Assignment: User Registration API Endpoint

## Assigned Mode: 💻 Code Mode

## Context from Previous Work
Based on Task A1 completion (Database Schema), we now have:
- User table structure defined in `models/User.js`
- Database migration completed
- Sequelize model ready for use

## Task Objective
Implement the user registration API endpoint with full validation and security measures.

## Detailed Requirements
1. **Endpoint Setup**
   - Create POST /api/users/register endpoint
   - Use Express.js routing
   - Apply input validation middleware

2. **Security Implementation**
   - Hash passwords using bcrypt (cost factor 12)
   - Validate email format and uniqueness
   - Implement rate limiting for registration attempts

3. **Database Integration**
   - Use the User model from Task A1
   - Handle duplicate email errors gracefully
   - Return appropriate success/error responses

## Required Files to Modify/Create
- `routes/auth.js` - Main endpoint implementation
- `middleware/validation.js` - Input validation
- `tests/auth.test.js` - Unit tests for endpoint

## Expected Deliverables
- [ ] Working registration endpoint
- [ ] Input validation implementation
- [ ] Error handling for edge cases
- [ ] Basic unit tests
- [ ] API documentation update

## Context Files to Review
- `models/User.js` (from Task A1)
- `Implementation_Plan.md` (Task A2 details)
- `Memory/Phase_1_Backend/Task_A1_Schema_Log.md` (previous work)

## Success Criteria
- Endpoint accepts valid registration requests
- Passwords are properly hashed before storage
- Proper error responses for invalid inputs
- No duplicate email registrations allowed
- Tests pass and cover main scenarios

## Memory Bank Logging
Upon completion, log all work to:
`Memory/Phase_1_Backend/Task_A2_Registration_Log.md`

Include implementation details, decisions made, and any issues encountered.

## Next Steps After Completion
Notify Manager (Architect Mode) for review and assignment of Task A3 (Login Endpoint).
```

### Step 3: Task Handover Process

```markdown
## Manager Handover Protocol

### A. Task Assignment Delivery
1. Manager creates task assignment file using write_to_file
2. Updates project todo list using update_todo_list
3. Prepares handover summary for user

### B. Mode Coordination Message
Manager provides this to the user for Code Mode:

"Task A2 is ready for execution. Please switch to Code Mode and use the 
following task assignment:

📁 Task File: tasks/Task_A2_API_Endpoints.md
🎯 Objective: Implement user registration API endpoint
⏱️ Estimated Time: 4-6 hours
📋 Dependencies: Task A1 (completed)
📝 Log Results To: Memory/Phase_1_Backend/Task_A2_Registration_Log.md

The task assignment file contains all requirements, context, and success criteria.
Please read the full assignment before beginning implementation."

### C. Context Preparation
Manager ensures all referenced files are accessible and up-to-date
```

## 2. Advanced Task Initiation Patterns

### Pattern 1: Sequential Task Chain

```markdown
## Manager Coordinates Task Sequence

### Scenario: Complete Authentication System

**Manager Planning (Architect Mode):**
1. Reviews Implementation Plan for authentication phase
2. Identifies task dependencies: Schema → Registration → Login → Middleware
3. Prepares first task assignment (Registration API)
4. Plans subsequent task assignments

**Task A2 Completion Trigger:**
When Code Mode completes registration endpoint:
1. Manager reviews Memory Bank log
2. Validates deliverables against requirements
3. Immediately prepares Task A3 assignment (Login API)
4. Kicks off next task with updated context

**Automatic Task Chain:**
- Task A2 (Registration) → Manager Review → Task A3 (Login)
- Task A3 (Login) → Manager Review → Task A4 (Middleware)
- Task A4 (Middleware) → Manager Review → Phase 1 Complete
```

### Pattern 2: Parallel Task Coordination

```markdown
## Manager Coordinates Parallel Work

### Scenario: Frontend + Backend Development

**Manager Orchestration:**
1. Identifies independent tasks that can run in parallel
2. Prepares multiple task assignments simultaneously
3. Coordinates parallel execution across different modes

**Parallel Task Initiation:**
Task B1: Frontend Components (Code Mode)
Task B2: API Documentation (Ask Mode)
Task B3: Integration Testing Plan (Debug Mode)

All tasks can run simultaneously with periodic Manager coordination.
```

### Pattern 3: Problem-Driven Task Creation

```markdown
## Manager Responds to Issues

### Scenario: Bug Discovered During Development

**Manager Response Process:**
1. Receives bug report from Debug Mode
2. Analyzes issue and determines root cause area
3. Creates urgent task assignment for appropriate mode
4. Prioritizes bug fix in project workflow

**Dynamic Task Creation:**
```markdown
# URGENT Task Assignment: Login Timeout Bug Fix

## Created By: Manager (Architect Mode)
## Priority: HIGH
## Assigned Mode: 🪲 Debug Mode

## Issue Context
User reports from Memory Bank indicate login timeouts after 30 seconds.
Initial investigation needed to identify root cause.

## Immediate Actions Required
1. Reproduce the login timeout issue
2. Analyze server logs and network requests
3. Identify bottleneck (database, network, processing)
4. Propose fix strategy

## Resources
- User report: Memory/Issues/Login_Timeout_Report.md
- Related code: routes/auth.js, middleware/auth.js
- Test environment: staging server credentials in .env.staging
```

## 3. Manager Task Assignment Templates

### Template 1: Implementation Task

```markdown
# Task Assignment Template: Implementation

## Task ID: [Unique identifier]
## Assigned Mode: [Specific Roo mode]
## Priority: [High/Medium/Low]
## Estimated Time: [Hours/days]

## Objective
[Clear, specific goal for the task]

## Context from Previous Work
[Information from completed tasks and Memory Bank]

## Requirements
1. [Specific requirement 1]
2. [Specific requirement 2]
3. [Specific requirement 3]

## Technical Specifications
- [Framework/library requirements]
- [Coding standards to follow]
- [Integration requirements]

## Files to Modify/Create
- [Specific file paths]
- [New files needed]

## Expected Deliverables
- [ ] [Deliverable 1]
- [ ] [Deliverable 2]
- [ ] [Deliverable 3]

## Success Criteria
- [How to know task is complete]
- [Quality standards to meet]

## Memory Bank Logging
Log completion to: [Specific Memory Bank file]

## Next Steps
[What happens after completion]
```

### Template 2: Research Task

```markdown
# Task Assignment Template: Research

## Research Topic: [Specific area to investigate]
## Assigned Mode: ❓ Ask Mode
## Deadline: [When research is needed]

## Research Questions
1. [Specific question 1]
2. [Specific question 2]
3. [Specific question 3]

## Required Depth
[Surface level / Detailed analysis / Comprehensive study]

## Deliverables
- [Research summary document]
- [Recommendations]
- [Implementation guidance]

## Sources to Consider
- [Official documentation]
- [Best practice guides]
- [Community resources]

## Application Context
[How research will be used in project]
```

### Template 3: Debugging Task

```markdown
# Task Assignment Template: Debugging

## Issue: [Problem description]
## Assigned Mode: 🪲 Debug Mode
## Priority: [Critical/High/Medium/Low]

## Problem Symptoms
- [Observed behavior]
- [Error messages]
- [Performance issues]

## Reproduction Steps
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Investigation Areas
- [Code sections to examine]
- [Log files to review]
- [Test cases to run]

## Expected Resolution
- [Root cause identification]
- [Fix implementation]
- [Prevention measures]
```

## 4. Task Status Monitoring

### Manager Tracking Dashboard

```markdown
## Manager Task Monitoring (Architect Mode)

### Daily Task Review Process
1. Use search_files to find recent Memory Bank entries
2. Use read_file to review task completion logs
3. Update project status and todo list
4. Identify blockers or delays
5. Prepare next task assignments

### Status Tracking
**Active Tasks:**
- Task A2: In Progress (Code Mode) - Due Today
- Task B1: Pending Review (Manager) - Completed Yesterday
- Task C1: Not Started - Waiting for Task A2 completion

**Completed This Week:**
- Task A1: Database Schema ✅
- Task X1: Security Research ✅

**Upcoming Tasks:**
- Task A3: Login Endpoint (after A2)
- Task B2: Frontend Integration (after B1 review)
```

## 5. Manager Coordination Scripts

The Manager can create standardized coordination files:

```markdown
## Daily Coordination Script (Manager)

### Morning Planning (Architect Mode)
```javascript
// Pseudo-workflow for Manager's daily planning
1. read_file("Implementation_Plan.md") // Check project status
2. search_files("Memory/", "*.md", "recent") // Review recent work
3. update_todo_list([...]) // Update project todos
4. write_to_file("tasks/Today_Priority_Tasks.md", taskList) // Create today's focus
5. Prepare task assignments for ready work
```

### Task Assignment Generation
```javascript
// Manager creates new task assignment
1. read_file("Implementation_Plan.md") // Get task details
2. search_files("Memory/", previous_task) // Get context
3. write_to_file("tasks/Task_[ID]_Assignment.md", taskDetails) // Create assignment
4. update_todo_list() // Update tracking
5. Notify user that task is ready for execution
```

This system allows the Manager to actively initiate, coordinate, and track tasks across all Roo modes while maintaining the structured RAPM approach.