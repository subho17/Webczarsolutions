/* Professional services & capabilities — Webczar Solutions.
 * Single source of truth for the Services stacked deck section.
 */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  mark?: string;
  /* panel color — intentional, one vibrant per role (Experience deck) */
  color: string;
  fg: "light" | "dark";
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
  /* French copy for the translatable fields (see lib/i18n.tsx → L()) */
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  /* ─────────────── 1 · WEBSITE DESIGN & DEVELOPMENT ─────────────── */
  {
    company: "Website Design & Development",
    role: "Next-Gen Web Experiences",
    mark: "WEB",
    type: "Full-time",
    location: "India & Global",
    period: "Core Service",
    summary:
      "High-performance, visually stunning custom websites and web applications engineered for speed, conversion, and effortless brand scalability.",
    achievements: [
      "Custom full-stack web applications built with Next.js, React, Node.js, and modern CSS",
      "Ultra-responsive, mobile-first architectures with 95+ Google Lighthouse speed scores",
      "Seamless CMS integration, headless architectures, and robust REST/GraphQL APIs",
    ],
    outcome:
      "High-converting web platforms that elevate brand authority and drive organic customer acquisition",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "WordPress"],
    color: "#0072E3",
    fg: "light",
    fr: {
      role: "Expériences Web Nouvelle Génération",
      summary:
        "Sites web et applications sur mesure haute performance, conçus pour la vitesse, la conversion et l'évolutivité.",
      outcome:
        "Plateformes web à fort taux de conversion renforçant l'autorité de votre marque.",
      achievements: [
        "Applications web full-stack avec Next.js, React et Node.js",
        "Architectures mobile-first réactives avec d'excellents scores Lighthouse",
        "Intégration CMS fluide et APIs performantes",
      ],
    },
  },

  /* ─────────────── 2 · SOFTWARE DEVELOPMENT ─────────────── */
  {
    company: "Software Development",
    role: "Custom Enterprise Software",
    mark: "DEV",
    type: "Full-time",
    location: "India & Global",
    period: "Core Service",
    summary:
      "Scalable, secure, and resilient custom software solutions, enterprise SaaS platforms, and automated business workflows built to scale.",
    achievements: [
      "End-to-end bespoke software tailored to complex enterprise operational workflows",
      "Microservices architecture, automated CI/CD pipelines, and high-concurrency database design",
      "Strict security standards, role-based access control, and 99.99% system uptime",
    ],
    outcome:
      "Enterprise-grade software that automates operations and slashes operational costs by up to 60%",
    skills: ["Python", "Java", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
    color: "#141414",
    fg: "light",
    fr: {
      role: "Logiciels d'Entreprise sur Mesure",
      summary:
        "Solutions logicielles sur mesure, plateformes SaaS et flux opérationnels automatisés.",
      outcome:
        "Logiciels d'entreprise réduisant les coûts opérationnels jusqu'à 60%.",
      achievements: [
        "Logiciels adaptés aux flux de travail complexes",
        "Architecture microservices et bases de données haute performance",
        "Normes de sécurité strictes et haute disponibilité",
      ],
    },
  },

  /* ─────────────── 3 · MOBILE APP DEVELOPMENT ─────────────── */
  {
    company: "Mobile App Development",
    role: "iOS & Android Applications",
    mark: "APP",
    type: "Full-time",
    location: "India & Global",
    period: "Core Service",
    summary:
      "Fluid, native-quality iOS and Android mobile applications engineered with modern cross-platform frameworks for peak performance.",
    achievements: [
      "Cross-platform mobile apps built with React Native and Flutter using a unified codebase",
      "Native hardware integration including biometric auth, push notifications, and GPS tracking",
      "Complete App Store & Google Play publishing, rating optimization, and post-launch support",
    ],
    outcome:
      "User-centric mobile apps with smooth 60fps performance and high daily active user retention",
    skills: ["React Native", "Flutter", "iOS Swift", "Android Kotlin", "Firebase", "REST APIs"],
    color: "#FF2E0F",
    fg: "light",
    fr: {
      role: "Applications Mobiles iOS & Android",
      summary:
        "Applications mobiles fluides et performantes développées avec React Native et Flutter.",
      outcome:
        "Expérience mobile ultra-fluide avec une excellente rétention utilisateur.",
      achievements: [
        "Applications multiplateformes à base de code unifiée",
        "Intégration biométrique, notifications push et géolocalisation",
        "Publication complète sur App Store et Google Play",
      ],
    },
  },

  /* ─────────────── 4 · DIGITAL MARKETING ─────────────── */
  {
    company: "Digital Marketing",
    role: "Omnichannel Growth & Performance",
    mark: "DM",
    type: "Freelance",
    location: "India & Global",
    period: "Growth & Strategy",
    summary:
      "Comprehensive, data-driven digital marketing campaigns that align organic and paid channels to maximize your brand's market reach.",
    achievements: [
      "Full-funnel marketing strategies connecting organic search, paid ads, and email nurture funnels",
      "Advanced audience segmentation, competitive benchmarking, and demographic targeting",
      "Real-time ROI dashboarding, attribution modeling, and continuous conversion rate optimization",
    ],
    outcome:
      "Accelerated brand visibility with consistent 3x to 5x return on ad spend (ROAS)",
    skills: ["Strategy", "SEO", "Google Ads", "Meta Ads", "Analytics", "Funnel CRO"],
    color: "#6D3BF5",
    fg: "light",
    fr: {
      role: "Croissance & Performance Omnicanale",
      summary:
        "Campagnes de marketing numérique axées sur les données pour maximiser la visibilité de votre marque.",
      outcome:
        "Visibilité accrue et retour sur investissement publicitaire (ROAS) de 3x à 5x.",
      achievements: [
        "Stratégies marketing complètes pour l'acquisition et la conversion",
        "Ciblage d'audience avancé et analyse concurrentielle",
        "Tableaux de bord ROI en temps réel",
      ],
    },
  },

  /* ─────────────── 5 · SEO (SEARCH ENGINE OPTIMIZATION) ─────────────── */
  {
    company: "SEO",
    role: "Search Dominance & Organic Growth",
    mark: "SEO",
    type: "Full-time",
    location: "India & Global",
    period: "Organic Traffic",
    summary:
      "Proven organic SEO strategies that rank your business on Google's Page 1 for high-intent transactional search terms.",
    achievements: [
      "Deep technical SEO audits, Core Web Vitals optimization, and structured data schemas",
      "Comprehensive keyword research, search intent mapping, and topical authority clusters",
      "High-domain-authority white-hat link acquisition, local citation building, and Google Maps optimization",
    ],
    outcome:
      "Over 250% average increase in organic search traffic and sustainable inbound lead flow",
    skills: ["Technical SEO", "Ahrefs", "SEMrush", "On-Page SEO", "Link Building", "Core Web Vitals"],
    color: "#00AA3C",
    fg: "light",
    fr: {
      role: "Domination sur les Moteurs de Recherche",
      summary:
        "Stratégies SEO éprouvées pour positionner votre entreprise en première page de Google.",
      outcome:
        "Augmentation moyenne de 250% du trafic organique et des prospects qualifiés.",
      achievements: [
        "Audits techniques approfondis et optimisation Core Web Vitals",
        "Recherche de mots-clés stratégiques et cocons sémantiques",
        "Netlinking de haute qualité et référencement local",
      ],
    },
  },

  /* ─────────────── 6 · GOOGLE ADS & PPC ─────────────── */
  {
    company: "Google Ads & PPC",
    role: "High-ROI Paid Advertising",
    mark: "PPC",
    type: "Full-time",
    location: "India & Global",
    period: "Paid Acquisition",
    summary:
      "Laser-focused Search, Display, Shopping, and Performance Max campaigns that capture active buyers at the exact moment of intent.",
    achievements: [
      "Granular keyword match-type structuring and aggressive negative keyword filtering to eliminate ad waste",
      "High-converting dedicated landing page design paired with relentless A/B copy testing",
      "Smart bidding automation, conversion value maximization, and remarketing audiences",
    ],
    outcome:
      "40% reduction in Cost Per Acquisition (CPA) with maximum qualified inbound leads",
    skills: ["Google Ads", "Search Ads", "Display Ads", "PMax", "Remarketing", "Conversion Tracking"],
    color: "#FF6A00",
    fg: "light",
    fr: {
      role: "Publicité Payante à Fort ROI",
      summary:
        "Campagnes Google Ads chirurgicales pour capter les acheteurs actifs au moment précis de leur recherche.",
      outcome:
        "Réduction de 40% du coût d'acquisition client avec un volume accru de leads.",
      achievements: [
        "Structuration précise des mots-clés et exclusion des clics inutiles",
        "Landing pages à fort taux de conversion avec tests A/B continus",
        "Enchères intelligentes et reciblage publicitaire",
      ],
    },
  },

  /* ─────────────── 7 · SOCIAL MEDIA MARKETING ─────────────── */
  {
    company: "Social Media Marketing",
    role: "Viral Reach & Brand Engagement",
    mark: "SMM",
    type: "Freelance",
    location: "India & Global",
    period: "Brand Presence",
    summary:
      "Creative storytelling, viral short-form content, and targeted Meta & LinkedIn ad campaigns that transform followers into brand advocates.",
    achievements: [
      "High-engagement Instagram Reels, YouTube Shorts, and LinkedIn thought-leadership campaigns",
      "Targeted Meta (Facebook & Instagram) paid ad funnels built for immediate conversion",
      "Active community management, customer sentiment monitoring, and direct-response DM funnels",
    ],
    outcome:
      "10x amplification in social impressions, community engagement, and direct referral sales",
    skills: ["Instagram", "Facebook", "LinkedIn", "Meta Ads Manager", "Canva", "Social Analytics"],
    color: "#E1306C",
    fg: "light",
    fr: {
      role: "Portée Virale & Engagement de Marque",
      summary:
        "Création de contenu percutant et campagnes sponsorisées Meta et LinkedIn pour fidéliser votre communauté.",
      outcome:
        "Multiplication par 10 des impressions et de l'engagement communautaire.",
      achievements: [
        "Formats courts viraux (Reels, Shorts) et publications expertes",
        "Tunnels publicitaires ciblés sur Facebook et Instagram",
        "Gestion active de communauté et modération",
      ],
    },
  },

  /* ─────────────── 8 · GRAPHIC DESIGN & BRANDING ─────────────── */
  {
    company: "Graphic Design & Branding",
    role: "Visual Identity & Brand Strategy",
    mark: "BRAND",
    type: "Freelance",
    location: "India & Global",
    period: "Creative Studio",
    summary:
      "Iconic visual identities, logo marks, corporate design systems, and marketing collateral that leave an unforgettable impression.",
    achievements: [
      "Comprehensive brand guidelines: color palettes, typography scales, iconography, and voice standards",
      "High-impact marketing collateral, brochures, pitch decks, and digital banner packages",
      "Packaging design, merchandise branding, and print-ready production files",
    ],
    outcome:
      "Distinctive, premium brand perception that commands industry respect and customer trust",
    skills: ["Figma", "Illustrator", "Photoshop", "Brand Guidelines", "Typography", "Print & Digital"],
    color: "#7928CA",
    fg: "light",
    fr: {
      role: "Identité Visuelle & Stratégie de Marque",
      summary:
        "Identités visuelles emblématiques, logos et chartes graphiques complètes pour marquer les esprits.",
      outcome:
        "Une image de marque haut de gamme qui inspire immédiatement confiance.",
      achievements: [
        "Chartes graphiques complètes : typographies, palettes et iconographie",
        "Supports marketing, brochures, présentations et bannières",
        "Packaging et fichiers d'impression haute définition",
      ],
    },
  },

  /* ─────────────── 9 · YOUTUBE ADVERTISING ─────────────── */
  {
    company: "YouTube Advertising",
    role: "Video Marketing & High-Impact Ads",
    mark: "YT",
    type: "Hackathon",
    location: "India & Global",
    period: "Video Ads",
    summary:
      "Engaging video ad formats—Skippable in-stream, Non-skippable, and In-feed ads—that capture viewer attention and drive action.",
    achievements: [
      "Audience interest, intent, and placement-level targeting on high-performing YouTube channels",
      "Scriptwriting guidance, hook optimization in the first 5 seconds, and strong CTA overlays",
      "Full campaign setup, retargeting website visitors, and video conversion analytics",
    ],
    outcome:
      "Massive regional and nationwide brand awareness combined with cost-effective view rates",
    skills: ["YouTube Ads", "Google Ads Video", "Video Scripting", "Placement Targeting", "Remarketing"],
    color: "#CC0000",
    fg: "light",
    fr: {
      role: "Marketing Vidéo & Publicité YouTube",
      summary:
        "Campagnes publicitaires vidéo percutantes pour capter l'attention des utilisateurs et stimuler l'action.",
      outcome:
        "Notoriété de marque démultipliée avec des coûts par vue très avantageux.",
      achievements: [
        "Ciblage précis par centres d'intérêt et chaînes spécifiques",
        "Accroches optimisées dès les premières secondes de vidéo",
        "Reciblage des visiteurs web et analyse des conversions",
      ],
    },
  },

  /* ─────────────── 10 · WHATSAPP MARKETING ─────────────── */
  {
    company: "WhatsApp Marketing",
    role: "Official WhatsApp Business API",
    mark: "WA",
    type: "Full-time",
    location: "India & Global",
    period: "Direct Messaging",
    summary:
      "Official green-tick WhatsApp Business API integration, broadcast automations, and interactive chatbots with 98% open rates.",
    achievements: [
      "Verified Green Tick WhatsApp Business API onboarding and template approval management",
      "Automated abandoned cart recovery, order confirmations, and dispatch notifications via WhatsApp",
      "Interactive conversational chatbots with automated catalog browsing and instant customer support",
    ],
    outcome:
      "98% message open rates, 45% click-through rates, and instant customer engagement",
    skills: ["WhatsApp Business API", "Chatbots", "Broadcast Campaigns", "CRM Webhooks", "Automation"],
    color: "#25D366",
    fg: "light",
    fr: {
      role: "API Officielle WhatsApp Business",
      summary:
        "Intégration de l'API WhatsApp Business, broadcasts automatisés et chatbots interactifs avec 98% de taux d'ouverture.",
      outcome:
        "Taux d'ouverture de 98% et interaction client immédiate.",
      achievements: [
        "Vérification officielle avec badge vert WhatsApp",
        "Relances de paniers abandonnés et confirmations de commande automatisées",
        "Chatbots interactifs avec navigation dans le catalogue produit",
      ],
    },
  },

  /* ─────────────── 11 · BULK SMS MARKETING ─────────────── */
  {
    company: "Bulk SMS Marketing",
    role: "High-Throughput SMS Broadcasts",
    mark: "SMS",
    type: "Hackathon",
    location: "India & Global",
    period: "Messaging Platform",
    summary:
      "Reliable, DLT-compliant transactional and promotional SMS routing with instant delivery, short URLs, and detailed tracking.",
    achievements: [
      "Full DLT registration guidance, sender ID creation, and compliant template approvals",
      "High-capacity SMS gateway pipelines delivering millions of messages within seconds",
      "Real-time delivery receipts, click-tracking analytics, and opt-out management",
    ],
    outcome:
      "Instant direct-to-consumer reach across India with 99.8% gateway delivery rates",
    skills: ["DLT Compliance", "Transactional SMS", "Promotional SMS", "SMS Gateways", "Click Tracking"],
    color: "#0284C7",
    fg: "light",
    fr: {
      role: "Campagnes SMS de Masse",
      summary:
        "Routage SMS promotionnel et transactionnel ultra-rapide avec suivi des clics et conformité totale.",
      outcome:
        "Portée instantanée auprès des consommateurs avec un taux de délivrabilité de 99,8%.",
      achievements: [
        "Enregistrement et validation des identifiants d'expédition",
        "Routage haute capacité délivrant des milliers de messages par seconde",
        "Accusés de réception et suivi des clics en temps réel",
      ],
    },
  },

  /* ─────────────── 12 · IVR SOLUTIONS ─────────────── */
  {
    company: "IVR Solutions",
    role: "Cloud Telephony & Smart Routing",
    mark: "IVR",
    type: "Hackathon",
    location: "India & Global",
    period: "Telephony",
    summary:
      "Intelligent cloud-based interactive voice response (IVR) systems, automated call routing, virtual numbers, and CRM recording.",
    achievements: [
      "Multi-level interactive voice menus with multi-lingual audio prompts tailored for Indian callers",
      "Virtual toll-free and 10-digit number integration with automatic agent rollover and call queuing",
      "Call recording, live dashboard analytics, and CRM webhook integration for instant lead creation",
    ],
    outcome:
      "Zero missed customer calls and 24/7 automated professional enterprise phone presence",
    skills: ["Cloud Telephony", "Virtual Numbers", "Call Routing", "Toll-Free Integration", "Voice Prompts"],
    color: "#D97706",
    fg: "light",
    fr: {
      role: "Téléphonie Cloud & Routage Intelligent",
      summary:
        "Systèmes de réponse vocale interactive (SVI), routage d'appels intelligent et numéros virtuels pour entreprises.",
      outcome:
        "Zéro appel manqué et une présence téléphonique professionnelle automatisée 24/7.",
      achievements: [
        "Menus vocaux interactifs multiniveaux personnalisés",
        "Numéros virtuels gratuits avec file d'attente intelligente",
        "Enregistrement des appels et synchronisation directe avec votre CRM",
      ],
    },
  },

  /* ─────────────── 13 · LEAD GENERATION ─────────────── */
  {
    company: "Lead Generation",
    role: "High-Intent Inbound Sales Funnels",
    mark: "LEADS",
    type: "Full-time",
    location: "India & Global",
    period: "Performance",
    summary:
      "Predictable B2B and B2C lead pipelines combining targeted advertising, high-converting squeeze pages, and automated qualification.",
    achievements: [
      "Hyper-targeted ad campaigns on LinkedIn, Google, and Meta filtering for verified decision-makers",
      "Frictionless lead capture mechanisms: interactive calculators, multi-step quiz funnels, and CRM sync",
      "Automated lead scoring, instant SMS/WhatsApp alerts for sales teams, and follow-up sequences",
    ],
    outcome:
      "Continuous pipeline of sales-qualified leads (SQLs) ready to close",
    skills: ["Lead Gen Funnels", "Landing Pages", "CRM Integration", "B2B Outreach", "Lead Scoring"],
    color: "#4F46E5",
    fg: "light",
    fr: {
      role: "Génération de Prospects Qualifiés",
      summary:
        "Tunnels d'acquisition automatisés pour alimenter vos équipes commerciales en leads qualifiés.",
      outcome:
        "Flux régulier et prévisible de prospects prêts à passer à l'achat.",
      achievements: [
        "Campagnes publicitaires ciblant directement les décideurs",
        "Pages de capture optimisées et formulaires intelligents",
        "Alertes WhatsApp/SMS instantanées pour votre équipe commerciale",
      ],
    },
  },

  /* ─────────────── 14 · AI & MACHINE LEARNING ─────────────── */
  {
    company: "AI & Machine Learning",
    role: "Intelligent Automation & Custom AI",
    mark: "AI",
    type: "Hackathon",
    location: "India & Global",
    period: "Advanced Tech",
    summary:
      "Cutting-edge artificial intelligence, custom LLM fine-tuning, RAG enterprise search, and predictive analytics models.",
    achievements: [
      "Custom autonomous AI agents trained on proprietary client knowledge bases and operational manuals",
      "Retrieval-Augmented Generation (RAG) pipelines for instant, hallucination-free enterprise search",
      "Predictive machine learning models for customer churn, demand forecasting, and automated data entry",
    ],
    outcome:
      "Over 70% reduction in repetitive manual tasks and real-time intelligent business insights",
    skills: ["Python", "OpenAI / Claude", "LangChain", "RAG Architecture", "PyTorch", "Vector DBs"],
    color: "#8B5CF6",
    fg: "light",
    fr: {
      role: "Automatisation Intelligente & IA sur Mesure",
      summary:
        "Intégration d'intelligence artificielle avancée, agents autonomes et modèles prédictifs.",
      outcome:
        "Réduction de 70% des tâches manuelles répétitives grâce à l'automatisation par l'IA.",
      achievements: [
        "Agents IA formés sur vos bases de données internes",
        "Recherche d'entreprise intelligente par architecture RAG",
        "Modèles prédictifs pour l'anticipation des tendances commerciales",
      ],
    },
  },

  /* ─────────────── 15 · BLOCKCHAIN DEVELOPMENT ─────────────── */
  {
    company: "Blockchain Development",
    role: "Decentralized Web3 & Smart Contracts",
    mark: "WEB3",
    type: "Hackathon",
    location: "India & Global",
    period: "Web3 & Security",
    summary:
      "Secure smart contracts, decentralized applications (dApps), tokenomics, and enterprise private blockchain architectures.",
    achievements: [
      "Formally verified Solidity and Rust smart contracts audited for high security and reentrancy protection",
      "Full-stack Web3 dApps with multi-wallet integration (MetaMask, WalletConnect, Phantom)",
      "Tokenomics design, NFT marketplace backends, and enterprise supply-chain ledger architectures",
    ],
    outcome:
      "Zero-vulnerability smart contract deployments and trustless decentralized digital infrastructure",
    skills: ["Solidity", "Ethereum", "Polygon", "Solana", "Web3.js", "Hardhat"],
    color: "#0F172A",
    fg: "light",
    fr: {
      role: "Web3 Décentralisé & Smart Contracts",
      summary:
        "Développement de smart contracts sécurisés, applications décentralisées (dApps) et architectures blockchain.",
      outcome:
        "Déploiements sans vulnérabilité et infrastructures numériques décentralisées.",
      achievements: [
        "Smart contracts audités sur Solidity et Rust",
        "Applications dApps avec connexion multi-wallets",
        "Conception de tokenomique et registres d'entreprise sécurisés",
      ],
    },
  },
];
