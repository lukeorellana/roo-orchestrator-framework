#!/usr/bin/env node
import fs from "fs";
import path from "path";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const root = process.cwd();
const readJSON = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

export function loadPolicy() {
  const policyPath = path.join(root, "roo.policy.json");
  if (!fs.existsSync(policyPath)) throw new Error("roo.policy.json not found");
  const policy = readJSON(policyPath);

  // Validate against schema if present
  const schemaPath = path.join(root, ".roo-orchestrator", "schemas", "roo_policy.schema.json");
  if (fs.existsSync(schemaPath)) {
    const ajv = new Ajv({ allErrors: true, allowUnionTypes: true, strict: false });
    addFormats(ajv);
    const schema = readJSON(schemaPath);
    const validate = ajv.compile(schema);
    if (!validate(policy)) {
      const errs = JSON.stringify(validate.errors, null, 2);
      throw new Error("roo.policy.json invalid against schema:\n" + errs);
    }
  }

  return policy;
}

/**
 * Expand tokens in arrays like ["@group:web_server", "src/only.ts"]
 * Returns a flat list with duplicates removed.
 */
export function expandGroups(arr, policy) {
  const out = [];
  for (const item of arr || []) {
    const m = typeof item === "string" ? item.match(/^@group:(.+)$/) : null;
    if (m) {
      const name = m[1];
      const globs = policy.groups?.[name] || [];
      out.push(...globs);
    } else {
      out.push(item);
    }
  }
  return Array.from(new Set(out));
}

/**
 * Expand @tests:<group> tokens into command arrays.
 */
export function expandTests(arr, policy) {
  const out = [];
  for (const item of arr || []) {
    const m = typeof item === "string" ? item.match(/^@tests:(.+)$/) : null;
    if (m) {
      const name = m[1];
      const cmds = policy.defaults?.tests_for_group?.[name] || [];
      out.push(...cmds);
    } else {
      out.push(item);
    }
  }
  return Array.from(new Set(out));
}
