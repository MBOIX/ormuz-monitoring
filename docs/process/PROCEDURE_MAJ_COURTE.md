# Playbook COURT — rattrapage ≤ 3 jours

Pour la cadence normale (fenêtre 1-3 jours, un fil dominant en général). Applique intégralement le **noyau commun** de [`PROCEDURE_MAJ.md`](PROCEDURE_MAJ.md) ; ce fichier ne décrit que les **spécificités**.

## Spécificités

- **Fan-out : 3 axes consolidés**, **1 agent par axe en 2 passes internes** (collecte web *puis* auto-réfutation de ses propres claims) — **pas d'agents de vérification séparés** (évite le double web search, principal poste de gaspillage du run J142). Modèle `sonnet` medium.
  1. **Militaire + Diplomatie + Liban** — incidents, frappes, pertes, saisies, négociations, médiations, ultimatums, MOU, nucléaire, front libanais.
  2. **Marchés + Macro + France** — Brent futures/Dated/WTI, spreads, OPEP+, SPR/EIA, cibles bancaires ; gazole/DGEC/stations/aides, social, prévisions INSEE/BdF.
  3. **Flux Ormuz + Pertes + Ressources** — transits (Kpler/Reuters/Vortexa), statuts d'infra, consolidation des pertes ; gaz (TTF/PEG/GNL/stocks UE), hélium/urée/alu/méthanol, mer Rouge/Bab-el-Mandeb.
- **Profondeur de vérification** : suit la règle §2.4 du noyau — escalade à une passe `fable`-high **uniquement** pour les claims de type pertes / revendication de belligérant / contradiction avec la baseline.
- **Triage** : sauté (fenêtre trop petite pour le justifier).
- **Budget cible** : ~250-300k tokens.
- **Livrable** : 1 synthèse + **manifeste de propagation** → l'orchestrateur applique en Edits inline (noyau §2.6).

## Prompt à coller

```
Applique le noyau commun de docs/process/PROCEDURE_MAJ.md (Étape 0 cadrage, objectivité/cotation, profondeur de vérif §2.4, étagement modèles, manifeste de propagation, cohérence, économie tokens, garde-fous). Puis, en playbook COURT :

1. Scout inline la synthèse courante (docs/synthese_J*-J*.md) → baselines à réviser + fenêtre + work-list.
2. Conçois et exécute un Workflow : 3 axes consolidés (Militaire+Diplo+Liban / Marchés+Macro+France / Flux Ormuz+Pertes+Ressources). 1 agent sonnet/axe en 2 passes : (a) collecte web des faits datés de la fenêtre, ≥2 sources indépendantes, cote Admiralty, étiquette fait/interp/spéculation ; (b) auto-réfutation de ses propres claims (chercher les démentis, débusquer les recyclages). N'invente rien ; documente les lacunes.
3. Escalade une vérif fable-high SEULEMENT sur les claims de type pertes/seuil létal, revendication de belligérant, ou contradiction avec la baseline.
4. Toi (fable) : ACH sur les jugements structurants + recalibrage A/B/C (ICD 203). Rédige la synthèse (fait foi) ET produis le MANIFESTE de propagation : tableau fichier → (ancienne valeur → nouvelle valeur) pour chaque chiffre/statut modifié.
5. Applique le manifeste en Edits déterministes inline (PAS d'agents). Propage l'app (ASOF de nav.js, titres/sous-titres, chiffres des dashboards, événements CHRONO + revalidation JSON). Audit de cohérence final .md ↔ HTML.
6. Ne commit pas. Termine par le mini-rapport de diff (mouvements A/B/C + justif, 3-5 indicateurs à surveiller, lacunes restantes).
```
