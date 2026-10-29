import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer/Footer";
import TeamSection from "@/components/sections/Team/TeamSection";

export const metadata: Metadata = {
  title: "Our Team & Leadership | Webczar Solutions",
  description:
    "Meet the passionate leadership, software engineers, UI/UX designers, and digital growth strategists at Webczar Solutions in Mohali, Punjab.",
  alternates: {
    canonical: `${SITE_URL}/team`,
  },
  openGraph: {
    title: "Our Team & Leadership | Webczar Solutions",
    description:
      "Meet the passionate leadership, software engineers, UI/UX designers, and digital growth strategists at Webczar Solutions in Mohali, Punjab.",
    url: `${SITE_URL}/team`,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team & Leadership | Webczar Solutions",
    description:
      "Meet the passionate leadership, software engineers, UI/UX designers, and digital growth strategists at Webczar Solutions in Mohali, Punjab.",
  },
};

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "80px", minHeight: "100vh", background: "#fbfbfd" }}>
        <TeamSection />
        <div className="finalFrame">
          <Footer />
        </div>
      </main>
    </>
  );
}
