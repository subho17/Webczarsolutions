import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/content/projects";
import CaseView from "@/app/work/[slug]/CaseView";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Article Not Found — Webczar Blog",
    };
  }
  return {
    title: `${project.title} — Webczar Blog | Strategy & Growth`,
    description: project.oneLiner,
    openGraph: {
      title: `${project.title} — Webczar Blog`,
      description: project.oneLiner,
      type: "article",
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  if (!PROJECTS.some((p) => p.slug === slug)) {
    notFound();
  }

  return <CaseView slug={slug} />;
}
