"use client";

import { useState } from "react";
import Link from "next/link";
import { type ServiceItem, SERVICES } from "@/content/services";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./ServiceDetailPage.module.css";

interface Props {
  service: ServiceItem;
}

export default function ServiceDetailPage({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Proposal quick form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className={styles.page}>
      <Nav />

      <main className={styles.mainWrap}>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/services" className={styles.breadcrumbLink}>
            Services
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{service.title}</span>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <span className={styles.heroBadge}>
            <span>●</span> {service.badge} · {service.category}
          </span>
          <h1 className={styles.heroTitle}>{service.heroHeadline}</h1>
          <p className={styles.heroSub}>{service.heroSub}</p>

          <div className={styles.heroActions}>
            <a href="#inquire" className={styles.primaryCta}>
              Request {service.shortTitle} Proposal <span>→</span>
            </a>
            <a
              href={`https://api.whatsapp.com/send/?phone=919988221729&text=Hello%20Webczar,%20I'd%20like%20to%20discuss%20${encodeURIComponent(
                service.title
              )}.`}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryCta}
            >
              WhatsApp Us <span>↗</span>
            </a>
          </div>

          {/* Stats Strip */}
          <div className={styles.statsStrip}>
            {service.stats.map((st, idx) => (
              <div key={idx} className={styles.statItem}>
                <span className={styles.statValue}>{st.value}</span>
                <span className={styles.statLabel}>{st.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Overview & Deliverables */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.heroBadge}>CAPABILITY BLUEPRINT</span>
            <h2 className={styles.sectionH2}>
              Strategic Impact &amp; <em>Execution Scope</em>
            </h2>
          </div>

          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              {service.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className={styles.overviewSidebar}>
              <h3 className={styles.sidebarTitle}>What We Deliver</h3>
              <ul className={styles.deliverablesList}>
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className={styles.deliverableItem}>
                    <span className={styles.checkMark}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className={styles.techTitle}>Technologies &amp; Tooling</h4>
              <div className={styles.techCloud}>
                {service.technologies.map((tech) => (
                  <span key={tech} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Features & Capabilities */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.heroBadge}>CORE CAPABILITIES</span>
            <h2 className={styles.sectionH2}>
              Engineered For <em>Peak Performance</em>
            </h2>
            <p className={styles.sectionLead}>
              Detailed breakdown of specialized features and systems included in our {service.title} engagement.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {service.features.map((feat, idx) => (
              <div key={idx} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{feat.title}</h3>
                <p className={styles.featureDesc}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Execution Process */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.heroBadge}>EXECUTION PROCESS</span>
            <h2 className={styles.sectionH2}>
              Step-by-Step <em>Delivery Roadmap</em>
            </h2>
          </div>

          <div className={styles.processGrid}>
            {service.process.map((step) => (
              <div key={step.step} className={styles.processCard}>
                <span className={styles.processNum}>PHASE {step.step}</span>
                <h4 className={styles.processTitle}>{step.title}</h4>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Webczar */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.heroBadge}>THE WEBCZAR STANDARD</span>
            <h2 className={styles.sectionH2}>
              Why Partner With Us For <em>{service.shortTitle}</em>
            </h2>
          </div>

          <div className={styles.whyList}>
            {service.whyWebczar.map((point, idx) => (
              <div key={idx} className={styles.whyCard}>
                <span className={styles.whyBullet}>✦</span>
                <span className={styles.whyText}>{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Inquire Box */}
        <section className={styles.inquireBox} id="inquire">
          <div>
            <h3 className={styles.inquireTitle}>
              Ready to Discuss Your {service.shortTitle} Strategy?
            </h3>
            <p className={styles.inquireDesc}>
              Schedule a direct consultation with our technical directors. We will
              analyze your requirements, review competitor landscapes, and craft an
              actionable execution plan within 24 hours.
            </p>
            <ul className={styles.deliverablesList}>
              <li className={styles.deliverableItem}>
                <span className={styles.checkMark}>✓</span>
                <span style={{ color: "#d8d8e0" }}>
                  Bespoke Statement of Work (SOW) &amp; milestone pricing
                </span>
              </li>
              <li className={styles.deliverableItem}>
                <span className={styles.checkMark}>✓</span>
                <span style={{ color: "#d8d8e0" }}>
                  Bilateral NDA signed prior to project kick-off
                </span>
              </li>
              <li className={styles.deliverableItem}>
                <span className={styles.checkMark}>✓</span>
                <span style={{ color: "#d8d8e0" }}>
                  Direct communication with Founder Subhadeep Chanda
                </span>
              </li>
            </ul>
          </div>

          <div>
            {submitted ? (
              <div className={styles.formSuccess}>
                <h4>✓ Request Received!</h4>
                <p>
                  Thank you for submitting your project brief. We will reach out to
                  you via email / WhatsApp within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className={styles.inquireForm}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Subhadeep Chanda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99882 21729"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.formLabel}>Project Objectives</label>
                  <textarea
                    rows={3}
                    placeholder={`Tell us about your requirements for ${service.title}...`}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className={styles.formTextarea}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={styles.formBtn}
                >
                  {loading ? "Transmitting..." : `Request ${service.shortTitle} Proposal →`}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FAQs */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.heroBadge}>FAQS</span>
            <h2 className={styles.sectionH2}>
              Common Questions About <em>{service.shortTitle}</em>
            </h2>
          </div>

          <div className={styles.faqList}>
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${
                    isOpen ? styles.faqItemOpen : ""
                  }`}
                >
                  <button
                    type="button"
                    className={styles.faqBtn}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqSign}>+</span>
                  </button>
                  {isOpen && <p className={styles.faqContent}>{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Services */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.heroBadge}>EXPLORE MORE</span>
            <h2 className={styles.sectionH2}>
              Complementary <em>Capabilities</em>
            </h2>
          </div>

          <div className={styles.relatedGrid}>
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className={styles.relatedCard}
              >
                <span className={styles.relatedCat}>{rel.category}</span>
                <h4 className={styles.relatedTitle}>{rel.title}</h4>
                <p className={styles.relatedDesc}>{rel.shortDesc}</p>
                <span className={styles.relatedLink}>View Blueprint →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
