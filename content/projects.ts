/* Featured projects — single source of truth for the Work section
   and the /work/[slug] case-study routes. Order = showcase order.

   Webczar Solutions — showcasing our digital solutions and capabilities. */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

/* French mirror of Study. Every field optional: anything left out falls back
   to the English original, so a half-translated entry still renders. */
export type StudyFr = Partial<Study>;

/* Card / case-page cover.
   ⚠ Only VERIFIED assets go in `src` — official brand marks, or Webczar's
   own project captures. `variant: "photo"` renders full-bleed; "brand"
   (default) centres the mark on its ground. Projects with no asset get a
   designed typographic cover (`mark`), never a stock image. */
export type Cover = {
  bg: string; /* brand ground (also the letterbox behind photos) */
  ink: "light" | "dark";
  src?: string; /* verified asset */
  aspect?: number; /* true aspect ratio of a brand mark */
  variant?: "brand" | "photo";
  /* object-position for photo covers. The supplied artwork is portrait and
     the card frame is landscape, so this keeps the subject in frame — the
     image is only ever cropped, never scaled non-uniformly. */
  focus?: string;
  mark?: string; /* typographic cover when no asset exists */
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  /* the card's one-line "what we did" — portfolio copy, not a resume bullet */
  contribution: string;
  coverLabel: string; /* alt/aria text for the cover */
  cover?: Cover;
  /* verified official destination — never guessed (CONTENT_AUDIT rule) */
  site?: { url: string; label: string };
  /* verified GitHub repository */
  repo?: string;
  award?: string;
  study: Study;
  /* French copy — card fields plus the full case study (see lib/i18n.tsx -> L()).
     Company, product and tool names are deliberately left untranslated. */
  fr?: {
    title?: string;
    oneLiner?: string;
    contribution?: string;
    tags?: string[];
    study?: StudyFr;
  };
};

export const PROJECTS: Project[] = [
  /* ─────────────── 1 · E-COMMERCE PLATFORM ─────────────── */
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    tags: ["React", "Node.js", "Stripe", "E-Commerce"],
    year: "2025",
    oneLiner:
      "A full-featured e-commerce platform with inventory management, payment processing, and real-time analytics for a retail client.",
    contribution:
      "End-to-end e-commerce solution — from product catalog to checkout to analytics.",
    coverLabel: "E-COMMERCE PLATFORM",
    cover: { bg: "#0072E3", ink: "light", mark: "EC" },
    study: {
      role: "Full-Stack Development",
      timeline: "2025 · 3 months",
      context:
        "A retail business needed a modern e-commerce platform to replace their legacy system. The new platform needed to handle inventory, payments, shipping, and customer management.",
      problem:
        "The existing system was slow, hard to maintain, and couldn't scale with growing demand. Customers were abandoning carts due to poor performance.",
      process: [
        {
          title: "Discovery & Architecture",
          body: "Analyzed existing workflows, defined requirements, and designed a scalable microservices architecture.",
        },
        {
          title: "Frontend Development",
          body: "Built a responsive React application with real-time product updates and an intuitive checkout flow.",
        },
        {
          title: "Backend & Integration",
          body: "Developed Node.js APIs, integrated Stripe payments, and set up automated inventory management.",
        },
        {
          title: "Testing & Deployment",
          body: "Comprehensive testing, performance optimization, and cloud deployment with auto-scaling.",
        },
      ],
      decisions: [
        {
          title: "Microservices for scalability",
          why: "Separating inventory, orders, and payments allows independent scaling and easier maintenance.",
        },
        {
          title: "React with server-side rendering",
          why: "SSR improves initial load times and SEO, critical for e-commerce conversion rates.",
        },
      ],
      outcomes: [
        "3x improvement in page load times",
        "40% reduction in cart abandonment",
        "99.9% uptime with auto-scaling",
      ],
      reflection:
        "E-commerce is about trust. Every performance improvement directly impacts conversion rates and customer satisfaction.",
    },
  },

  /* ─────────────── 2 · AI CHATBOT ─────────────── */
  {
    slug: "ai-chatbot",
    title: "AI-Powered Customer Service",
    tags: ["AI", "NLP", "Python", "Chatbot"],
    year: "2025",
    oneLiner:
      "An intelligent chatbot that handles 70% of customer inquiries automatically, freeing human agents for complex issues.",
    contribution:
      "Custom AI model trained on client's knowledge base with seamless handoff to human agents.",
    coverLabel: "AI CHATBOT",
    cover: { bg: "#6D3BF5", ink: "light", mark: "AI" },
    study: {
      role: "AI Solutions",
      timeline: "2025 · 2 months",
      context:
        "A SaaS company was spending too much on customer support. They needed an AI solution that could handle common questions while preserving the quality of human support for complex issues.",
      problem:
        "Support tickets were increasing faster than the team could handle. Response times were growing and customer satisfaction was dropping.",
      process: [
        {
          title: "Knowledge Base Analysis",
          body: "Analyzed 10,000+ support tickets to identify common patterns and create a training dataset.",
        },
        {
          title: "Model Training",
          body: "Fine-tuned a language model on the company's specific products, policies, and communication style.",
        },
        {
          title: "Integration & Testing",
          body: "Built the chatbot interface, integrated with existing support tools, and tested with real customers.",
        },
        {
          title: "Optimization & Monitoring",
          body: "Set up analytics to track performance and continuously improve the model based on real interactions.",
        },
      ],
      decisions: [
        {
          title: "Hybrid AI + human approach",
          why: "AI handles volume; humans handle complexity. The handoff must be seamless to maintain trust.",
        },
        {
          title: "Custom training on company data",
          why: "Generic chatbots don't understand your products. Custom training ensures accurate, helpful responses.",
        },
      ],
      outcomes: [
        "70% of inquiries handled automatically",
        "60% reduction in support costs",
        "4.5/5 average customer rating",
      ],
      reflection:
        "AI works best when it augments human capability, not when it tries to replace it entirely.",
    },
  },

  /* ─────────────── 3 · MOBILE APP ─────────────── */
  {
    slug: "mobile-app",
    title: "Health & Fitness App",
    tags: ["React Native", "Firebase", "Mobile", "iOS/Android"],
    year: "2025",
    oneLiner:
      "A cross-platform mobile app with workout tracking, nutrition planning, and social features — launched on both app stores.",
    contribution:
      "Complete mobile development from concept to App Store and Play Store deployment.",
    coverLabel: "MOBILE APP",
    cover: { bg: "#FF2E0F", ink: "light", mark: "MA" },
    study: {
      role: "Mobile Development",
      timeline: "2025 · 4 months",
      context:
        "A fitness startup needed a mobile app that worked on both iOS and Android. The app needed workout tracking, meal planning, and social features to compete with established players.",
      problem:
        "Building two separate native apps would double the budget and timeline. The startup needed a cost-effective solution without compromising on quality or performance.",
      process: [
        {
          title: "Cross-Platform Strategy",
          body: "Chose React Native for code sharing while maintaining native performance and feel.",
        },
        {
          title: "UI/UX Design",
          body: "Designed an intuitive interface that feels native on both platforms while maintaining brand consistency.",
        },
        {
          title: "Feature Development",
          body: "Built workout tracking, meal planning, social feeds, and push notifications.",
        },
        {
          title: "App Store Optimization",
          body: "Optimized store listings, screenshots, and descriptions for maximum visibility and downloads.",
        },
      ],
      decisions: [
        {
          title: "React Native over Flutter",
          why: "The team's JavaScript expertise and the availability of mature libraries made React Native the pragmatic choice.",
        },
        {
          title: "Firebase for backend",
          why: "Firebase provides authentication, database, and hosting out of the box — perfect for a startup moving fast.",
        },
      ],
      outcomes: [
        "Launched on both iOS and Android simultaneously",
        "50K+ downloads in first month",
        "4.7/5 average app store rating",
      ],
      reflection:
        "Cross-platform development is about smart trade-offs. The key is knowing where native matters and where shared code is fine.",
    },
  },

  /* ─────────────── 4 · DASHBOARD ─────────────── */
  {
    slug: "analytics-dashboard",
    title: "Real-Time Analytics Dashboard",
    tags: ["Data Visualization", "React", "D3.js", "Analytics"],
    year: "2024",
    oneLiner:
      "A comprehensive analytics dashboard that transforms complex business data into actionable insights at a glance.",
    contribution:
      "Data visualization and dashboard design that makes complex metrics intuitive.",
    coverLabel: "ANALYTICS DASHBOARD",
    cover: { bg: "#0E1F38", ink: "light", mark: "DA" },
    study: {
      role: "UI/UX Design & Development",
      timeline: "2024 · 6 weeks",
      context:
        "A mid-size company had data spread across multiple tools. Leadership needed a single dashboard to monitor key metrics without logging into five different platforms.",
      problem:
        "Data existed everywhere but insights were nowhere. Decision-makers were spending hours compiling reports instead of making decisions.",
      process: [
        {
          title: "Data Audit",
          body: "Mapped all data sources, identified key metrics, and defined the information hierarchy.",
        },
        {
          title: "Dashboard Design",
          body: "Created a responsive dashboard with drill-down capabilities and real-time updates.",
        },
        {
          title: "Implementation",
          body: "Built with React and D3.js for interactive visualizations with sub-second load times.",
        },
        {
          title: "User Training",
          body: "Conducted training sessions and created documentation for self-service analytics.",
        },
      ],
      decisions: [
        {
          title: "Progressive disclosure",
          why: "Show the most important metrics first, with drill-down for details. Users shouldn't be overwhelmed.",
        },
        {
          title: "Real-time updates",
          why: "Business decisions happen now, not yesterday. Live data means faster responses to changes.",
        },
      ],
      outcomes: [
        "80% reduction in report compilation time",
        "Real-time visibility into all key metrics",
        "Improved decision-making speed across departments",
      ],
      reflection:
        "The best dashboard is the one people actually use. Design for the decision, not the data.",
    },
  },

  /* ─────────────── 5 · CLOUD MIGRATION ─────────────── */
  {
    slug: "cloud-migration",
    title: "Enterprise Cloud Migration",
    tags: ["AWS", "Docker", "Kubernetes", "DevOps"],
    year: "2024",
    oneLiner:
      "Migrating a legacy enterprise application to cloud-native architecture — zero downtime, 60% cost reduction.",
    contribution:
      "Complete cloud transformation from monolith to microservices with zero downtime.",
    coverLabel: "CLOUD MIGRATION",
    cover: { bg: "#FFB200", ink: "dark", mark: "CM" },
    study: {
      role: "Cloud & DevOps",
      timeline: "2024 · 6 months",
      context:
        "An established enterprise was running on aging infrastructure. Maintenance costs were rising, deployments were risky, and scaling was manual and slow.",
      problem:
        "The monolithic application was expensive to run, difficult to update, and couldn't scale with demand. Every deployment was a high-stakes event.",
      process: [
        {
          title: "Assessment & Planning",
          body: "Analyzed the monolith, identified service boundaries, and created a migration roadmap.",
        },
        {
          title: "Containerization",
          body: "Dockerized services, set up Kubernetes cluster, and implemented service mesh for communication.",
        },
        {
          title: "Data Migration",
          body: "Migrated databases with zero downtime using blue-green deployment strategy.",
        },
        {
          title: "Optimization",
          body: "Implemented auto-scaling, monitoring, and cost optimization across all services.",
        },
      ],
      decisions: [
        {
          title: "Strangler fig pattern",
          why: "Gradually replace the monolith instead of a risky big-bang migration. Reduce risk, maintain continuity.",
        },
        {
          title: "Kubernetes over serverless",
          why: "The team needed control over infrastructure and the ability to run legacy services alongside new ones.",
        },
      ],
      outcomes: [
        "Zero downtime during migration",
        "60% reduction in infrastructure costs",
        "Deployments reduced from weeks to minutes",
      ],
      reflection:
        "Cloud migration isn't about technology — it's about transforming how your organization builds and runs software.",
    },
  },

  /* ─────────────── 6 · DIGITAL MARKETING ─────────────── */
  {
    slug: "digital-marketing",
    title: "Digital Marketing Transformation",
    tags: ["SEO", "Analytics", "Content Strategy", "Growth"],
    year: "2024",
    oneLiner:
      "A comprehensive digital marketing strategy that increased organic traffic by 150% and doubled lead generation.",
    contribution:
      "Full-stack digital marketing — SEO, content strategy, analytics, and conversion optimization.",
    coverLabel: "DIGITAL MARKETING",
    cover: { bg: "#00AA3C", ink: "light", mark: "DM" },
    study: {
      role: "Digital Marketing & Growth",
      timeline: "2024 · Ongoing",
      context:
        "A B2B company was relying entirely on paid advertising for leads. They needed a sustainable organic growth strategy to reduce dependency on paid channels.",
      problem:
        "Customer acquisition costs were rising as ad prices increased. The company needed to build organic presence without sacrificing lead quality.",
      process: [
        {
          title: "Audit & Strategy",
          body: "Comprehensive SEO audit, competitor analysis, and content gap identification.",
        },
        {
          title: "Content Engine",
          body: "Built a content strategy targeting high-intent keywords with valuable, informative content.",
        },
        {
          title: "Technical SEO",
          body: "Fixed site speed, mobile experience, and technical issues that were holding back rankings.",
        },
        {
          title: "Analytics & Optimization",
          body: "Set up tracking, created dashboards, and continuously optimized based on performance data.",
        },
      ],
      decisions: [
        {
          title: "Quality over quantity",
          why: "One great article beats ten mediocre ones. Focus on content that genuinely helps the audience.",
        },
        {
          title: "Data-driven decisions",
          why: "Every strategy decision should be backed by data. Measure everything, assume nothing.",
        },
      ],
      outcomes: [
        "150% increase in organic traffic",
        "2x increase in qualified leads",
        "50% reduction in cost per acquisition",
      ],
      reflection:
        "Digital marketing is a marathon, not a sprint. Consistent, quality work compounds over time.",
    },
  },
];
