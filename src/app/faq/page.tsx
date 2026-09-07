import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { ChevronDownIcon } from "@/components/icons";
import { faqs, siteConfig } from "@/lib/site-config";

const title = "Questions fréquentes";
const description =
  "Retrouvez les réponses aux questions les plus fréquentes sur les services de nettoyage de Sadi Services de Nettoyage à Conakry.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: { title, description, url: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-brand-blue-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions fréquentes"
            description="Vous ne trouvez pas la réponse à votre question ? Écrivez-nous directement sur WhatsApp."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <div className="divide-y divide-black/5 rounded-2xl border border-black/5 bg-white shadow-sm shadow-black/[0.03]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-5 open:pb-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-blue-900 marker:content-none">
                  {faq.question}
                  <ChevronDownIcon className="h-5 w-5 shrink-0 text-brand-blue-500 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted">
            D&apos;autres questions ? Contactez {siteConfig.name} au{" "}
            <a
              href={`tel:+${siteConfig.phoneIntl}`}
              className="font-semibold text-brand-blue-600 hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
