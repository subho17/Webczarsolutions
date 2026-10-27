import type { Metadata } from "next";
import { Inter, Instrument_Serif, Caveat } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { LanguageProvider } from "@/lib/i18n";
import { SITE_URL, COMPANY } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-script",
});

const DESCRIPTION =
  "Webczar Solutions — Premier technology and digital solutions company specializing in custom software development, cloud systems, and performance marketing in Chandigarh, Mohali & Panchkula.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Webczar Solutions — Technology & Digital Solutions",
    template: "%s | Webczar Solutions",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Webczar Solutions — Technology & Digital Solutions",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Webczar Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webczar Solutions — Technology & Digital Solutions",
    description: DESCRIPTION,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  url: SITE_URL,
  logo: `${SITE_URL}/images/Screenshot_2026-09-16_125328-removebg-preview.png`,
  email: `mailto:${COMPANY.email}`,
  telephone: COMPANY.phone,
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  description: COMPANY.description,
  sameAs: COMPANY.sameAs,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${caveat.variable}`}
    >
      <body>
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
