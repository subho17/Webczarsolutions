/* Validate content/posts/*.json and regenerate content/posts/index.ts.
 *
 * Runs automatically before `next dev` and `next build` (npm `predev` /
 * `prebuild` hooks) and can be run by hand with `npm run posts:sync`.
 *
 * Why a generated barrel: the app needs a statically analysable import list
 * (no fs access at runtime — the site is a static export and post records are
 * imported by client components). The admin panel writes one JSON file per
 * post, this script turns that folder into a typed array.
 *
 * Ordering: newest `date` first, then `order` (the hand-curated legacy
 * weight), then slug. Posts without a date land after dated ones, which keeps
 * the original projects.ts ordering intact until the first new post is added. */

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const postsDir = path.join(root, "content", "posts");
const indexPath = path.join(postsDir, "index.ts");
const rel = (p) => path.relative(root, p);

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function fail(file, message) {
  console.error(`\n✖ ${file ? `${file}: ` : ""}${message}\n`);
  process.exit(1);
}

const isString = (v) => typeof v === "string";
const isStringArray = (v) => Array.isArray(v) && v.every(isString);

function validate(file, post) {
  if (!post || typeof post !== "object" || Array.isArray(post)) {
    fail(file, "root value must be a JSON object");
  }

  if (!isString(post.slug) || !SLUG_RE.test(post.slug)) {
    fail(file, "`slug` must be lowercase words separated by single hyphens");
  }
  for (const key of ["title", "oneLiner", "year", "coverLabel", "contribution"]) {
    if (!isString(post[key]) || post[key].trim() === "") {
      fail(file, `\`${key}\` is required and must be a non-empty string`);
    }
  }
  if (!isStringArray(post.tags)) {
    fail(file, "`tags` must be an array of strings");
  }
  if (post.date !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(String(post.date))) {
    fail(file, "`date` must look like YYYY-MM-DD");
  }
  if (post.order !== undefined && !Number.isFinite(post.order)) {
    fail(file, "`order` must be a number");
  }

  if (post.cover !== undefined) {
    const cover = post.cover;
    if (!cover || typeof cover !== "object") fail(file, "`cover` must be an object");
    if (!isString(cover.bg)) fail(file, "`cover.bg` must be a CSS colour string");
    if (cover.ink !== "light" && cover.ink !== "dark") {
      fail(file, '`cover.ink` must be "light" or "dark"');
    }
    if (cover.variant !== undefined && cover.variant !== "brand" && cover.variant !== "photo") {
      fail(file, '`cover.variant` must be "brand" or "photo"');
    }
  }

  if (post.site !== undefined) {
    if (!post.site || !isString(post.site.url) || !isString(post.site.label)) {
      fail(file, "`site` must be { url, label }");
    }
  }

  const study = post.study;
  if (!study || typeof study !== "object") fail(file, "`study` is required");
  for (const key of ["role", "timeline", "context", "problem", "reflection"]) {
    if (!isString(study[key])) fail(file, `\`study.${key}\` must be a string`);
  }
  if (!Array.isArray(study.process)) fail(file, "`study.process` must be an array");
  study.process.forEach((step, i) => {
    if (!step || !isString(step.title) || !isString(step.body)) {
      fail(file, `\`study.process[${i}]\` must be { title, body }`);
    }
  });
  if (!Array.isArray(study.decisions)) fail(file, "`study.decisions` must be an array");
  study.decisions.forEach((decision, i) => {
    if (!decision || !isString(decision.title) || !isString(decision.why)) {
      fail(file, `\`study.decisions[${i}]\` must be { title, why }`);
    }
  });
  if (!isStringArray(study.outcomes)) fail(file, "`study.outcomes` must be an array of strings");
  if (study.body !== undefined && !isString(study.body)) {
    fail(file, "`study.body` must be a string (Markdown)");
  }

  if (post.fr !== undefined) {
    const fr = post.fr;
    if (!fr || typeof fr !== "object") fail(file, "`fr` must be an object");
    for (const key of ["title", "oneLiner", "contribution"]) {
      if (fr[key] !== undefined && !isString(fr[key])) fail(file, `\`fr.${key}\` must be a string`);
    }
    if (fr.tags !== undefined && !isStringArray(fr.tags)) {
      fail(file, "`fr.tags` must be an array of strings");
    }
    if (fr.study !== undefined) {
      const s = fr.study;
      if (!s || typeof s !== "object") fail(file, "`fr.study` must be an object");
      for (const key of ["role", "timeline", "context", "problem", "reflection"]) {
        if (s[key] !== undefined && !isString(s[key])) {
          fail(file, `\`fr.study.${key}\` must be a string`);
        }
      }
      if (s.outcomes !== undefined && !isStringArray(s.outcomes)) {
        fail(file, "`fr.study.outcomes` must be an array of strings");
      }
      if (s.body !== undefined && !isString(s.body)) {
        fail(file, "`fr.study.body` must be a string (Markdown)");
      }
      if (s.process !== undefined) {
        if (!Array.isArray(s.process)) fail(file, "`fr.study.process` must be an array");
        s.process.forEach((step, i) => {
          if (!step || !isString(step.title) || !isString(step.body)) {
            fail(file, `\`fr.study.process[${i}]\` must be { title, body }`);
          }
        });
      }
      if (s.decisions !== undefined) {
        if (!Array.isArray(s.decisions)) fail(file, "`fr.study.decisions` must be an array");
        s.decisions.forEach((decision, i) => {
          if (!decision || !isString(decision.title) || !isString(decision.why)) {
            fail(file, `\`fr.study.decisions[${i}]\` must be { title, why }`);
          }
        });
      }
    }
  }
}

if (!fs.existsSync(postsDir)) {
  fail(null, `missing folder ${rel(postsDir)}`);
}

const files = fs
  .readdirSync(postsDir)
  .filter((name) => name.toLowerCase().endsWith(".json"))
  .sort();

const posts = [];
const slugs = new Map();

for (const name of files) {
  const file = path.join(postsDir, name);
  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    fail(rel(file), `invalid JSON — ${error.message}`);
  }

  validate(rel(file), parsed);

  const expectedFile = `${parsed.slug}.json`;
  if (name !== expectedFile) {
    fail(rel(file), `filename must match the slug (expected "${expectedFile}")`);
  }
  if (slugs.has(parsed.slug)) {
    fail(rel(file), `duplicate slug, already used by ${slugs.get(parsed.slug)}`);
  }
  slugs.set(parsed.slug, rel(file));
  posts.push({ name, post: parsed });
}

posts.sort((a, b) => {
  const ad = a.post.date;
  const bd = b.post.date;
  if (ad && bd && ad !== bd) return ad < bd ? 1 : -1;
  if (ad && !bd) return -1;
  if (!ad && bd) return 1;

  const ao = Number.isFinite(a.post.order) ? a.post.order : Number.MAX_SAFE_INTEGER;
  const bo = Number.isFinite(b.post.order) ? b.post.order : Number.MAX_SAFE_INTEGER;
  if (ao !== bo) return ao - bo;

  return a.post.slug < b.post.slug ? -1 : 1;
});

const imports = posts
  .map(({ name }, i) => `import p${i} from "./${name}";`)
  .join("\n");
const entries = posts.map((_, i) => `  p${i} as Project,`).join("\n");

const output = `/* AUTO-GENERATED FILE — do not edit by hand.
 *
 * Source of truth: content/posts/*.json (one file per post).
 * Regenerate with \`npm run posts:sync\`, or automatically via the npm
 * \`predev\` / \`prebuild\` hooks. Ordering: newest date first, then legacy
 * \`order\`, then slug. */

import type { Project } from "../types";
${imports ? `\n${imports}\n` : ""}
export const POSTS: Project[] = [
${entries}
];
`;

fs.writeFileSync(indexPath, output, "utf8");

const publicDataPath = path.join(root, "public", "posts-data.json");
fs.writeFileSync(publicDataPath, JSON.stringify(posts.map((p) => p.post), null, 2), "utf8");

console.log(
  `✓ posts: ${posts.length} record${posts.length === 1 ? "" : "s"} → ${rel(indexPath)} & ${rel(publicDataPath)}`
);
