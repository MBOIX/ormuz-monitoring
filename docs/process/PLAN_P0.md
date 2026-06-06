# Plan d'action — Sprint P0 (déblocage de la publication GitHub)

**Date** : 4 juin 2026
**Objectif** : rendre le dépôt publiable proprement (cadrage, README, licence, hygiène) sans toucher au fond analytique.
**Base** : `AUDIT.md` (palier P0) + 3 recherches de bonnes pratiques (README/cadrage, licence, audit des liens).

---

## 1. Décisions arrêtées

### 1.1 Nature du projet *(tranché)*
Suivi **OSINT d'événements réels et en cours**. Pas une simulation. La priorité n'est donc pas un disclaimer de fiction mais un **cadrage temporel « as-of »** + une **traçabilité vérifiable**, sur le modèle des produits de veille de référence (ISW : *Assessment as of* / *Data cutoff* / fenêtre couverte ; ACLED : limites d'usage ; Bellingcat : réplicabilité par sources ouvertes).

### 1.2 Licence *(tranché, justifié)*
Dépôt **multi-licence**, déclaré via la spécification **REUSE** (standard SPDX) :

| Contenu | Licence | Justification courte |
|---|---|---|
| **Code** (`app/` HTML/CSS/JS) | **MIT** | Site statique → aucune surface brevetable, la protection brevet d'Apache-2.0 est inutile ; MIT impose déjà l'attribution, reste simple et ré-incorporable partout. BSD n'apporte rien de plus. |
| **Contenu éditorial** (`*.md`) | **CC BY 4.0** | Attribution garantie (socle de crédibilité OSINT) ; couvre la sélection/arrangement + le **droit *sui generis*** UE sur les bases (inclus dans CC v4). |
| **Données** (`data/*.csv`/`.json`/`.geojson`) | **CC BY 4.0** | Même régime, licensing unifié. Les **chiffres bruts** ne sont de toute façon pas protégeables ; la licence porte sur la compilation et l'analyse. |

Écartés : **CC0** (pas d'attribution), **CC BY-SA** (copyleft qui freine la reprise par médias/think tanks/administrations), **ODbL** (ShareAlike + fragmentation + mal détecté par GitHub ; pertinent seulement pour une base primaire type OSM).

**Données tierces** : la licence ne couvre **que** l'apport original (compilation, mise en forme, analyses). Les droits sur les données sources (IEA, Eurostat, Reuters…) restent à leurs détenteurs ; reprise sous régime de **courte citation/analyse** avec attribution. À acter dans un fichier `NOTICE` + bloc README.

---

## 2. Fichiers à créer / modifier

### À créer (racine)
| Fichier | Rôle |
|---|---|
| `README.md` | Point d'entrée humain + bandeau de cadrage en tête (voir §3). |
| `LICENSE` | Texte **MIT** à la racine → l'encart « License » de GitHub affiche « MIT » (réflexe visiteur dev). |
| `LICENSES/MIT.txt` | Exigé par REUSE (même texte que `LICENSE`). |
| `LICENSES/CC-BY-4.0.txt` | Texte officiel intégral (récupéré via rtk/curl depuis creativecommons.org). |
| `REUSE.toml` | Répartition des licences par glob (code / éditorial / données). |
| `NOTICE` | Mention « données tierces » + attribution. |
| `CITATION.cff` | Active le bouton « Cite this repository » de GitHub (objectif crédibilité). |
| `.gitignore` | `.DS_Store`, `Thumbs.db`, `*.swp`, `*~`, `.claude/`. |
| `CHANGELOG.md` *(léger)* | Journal des consolidations datées (projet intrinsèquement temporel). |

### À modifier
| Fichier | Modification |
|---|---|
| `index.md` | Bandeau de cadrage « Comment lire ce dossier » en tête. |
| `app/*.html` (7) | Micro-mention de cadrage en pied de page (1 ligne) + en-tête SPDX. |
| `app/styles_common.css` | Petite classe `.disclaimer`/`.asof` pour le pied de page + en-tête SPDX. |
| `sources*.md` (3) | En-tête : **convention de référence robuste** + marquage des liens cassés (voir §4). |

> Note : les chiffres volatils **ne sont pas** réintroduits dans le README (renvoi vers les `.md` qui font foi) pour ne pas créer une surface de plus à resynchroniser.

---

## 3. Bandeau de cadrage (gabarits retenus)

**Version courte (README + pied de page app)** — modèle ISW adapté :
> **Comment lire ce dossier — instantané daté, situation évolutive.**
> Dernière consolidation : **3 juin 2026 (J95)** · arrêt des données : 3 juin 2026, heure de Paris.
> Suivi d'une crise **réelle et en cours** : chaque chiffre (prix, stocks, flux) périme vite ; au-delà de ~48-72 h, données à revérifier. La synthèse périodique la plus récente (`synthese_*.md`) fait foi. Analyse **OSINT sur sources ouvertes**, à vocation informative — ni conseil financier, ni source de sécurité opérationnelle.

**Version longue** (section « Avertissements & méthodologie » du README) : fraîcheur (consolidation vs data cutoff), sources & cotation Admiralty/STANAG 2511, recoupement ≥2 sources, calibrage ICD 203, séparation fait/interprétation/spéculation, limites, évolutivité. Expose au lecteur externe la méthodo aujourd'hui interne à `CLAUDE.md`.

---

## 4. Traitement des liens-sources *(item « corriger les sources mortes »)*

L'audit des liens a établi : **358 URLs**, 52 % de simples liens d'accueil, et **3 liens cassés (404)** qui étayent des **chiffres structurants** :
1. **Dated Brent 150-160 $/b (Exxon/Chapman)** → `cnbc.com/2026/05/28/...` **404**, source unique.
2. **Force majeure QatarEnergy/Ras Laffan 17 %** → `cnbc.com/2026/05/31/...` **404**, source unique.
3. **OPEP+ +188 000 b/j + sortie des EAU** → `aljazeera.com/.../2026/06/01/...` **soft-404**, source unique.

**Principe (rigueur CLAUDE.md : ne pas combler le vide).** On ne **fabrique pas** d'URL de remplacement. Action P0 :
- **Marquer** chaque fait concerné d'un `⚠ source à revérifier (lien rompu au 04/06/2026)` dans les `.md`, plutôt que laisser un slug mort passer pour une preuve.
- **Ajouter la convention de référence robuste** en tête des 3 fichiers sources :
  `[Titre] — Éditeur, JJ mois AAAA. URL live · Archive: <web.archive.org/…> (consulté le JJ/MM) · Cote: B2`
- **Runbook d'archivage** (exécution manuelle/réseau, documentée pour suite immédiate) :
  - P1 : retrouver les vraies sources des 3 faits 404, **recouper ≥2 sources Tier 1** (Reuters/Bloomberg/IEA), remplacer, archiver sur **Wayback + archive.today**.
  - P2 : pour les chiffres temps réel (Brent/TTF/%UGS/SPR), citer le **snapshot d'archive daté** (AGSI+/Eurostat/IEA OMR), jamais l'URL racine.
  - P3 : archiver en lot les 34 articles datés `/2026/` encore vivants avant qu'ils ne tombent.
  - P4 : coter D3/E4 ou rétrograder en « contexte » les sources faibles (gem.wiki, Substack, news-pravda, Press TV seul…).

> La recherche/recoupement web des 3 faits (P1) sera tentée dans ce sprint **uniquement si** ≥2 sources Tier 1 indépendantes sont trouvées avec certitude ; sinon le fait reste marqué « à revérifier » (pas de substitution hasardeuse).

---

## 5. Ordre d'exécution

1. `.gitignore` (rapide, isole les parasites).
2. Licence : `LICENSE` + `LICENSES/` + `REUSE.toml` + `NOTICE` + en-têtes SPDX dans les fichiers source.
3. `CITATION.cff`.
4. `README.md` (avec bandeau court + section avertissements longue + licence + structure + how-to-run + méthodo).
5. Bandeau de cadrage : `index.md` (haut) + pied de page des 7 HTML + classe CSS.
6. `sources*.md` : convention de référence + marquage des 3 liens cassés.
7. `CHANGELOG.md` (consolidations datées).
8. Contrôle final de cohérence (date J95 partout, liens internes valides).

---

## 6. Hors-périmètre P0 (renvoyé à P1/P2)
- Extraction des données en `data/*.csv`/`.geojson` (P1.6).
- Application réelle Admiralty au fil du texte (P1.1).
- Vendorisation Leaflet / cartes hors-ligne (P1.7).
- Ré-accentuation des dashboards, WCAG, échelles de barres (P2).
- Recoupement/archivage exhaustif des 358 URLs (au-delà des 3 critiques).

---

*Une fois validé, ce plan est exécuté tâche par tâche. Les chemins, gabarits de licence et contenu README détaillés proviennent des 3 recherches consolidées du 4 juin 2026.*
