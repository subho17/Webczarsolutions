import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import { RCS_POLICY_DATA } from "@/content/legal";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "RCS Communication Policy — Webczar Solutions",
  description:
    "Standards, verified sender authentication, rich media protocols, and consumer protection safeguards for Rich Communication Services (RCS) Business Messaging.",
  alternates: {
    canonical: `${SITE_URL}/rcs-policy`,
  },
  openGraph: {
    title: "RCS Communication Policy — Webczar Solutions",
    description:
      "Standards, verified sender authentication, rich media protocols, and consumer protection safeguards for Rich Communication Services (RCS) Business Messaging.",
    url: `${SITE_URL}/rcs-policy`,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RCS Communication Policy — Webczar Solutions",
    description:
      "Standards, verified sender authentication, rich media protocols, and consumer protection safeguards for Rich Communication Services (RCS) Business Messaging.",
  },
};

export default function RCSPolicyPage() {
  return <LegalPage doc={RCS_POLICY_DATA} />;
}
