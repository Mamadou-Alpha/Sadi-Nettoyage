import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ValueCard } from "@/components/value-card";
import { CtaSection } from "@/components/cta-section";
import {
  WhatsAppIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ShieldIcon,
  TeamIcon,
  LeafIcon,
  CheckIcon,
} from "@/components/icons";
import { siteConfig, services, values } from "@/lib/site-config";
import { waLink, telLink } from "@/lib/whatsapp";

const valueIcons = [
  <ShieldIcon key="shield" className="h-5 w-5" />,
  <TeamIcon key="team" className="h-5 w-5" />,
  <LeafIcon key="leaf" className="h-5 w-5" />,
  <CheckIcon key="check" className="h-5 w-5" />,
  <ClockIcon key="clock" className="h-5 w-5" />,
];

const steps = [
  {
    title: "Contactez-nous",
    description: "Écrivez-nous sur WhatsApp ou appelez-nous en précisant votre besoin.",
  },
  {
    title: "Nous planifions",
    description: "Nous convenons ensemble d'une date et d'une heure qui vous conviennent.",
  },
  {
    title: "Nous intervenons",
    description: "Notre équipe se déplace avec son matériel, partout à Conakry.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-blue-50/60">
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-blue-600 shadow-sm">
              <MapPinIcon className="h-3.5 w-3.5" /> Basés à Nongo — actifs dans tout Conakry
            </p>
            <h1 className="balance text-4xl font-extrabold leading-tight tracking-tight text-brand-blue-900 sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted">
              {siteConfig.fullName} entretient vos maisons, bureaux, commerces et
              chantiers avec une équipe professionnelle, des produits sûrs et une
              intervention rapide, partout à Conakry.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={waLink()} variant="whatsapp" icon={<WhatsAppIcon className="h-4 w-4" />}>
                Demander un devis gratuit
              </Button>
              <Button href={telLink()} variant="secondary" icon={<PhoneIcon className="h-4 w-4" />}>
                {siteConfig.phoneDisplay}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-brand-blue-900">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-green-50 text-brand-green-600">
                  <ClockIcon className="h-[1.125rem] w-[1.125rem]" />
                </span>
                Opération rapide
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-brand-blue-900">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-green-50 text-brand-green-600">
                  <LeafIcon className="h-[1.125rem] w-[1.125rem]" />
                </span>
                Produits écologiques
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-brand-blue-900">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-green-50 text-brand-green-600">
                  <ShieldIcon className="h-[1.125rem] w-[1.125rem]" />
                </span>
                Équipe de confiance
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-blue-100 via-white to-brand-green-100 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-brand-blue-900/10">
              <Image
                src="/images/equipe-hero.webp"
                alt="Affiche Sadi Services de Nettoyage — nos services et zone d'intervention à Conakry"
                width={1254}
                height={1254}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 flex w-[88%] -translate-x-1/2 items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-black/10">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-blue-500 text-white">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div className="text-sm">
                <p className="font-semibold text-brand-blue-900">Partout à Conakry</p>
                <p className="text-muted">Nongo et tous les quartiers environnants</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Valeurs */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Pourquoi Sadi"
            title="Un engagement de propreté et de confiance"
            description="Cinq principes qui guident chacune de nos interventions, quel que soit votre lieu."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <ValueCard key={v.title} icon={valueIcons[i]} title={v.title} description={v.description} />
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Nos services"
            title="Un nettoyage professionnel pour chaque besoin"
            description="Des maisons aux commerces, en passant par les chantiers : nous avons la solution adaptée."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="primary">
              Voir tous nos services
            </Button>
          </div>
        </Container>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Simple et rapide"
            title="Comment ça marche"
            description="Trois étapes pour un espace impeccable, sans complication."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-black/5 bg-white p-7 text-center shadow-sm">
                <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-brand-blue-500 text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-brand-blue-900">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
