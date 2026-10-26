"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import { POSTS } from "@/content/posts";
import type { Project } from "@/content/types";
import { renderMarkdown, countWords } from "@/lib/markdown";
import styles from "./admin.module.css";

const ADMIN_PASS = "webczar2026";
const BRIDGE_URL = "http://localhost:3001";

const COLOR_PRESETS = [
  "#6D3BF5",
  "#ff2e0f",
  "#0ea5e9",
  "#10b981",
  "#f59e0b",
  "#ec4899",
  "#8b5cf6",
  "#141414",
];

const DEFAULT_TAG_OPTIONS = [
  "Digital Marketing",
  "SEO & PPC",
  "Chandigarh",
  "Mohali",
  "Tricity",
  "Zirakpur",
  "Panchkula",
  "Bulk SMS",
  "IVR & Voice",
  "WhatsApp Marketing",
  "Software Development",
  "UI/UX Design",
  "E-Commerce",
  "AI & Automation",
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createNewPostTemplate(): Project {
  const today = new Date().toISOString().slice(0, 10);
  const year = new Date().getFullYear().toString();
  return {
    slug: `new-insight-${Date.now().toString().slice(-4)}`,
    title: "New Article Title: Unlocking Digital Growth",
    tags: ["Digital Marketing", "Chandigarh", "Tricity"],
    year,
    date: today,
    order: 10,
    oneLiner:
      "A strategic breakdown of how modern technology and data-backed marketing accelerate enterprise growth.",
    contribution:
      "End-to-end digital growth strategy, search dominance, and conversion optimization.",
    coverLabel: "INSIGHTS · STRATEGY",
    cover: {
      bg: "#6D3BF5",
      ink: "light",
      variant: "photo",
      mark: "WZ",
      src: "/images/blog/digital-marketing.jpg",
    },
    study: {
      role: "Digital Growth & Engineering",
      timeline: "5 min read · 2026",
      context:
        "The competitive landscape across Chandigarh, Mohali, and the wider Tricity demands integrated software and marketing systems.",
      problem:
        "Businesses struggle with fragmented marketing channels and isolated campaigns that drain resources without compounding ROI.",
      process: [
        {
          title: "Comprehensive Market & Search Audit",
          body: "Analyzing high-intent keywords, competitive positioning, and consumer journeys across all key touchpoints.",
        },
        {
          title: "Architecting the Growth Engine",
          body: "Integrating search dominance, high-performance paid ads, and brand storytelling into a unified conversion funnel.",
        },
      ],
      decisions: [
        {
          title: "Multi-channel alignment",
          why: "Synchronizing organic search with precision paid campaigns lowers cost per acquisition by over 35%.",
        },
      ],
      outcomes: [
        "Over 200% growth in qualified pipeline leads",
        "Top 3 Google search rankings for competitive commercial terms",
      ],
      reflection:
        "Long-term authority is built on data rigor, customer empathy, and flawless technical execution.",
      body: `## Introduction\n\nIn today's fast-moving digital economy, having a website is only step one. Businesses must engineer continuous visibility, trust, and conversion mechanisms to stay ahead of the competition.\n\n### Key Principles for Scalable Growth\n\n- **Deep Market Segmentation**: Customize messages for regional nuances across Chandigarh, Mohali, and Panchkula.\n- **Technical Precision**: Fast load times, responsive UI, and frictionless user flows directly amplify conversion rates.\n- **Omnichannel Synergy**: Link your SMS, WhatsApp, and search campaigns to create a unified customer journey.\n\n> "Consistency and relevance are the highest leverage levers in modern performance marketing."\n\n### Conclusion\n\nBy leveraging modern web architecture and data-backed digital marketing, forward-thinking brands build lasting competitive moats.`,
    },
  };
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("webczar_admin_auth") === "true";
    }
    return false;
  });
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  const [posts, setPosts] = useState<Project[]>(POSTS);
  const [bridgeOnline, setBridgeOnline] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"list" | "editor">("list");
  const [currentPost, setCurrentPost] = useState<Project>(createNewPostTemplate());
  const [originalSlug, setOriginalSlug] = useState<string>("");
  const [editorTab, setEditorTab] = useState<"general" | "content" | "study" | "cover">("general");

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [tagFilter, setTagFilter] = useState<string>("all");
  const [toastMsg, setToastMsg] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Check local bridge health and sync posts
  const checkBridge = useCallback(async () => {
    try {
      const res = await fetch(`${BRIDGE_URL}/api/health`, { method: "GET" });
      if (res.ok) {
        setBridgeOnline(true);
        // Load live posts from disk
        const postsRes = await fetch(`${BRIDGE_URL}/api/posts`);
        const data = await postsRes.json();
        if (data.success && Array.isArray(data.posts) && data.posts.length > 0) {
          setPosts(data.posts);
        }
      } else {
        setBridgeOnline(false);
      }
    } catch {
      setBridgeOnline(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadBridge() {
      try {
        const res = await fetch(`${BRIDGE_URL}/api/health`, { method: "GET" });
        if (!isMounted) return;
        if (res.ok) {
          setBridgeOnline(true);
          const postsRes = await fetch(`${BRIDGE_URL}/api/posts`);
          if (!isMounted) return;
          const data = await postsRes.json();
          if (data.success && Array.isArray(data.posts) && data.posts.length > 0) {
            setPosts(data.posts);
          }
        } else {
          setBridgeOnline(false);
        }
      } catch {
        if (isMounted) setBridgeOnline(false);
      }
    }

    void loadBridge();
    const interval = setInterval(() => {
      void loadBridge();
    }, 6000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 4500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASS) {
      setIsAuthenticated(true);
      sessionStorage.setItem("webczar_admin_auth", "true");
      setAuthError("");
    } else {
      setAuthError("Incorrect admin password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("webczar_admin_auth");
  };

  // Open editor for a new post
  const handleCreateNew = () => {
    const template = createNewPostTemplate();
    setCurrentPost(template);
    setOriginalSlug("");
    setViewMode("editor");
    setEditorTab("general");
  };

  // Open editor for existing post
  const handleEdit = (p: Project) => {
    // Deep clone to avoid mutating list state directly
    setCurrentPost(JSON.parse(JSON.stringify(p)));
    setOriginalSlug(p.slug);
    setViewMode("editor");
    setEditorTab("general");
  };

  // Duplicate an existing post into a new draft
  const handleDuplicate = (p: Project) => {
    const copy = JSON.parse(JSON.stringify(p));
    copy.slug = `${p.slug}-copy-${Date.now().toString().slice(-4)}`;
    copy.title = `${p.title} (Copy)`;
    copy.date = new Date().toISOString().slice(0, 10);
    setCurrentPost(copy);
    setOriginalSlug("");
    setViewMode("editor");
    setEditorTab("general");
    showToast("Post cloned as new draft!");
  };

  // Delete post
  const handleDelete = async (slug: string) => {
    if (!window.confirm(`Are you sure you want to delete post "${slug}"?`)) return;

    if (bridgeOnline) {
      try {
        const res = await fetch(`${BRIDGE_URL}/api/posts?slug=${encodeURIComponent(slug)}`, {
          method: "DELETE",
        });
        const d = await res.json();
        if (d.success) {
          showToast(`Post "${slug}" deleted and index synced!`);
          checkBridge();
        } else {
          alert(`Failed to delete: ${d.error}`);
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        alert(`Error deleting post: ${msg}`);
      }
    } else {
      setPosts((prev) => prev.filter((p) => p.slug !== slug));
      showToast(`Removed "${slug}" from current view (bridge offline)`);
    }
  };

  // Save / Publish Post
  const handleSavePost = async () => {
    // Basic validation
    if (!currentPost.slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(currentPost.slug)) {
      alert("Error: Slug must be non-empty and lowercase letters/numbers separated by single hyphens (e.g. 'my-new-post').");
      setEditorTab("general");
      return;
    }
    if (!currentPost.title.trim()) {
      alert("Error: Title is required.");
      setEditorTab("general");
      return;
    }
    if (!currentPost.oneLiner.trim()) {
      alert("Error: One-Liner / Summary is required.");
      setEditorTab("general");
      return;
    }

    setIsSaving(true);

    if (bridgeOnline) {
      try {
        const res = await fetch(`${BRIDGE_URL}/api/posts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ post: currentPost, originalSlug }),
        });
        const result = await res.json();
        if (result.success) {
          showToast(`✓ Published "${currentPost.slug}" and synchronized index.ts!`);
          setOriginalSlug(currentPost.slug);
          checkBridge();
          setViewMode("list");
        } else {
          alert(`Save error: ${result.error}`);
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        alert(`Failed to save via bridge: ${msg}`);
      }
    } else {
      // Fallback: Trigger instant file download & copy to clipboard
      handleDownloadJson();
      copyJsonToClipboard();
      // Update local state so it appears in the table
      setPosts((prev) => {
        const filtered = prev.filter((p) => p.slug !== (originalSlug || currentPost.slug));
        return [currentPost, ...filtered];
      });
      showToast("✓ Downloaded post JSON! (Run `npm run admin` for direct 1-click disk saving)");
      setViewMode("list");
    }

    setIsSaving(false);
  };

  // Download single JSON
  const handleDownloadJson = (postToSave: Project = currentPost) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(postToSave, null, 2));
    const a = document.createElement("a");
    a.setAttribute("href", dataStr);
    a.setAttribute("download", `${postToSave.slug}.json`);
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const copyJsonToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(currentPost, null, 2));
    showToast("✓ JSON copied to clipboard!");
  };

  // Markdown Toolbar Action Helper
  const insertMarkdown = (prefix: string, suffix: string = "") => {
    const el = textareaRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const oldText = el.value;
    const selected = oldText.substring(start, end);
    const replacement = `${prefix}${selected || "text"}${suffix}`;
    const newText = oldText.substring(0, start) + replacement + oldText.substring(end);

    setCurrentPost((prev) => ({
      ...prev,
      study: { ...prev.study, body: newText },
    }));

    setTimeout(() => {
      el.focus();
      el.setSelectionRange(start + prefix.length, start + prefix.length + (selected ? selected.length : 4));
    }, 10);
  };

  // Tags management
  const addTag = (tag: string) => {
    const trimmed = tag.trim();
    if (trimmed && !currentPost.tags.includes(trimmed)) {
      setCurrentPost((prev) => ({
        ...prev,
        tags: [...prev.tags, trimmed],
      }));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setCurrentPost((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tagToRemove),
    }));
  };

  // Filtered posts for dashboard
  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      const matchTag = tagFilter === "all" || p.tags.includes(tagFilter);
      return matchQuery && matchTag;
    });
  }, [posts, searchQuery, tagFilter]);

  // Unique tags for filter dropdown
  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [posts]);

  // If not authenticated, render login gateway
  if (!isAuthenticated) {
    return (
      <div className={styles.page}>
        <div className={styles.topbar}>
          <div className={styles.brandCluster}>
            <Link href="/">
              <img
                src="/images/Screenshot_2026-09-16_125328-removebg-preview.png"
                alt="Webczar Solutions"
                className={styles.brandLogo}
              />
            </Link>
            <span className={styles.adminBadge}>Admin Gateway</span>
          </div>
          <Link href="/" className={styles.siteLink}>
            ← Back to Main Website
          </Link>
        </div>

        <div className={styles.authWrap}>
          <div className={styles.authCard}>
            <div className={styles.authIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h1 className={styles.authTitle}>Webczar Blog Admin</h1>
            <p className={styles.authDesc}>
              Enter your administrator security passkey to access blog management, creation, and publishing tools.
            </p>

            <form onSubmit={handleLogin} className={styles.authForm}>
              <label className={styles.authLabel} htmlFor="adminPass">
                Security Password
              </label>
              <input
                id="adminPass"
                type="password"
                placeholder="Enter admin password..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className={styles.authInput}
                autoFocus
                required
              />
              <button type="submit" className={styles.authBtn}>
                Unlock Admin Console →
              </button>
            </form>

            {authError && <div className={styles.authError}>{authError}</div>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Top Navbar */}
      <header className={styles.topbar}>
        <div className={styles.brandCluster}>
          <Link href="/">
            <img
              src="/images/Screenshot_2026-09-16_125328-removebg-preview.png"
              alt="Webczar Solutions"
              className={styles.brandLogo}
            />
          </Link>
          <span className={styles.adminBadge}>Blog Manager</span>
        </div>

        <div className={styles.statusCluster}>
          <div className={styles.syncIndicator} title={bridgeOnline ? "Connected to local file sync daemon" : "Run `npm run admin` in terminal for automatic disk sync"}>
            <span className={bridgeOnline ? styles.dotOnline : styles.dotOffline} />
            <span>{bridgeOnline ? "Bridge Online (Port 3001)" : "Bridge Offline"}</span>
          </div>

          <div className={styles.actionLinks}>
            <Link href="/blog" target="_blank" className={styles.siteLink}>
              View Live Blog ↗
            </Link>
            <button type="button" onClick={handleLogout} className={styles.logoutBtn}>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className={styles.container}>
        {viewMode === "list" ? (
          /* ============ DASHBOARD POST LIST VIEW ============ */
          <>
            <div className={styles.dashHeader}>
              <div className={styles.dashTitleBlock}>
                <h1>Blog Management &amp; Publishing</h1>
                <p>Manage, compose, and deploy strategic articles and client case studies.</p>
              </div>

              <button type="button" onClick={handleCreateNew} className={styles.primaryActionBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span>Write New Post</span>
              </button>
            </div>

            {/* Stats Summary */}
            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <span className={styles.statNum}>{posts.length}</span>
                <span className={styles.statLabel}>Published Articles</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>{allTags.length}</span>
                <span className={styles.statLabel}>Content Categories</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>
                  {bridgeOnline ? "Auto-Sync" : "Ready"}
                </span>
                <span className={styles.statLabel}>Filesystem Engine</span>
              </div>
            </div>

            {/* Search & Tag Filter Toolbar */}
            <div className={styles.toolbar}>
              <div className={styles.searchWrap}>
                <span className={styles.searchIcon} aria-hidden="true">🔍</span>
                <input
                  type="text"
                  placeholder="Search articles by title, slug, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <select
                value={tagFilter}
                onChange={(e) => setTagFilter(e.target.value)}
                className={styles.tagFilterSelect}
              >
                <option value="all">All Categories ({posts.length})</option>
                {allTags.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Posts Cards Grid */}
            <div className={styles.postsGrid}>
              {filteredPosts.length === 0 ? (
                <div style={{ textAlign: "center", padding: "48px 0", color: "#8e8e98" }}>
                  No posts match your search query.
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <div key={post.slug} className={styles.postItemCard}>
                    <div className={styles.postLeft}>
                      <div
                        className={styles.postThumb}
                        style={{
                          background: post.cover?.bg || "#6D3BF5",
                          color: post.cover?.ink === "dark" ? "#141414" : "#ffffff",
                        }}
                      >
                        {post.cover?.mark || "WZ"}
                      </div>

                      <div className={styles.postDetails}>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <div className={styles.postMetaLine}>
                          <span className={styles.postSlug}>/{post.slug}</span>
                          <span>•</span>
                          <span>{post.date || post.year}</span>
                          <span>•</span>
                          <span>{post.study?.timeline || "5 min read"}</span>
                          <div className={styles.postTags}>
                            {post.tags.slice(0, 3).map((t) => (
                              <span key={t} className={styles.tagChip}>
                                {t}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className={styles.tagChip}>+{post.tags.length - 3}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.postActions}>
                      <button
                        type="button"
                        onClick={() => handleEdit(post)}
                        className={`${styles.actionBtn} ${styles.editBtn}`}
                        title="Edit Post"
                      >
                        ✏️ Edit
                      </button>

                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className={`${styles.actionBtn} ${styles.viewBtn}`}
                        title="View Live Page"
                      >
                        ↗ Live
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleDuplicate(post)}
                        className={`${styles.actionBtn} ${styles.editBtn}`}
                        title="Duplicate as Draft"
                      >
                        📋 Clone
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDownloadJson(post)}
                        className={`${styles.actionBtn} ${styles.editBtn}`}
                        title="Download JSON"
                      >
                        ⬇️ JSON
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(post.slug)}
                        className={`${styles.actionBtn} ${styles.delBtn}`}
                        title="Delete Post"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        ) : (
          /* ============ POST COMPOSER / EDITOR VIEW ============ */
          <div className={styles.editorCard}>
            <div className={styles.editorHeader}>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={styles.backBtn}
              >
                ← Back to All Posts
              </button>

              <div className={styles.editorTabs}>
                <button
                  type="button"
                  onClick={() => setEditorTab("general")}
                  className={`${styles.tabBtn} ${editorTab === "general" ? styles.tabBtnActive : ""}`}
                >
                  1. General Info
                </button>
                <button
                  type="button"
                  onClick={() => setEditorTab("content")}
                  className={`${styles.tabBtn} ${editorTab === "content" ? styles.tabBtnActive : ""}`}
                >
                  2. Markdown Article
                </button>
                <button
                  type="button"
                  onClick={() => setEditorTab("study")}
                  className={`${styles.tabBtn} ${editorTab === "study" ? styles.tabBtnActive : ""}`}
                >
                  3. Case Study Details
                </button>
                <button
                  type="button"
                  onClick={() => setEditorTab("cover")}
                  className={`${styles.tabBtn} ${editorTab === "cover" ? styles.tabBtnActive : ""}`}
                >
                  4. Cover &amp; Styling
                </button>
              </div>
            </div>

            {/* TAB 1: GENERAL INFO */}
            {editorTab === "general" && (
              <div className={styles.formSection}>
                <div className={styles.sectionHeading}>Article Meta &amp; Search Visibility</div>

                <div className={styles.fieldGrid}>
                  <div className={styles.formGroupFull}>
                    <label className={styles.fieldLabel}>
                      Article Title <b>*</b>
                    </label>
                    <input
                      type="text"
                      value={currentPost.title}
                      onChange={(e) => {
                        const val = e.target.value;
                        setCurrentPost((prev) => ({
                          ...prev,
                          title: val,
                          // Auto-slug only if slug was default or matched previous
                          slug: !originalSlug ? slugify(val) : prev.slug,
                        }));
                      }}
                      className={styles.inputField}
                      placeholder="e.g. Best Digital Marketing Agency in Chandigarh"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.fieldLabel}>
                      <span>URL Slug (kebab-case) <b>*</b></span>
                      <button
                        type="button"
                        onClick={() => setCurrentPost((p) => ({ ...p, slug: slugify(p.title) }))}
                        className={styles.fieldHint}
                        style={{ background: "none", border: "none", cursor: "pointer", color: "#38bdf8" }}
                      >
                        Auto-generate from title
                      </button>
                    </label>
                    <input
                      type="text"
                      value={currentPost.slug}
                      onChange={(e) =>
                        setCurrentPost((prev) => ({
                          ...prev,
                          slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""),
                        }))
                      }
                      className={styles.inputField}
                      placeholder="best-digital-marketing-agency-chandigarh"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.fieldLabel}>
                      Publication Date
                    </label>
                    <input
                      type="date"
                      value={currentPost.date || ""}
                      onChange={(e) => setCurrentPost((p) => ({ ...p, date: e.target.value }))}
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.fieldLabel}>Publication Year</label>
                    <input
                      type="text"
                      value={currentPost.year}
                      onChange={(e) => setCurrentPost((p) => ({ ...p, year: e.target.value }))}
                      className={styles.inputField}
                      placeholder="2026"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.fieldLabel}>Sort Weight (Order)</label>
                    <input
                      type="number"
                      value={currentPost.order ?? 10}
                      onChange={(e) =>
                        setCurrentPost((p) => ({
                          ...p,
                          order: parseInt(e.target.value, 10) || 1,
                        }))
                      }
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.formGroupFull}>
                    <label className={styles.fieldLabel}>
                      One-Liner / Card Excerpt <b>*</b>
                    </label>
                    <textarea
                      rows={2}
                      value={currentPost.oneLiner}
                      onChange={(e) => setCurrentPost((p) => ({ ...p, oneLiner: e.target.value }))}
                      className={styles.textareaField}
                      placeholder="Concise overview explaining how businesses accelerate growth..."
                      required
                    />
                  </div>

                  <div className={styles.formGroupFull}>
                    <label className={styles.fieldLabel}>
                      Agency Contribution Summary <b>*</b>
                    </label>
                    <textarea
                      rows={2}
                      value={currentPost.contribution}
                      onChange={(e) => setCurrentPost((p) => ({ ...p, contribution: e.target.value }))}
                      className={styles.textareaField}
                      placeholder="Comprehensive digital marketing, SEO, paid media, and brand strategy..."
                      required
                    />
                  </div>

                  <div className={styles.formGroupFull}>
                    <label className={styles.fieldLabel}>
                      Category Tags <b>*</b>
                    </label>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "8px" }}>
                      {currentPost.tags.map((t) => (
                        <span key={t} className={styles.tagChip} style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 10px" }}>
                          {t}
                          <button
                            type="button"
                            onClick={() => removeTag(t)}
                            style={{ background: "none", border: "none", color: "#f87171", cursor: "pointer", fontWeight: 700 }}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                      <span className={styles.fieldHint}>Add suggested:</span>
                      {DEFAULT_TAG_OPTIONS.filter((t) => !currentPost.tags.includes(t)).slice(0, 6).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => addTag(t)}
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            color: "#c0c0c8",
                            fontSize: "11px",
                            padding: "3px 8px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                        >
                          + {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: MARKDOWN ARTICLE */}
            {editorTab === "content" && (
              <div className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  Long-Form Article Markdown Editor &amp; Live Preview
                </div>

                {/* Markdown Formatting Toolbar */}
                <div className={styles.markdownBar}>
                  <button type="button" onClick={() => insertMarkdown("**", "**")} className={styles.mdBtn}>
                    Bold
                  </button>
                  <button type="button" onClick={() => insertMarkdown("*", "*")} className={styles.mdBtn}>
                    Italic
                  </button>
                  <button type="button" onClick={() => insertMarkdown("## ", "")} className={styles.mdBtn}>
                    H2
                  </button>
                  <button type="button" onClick={() => insertMarkdown("### ", "")} className={styles.mdBtn}>
                    H3
                  </button>
                  <button type="button" onClick={() => insertMarkdown("> ", "")} className={styles.mdBtn}>
                    Quote
                  </button>
                  <button type="button" onClick={() => insertMarkdown("- ", "")} className={styles.mdBtn}>
                    Bullet List
                  </button>
                  <button type="button" onClick={() => insertMarkdown("1. ", "")} className={styles.mdBtn}>
                    Numbered List
                  </button>
                  <button type="button" onClick={() => insertMarkdown("`", "`")} className={styles.mdBtn}>
                    Code
                  </button>
                  <button type="button" onClick={() => insertMarkdown("```\n", "\n```")} className={styles.mdBtn}>
                    Code Block
                  </button>
                  <button type="button" onClick={() => insertMarkdown("[", "](https://example.com)")} className={styles.mdBtn}>
                    Link
                  </button>
                  <button type="button" onClick={() => insertMarkdown("![Image](", "/images/blog/digital-marketing.jpg)")} className={styles.mdBtn}>
                    Image
                  </button>
                  <button type="button" onClick={() => insertMarkdown("\n---\n")} className={styles.mdBtn}>
                    Divider
                  </button>

                  <span style={{ marginLeft: "auto", fontSize: "12px", color: "#8e8e98" }}>
                    {countWords(currentPost.study?.body || "")} words · ~{Math.ceil(countWords(currentPost.study?.body || "") / 200)} min read
                  </span>
                </div>

                {/* Side-by-Side Editor & Live Rendered Preview */}
                <div className={styles.splitEditor}>
                  <div>
                    <textarea
                      ref={textareaRef}
                      value={currentPost.study?.body || ""}
                      onChange={(e) => {
                        const val = e.target.value;
                        setCurrentPost((prev) => ({
                          ...prev,
                          study: { ...prev.study, body: val },
                        }));
                      }}
                      className={styles.editorTextarea}
                      placeholder="Write your article in Markdown here..."
                    />
                  </div>

                  <div
                    className={styles.previewPanel}
                    dangerouslySetInnerHTML={{
                      __html: renderMarkdown(currentPost.study?.body || "*Type markdown on the left to see live preview...*"),
                    }}
                  />
                </div>
              </div>
            )}

            {/* TAB 3: CASE STUDY & STRUCTURED DETAILS */}
            {editorTab === "study" && (
              <div className={styles.formSection}>
                <div className={styles.sectionHeading}>Structured Case Study &amp; Deep-Dive Details</div>

                <div className={styles.fieldGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.fieldLabel}>Role / Focus Title <b>*</b></label>
                    <input
                      type="text"
                      value={currentPost.study.role}
                      onChange={(e) =>
                        setCurrentPost((p) => ({
                          ...p,
                          study: { ...p.study, role: e.target.value },
                        }))
                      }
                      className={styles.inputField}
                      placeholder="e.g. Full-Funnel Digital Marketing"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.fieldLabel}>Timeline / Read Metric <b>*</b></label>
                    <input
                      type="text"
                      value={currentPost.study.timeline}
                      onChange={(e) =>
                        setCurrentPost((p) => ({
                          ...p,
                          study: { ...p.study, timeline: e.target.value },
                        }))
                      }
                      className={styles.inputField}
                      placeholder="e.g. 6 min read · 2026"
                    />
                  </div>

                  <div className={styles.formGroupFull}>
                    <label className={styles.fieldLabel}>Context / Background <b>*</b></label>
                    <textarea
                      rows={2}
                      value={currentPost.study.context}
                      onChange={(e) =>
                        setCurrentPost((p) => ({
                          ...p,
                          study: { ...p.study, context: e.target.value },
                        }))
                      }
                      className={styles.textareaField}
                      placeholder="The economic belt of Chandigarh, Mohali, and Tricity is emerging as..."
                    />
                  </div>

                  <div className={styles.formGroupFull}>
                    <label className={styles.fieldLabel}>The Problem / Challenge <b>*</b></label>
                    <textarea
                      rows={2}
                      value={currentPost.study.problem}
                      onChange={(e) =>
                        setCurrentPost((p) => ({
                          ...p,
                          study: { ...p.study, problem: e.target.value },
                        }))
                      }
                      className={styles.textareaField}
                      placeholder="Businesses often face fragmented marketing efforts..."
                    />
                  </div>

                  {/* Strategic Process Repeater */}
                  <div className={styles.formGroupFull}>
                    <label className={styles.fieldLabel}>Strategic Process Steps ({currentPost.study.process.length})</label>
                    <div className={styles.repeaterList}>
                      {currentPost.study.process.map((step, idx) => (
                        <div key={idx} className={styles.repeaterItem}>
                          <div className={styles.repeaterHeader}>
                            <span className={styles.repeaterNum}>Step {idx + 1}</span>
                            <button
                              type="button"
                              onClick={() =>
                                setCurrentPost((p) => ({
                                  ...p,
                                  study: {
                                    ...p.study,
                                    process: p.study.process.filter((_, i) => i !== idx),
                                  },
                                }))
                              }
                              className={styles.removeBtn}
                            >
                              Remove
                            </button>
                          </div>
                          <input
                            type="text"
                            placeholder="Step Title"
                            value={step.title}
                            onChange={(e) => {
                              const updated = [...currentPost.study.process];
                              updated[idx].title = e.target.value;
                              setCurrentPost((p) => ({
                                ...p,
                                study: { ...p.study, process: updated },
                              }));
                            }}
                            className={styles.inputField}
                          />
                          <textarea
                            rows={2}
                            placeholder="Step Description"
                            value={step.body}
                            onChange={(e) => {
                              const updated = [...currentPost.study.process];
                              updated[idx].body = e.target.value;
                              setCurrentPost((p) => ({
                                ...p,
                                study: { ...p.study, process: updated },
                              }));
                            }}
                            className={styles.textareaField}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentPost((p) => ({
                          ...p,
                          study: {
                            ...p.study,
                            process: [
                              ...p.study.process,
                              { title: "New Strategic Step", body: "Description of the step." },
                            ],
                          },
                        }))
                      }
                      className={styles.addStepBtn}
                    >
                      + Add Process Step
                    </button>
                  </div>

                  {/* Key Decisions Repeater */}
                  <div className={styles.formGroupFull}>
                    <label className={styles.fieldLabel}>Key Strategic Decisions ({currentPost.study.decisions.length})</label>
                    <div className={styles.repeaterList}>
                      {currentPost.study.decisions.map((dec, idx) => (
                        <div key={idx} className={styles.repeaterItem}>
                          <div className={styles.repeaterHeader}>
                            <span className={styles.repeaterNum}>Decision {idx + 1}</span>
                            <button
                              type="button"
                              onClick={() =>
                                setCurrentPost((p) => ({
                                  ...p,
                                  study: {
                                    ...p.study,
                                    decisions: p.study.decisions.filter((_, i) => i !== idx),
                                  },
                                }))
                              }
                              className={styles.removeBtn}
                            >
                              Remove
                            </button>
                          </div>
                          <input
                            type="text"
                            placeholder="Decision Title"
                            value={dec.title}
                            onChange={(e) => {
                              const updated = [...currentPost.study.decisions];
                              updated[idx].title = e.target.value;
                              setCurrentPost((p) => ({
                                ...p,
                                study: { ...p.study, decisions: updated },
                              }));
                            }}
                            className={styles.inputField}
                          />
                          <input
                            type="text"
                            placeholder="Strategic Rationale (Why)"
                            value={dec.why}
                            onChange={(e) => {
                              const updated = [...currentPost.study.decisions];
                              updated[idx].why = e.target.value;
                              setCurrentPost((p) => ({
                                ...p,
                                study: { ...p.study, decisions: updated },
                              }));
                            }}
                            className={styles.inputField}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentPost((p) => ({
                          ...p,
                          study: {
                            ...p.study,
                            decisions: [
                              ...p.study.decisions,
                              { title: "New Strategic Decision", why: "Strategic reasoning." },
                            ],
                          },
                        }))
                      }
                      className={styles.addStepBtn}
                    >
                      + Add Key Decision
                    </button>
                  </div>

                  {/* Key Outcomes Repeater */}
                  <div className={styles.formGroupFull}>
                    <label className={styles.fieldLabel}>Key Outcomes &amp; Impact</label>
                    <div className={styles.repeaterList}>
                      {currentPost.study.outcomes.map((outcome, idx) => (
                        <div key={idx} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                          <input
                            type="text"
                            value={outcome}
                            onChange={(e) => {
                              const updated = [...currentPost.study.outcomes];
                              updated[idx] = e.target.value;
                              setCurrentPost((p) => ({
                                ...p,
                                study: { ...p.study, outcomes: updated },
                              }));
                            }}
                            className={styles.inputField}
                            placeholder="e.g. Over 250% revenue growth"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setCurrentPost((p) => ({
                                ...p,
                                study: {
                                  ...p.study,
                                  outcomes: p.study.outcomes.filter((_, i) => i !== idx),
                                },
                              }))
                            }
                            className={styles.removeBtn}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentPost((p) => ({
                          ...p,
                          study: {
                            ...p.study,
                            outcomes: [...p.study.outcomes, "Key measurable outcome achieved."],
                          },
                        }))
                      }
                      className={styles.addStepBtn}
                    >
                      + Add Outcome Bullet
                    </button>
                  </div>

                  <div className={styles.formGroupFull}>
                    <label className={styles.fieldLabel}>Conclusion / Reflection <b>*</b></label>
                    <textarea
                      rows={2}
                      value={currentPost.study.reflection}
                      onChange={(e) =>
                        setCurrentPost((p) => ({
                          ...p,
                          study: { ...p.study, reflection: e.target.value },
                        }))
                      }
                      className={styles.textareaField}
                      placeholder="Unlocking brand potential requires matching local consumer behavior with world-class execution standards."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: COVER & STYLING */}
            {editorTab === "cover" && (
              <div className={styles.formSection}>
                <div className={styles.sectionHeading}>Cover Art &amp; Visual Presentation</div>

                <div className={styles.fieldGrid}>
                  <div className={styles.formGroupFull}>
                    <label className={styles.fieldLabel}>Cover Color Swatches</label>
                    <div className={styles.swatchRow}>
                      {COLOR_PRESETS.map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() =>
                            setCurrentPost((p) => ({
                              ...p,
                              cover: { ...p.cover, bg: color, ink: p.cover?.ink || "light" },
                            }))
                          }
                          className={`${styles.swatch} ${currentPost.cover?.bg === color ? styles.swatchSelected : ""}`}
                          style={{ background: color }}
                          title={color}
                        />
                      ))}
                      <input
                        type="color"
                        value={currentPost.cover?.bg || "#6D3BF5"}
                        onChange={(e) =>
                          setCurrentPost((p) => ({
                            ...p,
                            cover: { ...p.cover, bg: e.target.value, ink: p.cover?.ink || "light" },
                          }))
                        }
                        style={{ width: "34px", height: "34px", cursor: "pointer", background: "none", border: "none" }}
                        title="Pick custom color"
                      />
                      <span className={styles.fieldHint}>{currentPost.cover?.bg || "#6D3BF5"}</span>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.fieldLabel}>Cover Label <b>*</b></label>
                    <input
                      type="text"
                      value={currentPost.coverLabel}
                      onChange={(e) => setCurrentPost((p) => ({ ...p, coverLabel: e.target.value }))}
                      className={styles.inputField}
                      placeholder="DIGITAL MARKETING · TRICITY"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.fieldLabel}>Badge Mark (2 Letters)</label>
                    <input
                      type="text"
                      maxLength={3}
                      value={currentPost.cover?.mark || "WZ"}
                      onChange={(e) =>
                        setCurrentPost((p) => ({
                          ...p,
                          cover: { ...p.cover, bg: p.cover?.bg || "#6D3BF5", ink: p.cover?.ink || "light", mark: e.target.value.toUpperCase() },
                        }))
                      }
                      className={styles.inputField}
                      placeholder="DM"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.fieldLabel}>Cover Image URL</label>
                    <input
                      type="text"
                      value={currentPost.cover?.src || ""}
                      onChange={(e) =>
                        setCurrentPost((p) => ({
                          ...p,
                          cover: { ...p.cover, bg: p.cover?.bg || "#6D3BF5", ink: p.cover?.ink || "light", src: e.target.value },
                        }))
                      }
                      className={styles.inputField}
                      placeholder="/images/blog/digital-marketing.jpg"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.fieldLabel}>Text Contrast</label>
                    <select
                      value={currentPost.cover?.ink || "light"}
                      onChange={(e) =>
                        setCurrentPost((p) => ({
                          ...p,
                          cover: { ...p.cover, bg: p.cover?.bg || "#6D3BF5", ink: e.target.value as "light" | "dark" },
                        }))
                      }
                      className={styles.inputField}
                    >
                      <option value="light">Light Text (#ffffff)</option>
                      <option value="dark">Dark Text (#141414)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STICKY BOTTOM ACTION BAR */}
            <div className={styles.editorFooter}>
              <div className={styles.footerLeft}>
                <span>Slug: <b>/{currentPost.slug}</b></span>
                <span
                  className={`${styles.validationTag} ${
                    currentPost.slug && currentPost.title && currentPost.oneLiner
                      ? styles.valid
                      : styles.invalid
                  }`}
                >
                  {currentPost.slug && currentPost.title && currentPost.oneLiner ? "✓ Valid Post Schema" : "! Missing Required Fields"}
                </span>
              </div>

              <div className={styles.footerRight}>
                <button
                  type="button"
                  onClick={copyJsonToClipboard}
                  className={styles.secActionBtn}
                  title="Copy full JSON"
                >
                  📋 Copy JSON
                </button>

                <button
                  type="button"
                  onClick={() => handleDownloadJson()}
                  className={styles.secActionBtn}
                  title="Download .json file"
                >
                  ⬇️ Download JSON
                </button>

                {originalSlug && (
                  <Link
                    href={`/blog/${originalSlug}`}
                    target="_blank"
                    className={styles.secActionBtn}
                    style={{ textDecoration: "none" }}
                  >
                    ↗ Preview Live
                  </Link>
                )}

                <button
                  type="button"
                  onClick={handleSavePost}
                  disabled={isSaving}
                  className={styles.primaryActionBtn}
                >
                  {isSaving ? "Saving..." : bridgeOnline ? "🚀 Publish & Auto-Sync" : "💾 Save & Download JSON"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Toast Notification */}
      {toastMsg && <div className={styles.toast}>{toastMsg}</div>}
    </div>
  );
}
