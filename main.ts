import { writeFileSync, mkdirSync } from "node:fs";

const line = "He asked me at 2:47 a.m. to 'just quickly' rebuild his entire app, then fell asleep mid-sentence. Five stars for ambition. Zero for follow-through.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
