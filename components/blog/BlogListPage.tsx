"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PROJECTS, type Project } from "@/content/projects";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./BlogListPage.module.css";

const CATEGORIES = [
  "All",
  "Digital Agency",
  "Content Marketing",
  "Social Media",
  "Tricity",
  "Real Estate",
  "Bulk SMS",
];

export default function BlogListPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return PROJECTS.filter((post) => {
      const matchCat =
        selectedCat === "All" ||
        post.tags.some((t) => t.toLowerCase().includes(selectedCat.toLowerCase()));

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.oneLiner.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });
  }, [selectedCat, searchQuery]);

  const featured = PROJECTS[0];

  return (
    <div className={styles.page}>
      <Nav />

      <main className={styles.mainWrap}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <span className={styles.kicker}>WEBCZAR INSIGHTS &amp; STRATEGY</span>
          <h1 className={styles.title}>Engineering &amp; Digital Growth Playbooks</h1>
          <p className={styles.subtitle}>
            In-depth perspectives on modern web architecture, AI workflows, performance
            marketing, and scaling digital brands in the Tricity and globally.
          </p>
        </section>

        {/* Filters & Search Toolbar */}
        <div className={styles.toolbar}>
          <div className={styles.categoryPills}>
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`${styles.catPill} ${
                  selectedCat === cat ? styles.catPillActive : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.searchBox}>
            <span className={styles.searchIcon} aria-hidden="true">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search articles by topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search articles"
            />
          </div>
        </div>

        {/* Featured Article (When no active search filter is applied) */}
        {!searchQuery && selectedCat === "All" && featured && (
          <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
            <div
              className={styles.featuredMedia}
              style={{ background: featured.cover?.bg || "#141414" }}
            >
              {featured.cover?.src ? (
                <img
                  src={featured.cover.src}
                  alt={featured.coverLabel}
                  className={styles.featuredImg}
                />
              ) : (
                <span className={styles.cardFallbackMark}>{featured.cover?.mark || "WZ"}</span>
              )}
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.featuredBadge}>FEATURED INSIGHT · {featured.year}</span>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredDesc}>{featured.oneLiner}</p>
              <div className={styles.featuredMeta}>
                <span>By Subhadeep Chanda</span>
                <span>·</span>
                <span>{featured.study?.timeline || "5 min read"}</span>
              </div>
            </div>
          </Link>
        )}

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className={styles.noResults}>
            <h3>No articles found</h3>
            <p>
              No articles matched your filter &quot;{searchQuery || selectedCat}&quot;. Try clearing
              your query or selecting &quot;All&quot;.
            </p>
          </div>
        ) : (
          <div className={styles.articlesGrid}>
            {filteredPosts.map((post: Project) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={styles.card}
              >
                <div
                  className={styles.cardMedia}
                  style={{ background: post.cover?.bg || "#f4f5f7" }}
                >
                  {post.cover?.src ? (
                    <img
                      src={post.cover.src}
                      alt={post.coverLabel}
                      className={styles.cardImg}
                    />
                  ) : (
                    <span className={styles.cardFallbackMark}>{post.cover?.mark || "WZ"}</span>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardTags}>
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={styles.cardTag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardDesc}>{post.oneLiner}</p>

                  <div className={styles.cardFooter}>
                    <span>{post.study?.timeline?.split("·")[0] || "5 min read"}</span>
                    <span className={styles.readMoreBtn}>
                      Read Article <i>→</i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* Global Brand Footer */}
      <div className="finalFrame">
        <Footer />
      </div>
    </div>
  );
}
