"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { fetchLivePosts } from "@/lib/postsClient";
import CaseView from "@/app/work/[slug]/CaseView";

export default function NotFound() {
  const { t } = useLang();
  const [blogSlug, setBlogSlug] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsChecking(false);
      return;
    }

    const pathname = window.location.pathname.replace(/\/+$/, "");
    const parts = pathname.split("/").filter(Boolean);
    if ((parts[0] === "blog" || parts[0] === "work") && parts[1]) {
      const candidateSlug = parts[1];
      void fetchLivePosts().then((posts) => {
        const found = posts.find((p) => p.slug === candidateSlug);
        if (found) {
          setBlogSlug(candidateSlug);
        }
        setIsChecking(false);
      });
    } else {
      setIsChecking(false);
    }
  }, []);

  if (blogSlug) {
    return <CaseView slug={blogSlug} />;
  }

  if (isChecking) {
    return null;
  }

  return (
    <main
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 24,
        gap: 0,
      }}
    >
      <p
        style={{
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.2em",
          color: "var(--ink-3)",
        }}
      >
        {t("nf.label")}
      </p>
      <h1
        style={{
          marginTop: 18,
          fontWeight: 900,
          fontSize: "clamp(40px, 7vw, 88px)",
          letterSpacing: "-0.035em",
          lineHeight: 1,
        }}
      >
        {t("nf.h1")}
        <br />
        <em
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--accent)",
          }}
        >
          {t("nf.h1Em")}
        </em>
      </h1>
      <Link
        href="/"
        style={{
          marginTop: 34,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "var(--accent)",
          color: "#fff",
          fontWeight: 700,
          fontSize: 13,
          padding: "12px 22px",
          borderRadius: 999,
        }}
      >
        {t("nf.cta")}
      </Link>
    </main>
  );
}
