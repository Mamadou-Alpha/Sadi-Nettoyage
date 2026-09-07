import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { siteConfig, services } from "@/lib/site-config";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { waLink, telLink } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-brand-blue-900 text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="inline-block rounded-xl bg-white p-2">
            <Image
              src="/images/logo.webp"
              alt={siteConfig.fullName}
              width={140}
              height={58}
              className="h-9 w-auto"
            />
          </div>
          <p className="max-w-xs text-sm text-white/70">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
            Nos services
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-medium text-brand-green-400 hover:text-brand-green-400/80">
                Voir tous les services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/" className="hover:text-white">Accueil</Link></li>
            <li><Link href="/zones-desservies" className="hover:text-white">Zones desservies</Link></li>
            <li><Link href="/a-propos" className="hover:text-white">À propos</Link></li>
            <li><Link href="/temoignages" className="hover:text-white">Avis clients</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-400" />
              <span>Basés à {siteConfig.neighborhood} — {siteConfig.serviceArea}<br />{siteConfig.country}</span>
            </li>
            <li>
              <a href={telLink()} className="flex items-center gap-2 hover:text-white">
                <PhoneIcon className="h-4 w-4 shrink-0 text-brand-green-400" />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-brand-green-400" />
                Écrire sur WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>© {year} {siteConfig.fullName}. Tous droits réservés.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-white">Confidentialité</Link>
            <Link href="/cgv" className="hover:text-white">Conditions générales</Link>
          </nav>
          <p>{siteConfig.shortTagline}</p>
        </Container>
      </div>
    </footer>
  );
}
