"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./container";
import { Button } from "./button";
import { MenuIcon, CloseIcon, WhatsAppIcon, PhoneIcon } from "./icons";
import { siteConfig } from "@/lib/site-config";
import { waLink, telLink } from "@/lib/whatsapp";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/zones-desservies", label: "Zones desservies" },
  { href: "/a-propos", label: "À propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Ferme le menu mobile lors d'un changement de page (calculé pendant le
  // rendu plutôt que dans un effet, pour éviter un rendu en cascade inutile).
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-sm">
      <Container className="flex h-[4.5rem] items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2" aria-label={siteConfig.fullName}>
          <Image
            src="/images/logo.webp"
            alt={siteConfig.fullName}
            width={140}
            height={58}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-blue-50 text-brand-blue-600"
                    : "text-foreground/80 hover:bg-surface hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={telLink()} variant="secondary" icon={<PhoneIcon className="h-4 w-4" />}>
            {siteConfig.phoneDisplay}
          </Button>
          <Button href={waLink()} variant="whatsapp" icon={<WhatsAppIcon className="h-4 w-4" />}>
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-surface lg:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium ${
                    active ? "bg-brand-blue-50 text-brand-blue-600" : "text-foreground/90"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 flex flex-col gap-2 px-1">
              <Button href={telLink()} variant="secondary" icon={<PhoneIcon className="h-4 w-4" />}>
                {siteConfig.phoneDisplay}
              </Button>
              <Button href={waLink()} variant="whatsapp" icon={<WhatsAppIcon className="h-4 w-4" />}>
                Écrire sur WhatsApp
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
