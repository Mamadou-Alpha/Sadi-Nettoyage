import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { waLink, telLink } from "@/lib/whatsapp";

const title = "Merci pour votre demande";
const description = "Votre demande a bien été préparée.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/merci" },
  robots: { index: false, follow: true },
};

export default function MerciPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="mx-auto max-w-lg text-center">
        <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-brand-green-500 text-white">
          <CheckIcon className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-bold text-brand-blue-900">Merci !</h1>
        <p className="mt-3 text-muted">
          Votre message WhatsApp a été préparé et devrait s&apos;être ouvert
          dans un nouvel onglet. Il ne vous reste qu&apos;à l&apos;envoyer pour que
          notre équipe le reçoive.
        </p>
        <p className="mt-2 text-sm text-muted">
          La fenêtre ne s&apos;est pas ouverte ? Contactez-nous directement :
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={waLink()} variant="whatsapp" icon={<WhatsAppIcon className="h-4 w-4" />}>
            Écrire sur WhatsApp
          </Button>
          <Button href={telLink()} variant="secondary">
            {siteConfig.phoneDisplay}
          </Button>
        </div>
        <Button href="/" variant="ghost" className="mt-8">
          ← Retour à l&apos;accueil
        </Button>
      </Container>
    </section>
  );
}
