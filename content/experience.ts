/* Professional experience — Webczar Solutions services and capabilities.
   Reverse chronological: newest first. */

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
  /* panel color — intentional, one vibrant per role (Experience deck) */
  color: string;
  fg: "light" | "dark";
  /* Company mark. `variant` follows what the supplied file actually IS:
     · "tile"  — the logo ships with its own background baked in (square
                 avatars), so it is shown as a rounded tile, uncropped
     · "plate" — transparent artwork that needs a light ground to read;
                 the plate's width follows the logo's true aspect ratio
     · absent  — no official file supplied yet → typographic fallback */
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    /* Placement adapts to how dense the panel's copy is — a logo is not
       forced into the same slot for every company.
       "right" — sits beside the content (default, when there is room)
       "below" — closes the panel underneath the content (dense copy) */
    placement?: "right" | "below";
  };
  /* French copy for the translatable fields (see lib/i18n.tsx → L()) */
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "Web Development",
    role: "Full-Stack Development",
    type: "Full-time",
    location: "India",
    period: "Core Service",
    summary:
      "Building modern, scalable web applications using cutting-edge technologies — from concept to deployment.",
    achievements: [
      "Custom web applications built with React, Next.js, Node.js and modern frameworks",
      "Responsive, mobile-first designs that work across all devices",
      "API development, database design and cloud deployment",
    ],
    outcome: "Scalable web solutions that drive business growth",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
    color: "#0072E3",
    fg: "light",
  },
  {
    company: "AI & Machine Learning",
    role: "AI Solutions",
    type: "Hackathon",
    location: "India",
    period: "Specialized",
    summary:
      "Leveraging artificial intelligence and machine learning to create intelligent, automated solutions for modern businesses.",
    achievements: [
      "Custom AI models trained for specific business use cases",
      "Natural language processing and computer vision solutions",
      "AI-powered automation that reduces manual work by 60%+",
    ],
    outcome: "Intelligent solutions that transform business operations",
    skills: ["Python", "TensorFlow", "OpenAI", "LangChain", "RAG", "ML Pipelines"],
    color: "#6D3BF5",
    fg: "light",
  },
  {
    company: "Mobile Development",
    role: "Cross-Platform Apps",
    type: "Full-time",
    location: "India",
    period: "Core Service",
    summary:
      "Creating beautiful, performant mobile applications for iOS and Android using a single codebase.",
    achievements: [
      "React Native and Flutter development for cross-platform apps",
      "Native iOS and Android development when needed",
      "App Store optimization and deployment support",
    ],
    outcome: "Mobile apps that engage users and drive retention",
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase", "App Store"],
    color: "#FF2E0F",
    fg: "light",
  },
  {
    company: "UI/UX Design",
    role: "Design & Experience",
    type: "Freelance",
    location: "India",
    period: "Consulting",
    summary:
      "User-centered design that transforms complex business requirements into intuitive, beautiful digital experiences.",
    achievements: [
      "User research, wireframing, prototyping and design systems",
      "Conversion-focused design that increases engagement by 40%+",
      "Accessibility-first approach ensuring inclusive experiences",
    ],
    outcome: "Designs that users love and businesses trust",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping", "Accessibility"],
    color: "#FF6A00",
    fg: "light",
  },
  {
    company: "Cloud & DevOps",
    role: "Infrastructure & Deployment",
    type: "Full-time",
    location: "India",
    period: "Core Service",
    summary:
      "Cloud-native solutions and DevOps practices that ensure your applications are secure, scalable and always available.",
    achievements: [
      "AWS, Azure and GCP deployment and management",
      "CI/CD pipelines, containerization and microservices",
      "99.9% uptime with auto-scaling and monitoring",
    ],
    outcome: "Reliable infrastructure that scales with your business",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    color: "#FFB200",
    fg: "dark",
  },
  {
    company: "Digital Marketing",
    role: "Growth & Analytics",
    type: "Freelance",
    location: "India",
    period: "Consulting",
    summary:
      "Data-driven digital marketing strategies that increase visibility, engagement and conversions across all channels.",
    achievements: [
      "SEO, SEM and content marketing that drives organic growth",
      "Social media strategy and paid advertising campaigns",
      "Analytics and reporting that inform business decisions",
    ],
    outcome: "Marketing that delivers measurable ROI",
    skills: ["SEO", "Google Ads", "Analytics", "Content Strategy", "Social Media"],
    color: "#00AA3C",
    fg: "light",
  },
];
