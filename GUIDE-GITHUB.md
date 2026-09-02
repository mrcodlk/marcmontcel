# METTRE MARCMONTCEL.BE EN LIGNE AVEC GITHUB PAGES

Le site est déjà configuré pour :
- domaine : marcmontcel.be
- contact : marcmontcel@gmail.com
- achat Amazon : https://www.amazon.fr/dp/B0HGGFF3XF

## 1 — Créer un compte GitHub
1. Va sur https://github.com/
2. Clique sur **Sign up**.
3. Choisis ton adresse e-mail, ton mot de passe et un nom d'utilisateur.
4. Confirme ton adresse e-mail.

## 2 — Créer le dépôt
1. Connecte-toi à GitHub.
2. Clique sur le bouton **+** en haut à droite, puis **New repository**.
3. Nom conseillé : `marcmontcel-site`
4. Choisis **Public** (GitHub Pages est gratuit pour un dépôt public).
5. Ne coche pas la création automatique d'un README.
6. Clique sur **Create repository**.

## 3 — Envoyer le site
1. Décompresse `marcmontcel-be-github-complet.zip` sur ton ordinateur.
2. Dans ton dépôt GitHub vide, clique sur **uploading an existing file** ou **Add file > Upload files**.
3. Glisse le CONTENU du dossier décompressé dans GitHub :
   index.html, livre.html, assets, CNAME, etc.
   Ne téléverse pas seulement le ZIP.
4. En bas, clique sur **Commit changes**.

## 4 — Activer GitHub Pages
1. Dans le dépôt : **Settings**.
2. Menu de gauche : **Pages**.
3. Sous **Build and deployment** :
   - Source : **Deploy from a branch**
   - Branch : **main**
   - Folder : **/(root)**
4. Clique sur **Save**.
5. Attends quelques minutes.

## 5 — Ajouter marcmontcel.be
Dans **Settings > Pages** :
1. Dans **Custom domain**, écris : `marcmontcel.be`
2. Clique sur **Save**.

Le fichier `CNAME` du projet contient déjà `marcmontcel.be`.

## 6 — Régler les DNS chez l'entreprise où tu as acheté le domaine
Dans la zone DNS de marcmontcel.be, crée quatre enregistrements A :

Type | Nom/Host | Valeur
A | @ | 185.199.108.153
A | @ | 185.199.109.153
A | @ | 185.199.110.153
A | @ | 185.199.111.153

Pour que `www.marcmontcel.be` fonctionne également, ajoute :

Type | Nom/Host | Valeur
CNAME | www | TON-NOM-UTILISATEUR-GITHUB.github.io

Remplace TON-NOM-UTILISATEUR-GITHUB par ton vrai identifiant GitHub.

Les DNS peuvent prendre jusqu'à 24 heures à se propager.

## 7 — HTTPS
Quand GitHub détecte correctement le domaine :
1. Retourne dans **Settings > Pages**
2. Active **Enforce HTTPS**.

## 8 — Formulaire de contact
Le formulaire envoie les messages vers :
marcmontcel@gmail.com

Il utilise FormSubmit. La première fois qu'un formulaire est envoyé, tu peux recevoir un e-mail d'activation de FormSubmit.
Clique sur le lien d'activation dans cet e-mail. Après cela, les messages suivants arriveront normalement dans ta boîte.

## 9 — Google
Une fois le site en ligne :
1. Va sur Google Search Console.
2. Ajoute la propriété `marcmontcel.be`.
3. Choisis la vérification DNS.
4. Ajoute l'enregistrement TXT demandé chez ton fournisseur de domaine.
5. Dans Search Console > Sitemaps, envoie :
   https://marcmontcel.be/sitemap.xml
6. Utilise **Inspection de l'URL** pour demander l'indexation de :
   - https://marcmontcel.be/
   - https://marcmontcel.be/livre.html
   - https://marcmontcel.be/auteur.html
   - https://marcmontcel.be/presse.html

## MODIFIER LE SITE PLUS TARD
Pour changer un texte :
1. Ouvre le fichier concerné sur GitHub.
2. Clique sur l'icône crayon.
3. Modifie le texte.
4. Clique sur **Commit changes**.
GitHub Pages se remettra à jour automatiquement.
