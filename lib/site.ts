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
  location: "IM Punjab, Unit 51, 2nd Floor, Kalkat Bhawan, Block C, Kissan Vikas Chamber, Chandigarh Int'l Airport Rd, Gmada Aerocity, Sahibzada Ajit Singh Nagar, Chachu Majra, Punjab 140306",
  description:
    "Webczar Solutions is a technology and digital solutions company focused on helping businesses build, transform, and grow in the digital world.",
  sameAs: [
    "https://www.facebook.com/webczarsolutions/",
    "https://www.instagram.com/webczarsolutions/",
    "https://www.youtube.com/channel/UCsmqfDaULklu3RR7iy5BwBQ",
    "https://x.com/webczarsolution",
    "https://www.linkedin.com/in/gagan-kalra-462bb1343/",
    "https://in.pinterest.com/smsmediagrpchd/",
    "https://whatsapp.com/channel/0029Vaf8Pq40lwgrhkGwJU3o",
    "https://share.google/p1v6dLB0JHKNpodWx",
  ],
};

export const SOCIAL_LINKS = [
  { name: "Facebook", short: "FB", key: "facebook", href: "https://www.facebook.com/webczarsolutions/" },
  { name: "Instagram", short: "Insta", key: "instagram", href: "https://www.instagram.com/webczarsolutions/" },
  { name: "YouTube", short: "YouTube", key: "youtube", href: "https://www.youtube.com/channel/UCsmqfDaULklu3RR7iy5BwBQ" },
  { name: "X", short: "X", key: "x", href: "https://x.com/webczarsolution" },
  { name: "LinkedIn", short: "LinkedIn", key: "linkedin", href: "https://www.linkedin.com/in/gagan-kalra-462bb1343/" },
  { name: "Pinterest", short: "Pin", key: "pinterest", href: "https://in.pinterest.com/smsmediagrpchd/" },
  { name: "WhatsApp", short: "WA", key: "whatsapp", href: "https://whatsapp.com/channel/0029Vaf8Pq40lwgrhkGwJU3o" },
  { name: "Google", short: "G", key: "google", href: "https://share.google/p1v6dLB0JHKNpodWx" },
];

export const PERSON = {
  name: "Gagan Kalra",
  jobTitle: "Founder & Technology Director",
  email: "info@webczarsolutions.com",
  location: "India",
  /* Optional: add real profile URLs here and they flow into the JSON-LD. */
  sameAs: [] as string[],
};
