/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const COMPANY = {
  name: "Webczar Solutions",
  tagline: "Technology & Digital Solutions",
  email: "info@webczarsolutions.com",
  phone: "+91 98765 43210",
  location: "India",
  description:
    "Webczar Solutions is a technology and digital solutions company focused on helping businesses build, transform, and grow in the digital world.",
  sameAs: [
    "https://www.linkedin.com/company/webczar-solutions",
    "https://github.com/webczar-solutions",
    "https://www.instagram.com/webczarsolutions",
  ],
};

export const PERSON = {
  name: "Gireesh Kumar Reddy Kolli",
  jobTitle: "Product Designer & UX Consultant",
  email: "kolligireeshkumarreddy0622@gmail.com",
  location: "Antibes, France",
  sameAs: [
    "https://www.linkedin.com/in/gireesh-kumar-reddy-kolli-",
    "https://github.com/gireeshkumarreddy",
    "https://www.instagram.com/itsgireeshreddy",
  ],
};
