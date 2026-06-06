# Sources — Carte des infrastructures pétrolières et gazières
### Zone du conflit Ormuz élargie — État au 6 juin 2026 (J98)

Ce fichier répertorie toutes les sources OSINT utilisées pour compiler le dataset de la carte `app/carte_infrastructures.html`. Couverture : 54 sites individuels (champs, raffineries, terminaux, pétrochimie, centrales) + 7 pipelines stratégiques.

---

## Méthodologie de compilation

| Critère | Méthode |
|---|---|
| **Coordonnées géographiques** | Vérification croisée Wikipedia + OpenStreetMap + Global Energy Monitor (GEM). Précision visée 0,01° (~1,1 km). |
| **Capacité nominale** | Source primaire opérateur (Aramco, ADNOC, NIOC, QatarEnergy, KPC, Bapco) ou EIA country profiles. |
| **Statut opérationnel** | Recoupement minimum 2 sources Tier 1/2 ; pour les sites endommagés, exigence de communiqué officiel ou imagerie satellite (ESA, Planet Labs, Maxar). |
| **Date de référence** | 6 juin 2026 (J98) — révision recommandée hebdomadaire. |

### Codification des statuts

| Code | Couleur carte | Signification |
|---|---|---|
| `operational` | 🟢 vert | Production normale ou quasi-normale (>85 % capacité) |
| `reduced` | 🟡 jaune | Production sensiblement réduite mais active (40-85 %) |
| `paused` | 🟠 orange clair | Pause planifiée, maintenance, mais reprise possible rapidement |
| `shutin` | 🟠 orange foncé | Arrêt préventif lié au conflit (assurance, blocus, sécurité) |
| `damaged` | 🔴 rouge | Touché par frappe drone/missile — partiellement opérationnel ou en réparation |
| `destroyed` | 🟥 rouge foncé | Neutralisé pour longue durée (>6 mois) |
| `unknown` | ⚪ gris | Statut non documenté ou contradictoire entre sources |

---

## Sources par catégorie

### 1. Médias internationaux Tier 1

| Source | Couverture spécifique | URL principale |
|---|---|---|
| **Bloomberg** | Kharg Island (arrêt prolongé satellites 8-11 mai), Yanbu pumping station, Fujairah VTTI, South Pars frappe | https://www.bloomberg.com |
| **Reuters** | Frappes saoudiennes secrètes en Iran (révélation 12 mai), East-West pipeline, Rumaila shutdowns | https://www.reuters.com |
| **Al Jazeera** | South Pars/North Field, Bushehr IAEA, Kuwait Bubiyan raid, frappes Saudi sites, BAPCO, Mina Al-Ahmadi | https://www.aljazeera.com |
| **CNN** | Frappes US 7 mai (Qeshm, Bandar Abbas, sites de lancement, C2, ISR) | https://www.cnn.com |
| **Financial Times** | Analyse marchés, satellite-espion chinois sur infrastructures | https://www.ft.com |
| **The National (UAE)** | Ras Laffan reprise, Bubiyan port chinois, Kuwait Petroleum HQ, ADNOC | https://www.thenationalnews.com |
| **i24 News / Jerusalem Post** | Frappe émiratie secrète Lavan refinery, Asaluyeh frappes israéliennes | https://www.i24news.tv |

### 2. Médias spécialisés énergie / matières premières

| Source | Couverture spécifique |
|---|---|
| **Argus Media** | BAPCO force majeure, Mina Al-Ahmadi drones, prix Dated Brent |
| **S&P Global Commodity Insights** | Données Dated Brent (spot physique), spreads, raffineries |
| **OilPrice.com** | Goldman Hormuz 100 $, analyses sectorielles, Ras Tanura redémarrage |
| **Energy News (energynews.pro)** | SABIC Jubail missile strike détails |
| **Hydrocarbon Engineering** | EIA Mideast disruption mises à jour mensuelles |
| **Naturalgas Intel** | Retards North Field expansion Qatar |
| **OffshoreTechnology / Offshore Magazine** | Persian Gulf Star, plateformes offshore |
| **Pipeline Journal** | SUMED rerouting, infrastructure pipelines régionaux |
| **WorldOil / Rigzone** | Aramco Ras Tanura, retours capacité |
| **MEED (Middle East Economic Digest)** | Oman refining capacity, Basra terminal suspensions |

### 3. Institutions et agences officielles

| Source | Type de donnée |
|---|---|
| **EIA (US Energy Information Administration)** | Country profiles, STEO mensuel, capacités raffineries, pipelines (https://www.eia.gov) |
| **IEA / AIE (Oil Market Report)** | Shut-ins Golfe, pertes cumulées, demande mondiale (https://www.iea.org) |
| **IAEA / AIEA** | Bushehr projectile 4 avril, sites nucléaires (https://www.iaea.org) |
| **OPEC Monthly Market Report** | Production par pays, marges raffinage |
| **Saudi Aramco** | Communiqués Ras Tanura, East-West pipeline restoration (https://www.aramco.com) |
| **ADNOC** | Habshan-Fujairah, Das Island, exports (https://www.adnoc.ae) |
| **QatarEnergy** | Ras Laffan force majeure, North Field (https://www.qatarenergy.qa) |
| **NIOC / NIORDC (Iran)** | Communiqués officiels raffineries iraniennes (capacités) |
| **KNPC (Kuwait)** | Mina Al-Ahmadi, Shuaiba post-frappes |
| **Bapco Energies (Bahrain)** | Sitra force majeure, ravitaillement domestique |
| **OQ (Oman)** | Mina Al Fahal, Sohar, Duqm refining |

### 4. Centres de recherche et think tanks

| Source | Apport spécifique |
|---|---|
| **Critical Threats Project (AEI/ISW)** | Iran Update OPREP — frappes 7 mai, ciblage détaillé |
| **CSIS** | Analyses régionales, Trump-Xi summit |
| **Council on Foreign Relations (CFR)** | Backgrounders géopolitiques, Iran-US negotiations |
| **Atlantic Council** | Énergie Moyen-Orient, scénarios escalade |
| **FDD (Foundation for Defense of Democracies)** | Iran sanctions tracker, infrastructure attaquée |
| **MEI (Middle East Institute / mecouncil.org)** | South Pars / North Field strategic analyses |
| **Iran International** | Frappes israéliennes Asaluyeh, Mahshahr |
| **NCRI (Conseil National de la Résistance Iranienne)** | Détails frappes Abadan (à recouper) |
| **Geopolitics Unplugged (Substack)** | Synthèses infrastructure Iran |

### 5. Bases de données et imagerie

| Source | Type |
|---|---|
| **Global Energy Monitor (GEM)** | Bases de données globales pipelines, raffineries, champs (https://www.gem.wiki) |
| **Wikipedia (articles dédiés)** | Coordonnées vérifiées, contexte historique, articles "2026 Iran war", "2026 Strait of Hormuz crisis", "2026 Bubiyan Island raid", "2026 South Pars field attack", "Operation Project Freedom" |
| **OpenStreetMap (OSM)** | Coordonnées de référence, infrastructures terrestres |
| **Kpler** | Suivi maritime temps réel, tankers AIS, flux par port |
| **Vortexa** | Données complémentaires flux pétroliers |
| **MarineTraffic** | Position navires saisis, trafic Hormuz |
| **ESA Copernicus Sentinel-2** | Imagerie satellite incidents (Lavan, Sirri, Kharg) |
| **Planet Labs / Maxar** | Imagerie haute résolution dommages (via Bloomberg / NYT) |

### 6. Médias régionaux et sources secondaires

| Source | Périmètre |
|---|---|
| **Press TV / Tasnim / Fars (Iran)** | Communiqués officiels iraniens à recouper |
| **Globalsecurity.org** | OPREP day-by-day chronologies |
| **Times of Israel** | Front Liban, frappes israéliennes en Iran |
| **Arab News** | Perspective saoudienne, Aramco |
| **L'Orient-Le Jour / Naharnet** | Liban (hors scope infrastructure mais contexte) |
| **Discovery Alert / Pulse-Hub** | Pipelines flexible reporting |
| **HRW (Human Rights Watch)** | Attaques sur infrastructures énergétiques iraniennes |

---

## Liste détaillée des URLs sources utilisées (par site)

### Iran

**Kharg Island Oil Terminal**
- https://www.bloomberg.com/news/articles/2026-05-12/iran-kharg-island-oil-shipments-show-first-prolonged-halt-since-start-of-war
- https://www.bloomberg.com/news/articles/2026-05-13/kharg-island-oil-jetties-empty-again-yesterday-satellite-shows
- https://fortune.com/2026/05/02/iran-oil-production-cuts-crude-storage-limits-tank-tops-us-naval-blockade-hormuz/

**Abadan Refinery**
- https://en.964media.com/45681/
- https://www.ncr-iran.org/en/news/society/massive-fire-erupts-at-abadan-oil-refinery-irans-largest-raising-public-health-and-safety-concerns/
- https://en.wikipedia.org/wiki/Abadan_Refinery

**Isfahan Refinery**
- https://geopoliticsunplugged.substack.com/p/irans-oil-and-gas-infrastructure
- https://www.hrw.org/news/2026/04/22/israel-iran-unlawful-march-attacks-on-energy-infrastructure

**Persian Gulf Star Refinery (Bandar Abbas zone)**
- https://abdimedia.net/en/economic/persian-gulf-star-refinery-safe-condition
- https://www.offshore-technology.com/projects/persian-gulf-star-refinery/

**Lavan Island Refinery (frappe EAU secrète)**
- https://www.i24news.tv/en/news/middle-east/the-gulf/artc-the-uae-secretly-carried-out-military-strikes-on-iran-s-lavan-island-oil-refinery
- https://cryptobriefing.com/uae-secret-airstrike-iran-lavan-refinery/

**Sirri Island Terminal**
- https://www.turkiyetoday.com/region/explosions-reported-at-irans-lavan-refinery-and-sirri-island-hours-after-ceasefire-3217686
- https://www.newsweek.com/satellite-photos-show-iran-oil-island-fire-persian-gulf-11837819

**South Pars Gas Field**
- https://en.wikipedia.org/wiki/2026_South_Pars_field_attack
- https://www.bloomberg.com/news/articles/2026-03-18/iran-says-strikes-hit-key-south-pars-gas-field-oil-facilities
- https://mecouncil.org/blog_posts/israels-strike-on-north-field-south-pars-energy-war-and-global-risk/

**Asaluyeh Petrochemical**
- https://www.jpost.com/middle-east/iran-news/article-890393
- https://www.iranintl.com/en/202604219227

**Mahshahr Petrochemical Hub**
- https://www.thenationalnews.com/news/mena/2026/04/04/iran-says-us-israeli-strikes-hit-key-petrochemical-facilities/
- https://matzav.com/israeli-airstrikes-cripple-irans-key-petrochemical-hub-halting-nationwide-production/
- https://www.iranintl.com/en/202604065635

**Bushehr Nuclear**
- https://www.aljazeera.com/news/2026/4/4/iaea-says-projectile-hits-near-irans-bushehr-nuclear-plant-killing-one
- https://www.world-nuclear-news.org/articles/iran-tells-iaea-a-projectile-hit-bushehr-nuclear-plant-premises

**Qeshm Bahman Port + Bandar Abbas (frappes US 7 mai)**
- https://www.criticalthreats.org/analysis/iran-update-evening-special-report-may-7-2026
- https://www.cnn.com/2026/05/07/politics/us-forces-strike-military-facilities-in-iran
- https://www.twz.com/news-features/iranian-island-port-in-strait-of-hormuz-attacked-state-media-claims

### Arabie saoudite

**Ras Tanura Refinery**
- https://www.worldoil.com/news/2026/3/18/aramco-brings-ras-tanura-refinery-back-online-following-gulf-attacks/
- https://en.wikipedia.org/wiki/Ras_Tanura
- https://www.bloomberg.com/news/articles/2026-03-02/saudi-arabia-s-ras-tanura-refinery-shuts-down-after-drone-attack

**Abqaiq + East-West Pipeline**
- https://en.wikipedia.org/wiki/East%E2%80%93West_Crude_Oil_Pipeline
- https://longyield.substack.com/p/saudi-aramco-the-pipeline-that-saved
- https://www.aljazeera.com/economy/2026/4/12/saudi-arabia-says-key-oil-pipeline-back-to-full-capacity-after-attacks
- https://www.bloomberg.com/news/articles/2026-04-08/saudi-arabia-s-crucial-east-west-pipeline-hit-by-drone-attack

**Yanbu Terminal**
- https://houseofsaud.com/saudi-pipeline-blockade-osp/
- https://discoveryalert.com.au/aramco-pipeline-exports-hormuz-disruption-east-west-2026/

**Champs Aramco (Ghawar, Khurais, Manifa, Safaniya, Shaybah)**
- https://farmonaut.com/mining/ksa-oil-production-per-day-2026-trends-output
- https://www.eia.gov/international/content/analysis/countries_long/Saudi_Arabia/pdf/Saudi-Arabia.pdf
- https://www.bloomberg.com/news/articles/2026-03-07/saudi-arabia-intercepts-drones-heading-toward-shaybah-oil-field
- https://www.aljazeera.com/news/2026/4/9/saudi-arabia-says-operational-activities-halted-at-several-energy-sites

**Jubail SABIC Petrochemical**
- https://www.al-monitor.com/originals/2026/04/iran-has-attacked-saudi-arabias-jubail-petrochemical-complex-irgc-says
- https://www.jpost.com/middle-east/iran-news/article-892330
- https://energynews.pro/en/iranian-missiles-strike-sabic-petrochemical-plants-in-jubail-saudi-arabia

### Émirats Arabes Unis

**Fujairah Oil Terminal / VTTI**
- https://www.bloomberg.com/news/articles/2026-05-04/vtti-oil-facility-in-fujairah-struck-in-aerial-attack
- https://www.aljazeera.com/news/2026/5/4/uae-reports-missile-and-drone-strikes-incoming-from-iran
- https://www.aljazeera.com/news/2026/5/5/whats-the-significance-of-uaes-fujairah-hit-on-monday

**Habshan + ADCOP Pipeline**
- https://en.wikipedia.org/wiki/Habshan%E2%80%93Fujairah_oil_pipeline
- https://www.gem.wiki/Habshan%E2%80%93Fujairah_Oil_Pipeline
- https://www.cnbc.com/2026/03/12/strait-of-hormuz-oil-pipelines-iran-war-saudi-arabia-uae.html

**Zakum, Das Island, Ruwais**
- https://en.wikipedia.org/wiki/Upper_Zakum_oil_field
- https://www.adnoc.ae/en/adnoc-offshore
- https://cyprusshippingnews.com/2026/05/13/gulf-shipping-disruptions-highlight-need-for-alternative-export-routes-flexibility-adnoc-top-exec/

### Qatar

**Ras Laffan LNG**
- https://www.bloomberg.com/news/articles/2026-03-18/qatar-reports-extensive-damage-at-site-of-ras-laffan-lng-plant
- https://www.thenationalnews.com/business/energy/2026/04/09/months-expected-until-qatars-ras-laffan-lng-site-resumes-full-operations/
- https://www.qatarenergy.qa/en/MediaCenter/Pages/newsdetails.aspx?ItemId=3892
- QatarEnergy force majeure **prolongée jusqu'à mi-août 2026** (et non mi-juin) : ~17 % de la capacité de liquéfaction de Ras Laffan touchée (~12,8 Mt/an), réparation estimée 3-5 ans ; Ormuz coupe ~1/5 du GNL mondial — https://www.cnbc.com/2026/05/31/qatar-ras-laffan-lng-force-majeure-hormuz **⚠ lien rompu (404) au 04/06/2026 ; le chiffre « ~17 % » reste à recouper. Les dommages Ras Laffan sont par ailleurs documentés par Bloomberg (18/03) et The National (09/04) ci-dessus.** Prolongation mi-août recoupée : https://lngprime.com/ · consulté 6 juin 2026 · Cote: B2.

**North Field / Mesaieed**
- https://naturalgasintel.com/news/north-field-expansion-project-delays-likely-as-qatari-lng-output-crippled-by-iranian-attacks/
- https://www.aljazeera.com/economy/2026/3/19/why-are-irans-south-pars-gasfield-qatars-ras-laffan-so-significant
- https://www.aljazeera.com/news/2026/3/2/qatarenergy-worlds-largest-lng-firm-halts-production-after-iran-attacks

### Bahreïn

**Bapco Sitra Refinery**
- https://www.argusmedia.com/en/news-and-insights/latest-market-news/2798255-bahrain-s-bapco-issues-force-majeure-after-refinery-hit
- https://www.aljazeera.com/news/2026/3/9/bahrain-bapco-refinery-attack
- https://www.euronews.com/business/2026/03/09/bapco-declares-force-majeure-as-iran-sets-bahrains-only-refinery-ablaze

### Koweït

**Mina Al-Ahmadi / Shuaiba**
- https://www.aljazeera.com/news/2026/4/3/kuwait-desalination-plant-oil-refinery-hit-by-missile-and-drone-strikes
- https://www.argusmedia.com/en/news-and-insights/latest-market-news/2810088-kuwait-s-mina-al-ahmadi-refinery-hit-again-by-drones
- https://en.wikipedia.org/wiki/2026_Iranian_strikes_on_Kuwait
- https://www.thenationalnews.com/business/energy/2026/04/05/kuwait-petroleum-headquarters-and-power-plants-hit-by-drone-attacks/

**Mubarak Al-Kabeer Port (Bubiyan)**
- https://en.wikipedia.org/wiki/2026_Bubiyan_Island_raid
- https://www.aljazeera.com/news/2026/5/12/kuwait-says-it-foils-infiltration-operation-by-irans-irgc
- https://www.thenationalnews.com/news/gulf/2026/05/12/why-did-kuwaits-bubiyan-island-interest-irgc-infiltrators/

### Irak

**Champs Rumaila, West Qurna, Majnoon, Kirkuk**
- https://www.bloomberg.com/news/articles/2026-03-03/iraq-starts-shutting-oil-output-at-rumaila-as-storage-fills-up
- https://en.wikipedia.org/wiki/Rumaila_oil_field
- https://www.investing.com/news/commodities-news/iraq-slashes-oil-output-by-over-half-as-storage-fills-up-93CH-4540853
- https://english.aawsat.com/business/5247264-iraq-could-widen-oil-production-cut-more-3-million-bpd-within-days

**Terminaux Basra**
- https://en.wikipedia.org/wiki/Al_Ba%C5%9Frah_Oil_Terminal
- https://www.iss-shipping.com/advisories/middle-east-port-operations-update/
- https://www.meed.com/iraq-suspends-oil-exports-from-new-basra-terminal/

**Kirkuk-Ceyhan Pipeline**
- https://www.thenationalnews.com/business/energy/2026/03/16/iraq-works-to-revive-kirkuk-ceyhan-pipeline-as-southern-exports-halt/
- https://en.wikipedia.org/wiki/Kirkuk%E2%80%93Ceyhan_Oil_Pipeline

**Basra-Haditha (planifié)**
- https://www.thenationalnews.com/business/energy/2026/05/01/iraq-starts-work-on-basra-haditha-pipeline-for-crude-exports/

### Oman

**Mina Al Fahal, Sohar, Duqm**
- https://www.meed.com/exclusive-omans-refining-capacity-reaches-220000-bd-2/
- https://en.wikipedia.org/wiki/OQ_(company)
- https://www.omanobserver.om/article/1149230/business/energy/opening-of-duqm-refinery-enhances-efforts-to-attract-investment-to-oman
- https://omanet.om/en/news/economy/duqm-refinery-ebitda-106m-2025/
- https://www.gem.wiki/Mina_Al_Fahal-Sohar_Oil_Pipeline

### Yémen

**Aden, Marib, Ras Isa**
- https://www.yemenmonitor.com/en/Details/ArtMID/908/ArticleID/118257
- https://en.wikipedia.org/wiki/Marib%E2%80%93Ras_Isa_oil_pipeline
- https://farmonaut.com/mining/yemen-oil-and-gas-reserves-2026-strategic-outlook

### Égypte

**SUMED Pipeline (bypass Suez-Méditerranée)**
- https://www.egyptindependent.com/egypts-sumed-oil-flows-jump-150-on-red-sea-trade-rerouting/
- https://www.pipeline-journal.net/news/egypt-offers-sumed-pipeline-saudi-crude-strategic-bypass-amid-red-sea-oil-shift
- https://en.wikipedia.org/wiki/Sumed_pipeline
- **MAJ J95 (1er juin 2026)** : l'Iran suspend les pourparlers et **menace le détroit de Bab el-Mandeb** (risque pesant sur le bypass SUMED/mer Rouge) — https://www.euronews.com/2026/06/01/iran-suspends-negotiations-hormuz
- **MAJ J98 (6 juin 2026)** : sur la fenêtre 2-6 juin, la menace iranienne sur Bab el-Mandeb reste **verbale** — aucune attaque effective constatée — **[SPÉCULATION/B3]**. À surveiller comme indicateur de bascule vers le scénario pessimiste.

---

## Règles d'utilisation

1. **Vérification croisée systématique** : tout statut `damaged` ou `destroyed` doit être confirmé par ≥ 2 sources Tier 1/2 indépendantes + idéalement imagerie satellite.
2. **Statut `unknown`** : usage strict — quand aucune source post-28 février 2026 n'est disponible.
3. **Capacités nominales** : valeurs pré-crise sauf mention spécifique ; ne reflètent **pas** la production effective post-conflit.
4. **Coordonnées** : précision ~1 km ; suffisante pour cartographie tactique-stratégique, **insuffisante pour ciblage**.
5. **Mise à jour** : ce fichier et la carte doivent être révisés **hebdomadairement** (chaque vendredi soir) et systématiquement après tout incident majeur.

---

## Limitations connues

- **Statut Iran** : les données NIOC/NIORDC sont systématiquement à recouper (propagande possible). Les opérations souterraines/stockage stratégique iranien restent largement opaques.
- **Imagerie satellite** : accès limité aux images Planet Labs / Maxar via publications tierces (Bloomberg, NYT, Reuters) — pas d'accès direct.
- **Champs offshore** : coordonnées approximatives (centre de la zone d'exploitation) ; les plateformes individuelles ne sont pas cartographiées.
- **Pipelines** : tracé simplifié (origine → destination en ligne droite) ; les tracés réels suivent des couloirs spécifiques.
- **Houthis (Yémen)** : silence persistant depuis le 28 février, fragilité analytique pour le scope Bab al-Mandeb (sites Yéménites largement inactifs depuis la guerre civile).
- **Sites mineurs** : ~10-15 raffineries de petite capacité et champs marginaux non répertoriés (volonté de lisibilité).

---

*Compilation arrêtée au 6 juin 2026 (J98 du conflit). Total : 54 sites individuels + 7 pipelines stratégiques. Prochaine révision : 13 juin 2026.*
