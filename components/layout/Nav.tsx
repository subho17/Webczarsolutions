"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { LOGIN_PORTALS } from "@/content/loginPortals";
import { SERVICES_NAV } from "@/content/servicesNav";
import { getLenis } from "@/lib/lenis";
import styles from "./Nav.module.css";

const LINKS = [
  { key: "nav.home", href: "/", path: "/" },
  { key: "nav.about", href: "/about", path: "/about" },
  { key: "nav.services", href: "/services", path: "/services" },
  { key: "nav.addonServices", href: "/add-on-services", path: "/add-on-services" },
  { key: "nav.blog", href: "/blog", path: "/blog" },
  { key: "nav.careers", href: "/careers", path: "/careers" },
  { key: "nav.contact", href: "/contact", path: "/contact" },
];

function getPortalBg(id: string): string {
  switch (id) {
    case "text-messaging":
      return "rgba(255, 46, 15, 0.1)";
    case "rcs-messaging":
      return "rgba(37, 99, 235, 0.12)";
    case "ivr-service":
      return "rgba(14, 165, 233, 0.1)";
    case "ai-voice-calling":
      return "rgba(245, 158, 11, 0.12)";
    case "whatsapp-iq":
      return "rgba(239, 68, 68, 0.1)";
    case "promotional-virtual-whatsapp":
      return "rgba(37, 211, 102, 0.14)";
    case "whatsapp-api":
      return "rgba(37, 211, 102, 0.14)";
    case "dlt-smartping":
      return "rgba(139, 92, 246, 0.12)";
    default:
      return "rgba(20, 20, 20, 0.06)";
  }
}

function getPortalColor(id: string): string {
  switch (id) {
    case "text-messaging":
      return "#ff2e0f";
    case "rcs-messaging":
      return "#2563eb";
    case "ivr-service":
      return "#0284c7";
    case "ai-voice-calling":
      return "#d97706";
    case "whatsapp-iq":
      return "#dc2626";
    case "promotional-virtual-whatsapp":
      return "#16a34a";
    case "whatsapp-api":
      return "#16a34a";
    case "dlt-smartping":
      return "#7c3aed";
    default:
      return "var(--ink)";
  }
}

function getPortalIcon(id: string) {
  switch (id) {
    case "text-messaging":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8" />
          <path d="M8 13h5" />
        </svg>
      );
    case "rcs-messaging":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      );
    case "ivr-service":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "ai-voice-calling":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      );
    case "whatsapp-iq":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "promotional-virtual-whatsapp":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    case "whatsapp-api":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "dlt-smartping":
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Nav() {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  // Services dropdown state
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeServiceGroup, setActiveServiceGroup] = useState<string>("whatsapp-messaging");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileActiveGroup, setMobileActiveGroup] = useState<string | null>("whatsapp-messaging");
  const servicesRef = useRef<HTMLDivElement>(null);
  const leaveServicesTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Portal login dropdown state
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileLoginOpen, setMobileLoginOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Ref to reset right-column scroll to top on category switch
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rightColRef.current) {
      rightColRef.current.scrollTop = 0;
    }
  }, [activeServiceGroup]);

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

  /* Click outside and Escape handler for desktop Portal Login dropdown */
  useEffect(() => {
    if (!loginOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLoginOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    window.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      window.removeEventListener("keydown", onEsc);
    };
  }, [loginOpen]);

  /* Click outside and Escape handler for desktop Services dropdown */
  useEffect(() => {
    if (!servicesOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    window.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      window.removeEventListener("keydown", onEsc);
    };
  }, [servicesOpen]);

  /* Cleanup leave timers on unmount */
  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
      if (leaveServicesTimerRef.current) clearTimeout(leaveServicesTimerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setLoginOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setLoginOpen(false);
    }, 180);
  };

  const handleServicesMouseEnter = () => {
    if (leaveServicesTimerRef.current) {
      clearTimeout(leaveServicesTimerRef.current);
      leaveServicesTimerRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    leaveServicesTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

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
      return (
        pathname === "/services" ||
        (pathname?.startsWith("/services/") &&
          !pathname?.includes("podcast") &&
          !pathname?.includes("online-pr") &&
          !pathname?.includes("ivr-incoming") &&
          !pathname?.includes("drone"))
      );
    }
    if (l.path === "/add-on-services" || l.path === "/extra-services") {
      return (
        pathname === "/add-on-services" ||
        pathname === "/extra-services" ||
        pathname?.includes("podcast") ||
        pathname?.includes("online-pr") ||
        pathname?.includes("ivr-incoming") ||
        pathname?.includes("drone")
      );
    }
    if (
      l.path === "/blog" &&
      (pathname === "/blog" ||
        pathname === "/blogs" ||
        pathname?.startsWith("/work") ||
        pathname?.startsWith("/blog/"))
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

  const currentServiceGroup =
    SERVICES_NAV.find((g) => g.id === activeServiceGroup) || SERVICES_NAV[0];

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/" || pathname === "") {
      e.preventDefault();
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.1 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (typeof window !== "undefined" && window.location.hash) {
        history.pushState(null, "", window.location.pathname);
      }
    } else {
      const lenis = getLenis();
      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className={styles.wrap} ref={ref}>
      <div className={styles.cap}>
        <Link href="/" className={styles.logo} onClick={handleHomeClick} aria-label={t("nav.home")}>
          <img
            src="/images/Screenshot_2026-09-16_125328-removebg-preview.png"
            alt="Webczar Solutions"
            style={{ width: "124px", height: "auto", display: "block" }}
          />
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((l) => {
            const isOn = isLinkActive(l);

            // Special interactive dropdown for "Services"
            if (l.key === "nav.services") {
              return (
                <div
                  key={l.key}
                  ref={servicesRef}
                  className={styles.servicesDropdownWrap}
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <Link
                    href={l.href}
                    className={`${isOn ? styles.on : ""} ${styles.servicesTrigger} ${
                      servicesOpen ? styles.servicesTriggerActive : ""
                    }`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    aria-label="Services Menu"
                  >
                    <span className={styles.roll}>
                      <span>{t(l.key)}</span>
                      <span aria-hidden="true">{t(l.key)}</span>
                    </span>
                    <svg
                      className={`${styles.chevron} ${servicesOpen ? styles.chevronOpen : ""}`}
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  {/* 2-Column Services Flyout Menu */}
                  <div
                    className={`${styles.servicesDropdownMenu} ${
                      servicesOpen ? styles.servicesDropdownMenuOpen : ""
                    }`}
                    role="menu"
                    aria-label="Services Submenu"
                    data-lenis-prevent="true"
                    onWheel={(e) => e.stopPropagation()}
                  >
                    {/* Left Column: Primary Verticals & Categories */}
                    <div
                      className={styles.servicesLeftCol}
                      data-lenis-prevent="true"
                      onWheel={(e) => e.stopPropagation()}
                    >
                      <div className={styles.leftColHeading}>
                        <span>Services &amp; Verticals</span>
                      </div>

                      <div className={styles.groupList}>
                        {SERVICES_NAV.map((group) => {
                          const isActive = group.id === activeServiceGroup;
                          return (
                            <button
                              key={group.id}
                              type="button"
                              className={`${styles.groupItem} ${
                                isActive ? styles.groupItemActive : ""
                              }`}
                              onMouseEnter={() => setActiveServiceGroup(group.id)}
                              onClick={() => {
                                if (group.href) {
                                  window.location.href = group.href;
                                  setServicesOpen(false);
                                } else {
                                  setActiveServiceGroup(group.id);
                                }
                              }}
                            >
                              <span>{group.title}</span>
                              {group.hasSubmenu && (
                                <svg
                                  className={styles.groupArrow}
                                  width="7"
                                  height="10"
                                  viewBox="0 0 6 10"
                                  fill="none"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M1 1L5 5L1 9"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <Link
                        href="/services"
                        className={styles.allServicesLink}
                        onClick={() => setServicesOpen(false)}
                      >
                        <span>All Services Hub</span>
                        <span>→</span>
                      </Link>
                    </div>

                    {/* Right Column: Submenu Items */}
                    <div
                      ref={rightColRef}
                      className={styles.servicesRightCol}
                      data-lenis-prevent="true"
                      onWheel={(e) => e.stopPropagation()}
                    >
                      <div className={styles.rightHeader}>
                        <span>{currentServiceGroup.title}</span>
                        <span className={styles.countBadge}>
                          {currentServiceGroup.items?.length || 0}
                        </span>
                      </div>

                      <div className={styles.subGrid}>
                        {currentServiceGroup.items?.map((sub) => {
                          const isExternal = sub.href.startsWith("http");
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={styles.subItem}
                              onClick={() => setServicesOpen(false)}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                            >
                              <div className={styles.subItemLeft}>
                                <span className={styles.subItemName}>{sub.name}</span>
                                {sub.desc && (
                                  <span className={styles.subItemDesc}>{sub.desc}</span>
                                )}
                              </div>
                              <span className={styles.subItemArrow}>
                                {isExternal ? "↗" : "→"}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            const isHome = l.key === "nav.home" || l.href === "/";
            return (
              <Link
                key={l.key}
                href={l.href}
                className={`${styles.navLink} ${isOn ? styles.on : ""}`}
                aria-current={isOn ? "page" : undefined}
                onClick={isHome ? handleHomeClick : undefined}
              >
                <span className={styles.roll}>
                  <span>{t(l.key)}</span>
                  <span aria-hidden="true">{t(l.key)}</span>
                </span>
              </Link>
            );
          })}

          {/* Desktop Portal Login Dropdown */}
          <div
            ref={loginRef}
            className={styles.dropdownWrap}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`${styles.loginTrigger} ${loginOpen ? styles.loginTriggerActive : ""}`}
              onClick={() => setLoginOpen((prev) => !prev)}
              aria-expanded={loginOpen}
              aria-haspopup="true"
              aria-label="Portal Login"
            >
              <span className={styles.roll}>
                <span>{t("nav.portalLogin")}</span>
                <span aria-hidden="true">{t("nav.portalLogin")}</span>
              </span>
              <svg
                className={`${styles.chevron} ${loginOpen ? styles.chevronOpen : ""}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Floating Dropdown Card */}
            <div
              className={`${styles.dropdownMenu} ${loginOpen ? styles.dropdownMenuOpen : ""}`}
              role="menu"
              aria-label="Portal Login Menu"
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
            >
              <div className={styles.dropdownHeader}>
                <div className={styles.headerTitle}>
                  <span className={styles.pulseDot} aria-hidden="true" />
                  <span>Portal Login</span>
                </div>
                <span className={styles.headerBadge}>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ display: "inline-block", marginRight: "4px", verticalAlign: "-1px" }}
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Client Access
                </span>
              </div>

              <div className={styles.grid}>
                {LOGIN_PORTALS.map((portal) => (
                  <a
                    key={portal.id}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.portalCard}
                    role="menuitem"
                    onClick={() => setLoginOpen(false)}
                  >
                    <div
                      className={styles.iconBox}
                      style={{
                        background: getPortalBg(portal.id),
                        color: getPortalColor(portal.id),
                      }}
                      aria-hidden="true"
                    >
                      {getPortalIcon(portal.id)}
                    </div>
                    <div className={styles.portalInfo}>
                      <div className={styles.portalTitle}>
                        <span>{portal.title}</span>
                        <span className={styles.arrowIcon}>↗</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className={styles.dropdownFooter}>
                <span>Need access credentials or help?</span>
                <Link
                  href="/contact"
                  className={styles.supportLink}
                  onClick={() => setLoginOpen(false)}
                >
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
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
        data-lenis-prevent="true"
      >
        <nav aria-label="Primary mobile">
          {LINKS.map((l) => {
            const isOn = isLinkActive(l);

            // Special accordion for Services on mobile
            if (l.key === "nav.services") {
              return (
                <div key={l.key} className={styles.mobileServicesSection}>
                  <button
                    type="button"
                    className={styles.mobileServicesTrigger}
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    aria-expanded={mobileServicesOpen}
                  >
                    <span>{t(l.key)}</span>
                    <svg
                      className={`${styles.chevron} ${mobileServicesOpen ? styles.chevronOpen : ""}`}
                      width="12"
                      height="8"
                      viewBox="0 0 10 6"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {mobileServicesOpen && (
                    <div className={styles.mobileServicesContent}>
                      <Link
                        href="/services"
                        className={styles.mobileAllLink}
                        onClick={() => setMenuOpen(false)}
                      >
                        All Services Hub →
                      </Link>

                      {SERVICES_NAV.map((group) => {
                        const isGroupOpen = mobileActiveGroup === group.id;
                        return (
                          <div key={group.id} className={styles.mobileGroupBlock}>
                            <button
                              type="button"
                              className={styles.mobileGroupHeader}
                              onClick={() =>
                                setMobileActiveGroup(isGroupOpen ? null : group.id)
                              }
                            >
                              <span className={styles.mobileGroupName}>{group.title}</span>
                              <span className={styles.mobileGroupCount}>
                                {group.items?.length || 0}
                              </span>
                            </button>

                            {isGroupOpen && (
                              <div className={styles.mobileSubList}>
                                {group.items?.map((sub) => {
                                  const isExternal = sub.href.startsWith("http");
                                  return (
                                    <Link
                                      key={sub.name}
                                      href={sub.href}
                                      className={styles.mobileSubLink}
                                      onClick={() => setMenuOpen(false)}
                                      target={isExternal ? "_blank" : undefined}
                                      rel={isExternal ? "noopener noreferrer" : undefined}
                                    >
                                      <span className={styles.mobileSubName}>
                                        {sub.name} {isExternal && "↗"}
                                      </span>
                                      {sub.desc && (
                                        <span className={styles.mobileSubDesc}>
                                          {sub.desc}
                                        </span>
                                      )}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isHome = l.key === "nav.home" || l.href === "/";
            return (
              <Link
                key={l.key}
                href={l.href}
                className={isOn ? styles.sheetOn : ""}
                aria-current={isOn ? "page" : undefined}
                onClick={(e) => {
                  setMenuOpen(false);
                  if (isHome) handleHomeClick(e);
                }}
              >
                {t(l.key)}
              </Link>
            );
          })}

          {/* Mobile Portal Login Accordion */}
          <div className={styles.mobileLoginSection}>
            <button
              type="button"
              className={styles.mobileLoginTrigger}
              onClick={() => setMobileLoginOpen((prev) => !prev)}
              aria-expanded={mobileLoginOpen}
            >
              <div className={styles.mobileLoginTriggerLeft}>
                <span className={styles.pulseDot} aria-hidden="true" />
                <span>Portal Login</span>
                <span className={styles.mobileCountBadge}>{LOGIN_PORTALS.length}</span>
              </div>
              <svg
                className={`${styles.chevron} ${mobileLoginOpen ? styles.chevronOpen : ""}`}
                width="12"
                height="8"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {mobileLoginOpen && (
              <div className={styles.mobileGrid} data-lenis-prevent="true">
                {LOGIN_PORTALS.map((portal) => (
                  <a
                    key={portal.id}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobilePortalCard}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileLoginOpen(false);
                    }}
                  >
                    <div
                      className={styles.iconBox}
                      style={{
                        background: getPortalBg(portal.id),
                        color: getPortalColor(portal.id),
                      }}
                      aria-hidden="true"
                    >
                      {getPortalIcon(portal.id)}
                    </div>
                    <div className={styles.portalInfo}>
                      <div className={styles.portalTitle}>
                        <span>{portal.title}</span>
                        <span className={styles.arrowIcon}>↗</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
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
