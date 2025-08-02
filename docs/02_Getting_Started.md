# Getting Started with RAPM

This guide provides a step-by-step walkthrough for setting up and running your first project using the Roo Agentic Project Management (RAPM) framework in Roo Cline with VSCode. It assumes you have a basic understanding of the RAPM concepts from the `00_Introduction.md` and `01_Workflow_Overview.md`.

## Prerequisites

*   **Roo Cline Extension:** Installed and configured in VSCode with your preferred AI model API credentials.
*   **VSCode:** A recent version with the Roo Cline extension active and functional.
*   **Project Idea:** A task or project complex enough to benefit from a structured, multi-mode approach.
*   **Markdown Familiarity:** Basic understanding of Markdown syntax for interacting with prompts and logs.
*   **RAPM Files:** Access to the RAPM assets (prompts, guides, and protocol definitions), particularly the `/prompts` directory. The complete RAPM library is available [here](https://github.com/lukeorellana/roo-agentic-project-management).

## 1. Understand the RAPM Framework for Roo

Before diving in, familiarize yourself with the core concepts of RAPM adapted for Roo Cline:

*   **Modes:** 🏗️ Architect Mode (Manager), 💻 Code Mode, 🪲 Debug Mode, ❓ Ask Mode, 🪃 Orchestrator Mode.
*   **Key Artifacts:** `Implementation_Plan.md`, `Memory_Bank.md` (or `Memory/` directory), mode handover documents.
*   **Core Workflow:** Review the [Workflow Overview](01_Workflow_Overview.md) and the main `README.md`.
*   **Prompt Library:** Understand that the `prompts/` directory contains the core instructions for Roo modes.
*   **Roo-Specific Features:** File operations, mode switching, VSCode integration, and tool ecosystem.

## 2. Setting Up Your Project: Installing RAPM Assets

You have a few options to get the RAPM prompts, guides, and protocol definitions:

1.  **Use the RAPM Template (Recommended for New Projects):**
    *   Click the "Use this template" button on the [RAPM GitHub Repository](https://github.com/lukeorellana/roo-agentic-project-management).
    *   This creates *your own repository* pre-filled with the entire RAPM structure.
    *   **Ideal Setup:** Clone *your new repository* directly into your VSCode workspace. Open the folder in VSCode where Roo Cline can access all files.

2.  **Clone the Official RAPM Repository (Recommended for Direct Use):**
    *   Clone the main [RAPM GitHub Repository](https://github.com/lukeorellana/roo-agentic-project-management) directly into your project workspace.
    *   This gives you direct access to the latest version and all assets.
    *   Open the cloned folder in VSCode with Roo Cline active.

3.  **Copy Essential Files to Existing Project:**
    *   Copy the `prompts/`, `docs/`, and `roo-workflows/` directories to your existing project root.
    *   Ensure Roo Cline has access to these files in your VSCode workspace.

**Important:** For optimal functionality, the RAPM assets should be accessible within your VSCode workspace where Roo Cline can read and write files directly.

## 3. Initiating RAPM within your Project

This is the first crucial step to get RAPM running with Roo Cline:

1.  **Open VSCode with your project** and ensure Roo Cline extension is active.
2.  **Switch to Architect Mode** in Roo Cline (🏗️ Architect Mode).
3.  **Provide the Initiation Prompt:**
    *   Navigate to `prompts/00_Initial_Manager_Setup/01_Initiation_Prompt.md` in your VSCode file explorer.
    *   Copy its *entire content*.
    *   Paste this into Architect Mode as the very first message.
4.  **Follow the Lead:** Your Architect Mode (now acting as Manager), guided by this prompt, will then:
    *   Verify RAPM asset availability in your workspace.
    *   Ask for a high-level project overview.
    *   Present options for detailed project discovery.
    *   Engage in the chosen discovery process using Roo's file analysis tools.

## 4. Developing the Implementation Plan & Memory Bank System

This phase is driven by Architect Mode after it has gathered sufficient context:

1.  **Autonomous Planning Trigger:** Architect Mode will *autonomously determine* when it has comprehensive understanding to proceed with planning.
2.  **Consolidated Proposal & Creation:** In a single, comprehensive message, Architect Mode will:
    *   Present a **high-level summary** of its proposed `Implementation_Plan.md`.
    *   Propose a **Memory Bank System structure** (e.g., single `Memory_Bank.md` or `Memory/` directory), with justification.
    *   **Create the `Implementation_Plan.md` file** in your workspace using Roo's `write_to_file` tool.
    *   **Create the initial Memory Bank file(s)** using the system design principles and formats.
3.  **User Review and Refinement:**
    *   Architect Mode will invite you to **review the content** of the newly created files.
    *   Discuss any necessary modifications with Architect Mode, which will update the files using Roo's file editing tools.
4.  **Final Confirmation:** Confirm with Architect Mode when you are satisfied with the setup.

## Step 5: Running the Task Cycle (The Core Loop)

This is the iterative process of getting work done using Roo's mode system.

1.  **Prepare Task Assignment:**
    *   In **Architect Mode**, identify the first task from your `Implementation_Plan.md`.
    *   Ask Architect Mode: "Give me the task assignment for the next task, following the task assignment guide."
    *   Architect Mode will provide you with a structured task prompt and tell you which Roo mode to use.

2.  **Switch to Implementation Mode:**
    *   **Switch to the designated Roo mode** (💻 Code, 🪲 Debug, ❓ Ask, or 🪃 Orchestrator).
    *   **Provide mode onboarding** if it's the first time using this mode for the project:
        *   For Code Mode: Use `prompts/02_Utility_Prompts_And_Format_Definitions/Code_Mode_Onboarding.md`
        *   For Debug Mode: Use similar onboarding adapted for Debug Mode
        *   For Ask Mode: Use similar onboarding adapted for Ask Mode
    *   The mode should acknowledge understanding and state readiness.

3.  **Deliver Task Prompt:**
    *   Copy the Task Assignment Prompt from Architect Mode.
    *   Paste it into the current **Implementation Mode**.

4.  **Execute & Report:**
    *   The Implementation Mode will execute the task using Roo's integrated tools (file operations, code analysis, etc.).
    *   It may ask clarifying questions. Answer them to the best of your ability.
    *   Once finished or encountering blockers, the mode will report its status and output.

5.  **Confirm & Instruct Logging:**
    *   Review the Implementation Mode's report.
    *   **Decide** if the work should be logged (usually yes for completion or significant progress/blockers).
    *   Instruct the mode: "Please log this work to `Memory_Bank.md` using the standard format."

6.  **Switch Back to Manager & Review:**
    *   **Switch back to Architect Mode** in Roo Cline.
    *   Inform Architect Mode: "Task [Reference] has been completed and logged to `Memory_Bank.md`."
    *   Architect Mode will review the logged work (using Roo's `read_file` tool to access the Memory Bank).
    *   Architect Mode will provide its assessment and prepare the next task assignment.

7.  **Repeat:** Based on Architect Mode's review:
    *   If successful, it will prepare the prompt for the *next* task.
    *   If issues require correction, it will prepare a revised task assignment.

## Step 6: Handling Mode Context Management

Unlike traditional multi-session approaches, Roo's mode system requires careful context management:

1.  **Context Preservation:** Use the Memory Bank and Implementation Plan as persistent context between mode switches.
2.  **Regular Sync:** Periodically return to Architect Mode for overall project coordination and planning updates.
3.  **Clear Handovers:** When switching modes, ensure the current mode has logged its status and any important context.
4.  **Mode Specialization:** Leverage each mode's strengths - Architect for planning, Code for implementation, Debug for troubleshooting, Ask for research.

## Step 7: Advanced Coordination with Orchestrator Mode

For complex workflows requiring coordination across multiple work types:

1.  **Identify Complex Workflows:** Multi-step processes that span different types of work (code + docs + testing).
2.  **Switch to Orchestrator Mode:** Use 🪃 Orchestrator Mode for managing these complex workflows.
3.  **Workflow Coordination:** Orchestrator Mode can manage handovers between Code, Debug, and Ask modes while maintaining overall workflow coherence.

## Conclusion

This guide covers the fundamental steps to get started with RAPM in Roo Cline. Key principles to remember:

*   Use Roo's mode system strategically - each mode has specialized capabilities.
*   Leverage Roo's file operations for maintaining project artifacts.
*   Use Architect Mode as your central coordinator and planner.
*   Maintain consistent logging to the Memory Bank for context sharing.
*   Switch modes purposefully based on the type of work needed.
*   Take advantage of Roo's VSCode integration for seamless development workflows.

**Pro Tips for Roo Cline:**
- Keep your project files organized in VSCode for easy Roo access
- Use Roo's search and analysis tools to understand project context
- Leverage VSCode's integrated terminal and Git features alongside Roo
- Take advantage of Roo's ability to read and write files directly

Refer back to the specific prompts, guides, and format definitions in the `/prompts` directory and the detailed explanations in the `/docs` directory whenever needed.

Happy managing with Roo! 🚀