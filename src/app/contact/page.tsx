import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/button";
import { MapPinIcon, PhoneIcon, WhatsAppIcon, ClockIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { waLink, telLink } from "@/lib/whatsapp";

const title = "Contact";
const description =
  "Contactez Sadi Services de Nettoyage par téléphone ou WhatsApp pour un devis gratuit à Conakry.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.mapsQuery
  )}&output=embed`;

  return (
    <>
      <section className="bg-brand-blue-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Parlons de votre projet de nettoyage"
            description="Le plus rapide est WhatsApp — vous pouvez aussi nous appeler directement ou remplir le formulaire ci-dessous."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          {/* Coordonnées + carte */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[0.03] sm:p-8">
              <h3 className="mb-5 text-lg font-semibold text-brand-blue-900">
                Nos coordonnées
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-blue-50 text-brand-blue-500">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <span className="pt-2 text-foreground/80">
                    Basés à {siteConfig.neighborhood}, {siteConfig.city}
                    <br />
                    {siteConfig.country} — intervention dans{" "}
                    {siteConfig.serviceAreaLower}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-blue-50 text-brand-blue-500">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <a href={telLink()} className="font-medium text-foreground/80 hover:text-brand-blue-600">
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-blue-50 text-brand-blue-500">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground/80 hover:text-brand-blue-600"
                  >
                    Écrire sur WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-blue-50 text-brand-blue-500">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-foreground/80">
                    Opération rapide, sur simple demande
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={waLink()} variant="whatsapp" icon={<WhatsAppIcon className="h-4 w-4" />}>
                  WhatsApp
                </Button>
                <Button href={telLink()} variant="secondary" icon={<PhoneIcon className="h-4 w-4" />}>
                  Appeler
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/5 shadow-sm shadow-black/[0.03]">
              <iframe
                title={`Zone d'intervention ${siteConfig.fullName} — ${siteConfig.neighborhood}, ${siteConfig.city}`}
                src={mapSrc}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs text-muted">
              Carte à titre indicatif du secteur de {siteConfig.neighborhood}.
              Nous intervenons dans {siteConfig.serviceAreaLower} —
              contactez-nous pour confirmer votre quartier.
            </p>
          </div>

          {/* Formulaire */}
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[0.03] sm:p-8">
            <h3 className="mb-1 text-lg font-semibold text-brand-blue-900">
              Demander un devis
            </h3>
            <p className="mb-6 text-sm text-muted">
              Remplissez ce formulaire : votre message s&apos;ouvrira
              directement dans WhatsApp, prêt à être envoyé.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
