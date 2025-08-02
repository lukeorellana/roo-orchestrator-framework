# Roo Agentic Project Management (RAPM)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Version](https://img.shields.io/badge/version-v1.0.0-blue)](https://github.com/your-repo/roo-agentic-project-management/releases/tag/v1.0.0)

*Manage complex projects with a team of AI assistants using Roo Cline in VSCode, smoothly and efficiently.*

## 🙏 Credits and Acknowledgments

**RAPM is adapted from the original [Agentic Project Management (APM)](https://github.com/sdi2200262/agentic-project-management) framework created by [CobuterMan](https://github.com/sdi2200262).** 

The original APM framework pioneered the concept of structured multi-agent AI project management and provided the foundational methodology that RAPM builds upon. We are grateful for the excellent work and open-source contribution that made this adaptation possible.

**Key Attribution:**
- **Original Framework**: [Agentic Project Management (APM)](https://github.com/sdi2200262/agentic-project-management) 
- **Original Creator**: [CobuterMan (sdi2200262)](https://github.com/sdi2200262)
- **Original License**: MIT License
- **RAPM Adaptation**: Converted for Roo Cline and VSCode integration

This project maintains the MIT license and builds upon the solid foundation established by the original APM framework.

## 🚀 Quick Start (5 Minutes to Get Running!)

### Step 1: Install Roo Cline
```bash
# Open VSCode
# Go to Extensions (Ctrl/Cmd + Shift + X)
# Search for "Roo Cline" and install it
# Configure your API credentials in the extension settings
```

### Step 2: Clone and Copy
```bash
# Clone this repository
git clone https://github.com/lukeorellana/roo-agentic-project-management.git

# Copy the essential folders to your project
cp -r roo-agentic-project-management/prompts /path/to/your/project/
cp -r roo-agentic-project-management/docs /path/to/your/project/
cp -r roo-agentic-project-management/roo-workflows /path/to/your/project/

# That's it! You now have RAPM in your project.
```

### Step 3: Start Your Project Manager
```bash
# Open VSCode in your project directory
# Open Roo Cline and switch to 🏗️ Architect Mode
# Copy the content from: prompts/00_Initial_Manager_Setup/01_Initiation_Prompt.md
# Paste it into Architect Mode
# Answer the questions - BOOM! Your AI project manager is running!
```

## What You Just Set Up

**RAPM** uses Roo Cline's mode system to create a team of specialized AI assistants:

- **🏗️ Architect Mode**: Your project manager - plans, coordinates, and oversees everything
- **💻 Code Mode**: Your developer - implements features and writes code  
- **🪲 Debug Mode**: Your QA specialist - finds and fixes problems
- **❓ Ask Mode**: Your researcher - investigates and documents
- **🪃 Orchestrator Mode**: Your coordinator - handles complex workflows

## How It Works

1. **Architect Mode** talks to you, understands your project, and creates a plan
2. **Architect Mode** assigns tasks to the right specialist modes
3. **Each mode** does its work and logs progress to a shared "Memory Bank"
4. **🚀 NEW: Each mode automatically generates handoff prompts** for the next mode
5. **You simply copy/paste** the generated prompts - no manual coordination needed!
6. **Repeat** until your project is complete with seamless mode transitions!

## Essential Files You Copied

```
your-project/
├── prompts/                    # The brain of RAPM
│   ├── 00_Initial_Manager_Setup/
│   │   └── 01_Initiation_Prompt.md    # Start here! 👈
│   ├── 01_Manager_Mode_Core_Guides/   # Manager instructions
│   └── 02_Utility_Prompts_And_Format_Definitions/  # Mode guides
└── roo-workflows/              # Workflow patterns
    ├── README.md
    ├── mode-coordination-patterns.md
    └── practical-workflow-template.md
```

## What Happens After You Start

1. **Architect Mode** will ask about your project
2. It will create an `Implementation_Plan.md` file with your project breakdown
3. It will set up a `Memory/` directory to track all work
4. It will start assigning tasks to appropriate modes
5. You just coordinate between modes as work gets done!

## Example: Building a Web App

```markdown
# Architect Mode creates this plan automatically:

Phase 1: Backend Setup
├── Task A1: Database Design (Code Mode)
├── Task A2: API Endpoints (Code Mode)  
├── Task A3: Authentication (Code Mode)
└── Task A4: Testing (Debug Mode)

Phase 2: Frontend Development
├── Task B1: UI Components (Code Mode)
├── Task B2: API Integration (Code Mode)
└── Task B3: User Testing (Debug Mode)

Phase 3: Documentation & Deployment
├── Task C1: User Guide (Ask Mode)
├── Task C2: API Docs (Ask Mode)
└── Task C3: Deployment (Orchestrator Mode)
```

## Pro Tips

- **Start Simple**: Let Architect Mode guide you through your first project
- **Trust the Process**: Each mode specializes in what it does best
- **Review Memory Bank**: Check the `Memory/` directory to see all progress
- **Ask Questions**: Architect Mode can explain anything you don't understand

## When You Need Help

The `docs/` folder has comprehensive guides, but honestly, just start with the Quick Start above. The Architect Mode will teach you everything as you go!

**Key Docs if You Want to Dive Deeper:**
- 📖 **[Complete Documentation](docs/)** - Everything about RAPM
- 🎯 **[Manager Task Initiation](docs/08_Manager_Task_Initiation_Guide.md)** - How the Manager coordinates everything
- 📊 **[Data Flow Guide](docs/06_Data_Flow_and_Task_Management.md)** - How information flows between tasks
- 🔄 **[Mode Coordination](roo-workflows/mode-coordination-patterns.md)** - Advanced coordination patterns

## That's It!

Seriously, that's all you need. Clone, copy the `prompts/` and `roo-workflows/` folders, start Architect Mode with the initiation prompt, and you're managing complex projects with AI assistants.

**The Architect Mode will handle everything else and teach you the system as you use it.**

---

**Credits**: Built on the excellent foundation of [APM by CobuterMan](https://github.com/sdi2200262/agentic-project-management), adapted for Roo Cline's powerful mode system.
