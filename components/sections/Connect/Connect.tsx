"use client";

/*
 * LET'S CONNECT — the closing chapter (Patta "Let's connect" as the mood
 * reference: curved panel row, floating perspective, calm typography).
 * Our take: five memory panels on a shallow 3D arc that lean with the
 * cursor and breathe on idle; the site-wide Button carries the CTA; social
 * cards use the same circle-fill + roll language as the nav.
 */

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, EASE, prefersReducedMotion } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import styles from "./Connect.module.css";
import { useLang } from "@/lib/i18n";

export interface TeamMember {
  name: string;
  role: string;
  src: string;
  focus?: string;
  rotate?: number;
  z?: number;
  y?: number;
}

/* Webczar Solutions Core Leadership & Team Members.
   `focus` controls the crop position within the portrait frame.
   Angles and depth (rotate, z, y) can be custom or computed dynamically. */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Gurpreet Singh",
    role: "Senior Consultant",
    src: "/images/team/team-1.jpg",
    focus: "center 15%",
    rotate: 20,
    z: -70,
    y: -16,
  },
  {
    name: "Priya Sharma",
    role: "UI/UX & Creative Lead",
    src: "/images/team/team-2.jpg",
    focus: "center 22%",
    rotate: 12,
    z: -30,
    y: -8,
  },
  {
    name: "Gagan Kalra",
    role: "Founder & Tech Director",
    src: "/images/team/team-3.jpg",
    focus: "center 12%",
    rotate: 4,
    z: -5,
    y: 0,
  },
  {
    name: "Ritu Verma",
    role: "Operations & HR Lead",
    src: "/images/team/team-4.jpg",
    focus: "center 20%",
    rotate: -4,
    z: -5,
    y: 0,
  },
  {
    name: "Neha Gupta",
    role: "Client Success Manager",
    src: "/images/team/team-5.jpg",
    focus: "44% 20%",
    rotate: -12,
    z: -30,
    y: -8,
  },
  {
    name: "Aman Sharma",
    role: "Full-Stack Engineer",
    src: "/images/team/team-6.jpg",
    focus: "center 22%",
    rotate: -20,
    z: -70,
    y: -16,
  },
];

/* Helper to compute symmetrical 3D arc perspective for any number of cards */
function getPanelTransform(index: number, total: number, custom?: Partial<TeamMember>) {
  if (custom?.rotate !== undefined && custom?.z !== undefined && custom?.y !== undefined) {
    return { rotate: custom.rotate, z: custom.z, y: custom.y };
  }
  if (total <= 1) return { rotate: 0, z: 0, y: 0 };
  const mid = (total - 1) / 2;
  const norm = (index - mid) / (mid || 1);
  return {
    rotate: -Math.round(norm * 22),
    z: -Math.round(Math.abs(norm) * 70),
    y: -Math.round(Math.abs(norm) * 16),
  };
}

/* Official brand marks, inlined so they inherit size and need no requests. */
const MARKS: Record<string, ReactNode> = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  pinterest: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.95-.14-2.42.03-3.46l1.24-5.26s-.31-.62-.31-1.54c0-1.45.84-2.53 1.89-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.28-1.95 3.28-4.77 0-2.5-1.79-4.24-4.36-4.24-2.97 0-4.72 2.23-4.72 4.53 0 .9.35 1.86.78 2.38.09.1.1.19.07.3-.08.33-.26 1.04-.3 1.18-.05.21-.17.26-.39.16-1.46-.68-2.37-2.82-2.37-4.54 0-3.7 2.69-7.1 7.76-7.1 4.07 0 7.24 2.9 7.24 6.78 0 4.05-2.55 7.31-6.09 7.31-1.19 0-2.31-.62-2.69-1.35l-.73 2.79c-.27 1.02-.99 2.3-1.47 3.08A12 12 0 1 0 12 0z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.088-2.029-.488-1.745-.722-2.884-2.493-2.97-2.608-.088-.117-.708-.941-.708-1.796 0-.854.448-1.275.608-1.449.16-.174.348-.217.464-.217.116 0 .232.001.333.007.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-12.416c-5.523 0-10 4.477-10 10 0 1.764.457 3.423 1.258 4.872l-1.336 4.887 5.011-1.314c1.401.763 3.002 1.195 4.706 1.195 5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.067 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  ),
};

/* Company social links */
const SOCIALS = [
  { name: "Facebook", mark: "facebook", href: "https://www.facebook.com/webczarsolutions/" },
  { name: "Instagram", mark: "instagram", href: "https://www.instagram.com/webczarsolutions/" },
  { name: "YouTube", mark: "youtube", href: "https://www.youtube.com/channel/UCsmqfDaULklu3RR7iy5BwBQ" },
  { name: "X", mark: "x", href: "https://x.com/webczarsolution" },
  { name: "LinkedIn", mark: "linkedin", href: "https://www.linkedin.com/in/gagan-kalra-462bb1343/" },
  { name: "Pinterest", mark: "pinterest", href: "https://in.pinterest.com/smsmediagrpchd/" },
  { name: "WhatsApp", mark: "whatsapp", href: "https://whatsapp.com/channel/0029Vaf8Pq40lwgrhkGwJU3o" },
  { name: "Google", mark: "google", href: "https://share.google/p1v6dLB0JHKNpodWx" },
] as const;

export default function Connect() {
  const root = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      /* reveal */
      gsap.from(`.${styles.head} > *`, {
        y: 36,
        autoAlpha: 0,
        duration: 0.9,
        ease: EASE.outExpo,
        stagger: 0.09,
        immediateRender: false,
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
      gsap.from(`.${styles.panel}`, {
        y: 90,
        autoAlpha: 0,
        duration: 1.1,
        ease: EASE.outExpo,
        stagger: { each: 0.08, from: "center" },
        immediateRender: false,
        scrollTrigger: { trigger: `.${styles.arc}`, start: "top 82%" },
      });
      gsap.from(`.${styles.socials} > *`, {
        y: 26,
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE.outExpo,
        stagger: 0.07,
        immediateRender: false,
        scrollTrigger: { trigger: `.${styles.socials}`, start: "top 88%" },
      });

      /* idle float — each panel bobs on its own rhythm */
      gsap.utils.toArray<HTMLElement>(`.${styles.panelInner}`).forEach((p, i) => {
        gsap.to(p, {
          y: `+=${6 + (i % 3) * 3}`,
          duration: 3 + (i % 3) * 0.7,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      });

      /* cursor: the whole arc leans, each panel adds its own micro-tilt */
      const panels = gsap.utils.toArray<HTMLElement>(`.${styles.panel}`);
      const setters = panels.map((p, i) => {
        const trans = getPanelTransform(i, TEAM_MEMBERS.length, TEAM_MEMBERS[i]);
        return {
          rx: gsap.quickTo(p, "rotationX", { duration: 0.9, ease: "power3.out" }),
          add: gsap.quickTo(p, "rotationY", { duration: 0.9, ease: "power3.out" }),
          base: trans.rotate,
        };
      });
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const cx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        const cy = ((e.clientY - r.top) / r.height - 0.5) * 2;
        setters.forEach((s) => {
          s.add(s.base + cx * 5);
          s.rx(-cy * 4);
        });
      };
      const onLeave = () => setters.forEach((s) => {
        s.add(s.base);
        s.rx(0);
      });
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);

      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.connect} id="contact" ref={root}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>
          <span>08</span> {t("connect.eyebrow")}
        </p>
        <h2 className={styles.h2}>
          {t("connect.h2a")}{" "}
          <em className={styles.serif}>{t("connect.h2Em")}</em>
        </h2>
        <p className={styles.lede}>
          {t("connect.lede")}
        </p>
        <div className={styles.cta}>
          <Button
            href="https://wa.me/919988221729"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            arrow
          >
            {t("connect.cta")}
          </Button>
        </div>
      </div>

      {/* curved memory arc */}
      <div className={styles.arc} aria-label="Webczar Solutions Leadership & Team">
        {TEAM_MEMBERS.map((p, i) => {
          const trans = getPanelTransform(i, TEAM_MEMBERS.length, p);
          return (
            <div
              className={styles.panel}
              key={p.src + i}
              style={
                {
                  transform: `translate3d(0, ${trans.y}px, ${trans.z}px) rotateY(${trans.rotate}deg)`,
                } as React.CSSProperties
              }
            >
              <div className={`${styles.panelInner} ${styles.hasPhoto}`}>
                <img
                  className={styles.photo}
                  src={p.src}
                  alt={p.name}
                  style={{ objectPosition: p.focus || "center 20%" }}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.panelScrim} aria-hidden="true" />
                <div className={styles.memberMeta}>
                  <span className={styles.memberName}>{p.name}</span>
                  <span className={styles.memberRole}>{p.role}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* social cards */}
      <div className={styles.socials}>
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            className={styles.social}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span className={styles.glyph}>
              {"mark" in s ? MARKS[s.mark] : null}
            </span>
            <span className={styles.roll}>
              <span>{s.name}</span>
              <span aria-hidden="true">{s.name}</span>
            </span>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
