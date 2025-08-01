# RAPM Complete Workflow Guide

## Understanding Roo Cline Integration

### What is Roo Cline?
**Roo Cline** is the VSCode extension that provides the interactive mode system (🏗️ Architect, 💻 Code, 🪲 Debug, ❓ Ask, 🪃 Orchestrator) within the VSCode IDE environment. All RAPM functionality is built around this extension's capabilities.

### RAPM's Roo Cline Integration

**RAPM focuses entirely on Roo Cline's built-in capabilities** for comprehensive project management:

1. **Mode System**: Specialized workflows using Roo's different modes
2. **File Operations**: Leveraging Roo's read_file, write_to_file, search_files tools
3. **Context Management**: Using Roo's context gathering and preservation features
4. **Todo Integration**: Working with Roo's built-in todo system for task tracking

## Complete RAPM Workflow After Implementation Plan Creation

Once you have your [`Implementation_Plan.md`](Implementation_Plan.md) created, here's the typical workflow:

### Phase 1: Project Setup and Planning ✅ (Complete)
- [x] Architect Mode creates Implementation Plan
- [x] Memory Bank system set up
- [x] Task breakdown with mode assignments

### Phase 2: Task Execution (Main Workflow)

#### Step 1: Task Assignment and Mode Coordination

**Architect Mode Actions:**
1. **Review Implementation Plan**: Identify the next task to execute
2. **Mode Selection**: Determine appropriate Roo mode based on task type
3. **Context Preparation**: Gather relevant context and dependencies
4. **Mode Handover**: Create detailed handover document

**Example Task Assignment:**
```markdown
## Mode Coordination: Architect → Code
**Task**: Implement user authentication system (Task A.1)
**Context**: JWT-based auth with bcrypt password hashing
**Files to Review**: 
- Implementation_Plan.md (Task A.1 details)
- existing database schema
**Expected Deliverables**:
- Registration endpoint
- Login endpoint  
- Authentication middleware
**Memory Bank**: Log to Task_A_User_Auth_Log.md
```

#### Step 2: Mode Execution

**Switch to Assigned Mode** (e.g., Code Mode):
1. **Load Mode Context**: Use onboarding prompt if needed
2. **Review Assignment**: Understand task requirements
3. **Execute Work**: Implement features, debug issues, research topics
4. **Document Progress**: Log work to Memory Bank following format
5. **Report Completion**: Notify when task is complete

#### Step 3: Review and Coordination

**Return to Architect Mode**:
1. **Review Completed Work**: Check Memory Bank logs
2. **Validate Deliverables**: Ensure requirements met
3. **Update Implementation Plan**: Mark tasks complete
4. **Plan Next Steps**: Identify dependencies and next tasks

### Phase 3: Advanced Workflows with Roo Cline Features

#### Enhanced Workflow Opportunities

**Roo Cline's built-in capabilities enhance RAPM workflows:**

1. **Automated Context Gathering**:
   - Use search_files to find relevant code and documentation
   - Use read_file to gather context from multiple sources
   - Use list_files to understand project structure

2. **Intelligent File Operations**:
   - Use write_to_file for creating consistent documentation
   - Use apply_diff for precise code modifications
   - Use file operations for maintaining project artifacts

3. **Todo System Integration**:
   - Use update_todo_list for tracking project progress
   - Maintain todo lists across different modes
   - Coordinate task completion tracking

#### Enhanced Workflow Example

**Complex Feature Development:**

1. **Planning** (Architect Mode):
   - Create detailed implementation plan using write_to_file
   - Use search_files to understand existing codebase
   - Set up Memory Bank structure

2. **Implementation** (Code Mode):
   - Use read_file to understand requirements
   - Develop core functionality with write_to_file
   - Log progress to Memory Bank

3. **Quality Assurance** (Debug Mode):
   - Use search_files to find related test files
   - Review and test implementation
   - Document findings in Memory Bank

4. **Documentation** (Ask Mode):
   - Use read_file to understand implementation
   - Research best practices
   - Create comprehensive documentation

5. **Coordination** (Orchestrator Mode):
   - Use list_files to understand project status
   - Coordinate between different workstreams
   - Manage complex dependencies

## Typical Daily Workflow

### Morning Planning Session (Architect Mode)
```markdown
1. Review Memory Bank for yesterday's progress
2. Check Implementation Plan status
3. Identify blockers or dependencies
4. Plan day's mode coordination
5. Set up any needed Roo CLI automation
```

### Active Development (Mode Switching)
```markdown
1. Code Mode: Feature implementation
2. Debug Mode: Issue resolution
3. Ask Mode: Research and learning
4. Orchestrator Mode: Complex coordination
5. Roo CLI: Automated quality checks
```

### End-of-Day Review (Architect Mode)
```markdown
1. Review all Memory Bank entries
2. Update Implementation Plan progress
3. Plan tomorrow's priorities
4. Document any process improvements
```

## Roo CLI Integration Patterns

### 1. Continuous Integration
```yaml
# .github/workflows/rapm-ci.yml
name: RAPM CI Pipeline
on: [push, pull_request]

jobs:
  rapm-quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Roo CLI Quality Check
        run: |
          roo-cli review --implementation-plan ./Implementation_Plan.md
          roo-cli memory-bank validate ./Memory/
          roo-cli test --coverage-threshold 80%
```

### 2. Development Automation
```bash
#!/bin/bash
# rapm-dev-cycle.sh

echo "Starting RAPM development cycle..."

# Code quality check
roo-cli lint --fix

# Run tests
roo-cli test --watch

# Update documentation
roo-cli docs generate --auto

# Memory Bank validation
roo-cli memory-bank validate
```

### 3. Deployment Pipeline
```bash
#!/bin/bash
# rapm-deploy.sh

# Pre-deployment validation
roo-cli validate --implementation-plan
roo-cli memory-bank audit

# Deployment
roo-cli deploy --environment production

# Post-deployment verification
roo-cli monitor --health-check
```

## Tool Integration Matrix

| Activity | Primary Tool | Secondary Tool | Automation Level |
|----------|-------------|----------------|------------------|
| Planning | Architect Mode | - | Manual |
| Implementation | Code Mode | Roo CLI (testing) | Semi-automated |
| Debugging | Debug Mode | Roo CLI (logs) | Semi-automated |
| Research | Ask Mode | Roo CLI (docs) | Manual |
| Coordination | Orchestrator Mode | Roo CLI (pipeline) | Automated |
| Quality Assurance | All Modes | Roo CLI (validation) | Automated |
| Deployment | Orchestrator Mode | Roo CLI (deploy) | Automated |

## Advanced Workflow Scenarios

### Scenario 1: Large Feature Development
1. **Architect Mode**: Break down into phases
2. **Multiple Code Mode sessions**: Parallel development
3. **Roo CLI**: Continuous integration and testing
4. **Debug Mode**: Integration testing and fixes
5. **Orchestrator Mode**: Final coordination and deployment

### Scenario 2: Bug Investigation and Fix
1. **Debug Mode**: Problem analysis and reproduction
2. **Ask Mode**: Research solution approaches
3. **Code Mode**: Implement fix
4. **Roo CLI**: Automated regression testing
5. **Architect Mode**: Update processes to prevent recurrence

### Scenario 3: Documentation Sprint
1. **Ask Mode**: Content research and planning
2. **Roo CLI**: Automated API documentation
3. **Code Mode**: Interactive examples and demos
4. **Architect Mode**: Documentation strategy and coordination

## Measuring RAPM Effectiveness

### Key Metrics
- **Mode Transition Efficiency**: Time spent coordinating vs. executing
- **Context Preservation**: Information retention across mode switches
- **Automation Coverage**: Percentage of tasks automated with Roo CLI
- **Quality Metrics**: Bug rates, code coverage, documentation completeness

### Optimization Strategies
1. **Batch Similar Work**: Group tasks by mode to reduce transitions
2. **Automate Repetitive Tasks**: Use Roo CLI for routine operations
3. **Improve Handovers**: Refine mode coordination protocols
4. **Monitor Memory Bank Usage**: Ensure effective knowledge capture

This workflow guide shows how RAPM leverages both Roo Cline's interactive modes and Roo CLI's automation capabilities to create a comprehensive project management system that scales from simple tasks to complex enterprise projects.