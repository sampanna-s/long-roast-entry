import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "The committee can make an AI CEO explain the next decade under oath, but its own evidence still sits on the dais as final_FINAL(3).docx, waiting for someone powerful enough to make a PDF.";

function assertValidRoast(text) {
  const chars = [...text].length;
  if (chars < 1 || chars > 320 || text.trim().length === 0) {
    throw new Error(`entry must be 1 to 320 non-whitespace characters; got ${chars}`);
  }
}

assertValidRoast(roast);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const temporaryPath = join(outputDir, ".entry.txt.tmp");
const finalPath = join(outputDir, "entry.txt");
writeFileSync(temporaryPath, roast, "utf8");
renameSync(temporaryPath, finalPath);
