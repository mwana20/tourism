import { SafariPackage } from '../types';

export interface ExperienceCategory {
  id: string;
  title: string;
  iconName: string;
  image: string;
  shortDesc: string;
  destinations: string[];
}

export const experienceCategories: ExperienceCategory[] = [
  {
    id: 'wildlife-safaris',
    title: 'Wildlife Safaris',
    iconName: 'Compass',
    image: '/src/assets/images/tourists_watching_lions_1792014392788.jpg',
    shortDesc: 'Classic 4x4 open-roof game drives across open savannahs, tracking lions, elephants, leopards, and buffaloes.',
    destinations: ['Queen Elizabeth National Park', 'Murchison Falls National Park', 'Kidepo Valley', 'Lake Mburo']
  },
  {
    id: 'gorilla-trekking',
    title: 'Gorilla Trekking',
    iconName: 'Footprints',
    image: '/src/assets/images/tourists_hiking_rainforest_1792014394040.jpg',
    shortDesc: 'A life-changing encounter with wild mountain gorillas in the ancient, mist-enshrouded rainforest canopy.',
    destinations: ['Bwindi Impenetrable National Park', 'Mgahinga Gorilla National Park']
  },
  {
    id: 'chimpanzee-tracking',
    title: 'Chimpanzee Tracking',
    iconName: 'Smile',
    image: '/src/assets/images/kibale_wild_chimpanzee_1792011289913.jpg',
    shortDesc: 'Track our closest evolutionary cousins through tropical rainforest canopies and hear their iconic pant-hoots.',
    destinations: ['Kibale National Park', 'Kyambura Gorge (Queen Elizabeth)', 'Budongo Forest (Murchison Falls)']
  },
  {
    id: 'big-cat-photography',
    title: 'Big-Cat Photography',
    iconName: 'Camera',
    image: '/src/assets/images/african_leopard_tree_1792014396244.jpg',
    shortDesc: 'Dedicated game drives focusing on tree-climbing lions in Ishasha, leopards on acacia boughs, and savannah prides.',
    destinations: ['Queen Elizabeth National Park', 'Kidepo Valley National Park', 'Murchison Falls National Park']
  },
  {
    id: 'mountain-climbing',
    title: 'Mountain Climbing & Hiking',
    iconName: 'Mountain',
    image: '/src/assets/images/tourists_hiking_rainforest_1792014394040.jpg',
    shortDesc: 'Expeditions from the glacial peaks of Mount Stanley (5,109m) to the dormant volcanoes of the Virunga Range.',
    destinations: ['Rwenzori Mountains', 'Mount Elgon & Sipi', 'Mount Sabyinyo & Muhabura (Mgahinga)']
  },
  {
    id: 'waterfalls-nature-walks',
    title: 'Waterfalls & Nature Walks',
    iconName: 'Droplets',
    image: '/src/assets/images/murchison_falls_nile_1792011288609.jpg',
    shortDesc: 'Lush guided hikes to dramatic cascades including the 3 falls of Sipi and the thundering gorge of Murchison.',
    destinations: ['Sipi Falls', 'Murchison Falls', 'Fort Portal Crater Lakes', 'Semuliki Sempaya Springs']
  },
  {
    id: 'nile-river-adventures',
    title: 'Nile River Adventures',
    iconName: 'Waves',
    image: '/src/assets/images/safari_boat_cruise_nile_1792014395306.jpg',
    shortDesc: 'White-water rafting, sunset boat cruises, kayaking, and serene river lodges along the world’s longest river.',
    destinations: ['Jinja & Source of the Nile', 'Murchison Falls National Park']
  },
  {
    id: 'birdwatching',
    title: 'Birdwatching Expeditions',
    iconName: 'Feather',
    image: '/src/assets/images/bwindi_mountain_gorilla_1792011288764.jpg',
    shortDesc: 'Uganda boasts over 1,060 recorded bird species, from the prehistoric Shoebill to rare Albertine Rift endemics.',
    destinations: ['Mabamba Bay Wetland', 'Semuliki National Park', 'Bwindi Forest', 'Kazinga Channel']
  },
  {
    id: 'cultural-community',
    title: 'Cultural & Community Tourism',
    iconName: 'HeartHandshake',
    image: '/src/assets/images/hero_uganda_lion_savannah_1792011287978.jpg',
    shortDesc: 'Authentic interactions with Batwa forest keepers, Karamojong traditional manyattas, and Buganda kingdom crafts.',
    destinations: ['Mukono & Buganda Heritage', 'Batwa Communities (Bwindi & Mgahinga)', 'Karamoja (Kidepo)', 'Toro Kingdom (Fort Portal)']
  },
  {
    id: 'luxury-private-safaris',
    title: 'Luxury & Private Safaris',
    iconName: 'Sparkles',
    image: '/src/assets/images/queen_elizabeth_elephants_1792011289529.jpg',
    shortDesc: 'Exclusive private 4x4 vehicles, domestic bush flights, personal butler service, and premier eco-luxury lodges.',
    destinations: ['Bwindi Sanctuary', 'Queen Elizabeth Kyambura Gorge', 'Murchison Nile Safari Lodges']
  },
  {
    id: 'family-holidays',
    title: 'Family Safari Holidays',
    iconName: 'Users',
    image: '/src/assets/images/queen_elizabeth_elephants_1792011289529.jpg',
    shortDesc: 'Safe, engaging, and flexible safari itineraries designed specifically for parents, grandparents, and children.',
    destinations: ['Lake Mburo (Walking & Biking)', 'Entebbe Botanical Gardens', 'Jinja River Floats', 'Murchison Boat Safari']
  },
  {
    id: 'honeymoon-romance',
    title: 'Honeymoon & Romantic Escapes',
    iconName: 'Heart',
    image: '/src/assets/images/murchison_falls_nile_1792011288609.jpg',
    shortDesc: 'Private candlelit bush dinners, secluded island retreats on Lake Bunyonyi, and intimate sunset boat safaris.',
    destinations: ['Lake Bunyonyi Terraced Lodges', 'Ssese Islands (Lake Victoria)', 'Bwindi Forest Luxury Suites']
  },
  {
    id: 'camping-nature-retreats',
    title: 'Camping & Nature Retreats',
    iconName: 'Tent',
    image: '/src/assets/images/hero_uganda_lion_savannah_1792011287978.jpg',
    shortDesc: 'Fall asleep to the sound of roaring lions or calling hyenas under a star-filled African wilderness night sky.',
    destinations: ['Kidepo Wilderness Camps', 'Lake Mburo Tented Camps', 'Murchison Bush Camps']
  },
  {
    id: 'lake-island-experiences',
    title: 'Lake & Island Experiences',
    iconName: 'Anchor',
    image: '/src/assets/images/murchison_falls_nile_1792011288609.jpg',
    shortDesc: 'Canoeing across Lake Bunyonyi’s 29 tranquil islands and island hopping on Lake Victoria’s Ssese archipelago.',
    destinations: ['Lake Bunyonyi', 'Ssese Islands', 'Lake Victoria', 'Lake Mburo']
  },
  {
    id: 'multiday-circuits',
    title: 'Multi-Day Uganda Circuits',
    iconName: 'Map',
    image: '/src/assets/images/bwindi_mountain_gorilla_1792011288764.jpg',
    shortDesc: 'Comprehensive grand tours seamlessly linking primates, savannah predators, the River Nile, and local cultures.',
    destinations: ['The Grand Uganda Safari Circuit (Entebbe – Murchison – Kibale – Queen Elizabeth – Bwindi)']
  },
  {
    id: 'photography-tours',
    title: 'Photography & Specialist Wildlife Tours',
    iconName: 'Aperture',
    image: '/src/assets/images/hero_uganda_lion_savannah_1792011287978.jpg',
    shortDesc: 'Itineraries optimized for golden-hour light, beanbag vehicle camera supports, and patient field observation.',
    destinations: ['Queen Elizabeth Kasenyi', 'Kidepo Valley', 'Bwindi Gorilla Treks', 'Mabamba Wetland']
  }
];

export const safariPackages: SafariPackage[] = [
  {
    id: 'classic-uganda-safari',
    title: 'The Classic Uganda Safari',
    slug: 'classic-uganda-safari',
    image: '/src/assets/images/tourists_watching_lions_1792014392788.jpg',
    route: 'Entebbe → Kibale Forest → Queen Elizabeth → Bwindi → Entebbe',
    durationDays: 7,
    durationLabel: '7 Days / 6 Nights',
    priceNote: 'Tailor-Made Quote on Request',
    category: 'Wildlife & Primates',
    travelStyle: 'Mid-Range',
    overview:
      'The quintessential Uganda journey connecting our three premier parks. Trek with wild chimpanzees in Kibale, explore the savannah wildlife and cruise the Kazinga Channel in Queen Elizabeth, and culminate with an unforgettable hour among wild mountain gorillas in Bwindi.',
    highlights: [
      'Chimpanzee tracking in Kibale tropical rainforest',
      'Kazinga Channel boat cruise with abundant hippos and elephants',
      'Savannah game drives in Kasenyi for lions, leopards, and Uganda kob',
      'Mountain gorilla trekking in Bwindi Impenetrable National Park',
      'Scenic photography stops at the Equator crossing'
    ],
    itinerarySummary: [
      { day: 'Day 1', title: 'Arrival & Scenic Drive to Kibale', desc: 'Pick up in Entebbe/Kampala, scenic journey through tea estates to Fort Portal and Kibale Forest.' },
      { day: 'Day 2', title: 'Chimpanzee Tracking & Bigodi Swamp Walk', desc: 'Morning chimp tracking in Kibale canopy; afternoon community walk in Bigodi Wetland Sanctuary.' },
      { day: 'Day 3', title: 'Transfer to Queen Elizabeth & Crater Drive', desc: 'Drive south through the Rwenzori foothills, afternoon explosion crater drive into Queen Elizabeth.' },
      { day: 'Day 4', title: 'Kasenyi Game Drive & Kazinga Channel Boat Cruise', desc: 'Dawn predator game drive followed by an afternoon boat safari with immense hippo pods.' },
      { day: 'Day 5', title: 'Ishasha Tree-Climbing Lions to Bwindi', desc: 'Search for tree-climbing lions in the southern sector before ascending into Bwindi’s misty highlands.' },
      { day: 'Day 6', title: 'The Gorilla Trekking Experience', desc: 'Early morning ranger briefing, guided trek into Bwindi forest, and one magical hour with mountain gorillas.' },
      { day: 'Day 7', title: 'Equator Stop & Return to Entebbe', desc: 'Scenic drive back via Mbarara, photo stop at the Uganda Equator monument, and transfer to Entebbe Airport.' }
    ],
    included: [
      'Dedicated 4x4 Safari Land Cruiser with pop-up roof & fuel',
      'Professional English-speaking Ugandan driver-guide',
      'All park entrance fees and Kazinga Channel boat safari',
      'Comfortable lodge accommodations with all meals on safari',
      'UWA Gorilla Permit reservation coordination',
      'Bottled drinking water in the safari vehicle'
    ],
    excluded: [
      'International flights and Uganda entry visa ($50 USD online)',
      'UWA Gorilla trekking permit ($800 USD) and Chimpanzee permit',
      'Personal travel/medical insurance and gratuities for guides and lodge staff'
    ],
    recommendedFor: 'First-time visitors to Uganda seeking the ultimate balance of wildlife, primates, and comfortable pacing.'
  },
  {
    id: 'gorillas-of-the-mist',
    title: 'Gorillas of the Mist Expedition',
    slug: 'gorillas-of-the-mist',
    image: '/src/assets/images/tourists_hiking_rainforest_1792014394040.jpg',
    route: 'Entebbe / Kigali → Bwindi Impenetrable National Park → Lake Bunyonyi → Entebbe',
    durationDays: 4,
    durationLabel: '4 Days / 3 Nights',
    priceNote: 'Tailor-Made Quote on Request',
    category: 'Primate Specialists',
    travelStyle: 'Luxury',
    overview:
      'A focused, deeply moving safari centered on the endangered mountain gorillas of Bwindi. Designed for travelers prioritizing primate conservation and premium rainforest lodges, combined with tranquil relaxation on the waters of Lake Bunyonyi.',
    highlights: [
      'Guaranteed Uganda Wildlife Authority gorilla trekking permits',
      'Immersive guided trek with expert UWA trackers and armed rangers',
      'Luxury eco-lodge perched on the edge of the Bwindi rainforest ridge',
      'Serene dugout canoe or boat cruise on island-studded Lake Bunyonyi',
      'Batwa indigenous forest cultural encounter and conservation discussion'
    ],
    itinerarySummary: [
      { day: 'Day 1', title: 'Fly or Drive to Bwindi Forest', desc: 'Private transfer or scheduled bush flight from Entebbe to Kihihi/Kisoro airstrip; check-in at rainforest lodge.' },
      { day: 'Day 2', title: 'Mountain Gorilla Trekking Day', desc: 'Trek through primal rainforest; spend one breathtaking hour in the close company of a habituated gorilla family.' },
      { day: 'Day 3', title: 'Transfer to Lake Bunyonyi & Canoe Cruise', desc: 'Descend to tranquil Lake Bunyonyi, relax at a lakeside lodge, and explore islands by canoe.' },
      { day: 'Day 4', title: 'Scenic Return Journey', desc: 'Return overland with Equator crossing lunch or short domestic flight back to Entebbe.' }
    ],
    included: ['All ground transport in 4x4 safari vehicle', 'Full board luxury lodge stays', 'UWA ranger guides and track assistance', 'Lake Bunyonyi boat excursions'],
    excluded: ['Official UWA Gorilla Permit ($800 USD standard rate)', 'Personal tipping and alcoholic premium beverages', 'Travel insurance'],
    recommendedFor: 'Wildlife photographers, couples, and travelers with limited vacation days wanting a focused primate encounter.'
  },
  {
    id: 'mighty-nile-adventure',
    title: 'The Mighty Nile & Murchison Falls Adventure',
    slug: 'mighty-nile-adventure',
    image: '/src/assets/images/safari_boat_cruise_nile_1792014395306.jpg',
    route: 'Mukono / Kampala → Ziwa Rhino Sanctuary → Murchison Falls → Jinja → Return',
    durationDays: 4,
    durationLabel: '4 Days / 3 Nights',
    priceNote: 'Tailor-Made Quote on Request',
    category: 'River & Wildlife',
    travelStyle: 'Adventure',
    overview:
      'Experience the incredible force and drama of the River Nile. Track wild rhinos on foot at Ziwa, witness the entire Nile explode through a 7-meter rock gorge at Murchison Falls, cruise among hippos and crocodiles, and conclude with optional white-water rafting in Jinja.',
    highlights: [
      'On-foot white rhino tracking with rangers at Ziwa Sanctuary',
      'Hike to the roaring Top of Murchison Falls',
      'Boat cruise to the foot of the falls and Nile delta wildlife safari',
      'Abundant Rothschild’s giraffes, elephants, and lions on game drives',
      'Visit to Jinja, the historical Source of the River Nile'
    ],
    itinerarySummary: [
      { day: 'Day 1', title: 'Ziwa Rhino Tracking to Murchison Falls', desc: 'Depart Mukono/Kampala, walk with rhinos on foot at Ziwa, continue to Murchison for sunset over the Nile.' },
      { day: 'Day 2', title: 'Savannah Game Drive & Falls Boat Safari', desc: 'Dawn predator safari in the northern delta; afternoon 3-hour boat cruise to the base of Murchison Falls.' },
      { day: 'Day 3', title: 'Top of Falls & Transfer to Jinja', desc: 'Hike along the misty cleft of the falls; journey eastward to the adventure town of Jinja on Lake Victoria.' },
      { day: 'Day 4', title: 'Source of the Nile & White Water Adventure', desc: 'Boat excursion to the Source of the Nile monument; optional Grade 5 rafting; evening return.' }
    ],
    included: ['4x4 Safari vehicle with driver-guide', 'Ziwa Rhino Sanctuary tracking fees', 'Murchison National Park entry & boat fees', 'All lodge accommodation and meals'],
    excluded: ['Optional white-water rafting fees in Jinja', 'Personal drinks and expenses'],
    recommendedFor: 'Adventure travelers, friends, families with teenagers, and nature lovers.'
  },
  {
    id: 'waterfalls-mountain-trails',
    title: 'Waterfalls & Mountain Trails (Elgon & Sipi)',
    slug: 'waterfalls-mountain-trails',
    image: '/src/assets/images/murchison_falls_nile_1792011288609.jpg',
    route: 'Mukono → Jinja → Sipi Falls (Mount Elgon) → Return',
    durationDays: 5,
    durationLabel: '5 Days / 4 Nights',
    priceNote: 'Tailor-Made Quote on Request',
    category: 'Hiking & Culture',
    travelStyle: 'Adventure',
    overview:
      'Ascend into the lush volcanic slopes of eastern Uganda. Hike the three cascading waterfalls of Sipi, explore ancient caves behind the falls, roast fresh Arabica coffee with local Bugisu farming families, and hike into Mount Elgon National Park.',
    highlights: [
      'Guided 3-waterfalls hiking circuit of Sipi with cave exploration',
      'Bean-to-cup Bugisu Arabica coffee harvest and roasting experience',
      '100-meter abseiling alongside the main Sipi waterfall (optional)',
      'Mount Elgon National Park wilderness day hike',
      'Direct community tourism supporting local youth and farming cooperatives'
    ],
    itinerarySummary: [
      { day: 'Day 1', title: 'Journey to the Eastern Highlands', desc: 'Scenic drive through Mukono tea fields and Mabira Forest to Jinja, continuing to Sipi Falls lodge.' },
      { day: 'Day 2', title: 'The 3-Waterfall Circuit Hike', desc: 'Full-day guided hike across dramatic escarpments to all three Sipi Falls, walking behind the mist.' },
      { day: 'Day 3', title: 'Arabica Coffee Experience & Abseiling', desc: 'Join local farmers to pick, pulp, and roast coffee; optional exhilarating cliff abseil.' },
      { day: 'Day 4', title: 'Mount Elgon National Park Day Hike', desc: 'Forest hike in Mount Elgon with UWA rangers, seeking monkeys, birds, and expansive viewpoints.' },
      { day: 'Day 5', title: 'Jinja Source of Nile & Return', desc: 'Morning relaxation and return via Jinja for a sunset river cruise back to Mukono/Kampala.' }
    ],
    included: ['Round-trip private transport', 'Local Sipi hiking guides & park fees', 'Coffee farm experience fee', 'Comfortable cliffside lodge accommodation'],
    excluded: ['Optional abseiling fee', 'Personal tips and souvenirs'],
    recommendedFor: 'Hikers, active couples, coffee aficionados, and cultural explorers.'
  },
  {
    id: 'uganda-wildlife-photography',
    title: 'Uganda Wildlife Photography Safari',
    slug: 'uganda-wildlife-photography',
    image: '/src/assets/images/african_leopard_tree_1792014396244.jpg',
    shortDesc: 'A specialized itinerary tailored for photographers: optimized lighting, customized 4x4 vehicle with beanbag mounts, and extended field patience.',
    route: 'Entebbe → Mabamba (Shoebill) → Murchison Falls → Queen Elizabeth → Bwindi → Entebbe',
    durationDays: 9,
    durationLabel: '9 Days / 8 Nights',
    priceNote: 'Tailor-Made Quote on Request',
    category: 'Specialist Wildlife',
    travelStyle: 'Photography',
    overview:
      'Crafted by photographers for photographers. We prioritize golden hour departures, wide vehicle window clearance, specialized boat charters for low-angle water photography, and private tracking permissions.',
    highlights: [
      'Chartered canoe in Mabamba Swamp for eye-level Shoebill portraits',
      'Dedicated private safari vehicle with window seats and beanbag mounts for all lenses',
      'Exclusive boat charters on the Nile and Kazinga Channel for water-level angles',
      'Dedicated lion tracking research project drive with antennas in Queen Elizabeth',
      'Two gorilla permits can be arranged for maximum photographic variety'
    ],
    itinerarySummary: [
      { day: 'Day 1', title: 'Mabamba Swamp Shoebill Shoot', desc: 'Dawn light canoe shoot in Mabamba papyrus wetlands for prehistoric Shoebill storks.' },
      { day: 'Days 2-3', title: 'Murchison Falls Savannah & Nile Light', desc: 'Golden morning light game drives and private delta boat charters for bird and crocodile portraits.' },
      { day: 'Days 4-5', title: 'Kibale Primates & Queen Elizabeth Lions', desc: 'Chimpanzee action photography in Kibale; Kasenyi savannah predator tracking.' },
      { day: 'Days 6-7', title: 'Kazinga Water Wildlife & Ishasha Tree-Climbers', desc: 'Water-level hippo photography and tree-climbing lions framed against fig tree foliage.' },
      { day: 'Days 8-9', title: 'Bwindi Mountain Gorillas & Return', desc: 'Low-light prime lens photography with habituated mountain gorillas; return transfer.' }
    ],
    included: ['Modified photography safari 4x4 vehicle', 'Professional photographic guide', 'All private boat charters', 'All lodge accommodations'],
    excluded: ['Camera gear & insurance', 'UWA gorilla and chimp permits', 'Gratuities'],
    recommendedFor: 'Enthusiast and professional wildlife photographers.'
  },
  {
    id: 'ultimate-uganda-discovery',
    title: 'The Ultimate Uganda Discovery Circuit',
    slug: 'ultimate-uganda-discovery',
    image: '/src/assets/images/tourists_rhino_tracking_1792014395455.jpg',
    route: 'Entebbe → Ziwa → Murchison → Kibale → Queen Elizabeth → Bwindi → Lake Bunyonyi → Lake Mburo → Entebbe',
    durationDays: 12,
    durationLabel: '12 Days / 11 Nights',
    priceNote: 'Tailor-Made Quote on Request',
    category: 'Grand Circuit',
    travelStyle: 'Luxury',
    overview:
      'The comprehensive grand tour of the Pearl of Africa. Covering every major ecosystem of Uganda without rushing: savannahs, rainforests, waterfalls, crater lakes, high-altitude islands, and iconic wildlife.',
    highlights: [
      'Complete Ugandan Big Five experience (including Ziwa Rhinos)',
      'Both Mountain Gorillas and Chimpanzees tracked in wild habitats',
      'Murchison Falls, Queen Elizabeth Kazinga Channel, and Lake Mburo walking safari',
      'Scenic relaxation on the tranquil waters of Lake Bunyonyi',
      'Equator crossing, local cultural interactions, and boutique safari lodges throughout'
    ],
    itinerarySummary: [
      { day: 'Day 1-2', title: 'Entebbe to Ziwa & Murchison Falls', desc: 'On-foot rhinos, falls hike, and savannah game drives.' },
      { day: 'Day 3-4', title: 'Murchison Falls to Kibale Forest', desc: 'River Nile boat cruise, transfer through western tea country, chimpanzee tracking.' },
      { day: 'Day 5-6', title: 'Queen Elizabeth Savannah & Kazinga', desc: 'Crater drives, lion tracking, and afternoon boat safari.' },
      { day: 'Day 7-8', title: 'Ishasha Sector to Bwindi Rainforest', desc: 'Tree-climbing lions, ascent into Bwindi, mountain gorilla trekking experience.' },
      { day: 'Day 9-10', title: 'Lake Bunyonyi Island Retreat', desc: 'Canoe excursions, swimming, relaxation, and local Batwa cultural encounters.' },
      { day: 'Day 11-12', title: 'Lake Mburo Walking Safari & Return', desc: 'Walking safari among zebras, boat ride, Equator monument, and farewell transfer in Entebbe.' }
    ],
    included: ['All ground transport in premium safari vehicle', 'All lodge stays full-board', 'All park fees, boat cruises, and walking safaris', 'Water and guidance throughout'],
    excluded: ['Gorilla & chimp permits', 'International flights', 'Tips'],
    recommendedFor: 'Travelers seeking a once-in-a-lifetime complete immersion into Uganda.'
  },
  {
    id: 'romantic-uganda-honeymoon',
    title: 'Romantic Uganda: Luxury Safari & Island Honeymoon',
    slug: 'romantic-uganda-honeymoon',
    image: '/src/assets/images/queen_elizabeth_elephants_1792011289529.jpg',
    route: 'Entebbe → Queen Elizabeth → Bwindi Rainforest → Lake Bunyonyi → Entebbe',
    durationDays: 8,
    durationLabel: '8 Days / 7 Nights',
    priceNote: 'Tailor-Made Quote on Request',
    category: 'Romantic Escapes',
    travelStyle: 'Luxury',
    overview:
      'An intimate and unforgettable honeymoon itinerary combining private safari game drives, candlelit bush dinners under the African stars, gorilla trekking, and secluded lakeside luxury.',
    highlights: [
      'Private 4x4 safari cruiser with dedicated private driver-guide throughout',
      'Candlelit dinners and private balcony vistas overlooking the savannah and rainforest',
      'Intimate mountain gorilla trekking in the mist of Bwindi',
      'Secluded luxury honeymoon cottage on Lake Bunyonyi with private boat excursions',
      'Complimentary champagne and celebratory welcome surprises'
    ],
    itinerarySummary: [
      { day: 'Day 1', title: 'Arrival in Entebbe & Lake Victoria Sunset', desc: 'Private arrival transfer to a boutique lakeside retreat in Entebbe.' },
      { day: 'Day 2-3', title: 'Queen Elizabeth Private Safari', desc: 'Scenic flight or private drive; sunset boat cruise on Kazinga Channel and savannah game drives.' },
      { day: 'Day 4-5', title: 'Bwindi Forest & Gorilla Trekking', desc: 'Luxury forest lodge with fireplaces; private ranger briefing and life-changing gorilla encounter.' },
      { day: 'Day 6-7', title: 'Lake Bunyonyi Secluded Romance', desc: 'Private island hopping, sunset canoe cocktails, massage treatments, and relaxation.' },
      { day: 'Day 8', title: 'Scenic Return Flight or Transfer', desc: 'Return to Entebbe for evening departure flight home.' }
    ],
    included: ['All luxury accommodations in honeymoon suites', 'Private dedicated vehicle and guide', 'All private activities', 'Park fees & celebrations'],
    excluded: ['Gorilla permits ($800 USD/person)', 'International flights'],
    recommendedFor: 'Honeymooners, wedding anniversaries, and couples celebrating romance.'
  },
  {
    id: 'family-adventure-uganda',
    title: 'Family Adventure in Uganda',
    slug: 'family-adventure-uganda',
    image: '/src/assets/images/queen_elizabeth_elephants_1792011289529.jpg',
    route: 'Entebbe → Lake Mburo → Queen Elizabeth → Fort Portal → Entebbe',
    durationDays: 6,
    durationLabel: '6 Days / 5 Nights',
    priceNote: 'Tailor-Made Quote on Request',
    category: 'Family Safaris',
    travelStyle: 'Family',
    overview:
      'A safe, gentle, and wonder-filled safari designed for families with children. We avoid excessive driving times, prioritize swimming pool lodges, and incorporate engaging activities like zebra walking safaris and boat cruises.',
    highlights: [
      'Guided walking safari in Lake Mburo where children safely view zebras and giraffes',
      'Boat safari on Kazinga Channel with thousands of hippos and swimming elephants',
      'Stay at lodges with family suites and swimming pools for afternoon relaxation',
      'Tea estate walk and crater lake picnic near Fort Portal',
      'Junior Ranger animal spotting checklists and child-friendly guides'
    ],
    itinerarySummary: [
      { day: 'Day 1', title: 'Entebbe Wildlife Centre & Lake Mburo', desc: 'Meet rescued wildlife at UWEC; scenic drive to Lake Mburo with zebra spotting right outside your cottage.' },
      { day: 'Day 2', title: 'Walking Safari & Lake Boat Ride', desc: 'Safe morning walking safari with rangers; afternoon boat ride to see hippos and fish eagles.' },
      { day: 'Day 3-4', title: 'Queen Elizabeth Safari & Kazinga Boat', desc: 'Elephant herds in Kasenyi; thrilling boat cruise on Kazinga Channel with ice cream stops.' },
      { day: 'Day 5', title: 'Fort Portal Crater Lakes & Caves', desc: 'Explore Amabere caves and waterfalls; visit a working tea plantation.' },
      { day: 'Day 6', title: 'Equator Experiments & Entebbe Departure', desc: 'Interactive Coriolis effect water experiment at the Equator; return to Entebbe.' }
    ],
    included: ['Spacious 4x4 family safari vehicle', 'Family lodge rooms/villas with swimming pools', 'All child-appropriate park fees and activities'],
    excluded: ['International airfare', 'Personal items'],
    recommendedFor: 'Families traveling with children and multi-generational groups.'
  }
];
