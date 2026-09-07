"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig, services } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";

export function ContactForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [serviceSlug, setServiceSlug] = useState(services[0]?.slug ?? "");
  const [message, setMessage] = useState("");

  const selectedService = services.find((s) => s.slug === serviceSlug);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lines = [
      `Bonjour ${siteConfig.name}, je souhaite obtenir un devis.`,
      name.trim() ? `Nom : ${name.trim()}` : null,
      selectedService ? `Service souhaité : ${selectedService.title}` : null,
      neighborhood.trim() ? `Quartier : ${neighborhood.trim()}` : null,
      message.trim() ? `Détails : ${message.trim()}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${siteConfig.phoneIntl}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    router.push("/merci");
  }

  const inputClasses =
    "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-brand-blue-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-100";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-blue-900">
          Nom
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre nom"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-brand-blue-900">
          Service souhaité
        </label>
        <select
          id="service"
          value={serviceSlug}
          onChange={(e) => setServiceSlug(e.target.value)}
          className={inputClasses}
        >
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="neighborhood" className="mb-1.5 block text-sm font-medium text-brand-blue-900">
          Quartier
        </label>
        <input
          id="neighborhood"
          type="text"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          placeholder="Ex : Ratoma, Kaloum, Matam…"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-blue-900">
          Détails de votre demande
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Surface approximative, fréquence souhaitée, date envisagée…"
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-brand-green-500/25 transition-colors hover:bg-brand-green-600 sm:w-auto"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Envoyer sur WhatsApp
      </button>
      <p className="text-xs text-muted">
        En cliquant, WhatsApp s&apos;ouvre avec votre message prérempli — vous
        pouvez le modifier avant de l&apos;envoyer.
      </p>
    </form>
  );
}
