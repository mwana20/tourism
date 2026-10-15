import { LanguageCode } from '../types';

interface CardCopy {
  title?: string;
  summary: string;
}

interface LocaleCardCopy {
  destinations: Record<string, string>;
  categories: Record<string, CardCopy>;
  packages: Record<string, CardCopy>;
}

const cardCopy: Partial<Record<LanguageCode, LocaleCardCopy>> = {
  fr: {
    destinations: {
      bwindi: 'Forêt ancienne et brumeuse, refuge de près de la moitié des gorilles de montagne.',
      'queen-elizabeth': 'Savane réputée, croisière sur le canal Kazinga et lions grimpeurs d’Ishasha.',
      'murchison-falls': 'Le Nil traverse une gorge étroite dans le plus grand parc d’Ouganda.',
      kibale: 'Forêt tropicale abritant 13 espèces de primates et de nombreux chimpanzés.',
      'kidepo-valley': 'Vallée de savane isolée, paysages spectaculaires et faune sauvage abondante.',
      'lake-mburo': 'Lacs, acacias et prairies où zèbres et impalas évoluent librement.',
      'mgahinga-gorilla': 'Suivez gorilles et singes dorés sur les volcans des Virunga.',
      'rwenzori-mountains': 'Glaciers équatoriaux, lobélies géantes et sommets des monts de la Lune.',
      'jinja-nile': 'Source historique du Nil et capitale est-africaine du rafting et du kayak.',
      'sipi-falls-elgon': 'Trois cascades au pied du mont Elgon, au cœur des plantations de café.',
      'lake-bunyonyi': 'Lac d’altitude parsemé de 29 îles et parcouru en pirogue.',
      'ziwa-rhino-sanctuary': 'Sanctuaire protégé où observer à pied les rhinocéros blancs d’Ouganda.',
      'lake-victoria-ssese': 'Archipel tropical aux plages dorées et aux retraites paisibles.',
      'mabamba-swamp': 'Zone humide célèbre pour l’observation du rare bec-en-sabot.',
      'entebbe-botanical': 'Jardins botaniques centenaires et riche avifaune au bord du lac Victoria.',
      semuliki: 'Forêt du bassin du Congo, sources chaudes et oiseaux d’Afrique centrale.',
      'fort-portal-craters': 'Lacs de cratère, plantations de thé et patrimoine du royaume Toro.'
    },
    categories: {
      'wildlife-safaris': { title: 'Safaris animaliers', summary: 'Pistes en 4x4 à travers la savane, à la recherche des grands animaux.' },
      'gorilla-trekking': { title: 'Trekking des gorilles', summary: 'Rencontre avec les gorilles de montagne dans la forêt tropicale.' },
      'chimpanzee-tracking': { title: 'Suivi des chimpanzés', summary: 'Suivez les chimpanzés et écoutez leurs cris dans la canopée.' },
      'big-cat-photography': { title: 'Photographie des grands félins', summary: 'Photographiez lions grimpeurs, léopards et félins de la savane.' },
      'mountain-climbing': { title: 'Randonnée et alpinisme', summary: 'Des sommets glaciaires aux volcans de la chaîne des Virunga.' },
      'waterfalls-nature-walks': { title: 'Cascades et balades nature', summary: 'Randonnées guidées vers cascades et paysages remarquables.' },
      'nile-river-adventures': { title: 'Aventures sur le Nil', summary: 'Rafting, kayak et croisières sur le plus long fleuve du monde.' },
      birdwatching: { title: 'Expéditions ornithologiques', summary: 'Observez plus de mille espèces, dont le rare bec-en-sabot.' },
      'cultural-community': { title: 'Culture et communautés', summary: 'Rencontres avec les communautés Batwa, Karamojong et Buganda.' },
      'luxury-private-safaris': { title: 'Safaris privés de luxe', summary: 'Véhicules privés, vols intérieurs et lodges écoresponsables.' },
      'family-holidays': { title: 'Safaris en famille', summary: 'Voyages souples et activités pensés pour petits et grands.' },
      'honeymoon-romance': { title: 'Voyages de noces et escapades romantiques', summary: 'Dîners privés, îles paisibles et croisières au coucher du soleil.' },
      'camping-nature-retreats': { title: 'Camping et séjours nature', summary: 'Dormez sous les étoiles au cœur de la nature africaine.' },
      'lake-island-experiences': { title: 'Lacs et îles', summary: 'Explorez les îles du lac Bunyonyi et du lac Victoria.' },
      'multiday-circuits': { title: 'Circuits de plusieurs jours', summary: 'Un grand voyage reliant primates, savanes, Nil et cultures locales.' },
      'photography-tours': { title: 'Photographie et safaris spécialisés', summary: 'Itinéraires conçus pour la lumière et l’observation de la faune.' }
    },
    packages: {
      'classic-uganda-safari': { title: 'Le safari classique en Ouganda', summary: 'Chimpanzés à Kibale, savane à Queen Elizabeth et gorilles à Bwindi.' },
      'gorillas-of-the-mist': { title: 'Expédition des gorilles dans la brume', summary: 'Trekking des gorilles à Bwindi et séjour paisible au lac Bunyonyi.' },
      'mighty-nile-adventure': { title: 'Aventure sur le puissant Nil et aux chutes Murchison', summary: 'Rhinocéros, chutes du Nil, safari fluvial et rafting à Jinja.' },
      'waterfalls-mountain-trails': { title: 'Cascades et sentiers de montagne', summary: 'Randonnées à Sipi, café Arabica et paysages du mont Elgon.' },
      'uganda-wildlife-photography': { title: 'Safari photo de la faune ougandaise', summary: 'Lumière idéale, sorties privées et observation prolongée de la faune.' },
      'ultimate-uganda-discovery': { title: 'Le grand circuit de découverte de l’Ouganda', summary: 'Parcs, forêts, cascades et lacs réunis dans un voyage complet.' },
      'romantic-uganda-honeymoon': { title: 'Lune de miel romantique en Ouganda', summary: 'Safari privé, gorilles et retraite romantique au bord du lac.' },
      'family-adventure-uganda': { title: 'Aventure familiale en Ouganda', summary: 'Un safari adapté aux familles, avec animaux, promenades et croisières.' }
    }
  },
  de: {
    destinations: {
      bwindi: 'Alter Nebelwald und Heimat von fast der Hälfte aller Berggorillas.',
      'queen-elizabeth': 'Berühmte Savanne, Kazinga-Kanal-Bootsfahrt und baumkletternde Löwen.',
      'murchison-falls': 'Der Nil zwängt sich durch eine enge Schlucht im größten Nationalpark Ugandas.',
      kibale: 'Regenwald mit 13 Primatenarten und einer großen Schimpansenpopulation.',
      'kidepo-valley': 'Abgelegenes Savannental mit dramatischer Landschaft und reicher Tierwelt.',
      'lake-mburo': 'Seen, Akazien und Grasland mit Zebras und Impalas.',
      'mgahinga-gorilla': 'Begegnen Sie Gorillas und Goldmeerkatzen an den Virunga-Vulkanen.',
      'rwenzori-mountains': 'Äquatorgletscher, Riesenlobelien und die Gipfel des Mondgebirges.',
      'jinja-nile': 'Historische Nilquelle und Ostafrikas Zentrum für Rafting und Kajak.',
      'sipi-falls-elgon': 'Drei Wasserfälle am Mount Elgon, umgeben von Arabica-Kaffeeplantagen.',
      'lake-bunyonyi': 'Hochlandsee mit 29 Inseln und ruhigen Einbaumkanufahrten.',
      'ziwa-rhino-sanctuary': 'Geschütztes Reservat für Ugandas weiße Nashörner, die zu Fuß beobachtet werden.',
      'lake-victoria-ssese': 'Tropischer Archipel mit goldenen Stränden und ruhigen Rückzugsorten.',
      'mabamba-swamp': 'Berühmtes Feuchtgebiet zur Beobachtung des seltenen Schuhschnabels.',
      'entebbe-botanical': 'Historische botanische Gärten und vielfältige Vogelwelt am Viktoriasee.',
      semuliki: 'Kongo-Regenwald, heiße Quellen und Vögel Zentralafrikas.',
      'fort-portal-craters': 'Kraterseen, Teeplantagen und das kulturelle Erbe des Toro-Königreichs.'
    },
    categories: {
      'wildlife-safaris': { title: 'Wildtiersafaris', summary: 'Pirschfahrten im Geländewagen durch die Savanne.' },
      'gorilla-trekking': { title: 'Gorilla-Trekking', summary: 'Begegnungen mit Berggorillas im tropischen Regenwald.' },
      'chimpanzee-tracking': { title: 'Schimpansenbeobachtung', summary: 'Folgen Sie Schimpansen durch den Regenwald und hören Sie ihre Rufe.' },
      'big-cat-photography': { title: 'Fotografie großer Katzen', summary: 'Fotografieren Sie Löwen, Leoparden und andere Savannenkatzen.' },
      'mountain-climbing': { title: 'Bergsteigen und Wandern', summary: 'Touren von Gletschergipfeln bis zu den Virunga-Vulkanen.' },
      'waterfalls-nature-walks': { title: 'Wasserfälle und Naturwanderungen', summary: 'Geführte Wanderungen zu Wasserfällen und eindrucksvoller Natur.' },
      'nile-river-adventures': { title: 'Abenteuer am Nil', summary: 'Rafting, Kajak und Bootsfahrten auf dem längsten Fluss der Welt.' },
      birdwatching: { title: 'Vogelbeobachtungsreisen', summary: 'Entdecken Sie über tausend Vogelarten, darunter den Schuhschnabel.' },
      'cultural-community': { title: 'Kultur und Gemeinschaften', summary: 'Begegnungen mit Batwa-, Karamojong- und Buganda-Gemeinschaften.' },
      'luxury-private-safaris': { title: 'Luxus- und Privatsafaris', summary: 'Private Fahrzeuge, Inlandsflüge und nachhaltige Lodges.' },
      'family-holidays': { title: 'Familiensafaris', summary: 'Flexible Reisen und Aktivitäten für alle Generationen.' },
      'honeymoon-romance': { title: 'Flitterwochen und romantische Reisen', summary: 'Private Abendessen, Inselaufenthalte und Bootsfahrten bei Sonnenuntergang.' },
      'camping-nature-retreats': { title: 'Camping und Natururlaub', summary: 'Übernachten Sie unter dem Sternenhimmel in Afrikas Wildnis.' },
      'lake-island-experiences': { title: 'Seen und Inseln', summary: 'Entdecken Sie die Inseln des Bunyonyi- und Viktoriasees.' },
      'multiday-circuits': { title: 'Mehrtägige Uganda-Rundreisen', summary: 'Eine große Reise zu Primaten, Savannen, Nil und lokalen Kulturen.' },
      'photography-tours': { title: 'Fotografie- und Spezialtiersafaris', summary: 'Reisen mit idealem Licht und viel Zeit für Tierbeobachtungen.' }
    },
    packages: {
      'classic-uganda-safari': { title: 'Die klassische Uganda-Safari', summary: 'Schimpansen in Kibale, Savanne in Queen Elizabeth und Gorillas in Bwindi.' },
      'gorillas-of-the-mist': { title: 'Expedition zu den Gorillas im Nebel', summary: 'Gorilla-Trekking in Bwindi und Erholung am Bunyonyisee.' },
      'mighty-nile-adventure': { title: 'Abenteuer am mächtigen Nil und bei den Murchison-Fällen', summary: 'Nashörner, Nil-Wasserfälle, Flusssafari und Rafting in Jinja.' },
      'waterfalls-mountain-trails': { title: 'Wasserfälle und Bergpfade', summary: 'Wanderungen bei Sipi, Arabica-Kaffee und Mount-Elgon-Landschaften.' },
      'uganda-wildlife-photography': { title: 'Uganda-Safari für Tierfotografie', summary: 'Bestes Licht, private Ausfahrten und viel Zeit zur Tierbeobachtung.' },
      'ultimate-uganda-discovery': { title: 'Die große Uganda-Entdeckungsreise', summary: 'Nationalparks, Regenwälder, Wasserfälle und Seen auf einer Reise.' },
      'romantic-uganda-honeymoon': { title: 'Romantische Flitterwochen in Uganda', summary: 'Private Safari, Gorillas und romantische Auszeit am See.' },
      'family-adventure-uganda': { title: 'Familienabenteuer in Uganda', summary: 'Eine familienfreundliche Safari mit Tieren, Wanderungen und Bootsfahrten.' }
    }
  },
  es: {
    destinations: {
      bwindi: 'Antiguo bosque neblinoso, hogar de casi la mitad de los gorilas de montaña.',
      'queen-elizabeth': 'Sabana emblemática, paseo por el canal Kazinga y leones trepadores de Ishasha.',
      'murchison-falls': 'El Nilo atraviesa un estrecho desfiladero en el parque más grande de Uganda.',
      kibale: 'Selva tropical con 13 especies de primates y abundantes chimpancés.',
      'kidepo-valley': 'Valle remoto de sabana, paisajes espectaculares y abundante fauna.',
      'lake-mburo': 'Lagos, acacias y praderas donde viven cebras e impalas.',
      'mgahinga-gorilla': 'Encuentra gorilas y monos dorados en los volcanes Virunga.',
      'rwenzori-mountains': 'Glaciares ecuatoriales, lobelias gigantes y cumbres de las Montañas de la Luna.',
      'jinja-nile': 'Fuente histórica del Nilo y capital regional del rafting y el kayak.',
      'sipi-falls-elgon': 'Tres cascadas al pie del monte Elgon, entre cafetales de Arabica.',
      'lake-bunyonyi': 'Lago de altura con 29 islas y tranquilas rutas en canoa.',
      'ziwa-rhino-sanctuary': 'Santuario protegido para observar a pie los rinocerontes blancos de Uganda.',
      'lake-victoria-ssese': 'Archipiélago tropical de playas doradas y refugios tranquilos.',
      'mabamba-swamp': 'Humedal famoso por avistar al raro picozapato.',
      'entebbe-botanical': 'Jardines botánicos centenarios y abundantes aves junto al lago Victoria.',
      semuliki: 'Selva de la cuenca del Congo, aguas termales y aves de África Central.',
      'fort-portal-craters': 'Lagos de cráter, plantaciones de té y patrimonio del reino Toro.'
    },
    categories: {
      'wildlife-safaris': { title: 'Safaris de fauna', summary: 'Recorridos en 4x4 por la sabana para buscar grandes animales.' },
      'gorilla-trekking': { title: 'Trekking de gorilas', summary: 'Encuentros con gorilas de montaña en la selva tropical.' },
      'chimpanzee-tracking': { title: 'Seguimiento de chimpancés', summary: 'Sigue chimpancés por el bosque y escucha sus llamadas.' },
      'big-cat-photography': { title: 'Fotografía de grandes felinos', summary: 'Fotografía leones trepadores, leopardos y felinos de sabana.' },
      'mountain-climbing': { title: 'Montañismo y senderismo', summary: 'Rutas desde picos glaciares hasta los volcanes Virunga.' },
      'waterfalls-nature-walks': { title: 'Cascadas y paseos por la naturaleza', summary: 'Caminatas guiadas hacia cascadas y paisajes impresionantes.' },
      'nile-river-adventures': { title: 'Aventuras en el Nilo', summary: 'Rafting, kayak y paseos en barco por el río más largo del mundo.' },
      birdwatching: { title: 'Expediciones de observación de aves', summary: 'Descubre más de mil especies, incluido el raro picozapato.' },
      'cultural-community': { title: 'Cultura y comunidades', summary: 'Encuentros con comunidades Batwa, Karamojong y Buganda.' },
      'luxury-private-safaris': { title: 'Safaris privados de lujo', summary: 'Vehículos privados, vuelos nacionales y alojamientos sostenibles.' },
      'family-holidays': { title: 'Safaris familiares', summary: 'Viajes flexibles y actividades para todas las edades.' },
      'honeymoon-romance': { title: 'Lunas de miel y escapadas románticas', summary: 'Cenas privadas, islas tranquilas y paseos al atardecer.' },
      'camping-nature-retreats': { title: 'Camping y retiros en la naturaleza', summary: 'Duerme bajo las estrellas en la naturaleza africana.' },
      'lake-island-experiences': { title: 'Lagos e islas', summary: 'Explora las islas de los lagos Bunyonyi y Victoria.' },
      'multiday-circuits': { title: 'Circuitos de varios días por Uganda', summary: 'Una gran ruta entre primates, sabanas, el Nilo y culturas locales.' },
      'photography-tours': { title: 'Fotografía y safaris especializados', summary: 'Rutas preparadas para la mejor luz y observación de fauna.' }
    },
    packages: {
      'classic-uganda-safari': { title: 'El safari clásico de Uganda', summary: 'Chimpancés en Kibale, sabana en Queen Elizabeth y gorilas en Bwindi.' },
      'gorillas-of-the-mist': { title: 'Expedición de los gorilas de la niebla', summary: 'Trekking de gorilas en Bwindi y descanso junto al lago Bunyonyi.' },
      'mighty-nile-adventure': { title: 'Aventura en el poderoso Nilo y las cataratas Murchison', summary: 'Rinocerontes, cataratas, safari fluvial y rafting en Jinja.' },
      'waterfalls-mountain-trails': { title: 'Cascadas y senderos de montaña', summary: 'Rutas por Sipi, café Arabica y paisajes del monte Elgon.' },
      'uganda-wildlife-photography': { title: 'Safari fotográfico de fauna en Uganda', summary: 'Luz ideal, salidas privadas y tiempo para observar animales.' },
      'ultimate-uganda-discovery': { title: 'El circuito definitivo para descubrir Uganda', summary: 'Parques, bosques, cascadas y lagos en un viaje completo.' },
      'romantic-uganda-honeymoon': { title: 'Luna de miel romántica en Uganda', summary: 'Safari privado, gorilas y una estancia romántica junto al lago.' },
      'family-adventure-uganda': { title: 'Aventura familiar en Uganda', summary: 'Safari familiar con fauna, paseos y recorridos en barco.' }
    }
  },
  it: {
    destinations: {
      bwindi: 'Antica foresta avvolta dalla nebbia, rifugio di quasi metà dei gorilla di montagna.',
      'queen-elizabeth': 'Celebre savana, crociera sul canale Kazinga e leoni arboricoli di Ishasha.',
      'murchison-falls': 'Il Nilo attraversa una stretta gola nel parco più grande dell’Uganda.',
      kibale: 'Foresta pluviale con 13 specie di primati e numerosi scimpanzé.',
      'kidepo-valley': 'Remota valle di savana, paesaggi spettacolari e fauna abbondante.',
      'lake-mburo': 'Laghi, acacie e praterie popolate da zebre e impala.',
      'mgahinga-gorilla': 'Incontra gorilla e cercopitechi dorati sui vulcani Virunga.',
      'rwenzori-mountains': 'Ghiacciai equatoriali, lobelie giganti e le cime dei Monti della Luna.',
      'jinja-nile': 'Sorgente storica del Nilo e capitale regionale di rafting e kayak.',
      'sipi-falls-elgon': 'Tre cascate ai piedi del monte Elgon, tra piantagioni di caffè Arabica.',
      'lake-bunyonyi': 'Lago d’altura con 29 isole e tranquille escursioni in canoa.',
      'ziwa-rhino-sanctuary': 'Riserva protetta per osservare a piedi i rinoceronti bianchi dell’Uganda.',
      'lake-victoria-ssese': 'Arcipelago tropicale con spiagge dorate e rifugi tranquilli.',
      'mabamba-swamp': 'Zona umida famosa per l’avvistamento del raro becco a scarpa.',
      'entebbe-botanical': 'Giardini botanici secolari e ricca avifauna sul lago Vittoria.',
      semuliki: 'Foresta del bacino del Congo, sorgenti termali e uccelli dell’Africa centrale.',
      'fort-portal-craters': 'Laghi craterici, piantagioni di tè e patrimonio del regno Toro.'
    },
    categories: {
      'wildlife-safaris': { title: 'Safari naturalistici', summary: 'Safari in 4x4 nella savana alla ricerca dei grandi animali.' },
      'gorilla-trekking': { title: 'Trekking dei gorilla', summary: 'Incontri con i gorilla di montagna nella foresta pluviale.' },
      'chimpanzee-tracking': { title: 'Avvistamento degli scimpanzé', summary: 'Segui gli scimpanzé nella foresta e ascolta i loro richiami.' },
      'big-cat-photography': { title: 'Fotografia dei grandi felini', summary: 'Fotografa leoni arboricoli, leopardi e felini della savana.' },
      'mountain-climbing': { title: 'Alpinismo ed escursionismo', summary: 'Itinerari dalle vette glaciali ai vulcani dei Virunga.' },
      'waterfalls-nature-walks': { title: 'Cascate e passeggiate nella natura', summary: 'Escursioni guidate tra cascate e paesaggi suggestivi.' },
      'nile-river-adventures': { title: 'Avventure sul Nilo', summary: 'Rafting, kayak e crociere sul fiume più lungo del mondo.' },
      birdwatching: { title: 'Spedizioni di birdwatching', summary: 'Scopri oltre mille specie, tra cui il raro becco a scarpa.' },
      'cultural-community': { title: 'Cultura e comunità', summary: 'Incontri con le comunità Batwa, Karamojong e Buganda.' },
      'luxury-private-safaris': { title: 'Safari privati di lusso', summary: 'Veicoli privati, voli nazionali e lodge sostenibili.' },
      'family-holidays': { title: 'Safari in famiglia', summary: 'Viaggi flessibili e attività adatte a tutte le età.' },
      'honeymoon-romance': { title: 'Luna di miele e fughe romantiche', summary: 'Cene private, isole tranquille e crociere al tramonto.' },
      'camping-nature-retreats': { title: 'Campeggio e ritiri nella natura', summary: 'Dormi sotto le stelle nel cuore della natura africana.' },
      'lake-island-experiences': { title: 'Laghi e isole', summary: 'Esplora le isole dei laghi Bunyonyi e Vittoria.' },
      'multiday-circuits': { title: 'Itinerari di più giorni in Uganda', summary: 'Un grande viaggio tra primati, savana, Nilo e culture locali.' },
      'photography-tours': { title: 'Fotografia e safari naturalistici speciali', summary: 'Itinerari studiati per la luce e l’osservazione della fauna.' }
    },
    packages: {
      'classic-uganda-safari': { title: 'Il safari classico in Uganda', summary: 'Scimpanzé a Kibale, savana a Queen Elizabeth e gorilla a Bwindi.' },
      'gorillas-of-the-mist': { title: 'Spedizione dei gorilla nella nebbia', summary: 'Trekking dei gorilla a Bwindi e relax sul lago Bunyonyi.' },
      'mighty-nile-adventure': { title: 'Avventura sul possente Nilo e alle cascate Murchison', summary: 'Rinoceronti, cascate, safari fluviale e rafting a Jinja.' },
      'waterfalls-mountain-trails': { title: 'Cascate e sentieri di montagna', summary: 'Escursioni a Sipi, caffè Arabica e paesaggi del monte Elgon.' },
      'uganda-wildlife-photography': { title: 'Safari fotografico naturalistico in Uganda', summary: 'Luce ideale, uscite private e tempo per osservare la fauna.' },
      'ultimate-uganda-discovery': { title: 'Il grande circuito alla scoperta dell’Uganda', summary: 'Parchi, foreste, cascate e laghi in un viaggio completo.' },
      'romantic-uganda-honeymoon': { title: 'Luna di miele romantica in Uganda', summary: 'Safari privato, gorilla e soggiorno romantico sul lago.' },
      'family-adventure-uganda': { title: 'Avventura in famiglia in Uganda', summary: 'Safari per famiglie tra fauna, passeggiate e gite in barca.' }
    }
  },
  zh: {
    destinations: {
      bwindi: '古老的雾林，是近半数山地大猩猩的栖息地。',
      'queen-elizabeth': '著名稀树草原、卡津加水道游船和伊沙沙爬树狮。',
      'murchison-falls': '维多利亚尼罗河穿过狭窄峡谷，流经乌干达最大的国家公园。',
      kibale: '热带雨林拥有13种灵长类动物和众多黑猩猩。',
      'kidepo-valley': '偏远的稀树草原山谷，景色壮丽，野生动物丰富。',
      'lake-mburo': '湖泊、金合欢林和草原，是斑马与大羚羊的家园。',
      'mgahinga-gorilla': '在维龙加火山山坡追寻大猩猩和金猴。',
      'rwenzori-mountains': '赤道冰川、巨型莲座植物与月亮山脉的高峰。',
      'jinja-nile': '尼罗河历史源头，也是东非漂流与皮划艇中心。',
      'sipi-falls-elgon': '埃尔贡山麓的三座瀑布，周围遍布阿拉比卡咖啡园。',
      'lake-bunyonyi': '高地湖泊散布着29座岛屿，可乘独木舟悠游。',
      'ziwa-rhino-sanctuary': '受保护的保护区，可徒步观察乌干达白犀牛。',
      'lake-victoria-ssese': '热带群岛拥有金色沙滩和宁静的度假之所。',
      'mabamba-swamp': '著名湿地，是寻找珍稀鲸头鹳的好去处。',
      'entebbe-botanical': '维多利亚湖畔的百年植物园与丰富鸟类。',
      semuliki: '刚果盆地雨林、温泉与中非鸟类。',
      'fort-portal-craters': '火山口湖、茶园与托罗王国文化遗产。'
    },
    categories: {
      'wildlife-safaris': { title: '野生动物 safari', summary: '乘坐四驱车穿越草原，寻找大型野生动物。' },
      'gorilla-trekking': { title: '大猩猩徒步', summary: '在热带雨林中近距离遇见山地大猩猩。' },
      'chimpanzee-tracking': { title: '黑猩猩追踪', summary: '穿行雨林追踪黑猩猩，聆听它们的呼叫。' },
      'big-cat-photography': { title: '大型猫科动物摄影', summary: '拍摄爬树狮、花豹和草原上的猫科动物。' },
      'mountain-climbing': { title: '登山与徒步', summary: '从冰川山峰到维龙加火山的探险路线。' },
      'waterfalls-nature-walks': { title: '瀑布与自然漫步', summary: '沿向导路线徒步欣赏瀑布与壮丽景色。' },
      'nile-river-adventures': { title: '尼罗河探险', summary: '在世界最长河流体验漂流、皮划艇和游船。' },
      birdwatching: { title: '观鸟探险', summary: '寻找上千种鸟类，包括珍稀鲸头鹳。' },
      'cultural-community': { title: '文化与社区体验', summary: '拜访巴特瓦、卡拉莫琼和布干达社区。' },
      'luxury-private-safaris': { title: '豪华私人 safari', summary: '专属车辆、国内航班与可持续生态旅舍。' },
      'family-holidays': { title: '家庭 safari 假期', summary: '适合各年龄段的灵活行程与活动。' },
      'honeymoon-romance': { title: '蜜月与浪漫之旅', summary: '私人晚餐、静谧岛屿与日落游船。' },
      'camping-nature-retreats': { title: '露营与自然度假', summary: '在非洲荒野的星空下入眠。' },
      'lake-island-experiences': { title: '湖泊与岛屿体验', summary: '探索布尼奥尼湖与维多利亚湖群岛。' },
      'multiday-circuits': { title: '乌干达多日环线', summary: '一次串联灵长类、草原、尼罗河与当地文化。' },
      'photography-tours': { title: '摄影与专业野生动物之旅', summary: '为理想光线和野生动物观察量身安排路线。' }
    },
    packages: {
      'classic-uganda-safari': { title: '乌干达经典 safari', summary: '基巴莱黑猩猩、伊丽莎白女王国家公园草原与布温迪大猩猩。' },
      'gorillas-of-the-mist': { title: '雾中大猩猩探险', summary: '在布温迪徒步观猩猩，并于布尼奥尼湖畔放松。' },
      'mighty-nile-adventure': { title: '强大尼罗河与默奇森瀑布探险', summary: '犀牛、尼罗河瀑布、河上 safari 和金贾漂流。' },
      'waterfalls-mountain-trails': { title: '瀑布与山间步道', summary: '徒步西皮瀑布，体验阿拉比卡咖啡与埃尔贡山风光。' },
      'uganda-wildlife-photography': { title: '乌干达野生动物摄影 safari', summary: '选择理想光线、私人出行并留足观察时间。' },
      'ultimate-uganda-discovery': { title: '乌干达终极探索环线', summary: '一趟旅程探索国家公园、雨林、瀑布与湖泊。' },
      'romantic-uganda-honeymoon': { title: '乌干达浪漫蜜月', summary: '私人 safari、大猩猩体验与湖畔浪漫住宿。' },
      'family-adventure-uganda': { title: '乌干达家庭探险', summary: '适合家庭的野生动物、徒步与游船之旅。' }
    }
  },
  ar: {
    destinations: {
      bwindi: 'غابة ضبابية عريقة تؤوي نحو نصف غوريلا الجبال في العالم.',
      'queen-elizabeth': 'سافانا شهيرة ورحلة بقارب في قناة كازينغا وأسود إيشاشا المتسلقة للأشجار.',
      'murchison-falls': 'يشق النيل مضيقاً ضيقاً في أكبر متنزه وطني في أوغندا.',
      kibale: 'غابة مطيرة تضم 13 نوعاً من الرئيسيات وأعداداً كبيرة من الشمبانزي.',
      'kidepo-valley': 'وادي سافانا ناءٍ بمناظر مهيبة وحياة برية وفيرة.',
      'lake-mburo': 'بحيرات وأشجار أكاسيا ومراعٍ تعيش فيها الحمر الوحشية والإمبالا.',
      'mgahinga-gorilla': 'تتبّع الغوريلا والقرود الذهبية على براكين فيرونغا.',
      'rwenzori-mountains': 'أنهار جليدية استوائية ونباتات عملاقة وقمم جبال القمر.',
      'jinja-nile': 'منبع النيل التاريخي ومركز شرق أفريقيا للتجديف بالقوارب.',
      'sipi-falls-elgon': 'ثلاثة شلالات عند سفح جبل إلغون وسط مزارع البن العربي.',
      'lake-bunyonyi': 'بحيرة مرتفعة تضم 29 جزيرة ورحلات هادئة بالقوارب التقليدية.',
      'ziwa-rhino-sanctuary': 'محمية آمنة لمشاهدة وحيد القرن الأبيض في أوغندا سيراً على الأقدام.',
      'lake-victoria-ssese': 'أرخبيل استوائي بشواطئ ذهبية وملاذات هادئة.',
      'mabamba-swamp': 'مستنقع مشهور بمشاهدة طائر الحذاء النادر.',
      'entebbe-botanical': 'حدائق نباتية عريقة وطيور متنوعة على ضفاف بحيرة فيكتوريا.',
      semuliki: 'غابة حوض الكونغو وينابيع حارة وطيور من أفريقيا الوسطى.',
      'fort-portal-craters': 'بحيرات فوهات بركانية ومزارع شاي وتراث مملكة تورو.'
    },
    categories: {
      'wildlife-safaris': { title: 'رحلات السفاري للحياة البرية', summary: 'جولات بمركبات الدفع الرباعي عبر السافانا لمشاهدة الحيوانات.' },
      'gorilla-trekking': { title: 'تتبّع الغوريلا', summary: 'لقاء غوريلا الجبال في الغابات المطيرة.' },
      'chimpanzee-tracking': { title: 'تتبّع الشمبانزي', summary: 'تتبّع الشمبانزي في الغابة واستمع إلى نداءاته.' },
      'big-cat-photography': { title: 'تصوير السنوريات الكبيرة', summary: 'صوّر الأسود المتسلقة للأشجار والفهود وقطط السافانا.' },
      'mountain-climbing': { title: 'تسلّق الجبال والمشي', summary: 'مسارات من القمم الجليدية إلى براكين فيرونغا.' },
      'waterfalls-nature-walks': { title: 'الشلالات وجولات الطبيعة', summary: 'رحلات مشي بصحبة مرشدين إلى الشلالات والمناظر الطبيعية.' },
      'nile-river-adventures': { title: 'مغامرات نهر النيل', summary: 'تجديف وركوب قوارب على أطول أنهار العالم.' },
      birdwatching: { title: 'رحلات مراقبة الطيور', summary: 'اكتشف أكثر من ألف نوع، منها طائر الحذاء النادر.' },
      'cultural-community': { title: 'الثقافة والمجتمعات المحلية', summary: 'لقاءات مع مجتمعات باتوا وكاراموجونغ وبوغندا.' },
      'luxury-private-safaris': { title: 'رحلات سفاري خاصة فاخرة', summary: 'مركبات خاصة ورحلات داخلية ونُزُل مستدامة.' },
      'family-holidays': { title: 'رحلات سفاري عائلية', summary: 'رحلات مرنة وأنشطة تناسب جميع الأعمار.' },
      'honeymoon-romance': { title: 'شهر العسل والرحلات الرومانسية', summary: 'عشاء خاص وجزر هادئة ورحلات عند الغروب.' },
      'camping-nature-retreats': { title: 'التخييم والاستجمام في الطبيعة', summary: 'نم تحت النجوم في قلب البرية الأفريقية.' },
      'lake-island-experiences': { title: 'تجارب البحيرات والجزر', summary: 'استكشف جزر بحيرتي بونيوني وفيكتوريا.' },
      'multiday-circuits': { title: 'جولات أوغندا متعددة الأيام', summary: 'رحلة شاملة بين الرئيسيات والسافانا والنيل والثقافات المحلية.' },
      'photography-tours': { title: 'التصوير ورحلات الحياة البرية المتخصصة', summary: 'مسارات تراعي الإضاءة المثالية ومراقبة الحيوانات.' }
    },
    packages: {
      'classic-uganda-safari': { title: 'رحلة السفاري الكلاسيكية في أوغندا', summary: 'شمبانزي كيبالي وسافانا كوين إليزابيث وغوريلا بويندي.' },
      'gorillas-of-the-mist': { title: 'رحلة غوريلا الضباب', summary: 'تتبّع الغوريلا في بويندي والاسترخاء عند بحيرة بونيوني.' },
      'mighty-nile-adventure': { title: 'مغامرة النيل العظيم وشلالات مورشيسون', summary: 'وحيد القرن والشلالات ورحلة نهرية وتجديف في جينجا.' },
      'waterfalls-mountain-trails': { title: 'الشلالات ومسارات الجبال', summary: 'المشي في سيبي وتجربة البن العربي ومناظر جبل إلغون.' },
      'uganda-wildlife-photography': { title: 'رحلة تصوير الحياة البرية في أوغندا', summary: 'إضاءة مثالية وجولات خاصة ووقت أطول لمراقبة الحيوانات.' },
      'ultimate-uganda-discovery': { title: 'جولة اكتشاف أوغندا الشاملة', summary: 'متنزهات وغابات وشلالات وبحيرات في رحلة واحدة.' },
      'romantic-uganda-honeymoon': { title: 'شهر عسل رومانسي في أوغندا', summary: 'سفاري خاص وغوريلا وإقامة رومانسية على ضفاف البحيرة.' },
      'family-adventure-uganda': { title: 'مغامرة عائلية في أوغندا', summary: 'رحلة تناسب العائلات تجمع الحياة البرية والمشي والقوارب.' }
    }
  },
  sw: {
    destinations: {
      bwindi: 'Msitu wa kale wenye ukungu, makazi ya karibu nusu ya sokwe wa milimani duniani.',
      'queen-elizabeth': 'Savanna maarufu, safari ya boti kwenye Mfereji wa Kazinga na simba wa Ishasha.',
      'murchison-falls': 'Mto Nile hupita kwenye korongo nyembamba katika hifadhi kubwa zaidi ya Uganda.',
      kibale: 'Msitu wa mvua wenye aina 13 za nyani na sokwe wengi.',
      'kidepo-valley': 'Bonde la savanna lililo mbali, mandhari ya kuvutia na wanyamapori wengi.',
      'lake-mburo': 'Maziwa, migunga na nyasi ambako pundamilia na impala huishi.',
      'mgahinga-gorilla': 'Fuatilia sokwe wa milimani na tumbili wa dhahabu kwenye volkano za Virunga.',
      'rwenzori-mountains': 'Barafu za ikweta, mimea mikubwa na vilele vya Milima ya Mwezi.',
      'jinja-nile': 'Chanzo cha kihistoria cha Nile na kitovu cha rafting na kayaking Afrika Mashariki.',
      'sipi-falls-elgon': 'Maporomoko matatu chini ya Mlima Elgon, katikati ya mashamba ya kahawa.',
      'lake-bunyonyi': 'Ziwa la milimani lenye visiwa 29 na safari tulivu za mtumbwi.',
      'ziwa-rhino-sanctuary': 'Hifadhi salama ya kutazama vifaru weupe wa Uganda kwa miguu.',
      'lake-victoria-ssese': 'Visiwa vya kitropiki vyenye fukwe za dhahabu na mapumziko tulivu.',
      'mabamba-swamp': 'Eneo oevu maarufu kwa kumwona korongo adimu wa shoebill.',
      'entebbe-botanical': 'Bustani za kale na ndege wengi kando ya Ziwa Victoria.',
      semuliki: 'Msitu wa Bonde la Kongo, chemchemi za moto na ndege wa Afrika ya Kati.',
      'fort-portal-craters': 'Maziwa ya volkeno, mashamba ya chai na urithi wa Ufalme wa Toro.'
    },
    categories: {
      'wildlife-safaris': { title: 'Safari za wanyamapori', summary: 'Safari za magari ya 4x4 kwenye savanna kutafuta wanyama wakubwa.' },
      'gorilla-trekking': { title: 'Safari ya sokwe wa milimani', summary: 'Kutana na sokwe wa milimani ndani ya msitu wa mvua.' },
      'chimpanzee-tracking': { title: 'Kufuatilia sokwe', summary: 'Wafuate sokwe msituni na usikie miito yao.' },
      'big-cat-photography': { title: 'Upigaji picha wa paka wakubwa', summary: 'Piga picha simba, chui na paka wa savanna.' },
      'mountain-climbing': { title: 'Kupanda milima na kutembea', summary: 'Njia kutoka vilele vya barafu hadi volkano za Virunga.' },
      'waterfalls-nature-walks': { title: 'Maporomoko na matembezi ya asili', summary: 'Matembezi ya kuongozwa kwenye maporomoko na mandhari nzuri.' },
      'nile-river-adventures': { title: 'Matukio ya Mto Nile', summary: 'Rafting, kayaking na safari za boti kwenye mto mrefu zaidi duniani.' },
      birdwatching: { title: 'Safari za kuangalia ndege', summary: 'Gundua zaidi ya aina elfu moja, ikiwemo shoebill adimu.' },
      'cultural-community': { title: 'Utamaduni na jamii', summary: 'Kutana na jamii za Batwa, Karamojong na Buganda.' },
      'luxury-private-safaris': { title: 'Safari za kifahari za binafsi', summary: 'Magari binafsi, safari za ndege za ndani na malazi endelevu.' },
      'family-holidays': { title: 'Safari za familia', summary: 'Safari rahisi na shughuli kwa watu wa kila umri.' },
      'honeymoon-romance': { title: 'Honeymoon na mapumziko ya kimapenzi', summary: 'Chakula cha jioni binafsi, visiwa tulivu na safari za machweo.' },
      'camping-nature-retreats': { title: 'Kambi na mapumziko ya asili', summary: 'Lala chini ya nyota katika pori la Afrika.' },
      'lake-island-experiences': { title: 'Maziwa na visiwa', summary: 'Chunguza visiwa vya maziwa Bunyonyi na Victoria.' },
      'multiday-circuits': { title: 'Mizunguko ya Uganda ya siku nyingi', summary: 'Safari kuu ya nyani, savanna, Nile na tamaduni za eneo.' },
      'photography-tours': { title: 'Upigaji picha na safari maalum za wanyamapori', summary: 'Njia zilizopangwa kwa mwanga mzuri na kutazama wanyama.' }
    },
    packages: {
      'classic-uganda-safari': { title: 'Safari ya kawaida ya Uganda', summary: 'Sokwe Kibale, savanna Queen Elizabeth na sokwe wa milimani Bwindi.' },
      'gorillas-of-the-mist': { title: 'Safari ya sokwe wa milimani kwenye ukungu', summary: 'Fuatilia sokwe Bwindi na upumzike kando ya Ziwa Bunyonyi.' },
      'mighty-nile-adventure': { title: 'Matukio ya Nile na Maporomoko ya Murchison', summary: 'Vifaru, maporomoko, safari ya mtoni na rafting Jinja.' },
      'waterfalls-mountain-trails': { title: 'Maporomoko na njia za milimani', summary: 'Matembezi Sipi, kahawa ya Arabica na mandhari ya Mlima Elgon.' },
      'uganda-wildlife-photography': { title: 'Safari ya kupiga picha wanyamapori Uganda', summary: 'Mwanga mzuri, safari binafsi na muda wa kutazama wanyama.' },
      'ultimate-uganda-discovery': { title: 'Mzunguko kamili wa kugundua Uganda', summary: 'Hifadhi, misitu, maporomoko na maziwa katika safari moja.' },
      'romantic-uganda-honeymoon': { title: 'Honeymoon ya kimapenzi Uganda', summary: 'Safari binafsi, sokwe wa milimani na mapumziko kando ya ziwa.' },
      'family-adventure-uganda': { title: 'Matukio ya familia Uganda', summary: 'Safari ya familia yenye wanyamapori, matembezi na boti.' }
    }
  },
  nl: {
    destinations: {
      bwindi: 'Oud nevelwoud en leefgebied van bijna de helft van alle berggorilla’s.',
      'queen-elizabeth': 'Beroemde savanne, boottocht over het Kazinga-kanaal en boomklimmende leeuwen.',
      'murchison-falls': 'De Nijl stroomt door een smalle kloof in het grootste nationale park van Oeganda.',
      kibale: 'Regenwoud met 13 primatensoorten en veel chimpansees.',
      'kidepo-valley': 'Afgelegen savannevallei met indrukwekkende landschappen en veel wild.',
      'lake-mburo': 'Meren, acacia’s en graslanden met zebra’s en impala’s.',
      'mgahinga-gorilla': 'Volg gorilla’s en gouden meerkatten op de Virunga-vulkanen.',
      'rwenzori-mountains': 'Evenaargletsjers, reuzenlobelia’s en de toppen van het Maan-gebergte.',
      'jinja-nile': 'Historische bron van de Nijl en centrum voor raften en kajakken in Oost-Afrika.',
      'sipi-falls-elgon': 'Drie watervallen aan de voet van Mount Elgon, tussen Arabica-koffieplantages.',
      'lake-bunyonyi': 'Hooggelegen meer met 29 eilanden en rustige kanotochten.',
      'ziwa-rhino-sanctuary': 'Beschermd reservaat waar je te voet witte neushoorns kunt zien.',
      'lake-victoria-ssese': 'Tropische eilandengroep met gouden stranden en rustige verblijven.',
      'mabamba-swamp': 'Bekend moerasgebied om de zeldzame schoenbekooievaar te spotten.',
      'entebbe-botanical': 'Historische botanische tuinen en veel vogels aan het Victoriameer.',
      semuliki: 'Congobekken-regenwoud, warmwaterbronnen en vogels uit Centraal-Afrika.',
      'fort-portal-craters': 'Kratermeren, theeplantages en het culturele erfgoed van het Toro-koninkrijk.'
    },
    categories: {
      'wildlife-safaris': { title: 'Wildlife-safari’s', summary: 'Rijd met een 4x4 door de savanne op zoek naar groot wild.' },
      'gorilla-trekking': { title: 'Gorillatrekking', summary: 'Ontmoet berggorilla’s in het tropische regenwoud.' },
      'chimpanzee-tracking': { title: 'Chimpansees volgen', summary: 'Volg chimpansees door het bos en hoor hun roepen.' },
      'big-cat-photography': { title: 'Fotografie van grote katachtigen', summary: 'Fotografeer boomklimmende leeuwen, luipaarden en savannekatten.' },
      'mountain-climbing': { title: 'Bergbeklimmen en wandelen', summary: 'Tochten van gletsjertoppen tot de vulkanen van Virunga.' },
      'waterfalls-nature-walks': { title: 'Watervallen en natuurwandelingen', summary: 'Begeleide wandelingen naar watervallen en indrukwekkende natuur.' },
      'nile-river-adventures': { title: 'Avonturen op de Nijl', summary: 'Raften, kajakken en varen op de langste rivier ter wereld.' },
      birdwatching: { title: 'Vogelexpedities', summary: 'Ontdek meer dan duizend soorten, waaronder de schoenbekooievaar.' },
      'cultural-community': { title: 'Cultuur en gemeenschappen', summary: 'Ontmoet Batwa-, Karamojong- en Buganda-gemeenschappen.' },
      'luxury-private-safaris': { title: 'Luxe privésafari’s', summary: 'Privévoertuigen, binnenlandse vluchten en duurzame lodges.' },
      'family-holidays': { title: 'Familiesafari’s', summary: 'Flexibele reizen en activiteiten voor alle leeftijden.' },
      'honeymoon-romance': { title: 'Huwelijksreizen en romantische uitstapjes', summary: 'Privédiners, rustige eilanden en boottochten bij zonsondergang.' },
      'camping-nature-retreats': { title: 'Kamperen en natuurverblijven', summary: 'Slaap onder de sterren in de Afrikaanse wildernis.' },
      'lake-island-experiences': { title: 'Meren en eilanden', summary: 'Verken de eilanden van het Bunyonyi- en Victoriameer.' },
      'multiday-circuits': { title: 'Meerdaagse rondreizen door Oeganda', summary: 'Een grote reis langs primaten, savannes, de Nijl en lokale culturen.' },
      'photography-tours': { title: 'Fotografie- en gespecialiseerde wildlife-tours', summary: 'Routes voor optimaal licht en uitgebreide wildobservatie.' }
    },
    packages: {
      'classic-uganda-safari': { title: 'De klassieke Oeganda-safari', summary: 'Chimpansees in Kibale, savanne in Queen Elizabeth en gorilla’s in Bwindi.' },
      'gorillas-of-the-mist': { title: 'Expeditie naar gorilla’s in de mist', summary: 'Gorillatrekking in Bwindi en ontspanning aan het Bunyonyimeer.' },
      'mighty-nile-adventure': { title: 'Avontuur op de machtige Nijl en bij Murchison Falls', summary: 'Neushoorns, watervallen, een riviersafari en raften in Jinja.' },
      'waterfalls-mountain-trails': { title: 'Watervallen en bergpaden', summary: 'Wandelingen bij Sipi, Arabica-koffie en Mount Elgon-landschappen.' },
      'uganda-wildlife-photography': { title: 'Wildlife-fotosafari in Oeganda', summary: 'Ideaal licht, privéritten en volop tijd om dieren te observeren.' },
      'ultimate-uganda-discovery': { title: 'De ultieme ontdekkingstocht door Oeganda', summary: 'Parken, regenwouden, watervallen en meren in één complete reis.' },
      'romantic-uganda-honeymoon': { title: 'Romantische huwelijksreis in Oeganda', summary: 'Privésafari, gorilla’s en een romantisch verblijf aan het meer.' },
      'family-adventure-uganda': { title: 'Familieavontuur in Oeganda', summary: 'Een familiesafari met wildlife, wandelingen en boottochten.' }
    }
  },
  pt: {
    destinations: {
      bwindi: 'Floresta antiga e enevoada, lar de quase metade dos gorilas-das-montanhas.',
      'queen-elizabeth': 'Savana famosa, passeio pelo canal Kazinga e leões trepadores de Ishasha.',
      'murchison-falls': 'O Nilo atravessa um desfiladeiro estreito no maior parque nacional de Uganda.',
      kibale: 'Floresta tropical com 13 espécies de primatas e muitos chimpanzés.',
      'kidepo-valley': 'Vale remoto de savana, paisagens dramáticas e vida selvagem abundante.',
      'lake-mburo': 'Lagos, acácias e pradarias onde vivem zebras e impalas.',
      'mgahinga-gorilla': 'Encontre gorilas e macacos-dourados nos vulcões de Virunga.',
      'rwenzori-mountains': 'Glaciares equatoriais, lobélias gigantes e os picos das Montanhas da Lua.',
      'jinja-nile': 'Nascente histórica do Nilo e centro regional de rafting e caiaque.',
      'sipi-falls-elgon': 'Três cascatas aos pés do monte Elgon, entre plantações de café arábica.',
      'lake-bunyonyi': 'Lago de altitude com 29 ilhas e passeios tranquilos de canoa.',
      'ziwa-rhino-sanctuary': 'Santuário protegido para observar a pé os rinocerontes-brancos de Uganda.',
      'lake-victoria-ssese': 'Arquipélago tropical com praias douradas e refúgios tranquilos.',
      'mabamba-swamp': 'Zona húmida famosa pela observação do raro bico-de-sapato.',
      'entebbe-botanical': 'Jardins botânicos centenários e muitas aves junto ao lago Vitória.',
      semuliki: 'Floresta da bacia do Congo, fontes termais e aves da África Central.',
      'fort-portal-craters': 'Lagos de cratera, plantações de chá e património do reino Toro.'
    },
    categories: {
      'wildlife-safaris': { title: 'Safáris de vida selvagem', summary: 'Percursos de 4x4 pela savana em busca de grandes animais.' },
      'gorilla-trekking': { title: 'Trekking de gorilas', summary: 'Encontros com gorilas-das-montanhas na floresta tropical.' },
      'chimpanzee-tracking': { title: 'Observação de chimpanzés', summary: 'Siga chimpanzés pela floresta e ouça os seus chamamentos.' },
      'big-cat-photography': { title: 'Fotografia de grandes felinos', summary: 'Fotografe leões trepadores, leopardos e felinos da savana.' },
      'mountain-climbing': { title: 'Montanhismo e caminhadas', summary: 'Percursos dos picos glaciares aos vulcões de Virunga.' },
      'waterfalls-nature-walks': { title: 'Cascatas e caminhadas na natureza', summary: 'Caminhadas guiadas até cascatas e paisagens marcantes.' },
      'nile-river-adventures': { title: 'Aventuras no Nilo', summary: 'Rafting, caiaque e passeios no rio mais longo do mundo.' },
      birdwatching: { title: 'Expedições de observação de aves', summary: 'Descubra mais de mil espécies, incluindo o raro bico-de-sapato.' },
      'cultural-community': { title: 'Cultura e comunidades', summary: 'Encontros com comunidades Batwa, Karamojong e Buganda.' },
      'luxury-private-safaris': { title: 'Safáris privados de luxo', summary: 'Veículos privados, voos domésticos e alojamentos sustentáveis.' },
      'family-holidays': { title: 'Safáris em família', summary: 'Viagens flexíveis e atividades para todas as idades.' },
      'honeymoon-romance': { title: 'Lua de mel e escapadas românticas', summary: 'Jantares privados, ilhas tranquilas e passeios ao pôr do sol.' },
      'camping-nature-retreats': { title: 'Campismo e retiros na natureza', summary: 'Durma sob as estrelas no coração da natureza africana.' },
      'lake-island-experiences': { title: 'Lagos e ilhas', summary: 'Explore as ilhas dos lagos Bunyonyi e Vitória.' },
      'multiday-circuits': { title: 'Circuitos de vários dias em Uganda', summary: 'Uma grande viagem por primatas, savanas, Nilo e culturas locais.' },
      'photography-tours': { title: 'Fotografia e safáris especializados', summary: 'Percursos pensados para a luz ideal e observação da vida selvagem.' }
    },
    packages: {
      'classic-uganda-safari': { title: 'O safári clássico de Uganda', summary: 'Chimpanzés em Kibale, savana em Queen Elizabeth e gorilas em Bwindi.' },
      'gorillas-of-the-mist': { title: 'Expedição dos gorilas na neblina', summary: 'Trekking de gorilas em Bwindi e descanso junto ao lago Bunyonyi.' },
      'mighty-nile-adventure': { title: 'Aventura no poderoso Nilo e nas cataratas Murchison', summary: 'Rinocerontes, cataratas, safári fluvial e rafting em Jinja.' },
      'waterfalls-mountain-trails': { title: 'Cascatas e trilhos de montanha', summary: 'Caminhadas em Sipi, café arábica e paisagens do monte Elgon.' },
      'uganda-wildlife-photography': { title: 'Safári fotográfico de vida selvagem em Uganda', summary: 'Luz ideal, saídas privadas e tempo para observar os animais.' },
      'ultimate-uganda-discovery': { title: 'O circuito definitivo de descoberta de Uganda', summary: 'Parques, florestas, cascatas e lagos numa viagem completa.' },
      'romantic-uganda-honeymoon': { title: 'Lua de mel romântica em Uganda', summary: 'Safári privado, gorilas e uma estadia romântica junto ao lago.' },
      'family-adventure-uganda': { title: 'Aventura em família em Uganda', summary: 'Safári familiar com vida selvagem, caminhadas e passeios de barco.' }
    }
  }
};

export const getDestinationCardSummary = (language: LanguageCode, id: string, fallback: string) =>
  cardCopy[language]?.destinations[id] ?? fallback;

export const getExperienceCategoryCardCopy = (
  language: LanguageCode,
  id: string,
  title: string,
  summary: string
): CardCopy => ({
  title: cardCopy[language]?.categories[id]?.title ?? title,
  summary: cardCopy[language]?.categories[id]?.summary ?? summary
});

export const getSafariPackageCardCopy = (
  language: LanguageCode,
  id: string,
  title: string,
  summary: string
): CardCopy => ({
  title: cardCopy[language]?.packages[id]?.title ?? title,
  summary: cardCopy[language]?.packages[id]?.summary ?? summary
});