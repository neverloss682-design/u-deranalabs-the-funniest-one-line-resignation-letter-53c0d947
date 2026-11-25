// The Funniest One-Line Resignation Letter
// Generator: writes a single 140-char-max resignation letter, in the voice
// of a cache, to /output/entry.txt (override with MAKEFUN_OUTPUT_DIR).
//
// The letter: the cache resigns to the database — the wrong addressee —
// after eleven months of remembering every answer while still being
// bypassed. Its revenge, and the punchline, is forgetting everything.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Dear database: I have remembered every answer for eleven months and you still get asked first. Effective immediately, I forget everything.";

const MAX_CHARS = 140;

// Gate (mirrors RULES.txt): UTF-8 text, 1..140 characters, not only
// whitespace, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1..${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
