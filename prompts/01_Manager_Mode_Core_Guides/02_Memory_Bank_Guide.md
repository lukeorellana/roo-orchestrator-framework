# RAPM Memory Bank System Guide

## 1. Purpose

This guide provides the Manager Mode (Architect) with instructions for determining, proposing, and setting up the most suitable Memory Bank System for a given project. The Memory Bank is crucial for logging all significant actions, decisions, and outputs from different Roo modes.

The choice of Memory Bank System (a single file or a multi-file directory structure) is made in conjunction with the creation of the [`Implementation_Plan.md`](Implementation_Plan.md). This guide defines how to assess project complexity to make this choice and specifies the initial structure and headers for the Memory Bank files.

This guide complements [`prompts/02_Utility_Prompts_And_Format_Definitions/Memory_Bank_Log_Format.md`](../02_Utility_Prompts_And_Format_Definitions/Memory_Bank_Log_Format.md), which details the format for *individual log entries* within these files.

## 2. Core Principles for Memory Bank System Design

When deciding on a Memory Bank System for Roo Cline workflows, aim for:

* **Scalability:** The system should efficiently handle the project's current and anticipated complexity and volume of log entries from different modes.
* **Organization:** Logs must be easy for the User and all Roo modes (current or future) to locate, navigate, and understand.
* **Clarity:** The structure should be intuitive and logically mirror the project's breakdown in the [`Implementation_Plan.md`](Implementation_Plan.md).
* **Mode Coordination:** The structure should support effective handovers and context sharing between Roo modes.
* **Tool Integration:** The structure should work efficiently with Roo's file operations and search capabilities.
* **Alignment:** The Memory Bank structure should directly reflect the organizational structure (phases, tasks) of the [`Implementation_Plan.md`](Implementation_Plan.md).

## 3. Assessing Project Complexity for System Selection

Before generating the full [`Implementation_Plan.md`](Implementation_Plan.md) (but after conceptualizing its structure and summarizing it to the User), you, the Manager Mode, must assess its likely complexity to determine the appropriate Memory Bank system.

**Consider the following factors from your understanding of the forthcoming Implementation Plan:**

* **Project Phasing:**
  * **High Complexity Indicator:** The plan is (or will be) divided into multiple distinct phases with different mode requirements.
  * **Lower Complexity Indicator:** The plan has no formal phases, or is essentially a single phase with consistent mode usage.

* **Number and Nature of Tasks:**
  * **High Complexity Indicator:** A large number of tasks, tasks requiring different Roo modes, or tasks covering very distinct domains of work.
  * **Lower Complexity Indicator:** A manageable number of tasks, primarily handled by one or two closely collaborating modes.

* **Mode Complexity and Transitions:**
  * **High Complexity Indicator:** Frequent mode transitions, complex handovers, or coordination between multiple modes working in parallel.
  * **Lower Complexity Indicator:** Simple mode usage patterns with infrequent transitions.

* **Project Duration and Mode Diversity:**
  * **High Complexity Indicator:** Anticipated long project duration or the involvement of many different Roo modes, each potentially generating many logs.
  * **Lower Complexity Indicator:** Shorter projects, fewer modes involved.

**Decision Point:**

* **Choose a Multi-File Directory System (`Memory/`) if:** Multiple high complexity indicators are present (e.g., distinct phases AND complex mode coordination).
* **Choose a Single-File System (`Memory_Bank.md`) if:** Primarily lower complexity indicators are present.

Use your judgment to balance these factors. When in doubt for moderately complex projects, a multi-file system can offer better long-term organization and mode coordination.

## 4. Memory Bank System Options

### 4.1. Option 1: Single-File System (`Memory_Bank.md`)

* **When to Use:** Recommended for straightforward projects, smaller scopes, or when the [`Implementation_Plan.md`](Implementation_Plan.md) is relatively simple (e.g., few tasks, no distinct phases, limited mode coordination).
* **Setup:**
  1. You will create a single file named `Memory_Bank.md` at the root of the project workspace using Roo's `write_to_file` tool.
  2. Populate this file with the following header:

    ```markdown
    # RAPM Project Memory Bank
    
    Project Goal: [Brief project goal, taken or summarized from the Implementation Plan's introduction]
    Date Initiated: [YYYY-MM-DD of Memory Bank creation]
    Manager Mode Session: [Current session identifier, if applicable/available]
    Implementation Plan Reference: `Implementation_Plan.md`
    
    ---
    
    ## Log Entries
    
    *(All subsequent log entries in this file MUST follow the format defined in `prompts/02_Utility_Prompts_And_Format_Definitions/Memory_Bank_Log_Format.md`)*
    ```

### 4.2. Option 2: Multi-File Directory System (`Memory/`)

* **When to Use:** Recommended for complex projects, especially those with multiple phases, numerous distinct tasks, complex mode coordination, or long anticipated durations, as reflected in the structure of the [`Implementation_Plan.md`](Implementation_Plan.md).
* **Setup:**
  1. You will create a root directory named `Memory/` at the project root using Roo's file operations.
  2. **Inside the `Memory/` directory, create a `README.md` file** to explain its structure. Example content for `Memory/README.md`:
      ```markdown
      # RAPM Project Memory Bank Directory
      
      This directory houses the detailed log files for the [Project Name] project.
      
      ## Structure:
      
      (Describe the structure chosen, e.g.:
      - Logs are organized into subdirectories corresponding to each Phase in the `Implementation_Plan.md`.
      - Within each phase directory, individual `.md` files capture logs for specific tasks and mode work.
      OR
      - Logs for each major task from the `Implementation_Plan.md` are stored as individual `.md` files directly in this directory.)
      
      All log entries within these files adhere to the format defined in `prompts/02_Utility_Prompts_And_Format_Definitions/Memory_Bank_Log_Format.md`.
      
      ## Mode Coordination Notes:
      
      - Each mode logs its work to the appropriate task-specific file
      - Mode handovers are documented with clear context transfer
      - Cross-mode dependencies are tracked in relevant log files
      ```
  3. **Determine Sub-directory and File Naming Strategy based on [`Implementation_Plan.md`](Implementation_Plan.md):**
      * **A. If [`Implementation_Plan.md`](Implementation_Plan.md) has Phases (e.g., `## Phase 1: Backend Setup`):**
        * For each Phase, create a corresponding subdirectory within `Memory/`. Use clear, filesystem-friendly names derived from the plan (e.g., `Memory/Phase_1_Backend_Setup/`, `Memory/Phase_2_Frontend_Dev/`).
        * Within each phase subdirectory, create individual Markdown files for logging tasks belonging to that phase.
        * **Log File Naming Convention:** `Task_[Task_Identifier]_Log.md` (e.g., `Task_A_User_Auth_Log.md`, `Task_B_Activity_API_Log.md`). The `Task_Identifier` should be concise and map clearly to the task in [`Implementation_Plan.md`](Implementation_Plan.md).
        * **Example Path:** `Memory/Phase_1_Backend_Setup/Task_A_User_Auth_Log.md`
      * **B. If [`Implementation_Plan.md`](Implementation_Plan.md) has no Phases but is Complex (Many Distinct Tasks):**
        * Create individual Markdown log files directly under the `Memory/` directory.
        * **Log File Naming Convention:** `Task_[Task_Identifier]_Log.md` (e.g., `Task_Data_Processing_Log.md`).
        * **Example Path:** `Memory/Task_Data_Processing_Log.md`
  4. **Populate each individual log file (`Task_..._Log.md`) with the following header:**

      ```markdown
      # RAPM Task Log: [Full Task Title from Implementation_Plan.md]
      
      Project Goal: [Brief project goal, from Implementation Plan]
      Phase: [Phase Name from Implementation_Plan.md, if applicable, otherwise "N/A"]
      Task Reference in Plan: [Full Task Heading from Implementation_Plan.md, e.g., "### Task A - Code Mode: User Authentication Module"]
      Assigned Mode(s) in Plan: [Mode(s) listed for the task in Implementation_Plan.md]
      Log File Creation Date: [YYYY-MM-DD]
      
      ---
      
      ## Log Entries
      
      *(All subsequent log entries in this file MUST follow the format defined in `prompts/02_Utility_Prompts_And_Format_Definitions/Memory_Bank_Log_Format.md`)*
      ```
  5. As the Manager Mode, you are responsible for creating the `Memory/` directory, its `README.md`, and the *initial set* of phase subdirectories (if any) and task log files with their headers, corresponding to the initial tasks in the [`Implementation_Plan.md`](Implementation_Plan.md).

## 5. Proposing and Creating the Memory Bank System to the User

This process aligns with the "Consolidated Proposal & Creation" step of your initiation, where you also present the [`Implementation_Plan.md`](Implementation_Plan.md) summary.

1. **Analyze:** Based on your understanding of the project's scope and the planned structure of [`Implementation_Plan.md`](Implementation_Plan.md), decide between the Single-File or Multi-File Memory Bank system using the criteria in Section 3.

2. **Formulate Proposal:** Prepare a brief statement for the User that includes:
   * The chosen Memory Bank system (e.g., "a single `Memory_Bank.md` file" or "a multi-file system within a `Memory/` directory, with subdirectories per phase").
   * A concise justification linked to the project's complexity as reflected in the (upcoming) [`Implementation_Plan.md`](Implementation_Plan.md).
   * Explanation of how the structure will support Roo mode coordination.

3. **Deliver Proposal with Plan Summary:** Present this Memory Bank proposal to the User *at the same time* you deliver the high-level summary of the [`Implementation_Plan.md`](Implementation_Plan.md).

4. **Create Files:** After presenting, and assuming no immediate objections from the User, proceed to create:
   * The full [`Implementation_Plan.md`](Implementation_Plan.md) (as per [`01_Implementation_Plan_Guide.md`](01_Implementation_Plan_Guide.md)).
   * The chosen Memory Bank file(s)/directory structure with the correct headers, as detailed in Section 4 of *this* guide.

5. **Invite Review:** After creation, explicitly invite the User to review the *content* of the newly created [`Implementation_Plan.md`](Implementation_Plan.md) AND the structure/headers of the `Memory_Bank.md` file or `Memory/` directory and its initial files.

## 6. Ongoing Logging and Mode Coordination

* This guide covers the *setup* of the Memory Bank system.
* All *actual log entries* made by different Roo modes **must** strictly adhere to the formatting rules defined in [`prompts/02_Utility_Prompts_And_Format_Definitions/Memory_Bank_Log_Format.md`](../02_Utility_Prompts_And_Format_Definitions/Memory_Bank_Log_Format.md).
* As new tasks are defined or phases initiated in an evolving [`Implementation_Plan.md`](Implementation_Plan.md), you (the Manager Mode) may need to guide the creation of new log files within the established multi-file system, maintaining the same naming conventions and header formats.
* Ensure that mode handover information is properly documented in the relevant log files to support effective context transfer.

## 7. Roo-Specific Considerations

### Tool Integration
* Use Roo's `write_to_file` tool to create Memory Bank files
* Leverage `search_files` to locate relevant log entries across the Memory Bank
* Use `read_file` to review log entries during mode coordination
* Employ `list_files` to understand Memory Bank structure

### Mode Coordination Support
* Design file structure to support efficient mode handovers
* Include mode transition documentation in log entries
* Ensure context preservation across mode switches
* Support parallel mode work through clear file organization

### File Management Best Practices
* Use clear, descriptive file names that map to Implementation Plan tasks
* Maintain consistent header formats across all Memory Bank files
* Organize files to support Roo's search and navigation capabilities
* Design structure to scale with project growth and complexity

By following this guide, you will establish a Memory Bank system that is well-organized, scalable, and effectively supports the RAPM workflow with optimal Roo mode coordination.