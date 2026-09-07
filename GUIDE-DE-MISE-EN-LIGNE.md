# Guide de mise en ligne — Site Sadi Services de Nettoyage

Ce guide suppose que vous n'avez **jamais publié de site web** et qu'aucune
connaissance technique n'est nécessaire. Chaque étape explique quel bouton
cliquer, où il se trouve, et à quoi vous attendre à l'écran. Prenez votre
temps : rien de ce qui suit n'est risqué ni irréversible.

Vous n'avez pas besoin d'acheter un nom de domaine pour commencer : votre
site peut être publié **gratuitement** à une adresse du type
`sadi-nettoyage.vercel.app`. Ce lien fonctionne exactement comme une adresse
payante pour vos clients à Conakry — seul le nom de l'adresse change. Vous
pourrez ajouter un nom personnalisé plus tard si vous le souhaitez
(Partie 6).

---

## Avant de commencer — quelques mots expliqués simplement

- **Le code source** : c'est le fichier du site, celui que vous avez reçu
  dans le dossier `web/`. C'est comme le contenu d'un livre avant qu'il soit
  imprimé.
- **GitHub** : un service gratuit qui conserve une copie de ce "livre" en
  ligne, en sécurité. Ce n'est pas votre site public — c'est l'endroit où le
  code est rangé.
- **Vercel** : le service qui prend le code rangé sur GitHub, "l'imprime" et
  le rend visible sur Internet à une adresse (URL) que tout le monde peut
  visiter. C'est Vercel qui héberge votre site pour de vrai.
- **Déployer / publier** : rendre le site visible en ligne. Chaque fois que
  vous "déployez", la version en ligne se met à jour.
- **Variable d'environnement** : une petite information que l'on donne au
  site en dehors du code lui-même (par exemple : l'adresse exacte du site).
  Vous n'aurez besoin d'en régler que deux, expliquées plus bas.

Ce que vous devez avoir sous la main : un ordinateur, une connexion
Internet, un navigateur (Chrome, Edge ou Firefox), et une adresse e-mail à
laquelle vous avez accès.

---

## Partie 1 — Créer votre compte GitHub (5 minutes)

1. Ouvrez votre navigateur et allez sur **github.com**.
2. En haut à droite de la page, cliquez sur le bouton **"Sign up"**.
3. Suivez les 3-4 écrans qui s'affichent :
   - Entrez votre adresse e-mail, puis cliquez sur "Continue".
   - Créez un mot de passe (au moins 15 caractères, ou un mélange de
     lettres/chiffres — GitHub vous guide), puis "Continue".
   - Choisissez un nom d'utilisateur (ex. `sadinettoyage` ou votre nom),
     puis "Continue".
   - GitHub peut demander de résoudre un petit puzzle visuel pour vérifier
     que vous n'êtes pas un robot — suivez simplement l'instruction
     affichée.
   - Un code de vérification est envoyé à votre e-mail : ouvrez votre boîte
     mail, copiez le code à 6 chiffres, collez-le dans la case demandée sur
     GitHub.
4. Une fois connecté, GitHub peut poser quelques questions ("À quoi allez-
   vous utiliser GitHub ?") — vous pouvez répondre "Just me" et passer les
   étapes suivantes en cliquant sur "Skip" si l'option existe.

Vous avez maintenant un compte GitHub gratuit. Gardez votre nom
d'utilisateur et votre mot de passe en lieu sûr.

---

## Partie 2 — Installer GitHub Desktop (l'outil qui évite toute ligne de commande)

GitHub Desktop est un logiciel gratuit avec des boutons et des fenêtres,
comme n'importe quel autre logiciel — il n'y a rien à taper dans un
terminal.

1. Allez sur **desktop.github.com**.
2. Cliquez sur le bouton de téléchargement (il détecte automatiquement si
   vous êtes sur Windows ou Mac).
3. Une fois le fichier téléchargé, ouvrez-le et suivez l'installation
   (cliquez "Suivant"/"Installer" comme pour n'importe quel logiciel).
4. Au premier lancement, GitHub Desktop vous demande de vous connecter :
   cliquez sur **"Sign in to GitHub.com"**, une fenêtre de votre navigateur
   s'ouvre — connectez-vous avec le compte créé à la Partie 1, puis
   autorisez l'application ("Authorize desktop").
5. Revenez à l'application GitHub Desktop : elle affiche maintenant "You're
   all set!" ou votre nom d'utilisateur en haut à droite.

---

## Partie 3 — Mettre le code du site sur GitHub

1. Dans GitHub Desktop, en haut à gauche, cliquez sur **"File" → "Add local
   repository..."**.
2. Une fenêtre s'ouvre pour choisir un dossier : naviguez jusqu'au dossier
   `web` que vous avez reçu (celui qui contient, entre autres, un fichier
   nommé `package.json`), sélectionnez-le, puis cliquez sur "Add
   Repository" (ou "Select Folder" selon votre système).
3. GitHub Desktop peut afficher un message disant que ce dossier "does not
   appear to be a Git repository" et propose de le créer : cliquez sur
   **"create a repository"** (lien bleu dans le message).
4. Un écran de création s'affiche : laissez le nom proposé (ou tapez
   `sadi-nettoyage`), laissez le reste par défaut, et cliquez sur **"Create
   Repository"** en bas.
5. Vous voyez maintenant, à gauche, une longue liste de fichiers (ce sont
   tous les fichiers du site) avec des cases cochées : c'est normal, c'est
   la première version du code à enregistrer.
6. En bas à gauche, il y a une case "Summary" : tapez simplement `Version
   initiale du site`.
7. Cliquez sur le gros bouton bleu **"Commit to main"** juste en dessous.
   ("Commit" veut dire "enregistrer cette version" — comme sauvegarder un
   document.)
8. En haut de la fenêtre, un bouton apparaît : **"Publish repository"**.
   Cliquez dessus.
9. Une petite fenêtre s'ouvre : décochez la case **"Keep this code
   private"** si vous n'avez pas de raison de le garder privé (cela n'a
   aucune incidence sur votre site, seulement sur qui peut voir le code
   source sur GitHub) — ou laissez-la cochée si vous préférez que le code
   reste privé, les deux fonctionnent aussi bien pour la suite. Cliquez sur
   **"Publish Repository"**.

Le code est maintenant en ligne sur GitHub, prêt à être utilisé par
Vercel. Vous n'aurez plus jamais besoin de refaire les étapes 1 à 5
ci-dessus — uniquement les étapes 6 à 8 (avec "Push" au lieu de "Publish")
lorsque vous modifierez le contenu plus tard (voir Partie 5).

---

## Partie 4 — Publier le site avec Vercel (2 minutes)

1. Allez sur **vercel.com**.
2. Cliquez sur **"Sign Up"** (en haut à droite).
3. Choisissez **"Continue with GitHub"** — une fenêtre s'ouvre pour vous
   connecter avec le compte GitHub créé à la Partie 1 (si vous êtes déjà
   connecté à GitHub dans votre navigateur, cela peut se faire en un seul
   clic).
4. Vercel peut demander d'autoriser l'accès à votre compte GitHub :
   cliquez sur **"Authorize Vercel"**.
5. Sur le tableau de bord Vercel, cliquez sur **"Add New..."** (en haut à
   droite) puis choisissez **"Project"**.
6. Vercel affiche la liste de vos dépôts GitHub : trouvez
   `sadi-nettoyage` et cliquez sur le bouton **"Import"** à côté.
7. Un écran de configuration s'affiche. Vercel détecte automatiquement
   "Next.js" comme "Framework Preset" — ne changez rien d'autre.
8. Cliquez sur le gros bouton bleu **"Deploy"** en bas.
9. Une animation de construction démarre (compilation du site) — patientez
   1 à 2 minutes.
10. Un écran avec des confettis et un aperçu du site s'affiche : votre site
    est en ligne ! L'adresse est indiquée en haut, du type
    `sadi-nettoyage-xxxx.vercel.app` ou `sadi-nettoyage.vercel.app`.
11. Cliquez sur l'aperçu (ou sur l'adresse) pour ouvrir votre site dans un
    nouvel onglet et vérifier qu'il s'affiche correctement.

**Votre site est maintenant visible par n'importe qui dans le monde,
gratuitement, à cette adresse.**

---

## Partie 5 — Réglages indispensables après la première publication

### 5.1 — Indiquer l'adresse réelle du site (important pour WhatsApp/Facebook)

Cette étape permet à un aperçu correct (image + titre) de s'afficher quand
quelqu'un partage le lien de votre site sur WhatsApp ou Facebook.

1. Sur vercel.com, ouvrez votre projet `sadi-nettoyage` (cliquez dessus
   depuis le tableau de bord).
2. En haut, cliquez sur l'onglet **"Settings"**.
3. Dans le menu de gauche, cliquez sur **"Environment Variables"**.
4. Deux cases apparaissent — remplissez :
   - **"Key"** (nom) : `NEXT_PUBLIC_SITE_URL`
   - **"Value"** (valeur) : l'adresse exacte de votre site notée à l'étape
     10 de la Partie 4 (ex. `https://sadi-nettoyage.vercel.app`, **sans**
     barre oblique `/` à la fin)
5. Cliquez sur **"Save"**.
6. Il faut redéployer pour que ce changement s'applique : en haut, cliquez
   sur l'onglet **"Deployments"**, cliquez sur les trois petits points
   (**"⋯"**) à droite de la ligne la plus récente, puis choisissez
   **"Redeploy"**, et confirmez en cliquant à nouveau sur **"Redeploy"**
   dans la fenêtre qui s'ouvre.
7. Patientez 1 à 2 minutes : le site se republie avec le bon réglage.

### 5.2 — Vérification Google Search Console (à faire plus tard)

Le guide [`GOOGLE-ET-REFERENCEMENT-LOCAL.md`](./GOOGLE-ET-REFERENCEMENT-LOCAL.md)
vous demandera d'ajouter une seconde variable d'environnement,
`GOOGLE_SITE_VERIFICATION`. La méthode est **exactement la même** que
ci-dessus (5.1) : "Settings" → "Environment Variables" → ajouter la clé et
la valeur → "Save" → puis redéployer (étape 6 ci-dessus). Ne faites cette
étape qu'au moment indiqué dans ce second guide.

---

## Partie 6 — Vérifier que tout fonctionne (checklist de 2 minutes)

Ouvrez votre site en ligne (l'adresse notée plus haut) sur votre ordinateur
**et** sur votre téléphone, et vérifiez :

- [ ] La page d'accueil s'affiche avec le logo et la photo de l'équipe
- [ ] Le menu (Services, Zones desservies, À propos, Avis clients, FAQ,
      Contact) fonctionne et chaque page s'ouvre
- [ ] Le numéro de téléphone affiché est bien **+224 614 97 84 68**
- [ ] Le bouton WhatsApp (en bas à droite de l'écran) ouvre bien WhatsApp
      avec un message pré-rempli
- [ ] Le formulaire de la page Contact ouvre bien WhatsApp quand on le
      remplit et clique sur "Envoyer"
- [ ] Sur téléphone, le menu (bouton ☰) s'ouvre et se ferme correctement

Si l'un de ces points ne fonctionne pas, la cause la plus fréquente est une
variable d'environnement mal orthographiée (Partie 5.1) ou un redéploiement
oublié après une modification.

---

## Partie 7 — Mettre à jour le contenu du site plus tard

Toutes les informations de l'entreprise (téléphone, quartier, liste de
services, questions fréquentes…) sont regroupées dans un seul fichier,
pour être faciles à modifier sans toucher au reste :

```
web/src/lib/site-config.ts
```

**Comment modifier ce fichier sans connaissances techniques :**

1. Ouvrez GitHub Desktop (installé à la Partie 2).
2. En haut, vérifiez que le dépôt affiché est bien `sadi-nettoyage`.
3. Cliquez sur **"Show in Explorer"** (Windows) ou **"Show in Finder"**
   (Mac) — un menu "Repository" en haut de GitHub Desktop propose cette
   option — pour ouvrir le dossier du projet sur votre ordinateur.
4. Ouvrez le fichier `src/lib/site-config.ts` avec un simple éditeur de
   texte (le Bloc-notes sur Windows, TextEdit sur Mac — clic droit sur le
   fichier → "Ouvrir avec").
5. Modifiez uniquement le texte entre guillemets `"..."` — ne touchez pas
   aux virgules, deux-points ou accolades autour. Par exemple, pour changer
   une question de la FAQ, modifiez uniquement le texte après `question:`
   ou `answer:`.
6. Enregistrez le fichier (Ctrl+S ou Cmd+S) et fermez-le.
7. Revenez à GitHub Desktop : vous verrez apparaître le fichier modifié
   dans la liste à gauche.
8. En bas à gauche, dans la case "Summary", décrivez brièvement le
   changement (ex. `Mise à jour du numéro de téléphone`).
9. Cliquez sur **"Commit to main"**, puis sur le bouton **"Push origin"**
   qui apparaît en haut.
10. C'est terminé : Vercel détecte automatiquement le changement sur
    GitHub et republie le site en 1 à 2 minutes, sans aucune action
    supplémentaire de votre part.

Vous pouvez suivre la progression de cette republication sur vercel.com,
onglet "Deployments" de votre projet (un point orange "Building" devient
vert "Ready" une fois terminé).

**Vous pouvez modifier notamment :**

- `phoneDisplay` / `phoneIntl` — si le numéro de téléphone change
- `neighborhood`, `city`, `serviceArea` — si la zone d'intervention évolue
- `services` — pour ajouter, retirer ou modifier un service
- `faqs` — pour ajouter de nouvelles questions fréquentes
- `zones` — pour ajouter ou retirer une commune mise en avant
- `testimonials` — pour ajouter un vrai avis client (jamais un avis
  inventé — voir `GOOGLE-ET-REFERENCEMENT-LOCAL.md`)
- `legal` — pour compléter forme juridique / RCCM / NIF une fois obtenus
  (voir `SECURITE-ET-VERIFICATION.md`)
- `socials` — pour ajouter vos liens Facebook/Instagram/TikTok réels dès
  que vous les aurez créés

---

## Partie 8 — Ajouter un nom de domaine personnalisé (optionnel, plus tard)

Si un jour vous souhaitez une adresse comme `www.sadi-nettoyage.com` au
lieu de `sadi-nettoyage.vercel.app` :

1. Achetez le nom de domaine chez un registraire (Namecheap, GoDaddy,
   Google Domains, etc. — généralement 8 à 15 $/an, à vérifier au moment de
   l'achat car les prix changent).
2. Sur vercel.com, ouvrez votre projet, cliquez sur **"Settings"** puis
   **"Domains"**.
3. Tapez votre nom de domaine dans la case et cliquez sur **"Add"**.
4. Vercel affiche 2-3 réglages techniques (des lignes appelées "DNS
   Records") à recopier chez votre registraire, avec des instructions
   précises affichées à l'écran — suivez-les exactement, ou transmettez la
   page à votre registraire, la plupart proposent une assistance pour
   cette étape courante.
5. Une fois les réglages faits (le changement peut prendre de quelques
   minutes à 24h pour être reconnu), retournez dans "Settings" →
   "Environment Variables" et mettez à jour `NEXT_PUBLIC_SITE_URL` avec le
   nouveau nom de domaine (Partie 5.1), puis redéployez.

Ce n'est pas nécessaire pour exercer votre activité — uniquement utile si
vous voulez une adresse à votre nom.

---

## Partie 9 — Que faire si quelque chose ne marche pas

| Problème observé | Cause la plus probable | Solution |
|---|---|---|
| Le site affiche une erreur après "Deploy" | Un fichier a été modifié de façon incorrecte (une virgule ou un guillemet manquant dans `site-config.ts`) | Sur GitHub Desktop, cliquez sur "Repository" → "Discard all changes" pour annuler la dernière modification non publiée, ou demandez de l'aide avant de "Commit" une modification douteuse |
| L'aperçu WhatsApp/Facebook n'affiche pas la bonne image | La variable `NEXT_PUBLIC_SITE_URL` n'est pas réglée ou le site n'a pas été redéployé après | Repartez de la Partie 5.1 |
| Le site ne se met pas à jour après une modification | Le "Push origin" (étape 9, Partie 7) n'a pas été fait, ou Vercel est encore en train de reconstruire | Vérifiez l'onglet "Deployments" sur vercel.com — attendez que le statut passe à "Ready" |
| Impossible de se connecter à GitHub Desktop | Mot de passe oublié | Utilisez "Forgot password" sur github.com |

Pour toute situation non couverte ici, la documentation officielle reste la
référence la plus fiable :

- Documentation officielle Vercel : [vercel.com/docs](https://vercel.com/docs)
- Documentation officielle GitHub Desktop : [docs.github.com/desktop](https://docs.github.com/en/desktop)

---

## Résumé express (une fois les Parties 1 à 5 faites une première fois)

Pour toute future mise à jour du site, seules ces 4 actions sont
nécessaires :

1. Modifier le texte dans `site-config.ts` avec le Bloc-notes/TextEdit.
2. Dans GitHub Desktop : écrire un résumé → "Commit to main".
3. Cliquer sur "Push origin".
4. Attendre 1 à 2 minutes — le site se met à jour tout seul.

Pour la suite — apparaître sur Google (recherche + Google Maps) et sur
Bing —, voir le guide dédié
[`GOOGLE-ET-REFERENCEMENT-LOCAL.md`](./GOOGLE-ET-REFERENCEMENT-LOCAL.md).
