import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us — Webczar Solutions | Request a Proposal",
  description:
    "Get in touch with Webczar Solutions. Request a custom web development, AI integration, or digital marketing proposal for your business.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us — Webczar Solutions | Request a Proposal",
    description:
      "Get in touch with Webczar Solutions. Request a custom web development, AI integration, or digital marketing proposal for your business.",
    url: `${SITE_URL}/contact`,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Webczar Solutions | Request a Proposal",
    description:
      "Get in touch with Webczar Solutions. Request a custom web development, AI integration, or digital marketing proposal for your business.",
  },
};

export default function Page() {
  return <ContactPage />;
}
