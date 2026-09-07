# Sadi Services de Nettoyage — Site web

Site vitrine pour **Sadi Services de Nettoyage**, entreprise de nettoyage
basée à Nongo, Conakry (République de Guinée). Construit avec Next.js 16
(App Router), TypeScript et Tailwind CSS v4.

**Pour publier le site en ligne**, suivez [`GUIDE-DE-MISE-EN-LIGNE.md`](./GUIDE-DE-MISE-EN-LIGNE.md).
**Pour apparaître sur Google et Bing** (Search Console, Google Business
Profile / Maps), suivez [`GOOGLE-ET-REFERENCEMENT-LOCAL.md`](./GOOGLE-ET-REFERENCEMENT-LOCAL.md).

## Stack technique

- [Next.js 16](https://nextjs.org) — App Router, rendu statique
- TypeScript
- Tailwind CSS v4 (thème défini dans `src/app/globals.css`)
- Polices [Poppins](https://fonts.google.com/specimen/Poppins) (titres) et
  [Inter](https://fonts.google.com/specimen/Inter) (texte), auto-hébergées
  via `next/font/google`

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
src/
  app/
    page.tsx           Accueil
    services/page.tsx  Services (détaillé)
    a-propos/page.tsx  À propos
    faq/page.tsx        FAQ
    contact/page.tsx    Contact (formulaire WhatsApp + carte)
    layout.tsx          Structure commune (SEO, header, footer)
    sitemap.ts           Génère /sitemap.xml automatiquement
    robots.ts            Génère /robots.txt automatiquement
    globals.css         Thème (couleurs, polices)
  components/           Composants réutilisables (boutons, cartes, header, footer…)
  lib/
    site-config.ts       Toutes les informations de l'entreprise (source unique)
    whatsapp.ts           Génération des liens WhatsApp / téléphone
public/images/            Logo, photos, favicons (formats optimisés WebP/PNG)
```

Toutes les informations propres à l'entreprise (téléphone, quartier,
services, valeurs, FAQ) sont centralisées dans `src/lib/site-config.ts` :
un seul fichier à modifier pour mettre à jour tout le site.

## SEO technique déjà en place

- `sitemap.xml` et `robots.txt` générés automatiquement
- URL canonique + Open Graph propres à chaque page
- Données structurées Schema.org (`HomeAndConstructionBusiness` sur tout le
  site, `FAQPage` sur `/faq`) — uniquement des informations réelles
- En-têtes de sécurité de base (`next.config.ts`)
- Prêt à recevoir le code de vérification Google Search Console (variable
  d'environnement `GOOGLE_SITE_VERIFICATION`, sans toucher au code)

## Vérifications effectuées avant livraison

- `npm run build` — build de production réussi, pages statiques + sitemap/robots générés
- `npx tsc --noEmit` — aucune erreur TypeScript
- `npx eslint .` — aucune erreur ni avertissement
- Vérification visuelle desktop + mobile de chaque page (captures d'écran)
- Test du menu mobile, de l'accordéon FAQ et du formulaire de contact
- Vérification que le logo, le numéro de téléphone et la zone
  d'intervention n'ont subi aucune modification au fil des mises à jour

## Déploiement

Voir [`GUIDE-DE-MISE-EN-LIGNE.md`](./GUIDE-DE-MISE-EN-LIGNE.md) pour la
publication gratuite sur [Vercel](https://vercel.com) et l'ajout, plus tard
et si besoin, d'un nom de domaine personnalisé.
