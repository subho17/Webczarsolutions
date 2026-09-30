import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Shared hosting (Hostinger hPanel has no Node.js runtime), so ship a
     fully static export: `npm run build` writes plain HTML/CSS/JS to `out/`,
     which is uploaded to public_html. trailingSlash gives every route its
     own index.html so Apache resolves clean URLs without rewrites. */
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
