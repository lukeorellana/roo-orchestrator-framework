#!/usr/bin/env node
import fs from "fs";
import path from "path";

const baseDir = path.join(process.cwd(), ".roo-orchestrator", "Memory");
const mdPath = path.join(baseDir, "handoffs.md");
if (!fs.existsSync(mdPath)) {
  console.log("No .roo-orchestrator/Memory/handoffs.md found. Skipping migration.");
  process.exit(0);
}

const text = fs.readFileSync(mdPath, "utf8");
const outDir = path.join(baseDir, "handoffs");
fs.mkdirSync(outDir, { recursive: true });

let count = 0;
// naive extraction: look for fenced ```json blocks and dump them incrementally
const blocks = [...text.matchAll(/```json([\s\S]*?)```/g)].map(m => m[1]);
for (const b of blocks) {
  try {
    const obj = JSON.parse(b);
    const id = obj.contract_id || `H${String(Date.now()).slice(-6)}_${count}`;
    const file = path.join(outDir, `${id}.json`);
    fs.writeFileSync(file, JSON.stringify(obj, null, 2));
    console.log("Migrated", file);
    count++;
  } catch { /* skip non-JSON blocks */ }
}
console.log(`Done. Migrated ${count} JSON blocks (best-effort).`);
