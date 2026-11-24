import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast's angle: not "my phone dies fast" (the obvious complaint),
// but the phone's own contradiction — it panics at 20% and then survives
// for hours on 1%, as if the warning itself was a lie. The specific,
// observable behaviour is the battery percentage lying, not the battery
// being small.
const line =
  "My phone screams about low battery at 20%, then calmly runs on 1% for two hours like it made the whole thing up.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
