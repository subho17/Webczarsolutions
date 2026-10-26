import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const postsDir = path.join(root, "content", "posts");
const indexPath = path.join(postsDir, "index.ts");

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export interface SyncResult {
  success: boolean;
  count: number;
  error?: string;
}

const isString = (v: unknown): v is string => typeof v === "string";
const isStringArray = (v: unknown): v is string[] =>
  Array.isArray(v) && v.every(isString);

interface RawCover {
  bg?: unknown;
  ink?: unknown;
  variant?: unknown;
}

interface RawSite {
  url?: unknown;
  label?: unknown;
}

interface RawStep {
  title?: unknown;
  body?: unknown;
}

interface RawDecision {
  title?: unknown;
  why?: unknown;
}

interface RawStudy {
  role?: unknown;
  timeline?: unknown;
  context?: unknown;
  problem?: unknown;
  reflection?: unknown;
  process?: unknown;
  decisions?: unknown;
  outcomes?: unknown;
  body?: unknown;
  [key: string]: unknown;
}

export interface RawPost {
  slug?: unknown;
  title?: unknown;
  oneLiner?: unknown;
  year?: unknown;
  coverLabel?: unknown;
  contribution?: unknown;
  tags?: unknown;
  date?: unknown;
  order?: unknown;
  cover?: RawCover;
  site?: RawSite;
  study?: RawStudy;
  [key: string]: unknown;
}

export function validatePost(file: string, raw: unknown): void {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error(`${file}: root value must be a JSON object`);
  }
  const post = raw as RawPost;

  if (!isString(post.slug) || !SLUG_RE.test(post.slug)) {
    throw new Error(
      `${file}: \`slug\` must be lowercase words separated by single hyphens (e.g. "my-post-title")`
    );
  }

  for (const key of ["title", "oneLiner", "year", "coverLabel", "contribution"]) {
    const val = post[key];
    if (!isString(val) || val.trim() === "") {
      throw new Error(`${file}: \`${key}\` is required and must be a non-empty string`);
    }
  }

  if (!isStringArray(post.tags)) {
    throw new Error(`${file}: \`tags\` must be an array of strings`);
  }

  if (post.date !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(String(post.date))) {
    throw new Error(`${file}: \`date\` must look like YYYY-MM-DD`);
  }

  if (post.order !== undefined && !Number.isFinite(post.order)) {
    throw new Error(`${file}: \`order\` must be a number`);
  }

  if (post.cover !== undefined) {
    const cover = post.cover;
    if (!cover || typeof cover !== "object") {
      throw new Error(`${file}: \`cover\` must be an object`);
    }
    if (!isString(cover.bg)) {
      throw new Error(`${file}: \`cover.bg\` must be a CSS colour string`);
    }
    if (cover.ink !== "light" && cover.ink !== "dark") {
      throw new Error(`${file}: \`cover.ink\` must be "light" or "dark"`);
    }
    if (cover.variant !== undefined && cover.variant !== "brand" && cover.variant !== "photo") {
      throw new Error(`${file}: \`cover.variant\` must be "brand" or "photo"`);
    }
  }

  if (post.site !== undefined) {
    if (!post.site || !isString(post.site.url) || !isString(post.site.label)) {
      throw new Error(`${file}: \`site\` must be { url, label }`);
    }
  }

  const study = post.study;
  if (!study || typeof study !== "object") {
    throw new Error(`${file}: \`study\` is required`);
  }

  for (const key of ["role", "timeline", "context", "problem", "reflection"]) {
    if (!isString(study[key])) {
      throw new Error(`${file}: \`study.${key}\` must be a string`);
    }
  }

  if (!Array.isArray(study.process)) {
    throw new Error(`${file}: \`study.process\` must be an array`);
  }
  study.process.forEach((step: unknown, i: number) => {
    const s = step as RawStep | undefined;
    if (!s || !isString(s.title) || !isString(s.body)) {
      throw new Error(`${file}: \`study.process[${i}]\` must be { title, body }`);
    }
  });

  if (!Array.isArray(study.decisions)) {
    throw new Error(`${file}: \`study.decisions\` must be an array`);
  }
  study.decisions.forEach((decision: unknown, i: number) => {
    const d = decision as RawDecision | undefined;
    if (!d || !isString(d.title) || !isString(d.why)) {
      throw new Error(`${file}: \`study.decisions[${i}]\` must be { title, why }`);
    }
  });

  if (!isStringArray(study.outcomes)) {
    throw new Error(`${file}: \`study.outcomes\` must be an array of strings`);
  }

  if (study.body !== undefined && !isString(study.body)) {
    throw new Error(`${file}: \`study.body\` must be a string (Markdown)`);
  }
}

export function syncPosts(): SyncResult {
  try {
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true });
    }

    const files = fs
      .readdirSync(postsDir)
      .filter((name) => name.toLowerCase().endsWith(".json"))
      .sort();

    const posts: { name: string; post: RawPost & { slug: string; date?: string; order?: number } }[] = [];
    const slugs = new Map<string, string>();

    for (const name of files) {
      const file = path.join(postsDir, name);
      let parsed: unknown;
      try {
        parsed = JSON.parse(fs.readFileSync(file, "utf8"));
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        throw new Error(`${name}: invalid JSON — ${msg}`);
      }

      validatePost(name, parsed);

      const typed = parsed as RawPost & { slug: string; date?: string; order?: number };
      const expectedFile = `${typed.slug}.json`;
      if (name !== expectedFile) {
        throw new Error(`${name}: filename must match the slug (expected "${expectedFile}")`);
      }
      if (slugs.has(typed.slug)) {
        throw new Error(`${name}: duplicate slug, already used by ${slugs.get(typed.slug)}`);
      }
      slugs.set(typed.slug, name);
      posts.push({ name, post: typed });
    }

    posts.sort((a, b) => {
      const ad = a.post.date;
      const bd = b.post.date;
      if (ad && bd && ad !== bd) return ad < bd ? 1 : -1;
      if (ad && !bd) return -1;
      if (!ad && bd) return 1;

      const ao = Number.isFinite(a.post.order) ? (a.post.order as number) : Number.MAX_SAFE_INTEGER;
      const bo = Number.isFinite(b.post.order) ? (b.post.order as number) : Number.MAX_SAFE_INTEGER;
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
    return { success: true, count: posts.length };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return { success: false, count: 0, error: msg };
  }
}
