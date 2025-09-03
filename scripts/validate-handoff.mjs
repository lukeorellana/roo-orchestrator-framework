#!/usr/bin/env node
import fs from "fs";
import path from "path";
import process from "process";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true, strict: false });
addFormats(ajv);

const root = process.cwd();
const readJSON = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

const baseDir = path.join(root, ".roo-orchestrator");
const schemaDir = path.join(baseDir, "schemas");
const handoffSchema = readJSON(path.join(schemaDir, "handoff_contract.schema.json"));
const resultSchema  = readJSON(path.join(schemaDir, "result_envelope.schema.json"));

const validate = (schema, obj, label) => {
  const v = ajv.compile(schema);
  const ok = v(obj);
  if (!ok) {
    console.error(`\u274c ${label} invalid:\n`, v.errors);
    process.exitCode = 1;
  } else {
    console.log(`\u2705 ${label} valid.`);
  }
};

const globDir = (dir) => fs.existsSync(dir) ? fs.readdirSync(dir).map(f => path.join(dir, f)) : [];

const handoffFiles = globDir(path.join(baseDir, "Memory", "handoffs")).filter(f => f.endsWith(".json"));
for (const file of handoffFiles) {
  validate(handoffSchema, readJSON(file), `Handoff ${path.basename(file)}`);
}

// Optionally validate any staged result envelopes dropped to tmp/ or similar:
// e.g., validate(resultSchema, readJSON("tmp/result.json"), "Result Envelope");
