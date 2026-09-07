import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { MapPinIcon, CheckIcon } from "@/components/icons";
import { siteConfig, zones } from "@/lib/site-config";

const title = "Zones desservies à Conakry";
const description =
  "Sadi Services de Nettoyage intervient dans toute la ville de Conakry : Ratoma, Kaloum, Dixinn, Matam, Matoto, et tous les autres quartiers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/zones-desservies" },
  openGraph: { title, description, url: "/zones-desservies" },
};

export default function ZonesDesserviesPage() {
  return (
    <>
      <section className="bg-brand-blue-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Zones desservies"
            title="Nous intervenons dans toute la ville de Conakry"
            description="Basés à Nongo (commune de Ratoma), nous nous déplaçons dans l'ensemble des quartiers de Conakry — la liste ci-dessous n'est pas une limite, seulement les secteurs où nous intervenons le plus souvent."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {zones.map((zone) => (
              <div
                key={zone.name}
                className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm shadow-black/[0.03]"
              >
                <div className="mx-auto mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-blue-50 text-brand-blue-500">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-brand-blue-900">{zone.name}</h3>
                {zone.note && <p className="mt-1.5 text-sm text-muted">{zone.note}</p>}
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-surface p-6">
            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-green-500 text-white">
              <CheckIcon className="h-4 w-4" />
            </span>
            <p className="text-sm text-foreground/80">
              Vous êtes ailleurs à Conakry ? Pas de souci : {siteConfig.serviceAreaLower}
              . Écrivez-nous votre quartier sur WhatsApp, nous confirmons
              rapidement notre disponibilité.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
