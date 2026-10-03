"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LegalDocument } from "@/content/legal";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./LegalPage.module.css";

export default function LegalPage({ doc }: { doc: LegalDocument }) {
  const [activeSection, setActiveSection] = useState<string>(
    doc.sections[0]?.id || ""
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* Track reading scroll progress */
  useEffect(() => {
    const handleScroll = () => {
      const docEl = window.document.documentElement;
      const totalScroll = docEl.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentScroll = window.scrollY;
      const progress = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Scroll spy for active section */
  useEffect(() => {
    const sectionEls = doc.sections
      .map((s) => window.document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!sectionEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [doc.sections]);

  /* Filter sections based on user search query */
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return doc.sections;
    const q = searchQuery.toLowerCase().trim();

    return doc.sections.filter((sec) => {
      const inTitle = sec.title.toLowerCase().includes(q);
      const inContent = sec.content.some((p) => p.toLowerCase().includes(q));
      const inBullets = sec.bullets?.some((b) => b.toLowerCase().includes(q));
      const inCallout =
        sec.callout?.title.toLowerCase().includes(q) ||
        sec.callout?.text.toLowerCase().includes(q);
      return inTitle || inContent || inBullets || inCallout;
    });
  }, [doc.sections, searchQuery]);

  /* Copy page link to clipboard */
  const handleCopyLink = useCallback(() => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }, []);

  const handlePrint = useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);


  return (
    <div className={styles.page}>
      {/* Scroll Reading Progress Bar */}
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* Top Sticky Navigation Bar */}
      <header className={styles.topBar}>
        <div className={styles.barLeft}>
          <Link href="/" className={styles.backBtn} aria-label="Back to Homepage">
            ← <span>Home</span>
          </Link>
          <Link href="/" className={styles.logoLink} aria-label="Webczar Solutions">
            <Image
              src="/images/Screenshot_2026-09-16_125328-removebg-preview.png"
              alt="Webczar Solutions"
              width={120}
              height={24}
              priority
              className={styles.logoImg}
            />
          </Link>
        </div>

        {/* Document Switcher */}
        <nav className={styles.docSwitcher} aria-label="Legal Documents Switcher">
          <Link
            href="/terms"
            className={`${styles.docTab} ${doc.slug === "terms" ? styles.docTabActive : ""}`}
            aria-current={doc.slug === "terms" ? "page" : undefined}
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className={`${styles.docTab} ${doc.slug === "privacy" ? styles.docTabActive : ""}`}
            aria-current={doc.slug === "privacy" ? "page" : undefined}
          >
            Privacy
          </Link>
          <Link
            href="/whatsapp-opt-in"
            className={`${styles.docTab} ${doc.slug === "whatsapp-opt-in" ? styles.docTabActive : ""}`}
            aria-current={doc.slug === "whatsapp-opt-in" ? "page" : undefined}
          >
            WhatsApp Opt-In
          </Link>
          <Link
            href="/whatsapp-opt-out"
            className={`${styles.docTab} ${doc.slug === "whatsapp-opt-out" ? styles.docTabActive : ""}`}
            aria-current={doc.slug === "whatsapp-opt-out" ? "page" : undefined}
          >
            WhatsApp Opt-Out
          </Link>
          <Link
            href="/rcs-policy"
            className={`${styles.docTab} ${doc.slug === "rcs-policy" ? styles.docTabActive : ""}`}
            aria-current={doc.slug === "rcs-policy" ? "page" : undefined}
          >
            RCS Policy
          </Link>
        </nav>

        <div className={styles.barRight}>
          <button
            type="button"
            onClick={handlePrint}
            className={styles.printBtn}
            title="Print or Save as PDF"
            aria-label="Print or Save as PDF"
          >
            <span>🖨️</span> Print / PDF
          </button>
        </div>
      </header>

      <main className={styles.mainWrap}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <span className={styles.kicker}>{doc.kicker}</span>
          <h1 className={styles.title}>{doc.title}</h1>
          <p className={styles.subtitle}>{doc.subtitle}</p>

          <div className={styles.metaRow}>
            <div className={styles.metaChip}>
              <span className={styles.metaChipIcon}>📅</span>
              <span>Updated: {doc.lastUpdated}</span>
            </div>
            <div className={styles.metaChip}>
              <span className={styles.metaChipIcon}>⏱️</span>
              <span>{doc.readingTime}</span>
            </div>
            <div className={styles.metaChip}>
              <span className={styles.metaChipIcon}>⚖️</span>
              <span>Version {doc.version}</span>
            </div>
            <div className={styles.metaChip}>
              <span className={styles.metaChipIcon}>📍</span>
              <span>Jurisdiction: India &amp; Global</span>
            </div>
            <div className={styles.metaChip}>
              <span className={styles.metaChipIcon}>🏢</span>
              <span>Webczar Solutions</span>
            </div>
          </div>
        </section>

        {/* Key Highlights Section (TL;DR) */}
        <section className={styles.highlightsSection} aria-label="Executive Summary">
          <div className={styles.highlightsHeader}>
            <span className={styles.highlightsTitle}>Executive Summary (TL;DR)</span>
            <span className={styles.highlightsBadge}>Plain English Overview</span>
          </div>

          <div className={styles.highlightsGrid}>
            {doc.highlights.map((h, i) => (
              <div key={i} className={styles.highlightCard}>
                <span className={styles.highlightIcon} aria-hidden="true">
                  {h.icon}
                </span>
                <h3 className={styles.highlightCardTitle}>{h.title}</h3>
                <p className={styles.highlightCardDesc}>{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Toolbar: Search & Quick Share */}
        <div className={styles.toolbar}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon} aria-hidden="true">
              🔍
            </span>
            <input
              type="text"
              placeholder={`Search ${doc.title.toLowerCase()} clauses (e.g. refunds, cookies, ownership)...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search document clauses"
            />
            {searchQuery && (
              <button
                type="button"
                className={styles.clearSearchBtn}
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>

          <div className={styles.toolbarActions}>
            <button
              type="button"
              onClick={handleCopyLink}
              className={styles.copyLinkBtn}
              aria-label="Copy page link"
            >
              <span>{copied ? "✓ Copied!" : "🔗 Share Link"}</span>
            </button>
          </div>
        </div>

        {/* Content Layout: Sticky TOC + Document Body */}
        <div className={styles.contentGrid}>
          {/* Table of Contents Column */}
          <aside className={styles.sidebarCol} aria-label="Table of Contents">
            <div className={styles.tocStickyWrap}>
              <h2 className={styles.tocTitle}>Table of Contents</h2>
              <ul className={styles.tocList}>
                {doc.sections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        className={`${styles.tocLink} ${
                          isActive ? styles.tocLinkActive : ""
                        }`}
                        aria-current={isActive ? "location" : undefined}
                      >
                        <span className={styles.tocNum}>{sec.num}</span>
                        <span>{sec.title.replace(/^\d+\.\s*/, "")}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Sidebar Quick Contact */}
              <div className={styles.sidebarHelpCard}>
                <h3 className={styles.sidebarHelpTitle}>Need Legal Clarification?</h3>
                <p className={styles.sidebarHelpText}>
                  Our executive team can assist with enterprise MSAs, custom DPAs, or specific
                  contract inquiries.
                </p>
                <a
                  href="mailto:info@webczarsolutions.com?subject=Legal%20Inquiry%20-%20Webczar"
                  className={styles.sidebarHelpBtn}
                >
                  Contact Legal Desk →
                </a>
              </div>
            </div>
          </aside>

          {/* Document Content Body */}
          <article className={styles.docBody}>
            {filteredSections.length === 0 ? (
              <div className={styles.noResults}>
                <h4>No matching clauses found</h4>
                <p>
                  We couldn&apos;t find any sections matching &quot;{searchQuery}&quot;. Try a different keyword
                  or clear your search.
                </p>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className={styles.sectionBlock}
                  aria-labelledby={`heading-${sec.id}`}
                >
                  <div className={styles.sectionHeader}>
                    <span className={styles.sectionNumBadge}>{sec.num}</span>
                    <h2 id={`heading-${sec.id}`} className={styles.sectionTitle}>
                      {sec.title}
                    </h2>
                  </div>

                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx} className={styles.sectionParagraph}>
                      {p}
                    </p>
                  ))}

                  {sec.bullets && (
                    <ul className={styles.bulletsList}>
                      {sec.bullets.map((b, bIdx) => (
                        <li key={bIdx} className={styles.bulletItem}>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.callout && (
                    <div
                      className={`${styles.calloutBox} ${
                        sec.callout.type === "warning"
                          ? styles.calloutWarning
                          : sec.callout.type === "tip"
                          ? styles.calloutTip
                          : styles.calloutInfo
                      }`}
                    >
                      <div className={styles.calloutHead}>
                        <span>
                          {sec.callout.type === "warning"
                            ? "⚠️"
                            : sec.callout.type === "tip"
                            ? "💡"
                            : "ℹ️"}
                        </span>
                        <span>{sec.callout.title}</span>
                      </div>
                      <p className={styles.calloutText}>{sec.callout.text}</p>
                    </div>
                  )}

                  {sec.table && (
                    <div className={styles.tableWrap}>
                      <table className={styles.legalTable}>
                        <thead>
                          <tr>
                            {sec.table.headers.map((h, hIdx) => (
                              <th key={hIdx}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sec.table.rows.map((row, rIdx) => (
                            <tr key={rIdx}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))
            )}

            {/* Bottom Support Banner */}
            <div className={styles.supportBanner}>
              <div className={styles.supportText}>
                <span className={styles.supportKicker}>TRANSPARENCY &amp; TRUST</span>
                <h3 className={styles.supportTitle}>
                  Questions about our terms or data privacy?
                </h3>
                <p className={styles.supportDesc}>
                  Our leadership team is available to discuss custom enterprise Master Services
                  Agreements (MSA), Non-Disclosure Agreements (NDA), or specific regulatory
                  compliance needs.
                </p>
              </div>
              <div className={styles.supportActions}>
                <a
                  href="mailto:info@webczarsolutions.com"
                  className={styles.supportBtnPrimary}
                >
                  Email Us Directly
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=919988221729&text=Hello%20Webczar,%20I%20have%20a%20question%20regarding%20your%20legal%20terms."
                  target="_blank"
                  rel="noreferrer"
                  className={styles.supportBtnSecondary}
                >
                  WhatsApp Support ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Global Brand Footer */}
      <div className="finalFrame">
        <Footer />
      </div>
    </div>
  );
}
