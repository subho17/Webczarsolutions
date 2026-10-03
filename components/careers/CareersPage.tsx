"use client";

import { useState } from "react";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./CareersPage.module.css";

interface JobRole {
  id: string;
  title: string;
  dept: "Engineering" | "AI & Data" | "Design" | "Growth & Marketing";
  location: string;
  type: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

const JOBS: JobRole[] = [
  {
    id: "fullstack-lead",
    title: "Senior Full-Stack Engineer (React 19 / Next.js / TypeScript)",
    dept: "Engineering",
    location: "Chandigarh / Mohali (Hybrid)",
    type: "Full-Time",
    experience: "3+ Years",
    overview:
      "Architect and ship mission-critical web applications, high-throughput APIs, and micro-frontends using modern React, Next.js, Node.js, and cloud platforms.",
    responsibilities: [
      "Lead frontend and backend engineering for enterprise web platforms and client software.",
      "Design robust TypeScript architectures with zero-runtime defects and high test coverage.",
      "Collaborate directly with Founder Subhadeep Chanda to translate client needs into scalable tech.",
      "Mentor junior engineers and champion code quality, performance profiling, and modern CI/CD.",
    ],
    requirements: [
      "Deep expertise in React 19, Next.js App Router, TypeScript, and modern CSS/styling systems.",
      "Strong experience with server-side Node.js, PostgreSQL/MongoDB, and REST/GraphQL APIs.",
      "Familiarity with cloud hosting (Vercel, AWS, GCP), Docker, and edge computing.",
    ],
  },
  {
    id: "ai-engineer",
    title: "AI Solutions & Automation Developer",
    dept: "AI & Data",
    location: "Chandigarh / Mohali (Hybrid)",
    type: "Full-Time",
    experience: "2+ Years",
    overview:
      "Build practical, high-ROI AI pipelines, autonomous agentic workflows, LLM fine-tuning, and business automation systems for modern enterprises.",
    responsibilities: [
      "Implement Retrieval-Augmented Generation (RAG) and LLM-powered systems using LangChain, LlamaIndex, or raw APIs.",
      "Develop automated webhook integrations and autonomous tool-calling pipelines.",
      "Evaluate model performance, token economics, latency reduction, and data privacy safeguards.",
    ],
    requirements: [
      "Proficiency in Python and TypeScript.",
      "Demonstrated experience working with frontier model APIs (OpenAI, Anthropic, Gemini, local models).",
      "Understanding of vector databases (Pinecone, pgvector, Qdrant) and semantic search.",
    ],
  },
  {
    id: "ui-ux-designer",
    title: "Senior UI/UX & Digital Product Designer",
    dept: "Design",
    location: "Chandigarh / Mohali (Hybrid)",
    type: "Full-Time",
    experience: "3+ Years",
    overview:
      "Craft bespoke visual identities, high-fidelity Figma design systems, motion interactions, and conversion-optimized interfaces for modern web and mobile apps.",
    responsibilities: [
      "Translate complex business briefs into intuitive user flows, wireframes, and interactive prototypes.",
      "Build design systems with cohesive color tokens, typography scales, and micro-interactions.",
      "Work closely with our frontend engineers to ensure pixel-perfect implementation.",
    ],
    requirements: [
      "World-class portfolio demonstrating editorial typography, web aesthetics, and attention to detail.",
      "Mastery of Figma, component libraries, auto-layout, and prototyping.",
      "Understanding of frontend CSS capabilities, animations, and accessibility standards.",
    ],
  },
  {
    id: "growth-seo-lead",
    title: "Performance Marketing & SEO Strategist",
    dept: "Growth & Marketing",
    location: "Chandigarh / Mohali (Hybrid)",
    type: "Full-Time",
    experience: "2+ Years",
    overview:
      "Lead high-converting search engine dominance, programmatic SEO, paid media campaigns (Google Ads, Meta), and inbound lead generation engines.",
    responsibilities: [
      "Develop and execute full-funnel digital marketing strategies for regional and international clients.",
      "Perform technical SEO audits, keyword gap analysis, and content strategy roadmaps.",
      "Manage and optimize high-budget Google PPC and Meta social ad funnels.",
    ],
    requirements: [
      "Proven track record of ranking commercial keywords and managing profitable ad spend.",
      "Expertise with Google Search Console, Ahrefs/Semrush, Google Analytics 4, and conversion tracking.",
      "Strong analytical mindset and copywriting capability.",
    ],
  },
  {
    id: "junior-creative-dev",
    title: "Junior Creative Frontend Developer",
    dept: "Engineering",
    location: "Chandigarh / Mohali (On-Site)",
    type: "Full-Time",
    experience: "0 - 1 Year / Passionate Fresher",
    overview:
      "Kickstart your career building dynamic, micro-animated web interfaces alongside seasoned engineers who value craftsmanship and clean code.",
    responsibilities: [
      "Build responsive components in HTML, CSS, JavaScript, and React.",
      "Implement animations using GSAP, CSS transitions, and Three.js.",
      "Ensure cross-browser compatibility and rapid page load speeds.",
    ],
    requirements: [
      "Solid foundation in vanilla JavaScript, modern CSS, and HTML5 semantics.",
      "Eagerness to learn Next.js, TypeScript, and motion design.",
      "A personal project, GitHub repo, or portfolio showing your code passion.",
    ],
  },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [expandedJob, setExpandedJob] = useState<string | null>("fullstack-lead");
  const [appliedRole, setAppliedRole] = useState(JOBS[0].title);
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const departments = ["All", "Engineering", "AI & Data", "Design", "Growth & Marketing"];

  const filteredJobs = JOBS.filter(
    (job) => selectedDept === "All" || job.dept === selectedDept
  );

  const handleSelectJobToApply = (title: string) => {
    setAppliedRole(title);
    const formEl = window.document.getElementById("apply-form-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setAppliedSuccess(true);
    }, 1200);
  };

  return (
    <div className={styles.page}>
      <Nav />

      <main className={styles.mainWrap}>
        {/* Hero */}
        <section className={styles.hero}>
          <span className={styles.kicker}>JOIN WEBCZAR · CAREERS</span>
          <h1 className={styles.title}>Build the Future of Digital &amp; AI Technology</h1>
          <p className={styles.subtitle}>
            We are an elite squad of engineers, designers, AI practitioners, and growth
            architects based in the Chandigarh Tricity tech corridor. Come build products
            that redefine industries worldwide.
          </p>

          {/* Perks Grid */}
          <div className={styles.perksGrid}>
            <div className={styles.perkCard}>
              <span className={styles.perkIcon}>🚀</span>
              <h3 className={styles.perkTitle}>Modern Tech Stack</h3>
              <p className={styles.perkDesc}>
                Work with React 19, Next.js, TypeScript, LLM pipelines, and modern cloud
                infrastructure with zero legacy baggage.
              </p>
            </div>

            <div className={styles.perkCard}>
              <span className={styles.perkIcon}>💡</span>
              <h3 className={styles.perkTitle}>Direct Mentorship</h3>
              <p className={styles.perkDesc}>
                Collaborate directly with Founder Subhadeep Chanda on real commercial architecture
                and business strategy.
              </p>
            </div>

            <div className={styles.perkCard}>
              <span className={styles.perkIcon}>📍</span>
              <h3 className={styles.perkTitle}>Tricity Tech Lifestyle</h3>
              <p className={styles.perkDesc}>
                Enjoy the high quality of living in Chandigarh &amp; Mohali with hybrid
                flexibility and healthy work-life balance.
              </p>
            </div>

            <div className={styles.perkCard}>
              <span className={styles.perkIcon}>📈</span>
              <h3 className={styles.perkTitle}>Accelerated Growth</h3>
              <p className={styles.perkDesc}>
                Competitive compensation, performance milestones, tech book stipends, and rapid
                promotions based on results.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className={styles.jobsSection} id="open-roles">
          <div className={styles.jobsHeader}>
            <div>
              <span className={styles.kicker}>CURRENT OPENINGS</span>
              <h2 className={styles.jobsTitle}>Explore Opportunities at Webczar</h2>
              <p className={styles.jobsSubtitle}>
                Showing {filteredJobs.length} open position{filteredJobs.length === 1 ? "" : "s"}
              </p>
            </div>

            <div className={styles.deptFilter}>
              {departments.map((dept) => (
                <button
                  type="button"
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`${styles.deptBtn} ${
                    selectedDept === dept ? styles.deptBtnActive : ""
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.jobsList}>
            {filteredJobs.map((job) => {
              const isExpanded = expandedJob === job.id;
              return (
                <article key={job.id} className={styles.jobCard}>
                  <div className={styles.jobTopRow}>
                    <div className={styles.jobTitleBlock}>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <div className={styles.jobMetaRow}>
                        <span className={styles.jobDeptBadge}>{job.dept}</span>
                        <span>📍 {job.location}</span>
                        <span>💼 {job.type}</span>
                        <span>⭐ {job.experience}</span>
                      </div>
                    </div>

                    <div className={styles.jobActions}>
                      <button
                        type="button"
                        onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                        className={styles.detailsBtn}
                      >
                        {isExpanded ? "Hide Details ▲" : "Role Details ▼"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectJobToApply(job.title)}
                        className={styles.applyBtn}
                      >
                        Apply Now →
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className={styles.jobExpanded}>
                      <p className={styles.jobExpandedDesc}>{job.overview}</p>

                      <div>
                        <h4 className={styles.jobSectionHead}>Key Responsibilities:</h4>
                        <ul className={styles.jobBullets}>
                          {job.responsibilities.map((r, rIdx) => (
                            <li key={rIdx} className={styles.jobBulletItem}>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={styles.jobSectionHead}>Requirements &amp; Experience:</h4>
                        <ul className={styles.jobBullets}>
                          {job.requirements.map((req, reqIdx) => (
                            <li key={reqIdx} className={styles.jobBulletItem}>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Quick Application Form */}
          <div className={styles.applySection} id="apply-form-section">
            {appliedSuccess ? (
              <div className={styles.appSuccess}>
                <h3 className={styles.appSuccessTitle}>Application Received!</h3>
                <p className={styles.appSuccessText}>
                  Thank you for your interest in joining Webczar Solutions. Our hiring team will
                  review your credentials and reach out within 3 to 5 business days.
                </p>
                <button
                  type="button"
                  onClick={() => setAppliedSuccess(false)}
                  style={{
                    marginTop: "16px",
                    background: "none",
                    border: "1px solid #10b981",
                    color: "#065f46",
                    padding: "8px 18px",
                    borderRadius: "999px",
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <>
                <div className={styles.applyHead}>
                  <span className={styles.kicker}>QUICK APPLICATION</span>
                  <h3 className={styles.applyTitle}>Direct Application Form</h3>
                  <p className={styles.applyDesc}>
                    Skip recruiter intermediaries. Apply directly to our leadership team.
                  </p>
                </div>

                <form onSubmit={handleApplicationSubmit} className={styles.applyForm}>
                  <div className={styles.applyRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Applying For Position *</label>
                      <select
                        value={appliedRole}
                        onChange={(e) => setAppliedRole(e.target.value)}
                        className={styles.formSelect}
                        required
                      >
                        {JOBS.map((j) => (
                          <option key={j.id} value={j.title}>
                            {j.title} ({j.dept})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Your Full Name *</label>
                      <input
                        type="text"
                        placeholder="Subhadeep Chanda"
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        className={styles.formInput}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.applyRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Email Address *</label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={candidateEmail}
                        onChange={(e) => setCandidateEmail(e.target.value)}
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        placeholder="+91 99882 21729"
                        value={candidatePhone}
                        onChange={(e) => setCandidatePhone(e.target.value)}
                        className={styles.formInput}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Portfolio / GitHub / LinkedIn URL *
                    </label>
                    <input
                      type="url"
                      placeholder="https://github.com/your-username or https://linkedin.com/in/..."
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                      className={styles.formInput}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Why Webczar? (Brief Note / Cover Message)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what excites you about building high-impact software and AI systems at Webczar..."
                      value={coverNote}
                      onChange={(e) => setCoverNote(e.target.value)}
                      className={styles.formTextarea}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={styles.submitAppBtn}
                  >
                    {submitting ? "Submitting Application..." : "Submit Application →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </section>
      </main>

      {/* Global Brand Footer */}
      <div className="finalFrame">
        <Footer />
      </div>
    </div>
  );
}
