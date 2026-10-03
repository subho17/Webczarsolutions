import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import { WHATSAPP_OPT_IN_DATA } from "@/content/legal";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "WhatsApp Communication Opt-In Policy — Webczar Solutions",
  description:
    "Review our standards and consent protocols governing subscriber opt-in for WhatsApp Business communications, transactional alerts, and support.",
  alternates: {
    canonical: `${SITE_URL}/whatsapp-opt-in`,
  },
  openGraph: {
    title: "WhatsApp Communication Opt-In Policy — Webczar Solutions",
    description:
      "Review our standards and consent protocols governing subscriber opt-in for WhatsApp Business communications, transactional alerts, and support.",
    url: `${SITE_URL}/whatsapp-opt-in`,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Communication Opt-In Policy — Webczar Solutions",
    description:
      "Review our standards and consent protocols governing subscriber opt-in for WhatsApp Business communications, transactional alerts, and support.",
  },
};

export default function WhatsAppOptInPage() {
  return <LegalPage doc={WHATSAPP_OPT_IN_DATA} />;
}
