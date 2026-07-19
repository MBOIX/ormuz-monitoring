# Procédure de mise à jour périodique — routeur & noyau commun

Point d'entrée des MAJ du suivi Ormuz. Ce fichier (1) **route** vers le bon playbook selon la fenêtre à rattraper, et (2) porte le **noyau commun** — invariants, mécanique et garde-fous partagés par les deux playbooks. Les playbooks ne décrivent QUE leurs spécificités et référencent ce noyau : **un seul endroit à éditer** pour toute règle commune (même logique que la source unique `ASOF`/`nav.js` de l'app).

## 1. Router — quel playbook ?

| Fenêtre depuis la dernière synthèse | Playbook | Fichier |
|---|---|---|
| **≤ 3 jours** (cadence normale) | COURT | [`PROCEDURE_MAJ_COURTE.md`](PROCEDURE_MAJ_COURTE.md) |
| **> 3 jours** (reprise après lapse, grosse consolidation) | LONG | [`PROCEDURE_MAJ_LONGUE.md`](PROCEDURE_MAJ_LONGUE.md) |

**Override par densité d'événements** : une fenêtre courte (2-3 j) portant ≥ 2 fils majeurs simultanés (p. ex. rupture de prix + escalade militaire + nouveau front) bascule sur le playbook LONG. Le nombre d'événements structurants peut surclasser le nombre de jours.

> **Règle d'or** : les **jours** fixent la **LARGEUR** du fan-out ; le **TYPE de claim** fixe la **PROFONDEUR** de vérification (cf. §2.4). Une fenêtre d'un seul jour peut contenir le fait le plus lourd de la crise — la profondeur ne se brade jamais sur un claim à enjeu.

## 2. Noyau commun (les deux playbooks l'appliquent)

### 2.1 Comment lancer
1. Session fraîche dans le dépôt ; orchestrateur en **`/model fable`**.
2. Coller le prompt du playbook choisi (il commence par « applique le noyau commun de ce fichier »).
3. Relire le **mini-rapport de diff** final avant validation.
4. Le commit reste à la main de l'utilisateur (le prompt ne commit pas — il propose un message).

### 2.2 Étape 0 — Cadrage (orchestrateur, inline, AVANT toute orchestration)
Lire la synthèse périodique la plus récente (`docs/synthese_J*-J*.md`, fait foi). Extraire J-day + date, prix de référence (Brent futures, Dated Brent, gazole/SP95), flux Ormuz, statuts d'infra, pertes cumulées, probabilités A/B/C. **Traiter ces valeurs comme des baselines À RÉVISER, pas à ancrer.** Déduire la fenêtre et la work-list.

### 2.3 Objectivité & cotation (cf. `CLAUDE.md` — ne pas redupliquer ici)
Séparer fait / interprétation / spéculation. Cotation Admiralty/STANAG 2511. Calibrage ICD 203 (terme verbal + fourchette). ≥ 2 sources indépendantes pour tout fait militaire ou chiffre économique. Distinguer Brent futures (papier) et Dated Brent (spot physique). Pièges connus : fausses réouvertures = cote basse par défaut ; déclarations Trump à recouper avec les actions CENTCOM ; chiffres iraniens = borne basse ; recyclages d'incidents anciens à débusquer.

### 2.4 Profondeur de vérification (règle transverse)
Vérification adversariale `fable`-high **obligatoire** sur tout claim qui est : (a) une perte humaine / franchissement de seuil létal, (b) une revendication de belligérant, ou (c) en **contradiction avec la baseline** en vigueur. Le reste (clôtures de marché, releases officielles EIA/OPEP+, barèmes) = CONFIRMÉ sur pièce, vérif légère (`sonnet`/`opus` low). La profondeur suit l'enjeu, jamais la fenêtre.

### 2.5 Étagement modèles / effort
| Tâche | Modèle | Effort |
|---|---|---|
| Lectures de dépôt, extractions mono-source | `haiku` | low |
| Balayage web multi-sources, lecture longue | `sonnet` | medium |
| Classification, recoupement simple, dédup | `opus` | low-medium |
| Vérif critique (claims §2.4), recalibrage ACH, rédaction/édition à cohérence | `fable` | high |

### 2.6 Manifeste de propagation (mécanique clé)
La phase d'analyse produit un **manifeste** : un tableau `fichier → (ancienne valeur → nouvelle valeur)` couvrant tous les points chiffrés/statuts modifiés + la **table de deltas de baseline**. La propagation s'exécute ensuite en **Edits déterministes inline par l'orchestrateur** — **jamais** par des agents LLM.

> *Retour d'expérience J142* : déléguer la propagation à des agents `fable`/`sonnet` s'est révélé coûteux, faillible aux coupures de session (édition partielle → incohérence) et refait à la main de toute façon. Un agent n'est mobilisé pour éditer un fichier que si la propagation exige un **jugement rédactionnel** (réécriture de prose), pas une substitution de valeur.

### 2.7 Cohérence & livrables
- Règle de cohérence `.md ↔ dashboards` : tout chiffre/statut modifié dans un `.md` l'est dans le dashboard correspondant. Point de MAJ unique du J-day/date : constante `ASOF` de `app/nav.js`. Restent page par page : `<title>` + `<p class="subtitle">`. Pour `app/chronologie.html`, ajouter les événements dans la const `CHRONO` (segment `history`) et **revalider le JSON** (`jq length`).
- Livrables : nouvelle `synthese_J*-J*.md` (fait foi) · `scenario_{optimiste,realiste,pessimiste}.md` · `pertes_humaines_materielles.md` (+ `app/pertes.html`) · `chronologie.md` (+ `app/chronologie.html`) · `calendrier_penuries.md` (si trajectoire modale bouge) · `index.md` (+ `app/index.html`) · `sources.md` · `prospective_remise_en_route.md` (probas) · `CLAUDE.md` (arborescence) · `CHANGELOG.md`.
- Ne jamais hardcoder de valeur datée dans `CLAUDE.md`.

### 2.8 Économie de tokens & résilience
- **Persister-puis-interroger** : toute sortie d'agent volumineuse → fichier, puis `jq`/`duckdb` ; **jamais** versée en contexte.
- **Séquencer** : phases lourdes-analytiques (recherche, vérif, ACH, rédaction de la synthèse) D'ABORD ; propagation mécanique (Edits depuis le manifeste) EN DERNIER. Ainsi une coupure de session laisse l'analyse acquise et ne laisse en attente que des Edits triviaux à reprendre.
- **Schémas d'agents serrés** : findings plafonnés, champs courts ; la vérif renvoie `verdict + cote + delta`, pas la reformulation du claim.

### 2.9 Garde-fous de sortie
Ne pas commit (proposer un message au format « MAJ J<b> (<date>) : … »). Terminer par un **mini-rapport de diff** : mouvements A/B/C + justification en une ligne chacun, 3-5 indicateurs à surveiller, contradictions/vides documentaires restants.

---

*Historique : v1 (procédure unique exhaustive) refondue en v2 après le run J142 — routeur + noyau + 2 playbooks dimensionnés. Voir `CHANGELOG.md`.*
