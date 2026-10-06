"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer/Footer";
import { SERVICES } from "@/content/services";
import styles from "./ExtraServicesPage.module.css";

const ADDON_SLUGS = [
  "podcast-reels-production",
  "online-pr-article-publishing",
  "ivr-incoming-call-solutions",
  "aerial-drone-videography",
];

export default function ExtraServicesPage() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formService, setFormService] = useState("Podcast Shoot, Short Reels Design");
  const [formMessage, setFormMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const addonServices = SERVICES.filter(
    (s) => s.category === "Add-On Services" || ADDON_SLUGS.includes(s.slug)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
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
          <span className={styles.breadcrumbCurrent}>Add-On &amp; Extra Services</span>
        </nav>

        {/* Hero Header */}
        <section className={styles.hero}>
          <span className={styles.kicker}>SPECIALIZED PRODUCTION &amp; MEDIA OFFERINGS</span>
          <h1 className={styles.title}>
            High-Impact Add-On &amp; <em>Extra Services</em>
          </h1>
          <p className={styles.subtitle}>
            Beyond our core software and digital marketing engineering, Webczar Solutions
            provides specialized production, authority publishing, drone cinematography, and
            automated voice telephony built to amplify your market presence.
          </p>

          <div className={styles.heroActions}>
            <Link href="#inquire" className={styles.primaryCta}>
              Request Extra Services Quote <i>→</i>
            </Link>
            <Link href="/services" className={styles.secondaryCta}>
              Explore All 16+ Core Capabilities
            </Link>
          </div>
        </section>

        {/* 4 Cards Grid */}
        <div className={styles.cardsGrid}>
          {addonServices.map((service) => (
            <article key={service.slug} className={styles.card}>
              <div>
                <div className={styles.cardTop}>
                  <span className={styles.cardBadge}>{service.badge}</span>
                  <span className={styles.cardMetric}>
                    {service.stats[0]?.value || "4K / 6K"}
                  </span>
                </div>

                <h2 className={styles.cardTitle}>{service.title}</h2>
                <p className={styles.cardDesc}>{service.shortDesc}</p>

                <ul className={styles.deliverablesList}>
                  {service.deliverables.slice(0, 4).map((d, i) => (
                    <li key={i} className={styles.deliverableItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <Link
                  href={`/services/${service.slug}`}
                  className={styles.exploreLink}
                >
                  Explore Full Service Blueprint
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Inquiry Form Section */}
        <section className={styles.inquiryBox} id="inquire">
          <div className={styles.inquiryLeft}>
            <h2 className={styles.inquiryTitle}>
              Book an Extra Service or Custom Bundle
            </h2>
            <p className={styles.inquiryDesc}>
              Whether you need a dedicated podcast studio recording, tier-1 media PR publishing,
              custom IVR phone menus, or 4K drone videography, our specialized team delivers
              with fast turnarounds and enterprise quality.
            </p>
          </div>

          <div className={styles.inquiryRight}>
            {submitted ? (
              <div className={styles.formSuccess}>
                <h3>Inquiry Received!</h3>
                <p>
                  Thank you, {formName}. Our media &amp; telephony specialists will reach out
                  within 4 business hours with project estimates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.inquiryForm}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Subhadeep Chanda"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.formLabel}>Select Service</label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className={styles.formSelect}
                  >
                    {addonServices.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formField}>
                  <label className={styles.formLabel}>Project Details / Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your property, podcast topic, PR requirements, or incoming call volume..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className={styles.formTextarea}
                  />
                </div>

                <button type="submit" disabled={loading} className={styles.formBtn}>
                  {loading ? "Processing..." : "Get Instant Scope & Pricing →"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
