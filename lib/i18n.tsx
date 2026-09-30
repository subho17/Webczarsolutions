"use client";

/*
 * Centralised EN/FR store for every user-facing string on the site.
 *
 * Switching is pure React state: scroll position, the active section and all
 * pinned ScrollTriggers survive, with no reload. The choice persists in
 * localStorage and is mirrored onto <html lang> for assistive tech.
 *
 * Proper nouns (companies, products, tools, place names) are deliberately
 * NOT translated. French runs longer than English, so copy here is written
 * to fit the same layout rather than translated literally.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Entry = { en: string; fr: string };

export const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.services": { en: "Services", fr: "Services" },
  "nav.work": { en: "Work", fr: "Projets" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.menu": { en: "Open menu", fr: "Ouvrir le menu" },
  "nav.close": { en: "Close menu", fr: "Fermer le menu" },

  /* ---------------- intro ---------------- */
  "intro.scroll": { en: "Scroll to enter", fr: "Faites défiler pour entrer" },

  /* ---------------- hero ---------------- */
  "hero.kicker": {
    en: "Technology & Digital Solutions",
    fr: "Solutions technologiques & numériques",
  },
  "hero.h1a": { en: "Building digital", fr: "Construire des solutions" },
  "hero.h1aEm": { en: "solutions.", fr: "numériques." },
  "hero.h1b": { en: "That drive", fr: "Qui propulsent" },
  "hero.h1bEm": { en: "growth.", fr: "la croissance." },
  "hero.sub": {
    en: "We combine software development, AI, web & mobile apps, UI/UX design, e-commerce, automation, cloud technologies, and digital marketing to create practical and scalable solutions for modern businesses.",
    fr: "Nous combinons développement logiciel, IA, applications web et mobiles, design UI/UX, e-commerce, automatisation, technologies cloud et marketing numérique pour créer des solutions pratiques et évolutives.",
  },
  "hero.cta1": { en: "View Our Work", fr: "Voir nos projets" },
  "hero.cta2": { en: "Our Services", fr: "Nos services" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Faites défiler" },
  "stat.projects": { en: "Projects Delivered", fr: "Projets livrés" },
  "stat.years": { en: "Years of Experience", fr: "Ans d'expérience" },
  "stat.countries": { en: "Clients Worldwide", fr: "Clients dans le monde" },
  "stat.satisfaction": { en: "Client Satisfaction", fr: "Satisfaction client" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About Us", fr: "À propos" },
  "about.h2a": { en: "Technology is how we", fr: "La technologie est notre" },
  "about.h2b": { en: "solve —", fr: "façon de résoudre —" },
  "about.h2Em": { en: "innovate", fr: "innover" },
  "about.h2c": { en: "and grow.", fr: "et croître." },
  "about.m1": {
    en: "End-to-end digital expertise under one roof",
    fr: "Expertise numérique de bout en bout",
  },
  "about.m2": {
    en: "Years of delivering digital transformation",
    fr: "Ans de transformation numérique",
  },
  "about.m3": {
    en: "Revenue generated for our clients",
    fr: "Revenus générés pour nos clients",
  },
  "about.m4": {
    en: "Solutions deployed across industries",
    fr: "Solutions déployées dans tous les secteurs",
  },
  "about.edu": {
    en: "Software Development · AI & Machine Learning · Cloud Technologies · Digital Marketing · UI/UX Design · E-Commerce",
    fr: "Développement logiciel · IA & Machine Learning · Technologies Cloud · Marketing numérique · Design UI/UX · E-Commerce",
  },
  "about.cta": { en: "Explore Our Services", fr: "Découvrir nos services" },

  /* ---------------- journey ----------------
     Chapter copy lives in content/journey.ts; only the chrome is here. */
  "journey.eyebrow": { en: "Our Journey", fr: "Notre parcours" },
  "journey.enter": { en: "Scroll to travel", fr: "Faites défiler pour avancer" },
  "journey.chapter": { en: "Chapter", fr: "Chapitre" },
  "journey.lede": {
    en: "From a vision to a trusted technology partner — the milestones that shaped Webczar Solutions into a comprehensive digital powerhouse.",
    fr: "D'une vision à un partenaire technologique de confiance — les jalons qui ont façonné Webczar Solutions en une puissance numérique complète.",
  },

  /* ---------------- design stack ---------------- */
  "stack.eyebrow": { en: "Our Tech Stack", fr: "Notre pile technologique" },
  "stack.h2": { en: "Technologies", fr: "Technologies" },
  "stack.h2Em": { en: "We Use.", fr: "que nous utilisons." },
  "stack.lede": {
    en: "From AI and cloud to design and development — the tools and platforms we leverage to build secure, high-performance digital experiences.",
    fr: "De l'IA et du cloud au design et au développement — les outils et plateformes que nous exploitons pour créer des expériences numériques sécurisées et performantes.",
  },
  "stack.count": { en: "tools", fr: "outils" },
  "stack.disciplines": { en: "disciplines", fr: "disciplines" },

  /* ---------------- work ---------------- */
  "work.eyebrow": { en: "Our Work", fr: "Nos projets" },
  "work.h2a": { en: "Featured projects,", fr: "Projets sélectionnés," },
  "work.h2b": { en: "built to", fr: "conçus pour" },
  "work.h2Em": { en: "deliver.", fr: "livrer." },
  "work.lede": {
    en: "From startups to established enterprises — each project showcases our ability to transform business challenges into digital solutions.",
    fr: "Des startups aux entreprises établies — chaque projet démontre notre capacité à transformer les défis commerciaux en solutions numériques.",
  },
  "work.open": { en: "View case study", fr: "Voir l'étude de cas" },
  "work.hint": { en: "SCROLL TO BROWSE", fr: "FAITES DÉFILER" },

  /* ---------------- experience ---------------- */
  "exp.eyebrow": { en: "Services", fr: "Services" },
  "exp.h2": { en: "What we", fr: "Ce que nous" },
  "exp.h2Em": { en: "deliver.", fr: "offrons." },
  "exp.worked": { en: "What we do", fr: "Ce que nous faisons" },
  "exp.impact": { en: "Impact", fr: "Impact" },
  "exp.tools": { en: "Technologies", fr: "Technologies" },
  "exp.hint": { en: "SCROLL · CLICK TO JUMP", fr: "DÉFILER · CLIQUER POUR NAVIGUER" },
  "type.Internship": { en: "Service", fr: "Service" },
  "type.Full-time": { en: "Core Service", fr: "Service principal" },
  "type.Hackathon": { en: "Specialized", fr: "Spécialisé" },
  "type.Freelance": { en: "Consulting", fr: "Conseil" },

  /* ---------------- credentials ---------------- */
  "cert.introLabel": { en: "Introduction", fr: "Introduction" },
  "cert.introTitle1": { en: "OUR", fr: "NOS" },
  "cert.introTitle2": { en: "CAPABILITIES", fr: "CAPACITÉS" },
  "cert.introBody": {
    en: "Comprehensive digital expertise spanning software development, AI, cloud, design, and marketing — everything modern businesses need under one roof.",
    fr: "Expertise numérique complète couvrant le développement logiciel, l'IA, le cloud, le design et le marketing — tout ce dont les entreprises modernes ont besoin.",
  },
  "cert.introNote": {
    en: "Full-stack capabilities · AI-first approach · Cloud-native solutions.",
    fr: "Capacités full-stack · Approche IA-native · Solutions cloud-natives.",
  },
  "cert.eyebrow": { en: "Capabilities", fr: "Capacités" },
  "cert.h2": { en: "Our Expertise", fr: "Notre expertise" },
  "cert.lede": {
    en: "Comprehensive digital capabilities that enable us to deliver end-to-end solutions for businesses of all sizes.",
    fr: "Capacités numériques complètes qui nous permettent de livrer des solutions de bout en bout pour les entreprises de toutes tailles.",
  },
  "cert.certified": { en: "Certified", fr: "Certifié" },
  "cert.brandRole": { en: "Technology Partner", fr: "Partenaire technologique" },
  "cert.issuerTBC": { en: "Provider", fr: "Fournisseur" },
  "cert.certification": { en: "Capability", fr: "Capacité" },
  "cert.verified": { en: "✓ Verified", fr: "✓ Vérifié" },
  "cert.onRequest": { en: "Available on request", fr: "Disponible sur demande" },
  "cert.issuedBy": { en: "Powered by", fr: "Propulsé par" },
  "cert.year": { en: "Since", fr: "Depuis" },
  "cert.id": { en: "Capability ID", fr: "ID de capacité" },
  "cert.tbc": { en: "To confirm", fr: "À confirmer" },
  "cert.skills": { en: "Technologies", fr: "Technologies" },
  "cert.verify": { en: "Learn more ↗", fr: "En savoir plus ↗" },
  "cert.foot": { en: "Capabilities", fr: "Capacités" },

  /* ---------------- gallery — the people behind the work ---------------- */
  "gallery.eyebrow": { en: "Our Work", fr: "Nos réalisations" },
  "gallery.h2a": { en: "Projects that", fr: "Projets qui" },
  "gallery.h2Em": { en: "speak", fr: "parlent" },
  "gallery.lede": {
    en: "A showcase of our digital solutions — from web applications to AI-powered platforms, each project reflects our commitment to innovation and quality.",
    fr: "Une vitrine de nos solutions numériques — des applications web aux plateformes alimentées par l'IA, chaque projet reflète notre engagement envers l'innovation et la qualité.",
  },
  "gallery.alt": {
    en: "A showcase of our digital work",
    fr: "Une vitrine de nos réalisations numériques",
  },
  "gallery.frames": { en: "Projects", fr: "Projets" },
  "gallery.hint": { en: "Scroll to explore our work", fr: "Faites défiler pour explorer nos projets" },

  /* ---------------- connect ---------------- */
  "connect.eyebrow": { en: "Get In Touch", fr: "Contactez-nous" },
  "connect.h2a": { en: "Let's build something", fr: "Construisons quelque chose" },
  "connect.h2Em": { en: "great.", fr: "d'ensemble." },
  "connect.lede": {
    en: "Whether you're a startup looking to launch or an enterprise seeking to modernize — we'd love to discuss how we can help you achieve your digital goals.",
    fr: "Que vous soyez une startup cherchant à se lancer ou une entreprise cherchant à se moderniser — nous serions ravis de discuter de la manière dont nous pouvons vous aider à atteindre vos objectifs numériques.",
  },
  "connect.cta": { en: "Start a Conversation", fr: "Démarrer la conversation" },
  "connect.credit": { en: "Built with passion by", fr: "Conçu avec passion par" },
  "connect.top": { en: "Back to top ↑", fr: "Haut de page ↑" },

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to work", fr: "← Retour aux projets" },
  "case.kicker": { en: "Case Study", fr: "Étude de cas" },
  "case.role": { en: "Role", fr: "Rôle" },
  "case.timeline": { en: "Timeline", fr: "Période" },
  "case.focus": { en: "Focus", fr: "Focus" },
  "case.site": { en: "Live product", fr: "Produit en ligne" },
  "case.repo": { en: "Source", fr: "Code source" },
  "case.cover": { en: "COVER", fr: "VISUEL" },
  "case.context": { en: "Context", fr: "Contexte" },
  "case.problem": { en: "The Problem", fr: "Le problème" },
  "case.process": { en: "Process", fr: "Démarche" },
  "case.decisions": { en: "Design Decisions", fr: "Décisions de design" },
  "case.outcome": { en: "Outcome", fr: "Résultats" },
  "case.reflection": { en: "Reflection", fr: "Ce que j'en retire" },
  "case.all": { en: "← All projects", fr: "← Tous les projets" },
  "case.next": { en: "Next project", fr: "Projet suivant" },

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": { en: "← WEBCZAR", fr: "← WEBCZAR" },
  "lab.hint": {
    en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
    fr: "LAB · TUNNEL TYPE — FAITES DÉFILER POUR AVANCER · BOUGEZ LA SOURIS",
  },

  /* ---------------- 404 ---------------- */
  "nf.label": { en: "404 — NOT FOUND", fr: "404 — PAGE INTROUVABLE" },
  "nf.h1": { en: "This page went", fr: "Cette page a quitté" },
  "nf.h1Em": { en: "off the grid.", fr: "les radars." },
  "nf.cta": { en: "Back to home →", fr: "Retour à l'accueil →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => DICT[k]?.en ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "fr") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {
      /* private mode — the choice simply won't persist */
    }
    document.documentElement.lang = l;
  };

  const t = (k: string) => DICT[k]?.[lang] ?? DICT[k]?.en ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a translated field off a content record: `L(lang, item, "summary")`
 *  returns `item.fr.summary` when available, else the English original. */
export function L<T extends { fr?: Record<string, unknown> }>(
  lang: Lang,
  item: T,
  field: keyof T & string
): string {
  if (lang === "fr" && item.fr && typeof item.fr[field] === "string") {
    return item.fr[field] as string;
  }
  return item[field] as unknown as string;
}
