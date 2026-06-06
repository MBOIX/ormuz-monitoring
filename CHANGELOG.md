# Journal des modifications

Ce projet est un **suivi de situation évolutif** : ce journal trace les consolidations datées et les évolutions structurelles du dépôt. Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/). Les dates sont au format AAAA-MM-JJ (heure de Paris).

## [Non publié]

## [J98] — 2026-06-06

### Consolidation périodique
- **Nouvelle synthèse qui fait foi** : [`synthese_J95-J98.md`](docs/synthese_J95-J98.md) (fenêtre 3 → 6 juin 2026). Méthode : 7 axes OSINT parallèles, recoupement ≥ 2 sources indépendantes, vérification adversariale des claims structurants (cotation Admiralty), étiquetage fait/interprétation/spéculation.
- **Escalade militaire confirmée (2-6 juin)** : frappe US au Hellfire sur le pétrolier *M/T Lexie* (2 juin, 6e navire neutralisé) ; salves iraniennes vers Koweït/Bahreïn (frappe du terminal T1 de l'aéroport de Koweït : 1 mort, ~63 blessés) ; cycle drones/missiles vs ripostes US sur radars côtiers (Goruk, Qeshm) les 5-6 juin. **Revendication iranienne d'avoir frappé le QG de la Ve Flotte US : démentie par le CENTCOM, non confirmée — traitée comme spéculation.**
- **Marchés** : Brent futures en repli (~97,8 $ le 3 juin → ~93,1 $ le 5 juin) malgré l'escalade ; thèse Exxon (Dated Brent 150-160 $) **non matérialisée** à J98 ; couvercle chinois maintenu (imports −44 % en mai).
- **Diplomatie** : négociations toujours suspendues (« aucun progrès tangible », Araghchi, 3 juin) ; cessez-le-feu Liban du 3 juin **rejeté dès le 4 juin** par le Hezbollah ; plan de déminage UK-France finalisé (conditionné à un accord inexistant).
- **Probabilités révisées** : A 8-15 % (⬇️) · B 60-66 % (⬆️, central) · C 22-30 % (➡️) — avec indicateur de falsification par scénario (P1.4).

### Corrigé (réconciliation de baselines périmées, AUDIT P2.4)
- SPR US : **357,1 mb** (29 mai) au lieu de 365,1 mb (valeur du 22 mai).
- Stockage gaz UE : **~41,5 %** (5-6 juin) au lieu de 38 % (donnée du 23 mai).
- Force majeure QatarEnergy (Ras Laffan) : échéance **mi-août** au lieu de mi-juin.
- Pertes militaires françaises : **2 FINUL/Liban (Montorio, Girardin) + 1 Chammal/Irak (Frion)** au lieu de « 3 soldats FINUL ».
- 7e Casque bleu ONU tué (4 juin, sergent serbe) — la mention « aucun depuis le 22 avril » devient caduque.

### Signalé (données absentes assumées)
- Dated Brent physique 3-6 juin, débit Ormuz quotidien J98, croissance BdF 2026 révisée (~mi-juin), inflation FR juin (30 juin), ventilation gaz par pays : non disponibles en source ouverte — non comblés par estimation.

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
