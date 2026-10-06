import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import ServicesHubPage from "@/components/services/ServicesHubPage";

export const metadata: Metadata = {
  title: "Our Services — Webczar Solutions | Technology, Marketing & Cloud Agency",
  description:
    "Explore Webczar Solutions' full suite of digital capabilities: custom software development, high-converting websites, performance marketing, SEO, WhatsApp API, and AI engineering.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Our Services — Webczar Solutions | Technology, Marketing & Cloud Agency",
    description:
      "Explore Webczar Solutions' full suite of digital capabilities: custom software development, high-converting websites, performance marketing, SEO, WhatsApp API, and AI engineering.",
    url: `${SITE_URL}/services`,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services — Webczar Solutions | Technology, Marketing & Cloud Agency",
    description:
      "Explore Webczar Solutions' full suite of digital capabilities: custom software development, high-converting websites, performance marketing, SEO, WhatsApp API, and AI engineering.",
  },
};

export default function ServicesPage() {
  return <ServicesHubPage />;
}
