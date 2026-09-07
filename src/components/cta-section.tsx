import { Container } from "./container";
import { Button } from "./button";
import { WhatsAppIcon, PhoneIcon } from "./icons";
import { siteConfig } from "@/lib/site-config";
import { waLink, telLink } from "@/lib/whatsapp";

export function CtaSection() {
  return (
    <section className="bg-brand-blue-500">
      <Container className="flex flex-col items-center gap-6 py-16 text-center">
        <h2 className="balance max-w-xl text-3xl font-bold text-white sm:text-4xl">
          Prêt pour un espace impeccable ?
        </h2>
        <p className="max-w-md text-white/85">
          Contactez-nous dès maintenant sur WhatsApp pour un devis rapide, partout à {siteConfig.city}.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={waLink()} variant="whatsapp" icon={<WhatsAppIcon className="h-4 w-4" />}>
            Écrire sur WhatsApp
          </Button>
          <Button
            href={telLink()}
            variant="secondary"
            icon={<PhoneIcon className="h-4 w-4" />}
            className="!bg-white/10 !text-white !border-white/25 hover:!bg-white/20"
          >
            {siteConfig.phoneDisplay}
          </Button>
        </div>
      </Container>
    </section>
  );
}
