# Plan d'update — Optimisation affichage mobile (`app/`)

**Date** : 13 juillet 2026 (J136)
**Objectif** : corriger les défauts d'affichage mobile de l'application web, sans refonte ni nouveau pattern JS, en priorisant le levier commun aux 9 pages.
**Base** : audit multi-agents des 11 fichiers de `app/` (9 pages + `styles_common.css` + `nav.js`), testés sur les largeurs 320-768px.

---

## 1. Diagnostic transversal

L'app est globalement responsive-ready (viewport meta partout, tableaux en `overflow-x: auto`, grilles auto-fill) mais souffre d'un **unique défaut racine** : le bloc `@media (max-width: 700px)` de `styles_common.css` — chargé par les 9 pages — ne surcharge que `.page` et `.topbar`. Tout le reste (`.cards` en `minmax(280px, …)`, `.metric-row` à colonnes fixes 110/50px, `.summary-grid` à 180px, `.country-header` sans wrap, cibles tactiles nav) hérite du desktop et se comprime ou déborde entre 320 et 430px.

C'est le point de levier n°1 : enrichir ce bloc + ajouter un palier `<430px` corrige l'essentiel sur toutes les pages d'un coup (règle de cohérence CLAUDE.md — une correction dans `styles_common.css` = 9 pages corrigées).

Les défauts spécifiques restants sont marginaux : loader de carte décentré (les cartes s'empilent déjà correctement au ≤700px, contrairement à ce qu'affirment certains audits), frise agricole qui s'écrase, barre de filtres de la chronologie un peu dense.

Les audits sources sur-diagnostiquent par ailleurs plusieurs points : menu hamburger (classé P0/bloquant à tort), transformation des tableaux en cartes, breakpoint tablette dédié — trois refontes jugées non justifiées (cf. §4). Le flex-wrap de la nav est fonctionnel, aucun lien n'est inaccessible, et la chronologie recalcule déjà ses hauteurs sticky en JS.

---

## 2. Plan d'action

### P0

| Titre | Fichiers | Description | Effort |
|---|---|---|---|
| Enrichir le bloc mobile partagé de `styles_common.css` (levier central) | `app/styles_common.css` | Dans le `@media (max-width: 700px)` existant (l.320-324), ajouter les surcharges manquantes qui héritent aujourd'hui du desktop : `.cards { grid-template-columns: 1fr; }` ; `.metric-row { grid-template-columns: 90px 1fr 40px; gap: 6px 8px; }` (garde la barre visible tout en libérant ~40px) ; `.summary-grid { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); }` ; `.country-card .country-header { flex-wrap: wrap; gap: 4px 8px; }` ; remplacer la règle tap-target `.topbar a { padding: 3px 7px }` par `.topbar a { padding: 6px 10px; }` (hauteur cible ~30px). Réutiliser les variables/couleurs existantes, ne rien renommer. | S |

**Justification** : résout en un point l'essentiel des issues « majeur » de `index.html`, `dependances_ormuz_pays`, `dependances_ressources_critiques`, `stocks_pays_ue`, `pertes`, `impacts_agricoles` et de `styles_common.css` elle-même : cards serrées/débordantes sur 320-360px, `metric-row` à colonnes fixes 110/50px qui écrase la barre, `summary-grid` à 180px trop large `<400px`, `country-header` sans wrap, cibles tactiles nav sous le seuil.

### P1

| Titre | Fichiers | Description | Effort |
|---|---|---|---|
| Ajouter un palier ultra-mobile (`max-width: 430px`) | `app/styles_common.css` | Nouveau bloc `@media (max-width: 430px)` après le bloc 700px : `.page h1 { font-size: 19px; }` ; `.summary-grid { grid-template-columns: 1fr; }` ; réduction de densité des tableaux `table { font-size: 11.5px; } table th, table td { padding: 6px 7px; }` ; relever les plus petites polices sous le seuil de confort `.country-card .country-risk, table .pill, .summary-stat .l { font-size: 11.5px; }`. Aucun nouveau pattern, uniquement des surcharges. | XS |
| Filet de sécurité images global | `app/styles_common.css` | Après le reset `* { box-sizing }` (l.20), ajouter `img { max-width: 100%; height: auto; }`. Volontairement **ne pas** inclure `svg` dans la règle, pour éviter toute régression sur les overlays/markers Leaflet des 2 cartes. | XS |
| Recentrer le loader et rééquilibrer carte/sidebar sur les 2 cartes | `app/carte_infrastructures.html`, `app/carte_infrastructures_europe.html` | Dans le `@media (max-width: 700px)` déjà présent de chaque carte (l.238-242 et l.249-253), ajouter `#loader { left: 50%; }` (annule l'offset desktop `calc(50% + 170px/180px)` qui décentre le loader hors-écran) et donner un peu plus de place à la carte : passer `grid-template-rows: 50vh 50vh` à `grid-template-rows: 45vh 55vh` avec `#map { height: 55vh; }`. Ne pas toucher au chargement Leaflet CDN ni aux tuiles (exception connue CLAUDE.md). | S |

**Justification** :
- Palier `<430px` : couvre le trou 360-430px signalé par presque tous les audits (breakpoint unique 700px jugé trop large). Traite les issues de lisibilité (10.5px sur badges/labels sous le seuil de confort) et `summary-grid` 2 colonnes trop étroites `<400px`, sans refonte ni breakpoint tablette superflu.
- Filet images : répond aux issues « absence de `img { max-width:100% }` » de `pertes.html` et `styles_common.css`. Préventif (pas d'image dans le contenu actuel) mais protège les futurs ajouts d'un scroll horizontal ; exclure `svg` lève le doute soulevé par les audits eux-mêmes (« vérifier Leaflet »).
- Cartes : corrige le seul vrai défaut mobile — loader décentré (issue « majeur » des 2 audits). **Scepticisme** : l'issue « bloquant, sidebar 340/360px écrase la carte sur mobile » est fausse — le grid passe déjà en 1 colonne empilée au ≤700px (vérifié l.238/249). Reste un simple rééquilibrage de hauteur, pas un correctif bloquant.

### P2

| Titre | Fichiers | Description | Effort |
|---|---|---|---|
| Assouplir la barre de filtres de la chronologie sur mobile | `app/chronologie.html` | Dans le `@media (max-width: 700px)` existant (l.289+), ajouter `.searchbox { min-width: 0; flex: 1 1 140px; max-width: none; }` pour que la recherche partage la ligne au lieu de forcer une largeur fixe, et `.chip { padding: 3px 8px; font-size: 11px; }` pour comprimer légèrement les 5 catégories + 2 boutons importance. Rien d'autre : le sticky des phases est déjà géré par le recalcul JS de `--topbar-h`/`--filters-h`. | XS |
| Empiler la frise agricole sur très petit écran | `app/impacts_agricoles.html` | Ajouter dans un `@media (max-width: 500px)` (le fichier a déjà un `<style>` local) : `.frise { flex-direction: column; }` et `.frise .seg { border-right: none; border-bottom: 1px solid var(--border); }` pour que les 5 segments (5 ans) s'empilent verticalement au lieu de s'écraser à ~60px. Conserver la sémantique couleur vert/jaune/orange/rouge existante. | XS |

**Justification** :
- Chronologie : traite le confort de la barre de filtres (chips sur 3-4 lignes). **Scepticisme** : les issues « bloquant, searchbox scroll horizontal » et « `filters-h` ne se recalcule pas » sont surévaluées — `min-width` 190px < 332px disponibles (au pire wrap, jamais de scroll body) et `--filters-h` **est** calculé en JS au chargement (l.675). On se limite donc à un allègement cosmétique.
- Frise agricole : résout l'issue « frise 5 segments s'écrase, texte `.yr`/`.st` minuscule », propre à `impacts_agricoles`. Le tableau 6 colonnes de la même page reste en `overflow-x: auto` (déjà présent) — pas de transformation en cartes (hors périmètre).

---

## 3. Hors périmètre

| Point | Justification du rejet |
|---|---|
| Menu hamburger | Nécessiterait du JS et un nouveau pattern dans `nav.js` (source unique partagée). Le flex-wrap actuel est fonctionnel — aucun lien inaccessible — on se contente d'agrandir les cibles tactiles à ~30px. Les audits qui le classent P0/bloquant sur-évaluent le problème. |
| Transformation des tableaux en cartes empilées (« stacked ») | Refonte lourde + pattern nouveau à maintenir sur plusieurs pages. Le `overflow-x: auto` dans `.tablewrap` est déjà présent et suffit ; on réduit juste police/padding sous 430px. |
| Masquage conditionnel de colonnes de tableau sur mobile | Perte d'information et logique CSS/JS fragile, contraire au principe factuel/exhaustif du projet. |
| Règle globale `svg { max-width: 100% }` | Risque de régression sur les overlays et markers SVG de Leaflet (2 cartes). On se limite à `img`. |
| Breakpoint tablette dédié (768px) | Le contenu reste lisible en layout desktop compact entre 700 et 768px ; ajouter un palier = surface de maintenance sans gain net. Réclamé par les audits mais purement cosmétique. |
| Recalcul de `--filters-h` au resize/rotation dans `chronologie.html` | Déjà calculé au chargement (l.675) ; la désynchronisation ne survient qu'à la rotation d'écran, cas marginal ne justifiant pas de JS supplémentaire. |
| Passage général des polices à 16px (recommandation iOS citée par les audits) | Casserait la densité informationnelle voulue du thème. On relève seulement les libellés les plus petits (10.5px) à 11.5px. |

---

## 4. Critères de validation

- Sur 360px, 390px et 768px de large : aucune barre de scroll horizontale sur le `<body>` pour les 9 pages (index, chronologie, pertes, dependances_ormuz_pays, dependances_ressources_critiques, impacts_agricoles, stocks_pays_ue, 2 cartes). Tester au DevTools responsive.
- À `<430px`, `.cards` s'affiche en 1 seule colonne et les barres de `.metric-row` restent visibles/lisibles (largeur barre > ~60px), labels non tronqués.
- Cibles tactiles de la nav : hauteur effective ≥ ~30px sur mobile (padding 6px 10px), pas de chevauchement des liens wrappés.
- Tableaux : le scroll horizontal reste contenu dans le `.tablewrap` (le doigt scrolle la table, pas la page) ; police ≥ 11.5px et cellules lisibles à 360px.
- Cartes : à 360px le loader « Chargement… » est centré horizontalement dans le viewport ; la carte occupe ~55vh et reste manipulable ; Leaflet charge toujours (connexion requise, comportement inchangé).
- Chronologie à 360px : la barre de filtres tient sur 2-3 lignes maximum sans déborder, la recherche partage sa ligne ; le sticky des en-têtes de phase ne laisse ni gap blanc ni chevauchement au scroll.
- Frise agricole à 360px : les 5 segments sont empilés verticalement et le texte année/statut est lisible (pas d'écrasement).
- Aucune valeur J-day/date modifiée (`ASOF` de `nav.js` intact) et sémantique couleur vert/jaune/orange/rouge préservée.

---

*Une fois validé, ce plan est exécuté tâche par tâche, dans l'ordre P0 → P1 → P2. Contrôle final de cohérence CLAUDE.md (§ Règle de cohérence) à chaque étape : aucun chiffre ou statut ne doit diverger entre `.md` et HTML.*
