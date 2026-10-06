/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const COMPANY = {
  name: "Webczar Solutions",
  tagline: "Technology & Digital Solutions",
  email: "info@webczarsolutions.com",
  phone: "+91 99882 21729",
  location: "India",
  description:
    "Webczar Solutions is a technology and digital solutions company focused on helping businesses build, transform, and grow in the digital world.",
  sameAs: [
    "https://www.facebook.com/webczarsolutions",
    "https://www.instagram.com/webczarsolutions",
    "https://www.youtube.com/@webczarsolutions",
    "https://x.com/webczarsolutions",
    "https://www.linkedin.com/company/webczarsolutions",
    "https://www.pinterest.com/webczarsolutions",
  ],
};

export const SOCIAL_LINKS = [
  { name: "Facebook", short: "FB", key: "facebook", href: "https://www.facebook.com/webczarsolutions" },
  { name: "Instagram", short: "Insta", key: "instagram", href: "https://www.instagram.com/webczarsolutions" },
  { name: "YouTube", short: "YouTube", key: "youtube", href: "https://www.youtube.com/@webczarsolutions" },
  { name: "X", short: "X", key: "x", href: "https://x.com/webczarsolutions" },
  { name: "LinkedIn", short: "LinkedIn", key: "linkedin", href: "https://www.linkedin.com/company/webczarsolutions" },
  { name: "Pinterest", short: "Pin", key: "pinterest", href: "https://www.pinterest.com/webczarsolutions" },
];

export const PERSON = {
  name: "Subhadeep Chanda",
  jobTitle: "Founder & Technology Director",
  email: "subhadeep@webczarsolutions.com",
  location: "India",
  /* Optional: add real profile URLs here and they flow into the JSON-LD. */
  sameAs: [] as string[],
};
