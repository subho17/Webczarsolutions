"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { scrollToHash } from "@/lib/lenis";
import styles from "./FloatingNav.module.css";

export default function FloatingNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  const isSubpage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleTop = () => {
    scrollToHash("#top");
  };

  const isVisible = isSubpage || scrolled;

  if (!isVisible) return null;

  return (
    <aside
      className={`${styles.floatingNav} ${isVisible ? styles.visible : styles.hidden}`}
      aria-label="Page navigation shortcuts"
    >
      {isSubpage && (
        <button
          type="button"
          onClick={handleBack}
          className={`${styles.btn} ${styles.backBtn}`}
          aria-label="Go back to previous page"
          title="Go back"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>
      )}

      {isSubpage && scrolled && <span className={styles.divider} aria-hidden="true" />}

      {scrolled && (
        <button
          type="button"
          onClick={handleTop}
          className={`${styles.btn} ${styles.topBtn}`}
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
          <span>Top</span>
        </button>
      )}
    </aside>
  );
}
