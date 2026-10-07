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
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Entry = { en: string; fr: string };

export const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.services": { en: "Services", fr: "Services" },
  "nav.extraServices": { en: "Add-On Services", fr: "Services complémentaires" },
  "nav.work": { en: "Blog", fr: "Blog" },
  "nav.blog": { en: "Blog", fr: "Blog" },
  "nav.careers": { en: "Careers", fr: "Carrières" },
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
  "hero.h1a": { en: "Building Digital", fr: "Construire des solutions" },
  "hero.h1aEm": { en: "Solutions.", fr: "numériques." },
  "hero.h1b": { en: "That Drive", fr: "Qui propulsent" },
  "hero.h1bEm": { en: "Growth.", fr: "la croissance." },
  "hero.sub": {
    en: "We combine software development, AI, web & mobile apps, UI/UX design, e-commerce, automation, cloud technologies, and digital marketing to create practical and scalable solutions for modern businesses.",
    fr: "Nous combinons développement logiciel, IA, applications web et mobiles, design UI/UX, e-commerce, automatisation, technologies cloud et marketing numérique pour créer des solutions pratiques et évolutives.",
  },
  "hero.cta1": { en: "Connect with sales", fr: "Contacter les ventes" },
  "hero.cta2": { en: "Chat with us", fr: "Discuter avec nous" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Faites défiler" },
  "stat.projects": { en: "Completed Projects", fr: "Projets réalisés" },
  "stat.years": { en: "Years of Experience", fr: "Ans d'expérience" },
  "stat.countries": { en: "Full-Stack Specialists", fr: "Spécialistes Full-Stack" },
  "stat.satisfaction": { en: "Client Satisfaction", fr: "Satisfaction client" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About Us", fr: "À propos" },
  "about.h2a": { en: "Technology is how we", fr: "La technologie est notre" },
  "about.h2b": { en: "solve —", fr: "façon de résoudre —" },
  "about.h2Em": { en: "innovate", fr: "innover" },
  "about.h2c": { en: "and grow.", fr: "et croître." },
  "about.p1": {
    en: "Webczar Solutions is a creative technology company specializing in Branding, Digital Marketing, and Software Development. We help businesses build strong brands, reach the right audience, and create powerful digital solutions that drive growth.",
    fr: "Webczar Solutions est une entreprise de technologie créative spécialisée dans le branding, le marketing numérique et le développement de logiciels. Nous aidons les entreprises à bâtir des marques fortes, à toucher le bon public et à créer des solutions numériques performantes qui stimulent la croissance.",
  },
  "about.p2": {
    en: "From creative branding and performance marketing to custom websites and software, we combine creativity, technology, and strategy to deliver solutions that make businesses stand out and succeed in the digital world.",
    fr: "Du branding créatif et marketing de performance aux sites web et logiciels sur mesure, nous combinons créativité, technologie et stratégie pour offrir des solutions qui permettent aux entreprises de se démarquer et de réussir dans le monde numérique.",
  },
  "about.m1": {
    en: "Years of Experience",
    fr: "Ans d'expérience",
  },
  "about.m2": {
    en: "Projects Completed",
    fr: "Projets réalisés",
  },
  "about.m3": {
    en: "Professional Team",
    fr: "Équipe professionnelle",
  },
  "about.m4": {
    en: "Awards",
    fr: "Prix remportés",
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

  /* ---------------- technology & branding platforms ---------------- */
  "stack.eyebrow": {
    en: "OUR TECHNOLOGY & BRANDING PLATFORMS",
    fr: "NOS PLATEFORMES TECHNOLOGIQUES & DE MARQUE",
  },
  "stack.h2": {
    en: "Powering Growth with",
    fr: "Accélérer la croissance avec",
  },
  "stack.h2Accent": {
    en: "the Right Technology",
    fr: "la bonne technologie",
  },
  "stack.lede": {
    en: "We leverage leading platforms and modern technologies to build stronger brands, reach wider audiences and drive measurable results.",
    fr: "Nous exploitons les meilleures plateformes et technologies modernes pour bâtir des marques plus fortes, toucher un public plus large et générer des résultats mesurables.",
  },
  "stack.pillar1": {
    en: "Branding Platforms",
    fr: "Plateformes de marque",
  },
  "stack.pillar2": {
    en: "Digital Marketing",
    fr: "Marketing numérique",
  },
  "stack.pillar3": {
    en: "Software Development",
    fr: "Développement logiciel",
  },

  /* ---------------- work / blog ---------------- */
  "work.eyebrow": { en: "Our Blog", fr: "Notre Blog" },
  "work.h2a": { en: "Featured articles,", fr: "Articles en vedette," },
  "work.h2b": { en: "written to", fr: "écrits pour" },
  "work.h2Em": { en: "inspire.", fr: "inspirer." },
  "work.lede": {
    en: "Deep dives into AI, web engineering, digital growth, and modern technology from the Webczar team.",
    fr: "Analyses approfondies sur l'IA, l'ingénierie web et la croissance numérique par l'équipe Webczar.",
  },
  "work.open": { en: "Read article", fr: "Lire l'article" },
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
  "cert.eyebrow": { en: "Add-On Services", fr: "Services complémentaires" },
  "cert.h2": { en: "Our Add-On Services", fr: "Nos services complémentaires" },
  "cert.lede": {
    en: "High-impact specialized add-on services designed to amplify brand presence, market authority, and automated incoming customer communication.",
    fr: "Services complémentaires spécialisés à fort impact conçus pour amplifier l'autorité de la marque et la communication automatisée.",
  },
  "cert.certified": { en: "Specialized", fr: "Spécialisé" },
  "cert.brandRole": { en: "Production & Media Partner", fr: "Partenaire de production et média" },
  "cert.issuerTBC": { en: "Service", fr: "Service" },
  "cert.certification": { en: "Add-On Service", fr: "Service complémentaire" },
  "cert.verified": { en: "✓ Available", fr: "✓ Disponible" },
  "cert.onRequest": { en: "Available on request", fr: "Disponible sur demande" },
  "cert.issuedBy": { en: "Department", fr: "Département" },
  "cert.year": { en: "Delivery", fr: "Livraison" },
  "cert.id": { en: "Service Code", fr: "Code de service" },
  "cert.tbc": { en: "Fast Turnaround", fr: "Livraison rapide" },
  "cert.skills": { en: "Deliverables & Scope", fr: "Livrables et portée" },
  "cert.verify": { en: "Explore Service ↗", fr: "Découvrir le service ↗" },
  "cert.foot": { en: "Add-On Services", fr: "Services complémentaires" },

  /* ---------------- gallery — our workspace ---------------- */
  "gallery.eyebrow": { en: "Our Workspace", fr: "Notre espace" },
  "gallery.h2a": { en: "Where Innovation", fr: "Là où l'innovation" },
  "gallery.h2Em": { en: "Happens.", fr: "Prend vie." },
  "gallery.lede": {
    en: "Explore the modern engineering hubs, collaborative breakout zones, and creative spaces where Webczar Solutions builds and scales digital products.",
    fr: "Découvrez les hubs d'ingénierie modernes, les espaces de détente collaboratifs et les zones créatives où Webczar Solutions conçoit et développe des produits numériques.",
  },
  "gallery.alt": {
    en: "Webczar Solutions office workspace",
    fr: "Espace de travail Webczar Solutions",
  },
  "gallery.frames": { en: "Office Views", fr: "Vues des bureaux" },
  "gallery.hint": { en: "Scroll to explore our workspace", fr: "Faites défiler pour explorer notre espace" },

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

  /* ---------------- article (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to blog", fr: "← Retour au blog" },
  "case.kicker": { en: "Article", fr: "Article" },
  "case.role": { en: "Topic", fr: "Thématique" },
  "case.timeline": { en: "Read Time", fr: "Temps de lecture" },
  "case.focus": { en: "Category", fr: "Catégorie" },
  "case.site": { en: "Live product", fr: "Produit en ligne" },
  "case.repo": { en: "Source", fr: "Code source" },
  "case.cover": { en: "COVER", fr: "VISUEL" },
  "case.context": { en: "Overview", fr: "Aperçu" },
  "case.problem": { en: "The Challenge", fr: "Le défi" },
  "case.process": { en: "Insights & Deep Dive", fr: "Analyses & Approfondissement" },
  "case.decisions": { en: "Key Decisions & Strategy", fr: "Décisions clés & Stratégie" },
  "case.outcome": { en: "Key Takeaways & Impact", fr: "Points clés & Impact" },
  "case.reflection": { en: "Conclusion", fr: "Conclusion" },
  "case.all": { en: "← All articles", fr: "← Tous les articles" },
  "case.next": { en: "Next article", fr: "Article suivant" },

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
  useEffect(() => {
    try {
      window.localStorage.removeItem("lang");
      window.localStorage.setItem("lang", "en");
    } catch {
      /* ignore */
    }
    document.documentElement.lang = "en";
  }, []);

  const setLang = () => {
    /* Site is strictly English only */
  };

  const t = (k: string) => DICT[k]?.en ?? k;

  return (
    <LanguageContext.Provider value={{ lang: "en", setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a field off a content record in English only. */
export function L<T extends { fr?: Record<string, unknown> }>(
  _lang: Lang,
  item: T,
  field: keyof T & string
): string {
  return item[field] as unknown as string;
}
