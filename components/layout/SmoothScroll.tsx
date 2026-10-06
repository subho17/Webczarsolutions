"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { setLenis, scrollToHash, getLenis } from "@/lib/lenis";

/* Single rAF loop: Lenis drives ScrollTrigger — 00 §7.3.
   Also owns in-page anchor scrolling for the whole site, so every link
   (nav, hero CTAs, footer, and anything we add later) lands below the header. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  /* Reset scroll to top on page navigation */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      const reset = () => {
        window.scrollTo(0, 0);
        const lenis = getLenis();
        lenis?.scrollTo(0, { immediate: true });
        ScrollTrigger.refresh();
      };

      reset();
      const rafId = requestAnimationFrame(reset);
      const timer1 = setTimeout(reset, 60);
      const timer2 = setTimeout(reset, 180);

      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [pathname]);

  useEffect(() => {
    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;

    if (!prefersReducedMotion()) {
      lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
      lenis.on("scroll", ScrollTrigger.update);
      raf = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      setLenis(lenis);
    }

    /* delegated: catches every same-page anchor on the site */
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey)
        return;
      const link = (e.target as Element)?.closest?.<HTMLAnchorElement>("a[href]");
      const href = link?.getAttribute("href");
      if (!href) return;

      let targetHash = "";
      if (href.startsWith("#")) {
        targetHash = href;
      } else if (href.startsWith("/#") && (window.location.pathname === "/" || window.location.pathname === "")) {
        targetHash = href.slice(1);
      } else if ((href === "/" || href === "/#home") && (window.location.pathname === "/" || window.location.pathname === "")) {
        targetHash = "#home";
      }

      if (!targetHash) return;
      e.preventDefault();
      scrollToHash(targetHash);
    };
    document.addEventListener("click", onClick);

    /* honour a hash present on first load */
    if (window.location.hash) {
      const hash = window.location.hash;
      requestAnimationFrame(() => setTimeout(() => scrollToHash(hash), 60));
    }

    return () => {
      document.removeEventListener("click", onClick);
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
      setLenis(null);
    };
  }, []);

  return <>{children}</>;
}
