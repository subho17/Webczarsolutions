"use client";

/*
 * THE PEOPLE BEHIND THE WORK — Webczar Team DriftWall.
 *
 * Displays ONLY the official team photographs provided by Webczar Solutions.
 * Seamless, smooth infinite vertical drift across balanced columns.
 * Scroll velocity smoothly adds to the drift without modulo snaps or jitters.
 */

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, EASE, prefersReducedMotion } from "@/lib/gsap";
import { sceneScrub } from "@/lib/scene";
import { FRAMES } from "@/content/gallery";
import { useLang } from "@/lib/i18n";
import styles from "./Gallery.module.css";

/* ---- DriftWall parameters ---- */
const SPEED = 36; /* px/s base drift */
const VARIANCE = 0.35; /* per-column speed variation */
const PARALLAX = 0.5; /* pointer lean strength */
const DIRECTION = -1; /* up */
const REPEAT = 3; /* repetition count per column for seamless infinite looping */

const colCount = (w: number) => (w >= 700 ? 3 : 2);

export default function Gallery() {
  const root = useRef<HTMLElement>(null);
  const { t } = useLang();
  const [cols, setCols] = useState<number>(3);

  useEffect(() => {
    const apply = () => setCols(colCount(window.innerWidth));
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const colEls = gsap.utils.toArray<HTMLElement>(`.${styles.colInner}`);
    if (!colEls.length) return;

    /* per-column speed: alternating speeds spread by VARIANCE */
    const speeds = colEls.map(
      (_, i) =>
        SPEED *
        (1 + (i % 2 === 0 ? 1 : -1) * VARIANCE * ((i + 1) / colEls.length)) *
        (i % 2 === 0 ? 1.05 : 0.95)
    );
    const offsets = colEls.map(() => 0);
    const loopHeights = colEls.map((c) => Math.max(1, c.scrollHeight / REPEAT));

    /* Publish measured height as --wall-h for accurate tile sizing */
    const view = el.querySelector<HTMLElement>(`.${styles.wallView}`);
    const measure = () => {
      if (view) el.style.setProperty("--wall-h", `${Math.round(view.clientHeight)}px`);
      colEls.forEach((c, i) => (loopHeights[i] = Math.max(1, c.scrollHeight / REPEAT)));
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    if (view) ro.observe(view);
    measure();

    // Re-measure once images load so loopHeights is accurate down to the pixel
    const imgs = el.querySelectorAll("img");
    imgs.forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", measure, { once: true });
    });

    /* Continuous drift with smooth scroll velocity injection */
    let lastProgress = 0;
    let scrollDelta = 0;

    const tick = (_t: number, dt: number) => {
      const f = Math.min(dt / 1000, 0.05);
      colEls.forEach((c, i) => {
        const colScroll = scrollDelta * (0.8 + (i % 3) * 0.2);
        offsets[i] += speeds[i] * f + colScroll;

        // Seamless wrap at exactly one full repeating unit
        const lh = loopHeights[i];
        if (lh > 0) {
          while (offsets[i] >= lh) offsets[i] -= lh;
          while (offsets[i] < 0) offsets[i] += lh;
        }

        c.style.transform = `translate3d(0, ${(DIRECTION * offsets[i]).toFixed(2)}px, 0)`;
      });
      // Smooth decay of scroll push
      scrollDelta *= 0.85;
    };

    /* Only run ticker while section is visible in viewport */
    let running = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          gsap.ticker.add(tick);
          running = true;
        } else if (!entry.isIntersecting && running) {
          gsap.ticker.remove(tick);
          running = false;
        }
      },
      { rootMargin: "150px" }
    );
    io.observe(el);

    /* Scene runway scroll tracking: injects directional velocity smoothly */
    const st = ScrollTrigger.create({
      ...sceneScrub(el),
      scrub: 0.2,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const d = (self.progress - lastProgress) * 450;
        scrollDelta += d;
        lastProgress = self.progress;
      },
    });

    /* Pointer parallax */
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const wall = el.querySelector<HTMLElement>(`.${styles.wall}`);
    let onMove: ((e: PointerEvent) => void) | null = null;
    if (wall && finePointer) {
      const px = gsap.quickTo(wall, "x", { duration: 1.2, ease: "power3.out" });
      const py = gsap.quickTo(wall, "y", { duration: 1.2, ease: "power3.out" });
      onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const cx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        const cy = ((e.clientY - r.top) / r.height - 0.5) * 2;
        px(cx * 22 * PARALLAX);
        py(cy * 14 * PARALLAX);
      };
      el.addEventListener("pointermove", onMove);
    }

    /* Header reveal: fail-safe, never hide title if trigger doesn't resolve */
    gsap.fromTo(
      `.${styles.head} > *`,
      { y: 20, opacity: 0.9 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: EASE.outExpo,
        stagger: 0.08,
        immediateRender: false,
      }
    );

    return () => {
      if (running) gsap.ticker.remove(tick);
      io.disconnect();
      ro.disconnect();
      st.kill();
      if (onMove) el.removeEventListener("pointermove", onMove);
    };
  }, [cols]);

  /* Distribute the 6 official frames into columns, round-robin */
  const columns: (typeof FRAMES)[] = Array.from({ length: cols }, () => []);
  FRAMES.forEach((f, i) => columns[i % cols].push(f));

  return (
    <section className={styles.gallery} id="gallery" ref={root}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>
          <span>07</span> {t("gallery.eyebrow")}
        </p>
        <h2 className={styles.h2}>
          {t("gallery.h2a")}{" "}
          <em className={styles.serif}>{t("gallery.h2Em")}</em>
        </h2>
        <p className={styles.lede}>{t("gallery.lede")}</p>
      </div>

      <div className={styles.wallView}>
        <div className={styles.wall} style={{ "--cols": cols } as React.CSSProperties}>
          {columns.map((col, ci) => {
            // Repeat column items REPEAT times for seamless infinite looping
            const repeated: typeof FRAMES = [];
            for (let r = 0; r < REPEAT; r++) {
              repeated.push(...col);
            }
            return (
              <div className={styles.col} key={ci}>
                <div className={styles.colInner}>
                  {repeated.map((f, i) => (
                    <figure
                      className={styles.tile}
                      key={`${f.id}-${i}`}
                      style={{ "--ar": f.ar } as React.CSSProperties}
                      aria-hidden={i >= col.length}
                    >
                      <img
                        src={f.src}
                        alt={i < col.length ? t("gallery.alt") : ""}
                        loading={ci < 2 && i < 2 ? "eager" : "lazy"}
                        decoding="async"
                        draggable={false}
                      />
                    </figure>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.fade} aria-hidden="true" />
      </div>

      <div className={styles.foot}>
        <span className={styles.count}>
          {String(FRAMES.length).padStart(2, "0")} {t("gallery.frames")}
        </span>
        <span className={styles.hint}>{t("gallery.hint")}</span>
      </div>
    </section>
  );
}
