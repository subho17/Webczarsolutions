"use client";

import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./AboutPage.module.css";

const TECH_CATEGORIES = [
  {
    title: "Modern Frontend & Web",
    skills: ["React 19", "Next.js App Router", "TypeScript", "GSAP Motion", "Three.js / WebGL", "CSS Modules", "TailwindCSS"],
  },
  {
    title: "Backend & Microservices",
    skills: ["Node.js", "Python / FastAPI", "PostgreSQL", "MongoDB", "Redis", "Docker", "GraphQL", "REST APIs"],
  },
  {
    title: "Artificial Intelligence & RAG",
    skills: ["OpenAI APIs", "Claude 3.5 Sonnet", "LangChain", "Vector DBs (Pinecone)", "Llama 3", "Fine-Tuning", "Automated Agents"],
  },
  {
    title: "Performance Marketing & Ads",
    skills: ["Google Search & PMax", "Meta Ads Manager", "LinkedIn Ads", "YouTube Video Ads", "Google Tag Manager", "GA4", "Looker Studio"],
  },
  {
    title: "Direct Messaging & Telephony",
    skills: ["WhatsApp Business API", "DLT Bulk SMS", "Cloud Telephony / IVR", "Conversational Bots", "Webhooks", "SMS Gateways"],
  },
  {
    title: "UI/UX & Brand Design",
    skills: ["Figma Systems", "Adobe Illustrator", "Photoshop", "Brand Books", "Interaction Design", "Prototyping", "Design Tokens"],
  },
];

const CORE_VALUES = [
  {
    icon: "💎",
    title: "Craftsmanship Over Shortcuts",
    desc: "We write clean, modular, hand-crafted code without bloated page builders or fragile plugins. Every interface is tested for 60fps fluidity and accessibility.",
  },
  {
    icon: "🎯",
    title: "Revenue-First Engineering",
    desc: "Code and design are tools to solve business problems. We measure our success by qualified pipeline, lower acquisition costs, and tangible client growth.",
  },
  {
    icon: "🤝",
    title: "Radical Transparency",
    desc: "No black boxes. You own 100% of your source code, design systems, and ad accounts. We share live dashboards, open repos, and honest engineering timelines.",
  },
  {
    icon: "⚡",
    title: "Continuous Evolution",
    desc: "From pioneering React 19 and Next.js App Router to implementing frontier autonomous AI agents, we stay at the cutting edge so our clients stay ahead.",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Nav />

      <main className={styles.mainWrap}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>About Us</span>
        </nav>

        {/* Hero */}
        <section className={styles.hero}>
          <span className={styles.kicker}>ABOUT WEBCZAR SOLUTIONS</span>
          <h1 className={styles.title}>
            Innovating at the Intersection of <em>Technology &amp; Growth</em>
          </h1>
          <p className={styles.subtitle}>
            Webczar Solutions is a premier technology, custom software development,
            and digital marketing agency headquartered in the Tricity tech corridor.
            We build scalable software and high-converting marketing engines for modern
            enterprises worldwide.
          </p>

          <div className={styles.heroActions}>
            <Link href="/services" className={styles.primaryCta}>
              Explore Our Capabilities <span>→</span>
            </Link>
            <Link href="/contact" className={styles.secondaryCta}>
              Start a Conversation <span>↗</span>
            </Link>
          </div>
        </section>

        {/* Metrics Grid */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <span className={styles.metricVal}>12<em>+</em></span>
            <span className={styles.metricLbl}>Years of Experience</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricVal}>850<em>+</em></span>
            <span className={styles.metricLbl}>Completed Projects</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricVal}>25<em>+</em></span>
            <span className={styles.metricLbl}>Full-Stack Specialists</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricVal}>99.4<em>%</em></span>
            <span className={styles.metricLbl}>Client Satisfaction</span>
          </div>
        </div>

        {/* Story Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>OUR STORY &amp; PHILOSOPHY</span>
            <h2 className={styles.sectionH2}>
              Bridging Deep Engineering &amp; <em>Commercial Performance</em>
            </h2>
          </div>

          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <p>
                Founded with a mission to eliminate the divide between software engineering
                and digital growth marketing, Webczar Solutions began with a simple belief:
                businesses shouldn&apos;t have to juggle fragmented vendors for software development,
                UI/UX design, and revenue marketing.
              </p>
              <p>
                Too often, creative design agencies build visually pleasing websites that perform poorly
                in Google search, while software shops engineer reliable backends that lack intuitive
                conversion funnels. We unified these disciplines under one roof.
              </p>
              <p>
                Today, Webczar Solutions operates as a comprehensive digital powerhouse. We engineer
                bespoke Next.js platforms, develop custom enterprise software, train enterprise AI agents,
                and orchestrate high-ROAS marketing campaigns across Chandigarh, Mohali, Panchkula, and
                international markets.
              </p>
            </div>

            <div className={styles.storyCard}>
              <h3 className={styles.storyCardTitle}>The Webczar Standard</h3>
              <ul className={styles.storyPoints}>
                <li>
                  <span className={styles.pointIcon}>✓</span>
                  <span><strong>Zero Template Bloat:</strong> Hand-crafted code optimized for sub-second load times.</span>
                </li>
                <li>
                  <span className={styles.pointIcon}>✓</span>
                  <span><strong>Full Data Transparency:</strong> Direct client ownership of all repositories and ad accounts.</span>
                </li>
                <li>
                  <span className={styles.pointIcon}>✓</span>
                  <span><strong>ISO-Standard Architecture:</strong> Enterprise-grade security, RBAC, and clean CI/CD pipelines.</span>
                </li>
                <li>
                  <span className={styles.pointIcon}>✓</span>
                  <span><strong>Tricity Roots, Global Delivery:</strong> Seamless async workflows serving US, UK, UAE, and Pan-India.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Founder & Director Spotlight */}
        <section className={styles.section}>
          <div className={styles.founderBox}>
            <div className={styles.founderProfile}>
              <span className={styles.founderBadge}>LEADERSHIP &amp; VISION</span>
              <h3 className={styles.founderName}>Subhadeep Chanda</h3>
              <span className={styles.founderRole}>Founder &amp; Technology Director</span>

              <div className={styles.founderContactList}>
                <span>Email: <a href="mailto:info@webczarsolutions.com">info@webczarsolutions.com</a></span>
                <span>Direct: <a href="tel:9988221729">+91 99882 21729</a></span>
                <span>Location: Chandigarh Tech Corridor, India</span>
              </div>
            </div>

            <div>
              <blockquote className={styles.founderQuote}>
                &ldquo;True digital transformation isn&apos;t about chasing ephemeral trends.
                It is about building robust, secure software foundations paired with relentless,
                data-driven customer acquisition. We measure our success solely by the tangible
                business growth of our partners.&rdquo;
              </blockquote>
              <p className={styles.founderBio}>
                With over a decade of hands-on experience in full-stack web architectures,
                cloud engineering, AI workflows, and digital marketing systems, Subhadeep actively
                guides the technical strategy, architecture reviews, and client partnerships
                at Webczar Solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>GUIDING PRINCIPLES</span>
            <h2 className={styles.sectionH2}>
              How We Think &amp; <em>Operate</em>
            </h2>
            <p className={styles.sectionLead}>
              Our core values inform every line of code we write, every ad campaign we launch,
              and every client conversation we hold.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className={styles.valueCard}>
                <span className={styles.valueIcon}>{val.icon}</span>
                <h4 className={styles.valueTitle}>{val.title}</h4>
                <p className={styles.valueDesc}>{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Ecosystem */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>TECH ECOSYSTEM</span>
            <h2 className={styles.sectionH2}>
              Modern Technologies We <em>Master</em>
            </h2>
            <p className={styles.sectionLead}>
              We continuously evaluate and adopt battle-tested tools to deliver resilience,
              speed, and competitive advantage.
            </p>
          </div>

          <div className={styles.techGrid}>
            {TECH_CATEGORIES.map((cat, idx) => (
              <div key={idx} className={styles.techCatCard}>
                <h4 className={styles.techCatTitle}>{cat.title}</h4>
                <div className={styles.techPillsList}>
                  {cat.skills.map((skill) => (
                    <span key={skill} className={styles.techPill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Presence */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>GLOBAL DELIVERY FOOTPRINT</span>
            <h2 className={styles.sectionH2}>
              Local Roots, <em>Global Reach</em>
            </h2>
          </div>

          <div className={styles.locationsGrid}>
            <div className={styles.locationCard}>
              <span className={styles.locIcon}>📍</span>
              <h4 className={styles.locTitle}>Tricity Tech Corridor</h4>
              <p className={styles.locDesc}>
                Headquartered across Chandigarh, Mohali, Zirakpur, and Panchkula,
                anchoring top-tier engineering talent and client strategy centers.
              </p>
            </div>
            <div className={styles.locationCard}>
              <span className={styles.locIcon}>🌐</span>
              <h4 className={styles.locTitle}>Pan-India Enterprise</h4>
              <p className={styles.locDesc}>
                Delivering high-throughput bulk SMS, IVR telephony, and real estate
                marketing across Delhi NCR, Mumbai, Bangalore, and regional hubs.
              </p>
            </div>
            <div className={styles.locationCard}>
              <span className={styles.locIcon}>🌍</span>
              <h4 className={styles.locTitle}>International Clients</h4>
              <p className={styles.locDesc}>
                Serving high-growth startups and enterprises across the US, UK, Canada,
                UAE, and Europe with seamless timezone alignment and async communication.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
