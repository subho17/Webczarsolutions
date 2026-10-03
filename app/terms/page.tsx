import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import { TERMS_DATA } from "@/content/legal";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — Webczar Solutions",
  description:
    "Review the terms and conditions governing custom software engineering, digital marketing, AI systems, and technology consulting with Webczar Solutions.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title: "Terms & Conditions — Webczar Solutions",
    description:
      "Review the terms and conditions governing custom software engineering, digital marketing, AI systems, and technology consulting with Webczar Solutions.",
    url: `${SITE_URL}/terms`,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions — Webczar Solutions",
    description:
      "Review the terms and conditions governing custom software engineering, digital marketing, AI systems, and technology consulting with Webczar Solutions.",
  },
};

export default function TermsPage() {
  return <LegalPage doc={TERMS_DATA} />;
}
