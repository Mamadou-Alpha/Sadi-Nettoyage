import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { siteConfig, siteUrl, services } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.fullName} — Nettoyage professionnel à Conakry`,
    template: `%s — ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  keywords: [
    "nettoyage Conakry",
    "entreprise de nettoyage Conakry",
    "société de nettoyage Conakry",
    "nettoyage Guinée",
    "ménage Conakry",
    "nettoyage maison Conakry",
    "nettoyage appartement Conakry",
    "nettoyage bureau Conakry",
    "nettoyage entreprise Conakry",
    "nettoyage commerce Conakry",
    "nettoyage après travaux Conakry",
    "nettoyage haute pression Conakry",
    "nettoyage tapis Conakry",
    "nettoyage canapé Conakry",
    "nettoyage matelas Conakry",
    "nettoyage Nongo",
    "Sadi Services de Nettoyage",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Une fois une propriété Google Search Console créée, Google fournit un
  // code de vérification "balise HTML" : ajoutez-le comme variable
  // d'environnement GOOGLE_SITE_VERIFICATION (voir GUIDE-DE-MISE-EN-LIGNE.md)
  // puis redéployez — aucune modification de code n'est nécessaire.
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  icons: {
    icon: [
      { url: "/images/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/favicon-180.png",
  },
  openGraph: {
    title: `${siteConfig.fullName} — Nettoyage professionnel à Conakry`,
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.fullName,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/equipe-hero.webp", width: 360, height: 795 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} — Nettoyage professionnel à Conakry`,
    description: siteConfig.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteUrl}/#organization`,
  name: siteConfig.fullName,
  description: siteConfig.description,
  telephone: `+${siteConfig.phoneIntl}`,
  areaServed: {
    "@type": "City",
    name: siteConfig.serviceArea,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.neighborhood,
    addressCountry: "GN",
  },
  url: siteUrl,
  image: `${siteUrl}/images/equipe-hero.webp`,
  logo: `${siteUrl}/images/logo.webp`,
  knowsAbout: services.map((s) => s.title),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
