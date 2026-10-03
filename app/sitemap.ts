import type { MetadataRoute } from "next";
import { PROJECTS } from "@/content/projects";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/careers`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/terms`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/whatsapp-opt-in`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/whatsapp-opt-out`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/rcs-policy`, changeFrequency: "monthly", priority: 0.5 },
    ...PROJECTS.map((p) => ({
      url: `${SITE_URL}/work/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
