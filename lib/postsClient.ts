"use client";

import { PROJECTS, type Project } from "@/content/projects";

const STORAGE_KEY = "webczar_published_posts";

/**
 * Loads posts from browser localStorage.
 */
export function getLocalCachedPosts(): Project[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Saves posts to browser localStorage.
 */
export function saveLocalCachedPosts(posts: Project[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch {}
}

/**
 * Saves or updates a single post in localStorage.
 */
export function cacheSinglePost(post: Project, originalSlug?: string) {
  if (typeof window === "undefined") return;
  const current = getLocalCachedPosts();
  const targetSlug = originalSlug || post.slug;
  const filtered = current.filter((p) => p.slug !== targetSlug && p.slug !== post.slug);
  const updated = [post, ...filtered];
  saveLocalCachedPosts(updated);
}

/**
 * Removes a post by slug from localStorage.
 */
export function removeCachedPost(slug: string) {
  if (typeof window === "undefined") return;
  const current = getLocalCachedPosts();
  const updated = current.filter((p) => p.slug !== slug);
  saveLocalCachedPosts(updated);
}

/**
 * Merges multiple post lists, deduplicating by slug (first seen wins),
 * and sorting descending by publication date/year.
 */
export function mergePosts(...sources: (Project[] | undefined | null)[]): Project[] {
  const map = new Map<string, Project>();

  for (const list of sources) {
    if (!Array.isArray(list)) continue;
    for (const post of list) {
      if (post && post.slug && !map.has(post.slug)) {
        map.set(post.slug, post);
      }
    }
  }

  const result = Array.from(map.values());
  return result.sort((a, b) => {
    const ad = a.date || a.year || "";
    const bd = b.date || b.year || "";
    if (ad !== bd) return ad < bd ? 1 : -1;
    const ao = typeof a.order === "number" ? a.order : 999;
    const bo = typeof b.order === "number" ? b.order : 999;
    if (ao !== bo) return ao - bo;
    return (a.slug || "").localeCompare(b.slug || "");
  });
}

/**
 * Fetches all live posts from:
 * 1. /api/posts.php (Hostinger cloud backend)
 * 2. http://localhost:3001/api/posts (Local Node bridge during local dev)
 * 3. /posts-data.json (public static JSON data file)
 * Combined with local storage and built-in static PROJECTS.
 */
export async function fetchLivePosts(): Promise<Project[]> {
  const localCache = getLocalCachedPosts();
  let serverPosts: Project[] = [];

  // 1. Try Hostinger PHP endpoint
  try {
    const res = await fetch("/api/posts.php", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data && data.success && Array.isArray(data.posts) && data.posts.length > 0) {
        serverPosts = data.posts;
      }
    }
  } catch {}

  // 2. Try local bridge daemon if running on localhost
  if (serverPosts.length === 0 && typeof window !== "undefined" && window.location.hostname === "localhost") {
    try {
      const res = await fetch("http://localhost:3001/api/posts", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data && data.success && Array.isArray(data.posts) && data.posts.length > 0) {
          serverPosts = data.posts;
        }
      }
    } catch {}
  }

  // 3. Fallback to /posts-data.json
  if (serverPosts.length === 0) {
    try {
      const res = await fetch("/posts-data.json", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          serverPosts = data;
        }
      }
    } catch {}
  }

  // Priority order: serverPosts > localCache > PROJECTS
  const merged = mergePosts(serverPosts, localCache, PROJECTS);

  if (serverPosts.length > 0) {
    saveLocalCachedPosts(merged);
  }

  return merged;
}
