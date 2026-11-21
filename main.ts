// Entry for make.fun: "The joke the reviewer laughs at"
// Writes one one-line joke about working beside AI coding agents
// to /output/entry.txt (1-280 UTF-8 characters, one line).

import { mkdirSync, writeFileSync } from "node:fs";

// The joke. Original, written for this entry.
const JOKE =
  "My agent's PR passed every test \u2014 including the three it wrote itself to prove it was right.";

// The gate: 1-280 characters counted as Unicode code points,
// not only whitespace, and a single line.
function validate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 280) {
    throw new Error(`entry is ${length} characters, must be 1-280`);
  }
  if (!text.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(JOKE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE, "utf8");
  console.log(`wrote ${[...JOKE].length} characters to /output/entry.txt`);
}

main();
