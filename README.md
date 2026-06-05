# Ormuz Monitoring — Suivi OSINT de la crise du détroit d'Ormuz

> **Analyse en sources ouvertes (OSINT) de la crise du détroit d'Ormuz et de son impact sur la France** : situation militaire et diplomatique, marchés de l'énergie, ressources critiques, infrastructures, et traduction concrète pour les ménages français.

![statut](https://img.shields.io/badge/statut-veille_active-brightgreen)
![consolidation](https://img.shields.io/badge/consolidation-3_juin_2026_(J95)-orange)
![type](https://img.shields.io/badge/type-OSINT_%2F_veille-informational)
![langue](https://img.shields.io/badge/langue-français-blue)
![code](https://img.shields.io/badge/code-MIT-green)
![contenu](https://img.shields.io/badge/contenu_%26_données-CC_BY_4.0-green)

---

> ### Comment lire ce dossier — instantané daté, situation évolutive
>
> **Dernière consolidation : 3 juin 2026 (J95)** · arrêt des données *(data cutoff)* : 3 juin 2026, heure de Paris.
>
> Ce dépôt suit une **crise réelle et en cours**. Chaque chiffre (prix, stocks, flux maritimes) **périme vite** : au-delà de ~48-72 h, considérez les données comme à revérifier. La **synthèse périodique la plus récente** (`synthese_*.md`) fait foi sur l'état courant.
>
> Produit d'**analyse OSINT à partir de sources ouvertes**, à vocation **informative et pédagogique**. Ce n'est **ni un conseil financier, ni une source de sécurité opérationnelle**. Les événements décrits sont récents : les sources sont citées pour permettre la **vérification indépendante** (voir [Méthodologie](#méthodologie) et [Sources](#sources--fiabilité)).

---

## Sommaire

- [À propos](#à-propos)
- [État de situation](#état-de-situation)
- [Structure du dépôt](#structure-du-dépôt)
- [Application web (dashboards)](#application-web-dashboards)
- [Consulter le projet](#consulter-le-projet)
- [Méthodologie](#méthodologie)
- [Sources & fiabilité](#sources--fiabilité)
- [Avertissements & limites](#avertissements--limites)
- [Licence](#licence)
- [Citation](#citation)
- [Contact](#contact)

## À propos

La crise du détroit d'Ormuz a été déclenchée le **28 février 2026** par des frappes américano-israéliennes sur l'Iran, suivies de la fermeture de fait du détroit par lequel transite environ **un cinquième du pétrole mondial**. Ce dépôt en assure un suivi structuré, réunissant trois angles :

1. **OSINT** — collecte, recoupement et cotation de sources ouvertes (médias internationaux, données maritimes, imagerie, communiqués officiels).
2. **Économie & marchés** — prix du pétrole (Brent *futures* vs Dated Brent *spot*, WTI, *spreads*), gaz (TTF), ressources critiques, prévisions macro.
3. **Impact social France** — traduction en conséquences concrètes : prix à la pompe, budget des ménages, risque de pénurie, tension sociale.

**Périmètre** : zone Ormuz/Golfe + front libanais lié ; transmission jusqu'à la France et l'UE.
**Public visé** : analystes, journalistes, décideurs, citoyens cherchant un état des lieux sourcé.
**Ce que ce projet n'est pas** : un fil d'actualité temps réel, un conseil d'investissement, ou une source destinée à la décision opérationnelle de sécurité.

Le raisonnement suit des **principes d'objectivité** stricts : factualité, séparation fait / interprétation / spéculation, et révision des conclusions quand les preuves changent.

## État de situation

L'état courant n'est **pas** recopié ici (pour éviter toute désynchronisation des chiffres). Il fait foi dans :

➡️ **[`synthese_J89-J95.md`](synthese_J89-J95.md)** — synthèse périodique la plus récente.

Les vues d'ensemble et les trois scénarios prospectifs sont dans [`index.md`](index.md).

## Structure du dépôt

```
├── index.md                          # Vue d'ensemble + synthèse des 3 scénarios
├── scenario_optimiste.md             # Scénario A — Accord durable
├── scenario_realiste.md              # Scénario B — Enlisement (central)
├── scenario_pessimiste.md            # Scénario C — Escalade
├── calendrier_penuries.md            # Échéancier prévisionnel des tensions par produit
├── infrastructures_europe.md         # Raffineries, dépôts, ports, UGS, GNL, pipelines (Europe)
├── synthese_J89-J95.md               # Dernière synthèse périodique (fait foi)
├── sources.md                        # Sources OSINT zone du conflit (cotées)
├── sources_infrastructures.md        # Sources infrastructures zone Ormuz
├── sources_infrastructures_europe.md # Sources infrastructures Europe
├── AUDIT.md                          # Audit de préparation à la publication
├── PLAN_P0.md                        # Plan d'action de mise en conformité
└── app/                              # Application web — dashboards HTML statiques
    ├── index.html                        # Centre de pilotage (entrée)
    ├── carte_infrastructures.html        # Carte zone Ormuz
    ├── carte_infrastructures_europe.html # Carte Europe
    ├── dependances_ormuz_pays.html       # Dépendance des imports UE via Ormuz, par pays
    ├── dependances_ressources_critiques.html # Ressources critiques non-énergétiques
    ├── stocks_pays_ue.html               # Stocks pétroliers stratégiques + UGS gaz par pays UE
    ├── synthese_france.html              # Synthèse France imprimable (A4)
    └── styles_common.css                 # Feuille de style partagée (thème sombre)
```

> Convention : les synthèses périodiques sont nommées `synthese_J<début>-J<fin>.md` ; la plus récente reflète l'état courant.

## Application web (dashboards)

Le dossier `app/` est une **application web statique** (HTML + CSS, sans framework JS ni dépendance réseau pour la plupart des pages). Elle matérialise les données des fichiers analytiques sous forme de tableaux de bord (thème sombre, codage couleur vert/jaune/orange/rouge).

> **Exception réseau connue** : `carte_infrastructures.html` et `carte_infrastructures_europe.html` chargent la bibliothèque Leaflet et leurs fonds de carte depuis un CDN — ces deux pages nécessitent une connexion. Les autres pages fonctionnent **hors-ligne**. (Résorption prévue : voir `AUDIT.md`, point P1.7.)

## Consulter le projet

**Documents analytiques** : ouvrez les fichiers `.md` directement (rendu Markdown sur GitHub ou dans un éditeur).

**Application web** : depuis la racine du dépôt,

```bash
cd app
python3 -m http.server 8000
# puis ouvrez http://localhost:8000 dans un navigateur
```

Les pages hors-ligne s'ouvrent aussi par simple double-clic ; un serveur local est recommandé pour les cartes.

## Méthodologie

L'analyse applique des cadres d'évaluation standardisés :

- **Cotation des sources** — système Admiralty / OTAN STANAG 2511 : fiabilité de la source (A–F) × crédibilité de l'information (1–6), les deux axes étant indépendants.
- **Recoupement** — ≥ 2 sources indépendantes exigées pour tout fait militaire ou chiffre économique structurant (une reprise de dépêche ne compte pas comme une seconde source).
- **Calibrage probabiliste** — type ICD 203 : à chaque terme verbal (« probable », « improbable »…) correspond une fourchette chiffrée ; le **niveau de probabilité** est distingué du **niveau de confiance** (qualité/convergence des sources).
- **Analyse des hypothèses concurrentes (ACH)** — pour tout jugement structurant, les hypothèses sont confrontées en cherchant les preuves qui **réfutent**, pas seulement celles qui confirment.
- **Distinction fait / interprétation / spéculation** — étiquetée explicitement ; les données manquantes ou contradictoires sont assumées plutôt que comblées.
- **Règle clé du domaine** — séparer systématiquement le **Brent *futures*** (marché papier) du **Dated Brent *spot*** (physique) : l'écart est l'indicateur de la pénurie réelle.

> Note de transparence : ces cadres sont la cible méthodologique du projet. Leur degré d'application au fil des fichiers est lui-même audité dans [`AUDIT.md`](AUDIT.md) (le dépôt documente ses propres écarts).

## Sources & fiabilité

Toutes les sources sont recensées et cotées dans :

- [`sources.md`](sources.md) — zone du conflit (militaire, politique, marchés).
- [`sources_infrastructures.md`](sources_infrastructures.md) — infrastructures zone Ormuz.
- [`sources_infrastructures_europe.md`](sources_infrastructures_europe.md) — infrastructures Europe.

Données structurelles principales : IEA, EIA, Eurostat, AGSI+/GIE, JODI, prix-carburants.gouv.fr.

## Avertissements & limites

- **Fraîcheur** — suivi d'une situation évolutive ; toute donnée non revérifiée au-delà de 48-72 h est potentiellement périmée. Voir le bandeau en tête.
- **Sources** — données issues exclusivement de **sources ouvertes**, citées pour permettre la vérification indépendante. Certains liens vers des articles récents peuvent être rompus ou déplacés ; un travail d'archivage (Wayback / archive.today) est en cours (voir `AUDIT.md` P0.1 et P1.5).
- **Incertitude** — les bilans humains de source unique (ex. gouvernement iranien) sont signalés comme **bornes basses**. Les estimations sont annoncées comme telles.
- **Usage** — ne constitue ni un conseil d'investissement, ni une source pour la décision opérationnelle de sécurité.
- **Évolutivité** — les conclusions sont révisées quand les preuves changent ; aucune fidélité à une position antérieure.

## Licence

Dépôt **multi-licence** (conforme à la spécification [REUSE](https://reuse.software/)) :

| Contenu | Licence |
|---|---|
| Code (`app/` — HTML, CSS, JS) | [MIT](LICENSES/MIT.txt) |
| Contenu éditorial (`*.md`) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| Données (CSV / JSON / GeoJSON) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |

**Attribution requise** pour le contenu éditorial et les données :

> Source : Mickaël Boixiere — *Ormuz Monitoring* (2026) — CC BY 4.0

**Données tierces** : la licence CC BY 4.0 couvre la **compilation, la sélection et les analyses originales** de ce dépôt (ainsi que le droit *sui generis* sur la base de données, UE). Les **chiffres factuels bruts** ne sont pas protégés par le droit d'auteur ; les droits sur les **données sources** (IEA, Eurostat, Reuters…) restent ceux de leurs détenteurs. Avant toute réutilisation massive, vérifiez les conditions de la source primaire. Détails dans [`NOTICE`](NOTICE).

## Citation

Un fichier [`CITATION.cff`](CITATION.cff) est fourni (bouton **« Cite this repository »** sur GitHub). Citation suggérée :

> Boixiere, M. (2026). *Ormuz Monitoring — Suivi de la crise du détroit d'Ormuz (impact France)* (version J95). https://github.com/mickael-boixiere/ormuz-monitoring

## Contact

Mainteneur : **Mickaël Boixiere** — boixiere.mickael@gmail.com

Les corrections de sources, signalements de liens rompus et apports de recoupement sont bienvenus (issues / pull requests).
