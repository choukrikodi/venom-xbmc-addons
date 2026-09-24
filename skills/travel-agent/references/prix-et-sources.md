# Prix, schémas et accès sans frais

## 1. Coût et admission des sources

État documentaire revu le 24/09/2026 UTC. Cette date concerne la vérification des sources, jamais les dates du voyage. Consigner pour chaque source : URL officielle, date de contrôle, unité facturée, quota/solde, nombre d'appels prévus avec reprises, absence de carte et mécanisme empêchant tout dépassement. Distinguer gratuité financière, débit technique et disponibilité. « Sans clé » ou un appel réussi ne prouve pas un quota illimité.

| Source | Constat documentaire | Usage autorisé dans ce projet |
| --- | --- | --- |
| [Kiwi MCP](https://www.kiwi.com/stories/kiwi-mcp-connector/) | Connecteur officiel ; quota public chiffré non établi par les sources consultées. | Priorité vols. Lire les traces fournies sans nouveau coût. Pour de nouveaux appels, l'orchestrateur doit confirmer l'accès sans frais et les limites de sa session ; ne pas promettre de capacité illimitée. |
| [Trivago MCP](https://mcp.trivago.com/mcp) | Endpoint observé dans les traces ; quota public chiffré non établi. | Priorité hôtels, même condition d'exécution gratuite que Kiwi ; tendances pour orienter, offres exactes pour chiffrer. |
| [Frankfurter](https://frankfurter.dev/) | API sans clé ; documentation : pas de plafond mensuel/journalier, limitation anti-abus dont le débit chiffré n'est pas publié. | Admis pour le change ; requêtes mesurées. V1 existe toujours ; la v2 est composite par défaut. Identifier explicitement ECB pour une attribution BCE. |
| [RapidAPI](https://docs.rapidapi.com/v2.0/docs/api-pricing) | Quota propre à chaque API ; la documentation freemium exige une carte pour les dépassements. | Les plans freemium à carte sont exclus. Une API entièrement gratuite ne serait admissible qu'après vérification de son plan exact, sans carte ni abonnement. Aucune API spécifique validée ici. |
| [Amadeus Self-Service](https://developers.amadeus.com/) | L'index de la page officielle annonce une fermeture du portail au 17/07/2026 ; les anciennes pages de quotas restent indexées. La réponse directe consultée ne permet pas de valider le maintien des API de test. | Statut opérationnel et quota actuel **non établis** ; ne pas promettre l'accès, ni déduire que toute API Amadeus est arrêtée. Aucune substitution Enterprise payante. Même accessible, le sandbox ne prouve pas une offre réservable. |
| [google-flights-mcp](https://github.com/andreacappelletti97/google-flights-mcp) | Projet communautaire sans clé : `npx -y google-flights-mcp`, transport stdio. Aucun quota garanti publié ; API Google non officielle, devise liée à IP/locale. | Repli de découverte déclaré sans clé par l’orchestrateur et documenté ; pas de preuve locale live fournie ici. Fixer la version validée par l’orchestrateur pour reproduction ; pas de soute confirmée, devise à relire → ⚠️. Ce client HTTP Python ne lance pas un serveur stdio. |
| [Skiplagged MCP](https://skiplagged.github.io/mcp/) | Serveur public `https://mcp.skiplagged.com/mcp`, sans compte, clé ni OAuth ; quota public chiffré non publié. | Repli documenté, sous limites confirmées de session. Vérifier devise et soute sur l’offre ; exclure les trajets hidden-city lorsqu’ils contredisent destination ou bagages. Ne pas présenter une offre partielle comme protégée. |
| [Open-Meteo](https://open-meteo.com/en/terms) | Gratuit **non commercial** sans clé : moins de 10 000 appels/jour, 5 000/heure, 600/minute. | Météo prévisionnelle/historique selon endpoint et horizon ; usage professionnel/commercial gratuit non garanti, donc source nationale publique si le périmètre ne remplit pas ces conditions. Aucun achat. |
| [Nominatim](https://operations.osmfoundation.org/policies/nominatim/) | Service public : maximum absolu 1 requête/seconde, User-Agent identifiant l’application, attribution OpenStreetMap ; pas d’autocomplétion intensive. | Géocoder ponctuellement les lieux ; réutiliser les coordonnées déjà obtenues, respecter attribution et capacité. Configurer un User-Agent explicite, pas celui par défaut de la bibliothèque. |
| [api.data.gov.my](https://developer.data.gov.my/rate-limit) | Documentation officielle : 4 requêtes/minute pour chaque API listée, dont Weather et Catalogue ; exemples d’accès public sans clé. | Données malaisiennes selon endpoint/dataset et date. Ce service n’est ni un moteur de prix global ni un certificat universel d’hôtel. |
| [SPF Belgique](https://diplomatie.belgium.be/fr/conseils-aux-voyageurs) et [Wanda](https://www.wanda.be/fr/) | Pages publiques sans clé/carte ; aucun quota API revendiqué. | Conseils/entrée et santé des voyageurs ; consultation datée, autorité d’immigration pour les conditions par passeport. Pas de collecte massive. |
| Recherche web publique | Consultation dans les limites disponibles de l'environnement ; aucun quota API fournisseur universel à annoncer. | Repli de découverte et contre-vérification sans achat, sans contournement d'accès. Confirmer les paramètres sur la page, sinon ⚠️. |

L’orchestrateur rapporte 42/42 appels réels réussis pour la version L1b commitée ; les réponses et schémas sont disponibles dans le dépôt. Elle établit un fonctionnement à l'instant de collecte, sans attestation de facturation, de quota contractuel ni de généralisation à toute route/date. Si un quota reste inconnu, le marquer ainsi et ne pas automatiser un balayage ouvert. Avec accès MCP bloqué, préparer la liste bornée de requêtes pour l'orchestrateur et exploiter ses réponses ; ne pas refaire les appels qu'il a déjà fournis.

## 2. Contrat MCP et traces

Le client s'exécute sous Python 3, Linux/macOS (GitHub Actions Linux pour ce projet). Commandes : `python3 scripts/mcp_call.py URL list` et `python3 scripts/mcp_call.py URL call OUTIL JSON_OBJET`. Endpoint et arguments sont fournis à l'exécution. Réserver ce client aux recherches sans effet de bord : une reprise réseau peut rejouer une requête déjà traitée. Aucune réservation, commande ni envoi de message.

Protocole demandé et contrôlé : `2025-06-18`, en-tête `MCP-Protocol-Version` après l'initialisation. Conserver la ligne `===` (UTC, endpoint, action, arguments) puis la réponse JSON-RPC ; les messages de reprise vont sur stderr. Le JSON contient uniquement les arguments de l'outil au premier niveau, **sans** enveloppe `arguments` supplémentaire ; les objets prévus par le schéma, comme `hotel_rating`, restent imbriqués.

Au maximum **deux tentatives HTTP par message, initiale comprise**. Reprise sur 429/500/502/503/504 ou erreur réseau transitoire, y compris réponse tronquée. `Retry-After` valide est prioritaire ; au-delà de 5 secondes, le client termine avec `RetryLater` pour une relance ultérieure : il ne raccourcit pas le délai du serveur. Sinon, attente `min(5, 2^n + aléa)` avec `n=0` à la première reprise. Pas de reprise des erreurs fonctionnelles JSON-RPC ou `isError`. Tous les POST Kiwi sont espacés d'au moins 500 ms sur **une même machine** ; les runners distincts doivent être sérialisés par l'orchestrateur. Aucun cache de prix ni session persistante entre invocations.

Lire les schémas `tools/list` datés de la session avant de construire les requêtes. Pour une trace, retirer uniquement la première ligne `===` avant de décoder le JSON. Privilégier `result.structuredContent` ; sinon décoder les blocs texte documentés. Ignorer les blocs images/base64 pour les calculs. Distinguer erreur HTTP/client, erreur JSON-RPC, `result.isError`, erreur métier structurée et liste vide. Une liste vide ne prouve pas l'absence absolue de vol ou d'hôtel. Si `tools/list` contient `nextCursor`, sa liste est partielle : demander à l'orchestrateur les pages restantes.

Références techniques : [MCP transport](https://modelcontextprotocol.io/specification/2025-06-18/basic/transports), [initialisation](https://modelcontextprotocol.io/specification/2025-06-18/basic/lifecycle), [Retry-After, RFC 9110 §10.2.3](https://www.rfc-editor.org/rfc/rfc9110.html#section-10.2.3). Ce client minimal ne gère pas les interactions serveur ni la reprise d'un flux interrompu par identifiant SSE ; une recherche peut être rejouée dans la limite des deux tentatives.

## 3. Balayage et dates comparables

1. Construire les départs admissibles à l'origine et les durées sur place, avec contraintes fermes et préférence de retour distinguées. Journaliser les combinaisons demandées/reçues/non couvertes.
2. Faire une exploration groupée quand le schéma l'autorise ; consulter les tendances mensuelles d'hôtel. `one_for_city` réduit les résultats, ce n'est pas une recherche exhaustive des dates.
3. Choisir quelques combinaisons par circuit qui arbitrent coût, météo et fatigue ; réserver le nombre d'appels aux quotas effectivement connus. Contrôler ensuite dates exactes, nuits et paramètres sur les offres retenues, et demander d'autres dates seulement pour résoudre un écart concret.
4. Pour chaque vol, calculer l'arrivée locale réelle sur place. Vérifier les nuits d'hôtel par `check_out - check_in` ; faire la somme des étapes et séparer nuits en transport/transit. Le paramètre `nights_in_dst_*` guide la recherche mais ne remplace pas ce calcul.
5. Pour un open-jaw, apparier aller et retour compatibles avec ces nuits, puis chiffrer toutes les liaisons du circuit et le séjour hôtelier aux mêmes dates. Comparer le coût complet à un aller-retour équivalent. Ne jamais additionner deux prix minimaux de dates incompatibles.
6. Rechercher « meilleure combinaison **parmi les recherches documentées** » ; réserver « minimum global » à un ensemble réellement exhaustif et encore comparable. Ne pas qualifier la recommandation d'optimale sans preuve de couverture.

## 4. Kiwi `search-flight`

| Paramètre observé | Règle |
| --- | --- |
| `flyFrom`, `flyTo` | Aéroports/lieux des entrées ; vérifier les codes effectifs, pas seulement le nom de ville. |
| `departureDate`, `departureDateTo` | `dd/mm/yyyy`, départ exact ou plage. Une flexibilité ±N est normalisée en intervalle ; éviter des paramètres flexibles contradictoires. |
| `returnDate`, `returnDateTo` | Retour exact/plage, ou omission pour un aller simple ; ne pas laisser un retour provenant d'une autre option. |
| `nights_in_dst_from`, `nights_in_dst_to` | Bornes indicatives, à rapprocher des horaires locaux réels. |
| `adults`, `children`, `infants` | Catégories selon le schéma fournisseur et âge à la date du voyage. Ne pas recopier aveuglément la répartition hôtel. |
| `adults_hold_bags`, `adults_hand_bags` | Tableau par adulte, longueur correspondant à `adults` ; enfants avec champs adaptés du schéma. Distinguer nombre, poids et dimensions. |
| `currency`, `sort`, `one_for_city` | Devise de comparaison, tri disponible, résultat condensé éventuel. Contrôler contraintes d'escale et d'auto-transfert dans les autres champs du schéma. |

Lire `query`, `passengers`, `currency`, `resultsCount`, `itineraries[]`, puis `price`, `bookingUrl`, `baggage`, `outbound`, `inbound`. L'écho textuel doit confirmer l'effectif demandé (p. ex. la forme dynamique « N adults ») et correspondre aux champs passagers. Les aéroports, dates/heures, escales et devise se vérifient dans leurs champs structurés : leur absence du seul texte `query` n'est pas une contradiction.

**Constat des traces récentes** : les quatre anciennes requêtes Kiwi sans filtre soute affichaient notamment `checkedBag: 0`. Les dix nouvelles traces `kiwi_bags_*` du dépôt demandent `adults_hold_bags:[1,1]` et les itinéraires retournés inspectés affichent `checkedBag: 2` pour le groupe. Ce résultat confirme le compteur demandé dans ces cas, pas le poids, la politique de chaque segment ni toutes les routes possibles. Les filtres peuvent encore être ignorés : garder le contrôle par offre, sans attribuer aux anciennes requêtes un filtre absent.

Règle générale : si la soute demandée manque, elle n'est pas incluse par défaut ; tarif complémentaire uniquement avec source datée pour les trajets concernés. Vérifier le sens des compteurs (par groupe ou passager), le poids et les segments. Une requête acceptée ne suffit pas. L'aéroport alternatif, la correspondance non protégée, la nuit d'escale et le billet séparé sont explicités ; rejeter tout écart à une contrainte ferme.

## 5. Trivago hôtels et tendances

`trivago-destination-price-trends` : `query`, mois `start_month/end_month` en `YYYY-MM`, `country`, `currency`, objet `hotel_rating` avec catégories documentées. `destinations[].monthly_prices` contient des statistiques mensuelles prévisionnelles ; elles ne confirment ni chambre disponible ni coût exact de séjour.

`trivago-accommodation-search` : `query` de l'étape, `arrival/departure` en `YYYY-MM-DD`, `adults`, `children`, `children_ages`, `rooms`, `country`, `currency`, `hotel_rating`. `country` est le **marché d'achat**, jamais le pays de destination par défaut. Les tests de marchés montrent des listes différentes ; ne pas retenir un marché étranger moins cher sans vérifier l'éligibilité réelle du voyageur.

Lire `accommodations[]` : dates, `currency`, `price_per_night`, `price_per_stay`, catégorie, `review_rating/review_count`, `advertisers`, `accommodation_url`. Décoder les montants localisés avec leur devise. Ne pas déduire automatiquement le prix total du prix/nuit arrondi. L'URL paramétrée aide à vérifier les critères de recherche ; la chambre offerte, l'occupation effectivement vendue, taxes, repas et annulation doivent être visibles dans l'offre. Sinon, marquer précisément les lacunes et contre-vérifier sur Booking ou le vendeur.

## 6. Change et postes annexes

Utiliser Frankfurter comme demandé : `https://api.frankfurter.dev/v1/latest?base={devise}&symbols={devises_utiles}` avec valeurs remplacées à l'exécution. Relever `date`, `base`, `rates` et l'heure UTC de collecte ; le dernier jour publié peut précéder le jour de consultation. Pour qualifier le taux de « BCE », vérifier le fournisseur via [Frankfurter ECB](https://frankfurter.dev/providers/ecb/) ; l'endpoint v2 explicite `providers=ecb` évite une attribution erronée à un taux composite. Si une devise n'est pas couverte, signaler la lacune ; ne pas changer silencieusement de fournisseur.

Avec `1 devise_base = r unités locales`, convertir un prix local en base par division par `r`. Les frais bancaires restent séparés. Pour ferries/trains/transferts/repas/activités/assurances, documenter quantité, unité, tarif daté et hypothèse de partage. Une moyenne générale reste ⚠️ ; une absence totale de source ne devient jamais un zéro dans le budget.

## 7. Étoiles et références de contre-vérification

La réponse Trivago ne certifie pas l’origine officielle de ses étoiles. Les planchers de prix et signaux `stars_unverified` de SKILL.md sont des heuristiques demandées par l’orchestrateur. TripAdvisor sert à recouper l’identité et les informations, pas à délivrer un classement officiel. Pour confirmer : [PH, DOT et bureaux régionaux](https://www.tourism.gov.ph/directory/local-regional-offices/), [MY, MOTAC Hotel Grading](https://www.motac.gov.my/en/kategori-semakan-new/hotel-grading/), [TH, Thailand Hotel Standard Foundation](https://www.thaihotels.org/16679475/thailand-hotel-standard-foundation). Vérifier nom, adresse, catégorie et validité du certificat ; distinguer accréditation, licence, appartenance à une association et attribution d’étoiles. Ne pas prétendre qu’un registre est exhaustif sans preuve.
