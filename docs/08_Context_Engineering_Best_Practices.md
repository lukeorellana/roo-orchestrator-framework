# RAPM Context Engineering Best Practices

## The Context Bloat Problem

As projects grow, Memory Banks can become massive, leading to:
- **Context window overflow** in AI models
- **Slow processing** due to large context sizes
- **Reduced accuracy** when important info gets buried
- **Increased API costs** from large token counts

## Smart Context Management Strategy

### **Role-Based Context Access**

**🏗️ Architect Mode (Manager):**
- **Full Memory Bank Access** - Reviews entire project history
- **Strategic Context** - Needs big picture view for coordination
- **Cross-Phase Awareness** - Tracks progress across all work types

**💻 Code/🪲 Debug/❓ Ask/🪃 Orchestrator Modes:**
- **Selective Context** - Only relevant, recent, and task-specific information
- **Just-In-Time Loading** - Minimal context for focused execution
- **Manager-Filtered Information** - Pre-processed context from Architect Mode

### **Optimized Context Rules**

## 1. Implementation Modes: Minimal Context Strategy

**What Implementation Modes SHOULD Read:**
```
REQUIRED READING (Always):
- Implementation_Plan.md [specific task section only]
- Task-specific context provided in handoff
- Previous task output (if directly related)

OPTIONAL READING (When specified):
- Memory_Bank.md [specific recent entries only - e.g., "last 2 entries" or "today's work"]
- Specific files mentioned in task assignment
```

**What Implementation Modes SHOULD NOT Read:**
- Entire Memory Bank history
- Unrelated project phases
- All previous work logs
- Complete project documentation

## 2. Architect Mode: Full Context Strategy

**What Architect Mode SHOULD Read:**
- Complete Memory Bank for project oversight
- Entire Implementation Plan for coordination
- All project artifacts for strategic decisions
- Cross-mode work outputs for quality review

## 3. Smart Context Handoff Format

### **Optimized Handoff Template:**

```
TASK COMPLETE: [Summary]

HANDOFF TO: [Mode]
COPY PROMPT BELOW:
================================
[ALL CAPS TASK TITLE]

## STEP 1: MODE INITIALIZATION
[Standard RAPM framework introduction]

## STEP 2: FOCUSED CONTEXT
Project: [Name]
Current Phase: [Specific phase]
Task Context: [Manager-provided summary of what mode needs to know]

REQUIRED READING:
- Implementation_Plan.md [specific section - e.g., "Phase 2, Task 3"]
- Memory_Bank.md [specific scope - e.g., "entries from today" or "last completed task"]

PROVIDED CONTEXT (No additional reading needed):
- Previous work summary: [Manager provides key points]
- Dependencies completed: [List of prerequisite work]
- Current project state: [Relevant status information]

## STEP 3: TASK ASSIGNMENT
[Detailed task with all necessary context included]

## STEP 4: COMPLETION PROTOCOL
[Standard logging and handoff requirements]
================================
```

## 4. Memory Bank Segmentation Strategy

### **Single Project Approach:**
```
Memory_Bank.md (Keep if project is small-medium)
- Linear chronological log
- Manager reads all, modes read specific sections
```

### **Multi-File Approach for Large Projects:**
```
Memory/
├── Phase1_Implementation.md
├── Phase1_Testing.md  
├── Phase2_Implementation.md
├── Phase2_Testing.md
├── Research_And_Documentation.md
└── Issues_And_Resolutions.md
```

**Benefits:**
- Implementation modes only read relevant phase/type files
- Architect Mode can read all or specific files as needed
- Natural context boundaries prevent bloat

## 5. Context Optimization Techniques

### **Manager as Context Filter**

**Instead of:**
```
REQUIRED READING:
- Read entire Memory_Bank.md
- Review all previous work
- Understand complete project history
```

**Use Manager-Filtered Context:**
```
PROVIDED CONTEXT (No additional reading needed):
- Authentication system completed in Phase 1
- Database connection issues resolved yesterday  
- Current focus: API endpoint security testing
- Relevant files: auth.js, middleware/security.js

REQUIRED READING:
- Implementation_Plan.md Phase 2: Security Testing
- Memory_Bank.md [today's entries only]
```

### **Task-Specific Context Scoping**

**For Code Mode:**
```
CONTEXT SCOPE: Implementation-focused
- What to build (from Implementation Plan)
- Recent relevant changes (filtered by Manager)
- Current phase requirements
- Dependencies status

SKIP: Testing logs, research findings, management decisions
```

**For Debug Mode:**
```
CONTEXT SCOPE: Quality-focused  
- What was implemented (recent implementation logs)
- Known issues (issue-specific Memory Bank entries)
- Testing requirements (from Implementation Plan)
- Error reports and symptoms

SKIP: Research logs, planning discussions, unrelated implementations
```

### **Context Size Guidelines**

**Implementation Mode Context Limits:**
- **Implementation Plan:** Specific task section only (~200-500 words)
- **Memory Bank:** Recent relevant entries only (~500-1000 words)
- **Handoff Context:** Manager-provided summary (~300-500 words)
- **Total Target:** Under 2000 words of context per task

**Architect Mode Context:**
- **Full access** to all project artifacts for strategic oversight
- **Chunked reading** for very large projects (read by phase/section)
- **Smart querying** of Memory Bank ("show me all issues" vs reading everything)

## 6. Implementation Guidelines

### **For Handoff Generation:**

1. **Architect Mode provides context summary** instead of requiring full Memory Bank reading
2. **Scope reading requirements** to specific sections/timeframes
3. **Include essential context directly** in handoff prompt
4. **Reference full docs only when necessary** for the specific task

### **For Memory Bank Design:**

1. **Start with single file** for small-medium projects
2. **Split by phase or work type** when file gets large (>10k words)
3. **Use clear section headers** for easy navigation
4. **Manager maintains index** of where to find specific information

### **For Project Scaling:**

1. **Monitor context sizes** and split when handoffs get too large
2. **Use Manager as intelligent filter** rather than dumping all context
3. **Provide "just enough" context** for effective task execution
4. **Maintain context quality over quantity**

## 7. Example Optimized Workflow

### **Traditional Approach (Context Heavy):**
```
Code Mode Task:
- Read entire Implementation_Plan.md (5000 words)
- Read entire Memory_Bank.md (8000 words)  
- Review all previous work logs
- Understand complete project history
Total Context: 13,000+ words
```

### **Optimized Approach (Context Efficient):**
```
Code Mode Task:
- Read Implementation_Plan.md Phase 2 Section (400 words)
- Read Memory_Bank.md last 3 entries (600 words)
- Manager-provided context summary (300 words)
- Specific task requirements (200 words)
Total Context: 1,500 words
```

**Result:** 90% context reduction with maintained effectiveness.

## 8. Context Quality Metrics

**Good Context Engineering Indicators:**
- Implementation modes complete tasks without requesting additional context
- Tasks finish efficiently without context overload
- Handoffs include all necessary information
- Memory Bank searches are quick and targeted

**Poor Context Engineering Indicators:**
- Modes frequently ask for more context
- Long delays processing large context
- Important information gets buried
- Handoffs require multiple clarifications

This approach maintains RAPM's systematic benefits while optimizing for real-world usage at scale.