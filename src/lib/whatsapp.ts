import { siteConfig } from "./site-config";

export function waLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.phoneIntl}?text=${text}`;
}

export function telLink() {
  return `tel:+${siteConfig.phoneIntl}`;
}
