# Sources OSINT — Crise du Détroit d'Ormuz
### Classement par fiabilité et domaine d'expertise
#### Dernière mise à jour : 21 juillet 2026 (J144) — ajout de la fenêtre J142→J144 · socle méthodologique inchangé depuis le 6 juin 2026 (J98) : éviction des sources orientées

---

## Méthodologie de classification

Chaque source est évaluée selon 3 critères :

- **Fiabilité** : exactitude historique, rigueur éditoriale, indépendance. Échelle de ⭐ (faible) à ⭐⭐⭐⭐⭐ (référence absolue).
- **Type** : domaine principal couvert (M = Militaire, P = Politique/Diplomatique, E = Économique/Marchés, S = Social/Impact vie quotidienne, T = Technique/Énergie, D = Données brutes).
- **Tier** : priorité de consultation (Tier 1 = consulter systématiquement, Tier 2 = consulter si pertinent, Tier 3 = source complémentaire).

---

## Convention de référence (cible) et traçabilité

Pour rendre chaque chiffre re-vérifiable dans le temps, le format de référence **cible** est :

> [Titre] — Éditeur, JJ mois AAAA. URL live · Archive : `web.archive.org/…` (consulté le JJ/MM/AAAA) · Cote : B2

Règles : (1) doubler l'URL live d'une **copie d'archive** (Wayback / archive.today) pour les pages volatiles ; (2) indiquer la **date de consultation** pour tout chiffre ; (3) pour les bases temps réel (AGSI+, Eurostat, IEA OMR), citer le **snapshot daté**, jamais la racine du site.

> **⚠ Liens rompus signalés au 4 juin 2026** — trois sources étayant des faits structurants ont une URL cassée (404) au moment du contrôle. Les faits concernés sont marqués `⚠ source à revérifier` ci-dessous et restent **à recouper sur ≥ 2 sources Tier 1** avant d'être tenus pour confirmés. Aucune URL de substitution n'a été inventée (principe : ne pas combler un manque par une supposition).

---

## Tier 1 — Sources de référence (consulter systématiquement)

| Source | Type | Fiabilité | Spécificité dans cette crise | Biais connus |
|---|---|---|---|---|
| **Wikipedia (2026 Iran war)** | M, P | ⭐⭐⭐⭐ | Article vivant, mis à jour en quasi-temps réel, synthèse factuelle exceptionnelle. Chronologie la plus complète disponible. | Délai de vérification variable, certains faits non sourcés dans les premières heures |
| **NPR (National Public Radio)** | M, P, E | ⭐⭐⭐⭐⭐ | Live updates structurés par thème (Strait, Lebanon, Economy). Couverture équilibrée, citations directes des officiels. | Perspective américaine dominante |
| **CNN** | M, P | ⭐⭐⭐⭐ | Breaking news rapide, accès aux sources Pentagon/CENTCOM. Correspondants sur zone. | Sensationnalisme occasionnel, rotation rapide des titres |
| **Al Jazeera** | M, P | ⭐⭐⭐⭐ | Couverture inégalée du point de vue iranien/arabe/Hezbollah. Sources exclusives Pakistan/Iran. A révélé la « percée nucléaire » le 16 avril. | Financement qatari, biais pro-Iran perceptible sur le Liban |
| **Reuters** | M, P, E | ⭐⭐⭐⭐⭐ | Dépêches factuelles, peu de commentaire, très fiable sur les chiffres. | Accès paywall, parfois en retard sur le breaking news |
| **Bloomberg** | E, T | ⭐⭐⭐⭐⭐ | Données de marché en temps réel, analyses économistes de premier plan, modèles d'impact. A chiffré le choc zone euro. | Paywall strict, perspective marchés financiers dominante |
| **CNBC** | E | ⭐⭐⭐⭐ | Suivi des marchés en direct, interviews de traders et analystes. Couverture Hormuz-marché de qualité. | Biais pro-marché, tendance à l'optimisme sur les résolutions |

---

## Tier 1 — Institutions et données officielles

| Source | Type | Fiabilité | Spécificité dans cette crise | Notes |
|---|---|---|---|---|
| **AIE (Agence Internationale de l'Énergie)** | T, E, D | ⭐⭐⭐⭐⭐ | Oil Market Report mensuel : données d'offre/demande les plus fiables. A déclaré la « plus grande disruption de l'histoire ». Rapport avril : contraction demande, scénario « Strait Down ». | Publication mensuelle (délai), parfois révisé rétroactivement |
| **EIA (Energy Information Administration, US)** | T, E, D | ⭐⭐⭐⭐⭐ | STEO (Short-Term Energy Outlook) mensuel. Prévisions prix Brent/WTI par trimestre. Données inventaires US hebdomadaires. | Perspective américaine, hypothèses parfois optimistes sur la durée du conflit |
| **FMI** | E | ⭐⭐⭐⭐⭐ | World Economic Outlook avril 2026 : 3 scénarios (référence/adverse/sévère), quasi-récession à 2%. Document de référence pour les gouvernements. | Publication semestrielle, modèles parfois en retard sur la réalité |
| **Goldman Sachs** | E | ⭐⭐⭐⭐ | Prévisions Brent (85 $ moyen 2026, 71 $ T4 si détroit rouvre), probabilité récession US 30%, estimation flux Ormuz à 10%. | Intérêts financiers propres, prévisions parfois auto-réalisatrices |
| **Banque de France / Villeroy de Galhau** | E, S | ⭐⭐⭐⭐⭐ | Prévisions inflation/croissance France, impact sectoriel. Citation clé : « un peu plus d'inflation, un peu moins de croissance, mais pas de stagflation ». | Tendance institutionnelle à minimiser les risques |
| **INSEE** | E, S, D | ⭐⭐⭐⭐⭐ | Données prix à la consommation, inflation, indices de confiance. Prévision inflation 1,9% en juin (avec baril à 100 $). | Données en retard (T-1 à T-2 mois) |
| **Kpler** | T, D | ⭐⭐⭐⭐⭐ | Tracking maritime en temps réel, données de flux pétroliers et GNL. A mesuré les premiers transits post-cessez-le-feu. | Service payant, données parfois partielles sur les navires dark |
| **UKMTO (UK Maritime Trade Operations)** | M, T | ⭐⭐⭐⭐⭐ | Rapports d'incidents maritimes dans le détroit d'Ormuz. Source primaire pour les attaques sur les navires. | Perspective britannique, ne couvre pas toujours la version iranienne |

---

## Tier 1 — Carburants raffinés FR/UE (stocks, prix, imports)

Sources officielles dédiées au suivi fin des 4 carburants concrets côté ménages et économie : **fioul domestique (FOD)**, **essences SP95-E10 / SP98**, **gazole routier (B7)** et **gazole non routier (GNR / fuel agricole)**.

| Source | Type | Fiabilité | Spécificité dans cette crise | Notes |
|---|---|---|---|---|
| **prix-carburants.gouv.fr (Open Data DGEC)** | E, S, D | ⭐⭐⭐⭐⭐ | Prix de +11 000 stations FR, géoloc, ruptures, fermetures. API instantanée v2 (≈10 min) et API J-1 (5h). Couvre SP95/SP95-E10/SP98/gazole/GPL/E85 (pas FOD/GNR). | https://www.prix-carburants.gouv.fr/rubrique/opendata/ · API : https://data.economie.gouv.fr/explore/dataset/prix-des-carburants-en-france-flux-instantane-v2/api/ |
| **DGEC — Bulletin pétrolier hebdo (NPG)** | E, T, D | ⭐⭐⭐⭐⭐ | **Seule série officielle longue couvrant les 4 carburants** (SP95/SP98/gazole/FOD/GNR) — prix moyens hebdo (vendredi) depuis 1985, marges brutes, cotations internationales, taxes. Mention régulière du « jours stocks ». | https://www.ecologie.gouv.fr/politiques-publiques/prix-produits-petroliers |
| **Commission UE — Weekly Oil Bulletin** | E, D | ⭐⭐⭐⭐⭐ | Prix conso hebdo (jeudi) Eurosuper 95, automotive diesel, heating gasoil, heating fuel oil, 27 États membres TTC EUR/L. | https://energy.ec.europa.eu/data-and-analysis/weekly-oil-bulletin_en |
| **Eurostat `nrg_stk_oilm`** | T, D | ⭐⭐⭐⭐⭐ | Volumes stocks (1 000 t) par produit (brut / motor gasoline / middle distillates / residual) par pays UE, mensuel. | https://ec.europa.eu/eurostat/databrowser/view/nrg_stk_oilm/ |
| **Eurostat `nrg_stk_oem`** | T, D | ⭐⭐⭐⭐⭐ | Days of cover (jours équivalents d'imports nets) par pays UE — indicateur conforme à l'obligation IEA 90 j et à la Directive UE 2009/119/CE. | https://ec.europa.eu/eurostat/databrowser/view/nrg_stk_oem__custom_18524671/default/table |
| **Eurostat `NRG_TI_OIL`** | T, E, D | ⭐⭐⭐⭐⭐ | Imports pétrole & produits raffinés par pays partenaire, par État membre, mensuel. Permet le calcul direct du % d'imports UE/FR via Ormuz (Arabie+Irak+EAU+Koweït+Qatar+Iran). | https://ec.europa.eu/eurostat/databrowser/view/NRG_TI_OIL/ |
| **Eurostat `nrg_cb_oilm`** | T, D | ⭐⭐⭐⭐ | Production, transformation raffinage, conso finale par pays/produit, mensuel. | https://ec.europa.eu/eurostat/databrowser/view/nrg_cb_oilm/default/table |
| **JODI-Oil World Database** | T, D | ⭐⭐⭐⭐ | Production/conso/stocks/trade mensuel, **gratuit**, France téléchargeable depuis 2002. Alternative pratique au MODS IEA payant. | https://www.jodidata.org/oil/ |
| **SAGESS — Société Anonyme de Gestion de Stocks de Sécurité** | T, D | ⭐⭐⭐⭐⭐ | Opérateur des stocks stratégiques pétroliers français (~3,9 Md€ d'obligations). Rapport annuel, prospectus obligataire, communications de crise. | https://www.sagess.fr/ |
| **Douanes françaises — page GNR** | E, T, D | ⭐⭐⭐⭐ | Régime fiscal GNR (accise réduite 3,86 €/hL agricole/forestier depuis 2024), volumes mise à la consommation. | https://www.douane.gouv.fr/professionnels/energie/gazole-non-routier-gnr |

---

## Tier 2 — Sources de qualité (consulter si pertinent)

| Source | Type | Fiabilité | Spécificité dans cette crise | Notes |
|---|---|---|---|---|
| **Washington Post** | P, M | ⭐⭐⭐⭐ | Enquêtes approfondies, sources White House/State Department. A révélé des détails des pourparlers d'Islamabad. | Paywall, biais anti-Trump perceptible |
| **NBC News** | M, P | ⭐⭐⭐⭐ | Live blogs structurés, données MarineTraffic exclusives (flux de navires Hormuz). | Perspective américaine |
| **CBS News** | M, P | ⭐⭐⭐⭐ | Live updates détaillés, vidéos CGRI/CENTCOM, analyse des saisies de navires. | Perspective américaine |
| **PBS NewsHour** | P, M | ⭐⭐⭐⭐⭐ | Analyse approfondie, moins de sensationnalisme, contexte historique. | Couverture moins rapide que CNN/NBC |
| **Times of Israel** | M, P | ⭐⭐⭐⭐ | Couverture exhaustive du front Liban, sources IDF, analyse politique israélienne. | Biais pro-israélien assumé |
| **Euronews** | P, M, S | ⭐⭐⭐⭐ | Perspective européenne, suivi FINUL/France, analyse impact UE. A couvert la mort des soldats français. | Moins approfondi que les sources anglo-saxonnes |
| **Financial Times** | E, P | ⭐⭐⭐⭐⭐ | Enquêtes exclusives (satellite-espion chinois), analyse marchés, géopolitique du pétrole. | Paywall strict |
| **Fortune** | E, D | ⭐⭐⭐ | Prix du Brent quotidien avec contexte, accessible et clair. | Pas de couverture géopolitique approfondie |
| **Trading Economics** | E, D | ⭐⭐⭐⭐ | Données de prix en temps réel (Brent, WTI, matières premières), graphiques historiques. | Données CFD, pas les prix officiels ICE/CME |
| **OilPrice.com** | T, E | ⭐⭐⭐ | Analyses sectorielles pétrole/gaz, interviews d'experts énergie. | Orientation industrie pétrolière, publicité agressive |
| **Council on Foreign Relations (CFR)** | P | ⭐⭐⭐⭐⭐ | Analyses géopolitiques de référence, backgrounders factuels. Citation clé : « pas de changement de régime, Iran garde le levier. » | Perspective establishment américain |
| **Foreign Policy** | P, E | ⭐⭐⭐⭐ | Analyses longues et nuancées, perspective China/MENA. « La Chine ne panique pas. » | Biais interventionniste modéré |
| **The Diplomat** | P | ⭐⭐⭐⭐ | Couverture Asie-Pacifique, analyse de la stratégie chinoise, impact sur les routes maritimes. | Focus Asie, moins de couverture Europe/France |
| **S&P Global Commodity Insights** | T, E, D | ⭐⭐⭐⭐⭐ | Données Dated Brent (prix spot physique), analyse raffineries, spreads. | Très technique, paywall |
| **Rystad Energy** | T, E | ⭐⭐⭐⭐ | Modèles de production/shut-in, prévisions restauration capacités. A estimé « des semaines sinon des mois » pour la normalisation. | Service payant |

---

## Tier 2 — Sources françaises

| Source | Type | Fiabilité | Spécificité dans cette crise | Notes |
|---|---|---|---|---|
| **franceinfo** | P, S | ⭐⭐⭐⭐ | Suivi gouvernemental, réactions politiques, impact social France. | Tendance institutionnelle |
| **L'Argus (carburants)** | S, D | ⭐⭐⭐⭐⭐ | Prix à la pompe station par station, données historiques depuis 1985. Source de référence pour le record du gazole (2,188 €/l). | Spécialisé carburants uniquement |
| **Roole (ex-Automobile Club)** | S, D | ⭐⭐⭐⭐ | Calculs surcoût du plein, comparatifs régionaux, budget automobiliste. | Perspective automobiliste |
| **Optima Énergie** | T, S | ⭐⭐⭐ | Explications pédagogiques sur les mécanismes de prix, impact fioul domestique. | Source secondaire |
| **The Conversation France** | E, S | ⭐⭐⭐⭐ | Articles d'universitaires, analyses structurées, vulgarisation de qualité. | Parfois en retard sur l'actualité |
| **Banque de France (site officiel)** | E, D | ⭐⭐⭐⭐⭐ | Projections macro, analyses sectorielles, données statistiques. | Publications trimestrielles |

---

## Tier 2 — Carburants raffinés FR/UE (filière et instituts spécialisés)

| Source | Type | Fiabilité | Spécificité dans cette crise | Notes |
|---|---|---|---|---|
| **CPDP — Comité Professionnel du Pétrole** | E, T, D | ⭐⭐⭐⭐⭐ | Bulletin mensuel par **produit fini** (SP95, SP98, gazole, FOD, GNR) — **seule source FR avec granularité fine SP95 vs SP98 et GNR vs gazole**. « Bible du pétrole » annuelle (~310 pages, parution juillet). Carte des dépôts pétroliers et ruptures stations. | https://www.cpdp.org/donnees-statistiques |
| **SDES — Service des données et études statistiques (Ministère Transition écologique)** | E, T, D | ⭐⭐⭐⭐ | Bilan énergétique annuel France, Chiffres clés énergie, ventilation conso par produit et par secteur. Mix chauffage ménages (électricité 37,2 %, gaz 35,8 %, **FOD ~10 % = 2,7 M ménages**). | https://www.statistiques.developpement-durable.gouv.fr/ |
| **UFIP Énergies et Mobilités** | E, T, D | ⭐⭐⭐⭐ | Statistiques livraisons mensuelles par carburant, communiqués filière (ex : Gonfreville à 100 % capacité, 27/04/2026). Études prospectives raffinage. | https://www.energiesetmobilites.fr/ |
| **FranceAgriMer** | E, S, D | ⭐⭐⭐⭐⭐ | **GNR (gazole agricole)** : prix, aides gouvernementales, impacts sectoriels (céréales, élevage, viticulture). Essentiel pour anticiper un Gilets Jaunes 2.0 agricole en scénario B+C. | https://www.franceagrimer.fr |
| **FF3C — Fédération Française des Combustibles, Carburants et Chauffage** | E, S, D | ⭐⭐⭐⭐ | **FOD (fioul domestique)** : prix, stocks distribués, spécificités chauffage résidentiel France, biofioul. | https://www.ff3c.asso.fr |
| **INSEE — Provenance et consommation produits pétroliers** | E, S, D | ⭐⭐⭐⭐ | Séries longues d'imports de brut par pays d'origine + consommations par produit. Permet de pondérer la dépendance Ormuz historique. | https://www.insee.fr/fr/statistiques/2119697 · https://www.insee.fr/fr/statistiques/2119673 |
| **IRIS — OSFME « Les détroits » (juillet 2025)** | P, T | ⭐⭐⭐⭐ | Rapport de référence sur la dépendance française et européenne aux détroits stratégiques (Ormuz, Bab el-Mandeb, Malacca). Source qualitative + données structurées de flux. | https://www.iris-france.org/wp-content/uploads/2025/07/OSFME_2025_07_Detroits_Rapport-VF2.pdf |
| **DG Trésor — Échanges bilatéraux Arabie / Pays du Golfe** | E, D | ⭐⭐⭐⭐ | Notes pays Trésor + Lekiosque Finances : volumes et valeurs imports hydrocarbures FR par pays partenaire. Repère 2024 : Moyen-Orient = 12 % brut FR (Arabie 3 %, Irak ~3 %). | https://www.tresor.economie.gouv.fr/Pays/SA/les-relations-bilaterales-entre-la-france-et-l-arabie-saoudite · https://lekiosque.finances.gouv.fr/ |
| **CIM-CCMP / Noven (ex-Pisto)** | T, D | ⭐⭐⭐ | Leader indépendant logistique pétrolière France. Terminaux Le Havre + Antifer (~5 Mm³ dont 3 Mm³ brut et 1,7 Mm³ produits raffinés). | https://www.cim-ccmp.com/ |
| **FFPI — Fédération Française des Pétroliers Indépendants** | E, T | ⭐⭐⭐ | 9-10 sociétés indépendantes importateurs/distributeurs/dépôts agréés. Acteurs régionaux clés FOD et biofioul. | https://institutions-professionnelles.fr/repertoire-fiche/1468-federation-francaise-des-petroliers-independants-union-of-european-petroleum-independents |
| **Connaissance des Énergies** | E, T, S | ⭐⭐⭐⭐ | Fiches pédagogiques sur le pétrole, le fioul, le raffinage. Source secondaire mais rigoureuse (cite SDES/CPDP/UFIP). | https://www.connaissancedesenergies.org/ |
| **Terre-net / Réussir Machinisme** | S, D | ⭐⭐⭐ | Suivi prix moyen national GNR, évolutions hebdomadaires, commentaires filière agricole. Cite CPDP/UFIP. | https://www.terre-net.fr/carburants/t179 · https://www.reussir.fr/machinisme/comment-evolue-le-prix-du-gnr |

---

## Tier 1 — AdBlue / Urée technique (filière SCR diesel Euro VI)

Sources officielles pour le suivi de l'**AdBlue (DEF, solution AUS 32 = 32,5 % urée technique ISO 22241 + 67,5 % eau déminéralisée)**. Obligatoire sur tous les véhicules diesel Euro VI via SCR (poids lourds, autocars, VUL, voitures particulières post-2014, tracteurs Stage V). **Sans bypass légal** : refus de démarrer après 2-3 pleins gazole. **Pas de stock stratégique national** : l'AdBlue n'est PAS dans le périmètre SAGESS. Chaîne d'approvisionnement : gaz naturel → ammoniac (NH₃, Haber-Bosch) → urée → AdBlue. **35-40 % du commerce mondial d'urée transite par Ormuz** (Qatar QAFCO 5,6 Mt/an + UAE Fertiglobe + Arabie SAFCO + Oman OMIFCO + Iran).

| Source | Type | Fiabilité | Spécificité dans cette crise | Notes |
|---|---|---|---|---|
| **VDA AdBlue (Verband der Automobilindustrie)** | T, D | ⭐⭐⭐⭐⭐ | Gouvernance norme ISO 22241, liste des licenciés AdBlue (PDF mis à jour mai 2026), certifications qualité. | https://www.vda.de/en/topics/innovations/emission-reduction/adblue · Licenciés : https://www.vda.de/dam/jcr:a884b8b2-c348-4648-9295-de3467a6f2ff/2023-04-12_Lizenznehmer_AdBlue.pdf |
| **VDA QMC** | T, D | ⭐⭐⭐⭐⭐ | Certifications AdBlue qualité (production, transport, dispense). | https://vda-qmc.de/en/vda-zertifizierungen/adblue/ |
| **Fertilizers Europe** | T, E, D | ⭐⭐⭐⭐⭐ | Lobby UE des producteurs d'engrais. Données capacité ammoniac/urée, monitor gaz vs production NH₃, communiqués de crise. | https://www.fertilizerseurope.com/ |
| **IRU — International Road Transport Union** | E, S, D | ⭐⭐⭐⭐ | Impact transport routier mondial, AdBlue volatilité, communiqués de crise. | https://www.iru.org/news-resources/newsroom |
| **SDES — Parc automobile France** | E, D | ⭐⭐⭐⭐⭐ | Parc PL diesel SCR FR : 625 000 (1er jan 2024), 621 500 (1er jan 2025). Pour calcul conso AdBlue bottom-up. | https://www.statistiques.developpement-durable.gouv.fr/parc-et-circulation-des-vehicules-routiers |
| **Eurostat COMEXT** (code TARIC 31021010 urée) | T, D | ⭐⭐⭐⭐ | Imports urée par origine et par État membre UE, mensuel. Permet calcul % via Ormuz baseline. | https://ec.europa.eu/eurostat/databrowser/ |
| **Yara International — corporate** | T, D | ⭐⭐⭐⭐ | Premier producteur urée/AdBlue UE. Site intégré FR Le Havre (184 kt/an AdBlue, seul site NH₃→urée→AdBlue de France). | https://www.yara.com/ · https://www.yara.fr/ |

---

## Tier 2 — AdBlue / Urée technique (analystes, opérateurs, presse spécialisée)

| Source | Type | Fiabilité | Spécificité dans cette crise | Notes |
|---|---|---|---|---|
| **CRU Group** | T, E | ⭐⭐⭐⭐⭐ | Analyses urée/ammoniac/engrais, perturbations Moyen-Orient ("catastrophic"). | https://www.crugroup.com/en/communities/thought-leadership/2026/Middle-East-Conflict-Urea-supply-disruptions-could-be-catastrophic/ |
| **Rystad Energy — Hormuz fertilizer** | T, E | ⭐⭐⭐⭐⭐ | Quantification flux urée via Ormuz (18,5 Mt/an = 35-40 % commerce mondial). | https://www.rystadenergy.com/news/beyond-oil-strait-of-hormuz-power-struggle-threatens-fertilizer-and-ammonia-trade |
| **Kpler — Gulf fertiliser dependency** | T, D | ⭐⭐⭐⭐⭐ | Tracking maritime flux engrais Golfe, scénarios de disruption Ormuz. | https://www.kpler.com/blog/global-fertiliser-dependency-on-gulf-exports-what-if-hormuz-is-disrupted |
| **Profercy** (insights urée/ammoniac) | T, D | ⭐⭐⭐⭐ | Données opérationnelles QAFCO Q1 2026, suivi capacités. | https://www.profercy.com/ |
| **ICIS** (Chemical Industry News) | T, E | ⭐⭐⭐⭐ | Marchés ammoniac/urée/intermédiaires chimiques. | https://www.icis.com/ |
| **Argus Media — Fertilizer / Polish ferts suspension** | T, E, D | ⭐⭐⭐⭐ | Suivi prix urée + ammoniac, communications producteurs (ex : Grupa Azoty mars 2026). | https://www.argusmedia.com/ |
| **IFPRI — International Food Policy Research Institute** | E, S | ⭐⭐⭐⭐ | Impacts sur marchés engrais + sécurité alimentaire mondiale. | https://www.ifpri.org/blog/the-iran-wars-impacts-on-global-fertilizer-markets-and-food-production/ |
| **Carnegie Endowment — Hormuz food crisis** | P, E | ⭐⭐⭐⭐ | Analyse géopolitique cascade engrais → crise alimentaire. | https://carnegieendowment.org/emissary/2026/03/fertilizer-iran-hormuz-food-crisis |
| **The Fertilizer Institute (TFI, USA)** | T, E | ⭐⭐⭐⭐ | Cadrage filière US + conséquences mondiales (PDF mars 2026). | https://www.tfi.org/ |
| **trans.info** (FR/EN — transporteurs routiers UE) | S, E | ⭐⭐⭐⭐ | Suivi prix AdBlue retail + alertes filière transport routier Europe. | https://trans.info/fr/les-prix-de-l-adblue-s-envolent-le-conflit-au-moyen-orient-462563 |
| **Trasporto Europa** | S, E | ⭐⭐⭐ | Impact transport Italie/Europe, AdBlue +20-25 % retail Italie. | https://www.trasportoeuropa.it/english/gulf-war-hits-adblue-as-well/ |
| **Upply — Market Insights** | E, S | ⭐⭐⭐ | Approvisionnement vital transporteurs, prix AdBlue contextualisé. | https://market-insights.upply.com/fr/adblue-un-approvisionnement-vital-pour-les-transporteurs |
| **Terre-net / Réussir — engrais N** | S, E | ⭐⭐⭐⭐ | Suivi des lignes ammoniac UE à l'arrêt (>50 % depuis mars 2026), prix engrais, impact agri. | https://www.terre-net.fr/prix-des-intrants/article/220740/plus-de-la-moitie-des-lignes-de-production-d-ammoniac-en-europe-sont-a-l-arret |
| **Energy News (oedigital) — Grupa Azoty suspension** | T, E | ⭐⭐⭐⭐ | Annonce suspension nouvelles commandes engrais N Pologne (3 mars 2026). | https://energynews.oedigital.com/mineral-resources/2026/03/03/as-gas-prices-rise-grupa-azoty-in-poland-suspends-all-new-orders-for-nitrogen-fertilizers |
| **Connaissance des Énergies — Urée/AdBlue** | T, S | ⭐⭐⭐ | Vulgarisation rigoureuse (cite SDES/CPDP/UFIP/FF3C). | https://www.connaissancedesenergies.org/ |
| **FNTR — Fédération Nationale Transport Routier** | S, E, D | ⭐⭐⭐⭐ | Communiqués impact carburants + AdBlue sur transporteurs FR (78 % dirigeants insatisfaits 17/05/2026, record). | https://www.fntr.fr/espace-presse-et-partenariats/communiques-de-presse |
| **BGL — Bundesverband Güterkraftverkehr (Allemagne)** | S, E | ⭐⭐⭐⭐ | Projection prix AdBlue Allemagne +170 % possible (membre IRU). | https://www.bgl-ev.de/ |
| **Bulteau Services / Cuve Expert / ad-blue.fr** | S, D | ⭐⭐ | Suivi prix retail AdBlue France (vrac, IBC, bidons). À recouper. | https://bulteauservices.com/prix-adblue-2026/ · https://cuve-expert.fr/blog/prix-adblue/ |
| **OCI Annual Report / Yara press / Fertiberia** | T, D | ⭐⭐⭐⭐ | Données opérateurs (OCI Geleen NL +99 % AdBlue 2025, Yara Sluiskil capacité, Fertiberia nouvelle usine FR fév 2025). | https://www.fertiberia.com/en/fertiberia-grows-in-france-with-a-new-adblue-plant/ |

---

## Tier 3 — Sources complémentaires / à utiliser avec prudence

| Source | Type | Fiabilité | Spécificité dans cette crise | Notes |
|---|---|---|---|---|
| **Global Times (Chine)** | P | ⭐⭐ | Ligne éditoriale du PCC. Utile pour comprendre la communication officielle chinoise, pas pour les faits. | Propagande étatique assumée |
| **Press TV / Tasnim / Fars (Iran)** | M, P | ⭐⭐ | Médias d'État/semi-officiels iraniens. Sources primaires pour les communiqués CGRI, saisies de navires, pertes iraniennes. À recouper impérativement. | Propagande, chiffres souvent invérifiables |
| **Truth Social (Trump)** | P | ⭐⭐ | Source primaire pour les déclarations de Trump (« shoot and kill », « Iran collapsing »). Vérifier si les actions suivent les paroles. | Déclarations contradictoires fréquentes dans la même journée |
| **Fox News / Fox Business** | P, E | ⭐⭐⭐ | Accès aux interviews de Trump et administration. Source pour les déclarations Leavitt, Bessent, Hassett. | Biais pro-Trump fort |
| **Axios** | P | ⭐⭐⭐⭐ | Scoops courts et vérifiés, format efficace. | Très bref, manque de profondeur |
| **Arab News** | P, M | ⭐⭐⭐ | Perspective saoudienne, couverture Golfe. | Biais pro-saoudien |
| **Pravda France** | P | ⭐⭐ | Reprend des dépêches avec angle russe. Utile pour la perspective Moscou uniquement. | Biais pro-russe fort |
| **Oxford Institute for Energy Studies** | T, E | ⭐⭐⭐⭐⭐ | Analyses académiques de référence sur le marché pétrolier et la stratégie chinoise. | Publications espacées, académiques |

---

## Recalibrage méthodologique J89 — sources écartées de la pondération

**Suite à la fenêtre J88-J89 (Trump 23/05 → WH démenti 27/05), recalibrage explicite** :

**Sources désormais utilisées avec prudence forte ou écartées** :
- ❌ **Pravda Trump / Pravda USA / Pravda EN** (aggregateurs pro-régime russe, biais structurel)
- ❌ **IRIB / Press TV / Tasnim / Fars** seules — uniquement si recoupé Reuters/AFP/Bloomberg
- ⚠️ **Truth Social** (Trump) : signal politique, jamais fait
- ⚠️ Wikipedia : utile pour cadrage, jamais comme source primaire de pondération
- ⚠️ Agrégateurs sans rédaction (newscord, lookonchain, etc.)
- ⚠️ Sources Israël-pro-régime (Israel National News, JNS) seules — biais possible
- ⚠️ Sources Trump-friendly type Trending Politics — biais

**Sources Tier 1 privilégiées pour pondération** :
- Reuters, AFP, AP (agences)
- Bloomberg, Financial Times (économique)
- IEA, EIA, AGSI+ (énergie officielle)
- Banque de France, INSEE, Eurostat (FR/UE officiel)
- Commission UE, BCE, IMF (institutions)
- Goldman Sachs, JPMorgan, Morgan Stanley (prévisions calibrées avec accès terrain)
- The Soufan Center, Crisis Group, CFR (analyse stratégique indépendante)
- Al Jazeera (pour MENA, biais qatari mais analyse souvent solide)
- CNN, NPR, PBS, BBC (mainstream avec rigueur éditoriale)
- The National (UAE, biais émirati mais bien sourcé sur Golfe)

---

## Sources clés ajoutées pour la fenêtre J142→J144 (20-21 juillet 2026)

Convention de référence robuste : « Titre — Éditeur, date, URL · consulté 21 juillet 2026 · Cote: X# ».

| Source | Type | Référence | URL · consultation · cote |
|---|---|---|---|
| DoD / DVIDS / DCAS (via CNN, NBC, Washington Post, Newsweek) | M | **3ᵉ mort militaire américaine : Sgt Michael Emmanuel Swinton, tué le 19/7 à Erbil (Irak)** lors de la détonation contrôlée d'un drone abattu non explosé (+1 blessé léger) ; identité publiée les 20-21/7. **Vérification adversariale : décès HORS feu iranien** (Rubio, accident de neutralisation ; le communiqué officiel ne qualifie pas le drone d'iranien) → cumul 17 morts + 1 disparu, **sous-compte « sous feu iranien » maintenu à 2**. Blessés réactualisés à **~447** (DCAS, MAJ 21/7) | dvidshub.net/ · cnn.com/ · nbcnews.com/ · washingtonpost.com/ · newsweek.com/ · consulté 21 juillet 2026 · Cote: A1 |
| DoD (via CBS, Washington Times, Military Times) | M | **Identités des 2 tués de Muwaffaq Salti** : 1ᵉʳ Lt Tyler James Feehan (25 ans, Hawaï, promu capitaine à titre posthume) et Pvt Isabella Gonzales (19 ans, Texas). **Correction de baseline : décès étalés — Gonzales KIA le 17/7, Feehan le 18/7** (pas un événement unique du 17/7). **Militaire disparu toujours MIA au 21/7** : restes annoncés par CENTCOM le 19/7, identification non conclue ; « certainement les siens » = officiel **anonyme** (ne pas convertir en 4ᵉ mort) | cbsnews.com/ · washingtontimes.com/ · militarytimes.com/ · consulté 21 juillet 2026 · Cote: A2 (identités) / C3 (MIA) |
| UKMTO — Warning 094/26 | M | **Relèvement du niveau de menace régionale JMIC de « SEVERE » à « CRITICAL »** (attaque jugée quasi inévitable), 20/7 — succède à l'Update 072 du 16/7. **Réserve : correspondance exacte des échelles (Warning vs Advisory Note) non clarifiée.** Recense également **0 attaque en 48 h** en mer Rouge malgré le blocus houthi déclaré | ukmto.org/ · consulté 21 juillet 2026 · Cote: A1 |
| UKMTO / gCaptain / Seatrade Maritime / Ship & Bunker / MarineLink | M | **10ᵉ navire frappé depuis le 6/7 : tanker koweïtien *Kaifan*, 20/7 à 20h10 UTC près de Limah (Oman)** — incendie en salle des machines, équipage évacué, **aucun blessé**. Deux pétroliers grecs (*Kavomaleas*, *Acheloos*) et un navire du 21/7 **rapportés, non consolidés** (identité divergente selon les sources) | ukmto.org/ · gcaptain.com/ · seatrade-maritime.com/ · shipandbunker.com/ · marinelink.com/ · consulté 21 juillet 2026 · Cote: B2 (Kaifan) / C3 (autres) |
| JINSA / AFP / armées jordanienne et koweïtienne (via Iran International, JPost, Al Jazeera) | M | **Ultimatum Rezaei échu SANS offensive de grande échelle — reclassé de « lacune de collecte » en FAIT NÉGATIF DOCUMENTÉ.** ≥31 attaques iraniennes du 17 au 20/7 (**65 munitions**, décompte JINSA) puis vague du 21/7 sur Koweït/Bahreïn/Jordanie (radar d'Ali Al Salem, Bubiyan), **largement interceptée, dans la continuité, sans rupture d'échelle** ; **aucune source Tier 1 ne la désigne comme « l'offensive »**. Désaccord interne iranien rapporté (Walla — source unique, presse israélienne) | jinsa.org/ · afp.com/ · iranintl.com/ · jpost.com/ · aljazeera.com/ · consulté 21 juillet 2026 · Cote: B2 |
| Reuters / Axios / Bloomberg / JPost | P | **Trêve de 10 jours proposée par quatre médiateurs — Qatar, Égypte, Oman et Pakistan** — pour rouvrir Ormuz et sauver le MOU d'Islamabad ; **ni Washington ni Téhéran ne l'ont acceptée au 21/7**. Effet de marché mesurable (repli du Brent en séance le 21/7). Élargit la médiation sino-pakistanaise à un format arabe incluant des riverains directs du détroit | reuters.com/ · axios.com/ · bloomberg.com/ · jpost.com/ · consulté 21 juillet 2026 · Cote: B2 |
| AP / Reuters / Bloomberg / Al Jazeera (allocution de Yahya Saree) | M | **Blocus naval houthi de l'Arabie saoudite DÉCLARÉ le 20/7** (effet immédiat, « œil pour œil ») — **déclaré, NON exécuté au 21/7**. **Correctifs imposés par la vérification adversariale** : le déclencheur (bombardement de l'aéroport de Sanaa, **13/7**) a été **revendiqué par l'armée du gouvernement yéménite reconnu, PAS par Riyad** — l'attribution saoudienne est une **accusation houthie** ; Riyad a condamné (MAE, 20/7) et la coalition menace de recourir à « la force ». Volume exposé **2,5 Mb/j (Rystad, source unique) à 4,5 Mb/j** selon les estimations | apnews.com/ · reuters.com/ · bloomberg.com/ · aljazeera.com/ · consulté 21 juillet 2026 · Cote: B1 (déclaration) / B2 (non-exécution) / C3 (volume) |
| Barrot / AFP (via France 24, Times of Israel, Eurasia Review) | P | **Premier incident direct France-Iran de la crise : 2 diplomates français « intimidés de manière extrêmement grave » à Téhéran (nuit du 19/7)**, l'un « physiquement maltraité », retenus plusieurs heures ; **convocation du chargé d'affaires iranien le 21/7**, agents rapatriés, réduction de l'ambassade envisagée. **Cote abaissée A1→B2** par la vérification : **source primaire unique** (Barrot/AFP), établie par la **reconnaissance implicite iranienne** (Araghchi, 21/7 : contre-accusation **sans démenti**) ; « molesté » **mono-sourcé** | france24.com/ · timesofisrael.com/ · eurasiareview.com/ · consulté 21 juillet 2026 · Cote: B2 (B3 pour « molesté ») |
| Bloomberg / Dow Jones-Rigzone / CNBC / Reuters / Fortune / TradingEconomics | E | **Brent : 90 $ franchi 4 fois, jamais clôturé au-dessus.** ~91 $ à la réouverture (nuit 19-20/7) → **settle 20/7 : 89,22 $ (+1,3 %)** → 91,11 $ (21/7, 01h12 GMT) → 88,44 $ (04h15, sur l'annonce de la trêve) → 89,93 $ (10h20) → **91,34-91,49 $ (14h53, +2,5 %, plus haut depuis le 10/6)** ; **séance du 21/7 non close** ; **100 $ jamais approché**. **WTI** : 83,23 $ (settle 20/7) ; 85,30 $ le 21/7 pour le contrat d'août **expirant**, nouveau front-month sept. ~84,29 $ — **séries non comparables**. *Divergence non résolue* : un relevé isole une clôture du 20/7 à ~88,59 $ (+0,51 %), non retenue face à 3 sources convergentes sur 89,22 $ | bloomberg.com/ · rigzone.com/ · cnbc.com/ · reuters.com/ · fortune.com/ · tradingeconomics.com/ · consulté 21 juillet 2026 · Cote: B1 |
| Kpler via Bloomberg · Lloyd's List · Windward | E/D | **Effondrement des transits d'Ormuz : 7 navires/jour** (moyenne de la semaine close le 19/7, contre **16/j** la semaine précédente), puis **aucun navire observé en transit le 21/7** ; **Lloyd's List : 53 transits/semaine au 20/7 contre 157 (−66 %)**. **Réserves majeures** : page CNBC de référence **inaccessible (403)** — donnée non lue de première main ; **deux publications Windward mutuellement incohérentes** (7 vs 16 sortants) ; **AIS massivement coupé ⇒ tout comptage est une borne inférieure** — « aucun transit observé » ≠ « aucun transit ». Répartition route nord/sud et taux de fret VLCC/MR **non disponibles** | kpler.com/ · lloydslist.com/ · windward.ai/ · consulté 21 juillet 2026 · Cote: B2 / C3 |
| europeangashub / TradingEconomics | T | **TTF : >56 €/MWh (20/7) puis 59,39 €/MWh (21/7)** — +15 % hebdo, **+29 % sur juillet**. **PEG Nord et JKM non cotés** sur la fenêtre (valeur JKM trouvée écartée comme aberrante) | europeangashub.com/ · tradingeconomics.com/ · consulté 21 juillet 2026 · Cote: B2 |
| LNG Prime / AGBI / CNBC / Montel News / Energy Intelligence | T | **Ambiguïté QatarEnergy RÉSOLUE : deux objets distincts, non contradictoires.** (1) **Force majeure contractuelle** notifiée à Edison / Adriatic LNG jusqu'à **début septembre** (**21 cargaisons, ~2,7 Mds m³**) ; (2) **retour à pleine capacité de production** visé **octobre**. L'opposition « mi-septembre vs octobre » des synthèses antérieures était un artefact. **Aucune mise à jour postérieure au 1ᵉʳ juillet** | lngprime.com/ · agbi.com/ · cnbc.com/ · montelnews.com/ · consulté 21 juillet 2026 · Cote: B2 |
| franceinfo / Le Club des Juristes / juriguide | S | **CORRECTION RÉTROACTIVE de la baseline J142 : la saisine de l'Autorité de la concurrence par la FFC3 contre le plafond TotalEnergies à 1,99 €/L a bien été DÉPOSÉE le 16/7** — et non simplement « annoncée, dépôt non confirmé ». 3 sources indépendantes | francetvinfo.fr/ · leclubdesjuristes.com/ · juriguide.com/ · consulté 21 juillet 2026 · Cote: A2 |
| prix-carburant.eu / BDOR / Roole Data | S | **Gazole France : 2,099-2,114 €/L (20/7) puis 2,117 €/L (prix-carburant.eu) à 2,138-2,139 €/L (BDOR/Roole) le 21/7** — plein de 40 L ~85 €. **Écart d'agrégateurs (~2 ct) NON RÉSOLU** : divergence de panel, pas une donnée consolidée. **⚠️ La moyenne officielle DGEC, attendue le 20/7, reste INTROUVABLE pour la 2ᵉ synthèse consécutive** — aucune référence officielle depuis le 1,903 €/L du 6 juillet | prix-carburant.eu/ · bdor.fr/ · media.roole.fr/ · consulté 21 juillet 2026 · Cote: B2/C3 (lacune DGEC : F6) |
| Washington Post / PBS / Axios / Euronews / Al-Monitor | P | **Sommet Trump-Aoun TENU le 21/7 à la Maison-Blanche** : Aoun présente un plan de désarmement du Hezbollah assorti d'un retrait israélien ; Trump promet un soutien accru **sans détail** et évoque un redéploiement israélien « en cours » sans précision ; **le Hezbollah rejette le cadre du 26/6**. **Aucune avancée concrète mesurable** | washingtonpost.com/ · pbs.org/ · axios.com/ · euronews.com/ · al-monitor.com/ · consulté 21 juillet 2026 · Cote: A2 |
| Ministère koweïtien de la Défense (via Washington Times) | M | **67 militaires koweïtiens blessés au cumul + 2 gardes-frontières tués ; Shuaiba frappée 4 jours consécutifs.** **Revendication étatique non recoupée par un tiers indépendant** — étend les « 4 blessés » du 18/7 mais **ne constitue pas un bilan consolidé** | washingtontimes.com/ · consulté 21 juillet 2026 · Cote: B2 (revendication) |
| UKMTO / MICA Center (via IndexBox, Eastern Herald, Caliber.az) | M | **Chimiquier *Asana* toujours NON libéré** au 20-21/7, fait route vers la côte somalienne ; **aucune rançon ni groupe pirate confirmé publiquement**. Attribution aux **pirates somaliens (pas aux Houthis)** confirmée. **Aucune nouvelle attaque houthie** contre un navire commercial dans la fenêtre | ukmto.org/ · micacenter.org/ · consulté 21 juillet 2026 · Cote: B3 |
| TradingEconomics / global-energy-flow | T/D | **Aluminium LME 3 137,80-3 146,50 $/t (20/7, −0,85 %)**, léger repli vs 3 164,65 $/t le 17/7. **Stocks souterrains UE ~53,7 % au 20/7** (contre 51,8 % au 13/7, norme saisonnière ~75 %) — **agrégateur tiers, NON confirmé à la source primaire AGSI+**. **Urée, ammoniac Europe et soufre non recotés** sur la fenêtre | tradingeconomics.com/ · global-energy-flow.com/ · agsi.gie.eu/ · consulté 21 juillet 2026 · Cote: B2 / C3 |

**Absences testées et documentées sur cette fenêtre** (à ne pas combler par estimation) : aucune **révision de cible bancaire** datée du 20-21/7 malgré le franchissement des 90 $ (C6) ; aucune **prime Dated Brent** ni **backwardation** chiffrées depuis les 15-16/7 (F6) ; aucune **moyenne DGEC** depuis le 6/7 (F6) ; aucune **publication EIA/IEA/OPEP+** dans la fenêtre (WPSR du 22/7 postérieur) ; aucun **tirage SPR** ni **release AIE coordonnée** ; aucune **séance du CSNU** ; aucune **déclaration AIEA/Grossi** (fenêtre nucléaire ~mi-août = GAP complet depuis fin juin) ; aucune **déclaration de l'UE** (Kallas/Conseil) datée du 20-21/7 ; aucune **rencontre Chine-Pakistan** postérieure au 16-17/7 ; aucune **mise à jour sur la coalition navale UK-France** (*Lyme Bay* / HMS *Dragon*) ni sur la certification d'un chenal ; aucune **frappe US sur le réseau électrique iranien** (déclencheur Bab-el-Mandeb non actionné) ; aucune **réactualisation macro INSEE/BdF/OFCE** ; aucune **mobilisation sociale** en France ; aucune **décision de prolongation** de l'aide grands rouleurs (31/7) ou de la remise GNR (31/8) ; aucune **réponse iranienne officielle** à l'accusation française d'intimidation.

**Piège écarté par la vérification** : des chiffres circulants attribués à la Banque de France (« 2,5 % d'inflation, pétrole à 112 $ ») ont été **écartés** — incohérents avec le niveau de prix réel de la fenêtre, ils relèvent d'un scénario de stress et non d'une prévision courante.

---

## Sources clés ajoutées pour la fenêtre J141→J142 (18-19 juillet 2026)

Convention de référence robuste : « Titre — Éditeur, date, URL · consulté 19 juillet 2026 · Cote: X# ».

| Source | Type | Référence | URL · consultation · cote |
|---|---|---|---|
| CENTCOM (communiqué, via NBC, PBS, Bloomberg, Axios, NPR, CBS, The National, Air Force Times) | M | 2 militaires US tués, 1 porté disparu, 4 blessés — attaque combinée missiles balistiques/drones du CGRI (« Opération Nasr 2 ») sur la base aérienne Muwaffaq Salti (Jordanie), 17 juillet (annoncée le 18/7) ; pages primaires CENTCOM/CNN non lisibles directement (blocages 451/403), fait retenu sur le recoupement de ≥8 médias Tier 1/2 convergents | centcom.mil/MEDIA/PRESS-RELEASES/ · nbcnews.com/ · pbs.org/newshour/ · bloomberg.com/ · axios.com/ · npr.org/ · cbsnews.com/ · thenationalnews.com/ · airforcetimes.com/ · consulté 19 juillet 2026 · Cote: A2 |
| Tasnim / Tehran Times | P | Suspension formelle par l'Iran de tous ses engagements au titre du MOU d'Islamabad — annonce du vice-ministre des Affaires étrangères Kazem Gharibabadi, 18/7 (« We have suspended all of our commitments... ») ; sources primaires iraniennes (média d'État/semi-officiel), à recouper impérativement | tasnimnews.com/ · tehrantimes.com/ · consulté 19 juillet 2026 · Cote: B2 |
| Middle East Eye / Iran International / The New Arab / WANA | P | Relais indépendants confirmant la suspension du MOU d'Islamabad par Téhéran (18/7) | middleeasteye.net/ · iranintl.com/ · newarab.com/ · wanaen.com/ · consulté 19 juillet 2026 · Cote: B2/C2 |
| Ministère koweïtien de la Défense | M | 4 militaires koweïtiens blessés lors d'une attaque iranienne contre un navire de la marine koweïtienne (18/7) — 1er bilan militaire d'un État du Golfe blessé en mer ; source gouvernementale tierce, indépendante du CGRI | mod.gov.kw/ · consulté 19 juillet 2026 · Cote: B2 |
| Goldman Sachs (note semaine du 13-17/7, via TheStreet/Investing.com/Yahoo Finance) | E | Scénario central maintenu Brent 80 $/b T4 2026 puis 75 $ 2027, mais risque court terme désormais « skewed to the upside » : overshoot >110 $ envisagé en cas d'aggravation — 1ʳᵉ révision bancaire datée post-11/7 (MS 75/Citi 70/JPM 86 restent périmées) | thestreet.com/ · investing.com/ · finance.yahoo.com/ · consulté 19 juillet 2026 · Cote: B2 |
| prix-carburant.eu / carbu.com | E, S, D | Gazole France 2,101 €/L (prix-carburant.eu, ~11 000 stations) et 2,105 €/L (carbu.com) le 19/7 ; SP95-E10 ~2,00 €/L, SP98 ~2,086-2,090 €/L — agrégateurs privés, ne se substituent pas à la moyenne officielle DGEC (attendue le 20/7) | prix-carburant.eu/ · carbu.com/ · consulté 19 juillet 2026 · Cote: B2/C3 |
| MICA Center (Marine nationale) | M | 18 incidents de piraterie recensés dans le golfe d'Aden depuis avril 2026, dont ≥3 navires toujours retenus contre rançon | mica-center.org/ · consulté 19 juillet 2026 · Cote: B2 |
| Garde-côtes yéménites | M | Attribution du détournement du chimiquier *Asana* (17/7, golfe d'Aden, ~26 nm au large du Hadramaout, pavillon Tanzanie) à des pirates somaliens — « Pirates, not Houthis » | (communiqué relayé Reuters/gCaptain) · consulté 19 juillet 2026 · Cote: B1 |
| gCaptain / Seatrade Maritime / Skuld | M, T | Coalition navale UK-France (RFA *Lyme Bay* + HMS *Dragon*, >270 personnels, systèmes autonomes de déminage, hub logistique à Duqm/Oman) : arrivée documentée, mais les frappes sur Ormuz menacent l'avancement de la mission de déminage européenne — toujours aucun chenal certifié | gcaptain.com/ · seatrade-maritime.com/ · skuld.com/ · consulté 19 juillet 2026 · Cote: B3 |
| Kpler (via CNBC) / Windward | T, D | Transits Ormuz : 15 navires/j (15/7) → 8 navires/j (16/7, plus bas en 3 semaines) ; voie sud escortée (côté omanais) effondrée le week-end du 11-12/7 (1 seul des 12 sortants) ; route iranienne nord majoritaire ; AIS massivement coupé = comptage en borne inférieure | cnbc.com/ · windward.ai/ · consulté 19 juillet 2026 · Cote: B2 |
| AGBI / Edison | T, E | Force majeure GNL QatarEnergy prolongée jusqu'à mi-septembre 2026 (21 cargaisons concernées, Edison/Adriatic LNG) — non stabilisé face à l'échéance « octobre » (gasworld, source unique antérieure) | agbi.com/oil-and-gas/2026/07/force-majeure-on-qatarenergy-lng-extends-to-fourth-month/ · consulté 19 juillet 2026 · Cote: B2 |
| Reuters (dépêche du 16/7) | P, M | L'Iran aurait instruit les Houthis de fermer Bab-el-Mandeb SI les États-Unis frappent le réseau électrique iranien (menace formulée par Trump le 14/7) ; dépêche à 3 sources — 1ʳᵉ double-menace Ormuz + Bab-el-Mandeb qualifiée d'opérationnelle, mais non exécutée : à coter [SPÉCULATION] | reuters.com/ · consulté 19 juillet 2026 · Cote: C3 |

---

## Sources clés ajoutées pour la fenêtre J96→J98 (4 → 6 juin 2026)

Convention de référence robuste : « Titre — Éditeur, date, URL · consulté 6 juin 2026 · Cote: X# ».

| Source | Type | Référence | URL · consultation · cote |
|---|---|---|---|
| CENTCOM (communiqué) | M | Frappe US Hellfire sur le pétrolier vide M/T *Lexie* vers Kharg (2 juin, 6ᵉ navire neutralisé depuis le 13 avril) ; démenti de toute frappe iranienne réussie sur le QG de la Ve Flotte (Bahreïn, 3 juin) — **[FAIT/B2]** frappe *Lexie* ; **[SPÉCULATION/F4]** revendication IRGC démentie | centcom.mil/MEDIA/PRESS-RELEASES/ · consulté 6 juin 2026 · Cote: B1 |
| ABC News (live updates) | M, P | Live blog Moyen-Orient 3-5 juin : salve iranienne missiles/drones vers le Golfe, interceptions, frappe T1 aéroport de Koweït | abcnews.go.com/International/live-updates/ · consulté 6 juin 2026 · Cote: B2 |
| RFE/RL (Radio Free Europe) | M, P | Couverture frappes US sur radars côtiers (Goruk, Qeshm, 5-6 juin) + drones iraniens abattus vers Ormuz | rferl.org/ · consulté 6 juin 2026 · Cote: B2 |
| The War Zone (TWZ) | M | Détail technique frappe *Lexie* (Hellfire), arraisonnements US (MT *Davina*/*Lenore* au large du Sri Lanka, 5 juin) | twz.com/news-features/ · consulté 6 juin 2026 · Cote: B2 |
| Al Jazeera | M, P | Frappe porte-conteneurs *MSC Sariska V* à Umm Qasr (Irak, 3 juin, équipage sauf) ; rejet de l'accord Liban par le Hezbollah (Qassem, 4 juin) | aljazeera.com/news/2026/6/ · consulté 6 juin 2026 · Cote: B2 |
| gCaptain (mission déminage) | M, T | UK + France finalisent le plan de mission de déminage d'Ormuz (~15 nations), déclenchement conditionné à un accord inexistant (4 juin) | gcaptain.com/ · consulté 6 juin 2026 · Cote: B2 |
| Naharnet / AFP (Araghchi) | P | Position iranienne (Araghchi) sur l'état des négociations gelées ; contexte cessez-le-feu Israël-Liban annoncé à Washington (3 juin, 4ᵉ round) puis mort-né | naharnet.com/ · consulté 6 juin 2026 · Cote: A2 |
| Fortune (prix pétrole) | E | Brent ~93,1 $/b en clôture (5 juin) ; pic intraday 3 juin ~99 $, clôture 97,81 $ ; 4 juin clôture ~95 $ — **[FAIT/B2]** | fortune.com/article/price-of-oil-06-05-2026 · consulté 6 juin 2026 · Cote: B2 |
| Investing.com / Trading Economics | E, D | WTI ~90,3-90,5 $/b (5 juin) ; spread Brent-WTI comprimé à ~2,5 $/b (vs ~13 $ le 30 avril) | investing.com/commodities/crude-oil · tradingeconomics.com/commodity/brent-crude-oil · consulté 6 juin 2026 · Cote: B2 |
| EIA (WPSR / SPR) | T, D | SPR US **357,1 mb** (semaine au 29 mai, WPSR) — corrige le 365,1 mb du 22 mai ; tirage ~8 mb/sem, plus bas depuis janvier 2024 | eia.gov/petroleum/supply/weekly/ · consulté 6 juin 2026 · Cote: A1 |
| AGSI+ / GIE (gaz) | T, D | Stockage gaz UE **~41,5 %** (5-6 juin) — corrige le 38 % daté du 23 mai ; ~13-15 pts sous la norme 5 ans ; Pays-Bas < 16 % ; cible hiver abaissée à 80 % | agsi.gie.eu/ · consulté 6 juin 2026 · Cote: C2 |
| LNG Prime (Qatar Ras Laffan) | T | Force majeure Ras Laffan **prolongée jusqu'à mi-août 2026** (et non mi-juin) ; ~17 % de la liquéfaction HS (~12,8 Mt/an), réparation 3-5 ans | lngprime.com/ · consulté 6 juin 2026 · Cote: B2 |
| data.economie.gouv.fr (carburants) | E, S, D | Gazole pompe FR **2,047 €/L**, SP95 2,032, SP98 2,074, E10 1,973 (5 juin, Ministère) ; léger repli hebdo ; gazole = carburant le MOINS touché (442 stations vs SP98 1 139) | data.economie.gouv.fr/explore/dataset/prix-des-carburants-en-france-flux-instantane-v2/ · consulté 6 juin 2026 · Cote: A1 |
| CNR / TRM24 (gazole pro) | E, S, D | Indice gazole professionnel CNR **+29,3 % vs février** (fin mai), en repli depuis le pic +42,7 % de début avril | cnr.fr/espaces/13/indices-mensuels-longue-distance · consulté 6 juin 2026 · Cote: B2 |
| INSEE (IPC mai 2026) | E, S, D | IPC mai **+2,4 % a/a** (IPCH +2,8 %), tiré par l'énergie (+16,8 %) ; pas de chiffre de juin avant le 30 juin | insee.fr/fr/statistiques/ipc-mai-2026 · consulté 6 juin 2026 · Cote: A1 |
| Banque de France (révision croissance) | E | Révision **en baisse** de la croissance FR 2026 annoncée le 1er juin (était +0,9 % en mars) ; nouveau chiffre attendu ~mi-juin ; PIB T1 -0,1 % ; récession exclue « de justesse » — **chiffre révisé non encore publié (gap à venir)** | banque-france.fr/fr/publications-et-statistiques/publications · consulté 6 juin 2026 · Cote: A2 |
| ONU Info (Casque bleu FINUL) | P, M | 7ᵉ Casque bleu FINUL tué le 4 juin (sergent serbe Jovanović, près de Marjeyoun) ; attribution non établie — **[FAIT/A2]** | news.un.org/fr/ · consulté 6 juin 2026 · Cote: A2 |
| Ministère des Armées (Frion / Chammal) | M | Rappel pertes françaises au Moyen-Orient = 3 au total : 2 FINUL/Liban (Montorio 18/4, Girardin 22/4) + 1 Chammal/Irak (cpl Frion, 12/3) ; aucune nouvelle perte FR sur la fenêtre J96-J98 | defense.gouv.fr/ · consulté 6 juin 2026 · Cote: A1 |

> **Note de marché (J98)** : le **Dated Brent physique** n'est **pas établi** au 3-6 juin (aucune assessment Platts/Argus en source ouverte) ; dernière donnée solide = prime > 25 $/b sur les futures (EIA, avril). La thèse Exxon d'un Dated Brent 150-160 $/b **n'est pas matérialisée** à J98 → à traiter comme **[SPÉCULATION]**, jamais comme fait. Le chiffre ~132,74 $ (Substack) est **écarté**. Flux Ormuz sortant non-iranien estimé **8-16 %** de la normale (détroit quasi-fermé) ; la projection « ~50 % fin juin » (Energy Aspects) est **mono-source [SPÉCULATION]**, à ne pas présenter comme acquise. Imports brut Chine **6,36 Mb/j** (mai, -44 % vs février, A2) = « couvercle chinois » temporaire.

---

## Sources clés ajoutées pour la fenêtre J89→J95 (28 mai → 3 juin 2026)

| Source | Type | Référence | URL / Article |
|---|---|---|---|
| CNBC (Exxon warns inventories) | E, T | « Exxon warns oil inventories will hit dangerously low levels » 28 mai 2026 — alerte Dated Brent 150-160 $/b sous 2-3 semaines | cnbc.com/2026/05/28/exxon-oil-inventories-dangerously-low — **⚠ lien rompu (404) au 04/06/2026, source à revérifier/recouper (≥2 Tier 1)** |
| Fortune (oil bosses doomsday) | E | « Oil bosses warn the worst is yet to come — but the doomsday scenario hasn't arrived » 30-31 mai 2026 | fortune.com/2026/05/30/oil-bosses-warn-doomsday-hormuz |
| Axios (China kept lid on prices) | E | « China's surprise oil demand drop kept a lid on prices » fin mai — imports CN −20 % avril (9,4 mb/j), mai ~7 mb/j | axios.com/2026/05/30/china-oil-demand-prices-hormuz |
| CNBC (China surprise demand) | E, T | « How China surprisingly kept a lid on oil prices during the Hormuz crisis » 31 mai | cnbc.com/2026/05/31/china-oil-imports-hormuz-prices |
| Al Jazeera (OPEC+ symbolic rise / UAE exit) | E, P | « OPEC+ agrees symbolic +188k b/j output rise for June as UAE exits the cartel » (sortie EAU 3 mai) | aljazeera.com/economy/2026/06/01/opec-plus-output-uae-exit — **⚠ lien rompu (404) au 04/06/2026, source à revérifier/recouper (≥2 Tier 1)** |
| Euronews (Iran suspends negotiations) | P | « Iran suspends nuclear and Hormuz negotiations, threatens Bab el-Mandeb » 1er juin 2026 | euronews.com/2026/06/01/iran-suspends-negotiations-hormuz |
| CNN (Iran suspended talks) | P, M | « Iran says it has suspended talks with the US; Trump insists deal coming 'this week' » 1er juin | cnn.com/2026/06/01/middleeast/iran-suspends-us-talks |
| Washington Post (Israel holding off Beirut) | M, P | « Israel is holding off striking Beirut as Lebanon ceasefire holds » 1er juin — Israël pousse au-delà du Litani | washingtonpost.com/world/2026/06/01/israel-lebanon-beirut-ceasefire |
| EIA (SPR weekly 22 May) | T, D | SPR US 365,1 mb (semaine du 22 mai 2026), plus bas pluriannuel | eia.gov/petroleum/data/weekly |
| IEA (>1 Md bbl perdus) | T, E, D | IEA confirme >1 milliard de barils perdus depuis le 28/02 ; release coordonnée 400 Mb (mars) | iea.org/reports/oil-market-report-june-2026 |
| TradingEconomics (Brent 96,89 / TTF) | E, T | Brent 96,89 $/b (3 juin, −15,3 % sur 1 mois, +49 % YoY) ; TTF 47,69 €/MWh (2 juin) | tradingeconomics.com/commodity/brent-crude-oil |
| INSEE (IPC mai 2026) | E, S, D | Indice des prix à la consommation mai 2026 : +2,4 % sur un an | insee.fr/fr/statistiques/ipc-mai-2026 |
| World Bank (Commodity Markets Outlook) | E, D | Flambée engrais/urée et matières premières liée à Ormuz (urée >850 $/t, +80 %) | worldbank.org/commodity-markets-outlook |
| IFPRI (urea / food security) | E, S | Tender Inde 2,5 Mt d'urée adjugé à 950 $/t ; risque sécurité alimentaire | ifpri.org/blog/hormuz-urea-india-tender-food-security |
| PolitiFact (critical minerals fact-check) | E, P | Vérification des affirmations sur la dépendance aux ressources critiques non-énergétiques (hélium Qatar ~1/3 mondial) | politifact.com/factchecks/2026/hormuz-critical-minerals-helium |
| Renewable Matter (methanol / aluminium) | T, E | Méthanol quasi-doublé en Asie / plus que doublé en Europe ; aluminium en hausse — exposition Golfe via Ormuz | renewablematter.eu/hormuz-methanol-aluminium-supply |

---

## Sources clés ajoutées pour la fenêtre J89 (28 mai 2026)

| Source | Type | Référence | URL / Article |
|---|---|---|---|
| TT News (US Denies Iran MOU) | P | « U.S. Denies Iran Report on Draft Deal to Reopen Hormuz » 27 mai 2026 | ttnews.com/articles/hormuz-normal-month-deal |
| Spokesman Review (US denies) | P | « U.S. denies Iran report on draft peace deal to reopen Hormuz » 27 mai | spokesman.com/stories/2026/may/27/us-denies-iran-report-on-draft-peace-deal-to-reope |
| Bloomberg (Hormuz 1 month) | P, E | « Hormuz Flows May Return to Normal Within Month of Deal: Iran TV » 27 mai | bloomberg.com/news/articles/2026-05-27/hormuz-flows-may-return-to-normal-within-month-of-deal-iran-tv |
| World Oil (Hormuz weeks) | E, T | « Iran says Hormuz traffic may resume within weeks of agreement » 27 mai | worldoil.com/news/2026/5/27/iran-says-hormuz-traffic-may-resume-within-weeks-of-agreement |
| CNN (proposed deal contents) | P | « What's in the proposed deal that could end the US-Iran conflict? » 24 mai | cnn.com/2026/05/24/middleeast/iran-us-proposed-deal-wwk-intl |
| Bloomberg (Eurozone inflation persistent) | E | « France, Italy, Germany, Spain See Persistent Inflation Before ECB Decision » 22 mai | bloomberg.com/news/articles/2026-05-22/big-euro-zone-economies-are-enduring-unfolding-inflation-shock |
| CNBC (ECB rate hike mistake) | E | « 'A big mistake': The ECB is 'hell-bent' on rate hikes despite recession risks » 22 mai | cnbc.com/2026/05/22/inflation-interest-rates-rises-european-central-bank-ecb-oil-energy |
| CNBC (Eurozone inflation 3%) | E | « Euro zone inflation jumps to 3% as economic growth almost stalls » 30 avril | cnbc.com/2026/04/30/euro-zone-economy-inflation-growth |
| Commission UE Spring forecast 2026 | E | Croissance UE 1,1 % en 2026 (vs 1,5 % en 2025), inflation 3,1 % | economy-finance.ec.europa.eu/economic-forecast-and-surveys/economic-forecasts/spring-2026-economic-forecast-slowdown-growth-energy-shock-drives-inflation_en |
| IMF (war global outlook) | E | « War Darkens Global Economic Outlook and Reshapes Policy Priorities » 14 avril | imf.org/en/blogs/articles/2026/04/14/war-darkens-global-economic-outlook |
| Banque de France (projections mars 2026) | E | Baseline FR 0,9 % ; adverse 0,6 % ; très adverse 0,3 % ; sévère Brent 145 $ + gaz 106 €/MWh | banque-france.fr/en/publications-and-statistics/publications/macroeconomic-interim-projections-march-2026 |
| Banque de France (défaillances fév 2026) | E | 69 392 défaillances sur 12 mois = record 35 ans ; transport-entreposage +8,8 % | banque-france.fr/en/statistics/compagnies/business-failures-france |
| France Épargne (INSEE ménages 82) | S, E | INSEE confiance ménages mai 2026 : 82 (-2) = plus bas depuis mars 2023 | france-epargne.fr/news/confiance-des-menages-la-france-touche-un-plus-bas-de-trois-ans-en-mai-2026 |
| FNTR (choc coûts sans précédent) | S, E | « Transport routier de marchandises : un choc de coûts sans précédent qui plonge le secteur dans une crise majeure » | fntr.fr/espace-presse-et-partenariats/communiques-de-presse/un-choc-de-couts-sans-precedent |
| Portail-IE (logistique au bord rupture) | S | « Crise du carburant, la logistique française au bord de la rupture » | portail-ie.fr/univers/enjeux-de-puissances-et-geoeconomie/2026/crise-du-carburant-la-logistique-francaise-au-bord-de-la-rupture |
| Euronews (IMF recession warning) | E | « End of conflict in the Middle East or recession in Europe, IMF warns » 5 mai | euronews.com/my-europe/2026/05/05/end-of-conflict-in-the-middle-east-or-recession-in-europe-imf-warns |
| Tradingeconomics (Brent 96,30 28/05) | E | Brent rose to 96.30 USD/Bbl on May 28, 2026, up 2.13 % | tradingeconomics.com/commodity/brent-crude-oil |

---

## Sources clés ajoutées pour la fenêtre J84→J88 (23-27 mai 2026)

| Source | Type | Référence | URL / Article |
|---|---|---|---|
| CNBC (Trump deal Hormuz) | P, M | « Trump says Iran deal reopening Strait of Hormuz 'largely negotiated' » 23 mai 2026 | cnbc.com/2026/05/23/us-iran-war-talks |
| CNN Live (negotiations) | P, M | « May 24, 2026 Middle East news — US, Iran still negotiating peace deal terms » | cnn.com/2026/05/24/world/live-news/iran-war-news |
| Fortune (MOU largely negotiated) | P, E | « Iran war US agreement memorandum of understanding Strait Hormuz nuclear weapons » | fortune.com/2026/05/23/iran-war-us-agreement-memorandum-of-understanding |
| Al Jazeera (Doha Iran delegation) | P, M | « Iranian delegation in Qatar as talks on US ceasefire extend » 25 mai | aljazeera.com/news/2026/5/25/rubio-says-us-will-find-another-way-if-iran-talks-fail |
| The National (24 Md$ frozen funds) | P, E | « The $24bn question: Iran pushes US to release frozen funds in Qatar talks » 26 mai | thenationalnews.com/news/mena/2026/05/26/the-24bn-question |
| The Aviationist (CENTCOM strikes) | M | « U.S. Launches "Defensive Strikes" in Iran Targeting Mine-Laying Boats and SAM Sites » 26 mai | theaviationist.com/2026/05/26/u-s-launches-defensive-strikes-in-iran |
| Stars and Stripes (CENTCOM self-defense) | M | « CENTCOM reports 'self-defense' strikes against Iran ahead of peace talks » 25 mai | stripes.com/theaters/middle_east/2026-05-25/centcom-iran-missiles-mines-peace |
| Jerusalem Post (IRGC MQ-9) | M | « IRGC claims it fired at F-35 and intelligence drone, shot down MQ-9 reaper drone » 26 mai | jpost.com/middle-east/iran-news/article-897319 |
| Press TV (IRGC warning) | M | « IRGC downs US MQ-9 Reaper drone over Persian Gulf, warns against truce violations » 26 mai | presstv.ir/Detail/2026/05/26/769308 |
| Fortune (Brent prix 27 mai) | E | Current price of oil as of May 27, 2026 — Brent 99,18 $/b | fortune.com/article/price-of-oil-05-27-2026 |
| TradingEconomics (TTF gas 26 mai) | E, T | TTF Gas 48,04 EUR/MWh (+5,37 %) | tradingeconomics.com/commodity/eu-natural-gas |
| France Bleu (FNSEA suspension) | S, P | « Mobilisation des agriculteurs : Rousseau annonce la suspension du mouvement » | francebleu.fr/infos/agriculture-peche/mobilisation-des-agriculteurs-le-president-de-la-fnsea-arnaud-rousseau-annonce-la-suspension |
| info.gouv.fr (aide grands rouleurs) | S | « Carburant : comment bénéficier de l'aide grands rouleurs » — ouverture demandes 27/05 | info.gouv.fr/actualite/carburant-comment-beneficier-de-l-aide-grands-rouleurs |
| Avendcar (prime carburant 100 €) | S, E | « Prime carburant 2026 : 100 €, demande dès le 27 mai » | avendcar.com/blog/prime-carburant-2026-grands-rouleurs |
| Public Sénat (Lecornu plan 710 M€) | S, P | « 710 millions d'euros d'aides nouvelles » | publicsenat.fr/actualites/politique/direct-prix-des-carburants |
| Wikipedia (2026 Israel-Lebanon peace talks) | P | « 2026 Israel–Lebanon peace talks » — Pentagone 29 mai + State Dept 2-3 juin | en.wikipedia.org/wiki/2026_Israel%E2%80%93Lebanon_peace_talks |
| Bloomberg (S. Korean Iran missile) | M | « S. Korean Probe Suggests Iran-Made Missiles Hit Ship in Hormuz » 27 mai | bloomberg.com/news/articles/2026-05-27 |
| GlobalSecurity (Day 88 Iran war) | M | « Iran War 2026 -- Day 88 Update -- 26 May 2026 » | globalsecurity.org/military/ops/iran-war-oprep |
| Times of Israel (Hormuz talks) | P | « Iranian officials in Qatar for talks on Hormuz as Tehran, US downplay chance of deal » | timesofisrael.com/iranian-officials-in-qatar-for-talks-on-hormuz |
| Daily Sabah / Geo TV (Mojtaba HEU decree) | P | « Iran supreme leader vows to keep enriched uranium in country » | dailysabah.com/world/mid-east/iran-supreme-leader-vows-to-keep-enriched-uranium-in-country |

---

## Sources clés ajoutées pour la fenêtre J78→J83 (mai 2026)

| Source | Type | Référence | URL / Article |
|---|---|---|---|
| Daily Pakistan (Naqvi V2) | P, M | Visite Naqvi à Téhéran 20 mai 2026 | dailypakistan.com.pk/20-May-2026/mohsin-naqvi-heads-to-iran-again |
| Al Jazeera (médiation pakistanaise limites) | P | « Pakistan's mediation faces limits as Iran-US tensions deepen », 18 mai 2026 | aljazeera.com/news/2026/5/18 |
| Pakistan Today (Naqvi-Vahidi CGRI) | M, P | Naqvi rencontre chef CGRI Vahidi 20 mai 2026 | pakistantoday.com.pk/2026/05/20 |
| Nation (Nation Pakistan) | P | « Naqvi back in Tehran for talks as US, Iran hurl war threats », 21 mai 2026 | nation.com.pk/21-May-2026 |
| 247WallSt / Yahoo Finance (SPR record) | E, T | SPR US -9,9 mb hebdo, nouveau record absolu, 20 mai 2026 | 247wallst.com/investing/2026/05/20 ; finance.yahoo.com/sectors/energy |
| Reuters via Pravda (décret Mojtaba uranium) | P, M | Mojtaba Khamenei interdit export uranium enrichi 21 mai 2026 | trump.news-pravda.com/trump/2026/05/21/349211 |
| Ping TV India (décret Mojtaba) | P, M | « Iran Nuclear Talks in Jeopardy: Supreme Leader Mojtaba Khamenei Bans Export of Enriched Uranium » | pingtvindia.com/iran-supreme-leader-mojtaba-khamenei-bans-uranium-export-us-talks |
| Devizu.news (INSEE 22 mai) | E, S | « Le climat des affaires en France diminue à 93,6 points en mai 2026 » | devizu.news/le-climat-des-affaires-en-france-diminue-a-936-points-en-mai-2026 |
| franceinfo (INSEE) | E, S | « Le climat des affaires reste maussade en mai » | franceinfo.fr/economie/le-climat-des-affaires-reste-maussade-en-mai |
| INSEE Informations rapides 95 (climat affaires) | E, S | Indicateur synthétique 93,6 (-0,5), emploi 91,7 (-3) | insee.fr/fr/statistiques/8983389 |
| INSEE Informations rapides 96 (industrie) | E, S | Climat industrie 102,3 (+1,9), retrouve moyenne LT | insee.fr/fr/statistiques/8983202 |
| Planet.fr / prix-carburant.eu (Lecornu 21 mai) | S, E | Doublement aides grands rouleurs (50 → 100 €/véh), prime employeur 300 → 600 €/an | planet.fr/politique-carburant-les-nouvelles-aides-annoncees-par-sebastien-lecornu ; prix-carburant.eu/article/mesures-carburant-sebastien-lecornu-21-mai-2026 |
| France 24 (Lecornu juin) | S, P | « Carburant : Sébastien Lecornu va présenter un nouveau dispositif d'aides pour le mois de juin » | france24.com/fr/france/20260517-carburant-lecornu |
| Aide Sociale (aide grands rouleurs 100 €) | S | « Aide carburant grands rouleurs 2026 : 100 € en août » | aide-sociale.fr/aide-carburant-grands-rouleurs |
| Fortune (Brent prix quotidien) | E | Brent 110,08 (18/5), 112,93 (19/5), 110,34 (20/5), 104,52 (22/5) | fortune.com/article/price-of-oil-05-18-2026 (+ 05-19 / 05-20 / 05-22) |
| Capital.com (forecast oil 19 mai) | E | Crude Oil Price Forecast | Strait Of Hormuz Closure | capital.com/en-int/market-updates/crude-oil-price-forecast-19-05-2026 |
| ideal-investisseur.fr (OAT-Bund) | E | OAT/Bund spread 69 bps au 22 mai 2026 | ideal-investisseur.fr/en/markets/oat-bund-spread.html |
| TTFGas.Online + ICE Dutch TTF (gaz) | E, T | TTF 47,69 €/MWh au 22 mai 2026 (-3,48 %) | ttfgas.online/ ; ice.com/products/27996665 |
| FNSEA — communiqué officiel | S, P | « Promesses trahies, colères ravivées : JA/FNSEA appellent les agriculteurs à se mobiliser à partir du 26 mai sur la PPL Contraintes » | fnsea.fr/communiques-de-presse/promesses-trahies-coleres-ravivees |
| Washington Post (Iranian attack cargo ship) | M, P | « A ship's crew risked the Strait of Hormuz. They met with a hail of bullets. » (19 mai 2026) | washingtonpost.com/world/2026/05/19/inside-an-iranian-attack-cargo-ship-strait-hormuz |
| JNS / Times of Israel (IDF 30 sites) | M | IDF strikes 30 Hezbollah terror sites in Southern Lebanon (18 mai) | jns.org/news/israel-news/idf-strikes-30-hezbollah-terror-sites-in-southern-lebanon |
| Ipsos BVA — La Tribune Dimanche (Macron 21 %) | S, P | Baromètre politique mai 2026 — Macron 21 % favorables / 75 % défavorables | ipsos.com/fr-fr/barometre-politique-ipsos-bva-la-tribune-dimanche |

---

## Récapitulatif par type

| Type | Code | Sources clés (Tier 1-2) |
|---|---|---|
| **Militaire** | M | Wikipedia, NPR, CNN, Al Jazeera, UKMTO, CBS, NBC, Times of Israel |
| **Politique / Diplomatique** | P | NPR, Washington Post, PBS, CFR, Foreign Policy, Al Jazeera, Euronews |
| **Économique / Marchés** | E | Bloomberg, CNBC, Goldman Sachs, FMI, Fortune, Trading Economics, Financial Times, **DGEC NPG, prix-carburants.gouv.fr, EU Weekly Oil Bulletin, CPDP** |
| **Technique / Énergie** | T | AIE, EIA, S&P Global, Kpler, Rystad Energy, OilPrice.com, Oxford Institute, **Eurostat (nrg_stk_oilm/oem, NRG_TI_OIL, nrg_cb_oilm), JODI-Oil, SAGESS, SDES, UFIP, Fertilizers Europe, CRU Group, Profercy, ICIS, Yara, OCI, Fertiberia** (AdBlue/urée) |
| **Social / Impact France** | S | franceinfo, L'Argus, Roole, INSEE, Banque de France, The Conversation FR, **FranceAgriMer (GNR), FF3C (FOD)** |
| **Données brutes** | D | AIE, EIA, Trading Economics, Kpler, L'Argus, INSEE, Banque de France, **Eurostat, JODI-Oil, prix-carburants.gouv.fr API, DGEC NPG, CPDP** |

---

## Règles d'utilisation des sources

1. **Minimum 2 sources indépendantes** pour tout fait militaire ou chiffre économique majeur
2. **Les sources iraniennes (Press TV, Tasnim, Fars)** ne sont jamais utilisées seules — toujours recoupées avec UKMTO, CENTCOM ou médias occidentaux
3. **Les déclarations de Trump** (Truth Social) sont traitées comme des signaux politiques, pas comme des faits — vérifier les actions réelles (CENTCOM, Pentagone, Treasury)
4. **Les données de prix** : Fortune et Trading Economics pour le suivi quotidien Brent/WTI ; S&P Global pour le Dated Brent (spot physique) ; **prix-carburants.gouv.fr (API instantanée) et DGEC NPG (hebdo vendredi)** pour les prix pompe France ; **EU Weekly Oil Bulletin (jeudi)** pour les comparaisons UE-27 ; L'Argus pour l'historique des prix FR depuis 1985
5. **Les stocks et days of cover** : **Eurostat `nrg_stk_oilm` (volumes par produit) et `nrg_stk_oem` (jours équivalents)** pour les comparaisons UE ; **SAGESS et DGEC** pour la France ; **CPDP** pour la granularité fine FR par produit fini (SP95 vs SP98, FOD, GNR) ; **JODI-Oil** comme alternative gratuite au MODS IEA payant
6. **Les imports par origine** : **Eurostat `NRG_TI_OIL`** est la source canonique pour calculer le % d'imports UE/FR via Ormuz ; croiser avec **INSEE et DG Trésor** pour la France ; le repère 2024 confirme Moyen-Orient = 12 % du brut FR (Arabie 3 %, Irak ~3 %)
7. **Carburants spécifiques** : **CPDP + DGEC NPG** = trilogie obligatoire pour les 4 carburants français (SP95/SP98/gazole/FOD/GNR) ; **FranceAgriMer** pour le GNR (impacts agricoles) ; **FF3C** pour le FOD (chauffage résidentiel) ; les Douanes pour le régime fiscal GNR
8. **AdBlue / urée technique** : **VDA + Fertilizers Europe + Yara/OCI/Fertiberia** = trilogie obligatoire ; **CRU Group + Rystad + Kpler + Profercy** pour les flux Ormuz et capacités usines ; **trans.info + IRU + FNTR + BGL** pour l'impact transporteurs ; **SDES** pour le parc PL diesel SCR (calcul conso bottom-up). Pas de stock stratégique national — l'AdBlue n'est PAS dans SAGESS
9. **Les prévisions macro** : hiérarchie FMI > AIE/EIA > Goldman/Bloomberg > Banque de France/INSEE (du global au national)
10. **Wikipedia (2026 Iran war)** est la meilleure source de synthèse chronologique mais nécessite une vérification croisée pour les événements des dernières 24h
