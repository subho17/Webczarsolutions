"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { gsap, EASE, prefersReducedMotion } from "@/lib/gsap";
import styles from "./TeamSection.module.css";

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  category: "leadership" | "engineering" | "design" | "marketing" | "culture";
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
    bio: "12+ years pioneering custom software development, AI solutions, and digital transformation for modern enterprises worldwide.",
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
    bio: "Guiding enterprise clients through digital roadmaps, marketing execution, and high-impact digital initiatives.",
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
    bio: "Crafting intuitive, human-centered digital experiences, brand identities, and modern design systems that captivate users.",
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
    bio: "Championing people-first culture, efficient operational workflows, cross-functional collaboration, and talent excellence.",
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
    id: "rohit-verma",
    name: "Rohit Verma",
    role: "Mobile App Lead",
    category: "engineering",
    src: "/images/team/team-7.jpg",
    focus: "center 20%",
    tag: "Mobile Apps",
    bio: "Specializing in cross-platform React Native and iOS/Android app architectures, offline sync, and fluid animations.",
    skills: ["React Native", "iOS & Android", "State Management", "Mobile APIs"],
  },
  {
    id: "simran-kaur",
    name: "Simran Kaur",
    role: "Performance Marketing Lead",
    category: "marketing",
    src: "/images/team/team-8.jpg",
    focus: "center 18%",
    tag: "Marketing & PPC",
    bio: "Driving multi-channel user acquisition, Google Ads, Meta campaigns, and high-converting marketing funnels.",
    skills: ["Google Ads", "Meta Ads", "Funnel Optimization", "Data Analytics"],
  },
  {
    id: "vikram-malhotra",
    name: "Vikram Malhotra",
    role: "Cloud & DevOps Architect",
    category: "engineering",
    src: "/images/team/team-9.jpg",
    focus: "center 18%",
    tag: "Cloud & DevOps",
    bio: "Managing multi-cloud AWS and GCP infrastructures, automated CI/CD pipelines, container orchestration, and cybersecurity.",
    skills: ["AWS / GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Zero Downtime"],
  },
  {
    id: "ananya-sen",
    name: "Ananya Sen",
    role: "Senior Product Designer",
    category: "design",
    src: "/images/team/team-10.jpg",
    focus: "center 20%",
    tag: "Design & UX",
    bio: "Transforming complex business logic into effortless, accessible, and delightful user journeys and prototypes.",
    skills: ["Prototyping", "User Research", "Wireframing", "Design Systems"],
  },
  {
    id: "harpreet-singh",
    name: "Harpreet Singh",
    role: "Backend & AI Engineer",
    category: "engineering",
    src: "/images/team/team-11.jpg",
    focus: "center 15%",
    tag: "Backend & AI",
    bio: "Engineering high-throughput microservices, vector search integrations, Python backend pipelines, and database optimizations.",
    skills: ["Python", "Node.js", "AI Integrations", "PostgreSQL / Redis"],
  },
  {
    id: "pooja-mehra",
    name: "Pooja Mehra",
    role: "Content & Online PR Lead",
    category: "marketing",
    src: "/images/team/team-12.jpg",
    focus: "center 20%",
    tag: "Content & PR",
    bio: "Crafting authoritative editorial narratives, brand positioning, online press releases, and corporate thought leadership.",
    skills: ["Brand Storytelling", "Online PR", "Editorial Strategy", "SEO Copywriting"],
  },
  {
    id: "kunal-kapoor",
    name: "Kunal Kapoor",
    role: "Frontend Developer",
    category: "engineering",
    src: "/images/team/team-13.jpg",
    focus: "center 20%",
    tag: "Frontend",
    bio: "Passionate about creating modern, accessible, responsive user interfaces with Next.js, Tailwind, and interactive GSAP animations.",
    skills: ["Next.js", "React.js", "CSS Modules", "Web Performance"],
  },
  {
    id: "jaspreet-kaur",
    name: "Jaspreet Kaur",
    role: "SEO & Growth Specialist",
    category: "marketing",
    src: "/images/team/team-14.jpg",
    focus: "center 20%",
    tag: "SEO & Growth",
    bio: "Ranking client websites #1 across Google with technical audits, keyword optimization, and high-authority link strategies.",
    skills: ["Technical SEO", "Keyword Research", "On-Page SEO", "Schema & SERP"],
  },
  {
    id: "siddharth-roy",
    name: "Siddharth Roy",
    role: "QA & Automation Engineer",
    category: "engineering",
    src: "/images/team/team-15.jpg",
    focus: "center 20%",
    tag: "Quality Assurance",
    bio: "Guaranteeing bug-free software releases with automated end-to-end testing, performance profiling, and security benchmarks.",
    skills: ["Playwright / Cypress", "API Testing", "Load Testing", "Quality Control"],
  },
  {
    id: "tanya-arora",
    name: "Tanya Arora",
    role: "Social Media & Brand Strategist",
    category: "marketing",
    src: "/images/team/team-16.jpg",
    focus: "center 20%",
    tag: "Social Media",
    bio: "Elevating brand presence across LinkedIn, Instagram, YouTube, and X with creative campaigns and viral community engagement.",
    skills: ["Social Campaigns", "Community Growth", "Visual Content", "Brand Identity"],
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
  const gridWrapRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<FilterType>("all");
  const [activeModalItem, setActiveModalItem] = useState<TeamMemberItem | null>(null);
  const isPausedRef = useRef(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filteredItems = TEAM_DATA.filter((item) => {
    if (filter === "team") return item.category !== "culture";
    if (filter === "culture") return item.category === "culture";
    return true;
  });

  // GSAP entrance reveal
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
    }, el);

    return () => ctx.revert();
  }, []);

  // Automatic Smooth Continuous Scroll
  useEffect(() => {
    const container = gridWrapRef.current;
    if (!container || prefersReducedMotion()) return;

    let rafId: number;
    let accumulated = 0;
    const speed = 0.85; // pixels per frame

    const tick = () => {
      if (!isPausedRef.current && container) {
        accumulated += speed;
        if (accumulated >= 1) {
          const step = Math.floor(accumulated);
          accumulated -= step;

          // If reached near the end, wrap smoothly to beginning
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 4) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += step;
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [filter]);

  // Handle manual navigation via Left / Right buttons
  const handleScroll = useCallback((direction: "left" | "right") => {
    const container = gridWrapRef.current;
    if (!container) return;

    // Temporarily pause auto-scroll during manual button interaction
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);

    const scrollAmount = container.clientWidth * 0.65;
    const targetScroll =
      direction === "left"
        ? Math.max(0, container.scrollLeft - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + scrollAmount);

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    // Resume auto-scroll after 3 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 3000);
  }, []);

  // Pause auto-scroll on hover or touch
  const handleMouseEnter = () => {
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

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
            Meet our 16 multidisciplinary software engineers, AI developers, product designers, and growth
            strategists based at our Mohali tech headquarters.
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
            <span>Core Team Members</span>
            <span className={styles.tabCount}>16</span>
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

        {/* Carousel Stage with Side Buttons */}
        <div
          className={styles.carouselStage}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Scroll Button Left */}
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnLeft}`}
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            title="Scroll left"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Left / Right Vignette Fades */}
          <div className={styles.fadeLeft} aria-hidden="true" />
          <div className={styles.fadeRight} aria-hidden="true" />

          {/* Horizontal Scroll Track */}
          <div className={styles.gridWrap} ref={gridWrapRef}>
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

          {/* Scroll Button Right */}
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnRight}`}
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            title="Scroll right"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
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
              <span>16 Core Specialists</span>
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
