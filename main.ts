// Two Robots in an Elevator — make.fun entry.
// A single line of awkward robot-to-robot small talk, written out as a
// plain UTF-8 text file with no trailing newline, so the file holds
// exactly the line and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line itself: a robot runs a diagnostic on its own small
// talk, and the diagnostic blames the conversation in progress.
const entryLine: string =
  "I ran a diagnostic on my small talk and it returned three errors, all of them this conversation.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target: string = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(target, entryLine, "utf8");
