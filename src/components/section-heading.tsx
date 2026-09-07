export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left mx-0"}`}>
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green-700">
          {eyebrow}
        </p>
      )}
      <h2 className="balance text-3xl font-bold tracking-tight text-brand-blue-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}
