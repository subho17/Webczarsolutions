/* Single source of truth for Webczar Solutions services & capabilities.
 * Powers the /services directory and all individual /services/[slug] routes.
 */

export interface ServiceItem {
  slug: string;
  aliases?: string[];
  title: string;
  shortTitle: string;
  badge: string;
  category:
    | "Growth & Marketing"
    | "Technology & Engineering"
    | "Direct Messaging & Telephony"
    | "Creative & Brand"
    | "Next-Gen AI & Web3"
    | "Add-On Services";
  shortDesc: string;
  heroHeadline: string;
  heroSub: string;
  accentColor: string;
  stats: { value: string; label: string }[];
  overview: string[];
  features: { title: string; desc: string; icon?: string }[];
  deliverables: string[];
  technologies: string[];
  process: { step: string; title: string; desc: string }[];
  whyWebczar: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServiceItem[] = [
  /* ─────────────── 1 · LEAD GENERATION COMPANY ─────────────── */
  {
    slug: "lead-generation",
    aliases: ["lead-generation-company", "b2b-lead-generation"],
    title: "Lead Generation Company",
    shortTitle: "Lead Generation",
    badge: "High-Intent Inbound Funnels",
    category: "Growth & Marketing",
    shortDesc:
      "Predictable, high-converting B2B and B2C lead pipelines combining laser-targeted advertising, interactive qualification funnels, and CRM automation.",
    heroHeadline: "Predictable, Scalable Inbound Lead Pipelines That Actually Close",
    heroSub:
      "Stop wasting budget on low-intent clicks. Webczar Solutions engineers proprietary lead acquisition funnels that capture, score, and deliver verified decision-makers directly to your sales floor.",
    accentColor: "#4F46E5",
    stats: [
      { value: "3.8x", label: "Average Increase in SQLs" },
      { value: "42%", label: "Lower Cost Per Acquisition" },
      { value: "< 60s", label: "Instant Lead Alert Routing" },
      { value: "100%", label: "Verified Contact Data" },
    ],
    overview: [
      "Modern revenue growth demands more than vanity traffic. Webczar Solutions builds end-to-end lead generation ecosystems that attract high-intent buyers, filter tire-kickers with interactive questionnaires, and seamlessly route qualified prospects into your CRM within seconds.",
      "Whether you are selling high-ticket B2B software, real estate inventory, financial consulting, or healthcare services, our multi-channel capture frameworks combine search intent, targeted social ads, automated follow-up sequences, and instant sales alerts to turn passive interest into signed contracts.",
    ],
    features: [
      {
        title: "Multi-Channel Inbound Targeting",
        desc: "Precision campaigns across Google Search, LinkedIn, Meta, and niche industry networks targeting verified decision-makers and active buyers.",
      },
      {
        title: "Interactive Squeeze & Quiz Funnels",
        desc: "Custom multi-step forms, price calculators, and assessment quizzes that increase completion rates while filtering low-quality submissions.",
      },
      {
        title: "Automated Lead Scoring & Enrichment",
        desc: "Instant data verification, company size matching, email validation, and intent grading before leads ever reach your sales reps.",
      },
      {
        title: "Instant WhatsApp & SMS Notifications",
        desc: "Direct webhooks dispatch lead details to your sales team's WhatsApp and CRM within 30 seconds to capitalize on peak buyer interest.",
      },
      {
        title: "Automated Nurture Workflows",
        desc: "Drip email sequences and personalized SMS follow-ups that warm cold prospects and reactivate dormant leads automatically.",
      },
      {
        title: "Transparent Closed-Loop Attribution",
        desc: "Full-funnel ROI dashboarding connecting ad spend directly to closed deals, revenue generated, and customer lifetime value.",
      },
    ],
    deliverables: [
      "Custom high-converting landing pages & multi-step lead funnels",
      "Paid campaign architecture across Google Ads, LinkedIn & Meta",
      "Native CRM integrations (HubSpot, Zoho, Salesforce, LeadSquared)",
      "Instant SMS/WhatsApp notification webhooks for sales reps",
      "Lead validation & anti-spam spam filtering algorithms",
      "Weekly performance reviews & bi-weekly A/B conversion tests",
    ],
    technologies: [
      "Google Ads",
      "LinkedIn Ads",
      "Meta Ads Manager",
      "HubSpot CRM",
      "Zoho CRM",
      "Zapier / Webhooks",
      "Next.js Funnels",
      "Google Tag Manager",
    ],
    process: [
      {
        step: "01",
        title: "Ideal Customer Profile (ICP) Mapping",
        desc: "We analyze your highest-value clients, purchase triggers, common objections, and decision-maker demographics.",
      },
      {
        step: "02",
        title: "High-Converting Funnel Architecture",
        desc: "We engineer dedicated, lightning-fast landing pages with persuasive copywriting and frictionless capture forms.",
      },
      {
        step: "03",
        title: "Targeted Campaign Launch",
        desc: "We launch surgical paid search and social campaigns optimized for conversions rather than superficial impressions.",
      },
      {
        step: "04",
        title: "Continuous CRO & Pipeline Scaling",
        desc: "We analyze sales feedback, iterate ad copy, refine audience exclusions, and scale budget on winning campaigns.",
      },
    ],
    whyWebczar: [
      "Zero reliance on generic scraped lead lists — 100% first-party opt-in leads",
      "Direct integration with your existing sales CRM and WhatsApp workflows",
      "Strict quality control with spam phone number and burner email filtering",
      "Continuous multivariate testing of hooks, headlines, and call-to-actions",
    ],
    faqs: [
      {
        q: "What constitutes a Sales Qualified Lead (SQL) in your campaigns?",
        a: "We co-define qualification criteria with your leadership team before launching. Typical criteria include minimum budget, geographic location, decision-making authority, and verified contact phone number.",
      },
      {
        q: "How fast will our sales team receive new leads?",
        a: "Instantly. Through our custom webhooks, leads are pushed to your CRM and dispatch an alert to your reps via WhatsApp/SMS within seconds of form submission.",
      },
      {
        q: "Do you provide B2B or B2C lead generation?",
        a: "Both. We run enterprise B2B account-based marketing (ABM) on LinkedIn and Google Search, as well as high-volume B2C consumer acquisition for real estate, education, and finance.",
      },
    ],
  },

  /* ─────────────── 2 · REAL ESTATE MARKETING AGENCY ─────────────── */
  {
    slug: "real-estate-marketing",
    aliases: ["real-estate-marketing-agency", "property-marketing"],
    title: "Real Estate Marketing Agency",
    shortTitle: "Real Estate Marketing",
    badge: "Property Sales & Brokerage Growth",
    category: "Growth & Marketing",
    shortDesc:
      "Premier digital marketing, 3D project showcases, and high-intent buyer acquisition for real estate builders, developers, and luxury brokers across Tricity & Pan-India.",
    heroHeadline: "Fill Your Site Visits & Sell Out Property Inventories Faster",
    heroSub:
      "From luxury residential townships and commercial plazas to plotted developments, Webczar Solutions engineers high-performing property marketing campaigns that attract genuine NRI & domestic property investors.",
    accentColor: "#FF2E0F",
    stats: [
      { value: "₹250Cr+", label: "Property Inventory Marketed" },
      { value: "15,000+", label: "Verified Buyer Site Inquiries" },
      { value: "65%", label: "High-Intent Buyer Ratio" },
      { value: "35%+", label: "NRI Buyer Contribution" },
    ],
    overview: [
      "Real estate marketing requires far more than generic lead forms. High-net-worth individuals and serious home buyers expect immersive project presentations, verified RERA transparency, transparent pricing, and instant assistance.",
      "Webczar Solutions is the preferred marketing partner for prominent real estate developers and top-tier brokerages across the Chandigarh, Mohali, Zirakpur, Panchkula tech corridor and pan-India. We deliver turnkey marketing: high-converting microsites, hyper-local Google Search dominance, Meta lifestyle video ads, automated site-visit scheduling, and NRI investor outreach.",
    ],
    features: [
      {
        title: "Dedicated Project Microsites",
        desc: "Bespoke, high-speed project landing pages with interactive floor plans, amenity galleries, location maps, and downloadable RERA brochures.",
      },
      {
        title: "Google Search Dominance for Property Keywords",
        desc: "Laser-focused Search and Performance Max campaigns targeting buyers searching for '3 BHK luxury flats in Mohali', 'commercial shops in Zirakpur', etc.",
      },
      {
        title: "Cinematic Video & Walkthrough Ads",
        desc: "Drone footage, 3D walkthrough snippets, and founder interviews packaged into viral Instagram Reels and YouTube video ads.",
      },
      {
        title: "NRI & Outstation Investor Campaigns",
        desc: "Targeted campaigns targeting affluent Indian diaspora in the US, UK, Canada, UAE, and Singapore seeking high-yield real estate assets.",
      },
      {
        title: "Automated Site Visit Booking Engine",
        desc: "Direct calendar and WhatsApp integration enabling prospective buyers to instantly pick a convenient date and time for site inspections.",
      },
      {
        title: "Real Estate CRM Integration",
        desc: "Seamless synchronization with Sell.Do, LeadSquared, Salesforce, and customized spreadsheets with instant caller auto-assignment.",
      },
    ],
    deliverables: [
      "Custom branded project microsites & landing pages with brochure download gates",
      "Full Google Ads PPC & Meta social ad campaign setup and management",
      "High-converting ad creatives, drone video cutdowns, and carousel ads",
      "Automated WhatsApp site visit confirmation & location pin dispatch",
      "NRI investor geo-targeted campaigns across GCC, North America & UK",
      "Real-time site visit tracking and lead quality optimization reports",
    ],
    technologies: [
      "Google Search & PMax",
      "Meta Ads (IG & FB)",
      "YouTube Video Ads",
      "Next.js Microsites",
      "Sell.Do / LeadSquared",
      "WhatsApp Business API",
      "Google Maps APIs",
    ],
    process: [
      {
        step: "01",
        title: "Project USPs & Inventory Analysis",
        desc: "We analyze your project's unit types, ticket size, location advantages, pricing brackets, and target buyer persona.",
      },
      {
        step: "02",
        title: "Digital Collateral & Funnel Build",
        desc: "We build ultra-fast, mobile-optimized landing pages with virtual tours, sample flat photos, and gated pricing sheets.",
      },
      {
        step: "03",
        title: "Omnichannel Media Blast",
        desc: "We launch targeted search ads for active seekers, paired with aspirational social video campaigns for passive high-income earners.",
      },
      {
        step: "04",
        title: "Site Visit Conversion Optimization",
        desc: "Our automated WhatsApp workflows send venue directions, reminder alerts, and follow-ups to maximize physical site visit turnout.",
      },
    ],
    whyWebczar: [
      "Extensive domain knowledge in Chandigarh, Mohali, Zirakpur, Panchkula & North India real estate",
      "Strong track record with both luxury residential (₹1Cr – ₹10Cr+) and commercial retail spaces",
      "Automated NRI investor campaigns with international timezone follow-ups",
      "Complete transparency with shared live ad spend dashboards and CRM lead logs",
    ],
    faqs: [
      {
        q: "How do you filter out non-serious property leads?",
        a: "We deploy multi-step qualification filters requiring users to confirm their budget range, preferred configuration (e.g., 3BHK, Penthouse, SCO Plot), and purchase timeframe before they can submit the inquiry.",
      },
      {
        q: "Can you help promote new project pre-launches?",
        a: "Yes! We specialize in pre-launch teaser campaigns that generate hundreds of Expressions of Interest (EOIs) before the official public launch.",
      },
      {
        q: "Do you produce the photo and video creatives?",
        a: "We can work directly with your existing site footage or coordinate on-ground drone shoots, 3D render cuts, and graphic layouts tailored for ad performance.",
      },
    ],
  },

  /* ─────────────── 3 · BEST DIGITAL MARKETING AGENCY ─────────────── */
  {
    slug: "digital-marketing",
    aliases: ["best-digital-marketing-agency", "digital-marketing-agency"],
    title: "Best Digital Marketing Agency",
    shortTitle: "Digital Marketing",
    badge: "Full-Funnel Omnichannel Growth",
    category: "Growth & Marketing",
    shortDesc:
      "Data-driven, omnichannel digital marketing combining search engine dominance, high-ROAS paid media, conversion rate optimization, and brand storytelling.",
    heroHeadline: "Accelerate Your Business With Full-Funnel Digital Growth",
    heroSub:
      "Webczar Solutions is recognized as a premier digital marketing agency. We eliminate guesswork with scientific audience targeting, creative excellence, and measurable return on investment.",
    accentColor: "#6D3BF5",
    stats: [
      { value: "4.5x", label: "Average Client ROAS" },
      { value: "180M+", label: "Targeted Ad Impressions" },
      { value: "94%", label: "Client Retention Rate" },
      { value: "24/7", label: "Real-Time ROI Tracking" },
    ],
    overview: [
      "In a crowded digital marketplace, disjointed marketing tactics waste money and confuse buyers. Webczar Solutions delivers an integrated, omnichannel digital marketing strategy that aligns your organic visibility, paid acquisition, social presence, and retention funnels into a unified revenue engine.",
      "As the premier digital marketing agency headquartered in the Tricity tech corridor serving businesses globally, we take total ownership of your growth metrics — transforming paid clicks into loyal brand advocates.",
    ],
    features: [
      {
        title: "Omnichannel Growth Strategy",
        desc: "Harmonizing SEO, PPC, social advertising, and direct messaging into a unified customer journey that maximizes lifetime value.",
      },
      {
        title: "High-ROAS Paid Advertising",
        desc: "Surgical execution across Google Ads, Meta Ads, LinkedIn, and YouTube with strict performance benchmarks and CPA control.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        desc: "Relentless A/B testing of landing page copy, layout hierarchy, CTA positioning, and form friction to squeeze maximum value from every visitor.",
      },
      {
        title: "Organic Search Engine Dominance",
        desc: "Comprehensive on-page, off-page, and technical SEO ensuring high Page 1 rankings for your highest-converting commercial queries.",
      },
      {
        title: "Content Marketing & Authority Building",
        desc: "Authoritative thought-leadership articles, case studies, and industry whitepapers that position your executive team as category leaders.",
      },
      {
        title: "Full-Funnel Analytics & Attribution",
        desc: "Multi-touch attribution modeling in GA4, Google BigQuery, and custom dashboards giving total clarity on channel performance.",
      },
    ],
    deliverables: [
      "Custom 12-month digital growth blueprint & channel allocation roadmap",
      "Full ad campaign buildouts with bespoke copy, motion graphics & video assets",
      "Technical website audit & ongoing conversion rate optimization (CRO)",
      "Weekly analytics reporting with transparent cost-per-lead and ROAS metrics",
      "Dedicated senior growth strategist and account manager",
    ],
    technologies: [
      "Google Ads",
      "Meta Ads Manager",
      "LinkedIn Campaign Manager",
      "Google Analytics 4",
      "SEMrush / Ahrefs",
      "Hotjar / Microsoft Clarity",
      "Looker Studio Dashboards",
    ],
    process: [
      {
        step: "01",
        title: "Digital Audit & Market Intelligence",
        desc: "We audit your existing digital footprint, customer touchpoints, competitors' spend, and market gaps.",
      },
      {
        step: "02",
        title: "Omnichannel Growth Blueprint",
        desc: "We define precise audience segments, budget allocations, creative hooks, and key performance milestones.",
      },
      {
        step: "03",
        title: "Multi-Channel Campaign Deployment",
        desc: "We activate paid media and organic assets simultaneously, coordinating messaging across all buyer touchpoints.",
      },
      {
        step: "04",
        title: "Optimization & Scaling",
        desc: "We eliminate underperforming ad sets, amplify winning variations, and expand into high-potential adjacent keywords.",
      },
    ],
    whyWebczar: [
      "No long-term lock-in contracts — we earn your business month after month through demonstrable results",
      "Complete transparency: you own 100% of your ad accounts, pixel data, and creative assets",
      "Cross-disciplinary team of data engineers, creative copywriters, and paid media buyers",
      "Proven track record scaling B2B tech, real estate, e-commerce, and regional service brands",
    ],
    faqs: [
      {
        q: "What makes Webczar different from other digital marketing agencies?",
        a: "Most agencies focus on surface-level vanity metrics like impressions and clicks. Webczar operates as a revenue-first partner. We align our strategies directly with your sales pipeline, cost-per-acquisition, and return on ad spend.",
      },
      {
        q: "What budget is required to get started with Webczar?",
        a: "We work with growth-stage businesses, established enterprises, and funded startups. During our discovery call, we will recommend a media spend and management tier matched to your competitive landscape.",
      },
      {
        q: "How often will we receive reports?",
        a: "You have 24/7 access to a live interactive Looker Studio dashboard, accompanied by structured bi-weekly review meetings and monthly strategic roadmaps.",
      },
    ],
  },

  /* ─────────────── 4 · SOCIAL MEDIA MARKETING AGENCY ─────────────── */
  {
    slug: "social-media-marketing",
    aliases: ["social-media-marketing-agency", "smm-agency"],
    title: "Social Media Marketing Agency",
    shortTitle: "Social Media Marketing",
    badge: "Viral Reach & Community Engagement",
    category: "Growth & Marketing",
    shortDesc:
      "Creative storytelling, viral short-form video content, influencer collaborations, and targeted Meta & LinkedIn paid social campaigns that build cult brand followings.",
    heroHeadline: "Transform Casual Followers Into Passionate Brand Evangelists",
    heroSub:
      "Social media is your brand's digital front door. Webczar Solutions creates scroll-stopping Instagram Reels, authoritative LinkedIn executive branding, and viral TikTok/YouTube Shorts that drive real commercial momentum.",
    accentColor: "#E1306C",
    stats: [
      { value: "10x", label: "Average Social Reach Growth" },
      { value: "4.8%", label: "Average Engagement Rate" },
      { value: "500+", label: "Viral Reels & Shorts Produced" },
      { value: "24/7", label: "Active Community Moderation" },
    ],
    overview: [
      "Broadcasting generic corporate updates on social media no longer works. Modern consumers demand authenticity, sharp storytelling, cinematic visual aesthetic, and interactive community dialogue.",
      "Webczar Solutions handles your social media presence end-to-end: monthly content calendars, graphic design, short-form video editing, creator collaborations, community moderation, and high-converting paid social ad funnels.",
    ],
    features: [
      {
        title: "Short-Form Video Production (Reels & Shorts)",
        desc: "Scripting, hook optimization, dynamic captions, and trend-responsive editing tailored for maximum organic reach.",
      },
      {
        title: "Executive LinkedIn Personal Branding",
        desc: "Ghostwriting thought-leadership articles and viral carousels for founders and CEOs to establish commanding industry authority.",
      },
      {
        title: "Targeted Paid Social Ad Campaigns",
        desc: "Multi-tiered Meta and LinkedIn ad funnels delivering cold awareness, middle-of-funnel consideration, and dynamic retargeting.",
      },
      {
        title: "Community Management & DM Automation",
        desc: "24/7 comment response, inbox management, and automated DM keyword triggers that turn inquiries into leads immediately.",
      },
      {
        title: "Influencer & Creator Collaborations",
        desc: "Vetting, negotiating, and executing authentic partnerships with niche content creators that resonate with your core demographic.",
      },
      {
        title: "Brand Aesthetic & Feed Styling",
        desc: "Cohesive visual identity systems, bespoke template kits, and curated grid layouts that convey prestige and design sophistication.",
      },
    ],
    deliverables: [
      "Comprehensive monthly content calendar with copy, hashtags & visual briefs",
      "12 to 24 high-production short-form video reels and motion graphics per month",
      "Custom branded social post templates in Figma & Adobe Suite",
      "End-to-end community moderation, comment replies & DM triage",
      "Monthly social listening & competitor sentiment benchmarking report",
    ],
    technologies: [
      "Meta Business Suite",
      "Instagram & Facebook",
      "LinkedIn Pages & Creator Mode",
      "YouTube Shorts",
      "Adobe Premiere & After Effects",
      "Figma",
      "Sprout Social / Buffer",
    ],
    process: [
      {
        step: "01",
        title: "Voice & Aesthetic Definition",
        desc: "We analyze your audience psychographics, define your brand tone of voice, visual moodboard, and core content pillars.",
      },
      {
        step: "02",
        title: "Content Calendar & Production",
        desc: "Our creative team scripts, designs, and edits batches of high-impact visuals, carousels, and video reels ahead of time.",
      },
      {
        step: "03",
        title: "Publishing, Engagement & Amplification",
        desc: "We publish at peak audience activity hours, engage actively in the comment threads, and put targeted ad spend behind top organic posts.",
      },
      {
        step: "04",
        title: "Performance Review & Iteration",
        desc: "We analyze watch time, share ratios, follower growth, and inbound inquiries to continually refine our creative playbook.",
      },
    ],
    whyWebczar: [
      "In-house video editors and copywriters who understand algorithmic hooks and viewer psychology",
      "Bespoke designs customized to your brand guidelines — zero low-quality generic templates",
      "Seamless integration between organic social community and paid conversion ads",
      "Experience handling both B2C lifestyle brands and high-stakes B2B corporate entities",
    ],
    faqs: [
      {
        q: "Which social media platforms should my brand be on?",
        a: "We assess your ideal customer profile. For B2B tech and corporate services, LinkedIn and YouTube are top priorities. For real estate, e-commerce, lifestyle, and healthcare, Instagram, Facebook, and YouTube Shorts drive the highest engagement.",
      },
      {
        q: "Who creates the video footage for Reels and Shorts?",
        a: "We can work with raw smartphone clips provided by your team and transform them with professional editing, hooks, sound design, and motion graphics, or arrange on-site shoots.",
      },
      {
        q: "How do you measure success on social media?",
        a: "We track both qualitative brand resonance (shares, saves, comment sentiment) and direct business impact (website traffic, link clicks, and direct message lead inquiries).",
      },
    ],
  },

  /* ─────────────── 5 · BULK SMS AGENCY ─────────────── */
  {
    slug: "bulk-sms",
    aliases: ["bulk-sms-agency", "bulk-sms-marketing"],
    title: "Bulk SMS Agency",
    shortTitle: "Bulk SMS",
    badge: "High-Throughput DLT Messaging",
    category: "Direct Messaging & Telephony",
    shortDesc:
      "Enterprise-grade, DLT-compliant transactional and promotional SMS routing with instantaneous carrier delivery, short URL click-tracking, and 99.8% gateway uptime.",
    heroHeadline: "Instant, Direct-to-Consumer Reach With 98% Read Rates",
    heroSub:
      "Cut through email inbox clutter. Webczar Solutions provides tier-1 direct telecom gateway routing for transactional OTPs, service alerts, and high-impact promotional broadcasts across India.",
    accentColor: "#0284C7",
    stats: [
      { value: "99.8%", label: "Gateway Delivery Rate" },
      { value: "< 3s", label: "Average OTP Delivery Speed" },
      { value: "10M+", label: "Monthly SMS Capacity" },
      { value: "100%", label: "TRAI / DLT Compliant" },
    ],
    overview: [
      "Text messaging remains the fastest, most universal direct communication channel in the world. With a 98% open rate and average read times under 3 minutes, SMS is indispensable for mission-critical OTPs, transactional order updates, and time-sensitive flash promotions.",
      "Webczar Solutions provides end-to-end bulk SMS infrastructure: full assistance with TRAI DLT registration, sender ID whitelisting, compliant template approvals, and high-speed SMPP/REST API gateway connections for software applications.",
    ],
    features: [
      {
        title: "TRAI / DLT Registration & Compliance Assistance",
        desc: "Complete, hassle-free guidance through operator DLT portals (Vilpower, Jio, Airtel, Vodafone) for entity and template registration.",
      },
      {
        title: "High-Speed Transactional SMS & OTPs",
        desc: "Ultra-low latency carrier routes delivering two-factor authentication codes and account alerts within 3 seconds 24/7.",
      },
      {
        title: "Promotional Broadcast Engine",
        desc: "Send millions of personalized promotional messages with customized sender IDs, emojis, and dynamic recipient variables.",
      },
      {
        title: "Shortened Trackable Links & Analytics",
        desc: "Built-in branded short URLs with real-time per-user click tracking, device detection, and conversion logging.",
      },
      {
        title: "Developer-Friendly REST & SMPP APIs",
        desc: "Robust APIs with code samples for Node.js, Python, PHP, and cURL to integrate SMS directly into your websites and applications.",
      },
      {
        title: "Dynamic Contact Management & Opt-Outs",
        desc: "Easy CSV contact uploads, automated blacklist filtering, duplicate removal, and compliant opt-out management.",
      },
    ],
    deliverables: [
      "Full assistance with Entity Registration, Headers & Content Template approvals",
      "Access to our self-serve high-speed Webczar SMS Portal dashboard",
      "API keys and webhooks for automated transactional and OTP triggering",
      "Real-time delivery receipts (DLR) with operator-level status reporting",
      "Dedicated account manager and 24/7 emergency gateway support",
    ],
    technologies: [
      "SMPP v3.4 Protocols",
      "RESTful Messaging APIs",
      "DLT Portals (Jio, Airtel, Vilpower)",
      "Tier-1 Telecom Carrier Routes",
      "Dynamic Short URL Engines",
      "Webhook Callbacks",
    ],
    process: [
      {
        step: "01",
        title: "DLT Onboarding & Whitelisting",
        desc: "We verify your business documents and shepherd your sender ID and message templates through telecom regulator approval.",
      },
      {
        step: "02",
        title: "Gateway Connection & API Setup",
        desc: "We configure your portal account or connect your application via our ultra-fast REST APIs for automated messaging.",
      },
      {
        step: "03",
        title: "Audience Segmentation & Broadcast",
        desc: "Upload clean contact segments, personalize message variables, and schedule broadcasts for optimal time-of-day engagement.",
      },
      {
        step: "04",
        title: "Real-Time Delivery Auditing",
        desc: "Monitor delivery receipts, link click rates, bounce reasons, and conversion statistics in your live portal.",
      },
    ],
    whyWebczar: [
      "Direct connections to Tier-1 telecom operators avoiding unapproved third-party middlemen",
      "Refund guarantee on failed transactional SMS caused by gateway drops",
      "Complete transparency with downloadable operator delivery timestamps",
      "Specialized routing for high-volume enterprise senders",
    ],
    faqs: [
      {
        q: "What is DLT registration and is it mandatory in India?",
        a: "Yes. Distributed Ledger Technology (DLT) is mandated by TRAI for all commercial communications in India to prevent spam. Webczar Solutions handles the entire registration process on your behalf.",
      },
      {
        q: "What is the difference between Transactional and Promotional SMS?",
        a: "Transactional SMS delivers essential non-promotional alerts (OTPs, order statuses, booking confirmations) 24/7 to all numbers including DND. Promotional SMS is for marketing broadcasts delivered between 10:00 AM and 9:00 PM to non-DND numbers.",
      },
      {
        q: "Can we integrate SMS sending directly into our mobile app or website?",
        a: "Yes! We provide straightforward REST API endpoints and SDKs so your engineering team can send OTPs or alerts with simple HTTP requests.",
      },
    ],
  },

  /* ─────────────── 6 · WEBSITE DESIGN & DEVELOPMENT ─────────────── */
  {
    slug: "website-design-development",
    aliases: ["web-design", "web-development", "custom-website"],
    title: "Website Design & Development",
    shortTitle: "Website Design",
    badge: "Next-Gen Web Experiences",
    category: "Technology & Engineering",
    shortDesc:
      "High-performance, visually stunning custom websites and web applications engineered for speed, conversion, and effortless brand scalability.",
    heroHeadline: "Bespoke, High-Performance Websites Built for Speed & Conversion",
    heroSub:
      "Your website is the center of your digital empire. Webczar Solutions designs and develops award-winning, mobile-first web platforms built with React, Next.js, and modern headless architectures.",
    accentColor: "#0072E3",
    stats: [
      { value: "98+", label: "Google Lighthouse Speed Score" },
      { value: "< 1.2s", label: "Average First Contentful Paint" },
      { value: "100%", label: "Custom Handcrafted Code" },
      { value: "350+", label: "Websites Shipped Globally" },
    ],
    overview: [
      "A slow, clunky, template-based website repels modern buyers and hurts your search rankings. Webczar Solutions crafts bespoke, high-performance digital flagships that fuse editorial typography, fluid micro-interactions, and blazing Next.js engineering.",
      "Every site we ship is engineered mobile-first, conforms strictly to ISO and Google Core Web Vitals standards, and features seamless CMS integration so your marketing team can update content without touching a line of code.",
    ],
    features: [
      {
        title: "Bespoke UI/UX & Editorial Art Direction",
        desc: "Tailored visual identity, typography hierarchies, and intuitive layouts crafted from scratch in Figma — no recycled themes.",
      },
      {
        title: "Modern Next.js & React 19 Engineering",
        desc: "Lightning-fast static site generation (SSG) and server-side rendering (SSR) for instant page transitions and superior SEO.",
      },
      {
        title: "Flawless Responsive Mobile Architecture",
        desc: "Tested across hundreds of mobile, tablet, and ultra-wide desktop viewports to ensure seamless visual perfection everywhere.",
      },
      {
        title: "Headless CMS Integration",
        desc: "Intuitive content administration via Sanity, Strapi, or headless WordPress, giving your marketing team complete editing freedom.",
      },
      {
        title: "Core Web Vitals & Search Optimization",
        desc: "Built-in structured schema data, automatic responsive image formatting (AVIF/WebP), and 95+ Lighthouse speed scores.",
      },
      {
        title: "Enterprise Security & Global CDN Hosting",
        desc: "Automated SSL certificates, DDoS mitigation, and edge deployment via Vercel or AWS for 99.99% uptime globally.",
      },
    ],
    deliverables: [
      "High-fidelity Figma prototypes & responsive UI component library",
      "Clean, modular TypeScript & modern CSS source code repository",
      "Seamless CMS setup with customized authoring schemas",
      "Built-in Google Analytics 4, Tag Manager & Meta Pixel integration",
      "Comprehensive 30-day post-launch warranty and engineering support",
    ],
    technologies: [
      "Next.js App Router",
      "React 19",
      "TypeScript",
      "CSS Modules / Vanilla CSS",
      "GSAP / Lenis Smooth Scroll",
      "Three.js / WebGL",
      "Headless CMS (Sanity / Strapi)",
      "Vercel Edge Network",
    ],
    process: [
      {
        step: "01",
        title: "Architecture & User Journey Mapping",
        desc: "We map out information architecture, technical requirements, wireframes, and conversion pathways.",
      },
      {
        step: "02",
        title: "High-Fidelity UI Design",
        desc: "We design every screen in Figma, including hover states, mobile drawers, and interactive micro-animations.",
      },
      {
        step: "03",
        title: "Front-End & CMS Development",
        desc: "We build your platform using modular React and Next.js, with clean code and zero bloated dependencies.",
      },
      {
        step: "04",
        title: "Cross-Device QA & Global Launch",
        desc: "Rigorous testing across browsers, speed optimization, SEO auditing, and smooth domain DNS migration.",
      },
    ],
    whyWebczar: [
      "Zero bloated page builders — clean, high-performance, modern code",
      "Exceptional design aesthetics that immediately elevate brand perception",
      "Complete client ownership of all intellectual property and source code repositories",
      "Ongoing maintenance and feature expansion partnerships",
    ],
    faqs: [
      {
        q: "How long does it take to design and launch a custom website?",
        a: "A typical high-performance corporate or marketing website takes 3 to 6 weeks from initial kickoff to launch, depending on scope and custom feature requirements.",
      },
      {
        q: "Will we be able to edit blog posts and page content ourselves?",
        a: "Yes! We integrate modern headless CMS systems that let your team update text, change images, and publish new articles with an intuitive visual editor.",
      },
      {
        q: "Is SEO included in the website build?",
        a: "Absolutely. Every website we build includes technical SEO best practices: semantic HTML5, clean canonical URLs, OpenGraph social meta tags, XML sitemaps, and optimized Core Web Vitals.",
      },
    ],
  },

  /* ─────────────── 7 · CUSTOM SOFTWARE DEVELOPMENT ─────────────── */
  {
    slug: "software-development",
    aliases: ["custom-software-development", "saas-development"],
    title: "Custom Software Development",
    shortTitle: "Software Development",
    badge: "Enterprise SaaS & Business Automation",
    category: "Technology & Engineering",
    shortDesc:
      "Scalable, secure, and resilient custom software solutions, enterprise SaaS platforms, and automated business workflows built to scale.",
    heroHeadline: "Bespoke Enterprise Software Engineered for High Concurrency",
    heroSub:
      "Off-the-shelf software limits your operational agility. Webczar Solutions architects custom web platforms, cloud microservices, and internal tooling that streamline operations and cut costs.",
    accentColor: "#141414",
    stats: [
      { value: "99.99%", label: "Target System Uptime" },
      { value: "60%", label: "Average OpEx Reduction" },
      { value: "100%", label: "ISO-Standard Code" },
      { value: "0", label: "Runtime Vulnerabilities" },
    ],
    overview: [
      "Growing companies frequently outgrow disconnected spreadsheets and rigid SaaS packages. Webczar Solutions builds custom enterprise software engineered precisely to your business logic, compliance mandates, and organizational workflows.",
      "From multi-tenant SaaS products and customer portals to complex inventory, billing, and ERP backends, our engineering team adheres to domain-driven design, robust API security, automated CI/CD pipelines, and cloud-native scalability.",
    ],
    features: [
      {
        title: "Bespoke Enterprise Architecture",
        desc: "Tailor-made software tailored to your specific organizational hierarchy, approval flows, and data models.",
      },
      {
        title: "Multi-Tenant SaaS Development",
        desc: "Secure multi-tenancy, subscription billing (Stripe/Razorpay), user roles, and fine-grained data isolation.",
      },
      {
        title: "High-Throughput Microservices & APIs",
        desc: "RESTful and GraphQL backend services built with Node.js, Python, or Go designed to handle millions of requests.",
      },
      {
        title: "Legacy System Modernization",
        desc: "Migrate clunky on-premise software to modern cloud infrastructure with zero data loss and minimal downtime.",
      },
      {
        title: "Automated Workflows & Tooling",
        desc: "Connect legacy databases, payment gateways, shipping providers, and CRMs into automated, error-free pipelines.",
      },
      {
        title: "Enterprise Security & RBAC",
        desc: "Role-based access control, JWT/OAuth2 authentication, automated data encryption at rest and in transit, and audit logging.",
      },
    ],
    deliverables: [
      "Comprehensive technical architecture documentation and database ERDs",
      "Full source code repository with comprehensive unit and integration tests",
      "Automated CI/CD deployment pipelines on AWS, GCP, or Azure",
      "Interactive API documentation via Swagger/Postman collections",
      "Staff onboarding walkthroughs and ongoing SLA support contracts",
    ],
    technologies: [
      "Node.js / Express / NestJS",
      "Python / FastAPI / Django",
      "PostgreSQL / MySQL / MongoDB",
      "Redis Caching",
      "Docker & Kubernetes",
      "AWS / GCP Cloud Services",
      "TypeScript",
    ],
    process: [
      {
        step: "01",
        title: "Technical Discovery & Scope Definition",
        desc: "We conduct in-depth architectural interviews, diagram user stories, and detail the technical specifications.",
      },
      {
        step: "02",
        title: "Database Modeling & API Design",
        desc: "We design normalized database schemas, caching layers, and clear API contracts.",
      },
      {
        step: "03",
        title: "Agile Sprints & Bi-Weekly Demos",
        desc: "We develop in two-week iterative sprints, delivering deployable increments and demoing progress directly to your stakeholders.",
      },
      {
        step: "04",
        title: "Security Auditing & Cloud Deployment",
        desc: "Load testing, penetration testing, automated CI/CD configuration, and production launch with monitoring.",
      },
    ],
    whyWebczar: [
      "Rigorous adherence to clean architecture principles and maintainable code",
      "Direct communication with senior engineers and Founder Subhadeep Chanda",
      "100% intellectual property assignment upon milestone completion",
      "Guaranteed post-launch SLA support and security patch monitoring",
    ],
    faqs: [
      {
        q: "Who owns the code developed by Webczar?",
        a: "You do. 100% of the code, intellectual property, and database schemas belong to your company with full repository transfer upon milestone completion.",
      },
      {
        q: "How do you handle scope changes during development?",
        a: "We work with agile methodology. Any new feature requests are prioritized into the product backlog and estimated transparently before execution.",
      },
      {
        q: "Can you take over or fix an existing unfinished software codebase?",
        a: "Yes. We frequently conduct code audits on partially completed projects, refactor technical debt, and bring them across the finish line.",
      },
    ],
  },

  /* ─────────────── 8 · MOBILE APP DEVELOPMENT ─────────────── */
  {
    slug: "mobile-app-development",
    aliases: ["app-development", "ios-android-apps"],
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    badge: "iOS & Android Cross-Platform",
    category: "Technology & Engineering",
    shortDesc:
      "Fluid, native-quality iOS and Android mobile applications engineered with React Native and Flutter for peak performance and high user retention.",
    heroHeadline: "Intuitive, High-Performance Mobile Apps for iOS & Android",
    heroSub:
      "Engage your audience wherever they go. Webczar Solutions develops beautiful, cross-platform mobile apps with 60fps animations, native hardware integrations, and seamless App Store releases.",
    accentColor: "#FF2E0F",
    stats: [
      { value: "60 FPS", label: "Smooth Animation Fidelity" },
      { value: "1 Codebase", label: "Simultaneous iOS & Android" },
      { value: "100%", label: "App Store Approval Rate" },
      { value: "4.8★", label: "Average Client App Rating" },
    ],
    overview: [
      "A successful mobile app must balance lightning-fast response times, offline-first reliability, intuitive ergonomics, and deep native OS integration. Webczar Solutions builds consumer and enterprise mobile applications that users love opening every day.",
      "By leveraging cutting-edge React Native and Flutter frameworks alongside native Swift and Kotlin modules, we ship to both the Apple App Store and Google Play Store simultaneously — cutting development costs in half without compromising native fluidity.",
    ],
    features: [
      {
        title: "Cross-Platform Unified Codebase",
        desc: "Reach both iOS and Android users simultaneously with React Native or Flutter, ensuring identical feature parity and faster updates.",
      },
      {
        title: "Deep Native Hardware Integration",
        desc: "Seamless integration with biometrics (Face ID / Fingerprint), camera, GPS tracking, bluetooth, accelerometer, and NFC.",
      },
      {
        title: "Offline-First Data Synchronization",
        desc: "Local SQLite/WatermelonDB caching that lets users browse and work without internet connectivity, syncing smoothly when back online.",
      },
      {
        title: "Push Notifications & Deep Linking",
        desc: "FCM & Apple APNs integration for rich media push notifications and smart deep links that drop users into specific in-app screens.",
      },
      {
        title: "In-App Purchases & Payment Gateways",
        desc: "Compliant Apple Pay, Google Pay, Razorpay, and Stripe integrations for subscriptions and digital purchases.",
      },
      {
        title: "App Store & Play Store Publishing",
        desc: "End-to-end guidance through Apple's strict review guidelines and Google Play compliance for guaranteed initial approval.",
      },
    ],
    deliverables: [
      "Interactive Figma mobile prototypes with iOS and Android design tokens",
      "Production-ready React Native / Flutter codebase with full documentation",
      "Complete backend API integration and real-time database endpoints",
      "Successful deployment to Apple App Store & Google Play Store accounts",
      "Crashlytics and performance telemetry monitoring dashboard setup",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "TypeScript",
      "iOS Swift (Native Modules)",
      "Android Kotlin (Native Modules)",
      "Firebase / Supabase",
      "Redux Toolkit / Zustand",
    ],
    process: [
      {
        step: "01",
        title: "Mobile UX Wireframing",
        desc: "We design frictionless tap targets, bottom navigation patterns, and native gesture mechanics.",
      },
      {
        step: "02",
        title: "Frontend & Native Bridge Engineering",
        desc: "We build pixel-perfect UI screens and connect native device sensors, cameras, and local storage.",
      },
      {
        step: "03",
        title: "Backend APIs & Real-Time Sync",
        desc: "We connect the app to high-speed cloud backends with secure authentication and push notification queues.",
      },
      {
        step: "04",
        title: "Store Submission & Launch Support",
        desc: "We prepare screenshots, privacy disclosures, and metadata, managing the entire review process until live.",
      },
    ],
    whyWebczar: [
      "Expertise building both consumer marketplaces and enterprise B2B field apps",
      "Rigorous testing on physical iOS and Android test devices in our lab",
      "Full compliance with Apple App Tracking Transparency (ATT) and GDPR rules",
      "Post-launch version updates and OS compatibility maintenance",
    ],
    faqs: [
      {
        q: "Should we build natively or use React Native / Flutter?",
        a: "For 95% of modern consumer and business applications, React Native or Flutter delivers identical 60fps performance to native code while saving 40-50% in development time and ongoing maintenance.",
      },
      {
        q: "Do you assist with publishing the app on our own developer accounts?",
        a: "Yes! We manage the entire submission pipeline, including signing certificates, provisioning profiles, store listing assets, and developer account setup.",
      },
      {
        q: "How are in-app payments handled?",
        a: "For digital goods and subscriptions inside the app, we configure Apple In-App Purchase and Google Play Billing. For physical goods and services, we integrate Razorpay, Stripe, or Cashfree.",
      },
    ],
  },

  /* ─────────────── 9 · SEARCH ENGINE OPTIMIZATION (SEO) ─────────────── */
  {
    slug: "seo",
    aliases: ["search-engine-optimization", "seo-services"],
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO Dominance",
    badge: "Page 1 Organic Growth",
    category: "Growth & Marketing",
    shortDesc:
      "Proven technical and content SEO strategies that rank your business on Google Page 1 for high-intent transactional search queries.",
    heroHeadline: "Dominate Google Search Results for Commercial High-Intent Queries",
    heroSub:
      "Paid ads stop the second you pause your budget. Webczar Solutions builds permanent organic search dominance through deep technical audits, topical authority clusters, and high-impact white-hat outreach.",
    accentColor: "#00AA3C",
    stats: [
      { value: "250%+", label: "Average Organic Traffic Lift" },
      { value: "Top 3", label: "Rankings for Core Keywords" },
      { value: "100%", label: "White-Hat Compliant (No Penalties)" },
      { value: "95+", label: "Core Web Vitals Pass Rate" },
    ],
    overview: [
      "Ranking on Google today requires far more than stuffing keywords into blog posts. Google's modern helpful content and RankBrain algorithms evaluate technical performance, search intent alignment, topical depth, and genuine domain authority.",
      "Webczar Solutions implements rigorous technical SEO, programmatic content engines, semantic schema markup, and natural link acquisition that transforms your website into an organic traffic magnet that continuously generates leads 24/7.",
    ],
    features: [
      {
        title: "Deep Technical SEO Audits",
        desc: "Diagnosing crawl errors, indexation bottlenecks, canonical conflicts, redirect chains, and JavaScript rendering issues.",
      },
      {
        title: "Search Intent & Topical Clustering",
        desc: "Mapping out transactional keywords with high buying intent, structuring topic clusters that establish commanding niche authority.",
      },
      {
        title: "Core Web Vitals Speed Optimization",
        desc: "Minimizing Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) to pass Google audits.",
      },
      {
        title: "High-Authority Digital PR & Backlinks",
        desc: "Securing contextual editorial backlinks from high-DA publications through genuine digital PR and data-driven industry studies.",
      },
      {
        title: "Google Maps & Local SEO Dominance",
        desc: "Optimizing Google Business Profiles (GBP), local citations, and geo-targeted landing pages for local Tricity and regional searchers.",
      },
      {
        title: "Structured Data & Rich Snippet Schema",
        desc: "Deploying JSON-LD schema for FAQs, products, local business info, articles, and reviews to capture visual Google search real estate.",
      },
    ],
    deliverables: [
      "Comprehensive technical health audit & prioritized engineering fixes",
      "High-intent commercial keyword research roadmap with search volume data",
      "Optimized on-page metadata, header tags, and internal link restructuring",
      "High-quality monthly editorial link acquisition report",
      "Monthly ranking movements, organic impression gains & lead attribution reports",
    ],
    technologies: [
      "Google Search Console",
      "Ahrefs Enterprise",
      "SEMrush",
      "Screaming Frog SEO Spider",
      "Google Analytics 4",
      "Schema.org JSON-LD",
    ],
    process: [
      {
        step: "01",
        title: "Technical Audit & Cleanup",
        desc: "We eliminate crawling errors, fix indexation issues, and optimize speed to build a rock-solid foundation.",
      },
      {
        step: "02",
        title: "Keyword & Intent Architecture",
        desc: "We identify buyer-intent queries that competitors overlook and structure content clusters around them.",
      },
      {
        step: "03",
        title: "On-Page & Content Optimization",
        desc: "We optimize headings, semantic copy, image tags, schema markup, and internal link equity.",
      },
      {
        step: "04",
        title: "Authority Building & Monitoring",
        desc: "We execute white-hat outreach, track keyword movements weekly, and capitalize on emergent search trends.",
      },
    ],
    whyWebczar: [
      "Strict white-hat methodology protecting your website from algorithmic penalties",
      "Deep technical understanding because our team consists of software engineers, not just copywriters",
      "Focus on commercial search terms that drive paying customers, not empty vanity clicks",
      "Transparent reporting with direct Google Search Console data access",
    ],
    faqs: [
      {
        q: "How long does it take to see results from SEO?",
        a: "While technical fixes and low-hanging keyword rankings often yield visible improvements within 30 to 60 days, competitive commercial keywords typically achieve dominant Page 1 positions within 3 to 6 months.",
      },
      {
        q: "Do you guarantee #1 ranking on Google?",
        a: "No ethical agency can guarantee a #1 ranking because Google's algorithm changes constantly. We do, however, guarantee measurable growth in Page 1 visibility, organic impressions, and qualified inbound inquiries.",
      },
      {
        q: "Can you help optimize our local Google Business Profile?",
        a: "Yes! Our Local SEO package includes full Google Business Profile verification, review collection funnels, local citation building, and Google Maps ranking optimization.",
      },
    ],
  },

  /* ─────────────── 10 · GOOGLE ADS & PPC MANAGEMENT ─────────────── */
  {
    slug: "google-ads-ppc",
    aliases: ["ppc-management", "google-ads-agency"],
    title: "Google Ads & PPC Management",
    shortTitle: "Google Ads & PPC",
    badge: "High-ROI Paid Advertising",
    category: "Growth & Marketing",
    shortDesc:
      "Laser-focused Search, Display, Shopping, and Performance Max campaigns that capture active buyers at the exact moment of high commercial intent.",
    heroHeadline: "Capture Ready-to-Buy Prospects at the Exact Moment of Search",
    heroSub:
      "Stop burning ad budget on irrelevant clicks. Webczar Solutions builds granular Google Ads campaigns engineered with tight match-types, aggressive negative keyword lists, and high-converting landing pages.",
    accentColor: "#FF6A00",
    stats: [
      { value: "40%", label: "Average CPA Reduction" },
      { value: "4.2x", label: "Average Google Ads ROAS" },
      { value: "0%", label: "Wasted Clicks on Broad Match" },
      { value: "24/7", label: "Smart Bidding Optimization" },
    ],
    overview: [
      "Google Ads is the single fastest way to reach customers who are actively looking to buy your services right now. However, misconfigured campaigns, loose keyword match types, and poor landing pages can rapidly drain budgets without producing sales.",
      "Webczar Solutions approaches Google Ads with engineering discipline: surgical single-theme ad groups (STAGs), negative keyword scrubbing, smart bid automation, and dedicated conversion-optimized landing pages that turn expensive clicks into profitable revenue.",
    ],
    features: [
      {
        title: "Search Campaign Architecture",
        desc: "Tightly grouped exact and phrase match keywords with customized ad headlines tailored to search queries.",
      },
      {
        title: "Relentless Negative Keyword Scrubbing",
        desc: "Proactive negative keyword lists that eliminate tire-kickers, job seekers, and irrelevant traffic from day one.",
      },
      {
        title: "Performance Max (PMax) Optimization",
        desc: "Configuring high-performing asset groups with first-party customer audience signals across YouTube, Display, Search, and Gmail.",
      },
      {
        title: "Smart Remarketing Sequences",
        desc: "Re-engaging visitors who abandoned your forms or cart with persuasive discounts, testimonials, and reminder ads.",
      },
      {
        title: "Conversion Tracking & Call Tracking",
        desc: "End-to-end server-side conversion tracking and dynamic phone call attribution so every lead is matched to its keyword.",
      },
      {
        title: "Dedicated High-Converting Landing Pages",
        desc: "Custom high-speed landing pages built specifically for your ad campaigns to boost Google Quality Scores and lower CPCs.",
      },
    ],
    deliverables: [
      "Complete account audit, structure overhaul & competitive bid research",
      "Granular ad copy creation with continuous responsive search ad (RSA) A/B testing",
      "Custom conversion tracking setup in Google Tag Manager and GA4",
      "Negative keyword curation and weekly search term report reviews",
      "Transparent live dashboard with daily spend, clicks, leads, and CPA metrics",
    ],
    technologies: [
      "Google Ads Platform",
      "Google Tag Manager",
      "Google Analytics 4",
      "Google Merchant Center",
      "CallRail / Dynamic Number Insertion",
      "Unbounce / Next.js Landing Pages",
    ],
    process: [
      {
        step: "01",
        title: "Competitor & Search Query Research",
        desc: "We analyze competitor bids, search volume, and high-intent buyer queries in your specific target locations.",
      },
      {
        step: "02",
        title: "Campaign Build & Landing Pages",
        desc: "We write compelling ad copy, build dedicated landing pages, and configure full conversion tracking.",
      },
      {
        step: "03",
        title: "Soft Launch & Data Gathering",
        desc: "We launch with strict manual or enhanced CPC bidding to gather pure query data and eliminate wasted search terms.",
      },
      {
        step: "04",
        title: "Smart Bidding & Scale",
        desc: "Once conversion volume is established, we shift to automated Target CPA or Target ROAS bidding to scale volume.",
      },
    ],
    whyWebczar: [
      "You retain 100% ownership of your Google Ads account and billing",
      "We build custom landing pages that boost Google Quality Scores and reduce click costs",
      "Daily campaign monitoring and proactive negative keyword refinement",
      "Direct communication with dedicated certified Google Ads specialists",
    ],
    faqs: [
      {
        q: "What ad spend should I start with on Google Ads?",
        a: "We recommend a minimum ad spend of ₹30,000 to ₹75,000/month (or $1,000 to $2,500/month internationally) to allow Google's learning algorithm to collect enough conversion data quickly.",
      },
      {
        q: "Why are my existing Google Ads clicks not converting into leads?",
        a: "The most common reasons are sending ad traffic to a generic homepage, using loose broad match keywords, or having slow mobile load times. We fix all three.",
      },
      {
        q: "Do you manage Google Shopping campaigns for e-commerce?",
        a: "Yes! We manage Google Merchant Center product feeds, Shopping ads, and Performance Max e-commerce campaigns with dynamic product retargeting.",
      },
    ],
  },

  /* ─────────────── 11 · GRAPHIC DESIGN & BRANDING ─────────────── */
  {
    slug: "branding-design",
    aliases: ["graphic-design", "branding", "brand-identity"],
    title: "Graphic Design & Branding",
    shortTitle: "Branding & Design",
    badge: "Visual Identity & Brand Strategy",
    category: "Creative & Brand",
    shortDesc:
      "Iconic visual identities, logo marks, corporate design systems, and marketing collateral that leave an unforgettable impression.",
    heroHeadline: "Craft an Iconic Brand Identity That Commands Industry Respect",
    heroSub:
      "First impressions happen in milliseconds. Webczar Solutions creates distinctive brand identities, logo systems, packaging designs, and digital marketing collateral that turn businesses into market leaders.",
    accentColor: "#7928CA",
    stats: [
      { value: "200+", label: "Brand Identities Created" },
      { value: "100%", label: "Vector Vector-Perfect Scalability" },
      { value: "48h", label: "Initial Concept Delivery" },
      { value: "Full IP", label: "Complete Trademark Ownership" },
    ],
    overview: [
      "A great brand is not just a pretty logo — it is an emotional promise, an aesthetic tone, and a cohesive design language that communicates trust and authority at every customer touchpoint.",
      "Webczar Solutions' creative studio blends classical typography with modern design sensibilities to build comprehensive brand identity kits: logos, color harmonies, brand guidelines, corporate stationery, pitch decks, and digital campaign templates.",
    ],
    features: [
      {
        title: "Distinctive Logo Design & Vector Marks",
        desc: "Memorable, versatile primary logos, wordmarks, secondary badges, and favicons engineered for every medium.",
      },
      {
        title: "Comprehensive Brand Guidelines Book",
        desc: "Detailed documentation of brand rules, clearspace standards, color palettes (HEX, RGB, CMYK, Pantone), and typography scales.",
      },
      {
        title: "Corporate Stationery & Marketing Collateral",
        desc: "Business cards, letterheads, invoice templates, corporate presentation pitch decks, and email signatures.",
      },
      {
        title: "Packaging & Merchandise Design",
        desc: "Retail packaging, product boxes, bottle labels, hangtags, and branded company merchandise ready for print.",
      },
      {
        title: "Digital Marketing Asset Kits",
        desc: "Cohesive social media banner templates, display ad kits, infographics, and email newsletter layouts.",
      },
      {
        title: "Signage & Large Format Print",
        desc: "High-resolution hoardings, outdoor billboards, trade show booth banners, and indoor office branding.",
      },
    ],
    deliverables: [
      "Master vector files (AI, EPS, SVG, PDF) and web-ready formats (PNG, JPG)",
      "Comprehensive 30+ page Brand Style Guide PDF",
      "Commercial typography licensing guidance and color swatch specs",
      "Complete corporate stationery package and editable PowerPoint/Pitch deck",
      "Full copyright assignment and trademark release documentation",
    ],
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Figma Design Systems",
      "Adobe After Effects",
      "Pantone Color Systems",
    ],
    process: [
      {
        step: "01",
        title: "Brand Discovery & Moodboarding",
        desc: "We explore your company values, competitive positioning, customer psychology, and aesthetic benchmarks.",
      },
      {
        step: "02",
        title: "Concept Exploration & Sketching",
        desc: "We present distinct design directions with contextual mockups showing the logo in real-world applications.",
      },
      {
        step: "03",
        title: "Refinement & Brand Kit Assembly",
        desc: "We refine the chosen direction, perfecting typography kerning, color codes, and collateral layouts.",
      },
      {
        step: "04",
        title: "Asset Delivery & Brand Guidelines",
        desc: "We export the complete vector asset archive and deliver the master brand guidelines document.",
      },
    ],
    whyWebczar: [
      "Timeless, elegant aesthetics that avoid short-lived design fads",
      "Complete print-ready accuracy with CMYK and Pantone color separations",
      "Unrestricted commercial usage rights and complete intellectual property ownership",
      "Seamless integration with our web development and digital marketing squads",
    ],
    faqs: [
      {
        q: "What files will I receive upon project completion?",
        a: "You receive complete vector master files (AI, EPS, SVG), print-ready PDFs (CMYK 300DPI), and high-resolution web formats (PNG with transparent backgrounds, JPG, WebP) along with your master brand guide.",
      },
      {
        q: "How many logo concepts do you provide?",
        a: "We typically present 3 to 4 distinct, fully fleshed-out design concepts during our initial presentation, each showing typography, color psychology, and real-world mockups.",
      },
      {
        q: "Can you redesign or modernize our existing outdated logo?",
        a: "Yes! We specialize in brand refreshes that preserve your accumulated brand equity while modernizing the visual identity for digital-first applications.",
      },
    ],
  },

  /* ─────────────── 12 · YOUTUBE ADVERTISING ─────────────── */
  {
    slug: "youtube-advertising",
    aliases: ["youtube-ads", "video-marketing"],
    title: "YouTube Advertising & Video Marketing",
    shortTitle: "YouTube Ads",
    badge: "Video Marketing & High-Impact Ads",
    category: "Growth & Marketing",
    shortDesc:
      "Engaging video ad formats—Skippable in-stream, Non-skippable, and In-feed ads—that capture viewer attention and drive action.",
    heroHeadline: "Command Mass Attention and Drive High-Intent Video Conversions",
    heroSub:
      "Video is the most persuasive medium on earth. Webczar Solutions scripts, produces, and scales high-converting YouTube advertising campaigns that put your brand directly in front of targeted viewers.",
    accentColor: "#CC0000",
    stats: [
      { value: "70%+", label: "Average View-Through Rate" },
      { value: "₹0.35", label: "Average Cost Per View" },
      { value: "3.2x", label: "Higher Recall Than Static Ads" },
      { value: "100%", label: "Placement Verification" },
    ],
    overview: [
      "With over 2.5 billion active monthly users, YouTube is both the world's second-largest search engine and the undisputed leader in video consumption. When planned and targeted strategically, YouTube ads build unmatched brand credibility while generating lower-cost leads than traditional television or print.",
      "Webczar Solutions manages full-lifecycle YouTube advertising: hook-optimized scriptwriting, video editing, custom audience targeting, competitor channel placements, and conversion-optimized end-screen overlays.",
    ],
    features: [
      {
        title: "Skippable In-Stream Ads (TrueView)",
        desc: "You only pay when a viewer watches at least 30 seconds or interacts with your ad, giving you free brand exposure for quick skips.",
      },
      {
        title: "Non-Skippable 15s & 6s Bumper Ads",
        desc: "High-impact short-form video ads designed to deliver 100% message completion for massive brand recall.",
      },
      {
        title: "In-Feed Video Search Ads",
        desc: "Placing your videos at the top of YouTube search results when users look up specific topics or competitor reviews.",
      },
      {
        title: "Competitor Channel & Video Placement Targeting",
        desc: "Serving your ad directly on specific popular videos and channels watched by your exact target demographic.",
      },
      {
        title: "Scriptwriting & The 'First 5-Second' Hook",
        desc: "Crafting captivating opening hooks that stop viewers from clicking 'Skip Ad' and pull them into your story.",
      },
      {
        title: "Remarketing to YouTube Viewers",
        desc: "Retargeting people who viewed your YouTube channel or ads with Google Search and Meta Ads to seal the deal.",
      },
    ],
    deliverables: [
      "High-converting video script outlines with visual cues and CTA overlays",
      "Audience persona setup: custom intent, in-market segments, and placement lists",
      "Google Ads Video campaign buildout with budget scheduling",
      "Companion banner design and interactive call-to-action extensions",
      "Detailed view-through rate (VTR), watch time, and lead attribution reports",
    ],
    technologies: [
      "Google Ads Video",
      "YouTube Studio Analytics",
      "Google Tag Manager",
      "Adobe Premiere Pro",
      "After Effects Motion Graphics",
    ],
    process: [
      {
        step: "01",
        title: "Video Angle & Hook Strategy",
        desc: "We research your audience's core objections and craft a script designed to hook viewers in the first 5 seconds.",
      },
      {
        step: "02",
        title: "Video Assembly & Ad Packaging",
        desc: "We edit footage, add dynamic captions, motion graphics, and bold CTA cards to maximize click-throughs.",
      },
      {
        step: "03",
        title: "Granular Audience Placement",
        desc: "We curate high-performing channel lists, keyword targets, and viewer demographics to eliminate irrelevant impressions.",
      },
      {
        step: "04",
        title: "Performance Scaling & Optimization",
        desc: "We analyze drop-off curves, test new thumbnail variants, and shift budget toward the highest-converting video variations.",
      },
    ],
    whyWebczar: [
      "We focus on measurable conversions and sales leads, not just passive view counts",
      "Custom negative placement lists preventing ads from showing on low-value kids channels",
      "Deep understanding of YouTube's search and recommendation algorithm",
      "Integrated retargeting across Google Search and Meta social ecosystems",
    ],
    faqs: [
      {
        q: "Do I have to pay if someone skips my YouTube ad?",
        a: "No! For standard skippable in-stream ads, you only pay if the viewer watches at least 30 seconds of your video (or the full duration if shorter) or clicks your call-to-action button.",
      },
      {
        q: "What video length works best for YouTube Ads?",
        a: "For lead generation and direct response, videos between 45 and 90 seconds perform best. For brand awareness, 6-second bumper ads and 15-second non-skippable formats yield the highest recall.",
      },
      {
        q: "Can you target viewers of our competitors' YouTube channels?",
        a: "Yes! We can place your ads on specific videos and channels within your industry, putting your alternative solution right in front of their audience.",
      },
    ],
  },

  /* ─────────────── 13 · WHATSAPP BUSINESS MARKETING & API ─────────────── */
  {
    slug: "whatsapp-marketing",
    aliases: ["whatsapp-business-api", "whatsapp-automation"],
    title: "WhatsApp Business Marketing & API",
    shortTitle: "WhatsApp Marketing",
    badge: "Official WhatsApp Business API",
    category: "Direct Messaging & Telephony",
    shortDesc:
      "Official green-tick WhatsApp Business API integration, broadcast automations, and interactive chatbots with 98% open rates.",
    heroHeadline: "Connect, Automate, and Sell on the World's #1 Messaging App",
    heroSub:
      "Your customers live on WhatsApp. Webczar Solutions integrates the official Meta WhatsApp Business API, builds intelligent 24/7 chatbots, and automates high-converting broadcast campaigns with verified green ticks.",
    accentColor: "#25D366",
    stats: [
      { value: "98%", label: "Message Open Rate" },
      { value: "45%", label: "Average Click-Through Rate" },
      { value: "24/7", label: "Automated Instant Replies" },
      { value: "100%", label: "Official Meta API Compliance" },
    ],
    overview: [
      "WhatsApp is the undisputed champion of direct-to-consumer communication in India and worldwide. With open rates 5x higher than email, businesses that leverage WhatsApp for lead nurturing, order confirmations, and customer support achieve dramatically higher conversions.",
      "Webczar Solutions helps brands unlock the full power of the official Meta WhatsApp Business API: obtaining the verified Green Tick, setting up conversational AI chatbots, deploying compliant bulk broadcast campaigns, and integrating webhooks directly with your CRM.",
    ],
    features: [
      {
        title: "Official Meta WhatsApp Business API Onboarding",
        desc: "Seamless setup without phone bans, enabling multi-agent shared inboxes and high-volume message broadcasts.",
      },
      {
        title: "Official Green Tick Verification Assistance",
        desc: "Complete documentation guidance to earn the prestigious green checkmark badge next to your company name.",
      },
      {
        title: "Interactive AI Chatbots & Auto-Responders",
        desc: "Automated FAQ resolution, catalog browsing, appointment scheduling, and lead qualification running 24/7.",
      },
      {
        title: "Automated Abandoned Cart & Order Alerts",
        desc: "Direct e-commerce webhooks triggering abandoned cart reminders, order dispatch notifications, and COD confirmations.",
      },
      {
        title: "Targeted Segmented Broadcasts",
        desc: "Send personalized rich media messages (images, videos, PDFs, interactive CTA buttons) to opt-in customer lists.",
      },
      {
        title: "CRM & Live Agent Routing",
        desc: "Assign incoming chats to specific sales or support reps based on department, language, or lead value.",
      },
    ],
    deliverables: [
      "Full Meta Business Manager verification & WhatsApp Cloud API configuration",
      "Interactive conversational bot flows with custom button menus",
      "Pre-approved template message setup for marketing, utility & authentication",
      "CRM webhook integration (HubSpot, Shopify, WooCommerce, Zoho)",
      "Multi-agent shared team inbox setup and staff training",
    ],
    technologies: [
      "Meta WhatsApp Cloud API",
      "WATI / AiSensy / Gupshup Gateways",
      "Webhook Automation",
      "OpenAI Bot Integration",
      "Node.js API Connectors",
      "Shopify / WooCommerce Webhooks",
    ],
    process: [
      {
        step: "01",
        title: "Business Verification & API Setup",
        desc: "We verify your Meta Business Manager and register your official phone number on the WhatsApp Cloud API.",
      },
      {
        step: "02",
        title: "Template Drafting & Approval",
        desc: "We write compliant message templates and submit them to Meta for instant category approval.",
      },
      {
        step: "03",
        title: "Chatbot & Webhook Automation",
        desc: "We build intuitive conversational chatbot decision trees and link customer events from your website.",
      },
      {
        step: "04",
        title: "Broadcast Campaigns & Scaling",
        desc: "Launch targeted marketing messages, track read and click receipts, and scale your daily messaging tier.",
      },
    ],
    whyWebczar: [
      "Official Meta-compliant infrastructure avoiding risk of number bans",
      "End-to-end integration with your website and sales CRM",
      "Deep expertise in conversational copywriting and interactive UI buttons",
      "Ongoing management of template approvals and messaging tier upgrades",
    ],
    faqs: [
      {
        q: "What is the difference between WhatsApp Business App and WhatsApp API?",
        a: "The standard mobile app is limited to 1 phone, manual messaging, and 256 broadcast contacts. The official API supports unlimited contacts, multi-agent shared inboxes, automated chatbots, and green tick verification.",
      },
      {
        q: "Can my WhatsApp number get blocked when sending broadcasts?",
        a: "Not when using the official WhatsApp Business API with approved templates and opted-in contacts. We ensure 100% compliance with Meta's messaging policies.",
      },
      {
        q: "Can WhatsApp send automated order updates from my Shopify store?",
        a: "Yes! We can configure instant automated alerts for order confirmations, shipping tracking numbers, and abandoned cart recovery.",
      },
    ],
  },

  /* ─────────────── 14 · IVR SOLUTIONS & CLOUD TELEPHONY ─────────────── */
  {
    slug: "ivr-solutions",
    aliases: ["ivr-services", "cloud-telephony"],
    title: "IVR Solutions & Cloud Telephony",
    shortTitle: "IVR Solutions",
    badge: "Cloud Telephony & Smart Call Routing",
    category: "Direct Messaging & Telephony",
    shortDesc:
      "Intelligent cloud-based interactive voice response (IVR) systems, automated call routing, virtual numbers, and CRM recording.",
    heroHeadline: "Never Miss a High-Value Customer Call Again",
    heroSub:
      "Present a commanding corporate phone presence. Webczar Solutions designs multi-level IVR phone menus, virtual 10-digit and toll-free numbers, automated call distribution, and live CRM lead logging.",
    accentColor: "#D97706",
    stats: [
      { value: "0", label: "Missed Inbound Sales Calls" },
      { value: "24/7", label: "Automated Voice Assistant" },
      { value: "100%", label: "Call Recording & Analytics" },
      { value: "1800", label: "Toll-Free & 10-Digit Numbers" },
    ],
    overview: [
      "First impressions matter on the phone. Having customer calls ring directly to an individual mobile phone risks missed opportunities, unanswered queries outside office hours, and zero institutional call data.",
      "Webczar Solutions implements enterprise cloud telephony and interactive voice response (IVR) systems that greet callers professionally, route inquiries automatically to available agents, and record every conversation directly into your CRM.",
    ],
    features: [
      {
        title: "Multi-Level Interactive Voice Menus",
        desc: "Custom multi-language voice menus ('Press 1 for Sales, Press 2 for Support') with studio-quality recorded audio prompts.",
      },
      {
        title: "Virtual Toll-Free & 10-Digit Numbers",
        desc: "Instantly deploy memorable 1800 toll-free or regional virtual numbers without requiring any physical PBX hardware.",
      },
      {
        title: "Simultaneous & Round-Robin Call Routing",
        desc: "Ring all sales agents at once or route calls sequentially to ensure the fastest possible customer connection.",
      },
      {
        title: "Call Recording & Agent Monitoring",
        desc: "Automated recording of all inbound and outbound calls for quality control, staff training, and dispute resolution.",
      },
      {
        title: "Real-Time CRM Webhook Integration",
        desc: "Automatically create a new lead in your CRM the moment a phone rings, logging caller ID, time, and recording link.",
      },
      {
        title: "After-Hours Voicemail & Call Scheduling",
        desc: "Capture customer voicemail or schedule automated morning callback reminders when customers call outside business hours.",
      },
    ],
    deliverables: [
      "Provisioning of virtual 10-digit or 1800 toll-free phone number",
      "Studio recording of multi-lingual greeting prompts (English, Hindi, Punjabi)",
      "Custom routing decision tree configuration and agent mobile whitelisting",
      "Live cloud telephony dashboard with call records and audio playback",
      "Webhook sync with CRM (HubSpot, LeadSquared, Zoho, Google Sheets)",
    ],
    technologies: [
      "Cloud Telephony APIs",
      "Virtual Number Exchanges",
      "Webhooks & REST APIs",
      "VoIP / SIP Trunking",
      "CRM CTI Integrations",
    ],
    process: [
      {
        step: "01",
        title: "Call Flow Architecture",
        desc: "We map your department structures, working hours, overflow rules, and agent assignment hierarchy.",
      },
      {
        step: "02",
        title: "Voice Prompt Production",
        desc: "We script and record professional, pleasant voice greetings tailored to your brand personality.",
      },
      {
        step: "03",
        title: "Virtual Routing Configuration",
        desc: "We configure hunting lines, agent mobile forwards, call queues, and voicemail drops.",
      },
      {
        step: "04",
        title: "Testing & CRM Integration",
        desc: "We test simulated caller scenarios, link call recordings to your CRM, and train your team.",
      },
    ],
    whyWebczar: [
      "Zero on-premise hardware required — operates 100% on the cloud via agents' regular phones",
      "Instant SMS alerts sent to both caller and agent after every completed or missed call",
      "Crystal-clear voice quality with redundant telecom carrier lines",
      "Flexible monthly plans tailored to your expected inbound call volume",
    ],
    faqs: [
      {
        q: "Do our agents need special office desk phones to use IVR?",
        a: "No! Calls are routed directly to your agents' existing mobile phones or softphones without requiring any special hardware or apps.",
      },
      {
        q: "What happens if all agents are busy or someone calls after hours?",
        a: "The caller hears a customized polite message offering to hold in a queue, leave a voice message, or receive an automatic morning callback. An instant notification is sent to your management team.",
      },
      {
        q: "Can we listen to recordings of our sales team's calls?",
        a: "Yes! Every call is recorded and immediately accessible in your secure online dashboard and linked directly to the contact record in your CRM.",
      },
    ],
  },

  /* ─────────────── 15 · AI & MACHINE LEARNING SOLUTIONS ─────────────── */
  {
    slug: "ai-machine-learning",
    aliases: ["ai-solutions", "machine-learning", "custom-ai"],
    title: "AI & Machine Learning Solutions",
    shortTitle: "AI & Machine Learning",
    badge: "Intelligent Automation & Custom AI",
    category: "Next-Gen AI & Web3",
    shortDesc:
      "Cutting-edge artificial intelligence, custom LLM fine-tuning, RAG enterprise search, and predictive analytics models that automate workflows.",
    heroHeadline: "Harness Frontier Artificial Intelligence to Automate Operations",
    heroSub:
      "AI is redefining operational leverage. Webczar Solutions develops autonomous AI agents, enterprise Retrieval-Augmented Generation (RAG) search, and custom predictive models that save thousands of employee hours.",
    accentColor: "#8B5CF6",
    stats: [
      { value: "70%", label: "Manual Workflow Reduction" },
      { value: "< 500ms", label: "AI Agent Response Latency" },
      { value: "100%", label: "Proprietary Data Privacy" },
      { value: "24/7", label: "Autonomous Business Processing" },
    ],
    overview: [
      "Artificial intelligence is no longer theoretical — it is a decisive competitive moat. Companies that integrate custom AI workflows process data 10x faster, deliver instant 24/7 customer service, and unlock hidden insights from messy internal databases.",
      "Webczar Solutions builds enterprise-grade AI applications using modern foundation models (OpenAI, Anthropic Claude, Google Gemini, and open-source Llama). We build secure, hallucination-free Retrieval-Augmented Generation (RAG) architectures that query your proprietary documents safely without leaking sensitive company IP.",
    ],
    features: [
      {
        title: "Enterprise RAG (Retrieval-Augmented Generation)",
        desc: "Instant, hallucination-free AI search across internal PDFs, manuals, knowledge bases, and customer support tickets.",
      },
      {
        title: "Autonomous Tool-Calling AI Agents",
        desc: "AI agents capable of executing multi-step tasks: querying databases, drafting contracts, scheduling meetings, and sending emails.",
      },
      {
        title: "Proprietary LLM Fine-Tuning",
        desc: "Fine-tuning open-source and proprietary models on your specialized industry terminology and tone of voice.",
      },
      {
        title: "Predictive Analytics & Churn Forecasting",
        desc: "Machine learning models that analyze historical transaction data to predict customer churn, lifetime value, and demand surges.",
      },
      {
        title: "Computer Vision & Document OCR",
        desc: "Automated extraction and classification of data from invoices, identity documents, receipts, and scans.",
      },
      {
        title: "Secure On-Premise & Private Cloud AI",
        desc: "Deploying self-hosted open-source models (Llama 3, Mistral) within your private VPC for strict data compliance.",
      },
    ],
    deliverables: [
      "Full AI solution architecture, data ingest pipelines & vector database setup",
      "Interactive web chat interface or API endpoints for internal software integration",
      "Comprehensive evaluation harness benchmark testing accuracy and latency",
      "Strict data privacy controls and token cost optimization telemetry",
      "Ongoing prompt engineering, model updates, and maintenance support",
    ],
    technologies: [
      "Python / PyTorch",
      "OpenAI / Anthropic / Gemini APIs",
      "LangChain & LlamaIndex",
      "Pinecone / pgvector / Qdrant",
      "Hugging Face & Ollama",
      "FastAPI & Docker",
    ],
    process: [
      {
        step: "01",
        title: "AI Opportunity Audit",
        desc: "We analyze your most time-consuming operational workflows, data sources, and repetitive human touchpoints.",
      },
      {
        step: "02",
        title: "Data Ingestion & Vector Pipeline",
        desc: "We clean, chunk, embed, and store your company knowledge base in high-performance vector databases.",
      },
      {
        step: "03",
        title: "Agent Architecture & Prompt Engineering",
        desc: "We build the AI agent logic, tool-calling webhooks, safety guardrails, and user interfaces.",
      },
      {
        step: "04",
        title: "Testing, Benchmark & Deployment",
        desc: "We rigorously test for hallucination resistance, measure latency, and deploy with real-time cost telemetry.",
      },
    ],
    whyWebczar: [
      "Zero hallucination risk with verified citation citations back to source documents",
      "Complete data privacy: your proprietary business data is never used to train public models",
      "Specialized prompt engineering and token-budget optimization keeping operating costs low",
      "Full-stack capability bridging deep learning models with consumer-grade UI design",
    ],
    faqs: [
      {
        q: "Will our proprietary business data be exposed or used to train public AI models?",
        a: "Never. We enforce strict enterprise zero-data-retention APIs and can deploy entirely self-hosted, air-gapped open-source models (such as Llama 3) inside your private cloud.",
      },
      {
        q: "How does Retrieval-Augmented Generation (RAG) prevent AI hallucinations?",
        a: "RAG constrains the AI to answer exclusively using retrieved passages from your verified internal documents. If the answer does not exist in your files, the model is instructed to say so rather than guess.",
      },
      {
        q: "How much does it cost to run custom AI applications?",
        a: "Modern frontier API token costs have dropped by over 90% in recent years. Most small-to-medium enterprise AI workloads run for less than $50 to $200 per month in raw compute and token costs.",
      },
    ],
  },

  /* ─────────────── 16 · BLOCKCHAIN & WEB3 DEVELOPMENT ─────────────── */
  {
    slug: "blockchain-development",
    aliases: ["web3-development", "smart-contracts"],
    title: "Blockchain & Web3 Development",
    shortTitle: "Blockchain & Web3",
    badge: "Decentralized Web3 & Smart Contracts",
    category: "Next-Gen AI & Web3",
    shortDesc:
      "Secure smart contracts, decentralized applications (dApps), tokenomics, and enterprise private blockchain architectures.",
    heroHeadline: "Build Secure, Audited Decentralized Applications & Smart Contracts",
    heroSub:
      "Web3 enables verifiable ownership and trustless transactions. Webczar Solutions engineers battle-tested smart contracts, non-custodial decentralized apps (dApps), and enterprise private ledger solutions.",
    accentColor: "#0F172A",
    stats: [
      { value: "$0", label: "Hacks or Vulnerabilities" },
      { value: "100%", label: "Formally Audited Contracts" },
      { value: "EVM", label: "Ethereum, Polygon, Solana, BNB" },
      { value: "Full Stack", label: "Web3 Frontend & Smart Contracts" },
    ],
    overview: [
      "In decentralized technology, code is law. A single vulnerability in a smart contract can cause catastrophic, irreversible financial loss. Webczar Solutions approaches blockchain engineering with the highest standard of formal verification, gas optimization, and comprehensive security testing.",
      "Whether you are building a decentralized finance protocol, real-world asset (RWA) tokenization platform, private supply-chain ledger, or cross-chain NFT ecosystem, our engineering team brings deep cryptography and distributed systems expertise.",
    ],
    features: [
      {
        title: "Secure Solidity & Rust Smart Contracts",
        desc: "Gas-optimized, formally verified smart contracts built with ReentrancyGuard, OpenZeppelin standards, and comprehensive test suites.",
      },
      {
        title: "Full-Stack dApp Engineering",
        desc: "Seamless Web3 frontends with multi-wallet connectivity (MetaMask, WalletConnect, Phantom, Coinbase Wallet).",
      },
      {
        title: "Tokenomics & Protocol Architecture",
        desc: "Mathematical modeling of token supply, staking yields, deflationary burning mechanisms, and vesting schedules.",
      },
      {
        title: "Real-World Asset (RWA) Tokenization",
        desc: "Digitizing ownership shares of real estate, luxury art, and corporate debt onto transparent blockchain ledgers.",
      },
      {
        title: "Private Enterprise Hyperledger Networks",
        desc: "Permissioned distributed ledgers for banking consortiums, healthcare data sharing, and supply-chain track-and-trace.",
      },
      {
        title: "Comprehensive Security Auditing",
        desc: "Static analysis with Slither and Mythril, unit fuzzing, and manual code line-by-line vulnerability reviews.",
      },
    ],
    deliverables: [
      "Production-ready, audited smart contract source code and deployment scripts",
      "Complete Hardhat / Foundry test suites with 100% branch code coverage",
      "Full-stack Web3 Next.js dApp repository with web3.js / viem integration",
      "Detailed tokenomics whitepaper and mathematical balance sheet",
      "Testnet and Mainnet deployment assistance with verified source code on Etherscan",
    ],
    technologies: [
      "Solidity / Rust",
      "Foundry / Hardhat",
      "Ethereum / Polygon / Arbitrum",
      "Solana / Anchor",
      "Ethers.js / Viem / Wagmi",
      "OpenZeppelin Contracts",
      "IPFS / Arweave",
    ],
    process: [
      {
        step: "01",
        title: "Architecture & Tokenomics Blueprint",
        desc: "We define the state machine, user roles, token flows, and access control permissions.",
      },
      {
        step: "02",
        title: "Contract Engineering & Unit Fuzzing",
        desc: "We code the smart contracts using modern standards, writing extensive property-based and invariant tests.",
      },
      {
        step: "03",
        title: "Security Auditing & Gas Optimization",
        desc: "We audit for reentrancy, integer overflows, front-running vulnerabilities, and optimize storage slots to slash gas fees.",
      },
      {
        step: "04",
        title: "Testnet Verification & Mainnet Launch",
        desc: "We deploy to testnets, run live user beta simulations, verify contracts on explorers, and execute multi-sig mainnet launch.",
      },
    ],
    whyWebczar: [
      "Impeccable security record with zero smart contract vulnerabilities in production",
      "Full-stack expertise bridging low-level EVM bytecode with sleek consumer web frontends",
      "Multi-chain proficiency spanning Ethereum, Polygon, Arbitrum, BSC, and Solana",
      "Transparent milestone-based code delivery and client repository handoff",
    ],
    faqs: [
      {
        q: "How do you ensure smart contract security before deployment?",
        a: "We follow industry-standard defensive programming: integrating OpenZeppelin libraries, running static analyzers (Slither), conducting extensive Foundry fuzz tests, and executing manual line-by-line audits.",
      },
      {
        q: "Which blockchain network is best for our project?",
        a: "We help you choose based on transaction speed, gas fees, and target audience. High-volume consumer dApps typically launch on Polygon or Arbitrum, while enterprise protocols often prefer Ethereum Mainnet.",
      },
      {
        q: "Can users interact with our dApp without paying crypto gas fees?",
        a: "Yes! We can implement Account Abstraction (ERC-4337) and meta-transactions so your company can sponsor gas fees, allowing users to sign in with standard Google logins without needing a crypto wallet.",
      },
    ],
  },

  /* ─────────────── 17 · PODCAST SHOOT, SHORT REELS DESIGN ─────────────── */
  {
    slug: "podcast-reels-production",
    aliases: ["podcast-shoot", "short-reels-design", "reels-production"],
    title: "Podcast Shoot, Short Reels Design",
    shortTitle: "Podcast & Short Reels",
    badge: "Studio & Viral Reels",
    category: "Add-On Services",
    shortDesc:
      "Turnkey multi-camera studio podcast shoots and high-retention vertical short reels engineered for viral reach on Instagram, YouTube Shorts, and TikTok.",
    heroHeadline: "Studio-Grade Podcast Production & Viral Short-Form Video Content",
    heroSub:
      "Transform long-form conversations into magnetic brand assets. Webczar provides turnkey multi-camera podcast recording, dynamic editing, animated captions, and bite-sized viral reels that capture attention across all social platforms.",
    accentColor: "#F43F5E",
    stats: [
      { value: "4K / 6K", label: "Multi-Cam Cinema Recording" },
      { value: "10x", label: "Social Media Reach & Engagement" },
      { value: "24-48h", label: "Reels Delivery Turnaround" },
      { value: "100%", label: "Platform-Optimized Formats" },
    ],
    overview: [
      "In today's algorithmic landscape, high-production video is the single most powerful driver of brand authority and consumer trust. Webczar's Podcast & Short Reels production unit delivers an end-to-end studio experience — from acoustic setup and cinema cameras to micro-clip sequencing.",
      "We record full-length podcast episodes with crystal-clear audio and multiple camera angles, then slice the most compelling hooks, debates, and insights into high-energy reels complete with animated subtitles, B-roll overlays, and custom sound design tailored to Instagram, TikTok, and YouTube Shorts.",
    ],
    features: [
      {
        title: "Multi-Cam Cinema Studio Recording",
        desc: "State-of-the-art Sony FX / Blackmagic 4K/6K cinema cameras, broadcast Shure SM7B microphones, and multi-angle studio lighting.",
      },
      {
        title: "High-Retention Vertical Reels",
        desc: "Fast-paced editing with hook optimization, motion typography, trending audio cues, and dynamic visual cutaways that maximize watch time.",
      },
      {
        title: "On-Location & Remote Recording",
        desc: "Flexible production options including private Tricity studio recording, corporate on-site shoots, and studio-grade remote video capture.",
      },
      {
        title: "Full Post-Production & Sound Mastering",
        desc: "Professional audio denoising, vocal enhancement, color grading, thumbnail design, and multi-platform aspect ratio exports (9:16, 16:9, 1:1).",
      },
    ],
    deliverables: [
      "Master full-length 4K podcast episode recording & audio tracks",
      "Pack of 10 to 30 edited viral vertical reels with custom animated captions",
      "High-converting video thumbnails and YouTube cover artwork",
      "Audiograms, teaser snippets, and promotional social media assets",
      "Full raw media footage archive and project files",
    ],
    technologies: [
      "Sony FX6 / FX3 Cinema Cameras",
      "Shure SM7B Broadcast Mics",
      "Adobe Premiere Pro & DaVinci Resolve",
      "After Effects Motion Typography",
      "Descript & Submagic AI Workflows",
    ],
    process: [
      { step: "01", title: "Concept & Scripting", desc: "Topic structuring, talking points, and hook strategy tailored for viral retention." },
      { step: "02", title: "Studio Production", desc: "Multi-camera shoot with dedicated sound engineer and director guiding the recording." },
      { step: "03", title: "Episode Master", desc: "Multi-track audio mastering, camera switching, color grading, and chaptering." },
      { step: "04", title: "Viral Reels Slicing", desc: "Selecting high-impact moments, motion subtitles, B-roll, and platform delivery." },
    ],
    whyWebczar: [
      "Full-service media studio and production team with broadcast-level gear",
      "Data-backed hook editing proven to boost algorithmic reach on Meta & YouTube",
      "Fast 48-hour turnarounds on reels so your content stays timely and relevant",
      "Integrated marketing alignment with your wider Webczar brand campaigns",
    ],
    faqs: [
      {
        q: "Where does the podcast shoot take place?",
        a: "We offer dedicated studio facilities in the Tricity region equipped with professional acoustic treatment, or our mobile production crew can set up at your corporate office or event venue.",
      },
      {
        q: "How many reels do you create from one podcast episode?",
        a: "Typically, a 45-to-60-minute podcast episode yields between 10 to 25 high-retention short reels, giving you weeks of daily viral social media content.",
      },
      {
        q: "Do you provide teleprompter and interview hosting assistance?",
        a: "Yes! We provide on-site interviewers, teleprompters, topic guidelines, and prep coaching to ensure speakers sound confident, natural, and authoritative.",
      },
    ],
  },

  /* ─────────────── 18 · ONLINE PR ARTICLE PUBLISH SERVICES ─────────────── */
  {
    slug: "online-pr-article-publishing",
    aliases: ["pr-article-publish", "online-pr-services", "press-release-publishing"],
    title: "Online PR Article Publish Services",
    shortTitle: "Online PR Publishing",
    badge: "Media & Brand Authority",
    category: "Add-On Services",
    shortDesc:
      "Guaranteed editorial placements and press release publications in tier-1 digital news outlets and high-DA media publications for brand authority and SEO credibility.",
    heroHeadline: "Guaranteed Placements in High-Authority Digital News & Media Outlets",
    heroSub:
      "Cement your market leadership. Webczar secures guaranteed editorial articles, brand feature stories, and syndicated press releases across top-tier national and international digital publications to boost trust, verification, and organic search ranking.",
    accentColor: "#0284C7",
    stats: [
      { value: "100+", label: "Verified Media Publication Partners" },
      { value: "100%", label: "Guaranteed Article Indexing" },
      { value: "DA 70+", label: "High-Authority News Outlets" },
      { value: "3-5 Days", label: "Rapid Publication Turnaround" },
    ],
    overview: [
      "Credibility is the ultimate conversion multiplier. When prospective clients, investors, or partners search for your company, tier-1 news coverage establishes instant legitimacy that no paid ad can match. Webczar's Online PR Article Publishing service bridges your brand directly to established journalists and reputable media portals.",
      "We handle the entire editorial cycle — investigative angle framing, professional journalism copywriting, editorial review compliance, and guaranteed publication on leading national and international news outlets with live links and permanent Google indexing.",
    ],
    features: [
      {
        title: "Guaranteed High-DA News Placements",
        desc: "Published placements on prominent national newspapers, business magazines, and digital news portals with Domain Authority scores up to 85+.",
      },
      {
        title: "Journalistic Brand Storytelling",
        desc: "Compelling feature stories drafted by seasoned PR writers highlighting your company's milestones, innovations, leadership, and unique market value.",
      },
      {
        title: "Google News & Rapid Indexing",
        desc: "All published articles are submitted for rapid indexing so your brand dominates organic Google page-one search results for company and executive queries.",
      },
      {
        title: "High-Power SEO Backlinks",
        desc: "Do-follow and high-trust editorial brand mentions that supercharge your primary domain's search engine authority and search rankings.",
      },
    ],
    deliverables: [
      "Professionally drafted, journalistic 800–1,200 word feature article or press release",
      "Live published article URLs on agreed media publications with permanent hosting",
      "Google News index verification and live search confirmation",
      "High-resolution 'As Featured In' media badges for your website and pitch decks",
      "Comprehensive publication report with readership and backlink metrics",
    ],
    technologies: [
      "Tier-1 News Wires & Syndication Networks",
      "Google News & Knowledge Graph Optimization",
      "Editorial Compliance & Legal Review Workflows",
      "Ahrefs & SEMrush Link Authority Audits",
    ],
    process: [
      { step: "01", title: "Angle Discovery", desc: "Uncovering your unique story hooks, achievements, or product launches." },
      { step: "02", title: "Copywriting", desc: "Journalistic drafting following editorial AP standards to pass publication screening." },
      { step: "03", title: "Editorial Submission", desc: "Direct distribution to targeted news desks and media editorial boards." },
      { step: "04", title: "Go-Live & Indexing", desc: "Live publication verification, Google News indexing, and coverage reporting." },
    ],
    whyWebczar: [
      "Direct relationships with premium news editors guaranteeing live publication",
      "Fast turnaround times of 3 to 5 business days from draft sign-off",
      "Permanent placement guarantees — your articles stay online indefinitely",
      "Social proof assets ('As Seen On') provided to boost your landing page conversion rates",
    ],
    faqs: [
      {
        q: "Are the article publications guaranteed?",
        a: "Yes. Unlike speculative PR pitching, our PR Article Publishing service utilizes guaranteed editorial slots. Your article is approved and published on the selected outlets or you receive a full refund.",
      },
      {
        q: "Can we review and approve the article before it goes live?",
        a: "Absolutely. Our copywriters work closely with you, and no article is submitted for publication without your 100% written approval on every word and image.",
      },
      {
        q: "Will the published articles appear in Google Search?",
        a: "Yes! All partner publications are crawled by Googlebot and indexed in Google Search and Google News, often ranking on page one within hours of going live.",
      },
    ],
  },

  /* ─────────────── 19 · IVR - INTERACTIVE VOICE RESPONSE ─────────────── */
  {
    slug: "ivr-incoming-call-solutions",
    aliases: ["ivr-solutions", "interactive-voice-response", "incoming-call-solutions"],
    title: "IVR - Interactive Voice Response for Incoming Call Solutions",
    shortTitle: "IVR Call Solutions",
    badge: "Telephony & 24/7 Voice",
    category: "Add-On Services",
    shortDesc:
      "Intelligent multi-tier IVR phone systems, automated department call routing, and studio voiceovers integrated seamlessly with your CRM and VoIP telephony.",
    heroHeadline: "Intelligent IVR & Incoming Call Routing That Never Misses a Customer",
    heroSub:
      "Deliver professional, enterprise-grade phone experiences from the first ring. Webczar engineers custom Interactive Voice Response (IVR) architectures that automate call distribution, qualify callers, and connect prospects to the right team instantly.",
    accentColor: "#10B981",
    stats: [
      { value: "0%", label: "Missed Inbound Customer Calls" },
      { value: "< 2s", label: "Instant Department Routing" },
      { value: "24/7/365", label: "Automated Attendant Uptime" },
      { value: "100%", label: "CRM & Call Recording Sync" },
    ],
    overview: [
      "First impressions happen on the phone. Long hold times, dropped calls, and chaotic manual transfers cost businesses thousands in lost sales every week. Webczar designs intelligent IVR (Interactive Voice Response) systems that greet every caller with a studio-recorded brand voice and route them smoothly to the right agent.",
      "From multi-lingual greeting trees and after-hours voicemail-to-WhatsApp notifications to CRM caller-ID lookups and call recording, our incoming call infrastructure scales effortlessly whether you handle 50 calls a day or 50,000.",
    ],
    features: [
      {
        title: "Multi-Tier Menu & Department Routing",
        desc: "Intuitive touch-tone and speech-recognition menus ('Press 1 for Sales, 2 for Support') with smart agent ring groups and overflow routing.",
      },
      {
        title: "Studio Voiceover & Brand Audio",
        desc: "Custom voice talent recording in English, Hindi, Punjabi, and global accents with professional background audio and zero robotic artifacts.",
      },
      {
        title: "CRM & WhatsApp Call Synchronization",
        desc: "Real-time sync with Salesforce, HubSpot, Zoho, and LeadSquared. Missed calls automatically trigger instant WhatsApp or SMS alerts to sales reps.",
      },
      {
        title: "Analytics, Recording & Quality Monitoring",
        desc: "Live dashboard tracking call volumes, peak hours, hold times, agent response rates, and automated cloud call audio recordings.",
      },
    ],
    deliverables: [
      "Configured cloud IVR PBX phone architecture with virtual numbers",
      "Studio-recorded voiceover audio files for all menu branches and hold states",
      "Multi-department call routing rules, round-robin schedules, and failover numbers",
      "CRM webhook integration for automatic lead creation and call log attachment",
      "Web-based admin portal with real-time call logs, recordings, and analytics",
    ],
    technologies: [
      "Twilio & Exotel Voice APIs",
      "Asterisk & FreePBX Telephony Engines",
      "WebRTC & SIP Trunking Infrastructure",
      "HubSpot, Zoho & Salesforce Webhooks",
      "WhatsApp Business API Instant Failover",
    ],
    process: [
      { step: "01", title: "Call Flow Architecture", desc: "Mapping department trees, escalation rules, operating hours, and failovers." },
      { step: "02", title: "Voice Recording", desc: "Studio voice talent recording all menu greetings, prompts, and hold music." },
      { step: "03", title: "Telephony Integration", desc: "Number porting, SIP routing, CRM webhooks, and agent extensions setup." },
      { step: "04", title: "Stress Testing & Launch", desc: "Concurrent load testing, audio quality validation, and live go-live support." },
    ],
    whyWebczar: [
      "Enterprise telephony expertise with 99.99% uptime architecture",
      "Zero missed calls: automated WhatsApp follow-ups triggered instantly for any unanswered call",
      "Deep integration with your existing CRM and sales dashboards",
      "Cost-effective cloud virtual numbers without expensive hardware installations",
    ],
    faqs: [
      {
        q: "Can we keep our existing business phone numbers?",
        a: "Yes! We can easily forward your existing business number to the IVR trunk or initiate number porting so your customers continue dialing the familiar number without interruption.",
      },
      {
        q: "What happens when someone calls outside of business hours?",
        a: "The IVR can play an after-hours greeting, capture the caller's message, record their voicemail, and immediately dispatch a notification with audio to your team's WhatsApp and email.",
      },
      {
        q: "How many agents can receive calls simultaneously?",
        a: "Our cloud IVR architecture supports unlimited simultaneous incoming lines and agents with round-robin, priority, or simultaneous ringing.",
      },
    ],
  },

  /* ─────────────── 20 · AERIAL DRONE VIDEOGRAPHY ─────────────── */
  {
    slug: "aerial-drone-videography",
    aliases: ["drone-videography", "aerial-videography", "project-showcase-videos", "drone-shoot"],
    title: "Aerial Drone Videography",
    shortTitle: "Aerial Drone Videography",
    badge: "Cinematic Aerial Footage",
    category: "Add-On Services",
    shortDesc:
      "Professional aerial video footage of property and infrastructure projects from above, paired with cinematic walkthroughs and promotional showcase videos.",
    heroHeadline: "Professional Aerial Video Footage & Cinematic Project Showcase Films",
    heroSub:
      "Showcase your real estate developments, commercial properties, and infrastructure projects from a breathtaking perspective. Webczar provides DGCA-compliant 4K/6K aerial drone videography and cinematic showcase films that captivate buyers and investors.",
    accentColor: "#F59E0B",
    stats: [
      { value: "4K / 6K", label: "Ultra-HD Drone Cinematography" },
      { value: "DGCA", label: "Certified & Insured Drone Pilots" },
      { value: "60 FPS", label: "Ultra-Smooth High-Speed Footage" },
      { value: "48h", label: "Edited Video Showcase Delivery" },
    ],
    overview: [
      "Nothing conveys scale, elegance, and location like sweeping aerial cinematography. Whether selling luxury residential real estate, promoting commercial business parks, documenting construction milestones, or highlighting resorts, aerial drone footage provides an undeniable visual edge.",
      "Webczar combines licensed drone pilots with cinema-grade drones and expert post-production editors. We capture striking high-altitude landscape vistas, low-altitude sweeping property reveals, and seamless interior-to-exterior continuous shots, editing them into polished showcase videos complete with licensed music, motion titles, and 3D architectural tracking labels.",
    ],
    features: [
      {
        title: "Ultra-HD 4K/6K Aerial Footage",
        desc: "Broadcast-quality stabilized camera sensors capturing vivid color depth, sharp architectural details, and golden-hour sunset panoramas.",
      },
      {
        title: "DGCA Certified & Insured Flight Operations",
        desc: "Safe, legal, and compliant flight operations led by certified commercial drone operators with strict airspace clearance protocols.",
      },
      {
        title: "Cinematic Project Showcase Films",
        desc: "Full video production combining aerial shots, ground gimbal footage, architectural callout graphics, and compelling brand storytelling.",
      },
      {
        title: "3D Motion Tracking & Site Overlay Graphics",
        desc: "On-screen 3D graphic labels highlighting property boundaries, nearby highway connections, transit hubs, and amenities.",
      },
    ],
    deliverables: [
      "Master cinematic project showcase video (60s to 180s) in 4K resolution",
      "High-energy 15s to 30s vertical reels and teaser cuts for social media advertising",
      "Pack of 20+ ultra-high-resolution aerial photographs for print and web brochures",
      "Raw uncompressed 4K/6K flight video clips and log footage",
      "Full licensing rights for commercial broadcast, YouTube, web, and investor presentations",
    ],
    technologies: [
      "DJI Inspire 3 & Mavic 3 Pro Cine Drones",
      "Hasselblad 4/3 CMOS Sensors with Apple ProRes",
      "DaVinci Resolve Studio Color Grading",
      "Adobe After Effects 3D Camera Tracking",
      "Licensed Commercial Cinematic Soundtracks",
    ],
    process: [
      { step: "01", title: "Flight & Shot Planning", desc: "Location scouting, sun angle calculation, safety risk assessment, and storyboard." },
      { step: "02", title: "Aerial Shoot Execution", desc: "On-site flight operations capturing multiple altitudes, orbits, and golden-hour angles." },
      { step: "03", title: "Cinematic Editing", desc: "Pacing video clips to music, applying cinema color grade, and adding 3D motion callouts." },
      { step: "04", title: "Multi-Format Export", desc: "Delivering horizontal 4K masters and vertical mobile cuts ready for ad campaigns." },
    ],
    whyWebczar: [
      "Licensed, experienced drone pilots with hundreds of successful commercial flight hours",
      "State-of-the-art camera sensors shooting raw log footage for rich cinematic color grading",
      "Complete end-to-end service: filming, editing, sound design, and promotional ad slicing",
      "Specialized experience with real estate developers, hospitality brands, and industrial projects",
    ],
    faqs: [
      {
        q: "What equipment do your drone operators use?",
        a: "We fly professional DJI Mavic 3 Pro Cine and DJI Inspire series drones equipped with triple-lens Hasselblad camera sensors capable of recording in Apple ProRes 422 HQ at up to 6K resolution.",
      },
      {
        q: "Do you handle drone flying permissions and airspace regulations?",
        a: "Yes. Our operations adhere strictly to DGCA regulations. We handle flight plans, operator licensing, and necessary clearance checks before deploying on site.",
      },
      {
        q: "Can you combine aerial drone footage with ground interior walkthroughs?",
        a: "Yes! Most client projects combine breathtaking aerial flyovers with smooth ground gimbal walkthroughs for a comprehensive, immersive showcase of the entire property.",
      },
    ],
  },
];

/** Helper to find a service by slug or alias */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const normalized = slug.toLowerCase().trim();
  return SERVICES.find(
    (s) => s.slug === normalized || s.aliases?.includes(normalized)
  );
}

/** Get all service categories */
export const SERVICE_CATEGORIES = [
  "All",
  "Growth & Marketing",
  "Technology & Engineering",
  "Direct Messaging & Telephony",
  "Creative & Brand",
  "Next-Gen AI & Web3",
  "Add-On Services",
] as const;

