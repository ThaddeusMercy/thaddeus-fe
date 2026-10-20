import fs from "node:fs/promises";
import path from "node:path";
import { paths } from "./config.js";

/** The shared drive every bot can read and write. Paths are confined to it. */
function resolve(relative: string) {
  const full = path.resolve(paths.workspace, relative.replace(/^\/+/, ""));
  if (full !== paths.workspace && !full.startsWith(paths.workspace + path.sep)) {
    throw new Error("Path is outside the shared workspace");
  }
  return full;
}

export async function listFiles(dir = ".") {
  const root = resolve(dir);
  const out: string[] = [];
  async function walk(current: string) {
    for (const entry of await fs.readdir(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) await walk(full);
      else out.push(path.relative(paths.workspace, full));
      if (out.length >= 500) return;
    }
  }
  await walk(root);
  return out;
}

export async function readFile(file: string) {
  const text = await fs.readFile(resolve(file), "utf8");
  return text.length > 60_000 ? text.slice(0, 60_000) + "\n…[truncated at 60k characters]" : text;
}

export async function writeFile(file: string, content: string) {
  const full = resolve(file);
  await fs.mkdir(path.dirname(full), { recursive: true });
  await fs.writeFile(full, content, "utf8");
  return path.relative(paths.workspace, full);
}
