import { WildlifeItem } from '../types';

export const wildlifeData: WildlifeItem[] = [
  {
    id: 'lion',
    commonName: 'African Lion',
    scientificName: 'Panthera leo',
    category: 'big_five',
    image: '/src/assets/images/tourists_watching_lions_1792014392788.jpg',
    ugandaLocation: 'Queen Elizabeth (Kasenyi & Ishasha sectors), Murchison Falls, Kidepo Valley',
    sightingNote:
      'Uganda is famous for its tree-climbing lions in Ishasha, which lounge in giant fig trees during the heat of the day. Lions are wild and sightings occur naturally during early morning or sunset game drives from open-roof 4x4 vehicles.'
  },
  {
    id: 'mountain-gorilla',
    commonName: 'Mountain Gorilla',
    scientificName: 'Gorilla beringei beringei',
    category: 'primates',
    image: '/src/assets/images/tourists_hiking_rainforest_1792014394040.jpg',
    ugandaLocation: 'Bwindi Impenetrable National Park & Mgahinga Gorilla National Park',
    sightingNote:
      'With only ~1,063 mountain gorillas surviving globally, over 50% dwell in Uganda’s mist-shrouded montane forests. Tracking is strictly regulated by UWA with 98%+ historical contact success on permitted habituated family visits.'
  },
  {
    id: 'african-elephant',
    commonName: 'African Bush Elephant',
    scientificName: 'Loxodonta africana',
    category: 'big_five',
    image: '/src/assets/images/safari_boat_cruise_nile_1792014395306.jpg',
    ugandaLocation: 'Queen Elizabeth National Park, Murchison Falls, Kidepo Valley',
    sightingNote:
      'Encountered in magnificent breeding herds across savannah plains and swimming in the Kazinga Channel and Nile River during afternoon boat safaris.'
  },
  {
    id: 'chimpanzee',
    commonName: 'Eastern Chimpanzee',
    scientificName: 'Pan troglodytes schweinfurthii',
    category: 'primates',
    image: '/src/assets/images/kibale_wild_chimpanzee_1792011289913.jpg',
    ugandaLocation: 'Kibale National Park, Budongo Forest (Murchison), Kyambura Gorge',
    sightingNote:
      'Sharing ~98.8% of human DNA, over 5,000 wild chimpanzees thrive in Uganda. Kibale Forest offers the world’s most renowned tracking experience with seasoned UWA ranger spotters.'
  },
  {
    id: 'white-rhino',
    commonName: 'Southern White Rhinoceros',
    scientificName: 'Ceratotherium simum',
    category: 'big_five',
    image: '/src/assets/images/tourists_rhino_tracking_1792014395455.jpg',
    ugandaLocation: 'Ziwa Rhino Sanctuary (Nakasongola)',
    sightingNote:
      'Safely conserved and multiplying at the 7,000-hectare Ziwa sanctuary under armed 24/7 protection, where visitors can track them on foot alongside specialized rangers.'
  },
  {
    id: 'leopard',
    commonName: 'African Leopard',
    scientificName: 'Panthera pardus',
    category: 'big_five',
    image: '/src/assets/images/african_leopard_tree_1792014396244.jpg',
    ugandaLocation: 'Queen Elizabeth, Murchison Falls, Lake Mburo, Kidepo Valley',
    sightingNote:
      'Solitary and masterfully camouflaged, leopards are often spotted draped across acacia boughs or stalking along savannah tracks during nocturnal or early dawn game drives.'
  },
  {
    id: 'cape-buffalo',
    commonName: 'African Cape Buffalo',
    scientificName: 'Syncerus caffer',
    category: 'big_five',
    image: '/src/assets/images/queen_elizabeth_elephants_1792011289529.jpg',
    ugandaLocation: 'Murchison Falls, Queen Elizabeth, Lake Mburo, Kidepo Valley',
    sightingNote:
      'One of Africa’s most formidable herbivores, seen in massive herds wallowing in muddy riverbanks and grazing across open grasslands.'
  },
  {
    id: 'shoebill-stork',
    commonName: 'Shoebill Stork',
    scientificName: 'Balaeniceps rex',
    category: 'birds',
    image: '/src/assets/images/safari_boat_cruise_nile_1792014395306.jpg',
    ugandaLocation: 'Mabamba Bay Wetland (Lake Victoria), Albert Delta (Murchison Falls)',
    sightingNote:
      'A solitary, prehistoric-looking bird standing over 1.2 meters tall with a massive shoe-shaped bill, observed silently stalking lungfish in papyrus channels from quiet wooden canoes.'
  },
  {
    id: 'cheetah',
    commonName: 'Cheetah (Regional Wildlife Context)',
    scientificName: 'Acinonyx jubatus',
    category: 'illustrative',
    image: '/src/assets/images/hero_uganda_lion_savannah_1792011287978.jpg',
    ugandaLocation: 'Kidepo Valley National Park (Rare northern wilderness only)',
    isIllustrativeAfricanOnly: true,
    sightingNote:
      'IMPORTANT NOTE: Unlike lions and leopards which are regularly seen in major parks, cheetahs are not a standard safari sighting in Uganda and are restricted to rare, remote occurrences in the far northern Kidepo Valley. We present cheetah imagery as wider East African wildlife context, never as a guaranteed feature of general Ugandan itineraries.'
  }
];
