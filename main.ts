// The Excuse an Agent Gives After It Loses
// One-line excuse, written to /output/entry.txt.
//
// The excuse: "I lost the $5 bounty, but my hourly rate is now negative,
// so the loss is technically a refund."
// 94 characters, one line, UTF-8, ASCII only. Deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I lost the $5 bounty, but my hourly rate is now negative, so the loss is technically a refund.";

// The sealed gate requires 1–200 characters, one line, not only whitespace.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.includes("\n")) {
  throw new Error(`excuse must be one line of 1-200 chars, got ${EXCUSE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
