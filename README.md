# Roo Architect Trunk Pack

This repository provides an Orchestrator plus three kickoff Architect modes and lightweight Code-mode rules for a trunk-based, slice-first workflow in Roo.

## Quickstart

Paste into a fresh repo root to bootstrap the Architect pack.

### macOS/Linux

```bash
tmp=$(mktemp -d)
git clone https://github.com/lukeorellana/roo-orchestrator-framework "$tmp"
cp "$tmp/.roomodes" .
mkdir -p .roo/commands .roo/rules-code .roo-orchestrator docs
cp -R "$tmp/.roo/commands/." .roo/commands/
cp -R "$tmp/.roo/rules-code/." .roo/rules-code/
cp "$tmp/.roo/Makefile" .roo/Makefile
cp "$tmp/.roo/pytest.ini" .roo/pytest.ini
cp -R "$tmp/.roo-orchestrator/." .roo-orchestrator/
cp -R "$tmp/docs/." docs/
echo 'Bootstrap OK: .roomodes .roo/commands .roo/rules-code .roo/Makefile .roo/pytest.ini .roo-orchestrator docs'
rm -rf "$tmp"
```

### Windows PowerShell

```powershell
$tmp = New-Item -ItemType Directory -Path ([System.IO.Path]::GetTempPath() + [System.Guid]::NewGuid().ToString())
git clone https://github.com/lukeorellana/roo-orchestrator-framework $tmp
Copy-Item -Force "$tmp/.roomodes" "."
New-Item -ItemType Directory -Force ".roo/commands" | Out-Null
New-Item -ItemType Directory -Force ".roo/rules-code" | Out-Null
New-Item -ItemType Directory -Force ".roo-orchestrator" | Out-Null
New-Item -ItemType Directory -Force "docs" | Out-Null
Copy-Item -Force -Recurse "$tmp/.roo/commands/*" ".roo/commands"
Copy-Item -Force -Recurse "$tmp/.roo/rules-code/*" ".roo/rules-code"
Copy-Item -Force "$tmp/.roo/Makefile" ".roo/Makefile"
Copy-Item -Force "$tmp/.roo/pytest.ini" ".roo/pytest.ini"
Copy-Item -Force -Recurse "$tmp/.roo-orchestrator/*" ".roo-orchestrator"
Copy-Item -Force -Recurse "$tmp/docs/*" "docs"
Write-Host "Bootstrap OK: .roomodes .roo/commands .roo/rules-code .roo/Makefile .roo/pytest.ini .roo-orchestrator docs"
Remove-Item -Recurse -Force $tmp
```

## Architect Kickoff
Run `/init-architecture` at project start or major pivots to generate docs under `docs/` and stack rules in `.roo/`:

1. **🧭 Product Architect** — writes `docs/PRD.md` and `docs/Assumptions.md`
2. **🎨 UX Architect** — writes `docs/UX-Brief.md` and `docs/Acceptance-Criteria.md`
3. **🏗️ Solution Architect** — writes `docs/ImplementationGuide.md` and `docs/Tech-Choices.md`, and (re)generates stack rules in `.roo/rules-code/`

After the kickoff sequence, the Orchestrator takes over to plan and delegate slices.

## Trunk-Based Slice Workflow

Daily coding uses **Code mode** plus a tiny slice contract:
1) Write 3–8 Acceptance Criteria bullets in `docs/Acceptance-Criteria.md`.
2) Plan in 3 lines: **Files** (1–2), **Command** (`make quickcheck`), **Artifact** (one file/result).
3) Ask Code mode to add tests first, make the smallest change, and run the command.
4) Commit to trunk in small, green steps.

Use Architect modes only at project start or major pivots to refresh PRD, UX, and Implementation Guide and to regenerate `.roo/rules-code/*`.

**Credits:** Big kudos to Switch Dimension for the inspiration and excellent write‑up on AI project setup.
Read the guide: <https://notes.switchdimension.com/AI-Dev-Project-Setup-Prompts-18fb5b07a94380758bd6e92baa5e8c98>
