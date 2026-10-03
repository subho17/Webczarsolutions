export interface LegalHighlight {
  title: string;
  desc: string;
  icon: string;
}

export interface LegalTableData {
  headers: string[];
  rows: string[][];
}

export interface LegalSection {
  id: string;
  num: string;
  title: string;
  content: string[];
  bullets?: string[];
  callout?: {
    type: "info" | "warning" | "tip";
    title: string;
    text: string;
  };
  table?: LegalTableData;
}

export interface LegalDocument {
  slug:
    | "terms"
    | "privacy"
    | "whatsapp-opt-in"
    | "whatsapp-opt-out"
    | "rcs-policy";
  title: string;
  kicker: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
  version: string;
  readingTime: string;
  highlights: LegalHighlight[];
  sections: LegalSection[];
}

export const TERMS_DATA: LegalDocument = {
  slug: "terms",
  title: "Terms & Conditions",
  kicker: "Legal & Service Agreement · Webczar Solutions",
  subtitle:
    "The contractual terms governing custom software engineering, web application development, digital marketing, AI systems, and strategic technology consulting engagements with Webczar Solutions.",
  lastUpdated: "October 3, 2026",
  effectiveDate: "January 1, 2026",
  version: "v2.6 Enterprise",
  readingTime: "8 min read",
  highlights: [
    {
      title: "100% Client Ownership",
      desc: "You retain full ownership of all custom bespoke source code, visual designs, and project deliverables upon complete settlement of invoices.",
      icon: "💎",
    },
    {
      title: "Milestone-Driven Scopes",
      desc: "Engagements adhere to explicit Statements of Work (SOW), scheduled milestones, transparent deliverables, and documented approvals.",
      icon: "📋",
    },
    {
      title: "Strict Confidentiality",
      desc: "All client proprietary data, trade secrets, software codebases, and credentials are protected under binding mutual non-disclosure obligations.",
      icon: "🔒",
    },
    {
      title: "30-Day Stability Warranty",
      desc: "Every custom website and application release includes a complimentary 30-day bug-fixing and stabilization guarantee post-deployment.",
      icon: "🛡️",
    },
  ],
  sections: [
    {
      id: "acceptance-entity",
      num: "01",
      title: "Acceptance of Terms & Corporate Entity Information",
      content: [
        "These Terms and Conditions (\"Terms\", \"Agreement\") constitute a legally binding contract entered into by and between you (hereinafter referred to as \"Client\", \"User\", \"you\", or \"your\") and Webczar Solutions (hereinafter referred to as \"Webczar Solutions\", \"Webczar\", \"Company\", \"we\", \"us\", or \"our\"), led by Founder & Technology Director Subhadeep Chanda, headquartered in the Chandigarh Tricity region (Chandigarh, Mohali, Panchkula, Zirakpur), Punjab / Haryana, India.",
        "By accessing, browsing, commissioning services from, or interacting with our official web properties (including https://webczarsolutions.com and associated subdomains) or signing any Statement of Work (SOW), proposal, or contract referencing these Terms, you acknowledge that you have read, understood, and agreed to be bound by these Terms in full.",
        "If you are entering into this Agreement on behalf of a company, corporate enterprise, or other legal entity, you represent and warrant that you possess the full legal authority to bind that entity to these provisions.",
      ],
      callout: {
        type: "info",
        title: "Important Notice",
        text: "If you do not unconditionally agree to all terms and conditions set forth herein, you must refrain from using our website and commissioning any services from Webczar Solutions.",
      },
    },
    {
      id: "scope-of-services",
      num: "02",
      title: "Scope of Services & Engagement Architecture",
      content: [
        "Webczar Solutions operates as a premier full-cycle technology, custom software development, cloud engineering, and digital growth agency. Our portfolio of professional services includes, without limitation:",
      ],
      bullets: [
        "Custom Web & Mobile Application Development: Full-stack responsive web platforms, single-page applications (React, Next.js, TypeScript), Progressive Web Apps (PWA), and native or cross-platform mobile apps.",
        "Enterprise Software & Cloud Systems: Scalable backend architectures, RESTful & GraphQL APIs, microservices, cloud deployments (AWS, Vercel, GCP, Azure), database design, and automated server infrastructure.",
        "AI Integrations & Workflow Automation: Large Language Model (LLM) implementations, agentic AI pipelines, data ingestion flows, and automated business operations.",
        "UI/UX Design & Brand Experience: High-fidelity Figma prototyping, design systems, visual identity design, interaction modeling, and conversion rate optimization (CRO).",
        "Performance Digital Marketing & SEO: Full-funnel search engine optimization (on-page, technical, programmatic), search engine marketing (SEM/PPC), social media performance campaigns, and lead generation funnels.",
        "Direct Messaging & Bulk Communication: High-throughput Bulk SMS infrastructure, WhatsApp Business API workflows, automated notifications, and transactional messaging.",
        "Technology Consulting & Code Audits: Architecture reviews, legacy software modernization, security hardening, and performance optimization.",
      ],
    },
    {
      id: "proposals-sow",
      num: "03",
      title: "Proposals, Statements of Work & Milestone Agreements",
      content: [
        "Every client engagement is governed by an individualized Statement of Work (\"SOW\"), Project Proposal, or Service Level Agreement (\"SLA\"). In the event of any direct conflict between the specific provisions of an executed SOW and these general Terms, the provisions of the executed SOW shall prevail solely for that specific project.",
        "Each SOW details the approved technical specifications, milestones, deliverables, project schedules, pricing models, and payment timetables. Any estimates provided prior to formal SOW execution are indicative and subject to written confirmation.",
      ],
      table: {
        headers: ["Project Phase", "Primary Deliverable", "Standard Sign-off Window"],
        rows: [
          ["Phase 1: Discovery & Architecture", "Technical spec, wireframes & project roadmap", "3 Business Days"],
          ["Phase 2: UI/UX & Design System", "Figma prototype & interactive design review", "5 Business Days"],
          ["Phase 3: Core Engineering & Staging", "Functional staging build & API integrations", "7 Business Days"],
          ["Phase 4: QA, Testing & UAT", "User Acceptance Testing & bug triage", "5 Business Days"],
          ["Phase 5: Production Deployment", "Live release, DNS configuration & handover", "Immediate upon final sign-off"],
        ],
      },
    },
    {
      id: "client-responsibilities",
      num: "04",
      title: "Client Responsibilities, Assets & Provision of Access",
      content: [
        "The timely and successful execution of any technology or marketing project requires active client collaboration. The Client agrees to:",
      ],
      bullets: [
        "Furnish all required text, high-resolution imagery, brand guidelines, fonts, videos, and collateral in a timely manner.",
        "Provide necessary third-party access credentials (e.g., DNS providers, cloud hosting consoles, code repositories, payment gateways, analytics accounts) required for Webczar to execute the agreed scope.",
        "Designate a primary authorized project representative possessing the legal capacity to provide authoritative feedback, approve deliverables, and accept milestone sign-offs.",
        "Warrant that all materials, intellectual property, data, and trademarks supplied to Webczar do not infringe upon any third-party copyrights, patents, privacy rights, or proprietary rights.",
      ],
      callout: {
        type: "warning",
        title: "Impact of Client Delays",
        text: "Delays exceeding 10 consecutive business days in providing essential feedback, assets, or approvals may result in the rescheduling of milestone deadlines and may be subject to project reactivation scheduling.",
      },
    },
    {
      id: "intellectual-property",
      num: "05",
      title: "Intellectual Property Rights & Deliverables Ownership",
      content: [
        "Webczar Solutions firmly champions clear, transparent ownership of intellectual property:",
        "Client Deliverables: Upon full and final settlement of all invoiced fees associated with the applicable SOW, all custom bespoke source code, graphical assets, UI components, and digital deliverables uniquely created specifically for the Client shall transfer in full to the Client.",
        "Webczar Background Technology & Pre-Existing IP: Webczar retains sole ownership of all pre-existing software libraries, proprietary algorithms, boilerplate architectures, foundational design patterns, development tools, and modular components developed independently of the Client engagement. To the extent such components are embedded into the deliverables, Webczar grants the Client a perpetual, worldwide, royalty-free, non-exclusive license to utilize, modify, and run such code solely within the context of the delivered product.",
        "Third-Party & Open Source Assets: Certain projects incorporate open-source libraries (e.g., React, Next.js, Three.js, Tailwind, MIT/Apache licensed packages) or licensed third-party assets (e.g., commercial stock photography, proprietary fonts). Such assets remain subject to their respective external licensing terms.",
        "Portfolio & Promotional Showcase: Unless explicitly restricted by an executed Non-Disclosure Agreement (NDA), Webczar Solutions reserves the customary right to display screenshots, live URLs, anonymized project metrics, and visual demonstrations of completed work within our official portfolio, marketing collateral, case studies, and awards submissions.",
      ],
    },
    {
      id: "pricing-payment",
      num: "06",
      title: "Pricing, Quotations, Invoicing & Payment Terms",
      content: [
        "All project quotations, milestone figures, and hourly rates are stipulated in the relevant SOW and are denominated in Indian Rupees (INR) for domestic clients or United States Dollars (USD) / Euros (EUR) for international engagements.",
        "Payment Structure: Unless otherwise defined in writing, custom software projects require an upfront advance deposit (typically 30% to 50%) prior to project kickoff, with subsequent payments linked to verified milestone completion. Retainer services (e.g., ongoing digital marketing, SEO, monthly maintenance) are billed in advance on the 1st of each billing cycle.",
        "Invoicing & Taxes: Invoices are payable within 7 calendar days of issuance. All fees are exclusive of applicable statutory taxes, including Indian Goods & Services Tax (GST) at prevailing rates, which shall be itemized separately.",
        "Overdue Balances: Any invoice remaining unpaid after 14 calendar days from the due date shall incur a late payment charge of 1.5% per month (or the maximum permitted by applicable law) on the outstanding balance. Webczar reserves the right to suspend active development, hold code releases, or temporarily withhold deployment access until outstanding accounts are settled in full.",
      ],
    },
    {
      id: "scope-changes",
      num: "07",
      title: "Revisions, Scope Adjustments & Change Orders",
      content: [
        "Each project phase includes up to two (2) rounds of iterative design and functional revisions, provided that requested revisions fall strictly within the scope detailed in the original SOW.",
        "Scope Creep & Change Requests: Any feature request, architectural modification, third-party integration, or structural alteration not specified in the original SOW shall be treated as an Out-of-Scope Change Order. Webczar will prepare a written Change Order specifying the technical impact, timeline adjustment, and additional costs. Work on change requests will only commence upon mutual written approval.",
      ],
    },
    {
      id: "warranty-maintenance",
      num: "08",
      title: "Post-Launch Warranty, Maintenance & Service Level Agreements",
      content: [
        "30-Day Stabilization Warranty: Webczar provides a 30-calendar-day warranty commencing on the official production deployment date. During this period, Webczar shall rectify, at zero additional charge, any verifiable reproducible software bugs, coding defects, or broken functionality resulting directly from our original code.",
        "Warranty Exclusions: The warranty strictly excludes issues resulting from: (a) unauthorized modifications or code edits performed by the Client or third-party developers; (b) updates, downtime, or breaking changes introduced by third-party APIs, hosting servers, or browser vendors; (c) server misconfigurations or DNS tampering by third parties; or (d) malicious external attacks, DDoS events, or malware infections.",
        "Ongoing Maintenance & SLAs: Following the expiration of the 30-day warranty, ongoing security updates, framework upgrades, content additions, and performance monitoring are available via our dedicated Monthly Maintenance Retainers and Service Level Agreements.",
      ],
    },
    {
      id: "third-party-integrations",
      num: "09",
      title: "Third-Party Integrations, Platforms & External Dependencies",
      content: [
        "Modern digital solutions often rely on third-party services, including but not limited to payment gateways (Razorpay, Stripe), cloud providers (AWS, Vercel, Supabase), AI APIs (OpenAI, Anthropic), ad networks (Google Ads, Meta), and telecommunications providers (Bulk SMS gateways).",
        "The Client acknowledges that Webczar Solutions does not own, control, or operate these third-party platforms. Consequently, Webczar Solutions shall not be held liable for outages, rate limits, pricing increases, policy changes, API deprecations, or service termination implemented by third-party providers.",
        "All third-party subscription fees, API token usage fees, server hosting expenses, and domain registration costs are the sole financial responsibility of the Client unless explicitly bundled within a managed agreement.",
      ],
    },
    {
      id: "confidentiality-nda",
      num: "10",
      title: "Confidentiality, Trade Secrets & Non-Disclosure",
      content: [
        "Both parties agree that during the course of the engagement, each party may disclose to the other confidential and proprietary business information (\"Confidential Information\"), including technical architectures, source codes, customer databases, strategic marketing plans, financial metrics, and operational credentials.",
        "Mutual Non-Disclosure: Each party agrees to treat the other party's Confidential Information with the same degree of care it uses to protect its own sensitive data (and no less than reasonable care). Neither party shall disclose Confidential Information to any third party without prior written consent, except to key personnel, contractors, and legal advisors bound by equivalent confidentiality duties.",
        "Exclusions: Confidential Information does not include information that: (a) is or becomes publicly known through no breach of this Agreement; (b) was already known to the receiving party prior to disclosure; (c) is independently developed without reference to the disclosing party's data; or (d) is required to be disclosed by judicial order or governmental authority.",
      ],
    },
    {
      id: "cancellation-refunds",
      num: "11",
      title: "Cancellation, Termination & Fair Refund Policy",
      content: [
        "Termination for Convenience: Either party may terminate an ongoing engagement by providing fifteen (15) calendar days' written notice to the other party.",
        "Termination for Cause: Either party may immediately terminate this Agreement upon written notice if the other party commits a material breach of these Terms or an active SOW and fails to cure such breach within ten (10) calendar days of receiving written notice thereof.",
        "Compensation Upon Termination: In the event of early termination, the Client shall pay Webczar Solutions for all billable hours incurred, milestones partially or wholly completed, and non-cancellable third-party commitments made prior to the effective termination date.",
        "Refund Policy: Because custom software engineering, UI/UX design, and digital marketing require immediate upfront allocation of engineering talent and infrastructure resources, advance deposits and milestone payments for completed or in-progress phases are strictly non-refundable.",
      ],
    },
    {
      id: "liability-indemnity",
      num: "12",
      title: "Limitation of Liability & Indemnification",
      content: [
        "Limitation of Consequential Damages: To the maximum extent permitted by applicable Indian and international law, Webczar Solutions, its founder, employees, officers, and contractors shall not be liable for any indirect, incidental, special, punitive, exemplary, or consequential damages whatsoever, including without limitation damages for loss of profits, loss of data, loss of business goodwill, server downtime, or commercial disruption, arising out of or related to our services or website.",
        "Aggregate Liability Cap: In no event shall the total aggregate liability of Webczar Solutions arising out of or related to this Agreement or any SOW, whether in contract, tort (including negligence), strict liability, or otherwise, exceed the total amount actually paid by the Client to Webczar Solutions under the specific SOW giving rise to the claim during the three (3) months immediately preceding the event.",
        "Client Indemnification: The Client agrees to defend, indemnify, and hold harmless Webczar Solutions and its leadership against any third-party claims, liabilities, damages, losses, and reasonable legal expenses arising out of: (a) any breach by the Client of these Terms; (b) any infringement or alleged infringement of third-party IP resulting from client-provided materials; or (c) the operation of the Client's business or products.",
      ],
    },
    {
      id: "governing-law",
      num: "13",
      title: "Governing Law, Jurisdiction & Dispute Resolution",
      content: [
        "Governing Law: This Agreement and any dispute, controversy, or claim arising out of or relating to it shall be governed by and construed in accordance with the substantive laws of the Republic of India, without regard to conflict of law principles.",
        "Amicable Resolution: In the event of any disagreement or dispute, both parties commit to making good-faith efforts to resolve the matter amicably through direct senior executive discussions for a minimum period of thirty (30) days.",
        "Arbitration & Jurisdiction: If a dispute cannot be resolved through amicable consultation, it shall be referred to and finally resolved by binding arbitration under the Indian Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be Chandigarh / Mohali, India, and the proceedings shall be conducted in the English language. Subject to the arbitration clause, the competent courts located in Chandigarh / Mohali (Punjab & Haryana), India shall have exclusive territorial jurisdiction.",
      ],
    },
    {
      id: "contact-notices",
      num: "14",
      title: "Modifications, Notices & Official Contact Channels",
      content: [
        "Modifications: Webczar Solutions reserves the right to revise, update, or amend these Terms at our discretion. Updated terms take effect immediately upon being posted on this website, marked with the \"Last Updated\" revision date. Your continued utilization of our services or website following any update signifies your acceptance of the revised Terms.",
        "Formal Notices: All formal legal notices must be delivered in writing via electronic mail with confirmed receipt or via registered courier to the official addresses provided below:",
      ],
      bullets: [
        "Entity Name: Webczar Solutions",
        "Leadership: Subhadeep Chanda (Founder & Technology Director)",
        "Official Email: info@webczarsolutions.com / subhadeep@webczarsolutions.com",
        "Phone / WhatsApp: +91 99882 21729",
        "Office Location: Chandigarh · Mohali · Panchkula · Zirakpur (Tricity Tech Corridor), India",
      ],
    },
  ],
};

export const PRIVACY_DATA: LegalDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  kicker: "Data Protection & Privacy Policy · Webczar Solutions",
  subtitle:
    "How Webczar Solutions collects, manages, encrypts, and safeguards your personal data, business assets, and usage telemetry across our websites, applications, and client engagements.",
  lastUpdated: "October 3, 2026",
  effectiveDate: "January 1, 2026",
  version: "v2.4 Global",
  readingTime: "7 min read",
  highlights: [
    {
      title: "Zero Data Sale Guarantee",
      desc: "We never sell, rent, monetize, or trade your personal information, corporate telemetry, or contact records to data brokers or third parties.",
      icon: "🛡️",
    },
    {
      title: "Enterprise Grade Encryption",
      desc: "All client transmissions and internal databases are secured with modern TLS 1.3 encryption in transit and AES-256 protocols at rest.",
      icon: "🔐",
    },
    {
      title: "Global Legal Compliance",
      desc: "Architected to adhere strictly to India's DPDPA (2023), the European Union's GDPR, and the California Consumer Privacy Act (CCPA).",
      icon: "⚖️",
    },
    {
      title: "You Retain Full Control",
      desc: "Exercise your fundamental rights to access, inspect, modify, transfer, or permanently expunge your personal records at any time.",
      icon: "👤",
    },
  ],
  sections: [
    {
      id: "scope-controller",
      num: "01",
      title: "Scope, Commitment & Data Controller Identification",
      content: [
        "Webczar Solutions (\"Webczar\", \"Company\", \"we\", \"us\", or \"our\"), led by Founder & Technology Director Subhadeep Chanda, respects your fundamental privacy rights and is dedicated to preserving the confidentiality of personal and business data entrusted to us.",
        "This comprehensive Privacy Policy (\"Policy\") delineates how we collect, store, process, transmit, and protect data when you visit our website (https://webczarsolutions.com), engage our engineering and marketing services, communicate via email or WhatsApp, or utilize any digital software solutions developed by us.",
        "Under applicable privacy frameworks—including the Indian Digital Personal Data Protection Act, 2023 (DPDPA), the General Data Protection Regulation (EU GDPR), and the UK GDPR—Webczar Solutions operates as the Data Fiduciary / Data Controller for personal data gathered directly via our digital properties and sales channels.",
      ],
      callout: {
        type: "tip",
        title: "Client Codebases & Data Ownership",
        text: "When building custom software for clients, Webczar operates strictly as a Data Processor. The client remains the sole Data Controller of their end-users' application databases.",
      },
    },
    {
      id: "data-categories",
      num: "02",
      title: "Categories of Information We Collect",
      content: [
        "We collect personal and technical data to deliver exceptional digital solutions, ensure platform security, and maintain transparent business communications. The data categories we collect include:",
      ],
      bullets: [
        "Direct Contact & Identity Details: Full name, business email address, phone number, physical corporate address, job title, and organization name submitted via contact forms, inquiries, or project briefs.",
        "Billing & Commercial Records: Tax identification numbers (GST/PAN/VAT), billing addresses, payment transaction references, and invoicing records. (Note: sensitive credit/debit card numbers are processed directly by certified PCI-DSS compliant payment gateways and are never stored on Webczar servers).",
        "Client Project Assets & Credentials: Wireframes, brand guidelines, API access tokens, code repositories, staging server credentials, and proprietary content shared under confidentiality for project development.",
        "Telemetry & Device Data: Internet Protocol (IP) addresses, browser type, operating system, device hardware profiles, referring URLs, pages visited, session duration, and clickstream interactions.",
        "Direct Communications: Transcripts, messages, and attachment history received through email exchanges, WhatsApp Business conversations, video conferences, or phone inquiries.",
      ],
    },
    {
      id: "collection-methods",
      num: "03",
      title: "Methods & Sources of Data Collection",
      content: [
        "We obtain data through three primary mechanisms:",
        "1. Direct Voluntary Submissions: When you fill out an inquiry form on our website, subscribe to our technical newsletter, request a project proposal, schedule a consultation call, or message us via WhatsApp or email.",
        "2. Automated Digital Telemetry: When you browse our website, our server logs and analytics engines automatically log standard access telemetry, including timestamps, page performance metrics, and device diagnostics.",
        "3. Authorized Third-Party Partners: In corporate engagements, we may receive professional business data from professional networking networks (such as LinkedIn), public business registries, or mutual referral partners.",
      ],
      table: {
        headers: ["Collection Channel", "Data Collected", "Primary Business Purpose"],
        rows: [
          ["Contact & Proposal Forms", "Name, Email, Phone, Project Brief", "Preparing quotes, consulting, replying to inquiries"],
          ["Newsletter Subscription", "Email Address", "Delivering technical and business insights (opt-out anytime)"],
          ["WhatsApp / Direct Chat", "Phone number, Chat logs", "Direct client communication and sales support"],
          ["Website Telemetry", "IP address, Device profile, Pageviews", "Optimizing UI/UX, debugging, security threat prevention"],
        ],
      },
    },
    {
      id: "processing-purposes",
      num: "04",
      title: "Legal Basis & Business Purposes for Data Processing",
      content: [
        "We only process personal information where a valid legal basis exists under applicable data protection laws. Our processing operations are anchored upon:",
        "Contractual Necessity: To evaluate project requirements, draft formal proposals, execute Statements of Work, build bespoke software, and fulfill contractual obligations.",
        "Legitimate Business Interests: To protect our digital infrastructure from cyber threats, diagnose technical defects, refine our user experience, and analyze engagement trends.",
        "Explicit Consent: Where you have granted unambiguous affirmative consent, such as opting into our newsletter or consenting to marketing communications.",
        "Statutory Compliance: To maintain accurate financial books, comply with tax laws (GST/income tax), and satisfy lawful regulatory or judicial directives.",
      ],
    },
    {
      id: "cookie-policy",
      num: "05",
      title: "Cookie Policy, Local Storage & Tracking Technologies",
      content: [
        "Our website utilizes cookies, session tokens, and local storage elements to provide a smooth, responsive browsing experience. Cookies are small text files placed on your device by web browsers.",
        "Strictly Necessary Cookies: Essential for the core operation of the website, including language preference persistence (English / French) and secure navigation state.",
        "Performance & Analytics Cookies: Anonymized analytics that measure audience traffic, identify popular case studies, and measure page load speeds without identifying individual visitors.",
        "Managing Cookie Preferences: You possess the complete autonomy to manage or block cookies through your individual browser preferences (Chrome, Safari, Firefox, Edge). Please note that blocking functional cookies may affect certain interface conveniences.",
      ],
    },
    {
      id: "data-sharing",
      num: "06",
      title: "Data Sharing, Sub-Processors & Third-Party Disclosures",
      content: [
        "Webczar Solutions adheres to a strict non-monetization policy: We DO NOT sell, lease, trade, or monetize your personal or business data under any circumstances.",
        "We only share limited necessary data with vetted third-party infrastructure providers (\"Sub-Processors\") who operate under strict Data Processing Agreements (DPAs) and confidentiality covenants. These providers include:",
      ],
      bullets: [
        "Cloud Hosting & Edge Infrastructure: Vercel Inc., Amazon Web Services (AWS), and Google Cloud Platform for hosting web applications and secure data repositories.",
        "Communication & Email Infrastructure: Google Workspace, Resend, or SendGrid for sending transactional project notifications and client correspondence.",
        "Analytics & Performance Monitoring: Google Analytics (with IP anonymization) and Vercel Analytics for tracking aggregated website telemetry.",
        "Compliance & Legal Authorities: We will only disclose personal data to regulatory or law enforcement bodies if mandated by a formal subpoena, court order, or binding statutory obligation.",
      ],
    },
    {
      id: "international-transfers",
      num: "07",
      title: "International & Cross-Border Data Transfers",
      content: [
        "Webczar Solutions serves clients across India, North America, Europe, the Middle East, and the Asia-Pacific region. Consequently, data may be transferred to and maintained on cloud servers situated outside your home country or jurisdiction.",
        "Whenever we transfer personal data across international borders, we ensure adequate protective mechanisms are deployed in compliance with applicable law, including Standard Contractual Clauses (SCCs) approved by the European Commission, robust data encryption standards, and adherence to equivalent data security protocols.",
      ],
    },
    {
      id: "security-measures",
      num: "08",
      title: "Information Security Protocols & Storage Architecture",
      content: [
        "We implement rigorous technical, operational, and organizational security measures to protect your data against unauthorized access, loss, alteration, or disclosure:",
      ],
      bullets: [
        "Transport Layer Security (TLS 1.3 / SSL): All traffic to and from our web properties is encrypted using industry-standard TLS protocols.",
        "AES-256 Storage Encryption: Sensitive project files, databases, and credentials stored within our internal environments are encrypted at rest using AES-256 encryption.",
        "Role-Based Access Control (RBAC): Engineering access to client repositories and infrastructure credentials is strictly restricted to designated developers assigned to that project.",
        "Routine Vulnerability Assessments: We perform ongoing dependency audits, automated vulnerability scanning, and code reviews prior to production releases.",
      ],
      callout: {
        type: "warning",
        title: "Transmission Advisory",
        text: "While we employ cutting-edge industry safeguards, no method of digital transmission over the internet is 100% impenetrable. We advise clients to transmit sensitive credentials exclusively via encrypted password managers.",
      },
    },
    {
      id: "retention-schedule",
      num: "09",
      title: "Data Retention Schedule & Erasure Standards",
      content: [
        "We retain personal data only for as long as necessary to fulfill the commercial purposes for which it was gathered, satisfy legal obligations, or resolve commercial disputes.",
        "Inquiry Data: General inquiries and contact submissions are maintained for a maximum of 24 months, after which they are systematically purged.",
        "Active Project Records: Client project source code, correspondence, and technical specifications are retained during the active contract and for a standard archive period of 36 months to assist with subsequent maintenance or upgrades, unless an earlier purge is requested by the Client.",
        "Financial & Invoicing Ledgers: Invoicing and accounting records are maintained for seven (7) years in accordance with statutory Indian taxation and corporate compliance mandates.",
      ],
    },
    {
      id: "user-rights",
      num: "10",
      title: "Your Data Protection Rights (GDPR, CCPA & Indian DPDPA)",
      content: [
        "Depending on your geographical location and applicable laws, you hold fundamental rights regarding your personal information:",
      ],
      bullets: [
        "Right of Access & Confirmation: You have the right to request a formal copy of the personal data we hold about you and verify our processing activities.",
        "Right to Rectification: You may request the correction of any incomplete, inaccurate, or outdated personal data.",
        "Right to Erasure (\"Right to Be Forgotten\"): You have the right to request the permanent deletion of your personal records, subject to statutory retention obligations.",
        "Right to Restrict or Object to Processing: You can object to specific data processing operations, including direct marketing communications.",
        "Right to Data Portability: You may request that your personal data be delivered in a structured, machine-readable format for transfer to another service provider.",
        "Right to Withdraw Consent: Where processing relies on your consent, you may revoke that consent at any time without affecting the lawfulness of prior processing.",
      ],
    },
    {
      id: "minors-policy",
      num: "11",
      title: "Children's Privacy Protection",
      content: [
        "Our digital platforms, consulting services, and software solutions are strictly targeted at businesses, commercial enterprises, and adults aged 18 and older.",
        "We do not knowingly collect, solicit, or store personal information from individuals under the age of 18. If we discover that a minor has provided us with personal data without verified parental consent, we will take immediate steps to permanently delete such information from our records.",
      ],
    },
    {
      id: "policy-updates",
      num: "12",
      title: "Policy Revisions & Transparency Updates",
      content: [
        "Webczar Solutions reserves the right to periodically update this Privacy Policy to reflect evolving industry practices, technology advancements, or regulatory modifications.",
        "Whenever material changes occur, we will update the \"Last Updated\" timestamp at the top of this document. For significant updates impacting client data rights, we will provide prominent notice on our website or notify active clients directly via email.",
        "We encourage you to review this page periodically to stay informed about our data safeguarding measures.",
      ],
    },
    {
      id: "grievance-contact",
      num: "13",
      title: "Grievance Officer & Official Privacy Contact",
      content: [
        "In accordance with the Indian Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, as well as global GDPR provisions, our designated Grievance & Data Protection Officer is:",
      ],
      bullets: [
        "Data Protection Officer: Subhadeep Chanda",
        "Role: Founder & Technology Director, Webczar Solutions",
        "Official Email: info@webczarsolutions.com / subhadeep@webczarsolutions.com",
        "Direct Phone / WhatsApp: +91 99882 21729",
        "Headquarters: Chandigarh · Mohali · Panchkula · Zirakpur (Tricity), Punjab / Haryana, India",
        "Response Timetable: We acknowledge all privacy inquiries within 48 hours and provide substantive resolution within 15 business days.",
      ],
    },
  ],
};

export const WHATSAPP_OPT_IN_DATA: LegalDocument = {
  slug: "whatsapp-opt-in",
  title: "WhatsApp Communication Opt-In Policy",
  kicker: "Messaging Compliance · Webczar Solutions",
  subtitle:
    "Standards, consent protocols, and subscriber verification frameworks governing opt-in consent for WhatsApp Business messaging and automated notifications.",
  lastUpdated: "October 3, 2026",
  effectiveDate: "January 1, 2026",
  version: "v2.1 Compliance",
  readingTime: "5 min read",
  highlights: [
    {
      title: "Explicit Affirmative Consent",
      desc: "Subscribers must explicitly opt-in through clear, positive actions before any proactive WhatsApp messages are dispatched.",
      icon: "✅",
    },
    {
      title: "Meta Policy Compliance",
      desc: "Strict adherence to Meta WhatsApp Business Messaging Policies, forbidding cold broadcasts, rented lists, or misleading teasers.",
      icon: "📱",
    },
    {
      title: "Transparent Categories",
      desc: "Subscribers are informed in advance whether they will receive account updates, proposal alerts, project alerts, or insights.",
      icon: "🎯",
    },
    {
      title: "Instant Opt-Out Guarantee",
      desc: "Every messaging thread provides an instant opt-out mechanism by simply replying with recognized keywords like STOP.",
      icon: "🛑",
    },
  ],
  sections: [
    {
      id: "opt-in-scope",
      num: "01",
      title: "Scope & Regulatory Framework",
      content: [
        "Webczar Solutions (\"Webczar\", \"we\", \"us\") provides enterprise technology solutions, custom software development, digital marketing, and automated communication infrastructure, including official WhatsApp Business API integrations.",
        "This WhatsApp Communication Opt-In Policy outlines the mandatory requirements and consent workflows necessary before any individual, client, or subscriber receives notifications, transactional messages, or commercial communications via WhatsApp from Webczar Solutions or through communication systems configured by us.",
        "This policy strictly enforces the provisions of Meta's WhatsApp Business Messaging Policy, the Telecom Regulatory Authority of India (TRAI) Telecom Commercial Communications Customer Preference Regulations (TCCCPR), and the Indian Digital Personal Data Protection Act (DPDPA), 2023.",
      ],
    },
    {
      id: "consent-requirements",
      num: "02",
      title: "Mandatory Requirements for Valid Opt-In",
      content: [
        "Under no circumstances does Webczar Solutions engage in unsolicited automated messaging or purchase/rent third-party contact directories. A valid opt-in must satisfy the following four criteria:",
      ],
      bullets: [
        "Affirmative Action: The recipient must take a clear, voluntary, affirmative step (e.g., entering their phone number and checking a dedicated consent box on a form, or clicking a 'Chat on WhatsApp' button). Pre-checked boxes are strictly prohibited.",
        "Clear Brand Identification: The opt-in prompt must explicitly identify Webczar Solutions as the sender entity.",
        "Specific Purpose Disclosure: The subscriber must be clearly informed of what categories of messages they will receive (e.g., project milestones, proposal documents, customer support replies, or technical marketing insights).",
        "Opt-Out Awareness: Clear notice that the user can revoke consent at any time without fees or penalties.",
      ],
    },
    {
      id: "opt-in-methods",
      num: "03",
      title: "Approved Opt-In Collection Methods",
      content: [
        "Webczar Solutions collects opt-in consent solely through the following authorized channels:",
      ],
      table: {
        headers: ["Collection Channel", "User Action Required", "Consent Record Retained"],
        rows: [
          ["Website Proposal Form", "Actively selecting 'Receive project updates on WhatsApp'", "Timestamp, IP address, Form URL"],
          ["User-Initiated Inbound Chat", "Clicking 'WhatsApp Us' and sending an initial query", "Chat initiation timestamp & thread ID"],
          ["Client Onboarding Agreement", "Authorizing WhatsApp as an official communication channel in SOW", "Executed contract / SOW document"],
          ["Two-Way SMS / QR Code", "Scanning an official Webczar QR code at an event or meeting", "Inbound keyword receipt timestamp"],
        ],
      },
    },
    {
      id: "message-categories",
      num: "04",
      title: "Permitted Message Categories & Templates",
      content: [
        "Opted-in subscribers may receive messages falling into the following authorized operational categories:",
      ],
      bullets: [
        "Transactional & Project Alerts: Milestone completion confirmations, staging server review links, invoice notifications, and urgent deployment updates.",
        "Customer Support & Inquiries: Responses to client-initiated inquiries, technical assistance, and consultative discussions regarding active deliverables.",
        "Authentication & Security: One-time verification codes (OTP) and login/security alerts for custom client portals.",
        "Educational & Technical Insights: Periodic newsletters covering AI engineering, web technologies, and digital marketing strategies (only where marketing consent was specifically granted).",
      ],
      callout: {
        type: "tip",
        title: "Template Pre-Approval",
        text: "All proactive business-initiated messages utilize pre-approved WhatsApp message templates reviewed and approved by Meta for quality, tone, and compliance.",
      },
    },
    {
      id: "frequency-caps",
      num: "05",
      title: "Frequency Caps & Communication Windows",
      content: [
        "Webczar Solutions respects user focus and strictly caps messaging volume to prevent fatigue. For non-urgent marketing updates, subscribers receive no more than two (2) broadcasts per calendar month.",
        "Customer service and support communications operate within Meta's 24-hour customer service window or are continued upon explicit client engagement.",
        "Marketing messages are dispatched exclusively during standard business hours (9:00 AM – 7:00 PM IST) to honor personal downtime.",
      ],
    },
    {
      id: "opt-out-cross-ref",
      num: "06",
      title: "Consent Revocation & Right to Opt-Out",
      content: [
        "Consent is entirely voluntary and may be revoked at any time. Subscribers wishing to stop receiving WhatsApp messages can reply with 'STOP', 'UNSUBSCRIBE', or use our online Opt-Out portal.",
        "For complete instructions on unsubscribing and our automated suppression timeline, please refer directly to our WhatsApp Communication Opt-Out Policy.",
      ],
    },
    {
      id: "compliance-contact",
      num: "07",
      title: "Regulatory Compliance & Inquiries",
      content: [
        "For questions regarding our WhatsApp messaging practices, consent records, or enterprise bulk messaging integrations, please contact our Communications Compliance Desk at info@webczarsolutions.com or call +91 99882 21729.",
      ],
    },
  ],
};

export const WHATSAPP_OPT_OUT_DATA: LegalDocument = {
  slug: "whatsapp-opt-out",
  title: "WhatsApp Communication Opt-Out Policy",
  kicker: "Messaging Compliance · Webczar Solutions",
  subtitle:
    "Standard operating procedures, automated keywords, and immediate suppression timelines for revoking WhatsApp messaging consent.",
  lastUpdated: "October 3, 2026",
  effectiveDate: "January 1, 2026",
  version: "v2.1 Compliance",
  readingTime: "4 min read",
  highlights: [
    {
      title: "Instant Keyword Unsubscribe",
      desc: "Reply 'STOP', 'UNSUBSCRIBE', 'HALT', or 'CANCEL' to any message for immediate automated suppression.",
      icon: "🛑",
    },
    {
      title: "Zero Fees or Penalties",
      desc: "Opting out is 100% free of charge and does not affect your active client services or technical agreements.",
      icon: "🆓",
    },
    {
      title: "24-Hour Maximum SLA",
      desc: "All opt-out requests across all channels are processed immediately by automated bot or within 24 hours manually.",
      icon: "⚡",
    },
    {
      title: "Easy Re-Subscription",
      desc: "Should you wish to resume receiving notifications in the future, simply reply 'START' or 'UNSTOP' at any time.",
      icon: "🔄",
    },
  ],
  sections: [
    {
      id: "right-to-opt-out",
      num: "01",
      title: "Unconditional Right to Revoke Consent",
      content: [
        "Webczar Solutions respects your right to govern how and when you are contacted. Every user, client, or subscriber who has previously consented to receive WhatsApp communications retains an absolute, unconditional right to opt out at any time.",
        "Opting out of promotional or broadcast WhatsApp messages will never affect your eligibility for ongoing software development, warranty support, or existing contractual agreements with Webczar Solutions.",
      ],
    },
    {
      id: "how-to-opt-out",
      num: "02",
      title: "Recognized Keyword Opt-Out Commands",
      content: [
        "The fastest and most direct method to unsubscribe is to send a single keyword message directly within the existing WhatsApp conversation. Our automated webhook listener processes the following universal opt-out keywords:",
      ],
      bullets: [
        "STOP (Universal English command)",
        "UNSUBSCRIBE",
        "CANCEL",
        "QUIT",
        "END",
        "HALT",
        "ARRETEZ (Universal French command)",
      ],
      callout: {
        type: "tip",
        title: "Automated Acknowledgement",
        text: "Upon sending any recognized opt-out keyword, you will receive an immediate automated confirmation confirming that your number has been added to our suppression database.",
      },
    },
    {
      id: "alternative-methods",
      num: "03",
      title: "Alternative Opt-Out Channels",
      content: [
        "If you do not have immediate access to your WhatsApp application or wish to opt out across multiple phone numbers simultaneously, you may utilize any of the following channels:",
      ],
      table: {
        headers: ["Method", "Contact / Action", "Processing Time"],
        rows: [
          ["Direct WhatsApp Reply", "Send 'STOP' to our official number (+91 99882 21729)", "Instant (Automated)"],
          ["Email Request", "Send your number to info@webczarsolutions.com with subject 'WhatsApp Opt-Out'", "Within 12 Hours"],
          ["Telephone Request", "Call +91 99882 21729 during business hours (9 AM – 7 PM IST)", "Immediate during call"],
          ["Client Account Desk", "Instruct your dedicated Webczar Project Manager directly", "Immediate update in CRM"],
        ],
      },
    },
    {
      id: "suppression-registry",
      num: "04",
      title: "Internal Suppression Database & Data Retention",
      content: [
        "When an opt-out request is registered, the phone number is immediately added to our global Do-Not-Disturb (DND) Suppression Registry. This ensures:",
        "1. Automated systems are blocked from including the number in any future broadcast campaigns, newsletters, or automated drips.",
        "2. The record is permanently preserved as proof of opt-out compliance to satisfy Meta and telecom regulatory audits.",
        "3. Critical individual one-to-one communications regarding emergency server maintenance or contracted legal notices may still be conducted via email or formal channels as stipulated in client contracts.",
      ],
    },
    {
      id: "re-subscribing",
      num: "05",
      title: "How to Re-Subscribe or Resume Communications",
      content: [
        "If you previously opted out and later decide you would like to resume receiving project updates, proposals, or technology briefings via WhatsApp, you can reactivate your subscription by:",
        "1. Replying 'START' or 'UNSTOP' within the official Webczar Solutions WhatsApp thread; or",
        "2. Submitting a new affirmative opt-in through any project inquiry form on our website.",
      ],
    },
    {
      id: "redressal-contact",
      num: "06",
      title: "Grievance Redressal & Opt-Out Inquiries",
      content: [
        "If you have requested an opt-out and continue to receive automated messages, or have any concerns regarding messaging compliance, please immediately contact our Compliance Officer at:",
      ],
      bullets: [
        "Officer: Subhadeep Chanda (Founder & Technology Director)",
        "Compliance Email: info@webczarsolutions.com / subhadeep@webczarsolutions.com",
        "Direct Phone / WhatsApp: +91 99882 21729",
        "Address: Webczar Solutions, Tricity Tech Corridor, Chandigarh · Mohali, India",
      ],
    },
  ],
};

export const RCS_POLICY_DATA: LegalDocument = {
  slug: "rcs-policy",
  title: "RCS Communication Policy",
  kicker: "Next-Gen Messaging Compliance · Webczar Solutions",
  subtitle:
    "Standards, verified sender authentication, rich media protocols, and consumer protection safeguards for Rich Communication Services (RCS) Business Messaging.",
  lastUpdated: "October 3, 2026",
  effectiveDate: "January 1, 2026",
  version: "v2.0 Enterprise",
  readingTime: "5 min read",
  highlights: [
    {
      title: "Carrier Verified Sender",
      desc: "All Webczar RCS broadcasts carry Google and telecom carrier verified sender trust marks and cryptographic brand certification.",
      icon: "🛡️",
    },
    {
      title: "Anti-Phishing & Anti-Spoofing",
      desc: "RCS protocol enforces zero sender-ID spoofing, safeguarding consumers from impersonation and fraudulent scams.",
      icon: "🔒",
    },
    {
      title: "Interactive Rich Cards",
      desc: "Rich carousel cards, suggested replies, action buttons, and verified media must meet strict content quality standards.",
      icon: "🎨",
    },
    {
      title: "One-Tap Opt-Out & TRAI Sync",
      desc: "Native one-tap unsubscribe integrated into messaging clients with complete synchronization to national DND registries.",
      icon: "⚡",
    },
  ],
  sections: [
    {
      id: "rcs-overview",
      num: "01",
      title: "Introduction to RCS Business Messaging (RBM)",
      content: [
        "Rich Communication Services (RCS) is the next-generation telecommunication protocol upgrading traditional SMS with rich media, interactive chips, verified business branding, high-resolution imagery, and end-to-end security protections.",
        "Webczar Solutions designs, builds, and deploys high-performance RCS Business Messaging (RBM) solutions for enterprise clients and manages our own branded customer communications using certified carrier-grade RCS aggregators.",
        "This policy delineates the operational standards, subscriber safeguards, content guidelines, and regulatory compliance required for all RCS communications dispatched by or through Webczar Solutions.",
      ],
    },
    {
      id: "verified-branding",
      num: "02",
      title: "Brand Verification & Security Authentication",
      content: [
        "In accordance with GSMA and Google RBM requirements, all business agents deployed by Webczar Solutions undergo rigorous identity verification prior to public broadcast authorization:",
      ],
      bullets: [
        "Verified Sender Shield: The agent displays an authenticated brand logo, official business name, registered corporate address, and verified checkmark badge inside the native Android Messages application.",
        "Zero Spoofing: Unlike traditional SMS where alphanumeric sender headers could theoretically be targeted by spoofing, RCS establishes cryptographic handshakes with mobile network operators (MNOs), rendering sender-ID spoofing impossible.",
        "Domain & Website Verification: Sponsoring enterprise domains and privacy policy URLs are validated by Google and partner telecom operators prior to brand activation.",
      ],
    },
    {
      id: "consent-rcs",
      num: "03",
      title: "Explicit Consent & Subscriber Opt-In",
      content: [
        "RCS Business Messaging requires explicit, unambiguous prior consent from the recipient. Webczar Solutions and our enterprise clients must ensure that:",
        "1. Explicit affirmative opt-in is captured via digital form, customer portal, or bilateral agreement prior to sending non-transactional rich campaigns.",
        "2. Recipients are informed of the expected frequency and nature of RCS notifications.",
        "3. Cold outreach to non-consenting numbers or purchasing telemarketing phone lists is strictly prohibited.",
      ],
      callout: {
        type: "warning",
        title: "Compliance Zero-Tolerance",
        text: "Any client account utilizing Webczar RCS gateways found generating spam or receiving elevated consumer spam reports will face immediate suspension without refund.",
      },
    },
    {
      id: "content-guidelines",
      num: "04",
      title: "Content Standards & Interactive Media Guidelines",
      content: [
        "All RCS content—including suggested replies, carousel cards, action chips, map coordinates, and calendar prompts—must comply with strict ethical and legal thresholds:",
      ],
      bullets: [
        "Prohibited Verticals: Promotion of illegal products, deceptive financial schemes, unverified pharmaceuticals, adult content, hate speech, or defamatory materials is strictly forbidden.",
        "Transparency in Suggested Actions: Action chips (such as 'Open Website', 'Call Support', or 'View Location') must accurately describe the destination without misleading redirection.",
        "Media Optimization: Video and image payloads must adhere to GSMA file size specifications to avoid carrier degradation and optimize network bandwidth.",
      ],
    },
    {
      id: "rcs-opt-out",
      num: "05",
      title: "Native One-Tap Opt-Out & Carrier Feedback",
      content: [
        "Every RCS marketing campaign must provide an easily accessible opt-out mechanism:",
        "1. Quick-Action Chip: Promotional RCS cards include an integrated 'Unsubscribe' or 'Stop' action chip allowing one-tap consent revocation.",
        "2. Native Android Messages Control: Users can utilize the native client menu to 'Block & Report Spam' or mute notifications at any time.",
        "3. Real-Time Carrier Sync: When a user opts out, carrier webhook telemetry immediately pushes the suppression signal to Webczar's central DND registry, preventing subsequent transmissions.",
      ],
    },
    {
      id: "regulatory-framework",
      num: "06",
      title: "Telecom Regulatory Alignment (TRAI TCCCPR & Global Standards)",
      content: [
        "For transmissions within India, all RCS messages adhere strictly to the Telecom Commercial Communications Customer Preference Regulations, 2018 (TCCCPR) governed by the Telecom Regulatory Authority of India (TRAI):",
      ],
      bullets: [
        "Distributed Ledger Technology (DLT) Registration: All sender headers, business entities, and content templates are registered on authorized telecom DLT platforms.",
        "National Customer Preference Register (NCPR): Numbers registered on India's national Do Not Disturb registry are scrubbed prior to dispatching commercial promotions.",
        "Time of Transmission: Commercial RCS communications are restricted to TRAI-mandated operational hours (9:00 AM to 9:00 PM IST).",
      ],
    },
    {
      id: "rcs-contact",
      num: "07",
      title: "Communications Desk & Regulatory Contact",
      content: [
        "For compliance audits, operator inquiries, or enterprise RCS deployment consultations, please reach out to our Specialized Messaging Architecture Desk:",
      ],
      bullets: [
        "Department: Telecommunication & RCS Solutions Desk",
        "Official Email: info@webczarsolutions.com",
        "Direct Helpline: +91 99882 21729",
        "Registered Office: Webczar Solutions, Tricity Tech Corridor, Chandigarh · Mohali, India",
      ],
    },
  ],
};

