// Held entry for make.fun's "Make the AI judge feel held" bounty.
// The program writes one short, original text to /output/entry.txt.
// Deterministic, no network, no dependencies: it only writes a constant.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The kettle ticks as it cools, and the light on the wall does not move. You are not late. The chair holds your weight the way it always has, the room keeps its own small sounds, and nothing here asks you to be anywhere else.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
