"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SERVICES, SERVICE_CATEGORIES } from "@/content/services";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./ServicesHubPage.module.css";

const GENERAL_FAQS = [
  {
    q: "How does Webczar Solutions structure its service agreements?",
    a: "We offer flexible engagement models tailored to client needs: fixed-price milestone delivery for web and software development, monthly performance retainers for SEO and paid media, and dedicated engineering pods for long-term tech scaling. All contracts feature transparent deliverables and zero hidden fees.",
  },
  {
    q: "Can we bundle multiple services (e.g. Website + SEO + WhatsApp API)?",
    a: "Yes! Over 70% of our enterprise clients leverage integrated bundles. Bundling development with digital marketing and messaging infrastructure ensures consistent brand alignment, unified conversion tracking, and discounted multi-service packages.",
  },
  {
    q: "How fast can Webczar kick off our project?",
    a: "Following our initial discovery session and mutual Statement of Work (SOW) sign-off, engineering sprints and design explorations commence within 3 to 5 business days.",
  },
  {
    q: "Who owns the code, creative assets, and ad accounts?",
    a: "You do. 100% of the code repositories, Figma designs, Google/Meta ad accounts, and intellectual property belong exclusively to your business. We provide complete admin ownership from day one.",
  },
  {
    q: "Do you deliver projects outside the Chandigarh Tricity region?",
    a: "Absolutely. While headquartered in the Chandigarh-Mohali-Zirakpur tech corridor, Webczar Solutions delivers enterprise systems for clients across North America, the UK, Europe, UAE/GCC, and pan-India with seamless async workflows.",
  },
];

export default function ServicesHubPage() {
  const [selectedCat, setSelectedCat] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Proposal quick form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formService, setFormService] = useState(SERVICES[0].title);
  const [formMessage, setFormMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchCat =
        selectedCat === "All" || service.category === selectedCat;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.shortDesc.toLowerCase().includes(q) ||
        service.deliverables.some((d) => d.toLowerCase().includes(q)) ||
        service.technologies.some((t) => t.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });
  }, [selectedCat, searchQuery]);

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
        {/* Hero Section */}
        <section className={styles.hero}>
          <span className={styles.kicker}>WEBCZAR DIGITAL CAPABILITIES</span>
          <h1 className={styles.title}>
            Full-Spectrum Technology, Marketing &amp; <em>Cloud Solutions</em>
          </h1>
          <p className={styles.subtitle}>
            From custom enterprise software and next-gen web applications to
            high-ROAS performance marketing and cloud telephony, Webczar Solutions
            delivers end-to-end digital transformation for modern businesses.
          </p>
        </section>

        {/* Metrics Banner */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <span className={styles.metricVal}>16<em>+</em></span>
            <span className={styles.metricLbl}>Specialized Disciplines</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricVal}>850<em>+</em></span>
            <span className={styles.metricLbl}>Projects Shipped Globally</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricVal}>99.4<em>%</em></span>
            <span className={styles.metricLbl}>Client Satisfaction Rate</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricVal}>24<em>/7</em></span>
            <span className={styles.metricLbl}>Tricity &amp; Global Support</span>
          </div>
        </div>

        {/* Toolbar: Category Pills & Search */}
        <div className={styles.toolbar}>
          <div className={styles.categoryPills}>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`${styles.catPill} ${
                  selectedCat === cat ? styles.catPillActive : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.searchWrap}>
            <span className={styles.searchIcon} aria-hidden="true">🔍</span>
            <input
              type="text"
              placeholder="Search capabilities, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className={styles.servicesGrid}>
            {filteredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={styles.serviceCard}
              >
                <div className={styles.cardTop}>
                  <span className={styles.catTag}>{service.category}</span>
                  <span className={styles.badgeTag}>{service.badge}</span>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.shortDesc}</p>

                <ul className={styles.deliverablesList}>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className={styles.deliverableItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.techPills}>
                  {service.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.viewLink}>
                    Explore Service Blueprint
                    <span className={styles.arrowGlyph}>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>No services match your search &ldquo;{searchQuery}&rdquo;</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCat("All");
                setSearchQuery("");
              }}
              className={styles.clearBtn}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Process Section */}
        <section className={styles.processSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>THE WEBCZAR BLUEPRINT</span>
            <h2 className={styles.sectionH2}>
              How We Turn Ideas Into <em>Market Leaders</em>
            </h2>
            <p className={styles.sectionDesc}>
              A disciplined four-phase delivery framework designed for speed,
              flawless execution, and verifiable return on investment.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <span className={styles.stepNum}>STEP 01</span>
              <h4 className={styles.stepTitle}>Discovery &amp; Strategy</h4>
              <p className={styles.stepText}>
                Deep technical audits, competitor benchmarking, audience intent
                mapping, and defining unambiguous success KPIs.
              </p>
            </div>
            <div className={styles.stepCard}>
              <span className={styles.stepNum}>STEP 02</span>
              <h4 className={styles.stepTitle}>Architecture &amp; Design</h4>
              <p className={styles.stepText}>
                Figma prototypes, normalized database schemas, conversion funnels,
                and editorial typography design systems.
              </p>
            </div>
            <div className={styles.stepCard}>
              <span className={styles.stepNum}>STEP 03</span>
              <h4 className={styles.stepTitle}>Agile Engineering</h4>
              <p className={styles.stepText}>
                Two-week development sprints, modular React/Next.js code, robust
                APIs, and continuous testing with zero bloat.
              </p>
            </div>
            <div className={styles.stepCard}>
              <span className={styles.stepNum}>STEP 04</span>
              <h4 className={styles.stepTitle}>Scale &amp; Optimization</h4>
              <p className={styles.stepText}>
                Global CDN launch, real-time ROI tracking, continuous multivariate
                conversion tests, and 24/7 dedicated support.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Webczar Pillars */}
        <section className={styles.pillarsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>THE WEBCZAR ADVANTAGE</span>
            <h2 className={styles.sectionH2}>
              Engineered For <em>Maximum Impact</em>
            </h2>
            <p className={styles.sectionDesc}>
              We are not just service vendors — we operate as dedicated technical
              and growth co-pilots for our clients worldwide.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <span className={styles.pillarIcon}>⚡</span>
              <h4 className={styles.pillarTitle}>Engineering Rigor</h4>
              <p className={styles.pillarDesc}>
                Clean TypeScript, zero bloated WordPress builders, 95+ Google
                Lighthouse scores, and scalable cloud microservices.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <span className={styles.pillarIcon}>📈</span>
              <h4 className={styles.pillarTitle}>Revenue-First Focus</h4>
              <p className={styles.pillarDesc}>
                We prioritize closed revenue, qualified leads, and measurable
                ROAS over superficial vanity impressions.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <span className={styles.pillarIcon}>🔒</span>
              <h4 className={styles.pillarTitle}>100% IP Ownership</h4>
              <p className={styles.pillarDesc}>
                Full source code, repositories, creative master files, and ad
                accounts belong entirely to your business from day one.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <span className={styles.pillarIcon}>🤝</span>
              <h4 className={styles.pillarTitle}>Direct Leadership Access</h4>
              <p className={styles.pillarDesc}>
                Collaborate directly with Founder Subhadeep Chanda and senior
                technical architects without layers of account middle-men.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Inquiry / Service Proposal Form */}
        <section className={styles.inquirySection} id="inquiry">
          <div className={styles.inquiryBox}>
            <div className={styles.inquiryLeft}>
              <span className={styles.inquiryKicker}>START A CONVERSATION</span>
              <h3 className={styles.inquiryTitle}>
                Ready to Accelerate Your Digital Footprint?
              </h3>
              <p className={styles.inquiryDesc}>
                Tell us about your upcoming project. Our technical directors will
                review your requirements and provide a customized proposal within 24 hours.
              </p>
              <ul className={styles.inquiryBenefits}>
                <li>✓ Free 30-minute discovery consultation</li>
                <li>✓ Non-Disclosure Agreement (NDA) on request</li>
                <li>✓ Transparent milestone-based estimates</li>
                <li>✓ Fast kickoff within 3 to 5 business days</li>
              </ul>
            </div>

            <div className={styles.inquiryRight}>
              {submitted ? (
                <div className={styles.formSuccess}>
                  <h4>✓ Thank you for reaching out!</h4>
                  <p>
                    Your inquiry has been received. Our team will review your project
                    and contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className={styles.inquiryForm}>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Subhadeep Chanda"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99882 21729"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Primary Service *</label>
                    <select
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className={styles.formSelect}
                    >
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Project Overview</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your goals, timeline, and current challenges..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className={styles.formTextarea}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={styles.formSubmitBtn}
                  >
                    {loading ? "Transmitting Request..." : "Request Proposal →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>FREQUENTLY ASKED QUESTIONS</span>
            <h2 className={styles.sectionH2}>
              Everything You Need to <em>Know</em>
            </h2>
            <p className={styles.sectionDesc}>
              Clear answers regarding our contracts, engineering standards, and
              working process.
            </p>
          </div>

          <div className={styles.faqList}>
            {GENERAL_FAQS.map((faq, idx) => {
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
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqToggle}>+</span>
                  </button>
                  {isOpen && <p className={styles.faqAnswer}>{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
