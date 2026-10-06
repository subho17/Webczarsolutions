/* Professional services & capabilities — Webczar Solutions.
 * Single source of truth for the Services stacked deck section ("What we deliver.").
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
  color: string;
  fg: "light" | "dark";
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  /* ─────────────── 1 · TEXT MESSAGING API & MARKETING ─────────────── */
  {
    company: "Text Messaging API & Marketing",
    role: "Text Messaging API & Marketing",
    mark: "SMS",
    type: "Full-time",
    location: "India & Global",
    period: "Messaging Platform",
    summary:
      "Send high-speed promotional and transactional SMS to thousands of customers instantly with guaranteed delivery and DLT compliance.",
    achievements: [
      "Instant delivery for OTPs, alerts, order updates, and promotional offers",
      "Full DLT registration guidance and pre-approved messaging templates",
      "Real-time delivery receipts, short links, and click-tracking analytics",
    ],
    outcome: "99% instant message delivery straight to your customers' mobile inboxes",
    skills: ["Transactional SMS", "Promotional SMS", "DLT Compliance", "SMS Gateway", "Click Tracking"],
    color: "#0284C7",
    fg: "light",
    fr: {
      role: "API SMS & Marketing Textuel",
      summary: "Envoi rapide de SMS transactionnels et promotionnels avec délivrabilité garantie.",
      outcome: "99% de délivrabilité directe dans la boîte de réception mobile.",
      achievements: [
        "Délivrance instantanée d'OTP et d'alertes",
        "Conformité et modèles pré-approuvés",
        "Rapports de distribution en temps réel",
      ],
    },
  },

  /* ─────────────── 2 · RCS MESSAGING SERVICES ─────────────── */
  {
    company: "RCS Messaging Services",
    role: "RCS Messaging Services",
    mark: "RCS",
    type: "Hackathon",
    location: "India & Global",
    period: "Next-Gen Messaging",
    summary:
      "Upgrade standard SMS into interactive, rich media experiences with verified sender checkmarks, images, carousels, and action buttons.",
    achievements: [
      "Verified business profile with official trust mark and brand logo",
      "Interactive product carousels and instant one-tap response buttons",
      "Rich media delivery directly inside native messaging apps with no download required",
    ],
    outcome: "3x higher customer engagement compared to traditional plain text SMS",
    skills: ["Rich Media Messaging", "Verified Sender", "Action Buttons", "Carousels", "Google Messages"],
    color: "#6366F1",
    fg: "light",
    fr: {
      role: "Services de Messagerie RCS",
      summary: "Messagerie riche et interactive avec profils vérifiés et boutons d'action.",
      outcome: "Engagement 3 fois supérieur aux SMS traditionnels.",
      achievements: [
        "Profil d'entreprise vérifié avec badge de confiance",
        "Carrousels de produits interactifs et boutons rapides",
        "Médias riches dans l'application native de messagerie",
      ],
    },
  },

  /* ─────────────── 3 · WHATSAPP API & MARKETING ─────────────── */
  {
    company: "WhatsApp Api & Marketing",
    role: "WhatsApp Api & Marketing",
    mark: "WA",
    type: "Full-time",
    location: "India & Global",
    period: "Direct Messaging",
    summary:
      "Connect directly with customers on WhatsApp using official verified API, automated broadcast campaigns, and 24/7 smart chatbots.",
    achievements: [
      "Official Green Tick verification and broadcast messaging campaigns",
      "Automated order updates, payment reminders, and abandoned cart recovery",
      "Interactive conversational chatbots for automated support and catalog orders",
    ],
    outcome: "98% message open rates and instant two-way customer communication",
    skills: ["WhatsApp Business API", "Green Tick Verified", "Automated Chatbots", "Broadcasts", "CRM Sync"],
    color: "#25D366",
    fg: "light",
    fr: {
      role: "API WhatsApp & Marketing",
      summary: "Connexion directe avec vos clients sur WhatsApp avec API officielle et chatbots.",
      outcome: "Taux d'ouverture de 98% et interaction client immédiate.",
      achievements: [
        "Vérification officielle avec badge vert",
        "Mises à jour de commande et relances automatisées",
        "Chatbots interactifs pour le support et la vente",
      ],
    },
  },

  /* ─────────────── 4 · AI AGENT INBOUND CALL SOLUTIONS ─────────────── */
  {
    company: "AI Agent Inbound Call Solutions",
    role: "AI Agent Inbound Call Solutions",
    mark: "VOICE",
    type: "Hackathon",
    location: "India & Global",
    period: "Voice AI",
    summary:
      "Intelligent voice AI agents that answer incoming phone calls 24/7, understand spoken questions, and book appointments automatically.",
    achievements: [
      "Human-like conversational voice AI that never keeps callers waiting on hold",
      "Automatic customer qualification, appointment booking, and instant FAQ answers",
      "Real-time call transcripts, audio recordings, and instant CRM synchronization",
    ],
    outcome: "Zero missed customer calls and 24/7 automated telephone support",
    skills: ["Voice AI", "Inbound Call Routing", "24/7 Attendant", "Speech Recognition", "CRM Integration"],
    color: "#8B5CF6",
    fg: "light",
    fr: {
      role: "Solutions d'Appels Entrants par Agent IA",
      summary: "Agents vocaux intelligents qui répondent aux appels 24/7 et gèrent les rendez-vous.",
      outcome: "Zéro appel manqué et assistance téléphonique automatisée en continu.",
      achievements: [
        "IA vocale naturelle sans attente pour l'appelant",
        "Prise de rendez-vous et qualification automatique",
        "Transcriptions d'appels et synchronisation CRM",
      ],
    },
  },

  /* ─────────────── 5 · GOOGLE MY BUSINESS LISTING & SEO ─────────────── */
  {
    company: "Google My Business Listing & SEO",
    role: "Google My Business Listing & SEO",
    mark: "GMB",
    type: "Full-time",
    location: "India & Global",
    period: "Local Growth",
    summary:
      "Optimize your Google Business Profile to rank at the top of Google Maps and local search results when nearby customers search for your services.",
    achievements: [
      "Complete Google Business Profile setup, verification, and optimization",
      "Top 3 Google Maps pack ranking for high-intent local search keywords",
      "Customer review generation, geotagged photos, and verified local citations",
    ],
    outcome: "5x more phone calls, direction requests, and walk-in customers from Google Maps",
    skills: ["Google Maps Ranking", "Local SEO", "Profile Optimization", "Review Management", "Local Citations"],
    color: "#4285F4",
    fg: "light",
    fr: {
      role: "Fiche Google My Business & Référencement Local",
      summary: "Optimisation de votre profil Google Business pour dominer Google Maps.",
      outcome: "5x plus d'appels et de visites locales depuis Google Maps.",
      achievements: [
        "Configuration complète et validation de fiche Google",
        "Top 3 sur les recherches locales ciblées",
        "Gestion des avis et photos géolocalisées",
      ],
    },
  },

  /* ─────────────── 6 · WEBSITE DESIGN & DEVELOPMENT ─────────────── */
  {
    company: "Website Design & Development",
    role: "Website Design & Development",
    mark: "WEB",
    type: "Full-time",
    location: "India & Global",
    period: "Core Service",
    summary:
      "Custom, mobile-friendly websites built for speed, clean design, and high conversions that help your business look professional and credible.",
    achievements: [
      "Modern responsive design that looks great on mobile, tablet, and desktop screens",
      "Fast page loading speeds with clean, modern code and security standards",
      "Easy-to-use content management so your team can update content effortlessly",
    ],
    outcome: "A modern, high-converting digital storefront that turns visitors into paying clients",
    skills: ["Next.js", "React", "WordPress", "Custom Design", "Mobile-First", "Fast Loading"],
    color: "#0072E3",
    fg: "light",
    fr: {
      role: "Conception & Développement de Sites Web",
      summary: "Sites web modernes, réactifs et rapides conçus pour maximiser vos conversions.",
      outcome: "Une vitrine digitale professionnelle qui génère des clients qualifiés.",
      achievements: [
        "Design réactif optimisé pour tous les écrans",
        "Vitesse de chargement ultra-rapide et sécurité",
        "Gestion de contenu facile et intuitive",
      ],
    },
  },

  /* ─────────────── 7 · E-COMMERCE SOLUTIONS ─────────────── */
  {
    company: "E-commerce Solutions",
    role: "E-commerce Solutions",
    mark: "SHOP",
    type: "Full-time",
    location: "India & Global",
    period: "Online Store",
    summary:
      "Launch and scale your online store with secure payment gateways, smooth checkout flows, and automated inventory management.",
    achievements: [
      "Custom Shopify, WooCommerce, and tailored online store implementations",
      "Secure payment gateway integration (UPI, Cards, NetBanking, PayPal, Stripe)",
      "Automated order tracking, inventory alerts, and abandoned cart recovery",
    ],
    outcome: "Seamless shopping experience that boosts online sales and repeat customer orders",
    skills: ["Shopify", "WooCommerce", "Payment Gateways", "Inventory Sync", "Mobile Checkout"],
    color: "#F59E0B",
    fg: "dark",
    fr: {
      role: "Solutions E-commerce",
      summary: "Création et gestion de boutiques en ligne performantes avec paiements sécurisés.",
      outcome: "Expérience d'achat fluide augmentant les ventes et la fidélité client.",
      achievements: [
        "Boutiques Shopify et WooCommerce sur mesure",
        "Intégration de passerelles de paiement sécurisées",
        "Suivi des commandes et alertes de stock automatisées",
      ],
    },
  },

  /* ─────────────── 8 · CRM, SOFTWARE & APP DEVELOPMENT ─────────────── */
  {
    company: "CRM, Software & App Development",
    role: "CRM, Software & App Development",
    mark: "APPS",
    type: "Full-time",
    location: "India & Global",
    period: "Custom Software",
    summary:
      "Custom business software, custom CRM portals, and iOS/Android mobile apps designed to automate operations and scale your team.",
    achievements: [
      "Tailored CRM systems and client portals built for your company's exact workflow",
      "Cross-platform iOS and Android mobile apps published on Google Play and App Store",
      "Automated data syncing, role-based access control, and secure cloud databases",
    ],
    outcome: "Streamlined business operations that eliminate repetitive manual spreadsheets",
    skills: ["Custom CRM", "React Native", "Flutter", "Node.js", "Cloud Databases", "API Integrations"],
    color: "#1E293B",
    fg: "light",
    fr: {
      role: "CRM, Logiciels & Applications Mobiles",
      summary: "Logiciels d'entreprise sur mesure, CRM et applications iOS/Android.",
      outcome: "Opérations rationalisées et gain de temps considérable pour vos équipes.",
      achievements: [
        "Systèmes CRM adaptés à vos processus métiers",
        "Applications mobiles publiées sur les stores",
        "Synchronisation cloud et bases de données sécurisées",
      ],
    },
  },

  /* ─────────────── 9 · WEBSITE SEO ─────────────── */
  {
    company: "Website SEO",
    role: "Website SEO",
    mark: "SEO",
    type: "Full-time",
    location: "India & Global",
    period: "Organic Traffic",
    summary:
      "Rank on Page 1 of Google for the search terms your potential customers are actively searching for every day.",
    achievements: [
      "Comprehensive technical SEO fixes, fast loading optimization, and schema markup",
      "High-intent keyword research and content optimization that attracts active buyers",
      "High-authority backlink building to grow your website's trust and search dominance",
    ],
    outcome: "Consistent organic Google traffic and qualified inbound leads without paying for ad clicks",
    skills: ["Google Page 1 Ranking", "Keyword Research", "Technical SEO", "On-Page SEO", "Backlink Building"],
    color: "#059669",
    fg: "light",
    fr: {
      role: "Référencement Naturel de Site Web",
      summary: "Positionnement en 1ère page de Google pour vos mots-clés stratégiques.",
      outcome: "Trafic qualifié continu et prospects réguliers sans budget publicitaire par clic.",
      achievements: [
        "Optimisation technique et vitesse de chargement",
        "Recherche de mots-clés à fort potentiel d'achat",
        "Netlinking de qualité et autorité de domaine",
      ],
    },
  },

  /* ─────────────── 10 · LOGO DESIGN & BRAND MANUAL ─────────────── */
  {
    company: "Logo Design & Brand Manual",
    role: "Logo Design & Brand Manual",
    mark: "LOGO",
    type: "Freelance",
    location: "India & Global",
    period: "Brand Identity",
    summary:
      "Memorable logo design and comprehensive brand style guidelines that give your business a distinctive, premium, and trustworthy look.",
    achievements: [
      "Unique custom logo design with full copyright ownership and vector master files",
      "Complete Brand Manual: official color palette, font styles, and brand usage rules",
      "Business cards, letterheads, social media profile kits, and favicon assets",
    ],
    outcome: "A standout visual brand identity that builds instant trust and industry recognition",
    skills: ["Custom Logo", "Brand Guidelines", "Typography Rules", "Color Palette", "Stationery Design"],
    color: "#EC4899",
    fg: "light",
    fr: {
      role: "Création de Logo & Charte Graphique",
      summary: "Logo mémorable et guide de style complet pour une image de marque forte.",
      outcome: "Une identité visuelle remarquable qui inspire immédiatement confiance.",
      achievements: [
        "Création de logo sur mesure avec fichiers sources",
        "Charte graphique complète (couleurs, polices, règles d'usage)",
        "Papeterie professionnelle et déclinaisons réseaux sociaux",
      ],
    },
  },

  /* ─────────────── 11 · BROCHURE DESIGN SERVICES ─────────────── */
  {
    company: "Brochure Design Services",
    role: "Brochure Design Services",
    mark: "PRINT",
    type: "Freelance",
    location: "India & Global",
    period: "Marketing Collateral",
    summary:
      "Professionally designed company brochures, product catalogs, and pitch decks crafted to impress clients and close high-value deals.",
    achievements: [
      "Stunning bi-fold, tri-fold, and multi-page corporate brochure layouts",
      "Interactive digital PDF brochures with clickable links and direct contact buttons",
      "Print-ready high-resolution files with CMYK color and bleed setup for local printers",
    ],
    outcome: "High-impact sales collateral that clearly explains your value and closes deals",
    skills: ["Corporate Brochures", "Product Catalogs", "Interactive PDF", "Print Ready", "Sales Presentations"],
    color: "#EA580C",
    fg: "light",
    fr: {
      role: "Services de Création de Brochures",
      summary: "Brochures d'entreprise, catalogues et présentations commerciales percutantes.",
      outcome: "Supports de vente percutants qui valorisent vos offres et facilitent la signature.",
      achievements: [
        "Mises en page de brochures corporatives soignées",
        "PDF interactifs avec liens cliquables pour vos prospects",
        "Fichiers haute définition prêts pour l'impression",
      ],
    },
  },

  /* ─────────────── 12 · META ADS ─────────────── */
  {
    company: "Meta Ads",
    role: "Meta Ads",
    mark: "META",
    type: "Full-time",
    location: "India & Global",
    period: "Paid Social",
    summary:
      "Targeted Facebook and Instagram advertising campaigns engineered to reach your ideal audience and generate leads at the lowest cost.",
    achievements: [
      "Laser-targeted audience demographics, interests, and competitor targeting setup",
      "High-converting visual ad creatives, eye-catching motion graphics, and sales copy",
      "Smart retargeting funnels that convert past visitors and profile engagers into buyers",
    ],
    outcome: "Predictable stream of qualified customer leads and healthy return on advertising spend",
    skills: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Retargeting", "Ad Creatives"],
    color: "#0668E1",
    fg: "light",
    fr: {
      role: "Publicité Meta (Facebook & Instagram)",
      summary: "Campagnes sponsorisées ciblées pour capter des clients qualifiés au meilleur coût.",
      outcome: "Flux prévisible de prospects et excellent retour sur investissement publicitaire.",
      achievements: [
        "Ciblage précis par démographie et centres d'intérêt",
        "Visuels et textes publicitaires à fort impact",
        "Tunnels de reciblage pour convertir les visiteurs indécis",
      ],
    },
  },

  /* ─────────────── 13 · SOCIAL MEDIA OPTIMIZATION ─────────────── */
  {
    company: "Social Media Optimization",
    role: "Social Media Optimization",
    mark: "SMO",
    type: "Freelance",
    location: "India & Global",
    period: "Profile Growth",
    summary:
      "Optimize your business social profiles across Instagram, LinkedIn, and Facebook to attract organic followers and project professional credibility.",
    achievements: [
      "Complete profile makeover: bio copy, highlight covers, banner graphics, and link trees",
      "Hashtag research and profile keyword SEO for higher organic search discovery",
      "Cohesive brand theme structuring and aesthetic visual grid layout",
    ],
    outcome: "A polished, professional social media presence that converts visitors into active followers",
    skills: ["Profile Optimization", "Bio Strategy", "Instagram Highlights", "LinkedIn Page", "Social SEO"],
    color: "#9333EA",
    fg: "light",
    fr: {
      role: "Optimisation des Profils Sociaux (SMO)",
      summary: "Optimisation de vos pages professionnelles sur Instagram, LinkedIn et Facebook.",
      outcome: "Profils attractifs qui inspirent confiance et maximisent l'acquisition naturelle.",
      achievements: [
        "Refonte complète de biographie, bannières et couvertures",
        "Recherche de hashtags et mots-clés de découvrabilité",
        "Grille visuelle harmonieuse et cohérente avec votre marque",
      ],
    },
  },

  /* ─────────────── 14 · SOCIAL MEDIA MARKETING ─────────────── */
  {
    company: "Social Media Marketing",
    role: "Social Media Marketing",
    mark: "SMM",
    type: "Full-time",
    location: "India & Global",
    period: "Content & Reach",
    summary:
      "Consistent social media management, daily creative posts, trending reels, and community engagement that keep your brand top-of-mind.",
    achievements: [
      "Monthly content calendar with custom graphics, captions, and automated scheduling",
      "Trending short reels and educational posts that expand your brand's organic reach",
      "Active community management, comments response, and incoming message handling",
    ],
    outcome: "Growing community of engaged followers and continuous brand visibility",
    skills: ["Content Calendar", "Reels & Posts", "Community Management", "Copywriting", "Monthly Analytics"],
    color: "#E1306C",
    fg: "light",
    fr: {
      role: "Marketing sur les Réseaux Sociaux (SMM)",
      summary: "Gestion complète de vos réseaux sociaux, création de contenu régulier et engagement.",
      outcome: "Communauté engagée et notoriété de marque démultipliée au quotidien.",
      achievements: [
        "Calendrier mensuel de publications et de visuels",
        "Création de Reels viraux et contenus éducatifs",
        "Modération et interaction active avec votre communauté",
      ],
    },
  },
];
