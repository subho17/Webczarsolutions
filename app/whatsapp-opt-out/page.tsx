import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import { WHATSAPP_OPT_OUT_DATA } from "@/content/legal";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "WhatsApp Communication Opt-Out Policy — Webczar Solutions",
  description:
    "Review procedures and instant keyword mechanisms (STOP, UNSUBSCRIBE) to revoke consent and opt out of WhatsApp communications.",
  alternates: {
    canonical: `${SITE_URL}/whatsapp-opt-out`,
  },
  openGraph: {
    title: "WhatsApp Communication Opt-Out Policy — Webczar Solutions",
    description:
      "Review procedures and instant keyword mechanisms (STOP, UNSUBSCRIBE) to revoke consent and opt out of WhatsApp communications.",
    url: `${SITE_URL}/whatsapp-opt-out`,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Communication Opt-Out Policy — Webczar Solutions",
    description:
      "Review procedures and instant keyword mechanisms (STOP, UNSUBSCRIBE) to revoke consent and opt out of WhatsApp communications.",
  },
};

export default function WhatsAppOptOutPage() {
  return <LegalPage doc={WHATSAPP_OPT_OUT_DATA} />;
}
