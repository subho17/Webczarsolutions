"use client";

/*
 * EXPERIENCE — What we deliver (14 Core & Specialized Services).
 *
 * Smooth, elegant 3D card deck presentation:
 * - Active service card is centered, crisp, and high-impact.
 * - Previous card glides away to the left and fades cleanly.
 * - Next card glides in from the right, smoothly scaling into focus.
 * - Maximum 2 cards visible during transitions — zero overlapping shadow clutter.
 * - Single-row interactive footer scrubber with colored dots and active title pill.
 * - Direct click-to-jump on any dot or card.
 */

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import { sceneScrub } from "@/lib/scene";
import { ROLES } from "@/content/experience";
import styles from "./Experience.module.css";
import { useLang, L } from "@/lib/i18n";

export default function Experience() {
  const root = useRef<HTMLElement>(null);
  const { t, lang } = useLang();
  const [activeIdx, setActiveIdx] = useState(0);

  const jumpToCard = (idx: number) => {
    const hold = root.current?.closest("[data-scene]");
    const next = hold?.nextElementSibling;
    if (next instanceof HTMLElement && next.hasAttribute("data-runway")) {
      const rect = next.getBoundingClientRect();
      const runwayTop = window.scrollY + rect.top - window.innerHeight;
      const runwayHeight = rect.height;
      const targetY = runwayTop + (idx / (ROLES.length - 1)) * runwayHeight;
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(targetY, { duration: 0.8 });
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1001px) and (prefers-reduced-motion: no-preference)", () => {
      const boards = gsap.utils.toArray<HTMLElement>(`.${styles.board}`);
      const counter = el.querySelector<HTMLElement>(`.${styles.count}`);
      const tint = el.querySelector<HTMLElement>(`.${styles.tint}`);
      const n = boards.length;
      let active = -1;

      el.classList.add(styles.deckMode);

      const setActive = (idx: number) => {
        if (idx === active) return;
        active = idx;
        setActiveIdx(idx);
        boards.forEach((b, i) => b.classList.toggle(styles.on, i === idx));
        if (counter) {
          counter.textContent = `${String(idx + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
        }
        if (tint && ROLES[idx]) {
          tint.style.background = `${ROLES[idx].color}16`;
        }
      };

      const place = (p: number) => {
        const roundedIdx = Math.round(gsap.utils.clamp(0, n - 1, p));
        setActive(roundedIdx);

        for (let i = 0; i < n; i++) {
          const d = i - p;
          const ad = Math.abs(d);
          const b = boards[i];

          // Only keep cards close to the viewport visible to eliminate shadow buildup
          if (ad > 1.5) {
            b.style.visibility = "hidden";
            b.style.opacity = "0";
            b.style.pointerEvents = "none";
            continue;
          }

          b.style.visibility = "visible";
          b.style.pointerEvents = ad < 0.4 ? "auto" : "none";

          let xPercent = 0;
          let zPx = 0;
          let rotY = 0;
          let sc = 1;
          let op = 1;

          if (d >= 0) {
            // Active card (d=0) and incoming card from right (d>0)
            const k = d;
            xPercent = k * 78;
            zPx = -k * 110;
            rotY = -k * 6;
            sc = 1 - k * 0.05;
            op = k < 0.15 ? 1 : Math.max(0, 1 - (k - 0.15) * 0.85);
          } else {
            // Exiting card to the left (d<0)
            const k = -d;
            xPercent = -k * 82;
            zPx = -k * 130;
            rotY = k * 6.5;
            sc = 1 - k * 0.05;
            op = Math.max(0, 1 - k * 1.15);
          }

          b.style.transform = `translate3d(${xPercent.toFixed(1)}%, 0px, ${zPx.toFixed(0)}px) rotateY(${rotY.toFixed(1)}deg) scale(${sc.toFixed(3)})`;
          b.style.opacity = op.toFixed(3);
          b.style.zIndex = String(Math.round(200 - ad * 25));
        }
      };

      // Native GSAP ScrollTrigger scrub — responsive, hardware-accelerated, zero lag
      const st = ScrollTrigger.create({
        ...sceneScrub(el),
        scrub: 0.35,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          place(self.progress * (n - 1));
        },
      });

      place(0);

      // Card click handlers
      const handlers: Array<[HTMLElement, () => void]> = [];
      boards.forEach((b, i) => {
        const h = () => jumpToCard(i);
        b.addEventListener("click", h);
        handlers.push([b, h]);
      });

      // Subtle responsive 3D tilt on pointer move
      const stage = el.querySelector<HTMLElement>(`.${styles.stage}`);
      let rx: ReturnType<typeof gsap.quickTo> | null = null;
      let ry: ReturnType<typeof gsap.quickTo> | null = null;
      if (stage) {
        rx = gsap.quickTo(stage, "rotationX", { duration: 0.8, ease: "power3.out" });
        ry = gsap.quickTo(stage, "rotationY", { duration: 0.8, ease: "power3.out" });
      }
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const cx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        const cy = ((e.clientY - r.top) / r.height - 0.5) * 2;
        rx?.(-cy * 1.8);
        ry?.(cx * 2.2);
      };
      el.addEventListener("pointermove", onMove);

      gsap.from(`.${styles.header} > *`, {
        y: 28,
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE.outExpo,
        stagger: 0.08,
        immediateRender: false,
        scrollTrigger: { trigger: el, start: "top 75%" },
      });

      return () => {
        st.kill();
        el.removeEventListener("pointermove", onMove);
        handlers.forEach(([elm, h]) => elm.removeEventListener("click", h));
        el.classList.remove(styles.deckMode);
      };
    });

    mm.add("(max-width: 1000px), (prefers-reduced-motion: reduce)", () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.utils.toArray<HTMLElement>(`.${styles.board}`).forEach((b) => {
        gsap.from(b, {
          y: 35,
          autoAlpha: 0,
          duration: 0.8,
          ease: EASE.outExpo,
          immediateRender: false,
          scrollTrigger: { trigger: b, start: "top 88%" },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className={styles.experience} id="experience" ref={root}>
      <div className={styles.tint} aria-hidden="true" />

      <div className={styles.header}>
        <p className={styles.eyebrow}>
          <span>05</span> {t("exp.eyebrow")}
        </p>
        <h2 className={styles.h2}>
          {t("exp.h2")} <em className={styles.serif}>{t("exp.h2Em")}</em>
        </h2>
      </div>

      {/* Centred horizontal 3D card stage */}
      <div className={styles.stageWrap}>
        <div className={styles.stage}>
          {ROLES.map((r, i) => (
            <article
              className={`${styles.board} ${r.fg === "dark" ? styles.dark : ""} ${i === 0 ? styles.on : ""}`}
              key={r.company}
              style={{ background: r.color, zIndex: 200 - i }}
            >
              {/* TOP STRIP */}
              <div className={styles.strip}>
                <span className={styles.year}>{r.period}</span>
                <span className={styles.company}>{r.company}</span>
                <span className={styles.type}>{t(`type.${r.type}`)}</span>
              </div>

              {/* CARD DETAIL */}
              <div className={styles.detailCol}>
                <div className={styles.contentCol}>
                  <div className={styles.roleHead}>
                    <h3 className={styles.role}>{L(lang, r, "role")}</h3>
                    <p className={styles.loc}>{r.location}</p>
                  </div>

                  <div className={styles.body}>
                    <div className={styles.bodyMain}>
                      <p className={styles.lbl}>{t("exp.worked")}</p>
                      <p className={styles.summary}>{L(lang, r, "summary")}</p>
                      <ul className={styles.list}>
                        {(lang === "fr" && r.fr?.achievements
                          ? r.fr.achievements
                          : r.achievements
                        ).map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.bodySide}>
                      <p className={styles.lbl}>{t("exp.impact")}</p>
                      <p className={styles.outcome}>{L(lang, r, "outcome")}</p>
                      <p className={`${styles.lbl} ${styles.lblGap}`}>{t("exp.tools")}</p>
                      <div className={styles.skills}>
                        {r.skills.map((s) => (
                          <i key={s}>{s}</i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* VISUAL BADGE / MARK */}
                <div className={styles.logoCol}>
                  {r.logo ? (
                    <span
                      className={`${styles.logoWrap} ${styles[r.logo.variant]}`}
                      style={
                        r.logo.variant === "plate"
                          ? ({ "--logo-aspect": r.logo.aspect } as React.CSSProperties)
                          : undefined
                      }
                    >
                      <img src={r.logo.src} alt={`${r.company} logo`} />
                    </span>
                  ) : (
                    <span className={`${styles.logoWrap} ${styles.mono}`}>
                      <b>{r.mark ?? r.company.split(" ")[0]}</b>
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* FOOTER: Single-row interactive scrubber */}
      <div className={styles.foot}>
        <span className={styles.count}>
          {String(activeIdx + 1).padStart(2, "0")} / {String(ROLES.length).padStart(2, "0")}
        </span>
        <div className={styles.nav} role="tablist">
          {ROLES.map((r, i) => (
            <button
              className={`${styles.navItem} ${activeIdx === i ? styles.navOn : ""}`}
              key={r.company}
              type="button"
              onClick={() => jumpToCard(i)}
              aria-label={r.company}
              title={r.company}
            >
              <i style={{ background: r.color }} />
              {activeIdx === i && <span className={styles.activeTitle}>{r.company}</span>}
            </button>
          ))}
        </div>
        <span className={styles.hintFoot}>{t("exp.hint")}</span>
      </div>
    </section>
  );
}
