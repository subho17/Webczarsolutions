/* Credentials / Add-On Services — Webczar Solutions specialized offerings.
 *
 * High-impact add-on services:
 * - Podcast Shoot, Short Reels design
 * - Online PR Article Publish Services
 * - IVR - Interactive Voice Response for Incoming call Solutions
 * - Aerial Drone Videography & Project Showcase Videos
 */

export type Cert = {
  no: string; /* deck-style section number */
  issuer: string | null;
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
    no: "01",
    issuer: "Media & Studio",
    title: "Podcast Shoot, Short Reels Design",
    year: "Fast Turnaround",
    credentialId: "SRV-PODCAST-REELS",
    credentialUrl: "/services/podcast-reels-production",
    verified: true,
    skills: [
      "Multi-camera studio & on-location podcast production",
      "Viral short reels, TikTok & YouTube Shorts design",
      "Dynamic animated captions, audio mastering & color grading",
    ],
    metric: { value: "4K", label: "Studio & Reels" },
    fr: {
      title: "Tournage de podcast, création de Reels courts",
      skills: [
        "Production podcast multi-caméras en studio et sur site",
        "Conception de Reels courts viraux, TikTok et Shorts",
        "Sous-titres animés dynamiques, mastering audio et étalonnage",
      ],
      metricLabel: "Studio & Reels",
    },
  },
  {
    no: "02",
    issuer: "Digital PR & Media",
    title: "Online PR Article Publish Services",
    year: "Guaranteed Placement",
    credentialId: "SRV-ONLINE-PR",
    credentialUrl: "/services/online-pr-article-publishing",
    verified: true,
    skills: [
      "Tier-1 digital media & news publication features",
      "High-authority brand storytelling & executive press releases",
      "Google News indexing, digital reputation & SEO backlinks",
    ],
    metric: { value: "100+", label: "Media Publications" },
    fr: {
      title: "Services de publication d'articles RP en ligne",
      skills: [
        "Articles dans les grands médias et portails d'actualités",
        "Storytelling de marque d'autorité et communiqués de presse",
        "Indexation Google News, réputation en ligne et backlinks SEO",
      ],
      metricLabel: "Publications médias",
    },
  },
  {
    no: "03",
    issuer: "Telephony & Voice",
    title: "IVR - Interactive Voice Response for Incoming Call Solutions",
    year: "24/7 Automation",
    credentialId: "SRV-IVR-SOLUTIONS",
    credentialUrl: "/services/ivr-incoming-call-solutions",
    verified: true,
    skills: [
      "Custom multi-level IVR call routing & auto-attendant menus",
      "Seamless CRM, WhatsApp & VoIP telephony integration",
      "Professional studio voiceovers, call tracking & analytics",
    ],
    metric: { value: "24/7", label: "Automated Call Handling" },
    fr: {
      title: "SVI - Réponse vocale interactive pour appels entrants",
      skills: [
        "Routage d'appels SVI multi-niveaux et menus automatisés",
        "Intégration téléphonie VoIP, WhatsApp et CRM fluide",
        "Voix off professionnelles en studio et suivi des appels",
      ],
      metricLabel: "Gestion automatisée 24/7",
    },
  },
  {
    no: "04",
    issuer: "Aerial Cinematography",
    title: "Aerial Drone Videography",
    year: "Licensed Pilots",
    credentialId: "SRV-DRONE-AERIAL",
    credentialUrl: "/services/aerial-drone-videography",
    verified: true,
    skills: [
      "Professional aerial video footage of property/project from above",
      "Cinematic project showcase videos & walkthrough films",
      "4K / 6K HDR aerial cinematography & high-impact editing",
    ],
    metric: { value: "4K/6K", label: "Aerial Video Footage" },
    fr: {
      title: "Vidéographie aérienne par drone",
      skills: [
        "Prises de vue vidéo aériennes professionnelles de votre projet",
        "Vidéos cinématographiques de présentation et de valorisation",
        "Cinématographie aérienne HDR 4K / 6K et montage percutant",
      ],
      metricLabel: "Prises de vue aériennes",
    },
  },
];
