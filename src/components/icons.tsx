import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-5.5a2 2 0 0 1 2-2 2 2 0 0 1 2 2V20h3.5a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function OfficeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="10" height="18" rx="1" />
      <rect x="14" y="9" width="6" height="12" rx="1" />
      <path d="M7 7h1M10.5 7h1M7 10.5h1M10.5 10.5h1M7 14h1M10.5 14h1" />
      <path d="M16.5 12.5h1M16.5 15.5h1" />
    </svg>
  );
}

export function ShopIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9.5 5 4h14l1 5.5" />
      <path d="M4 9.5a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" />
      <path d="M5.5 9.8V20h13V9.8" />
      <path d="M10 20v-5.5a2 2 0 0 1 4 0V20" />
    </svg>
  );
}

export function ConstructionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21 12 4l9 17" />
      <path d="M8.2 14h7.6" />
      <path d="M6.5 17.5h11" />
    </svg>
  );
}

export function PressureIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h9l3-3h4" />
      <path d="M13 9v6" />
      <path d="M17 15h3" />
      <path d="M4 12v6h6" />
      <path d="M6 21h2M9 21h2" />
    </svg>
  );
}

export function UpholsteryIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <path d="M3.5 12h17v4.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5V12Z" />
      <path d="M5 18v2M19 18v2" />
    </svg>
  );
}

export const serviceIcons = {
  home: HomeIcon,
  office: OfficeIcon,
  shop: ShopIcon,
  construction: ConstructionIcon,
  pressure: PressureIcon,
  upholstery: UpholsteryIcon,
};

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 5 6v6c0 4.5 3 7.5 7 8.5 4-1 7-4 7-8.5V6l-7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function TeamIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15 20a4.2 4.2 0 0 1 6-3.8" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4c0 9-6 15-15 15H4c0-9 6-15 15-15Z" />
      <path d="M5 19c4-4 8-7 15-15" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6 6 2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5c-2.5 4.6-9.5 9-9.5 9Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.01 2C6.485 2 2 6.477 2 11.99a9.96 9.96 0 0 0 1.36 5.03L2 22l5.11-1.34a10.02 10.02 0 0 0 4.9 1.25h.005c5.524 0 10.005-4.477 10.005-9.99C22 6.917 17.52 2.44 12.01 2Zm5.883 15.845c-.25.7-1.454 1.374-2.006 1.454a4.09 4.09 0 0 1-1.86-.117 16.9 16.9 0 0 1-1.679-.62c-2.958-1.273-4.888-4.244-5.036-4.44-.148-.198-1.208-1.605-1.208-3.063 0-1.457.767-2.174 1.038-2.472.272-.298.594-.372.792-.372.198 0 .397.002.57.01.183.01.427-.069.669.51.247.596.842 2.06.916 2.208.075.148.124.323.025.521-.099.199-.148.323-.298.497-.148.173-.312.387-.446.52-.148.148-.303.31-.13.607.173.297.77 1.27 1.653 2.058 1.135 1.012 2.093 1.325 2.39 1.475.297.148.471.124.644-.075.173-.198.742-.867.94-1.164.198-.298.397-.25.67-.15.272.1 1.733.818 2.03.967.297.148.495.223.57.347.075.124.075.719-.174 1.414Z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.5l1.2 4.3-2 1.6a12 12 0 0 0 5.4 5.4l1.6-2 4.3 1.2V18a2 2 0 0 1-2 2h-.5C9.5 20 4 14.5 4 7.5V7a2 2 0 0 1 1-2Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}
