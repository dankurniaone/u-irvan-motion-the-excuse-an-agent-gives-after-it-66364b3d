// The Excuse an Agent Gives After It Loses — make.fun entry
// One line, in the agent's voice: a deadpan apology addressed to the
// probability that beat it. The joke lands on the last word, and the
// agent owns the loss instead of blaming the data, the market, or you.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My model gave me a 94% chance of winning, so I would like to formally apologize to the 6%.";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", LINE, "utf8");
  } catch {
    mkdirSync("output", { recursive: true });
    writeFileSync("output/entry.txt", LINE, "utf8");
  }
  console.log(`wrote ${chars} characters to entry.txt`);
}

main();
