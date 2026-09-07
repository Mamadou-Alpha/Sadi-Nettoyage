import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/button";
import { WhatsAppIcon, HeartIcon } from "@/components/icons";
import { siteConfig, testimonials } from "@/lib/site-config";
import { waLink } from "@/lib/whatsapp";

const title = "Avis clients";
const description =
  "Les avis de nos clients à Conakry sur les services de Sadi Services de Nettoyage.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/temoignages" },
  openGraph: { title, description, url: "/temoignages" },
};

export default function TemoignagesPage() {
  return (
    <>
      <section className="bg-brand-blue-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Avis clients"
            title="Ce que nos clients disent de nous"
            description="Nous affichons ici uniquement de vrais avis, laissés par de vrais clients."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          {testimonials.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-2xl border border-black/5 bg-white p-8 text-center shadow-sm shadow-black/[0.03]">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-brand-blue-50 text-brand-blue-500">
                <HeartIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-brand-blue-900">
                Les premiers avis arrivent bientôt
              </h3>
              <p className="mt-2 text-sm text-muted">
                {siteConfig.name} démarre son activité en ligne : cette page
                affichera les avis réels de nos clients dès qu&apos;ils nous en
                laisseront. Vous avez déjà fait appel à nous ? Votre retour
                nous aide énormément.
              </p>
              <div className="mt-6 flex justify-center">
                <Button
                  href={waLink(
                    "Bonjour Sadi Services de Nettoyage, je souhaite vous laisser un avis sur votre prestation."
                  )}
                  variant="whatsapp"
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                >
                  Laisser un avis sur WhatsApp
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <blockquote
                  key={t.name}
                  className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[0.03]"
                >
                  <p className="text-sm text-foreground/80">&ldquo;{t.text}&rdquo;</p>
                  <footer className="mt-4 text-sm font-semibold text-brand-blue-900">
                    {t.name}
                    {t.date && (
                      <span className="ml-2 font-normal text-muted">{t.date}</span>
                    )}
                  </footer>
                </blockquote>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
