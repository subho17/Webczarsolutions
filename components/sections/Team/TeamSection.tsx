"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, EASE, prefersReducedMotion } from "@/lib/gsap";
import styles from "./TeamSection.module.css";

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  category: "leadership" | "engineering" | "design" | "culture";
  src: string;
  focus?: string;
  tag: string;
  bio: string;
  skills: string[];
  linkedin?: string;
}

export const TEAM_DATA: TeamMemberItem[] = [
  {
    id: "gagan-kalra",
    name: "Gagan Kalra",
    role: "Founder & Tech Director",
    category: "leadership",
    src: "/images/team/team-3.jpg",
    focus: "center 12%",
    tag: "Founder & Leadership",
    bio: "12+ years pioneering software development, AI solutions, and digital growth. Passionate about empowering modern businesses worldwide from Mohali to Silicon Valley.",
    skills: ["Tech Leadership", "Software Architecture", "AI & Automation", "Strategic Growth"],
    linkedin: "https://www.linkedin.com/in/gagan-kalra-462bb1343/",
  },
  {
    id: "gurpreet-singh",
    name: "Gurpreet Singh",
    role: "Senior Consultant",
    category: "leadership",
    src: "/images/team/team-1.jpg",
    focus: "center 15%",
    tag: "Consulting & Strategy",
    bio: "Guiding enterprise clients through digital roadmaps, marketing growth, and high-impact software execution across global markets.",
    skills: ["Enterprise Strategy", "Digital Roadmaps", "Client Growth", "Consulting"],
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "UI/UX & Creative Lead",
    category: "design",
    src: "/images/team/team-2.jpg",
    focus: "center 22%",
    tag: "Design & UX",
    bio: "Crafting intuitive, human-centered digital experiences, brand identities, and modern design systems that engage users and elevate brands.",
    skills: ["UI/UX Architecture", "Figma Design Systems", "Creative Direction", "Interaction Design"],
  },
  {
    id: "ritu-verma",
    name: "Ritu Verma",
    role: "Operations & HR Lead",
    category: "leadership",
    src: "/images/team/team-4.jpg",
    focus: "center 20%",
    tag: "People & Operations",
    bio: "Championing people-first culture, efficient operational workflows, cross-functional collaboration, and talent excellence at Webczar.",
    skills: ["People Operations", "Talent Acquisition", "Culture Building", "Workflow Optimization"],
  },
  {
    id: "neha-gupta",
    name: "Neha Gupta",
    role: "Client Success Manager",
    category: "leadership",
    src: "/images/team/team-5.jpg",
    focus: "44% 20%",
    tag: "Client Partnerships",
    bio: "Dedicated to transparent communication, agile project velocity, and ensuring measurable ROI for every client partnership.",
    skills: ["Account Management", "Client Strategy", "Agile Delivery", "Partnership Success"],
  },
  {
    id: "aman-sharma",
    name: "Aman Sharma",
    role: "Full-Stack Engineer",
    category: "engineering",
    src: "/images/team/team-6.jpg",
    focus: "center 22%",
    tag: "Engineering",
    bio: "Building high-performance Next.js applications, robust APIs, scalable databases, and mission-critical cloud solutions.",
    skills: ["Full-Stack Dev", "Next.js / React", "TypeScript", "Node.js & Cloud"],
  },
  {
    id: "office-workstations",
    name: "Engineering Bullpen",
    role: "Deep Work & Sprint Sessions",
    category: "culture",
    src: "/images/gallery/office-workstations.jpg",
    tag: "Office Life",
    bio: "Where our developers and product designers collaborate in focused sprint cycles, shipping scalable products with speed and precision.",
    skills: ["Pair Programming", "Sprint Planning", "Unit 51 Kalkat Bhawan", "Mohali HQ"],
  },
  {
    id: "office-meeting",
    name: "Strategy & Ideation Lab",
    role: "Product Roadmaps & Brainstorms",
    category: "culture",
    src: "/images/gallery/office-meeting.jpg",
    tag: "Office Life",
    bio: "Weekly architectural syncs, design crits, and client strategy sessions shaping the next wave of web and mobile innovations.",
    skills: ["Strategy Workshops", "Design Reviews", "Tech Talks", "Collaboration"],
  },
  {
    id: "office-desks",
    name: "Tricity Tech Workspace",
    role: "Aerocity C, Mohali",
    category: "culture",
    src: "/images/gallery/office-desks.jpg",
    tag: "Office Life",
    bio: "An open, vibrant atmosphere designed for seamless teamwork, quick problem solving, and creative synergy.",
    skills: ["Modern Workspace", "Ergonomic Setup", "Tricity Tech Corridor", "Innovation"],
  },
  {
    id: "office-breakout",
    name: "Creative Breakout Lounge",
    role: "Coffee & Informal Syncs",
    category: "culture",
    src: "/images/gallery/office-breakout.jpg",
    tag: "Office Life",
    bio: "Great ideas spark over coffee. Our breakout space fosters relaxed conversations, spontaneous ideas, and team bonding.",
    skills: ["Coffee Chats", "Team Camaraderie", "Relaxation", "Spontaneous Ideas"],
  },
];

type FilterType = "all" | "team" | "culture";

export default function TeamSection() {
  const root = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<FilterType>("all");
  const [activeModalItem, setActiveModalItem] = useState<TeamMemberItem | null>(null);

  const filteredItems = TEAM_DATA.filter((item) => {
    if (filter === "team") return item.category !== "culture";
    if (filter === "culture") return item.category === "culture";
    return true;
  });

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(`.${styles.head} > *`, {
        y: 28,
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE.outExpo,
        stagger: 0.08,
        immediateRender: false,
        scrollTrigger: { trigger: el, start: "top 75%" },
      });

      gsap.from(`.${styles.card}`, {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: EASE.outExpo,
        stagger: 0.06,
        immediateRender: false,
        scrollTrigger: { trigger: `.${styles.grid}`, start: "top 85%" },
      });
    }, el);

    return () => ctx.revert();
  }, [filter]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalItem(null);
    };
    if (activeModalItem) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeModalItem]);

  return (
    <section className={styles.teamSection} id="team" ref={root}>
      <div className={styles.wrap}>
        {/* Header */}
        <div className={styles.head}>
          <p className={styles.eyebrow}>
            <span>09</span> Our Team &amp; Culture
          </p>
          <h2 className={styles.h2}>
            The People Behind <em className={styles.serif}>Webczar.</em>
          </h2>
          <p className={styles.lede}>
            Meet the visionary leadership, software architects, creative designers, and digital strategists
            driving results from our Mohali headquarters.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.tabs} role="tablist" aria-label="Team Categories">
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === "all" ? styles.tabBtnActive : ""}`}
            onClick={() => setFilter("all")}
            role="tab"
            aria-selected={filter === "all"}
          >
            <span>All Photos</span>
            <span className={styles.tabCount}>{TEAM_DATA.length}</span>
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === "team" ? styles.tabBtnActive : ""}`}
            onClick={() => setFilter("team")}
            role="tab"
            aria-selected={filter === "team"}
          >
            <span>Core Leadership &amp; Team</span>
            <span className={styles.tabCount}>6</span>
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === "culture" ? styles.tabBtnActive : ""}`}
            onClick={() => setFilter("culture")}
            role="tab"
            aria-selected={filter === "culture"}
          >
            <span>Office Life &amp; Moments</span>
            <span className={styles.tabCount}>4</span>
          </button>
        </div>

        {/* Horizontal Scroll / Responsive Grid */}
        <div className={styles.gridWrap}>
          <div className={styles.grid}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={styles.card}
                onClick={() => setActiveModalItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveModalItem(item);
                  }
                }}
                aria-label={`View details for ${item.name}`}
              >
                <div className={styles.cardImgWrap}>
                  <img
                    src={item.src}
                    alt={item.name}
                    className={styles.cardImg}
                    style={{ objectPosition: item.focus || "center 20%" }}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardScrim} />
                <span
                  className={`${styles.cardBadge} ${
                    item.category === "leadership" ? styles.cardBadgeAccent : ""
                  }`}
                >
                  {item.tag}
                </span>
                <div className={styles.cardContent}>
                  <span className={styles.cardName}>{item.name}</span>
                  <span className={styles.cardRole}>{item.role}</span>
                  <span className={styles.cardHint}>Click to view bio ↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <span className={styles.highlightDot} />
              <span>Unit 51, Kalkat Bhawan, Mohali</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightDot} />
              <span>15+ Core Specialists</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightDot} />
              <span>850+ Digital Projects Delivered</span>
            </div>
          </div>
          <div className={styles.actionLinks}>
            <Link href="/careers" className={styles.joinBtn}>
              Join Our Team <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox / Bio Modal */}
      {activeModalItem && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setActiveModalItem(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className={styles.modalImgSide}>
              <img
                src={activeModalItem.src}
                alt={activeModalItem.name}
                className={styles.modalImg}
                style={{ objectPosition: activeModalItem.focus || "center 20%" }}
              />
            </div>
            <div className={styles.modalInfoSide}>
              <span className={styles.modalTag}>{activeModalItem.tag}</span>
              <h3 className={styles.modalName}>{activeModalItem.name}</h3>
              <p className={styles.modalRole}>{activeModalItem.role}</p>
              <p className={styles.modalBio}>{activeModalItem.bio}</p>
              <div className={styles.modalSkills}>
                {activeModalItem.skills.map((skill) => (
                  <span key={skill} className={styles.modalSkill}>
                    #{skill}
                  </span>
                ))}
              </div>
              <div className={styles.modalAction}>
                {activeModalItem.linkedin ? (
                  <a
                    href={activeModalItem.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalActionBtn}
                  >
                    LinkedIn Profile <span>↗</span>
                  </a>
                ) : (
                  <Link href="/contact" className={styles.modalActionBtn}>
                    Connect with our team <span>→</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
