import type { ReactNode } from "react";

export function ValueCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-surface p-6">
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-green-600 shadow-sm">
        {icon}
      </div>
      <h3 className="font-semibold text-brand-blue-900">{title}</h3>
      <p className="mt-1.5 text-sm text-muted">{description}</p>
    </div>
  );
}
