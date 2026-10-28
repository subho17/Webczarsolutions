"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./ContactPage.module.css";

const SERVICES = [
  "Custom Web & Next.js Apps",
  "Branding / Designing",
  "AI & LLM Automations",
  "Performance SEO & PPC",
  "UI/UX & Brand Experience",
  "Enterprise Cloud & APIs",
  "Bulk SMS & RCS Messaging",
  "Other / Custom Service",
];

const BUDGETS = [
  "< ₹1 Lakh / $1.5k",
  "₹1L – ₹5L / $5k",
  "₹5L – ₹15L / $15k",
  "Enterprise ₹15L+",
];

const FAQS = [
  {
    q: "How quickly can Webczar kick off our project?",
    a: "Following our initial discovery session and mutual Statement of Work (SOW) sign-off, engineering sprints and design explorations commence within 3 to 5 business days.",
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Absolutely. We routinely sign bilateral NDAs before discussing technical architectures, proprietary datasets, or commercial concepts to ensure 100% IP confidentiality.",
  },
  {
    q: "How does project pricing and milestone billing work?",
    a: "We work on transparent, milestone-driven pricing. Projects typically require an upfront deposit (30% to 50%) followed by progress billing upon verified milestone completion.",
  },
  {
    q: "Do you collaborate with international clients?",
    a: "Yes! Webczar Solutions delivers enterprise systems for clients across North America, Europe, the Middle East, and Asia-Pacific with seamless async workflows and timezone overlap.",
  },
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Custom Web & Next.js Apps",
  ]);
  const [budget, setBudget] = useState<string>("₹1L – ₹5L / $5k");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [customService, setCustomService] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate inquiry submission with realistic network delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setCustomService("");
    setMessage("");
    setSelectedServices(["Custom Web & Next.js Apps"]);
    setSubmitted(false);
  };

  return (
    <div className={styles.page}>
      <Nav />

      <main className={styles.mainWrap}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <span className={styles.kicker}>LET&apos;S TALK · WEBCZAR SOLUTIONS</span>
          <h1 className={styles.title}>Let’s Build Something Remarkable Together</h1>
          <p className={styles.subtitle}>
            Have a new software build, AI integration, website overhaul, or marketing
            initiative in mind? Discuss your project directly with our technical leadership.
          </p>
        </section>

        {/* Two-Column Grid */}
        <div className={styles.contactGrid}>
          {/* Left Column: Direct Info & Trust Badges */}
          <aside className={styles.infoCol}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoCardTitle}>Direct Channels</h2>
              <p className={styles.infoCardSubtitle}>
                Reach out directly via phone, email, or WhatsApp for immediate response.
              </p>

              <div className={styles.contactMethods}>
                <div className={styles.methodItem}>
                  <div className={styles.methodIcon}>📧</div>
                  <div className={styles.methodContent}>
                    <b>General &amp; Sales Inquiries</b>
                    <a href="mailto:info@webczarsolutions.com">
                      info@webczarsolutions.com
                    </a>
                    <p className={styles.methodSub}>Average reply in 2 hours</p>
                  </div>
                </div>

                <div className={styles.methodItem}>
                  <div className={styles.methodIcon}>📞</div>
                  <div className={styles.methodContent}>
                    <b>Call or WhatsApp</b>
                    <a href="tel:9988221729">+91 99882 21729</a>
                    <p className={styles.methodSub}>24 x 7 (Monday to Sunday)</p>
                  </div>
                </div>

                <div className={styles.methodItem}>
                  <div className={styles.methodIcon}>📍</div>
                  <div className={styles.methodContent}>
                    <b>Office Address</b>
                    <a
                      href="https://share.google/p1v6dLB0JHKNpodWx"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "block", lineHeight: "1.45" }}
                    >
                      IM Punjab, Unit 51, 2nd Floor, Kalkat Bhawan, Block C, Kissan Vikas Chamber, Chandigarh Int&apos;l Airport Rd, Gmada Aerocity, Sahibzada Ajit Singh Nagar, Chachu Majra, Punjab 140306
                    </a>
                    <p className={styles.methodSub}>Rated 4.8 ★ (33 reviews) on Google · View on Maps ↗</p>
                  </div>
                </div>

                <div className={styles.methodItem}>
                  <div className={styles.methodIcon}>🌐</div>
                  <div className={styles.methodContent}>
                    <b>Global Presence &amp; Regional Hubs</b>
                    <span>(Tricity), Ambala, Karnal, IND, UK, CA, AUS</span>
                    <p className={styles.methodSub}>Global delivery across 15+ countries</p>
                  </div>
                </div>
              </div>
            </div>



            {/* Founder Consultation Note */}
            <div className={styles.founderCard}>
              <Image
                src="/images/gagan-kalra.png"
                alt="Gagan Kalra — Founder & Technology Director"
                width={56}
                height={56}
                className={styles.founderAvatar}
              />
              <div className={styles.founderDetails}>
                <b>Gagan Kalra</b>
                <span>Founder &amp; Technology Director</span>
                <p style={{ fontSize: "12px", color: "var(--ink-2)", marginTop: "4px" }}>
                  &ldquo;Every project proposal is personally architected to deliver measurable
                  commercial impact and scalability.&rdquo;
                </p>
              </div>
            </div>
          </aside>

          {/* Right Column: Inquiry & Proposal Form */}
          <section className={styles.formCol} aria-label="Project Proposal Request">
            {submitted ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Inquiry Successfully Received!</h3>
                <p className={styles.successText}>
                  Thank you, <b>{name || "friend"}</b>. Our technology director Gagan
                  Kalra and the strategy team have received your project details. We will review
                  your requirements and respond within 4 hours.
                </p>
                <button type="button" onClick={resetForm} className={styles.resetBtn}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className={styles.formTitle}>Request a Project Proposal</h2>
                <p className={styles.formDesc}>
                  Share your objectives and timeline. We will prepare an actionable technical
                  roadmap and transparent cost breakdown.
                </p>

                <form onSubmit={handleSubmit} className={styles.inquiryForm}>
                  {/* Service Multi-Select */}
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>What do you need help with?</label>
                    <div className={styles.pillsWrap}>
                      {SERVICES.map((srv) => {
                        const active = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`${styles.servicePill} ${
                              active ? styles.servicePillActive : ""
                            }`}
                          >
                            {active ? "✓ " : "+ "}
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                    {selectedServices.includes("Other / Custom Service") && (
                      <div style={{ marginTop: "12px" }}>
                        <input
                          type="text"
                          placeholder="Write freely what custom service or feature you require..."
                          value={customService}
                          onChange={(e) => setCustomService(e.target.value)}
                          className={styles.formInput}
                          style={{
                            fontSize: "14px",
                            padding: "11px 15px",
                            borderColor: "var(--accent, #ff2e0f)",
                            background: "#fffaf9",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Budget Selector */}
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Estimated Investment Range</label>
                    <div className={styles.budgetPills}>
                      {BUDGETS.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`${styles.budgetPill} ${
                            budget === b ? styles.budgetPillActive : ""
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="contact-name">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="contact-email">
                        Business Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.formInput}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="contact-phone">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={styles.formInput}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="contact-company">
                        Company or Brand
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="Acme Corp"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="contact-brief">
                      Project Details &amp; Custom Requirements *
                    </label>
                    <textarea
                      id="contact-brief"
                      rows={4}
                      placeholder="Write freely what you require — project goals, custom features, brand/design specs, deliverables, or timelines..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={styles.formTextarea}
                      required
                    />
                  </div>

                  {/* Marketing & RCS Consent Checkbox */}
                  <div className={styles.consentRow}>
                    <input
                      type="checkbox"
                      id="consent-check"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      required
                    />
                    <label htmlFor="consent-check">
                      Yes, I would like to receive marketing updates and offers from Webczar Solutions via: Email, WhatsApp, SMS (Text Messages), RCS (Rich Communication Services - enhanced messages with images and interactive features). By checking this box, you agree to our{" "}
                      <Link href="/privacy" target="_blank">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" target="_blank">
                        Terms of Service
                      </Link>
                      . You can opt out at any time by replying &apos;STOP&apos; to RCS messages or through the methods outlined in our{" "}
                      <Link href="/privacy" target="_blank">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting || !agreed}
                    className={styles.submitBtn}
                  >
                    {submitting ? "Transmitting..." : "Get Free Proposal & Consultation →"}
                  </button>
                </form>
              </>
            )}
          </section>
        </div>

        {/* FAQs */}
        <section className={styles.faqSection} aria-label="Frequently Asked Questions">
          <div className={styles.faqHeader}>
            <span className={styles.kicker}>COMMON QUESTIONS</span>
            <h2 className={styles.faqTitle}>Everything You Need to Know</h2>
            <p className={styles.faqSubtitle}>
              Transparent answers regarding our collaboration process, billing, and timelines.
            </p>
          </div>

          <div className={styles.faqGrid}>
            {FAQS.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{faq.q}</h3>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}
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
