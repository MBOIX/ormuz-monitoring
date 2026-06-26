# Journal des modifications

Ce projet est un **suivi de situation évolutif** : ce journal trace les consolidations datées et les évolutions structurelles du dépôt. Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/). Les dates sont au format AAAA-MM-JJ (heure de Paris).

## [J111] — 2026-06-18

### Consolidation périodique
- **Nouvelle synthèse qui fait foi** : [`synthese_J108-J111.md`](docs/synthese_J108-J111.md) (fenêtre 15 → 18 juin 2026). Méthode : 7 axes OSINT parallèles + 5 vérifications adversariales croisées, recoupement ≥ 2 sources indépendantes, cotation Admiralty/STANAG 2511, étiquetage fait/interprétation/spéculation.
- **La porte de sortie de J108 est franchie sur le papier, pas sur le terrain.**
  - **Diplomatie** : l'accord US-Iran (« mémorandum d'Islamabad », 14 points) a été **SIGNÉ par anticipation** — paraphe électronique 14-15 juin (Vance + Ghalibaf), **signature présidentielle 17 juin** (Trump au G7 à Versailles, Pezeshkian à Téhéran), entré en vigueur 2 jours avant la date prévue. **Texte intégral publié le 17 juin** (300 Md$ reconstruction + avoirs gelés + waivers pétroliers = complémentaires ; fin du blocus 30 j ; déminage PAR L'IRAN 30 j ; uranium 440,9 kg dilué sur place sous AIEA ; négociation 60 j). **Cérémonie suisse du 19 juin caduque** (Iran l'annule, Suisse la maintenait). Verrous « non signé » et « versions incompatibles » LEVÉS ; **aval du Guide Mojtaba Khamenei toujours indéterminé** ; caveat US : texte « politique/vague », engagements clés « en coulisses » non écrits.
  - **G7 d'Évian** clos le 17 juin (dernier sommet Macron) : déclaration salue l'accord ; mission de sécurité d'Ormuz **« menée par France-RU »** (~38-40 nations, protection + vérification ; déminage incombant à l'Iran), supplantant le cadrage E4/UE/Aspides ; AIEA pour le nucléaire, pas le déminage.
  - **Militaire** : cessez-le-feu US-Iran formalisé ; blocus US **en cours de levée** (3 tankers iraniens sortis le 16 juin ; CENTCOM 142 redirigés / 9 neutralisés / 42 humanitaires au 14 juin). **Ormuz toujours fermé matériellement** (0-7 transits/jour vs 94-140, déminage non commencé, 30-50 j) : 4ᵉ annonce de réouverture, prudence. **Liban** poursuit (cumul ~3 826 morts au 17 juin ; **Hezbollah reprend le feu** le 17 juin, 5 soldats israéliens blessés). **Pertes FR** : aucune nouvelle dans la fenêtre ; possible **4ᵉ décès** (Florian Gillet, tir accidentel, partenariat hors FINUL, début juin) — **à reconfirmer** (date 1er/10 juin contradictoire).
  - **Marchés** : Brent ~78,96 $ settle (16 juin, 1er sous 80 $ depuis mars) → ~77,7-78,7 $ (18 juin) ; WTI ~74,5-75,8 $ ; plus bas en 3 mois, prime de risque quasi effacée. Banques en révision baissière (Goldman, Citi) ; **AIE** : demande 2026 à 103,3 Mb/j, récit « glut 2027 ». **Fed** (17 juin) : taux 3,50-3,75 % (pause, nouveau président Kevin Warsh, dot plot durci). **Dated Brent physique : toujours introuvable (gap).**
  - **Stocks énergie** : **SPR US 340,3 mb** (−8,9 mb, plus bas depuis 1983) ; **9ᵉ baisse** du brut commercial US (−8,3 mb à 418,2 mb) ; gaz UE **~45,3 %** (16 juin) ; TTF ~40,86 €/MWh ; **force majeure Qatar prolongée jusqu'à mi-août**.
  - **Ressources critiques** : urée ~360 $/t (détente accentuée) ; AdBlue France stable ; soufre record 860 $/t ; **aluminium au plus bas depuis le 27 mars** (~3 359-3 419 $/t) ; ammoniac UE détente ; DAP 930-935 $/t tension ; hélium toujours HS. Aucun rationnement FR/UE hors hélium.
  - **France** : gazole ~1,93-2,00 €/L, l'**essence baisse désormais aussi** (Leclerc vise 1,80 €/L ~mi-juillet) ; aides inchangées (ASP clos le 15 juin) ; manifestation transport du 20 juin **non confirmée** (OTRE en suspension depuis avril). **Projections macro enfin publiées** : **Banque de France** (16 juin) croissance 2026 **0,5 %**, IPCH **2,5 %**, scénario adverse 4,0 % ; **INSEE** (17 juin) croissance **0,7 %**, pouvoir d'achat **−0,3 %**, chômage **~8,1 %** ; faisceau cohérent 0,5-0,7 % (avec FMI).
- **Recalibrage des scénarios** : 🟢 **A 35-45 → 48-58 %** (⬆️, devient le scénario modal : accord signé, texte publié) · 🟡 **B 38-46 → 30-38 %** (⬇️, « accord creux » / normalisation lente reste plausible) · 🔴 **C 14-22 → 10-16 %** (⬇️, Liban + réversibilité Trump = déclencheurs résiduels).

### Propagation (règle de cohérence CLAUDE.md)
- `nav.js` : constante `ASOF` → « 18 juin 2026 (J111) » (propagée aux 7 pages).
- `index.md`, `app/index.html`, `chronologie.html`, `stocks_pays_ue.html`, `dependances_ormuz_pays.html`, `dependances_ressources_critiques.html`, cartes : titres/sous-titres, blocs d'actualité, tables de chiffres et probabilités passés à J111.
- `chronologie.md` : ajout de la **Phase 11** (15-18 juin, 25 entrées datées) + mise à jour des sections Contradictions et Vides documentaires.
- `scenario_optimiste.md`, `scenario_realiste.md`, `scenario_pessimiste.md` : en-têtes de probabilité et bloc « Mise à jour J111 ».

### Nouveau document analytique — impacts agricoles (du champ à l'assiette)
- **Nouveau document** : [`impacts_agricoles.md`](docs/impacts_agricoles.md) — impacts agricoles du blocage d'Ormuz sur **toute la chaîne alimentaire** (engrais/intrants, carburant agricole & AdBlue, énergie de production & transformation, fret céréalier & flux maritimes, sécurité alimentaire mondiale, transformation & prix au consommateur), avec **tableau d'impacts coté**, **prospective 2026-2029** (calendrier saisonnier ancré sur le scénario B + bifurcations A/C) et **conclusion focus France**. Méthode : 8 axes OSINT parallèles + 15 vérifications adversariales (4 confirmées, 11 partiellement — corrections appliquées).
- **Nouvelle page web** : [`app/impacts_agricoles.html`](app/impacts_agricoles.html) — tableau d'impacts (produit × canal × géographie × palier 🟢🟡🟠🔴) + frise calendaire 2026-2029 + cartes par canal de transmission, par pays et indicateurs de bascule. Réutilise `styles_common.css` / `nav.js` (hors-ligne, sans dépendance) ; **8ᵉ page** ajoutée au tableau `LINKS` de `nav.js` (lien « Impacts agricoles » propagé partout) et cartes ajoutées à `app/index.html`. `docs/index.md` et `CLAUDE.md` (arborescence + compteur de pages) mis à jour.
- **Corrections de fond issues des vérifications** (principe « réviser, ne pas ancrer ») : l'**aide GNR agricole de 15 ct/L est prolongée jusqu'au 31 août 2026** (décret n°2026-477 du 10 juin, JO 12 juin) — pas d'effet de falaise « +20 ct/L au 1ᵉʳ juillet » côté GNR agricole (à distinguer de la remise carburant générale et de l'indemnité « grands rouleurs », guichet clos le 31 juillet) ; viande bovine **~+7,8 %/an au producteur** (et non +33 %, qui était le pic de janvier / le cumul ~2 ans) ; part céréalière d'Ormuz **~0,2 % du commerce maritime mondial / ~4,8 % du commerce mondial de céréales** (et non « ~3 % du commerce maritime ») ; **huiles végétales FAO en baisse** (−4,6 %/mois, 1ᵉʳ repli 2026) ; tension soufre/DAP **multi-causale** (Ormuz + suspension des exports de phosphates par la Chine, décidée en décembre 2025) ; aucune fermeture d'usine agroalimentaire UE imputable au choc énergétique d'Ormuz (déprécation Südzucker annoncée 11 j avant le J1).

## [J108] — 2026-06-15

### Consolidation périodique
- **Nouvelle synthèse qui fait foi** : [`synthese_J106-J108.md`](docs/synthese_J106-J108.md) (fenêtre 13 → 15 juin 2026). Méthode : 6 axes OSINT parallèles (militaire/maritime, diplomatie/G7, OPEP+/marchés, stocks énergie, ressources critiques, France), recoupement ≥ 2 sources indépendantes, vérification adversariale (cotation Admiralty), étiquetage fait/interprétation/spéculation.
- **La bifurcation s'oriente vers la sortie de crise, sans certitude** : amélioration matérielle du dossier diplomatique, terrain et verrous inchangés.
  - **Diplomatie** : le 14 juin, Trump déclare l'accord US-Iran **« complet »**, autorise la réouverture « sans péage » d'Ormuz et **ordonne la levée du blocus naval** ; **CONFIRMATION côté iranien** (vice-MAE Gharibabadi) — nouveau vs J106. **Signature reportée au 19 juin en Suisse** (pas le 14 à Genève). Verrous intacts : aval du Guide Mojtaba Khamenei toujours non confirmé par Téhéran, versions du texte incompatibles (24/25 Md$ vs 300 Md$), volet nucléaire reporté (~440 kg HEU 60 % restent en Iran 60 j). **4ᵉ annonce de réouverture** → prudence.
  - **G7 d'Évian** (15-17 juin, présidence Macron) ouvert le 15 ; Macron propose frégate chasse-mines + avions sous 2-3 j ; **déclaration E4 (FR/DE/UK/IT)** sur la mission de déminage (réaffectation Aspides) + conditionnalité sanctions ; la Chine salue l'accord.
  - **Militaire/maritime** : 4ᵉ jour sans frappe US/Iran (cessez-le-feu de facto tient sur ce front) ; bilan CENTCOM inchangé (9 neutralisés / 139 redirigés) ; **Liban : ~30 morts à Beyrouth le 14 juin = journée la plus meurtrière de la trêve** (dissocié de l'accord) ; Houthis menace verbale ; **Ormuz toujours fermé à ~95 %** (ouverture déclaratoire) ; aucune nouvelle perte française (bilan 3).
- **Marchés** : Brent settle **~87,33 $** (13/06) → **~83,78 $** réouverture (14/06), WTI ~84,88 → **~80,90 $** ; Bourses asiatiques au record (Nikkei +5,4 %) ; demande 2026 : **divergence accrue** (AIE −0,42 Mb/j vs OPEP +0,97 vs EIA ~+0,6) ; OSP saoudien −6 $ juillet confirmé ; OPEP+ 5 juillet ; Irak ~1,3 Mb/j (vise Ceyhan).
- **Check stocks toutes ressources** : SPR US inchangé **349,2 mb** ; **WPSR brut commercial US −3,6 mb à ~422,9 mb, 8ᵉ baisse consécutive** ; gaz UE **~44,3 %** ; TTF **43,51 €/MWh** (plus bas en 5 sem.) ; **urée détente accentuée** (spot ~400 $/t) ; **AdBlue France stable** (hausse « inévitable » NON matérialisée) ; **soufre record 860 $/t ferme** ; hélium tension (aucun redémarrage) ; aluminium détente confirmée ; ammoniac UE détente ; phosphates DAP tension.
- **France** : **gazole ~1,988 €/L** (15 juin, −3 ct — répercussion enfin), essence figée ; **~3 % de stations en difficulté** (officiel) ; **projections Banque de France et note INSEE TOUJOURS non publiées** au 15 juin (manque assumé) ; aides inchangées (échéance ASP aides pro carburant le 15 juin).
- **Probabilités RÉVISÉES** : A **35-45 %** (⬆️ forte hausse vs 22-32 % — accord confirmé + signature datée + blocus ordonné levé, mais non signé) · B **38-46 %** (⬇️ vs 44-52 %, n'est plus le seul modal) · C **14-22 %** (⬇️ vs 20-28 % — désescalade US-Iran + chute des prix plafonnent le haussier). Propagées à `index.md`, scénarios A/B/C, `calendrier_penuries.md`, `app/index.html`, `stocks_pays_ue.html`.
- **Dashboards synchronisés** : `nav.js` (ASOF → J108, propagé aux 7 pages), titres/sous-titres, faits saillants `app/index.html` (+ carte « Documents analytiques » pour la nouvelle synthèse), lignes d'évolution/chiffres dans `stocks_pays_ue.html`, `dependances_ressources_critiques.html`, `dependances_ormuz_pays.html`, cartes.
- **Dette chronologie résorbée** : [`docs/chronologie.md`](docs/chronologie.md) et [`app/chronologie.html`](app/chronologie.html) étendues du J98 au J108 (ajout des **Phases 9 — J103→J106** et **10 — J106→J108**).

### Corrigé (principe « réviser, ne pas ancrer »)
- Accord US-Iran : passe de « texte agréé non confirmé » à **« complet » confirmé côté iranien**, signature datée au **19 juin** ; blocus naval **ordonné levé**.
- Stocks brut commercial US : **−3,6 mb à ~422,9 mb** (sem. au 6 juin, 8ᵉ baisse) au lieu de −7,2 mb / 426,5 mb (sem. au 5 juin).
- Statut Ormuz : **« ouverture » annoncée (14 juin) mais flux toujours ~95 % sous la normale** (déclaratoire) au lieu de « fermeture totale déclarée ».
- Gazole France : **~1,988 €/L** (−3 ct, début de répercussion) ; stations en difficulté **~3 %** (officiel 15 juin).
- Urée : **~400 $/t** (indice spot, détente accentuée) au lieu de ~445-449 $/t.
- Mission de déminage Ormuz : **E4 / pilotée UE** (réaffectation Aspides) — le chiffre « 15+ nations » n'est pas confirmé sur la fenêtre.

### Signalé (données absentes assumées)
- Dated Brent physique (13-15 juin), texte intégral et définitif du MOU US-Iran (publication promise post-signature du 19 juin, 3 versions divergentes), aval explicite du Guide, débit Ormuz quotidien exact, projections Banque de France et note INSEE de juin (non publiées au 15 juin), prolongation éventuelle de la force majeure Qatar au-delà de mi-juin, CP GPL saoudien de juillet (~28-30 juin), cotations fraîches de juin pour méthanol/potasse/paraxylène/bitume/noir de carbone, relevé AdBlue France daté, clôture officielle des futures du 15 juin, MAJ CENTCOM du bilan de blocus des 14-15 juin.

## [J106] — 2026-06-13

### Consolidation périodique
- **Synthèse** : [`synthese_J103-J106.md`](docs/synthese_J103-J106.md) (fenêtre 10 → 13 juin 2026). Méthode : 6 axes OSINT en 2 vagues (rattrapage des axes saturés par la limite de session : militaire/maritime, OPEP+, ressources critiques), recoupement ≥ 2 sources indépendantes, vérification adversariale (cotation Admiralty), étiquetage fait/interprétation/spéculation.
- **Bifurcation (et non plus enlisement)** : la fenêtre superpose le **pic de l'escalade** et la **première bascule diplomatique crédible**.
  - **Diplomatie** : le 11 juin, Trump **annule ses frappes** et annonce un **« great settlement »** (cessez-le-feu +60 j, Ormuz rouvert à la signature) ; le 12 juin, le médiateur **pakistanais Sharif confirme un « texte agréé »**. **Non signé** : l'Iran ne confirme pas, versions des termes incompatibles, aval du Guide manquant, Trump désavoue les termes fuités.
  - **Militaire/maritime** : hélico US (Apache) abattu près d'Ormuz (9 juin) → frappes croisées (toutes interceptées) → **fermeture totale d'Ormuz déclarée par l'Iran le 11 juin** (trafic réel ~95 % sous la normale, AIS) ; **3 marins indiens tués sur le M/T *Settebello*** (1ʳᵉˢ victimes civiles maritimes du blocus) ; drones iraniens abattus le 13 juin ; bilan CENTCOM 9 neutralisés / 139 redirigés. **Aucune nouvelle perte française.**
- **OPEP+ (check demandé)** : réunion du 7 juin, reconduction **+188 000 b/j** pour juillet (sans les EAU, théorique car barils bloqués), prochaine réunion 5 juillet ; **OSP saoudien −6 $** (plus forte coupe depuis 2022) ; les 3 rapports mensuels (MOMR, IEA OMR, EIA STEO) convergent sur la **1ʳᵉ contraction de la demande mondiale 2026 depuis 2020** ; **prédiction Exxon (150-160 $) invalidée** (Brent à ~87 $).
- **Check stocks toutes ressources** : WPSR publié → **SPR US 349,2 mb** (−7,9 mb/sem.), 7ᵉ baisse de brut commercial US ; gaz UE ~43,4 % ; **détente urée** (réouverture exports chinois → tender indien −50 %) ; **AdBlue France toujours nominal** ; **soufre aux records absolus** (805-860 $/t) ; GPL/hélium au plus haut ; **aluminium en détente partielle** (backwardation effondrée).
- **France** : gazole ~2,018 €/L (12 juin), ~2 % de stations en difficulté (amélioration) ; **INSEE confirme l'inflation mai à +2,4 %** (sous-jacente en accélération à +1,5 %) ; projections Banque de France attendues 15-16 juin.
- **Probabilités RÉVISÉES (bifurcation)** : A **22-32 %** (⬆️ forte hausse vs 8-15 %) · B **44-52 %** (⬇️, reste modal) · C **20-28 %** (➡️ ~stable). Propagées à `index.md`, `app/index.html`, `stocks_pays_ue.html`.
- **Dashboards synchronisés** : `nav.js` (ASOF → J106, propagé aux 7 pages), titres/sous-titres, faits saillants `app/index.html`, ligne d'évolution J106 dans `stocks_pays_ue.html`, sous-titre `dependances_ressources_critiques.html`, flux Ormuz dans `dependances_ormuz_pays.html`.

### Corrigé (principe « réviser, ne pas ancrer »)
- SPR US : **349,2 mb** (5 juin, WPSR publié le 10 juin) au lieu de 357,1 mb (29 mai, gap J103 comblé).
- Statut Ormuz : **fermeture totale déclarée (11 juin)** / trafic réel ~95 % sous la normale, au lieu de « flux ~5-16 % ».
- Bilan blocus US : **9 neutralisés / 139 redirigés** (13 juin) au lieu de 7 / 134 (8 juin) ; **3 premières victimes civiles maritimes** (*Settebello*).
- Urée : **~445-449 $/t** (tender indien, −50 %) au lieu de ~×2 — détente liée à la réouverture des exports chinois (exogène à Ormuz).
- Prédiction Exxon (Dated Brent 150-160 $) : **invalidée** (et non plus seulement « non matérialisée »).
- EAU : sortie de l'OPEP datée au **1er mai** (et non 3 mai) selon les sources OPEP+ de juin.

### Signalé (données absentes assumées)
- Dated Brent physique (10-13 juin), texte intégral du MOU US-Iran (2 versions contradictoires), lieu/date d'une signature éventuelle, aval du Guide, débit Ormuz quotidien exact (annonces CENTCOM vs Iran contradictoires), bilan civil iranien des frappes, cotations fraîches de juin pour méthanol/phosphates/potasse/paraxylène/bitume/noir de carbone, relevé AdBlue France daté, projections Banque de France et note INSEE de juin (publication ~15-16 juin), clôture officielle des futures du 12 juin, OSP saoudien Europe/USA.

### Non synchronisé (dette assumée, à résorber)
- `app/chronologie.html` reste **figée au J98** (frise non maintenue depuis le J98, événements J99→J106 non ajoutés) ; elle renvoie explicitement à la synthèse périodique pour l'état courant. À étendre lors d'un prochain cycle (28 fév → 13 juin).

## [Non publié]

### Ajouté (documents thématiques, J103)
- **[`docs/flux_mer_rouge.md`](docs/flux_mer_rouge.md)** : état de l'art chiffré des flux du corridor mer Rouge (Bab-el-Mandeb ↔ Suez ↔ SUMED) par ressource — pétrole, GNL, conteneurs, vracs — baseline 2023 vs état actuel (détournement Cap de Bonne-Espérance), sources EIA/IMF/UNCTAD cotées.
- **[`docs/adblue_cycle_de_vie.md`](docs/adblue_cycle_de_vie.md)** : document vulgarisé documentant tout le cycle de vie de l'AdBlue (gaz → ammoniac → urée → AdBlue), production française (un seul site intégré : Yara Le Havre), chaîne d'import/transit, prix, **6 maillons faibles**, scénarios prospectifs calibrés (ICD 203) et recommandations. Méthode : 6 axes OSINT + vérification adversariale (31 confirmés, 3 réfutés corrigés, 8 invérifiables signalés), 46 sources cotées.
- **[`docs/synthese_J98-J103.md`](docs/synthese_J98-J103.md)** : ajout d'une section « Focus prospectif — Confinement énergétique & AdBlue » (verdict calibré : risque de confinement carburant quasi nul à horizon semaines ; AdBlue = maillon faible du fret à surveiller).
- Cartes « Flux mer Rouge » et « AdBlue — cycle de vie » ajoutées dans `app/index.html` (Documents analytiques).

## [J103] — 2026-06-10

### Consolidation périodique
- **Nouvelle synthèse qui fait foi** : [`synthese_J98-J103.md`](docs/synthese_J98-J103.md) (fenêtre 6 → 10 juin 2026). Méthode : 6 axes OSINT parallèles, recoupement ≥ 2 sources indépendantes, vérification adversariale (42 claims confirmés, 0 réfuté, 5 invérifiables ; cotation Admiralty), étiquetage fait/interprétation/spéculation.
- **Focus mer Rouge** : le 8 juin, les Houthis décrètent l'interdiction de la navigation israélienne en mer Rouge (menace verbale, aucun navire attaqué sur la fenêtre) — **second verrou maritime potentiel** sur Bab-el-Mandeb en plus d'Ormuz ; fragilise le contournement via SUMED (+150 %).
- **Carte enrichie** : `app/carte_infrastructures.html` passe de 54 à **67 sites** (ajout de 13 infrastructures de la façade mer Rouge / Bab-el-Mandeb / Suez : Petro Rabigh, Jizan + IGCC, têtes SUMED Aïn Sokhna & Sidi Kerir, raffinerie de Suez, ports yéménites Hodeidah/Salif/Mokha, Bashayer & Port-Soudan, Horizon Djibouti) ; vue carte élargie vers l'ouest. Sources dans `sources_infrastructures.md`.
- **Militaire** : ~30 missiles iraniens tirés directement sur Israël (7-8 juin) puis pause conditionnelle du CGRI ; 7e navire neutralisé par le blocus US (*Marivex*, 8 juin). Aucune nouvelle perte française.
- **Marchés** : Brent futures ~91,8 $ (10 juin), point bas ~89,7 $ le 9 juin (~−12 % sur le mois), WTI ~88,2 $ ; 3e « signal de réouverture » d'Ormuz (Wright, 9 juin) non chiffré/non recoupé.
- **Check stocks toutes ressources** : gaz UE ~42,5 % (9 juin) ; SPR US figé à 357,1 mb (WPSR du 5 juin non publié) ; aluminium en backwardation (pénurie physique) ; urée papier ~402 $/t (+6,5 % le 9 juin).
- **Probabilités inchangées vs J98** : A 8-15 % · B 60-66 % (central) · C 22-30 % — la fenêtre 6-10 juin confirme l'enlisement ; la menace mer Rouge déplace la nature du risque C sans en franchir la borne.

### Corrigé (principe « réviser, ne pas ancrer »)
- Force majeure QatarEnergy (Ras Laffan) : échéance **mi-août maintenue** (établie à J98) — une annonce plus ancienne (mi-mai) ne justifie pas une révision à la baisse ; statut non reconfirmé dans la fenêtre.
- Affirmations non vérifiables écartées des livrables : changement de gouverneur de la Banque de France, désignation nominale du successeur du Guide suprême — sourcées mais non confirmables, retirées par prudence factuelle.

### Signalé (données absentes assumées)
- Dated Brent physique 6-10 juin, débit Ormuz quotidien exact, WPSR EIA semaine au 5 juin, cotations hélium/méthanol/soufre propres à la fenêtre, croissance BdF 2026 (mi-juin), inflation FR juin (fin juin), ventilation gaz par pays : non disponibles en source ouverte — non comblés par estimation. Divergence non résolue sur le nombre de stations FR en difficulté (~2 307 J98 vs ~3 % officiel J103).

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
