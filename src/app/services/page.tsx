import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { services } from "@/lib/site-config";

const title = "Nos services de nettoyage à Conakry";
const description =
  "Ménage résidentiel, bureaux, commerces, fin de chantier, nettoyage haute pression, tapis, canapés et matelas : découvrez tous les services de Sadi Services de Nettoyage à Conakry.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-blue-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Nos services"
            title="Un service de nettoyage pour chaque situation"
            description="Que ce soit pour votre domicile, votre entreprise ou après des travaux, notre équipe s'adapte à vos besoins avec le même souci du détail."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} detailed />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
