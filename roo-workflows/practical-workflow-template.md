# RAPM Practical Workflow Template

This template provides a step-by-step guide for using RAPM once your Implementation Plan is created.

## 🚀 Quick Start: From Implementation Plan to Execution

### Prerequisites ✅
- [x] RAPM framework cloned to your project
- [x] Roo Cline extension installed in VSCode
- [x] Implementation Plan created using Architect Mode
- [x] Memory Bank system established

### Daily Workflow Template

## Phase 1: Morning Planning (Architect Mode)

**Time: 15-30 minutes**

### Step 1: Project Status Review
```markdown
## Daily Planning Checklist
- [ ] Read latest Memory Bank entries from yesterday
- [ ] Review Implementation Plan progress
- [ ] Identify any blockers or dependencies
- [ ] Check for any failed automation (if using Roo CLI)
- [ ] Plan today's mode coordination strategy
```

### Step 2: Task Prioritization
```markdown
## Today's Task Selection
**Next Task from Implementation Plan**: [Task ID and description]
**Assigned Mode**: [Mode best suited for this task]
**Dependencies**: [Any prerequisites or blockers]
**Success Criteria**: [How to know when it's complete]
**Estimated Effort**: [Time estimate]
```

## Phase 2: Task Execution (Mode-Specific Work)

### Code Mode Execution Template
```markdown
## Code Mode Session
**Task**: [Specific implementation task]
**Files to Modify**: [List of files to work with]
**Key Requirements**:
- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

**Implementation Steps**:
1. [ ] Review existing code structure
2. [ ] Implement core functionality
3. [ ] Add error handling
4. [ ] Write/update tests
5. [ ] Update documentation
6. [ ] Log work to Memory Bank
```

### Debug Mode Execution Template
```markdown
## Debug Mode Session
**Issue**: [Problem description]
**Symptoms**: [What's happening]
**Investigation Steps**:
1. [ ] Reproduce the issue
2. [ ] Analyze error logs
3. [ ] Check recent changes
4. [ ] Test potential solutions
5. [ ] Implement fix
6. [ ] Verify resolution
7. [ ] Log findings to Memory Bank
```

### Ask Mode Execution Template
```markdown
## Ask Mode Session
**Research Topic**: [What needs to be researched]
**Key Questions**:
- [ ] Question 1
- [ ] Question 2
- [ ] Question 3

**Research Process**:
1. [ ] Gather background information
2. [ ] Identify best practices
3. [ ] Document findings
4. [ ] Create recommendations
5. [ ] Log research to Memory Bank
```

## Phase 3: Mode Coordination (Transitions)

### Handover Protocol Template
```markdown
## Mode Handover: [From Mode] → [To Mode]
**Date**: [Current date]
**Project**: [Project name]

**Completed Work**:
- [x] Task 1 completed
- [x] Task 2 completed
- [~] Task 3 partially complete

**Current Status**:
- **What's Done**: [Summary of completed work]
- **What's Remaining**: [Outstanding items]
- **Any Blockers**: [Issues preventing progress]

**Context for Next Mode**:
- **Background**: [Essential context needed]
- **Key Decisions**: [Important choices made]
- **Resources**: [Files, docs, references needed]

**Next Actions**:
- [ ] Specific task 1
- [ ] Specific task 2
- [ ] Specific task 3

**Memory Bank Updates**: [Which files were updated]
```

## Phase 4: End-of-Day Review (Architect Mode)

### Daily Wrap-up Template
```markdown
## Daily Review Checklist
- [ ] All Memory Bank entries reviewed
- [ ] Implementation Plan progress updated
- [ ] Tomorrow's priorities identified
- [ ] Any process improvements documented
- [ ] Automated tasks scheduled (if using Roo CLI)

## Today's Accomplishments
- [x] [Accomplishment 1]
- [x] [Accomplishment 2]
- [x] [Accomplishment 3]

## Tomorrow's Plan
1. [ ] [Priority task 1]
2. [ ] [Priority task 2]
3. [ ] [Priority task 3]

## Notes and Improvements
- [Any lessons learned or process improvements]
```

## Integration with Roo CLI (Optional but Recommended)

### Setting Up Automation
```bash
# Create a project automation script
# File: rapm-automation.sh

#!/bin/bash
echo "RAPM Daily Automation Starting..."

# Validate current state
roo-cli validate --implementation-plan ./Implementation_Plan.md
roo-cli memory-bank check ./Memory/

# Run any automated tasks
if [ "$1" = "morning" ]; then
    echo "Running morning setup..."
    roo-cli status report --format daily
elif [ "$1" = "evening" ]; then
    echo "Running evening cleanup..."
    roo-cli memory-bank validate
    roo-cli backup create
fi
```

### Automated Quality Checks
```bash
# Automated checks to run between mode transitions
roo-cli lint --auto-fix
roo-cli test --fast
roo-cli docs validate
```

## Weekly Workflow Pattern

### Monday: Planning and Architecture
- **Architect Mode**: Weekly planning, Implementation Plan updates
- **Roo CLI**: Set up automated weekly reports

### Tuesday-Thursday: Primary Development
- **Code Mode**: Major implementation work
- **Debug Mode**: Issue resolution
- **Roo CLI**: Continuous integration and testing

### Friday: Review and Documentation
- **Ask Mode**: Research and documentation
- **Architect Mode**: Weekly review and next week planning
- **Roo CLI**: Generate weekly reports and backups

## Common Workflow Scenarios

### Scenario 1: Starting a New Feature
```markdown
1. **Architect Mode**: Review Implementation Plan, identify feature requirements
2. **Ask Mode**: Research technical approaches and best practices
3. **Code Mode**: Implement core functionality
4. **Debug Mode**: Test and resolve issues
5. **Architect Mode**: Review completion and plan next steps
```

### Scenario 2: Bug Fix Workflow
```markdown
1. **Debug Mode**: Investigate and reproduce issue
2. **Ask Mode**: Research solution approaches (if needed)
3. **Code Mode**: Implement fix
4. **Debug Mode**: Verify fix and test edge cases
5. **Architect Mode**: Update processes to prevent recurrence
```

### Scenario 3: Complex Integration
```markdown
1. **Architect Mode**: Plan integration strategy
2. **Orchestrator Mode**: Coordinate multiple components
3. **Code Mode**: Implement integration points
4. **Debug Mode**: Test integration scenarios
5. **Ask Mode**: Document integration patterns
6. **Architect Mode**: Review and plan deployment
```

## Productivity Tips

### Efficient Mode Switching
- **Batch Similar Tasks**: Group similar work to minimize mode switches
- **Prepare Context**: Have all needed information ready before switching
- **Use Templates**: Standardize handover processes with templates

### Memory Bank Best Practices
- **Log Early and Often**: Don't wait until end of day
- **Be Specific**: Include enough detail for future reference
- **Cross-Reference**: Link related entries and tasks

### Automation Opportunities
- **Repetitive Checks**: Use Roo CLI for routine validations
- **Status Reports**: Automate daily/weekly progress reports
- **Quality Gates**: Set up automated quality checks

## Troubleshooting Common Issues

### Problem: Losing Context Between Modes
**Solution**: Use detailed handover templates and Memory Bank entries

### Problem: Mode Coordination Overhead
**Solution**: Batch similar tasks and use lightweight handovers for simple transitions

### Problem: Inconsistent Documentation
**Solution**: Use standardized templates and regular Memory Bank reviews

### Problem: Automation Failures
**Solution**: Start with simple Roo CLI automations and gradually increase complexity

This template provides a practical, repeatable workflow that teams can adapt to their specific needs while maintaining the structured approach that makes RAPM effective.