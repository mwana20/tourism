export interface TravelTopic {
  id: string;
  title: string;
  badge: string;
  summary: string;
  keyPoints: string[];
  officialSourceNotice?: string;
}

export const travelInfoTopics: TravelTopic[] = [
  {
    id: 'getting-here',
    title: 'Arriving in Uganda & Airport Transfers',
    badge: 'Logistics',
    summary:
      'Entebbe International Airport (EBB) is the primary international air hub for Uganda, serviced by major carriers including Emirates, Qatar Airways, KLM, Turkish Airlines, Ethiopian Airlines, and Kenya Airways.',
    keyPoints: [
      'Our Mwanaweika Tours representative provides meet-and-greet services inside the arrivals terminal with custom nameboards.',
      'Private airport transfers to Entebbe, Kampala, or Mukono hotels are conducted in air-conditioned private vehicles.',
      'Scheduled domestic bush flights connect Entebbe directly to Kihihi/Kisoro (for Bwindi Gorillas), Kasese (Queen Elizabeth & Rwenzori), and Pakuba (Murchison Falls).',
      'We recommend arriving at least one day before your safari begins to rest and acclimatize comfortably.'
    ],
    officialSourceNotice: 'Verify flight timings with your airline. Entebbe Airport is situated 40km south of Kampala on the shores of Lake Victoria.'
  },
  {
    id: 'visas',
    title: 'Passport & Visa Requirements',
    badge: 'Immigration',
    summary:
      'All foreign travelers must possess a passport valid for at least 6 months beyond intended departure date, with at least two blank pages.',
    keyPoints: [
      'Visas must be applied for and approved online prior to arrival via the official Uganda Electronic Visa/Permits portal (visas.immigration.go.ug).',
      'The standard Uganda Tourist Visa costs $50 USD and is single-entry valid for up to 90 days.',
      'The East Africa Tourist Visa ($100 USD) permits multi-entry travel between Uganda, Rwanda, and Kenya without paying separate visa fees.',
      'Print your official electronic approval letter (eVisa authorization) to present at airport immigration upon landing.'
    ],
    officialSourceNotice: 'Always apply exclusively via the official Government of Uganda portal (visas.immigration.go.ug) to avoid unauthorized third-party fees.'
  },
  {
    id: 'health',
    title: 'Health, Yellow Fever & Vaccinations',
    badge: 'Medical Guidance',
    summary:
      'International travelers are advised to consult their personal physician or travel clinic 4 to 8 weeks prior to departure for personalized health advice.',
    keyPoints: [
      'Yellow Fever Vaccination: A valid International Certificate of Vaccination or Prophylaxis (Yellow Card) is a mandatory requirement for entry into Uganda for all travelers aged 1 year and older.',
      'Malaria Prevention: Uganda is a malaria-endemic region. Prophylaxis medications (such as Atovaquone-Proguanil/Malarone or Doxycycline) are strongly advised upon doctor recommendation.',
      'Insect Repellent: Bring repellent containing 20–30% DEET or Picaridin for morning and evening outdoor game viewing.',
      'Primate Health Protocol: To protect endangered mountain gorillas and chimpanzees from human respiratory infections, travelers with active colds, flu, or viral symptoms are not permitted to trek (UWA guidelines protect animal health).'
    ],
    officialSourceNotice: 'Review current World Health Organization (WHO) and Ugandan Ministry of Health international health notices.'
  },
  {
    id: 'currency',
    title: 'Currency, Payments & Banking',
    badge: 'Finance',
    summary:
      'The official currency is the Uganda Shilling (UGX). US Dollars (USD) are widely accepted for national park permits, upscale safari lodges, and tipping.',
    keyPoints: [
      'US Dollar Currency Requirements: US Dollar banknotes must be series 2013 or newer, crisp, clean, with no tears, stamps, or markings, as older or marked notes are universally rejected by local banks.',
      'Credit & Debit Cards: Visa and Mastercard are accepted at major lodges and high-end establishments in Entebbe, Kampala, and Mukono (surcharges of 3–5% may apply).',
      'ATMs: Standard Bank and Absa ATMs dispense local Uganda Shillings across major towns. Carry a reasonable amount of local currency for small village crafts, fruit stands, and guide tips.',
      'Tipping Etiquette: Tipping is voluntary but deeply appreciated. Recommended baseline: $10–$20 USD per day for your private safari driver-guide, $10 USD for park rangers, and $15–$20 USD for gorilla porters.'
    ],
    officialSourceNotice: 'Bank of Uganda maintains the national monetary framework; always check daily exchange rates before transacting.'
  },
  {
    id: 'climate',
    title: 'Climate, Weather & Best Times to Visit',
    badge: 'Seasons',
    summary:
      'Because of Uganda’s equatorial latitude and elevated plateau (averaging 1,100m to 1,900m above sea level), the climate is pleasant, mild, and tropical year-round, never excessively hot.',
    keyPoints: [
      'Dry Seasons (Peak Travel): June to August and December to February offer optimal wildlife viewing around watering holes and firmer hiking trails in Bwindi and Kibale.',
      'Green Seasons (Low Season): March to May and September to November feature lush green landscapes, fewer tourists, excellent birding with migratory flocks, and occasional special lodge rates.',
      'Gorilla Trekking Year-Round: Mountain gorillas do not migrate; trekking is active 365 days a year.',
      'Highland Temperatures: While daytime savannah temperatures average 25°C–29°C (77°F–84°F), nights in Bwindi, Mgahinga, and Lake Bunyonyi drop to 10°C–14°C (50°F–57°F).'
    ]
  },
  {
    id: 'packing',
    title: 'Safari Packing Recommendations',
    badge: 'Checklist',
    summary:
      'Packing light in soft duffel bags (maximum 15kg for domestic bush flights) is ideal for safari vehicle storage.',
    keyPoints: [
      'Clothing Colors: Pack neutral tones (khaki, olive, tan, beige, brown). Avoid dark blue and black in savannah reserves (which attract tsetse flies), and avoid bright white or neon on walking safaris.',
      'Gorilla & Chimp Trekking Footwear: Broken-in, sturdy, waterproof hiking boots with solid ankle support and good grip.',
      'Protective Gear: Lightweight long-sleeved shirts, lightweight breathable hiking trousers, garden gloves (to push through thorny vines), and knee-high gaiters or long socks to tuck trousers into.',
      'Rain Gear: A breathable waterproof jacket or poncho is essential year-round in rainforest environments.',
      'Optics & Electronics: Binoculars (8x42 or 10x42), telephoto camera lens, extra camera batteries (charging available at all lodges), and a universal UK 3-pin plug adapter.'
    ]
  },
  {
    id: 'ethics',
    title: 'Responsible Tourism & Wildlife Ethics',
    badge: 'Conservation',
    summary:
      'Mwanaweika Tours and Travel operates strictly within lawful Ugandan regulatory frameworks under the Uganda Wildlife Authority (UWA) and Uganda Tourism Board (UTB) principles.',
    keyPoints: [
      'Wildlife Viewing Distance: Always maintain a minimum distance of 7 to 10 meters from mountain gorillas and wild animals. Never crowd, chase, or attempt to touch wildlife.',
      'Do Not Feed Animals: Feeding baboons, monkeys, or birds alters natural foraging habits and creates dangerous human-wildlife conflict.',
      'Plastic-Free Parks: Single-use plastic bottles and litter are prohibited inside national parks. We provide reusable stainless steel water dispensers in safari vehicles.',
      'Cultural Sensitivity: Always ask permission before photographing local community members. Our visits support locally managed cooperatives where proceeds go directly to schools and community clinics.',
      'Support Local Porters: When trekking gorillas in Bwindi or Mgahinga, hiring a local porter ($20 USD) provides vital alternative livelihoods to former poaching families.'
    ],
    officialSourceNotice: 'All wildlife encounters are conducted strictly according to UWA (Uganda Wildlife Authority) conservation charters.'
  }
];
