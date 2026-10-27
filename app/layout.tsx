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
  "Webczar Solutions is a creative technology company specializing in Branding, Digital Marketing, and Software Development. Led by Founder & Technology Director Gagan Kalra.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gagan Kalra — Webczar Solutions",
    template: "%s | Webczar Solutions",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Gagan Kalra — Webczar Solutions",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Webczar Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gagan Kalra — Webczar Solutions",
    description: DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: COMPANY.name,
      url: SITE_URL,
      logo: `${SITE_URL}/images/Screenshot_2026-09-16_125328-removebg-preview.png`,
      email: `mailto:${COMPANY.email}`,
      telephone: COMPANY.phone,
      founder: {
        "@type": "Person",
        name: "Gagan Kalra",
        jobTitle: "Founder & Technology Director",
        sameAs: "https://www.linkedin.com/in/gagan-kalra-462bb1343/",
      },
      address: { "@type": "PostalAddress", addressCountry: "IN" },
      description: COMPANY.description,
      sameAs: COMPANY.sameAs,
    },
    {
      "@type": "Person",
      name: "Gagan Kalra",
      jobTitle: "Founder & Technology Director",
      worksFor: {
        "@type": "Organization",
        name: "Webczar Solutions",
      },
      url: SITE_URL,
      sameAs: [
        "https://www.linkedin.com/in/gagan-kalra-462bb1343/",
      ],
    },
  ],
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
