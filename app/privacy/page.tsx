import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import { PRIVACY_DATA } from "@/content/legal";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Webczar Solutions",
  description:
    "Learn how Webczar Solutions collects, protects, processes, and respects your personal data in accordance with global data protection laws (DPDPA, GDPR, CCPA).",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy — Webczar Solutions",
    description:
      "Learn how Webczar Solutions collects, protects, processes, and respects your personal data in accordance with global data protection laws (DPDPA, GDPR, CCPA).",
    url: `${SITE_URL}/privacy`,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Webczar Solutions",
    description:
      "Learn how Webczar Solutions collects, protects, processes, and respects your personal data in accordance with global data protection laws (DPDPA, GDPR, CCPA).",
  },
};

export default function PrivacyPage() {
  return <LegalPage doc={PRIVACY_DATA} />;
}
