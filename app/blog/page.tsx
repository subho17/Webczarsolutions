import type { Metadata } from "next";
import { SITE_URL, COMPANY } from "@/lib/site";
import BlogListPage from "@/components/blog/BlogListPage";

export const metadata: Metadata = {
  title: "Blogs & Insights — Webczar Solutions | Digital Marketing & Tech Agency",
  description:
    "Explore actionable thought leadership, engineering case studies, and digital marketing playbooks from Webczar Solutions.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blogs & Insights — Webczar Solutions | Digital Marketing & Tech Agency",
    description:
      "Explore actionable thought leadership, engineering case studies, and digital marketing playbooks from Webczar Solutions.",
    url: `${SITE_URL}/blog`,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Insights — Webczar Solutions | Digital Marketing & Tech Agency",
    description:
      "Explore actionable thought leadership, engineering case studies, and digital marketing playbooks from Webczar Solutions.",
  },
};

export default function BlogPage() {
  return <BlogListPage />;
}
