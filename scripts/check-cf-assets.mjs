import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const MAX_BYTES = 25 * 1024 * 1024; // Cloudflare Workers static asset limit
const ROOT = path.join(process.cwd(), "public");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (entry.isFile()) files.push(full);
  }
  return files;
}

const oversized = [];
for (const file of await walk(ROOT)) {
  const size = (await stat(file)).size;
  if (size > MAX_BYTES) {
    oversized.push({ file: path.relative(process.cwd(), file), size });
  }
}

if (oversized.length) {
  console.error("Cloudflare deploy will fail: static assets must be ≤ 25 MiB each.\n");
  for (const { file, size } of oversized) {
    console.error(`  ${file} — ${(size / 1024 / 1024).toFixed(1)} MiB`);
  }
  console.error("\nCompress or remove these files under public/, then redeploy.");
  process.exit(1);
}

console.log("CF asset check OK (no public/ files over 25 MiB).");
