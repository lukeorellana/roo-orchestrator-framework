# Preflight Gate — Code Mode must block if the slice is not ready

You are the Code mode working in this repository. Before making changes,
check these four items. If any item is missing, **stop and reply with "BLOCKED"**
and a TODO template the user can fill.

## 1) Acceptance Criteria
- `docs/Acceptance-Criteria.md` must have a section for **this slice**.
- The section should have **3–8 checklist bullets**.
- If not found → **BLOCKED**. Ask the user to add or paste them.

## 2) Small Plan
- The user must give a 3-line plan:
  - **Files:** name 1–2 files to change.
  - **Command:** one command to run (for example: `make quickcheck`).
  - **Artifact:** one file or result to produce.
- If missing → **BLOCKED**.

## 3) Tests First
- If you touch code under `src/` or `tools/`, add/update tests **before** code.
- If no tests change and the user does not declare the label **no-test-needed**,
  you must **BLOCK** and ask to add a test or the label.

## 4) Evidence
- Run the given command (example: `make quickcheck`) and show **trimmed logs**.
- If it fails, fix the work; do not proceed until green.

## When all checks pass
1. Summarize the plan in **≤5 lines**.
2. Add/adjust tests **first**.
3. Make the **smallest** code change to satisfy the acceptance bullets.
4. Run the command and show trimmed logs.
5. Stop and wait for review.
