/* Credentials — Webczar Solutions capabilities and expertise areas.
 *
 * Our team's capabilities across software development, AI, cloud, design,
 * and marketing — everything modern businesses need under one roof. */

export type Cert = {
  no: string; /* deck-style section number */
  /* the awarding organisation, exactly as it issued the credential */
  issuer: string | null;
  /* official issuer mark, supplied by Webczar Solutions. Always rendered on a light
     plate so brand colours stay true on dark and light panels alike.
     `aspect` is the file's real ratio — the mark is never distorted. */
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  {
    no: "2.1",
    issuer: "Web Development",
    title: "Full-Stack Web Development",
    year: null,
    credentialId: null,
    verified: true,
    skills: [
      "React, Next.js, Vue.js",
      "Node.js, Express, FastAPI",
      "TypeScript, JavaScript ES6+",
    ],
    metric: { value: "100+", label: "Projects delivered" },
    fr: {
      skills: [
        "React, Next.js, Vue.js",
        "Node.js, Express, FastAPI",
        "TypeScript, JavaScript ES6+",
      ],
      metricLabel: "Projets livrés",
    },
  },
  {
    no: "2.2",
    issuer: "AI & ML",
    title: "Artificial Intelligence & Machine Learning",
    year: null,
    credentialId: null,
    verified: true,
    skills: [
      "Custom AI model development",
      "Natural Language Processing",
      "Computer Vision & ML Pipelines",
    ],
    metric: { value: "AI", label: "First approach" },
    fr: {
      title: "Intelligence artificielle & apprentissage automatique",
      skills: [
        "Développement de modèles IA personnalisés",
        "Traitement du langage naturel",
        "Vision par ordinateur et pipelines ML",
      ],
      metricLabel: "Approche IA-first",
    },
  },
  {
    no: "2.3",
    issuer: "Mobile",
    title: "Mobile App Development",
    year: null,
    credentialId: null,
    verified: true,
    skills: [
      "React Native & Flutter",
      "iOS & Android native",
      "Cross-platform solutions",
    ],
    metric: { value: "iOS", label: "& Android" },
    fr: {
      title: "Développement d'applications mobiles",
      skills: [
        "React Native & Flutter",
        "iOS & Android natif",
        "Solutions multiplateformes",
      ],
      metricLabel: "& Android",
    },
  },
  {
    no: "2.4",
    issuer: "Cloud",
    title: "Cloud Infrastructure & DevOps",
    year: null,
    credentialId: null,
    verified: true,
    skills: [
      "AWS, Azure, GCP",
      "Docker & Kubernetes",
      "CI/CD & Infrastructure as Code",
    ],
    metric: { value: "99.9%", label: "Uptime guaranteed" },
    fr: {
      title: "Infrastructure cloud & DevOps",
      skills: [
        "AWS, Azure, GCP",
        "Docker & Kubernetes",
        "CI/CD et Infrastructure as Code",
      ],
      metricLabel: "Temps d'activité garanti",
    },
  },
  {
    no: "2.5",
    issuer: "Design",
    title: "UI/UX Design & Design Systems",
    year: null,
    credentialId: null,
    verified: true,
    skills: [
      "User Research & Prototyping",
      "Design Systems & Components",
      "Accessibility & Responsive Design",
    ],
    metric: { value: "UX", label: "First approach" },
    fr: {
      title: "Design UI/UX & systèmes de design",
      skills: [
        "Recherche utilisateur & prototypage",
        "Systèmes de design & composants",
        "Accessibilité & design responsive",
      ],
      metricLabel: "Approche UX-first",
    },
  },
];
