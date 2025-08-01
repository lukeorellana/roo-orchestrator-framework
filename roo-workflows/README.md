# RAPM Framework - Roo Cline Workflow Configurations

This directory contains workflow configurations and patterns designed to enhance the Roo Agentic Project Management (RAPM) framework when used within Roo Cline and VSCode.

**These workflows leverage Roo Cline's mode system and built-in tools to provide structured, efficient project management capabilities.**

## How These Workflows Work

Roo workflows are designed around Roo Cline's actual capabilities:

1. **Mode-Specific Patterns:** Each Roo mode (Architect, Code, Debug, Ask, Orchestrator) has optimized workflow patterns
2. **Tool-Based Operations:** Leveraging Roo's built-in tools for file management, search, and analysis
3. **Context Management:** Structured approaches to maintaining context across mode transitions
4. **Todo Integration:** Using Roo's todo system for task tracking and progress management
5. **File Operations:** Systematic use of read_file, write_to_file, search_files, and apply_diff

This approach ensures:
1. **Native Integration:** Workflows work naturally with Roo's existing capabilities
2. **Flexibility:** Patterns can be adapted to different project types and requirements
3. **Efficiency:** Optimized for Roo's strengths in file operations and mode coordination
4. **Realism:** Based on actual Roo Cline features, not hypothetical tools

## Available Workflow Patterns

### Project Management Workflows

* **`project-setup-workflow.md`**
  * **Purpose:** Standardized approach for initializing new projects with RAPM
  * **Covers:** Directory structure creation, initial planning, Memory Bank setup
  * **Best For:** Starting new projects from scratch

* **`mode-coordination-patterns.md`**
  * **Purpose:** Proven patterns for coordinating work between different Roo modes
  * **Covers:** Mode transition protocols, context handover, task delegation
  * **Best For:** Complex projects requiring multiple mode coordination

### Development Workflows

* **`practical-workflow-template.md`**
  * **Purpose:** Daily workflow templates for consistent project management
  * **Covers:** Mode-specific work patterns, handover protocols, progress tracking
  * **Best For:** Day-to-day project execution and coordination

## Using Workflows in Your Project

1. **Review Available Patterns:** Examine the workflow files to understand available patterns
2. **Select Appropriate Workflows:** Choose workflows that match your project's needs
3. **Adapt to Your Context:** Modify patterns based on your specific requirements
4. **Integrate with RAPM:** Use workflows in conjunction with RAPM's core prompts and guides

## Workflow Categories

### 🏗️ Architect Mode Workflows
- Project planning and strategic coordination
- Requirements gathering and analysis
- High-level design and architecture
- Cross-mode coordination and management

### 💻 Code Mode Workflows  
- Implementation and development
- File creation and modification
- Technical documentation
- Code review and quality assurance

### 🪲 Debug Mode Workflows
- Problem diagnosis and troubleshooting
- Error analysis and resolution
- Testing coordination
- Performance optimization

### ❓ Ask Mode Workflows
- Research and knowledge gathering
- Documentation creation
- Technical explanations
- Best practice guidance

### 🪃 Orchestrator Mode Workflows
- Complex multi-step coordination
- Cross-mode dependency management
- Large-scale project orchestration
- Advanced workflow automation

## Best Practices

* **Start Simple:** Begin with basic workflows and gradually adopt more complex patterns
* **Customize as Needed:** Adapt workflows to your specific project requirements
* **Document Adaptations:** Keep track of how you've modified workflows for future reference
* **Regular Review:** Periodically review and update workflows based on experience
* **Share Improvements:** Consider contributing successful adaptations back to the RAPM community

## Integration with RAPM Core

These workflows are designed to complement RAPM's core components:

* **Memory Bank System:** Workflows include logging and documentation patterns
* **Implementation Plans:** Workflows support structured plan execution
* **Mode Coordination:** Workflows provide proven patterns for mode interaction
* **Context Management:** Workflows include context preservation and handover protocols

## Roo Cline Tool Integration

All workflows are designed to work with Roo Cline's actual tools:

* **File Operations:** read_file, write_to_file, apply_diff for project management
* **Context Gathering:** search_files, list_files for understanding project state
* **Code Analysis:** list_code_definition_names for architectural understanding
* **Todo Management:** update_todo_list for progress tracking
* **Mode Switching:** Natural transitions between specialized Roo modes

By combining these workflows with RAPM's core prompts and guides, you can create a powerful, efficient system for managing complex AI-assisted projects using only Roo Cline's built-in capabilities within VSCode.