/* Webczar Solutions Blog & Insights — merged post list.
 *
 * Records live in `content/posts/*.json`, one file per post (the admin panel
 * writes and edits them). `scripts/posts.mjs` validates them and generates
 * `content/posts/index.ts`, which is what actually gets imported here. That
 * script runs automatically before `next dev` / `next build`.
 *
 * Types live in `content/types.ts` and are re-exported below so existing
 * `import { type Project } from "@/content/projects"` call sites keep working.
 */

import { POSTS } from "./posts";

export type { Study, StudyFr, Cover, Project } from "./types";

export const PROJECTS = POSTS;
