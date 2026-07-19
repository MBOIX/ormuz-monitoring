# Playbook LONG — rattrapage > 3 jours

Pour une reprise après lapse ou une grosse consolidation (plusieurs fils, plusieurs sous-périodes à couvrir). Applique intégralement le **noyau commun** de [`PROCEDURE_MAJ.md`](PROCEDURE_MAJ.md) ; ce fichier ne décrit que les **spécificités**.

## Spécificités

- **Triage OBLIGATOIRE (Étape 0.5)** : 1 agent `sonnet` low balaie la fenêtre et renvoie les **fils majeurs**, les **sous-périodes** (jours/segments à enjeu) et les **axes réellement porteurs d'actualité**. Évite d'ouvrir des axes vides et cadre le fan-out.
- **Fan-out : 6-7 axes** — Militaire / Diplomatie-Nucléaire-Liban / Marchés-Macro / France / Flux Ormuz-Pertes / Gaz-Ressources-Mer Rouge / OPEP+-Chine-Flux. Si la fenêtre couvre plusieurs jours à enjeu, **décomposer par sous-période** (pipeline : chaque segment passe collecte → vérif indépendamment, sans barrière).
- **Collecte et vérification SÉPARÉES** (la rigueur supplémentaire se justifie quand les claims s'accumulent), avec un **agent de dédup inter-axes en barrière** avant vérification (évite le double comptage d'un même fait vu par 2 axes ou 2 jours).
- **Loop-until-dry** : relancer des finders jusqu'à **K = 2** rounds consécutifs sans fait nouveau (complétude sur fenêtre large).
- **Budget-gated** : dimensionner la profondeur au budget (`while (budget.total && budget.remaining() > seuil) { … }`).
- Peut produire des **consolidations intermédiaires** si la fenêtre couvre plusieurs synthèses potentielles — ne pas tout écraser en une seule.
- **Profondeur de vérification** : règle §2.4 du noyau (fable-high sur claims à enjeu ; sonnet/opus low sinon).
- **Livrable** : la/les synthèse(s) + **manifeste de propagation** → Edits inline (noyau §2.6).

## Prompt à coller

```
Applique le noyau commun de docs/process/PROCEDURE_MAJ.md. Puis, en playbook LONG (fenêtre J<début> → J<fin>) :

0.5 TRIAGE (1 agent sonnet low) : balaie la fenêtre, renvoie les fils majeurs + les sous-périodes à enjeu + les axes réellement porteurs. 
1. Scout inline la synthèse courante → baselines à réviser + work-list.
2. Conçois et exécute un Workflow :
   - 6-7 axes OSINT (Militaire / Diplo-Nucléaire-Liban / Marchés-Macro / France / Flux Ormuz-Pertes / Gaz-Ressources-MerRouge / OPEP+-Chine). Si plusieurs jours à enjeu, pipeline par sous-période.
   - Étapes : collecte (sonnet, ≥2 sources, cote Admiralty, fait/interp/spec) → dédup inter-axes (opus, BARRIÈRE) → vérif adversariale (fable-high sur claims §2.4 ; sonnet/opus low sinon).
   - Loop-until-dry (K=2). Budget-gated. N'invente rien ; documente les lacunes.
3. Toi (fable) : ACH sur chaque jugement structurant + recalibrage A/B/C (ICD 203). Rédige la/les synthèse(s) + produis le MANIFESTE de propagation (fichier → ancienne→nouvelle valeur).
4. Applique le manifeste en Edits déterministes inline (PAS d'agents). Propage l'app (ASOF, titres/sous-titres, chiffres, événements CHRONO + revalidation JSON). Audit de cohérence final .md ↔ HTML.
5. Ne commit pas. Termine par le mini-rapport de diff.
```
