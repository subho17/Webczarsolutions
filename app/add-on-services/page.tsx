import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import AddOnServicesPage from "@/components/services/AddOnServicesPage";

export const metadata: Metadata = {
  title: "Specialized Add-On Services — Webczar Solutions | Studio, PR & Voice",
  description:
    "Explore Webczar Solutions' specialized add-on services: turnkey 4K podcast studio shoots, viral reels design, online PR article publishing, smart IVR call systems, and aerial drone videography.",
  alternates: {
    canonical: `${SITE_URL}/add-on-services`,
  },
  openGraph: {
    title: "Specialized Add-On Services — Webczar Solutions | Studio, PR & Voice",
    description:
      "Explore Webczar Solutions' specialized add-on services: turnkey 4K podcast studio shoots, viral reels design, online PR article publishing, smart IVR call systems, and aerial drone videography.",
    url: `${SITE_URL}/add-on-services`,
    siteName: COMPANY.name,
    type: "website",
  },
};

export default function AddOnServicesRoute() {
  return <AddOnServicesPage />;
}
