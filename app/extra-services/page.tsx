import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import ExtraServicesPage from "@/components/services/ExtraServicesPage";

export const metadata: Metadata = {
  title: "Specialized Add-On Services — Webczar Solutions | Studio, PR & Voice",
  description:
    "Explore Webczar Solutions' specialized add-on services: turnkey 4K podcast studio shoots, viral reels design, online PR article publishing, smart IVR call systems, and aerial drone videography.",
  alternates: {
    canonical: `${SITE_URL}/extra-services`,
  },
  openGraph: {
    title: "Specialized Add-On Services — Webczar Solutions | Studio, PR & Voice",
    description:
      "Explore Webczar Solutions' specialized add-on services: turnkey 4K podcast studio shoots, viral reels design, online PR article publishing, smart IVR call systems, and aerial drone videography.",
    url: `${SITE_URL}/extra-services`,
    siteName: COMPANY.name,
    type: "website",
  },
};

export default function ExtraServicesRoute() {
  return <ExtraServicesPage />;
}
