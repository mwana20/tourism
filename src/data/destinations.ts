import { Destination } from '../types';

export const destinationsData: Destination[] = [
  {
    id: 'bwindi',
    name: 'Bwindi Impenetrable National Park',
    region: 'southwestern',
    regionLabel: 'Southwestern Uganda',
    heroImage: '/src/assets/images/tourists_hiking_rainforest_1792014394040.jpg',
    shortDesc: 'Ancient, mist-covered montane rainforest sheltering nearly half of the world’s endangered mountain gorillas.',
    fullDesc:
      'A UNESCO World Heritage site of extraordinary biological richness, Bwindi Impenetrable National Park blankets the rugged ridges of southwestern Uganda. Shrouded in persistent morning mist, this ancient ecosystem is renowned globally for mountain gorilla trekking under the strict supervision of the Uganda Wildlife Authority (UWA). Walking through this primal forest of giant tree ferns and tangled canopy reveals not just the gentle giants of the wild, but over 350 bird species, forest elephants, and diverse primates.',
    highlights: [
      'Mountain Gorilla Trekking (Habituated Gorilla Families)',
      'Gorilla Habituation Experience (Rushaga Sector)',
      'Batwa Cultural Forest Experience',
      'Over 350 recorded Albertine Rift endemic bird species',
      'Guided Munyaga and Kashasha river waterfall nature trails'
    ],
    bestSeason: 'June to August & December to February (Drier trekking terrain; permits available year-round)',
    duration: '3 – 5 Days',
    travelerType: 'Wildlife Photographers, Primate Lovers, Adventure Seekers & Active Couples',
    altitude: '1,160m – 2,607m above sea level',
    wildlifeHighlights: ['Mountain Gorillas', 'L’Hoest’s Monkeys', 'Black-and-White Colobus', 'Giant Forest Hogs', 'African Green Broadbill'],
    activities: ['Gorilla Trekking', 'Birdwatching', 'Guided Forest Hikes', 'Community Cultural Visits', 'Conservation Briefings'],
    practicalTips:
      'Gorilla permits are strictly controlled by the Uganda Wildlife Authority (UWA) and must be booked several months in advance. Sturdy waterproof hiking boots, gardening gloves for vines, and neutral-toned rain layers are essential.'
  },
  {
    id: 'queen-elizabeth',
    name: 'Queen Elizabeth National Park',
    region: 'western',
    regionLabel: 'Western Albertine Rift',
    heroImage: '/src/assets/images/tourists_watching_lions_1792014392788.jpg',
    shortDesc: 'Uganda’s most celebrated savannah reserve, featuring the Kazinga Channel boat safari and the famed Ishasha tree-climbing lions.',
    fullDesc:
      'Set against the jagged snow-tipped silhouette of the Rwenzori Mountains, Queen Elizabeth National Park encompasses dramatic volcanic explosion craters, sprawling savannah grasslands, lush tropical forests in Kyambura Gorge, and the tranquil Kazinga Channel linking Lakes Edward and George. Game drives in the Kasenyi plains reveal massive herds of Ugandan kob, cape buffaloes, and lions, while Ishasha in the south offers the rare spectacle of lions lounging high on giant fig tree branches.',
    highlights: [
      'Kazinga Channel Boat Cruise with colossal hippo and bird concentrations',
      'Tree-climbing lions of the remote Ishasha sector',
      'Kasenyi Plains classic savannah game drives',
      'Kyambura Gorge chimpanzee tracking in an underground forest',
      'Katwe Salt Lake and crater drive scenic viewpoints'
    ],
    bestSeason: 'January to February & June to July (Optimal wildlife viewing around water sources)',
    duration: '3 – 4 Days',
    travelerType: 'First-time Safari Goers, Families, Wildlife Enthusiasts & Birders',
    altitude: '910m – 1,390m above sea level',
    wildlifeHighlights: ['Tree-climbing Lions', 'Leopards', 'African Bush Elephants', 'Hippopotamuses', 'Nile Crocodiles', 'Ugandan Kob'],
    activities: ['Boat Cruises', 'Savannah Game Drives', 'Chimpanzee Tracking in Kyambura', 'Lion Tracking Research Project', 'Crater Lake Drives'],
    practicalTips:
      'The 2-hour boat cruise on the Kazinga Channel provides some of Africa’s highest concentrations of hippos and aquatic bird life—bring a telephoto lens or binoculars.'
  },
  {
    id: 'murchison-falls',
    name: 'Murchison Falls National Park',
    region: 'northern',
    regionLabel: 'Northern Albertine Basin',
    heroImage: '/src/assets/images/murchison_falls_nile_1792011288609.jpg',
    shortDesc: 'Uganda’s largest and oldest national park, where the entire Victoria Nile forces through a 7-meter gorge in an explosive torrent.',
    fullDesc:
      'Murchison Falls National Park is a landscape of untamed grandeur. Here, the Victoria Nile bifurcates the park, culminating in the most powerful natural surge of water on earth: the Nile plunges 43 meters through a narrow 7-meter rock cleft before widening into a tranquil river. The northern savannah sector is home to thriving populations of Rothschild’s giraffes, elephants, lions, and Jackson’s hartebeests, while boat trips along the river reach the base of the falls and the Lake Albert Delta.',
    highlights: [
      'Top of the Falls viewpoint and hike alongside the thundering gorge',
      'Nile River boat cruise to the foot of Murchison Falls',
      'Lake Albert Delta boat safari for rare Shoebill stork sightings',
      'Northern sector early morning and nocturnal predator game drives',
      'Kaniyo Pabidi mahogany forest chimpanzee walks'
    ],
    bestSeason: 'December to February & June to September (Dry season brings game to riverbanks)',
    duration: '3 – 4 Days',
    travelerType: 'Adventure Travelers, Nature Photographers, Families & River Enthusiasts',
    altitude: '500m – 1,292m above sea level',
    wildlifeHighlights: ['Rothschild’s Giraffes', 'Lions', 'Leopards', 'Nile Crocodiles', 'Shoebill Storks', 'African Buffaloes'],
    activities: ['Nile River Boat Cruises', 'Game Drives', 'Delta Birding Safaris', 'Top of Falls Hike', 'Chimpanzee Tracking in Budongo'],
    practicalTips:
      'Combine your Murchison safari with a stop at Ziwa Rhino Sanctuary en route from Kampala or Mukono to complete your Big Five checklist in northern Uganda.'
  },
  {
    id: 'kibale',
    name: 'Kibale National Park',
    region: 'western',
    regionLabel: 'Western Rainforest Belt',
    heroImage: '/src/assets/images/kibale_wild_chimpanzee_1792011289913.jpg',
    shortDesc: 'The primate capital of the world, sheltering 13 primate species and the highest density of wild chimpanzees in Africa.',
    fullDesc:
      'Kibale National Park protects a rich swath of moist evergreen rainforest situated near Fort Portal in western Uganda. Renowned as the premier chimpanzee trekking destination on the African continent, Kibale is home to over 1,500 habituated and wild chimpanzees. Walking alongside experienced UWA rangers allows travelers to hear the resonant pant-hoots of chimp communities echoing through the canopy, and watch them feed, groom, and care for their young in their natural sanctuary.',
    highlights: [
      'Chimpanzee Tracking experience with habituated troops',
      'Full-day Chimpanzee Habituation Experience (CHEX)',
      'Bigodi Wetland Sanctuary guided community boardwalk',
      '13 primate species including rare red colobus and L’Hoest’s monkeys',
      'Guided nocturnal night walks to spot galagos (bushbabies) and pottos'
    ],
    bestSeason: 'November to February & June to September (Foliage allows easier visibility)',
    duration: '2 – 3 Days',
    travelerType: 'Primate Enthusiasts, Researchers, Families & Eco-Tourists',
    altitude: '1,100m – 1,590m above sea level',
    wildlifeHighlights: ['Chimpanzees', 'Central African Red Colobus', 'L’Hoest’s Monkey', 'Grey-cheeked Mangabey', 'Great Blue Turaco'],
    activities: ['Chimpanzee Tracking', 'Nocturnal Forest Walks', 'Bigodi Swamp Walk', 'Tea Plantation Tours', 'Birdwatching'],
    practicalTips:
      'Wear long lightweight trousers tucked into socks to deter safari ants on forest trails, and bring rain protection even during the dry season in this rainforest.'
  },
  {
    id: 'kidepo-valley',
    name: 'Kidepo Valley National Park',
    region: 'northern',
    regionLabel: 'Karamoja Wilderness',
    heroImage: '/src/assets/images/hero_uganda_lion_savannah_1792011287978.jpg',
    shortDesc: 'Africa’s true untamed frontier: a dramatic semi-arid savannah valley framed by the Morungole mountain range.',
    fullDesc:
      'Ranked by international travel media among the most spectacular wilderness areas in all of Africa, Kidepo Valley National Park lies in Uganda’s far northeastern Karamoja region bordering South Sudan and Kenya. Vast golden plains, rocky inselbergs, and dry sand rivers create a cinematic sense of solitude found nowhere else. Here, ostriches roam freely, cheetahs occasionally hunt across the open plains (clearly documented as a rare regional occurrence in Uganda), and vast buffalo herds gather in the Narus Valley.',
    highlights: [
      'Narus Valley game drives with perennial watering holes',
      'Kidepo Valley and Kanangorok hot springs expedition',
      'Ik tribe mountain hike on Mount Morungole',
      'Authentic Karamojong cultural manyatta community visits',
      'Remarkable solitude with virtually no safari traffic'
    ],
    bestSeason: 'September to March (Dry weather makes all seasonal tracks accessible)',
    duration: '4 – 5 Days (or fly-in safari)',
    travelerType: 'Pioneering Explorers, Remote Safari Enthusiasts & Photographers',
    altitude: '900m – 2,750m above sea level',
    wildlifeHighlights: ['Cheetahs (rare regional presence)', 'Ostriches', 'Bat-eared Foxes', 'Lions', 'Burchell’s Zebras', 'Rothschild’s Giraffes'],
    activities: ['Wilderness Game Drives', 'Nature Walks', 'Mount Morungole Cultural Hike', 'Birding in Narus Valley'],
    practicalTips:
      'Because Kidepo is located roughly 500km from Kampala, fly-in safaris via scheduled domestic charter from Entebbe or a scenic overland circuit via Sipi Falls are recommended.'
  },
  {
    id: 'lake-mburo',
    name: 'Lake Mburo National Park',
    region: 'southwestern',
    regionLabel: 'Ankole Rangelands',
    heroImage: '/src/assets/images/queen_elizabeth_elephants_1792011289529.jpg',
    shortDesc: 'A tranquil mosaic of acacia woodland, lakes, and rolling pastures—the only park in southern Uganda with Burchell’s zebras and impalas.',
    fullDesc:
      'Lake Mburo National Park is a compact, vibrant gem strategically located along the highway between Kampala and Bwindi. Because it has no elephants and fewer large predators, it is the only national park in Uganda where visitors can enjoy guided walking safaris, horseback safaris, and mountain biking amidst thousands of zebras, impalas, topis, and elands. The lake itself offers boat rides with abundant hippos and African fish eagles.',
    highlights: [
      'Guided walking safari directly through zebra and antelope herds',
      'Horseback safaris across acacia savannah',
      'Lake Mburo boat cruise with African fish eagles and hippos',
      'Night game drives for elusive leopards and hyenas',
      'Mountain biking through community wildlife corridors'
    ],
    bestSeason: 'Year-round; June to August & December to February are especially dry',
    duration: '2 – 3 Days',
    travelerType: 'Families with Children, Walking Enthusiasts & Active Safari Seekers',
    altitude: '1,220m – 1,828m above sea level',
    wildlifeHighlights: ['Burchell’s Zebras', 'Impalas', 'Elands', 'Topis', 'Leopards', 'Hippos', 'African Finfoot'],
    activities: ['Walking Safaris', 'Horseback Riding', 'Night Game Drives', 'Lake Boat Trips', 'Cycling Safaris'],
    practicalTips:
      'An ideal stopover to break up the journey between Entebbe/Kampala and the mountain gorilla parks of Bwindi or Mgahinga.'
  },
  {
    id: 'mgahinga-gorilla',
    name: 'Mgahinga Gorilla National Park',
    region: 'southwestern',
    regionLabel: 'Virunga Volcanic Range',
    heroImage: '/src/assets/images/bwindi_mountain_gorilla_1792011288764.jpg',
    shortDesc: 'Where gold meets silver: track rare golden monkeys and mountain gorillas on the slopes of three dormant Virunga volcanoes.',
    fullDesc:
      'Perched in the far southwestern corner of Uganda on the border with Rwanda and the DRC, Mgahinga Gorilla National Park protects the Ugandan portion of the magnificent Virunga volcanic massif. The park is dominated by three striking conical volcanoes: Mount Muhabura, Mount Gahinga, and Mount Sabyinyo. Mgahinga offers a distinct gorilla trekking experience with the Nyakagezi family and is the sole refuge in Uganda for the playful, endangered golden monkey.',
    highlights: [
      'Nyakagezi Mountain Gorilla Family trekking',
      'Endangered Golden Monkey tracking and habituation',
      'Volcano day hikes up Mount Sabyinyo, Gahinga, or Muhabura',
      'Batwa Cultural Trail inside Garama Cave',
      'Border marker hike standing in Uganda, Rwanda, and DRC simultaneously'
    ],
    bestSeason: 'June to August & December to February',
    duration: '2 – 4 Days',
    travelerType: 'Hikers, High-Altitude Trekkers, Primate Enthusiasts & Adventure Lovers',
    altitude: '2,227m – 4,127m above sea level',
    wildlifeHighlights: ['Mountain Gorillas', 'Golden Monkeys', 'Giant Forest Hogs', 'Duikers', 'Rwenzori Turaco'],
    activities: ['Gorilla Trekking', 'Golden Monkey Tracking', 'Volcano Summit Hikes', 'Batwa Cultural Experience'],
    practicalTips:
      'Summits in the Virungas reach over 4,000 meters. Good physical fitness and proper thermal, wind, and rain gear are essential for volcano climbs.'
  },
  {
    id: 'rwenzori-mountains',
    name: 'Rwenzori Mountains National Park',
    region: 'western',
    regionLabel: 'Mountains of the Moon',
    heroImage: '/src/assets/images/murchison_falls_nile_1792011288609.jpg',
    shortDesc: 'Legendary "Mountains of the Moon": equatorial glaciers, otherworldly giant lobelias, and Africa’s third highest peak (Margherita, 5,109m).',
    fullDesc:
      'A UNESCO World Heritage site, the Rwenzori range is not volcanic but a gigantic fault-block mountain towering over the Albertine Rift. Its snow-capped Margherita Peak (5,109m) on Mount Stanley is the third-highest summit in Africa. The Rwenzoris are celebrated worldwide for their mystical, otherworldly botanical zones: giant groundsels, lobelias, heather forests bearded with moss, and crystal-clear glacial lakes. Shorter 1-to-3-day foothills treks are also available.',
    highlights: [
      'Multi-day Central Circuit and Kilembe trail expeditions',
      'Margherita Peak mountaineering summit ascent (5,109m)',
      'Scenic 1-to-3 day lower foothill and river valley walks',
      'Giant heather and lobelia afro-alpine botanical zones',
      'Bakonzo cultural village tours and traditional mountain lore'
    ],
    bestSeason: 'June to August & December to February for peak trekking safety',
    duration: '3 – 9 Days depending on trek chosen',
    travelerType: 'Mountaineers, High-Altitude Hikers, Botanists & Wilderness Trekkers',
    altitude: '1,670m – 5,109m above sea level',
    wildlifeHighlights: ['Three-horned Chameleons', 'Rwenzori Turaco', 'L’Hoest’s Monkey', 'Duikers', 'Hyraxes'],
    activities: ['Glacial Trekking', 'Peak Mountaineering', 'Day Hikes', 'Bakonzo Cultural Encounters', 'Afro-Alpine Photography'],
    practicalTips:
      'Trekking in the Rwenzoris requires certified mountain guides, technical gear for peak ascents (crampons, ropes), and good endurance. Rubber gumboots are provided for the moorland bogs.'
  },
  {
    id: 'jinja-nile',
    name: 'Jinja & The Source of the Nile',
    region: 'eastern',
    regionLabel: 'Eastern Uganda / Lake Victoria',
    heroImage: '/src/assets/images/safari_boat_cruise_nile_1792014395306.jpg',
    shortDesc: 'The historic Source of the River Nile and the adventure capital of East Africa, famous for world-class rafting and tranquil river retreats.',
    fullDesc:
      'Just 80km east of Kampala and adjacent to Mukono, Jinja is internationally celebrated as the historical source where Lake Victoria spills into the world’s longest river—the Nile. Beyond its deep colonial and cultural history, Jinja is East Africa’s adrenaline epicenter, offering Grade 5 white-water rafting, tranquil sunset cruises, kayaking, horseback riding along the riverbank, and quad biking through local rural villages.',
    highlights: [
      'Source of the Nile boat trip to the monument and whirlpool spot',
      'Grade 3 to Grade 5 white-water rafting on the Nile rapids',
      'Relaxing sunset boat cruises with drinks and birdwatching',
      'Kayaking and stand-up paddleboarding on calm river sections',
      'Quad biking and horseback safari along village trails'
    ],
    bestSeason: 'Year-round; sunny weather prevails most months',
    duration: '1 – 3 Days',
    travelerType: 'Adventure Seekers, Couples, Backpackers, Families & Weekend Getaways',
    altitude: '1,200m above sea level',
    wildlifeHighlights: ['Nile Monitor Lizards', 'African Fish Eagles', 'Pied Kingfishers', 'Open-billed Storks', 'Otters'],
    activities: ['White Water Rafting', 'Source of Nile Boat Tours', 'Sunset Cruises', 'Kayaking', 'Horseback Riding', 'Quad Biking'],
    practicalTips:
      'Rafting is operated with strict international safety protocols and rescue safety kayakers; gentle family float options are available for those with younger children.'
  },
  {
    id: 'sipi-falls-elgon',
    name: 'Sipi Falls & Mount Elgon',
    region: 'eastern',
    regionLabel: 'Eastern Highlands',
    heroImage: '/src/assets/images/murchison_falls_nile_1792011288609.jpg',
    shortDesc: 'A series of three thunderous waterfalls tumbling down the foothills of Mount Elgon, nestled amidst world-class Arabica coffee farms.',
    fullDesc:
      'Perched on the edge of Mount Elgon in eastern Uganda, Sipi Falls consists of three dramatic waterfalls (85m, 75m, and 100m) cascading over volcanic cliffs. The surrounding countryside is renowned for growing some of the finest Bugisu washed Arabica coffee in the world. Visitors can enjoy guided waterfall hikes, coffee bean-to-cup harvesting tours with local farming families, abseiling alongside the 100m falls, and trekking into Mount Elgon’s immense caldera.',
    highlights: [
      'The 3-waterfall guided hiking circuit with cave explorations behind the spray',
      'Hands-on Bugisu Arabica coffee harvest and roasting tour with local farmers',
      '100-meter abseiling experience beside the main Sipi waterfall',
      'Panoramic sunset viewpoints across the expansive Kyoga plains',
      'Day hikes into Mount Elgon National Park forests and caves'
    ],
    bestSeason: 'Year-round; March to May brings lush green foliage and high water flow',
    duration: '2 – 4 Days',
    travelerType: 'Hikers, Coffee Lovers, Romantic Couples & Photography Enthusiasts',
    altitude: '1,775m – 2,200m above sea level',
    wildlifeHighlights: ['Hartlaub’s Turaco', 'Crowned Hornbills', 'Black-and-White Colobus', 'Jackson’s Francolin'],
    activities: ['Waterfall Hikes', 'Coffee Farm Tours', 'Rock Climbing & Abseiling', 'Cave Exploration', 'Mountain Biking'],
    practicalTips:
      'The trail down to the bottom of the second and third falls can be slippery during rains; hiking sticks and sturdy treaded shoes are provided by local Sipi guides.'
  },
  {
    id: 'lake-bunyonyi',
    name: 'Lake Bunyonyi',
    region: 'southwestern',
    regionLabel: 'Kigezi Highlands ("Switzerland of Africa")',
    heroImage: '/src/assets/images/queen_elizabeth_elephants_1792011289529.jpg',
    shortDesc: 'A mystical high-altitude lake dotted with 29 terraced islands, bilharzia-free waters, and tranquil dugout canoe journeys.',
    fullDesc:
      'Known as the "Place of Little Birds," Lake Bunyonyi is nestled between the steep, terraced green hills of Kabale in southwestern Uganda. With 29 lush islands—including the historic Akampene (Punishment Island) and Bushara Island—it is safe for swimming (free of bilharzia, hippos, and crocodiles). It serves as the ultimate serene sanctuary to rest and reflect after strenuous gorilla trekking in nearby Bwindi or Mgahinga.',
    highlights: [
      'Traditional dugout canoe and motorboat island excursions',
      'Safe swimming in bilharzia-free, calm freshwater',
      'Akampene (Punishment Island) cultural and historical narrative tours',
      'Ziplining across the lake between forest islands',
      'Over 200 bird species viewable from lakeside eco-lodges'
    ],
    bestSeason: 'June to August & December to February (Ideal for boat cruises and relaxing sunsets)',
    duration: '2 – 3 Days',
    travelerType: 'Couples, Honeymooners, Post-Gorilla Trekking Relaxers & Birders',
    altitude: '1,962m above sea level',
    wildlifeHighlights: ['Crested Cranes', 'Pied Kingfishers', 'African Harrier Hawks', 'White-tailed Blue Flycatchers'],
    activities: ['Canoe Paddling', 'Island Tours', 'Lake Swimming', 'Ziplining', 'Cultural Village Walks'],
    practicalTips:
      'The mornings at Lake Bunyonyi are cool and atmospheric as fog drifts across the water. Pack a warm fleece for evenings.'
  },
  {
    id: 'ziwa-rhino-sanctuary',
    name: 'Ziwa Rhino Sanctuary',
    region: 'central',
    regionLabel: 'Nakasongola District',
    heroImage: '/src/assets/images/tourists_rhino_tracking_1792014395455.jpg',
    shortDesc: 'The proud home of Uganda’s only wild white rhinos, protected on foot in a 7,000-hectare conservation sanctuary.',
    fullDesc:
      'Ziwa Rhino Sanctuary is a monumental conservation success story. Following the historic local extinction of rhinos in Uganda in the early 1980s, Ziwa was established by the Rhino Fund Uganda and the Uganda Wildlife Authority to breed and reintroduce both southern white and black rhinos back into national parks. Visitors are accompanied by armed expert rangers to track these prehistoric herbivores on foot at safe, respectful viewing distances.',
    highlights: [
      'On-foot White Rhino tracking with specialized conservation rangers',
      'Canoe safari on Lugogo Swamp for the elusive Shoebill stork',
      'Night nature walks for nocturnal bushbabies, leopards, and aardvarks',
      'Over 300 bird species inhabiting savannah woodland and wetlands'
    ],
    bestSeason: 'Year-round; early morning or late afternoon tracking avoids mid-day heat',
    duration: 'Half-day to 1 Day (Perfect stop en route to Murchison Falls)',
    travelerType: 'Big Five Seekers, Conservationists, Families & Day Trippers',
    altitude: '1,000m above sea level',
    wildlifeHighlights: ['Southern White Rhinos', 'Shoebill Storks', 'Ugandan Kob', 'Bushbucks', 'Oribis', 'Pangolins (rare)'],
    activities: ['Rhino Tracking on Foot', 'Shoebill Canoe Safari', 'Birdwatching', 'Night Walks'],
    practicalTips:
      'Wear neutral colors, long trousers, and closed shoes for the bush walk. Always follow ranger signals and keep a minimum 6-meter distance from the rhinos.'
  },
  {
    id: 'lake-victoria-ssese',
    name: 'Lake Victoria & The Ssese Islands',
    region: 'central',
    regionLabel: 'Lake Victoria Basin',
    heroImage: '/src/assets/images/murchison_falls_nile_1792011288609.jpg',
    shortDesc: 'An archipelago of 84 lush tropical islands in the world’s second-largest freshwater lake, offering golden sand beaches and peaceful retreats.',
    fullDesc:
      'Located in the northwestern waters of Lake Victoria, the Ssese Islands are a paradise of white sandy beaches, whispering palm trees, and dense equatorial rainforests. Accessible by ferry or private speedboat from Entebbe or Bukakata, the islands (notably Bugala and Banda) offer a tranquil contrast to dusty safari roads, where visitors can enjoy beach campfires, quad biking, forest walks with vervet monkeys, and sunset boat cruises.',
    highlights: [
      'Scenic Lake Victoria ferry crossing from Entebbe to Kalangala',
      'Beachside bonfires, fresh tilapia fish BBQs, and palm-shaded relaxation',
      'Guided rainforest walks with butterflies, monkeys, and exotic birds',
      'Quad biking through palm plantations and fishing villages',
      'Boat trips to uninhabited outer islets for birdwatching'
    ],
    bestSeason: 'June to September & December to March',
    duration: '2 – 4 Days',
    travelerType: 'Couples, Relaxation Seekers, Weekend Escapes & Island Enthusiasts',
    altitude: '1,134m above sea level',
    wildlifeHighlights: ['Vervet Monkeys', 'African Fish Eagles', 'Water Thick-knees', 'Giant Kingfishers', 'Monitor Lizards'],
    activities: ['Beach Relaxation', 'Forest Nature Walks', 'Boat Cruises', 'Quad Biking', 'Fishing Excursions'],
    practicalTips:
      'Swimming in Lake Victoria should only be done in verified safe beach zones advised by your lodge. Beautiful pool facilities are available at top island resorts.'
  },
  {
    id: 'mabamba-swamp',
    name: 'Mabamba Bay Wetland (Shoebill Quest)',
    region: 'central',
    regionLabel: 'Lake Victoria Ramsar Site',
    heroImage: '/src/assets/images/kibale_wild_chimpanzee_1792011289913.jpg',
    shortDesc: 'A world-famous Ramsar wetland site west of Entebbe, offering the world’s highest probability of spotting the prehistoric Shoebill stork.',
    fullDesc:
      'Mabamba Bay Wetland is a sprawling papyrus reed swamp extending inland from the northern shores of Lake Victoria. Navigated through narrow winding water channels in traditional wooden motorized canoes with local community guides, Mabamba is globally celebrated as the premier site to observe the enigmatic, prehistoric-looking Shoebill stork as it patiently hunts for lungfish in the papyrus shallows.',
    highlights: [
      'Wooden canoe excursion guided by skilled community wetland spotters',
      'Prime sightings of the prehistoric, dinosaur-like Shoebill stork',
      'Over 260 wetland bird species including papyrus endemics',
      'Direct support of the Mabamba Wetland Community Conservation project'
    ],
    bestSeason: 'Year-round; early morning (7:00 AM – 10:00 AM) yields highest sighting rates',
    duration: 'Half-Day (3 – 4 Hours from Entebbe or Kampala)',
    travelerType: 'Birders, Wildlife Enthusiasts & International Day-Trippers',
    altitude: '1,135m above sea level',
    wildlifeHighlights: ['Shoebill Stork', 'Papyrus Gonolek', 'Malachite Kingfisher', 'African Jacana', 'Purple Swamphen'],
    activities: ['Canoe Birding Excursions', 'Wetland Photography', 'Community Guided Walks'],
    practicalTips:
      'Easily arranged on your arrival or departure day in Entebbe. Sun protection and a telephoto camera lens are strongly recommended.'
  },
  {
    id: 'entebbe-botanical',
    name: 'Entebbe Peninsula & Botanical Gardens',
    region: 'central',
    regionLabel: 'Entebbe Peninsula',
    heroImage: '/src/assets/images/hero_uganda_lion_savannah_1792011287978.jpg',
    shortDesc: 'Uganda’s green lakeside sanctuary: century-old botanical gardens, vibrant birdlife, and the historic gateway to the Pearl of Africa.',
    fullDesc:
      'Situated on a verdant peninsula jutting into Lake Victoria, Entebbe serves as the pleasant international gateway to Uganda. Established in 1898, the historic Entebbe Botanical Gardens feature a tranquil blend of indigenous tropical rainforest, open lawns, and Lake Victoria shoreline where black-and-white colobus monkeys swing from towering mahogany trees. It was also the original filming backdrop for the 1940s classic Tarzan film.',
    highlights: [
      'Historic 1898 Botanical Gardens with Colobus monkeys and towering canopy',
      'Uganda Wildlife Conservation Education Centre (UWEC Zoo & Rehab)',
      'Lake Victoria waterfront dining with fresh grilled Nile perch',
      'Quiet, tree-lined walking streets and peaceful pre-safari acclimatization'
    ],
    bestSeason: 'Year-round',
    duration: '1 – 2 Days (Ideal upon arrival or before departure flights)',
    travelerType: 'All International Travelers, Families, Birders & Photographers',
    altitude: '1,150m above sea level',
    wildlifeHighlights: ['Black-and-White Colobus', 'Vervet Monkeys', 'Great Blue Turaco', 'Pied Kingfishers', 'African Grey Parrots'],
    activities: ['Botanical Walking Tours', 'UWEC Behind-the-Scenes Tour', 'Lake Victoria Sunset Dining', 'Birdwatching'],
    practicalTips:
      'We provide private meet-and-greet airport transfers from Entebbe International Airport directly to your Entebbe or Mukono hotel.'
  },
  {
    id: 'semuliki',
    name: 'Semuliki National Park',
    region: 'western',
    regionLabel: 'Albertine Rift / Congo Basin',
    heroImage: '/src/assets/images/kibale_wild_chimpanzee_1792011289913.jpg',
    shortDesc: 'An extension of the vast Ituri rainforest of the Congo Basin, featuring boiling Sempaya hot springs and Central African lowland birds.',
    fullDesc:
      'Semuliki National Park occupies an isolated corner of western Uganda in the shadow of the Rwenzori range. Because it is the only true tract of lowland tropical rainforest in East Africa, Semuliki represents the easternmost limit of numerous Central African species. Its most famous natural spectacle is the bubbling Sempaya Hot Springs—where geysers erupt boiling water rich in natural minerals, hot enough to boil eggs in minutes.',
    highlights: [
      'Sempaya Hot Springs trail (male and female boiling geysers)',
      'Egg-boiling experiment in natural geothermal mineral pools',
      'Central African lowland birding with over 400 species',
      'Forest walks through ancient Congo Basin flora and giant ironwood trees',
      'Cultural visit with the indigenous Batwa community of Semuliki'
    ],
    bestSeason: 'December to February & July to September',
    duration: '2 – 3 Days',
    travelerType: 'Birders, Botanists, Geothermal Enthusiasts & Off-the-Beaten-Path Explorers',
    altitude: '670m – 760m above sea level',
    wildlifeHighlights: ['Spot-breasted Ibis', 'Black Dwarf Hornbill', 'De Brazza’s Monkey', 'Pygmy Flying Squirrel', 'Red-tailed Monkey'],
    activities: ['Hot Springs Walks', 'Birding Expeditions', 'Rainforest Trails', 'Batwa Cultural Interactions'],
    practicalTips:
      'The hot springs boardwalk reaches temperatures in excess of 100°C; always stay strictly on designated wooden platforms.'
  },
  {
    id: 'fort-portal-craters',
    name: 'Fort Portal & The Ndali-Kasenda Crater Lakes',
    region: 'western',
    regionLabel: 'Toro Kingdom',
    heroImage: '/src/assets/images/queen_elizabeth_elephants_1792011289529.jpg',
    shortDesc: 'Uganda’s tourism city, surrounded by rolling tea plantations, emerald explosion crater lakes, and the cultural seat of the Toro Kingdom.',
    fullDesc:
      'Designated as Uganda’s official tourism city, Fort Portal is one of the most picturesque towns in East Africa. Nestled under the Rwenzori foothills and encircled by manicured tea estates, the area is home to over 50 volcanic explosion crater lakes (the Ndali-Kasenda field). Visitors can hike along dramatic crater rims with views extending towards the mountains, visit the Karuzika Palace of the Toro Kingdom, and explore the nearby Amabere Ga Nyina Mwiru caves.',
    highlights: [
      'Scenic hikes around the Ndali-Kasenda explosion crater lakes',
      'Top of the World panoramic viewpoint overlooking three crater lakes and the Rwenzoris',
      'Amabere Ga Nyina Mwiru caves with stalactites and natural waterfalls',
      'Toro Kingdom Palace cultural tour and craft markets in Fort Portal',
      'Lush walking tours through vast tea estates'
    ],
    bestSeason: 'Year-round; June to August & December to February offer clearest mountain vistas',
    duration: '2 – 3 Days',
    travelerType: 'Scenic Hikers, Cultural Explorers, Families & Couples',
    altitude: '1,500m above sea level',
    wildlifeHighlights: ['Black-and-White Colobus', 'Red-tailed Monkeys', 'Crested Cranes', 'Woodland Kingfishers'],
    activities: ['Crater Lake Rim Hikes', 'Cave Exploration', 'Tea Estate Tours', 'Cultural Palace Visits', 'Mountain Biking'],
    practicalTips:
      'Fort Portal is the central hub connecting Kibale, Queen Elizabeth, Semuliki, and the Rwenzoris—making it an ideal multi-day base.'
  }
];
