import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us — Webczar Solutions | Founder Subhadeep Chanda",
  description:
    "Learn about Webczar Solutions, a premier technology and digital marketing agency founded by Subhadeep Chanda in the Chandigarh Tricity tech corridor.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Us — Webczar Solutions | Founder Subhadeep Chanda",
    description:
      "Learn about Webczar Solutions, a premier technology and digital marketing agency founded by Subhadeep Chanda in the Chandigarh Tricity tech corridor.",
    url: `${SITE_URL}/about`,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Webczar Solutions | Founder Subhadeep Chanda",
    description:
      "Learn about Webczar Solutions, a premier technology and digital marketing agency founded by Subhadeep Chanda in the Chandigarh Tricity tech corridor.",
  },
};

export default function Page() {
  return <AboutPage />;
}
