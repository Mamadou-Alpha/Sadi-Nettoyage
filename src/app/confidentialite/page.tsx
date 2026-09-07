import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

const title = "Politique de confidentialité";
const description = "Comment Sadi Services de Nettoyage traite vos données personnelles.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="mx-auto max-w-3xl">
        <SectionHeading align="left" title={title} />

        <div className="prose-sm mt-10 space-y-6 text-sm leading-relaxed text-foreground/80">
          <p>
            Cette page explique simplement quelles informations {siteConfig.fullName}{" "}
            collecte lorsque vous visitez ce site ou nous contactez, et
            comment elles sont utilisées. Dernière mise à jour : voir la date
            de publication du site.
          </p>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              1. Ce que nous collectons
            </h2>
            <p>
              Le formulaire de la page Contact vous permet de saisir votre
              nom, le service souhaité, votre quartier et un message. Ces
              informations ne sont <strong>jamais envoyées vers un serveur ou
              une base de données</strong> : en cliquant sur &laquo;&nbsp;Envoyer sur
              WhatsApp&nbsp;&raquo;, votre navigateur ouvre directement une conversation
              WhatsApp pré-remplie avec ces informations, à destination du
              numéro de {siteConfig.fullName}. Nous ne recevons vos
              informations que si vous envoyez effectivement ce message sur
              WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              2. Carte et services tiers
            </h2>
            <p>
              La page Contact affiche une carte Google Maps intégrée
              (iframe). Cette carte est fournie directement par Google : la
              consultation de cette carte peut entraîner le dépôt de cookies
              par Google, selon sa propre politique de confidentialité, sur
              laquelle nous n&apos;avons pas de contrôle.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              3. Ce que nous ne faisons pas
            </h2>
            <p>
              Nous ne créons pas de compte utilisateur, ne demandons aucune
              information de paiement sur ce site, et ne vendons ni ne
              partageons aucune information avec un tiers à des fins
              commerciales.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              4. Vos droits
            </h2>
            <p>
              Vous pouvez à tout moment nous demander quelles informations
              vous concernant nous avons pu recevoir via WhatsApp (par
              exemple pour les faire supprimer de notre historique de
              conversation), en nous contactant directement au{" "}
              {siteConfig.phoneDisplay}.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-semibold text-brand-blue-900">
              5. Contact
            </h2>
            <p>
              Pour toute question sur cette politique de confidentialité,
              contactez {siteConfig.fullName} au {siteConfig.phoneDisplay}{" "}
              (téléphone ou WhatsApp).
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
