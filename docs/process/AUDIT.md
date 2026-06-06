# Rapport d'audit — Préparation à la publication GitHub

**Projet** : Suivi de la crise du détroit d'Ormuz / Impact France
**Date de l'audit** : 4 juin 2026
**Méthode** : 4 analyses parallèles indépendantes (sourcing OSINT · rigueur analytique · présentation web · hygiène de dépôt), recoupées.
**Verdict global** : contenu analytique **dense et soigné**, mais **emballage de publication à l'état de brouillon** et **deux angles morts critiques** de crédibilité. En l'état : **non publiable** sans corriger le palier P0.

---

## Synthèse exécutive

Le projet a de vraies forces : granularité sectorielle rare (4 carburants FR, filière AdBlue/urée, stocks stratégiques par agence nationale), traitement énergie techniquement solide (distinction Brent futures / Dated Brent appliquée partout), cohérence chiffrée inter-fichiers supérieure à la moyenne, et une page éditoriale de niveau presse (`synthese_france.html`).

Mais quatre faiblesses structurelles reviennent de façon convergente d'un auditeur à l'autre :

1. **Aucun cadrage « as-of » ni traçabilité à toute épreuve sur des événements réels mais très récents** — le projet est un **suivi d'événements réels en cours** (confirmé par l'auteur). Mais ces événements (28 février → 3 juin 2026) sont **postérieurs à la connaissance générale et à l'horizon des modèles d'IA grand public** : un lecteur extérieur ne peut pas les tenir pour acquis. Sans note de cadrage temporel et sans sourcing archivé/recoupé au chiffre, le projet est exposé au doute injustifié. *Note : 3 auditeurs sur 4 ont initialement sur-interprété ce point comme un « risque de fiction » — c'était un artefact de leur horizon de connaissances (janvier 2026), pas un défaut du projet ; le cadrage ci-dessous est corrigé en conséquence.*
2. **La méthodologie revendiquée n'est pas appliquée** — cotation Admiralty A1–F6, ACH, séparation probabilité/confiance : définies dans `CLAUDE.md`, quasi absentes des livrables.
3. **Les données ne sont pas traçables au chiffre** — pas de source+date par valeur affichée, pas de fichiers de données réutilisables, provenance globale et non granulaire.
4. **L'emballage de dépôt manque** — pas de README, pas de LICENSE, pas de `.gitignore`, un seul commit, branche `dev`.

Le reste (présentation, polish, cohérence numérique résiduelle) est important pour le « sérieux » mais secondaire face à ces quatre points.

---

## Priorisation

| Palier | Enjeu | Bloque la publication ? |
|---|---|---|
| **P0 — Bloquant** | Crédibilité / responsabilité éditoriale | Oui |
| **P1 — Sérieux OSINT** | Distinguer le projet d'un blog amateur | Fortement recommandé avant publication |
| **P2 — Polish** | Finition professionnelle | Non, mais visible |

---

# P0 — Bloquant (à traiter avant toute mise en ligne)

## P0.1 — Cadrage temporel « as-of » + traçabilité à toute épreuve *(CRITIQUE)* — 🟡 **[J98 : cadrage as-of ✅ ; archivage des sources ⬜]**

> **Correction de cadrage.** Ce projet est un **suivi d'événements réels et en cours** (confirmé par l'auteur), pas une simulation. Les 3 auditeurs qui avaient évoqué un « risque de fiction » l'ont fait à cause de **leur** horizon de connaissances (janvier 2026) : ces événements lui étant postérieurs, ils ne pouvaient pas les confirmer depuis leurs données et ont sur-interprété un manque d'information comme un doute sur les faits. Inférence erronée — corrigée ici. La conséquence pratique change : l'objectif **n'est pas** un disclaimer de fiction, mais de rendre le suivi **inattaquable** pour un lecteur extérieur qui, lui non plus, n'a pas encore ces événements en mémoire.

**Constat.** `index.md` ouvre au présent factuel sur des événements (28 février → 3 juin 2026) qui sont **réels mais très récents** : un visiteur GitHub, un journaliste, un recruteur — ou une IA à l'horizon plus ancien — ne peut pas les tenir pour acquis. Or le repo ne fournit **aucun repère temporel d'entrée** (« état des lieux à la date X, situation évolutive ») et, surtout, plusieurs sources censées étayer les faits clés sont **non vérifiables en l'état** (URLs IEA/EIA en 404, pas d'archivage, pas de date de consultation — cf. P1.5). Sur des faits que le lecteur ne connaît pas déjà, **chaque lien mort se transforme en doute injustifié**.

**Pourquoi c'est critique.** La crédibilité d'un suivi OSINT d'événements récents repose entièrement sur la capacité du lecteur à **remonter chaque affirmation à une source vivante et datée**. Tant que ce n'est pas le cas, un produit par ailleurs rigoureux reste réfutable d'un simple « source introuvable ».

**Solution.**
1. **Note de cadrage en tête de chaque artefact** (`README.md`, `index.md`, `<header>`/`<footer>` des 7 pages HTML) : nature du projet (suivi OSINT d'une crise en cours), **date d'« état des lieux »** explicite, caractère évolutif des données, et rappel que la synthèse périodique la plus récente fait foi.
2. **Corriger en priorité les sources mortes** (404 IEA/EIA) et **archiver chaque source clé** (Wayback / archive.today) pour que les liens restent vérifiables dans le temps.
3. **Date de consultation + cote** sur chaque source clé (cf. P1.5).
4. Pour le lectorat le plus large (et les IA antérieures aux faits) : un court « **Comment lire ce dossier / chronologie de référence** » qui pose les jalons vérifiables avant d'entrer dans l'analyse.

## P0.2 — Créer un README racine *(CRITIQUE)* — ✅ **[FAIT]**

**Constat.** Aucun `README.md`. Un visiteur arrive sur une liste de fichiers `.md` en français sans point d'entrée. Le seul fichier d'accueil actuel est `CLAUDE.md`, qui est un fichier d'instructions pour agent IA — signal immédiat « projet généré, non finalisé ».

**Solution.** `README.md` couvrant, dans l'ordre : (1) bandeau de cadrage P0.1 ; (2) nature et objectif du projet ; (3) licence ; (4) structure des fichiers (réutilisable depuis `CLAUDE.md`) ; (5) comment ouvrir l'app (`python3 -m http.server` depuis `app/`) ; (6) méthodologie résumée + lien vers `sources.md` ; (7) avertissement de fraîcheur des données.

## P0.3 — Ajouter une LICENSE *(CRITIQUE)* — ✅ **[FAIT : MIT + CC BY 4.0, REUSE, NOTICE, CITATION]**

**Constat.** Pas de fichier `LICENSE` → contenu « tous droits réservés » par défaut, incohérent avec un projet qui se revendique « OSINT » (ouvert).

**Solution.** Double régime recommandé pour un projet mixte : **code** (HTML/CSS) sous **MIT** ou Apache-2.0 ; **contenu et données** sous **CC BY 4.0**. Documenter le double régime dans le README.

---

# P1 — Sérieux OSINT (à traiter pour un niveau professionnel)

## P1.1 — Appliquer réellement la méthodologie revendiquée, ou la retirer *(Majeur)* — 🟡 **[J98 : Admiralty appliqué aux sources récentes ; migration héritée + ACH partielles]**

**Constat.** `CLAUDE.md` impose la cotation Admiralty A1–F6 « pour chaque source clé ». Or `sources.md` utilise un système maison (étoiles ⭐ + Type + Tier) qui **fusionne** les deux axes Admiralty pourtant déclarés indépendants (fiabilité de la source vs crédibilité de l'information). Les ~70 sources des tableaux « fenêtre Jxx » n'ont **aucune** cote. L'ACH (analyse des hypothèses concurrentes) n'est conduite formellement nulle part. Le « niveau de confiance » n'est jamais exprimé séparément de la « probabilité ». **La méthodologie est décorative : présente dans la doc, absente de l'exécution.**

**Solution.** Soit appliquer Admiralty pour de vrai (colonne `Cote` A1–F6 sur chaque source clé et au point d'usage des faits structurants), soit assumer officiellement le système étoiles+Tier et **retirer la revendication Admiralty/ACH/ICD 203** de `CLAUDE.md`. La cohérence doc↔pratique est elle-même un marqueur de sérieux.

## P1.2 — Réduire la dépendance à une thèse-pivot mono-sourcée *(Majeur)* — ✅ **[FAIT J98 : Exxon requalifiée [SPÉCULATION], non matérialisée]**

**Constat.** La thèse maîtresse de la quinzaine — « le marché papier ment, Dated Brent physique à 150-160 $ sous 2-3 semaines » — repose **entièrement sur une déclaration unique d'un SVP d'Exxon** (Neil Chapman, 28 mai), acteur à biais haussier structurel. Elle est présentée comme un fait établi (`index.md:190` « Le marché papier ment »), sert de caution (`scenario_pessimiste.md:148`), et fonde les recommandations d'achat aux ménages — le tout sans contre-source ni mention du conflit d'intérêt.

**Solution.** Recouper avec au moins une source indépendante et observable (backwardation réelle de la courbe, prime physique Platts/Argus) avant d'en faire un pivot ; à défaut, requalifier en `[SPÉCULATION — source unique, acteur intéressé, non recoupée]` et ne pas y adosser de recommandations.

## P1.3 — Étiqueter fait / interprétation / spéculation *(Majeur)* — ✅ **[FAIT J98 : généralisé synthèse + index + chrono + scénarios]**

**Constat.** `CLAUDE.md` l'exige explicitement ; l'étiquetage **n'apparaît dans aucun livrable**. Faits avérés, projections d'un seul acteur et inférences de l'analyste sont fondus dans la même prose assertive. La page `synthese_J89-J95.md` est la seule à esquisser la bonne pratique (« Traduction honnête : personne ne sait »).

**Solution.** Préfixer les énoncés structurants (`[FAIT]` / `[INTERPRÉTATION]` / `[SPÉCULATION]`). Généraliser le ton honnête de la synthèse aux scénarios et au calendrier.

## P1.4 — Corriger le biais de confirmation / la non-falsifiabilité du scénario central *(Majeur)* — ✅ **[FAIT J98 : falsifier explicite par scénario A/B/C]**

**Constat.** Le même événement (suspension iranienne du 1er juin, « back on track » de Trump) est lu comme confortant **les trois scénarios à la fois**. Le scénario B qualifie toute donnée — détente comme tension — de « signature de B » (`scenario_realiste.md:90,134`), ce qui le rend **non-falsifiable** : un cadre où aucune observation ne peut le contredire est l'opposé de la rigueur revendiquée. Des titres de section périmés s'empilent sans réécriture (« 60-68 % → 62-70 % » alors que J95 = 58-64 %).

**Solution.** Pour chaque révision de probabilité, produire une **mini-matrice ACH** (3-5 lignes) listant les preuves qui *réfutent* le scénario retenu. Définir un **indicateur de falsification** par scénario. Réécrire les strates datées au lieu de les empiler.

## P1.5 — Tracer la provenance au niveau du chiffre *(Majeur)* — 🟡 **[J98 : source+date+cote sur les chiffres canoniques ; pas encore au point d'affichage]**

**Constat.** La provenance existe **par bloc** (cartes/fiches portent un `.sources`, `sources.md` est dense) mais **jamais par valeur** : impossible de remonter de « Brent 96,89 $ le 3 juin » ou « France 38 % UGS » à une source précise et datée *au point d'affichage*. Aggravants : dates de consultation absentes partout ; le Brent/TTF reposent sur **TradingEconomics** (données CFD, que le fichier reconnaît lui-même comme non officielles) ; des URLs IEA/EIA censées étayer des chiffres clés renvoient **404** au test.

**Solution.** (1) Date de consultation + cote sur chaque source clé ; (2) archivage (Wayback/archive.today) des pages volatiles ; (3) règle des 2 sources indépendantes **matérialisée** pour chaque chiffre de tête (Brent : ICE officiel + Reuters, pas TradingEconomics seul) ; (4) au point d'affichage, exposant cliquable ou `title=` « source + date + cote ».

## P1.6 — Extraire les données dans des fichiers réutilisables *(Majeur)* — ⬜ **[À FAIRE : 0 fichier `data/` tracké]**

**Constat.** `git ls-files` ne contient **aucun** `.csv`/`.json`/`.geojson`. Tous les chiffres (prix, stocks, 54 sites Ormuz, ~160 entrées Europe, coordonnées) sont **codés en dur** dans le Markdown et dans des littéraux JS inline. Conséquences : données non réutilisables, non vérifiables programmatiquement, et la « règle de cohérence CRITIQUE » de `CLAUDE.md` doit être maintenue **à la main** sur 11 `.md` + 7 HTML. Risque de désynchronisation élevé (déjà observé, cf. P2.4).

**Solution.** Extraire les jeux de données dans `data/*.csv` et `data/sites.geojson` comme **source unique de vérité** ; faire consommer ces fichiers par les pages (boucle JS vanilla, reste 100 % hors-ligne) ; ajouter un petit script de validation de cohérence `.md`↔`data`↔HTML.

## P1.7 — Rendre les cartes utilisables hors-ligne *(Majeur → Critique pour un outil OSINT terrain)* — ⬜ **[À FAIRE : toujours unpkg + cartocdn]**

**Constat.** `carte_infrastructures.html` et `carte_infrastructures_europe.html` chargent Leaflet via `unpkg.com` **et** des tuiles via `basemaps.cartocdn.com`. Hors-ligne ou si le CDN change, les deux cartes sont **inutilisables** — un outil de veille de crise censé fonctionner en environnement dégradé perd 2 de ses 7 vues. `CLAUDE.md` le reconnaît déjà comme « exception à résorber ».

**Solution.** Héberger `leaflet.js`/`leaflet.css` + marqueurs en local (`app/vendor/leaflet/`) ; embarquer un jeu de tuiles statiques de la zone (export PNG des niveaux de zoom utiles, ou fond GeoJSON de côtes léger sans tuiles). Ajouter un `<noscript>` listant les sites en tableau (cf. P2.2).

---

# P2 — Polish (finition professionnelle)

## P2.1 — Ré-accentuer le texte français des dashboards *(Majeur visuellement)* — ✅ **[FAIT J98 : chrome + corps + données JS des cartes ré-accentués]**

**Constat.** 6 pages sur 7 ont un chrome **sans accents** : « Centre de pilotage — Crise du detroit d'Ormuz », « Dependances », « energie », « strategique », « petrole ». La barre de nav **mélange** accentué et non-accentué (« Synthèse imprimable » vs « Dependances UE »). L'encodage est UTF-8 : aucun obstacle technique. Pour un livrable français destiné à des décideurs, c'est le signal « amateur » le plus visible. `synthese_france.html`, lui, est parfaitement accentué — modèle à suivre.

**Solution.** Ré-accentuer tout le texte FR des 6 dashboards, titres `<title>` inclus.

## P2.2 — Accessibilité (WCAG) *(Majeur)* — ⬜ **[À FAIRE]**

**Constat.** (1) Texte blanc sur orange `#e67e22` ≈ 2.6:1 et blanc sur vert `#2ecc71` ≈ 1.9:1 — **sous le minimum AA 4.5:1** sur des pastilles de criticité (fonction, pas décor). (2) Information portée par la **seule couleur** sur barres et cellules de tableau (illisible en deutéranopie). (3) Cartes sans `aria`/clavier/`<noscript>` → page vide sans JS.

**Solution.** Texte foncé sur orange/vert/jaune, blanc réservé au rouge ; ajouter une cote textuelle/glyphe redondant à la couleur ; `<noscript>` + liste navigable au clavier pour les cartes.

## P2.3 — Échelles de barres comparables *(Majeur)* — ⬜ **[À FAIRE]**

**Constat.** Les largeurs de barres ne suivent pas d'échelle commune : « 85-90 j » → `width:88%` mais « 120-140 j » → `width:87%` (alors que 140 > 90). Des `%` réels (UGS) et des proxys visuels de jours/Mt cohabitent sur la même échelle 0-100 %. Une barre plus longue ne signifie pas une valeur plus grande → **trompeur** pour un produit qui se veut factuel. `synthese_france.html` fait déjà bien (repère réglementaire `.threshold` à 90 j/90 %).

**Solution.** Échelle explicite par métrique (max = capacité/cible, seuil réglementaire matérialisé), ou pas de barre quand l'échelle n'a pas de sens. Aligner sur le modèle `synthese_france.html`.

## P2.4 — Réconcilier les incohérences chiffrées résiduelles *(Mineur)* — ✅ **[FAIT J98]**

**Constat.** Strates périmées non nettoyées : SPR US « 374,2 mb » (`scenario_pessimiste.md:94`) vs 365,1 mb (valeur J95) dans le même fichier ; urée « +30 % » dans les fiches du calendrier vs « +80 % » en tête ; cumul de morts au Liban « 2 951+ » vs « 3 050+ » non réconcilié ; bornes hautes A+B+C = 111 % sans note méthodologique.

**Solution.** Passe de réconciliation ; supprimer ou dater explicitement les strates périmées ; note sur la non-additivité des fourchettes de probabilité.

## P2.5 — Meta de partage, favicon, polish HTML *(Mineur)* — ⬜ **[À FAIRE : 0 meta/OG/favicon]**

**Constat.** **0** `meta description`, **0** Open Graph, **0** `twitter:`, **0** favicon sur les 7 pages → partage sans aperçu, onglet sans icône. Par ailleurs : styles inline massifs (couleurs sémantiques répétées des centaines de fois), `topbar` dupliquée ×7, `synthese_france.html` charge Google Fonts **en ligne** (contredit la promesse « hors-ligne »), pas de `print-color-adjust: exact` à l'impression.

**Solution.** ~10 lignes/page de meta + OG + favicon (`og:image` = capture de `synthese_france.html`) ; classes utilitaires CSS au lieu d'inline ; vendoriser les polices ; `print-color-adjust:exact`.

## P2.6 — Hygiène de dépôt *(Mineur)* — 🟡 **[J98 : CHANGELOG tenu ; branche encore `dev`]**

**Constat.** `.gitignore` repo-local absent (`.DS_Store` n'est protégé que par le gitignore global de la machine — un contributeur le committerait) ; historique d'**un seul commit** « init project » corps vide ; branche courante `dev` ; pas de CHANGELOG alors que le projet est intrinsèquement temporel (synthèses datées).

**Solution.** Ajouter `.gitignore` (`.DS_Store`, `Thumbs.db`, `*.swp`, `.claude/`, `*~`) ; convention de commits descriptifs (Conventional Commits) ; publier depuis `main` ; `CHANGELOG.md` retraçant les consolidations datées.

## P2.7 — Portée internationale *(Mineur, décision à assumer)*

**Constat.** Nommage et contenu 100 % français — cohérent avec le focus « Impact France », mais exclut un lectorat international sur un sujet géopolitique global.

**Solution.** Décision documentée dans le README, ou README bilingue (section EN résumant projet + disclaimer).

---

# Feuille de route recommandée

> **Mise à jour de suivi — 6 juin 2026 (J98).** Cases réconciliées avec l'état réel du dépôt après le **Sprint P0** (release 2026.06.04) et la **consolidation J98**. Légende : ✅ fait · 🟡 partiel · ⬜ à faire. Cette section fait foi sur l'avancement.

**Sprint 1 — Débloquer la publication (P0)** — ✅ **bloc de publication levé**
- [x] ~~Décider de l'intention~~ → **tranché : suivi d'événements réels en cours**
- [x] ✅ Note de cadrage « as-of » — bandeau dans `README.md` + `index.md` et pied de page des 7 pages HTML (`.asof-note`). *MAJ J98 : date propagée partout au 6 juin 2026 (J98).*
- [~] 🟡 Corriger les sources mortes (404 IEA/EIA) + archiver — **marquage `⚠ à revérifier` fait** dans les 3 fichiers sources ; **archivage Wayback/archive.today encore à faire** (runbook P1).
- [x] ✅ README racine
- [x] ✅ LICENSE (MIT + CC BY 4.0) — + `REUSE.toml`, `NOTICE`, `LICENSES/`, `CITATION.cff`
- [x] ✅ `.gitignore` repo-local

**Sprint 2 — Crédibilité OSINT (P1)**
- [~] 🟡 Aligner doc↔pratique sur la méthodologie — **cotation Admiralty appliquée** dans `synthese_J95-J98.md` et les sources J96-J98 (≥ 21 cotes A1-F6 dans `sources.md`) ; **migration des ~70 sources « fenêtre Jxx » héritées + ACH formelle encore partielles**.
- [x] ✅ Recouper/requalifier la thèse-pivot Exxon — **fait (J98)** : requalifiée `[SPÉCULATION]` (source unique, acteur intéressé, **non matérialisée à J98**) ; recommandations ménages découplées.
- [x] ✅ Étiquetage fait/interprétation/spéculation — **généralisé (J98)** : `synthese_J95-J98.md`, `index.md`, `chronologie.md`, scénarios.
- [x] ✅ Mini-ACH + indicateur de falsification par scénario — **fait (J98)** : un falsifier explicite par scénario A/B/C.
- [ ] ⬜ Extraction des données en `data/*.csv` + `*.geojson` — **non commencé** (0 fichier de données tracké).
- [~] 🟡 Provenance source+date au niveau du chiffre — **chiffres canoniques J98 sourcés + datés + cotés** dans la synthèse ; **pas encore au point d'affichage** de chaque valeur des dashboards.
- [ ] ⬜ Cartes hors-ligne (vendoriser Leaflet + tuiles) — **non fait** (toujours `unpkg` + `cartocdn`).

**Sprint 3 — Polish (P2)**
- [x] ✅ Ré-accentuation des 6 dashboards — **fait (J98)** : `<title>`, nav, sous-titres, corps et chaînes de texte français des cartes Leaflet (popups/labels) ré-accentués ; ~1280 accents ajoutés, validés par invariant « dé-accentuation avant = après » (seules les marques diacritiques ont changé, aucune structure/attribut/nom de fichier).
- [ ] ⬜ Accessibilité WCAG (contrastes, couleur+texte, `<noscript>`)
- [ ] ⬜ Échelles de barres comparables
- [x] ✅ Réconciliation des chiffres périmés — **fait (J98)** : SPR 357,1 mb, gaz UE ~41,5 %, Qatar mi-août, « 2 FINUL + 1 Chammal/Irak », compteurs chronologie 169/18/6.
- [ ] ⬜ Meta/OG/favicon, vendorisation polices — **non fait** (0 `meta description` / OG / favicon sur les 7 pages).
- [~] 🟡 Hygiène git (commits, branche, CHANGELOG) — **`CHANGELOG.md` tenu** (entrées 2026.06.04 + J98) ; **branche encore `dev`** (publier depuis `main`), convention de commits à confirmer.

---

# Ce qui est déjà bien (à préserver)

- Granularité sectorielle exceptionnelle (4 carburants FR, filière AdBlue/urée, stocks par agence nationale).
- Traitement énergie techniquement solide (futures vs Dated Brent, crack spread bien attribué).
- Sources structurelles réelles et canoniques avec codes datasets exploitables (Eurostat, AGSI+, JODI, API prix-carburants).
- Transparence affichée sur les marges d'incertitude (±10-15 %) et recalibrage méthodologique daté (éviction Pravda/Press TV).
- Design system cohérent en tokens CSS ; `synthese_france.html` de niveau éditorial presse ; attribution de sources au niveau composant.
- Aucun secret ni fichier parasite tracké ; app sans framework (hors cartes) ; SRI présent sur les CDN Leaflet.

---

*Audit réalisé par analyse croisée de 4 revues indépendantes. Aucun fichier de contenu n'a été modifié ; ce rapport est le seul livrable ajouté.*
