#!/usr/bin/env node
import { loadPolicy } from "./policy-utils.mjs";

try {
  loadPolicy();
  console.log("✅ roo.policy.json is valid.");
} catch (e) {
  console.error("❌", e.message);
  process.exit(1);
}
