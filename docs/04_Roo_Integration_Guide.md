# RAPM Roo Cline Integration Guide

## 1. Introduction

This guide provides specific instructions and best practices for implementing the Roo Agentic Project Management (RAPM) framework effectively within Roo Cline and VSCode.

Roo Cline's unique features, such as its specialized mode system, integrated file operations, and VSCode integration, make it an exceptionally well-suited environment for managing the multi-mode workflows defined by RAPM.

## 2. Core RAPM Setup in Roo Cline

### 2.1. Managing Work with Roo's Mode System

The core principle for running RAPM in Roo Cline is:

**One Roo Mode = One Specialized Workflow Type**

* **🏗️ Architect Mode:** Project planning, requirements gathering, high-level design, and strategic coordination
* **💻 Code Mode:** Implementation, file creation, coding, and technical development
* **🪲 Debug Mode:** Troubleshooting, error analysis, problem diagnosis, and issue resolution
* **❓ Ask Mode:** Research, documentation, explanations, and knowledge queries
* **🪃 Orchestrator Mode:** Complex multi-step coordination and cross-mode workflow management

### 2.2. Using RAPM Prompts for Mode Initialization and Tasks

* **Initialization:** Start your project by switching to Architect mode and loading the Manager initiation prompt from [`prompts/00_Initial_Manager_Setup/01_Initiation_Prompt.md`](../prompts/00_Initial_Manager_Setup/01_Initiation_Prompt.md).

* **Mode-Specific Onboarding:**
  * Code Mode: Use [`prompts/02_Utility_Prompts_And_Format_Definitions/Code_Mode_Onboarding.md`](../prompts/02_Utility_Prompts_And_Format_Definitions/Code_Mode_Onboarding.md)
  * Debug Mode: Use [`prompts/02_Utility_Prompts_And_Format_Definitions/Debug_Mode_Onboarding.md`](../prompts/02_Utility_Prompts_And_Format_Definitions/Debug_Mode_Onboarding.md)
  * Ask Mode: Use [`prompts/02_Utility_Prompts_And_Format_Definitions/Ask_Mode_Onboarding.md`](../prompts/02_Utility_Prompts_And_Format_Definitions/Ask_Mode_Onboarding.md)

* **Task Coordination:**
  1. Work with the **Manager Mode** (Architect) to prepare task assignments and coordinate workflows.
  2. Switch to the appropriate mode for task execution.
  3. Use mode handover protocols when transitioning between different types of work.

## 3. Leveraging Roo's VSCode Integration Features

Roo Cline's built-in capabilities can significantly enhance RAPM interactions:

* **File Operations:** Roo can directly read, write, and modify files using tools like `read_file`, `write_to_file`, and `apply_diff`. This is ideal for maintaining the Implementation Plan and Memory Bank.

* **Context Gathering:** Use Roo's `search_files` and `list_files` tools to gather project context and understand codebase structure.

* **Code Analysis:** Leverage `list_code_definition_names` to understand project architecture and dependencies.

* **Project Navigation:** Roo can efficiently navigate and understand your project structure, making it ideal for coordinating complex workflows.

## 4. Working with RAPM Artifacts

### 4.1. Implementation Plan Management

* **Creation:** Use Architect mode to create and maintain the [`Implementation_Plan.md`](Implementation_Plan.md) file.
* **Updates:** Coordinate plan updates through Architect mode, ensuring all other modes are aware of changes.
* **Reference:** Other modes can reference the plan using Roo's file reading capabilities.

### 4.2. Memory Bank Operations

* **Logging:** Each mode logs its work to the designated Memory Bank file(s) following the established format.
* **Review:** Use Architect mode to review logged work and coordinate next steps.
* **Context Sharing:** The Memory Bank serves as the primary context-sharing mechanism between modes.

## 5. Mode Coordination Patterns

### 5.1. Standard Workflow Pattern

1. **Planning Phase (Architect Mode):**
   * Project discovery and requirements gathering
   * Implementation plan creation
   * Memory Bank setup
   * Initial task prioritization

2. **Implementation Phase (Code Mode):**
   * Feature development
   * File creation and modification
   * Code implementation
   * Technical documentation

3. **Quality Assurance (Debug Mode):**
   * Error investigation
   * Problem diagnosis
   * Issue resolution
   * Testing coordination

4. **Knowledge Work (Ask Mode):**
   * Research and analysis
   * Documentation creation
   * Technical explanations
   * Best practice guidance

5. **Complex Coordination (Orchestrator Mode):**
   * Multi-step workflow management
   * Cross-mode dependency resolution
   * Large-scale project coordination

### 5.2. Mode Transition Protocol

When transitioning between modes:

1. **Context Documentation:** Current mode logs its status to the Memory Bank
2. **Handover Preparation:** Create a mode handover document if needed
3. **Mode Switch:** Switch to the appropriate Roo mode for the next task
4. **Context Loading:** New mode reviews relevant Memory Bank entries
5. **Task Continuation:** New mode continues work with full context

## 6. Roo-Specific Workflow Enhancements

### 6.1. Utilizing Roo's Tool System

* **File Management:** Leverage Roo's file operations for maintaining project artifacts
* **Search Capabilities:** Use search tools to find relevant code, documentation, or context
* **Code Analysis:** Employ code analysis tools to understand project structure
* **Todo Management:** Utilize Roo's todo list capabilities for task tracking

### 6.2. VSCode Integration Benefits

* **Integrated Development:** Work within your familiar VSCode environment
* **Extension Ecosystem:** Leverage VSCode extensions alongside Roo's capabilities
* **File Watching:** Benefit from VSCode's file watching and change detection
* **Git Integration:** Seamless version control through VSCode's Git integration

## 7. Best Practices and Important Considerations

### 7.1. Mode Selection Guidelines

* **Use Architect Mode for:** Strategic planning, high-level coordination, project management
* **Use Code Mode for:** Implementation, file creation, technical development
* **Use Debug Mode for:** Problem-solving, error analysis, troubleshooting
* **Use Ask Mode for:** Research, documentation, explanations, learning
* **Use Orchestrator Mode for:** Complex multi-step workflows, cross-mode coordination

### 7.2. Context Management

* **Memory Bank Discipline:** Consistently log important work and decisions
* **Regular Reviews:** Use Architect mode to regularly review progress and adjust plans
* **Clear Handovers:** Ensure clean context transfer when switching modes
* **Documentation:** Maintain clear documentation of decisions and rationale

### 7.3. Workflow Efficiency

* **Batch Similar Work:** Group similar tasks to minimize mode switching
* **Context Preservation:** Use the Memory Bank system to preserve context across mode switches
* **Strategic Planning:** Use Architect mode to plan mode usage and task sequencing
* **Regular Coordination:** Schedule regular reviews and coordination sessions

## 8. Troubleshooting Common Issues

### 8.1. Context Loss

* **Symptom:** Mode seems unaware of previous work
* **Solution:** Review Memory Bank entries, provide explicit context
* **Prevention:** Maintain disciplined logging practices

### 8.2. Mode Coordination Problems

* **Symptom:** Modes working on conflicting tasks
* **Solution:** Return to Architect mode for coordination and planning
* **Prevention:** Clear task assignment and mode responsibility definition

### 8.3. Information Fragmentation

* **Symptom:** Important information scattered across modes
* **Solution:** Consolidate information in Memory Bank, update Implementation Plan
* **Prevention:** Regular reviews and information consolidation

By leveraging Roo Cline's mode system and VSCode integration within the structured RAPM framework, you can create a powerful and organized environment for tackling complex projects with coordinated AI assistance.