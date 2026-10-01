"use client";

/*
 * SECTION 05 — TECHNOLOGY & BRANDING PLATFORMS
 *
 * An interactive showcase of leading technologies, marketing channels,
 * and development platforms with floating ambient-glow pills that rotate
 * slowly in a continuous, smooth circular motion around the central focus.
 */

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/gsap";
import { PLATFORMS, type Platform } from "@/content/stack";
import styles from "./DesignStack.module.css";
import { useLang } from "@/lib/i18n";

/* Fixed station markers on the orbit ellipse */
const ORBIT_STATIONS = [
  { deg: -140, color: "#0668E1" }, // Meta
  { deg: -105, color: "#FF6A00" }, // UI/UX
  { deg: -70, color: "#25D366" }, // WhatsApp Business
  { deg: -40, color: "#10B981" }, // Text Messaging
  { deg: -12, color: "#0284C7" }, // RCS
  { deg: 20, color: "#E11D48" }, // Social Media
  { deg: 55, color: "#0284C7" }, // Web & App
  { deg: 90, color: "#0284C7" }, // Cloud & DevOps
  { deg: 125, color: "#7C3AED" }, // AI Agents
  { deg: 155, color: "#10B981" }, // SEO
  { deg: -175, color: "#FBBC05" }, // Google
];

/* SVG Icon Components for each platform */
function MetaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="#0668E1"
        d="M12 7.15c-1.92-2.35-4.14-3.75-6.52-3.75C2.46 3.4 0 6.02 0 9.72c0 4.28 3.19 7.93 6.74 7.93 2.33 0 4.31-1.48 5.44-3.71 1.13 2.23 3.11 3.71 5.44 3.71 3.55 0 6.74-3.65 6.74-7.93 0-3.7-2.46-6.32-5.48-6.32-2.38 0-4.6 1.4-6.52 3.75zm-5.44 8.24c-2.36 0-4.51-2.54-4.51-5.78 0-2.35 1.44-4.18 3.43-4.18 1.79 0 3.7 1.87 4.77 4.2-1 3.31-2.42 5.76-3.69 5.76zm10.88 0c-1.27 0-2.69-2.45-3.69-5.76 1.07-2.33 2.98-4.2 4.77-4.2 1.99 0 3.43 1.83 3.43 4.18 0 3.24-2.15 5.78-4.51 5.78z"
      />
    </svg>
  );
}

function UiUxIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="6" fill="#FF6A00" />
      <path
        d="M12 6a6 6 0 0 0-6 6c0 3.31 2.69 6 6 6 .83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.24-.26-.39-.62-.39-1.01 0-.83.67-1.5 1.5-1.5H15c2.21 0 4-1.79 4-4 0-4.42-3.13-8-7-8zm-3.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        fill="#ffffff"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      <path
        fill="#ffffff"
        d="M17.5 14.4c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.7.8-.8 1-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4 0-.2-.1-.3-.2-.5-.1-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.2-.2-.3-.5-.4z"
      />
    </svg>
  );
}

function CloudDevOpsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="6" fill="#0284C7" />
      <path
        d="M6.8 16A3.2 3.2 0 0 1 6.5 9.6a4.8 4.8 0 0 1 9.4-1.2 3.8 3.8 0 0 1 1.6 7.6H7z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.5v4.5m-1.8-1.8l1.8 1.8 1.8-1.8"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.67v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.16z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.24v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.24C.45 8.16 0 9.93 0 12s.45 3.84 1.24 5.41l4.04-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.59l4.04 3.15c.95-2.84 3.6-4.99 6.72-4.99z"
      />
    </svg>
  );
}

function SeoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#00A86B" />
      <path
        d="M11 6.5a4.5 4.5 0 1 0 2.8 8.02l3.34 3.34a.8.8 0 0 0 1.13-1.13l-3.34-3.34A4.5 4.5 0 0 0 11 6.5zm-3 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"
        fill="#ffffff"
      />
    </svg>
  );
}

function AiAgentsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="6" fill="#7C3AED" />
      <rect x="6.5" y="6.5" width="11" height="11" rx="2.5" fill="none" stroke="#ffffff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.2" fill="#ffffff" />
      <path
        d="M9 3.5v3M15 3.5v3M9 17.5v3M15 17.5v3M3.5 9h3M3.5 15h3M17.5 9h3M17.5 15h3"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TextMessagingIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="7" fill="#10B981" />
      <path
        d="M17 11.5c0 2.5-2.2 4.5-5 4.5-.8 0-1.5-.2-2.2-.5L7 16.5l.8-2.1C7.3 13.6 7 12.6 7 11.5 7 9 9.2 7 12 7s5 2 5 4.5z"
        fill="#ffffff"
      />
      <circle cx="10" cy="11.5" r="1" fill="#10B981" />
      <circle cx="12" cy="11.5" r="1" fill="#10B981" />
      <circle cx="14" cy="11.5" r="1" fill="#10B981" />
    </svg>
  );
}

function RcsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="7" fill="#0072E3" />
      <path
        d="M6 7h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7l-3.5 2.5V16H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <line x1="8.5" y1="10.5" x2="15.5" y2="10.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="8.5" y1="13" x2="13" y2="13" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SocialIconsRow() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }} aria-hidden="true">
      {/* Facebook */}
      <svg viewBox="0 0 20 20" width="18" height="18">
        <circle cx="10" cy="10" r="10" fill="#1877F2" />
        <path
          d="M12.5 10.3h-1.8v6.2H8.2v-6.2H7V8.1h1.2V6.6c0-1.4.9-2.3 2.3-2.3.7 0 1.3.1 1.4.1v1.6h-1c-.7 0-.8.3-.8.8v1.3h1.8l-.4 2.2z"
          fill="#fff"
        />
      </svg>
      {/* Instagram */}
      <svg viewBox="0 0 20 20" width="18" height="18">
        <defs>
          <linearGradient id="igGradientStack3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <rect width="20" height="20" rx="5.5" fill="url(#igGradientStack3)" />
        <rect x="4.5" y="4.5" width="11" height="11" rx="3.2" fill="none" stroke="#fff" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="2.8" fill="none" stroke="#fff" strokeWidth="1.5" />
        <circle cx="13.2" cy="6.8" r="0.8" fill="#fff" />
      </svg>
      {/* LinkedIn */}
      <svg viewBox="0 0 20 20" width="18" height="18">
        <rect width="20" height="20" rx="4.5" fill="#0A66C2" />
        <path
          d="M5.6 7.6h2.2v7.2H5.6V7.6zm1.1-3.6c.8 0 1.3.5 1.3 1.2 0 .7-.5 1.2-1.3 1.2-.7 0-1.2-.5-1.2-1.2 0-.7.5-1.2 1.2-1.2zm3.3 3.6h2.1v1h0c.3-.6 1-1.2 2.1-1.2 2.3 0 2.7 1.5 2.7 3.5v3.9h-2.2v-3.5c0-.8 0-1.9-1.2-1.9-1.2 0-1.4.9-1.4 1.8v3.6h-2.1V7.6z"
          fill="#fff"
        />
      </svg>
      {/* YouTube */}
      <svg viewBox="0 0 20 20" width="18" height="18">
        <rect width="20" height="20" rx="4.5" fill="#FF0000" />
        <path
          d="M14.8 6.8c-.2-.7-.7-1.2-1.4-1.4C12.1 5 10 5 10 5s-2.1 0-3.4.4c-.7.2-1.2.7-1.4 1.4C4.8 8.1 4.8 10 4.8 10s0 1.9.4 3.2c.2.7.7 1.2 1.4 1.4 1.3.4 3.4.4 3.4.4s2.1 0 3.4-.4c.7-.2 1.2-.7 1.4-1.4.4-1.3.4-3.2.4-3.2s0-1.9-.4-3.2zm-6.2 5V8.2l3.4 1.8-3.4 1.8z"
          fill="#fff"
        />
      </svg>
      {/* X (Twitter) */}
      <svg viewBox="0 0 20 20" width="18" height="18">
        <circle cx="10" cy="10" r="10" fill="#000000" />
        <path
          d="M12.7 5.5h1.7l-3.7 4.2 4.3 5.7h-3.4l-2.7-3.5-3.1 3.5H4.1l4-4.5L4 5.5h3.5l2.4 3.2 2.8-3.2zm-.6 8.9h.9L7.9 6.4H6.9l5.2 8z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}

function WebAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path
        d="M8 6L2.5 12L8 18M16 6L21.5 12L16 18M14 4L10 20"
        stroke="#0284C7"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="#FF5722"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 11l15-7v14L3 11z" />
      <path d="M3 11v4c0 1.1.9 2 2 2h2" />
      <path d="M18 8a4 4 0 0 1 0 6" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#2563EB" aria-hidden="true">
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="4" width="4" height="17" rx="1" />
      <rect x="17" y="8" width="4" height="13" rx="1" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="#7C3AED"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/* Helper to render icon for a given platform */
function PlatformIcon({ id }: { id: string }) {
  switch (id) {
    case "meta":
      return <MetaIcon />;
    case "ui-ux":
      return <UiUxIcon />;
    case "whatsapp":
      return <WhatsAppIcon />;
    case "cloud-devops":
      return <CloudDevOpsIcon />;
    case "google":
      return <GoogleIcon />;
    case "seo":
      return <SeoIcon />;
    case "ai-agents":
      return <AiAgentsIcon />;
    case "text-messaging":
      return <TextMessagingIcon />;
    case "rcs":
      return <RcsIcon />;
    case "social-media":
      return <SocialIconsRow />;
    case "web-app":
      return <WebAppIcon />;
    default:
      return null;
  }
}

export default function DesignStack() {
  const { t } = useLang();
  const stageRef = useRef<HTMLDivElement>(null);

  // Stage size and ellipse radii state
  const [stageSize, setStageSize] = useState({
    w: 1440,
    h: 760,
    rx: 540,
    ry: 270,
  });

  useEffect(() => {
    const stageEl = stageRef.current;
    if (!stageEl) return;

    // Measure stage dimensions and calculate accurate ellipse radii
    const measure = () => {
      const w = stageEl.clientWidth || 1440;
      const h = stageEl.clientHeight || 760;
      const rx = Math.min(650, Math.max(420, w * 0.40));
      const ry = Math.min(330, Math.max(210, h * 0.38));
      setStageSize({ w, h, rx, ry });
      return { rx, ry };
    };

    let { rx: currentRx, ry: currentRy } = measure();

    const ro = new ResizeObserver(() => {
      const radii = measure();
      currentRx = radii.rx;
      currentRy = radii.ry;
    });
    ro.observe(stageEl);

    // If reduced motion is preferred or on small mobile screen, keep static layout
    if (prefersReducedMotion()) return () => ro.disconnect();

    const mq = window.matchMedia("(min-width: 1041px)");
    if (!mq.matches) return () => ro.disconnect();

    // Query all platform cards rendered in the DOM
    const cardEls = Array.from(
      stageEl.querySelectorAll<HTMLElement>("[data-platform-card]")
    );

    let angleOffset = 0;
    let speed = 1;
    let targetSpeed = 1;
    let lastTime = performance.now();
    let rafId: number;

    // Slow, graceful circular rotation: 1 complete revolution every ~72 seconds
    const ANGULAR_VELOCITY = (2 * Math.PI) / 72; // ~0.087 rad/sec

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Smooth deceleration on hover and smooth ramp back up
      speed += (targetSpeed - speed) * Math.min(dt * 6, 1);
      angleOffset = (angleOffset + ANGULAR_VELOCITY * speed * dt) % (2 * Math.PI);

      for (let i = 0; i < cardEls.length; i++) {
        const el = cardEls[i];
        const baseDeg = parseFloat(el.getAttribute("data-base-angle") || "0");
        const theta = (baseDeg * Math.PI) / 180 + angleOffset;
        const x = currentRx * Math.cos(theta);
        const y = currentRy * Math.sin(theta);

        el.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    // Hover slowdown: softly pauses/slows the rotation so user can easily read or click
    const onEnter = () => {
      targetSpeed = 0.08;
    };
    const onLeave = () => {
      targetSpeed = 1;
    };

    stageEl.addEventListener("pointerenter", onEnter);
    stageEl.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      stageEl.removeEventListener("pointerenter", onEnter);
      stageEl.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className={styles.section} id="stack">
      {/* Ambient background light */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.stage} ref={stageRef}>
        {/* SVG Orbit Line and Pulsing Node Dots */}
        <svg
          className={styles.orbitSvg}
          width={stageSize.w}
          height={stageSize.h}
          aria-hidden="true"
        >
          <g transform={`translate(${stageSize.w / 2}, ${stageSize.h / 2})`}>
            {/* Subtle connecting ellipse */}
            <ellipse
              cx={0}
              cy={0}
              rx={stageSize.rx}
              ry={stageSize.ry}
              stroke="rgba(226, 232, 240, 0.85)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              fill="none"
            />

            {/* Glowing station nodes along the ellipse */}
            {ORBIT_STATIONS.map((station, idx) => {
              const rad = (station.deg * Math.PI) / 180;
              const x = stageSize.rx * Math.cos(rad);
              const y = stageSize.ry * Math.sin(rad);

              return (
                <g key={idx}>
                  <circle cx={x} cy={y} r="10" fill={station.color} opacity="0.16" />
                  <circle cx={x} cy={y} r="3.8" fill={station.color} className={styles.nodePulse} />
                </g>
              );
            })}
          </g>
        </svg>

        {/* Central Focal Content */}
        <div className={styles.center}>
          <p className={styles.eyebrow}>{t("stack.eyebrow")}</p>

          <h2 className={styles.h2}>
            {t("stack.h2")}{" "}
            <span className={styles.accentRed}>{t("stack.h2Accent")}</span>
          </h2>

          <p className={styles.lede}>{t("stack.lede")}</p>

          {/* 3 Pillars */}
          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>
                <MegaphoneIcon />
              </span>
              <span>{t("stack.pillar1")}</span>
            </div>

            <div className={styles.pillarDivider} aria-hidden="true" />

            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>
                <ChartIcon />
              </span>
              <span>{t("stack.pillar2")}</span>
            </div>

            <div className={styles.pillarDivider} aria-hidden="true" />

            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>
                <CodeIcon />
              </span>
              <span>{t("stack.pillar3")}</span>
            </div>
          </div>
        </div>

        {/* The 11 Orbiting Platform Cards */}
        <div className={styles.cardsContainer}>
          {PLATFORMS.map((platform: Platform) => {
            const isSocial = platform.id === "social-media";

            // Default initial translation based on base angle for zero layout shift
            const initialRad = (platform.baseAngleDeg * Math.PI) / 180;
            const initX = stageSize.rx * Math.cos(initialRad);
            const initY = stageSize.ry * Math.sin(initialRad);

            return (
              <div
                key={platform.id}
                data-platform-card
                data-base-angle={platform.baseAngleDeg}
                className={styles.card}
                style={{
                  transform: `translate(-50%, -50%) translate3d(${initX.toFixed(2)}px, ${initY.toFixed(2)}px, 0)`,
                }}
              >
                {/* Ambient glow halo matching platform color */}
                <div
                  className={styles.cardHalo}
                  style={{
                    background: `radial-gradient(circle, ${platform.glowColor} 0%, transparent 72%)`,
                  }}
                  aria-hidden="true"
                />

                {/* White Pill */}
                <div className={styles.cardPill}>
                  <div className={styles.cardIcon}>
                    <PlatformIcon id={platform.id} />
                  </div>
                  {!isSocial && (
                    <span className={styles.cardTitle}>{platform.name}</span>
                  )}
                </div>

                {/* 2-line Subtitle under the pill */}
                <div className={styles.cardSubtitle}>
                  <div>{platform.subtitles[0]}</div>
                  <div>{platform.subtitles[1]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
