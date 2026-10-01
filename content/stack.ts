/* Webczar Solutions Technology & Branding Platforms.
 * Platforms and modern technologies we leverage to build stronger brands,
 * reach wider audiences, and drive measurable results.
 */

export type Platform = {
  id: string;
  name: string;
  subtitles: [string, string];
  glowColor: string;
  accentColor: string;
  category: "Branding" | "Digital Marketing" | "Software Development";
  baseAngleDeg: number;
  desktopPos: {
    top: string;
    left?: string;
    right?: string;
  };
};

export const PLATFORMS: Platform[] = [
  {
    id: "meta",
    name: "Meta",
    subtitles: ["Social Media Ads", "Brand Awareness"],
    glowColor: "rgba(6, 104, 225, 0.24)",
    accentColor: "#0668E1",
    category: "Digital Marketing",
    baseAngleDeg: -140,
    desktopPos: { top: "12%", left: "17%" },
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    subtitles: ["Intuitive Interfaces", "Design Systems"],
    glowColor: "rgba(255, 106, 0, 0.26)",
    accentColor: "#FF6A00",
    category: "Branding",
    baseAngleDeg: -105,
    desktopPos: { top: "6%", left: "38%" },
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    subtitles: ["Conversational Support", "High Engagement"],
    glowColor: "rgba(37, 211, 102, 0.28)",
    accentColor: "#25D366",
    category: "Branding",
    baseAngleDeg: -70,
    desktopPos: { top: "6%", left: "62%" },
  },
  {
    id: "text-messaging",
    name: "Text Messaging",
    subtitles: ["Direct Communication", "Higher Conversions"],
    glowColor: "rgba(34, 197, 94, 0.24)",
    accentColor: "#10B981",
    category: "Branding",
    baseAngleDeg: -40,
    desktopPos: { top: "13%", right: "17%" },
  },
  {
    id: "rcs",
    name: "RCS",
    subtitles: ["Rich Messages", "Stronger Connections"],
    glowColor: "rgba(59, 130, 246, 0.24)",
    accentColor: "#0284C7",
    category: "Branding",
    baseAngleDeg: -12,
    desktopPos: { top: "35%", right: "9%" },
  },
  {
    id: "social-media",
    name: "Social Media Marketing",
    subtitles: ["Social Media Marketing", "Content & Campaigns"],
    glowColor: "rgba(244, 63, 94, 0.25)",
    accentColor: "#E11D48",
    category: "Digital Marketing",
    baseAngleDeg: 20,
    desktopPos: { top: "59%", right: "7%" },
  },
  {
    id: "web-app",
    name: "Web & App Development",
    subtitles: ["Custom Solutions", "Scalable Growth"],
    glowColor: "rgba(14, 165, 233, 0.24)",
    accentColor: "#0284C7",
    category: "Software Development",
    baseAngleDeg: 55,
    desktopPos: { top: "82%", right: "19%" },
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    subtitles: ["Cloud Infrastructure", "24/7 Scalability"],
    glowColor: "rgba(2, 132, 199, 0.26)",
    accentColor: "#0284C7",
    category: "Software Development",
    baseAngleDeg: 90,
    desktopPos: { top: "92%", left: "50%" },
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    subtitles: ["Smarter Automation", "Better Engagement"],
    glowColor: "rgba(139, 92, 246, 0.28)",
    accentColor: "#7C3AED",
    category: "Software Development",
    baseAngleDeg: 125,
    desktopPos: { top: "82%", left: "21%" },
  },
  {
    id: "seo",
    name: "SEO",
    subtitles: ["Higher Rankings", "More Traffic"],
    glowColor: "rgba(16, 185, 129, 0.24)",
    accentColor: "#10B981",
    category: "Digital Marketing",
    baseAngleDeg: 155,
    desktopPos: { top: "62%", left: "11%" },
  },
  {
    id: "google",
    name: "Google",
    subtitles: ["Search Ads", "Performance Marketing"],
    glowColor: "rgba(251, 188, 5, 0.28)",
    accentColor: "#FBBC05",
    category: "Digital Marketing",
    baseAngleDeg: -175,
    desktopPos: { top: "37%", left: "10%" },
  },
];

export const PILLARS = [
  {
    id: "branding",
    title: "Branding Platforms",
    color: "#FF5722",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    color: "#2563EB",
  },
  {
    id: "software",
    title: "Software Development",
    color: "#7C3AED",
  },
] as const;

export type Tool = {
  name: string;
  group: "AI" | "Design" | "Build" | "Creative";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  { name: "Claude", group: "AI", src: "/images/logos/claude.png" },
  { name: "ChatGPT", group: "AI", src: "/images/logos/chatgpt.png" },
  { name: "Gemini", group: "AI", mono: "Gm", color: "#2C6BD8" },
  { name: "Perplexity", group: "AI", mono: "Px", color: "#1F7A86" },
  { name: "Figma", group: "Design", src: "/images/logos/figma.png" },
  { name: "Framer", group: "Design", src: "/images/logos/framer.png" },
  { name: "Spline", group: "Design", src: "/images/logos/spline.png" },
  { name: "Notion", group: "Design", src: "/images/logos/notion.png" },
  { name: "Cursor", group: "Build", mono: "Cu", color: "#141414" },
  { name: "VS Code", group: "Build", mono: "VS", color: "#0065A9" },
  { name: "GitHub", group: "Build", mono: "GH", color: "#181717" },
  { name: "React", group: "Build", mono: "Re", color: "#0E7C99" },
  { name: "Next.js", group: "Build", mono: "N", color: "#141414" },
  { name: "Tailwind", group: "Build", mono: "TW", color: "#0891A6" },
  { name: "Node.js", group: "Build", mono: "NJ", color: "#339933" },
  { name: "Python", group: "Build", mono: "Py", color: "#3776AB" },
  { name: "Photoshop", group: "Creative", mono: "Ps", color: "#1E7FC4" },
  { name: "Illustrator", group: "Creative", mono: "Ai", color: "#D97A00" },
  { name: "After Effects", group: "Creative", mono: "Ae", color: "#5C4FE0" },
  { name: "Midjourney", group: "Creative", src: "/images/logos/midjourney.png" },
  { name: "CapCut", group: "Creative", src: "/images/logos/capcut.png" },
  { name: "Runway", group: "Creative", mono: "Rw", color: "#141414" },
  { name: "ElevenLabs", group: "Creative", mono: "11", color: "#141414" },
];
