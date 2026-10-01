"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

const SERVICES_LIST = [
  "Lead Generation Company",
  "Real Estate Marketing Agency",
  "Best Digital Marketing Agency",
  "Social Media Marketing Agency",
  "Bulk SMS Agency",
];

const COMPANY_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#experience" },
  { label: "Blog", href: "#work" },
  { label: "Portfolio", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];



export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer} id="footer">
      {/* Top CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <span className={styles.ctaKicker}>START A PROJECT</span>
            <h3 className={styles.ctaTitle}>
              Ready to accelerate your digital growth?
            </h3>
            <p className={styles.ctaDesc}>
              Let&apos;s build scalable software, craft high-converting websites,
              and dominate search results across Chandigarh, Mohali, and beyond.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a
              href="mailto:info@webczarsolutions.com"
              className={styles.ctaPrimaryBtn}
            >
              Get a Free Proposal <span>→</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919988221729&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className={styles.ctaSecondaryBtn}
            >
              WhatsApp Us <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className={styles.mainGrid}>
        {/* Brand & Overview Column */}
        <div className={styles.brandCol}>
          <a href="#home" className={styles.logoLink} onClick={scrollToTop}>
            <img
              src="/images/logoWebczar-darkTM.png"
              alt="Webczar Solutions"
              className={styles.logoImg}
            />
          </a>
          <p className={styles.brandDesc}>
            Webczar Solutions is a premier technology, custom software
            development, and digital marketing agency based in the Tricity tech
            corridor. We deliver end-to-end digital transformation for modern
            businesses worldwide.
          </p>

          <div className={styles.badges}>
            <span className={styles.badge}>
              <span className={styles.badgeDot} /> Tricity & Global Delivery
            </span>
            <span className={styles.badge}>
              <span className={styles.badgeDot} /> 24/7 Client Support
            </span>
            <span className={styles.badge}>
              <span className={styles.badgeDot} /> ISO-Standard Code
            </span>
          </div>

          <div className={styles.founderBlock}>
            <span className={styles.founderLbl}>Founder &amp; Director:</span>
            <span className={styles.founderName}>Subhadeep Chanda</span>
          </div>
        </div>

        {/* Services Column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Our Services</h4>
          <ul className={styles.linkList}>
            {SERVICES_LIST.map((service) => (
              <li key={service}>
                <a href="#experience" className={styles.linkItem}>
                  <span className={styles.bulletArrow}>→</span>
                  <span>{service}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.linkList}>
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.linkItem}>
                  <span className={styles.bulletArrow}>→</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter Column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact &amp; Offices</h4>
          <div className={styles.contactBlock}>
            <p className={styles.contactItem}>
              <b>Location:</b>
              <span>
                Chandigarh · Mohali · Zirakpur · Panchkula (Tricity), India
              </span>
            </p>
            <p className={styles.contactItem}>
              <b>Email:</b>
              <a href="mailto:info@webczarsolutions.com">
                info@webczarsolutions.com
              </a>
            </p>
            <p className={styles.contactItem}>
              <b>Phone:</b>
              <a href="tel:9988221729">+91 99882 21729</a>
            </p>
            <p className={styles.contactItem}>
              <b>Hours:</b>
              <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
            </p>
          </div>

          <div className={styles.newsletterBox}>
            <span className={styles.newsTitle}>Stay Updated</span>
            <p className={styles.newsSub}>
              Insights on AI, web development, and digital marketing.
            </p>
            {subscribed ? (
              <div className={styles.newsSuccess}>
                ✓ Thank you! You&apos;re now subscribed to Webczar insights.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.newsForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.newsInput}
                  required
                />
                <button type="submit" className={styles.newsBtn}>
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Social Strip */}
      <div className={styles.socialStrip}>
        <div className={styles.socialLeft}>
          <span className={styles.socialPrompt}>Connect with Webczar:</span>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/company/webczar-solutions"
              target="_blank"
              rel="noreferrer"
              className={styles.socialChip}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.instagram.com/webczarsolutions"
              target="_blank"
              rel="noreferrer"
              className={styles.socialChip}
            >
              Instagram ↗
            </a>
            <a
              href="https://github.com/webczar-solutions"
              target="_blank"
              rel="noreferrer"
              className={styles.socialChip}
            >
              GitHub ↗
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919988221729&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className={styles.socialChip}
            >
              WhatsApp ↗
            </a>
          </div>
        </div>

        <a href="#home" className={styles.backToTop} onClick={scrollToTop}>
          Back to top <i>↑</i>
        </a>
      </div>

      {/* Sub-Footer Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomLeft}>
          <span>© {new Date().getFullYear()} Webczar Solutions. All rights reserved.</span>
          <span className={styles.divider}>·</span>
          <span>Crafted with precision by <b>Subhadeep Chanda</b></span>
        </div>
        <div className={styles.legalLinks}>
          <a href="#contact" className={styles.legalLink}>
            Privacy Policy
          </a>
          <span className={styles.divider}>·</span>
          <a href="#contact" className={styles.legalLink}>
            Terms of Service
          </a>
          <span className={styles.divider}>·</span>
          <a href="#contact" className={styles.legalLink}>
            Security
          </a>
          <span className={styles.divider}>·</span>
          <a href="#contact" className={styles.legalLink}>
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
