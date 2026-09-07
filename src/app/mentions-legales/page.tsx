import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig, legal } from "@/lib/site-config";

const title = "Mentions légales";
const description = "Informations légales concernant Sadi Services de Nettoyage.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="mx-auto max-w-3xl">
        <SectionHeading align="left" title={title} />

        <div className="prose-sm mt-10 space-y-6 text-sm leading-relaxed text-foreground/80">
          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              Éditeur du site
            </h2>
            <ul className="space-y-1">
              <li>Nom commercial : {siteConfig.fullName}</li>
              <li>
                Forme juridique :{" "}
                {legal.legalForm || "à compléter (immatriculation en cours)"}
              </li>
              <li>Numéro RCCM : {legal.rccm || "à compléter"}</li>
              <li>
                Numéro d&apos;Identification Fiscale (NIF) :{" "}
                {legal.nif || "à compléter"}
              </li>
              <li>
                Localisation : {siteConfig.neighborhood}, {siteConfig.city},{" "}
                {siteConfig.country}
              </li>
              <li>Téléphone / WhatsApp : {siteConfig.phoneDisplay}</li>
            </ul>
            <p className="mt-3 text-xs text-muted">
              Les champs marqués &laquo;&nbsp;à compléter&nbsp;&raquo; seront mis à jour dès que le
              numéro d&apos;immatriculation (RCCM) et le NIF de l&apos;entreprise
              seront obtenus auprès des autorités guinéennes compétentes.
              Aucune adresse postale précise n&apos;est publiée : {siteConfig.fullName}{" "}
              est une entreprise de service qui se déplace chez ses clients et
              ne reçoit pas de public à une adresse fixe.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par Vercel Inc. (
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue-600 hover:underline"
              >
                vercel.com
              </a>
              ). Les coordonnées complètes de l&apos;hébergeur sont disponibles
              sur son site officiel.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              Propriété intellectuelle
            </h2>
            <p>
              Le logo, les textes et les visuels de ce site sont la propriété
              de {siteConfig.fullName}. Toute reproduction sans autorisation
              est interdite.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              Contact
            </h2>
            <p>
              Pour toute question relative à ces mentions légales, contactez{" "}
              {siteConfig.fullName} au {siteConfig.phoneDisplay}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
