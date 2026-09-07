"use client";

import { WhatsAppIcon } from "./icons";
import { waLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire sur WhatsApp"
      title="Écrire sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand-green-500 text-white shadow-lg shadow-brand-green-600/30 transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
