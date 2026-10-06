"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import styles from "./Nav.module.css";

const LINKS = [
  { key: "nav.home", href: "/", path: "/" },
  { key: "nav.about", href: "/about", path: "/about" },
  { key: "nav.services", href: "/services", path: "/services" },
  { key: "nav.extraServices", href: "/extra-services", path: "/extra-services" },
  { key: "nav.blog", href: "/blog", path: "/blog" },
  { key: "nav.careers", href: "/careers", path: "/careers" },
  { key: "nav.contact", href: "/contact", path: "/contact" },
];

export default function Nav() {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  /* close on Escape, and lock the page behind the open drawer */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  /* never leave the drawer open behind a resize to desktop */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const close = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      /* Header condenses slightly once page is scrolled */
      ScrollTrigger.create({
        start: "top top-=40",
        onUpdate: (self) => {
          nav.classList.toggle(styles.scrolled, self.scroll() > 40);
        },
        onLeaveBack: () => nav.classList.remove(styles.scrolled),
      });
    }, nav);

    return () => ctx.revert();
  }, []);

  const isLinkActive = (l: (typeof LINKS)[0]) => {
    if (l.path === "/") {
      return pathname === "/" || pathname === "";
    }
    if (l.path === "/about") {
      return pathname === "/about" || pathname?.startsWith("/about/");
    }
    if (l.path === "/services") {
      return pathname === "/services" || (pathname?.startsWith("/services/") && !pathname?.includes("podcast") && !pathname?.includes("online-pr") && !pathname?.includes("ivr") && !pathname?.includes("drone"));
    }
    if (l.path === "/extra-services") {
      return pathname === "/extra-services" || pathname?.includes("podcast") || pathname?.includes("online-pr") || pathname?.includes("ivr") || pathname?.includes("drone");
    }
    if (
      l.path === "/blog" &&
      (pathname === "/blog" || pathname === "/blogs" || pathname?.startsWith("/work") || pathname?.startsWith("/blog/"))
    ) {
      return true;
    }
    if (
      l.path === "/careers" &&
      (pathname === "/careers" || pathname === "/career")
    ) {
      return true;
    }
    if (l.path === "/contact" && pathname === "/contact") {
      return true;
    }
    return false;
  };

  return (
    <header className={styles.wrap} ref={ref}>
      <div className={styles.cap}>
        <Link href="/" className={styles.logo} aria-label={t("nav.home")}>
          <img
            src="/images/Screenshot_2026-09-16_125328-removebg-preview.png"
            alt="Webczar Solutions"
            style={{ width: "135px", height: "auto", display: "block" }}
          />
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((l) => {
            const isOn = isLinkActive(l);
            return (
              <Link
                key={l.key}
                href={l.href}
                className={isOn ? styles.on : ""}
                aria-current={isOn ? "page" : undefined}
              >
                <span className={styles.roll}>
                  <span>{t(l.key)}</span>
                  <span aria-hidden="true">{t(l.key)}</span>
                </span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.right}>
          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            aria-label={menuOpen ? t("nav.close") : t("nav.menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* ---------- mobile drawer ---------- */}
      <div
        className={`${styles.sheet} ${menuOpen ? styles.sheetOpen : ""}`}
        id="mobile-nav"
        hidden={!menuOpen}
      >
        <nav aria-label="Primary mobile">
          {LINKS.map((l) => {
            const isOn = isLinkActive(l);
            return (
              <Link
                key={l.key}
                href={l.href}
                className={isOn ? styles.sheetOn : ""}
                aria-current={isOn ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {t(l.key)}
              </Link>
            );
          })}
        </nav>
      </div>
      <button
        type="button"
        className={`${styles.scrim} ${menuOpen ? styles.scrimOn : ""}`}
        aria-label={t("nav.close")}
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
}
