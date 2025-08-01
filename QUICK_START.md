# RAPM Quick Start Checklist

## ✅ Setup Checklist (5 Minutes)

### Prerequisites
- [ ] VSCode installed
- [ ] Roo Cline extension installed and configured

### Installation
```bash
# 1. Clone RAPM
git clone https://github.com/your-repo/roo-agentic-project-management.git

# 2. Copy to your project (replace with your actual project path)
cp -r roo-agentic-project-management/prompts /path/to/your/project/
cp -r roo-agentic-project-management/roo-workflows /path/to/your/project/
```

### Launch Your AI Project Manager
1. **Open your project in VSCode**
2. **Open Roo Cline** 
3. **Switch to 🏗️ Architect Mode**
4. **Copy and paste this file**: `prompts/00_Initial_Manager_Setup/01_Initiation_Prompt.md`
5. **Send it to Architect Mode**
6. **Answer the questions** about your project

## 🎯 What Happens Next

The Architect Mode will:
- [ ] Ask about your project goals and requirements
- [ ] Create an `Implementation_Plan.md` with your project breakdown
- [ ] Set up a `Memory/` directory to track all work
- [ ] Start assigning tasks to appropriate Roo modes
- [ ] Guide you through the entire project management process

## 📁 Files You Should See After Setup

```
your-project/
├── Implementation_Plan.md     # Your project plan (created by Architect)
├── Memory/                    # Work logs (created by Architect)
├── prompts/                   # RAPM framework (you copied this)
└── roo-workflows/            # Workflow patterns (you copied this)
```

## 🔄 Typical Workflow

1. **Architect Mode** creates project plan and assigns first task
2. **Switch to appropriate mode** (Code, Debug, Ask, or Orchestrator)
3. **Complete the assigned task** following the detailed instructions
4. **Log work** to the Memory Bank as specified
5. **Return to Architect Mode** for review and next task assignment
6. **Repeat** until project complete!

## 🆘 If Something Goes Wrong

- **Can't find the initiation prompt?** Look in `prompts/00_Initial_Manager_Setup/01_Initiation_Prompt.md`
- **Architect Mode seems confused?** Make sure you copied the full content of the initiation prompt
- **Not sure what to do next?** Ask the Architect Mode directly - it will guide you
- **Want to understand more?** Check the `docs/` folder for comprehensive guides

## 💡 Pro Tips

- **Let the Architect Mode teach you** - it knows the system best
- **Don't overthink it** - just follow the mode's instructions
- **Check the Memory Bank** - review `Memory/` to see all progress
- **Trust the process** - each mode specializes in what it does best

That's it! You're ready to manage complex projects with AI assistants. The Architect Mode will handle the rest.