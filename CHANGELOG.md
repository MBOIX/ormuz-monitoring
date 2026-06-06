# Journal des modifications

Ce projet est un **suivi de situation évolutif** : ce journal trace les consolidations datées et les évolutions structurelles du dépôt. Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/). Les dates sont au format AAAA-MM-JJ (heure de Paris).

## [Non publié]

## [2026.06.04] - 2026-06-04

### Ajouté (mise en conformité publication — Sprint P0)
- `README.md` racine : présentation, bandeau de cadrage « as-of », méthodologie, licence, citation.
- Licence multi-volet (spécification REUSE) : `LICENSE` (MIT), `LICENSES/MIT.txt`, `LICENSES/CC-BY-4.0.txt`, `REUSE.toml`, `NOTICE`.
- `CITATION.cff` (bouton « Cite this repository » de GitHub).
- `.gitignore` repo-local (`.DS_Store`, éditeurs, `.claude/`…).
- `AUDIT.md` et `PLAN_P0.md` : audit de publication et plan d'action.
- Bandeau de cadrage « instantané daté / situation évolutive » en tête d'`index.md` et en pied des 7 pages de `app/`.
- `sources.md` : convention de référence cible (URL live + archive + date de consultation + cote).

### Modifié
- `app/styles_common.css` : ajout de la classe `.asof-note` (pied de page de cadrage, masquée à l'impression).

### Signalé
- 3 sources structurantes à URL rompue (404 au 2026-06-04) marquées `⚠ source à revérifier` dans `sources.md`, `sources_infrastructures.md` et `sources_infrastructures_europe.md` : Dated Brent 150-160 $/b (Exxon), force majeure QatarEnergy ~17 %, OPEP+ +188k b/j / sortie EAU. À recouper sur ≥ 2 sources Tier 1.

## [J95] — 2026-06-03

### Consolidation périodique
- État de situation au jour 95 du conflit (voir [`synthese_J89-J95.md`](docs/synthese_J89-J95.md), qui fait foi sur l'état courant).
- Faits saillants : suspension iranienne des pourparlers (1er juin), alerte Exxon sur le Dated Brent physique, sortie des EAU de l'OPEP, force majeure QatarEnergy à Ras Laffan, inflation FR +2,4 % (INSEE, mai).
- Probabilités des scénarios : A 12-18 % · B 58-66 % (central) · C 22-30 %.

---

> Les consolidations antérieures (J1 → J89) sont décrites dans les fichiers analytiques et n'ont pas été rétro-portées dans ce journal, créé le 2026-06-04.
