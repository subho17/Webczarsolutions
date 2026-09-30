/* THE JOURNEY — the chapters the light tunnel travels through.
 *
 * Webczar Solutions company journey and milestones.
 *
 * Shape per chapter:
 *   year   — shown large, the anchor
 *   title  — what the chapter is about
 *   place  — where it happened (context line)
 *   story  — what was actually happening, 2–3 sentences
 *   bridge — how it handed over to the next chapter (the transition line)
 *
 * `fr` mirrors every translatable field (see lib/i18n.tsx -> L()). Company,
 * product and place names stay as they are. French runs ~15% longer than
 * English, so the copy is written to length, not translated literally. */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "founding",
    year: "2020",
    title: "The Vision Takes Shape",
    place: "India",
    story:
      "Webczar Solutions was founded with a clear mission: to help businesses harness the power of technology. From a small team with big dreams, we started building digital solutions that actually work.",
    bridge: "What started as a vision became a mission to transform businesses through technology.",
    fr: {
      title: "La vision prend forme",
      place: "Inde",
      story:
        "Webczar Solutions a été fondé avec une mission claire : aider les entreprises à exploiter le pouvoir de la technologie. D'une petite équipe aux grands rêves, nous avons commencé à construire des solutions numériques qui fonctionnent vraiment.",
      bridge: "Ce qui a commencé comme une vision est devenu une mission de transformation des entreprises par la technologie.",
    },
  },
  {
    id: "growth",
    year: "2022",
    title: "Expanding Our Horizons",
    place: "India",
    story:
      "As demand for digital transformation grew, so did we. We expanded our team, refined our processes, and built a reputation for delivering quality solutions on time and within budget.",
    bridge: "Growth taught us that quality and reliability are the foundations of trust.",
    fr: {
      title: "Élargir nos horizons",
      place: "Inde",
      story:
        "Avec la demande croissante pour la transformation numérique, nous avons grandi. Nous avons élargi notre équipe, affiné nos processus et construit une réputation pour livrer des solutions de qualité.",
      bridge: "La croissance nous a appris que la qualité et la fiabilité sont les fondations de la confiance.",
    },
  },
  {
    id: "ai-era",
    year: "2024",
    title: "Embracing the AI Revolution",
    place: "India",
    story:
      "The AI era opened new possibilities. We integrated artificial intelligence and machine learning into our service offerings, helping clients automate operations, gain insights, and stay competitive.",
    bridge: "AI didn't replace our expertise — it amplified it.",
    fr: {
      title: "L'ère de l'IA",
      place: "Inde",
      story:
        "L'ère de l'IA a ouvert de nouvelles possibilités. Nous avons intégré l'intelligence artificielle et l'apprentissage automatique dans nos offres de services, aidant les clients à automatiser les opérations et à rester compétitifs.",
      bridge: "L'IA n'a pas remplacé notre expertise — elle l'a amplifiée.",
    },
  },
  {
    id: "full-stack",
    year: "2025",
    title: "Full-Stack Digital Expertise",
    place: "India",
    story:
      "From web development to mobile apps, cloud infrastructure to digital marketing — we became a one-stop destination for all digital needs. Our end-to-end approach means clients don't need multiple vendors.",
    bridge: "One roof, every solution — that's the Webczar promise.",
    fr: {
      title: "Expertise numérique complète",
      place: "Inde",
      story:
        "Du développement web aux applications mobiles, de l'infrastructure cloud au marketing numérique — nous sommes devenus une destination unique pour tous les besoins numériques. Notre approche de bout en bout signifie que les clients n'ont pas besoin de multiple fournisseurs.",
      bridge: "Un toit, toutes les solutions — c'est la promesse de Webczar.",
    },
  },
  {
    id: "future",
    year: "2026",
    title: "Building the Future",
    place: "India",
    story:
      "Today, we're focused on innovation, quality, and long-term partnerships. Our team combines technology, creativity, strategy, and business thinking to create secure, user-friendly, high-performance digital experiences.",
    bridge: "The future is digital. We're here to build it with you.",
    fr: {
      title: "Construire l'avenir",
      place: "Inde",
      story:
        "Aujourd'hui, nous nous concentrons sur l'innovation, la qualité et les partenariats à long terme. Notre équipe combine technologie, créativité, stratégie et réflexion commerciale pour créer des expériences numériques sécurisées et performantes.",
      bridge: "L'avenir est numérique. Nous sommes là pour le construire avec vous.",
    },
  },
];
