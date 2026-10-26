/* One-shot migration: content/projects.ts (the hand-authored array) →
 * content/posts/<slug>.json, one file per post.
 *
 * Run with `node scripts/migrate-projects.mjs`, then delete this file. It is
 * intentionally NOT wired into npm scripts: re-running it would overwrite any
 * edits made through the admin panel.
 *
 * The original array order is preserved by stamping each record with an
 * `order` field (1-based). `scripts/posts.mjs` sorts on `date`, then `order`,
 * then `slug`, so the blog list keeps its curated ordering until a dated post
 * is added. */

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";

const root = process.cwd();
const sourcePath = path.join(root, "content", "projects.ts");
const postsDir = path.join(root, "content", "posts");

if (!fs.existsSync(sourcePath)) {
  console.error(`✖ ${sourcePath} not found — nothing to migrate.`);
  process.exit(1);
}

const source = fs.readFileSync(sourcePath, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
  fileName: "projects.ts",
}).outputText;

const tempPath = path.join(root, "content", ".projects.migrate.cjs");
fs.writeFileSync(tempPath, compiled, "utf8");

let PROJECTS;
try {
  const require = createRequire(import.meta.url);
  ({ PROJECTS } = require(tempPath));
} finally {
  fs.unlinkSync(tempPath);
}

if (!Array.isArray(PROJECTS) || PROJECTS.length === 0) {
  console.error("✖ Could not read PROJECTS from content/projects.ts");
  process.exit(1);
}

fs.mkdirSync(postsDir, { recursive: true });

const seen = new Set();
for (const [index, project] of PROJECTS.entries()) {
  const slug = String(project?.slug ?? "").trim();
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    console.error(`✖ [${index}] invalid slug: ${JSON.stringify(project?.slug)}`);
    process.exit(1);
  }
  if (seen.has(slug)) {
    console.error(`✖ duplicate slug: ${slug}`);
    process.exit(1);
  }
  seen.add(slug);

  const record = { order: index + 1, ...project };
  const file = path.join(postsDir, `${slug}.json`);
  fs.writeFileSync(file, `${JSON.stringify(record, null, 2)}\n`, "utf8");
  console.log(`✓ ${path.relative(root, file)}`);
}

console.log(`\nMigrated ${PROJECTS.length} posts → content/posts/`);
console.log("Next: run `node scripts/posts.mjs` to generate content/posts/index.ts");
