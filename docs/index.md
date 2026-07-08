# Index — Crise du Détroit d'Ormuz / Impact France
### Projet d'analyse OSINT, économique et sociale
#### État au 26 juin 2026 — Jour 119 du conflit

---

> **Comment lire ce dossier — instantané daté, situation évolutive.**
> Dernière consolidation : **26 juin 2026 (J119)** · arrêt des données : 26 juin 2026, heure de Paris.
> Suivi d'une crise **réelle et en cours** : chaque chiffre (prix, stocks, flux) périme vite ; au-delà de ~48-72 h, données à revérifier. La synthèse périodique la plus récente — **[`synthese_J111-J119.md`](synthese_J111-J119.md)** — fait foi sur l'état courant. Analyse **OSINT sur sources ouvertes**, à vocation informative — ni conseil financier, ni source de sécurité opérationnelle. Voir [`README.md`](../README.md) et [`sources.md`](sources.md).

---

> **⏩ Actualisation J119 (26 juin) — ce qui a bougé depuis le 18 juin : l'accord SIGNÉ commence à s'appliquer (blocus levé, aval conditionnel du Guide) puis manque de capoter en 72 h (Ormuz re-fermé, navire frappé).** Détail et sources dans [`synthese_J111-J119.md`](synthese_J111-J119.md).
> - **Le terrain commence à suivre — puis se fissure [FAIT]** : **blocus naval US levé (18 juin, CENTCOM)** — 3 pétroliers iraniens (NITC) + 3 saoudiens ressortent (1er brut iranien en ~2 mois) ; **aval (conditionnel) du Guide Mojtaba Khamenei (18-19 juin)** — « permission » accordée « malgré des réserves » : **le dernier verrou de J111 est levé** (mais non contraignant sur la suite) ; **General License X (22 juin)** — exemption pétrolière US de 60 j (~21 août, ~67 Mb libérés) ; **pourparlers nucléaires ouverts en Suisse (21 juin)**. **MAIS en moins de 72 h** : l'Iran (CGRI) **re-décrète la fermeture d'Ormuz (20 juin)** (invoquant le Liban, démenti par son propre MAE et par CENTCOM) ; **frappe sur le porte-conteneurs *Ever Lovely* (25 juin)** sur la nouvelle route omanaise (attribution CGRI par des responsables US, non confirmée) ; **l'OMI suspend l'évacuation des ~11 000 marins (26 juin)** ; **litige public sur les avoirs gelés** (12 Md$ : séquestre contrôlé US vs libre usage iranien) et **AIEA revendiquée par Vance mais NIÉE par Baghaei**. **Nouveau verrou : la tenue effective de l'accord, désormais démontrée fragile.**
> - **Ormuz — réouverture réelle, contestée, réversible [FAIT]** : comptages **irréconciliables** — CENTCOM/MarineTraffic **55-70 transits/j** (record depuis le 1er mars, ~75 % du préconflit le 26 juin) vs trackers AIS (straits.live) **~5/j** (« Closed ») ; cause = navigation « dark » (AIS coupé). Couloir nord (TSS) **miné/fermé**, couloir sud omanais **contesté par le CGRI**. Déminage estimé 40-50 j, **non quantifié**. **Aucun chiffre de transit ne fait consensus — gap de méthode assumé.**
> - **Prix au plus bas en 4 mois [FAIT]** : **Brent ~72,6-73,8 $ / WTI ~70,4 $ (26 juin)**, WTI passé **sous 70 $ en séance** (creux ~69,63 $) ; **hebdo ~−10 %, mensuel ~−21 %** ; prime de guerre quasi totalement effacée (Brent ~+2 % vs pré-guerre). Frappe du 25 juin = **rebond bref (~+4 %) aussitôt résorbé**. Banques en coupe (Goldman T4 80 / Morgan Stanley T3 90 / Citi 2027 65) ; **AIE : récit « excédent 2027 »**. Co-facteur : **Fed** en pause (3,50-3,75 %), note BofA évoquant jusqu'à 3 hausses 2026. **Dated Brent physique toujours introuvable** (gap).
> - **Stocks [FAIT]** : **SPR US ~331,2 mb (−9,06, plus bas depuis 1983**, ~84 mb sortis depuis mars) ; brut commercial US **−6,1 mb à 412,1 mb, 10ᵉ baisse consécutive** (sem. au 19 juin) ; gaz UE **~46,4 %** (24-25 juin) ; TTF **~41 €/MWh** ; force majeure Qatar toujours en vigueur (mi-août). Les US **continuent de drainer malgré la désescalade**.
> - **Ressources critiques [FAIT]** : **aluminium nouveau plus bas ~3 119 $/t** (24 juin) ; **urée détente confirmée** (~360 $/t ; UE suspend les droits urée/ammoniac) ; **hélium toujours HS** ; soufre/DAP toujours tendus ; AdBlue France stable. Aucun rationnement FR/UE hors hélium.
> - **France [FAIT]** : **gazole ~1,943 → ~1,891 €/L** (−8,1 ct/L/sem) ; **repli du plafonnement TotalEnergies (23 juin)** — cap maintenu dans ~1 200 stations rurales seulement, ~2 300 déplafonnées (marché à 1,80-1,90 €/L) ; aide « grands rouleurs » 100 € **guichet ouvert jusqu'au 31 juillet** (corrige la baseline J111 « clos le 15 juin »). **4ᵉ décès français CONFIRMÉ** : 1re classe Florian Gilet (8e RPIMa, tir accidentel, hors FINUL, ~10 juin) — le bilan FINUL de combat **reste à 3**. Pas de note macro nouvelle (BdF 0,5 % / INSEE 0,7 % inchangés ; IPC juin ~30 juin).
> - **Scénarios — RECALIBRÉS** : 🟢 **A 40-50 %** (⬇️ vs 48-58 % : le signé s'applique mais la réouverture s'est révélée réversible) · 🟡 **B 35-45 %** (⬆️ vs 30-38 % : la « réouverture heurtée / accord creux » s'est matérialisée — B se rapproche de A) · 🔴 **C 12-18 %** (⬆️ vs 10-16 % : incidents cinétiques réels — Ever Lovely, menaces CGRI, « hit harder » de Trump).

---

## Vue d'ensemble

Le 28 février 2026, les États-Unis et Israël ont lancé des frappes conjointes sur l'Iran (Opération Epic Fury), tuant le Guide suprême Ali Khamenei. L'Iran a répondu en fermant le détroit d'Ormuz — passage de 20 % du pétrole et du gaz naturel mondial — déclenchant la plus grande perturbation de l'approvisionnement pétrolier de l'histoire.

**119 jours de crise. Diagnostic lucide** : la situation reste **stagflationniste avérée** et **pré-récessive pour l'Allemagne et l'Italie** ; l'accord-cadre US-Iran **signé le 17 juin a commencé à s'appliquer sur le terrain** — **blocus naval US levé (18 juin)**, **aval conditionnel du Guide Mojtaba Khamenei (18-19 juin)**, **licence pétrolière US de 60 j (22 juin)**, premiers tankers iraniens et saoudiens qui ressortent — **puis a montré sa réversibilité en moins de 72 h** : l'Iran (CGRI) **re-décrète la fermeture d'Ormuz (20 juin)**, le porte-conteneurs *Ever Lovely* est **frappé (25 juin)**, l'OMI **suspend l'évacuation (26 juin)**, et les **avoirs gelés + l'AIEA passent en litige**. **Les obstacles de fond restent intacts** : la réouverture d'Ormuz est **contestée et réversible** (comptages irréconciliables CENTCOM ~55-70/j vs AIS ~5/j ; couloir nord miné, couloir sud omanais contesté), l'aval du Guide n'est que **conditionnel**, le texte reste « vague » (engagements « en coulisses » non écrits), le **nucléaire est renvoyé à 60 jours**, et le **Liban continue** (cumul ~3 912 morts). Côté marché, le prix du brut **tombe à son plus bas en quatre mois** (Brent ~72-74 $, WTI sous 70 $ en séance) — sur le retour de l'offre par-dessus une **demande mondiale molle** (AIE : « excédent 2027 »). *(Le récit détaillé qui suit porte sur la fenêtre 3-6 juin et reste daté ; pour l'état courant — accord en application heurtée, Ormuz contesté, prix, ressources, Liban — voir l'actualisation J119 en tête de page et [`synthese_J111-J119.md`](synthese_J111-J119.md), qui fait foi.)* La fenêtre 3 juin → 6 juin a vu **l'escalade militaire devenir concrète, mais sans bascule** : frappe US au missile sur le pétrolier vide *Lexie* (2 juin, 6e navire neutralisé), salves iraniennes de missiles/drones vers le Golfe, frappe du terminal de l'aéroport de Koweït (1 mort, ~63 blessés) et représailles US sur les radars côtiers iraniens (Goruk, Qeshm). **Point critique** : l'IRGC a *revendiqué* avoir frappé le QG de la Ve Flotte US à Bahreïn — **[SPÉCULATION] revendication DÉMENTIE par CENTCOM**, missiles interceptés, aucun dégât US confirmé par source indépendante. Côté diplomatie, **les pourparlers indirects restent suspendus depuis le 1er juin** (Araghchi, 3 juin : « aucun progrès tangible », mais « les messages continuent ») : le canal n'est pas coupé, mais aucune vraie négociation n'a lieu. **Aucun accord n'est signé.**

**Le paradoxe énergétique central de la fenêtre** : **pendant que les missiles volaient, le Brent papier a BAISSÉ** de ~98 $ (3 juin) à **~93 $/b (clôture 5 juin)** [B2], le WTI tombant vers **~90,3-90,5 $/b** (spread Brent-WTI comprimé à ~2,5 $/b vs ~13 $ le 30 avril). Le marché parie sur un accord US-Iran qui n'existe pas, et **la Chine continue d'écraser la demande** (imports brut **6,36 Mb/j en mai, −44 % vs février**, plus bas en ~10 ans). [SPÉCULATION] La thèse Exxon d'un Dated Brent physique à **150-160 $/b sous 2-3 semaines** (Neil Chapman, SVP, 28 mai) **NE s'est PAS matérialisée à J98** : non seulement le prix papier recule, mais **aucune assessment Platts/Argus du Dated Brent physique récent n'est disponible** en source ouverte — on ne sait pas où est le prix physique au 6 juin, et il faut l'assumer plutôt que d'inventer un chiffre (le ~132,74 $ d'un blog non fiable est écarté). La douleur reste **poussée vers l'aval du baril** (gazole, essence, jet, GPL, naphta) et vers les ressources critiques.

**Pourquoi Brent reste sous 100 $ malgré l'escalade — le « couvercle chinois » tient** : la **Chine retarde le point de rupture** (imports brut 6,36 Mb/j en mai, −44 % vs février, en puisant dans sa SPR, la plus grande au monde). Ce coussin chinois est **conjoncturel, pas structurel** : quand il se résorbera, le risque physique décrit par Exxon pourra se matérialiser — mais ce n'est pas acquis à J98.

**Ce que les institutions Tier 1 actent à J98** :
- **EXXON (28 mai)** : alerte stocks mondiaux « inédits » ; Dated Brent physique projeté **150-160 $/b** sous 2-3 semaines — **[SPÉCULATION] non matérialisée à J98**, source unique et intéressée, à surveiller sans la tenir pour acquise.
- **EIA (WPSR, sem. au 29 mai)** : **SPR US à 357,1 mb** (corrige le 365,1 mb du 22 mai), tirage ~8 mb/sem, plus bas depuis janvier 2024.
- **OPEP+** : **les EAU ont QUITTÉ l'OPEP** (1ère réunion sans eux, 3 mai) → **moins d'amortisseurs de choc** ; quota Arabie 10,291 mb/j mais production réelle 7,76 mb/j (mars) ; capacité mondiale de réserve > 4 mb/j, quasi exclusivement saoudienne.
- **Commission UE Spring forecast 2026** : croissance UE **1,1 %** ; inflation UE **3,1 %** ; Allemagne **0,6 %**, Italie **0,5 %**, France **0,9 %**.
- **Banque de France (1er juin)** : **révision EN BAISSE de la croissance 2026** annoncée (était +0,9 % en mars) ; **PIB T1 −0,1 %** ; récession exclue « de justesse » ; nouveau chiffre attendu ~mi-juin (non disponible à J98).
- **INSEE IPC mai 2026** : **+2,4 % sur 1 an** (IPCH +2,8 %) — **tirée par l'énergie (+16,8 %)** ; chiffre de juin pas avant le 30 juin.
- **Défaillances d'entreprises FR (BdF)** : **69 392 sur 12 mois = RECORD 35 ANS** ; transport-entreposage **+8,8 %**.
- **Brent 5 juin** : **~93,1 $/b en clôture** (pic intraday ~99 $ le 3 juin, clôture 97,81 $ ; ~95 $ le 4 juin) — **−15 %+ sur le mois** (pic 112,93 $ le 19 mai), soit toujours **~+60-70 % vs pré-crise** (~57 $ fin 2025).
- **Gaz** : **stockage gaz UE à ~41,5 %** (AGSI+, 5-6 juin ; corrige le 38 % qui datait du 23 mai), toujours ~13-15 pts sous la norme 5 ans ; **cible hiver abaissée à 80 %** ; Pays-Bas < 16 %.
- **Ressources critiques non-énergétiques** : **urée** — futures (papier) ~419 $/t (−32 % m/m) MAIS physique livré (tender CFR Inde) ~935-959 $/t ≈ ×2 pré-guerre ; **hélium** (Qatar ~1/3 mondial, co-produit du GNL de Ras Laffan, **force majeure sur 17 % de la liquéfaction**, spot 600-900 $/Mcf) ; **méthanol** (spot Chine ~3000 CNY/t, momentum récent baissier en Asie, Europe ferme — « doublé » en glissement depuis janvier) ; **aluminium** LME cash ~3 736 $/t (pic 3 855 $ le 2 juin, plus haut en 4 ans).

**Côté Liban (3-4 juin)** : un **cessez-le-feu Israël-Liban** a été annoncé le 3 juin à Washington (renouvellement d'une trêve existante, 4e round) — **mais le Hezbollah (Qassem) l'a REJETÉ dès le 4 juin** (« équivaut à une capitulation ») et Israël poursuit ses opérations au sud du Litani : **accord mort-né**. **[FAIT] Un 7e Casque bleu de la FINUL a été tué le 4 juin** (sergent serbe Jovanović, près de Marjeyoun ; attribution non établie) — **ce n'est pas un Français**. Sur les **3 militaires français morts au Moyen-Orient** depuis février, **seuls 2 sont tombés au Liban sous casque bleu FINUL** (Montorio 18/4, Girardin 22/4) ; le 3e (Frion, 12/3) a été tué en Irak (opération Chammal). **Aucune nouvelle perte française** sur la période. Tués au Liban depuis le 2 mars ≈ 3 433-3 500 (~3 200 civils). Mandat FINUL achevé le 31 décembre 2026.

**Côté France (lucide)** :
- Surface stabilisée, détente de marché : Brent papier en baisse (~93 $), **gazole pompe en léger repli (2,047 €/L au 5 juin, SP95 2,032 €/L)**, FNSEA-JA suspendue, plateforme aide grands rouleurs 100 €/véh ouverte le 27 mai (~3M bénéficiaires), aides Lecornu 1,2 Md€.
- **Sous-jacent récessif structurel** : **inflation mai +2,4 % tirée par l'énergie (+16,8 %)**, **PIB T1 −0,1 %** et **révision BdF en baisse de la croissance 2026** (1er juin), confiance ménages au plus bas 3 ans, défaillances record 35 ans, transport en cascade de faillites. **C'est une dégradation, pas une stabilisation.**
- **Point de vigilance imminent** : la **remise carburant de 20 c/L expire fin juin** → risque de **marche d'escalier à la pompe début juillet**. Contre-intuitif : **les ruptures touchent davantage l'ESSENCE que le diesel** (~2 307 stations en difficulté, dont ~411 critiques sur 13 régions ; le gazole est le carburant le moins touché).

**Probabilités J111 (RÉVISÉES — l'accord est signé ; voir [`synthese_J108-J111.md`](synthese_J108-J111.md))** :

- 🟢 **A 48-58 %** (⬆️ vs 35-45 % à J108, devient le **scénario modal et probable**) — l'accord est **signé** (et en avance), son **texte est public**, le **blocus se lève**, le **cessez-le-feu US-Iran est formalisé**, les **prix s'effondrent**. Mais l'**aval personnel du Guide n'est pas confirmé**, le texte est « politique » et vague (engagements « en coulisses » non écrits), le **nucléaire est renvoyé à 60 jours**, et le **terrain reste inchangé** (Ormuz fermé, déminage non commencé). Falsifié (vers A confirmé) si : **réouverture réelle d'Ormuz** mesurée à l'AIS ; OU **déclaration explicite du Guide** validant l'accord ; OU **achèvement du déminage** et levée effective du blocus.
- 🟡 **B 30-38 %** (⬇️ vs 38-46 %, recule — la version « pas d'accord » disparaît) — reste très plausible la version où le cadre signé **n'accouche que d'une réouverture lente / incomplète** ou **échoue sur le fond** (nucléaire à 60 jours, texte vague, Liban) sans rebascule en guerre ouverte. Falsifié si : règlement tenu rouvrant effectivement Ormuz (→ A) OU nouvel incident létal majeur / fermeture pérenne (→ C).
- 🔴 **C 10-16 %** (⬇️ vs 14-22 %) — la **signature + désescalade + chute des prix** plafonnent fortement le potentiel haussier ; **demande mondiale molle**, **thèse Exxon invalidée**. Le **Liban** (Hezbollah de retour au feu le 17 juin) et la **réversibilité assumée par Trump** (menace de re-bombarder « si l'Iran ne se tient pas bien ») restent les déclencheurs résiduels. Falsifié si : assessment Platts/Argus Dated Brent > 130 $ ; OU attaque effective Bab el-Mandeb ; OU embrasement du Liban entraînant l'Iran ; OU incident de mine / dégât confirmé sur un actif US majeur ; OU reprise des frappes US.

**Ce qu'il faut cesser de relativiser** :
- Brent à ~93 $ ne reflète **pas** la réalité physique. [SPÉCULATION] Exxon projetait **150-160 $/b** sur le Dated Brent sous 2-3 semaines : **non matérialisé à J98**, et **aucune assessment Platts/Argus du physique récent n'est disponible** — l'écart papier/physique reste le cœur du diagnostic, mais sans chiffre physique vérifié.
- La douleur a migré vers **l'aval du baril** et vers les **ressources critiques** : urée physique livré ≈ ×2 pré-guerre (tender CFR Inde ~935-959 $/t), aluminium au plus haut en 4 ans, hélium tendu — exactement ce qui touche les ménages, les transporteurs et l'industrie.
- **Stockage gaz UE à ~41,5 %** (corrigé ; le « 38 % » datait du 23 mai) à l'entrée de la saison de remplissage, ~13-15 pts sous la norme 5 ans, cible hiver abaissée à 80 % = **l'hiver 2026-27 est un risque actif**, pas théorique.
- **L'urée physique à ≈ ×2** compromet les rendements de la moisson 2026 et les semis d'automne → impact alimentaire différé 2026-2027.
- Le MOU n'est **pas signé**, le canal indirect est **suspendu**, et même finalisé, **le reopening d'Ormuz prend ≥ 30 jours** (retrait des mines) : retour à la normale au mieux fin juillet/août. Les dommages cumulés sur 98 jours sont **structurels**.

---

## Chiffres clés (26 juin 2026)

| Indicateur | Valeur | Contexte |
|---|---|---|
| **Brent futures** | **~72,6-73,8 $ (26 juin)** | **Plus bas en 4 mois** ; prime de guerre quasi effacée (~+2 % vs pré-guerre) ; hebdo ~−10 %, mensuel ~−21 % ; rebond bref (~+4 %) sur la frappe du 25 juin, résorbé [B2] |
| **WTI** | **~70,4 $ (26 juin) — sous 70 $ en séance (creux ~69,63 $)** | 1er passage sous 70 $ depuis début mars [B2] |
| **Dated Brent (spot physique)** | **NON établi (gap persistant)** | Aucune assessment Platts/Argus ouverte ; impossible de mesurer si la prime physique se dégonfle au rythme du papier [—] |
| **Flux Ormuz** | **Réouverture réelle mais CONTESTÉE et réversible — comptages irréconciliables** | CENTCOM/MarineTraffic **55-70 transits/j** (record depuis le 1er mars, ~75 % du préconflit) vs AIS (straits.live) **~5/j** (« Closed ») ; navigation « dark » ; couloir nord miné, couloir sud omanais contesté ; **re-fermeture CGRI le 20 juin** ; déminage 40-50 j non quantifié [B2] |
| **Blocus naval US** | **LEVÉ (18 juin, CENTCOM)** | Toutes opérations de blocus cessées (clause 4) ; 3 pétroliers iraniens + 3 saoudiens ressortis (1er brut iranien en ~2 mois) [A1] |
| **Accord US-Iran** | **Signé (17 juin) — en application HEURTÉE** | Aval du Guide **conditionnel** (18-19 juin) ; General License X (22 juin, 60 j) ; **litige avoirs gelés** (séquestre US vs libre usage) ; **AIEA niée par Baghaei** ; talks nucléaires ouverts (21 juin) puis « en pause » ; **nouveau verrou : la tenue effective** [B2] |
| **Incident maritime** | **Frappe sur l'*Ever Lovely* (25 juin)** | Porte-conteneurs Evergreen (pavillon Singapour) touché sur la route omanaise ; **pas de victime** ; attribution CGRI par responsables US (non confirmée) ; **OMI suspend l'évacuation des ~11 000 marins (26 juin)** [B2/B3] |
| **SPR US** | **~331,2 mb (−9,06 mb, 19 juin) — plus bas depuis 1983** | ~84 mb sortis depuis mars ; les US drainent malgré la désescalade [A1] |
| **Stocks brut commercial US** | **−6,1 mb à 412,1 mb (sem. au 19 juin)** | **10ᵉ baisse hebdo consécutive** ; distillats ~−10 % vs moyenne 5 ans [A1] |
| **Stockage gaz UE** | **~46,4 % rempli (24-25 juin)** | +~1,1 pt vs J111 ; sous la norme saisonnière ; TTF ~41 €/MWh [B2] |
| **OPEP+** | **+188 000 b/j pour juillet (7 juin, sans EAU)** | Prochaine réunion **5 juillet** ; dénoue ses coupes dans un marché qui se retourne à la baisse [B2] |
| **Prévisions banques (Brent)** | **Coupes : Goldman T4 80, Citi 2027 65, Morgan Stanley T3 90** | Récit AIE « excédent 2027 » ; caveat Goldman > 130 $ si Ormuz perturbé jusqu'en 2027 [B2] |
| **Aluminium (LME cash)** | **~3 119 $/t (24 juin) — nouveau plus bas** | Sous le creux du 27 mars ; la réouverture du Golfe écrase la prime [B2] |
| **Urée / engrais azotés** | **~360 $/t — détente confirmée** | Exports chinois, retour de l'Inde, **UE suspend ses droits urée/ammoniac** [B2] |
| **Hélium** | **Toujours HS** | Ras Laffan à l'arrêt ; +40 %+ ; rationnement diagnostique (IRM) — seul cas de rationnement [B2] |
| **Gazole France (pompe)** | **~1,891 €/L (25 juin)** | −8,1 ct/L/sem ; un plein 40 L ~3 € moins cher que le 18 juin ; SP95-E10 ~1,890 €/L [B2] |
| **Plafonnement TotalEnergies** | **Maintenu seulement dans ~1 200 stations rurales** | ~2 300 déplafonnées (marché déjà à 1,80-1,90 €/L) — signal de normalisation [B2] |
| **Aide « grands rouleurs » 100 €** | **Guichet ouvert jusqu'au 31 juillet** | 898 k demandes / 668 k payées au 15 juin (corrige la baseline « clos le 15 juin ») [B2] |
| **Croissance FR 2026 (BdF / INSEE)** | **BdF 0,5 % / INSEE 0,7 % (FMI 0,7 %)** | Inchangé vs J111 ; IPC provisoire de juin attendu ~30 juin [A1] |
| **Morts France** | **4 militaires — 4ᵉ confirmé (Florian Gilet)** | Gilet (8e RPIMa, tir accidentel, hors FINUL, ~10 juin) ; **bilan FINUL de combat reste 3** (Frion, Montorio, Girardin) [A1/B2] |
| **Liban** | **Cumul ~3 912 morts (19 juin)** | Renouvellement de cessez-le-feu (19 juin, fragile) ; Israël garde la zone ~40 km ; principal vecteur d'escalade résiduel [B2/B3] |
| **Force majeure Qatar (Ras Laffan)** | **Toujours en vigueur (mi-août)** | ~17 % de la liquéfaction HS ; retour « normal en semaines » hors usine endommagée [B2] |

---

## Structure du projet

| Fichier | Contenu |
|---|---|
| `CLAUDE.md` | Instructions pour Claude Code — rôle, contexte, workflow de mise à jour |
| `index.md` | Ce fichier — vue d'ensemble et synthèse des 3 scénarios |
| `scenario_optimiste.md` | Scénario A (40-50 %) — Accord US-Iran signé — réouverture d'Ormuz contestée et réversible |
| `scenario_realiste.md` | Scénario B (35-45 %) — Enlisement / « accord creux » : réouverture heurtée, normalisation lente |
| `scenario_pessimiste.md` | Scénario C (12-18 %) — Choc de prix physique + escalade maritime (Bab el-Mandeb / Liban) |
| `calendrier_penuries.md` | Calendrier prévisionnel des pénuries S19→S30 (4 mai → 26 juillet 2026) — 41 produits sous scénario B |
| `impacts_agricoles.md` | Impacts agricoles du blocage d'Ormuz — du champ à l'assiette (intrants, fret, sécurité alimentaire, prix conso) + prospective 2026-2029 + focus France |
| `infrastructures_europe.md` | Tables raffineries, dépôts, ports, UGS, GNL, pipelines + days of cover par pays |
| `sources.md` / `sources_infrastructures*.md` | Tableaux des sources OSINT classées par fiabilité et domaine |
| `app/` | Application web — 9 dashboards HTML statiques (Centre de pilotage, cartes, dépendances, ressources, impacts agricoles, stocks) |

---

## Synthèse des trois scénarios

### 🟢 Scénario A — « L'accord US-Iran signé — réouverture d'Ormuz contestée et réversible » (40-50 %)

**MAJ J119 — A reste modal mais sa borne recule (40-50 %, vs 48-58 % à J111)** : le signé **s'applique** (blocus levé 18 juin, Guide validé conditionnellement 18-19 juin, licence pétrolière US 22 juin) mais la réouverture d'Ormuz s'est révélée **contestée et réversible** (re-fermeture CGRI 20 juin, frappe *Ever Lovely* 25 juin, OMI suspend l'évacuation 26 juin). Détail dans [`synthese_J111-J119.md`](synthese_J111-J119.md).

**En bref** : la pression économique sur l'Iran (récession −6,1 %, rial effondré, 1+ M emplois perdus) et la médiation (Pakistan, Qatar/Doha, Chine) finissent par produire un accord-cadre. À J111, il est **signé** : paraphe électronique 14-15 juin (Vance + Ghalibaf), **signature présidentielle le 17 juin** (Trump à Versailles en marge du G7, Pezeshkian à Téhéran), **texte intégral des 14 points publié le 17 juin**, **blocus naval en cours de levée**. Le mémorandum prévoit la fin du blocus US sous 30 j (§4), le **déminage d'Ormuz par l'Iran sous 30 j** (§5), la dilution sur place de l'uranium (440,9 kg) sous AIEA (§8), un fonds de reconstruction « d'au moins 300 Md$ » (§6) et le déblocage d'avoirs gelés (§11, non chiffré) — le nucléaire restant renvoyé à une négociation sur 60 j (§3).

**Pour la France** : gazole vers 1,90-2,10 €/L cet été puis décrue vers 1,80-1,90 €/L à l'automne ; inflation contenue 2,0-2,4 % ; croissance 2026 +0,7 à +1,0 % ; surcoût ménage 250-400 €/an.

**Pourquoi A bondit et devient modal (J108 : 35-45 %)** : l'accord est désormais **signé** (et en avance sur la date prévue), son **texte est public** (les verrous « non signé » et « versions incompatibles » sautent), le **blocus se lève** et le **cessez-le-feu US-Iran est formalisé** par le texte. Plafond : l'**aval personnel du Guide Mojtaba Khamenei n'est pas confirmé** par Téhéran (CSSN approuve, Guide muet), le texte est de l'aveu même des US « politique » et vague (engagements « en coulisses » non écrits), le **nucléaire est renvoyé à 60 j**, et surtout **le terrain reste inchangé** (Ormuz fermé, déminage non commencé) — c'est la 4ᵉ annonce de réouverture.

**Indicateur de falsification (ce qui confirmerait A)** : **réouverture réelle d'Ormuz** mesurée à l'AIS ; OU **déclaration explicite du Guide** validant l'accord ; OU **achèvement du déminage** et levée effective du blocus (communiqué CENTCOM).

**Le scénario peut échouer si** : (1) la réouverture matérielle d'Ormuz tarde ou échoue malgré la signature (→ retour B) ; (2) refus tardif du Guide ou échec des pourparlers nucléaires à 60 j ; (3) embrasement du Liban entraînant l'Iran (→ vers C). À ce stade, A est **largement réalisé sur le papier mais pas encore résolu tant que les navires ne passent pas et que l'aval du Guide n'est pas confirmé**.

---

### 🟡 Scénario B — « L'enlisement / "accord creux" : réouverture heurtée, normalisation lente » (35-45 %)

**MAJ J119 — B en hausse (35-45 %, vs 30-38 % à J111)** : la « réouverture heurtée / accord creux » **s'est matérialisée** dans la fenêtre (Ormuz re-fermé par le CGRI le 20 juin puis frappe sur l'*Ever Lovely* le 25 juin, litiges avoirs gelés + AIEA, talks « en pause », comptages de transits irréconciliables) — **B se rapproche de A**.

**En bref** : la version « pas d'accord » a disparu (le texte est signé et publié), mais reste très plausible la variante où le cadre signé **n'accouche que d'une réouverture lente / incomplète** ou **échoue sur le fond** (nucléaire à 60 j, texte vague, Liban) sans rebascule en guerre ouverte. La guerre maritime reste de facto institutionnalisée tant que le détroit n'est pas matériellement rouvert (déminage non commencé), et la tension physique s'accumule sous des prix papier en baisse.

**Pour la France** : gazole durablement élevé (~1,93-2,00 €/L au 16-17 juin, avec **risque de marche d'escalier à l'expiration de la remise fin juin**) ; inflation 2,5-3,5 % (déjà +2,4 % en mai) ; croissance 0,5-0,7 % (BdF/INSEE) ; surcoût ménage 600-1 000 €/an ; **ruptures plus marquées sur l'essence que sur le diesel** ; faillites en cascade dans le transport. Risque social fragmenté mais amorti (aides Lecornu).

**Pourquoi B recule mais reste plausible (J108 : 38-46 %, ⬇️)** : (1) la signature étant acquise, la branche « pas d'accord » disparaît ; (2) mais même signée, la **réouverture matérielle d'Ormuz prendra des semaines/mois** (déminage 30-50 j) et la solidité de l'accord repose sur des engagements « en coulisses » invérifiables, le nucléaire restant à négocier ; (3) les dommages structurels (stocks, récoltes 2027, faillites) persistent indépendamment du dénouement. B n'est plus le scénario modal — c'est désormais A.

**Indicateur de falsification (ce qui ferait sortir de B)** : un **règlement tenu rouvrant effectivement Ormuz** (→ A) ; OU **Bab el-Mandeb fermé** / embrasement du Liban entraînant l'Iran / **Dated Brent physique > 150 $ confirmé** par une assessment Platts/Argus (→ C).

**Le risque majeur de ce scénario** : (1) [SPÉCULATION] si la prime physique remontait, le Dated Brent pourrait bondir (thèse Exxon, **non matérialisée à J111**), faisant basculer B vers C par le prix ; (2) la **sortie des EAU de l'OPEP** réduit la capacité de réponse à un nouveau choc ; (3) le **stockage gaz UE à ~45,3 %** (~13-15 pts sous la norme) menace l'hiver 2026-27 ; (4) le **Liban** (Hezbollah de retour au feu le 17 juin) reste le principal vecteur d'escalade résiduel.

---

### 🔴 Scénario C — « Choc de prix physique + escalade maritime / régionale » (12-18 %)

**MAJ J119 — C en légère hausse (12-18 %, vs 10-16 % à J111)** : les **incidents cinétiques redeviennent réels** (frappe *Ever Lovely* 25 juin, OMI suspend l'évacuation, menaces radio du CGRI, re-fermeture d'Ormuz 20 juin, fracture civilo-militaire iranienne, « *hit harder* » de Trump) ; mais talks en cours + Brent au plus bas en 4 mois plafonnent le haussier (pas de mort dans la frappe).

**En bref** : deux pathways, toujours présents mais fortement plafonnés :
1. **Pathway de prix physique** : la prime physique remonte et le Dated Brent bondit → [SPÉCULATION] 150-160 $/b (thèse Exxon, **non matérialisée à J111**), puis 145-220 $+ si panique. Plafonné par la signature de l'accord, la désescalade et la demande molle.
2. **Pathway maritime / régional** : la **menace iranienne d'étendre le blocus à Bab el-Mandeb** (restée verbale à J111) se concrétise, OU **l'embrasement du Liban entraîne l'Iran** (Hezbollah de retour au feu le 17 juin), OU un navire/destroyer touché avec pertes US/européennes relance les frappes et une fermeture pérenne d'Ormuz.

**Pour la France** : gazole 2,60-3,60 €/L ; pénurie effective de diesel avec rationnement préfectoral ; inflation 4,5-6,5 % ; récession (−1,0 à −0,3 %) ; chômage 9-10,5 % ; surcoût ménage 1 300-2 700 €/an ; crise sociale majeure ; bouclier carburant d'urgence (15-25 Md€) avec dégradation de la note souveraine probable.

**Pourquoi C recule encore (J108 : 14-22 %, ⬇️)** : la **signature de l'accord**, la **désescalade côté US-Iran** (cessez-le-feu formalisé, blocus en cours de levée) et la **chute des prix** (Brent sous 79 $) plafonnent fortement le potentiel haussier ; la **thèse Exxon reste invalidée** et la demande mondiale recule. Le **Liban** (Hezbollah de retour au feu le 17 juin) et la **réversibilité assumée par Trump** (menace de re-bombarder « si l'Iran ne se tient pas bien ») maintiennent C au-dessus de zéro.

**Indicateur de falsification (ce qui ferait basculer VERS C)** : une **assessment Platts/Argus du Dated Brent > 150 $** ; OU une **attaque effective sur Bab el-Mandeb** ; OU un **embrasement du Liban entraînant l'Iran** ; OU un **dégât confirmé par imagerie tierce sur un actif US majeur** ; OU un **incident de mine** ; OU une **reprise des frappes US**.

---

## Tableau récapitulatif

| Indicateur | 🟢 A (40-50 %) | 🟡 B (35-45 %) | 🔴 C (12-18 %) |
|---|---|---|---|
| **Brent futures** | 90-100 $ → 75-85 $ T4 | 95-115 $ → 85-100 $ T4 | 130-180+ $ |
| **Dated Brent (physique)** | 100-110 $ → 80-90 $ T4 | 110-130 $ (falaise Exxon 150-160 $ possible) | 150-220+ $ |
| **Gazole FR** | 2,00-2,15 €/L → 1,85 €/L | 2,15-2,40 €/L (+ saut fin juin) | 2,60-3,60 €/L |
| **Inflation FR 2026** | 2,0-2,4 % | 2,5-3,5 % | 4,5-6,5 % |
| **PIB FR 2026** | +0,7 à +1,0 % | +0,3 à +0,8 % | −1,0 à −0,3 % |
| **Chômage** | ~7,8-8,2 % | 8,2-8,7 % | 9,0-10,5 % |
| **Surcoût ménage/an** | 250-400 € | 600-1 000 € | 1 300-2 700 € |
| **Spread OAT-Bund** | 50-65 bps | 65-85 bps | 90-130 bps + dégradation note |
| **Pénurie diesel** | Non | Ponctuelle, pénurie SP95 émergente | **Rationnement préfectoral** |
| **Stockage gaz UE hiver** | reconstitution OK | sous norme, plan sobriété probable | **rationnement gaz industrie** |
| **Coût budgétaire État** | 3-7 Md€ | 12-20 Md€ (1,2 Md€ déjà engagés) | 25-45 Md€ |

---

## Échéances critiques (mises à jour J119)

| Date | Événement | Statut / Impact |
|---|---|---|
| ~~14-15 juin~~ | Paraphe **électronique** du mémorandum US-Iran | ✅ **Observé** [B2] : côté US le VP Vance, côté iranien le président du Parlement Ghalibaf |
| ~~16 juin~~ | Brent sous 80 $ + projections **Banque de France** | ✅ **Observé** [A1/B2] : Brent settle ~78,96 $ (plus bas en 3 mois) ; BdF croissance 2026 0,5 %, IPCH 2,5 % |
| ~~17 juin~~ | **Signature présidentielle** US-Iran + **texte des 14 points publié** + clôture G7 d'Évian | ✅ **Observé** [B2/A1] : Trump signe à Versailles, Pezeshkian à Téhéran ; mission Ormuz « France-RU » ; INSEE croissance 0,7 % ; Fed pause 3,50-3,75 % |
| ~~17 juin~~ | **Hezbollah reprend le feu** au Sud-Liban | ✅ **Observé** [B2] : ≥10 roquettes + 2 drones, 5 soldats IDF blessés ; cumul Liban 3 826 morts |
| ~~18 juin~~ | **Blocus naval US levé** (CENTCOM) | ✅ **Observé** [A1] : 3 pétroliers iraniens + 3 saoudiens ressortis (1er brut iranien en ~2 mois) |
| ~~18-19 juin~~ | **Aval (conditionnel) du Guide Mojtaba Khamenei** | ✅ **Observé** [B2] : « permission » accordée « malgré des réserves » — dernier verrou de J111 levé |
| ~~20 juin~~ | **L'Iran (CGRI) re-décrète la fermeture d'Ormuz** | ✅ **Observé** [B2] : démenti par son propre MAE et par CENTCOM ; réouverture contestée/réversible |
| ~~21 juin~~ | **Ouverture des pourparlers nucléaires (Suisse)** | ✅ **Observé** [B2] : puis « en pause » après menace de Trump ; AIEA niée par Baghaei |
| ~~22 juin~~ | **General License X (Trésor US, 60 j)** | ✅ **Observé** [B2] : exemption pétrolière ~21 août, ~67 Mb libérés ; litige avoirs gelés (23 juin) |
| ~~25 juin~~ | **Frappe sur l'*Ever Lovely*** (route omanaise) | ✅ **Observé** [B2/B3] : pas de victime ; attribution CGRI (US, non confirmée) ; **OMI suspend l'évacuation (26 juin)** |
| **Fin juin** | **Expiration remise carburant 20 c/L** | Risque marche d'escalier début juillet (atténué par la décrue des prix) |
| **~28-30 juin** | **CP GPL saoudien de juillet** | Non publié ; statut indéterminé |
| **30 juin** | INSEE IPC juin | Premier point d'inflation post-signature |
| **5 juillet** | **Réunion ministérielle OPEP+** | Quotas août |
| **~17 juillet** | **Fin de la fenêtre de levée du blocus US (§4) + déminage Iran (§5) sous 30 j** | Déminage estimé 40-50 j, non quantifié au 26 juin |
| **~mi-août** | **Fin de la fenêtre de négociation nucléaire (§3, 60 j)** | Pourparlers ouverts le 21 juin ; échec → retour B/C ; volet le plus incertain |
| **Novembre 2026** | Midterms US | Pression Trump pour deal préalable |
| **31 décembre 2026** | Fin du mandat FINUL | Décision engagement français post-FINUL |

---

## Évolution récente des probabilités (J89 → J119)

| Scénario | 6 juin (J98) | 10 juin (J103) | 13 juin (J106) | 15 juin (J108) | 18 juin (J111) | **26 juin (J119)** | Tendance J111→J119 |
|---|---|---|---|---|---|---|---|
| 🟢 A — Optimiste | 8-15 % | 8-15 % | 22-32 % | 35-45 % | 48-58 % | **40-50 %** | ⬇️ (le signé **s'applique** mais la réouverture s'est révélée **réversible** — A reste modal, borne réduite) |
| 🟡 B — Réaliste | 60-66 % | 60-66 % | 44-52 % | 38-46 % | 30-38 % | **35-45 %** | ⬆️ (la « réouverture heurtée / accord creux » **s'est matérialisée** — B se rapproche de A) |
| 🔴 C — Pessimiste | 22-30 % | 22-30 % | 20-28 % | 14-22 % | 10-16 % | **12-18 %** | ⬆️ (incidents cinétiques **réels** : *Ever Lovely*, menaces CGRI, « hit harder » de Trump) |

**Lecture analytique J119** : ce qui s'est *matérialisé* dans la fenêtre 18-26 juin n'est ni l'accord propre (A) ni la guerre (C), mais une **réouverture heurtée, incomplète et incidentée**. Le signé a **commencé à s'appliquer** — blocus naval US levé (18 juin), aval (conditionnel) du Guide Mojtaba Khamenei (18-19 juin), General License X (22 juin), pourparlers nucléaires ouverts (21 juin) — **puis a montré sa réversibilité en moins de 72 h** : re-fermeture d'Ormuz par le CGRI (20 juin), frappe sur l'*Ever Lovely* (25 juin), OMI qui suspend l'évacuation (26 juin), litige sur les avoirs gelés et l'AIEA. D'où une **A en léger recul de borne** (40-50 %, vs 48-58 %) — elle reste modale (l'accord est réel, le Guide a validé, le blocus est levé) mais l'optimisme de J111 était en avance sur le terrain. **B remonte** (35-45 %) car c'est exactement le scénario qui s'est réalisé (accord creux / normalisation lente et heurtée), et **se rapproche de A**. **C remonte légèrement** (12-18 %) car les incidents cinétiques sont redevenus réels, sans franchir de seuil létal (pas de mort dans la frappe, négociations en cours, prix effondrés). Le statut « ouvert/fermé » d'Ormuz reste un **désaccord de comptage non tranchable** (CENTCOM ~55-70 transits/j vs AIS ~5/j) et le **Dated Brent physique reste inconnu** (gaps assumés). **Recalibrage** : A 40-50 %, B 35-45 %, C 12-18 %.

---

## Insights analytiques avancés (au 6 juin)

### 1. Le marché papier ment : la vraie crise est physique et à l'aval du baril — mais le chiffre physique reste un gap
Brent à ~93 $ (en **baisse** malgré l'escalade) donne une fausse impression de détente. [SPÉCULATION] **Exxon (28 mai) projetait le Dated Brent physique à 150-160 $/b sous 2-3 semaines** : **non matérialisé à J98**, et **aucune assessment Platts/Argus du physique récent n'est disponible** en source ouverte — on ne sait pas où est le prix physique au 6 juin, et il faut l'assumer plutôt que d'inventer un chiffre. Ce qui reste avéré : **la douleur a migré vers l'aval du baril** (gazole, jet, GPL, naphta) et vers les ressources critiques. C'est exactement ce qui frappe le portefeuille des ménages et des transporteurs français — d'où le **gazole pro +29,3 % vs février** et l'**inflation mai +2,4 % tirée par l'énergie (+16,8 %)**.

### 2. Le « couvercle chinois » : le facteur qui retarde (mais n'annule pas) le choc
Le mystère « pourquoi pas de doomsday ? » tient au comportement chinois : **les imports de brut chinois sont tombés à 6,36 Mb/j en mai (−44 % vs février)**, plus bas en ~10 ans, en puisant dans la SPR (la plus grande au monde). Ce coussin est **conjoncturel** : Pékin peut tenir des mois, pas indéfiniment. **Quand il se résorbera, le risque physique pourra se matérialiser** — c'est le principal mécanisme de bascule B → C par le prix, mais il n'est pas acquis à J98. Les raffineries « teapot » chinoises, ciblées par le Trésor US, ont perdu la décote sur le brut iranien.

### 3. La sortie des EAU de l'OPEP : moins d'amortisseurs pour le prochain choc
Les **EAU ont quitté l'OPEP** (1ère réunion sans eux le 3 mai). Avec l'Arabie, les EAU détenaient l'essentiel de la capacité de réserve mondiale (> 4 mb/j). Leur départ **fragilise la capacité collective de répondre à un nouveau choc** : le quota saoudien (10,291 mb/j) dépasse de loin la production réelle (7,76 mb/j). Le marché aborde la suite **avec moins de filets de sécurité**.

### 4. Le gaz : l'hiver 2026-27 devient un risque actif
**Stockage gaz UE à ~41,5 %** (corrigé ; le « 38 % » datait du 23 mai) à l'entrée de la saison de remplissage, ~13-15 pts sous la norme 5 ans, avec une **cible hiver abaissée à 80 %** (Pays-Bas < 16 %). Le **GNL est amputé de ~1/5** (force majeure QatarEnergy sur 17 % de la liquéfaction à Ras Laffan, **prolongée jusqu'à mi-août**, réparation 3-5 ans). Un plan sobriété formel à l'automne (analogue 2022) devient probable en scénario B, et un rationnement industriel possible en C.

### 5. « Au-delà du pétrole » : la crise des ressources critiques non-énergétiques
Ormuz n'est pas qu'une artère pétrolière. **Urée/engrais azotés** : même mensonge du thermomètre que pour le pétrole — le **futures (papier) reflue à ~419 $/t (−32 % m/m)** mais le **physique livré (tender CFR Inde) reste à ~935-959 $/t ≈ ×2 pré-guerre** → **rendements moisson 2026 et semis d'automne compromis** (impact pain/semoule/huile en 2026-2027). **Hélium** : le Qatar fournit ~1/3 du marché mondial comme co-produit du GNL de Ras Laffan (spot 600-900 $/Mcf, Airgas −50 % livraisons, risque IRM). **Méthanol** : spot Chine ~3000 CNY/t (momentum récent baissier en Asie, Europe ferme ; « doublé » en glissement depuis janvier). **Aluminium** LME cash ~3 736 $/t (pic 3 855 $ le 2 juin, plus haut en 4 ans). Voir `app/dependances_ressources_critiques.html`.

### 6. L'escalade militaire 2-6 juin : réelle mais sans bascule
Du 2 au 6 juin, le cycle action-riposte est devenu concret (frappe US sur le *Lexie*, salves iraniennes, frappe de l'aéroport de Koweït, représailles US sur radars côtiers). [SPÉCULATION] L'IRGC a **revendiqué** avoir frappé le QG de la Ve Flotte US à Bahreïn — **revendication DÉMENTIE par CENTCOM**, missiles interceptés, aucun dégât US confirmé : à traiter comme déclaration, pas comme fait. Aucun seuil de bascule n'a été franchi. C'est un **argument pour C** (escalade réelle) **annulé** par le démenti, les interceptions et la baisse du Brent papier — d'où un C **stable**, et un B **renforcé** (ce cycle EST l'enlisement).

### 7. La menace Bab el-Mandeb : restée verbale à J98
La menace iranienne d'**étendre le blocus à Bab el-Mandeb** [SPÉCULATION/B3] **reste verbale** au 6 juin (aucune attaque effective). Si concrétisée (avec relais Houthis), elle **doublerait le verrou maritime** (Ormuz + Bab el-Mandeb), reroutant le trafic Asie-Europe par le Cap et ajoutant 10-20 jours de transit. Une attaque effective sur ce détroit est l'un des **indicateurs de bascule vers C**.

### 8. France : la marche d'escalier de fin juin
La **remise carburant de 20 c/L expire fin juin**. Sur un gazole à 2,047 €/L (5 juin), sa disparition produirait une **marche d'escalier à la pompe début juillet** (+15-25 c/L visibles d'un coup). Contre-intuitif : à J98, **les ruptures touchent davantage l'ESSENCE que le diesel** (~2 307 stations en difficulté, dont ~411 critiques sur 13 régions ; le gazole est le carburant le moins touché) — le « risque diesel » est aujourd'hui un risque de prix et de logistique, pas (encore) de pompe à sec. C'est le **déclencheur social latent** le plus identifiable du calendrier, malgré la suspension FNSEA-JA et les amortisseurs Lecornu.

---

## Recommandations pour les ménages français

### Niveau actuel de vigilance : 🟠 ÉLEVÉ STRUCTUREL (en voie de détente conditionnelle) — Accord US-Iran **signé et en cours d'application** (blocus naval US levé le 18 juin, aval conditionnel du Guide, licence pétrolière US 60 j), MAIS réouverture d'Ormuz **contestée et réversible** (re-fermeture CGRI 20 juin, frappe sur l'*Ever Lovely* 25 juin, OMI suspend l'évacuation), **tenue de l'accord non acquise** (litige avoirs gelés, AIEA niée, nucléaire à 60 j), Liban toujours actif (cumul ~3 912 morts) ; stockage gaz UE ~46,4 % sous la norme ; remise carburant qui expire fin juin. Détente de marché réelle (Brent au plus bas en 4 mois, baisse à la pompe) à ne pas surinterpréter tant que les navires ne passent pas de façon sûre et continue.

> Détail produit par produit avec dates butoirs d'achat : voir [calendrier_penuries.md](calendrier_penuries.md).

1. **Carburant** : maintenir le réservoir au-dessus de la moitié. **Faire le plein / remplir jerricans homologués AVANT FIN JUIN** (expiration de la remise 20 c/L). Déposer la demande **aide grands rouleurs 100 €/véh** sur impots.gouv.fr si éligible. À noter : les ruptures touchent aujourd'hui surtout l'essence, pas le diesel.
2. **Chauffage** : **commander le fioul AVANT FIN JUIN** (économie + délais de livraison qui s'allongent). Gaz cher et **l'hiver 2026-27 est un risque actif** (stockage UE ~46,4 %, sous la norme, cible hiver abaissée à 80 %).
3. **Alimentation** : stock de 2-3 semaines de base. **Récoltes 2026/2027 compromises** par l'urée physique livré ≈ ×2 pré-guerre : impact différé sur pain, semoule, huile. Le risque alimentaire reste logistique (camions diesel + AdBlue), pas agricole à ce stade.
4. **Finances** : garder 200-300 € en espèces ; reporter les achats lourds non essentiels ; dégradation de la note souveraine latente.
5. **Information** : **ne pas se fier au seul Brent papier (~73 $)** — sa chute reflète le retour de l'offre, pas une normalisation du terrain (Ormuz reste contesté, re-fermé le 20 juin, un navire frappé le 25). La tension reste physique et à l'aval du baril, et **le chiffre du physique récent n'est toujours pas connu** (aucune assessment Platts/Argus). L'accord est signé et en cours d'application, mais attendre la **réouverture réelle et durable d'Ormuz** (données AIS), pas les seules déclarations.
6. **Dirigeants TPE/PME** : trésorerie tendue (défaillances record 35 ans, transport +8,8 %) ; sécuriser les créances ; activer les aides ASP/Bercy ; anticiper le saut de coût gazole de fin juin.

---

*Document mis à jour le 26 juin 2026 (J119). Prochaine mise à jour recommandée : sur tout signal de **réouverture réelle et durable d'Ormuz** (AIS, pas déclarations), de **nouvelle frappe CGRI** ou de **reprise des escortes/évacuations OMI**, puis 30 juin (IPC juin), ~28-30 juin (CP GPL saoudien), 5 juillet (réunion OPEP+), ~17 juillet (échéances §4/§5 du mémorandum) et ~mi-août (fin de la fenêtre nucléaire de 60 j). **Avertissement méthodologique** : ce document écarte délibérément les sources orientées au profit de Reuters, AFP, Bloomberg, FT, CNBC, Fortune, Axios, Banque de France, INSEE, Commission UE, BCE, IMF, IEA, EIA, World Bank/IFPRI, et analyses Tier 1 (Goldman Sachs, JPMorgan, Morgan Stanley).*
