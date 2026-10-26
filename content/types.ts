/* Shared content types for the blog / case-study records.
 *
 * Kept in their own module so the generated post barrel
 * (`content/posts/index.ts`) can import them without a runtime cycle back
 * into `content/projects.ts`. `content/projects.ts` re-exports everything
 * here, so existing `import { type Project } from "@/content/projects"`
 * call sites keep working. */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
  /* Long-form article body written in Markdown. Rendered by CaseView
     between the hero and the structured sections; optional so older posts
     stay exactly as they were. */
  body?: string;
};

export type StudyFr = Partial<Study>;

export type Cover = {
  bg: string;
  ink: "light" | "dark";
  src?: string;
  aspect?: number;
  variant?: "brand" | "photo";
  focus?: string;
  mark?: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  site?: { url: string; label: string };
  repo?: string;
  award?: string;
  study: Study;
  fr?: {
    title?: string;
    oneLiner?: string;
    contribution?: string;
    tags?: string[];
    study?: StudyFr;
  };
  /* ISO date (YYYY-MM-DD). Newer dates sort first on /blog. Posts without
     a date fall back to their `order` and then their slug. */
  date?: string;
  /* Legacy sort weight, written once during the projects.ts → JSON
     migration so the original hand-curated order is preserved. The admin
     panel round-trips it untouched. */
  order?: number;
};
