import type { MetadataRoute } from "next";
import { PROJECTS } from "@/content/projects";
import { SERVICES } from "@/content/services";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/add-on-services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/careers`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/terms`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/whatsapp-opt-in`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/whatsapp-opt-out`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/rcs-policy`, changeFrequency: "monthly", priority: 0.5 },
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...PROJECTS.map((p) => ({
      url: `${SITE_URL}/work/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
