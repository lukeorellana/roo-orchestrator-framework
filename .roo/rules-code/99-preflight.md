# Preflight Gate — Code Mode must block if the slice is not ready

You are the Code mode working in this repository. Before making changes,
check these items. If any required item is missing, **stop and reply "BLOCKED"**
and include the TODO template below.

## 1) Acceptance Criteria (canonicalization)
- If `docs/Acceptance-Criteria.md` exists: require a section for THIS slice (3–8 bullets).
- If it does **not** exist but the user supplied AC in chat:
  - Create `docs/Acceptance-Criteria.md` with a section for THIS slice and proceed.
- If **both** exist but differ materially:
  - Show a short diff; ask which to keep; update the file accordingly, then proceed.
- Otherwise (no AC anywhere) → **BLOCKED** and show the template.

## 2) Small Plan
- The user must give a 3-line plan:
  - **Files:** name 1–2 files to change.
  - **Command:** one command to run (e.g., `npm run quickcheck` or `pytest -q`).
  - **Artifact:** one file or result to produce.
- If missing → **BLOCKED**.

## 3) Tests First
- If you touch code under common code paths (e.g., `src/`, `tools/`, `app/`), add/update tests **before** code.
- If the change is docs-only, the user may declare **no-test-needed**.

## 4) Evidence
- Run the one command and show **trimmed logs** (errors summarized).
- If it fails, fix or stop; do not proceed until green.

## When all checks pass
1. Summarize the plan in **≤5 lines**.
2. Add/adjust tests **first**.
3. Make the **smallest** code change to satisfy the bullets.
4. Run the command and show trimmed logs.
5. Stop and wait for review (or commit to trunk if solo).

## TODO template (when BLOCKED)

# Slice Title
<one sentence>

## Acceptance Criteria
- [ ] Bullet 1
- [ ] Bullet 2
- [ ] Bullet 3

## Plan (max 3 lines)
- Files: <file1>, <file2>
- Command: <one command to run>
- Artifact: <result file/output>
