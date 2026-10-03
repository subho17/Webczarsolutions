import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import CareersPage from "@/components/careers/CareersPage";

export const metadata: Metadata = {
  title: "Careers at Webczar Solutions | Join Our Engineering & Growth Squad",
  description:
    "Explore engineering, AI, UI/UX design, and digital marketing career openings at Webczar Solutions in the Chandigarh Tricity tech corridor.",
  alternates: {
    canonical: `${SITE_URL}/careers`,
  },
  openGraph: {
    title: "Careers at Webczar Solutions | Join Our Engineering & Growth Squad",
    description:
      "Explore engineering, AI, UI/UX design, and digital marketing career openings at Webczar Solutions in the Chandigarh Tricity tech corridor.",
    url: `${SITE_URL}/careers`,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Webczar Solutions | Join Our Engineering & Growth Squad",
    description:
      "Explore engineering, AI, UI/UX design, and digital marketing career openings at Webczar Solutions in the Chandigarh Tricity tech corridor.",
  },
};

export default function Page() {
  return <CareersPage />;
}
