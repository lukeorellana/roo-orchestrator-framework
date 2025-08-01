# Roo Agentic Project Management (RAPM) Framework

**A Structured, Efficient Multi-Agent Workflow for Complex Project Execution with Roo Cline in VSCode.**

## What is RAPM?

Roo Agentic Project Management (RAPM) is a collection of tested prompts, standardized format definitions, procedure protocols and recommended workflow practices designed to bring structure and efficiency to complex projects executed with Roo Cline in VSCode.

It provides a robust, repeatable methodology for leveraging Roo's multiple modes in collaboration, mirroring established **real-life project management principles** (workload breakdown, role assignment, progress tracking, context transfer & onboarding) adapted for Roo's unique capabilities and VSCode's integrated development environment.

## The Problem RAPM Solves

While powerful, using AI assistants for large, multi-step projects often encounters challenges:

* **Context Window Limits:** Long conversations exceed the AI model's memory, leading to forgotten instructions and inconsistent behavior, what we call *"hallucinations."
* **Lack of Structure:** Ad-hoc prompting can become chaotic, making it difficult to track progress or ensure all requirements are met.
* **Mode Coordination Issues:** Managing different Roo modes working on different parts of a project can be cumbersome without proper coordination.
* **Inefficiency:** Unstructured approaches can lead to redundant conversations, ultimately slowing progress and hurting productivity.

RAPM addresses these issues by providing a clear framework that prioritizes **structured interaction, explicit context management, and efficient, targeted prompt engineering through Roo's mode system**.

## RAPM's Solution: Core Concepts Overview

RAPM employs a multi-mode system built on key concepts adapted for Roo Cline:

1. **Manager Mode (Architect):** The central coordination mode responsible for understanding project goals, creating a detailed [`Implementation_Plan.md`](Implementation_Plan.md), coordinating between modes, reviewing completed work, and managing the overall workflow.

2. **Implementation Modes:** Dedicated Roo modes tasked with executing specific parts of the Implementation Plan:
   - **💻 Code Mode:** Writing code, creating files, implementing features
   - **🪲 Debug Mode:** Troubleshooting, error analysis, and problem solving
   - **❓ Ask Mode:** Research, documentation, and knowledge queries

3. **Orchestrator Mode:** Advanced coordination for complex multi-step workflows and cross-mode dependencies.

4. **Memory Bank (`Memory_Bank.md`):** One or more designated Markdown files acting as persistent, chronological, and structured logs. All significant actions, outputs, decisions, and errors are recorded here by the modes, providing shared context and an auditable history.

5. **Mode Handover Protocol:** A defined procedure using structured prompts and context files to seamlessly transfer project state and responsibilities between Roo modes (e.g., when transitioning from planning to implementation).

These components work together to promote separation of concerns, facilitate clear communication through Roo's structured approach, and maintain project coherence over time.

## Who is this for?

RAPM is designed for:

* Developers, researchers, project managers, students, technical writers using Roo Cline in VSCode for substantial projects involving coding, analysis, writing, content creation and more.
* Individuals seeking to move beyond simple Q&A and leverage Roo's mode system for more complex, structured work.
* Users who value organization, traceability, efficiency, and reliability in their AI-driven workflows.

## What's in this Repository?

* `/prompts`: Contains the core prompts for initializing modes, guides for key coordination actions (planning, task assignment, review, handover guides), and format & protocol definitions for critical artifacts (Memory Bank logs, Handover files). These are designed to be used directly with Roo's modes.
* `/docs`: Comprehensive documentation explaining the framework, core concepts, getting started procedures, customization options, and troubleshooting tips.
* `/roo-workflows`: Pre-configured workflow templates and mode-specific configurations designed to enhance RAPM workflow reliability when used within Roo Cline and VSCode.
* `/.github`: Includes standard GitHub community health files.

## Getting Started & Next Steps

Ready to try RAPM?

* **Conceptual Understanding:** Read the [`01_Workflow_Overview.md`](01_Workflow_Overview.md) for a visual and descriptive walkthrough.
* **Practical Setup:** Follow the [`02_Getting_Started.md`](02_Getting_Started.md) guide to set up a project using RAPM.
* **Deep Dive:** Explore [`03_Core_Concepts.md`](03_Core_Concepts.md) for detailed explanations of the Manager Mode, Memory Bank, etc.

## Why RAPM?

* **Structure & Organization:** Brings clarity and predictability to complex projects through Roo's mode system.
* **Enhanced Context Management:** Explicitly tackles LLM context limitations via structured mode transitions and the Memory Bank system.
* **Efficiency by Design:** The workflow is optimized to minimize redundant interactions, reducing API calls and token consumption through intelligent mode coordination.
* **Proven Effectiveness:** RAPM has been adapted from the battle-tested APM framework and optimized for Roo's unique capabilities.
* **Scalability:** Suitable for managing larger and more intricate projects with Roo's coordinated AI modes.