import Link from "next/link";
import { serviceIcons } from "./icons";
import type { ServiceItem } from "@/lib/site-config";
import { ArrowRightIcon } from "./icons";

export function ServiceCard({ service, detailed = false }: { service: ServiceItem; detailed?: boolean }) {
  const Icon = serviceIcons[service.icon];

  return (
    <div
      id={service.slug}
      className="group scroll-mt-24 rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[0.03] transition-shadow hover:shadow-md hover:shadow-black/[0.06]"
    >
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand-blue-50 text-brand-blue-500 transition-colors group-hover:bg-brand-blue-500 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-brand-blue-900">{service.title}</h3>
      <p className="mt-2 text-sm text-muted">
        {detailed ? service.description : service.short}
      </p>
      {detailed && (
        <ul className="mt-4 space-y-2">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green-500" />
              {b}
            </li>
          ))}
        </ul>
      )}
      {!detailed && (
        <Link
          href={`/services#${service.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-500 hover:text-brand-blue-600"
        >
          En savoir plus <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
