import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-blue-500 text-white hover:bg-brand-blue-600 shadow-sm shadow-brand-blue-500/20",
  secondary:
    "bg-white text-brand-blue-500 border border-brand-blue-100 hover:bg-brand-blue-50",
  ghost: "text-brand-blue-500 hover:bg-brand-blue-50",
  whatsapp: "bg-brand-green-500 text-white hover:bg-brand-green-600 shadow-sm shadow-brand-green-500/25",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-150 ${variants[variant]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("tel:") ? undefined : "_blank"}
        rel={href.startsWith("tel:") ? undefined : "noopener noreferrer"}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
