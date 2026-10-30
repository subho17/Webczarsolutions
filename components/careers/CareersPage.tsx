"use client";

import { useState, useRef } from "react";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./CareersPage.module.css";

interface JobRole {
  id: string;
  title: string;
  dept:
    | "Corporate Sales & Operations"
    | "Engineering"
    | "AI & Data"
    | "Design"
    | "Growth & Marketing";
  location: string;
  type: string;
  experience: string;
  salary?: string;
  workingHours?: string;
  industry?: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

const JOBS: JobRole[] = [
  {
    id: "corporate-sales-operations",
    title: "Corporate Sales & Operations Executive",
    dept: "Corporate Sales & Operations",
    location: "Chandigarh / Mohali (Hybrid / On-Site)",
    type: "Full-Time",
    experience: "Fresher to 3 Years",
    salary: "₹10,000–₹25,000 per month",
    workingHours: "8 hours per day",
    industry: "IT/Software & Digital Marketing Agency",
    overview:
      "Drive corporate client acquisition and business operations at Webczar Solutions. Promote high-impact IT solutions, custom software, websites, and digital marketing services to prospective corporate clients while ensuring smooth coordination and service delivery between clients and internal teams.",
    responsibilities: [
      "Generate leads and acquire new corporate clients.",
      "Promote IT solutions, software services, websites, and digital marketing services.",
      "Handle client communication, follow-ups, and meetings.",
      "Prepare quotations, proposals, and sales reports.",
      "Coordinate with internal teams to ensure smooth service delivery.",
    ],
    requirements: [
      "Eligibility: Fresher to 3 years of experience in sales, operations, or client relationship management.",
      "Skills Required: Good communication, convincing, negotiation, and client-handling skills.",
      "Enthusiasm for IT solutions, software development, and digital marketing services.",
      "High ownership mindset with punctuality in follow-ups and professional client etiquette.",
      "Available for full-time schedule (8 hours per day).",
    ],
  },
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
      "Collaborate directly with Founder Gagan Kalra to translate client needs into scalable tech.",
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
  const [expandedJob, setExpandedJob] = useState<string | null>("corporate-sales-operations");
  const [appliedRole, setAppliedRole] = useState(JOBS[0].title);
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string>("");
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState(false);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const ALLOWED_EXTENSIONS = ["pdf", "doc", "docx", "jpg", "jpeg", "png"];
  const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15 MB

  const validateAndSetFile = (file: File): boolean => {
    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setCvError(
        "Invalid file format. Please upload Word (.doc, .docx), PDF (.pdf), or JPG/PNG (.jpg, .jpeg, .png)."
      );
      setCvFile(null);
      return false;
    }
    if (file.size > MAX_FILE_SIZE) {
      setCvError("File size exceeds 15 MB limit. Please upload a smaller file.");
      setCvFile(null);
      return false;
    }
    setCvError("");
    setCvFile(file);
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const getFileBadgeClass = (filename: string) => {
    const ext = filename.split(".").pop()?.toLowerCase();
    if (ext === "pdf") return styles.badgePdf;
    if (ext === "doc" || ext === "docx") return styles.badgeWord;
    return styles.badgeJpg;
  };

  const getFileIcon = (filename: string) => {
    const ext = filename.split(".").pop()?.toLowerCase();
    if (ext === "pdf") return "📕";
    if (ext === "doc" || ext === "docx") return "📝";
    return "🖼️";
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const departments = [
    "All",
    "Corporate Sales & Operations",
    "Engineering",
    "AI & Data",
    "Design",
    "Growth & Marketing",
  ];

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

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cvFile && !portfolioUrl.trim()) {
      setCvError("Please upload your CV (Word/PDF/JPG) or provide a resume/portfolio URL.");
      return;
    }

    setSubmitting(true);
    setCvError("");

    try {
      const formData = new FormData();
      formData.append("role", appliedRole);
      formData.append("name", candidateName);
      formData.append("email", candidateEmail);
      formData.append("phone", candidatePhone);
      formData.append("portfolio", portfolioUrl);
      formData.append("coverNote", coverNote);
      if (cvFile) {
        formData.append("cv", cvFile);
      }

      await fetch("/api/careers.php", {
        method: "POST",
        body: formData,
      });
    } catch (err) {
      console.warn("Application submission notice:", err);
    } finally {
      setSubmitting(false);
      setAppliedSuccess(true);
    }
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
                Collaborate directly with Founder Gagan Kalra on real commercial architecture
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
                        {job.salary && (
                          <span className={styles.jobSalaryBadge}>💰 {job.salary}</span>
                        )}
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

                      {(job.industry || job.salary || job.workingHours) && (
                        <div className={styles.jobQuickDetails}>
                          {job.industry && (
                            <div className={styles.quickDetailItem}>
                              <span className={styles.quickDetailLabel}>Industry:</span>
                              <span className={styles.quickDetailValue}>{job.industry}</span>
                            </div>
                          )}
                          {job.salary && (
                            <div className={styles.quickDetailItem}>
                              <span className={styles.quickDetailLabel}>Salary:</span>
                              <span className={styles.quickDetailValue}>{job.salary}</span>
                            </div>
                          )}
                          {job.workingHours && (
                            <div className={styles.quickDetailItem}>
                              <span className={styles.quickDetailLabel}>Working Hours:</span>
                              <span className={styles.quickDetailValue}>{job.workingHours}</span>
                            </div>
                          )}
                        </div>
                      )}

                      <div>
                        <h4 className={styles.jobSectionHead}>Job Responsibilities:</h4>
                        <ul className={styles.jobBullets}>
                          {job.responsibilities.map((r, rIdx) => (
                            <li key={rIdx} className={styles.jobBulletItem}>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={styles.jobSectionHead}>Eligibility &amp; Skills Required:</h4>
                        <ul className={styles.jobBullets}>
                          {job.requirements.map((req, reqIdx) => (
                            <li key={reqIdx} className={styles.jobBulletItem}>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.jobApplyPrompt}>
                        <span>
                          📩 <strong>Interested candidates can apply now!</strong> Submit the form below or email your resume directly to{" "}
                          <a
                            href="mailto:info@webczarsolutions.com?subject=Application%20for%20Corporate%20Sales%20%26%20Operations%20Executive"
                            className={styles.mailLink}
                          >
                            Info@webczarsolutions.com
                          </a>
                        </span>
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
                <div style={{ fontSize: "38px", marginBottom: "8px" }}>🎉</div>
                <h3 className={styles.appSuccessTitle}>Application &amp; CV Received!</h3>
                <p className={styles.appSuccessText}>
                  Thank you, <strong>{candidateName}</strong>! Your application for{" "}
                  <strong>{appliedRole}</strong>
                  {cvFile ? ` (CV: ${cvFile.name})` : ""} has been submitted directly to our hiring team.
                  Our HR will evaluate your credentials and reach out within 24–48 hours.
                </p>

                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
                  <a
                    href={`https://wa.me/919988221729?text=${encodeURIComponent(
                      `Hello Webczar HR Team, I have submitted my job application for the role of "${appliedRole}". Candidate Name: ${candidateName}, Phone: ${candidatePhone}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappNotifyBtn}
                  >
                    💬 Quick Notify on WhatsApp
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setAppliedSuccess(false);
                      setCvFile(null);
                      setCandidateName("");
                      setCandidateEmail("");
                      setCandidatePhone("");
                      setPortfolioUrl("");
                      setCoverNote("");
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    style={{
                      marginTop: "14px",
                      background: "none",
                      border: "1px solid #10b981",
                      color: "#065f46",
                      padding: "11px 22px",
                      borderRadius: "999px",
                      cursor: "pointer",
                      fontWeight: 800,
                      fontSize: "13.5px",
                    }}
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.applyHead}>
                  <span className={styles.kicker}>QUICK APPLICATION</span>
                  <h3 className={styles.applyTitle}>Direct Application Form</h3>
                  <p className={styles.applyDesc}>
                    Skip recruiter intermediaries. Upload your CV (Word, PDF, or JPG) or send it directly to{" "}
                    <a
                      href="mailto:info@webczarsolutions.com?subject=Job%20Application%20-%20Webczar%20Solutions"
                      className={styles.mailLink}
                    >
                      info@webczarsolutions.com
                    </a>.
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
                        placeholder="Your Name"
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
                        placeholder="+91 98765 43210"
                        value={candidatePhone}
                        onChange={(e) => setCandidatePhone(e.target.value)}
                        className={styles.formInput}
                        required
                      />
                    </div>
                  </div>

                  {/* CV / Resume File Upload (Word, PDF, JPG) */}
                  <div className={styles.cvUploadContainer}>
                    <label className={styles.formLabel}>
                      Upload CV / Resume *{" "}
                      <span style={{ fontWeight: 400, color: "#6b7280" }}>
                        (Word, PDF, or JPG/PNG image)
                      </span>
                    </label>

                    {!cvFile ? (
                      <div
                        className={`${styles.cvUploadBox} ${isDragOver ? styles.cvUploadBoxActive : ""}`}
                        onDragOver={(e) => {
                          e.preventDefault();
                          setIsDragOver(true);
                        }}
                        onDragLeave={() => setIsDragOver(false)}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png"
                          className={styles.fileInputHidden}
                          onChange={handleFileChange}
                          tabIndex={-1}
                          aria-label="Upload CV file in Word, PDF, or JPG format"
                        />
                        <div className={styles.uploadIcon}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                          </svg>
                        </div>
                        <p className={styles.uploadTitle}>
                          <span className={styles.uploadTitleHighlight}>Click to upload your CV</span> or drag &amp; drop
                        </p>
                        <p className={styles.uploadHint}>Maximum file size: 15 MB</p>

                        <div className={styles.formatBadges}>
                          <span className={`${styles.formatBadge} ${styles.badgeWord}`}>
                            📝 Word (.doc, .docx)
                          </span>
                          <span className={`${styles.formatBadge} ${styles.badgePdf}`}>
                            📕 PDF (.pdf)
                          </span>
                          <span className={`${styles.formatBadge} ${styles.badgeJpg}`}>
                            🖼️ JPG / Image (.jpg, .png)
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.selectedFileCard}>
                        <div className={styles.fileCardLeft}>
                          <span className={styles.fileCardIcon}>{getFileIcon(cvFile.name)}</span>
                          <div className={styles.fileCardMeta}>
                            <span className={styles.fileCardName} title={cvFile.name}>
                              {cvFile.name}
                            </span>
                            <span className={styles.fileCardSize}>
                              {formatFileSize(cvFile.size)} ·{" "}
                              <span className={`${styles.formatBadge} ${getFileBadgeClass(cvFile.name)}`}>
                                {cvFile.name.split(".").pop()?.toUpperCase()}
                              </span>
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setCvFile(null);
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          }}
                          className={styles.removeFileBtn}
                          title="Remove this file"
                        >
                          ✕ Remove / Change
                        </button>
                      </div>
                    )}

                    {cvError && <div className={styles.uploadErrorMsg}>{cvError}</div>}
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Portfolio / LinkedIn / GitHub Link (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/... or your personal website"
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Why Webczar? (Brief Note / Cover Message)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what excites you about building high-impact software, sales, or marketing at Webczar..."
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
                    {submitting ? "Submitting Application & CV..." : "Submit Application & CV →"}
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
