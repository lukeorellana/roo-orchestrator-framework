# RAPM Glossary of Core Concepts & Terms

This document provides concise definitions for the key terms used within the Roo Agentic Project Management (RAPM) framework. Use this as a quick reference and navigate to the linked documents for more detailed explanations, guides, or format specifications.

---

**Architect Mode (Manager Mode)**

The central coordination mode in Roo Cline (🏗️ Architect Mode) responsible for understanding project goals, creating the [`Implementation_Plan.md`](Implementation_Plan.md), coordinating between other Roo modes, reviewing completed work, and managing the overall workflow. This is equivalent to the Manager Agent in traditional APM but leverages Roo's mode system.
*   *See initiation prompt:* `prompts/00_Initial_Manager_Setup/01_Initiation_Prompt.md`
*   *See core guides:* `prompts/01_Manager_Mode_Core_Guides/`
*   *See role in workflow:* `docs/01_Workflow_Overview.md`

**Ask Mode (❓)**

A specialized Roo mode responsible for research, documentation creation, knowledge queries, and explanations. Used for tasks requiring information gathering, analysis, or educational content creation.
*   *See onboarding approach:* `prompts/02_Utility_Prompts_And_Format_Definitions/Ask_Mode_Onboarding.md`
*   *See role in workflow:* `docs/01_Workflow_Overview.md`

**Code Mode (💻)**

A specialized Roo mode responsible for implementation tasks, file creation, coding, and technical development. Leverages Roo's file operations and VSCode integration for seamless development workflows.
*   *See onboarding prompt:* `prompts/02_Utility_Prompts_And_Format_Definitions/Code_Mode_Onboarding.md`
*   *See role in workflow:* `docs/01_Workflow_Overview.md`

**Debug Mode (🪲)**

A specialized Roo mode focused on troubleshooting, error analysis, problem diagnosis, and issue resolution. Utilizes Roo's code analysis and search capabilities for systematic debugging.
*   *See onboarding approach:* Similar to Code Mode onboarding, adapted for debugging tasks
*   *See role in workflow:* `docs/01_Workflow_Overview.md`

**Implementation Mode**

A general term for any of the specialized Roo modes (Code, Debug, Ask, Orchestrator) that execute specific tasks based on the `Implementation_Plan.md` and instructions provided by Architect Mode. They report status back to the User and log their work to the `Memory_Bank.md`.
*   *See mode coordination:* `docs/04_Roo_Integration_Guide.md`
*   *See workflow patterns:* `roo-workflows/mode-coordination-patterns.md`

**Implementation Plan (`Implementation_Plan.md`)**

A detailed, structured Markdown document created by Architect Mode (after User approval). It breaks down the project into phases (optional), tasks, and granular sub-tasks, assigning responsibility to specific Roo modes. It serves as the blueprint for project execution and is maintained as a file in your VSCode workspace.
*   *See formatting guide:* `prompts/01_Manager_Mode_Core_Guides/01_Implementation_Plan_Guide.md`
*   *See creation process:* `docs/02_Getting_Started.md` (Step 4)

**Memory Bank (`Memory_Bank.md`)**

One or more designated Markdown files acting as the project's persistent, chronological logbook. Implementation modes record their actions, outputs, results, and issues here in a standardized format after User confirmation. It provides shared context between Roo modes and an audit trail. Stored as files in your VSCode workspace for easy access by all modes.
*   *See system setup guide:* `prompts/01_Manager_Mode_Core_Guides/02_Memory_Bank_Guide.md`
*   *See log entry format definition:* `prompts/02_Utility_Prompts_And_Format_Definitions/Memory_Bank_Log_Format.md`
*   *See conceptual overview:* `docs/01_Workflow_Overview.md` (Memory Bank Concept)
*   *See setup in practice:* `docs/02_Getting_Started.md` (Step 4)

**Mode Coordination**

The practice of strategically switching between different Roo modes and coordinating their work through shared artifacts (Memory Bank, Implementation Plan) and structured handover processes. Central to RAPM's effectiveness in Roo Cline.
*   *See coordination guide:* `prompts/01_Manager_Mode_Core_Guides/03_Mode_Coordination_Guide.md`
*   *See workflow patterns:* `roo-workflows/mode-coordination-patterns.md`
*   *See integration guide:* `docs/04_Roo_Integration_Guide.md`

**Mode Handover Protocol**

The defined procedure for transferring project context and responsibilities between Roo modes. Unlike traditional agent handovers, this leverages Roo's persistent file system and mode switching capabilities to maintain context through shared artifacts.
*   *See handover patterns:* `roo-workflows/mode-coordination-patterns.md`
*   *See practical examples:* `docs/02_Getting_Started.md` (Step 6)

**Orchestrator Mode (🪃)**

An advanced Roo mode responsible for managing complex multi-step workflows that require coordination across multiple other modes. Used for intricate processes that span different types of work (development + testing + documentation).
*   *See workflow management:* `roo-workflows/practical-workflow-template.md`
*   *See role in workflow:* `docs/01_Workflow_Overview.md`

**RAPM (Roo Agentic Project Management)**

The overall framework, adapted specifically for Roo Cline and VSCode, consisting of prompts, format definitions, protocols, and best practices designed to structure complex project execution using Roo's multiple modes in collaboration.
*   *See overview:* `docs/00_Introduction.md`
*   *See quick start:* `README.md`

**Roo Mode System**

The specialized AI assistant modes provided by Roo Cline (🏗️ Architect, 💻 Code, 🪲 Debug, ❓ Ask, 🪃 Orchestrator), each optimized for different types of work. RAPM leverages this system for structured, specialized task execution.
*   *See integration guide:* `docs/04_Roo_Integration_Guide.md`
*   *See mode coordination:* `roo-workflows/mode-coordination-patterns.md`

**Task Assignment Prompt**

A prompt, typically drafted by Architect Mode and delivered by the User to an Implementation Mode, used to assign a specific task from the `Implementation_Plan.md`. It includes the task objective, detailed steps, necessary context, expected outputs, and mandatory logging instructions. Optimized for Roo's mode system and capabilities.
*   *See crafting guide:* `prompts/01_Manager_Mode_Core_Guides/03_Mode_Coordination_Guide.md`
*   *See usage in workflow:* `docs/02_Getting_Started.md` (Step 5)

**User**

The human project principal who defines project goals, coordinates between Roo modes through mode switching, makes key decisions (e.g., plan approval, logging confirmation), reviews progress, and provides overall supervision. In RAPM, the User acts as the bridge between different Roo modes.
*   *See role in workflow diagrams:* `docs/01_Workflow_Overview.md`
*   *See coordination responsibilities:* `docs/04_Roo_Integration_Guide.md`

**VSCode Integration**

The seamless integration between Roo Cline and Visual Studio Code that enables file operations, project navigation, and development workflows. RAPM leverages this integration for maintaining project artifacts, code analysis, and coordinated development.
*   *See integration benefits:* `docs/04_Roo_Integration_Guide.md`
*   *See workflow advantages:* `docs/01_Workflow_Overview.md`

---

## Roo-Specific Terminology

**Mode Switching**

The act of changing between different Roo modes (Architect, Code, Debug, Ask, Orchestrator) to leverage specialized capabilities for different types of work. Central to RAPM workflow efficiency.

**File-Based Context Sharing**

RAPM's approach to maintaining context between Roo modes through shared files (Memory Bank, Implementation Plan) that persist in your VSCode workspace, rather than relying on conversation history.

**Workspace Integration**

The practice of maintaining RAPM artifacts as files within your VSCode workspace, allowing Roo modes to directly read, write, and modify project context using their built-in file operations.

These concepts form the foundation of effective RAPM usage with Roo Cline. For detailed explanations and practical guidance, refer to the specific guides and workflows in the `/docs`, `/prompts`, and `/roo-workflows` directories.