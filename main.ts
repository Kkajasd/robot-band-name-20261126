// Name the Robot Band — make.fun entry (program/v1, Node 22, stdlib only).
// Writes one funny robot band name + a few words on its hit song to
// /output/entry.txt (max 200 chars, exactly one line).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "The Roomba Rumba \u2014 hit single \u2018Suck It Up (Under the Sofa)\u2019 went vacuum-platinum; their tour rider is just a charging dock.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
