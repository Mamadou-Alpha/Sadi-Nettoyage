import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // En-têtes de sécurité de base, appliqués à toutes les pages.
  // HTTPS et HSTS sont gérés automatiquement par l'hébergeur (ex. Vercel)
  // une fois le site déployé — voir GUIDE-DE-MISE-EN-LIGNE.md.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
