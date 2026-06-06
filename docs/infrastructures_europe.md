# Infrastructures énergétiques et réserves stratégiques — Europe (France + voisins majeurs)
### État au 3 juin 2026 (J95 de la crise du détroit d'Ormuz)

> **Périmètre** : France + Allemagne + Belgique + Pays-Bas + Luxembourg + UK + Italie + Espagne + Suisse + Portugal + Pologne + Croatie + Roumanie + Autriche (corridor TAP/Haidach).
>
> **Sources principales** : SAGESS/CPSSP (FR), EBV (DE), COVA (NL), ASEVA (BE), CSO/DESNZ (UK), OCSIT (IT), CORES (ES), Carbura (CH), APMS (LU), AGSI+/ALSI/GIE (gaz), ENTSOG, IEA Oil Market Report avril-mai 2026, opérateurs (TotalEnergies, Shell, BP, Eni, Repsol, Snam, Enagás, Storengy, Téréga, Stogit, Centrica, Fluxys, ADNOC, Aramco), médias spécialisés (Argus, S&P Global, Bloomberg, Reuters, Al Jazeera, Hydrocarbon Processing, LNG Prime, Pipeline Journal).
>
> **Carte interactive** : [`app/carte_infrastructures_europe.html`](app/carte_infrastructures_europe.html)
> **Référencement détaillé** : [[sources_infrastructures_europe]]

---

## 1. Méthodologie

### Codification statuts

| Code | Couleur carte | Signification |
|---|---|---|
| `operational` | 🟢 vert | Production / fonctionnement normal (>85 % capacité ou >50 % remplissage) |
| `reduced` | 🟡 jaune | Production sensiblement réduite OU stock sous la norme saisonnière |
| `paused` | 🟠 orange clair | Conversion / maintenance / sevrage volontaire |
| `shutin` | 🟠 orange foncé | Arrêt préventif lié au conflit |
| `damaged` | 🔴 rouge | Frappe drone/missile, partiellement opérationnel |
| `destroyed` | 🟥 rouge foncé | Neutralisé pour longue durée |

### Codification niveau de remplissage (anneau autour de l'icône carte)

| Bande | Seuils | Couleur |
|---|---|---|
| Haut | ≥ 70 % | 🟢 vert |
| Moyen | 50-70 % | 🟡 jaune |
| Bas | 30-50 % | 🟠 orange |
| Critique | < 30 % | 🔴 rouge |
| Non applicable | pipelines, raffineries | gris |

### Conventions

- **Capacités** : raffineries en kb/j (kilobarrels/jour), dépôts et terminaux en Mm³ ou kt, UGS gaz en bcm working volume (ou TWh), pipelines en kb/j (pétrole) ou bcm/an (gaz).
- **Coordonnées GPS** : précision 0,01° (~1,1 km).
- **Niveaux de stock J95** : pour les **stocks pétroliers stratégiques**, niveaux non publiés en temps réel — estimations à partir des dernières données IEA Oil Stocks + déduction des releases coordonnées (400 Mb le 11 mars 2026 + 53,3 Mb tirage US le 12 mai + **9,9 Mb hebdo supplémentaire au 14 mai, nouveau record absolu**). **SPR US à 365,1 mb (semaine du 22 mai)** = plus bas pluriannuel, en repli continu. Pour les **UGS gaz**, données AGSI+ au 27 mai-2 juin 2026 (publication quasi-quotidienne) ; stockage UE **38 % rempli**, objectif réglementaire **90 % au 1er novembre** désormais jugé très difficilement atteignable au rythme actuel d'injection.
- **Dates** : format jj mois aaaa, jour du conflit J = nombre de jours depuis 28 février 2026.

---

## 2. Sommaire exécutif — Synthèse par pays

### 2.1 Capacités installées

| Pays | Raffinage (kb/j) | Stock stratégique pétrole (Mt) | Jours couverture conso | UGS gaz (bcm) | Terminaux GNL (bcm/an) |
|---|---:|---:|---:|---:|---:|
| **France** | ~1 060 (+ 2 bio) | 17,0 (≈124 Mb) | ~90-100 j | ~11,5 | 34,25 |
| **Allemagne** | ~1 950 | 20,0 (≈147 Mb) | ~95 j | ~23 | 25-29 |
| **Pays-Bas** | ~1 295 | 4,1 (≈30 Mb) | ~95 j | ~14 | ~24 |
| **Belgique** | ~785 | 3,3 (≈24 Mb) | ~90 j | 0,77 | 9 |
| **Luxembourg** | 0 | 0,15-0,2 | ~70-90 j | 0 | 0 |
| **Royaume-Uni** | ~825 (post-restruct) | 7-8 (≈50-58 Mb) | ~67-75 j | ~1,8 | 52 |
| **Italie** | ~1 300 | 12 (≈76 Mb) | ~90 j | ~17 | 28 |
| **Espagne** | ~1 480 | 16-17 (≈120 Mb) | ~92 j | ~5,5 | 60 |
| **Portugal** | 220 | n/d | ~90 j | 0 | 7,9 |
| **Pologne** | ~486 | n/d | n/d | ~3,2 | 8,3 |
| **Suisse** | 68 | 3,5 (produits) | ~135 j (essence/diesel) | 0 | 0 |
| **Croatie** | n/d | n/d | n/d | n/d | 6,1 |
| **Total périmètre** | **~9 480** | **~84-87 Mt** (~620 Mb) | **moyenne ~90 j** | **~77 bcm** | **~250 bcm/an** |

> **Lecture** : avec ~84 Mt de stocks pétroliers stratégiques, le périmètre tient en théorie ~90 jours de consommation. Au 15 mai, 9-10 % des stocks ont déjà été engagés (libérations coordonnées). La marge restante varie fortement par pays.

### 2.2 Niveaux de remplissage — gaz UGS au 2 juin 2026

| Pays / agrégat | % rempli | TWh stockés | Écart à la norme 5 ans (55-58 % début juin) | Source |
|---|---:|---:|---:|---|
| **UE agrégé** | **~38 %** | ~430 TWh | **−18 à −20 pts** | GIE/AGSI+ 02/06/2026 |
| Italie | 54,05 % | ~110 | −1 pt | AGSI |
| Espagne | 66,40 % | ~22 | +11 pts | AGSI |
| Autriche | 42,53 % | ~40 | −12 pts | AGSI |
| Allemagne | **27,99 %** | ~69 | **−27 pts** | AGSI |
| France | ~35-40 % (estim.) | ~46 | −17 pts | AGSI + Storengy/Téréga |

> **Risque hivernal 2026-2027** : pour atteindre 90 % au 1er novembre, l'Europe doit injecter ~**3 400 GWh/j**. Au 2 juin (UE 38 %), le rythme d'injection reste insuffisant. **Objectif 90 % très probablement inatteignable** au rythme actuel ; aggravé par la force majeure QatarEnergy (17 % de la liquéfaction de Ras Laffan, réparation estimée 3-5 ans) qui ampute durablement l'offre GNL mondiale.

---

## 3. Tables détaillées par catégorie

### 3.1 Raffineries — France (8 sites)

| Site | Lat,Lon | Opérateur | Capacité (kb/j) | Statut | Dernière MAJ | Sources |
|---|---|---|---:|---|---|---|
| Donges | 47.31, -2.07 | TotalEnergies | 231 | operational | 2026-05 | totalenergies.com, wikipedia |
| Gonfreville-l'Orcher (Normandie) | 49.49, 0.27 | TotalEnergies | 253 | operational | 2026-05 | euronews 27-04-2026 |
| Feyzin | 45.67, 4.85 | TotalEnergies | 119 | operational | 2026-05 | totalenergies.com |
| Port-Jérôme-Gravenchon | 49.47, 0.51 | North Atlantic Energies | 244 | operational | 2026-05 | S&P Global 28-11-2025 |
| Fos-sur-Mer | 43.43, 4.94 | Rhône Énergies (Trafigura) | 133 | operational | 2026-05 | ogj.com |
| Lavera | 43.39, 4.99 | Petroineos | 210 | operational | 2026-05 | petroineos.com |
| La Mède (bio) | 43.41, 5.10 | TotalEnergies | 10 eq. HVO/SAF | operational | 2026-05 | totalenergies.com |
| Grandpuits (bio) | 48.59, 3.06 | TotalEnergies | 400 kt feedstock | operational | 2026-05 | totalenergies.com |

**Total France conventionnel : ~1 190 kb/j** (~58 Mt/an).

### 3.2 Raffineries — Allemagne (11 sites)

| Site | Lat,Lon | Opérateur | Capacité (kb/j) | Statut | Note clé |
|---|---|---|---:|---|---|
| MiRO Karlsruhe | 49.05, 8.32 | Shell/P66/Eni/Rosneft (tutelle) | 310 | operational | Plus grande de DE |
| Gelsenkirchen | 51.55, 6.97 | BP (cession) | 160 (réduit) | reduced | -100 kb/j fin 2025 |
| Leuna | 51.28, 11.99 | TotalEnergies | 240 | operational | Alim. Rostock |
| **PCK Schwedt** | 53.09, 14.23 | PCK (Rosneft tutelle) | 230 | **reduced** | Vulnérable Druzhba+Kazakh |
| Bayernoil (Vohburg) | 48.78, 11.62 | BP/Varo/Rosneft | 215 | operational | Alim. TAL |
| Burghausen | 48.16, 12.83 | OMV | 78 | operational | Coking, Bavière |
| Heide | 54.05, 9.05 | Klesch | 90 | operational | Arbitrage Klesch en cours |
| Holborn Hamburg | 53.49, 9.95 | Oilinvest/Tamoil | 105 | operational | Bio HVO 2027 |
| Lingen | 52.51, 7.31 | BP | 95 | operational | Alim. NWO |
| Shell Godorf | 50.85, 6.99 | Shell | ~190 | operational | Apres fermeture Wesseling |
| Shell Wesseling | 50.83, 6.97 | Shell | 0 (était 137) | **paused** | Conversion lubrifiants |

**Total Allemagne actif : ~1 950 kb/j** dont 137 kb/j retirés (Wesseling) + 100 kb/j réduits (Gelsenkirchen).

### 3.3 Raffineries — Pays-Bas + Belgique + UK + Italie + Espagne + autres

| Site | Pays | Lat,Lon | Opérateur | Capacité (kb/j) | Statut |
|---|---|---|---|---:|---|
| **Shell Pernis** | NL | 51.88, 4.39 | Shell | **404** | operational |
| ExxonMobil Botlek | NL | 51.89, 4.30 | ExxonMobil | 191 | operational |
| Zeeland Refinery | NL | 51.43, 3.69 | TotalEnergies + Lukoil 45% | 180 | operational |
| BP Europoort | NL | 51.95, 4.10 | BP | 400 | operational |
| Gunvor Rotterdam | NL | 51.94, 4.13 | Gunvor | ~120 | operational |
| TotalEnergies Antwerp | BE | 51.28, 4.31 | TotalEnergies | 338 | operational |
| ExxonMobil Antwerp | BE | 51.29, 4.30 | ExxonMobil | 320-370 | operational |
| Gunvor Antwerp | BE | 51.27, 4.30 | Gunvor | 107 | operational |
| ATPC Vitol Antwerp | BE | 51.26, 4.32 | Vitol | ~35 | operational |
| Fawley | UK | 50.83, -1.34 | ExxonMobil | 270 | operational |
| Pembroke | UK | 51.69, -5.04 | Valero | 270 | operational |
| Stanlow | UK | 53.28, -2.85 | EET Fuels | 240 | operational |
| Humber | UK | 53.64, -0.21 | Phillips 66 | 221 | operational |
| Lindsey | UK | 53.66, -0.27 | Phillips 66 (avr-26) | 96-113 | reduced |
| Grangemouth | UK | 56.02, -3.71 | Petroineos | 0 (était 150) | **paused** |
| Sarroch (Sarlux) | IT | 39.07, 9.05 | Saras | 300 | operational |
| **ISAB Priolo** | IT | 37.16, 15.18 | Goi Energy (Ludoil en cours) | 320 | **reduced** (vulnérable) |
| Sannazzaro | IT | 45.10, 8.91 | Eni | 180 | operational |
| Taranto | IT | 40.49, 17.21 | Eni | 120 | operational |
| **Milazzo** | IT | 38.21, 15.27 | Eni 50%/Kuwait 50% | 200 | **reduced** (Kuwait) |
| Falconara | IT | 43.62, 13.40 | API/IP | 85 | reduced |
| Livorno (en conv) | IT | 43.59, 10.30 | Eni | 0 (était 105) | **paused** |
| Algeciras-San Roque | ES | 36.18, -5.39 | Moeve | 240 | operational |
| Cartagena | ES | 37.58, -0.96 | Repsol | 220 | operational |
| Petronor Bilbao | ES | 43.36, -3.12 | Repsol | 220 | operational |
| Huelva | ES | 37.20, -6.93 | Moeve | 190 | operational |
| Tarragona | ES | 41.10, 1.16 | Repsol | 186 | operational |
| Puertollano | ES | 38.69, -4.10 | Repsol | 150 | operational |
| A Coruña | ES | 43.34, -8.45 | Repsol | 120 | operational |
| Castellón | ES | 39.97, 0.03 | BP | 110 | operational |
| Sines | PT | 37.94, -8.84 | Galp | 225 | operational |
| Płock | PL | 52.58, 19.71 | PKN Orlen | 276 | operational |
| Gdańsk | PL | 54.36, 18.71 | ORLEN + Aramco 30% | 210 | operational |
| Cressier | CH | 47.05, 7.04 | Varo Energy | 68 | operational |

> **Capacités fossiles retirées 2025-2026** : Grangemouth -150 kb/j (avr-2025), Wesseling -137 kb/j (mars-2025), Livorno -105 kb/j (en conversion), Sannazzaro -180 kb/j prévu 2028. **Total -570 kb/j** déjà retirés ou en cours = ~6 % de la capacité du périmètre, facteur de tension structurel.

### 3.4 Dépôts stratégiques (15 sites majeurs identifiés)

| Site | Pays | Lat,Lon | Opérateur | Capacité | Stock estimé J95 | % rempli | Type |
|---|---|---|---|---|---|---:|---|
| **Géosel Manosque** | FR | 43.83, 5.83 | Géosel (EDF Invest/Ardian/TotalEnergies) | 9,2 Mm³ (30 cavités) | 7,5-8,0 Mm³ | **84 %** | strategic |
| DPF Fos | FR | 43.43, 4.86 | DPF SA | 830 km³ | n/d | 75 % | strategic+commercial |
| CIM Le Havre + Antifer | FR | 49.48, 0.13 | CIM-CCMP | 5,0 Mm³ + 640 km³ | n/d | 80 % | strategic+commercial |
| DPL Lyon (Port É. Herriot) | FR | 45.71, 4.83 | DPL consortium | SEVESO seuil haut | n/d | 70 % | strategic+commercial |
| SFDM réseau ODC | FR | 49.12, 6.18 | SFDM | 870 km³ | n/d | 75 % | strategic+commercial |
| **STORAG Etzel** | DE | 53.42, 7.92 | Storag Etzel | 10 Mm³ (24 cavités) | 8,0-8,5 Mm³ | **80 %** | strategic |
| EBV Wilhelmshaven-Rüstringen | DE | 53.55, 8.07 | EBV | 35 cavités | n/d | 82 % | strategic |
| EBV Sottorf | DE | 53.36, 9.78 | EBV | 9 cavités | n/d | 82 % | strategic |
| EBV Heide | DE | 54.20, 9.10 | EBV | 9 cavités | n/d | 82 % | strategic |
| EBV Lesum | DE | 53.17, 8.69 | EBV | 5 cavités | n/d | 82 % | strategic |
| COVA Rotterdam | NL | 51.96, 4.13 | COVA via Vopak/Koole/Botlek | ~4,1 Mt | n/d | 85 % | strategic |
| ASEVA Anvers | BE | 51.30, 4.30 | ASEVA | ~3,3 Mt | n/d | 85 % | strategic |
| Buncefield (HOSL) | UK | 51.77, -0.42 | BP/Total JV | UKOP majeur | n/d | 75 % | strategic+commercial |
| Kingsbury | UK | 52.57, -1.69 | Consortium BPA | ~7,5 Mt/an | n/d | 78 % | strategic+commercial |
| Augusta tank farm | IT | 37.20, 15.22 | Sonatrach Raffineria Italiana | 3,0 Mm³ (275 réservoirs) | n/d | 72 % | strategic+commercial |
| Mertert (Tanklux) | LU | 49.70, 6.47 | Tanklux/APMS | 70-90 km³ | n/d | 70 % | strategic |
| Carbura répartis CH | CH | 47.42, 8.55 | Carbura (FONES) | 3,5 Mt | n/d | **90 %** | strategic |

> **Note Géosel Manosque (43,83°N, 5,83°E)** : épicentre stratégique français. ~40 % des stocks SAGESS (sur les 17 Mt nationaux). Toute crise prolongée dépendra de sa capacité de soutirage physique (cavités salines : débit limité par la pression et la perméabilité).
>
> **Faiblesse structurelle Luxembourg** : capacité totale ~196 km³ (objectif 420 km³ non atteint). Dépendance critique aux dépôts SFDM/Metz (FR) et Anvers (BE).
>
> **Suisse** : non-AIE, n'a pas participé aux 400 Mb du 11 mars → stocks intacts. Mais kérosène **structurellement sous le minimum FONES** depuis avant la crise.

### 3.5 Ports pétroliers (12 sites)

| Port | Pays | Lat,Lon | Throughput / capacité | Note |
|---|---|---|---|---|
| **Rotterdam** | NL | 51.95, 4.14 | 97,8 Mt brut 2024 ; total 436 Mt | **1er port pétrolier d'Europe** ; 5 raffineries dans le complexe |
| Antwerp-Bruges | BE | 51.32, 4.32 | 278 Mt total (-2,3 % YoY) | Diesel -22 % 2024, chimie +14 % |
| Le Havre + Antifer | FR | 49.66, 0.16 | ~40 Mt produits/an, jusqu'à 500 kDWT | 2ᵉ FR ; pipeline 26 km vers Le Havre + Port-Jérôme |
| Marseille-Fos + Lavéra | FR | 43.40, 4.92 | 70,5 Mt total ; liquid bulk 44,3 Mt | 1ᵉʳ port FR ; départ SPSE/ODL |
| **Trieste (SIOT/TAL)** | IT | 45.65, 13.78 | ~40 Mt/an crude unloaded | **Terminal pétrolier le + actif de Méditerranée** ; départ TAL vers DE/CZ |
| Hamburg | DE | 53.54, 9.97 | ~7 Mt liquid bulk Oiltanking | Alim. Holborn |
| Wilhelmshaven (NWO) | DE | 53.61, 8.15 | ~40 Mt/an ; storage NWO 10,57 Mb | **Seul port eaux profondes DE** ; alim. Gelsenkirchen/Lingen/Wesseling |
| Genoa (Multedo) | IT | 44.42, 8.85 | ~15 Mt/an produits | Alim. raffineries Nord-Italie |
| Algeciras (Moeve) | ES | 36.15, -5.42 | 9 berths jusqu'à 350 kDWT ; storage 2,2 Mm³ | Hub bunkering 0,5 % VLSFO ; détroit de Gibraltar |
| Sines (TGLS) | PT | 37.95, -8.87 | 17 Mt/an ; jusqu'à 350 kDWT ; tirant 28 m | 1ᵉʳ deepwater PT |
| **Constanța** | RO | 44.17, 28.65 | 24 Mt/an unloading + 10 Mt/an loading | **Route alternative Caspien/Azerbaïdjan** ; 1ᵉʳ Mer Noire UE |
| **Gdańsk (Naftoport)** | PL | 54.41, 18.70 | 36,6 Mt crude 2024 ; vers 49 Mt/an | **À capacité maximale depuis 2023** ; pivot pour PCK Schwedt |

### 3.6 UGS gaz (33 sites majeurs)

#### France (8 sites)

| UGS | Lat,Lon | Opérateur | Working volume (TWh / bcm) | % fill (J95) | Géologie |
|---|---|---|---|---:|---|
| **Chémery** | 47.32, 1.55 | Storengy | 33 TWh / 3,0 bcm | 36 % | Aquifère |
| Lussagnet + Izaute | 43.71, -0.10 | Téréga | 33 TWh / 2,9 bcm | 45 % | Aquifère |
| Etrez | 46.30, 5.20 | Storengy | 9 TWh / 0,8 bcm | 35 % | Caverne saline |
| Gournay-sur-Aronde | 49.49, 2.71 | Storengy | 8 TWh | 35 % | Aquifère |
| Cerville/Trois-Fontaines | 48.71, 6.30 | Storengy | 7 TWh | 35 % | Aquifère |
| Saint-Clair-sur-Epte | 49.21, 1.69 | Storengy | 6 TWh | 35 % | Aquifère |
| Beynes | 48.86, 1.87 | Storengy | 5 TWh | 35 % | Aquifère |
| **Manosque (Géométhane)** | 43.83, 5.78 | Géométhane | 3 TWh / 274 Mm³ utile | 40 % | Caverne saline (9 cavités) |

**Total France** : ~104 TWh working = ~9,4 bcm ; % moyen pondéré ~38 %.

#### Allemagne + Autriche (7 sites)

| UGS | Pays | Lat,Lon | Opérateur | Working volume | % fill | Géologie |
|---|---|---|---|---|---:|---|
| **Rehden** | DE | 52.65, 8.49 | SEFE (ex-Gazprom) | 4,2 bcm | **28 %** | Gisement épuisé |
| Haidach | AT/DE | 47.86, 12.80 | Astora/RAG/GSA | 2,9 bcm | 43 % | Gisement épuisé |
| Bierwang | DE | 48.05, 12.45 | Uniper | 1,4 bcm | 28 % | Gisement épuisé |
| Bernburg | DE | 51.79, 11.74 | VNG Gasspeicher | 1,2 bcm | 28 % | Caverne saline |
| Etzel (UGS gaz) | DE | 53.39, 7.71 | Storag Etzel | ~1,0 bcm | 28 % | Caverne saline |
| Jemgum | DE | 53.30, 7.40 | EWE/Astora | 0,84 bcm | 28 % | Caverne saline |
| Reckrod | DE | 50.74, 9.80 | Storengy DE | 0,5 bcm | 28 % | Gisement épuisé |

#### Pays-Bas (3 sites), Italie (6 sites), Espagne (4 sites), UK (4 sites), Belgique (1 site)

Voir [`app/carte_infrastructures_europe.html`](app/carte_infrastructures_europe.html) — popups détaillées par site.

| Sites notables | Capacité | % fill | Note |
|---|---|---:|---|
| **Bergermeer (NL)** | 4,1 bcm | 40 % | Plus grand UGS commercial NL |
| Norg (NL, L-gas) | 7,0 bcm | 45 % | Critique post-Groningen |
| **Minerbio (IT)** | 5,3 bcm | 54 % | Plus grand UGS d'Italie |
| **Gaviota (ES, offshore)** | 2,7 bcm | 66 % | Principal UGS espagnol |
| **Rough (UK, offshore)** | 1,5 bcm | 30 % | Rouvert 2022, ~20 % capacité historique |
| Loenhout (BE, seul UGS) | 0,77 bcm | 40 % | Soutirage 7,25 GWh/h |

### 3.7 Terminaux GNL (17 sites majeurs)

| Terminal | Pays | Lat,Lon | Capacité regaz (bcm/an) | % stock | Note clé |
|---|---|---|---:|---:|---|
| Dunkerque LNG | FR | 51.03, 2.20 | 13 | 65 % | Fluxys 60 % ; tirage hiver prolongé |
| Montoir-de-Bretagne | FR | 47.31, -2.16 | 10 | 65 % | Elengy ; construit 1980 |
| Fos-Cavaou | FR | 43.39, 4.85 | 8,25 | 65 % | Booké 100 % 2025-2040 |
| Fos-Tonkin | FR | 43.41, 4.86 | 3 | 60 % | Date d'arrêt repoussée par crise |
| **FSRU Le Havre Cape Ann** | FR | 49.49, 0.13 | 5 (théorique) | **RETIRÉ oct 2025** | Jugement Rouen — FR a perdu 10 % regaz |
| WHV 1 | DE | 53.59, 8.16 | 7,5 | 70 % | Uniper, saturé |
| WHV 2 (DET) | DE | 53.60, 8.17 | 4,6 | 70 % | Opérationnel 2024 |
| Brunsbüttel | DE | 53.89, 9.13 | 5 | 70 % | RWE/DET |
| Mukran (Rügen) | DE | 54.49, 13.59 | 7,5 | 70 % | Deutsche ReGas |
| Stade | DE | 53.65, 9.50 | 13,3 (objectif 2027) | 55 % | FSRU partielle + onshore en construction |
| Gate Terminal Rotterdam | NL | 51.96, 4.06 | ~16 | 70 % | Hub ARA |
| Eemshaven | NL | 53.46, 6.83 | ~8 | 70 % | 2 FSRU |
| Zeebrugge | BE | 51.34, 3.18 | 9 | 70 % | Hub re-export ; GNL russe interdit en transit |
| Isle of Grain | UK | 51.45, 0.70 | 21,7 | 70 % | **Plus grand terminal d'Europe** |
| **South Hook (Milford Haven)** | UK | 51.71, -5.07 | 21 | **35 %** | **Impact direct force majeure QatarEnergy (Ras Laffan -17 % liquéfaction, répar. 3-5 ans)** |
| Dragon LNG | UK | 51.71, -5.05 | 9,3 | 65 % | Shell/Petronas |
| Adriatic LNG (Rovigo) | IT | 45.02, 12.55 | 9 (10,4 approuvée) | 55 % | Offshore GBS ; impact partiel Qatar |
| Panigaglia (La Spezia) | IT | 44.10, 9.83 | 3,5 | 65 % | GNL Italia/Snam, depuis 1971 |
| OLT Offshore Toscana | IT | 43.50, 10.00 | 3,75 | 65 % | FSRU off Livorno |
| Piombino | IT | 42.94, 10.55 | 5 | 65 % | FSRU Golar Tundra, 2023 |
| Ravenna | IT | 44.40, 12.50 | 5 | 65 % | FSRU BW Singapore, 2025 |
| Barcelone | ES | 41.34, 2.16 | ~17 | 70 % | Enagás |
| Sagunto (Saggas) | ES | 39.65, -0.21 | 8,75 | 70 % | Valence |
| Cartagena GNL | ES | 37.58, -0.99 | 11,8 | 70 % | Murcie |
| Huelva GNL | ES | 37.20, -6.93 | 11,8 | 70 % | Andalousie |
| Bilbao (BBG) | ES | 43.34, -3.10 | 8,8 | 67 % | Basque ; 67 % utilisation moy. |
| Mugardos (Reganosa) | ES | 43.46, -8.25 | 3,6 | 63 % | Galice |
| Sines | PT | 37.94, -8.83 | 7,9 | 65 % | Hub entrée ibérique |
| Świnoujście | PL | 53.91, 14.27 | 8,3 | 65 % | Gaz-System ; expansion en cours |
| Krk FSRU | HR | 45.21, 14.55 | 6,1 | 65 % | **Doublé en 2025** ; backup régional HU/SI/AT |

> **Espagne = 1/3 capacité regaz EU** (~62 bcm/an). Plus grand contributeur en cas de bascule GNL. **Mais** : faible interconnexion gazière avec le reste de l'Europe (MidCat abandonné, H2Med en étude).

### 3.8 Pipelines stratégiques (16 entrées)

#### Pétrole brut

| Pipeline | Trajet | Capacité | Statut J95 | Note |
|---|---|---|---|---|
| **TAL (Transalpine)** | Trieste → Ingolstadt | 850 kb/j post TAL-PLUS (042025) | operational | Bénéficie sortie Druzhba CZ |
| MERO/IKL | Ingolstadt → Litvínov | 200 kb/j | operational | Substitut Druzhba pour CZ |
| **SPSE (Sud-Européen)** | Fos → Karlsruhe | 21 Mt/an (420 kb/j) | operational | Alim. Feyzin/Cressier/Karlsruhe |
| Druzhba Sud | UA → SK/HU/CZ | 250 kb/j | operational | Restauré 23 avril 2026 |
| Druzhba Nord | BY → PL/DE | 1,2 Mb/j théorique | paused | PL et DE sevrés |
| Rotterdam-Rhein (RRP) | NL → Köln | ~30 Mt/an | operational | Substitut Russie pour Rhein |
| NWO Pipeline | WHV → Hambourg | ~22 Mt/an | operational | Critique pour Heide |
| **CEPS/ODL/ONM (NATO/FR)** | Fos → Centre-Europe | classifié | operational | Activé crise OTAN (Liban) |

#### Gaz naturel

| Pipeline | Trajet | Capacité (bcm/an) | Statut J95 | Note |
|---|---|---|---|---|
| Nord Stream 1 | RU → DE Greifswald | 55 (théorique) | **destroyed** | Sabotage 26/09/2022 ; sanctions UE 18/07/2025 |
| Nord Stream 2 | RU → DE Greifswald | 55 (théorique) | **destroyed** | Endommagé 09/2022, jamais certifié |
| Yamal-Europe | RU → BY → PL → DE | 33 | paused | Idle depuis mai 2022 |
| TurkStream (ligne 2) | RU → TR → BG/RS/HU | 31,5 total (15,75 UE) | operational | Seule route gazière russe restante vers UE |
| **TAP** | AZ → IT via GR/AL | **11,2** (post-expansion stage 1 01-01-2026) | operational | **Expansion +1,2 bcm active** ; à pleine capacité |
| **Transmed (Enrico Mattei)** | DZ → TN → IT | 33,5 (~21 réels) | operational | Saturation crise Ormuz attendue |
| Medgaz | DZ → ES (Almería) | 10,5 (~9,4 réels) | operational | Saturé |
| Baltic Pipe | NO → DK → PL | 10 + 3 | operational | Pleine charge depuis 12/2022 |

---

## 4. Évolution depuis J1 (28 février 2026)

### 4.1 Stocks pétroliers stratégiques européens

| Période | France (Mt) | Allemagne (Mt) | Total Europe AIE (Mb) | Libérations coordonnées | Source |
|---|---:|---:|---:|---|---|
| 28 fév 2026 (J0) | 17,0 | 20,0 | 600 | — (baseline) | IEA Oil Stocks |
| 11 mars 2026 (J11) | 17,0 | 20,0 | 600 | **400 Mb annoncés** (FR 14,5 Mb ; DE ~22 Mb) | IEA news 11/03 |
| Fin mars 2026 (J31) | 16,2 | 18,5 | 580 | DE libère 1ʳᵉ tranche (Benzinga 26/03) | Cleanenergywire |
| Fin avril 2026 (J62) | 15,5 | 17,5 | 555 | Tirages européens en cours (Europe = 26,8 % de 400 Mb ≈ 107 Mb) | IEA OMR avril |
| 12 mai 2026 (J73) | 14,8-15,0 | 17,0 | 545 | **US annonce +53,3 Mb** (program exchange) | Al Jazeera 12/05 |
| 22 mai 2026 (J83) | ~14,5-14,8 | ~16,7-17,0 | ~530-540 | Pas de 2ᵉ tranche IEA officielle | IEA |
| 3 juin 2026 (J95) | ~14,3-14,6 | ~16,5-16,8 | ~525-535 | SPR US 365,1 mb (sem. 22 mai) ; IEA confirme >1 Md bbl perdus depuis le 28/02 ; release coordonnée 400 Mb (mars) | IEA / EIA |

> **Conclusions** :
> - L'Europe a engagé ~55-60 Mb (9-10 % de la baseline) en 76 jours. Rythme **soutenable jusqu'à fin 2026** sans 2ᵉ tranche.
> - **La France reste prudente** : sur ~100 Mb détenus en propre, seuls 14,5 Mb (quota IEA) engagés. Le ministre des Finances a refusé tout dépassement (avril 2026). Levier intact pour aggravation.
> - **L'Allemagne plus active** : ~22 Mb libérés profitant d'un surplus pré-crise.

### 4.2 Stockage gaz UGS Europe

| Période | UGS UE % fill | TTF (€/MWh) | Imports GNL UE (Mt) | Imports pipe NO (bcm/mois) | Événement |
|---|---:|---:|---:|---:|---|
| 28/02/2026 (J1) | ~30 % | 58 (pic >65) | n/d | 2,4 | Frappes US-Israël, fermeture Ormuz |
| Mars 2026 | 26 % (sortie hiver) | 60 (pic mi-mars) | 9 (vs 11 normal) | 2,5 | **QatarEnergy force majeure** (~17 % liquéfaction) |
| Avril 2026 | 28 % (début injection lente) | 48-52 (chute -20 % après CDF 8/4) | 9,5 | 2,4 | Cessez-le-feu fragile, blocus US ports IR |
| 15/05/2026 (J76) | 35,97 % (407 TWh) | 49,23 (pic mensuel) | 10 (cumul QTD) | 2,5 | Druzhba pétrole restauré, sanctions UE 20ᵉ paquet, TAP +1,2 bcm |
| 22/05/2026 (J83) | ~37,5-38 % (estim. ~425 TWh) | 47,69 (-3,48 % le 22/5) | 10,5 (cumul QTD) | 2,5 | Norvège +40 % exports gaz |
| 27/05/2026 (J88) | ~38,5-39 % (estim. ~436 TWh) | 48,04 (+5,37 % le 26/5) | 10,8 (cumul QTD) | 2,6 | Trump 23/05 « accord largely negotiated » ; Brent <100 $ |
| **28/05/2026 (J89)** | **~39-39,5 %** (estim. ~442 TWh) | **48,5** (estim., stable) | **11,0** (cumul QTD) | 2,6 | **WH dénie MOU iranien (« complete fabrication ») le 27/05** ; **INSEE confiance ménages 82 (-2) = plus bas 3 ans** ; Brent 96,30 $ (+2,13 %) ; Commission UE révise UE 2026 à 1,1 % ; BCE warn récession DE/IT |
| **03/06/2026 (J95)** | **~38 %** (≈430 TWh ; révision AGSI+ à la baisse) | **47,69** (02/06) | **~11,3** (cumul QTD) | 2,6 | **Iran suspend les pourparlers le 1er juin** + menace Bab el-Mandeb ; Trump « accord dans la semaine » ; **cessez-le-feu Liban tenu le 1er juin** (Israël pousse au-delà du Litani) ; QatarEnergy force majeure 17 % Ras Laffan (répar. 3-5 ans) ; OPEP+ +188k b/j juin, EAU hors OPEP (3 mai) ; Brent 96,89 $ ; INSEE IPC mai +2,4 % YoY |
| Objectif 1/11/2026 | 90 % obligatoire UE | n/a | n/a | n/a | **Atteinte très difficile** au rythme actuel (UE 38 % au 2/06) ; force majeure Ras Laffan ampute l'offre GNL ~1/5 du marché mondial |

> **Lecture clé** : le différentiel **DE 28 % vs ES 66 %** reflète deux trajectoires : (a) Espagne a maximisé son arbitrage GNL (1/3 capacité regaz EU) ; (b) Allemagne doublement frappée (perte Russie + tirage hivernal massif), peine à injecter. **Rehden** sous-rempli = risque hivernal majeur 2026-2027.

---

## 5. Tableau "Days of cover" — capacité de tenue par pays

> Hypothèses : consommation normale, libérations stratégiques uniquement, pas d'aide bilatérale extraordinaire.

### 5.1 Pétrole — produits raffinés (gazole + essence + fioul + jet)

| Pays | Jours couverture stocks stratégiques (baseline) | Jours estimés J95 | Tenue dans scénario A (réouverture rapide) | Scénario B (enlisement) | Scénario C (escalade) |
|---|---:|---:|---|---|---|
| France | 90-100 j | ~85-90 j | **OK** | Tendu mais gérable | Critique au-delà de 6 mois |
| Allemagne | 95 j | ~80 j | OK | Tendu | Critique 4-5 mois |
| Pays-Bas | 95 j | ~90 j | OK | Stable (re-export rotterdam) | Critique 5-6 mois |
| Belgique | 90 j | ~85 j | OK | Stable | Critique 5 mois |
| **Luxembourg** | 70-90 j | ~75 j | OK | **Très tendu** (capacité physique faible) | **Critique 2-3 mois** |
| UK | 67-75 j | ~60-65 j | OK | Tendu (Grangemouth fermé) | **Critique 3-4 mois** |
| Italie | 90 j | ~80 j | OK | **Très tendu** (35-40 % brut MO) | **Critique 3-4 mois** |
| Espagne | 92 j | ~88 j | OK | Stable (mix GNL atlantique) | Critique 5-6 mois |
| Suisse | 135 j (essence/diesel) | ~130 j (intacts) | OK | OK | **Kérosène : critique immédiat** |

### 5.2 Gaz naturel — capacité de tenue hiver 2026-2027

> Le risque gaz est différé : ce n'est pas un problème immédiat mais la condition d'entrée à l'hiver prochain.

| Pays | UGS % au 1ᵉʳ nov 2026 (proj. au rythme actuel) | Risque hiver 2026-2027 |
|---|---:|---|
| Allemagne | ~65 % (vs 95 % attendus normalement) | **Élevé** ; Rehden sous-rempli |
| France | ~70 % | Moyen ; perte FSRU Le Havre = -5 bcm regaz |
| Italie | ~80 % | Faible ; TAP+Transmed compensent |
| Espagne | ~90 % | Faible ; 1/3 capacité regaz EU |
| Pays-Bas | ~75 % | Moyen |
| UK | ~50-60 % | Moyen ; Rough = capacité limitée |

---

## 6. Vulnérabilités identifiées (priorité de surveillance J95+)

1. **Géosel Manosque (43,83°N, 5,83°E)** — épicentre stratégique FR. Capacité de soutirage physique limitée (cavités salines, pression).
2. **PCK Schwedt (DE)** — déjà fragilisée (Druzhba post-2022 + arrêt Kazakh 1ᵉʳ mai 2026). Approvisionnement Berlin/Est-Allemagne en risque double.
3. **Naftoport Gdańsk (PL)** — à capacité maximale depuis 2023, pas de marge pour absorber rebalancement supplémentaire.
4. **Rehden (DE, UGS)** — 28 % de remplissage. Risque hivernal majeur si crise prolongée.
5. **South Hook (UK, GNL)** — impact direct force majeure QatarEnergy Ras Laffan (17 % de la liquéfaction touchée, réparation estimée 3-5 ans). Sous-utilisé. Ormuz coupe ~1/5 du GNL mondial.
6. **Milazzo + Priolo + Falconara (IT, raffineries)** — 35-40 % d'approvisionnement Moyen-Orient. Co-propriété Kuwait Petroleum à Milazzo (vulnérable Mina Al-Ahmadi).
7. **FSRU Le Havre Cape Ann (FR)** — retiré octobre 2025 sur jugement Rouen. France a perdu ~10 % capacité regaz au pire moment.
8. **Luxembourg** — capacité physique stockage ~196 km³ (cible 420 km³ non atteinte). Dépendance critique aux dépôts FR/BE.
9. **Suisse kérosène** — structurellement sous le minimum FONES avant la crise. Risque aérien spécifique.
10. **Constanța (RO) + Trieste (IT) + Gdańsk (PL)** — les 3 corridors d'import alternatifs (Caspien / Méditerranée TAL / Baltique) deviennent goulots d'étranglement.

---

## 7. Implications pour l'impact France

Voir [[scenario_realiste]] et [[scenario_pessimiste]] pour les trajectoires détaillées.

**Synthèse rapide** :
- À J95, la France dispose encore d'environ **85-90 jours de couverture** sur les produits raffinés (stocks stratégiques engagés à 9-10 % seulement).
- Le **gazole** reste le point critique : ~2,12 €/l à la pompe (record 2,188 €/l le 31 mars). Si crise se prolonge > 4 mois, risque de **rationnement** et / ou ouverture stocks SAGESS au-delà du quota IEA. La suspension iranienne des pourparlers le 1er juin retire l'hypothèse de détente rapide à court terme ; Brent 96,89 $ (3 juin), Exxon alerte 150-160 $/b possible sous 2-3 semaines sur le spot physique.
- Le **gaz** est le risque différé : objectif 90 % UGS au 1ᵉʳ novembre 2026 très difficilement atteignable (UE 38 % au 2 juin ; TTF 47,69 €/MWh). Force majeure QatarEnergy à Ras Laffan (17 % liquéfaction, répar. 3-5 ans) ; Ormuz coupe ~1/5 du GNL mondial. Hiver 2026-2027 pourrait connaître prix TTF > 80 €/MWh si Ormuz reste fermé.
- **Carbura Suisse intact** mais Suisse non-AIE → pas de mutualisation européenne formelle.
- **Capacité de raffinage FR** maintenue (1 060 kb/j conventionnel + 2 bio) ; Gonfreville et Donges tournent à pleine capacité depuis mars 2026 (Euronews 27 avril 2026).

---

## 8. Liens connexes

- [[index]] — Synthèse 3 scénarios
- [[scenario_realiste]] — Scénario B (58-66 %) — Enlisement stagflationniste consolidé
- [[scenario_pessimiste]] — Scénario C (22-30 %) — Récession technique européenne + stagflation lourde
- [[scenario_optimiste]] — Scénario A (12-18 %) — MOU 14 points en négociation à Doha (non signé)- [[sources_infrastructures_europe]] — Référencement détaillé
- [[sources_infrastructures]] — Sources zone du conflit (Iran/Golfe)
- [`app/carte_infrastructures_europe.html`](app/carte_infrastructures_europe.html) — Carte interactive Europe
- [`app/carte_infrastructures.html`](app/carte_infrastructures.html) — Carte interactive zone Ormuz

---

*Document compilé le 3 juin 2026 (J95). Révision recommandée : hebdomadaire pour les niveaux gaz (AGSI+), mensuelle pour les stocks pétroliers (IEA OMR), à chaque incident ou changement de statut documenté.*
