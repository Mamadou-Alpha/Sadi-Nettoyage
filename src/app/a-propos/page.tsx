import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ValueCard } from "@/components/value-card";
import { CtaSection } from "@/components/cta-section";
import {
  ShieldIcon,
  TeamIcon,
  LeafIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
} from "@/components/icons";
import { siteConfig, values } from "@/lib/site-config";

const title = "À propos de Sadi Services de Nettoyage";
const description =
  "Découvrez Sadi Services de Nettoyage : une équipe basée à Nongo qui intervient dans tout Conakry pour l'entretien de vos maisons, bureaux et commerces.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/a-propos" },
  openGraph: { title, description, url: "/a-propos" },
};

const valueIcons = [
  <ShieldIcon key="shield" className="h-5 w-5" />,
  <TeamIcon key="team" className="h-5 w-5" />,
  <LeafIcon key="leaf" className="h-5 w-5" />,
  <CheckIcon key="check" className="h-5 w-5" />,
  <ClockIcon key="clock" className="h-5 w-5" />,
];

export default function AProposPage() {
  return (
    <>
      <section className="bg-brand-blue-50/60 py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-blue-600 shadow-sm">
              <MapPinIcon className="h-3.5 w-3.5" /> À propos de nous
            </p>
            <h1 className="balance text-4xl font-extrabold leading-tight tracking-tight text-brand-blue-900 sm:text-5xl">
              Une équipe de {siteConfig.city} au service de votre propreté
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted">
              {siteConfig.fullName} est basée à {siteConfig.neighborhood} et
              intervient dans {siteConfig.serviceAreaLower}. Notre
              mission est simple : vous offrir un espace propre, sain et
              accueillant, avec sérieux et rapidité.
            </p>
            <p className="mt-4 max-w-lg text-muted">
              Que ce soit pour un particulier, une entreprise ou un commerce,
              nous adaptons notre intervention à votre lieu et à votre emploi
              du temps, avec nos propres produits et notre propre matériel.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-blue-100 via-white to-brand-green-100 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-brand-blue-900/10">
              <Image
                src="/images/equipe-portrait.webp"
                alt="Membre de l'équipe Sadi Services de Nettoyage"
                width={390}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Notre engagement"
            title="Ce qui guide chacune de nos interventions"
            description="Cinq principes simples, appliqués à chaque intervention, quel que soit votre lieu à Conakry."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <ValueCard
                key={v.title}
                icon={valueIcons[i]}
                title={v.title}
                description={v.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container className="grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-brand-blue-500 text-white">
              <MapPinIcon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-brand-blue-900">
              Partout à {siteConfig.city}
            </h3>
            <p className="mt-2 text-sm text-muted">
              Basés à {siteConfig.neighborhood}, nous nous déplaçons dans tous
              les quartiers de la ville.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-brand-blue-500 text-white">
              <ClockIcon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-brand-blue-900">Opération rapide</h3>
            <p className="mt-2 text-sm text-muted">
              Une équipe organisée pour intervenir sans délai, dès que vous
              nous contactez.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-brand-blue-500 text-white">
              <LeafIcon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-brand-blue-900">
              Produits écologiques
            </h3>
            <p className="mt-2 text-sm text-muted">
              Des produits sûrs pour votre famille, vos équipes et
              l&apos;environnement.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
