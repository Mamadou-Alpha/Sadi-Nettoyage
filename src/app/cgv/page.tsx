import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

const title = "Conditions générales de prestation";
const description =
  "Conditions générales de prestation de service de Sadi Services de Nettoyage.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cgv" },
  robots: { index: false, follow: true },
};

export default function CgvPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="mx-auto max-w-3xl">
        <SectionHeading align="left" title={title} />

        <div className="prose-sm mt-10 space-y-6 text-sm leading-relaxed text-foreground/80">
          <p>
            Les présentes conditions décrivent les modalités selon
            lesquelles {siteConfig.fullName} réalise ses prestations de
            nettoyage à Conakry. Elles s&apos;appliquent à toute intervention
            convenue par téléphone, WhatsApp ou via le site.
          </p>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              1. Devis
            </h2>
            <p>
              Tout devis communiqué par {siteConfig.name} est établi sur la
              base des informations fournies par le client (type de lieu,
              surface, état des lieux, services souhaités). Il peut être
              ajusté si la situation réelle constatée sur place diffère
              significativement des informations transmises. Le devis n&apos;engage
              les deux parties qu&apos;après confirmation explicite du client.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              2. Réalisation de la prestation
            </h2>
            <p>
              {siteConfig.name} intervient avec son propre matériel et ses
              propres produits, sauf accord contraire. Un accès au lieu
              d&apos;intervention doit être assuré à l&apos;heure convenue ; la présence
              du client n&apos;est pas obligatoire si un accès est organisé.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              3. Annulation et report
            </h2>
            <p>
              Nous recommandons de prévenir au moins 24 heures à l&apos;avance en
              cas d&apos;annulation ou de report d&apos;un rendez-vous, afin de
              permettre à l&apos;équipe de réorganiser son planning. Une
              annulation tardive ou répétée peut être prise en compte pour les
              interventions suivantes.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              4. Paiement
            </h2>
            <p>
              Les modalités de paiement (montant, moyen de paiement, avance
              éventuelle) sont convenues directement avec le client au moment
              du devis, avant l&apos;intervention.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              5. Responsabilité
            </h2>
            <p>
              {siteConfig.name} s&apos;engage à intervenir avec soin et
              professionnalisme. En cas de dommage accidentel avéré et
              directement lié à notre intervention, celui-ci doit être
              signalé le jour même afin d&apos;être examiné et traité de bonne
              foi entre les deux parties.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              6. Zone d&apos;intervention
            </h2>
            <p>{siteConfig.serviceArea}, avec {siteConfig.name} basée à {siteConfig.neighborhood}.</p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              7. Litiges
            </h2>
            <p>
              En cas de désaccord, les parties s&apos;engagent à rechercher en
              priorité une solution amiable. À défaut, le droit guinéen est
              applicable.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              Contact
            </h2>
            <p>
              Pour toute question sur ces conditions, contactez {siteConfig.fullName}{" "}
              au {siteConfig.phoneDisplay}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
