"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer/Footer";
import {
  PAYMENT_GATEWAYS,
  BANK_TRANSFER_DETAILS,
  PAYMENT_FAQS,
  type PaymentGateway,
} from "@/content/payments";
import styles from "./PayNowPage.module.css";

export default function PayNowPage() {
  const [filter, setFilter] = useState<"all" | "domestic" | "international">("all");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [amount, setAmount] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  const filteredGateways = PAYMENT_GATEWAYS.filter((gw) => {
    if (filter === "domestic") return !gw.isInternational;
    if (filter === "international") return gw.isInternational;
    return true;
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(label);
    setTimeout(() => setCopyFeedback(null), 2500);
  };

  const getCustomWhatsAppUrl = (gwName: string) => {
    const details = [
      "Hello Webczar Billing Team,",
      "I would like to make a payment.",
      invoiceNumber ? `Invoice Ref: ${invoiceNumber}` : "",
      clientName ? `Client Name: ${clientName}` : "",
      amount ? `Amount: ${amount}` : "",
      `Preferred Gateway: ${gwName}`,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/919988221729?text=${encodeURIComponent(details)}`;
  };

  return (
    <div className={styles.page}>
      <Nav />

      <main className={styles.mainWrap}>
        {/* Breadcrumb Trail */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>Pay Online</span>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.kicker}>
            <span className={styles.kickerDot} />
            <span>Secure Client Billing &amp; Checkout</span>
          </div>

          <h1 className={styles.title}>
            Seamless, Verified &amp; <em>Encrypted Payments</em>
          </h1>

          <p className={styles.subtitle}>
            Settle project milestones, monthly software retainers, and enterprise
            licenses quickly through India&apos;s leading payment networks and global
            cross-border rails.
          </p>

          {/* Trust Badges Strip */}
          <div className={styles.trustStrip}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🔒</span>
              <span>256-Bit SSL Encrypted</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>PCI-DSS Level 1 Compliant</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>📄</span>
              <span>Automated GST Tax Invoice</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>⚡</span>
              <span>Instant Confirmation Dispatch</span>
            </div>
          </div>
        </section>

        {/* Invoice Reference Assistant & Filter */}
        <section className={styles.invoiceAssistant}>
          <div className={styles.assistantHeader}>
            <div>
              <h2 className={styles.assistantTitle}>Payment Gateway Selector</h2>
              <p className={styles.assistantSubtitle}>
                Enter your invoice details (optional) to tag your payment reference.
              </p>
            </div>

            <div className={styles.filterTabs} role="tablist">
              <button
                type="button"
                className={`${styles.filterTab} ${filter === "all" ? styles.filterTabActive : ""}`}
                onClick={() => setFilter("all")}
              >
                All Gateways ({PAYMENT_GATEWAYS.length})
              </button>
              <button
                type="button"
                className={`${styles.filterTab} ${filter === "domestic" ? styles.filterTabActive : ""}`}
                onClick={() => setFilter("domestic")}
              >
                🇮🇳 Domestic (UPI &amp; NetBanking)
              </button>
              <button
                type="button"
                className={`${styles.filterTab} ${filter === "international" ? styles.filterTabActive : ""}`}
                onClick={() => setFilter("international")}
              >
                🌐 Global (PayPal &amp; Stripe)
              </button>
            </div>
          </div>

          <div className={styles.invoiceInputsRow}>
            <div className={styles.inputField}>
              <label className={styles.inputLabel} htmlFor="inv-ref">
                Invoice / Project Reference #
              </label>
              <input
                id="inv-ref"
                type="text"
                placeholder="e.g. WCZ-2026-089"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className={styles.textInput}
              />
            </div>

            <div className={styles.inputField}>
              <label className={styles.inputLabel} htmlFor="client-name">
                Your Company / Client Name
              </label>
              <input
                id="client-name"
                type="text"
                placeholder="e.g. Acme Corp / John Doe"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className={styles.textInput}
              />
            </div>

            <div className={styles.inputField}>
              <label className={styles.inputLabel} htmlFor="inv-amount">
                Invoice Amount (Optional)
              </label>
              <input
                id="inv-amount"
                type="text"
                placeholder="e.g. ₹45,000 or $1,200"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={styles.textInput}
              />
            </div>
          </div>

          {invoiceNumber && (
            <div className={styles.activeRefBanner}>
              <span>✓</span>
              <span>
                Payment reference active: <strong>{invoiceNumber}</strong>
                {clientName ? ` for ${clientName}` : ""}
                {amount ? ` (${amount})` : ""}. Click any gateway below to proceed.
              </span>
            </div>
          )}
        </section>

        {/* 5 Payment Gateways Grid */}
        <section className={styles.gatewaysGrid} aria-label="Available Payment Gateways">
          {filteredGateways.map((gw: PaymentGateway) => {
            return (
              <article key={gw.id} className={styles.card}>
                <div>
                  <div className={styles.cardHeader}>
                    <div className={styles.brandGroup}>
                      <span className={styles.brandBadge}>{gw.badge}</span>
                      <h3 className={styles.brandName} style={{ color: gw.brandColor }}>
                        {gw.name}
                      </h3>
                    </div>

                    {gw.isInternational ? (
                      <span className={styles.intlBadge}>🌍 Global Multi-Currency</span>
                    ) : (
                      <span className={styles.intlBadge} style={{ background: "#ecfdf5", color: "#065f46" }}>
                        🇮🇳 India Instant Rails
                      </span>
                    )}
                  </div>

                  <p className={styles.cardDesc}>{gw.description}</p>

                  <div className={styles.sectionLabel}>Accepted Payment Rails:</div>
                  <ul className={styles.methodsList}>
                    {gw.supportedMethods.map((m, idx) => (
                      <li key={idx} className={styles.methodItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.sectionLabel}>Supported Currencies:</div>
                  <div className={styles.currenciesRow}>
                    {gw.currencies.map((curr) => (
                      <span key={curr} className={styles.currencyPill}>
                        {curr}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <a
                    href={gw.paymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.payButton}
                    style={{ background: gw.brandColor }}
                  >
                    <span>Pay via {gw.name}</span>
                    <span className={styles.arrowIcon}>↗</span>
                  </a>

                  <a
                    href={getCustomWhatsAppUrl(gw.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "12.5px",
                      color: "#16a34a",
                      fontWeight: 700,
                      textAlign: "center",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "4px",
                      marginTop: "4px",
                    }}
                  >
                    <span>Request Custom {gw.name} Link on WhatsApp</span>
                    <span>↗</span>
                  </a>

                  <span className={styles.cardSpeed}>⚡ {gw.features[0]}</span>
                </div>
              </article>
            );
          })}
        </section>

        {/* Direct Bank Wire / NEFT / RTGS Transfer Details */}
        <section className={styles.bankSection}>
          <div className={styles.bankHeader}>
            <div>
              <h2 className={styles.bankTitle}>Direct Corporate Bank Wire (NEFT / RTGS / IMPS)</h2>
              <p className={styles.bankDesc}>
                Enterprise clients and corporate accounts can settle retainers and high-value contracts
                directly into Webczar Solutions&apos; verified current accounts.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleCopy("Webczar Solutions Current Account Details", "all")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                background: "#ffffff",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              <span>{copyFeedback === "all" ? "✓ Copied" : "📋 Copy Bank Profile"}</span>
            </button>
          </div>

          <div className={styles.bankGrid}>
            <div className={styles.bankCard}>
              <div className={styles.bankLabel}>Beneficiary Name</div>
              <div className={styles.bankValue}>{BANK_TRANSFER_DETAILS.accountName}</div>
            </div>

            <div className={styles.bankCard}>
              <div className={styles.bankLabel}>Account Type</div>
              <div className={styles.bankValue}>{BANK_TRANSFER_DETAILS.accountType}</div>
            </div>

            <div className={styles.bankCard}>
              <div className={styles.bankLabel}>Bank Institution</div>
              <div className={styles.bankValue}>{BANK_TRANSFER_DETAILS.bankName}</div>
            </div>

            <div className={styles.bankCard}>
              <div className={styles.bankLabel}>Branch Location</div>
              <div className={styles.bankValue}>{BANK_TRANSFER_DETAILS.branch}</div>
            </div>
          </div>

          <p className={styles.bankFootnote}>
            ℹ️ {BANK_TRANSFER_DETAILS.note}. For IFSC code, specific account number, or international SWIFT wire instructions,
            please refer to the bank coordinates listed on page 2 of your official invoice or request verification via WhatsApp.
          </p>
        </section>

        {/* WhatsApp Immediate Billing Assistance Banner */}
        <section className={styles.whatsappBanner}>
          <div className={styles.whatsappLeft}>
            <h3 className={styles.whatsappTitle}>Need Direct Payment Assistance or a Custom Link?</h3>
            <p className={styles.whatsappDesc}>
              Our finance desk is available Monday through Saturday. Share your invoice number on WhatsApp
              to receive a one-click payment link or split-milestone invoice instantly.
            </p>
          </div>

          <a
            href={getCustomWhatsAppUrl("General Payment Support")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <span>Chat with Billing Desk on WhatsApp</span>
            <span>↗</span>
          </a>
        </section>

        {/* Payment FAQs Accordion */}
        <section className={styles.faqSection}>
          <div className={styles.faqHeader}>
            <span className={styles.kicker}>Frequently Asked Questions</span>
            <h2 className={styles.faqTitle}>
              Billing &amp; Payment <em>Clarity</em>
            </h2>
          </div>

          <div className={styles.faqList}>
            {PAYMENT_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
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
