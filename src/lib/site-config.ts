// Toutes les informations de l'entreprise sont centralisées ici.
// Pour mettre à jour un numéro, un texte global ou une adresse, modifiez ce fichier :
// le changement se répercute automatiquement sur tout le site.

// Adresse publique du site, utilisée pour les métadonnées SEO (canonical,
// Open Graph), le sitemap et le fichier robots.txt. Remplacez la valeur de
// la variable d'environnement NEXT_PUBLIC_SITE_URL par l'adresse réelle une
// fois le site déployé — voir GUIDE-DE-MISE-EN-LIGNE.md.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sadi-nettoyage.vercel.app";

export const siteConfig = {
  name: "Sadi",
  fullName: "Sadi Services de Nettoyage",
  tagline: "Une ville plus propre, c'est notre engagement !",
  shortTagline: "Votre espace, notre priorité !",
  description:
    "Sadi Services de Nettoyage intervient partout à Conakry pour l'entretien de vos maisons, bureaux, commerces et chantiers : une équipe professionnelle, des produits sûrs, et une intervention rapide.",

  // Coordonnées
  phoneDisplay: "+224 614 97 84 68",
  phoneIntl: "224614978468", // format international sans "+", pour les liens tel:/wa.me
  whatsappMessage:
    "Bonjour Sadi Services de Nettoyage, je souhaite obtenir un devis pour un nettoyage.",

  // Localisation
  neighborhood: "Nongo",
  city: "Conakry",
  country: "République de Guinée",
  serviceArea: "Toute la ville de Conakry",
  // Variante pour une insertion en milieu de phrase (garde "Conakry" avec
  // sa majuscule de nom propre) — n'est pas une valeur différente de
  // serviceArea ci-dessus, seulement sa forme grammaticale alternative.
  serviceAreaLower: "toute la ville de Conakry",
  mapsQuery: "Nongo, Conakry, Guinée",

  // Réseaux (à compléter par le client si disponibles)
  socials: {
    facebook: "",
    instagram: "",
  },
} as const;

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon:
    | "home"
    | "office"
    | "shop"
    | "construction"
    | "pressure"
    | "upholstery";
};

export const services: ServiceItem[] = [
  {
    slug: "maisons-appartements",
    title: "Nettoyage de maisons & appartements",
    short: "Un intérieur propre, sain et agréable à vivre.",
    description:
      "Un entretien complet de votre logement — sols, cuisine, salle de bain, poussière et vitres — adapté à votre rythme : ménage ponctuel ou passages réguliers.",
    bullets: [
      "Entretien régulier ou ponctuel",
      "Cuisine, salle de bain, chambres, salon",
      "Adapté aux appartements comme aux grandes maisons",
    ],
    icon: "home",
  },
  {
    slug: "bureaux-entreprises",
    title: "Nettoyage de bureaux & entreprises",
    short: "Des espaces de travail propres et professionnels.",
    description:
      "Des locaux impeccables qui reflètent le sérieux de votre entreprise, avec des interventions organisées pour ne pas perturber votre activité.",
    bullets: [
      "Bureaux, salles de réunion, espaces communs",
      "Interventions programmées selon vos horaires",
      "Sanitaires et cuisine d'entreprise inclus",
    ],
    icon: "office",
  },
  {
    slug: "commerces-magasins",
    title: "Nettoyage de commerces & magasins",
    short: "Votre commerce mérite le meilleur accueil.",
    description:
      "Un espace de vente propre et accueillant, qui inspire confiance à vos clients dès leur entrée.",
    bullets: [
      "Vitrines, sols, rayonnages",
      "Passage avant ouverture ou après fermeture",
      "Adapté aux boutiques comme aux grandes surfaces",
    ],
    icon: "shop",
  },
  {
    slug: "apres-travaux",
    title: "Nettoyage après travaux",
    short: "Élimination des poussières, gravats et résidus.",
    description:
      "Après une construction ou une rénovation, nous remettons les lieux en état pour une livraison prête à vivre, sans traces de chantier.",
    bullets: [
      "Poussière fine et résidus de peinture",
      "Sols, vitres, sanitaires",
      "Avant remise des clés ou emménagement",
    ],
    icon: "construction",
  },
  {
    slug: "haute-pression",
    title: "Nettoyage haute pression",
    short: "Terrasses, cours, façades, véhicules.",
    description:
      "Un nettoyage en profondeur des surfaces extérieures pour redonner de l'éclat à votre propriété ou votre véhicule.",
    bullets: [
      "Terrasses, cours et allées",
      "Façades et murs extérieurs",
      "Véhicules particuliers et utilitaires",
    ],
    icon: "pressure",
  },
  {
    slug: "tapis-canapes-matelas",
    title: "Nettoyage de tapis, canapés & matelas",
    short: "Pour un environnement plus sain pour toute la famille.",
    description:
      "Un traitement en profondeur de vos textiles pour éliminer poussière, acariens et taches incrustées.",
    bullets: [
      "Tapis et moquettes",
      "Canapés et fauteuils",
      "Matelas",
    ],
    icon: "upholstery",
  },
];

export const values = [
  {
    title: "Fiabilité & confiance",
    description:
      "Une équipe ponctuelle et sérieuse, sur qui vous pouvez compter à chaque intervention.",
  },
  {
    title: "Équipe professionnelle",
    description:
      "Du personnel formé aux bonnes pratiques de nettoyage, respectueux de votre espace.",
  },
  {
    title: "Produits sûrs et écologiques",
    description:
      "Des produits respectueux de l'environnement et sans danger pour votre famille ou vos équipes.",
  },
  {
    title: "Résultats impeccables",
    description:
      "Une attention portée aux détails, pour un résultat qui se voit dès le premier coup d'œil.",
  },
  {
    title: "Satisfaction client",
    description:
      "Votre tranquillité d'esprit avant tout : nous nous adaptons à vos besoins réels.",
  },
] as const;

// Quartiers/communes mis en avant sur la page "Zones desservies". Il ne
// s'agit pas d'une limite : l'entreprise dessert "Toute la ville de
// Conakry" (voir serviceArea ci-dessus). Ce sont les communes historiques
// les plus connues, pour aider les clients à se reconnaître et pour le
// référencement local par quartier.
export const zones: { name: string; note?: string }[] = [
  { name: "Ratoma", note: "Notre secteur de base (quartier de Nongo)" },
  { name: "Kaloum" },
  { name: "Dixinn" },
  { name: "Matam" },
  { name: "Matoto" },
];

// Avis clients réels. Volontairement vide : aucun faux avis n'est affiché
// sur le site. Ajoutez ici les avis que de vrais clients vous auront
// laissés (ex. copiés depuis Google), avec leur accord.
export const testimonials: { name: string; text: string; date?: string }[] = [];

// Informations légales — à compléter par la propriétaire avant de
// considérer les pages légales comme définitives. Tant que ces champs
// sont vides, les pages du site l'indiquent honnêtement plutôt que
// d'afficher une valeur inventée. Voir GOOGLE-ET-REFERENCEMENT-LOCAL.md /
// SECURITE-ET-VERIFICATION.md pour la démarche d'immatriculation (RCCM).
export const legal = {
  legalForm: "", // ex. "Entreprise Individuelle"
  rccm: "", // numéro RCCM une fois l'immatriculation obtenue
  nif: "", // Numéro d'Identification Fiscale
};

export const faqs = [
  {
    question: "Dans quels quartiers de Conakry intervenez-vous ?",
    answer:
      "Nous intervenons dans toute la ville de Conakry. Notre équipe est basée à Nongo, mais se déplace dans l'ensemble des quartiers, quel que soit votre secteur.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Le plus simple est de nous écrire sur WhatsApp ou de nous appeler directement au +224 614 97 84 68. Décrivez-nous votre besoin (type de lieu, surface, fréquence souhaitée) et nous revenons vers vous rapidement.",
  },
  {
    question: "Utilisez-vous vos propres produits et équipements ?",
    answer:
      "Oui. Notre équipe se déplace avec ses propres produits — sûrs et respectueux de l'environnement — ainsi que son matériel de nettoyage.",
  },
  {
    question: "Peut-on programmer un nettoyage récurrent ?",
    answer:
      "Oui, nous proposons aussi bien des interventions ponctuelles que des passages réguliers (hebdomadaires, bi-mensuels ou mensuels) selon vos besoins. Parlons-en directement sur WhatsApp pour construire une formule adaptée.",
  },
  {
    question: "Faut-il être présent pendant le nettoyage ?",
    answer:
      "Ce n'est pas obligatoire, du moment qu'un accès aux lieux nous est assuré. Beaucoup de nos clients professionnels nous confient un accès en dehors de leurs heures d'ouverture.",
  },
  {
    question: "Quels types de lieux nettoyez-vous ?",
    answer:
      "Maisons et appartements, bureaux et entreprises, commerces et magasins, chantiers après travaux, ainsi que le nettoyage haute pression et l'entretien de tapis, canapés et matelas.",
  },
] as const;
