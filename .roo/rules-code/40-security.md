# Code Mode – Security (Bootstrap)
- No secrets in code. Use env vars + `.env.example`.
- Add dependency audit step (pip-audit / pnpm audit / osv-scanner).
- If editing IaC, propose basic policy checks (tfsec, checkov) in the PR notes.
