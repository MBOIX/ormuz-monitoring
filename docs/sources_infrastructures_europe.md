# Sources — Infrastructures énergétiques et stocks Europe
### Périmètre France + voisins majeurs — État au 6 juin 2026 (J98)

Ce fichier référence toutes les sources OSINT utilisées pour compiler le dataset de la carte [`app/carte_infrastructures_europe.html`](app/carte_infrastructures_europe.html) et le document analytique [[infrastructures_europe]].

**Couverture** : 53 raffineries + 17 dépôts stratégiques + 12 ports + 33 UGS gaz + 29 terminaux GNL + 16 pipelines = **160 entrées** géolocalisées sur 14 pays.

---

## Méthodologie de compilation

| Critère | Méthode |
|---|---|
| **Coordonnées GPS** | Vérification croisée Wikipedia + OpenStreetMap + Global Energy Monitor. Précision visée 0,01° (~1,1 km). |
| **Capacité nominale** | Source primaire opérateur (TotalEnergies, Shell, BP, Eni, Repsol, Snam, Enagás, Storengy, Téréga, etc.) ou EIA / FuelsEurope / IEA country profiles. |
| **Statut opérationnel** | Recoupement ≥ 2 sources Tier 1/2. Pour les sites en transition/conversion, exigence de communiqué officiel. |
| **Niveau de remplissage (gaz)** | AGSI+ (https://agsi.gie.eu) au 5-6 juin 2026 par pays (UE **~41,5 %** au 5-6/06 ; corrige le 38 % daté du 23 mai). Toujours ~13-15 pts sous la norme 5 ans ; Pays-Bas < 16 % ; cible hiver abaissée à 80 %. Site par site = estimation depuis le % pays. |
| **Niveau de stocks (pétrole)** | Estimation à partir du baseline IEA Oil Stocks (dernières publications mensuelles) + déduction des releases coordonnées AIE (400 Mb le 11 mars 2026 + 53,3 Mb tirage US le 12 mai). SPR US **357,1 mb** (sem. au 29 mai, EIA WPSR ; corrige le 365,1 mb du 22 mai), tirage ~8 mb/sem, plus bas depuis janvier 2024 ; IEA >1 Md bbl perdus. |
| **Date de référence** | 6 juin 2026 (J98) — révision recommandée hebdomadaire pour le gaz, mensuelle pour le pétrole. |

### Codification statuts (alignée carte)

| Code | Couleur | Signification |
|---|---|---|
| `operational` | 🟢 vert | Production normale / fonctionnement nominal |
| `reduced` | 🟡 jaune | Production réduite OU sous-rempli (UGS) |
| `paused` | 🟠 orange | Conversion / maintenance / sevrage |
| `shutin` | 🟠 orange foncé | Arrêt préventif lié au conflit |
| `damaged` | 🔴 rouge | Frappe drone/missile |
| `destroyed` | 🟥 rouge foncé | Neutralisé longue durée |

### Codification remplissage (anneau autour de l'icône carte)

| Bande | Seuil | Couleur |
|---|---:|---|
| Haut | ≥ 70 % | 🟢 vert |
| Moyen | 50-70 % | 🟡 jaune |
| Bas | 30-50 % | 🟠 orange |
| Critique | < 30 % | 🔴 rouge |

---

## 1. Agences nationales de réserves stratégiques pétrolières (Tier 1)

| Pays | Agence | URL principale | Données accessibles |
|---|---|---|---|
| **France** | SAGESS / CPSSP | https://www.sagess.fr/ | Rapport annuel 2024, key figures, structure CPSSP |
| | | https://www.sagess.fr/sites/default/files/financial_info_files/sagess_-_rapport_annuel_2024_-_final_0.pdf | PDF rapport |
| | DGEC / MTE | https://www.ecologie.gouv.fr/politiques-publiques/securite-dapprovisionnement-petrole | Politique sécurité approvisionnement |
| | CPDP | https://www.cpdp.org/logistique-petroliere/6602-carte-des-depots-petroliers-edition-2024 | Carte dépôts 2024 |
| | Légifrance | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000032396413 | Arrêté 25 mars 2016 stocks stratégiques |
| **Allemagne** | EBV (Erdölbevorratungsverband) | https://www.ebv-oil.org/ | Brochure information, sites cavités |
| | | https://www.ebv-oil.org/cmse/pdf/ebv_information_brochure_dba.pdf | PDF officiel |
| | | https://www.ebv-oil.org/cmse/goto.asp?sid=92 | Cavern storage details |
| | STORAG ETZEL | https://www.storag-etzel.de/en/storage/oil-gas | Cavités Etzel |
| | EKB | https://ekb-storage.de/en/the-ekb/the-etzel-cavern-storage-facility/ | Etzel cavern facility |
| | NWO | https://nwowhv.de/en/caverns/ | Cavernes NWO Wilhelmshaven |
| **Pays-Bas** | COVA | https://cova.nl/en/oil-dashboard-netherlands/ | Dashboard pétrole NL |
| | | https://cova.nl/en/stock-management/ | Stock management |
| | | https://cova.nl/en/about-cova/ | About COVA |
| **Belgique** | ASEVA (ex-APETRA) | https://aseva.be/ | Site officiel |
| | FPS Economy BE | https://economie.fgov.be/en/themes/energy/sources-and-carriers-energy/petroleum/petroleum-agency-apetra | Petroleum Agency APETRA |
| **Royaume-Uni** | DESNZ (ex-BEIS) | https://www.gov.uk/government/publications/emergency-oil-stocking-international-obligations | Compulsory Stocking Obligation |
| **Italie** | OCSIT | https://www.ocsit.it/content/overview | Overview |
| | | https://www.ocsit.it/en/content/legislation | Legislation |
| **Espagne** | CORES | https://www.cores.es/en/seguridad-suministro/productos-petroliferos/reservas-cores | Réserves CORES |
| | | https://www.cores.es/sites/default/files/archivos/publicaciones/presentacion_cores_institucional_jul2024.pdf | Présentation institutionnelle |
| **Suisse** | Carbura | https://www.carbura.ch/en/compulsory-stockpiling | Compulsory stockpiling |
| **Luxembourg** | APMS (Agence Pétrolière) | (référencé via Europarl + presse) | Pas de site dédié public |

---

## 2. Stockage gaz souterrain (UGS) — agences et opérateurs

### 2.1 Source canonique : GIE / AGSI+

| Outil | URL | Apport |
|---|---|---|
| **AGSI+ (Aggregated Gas Storage Inventory)** | https://agsi.gie.eu/ | % fill UGS par site/pays, working volume, taux d'injection/soutirage **quasi temps réel** |
| GIE (Gas Infrastructure Europe) | https://www.gie.eu/ | Méthodologie et liste opérateurs |
| ALSI (LNG Storage Inventory) | https://alsi.gie.eu/ | Inventory + send-out terminaux GNL en temps réel |

### 2.2 Opérateurs UGS

| Pays | Opérateur(s) | URL |
|---|---|---|
| France | Storengy (Engie) | https://www.storengy.com/ |
| | Téréga | https://www.terega.fr/ |
| | Géométhane (Manosque) | https://www.geosel.fr/ (groupe Géosel/Géostock) |
| Allemagne | SEFE (Rehden) | https://www.sefe-energy.com/ |
| | Uniper Energy Storage | https://www.uniper.energy/ |
| | VNG Gasspeicher | https://www.vng.de/ |
| | EWE Gasspeicher / Astora | https://www.ewe.com/ |
| | Storag Etzel | https://www.storag-etzel.de/ |
| Pays-Bas | TAQA (Bergermeer) | https://www.gasstoragebergermeer.com/ |
| | Gasunie / NAM | https://www.gasunie.nl/ |
| Italie | Stogit (Snam) | https://www.snam.it/ |
| | Edison Stoccaggio / Geogastock | https://www.edison.it/ |
| Espagne | Enagás | https://www.enagas.es/ |
| | Naturgy Almacenamientos | https://www.naturgy.es/ |
| UK | Centrica Storage (Rough) | https://www.centrica.com/ |
| | SSE Thermal | https://www.ssethermal.com/ |
| | Uniper UK / Storengy UK | https://www.uniper.energy/ |
| Belgique | Fluxys (Loenhout) | https://www.fluxys.com/ |
| Autriche | RAG Austria (Haidach) | https://www.rag-austria.at/ |

---

## 3. Terminaux GNL — opérateurs et bases de données

| Terminal | Opérateur | URL |
|---|---|---|
| Dunkerque LNG | Fluxys / DKL | https://www.dunkerquelng.com/ |
| Montoir + Fos-Cavaou + Fos-Tonkin | Elengy | https://www.elengy.com/ |
| FSRU Le Havre (Cape Ann) | TotalEnergies | https://telsf.totalenergies.com/ |
| Zeebrugge | Fluxys LNG | https://www.fluxys.com/ |
| Gate Terminal Rotterdam | Gasunie + Vopak | https://www.gateterminal.com/ |
| Eemshaven | Gasunie/Vopak | https://www.gasunie.nl/ |
| WHV 1/2, Brunsbüttel, Stade | Deutsche Energy Terminal (DET) | https://energy-terminal.de/ |
| Mukran (Rügen) | Deutsche ReGas | https://deutsche-regas.de/ |
| Stade (onshore 2027) | HEH | https://www.heh.de/ |
| Isle of Grain | National Grid Grain LNG | https://www.lngjournal.com/ (ECP) |
| South Hook | QatarEnergy / ExxonMobil / TotalEnergies | (consortium) |
| Dragon LNG | Shell + Petronas (VTTI 50 %) | https://www.dragonlng.co.uk/ |
| Adriatic LNG (Rovigo) | ExxonMobil/QatarEnergy/Snam-VTTI | https://www.adriaticlng.it/ |
| Panigaglia + OLT + Piombino + Ravenna | Snam | https://www.snam.it/ |
| Barcelona + Cartagena + Huelva + Sagunto | Enagás | https://www.enagas.es/ |
| BBG Bilbao | Enagás/EVE/Repsol | (consortium) |
| Mugardos | Reganosa | https://www.reganosa.com/ |
| Sines | REN Atlântico | https://www.ren.pt/ |
| Świnoujście | Gaz-System | https://www.gaz-system.pl/ |
| Krk FSRU | LNG Hrvatska | https://lng.hr/ |

---

## 4. Pipelines stratégiques

| Pipeline | Opérateur | URL |
|---|---|---|
| **TAL — Transalpine** | TAL Group (OMV, Shell, Eni…) | https://www.tal-oil.com/ |
| MERO / IKL | MERO ČR | https://mero.cz/ |
| **SPSE (Sud-Européen)** | SPSE (TotalEnergies 35,14 %) | https://www.spse.fr/ |
| Druzhba | Transneft / Ukrtransnafta / PERN / MOL | (multi-opérateurs) |
| Rotterdam-Rhein (RRP) | Shell/BP/Exxon/Total | (consortium) |
| NWO Pipeline | Nord-West Oelleitung | https://nwowhv.de/ |
| **TAP** | TAP AG (BP, SOCAR, Snam, Fluxys, AXPO, ENAG) | https://www.tap-ag.com/ |
| Transmed | Sonatrach + Eni (Sergaz, TMPC) | (multi-opérateurs) |
| Medgaz | Medgaz SA (Sonatrach 51 %, Naturgy 49 %) | (consortium) |
| TurkStream | Gazprom + Botaş | (multi-opérateurs) |
| Nord Stream 1 + 2 | Nord Stream AG / NS2 AG | (Gazprom-led) |
| Yamal-Europe | EuRoPol Gaz / Gazprom | (multi-opérateurs) |
| Baltic Pipe | Energinet + Gaz-System | https://www.gaz-system.pl/ |
| BBL | BBL Company (Gasunie/Fluxys/Uniper) | https://www.bblcompany.com/ |
| Interconnector UK-BE | Interconnector (UK) Ltd | https://www.interconnector.com/ |
| MEGAL / TENP | GRTgaz DE / OGE / Fluxys TENP | https://www.fluxys.com/ |
| CEPS / ODL / ONM | NATO Pipeline System / SNOI | https://www.nato.int/ |

---

## 5. Raffineries — opérateurs majeurs

| Groupe | URL principale | Sites couverts |
|---|---|---|
| **TotalEnergies** | https://totalenergies.com/ | Donges, Gonfreville, Feyzin, La Mède, Grandpuits, Leuna (DE), Antwerp (BE), Zeeland (NL, opérateur 02-2026) |
| ExxonMobil | https://corporate.exxonmobil.com/ | Botlek (NL), Antwerp (BE), Fawley (UK) |
| Shell | https://www.shell.com/ | Pernis (NL), Rheinland Godorf/Wesseling (DE) |
| BP | https://www.bp.com/ | Europoort (NL), Gelsenkirchen (DE), Lingen (DE), Castellón (ES) |
| Petroineos (Ineos + PetroChina) | https://www.petroineos.com/ | Lavera (FR), Grangemouth (UK, fermée crude 04-2025) |
| North Atlantic Energies (ex-ExxonMobil FR) | (en formation) | Port-Jérôme-Gravenchon (FR) |
| Rhône Énergies (Trafigura + Entara) | (consortium) | Fos-sur-Mer (FR) |
| Repsol | https://www.repsol.com/ | Cartagena, Petronor Bilbao, Tarragona, Puertollano, A Coruña |
| Moeve (ex-Cepsa) | https://www.moeveglobal.com/ | Algeciras-San Roque, Huelva |
| Eni | https://www.eni.com/ | Sannazzaro, Taranto, Livorno, Milazzo (50 %) |
| Saras (Sarlux) | https://www.sarlux.saras.it/ | Sarroch |
| Goi Energy / Ludoil | (cession en cours) | Priolo (ISAB) |
| API/IP (Gruppo API) | https://www.ip.gruppoapi.com/ | Falconara |
| Valero | https://www.valero.com/ | Pembroke (UK) |
| Phillips 66 | https://www.phillips66.com/ | Humber + Lindsey (UK, depuis avr-2026) |
| EET Fuels (ex-Essar UK) | https://www.eetfuels.com/ | Stanlow (UK) |
| Galp | https://www.galp.com/ | Sines (PT) |
| PKN Orlen | https://www.orlen.pl/ + https://plrf.pl/ | Płock + Gdańsk (PL) |
| Saudi Aramco (partenaire) | https://www.aramco.com/ | Gdańsk (PL, 30 %) |
| Varo Energy | https://www.varoenergy.com/ | Cressier (CH) |
| Klesch Group | https://www.heiderefinery.com/ | Heide (DE) |
| Oilinvest / Tamoil | https://www.holborn.de/ | Holborn Hamburg (DE) |
| Gunvor | https://gunvorgroup.com/ | Rotterdam + Antwerp |
| Vitol / ATPC | https://www.vitol.com/ | ATPC Antwerp (BE) |
| OMV | https://www.omv.com/ | Burghausen (DE) |
| MiRO (Shell/P66/Eni/Rosneft tutelle) | https://www.miro-ka.de/ | Karlsruhe (DE) |
| PCK Schwedt (Rosneft tutelle + Shell + Eni) | https://www.pck.de/ | Schwedt (DE) |
| Bayernoil (BP/Varo/Rosneft) | (consortium) | Vohburg + Neustadt (DE) |
| Sonatrach Raffineria Italiana | (ex-ExxonMobil) | Augusta + Priolo (IT) |

---

## 6. Ports pétroliers

| Port | Autorité / opérateur | URL |
|---|---|---|
| Rotterdam | Port of Rotterdam Authority | https://www.portofrotterdam.com/ |
| Antwerp-Bruges | Port of Antwerp-Bruges NV | https://www.portofantwerpbruges.com/ |
| Le Havre + Antifer | HAROPA Port + CIM-CCMP | https://www.haropaport.com/ + https://www.cim-ccmp.com/ |
| Marseille-Fos | GPMM | https://www.marseille-port.fr/ |
| Trieste (SIOT) | SIOT-TAL | https://www.tal-oil.com/ |
| Hamburg | Hamburg Port Authority | https://www.hafen-hamburg.de/ |
| Wilhelmshaven (NWO) | Nord-West-Oelleitung | https://nwowhv.de/ |
| Genoa Multedo | Porto Petroli SpA / AdSP MLO | https://www.portsofgenoa.com/ |
| Algeciras (Bahía) | APBA + Moeve | https://www.apba.es/ |
| Sines (TGLS) | APS Sines / Galp | https://www.galp.com/ |
| Constanța | Oil Terminal SA + Midia | https://www.portofconstantza.com/ |
| Gdańsk Naftoport | Naftoport / Port of Gdańsk | https://www.portgdansk.pl/ + https://naftoport.pl/ |

---

## 7. Institutions et données macro (Tier 2)

| Source | URL | Apport |
|---|---|---|
| **IEA (Agence Internationale de l'Énergie)** | https://www.iea.org/ | Oil Stocks of IEA Countries dataset, Country Security Policy, OMR mensuel, Strait of Hormuz briefing |
| | https://www.iea.org/data-and-statistics/data-tools/oil-stocks-of-iea-countries | Dataset stocks pays |
| | https://www.iea.org/news/iea-member-countries-to-carry-out-largest-ever-oil-stock-release-amid-market-disruptions-from-middle-east-conflict | News 11/03/2026 — 400 Mb release |
| | https://www.iea.org/news/update-on-iea-collective-action-decision-of-11-march-2026 | Update collective action |
| | https://www.iea.org/about/oil-security-and-emergency-response/strait-of-hormuz | Strait of Hormuz briefing |
| | https://www.iea.org/reports/oil-market-report-may-2026 | OMR mai 2026 |
| | https://iea.blob.core.windows.net/assets/515f3128-df1a-4d6c-beb4-fd91d2434bef/-14APR2026_OilMarketReport_Free_version1.pdf | OMR avril 2026 (PDF) |
| | https://www.iea.org/countries/france/oil | France oil profile |
| | https://www.iea.org/articles/italy-oil-security-policy | Italy |
| | https://www.iea.org/articles/belgium-oil-security-policy | Belgium |
| | https://www.iea.org/articles/germanys-legislation-on-oil-security | Germany |
| | https://www.iea.org/articles/united-kingdoms-legislation-on-oil-security | UK |
| | https://www.iea.org/articles/Switzerland-s-legislation-on-oil-security | Switzerland |
| | https://www.iea.org/articles/portugal-oil-security-policy | Portugal |
| **Commission Européenne — DG ENER** | https://energy.ec.europa.eu/ | Politiques énergétiques UE |
| | https://energy.ec.europa.eu/news/commission-and-international-energy-agency-take-stock-oil-markets-and-measures-restore-long-term-2026-03-18_en | News 18/03/2026 |
| **ENTSOG** | https://gasdashboard.entsog.eu/ | Flow dashboard gaz |
| **ACER** | https://www.acer.europa.eu/ | Rapports gaz UE |
| | https://www.acer.europa.eu/sites/default/files/documents/Publications/2026-ACER-Gas-Key-Developments-winter.pdf | Gas Key Developments winter 23/04/2026 |
| **Bruegel** | https://www.bruegel.org/dataset/european-natural-gas-imports | Dataset imports gaz EU |
| **Consilium (Conseil UE)** | https://www.consilium.europa.eu/en/infographics/gas-storage-capacity/ | Infographie capacité stockage |
| **Concawe / FuelsEurope** | https://www.concawe.eu/refineries-map/ | Carte raffineries Europe |
| | https://www.fuelseurope.eu/uploads/files/modules/documents/file/1751884714_hRFytPDOeeKJrEqmip7T2Merz3hyZ9qqAtyLaWUt.pdf | Statistical Report 2025 |
| **OPEC Monthly Market Report** | https://www.opec.org/ | Production par pays |
| **EIA (US)** | https://www.eia.gov/ | Country profiles, STEO |

---

## 8. Médias spécialisés énergie / matières premières (Tier 2-3)

| Source | URL | Couverture spécifique |
|---|---|---|
| Argus Media | https://www.argusmedia.com/ | BAPCO force majeure, Mina Al-Ahmadi, Gelsenkirchen, prix Dated Brent |
| S&P Global Commodity Insights | https://www.spglobal.com/commodity-insights/ | Dated Brent spot, raffineries cessions |
| OilPrice.com | https://oilprice.com/ | Goldman Hormuz 100 USD, Ras Tanura redémarrage |
| Energy News (energynews.pro) | https://energynews.pro/ | SABIC Jubail détails |
| Hydrocarbon Engineering / Hydrocarbon Processing | https://www.hydrocarbonprocessing.com/ | EIA Mideast, Pernis restart 04-2026, Zeeland 02-2026 |
| Naturalgas Intel | https://www.naturalgasintel.com/ | Retards North Field expansion |
| OffshoreTechnology / Offshore Magazine | https://www.offshore-technology.com/ | Persian Gulf Star, plateformes offshore |
| Pipeline Journal | https://www.pipeline-journal.net/ | SUMED rerouting |
| WorldOil / Rigzone | https://www.worldoil.com/ + https://www.rigzone.com/ | Aramco Ras Tanura, Phillips 66 Lindsey |
| MEED (Middle East Economic Digest) | https://www.meed.com/ | Oman refining, Basra terminal |
| LNG Prime | https://lngprime.com/ | Mukran, Stade, Ravenna, Krk |
| LNG Journal | https://www.lngjournal.com/ | Isle of Grain expansion, OLT Toscana |
| Bloomberg | https://www.bloomberg.com/ | Kharg satellite, Yanbu, Fawley expansion, Gelsenkirchen, Macron release |
| Reuters | https://www.reuters.com/ | Frappes Saudi secrètes, East-West pipeline, Rumaila |
| Al Jazeera | https://www.aljazeera.com/ | South Pars, Bushehr, Kuwait Bubiyan, BAPCO, IEA 400M, US 53,3 Mb |
| CNN | https://www.cnn.com/ | Frappes US 7 mai (Qeshm, Bandar Abbas) |
| Financial Times | https://www.ft.com/ | Analyse marchés, satellite chinois |
| The National (UAE) | https://www.thenationalnews.com/ | Ras Laffan, Bubiyan, Kuwait Petroleum HQ, Basra-Haditha |
| Critical Threats Project (AEI/ISW) | https://www.criticalthreats.org/ | Iran Update OPREP, frappes 7 mai |
| Clean Energy Wire | https://www.cleanenergywire.org/ | Germany release oil reserve |
| Benzinga | https://www.benzinga.com/ | Germany oil release |
| Investing.com | https://www.investing.com/ | France finance minister position |
| El Independiente | https://www.elindependiente.com/ | Escudo reservas España 420 M barriles |
| Lessentiel.lu / Paperjam | https://www.lessentiel.lu/ + https://paperjam.lu/ | Réserves Luxembourg |
| SwissInfo | https://www.swissinfo.ch/ | Réserves Suisse, kérosène |
| Euronews | https://www.euronews.com/ | TotalEnergies Normandy 04-2026 |
| OGJ (Oil & Gas Journal) | https://www.ogj.com/ | Esso SAF / North Atlantic FR, Grangemouth |
| ICIS | https://www.icis.com/ | Cession Esso France |
| MNI Markets | https://www.mni-news.com/ | Gelsenkirchen restructuration |
| Pravda USA | https://usa.news-pravda.com/ | Kazakh oil to Schwedt (**source à recouper avant utilisation**) |

---

## 8 bis. Ressources critiques non-énergétiques exposées via Ormuz (urée, hélium, méthanol, aluminium) — fenêtre J98

Sources ajoutées pour le suivi des matières premières non-énergétiques fortement exposées au détroit, au-delà du pétrole et du GNL.

| Source | Type | Référence | URL / Apport |
|---|---|---|---|
| **World Bank — Commodity Markets Outlook** | E, D | Flambée engrais/urée liée à Ormuz. **Distinguer papier vs physique (comme le Brent)** : benchmark FUTURES (papier) ~419 $/t (-32 % m/m) ; **physique livré (tender CFR Inde) ~935-959 $/t ≈ ×2 pré-guerre** — c'est le physique qui matérialise le « urée >850 $/t / +80 % » (baseline toujours valable) | https://www.worldbank.org/commodity-markets-outlook |
| **IFPRI** | E, S | **Tender Inde d'urée adjugé ~935-959 $/t (CFR, physique)** ; risque sécurité alimentaire mondiale | https://www.ifpri.org/blog/hormuz-urea-india-tender-food-security |
| **PolitiFact** | E, P | Fact-check dépendance aux ressources critiques non-énergétiques : **hélium Qatar ~1/3 de l'offre mondiale** (Ras Laffan impacté) ; spot **600-900 $/Mcf** (détente m/m en mai) ; Airgas -50 % de livraisons aux hôpitaux US (risque IRM) ; hausse contractuelle = prospective non matérialisée | https://www.politifact.com/factchecks/2026/hormuz-critical-minerals-helium |
| **Renewable Matter** | T, E | **Méthanol** : spot Chine ~3000 CNY/t (plus bas depuis mars), momentum récent **baissier** en Asie, Europe ferme ; « doublé » reste vrai en glissement depuis janvier. **Aluminium** LME cash ~3 736 $/t (5 juin), pic 3 855 $ le 2 juin = plus haut en 4 ans (pas un record absolu) ; smelter Alba à -19 % (et non -30 %) | https://www.renewablematter.eu/hormuz-methanol-aluminium-supply |

> **MAJ J98 (6 juin 2026)** : la **force majeure QatarEnergy à Ras Laffan** est **prolongée jusqu'à mi-août 2026** (et non mi-juin), à **~17 % de la liquéfaction** (~12,8 Mt/an), réparation estimée **3-5 ans** (Ormuz coupe ~1/5 du GNL mondial) — impact direct sur South Hook (UK), Adriatic LNG (IT) et l'objectif UGS, dont la **cible hiver est abaissée à 80 %** (UE **~41,5 %** au 5-6/06, corrige le 38 % daté du 23 mai). Prolongation mi-août recoupée : https://lngprime.com/ · consulté 6 juin 2026 · Cote: B2. La thèse Exxon d'un Dated Brent **150-160 $/b N'EST PAS matérialisée à J98** → **[SPÉCULATION]**, jamais un fait (aucune assessment Platts/Argus Dated Brent en source ouverte ; dernière donnée solide = prime > 25 $/b sur futures, EIA avril). OPEP+ **+188k b/j juin**, **EAU hors OPEP (3 mai)**.
>
> **⚠ Note de traçabilité** : les URL CNBC (×2) et Al Jazeera de la MAJ précédente (J95) étaient **rompues (404)** au contrôle du 04/06/2026 ; les faits (force majeure ~17 %, +188k b/j / sortie EAU) restent **à recouper sur ≥ 2 sources Tier 1**. La force majeure jusqu'à mi-août est recoupée via LNG Prime. Aucune URL de substitution n'a été inventée.

---

## 9. Bases de données et imagerie (Tier 3)

| Source | URL | Type |
|---|---|---|
| **Global Energy Monitor (GEM Wiki)** | https://www.gem.wiki/ | Bases pipelines, raffineries, champs, terminaux |
| Global Energy Observatory (GEO) | https://globalenergyobservatory.org/ | Profils sites |
| Wikipedia (FR/EN/DE) | (multi-articles dédiés) | Coordonnées, contexte historique |
| OpenStreetMap (OSM) | https://www.openstreetmap.org/ | Coordonnées GPS de référence |
| A Barrel Full (Wikidot) | http://abarrelfull.wikidot.com/ | Europe refineries |
| NS Energy Business | https://www.nsenergybusiness.com/ | Projets pétroliers |
| Statista | https://www.statista.com/ | Refinery capacity Spain, etc. |
| Stockistes USI (FR) | https://www.stockistes-usi.fr/ | Adhérents dépôts FR |
| MacroMicro Gas Storage | https://en.macromicro.me/ | Tracking storage |
| EnergyRiskIQ | https://energyriskiq.com/ | Gas storage levels EU |
| European Gas Hub | https://europeangashub.com/ | Analyses |
| Energiedashboard.admin.ch | https://energiedashboard.admin.ch/gas/eu-gasspeicher | Vue Suisse de l'AGSI+ |
| Center on Global Energy Policy (Columbia) | https://www.energypolicy.columbia.edu/ | Analyses |
| Oxford Energy Institute | https://www.oxfordenergy.org/ | Russia/Yamal, Transmed |
| IEEFA European LNG Tracker | https://ieefa.org/european-lng-tracker | Tracker GNL |
| Atlantic Council | https://www.atlanticcouncil.org/ | Énergie Moyen-Orient |
| Wikipedia EN — Sagess | https://fr.wikipedia.org/wiki/Sagess | |
| Wikipedia FR — CPSSP | https://fr.wikipedia.org/wiki/Comit%C3%A9_professionnel_des_stocks_strat%C3%A9giques_p%C3%A9troliers | |
| Wikipedia EN — Compulsory stock obligation | https://en.wikipedia.org/wiki/Compulsory_stock_obligation | |
| Wikipedia DE — Strategische Ölreserve | https://de.wikipedia.org/wiki/Strategische_%C3%96lreserve | |
| Wikipedia EN — UK oil pipeline network | https://en.wikipedia.org/wiki/UK_oil_pipeline_network | |
| Wikipedia EN — Buncefield oil depot | https://en.wikipedia.org/wiki/Buncefield_oil_depot | |
| Wikipedia EN — Druzhba pipeline / 2026 Druzhba dispute | https://en.wikipedia.org/wiki/Druzhba_pipeline | |

---

## 10. Limites et incertitudes

1. **Niveaux de stocks pétroliers J98 non publiés** : aucun État ne publie en temps réel les niveaux de stocks stratégiques en période de crise (raison : signalement marché). Les chiffres présentés sont des **estimations** à ±10-15 % basées sur :
   - Baseline IEA Oil Stocks (dernières publications mensuelles)
   - Déduction proportionnelle des releases coordonnées (400 Mb le 11 mars 2026)
   - Annonces nationales (Allemagne 22 Mb, France 14,5 Mb)
2. **AGSI+ site par site** : la consultation des dashboards interactifs nécessite la navigation in-site ; les valeurs site par site (Chémery, Rehden, Bergermeer…) sont des estimations fondées sur le % pays.
3. **Localisation classifiée** : les emplacements exacts des stocks stratégiques sont **classifiés** dans la plupart des pays (FR notamment, pour raisons de sécurité). Les sites listés correspondent aux **infrastructures connues** (raffineries, dépôts commerciaux, cavités salines) qui hébergent une partie des stocks SAGESS / EBV / COVA / etc.
4. **Données dépendantes du contexte** : ce sont des données 2024-2025 ajustées pour le contexte J98. Toute donnée récente (post-juin 2026) doit être vérifiée à la source.
5. **Sources russes/iraniennes** (Rosneft DE, Pravda USA, IRNA) : à recouper systématiquement avec une source Tier 1/2 occidentale.
6. **Working volume vs capacité totale** : systématiquement distingué quand source disponible (Loenhout : 1,4 bcm total vs 0,77 bcm working). Quand non précisé, la valeur indiquée est le working volume.

---

## 11. Calendrier de mise à jour recommandé

| Type de donnée | Fréquence | Source canonique |
|---|---|---|
| UGS gaz (% fill, working volume) | Hebdomadaire | AGSI+ |
| GNL (inventory, send-out) | Hebdomadaire | ALSI |
| Prix Brent / TTF | Quotidien | Bloomberg, ICE, S&P Global |
| Stocks stratégiques pétroliers | Mensuel | IEA OMR + agences nationales |
| Statut raffineries | Sur événement | Communiqués opérateurs + Argus / S&P Global |
| Statut pipelines | Sur événement | Opérateurs + médias spécialisés |
| Capacités installées | Annuel | Concawe / FuelsEurope / EIA |

---

## 12. Liens internes

- [[infrastructures_europe]] — Document analytique principal
- [[sources_infrastructures]] — Sources zone du conflit (Iran/Golfe)
- [[index]] — Synthèse 3 scénarios
- [[scenario_realiste]] / [[scenario_pessimiste]] / [[scenario_optimiste]]- [`app/carte_infrastructures_europe.html`](app/carte_infrastructures_europe.html) — Carte interactive Europe
- [`app/carte_infrastructures.html`](app/carte_infrastructures.html) — Carte zone Ormuz

---

*Document compilé le 6 juin 2026 (J98). Maintenu en parallèle de [`app/carte_infrastructures_europe.html`](app/carte_infrastructures_europe.html) et [[infrastructures_europe]].*
