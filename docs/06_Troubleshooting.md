# RAPM Troubleshooting Guide

This guide addresses common issues, questions, and challenges that users might encounter when using the Roo Agentic Project Management (RAPM) framework with Roo Cline in VSCode. If you're facing a problem not listed here, consider opening an issue on the GitHub repository.

## General Issues & Best Practices

**1. Issue: Roo mode seems to have forgotten previous instructions or context (Context Loss).**

*   **Cause A: Mode Context Limitations**
    *   **Solution:** Unlike traditional chat sessions, Roo modes have limited conversation memory. This is why RAPM emphasizes **file-based context sharing**. Always ensure critical information is logged to the Memory Bank and referenced in the Implementation Plan.
    *   *See:* `docs/02_Getting_Started.md` (Step 6) and `roo-workflows/mode-coordination-patterns.md`.
*   **Cause B: Wrong Mode for Task Type**
    *   **Solution:** Ensure you're using the appropriate Roo mode for the task. Code Mode for implementation, Debug Mode for troubleshooting, Ask Mode for research, etc. Each mode is optimized for specific work types.
*   **Cause C: Missing Context Files**
    *   **Solution:** Verify that the Memory Bank and Implementation Plan files exist in your VSCode workspace and are accessible to Roo. Use Architect Mode to review and update these files as needed.

**2. Issue: Implementation Mode is not following the plan or producing incorrect output.**

*   **Cause A: Ambiguous Task Assignment**
    *   **Solution:** Work with Architect Mode to create clearer, more specific task assignments. Ensure the task includes all necessary context, file references, and expected outputs.
*   **Cause B: Outdated Implementation Plan**
    *   **Solution:** Return to Architect Mode to review and update the `Implementation_Plan.md` file. Plans should evolve as project understanding improves.
*   **Cause C: Mode Not Aware of Recent Changes**
    *   **Solution:** Ensure the mode has access to the latest Memory Bank entries. You can explicitly ask the mode to review recent entries: "Please read the latest entries in Memory_Bank.md to understand recent progress."

**3. Issue: Workflow feels inefficient or too slow.**

*   **Cause A: Excessive Mode Switching**
    *   **Solution:** Group similar tasks together to minimize mode switching. Use Architect Mode to plan task sequences that leverage each mode's strengths efficiently.
*   **Cause B: Not Leveraging Roo's File Operations**
    *   **Solution:** Take advantage of Roo's ability to read, write, and modify files directly. This is much more efficient than copying/pasting content manually.
*   **Cause C: Inadequate Planning Phase**
    *   **Solution:** Invest more time in the initial planning phase with Architect Mode. A well-structured Implementation Plan reduces iterations and rework.

## Memory Bank Specific Issues

**4. Issue: Memory Bank entries are inconsistent or missing important information.**

*   **Cause:** Inconsistent logging practices or unclear logging instructions.
*   **Solution:**
    *   **Standardize Format:** Ensure all modes use the format defined in `prompts/02_Utility_Prompts_And_Format_Definitions/Memory_Bank_Log_Format.md`.
    *   **Clear Instructions:** Always specify what should be logged: "Log the file changes, any issues encountered, and next steps."
    *   **Regular Reviews:** Use Architect Mode to periodically review Memory Bank entries for completeness and consistency.

**5. Issue: Memory Bank file is becoming too large for Roo to process effectively.**

*   **Cause:** Single log file accumulating too much content for efficient processing.
*   **Solution: Implement Multi-File Memory System.**
    *   Create separate Memory Bank files within a `/Memory` directory:
        *   `Memory/Phase1_Bank.md`
        *   `Memory/Frontend_Bank.md`
        *   `Memory/Backend_Bank.md`
        *   `Memory/Documentation_Bank.md`
    *   **Strategy:** When assigning tasks, specify which Memory Bank file to use based on the work area.
    *   **Coordination:** Use Architect Mode to manage which Memory Bank files are active for current work.

**6. Issue: Modes are not logging to the correct Memory Bank file.**

*   **Cause A: Unclear Instructions**
    *   **Solution:** Be explicit when assigning tasks: "Complete this task and log your work to `Memory/Frontend_Bank.md`."
*   **Cause B: Missing File References**
    *   **Solution:** Ensure the Memory Bank files exist in your workspace. Use Roo's file operations to verify and create files as needed.

## Roo Mode Coordination Issues

**7. Issue: Different modes are working on conflicting tasks.**

*   **Cause:** Lack of central coordination and unclear task assignments.
*   **Solution:**
    *   **Return to Architect Mode:** Use Architect Mode as the central coordinator to review current work and reassign tasks.
    *   **Update Implementation Plan:** Ensure the plan clearly defines task dependencies and sequencing.
    *   **Check Memory Bank:** Review recent entries to understand what each mode has been working on.

**8. Issue: Lost important context when switching between modes.**

*   **Cause:** Relying on conversation memory instead of file-based context.
*   **Solution:**
    *   **File-Based Context:** Always log important decisions and context to Memory Bank files.
    *   **Reference Files:** When switching modes, instruct the new mode to read relevant context files.
    *   **Context Handover:** Use structured handover messages that reference specific files and sections.

**9. Issue: Mode doesn't understand current project state.**

*   **Cause A: Missing Context Files**
    *   **Solution:** Ensure `Implementation_Plan.md` and `Memory_Bank.md` (or Memory directory) exist and are up-to-date.
*   **Cause B: Mode Hasn't Read Context**
    *   **Solution:** Explicitly instruct the mode: "Please read the Implementation_Plan.md and the latest entries in Memory_Bank.md to understand the current project state."

## VSCode and File Operation Issues

**10. Issue: Roo can't find or access project files.**

*   **Cause A: Incorrect Workspace Setup**
    *   **Solution:** Ensure your project is properly opened in VSCode as a workspace. RAPM files should be in the root or clearly organized directories.
*   **Cause B: File Path Issues**
    *   **Solution:** Use relative paths from the project root. Ensure RAPM files are in accessible locations like `/prompts`, `/docs`, etc.

**11. Issue: File operations are failing or incomplete.**

*   **Cause:** File permissions, VSCode integration issues, or Roo configuration problems.
*   **Solution:**
    *   **Check Permissions:** Ensure VSCode and Roo have write permissions to your project directory.
    *   **Restart Roo:** Sometimes restarting the Roo Cline extension resolves file operation issues.
    *   **Manual Verification:** Double-check that files were created/modified as expected using VSCode's file explorer.

## Performance and Efficiency Issues

**12. Issue: Roo modes are slow or unresponsive.**

*   **Cause A: Large File Processing**
    *   **Solution:** Break large files into smaller, focused sections. Use multiple Memory Bank files for large projects.
*   **Cause B: Complex Context Loading**
    *   **Solution:** Provide focused context rather than asking modes to process entire large files. Use specific file sections or summaries.

**13. Issue: Repetitive or redundant work across modes.**

*   **Cause:** Poor task coordination and unclear responsibilities.
*   **Solution:**
    *   **Clear Role Definition:** Use Architect Mode to clearly define what each mode should handle.
    *   **Regular Coordination:** Schedule regular check-ins with Architect Mode to coordinate work.
    *   **Memory Bank Reviews:** Regularly review logged work to identify and avoid redundancy.

## Advanced Coordination Issues

**14. Issue: Complex workflows spanning multiple modes are chaotic.**

*   **Cause:** Attempting complex coordination without proper workflow management.
*   **Solution:**
    *   **Use Orchestrator Mode:** Switch to 🪃 Orchestrator Mode for complex multi-step workflows.
    *   **Structured Workflows:** Follow patterns in `roo-workflows/practical-workflow-template.md`.
    *   **Phase-Based Approach:** Break complex work into clear phases managed by Architect Mode.

**15. Issue: Project artifacts (plans, logs) are becoming inconsistent.**

*   **Cause:** Multiple modes updating files without coordination.
*   **Solution:**
    *   **Central Management:** Designate Architect Mode as the primary manager of Implementation Plan updates.
    *   **Structured Updates:** Use Architect Mode to coordinate any major changes to project artifacts.
    *   **Version Control:** Use Git in VSCode to track changes to important project files.

## Prevention Strategies

To avoid common issues:

1. **Start with Strong Planning:** Invest time in thorough project discovery and planning with Architect Mode.
2. **Maintain Clear Documentation:** Keep Memory Bank and Implementation Plan files current and detailed.
3. **Use Mode Specialization:** Leverage each Roo mode for its intended purpose.
4. **Regular Coordination:** Schedule regular check-ins with Architect Mode for project oversight.
5. **File-Based Context:** Always use files for important context rather than relying on conversation memory.
6. **Structured Handovers:** Use clear, documented handovers when switching between modes.

If you encounter issues not covered here, document the problem and solution pattern, and consider contributing to this guide. The RAPM framework is designed to be robust, but real-world usage helps identify edge cases and improvement opportunities.