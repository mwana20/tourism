import { LanguageCode } from '../types';

export interface TranslationDictionary {
  brand: {
    name: string;
    slogan: string;
    location: string;
  };
  nav: {
    home: string;
    destinations: string;
    experiences: string;
    planAndBook: string;
    planMySafari: string;
    contactUs: string;
    switchLanguage: string;
    travelerGuide: string;
    whatsappChat: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    exploreBtn: string;
    planBtn: string;
    trustLine: string;
  };
  common: {
    viewDetails: string;
    planVisit: string;
    requestQuote: string;
    duration: string;
    bestSeason: string;
    travelerProfile: string;
    highlights: string;
    close: string;
    submit: string;
    submitting: string;
    loading: string;
    learnMore: string;
    all: string;
    search: string;
    filter: string;
    phone: string;
    whatsapp: string;
    email: string;
    status: string;
  };
  home: {
    welcomeBadge: string;
    welcomeTitle: string;
    welcomeText1: string;
    welcomeText2: string;
    whyUsTitle: string;
    whyUsSubtitle: string;
    reason1Title: string;
    reason1Desc: string;
    reason2Title: string;
    reason2Desc: string;
    reason3Title: string;
    reason3Desc: string;
    reason4Title: string;
    reason4Desc: string;
    featuredSafaris: string;
    featuredSafarisSub: string;
    destinationsPreviewTitle: string;
    destinationsPreviewSub: string;
    conservationTitle: string;
    conservationText: string;
    testimonialsTitle: string;
    testimonialsSub: string;
    ctaKicker: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaWhatsApp: string;
    viewAllCircuits: string;
    exploreAllDestinations: string;
    wildlifeEthicsKicker: string;
    wildlifeEthicsTitle: string;
    wildlifeEthicsText: string;
    cheetahNoticeTitle: string;
    cheetahNoticeText: string;
  };
  destinations: {
    kicker: string;
    title: string;
    subtitle: string;
    allRegions: string;
    showing: string;
    verifiedCount: string;
    recommendedStay: string;
    overview: string;
    modalHighlights: string;
    modalWildlife: string;
    modalPractical: string;
    planSafariTo: string;
  };
  experiences: {
    kicker: string;
    title: string;
    subtitle: string;
    tabPackages: string;
    tabCategories: string;
    filterStyle: string;
    filterDuration: string;
    allStyles: string;
    anyDuration: string;
    signatureHighlights: string;
    dayByDay: string;
    included: string;
    excluded: string;
    pricingGuaranteeTitle: string;
    pricingGuaranteeDesc: string;
    requestCustomQuote: string;
  };
  footer: {
    quickNav: string;
    signatureDest: string;
    ethicalStandards: string;
    ethicalDesc: string;
    allRightsReserved: string;
    travelInfo: string;
    bookingTerms: string;
    staffPortal: string;
  };
  booking: {
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    yourName: string;
    emailAddress: string;
    phoneNumber: string;
    countryOfResidence: string;
    preferredContactMethod: string;
    dates: string;
    datesFlexible: string;
    durationDays: string;
    adults: string;
    children: string;
    selectDestinations: string;
    selectActivities: string;
    travelStyle: string;
    accommodationPreference: string;
    transportPreference: string;
    airportPickup: string;
    budgetRange: string;
    specialRequests: string;
    consentText: string;
    submitEnquiry: string;
    whatsappInstant: string;
    successTitle: string;
    successMessage: string;
    referenceCodeLabel: string;
    whatsappDirectNote: string;
  };
  travelGuide: {
    title: string;
    subtitle: string;
    visas: string;
    health: string;
    currency: string;
    climate: string;
    packing: string;
    responsibleTourism: string;
  };
}

export const languages: { code: LanguageCode; name: string; nativeName: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', dir: 'ltr' },
  { code: 'zh', name: 'Chinese', nativeName: '简体中文', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', dir: 'ltr' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', dir: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', dir: 'ltr' }
];

export const translations: Record<LanguageCode, TranslationDictionary> = {
  en: {
    brand: {
      name: 'Mwanaweika Tours and Travel',
      slogan: 'Discover Uganda. Experience Africa. Create Memories for a Lifetime.',
      location: 'Mukono, Uganda'
    },
    nav: {
      home: 'Home',
      destinations: 'Destinations',
      experiences: 'Experiences',
      planAndBook: 'Plan & Book',
      planMySafari: 'Plan My Safari',
      contactUs: 'Contact Us',
      switchLanguage: 'Language',
      travelerGuide: 'Traveler Guide',
      whatsappChat: 'WhatsApp Chat'
    },
    hero: {
      kicker: 'The Pearl of Africa',
      headline: 'Uganda Is Calling. Your Adventure Begins Here.',
      subheadline:
        'From unforgettable wildlife encounters and mist-covered mountain forests to the mighty River Nile and vibrant African cultures, discover the extraordinary beauty of Uganda with Mwanaweika Tours and Travel.',
      exploreBtn: 'Explore Uganda',
      planBtn: 'Plan My Safari',
      trustLine: 'Wildlife · Nature · Culture · Adventure · Unforgettable Journeys'
    },
    common: {
      viewDetails: 'View Experience',
      planVisit: 'Plan a Visit',
      requestQuote: 'Request a Custom Quote',
      duration: 'Duration',
      bestSeason: 'Best Season',
      travelerProfile: 'Ideal For',
      highlights: 'Highlights',
      close: 'Close',
      submit: 'Submit Enquiry',
      submitting: 'Submitting Enquiry...',
      loading: 'Loading...',
      learnMore: 'Learn More',
      all: 'All',
      search: 'Search by keyword, park, or region...',
      filter: 'Filter by',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      status: 'Status'
    },
    home: {
      welcomeBadge: 'Welcome to Uganda',
      welcomeTitle: 'An Authentic Encounter With the Pearl of Africa',
      welcomeText1:
        'Nestled in the heart of East Africa where the savannah meets the equatorial rainforest, Uganda is home to more than half of the world’s surviving mountain gorillas, vast populations of chimpanzees, the thundering source of the River Nile, and snow-capped peaks rising above the equator.',
      welcomeText2:
        'At Mwanaweika Tours and Travel, based in Mukono, Uganda, we bridge world-class personalized expedition planning with deep local heritage. We craft ethical, transformative safaris led by licensed, knowledgeable Ugandan guides who respect wildlife habitats and nurture community partnerships.',
      whyUsTitle: 'Why Journey With Mwanaweika',
      whyUsSubtitle: 'Rooted in Ugandan hospitality, verified local expertise, and an unwavering commitment to conservation.',
      reason1Title: 'Locally Rooted & Licensed Experts',
      reason1Desc:
        'Born and operating in Uganda, our seasoned guides know the hidden tracks of Queen Elizabeth, the misty valleys of Bwindi, and the cultural tapestry of our communities.',
      reason2Title: 'Responsible & Ethical Tourism',
      reason2Desc:
        'We adhere strictly to Uganda Wildlife Authority (UWA) park regulations, prioritize community-owned lodges, and support sustainable conservation.',
      reason3Title: 'Tailor-Made Custom Journeys',
      reason3Desc:
        'No rigid templates. We design custom safaris for solo adventurers, wildlife photographers, honeymooners, and multi-generational families.',
      reason4Title: 'Transparent & Trustworthy Handling',
      reason4Desc:
        'Honest guidance on seasons and wildlife sightings. Clear quotes with no hidden fees and dedicated direct WhatsApp and telephone communication.',
      featuredSafaris: 'Featured Safari Journeys',
      featuredSafarisSub: 'Handcrafted itineraries balancing wildlife spectacle, dramatic landscapes, and authentic cultural hospitality.',
      destinationsPreviewTitle: 'Iconic Ugandan Destinations',
      destinationsPreviewSub: 'Explore equatorial rainforests, wildlife-dense savannahs, thunderous waterfalls, and alpine mountains.',
      conservationTitle: 'Travel Responsibly. Conserve the Pearl.',
      conservationText:
        'Every safari we arrange honors wildlife viewing distances, supports indigenous communities, and contributes to the protection of endangered mountain gorillas and fragile ecosystems.',
      testimonialsTitle: 'Traveler Reflections',
      testimonialsSub: 'Authentic feedback from international adventurers who explored Uganda with us.',
      ctaKicker: 'Start Your African Journey',
      ctaTitle: 'Ready to Discover the Pearl of Africa?',
      ctaSubtitle:
        'Contact our Mukono safari team today. Tell us your travel dates, wish-list destinations, and group size, and we will prepare a personalized itinerary with full pricing transparency.',
      ctaWhatsApp: 'Chat Directly on WhatsApp',
      viewAllCircuits: 'View All 8 Curated Circuits',
      exploreAllDestinations: 'Explore All 17 Destinations',
      wildlifeEthicsKicker: 'Wildlife Ethics & Geographic Accuracy',
      wildlifeEthicsTitle: 'Natural Encounters in Untamed Habitats',
      wildlifeEthicsText:
        'Uganda’s national parks are wild, protected ecosystems, not zoo enclosures. Sightings of lions, leopards, chimpanzees, and elephants are authentic and depend on natural animal movements, seasons, and weather.',
      cheetahNoticeTitle: 'Notice regarding Cheetahs in Uganda:',
      cheetahNoticeText:
        'While lions and leopards inhabit major national parks, cheetahs are rare in Uganda and restricted only to the remote northern plains of Kidepo Valley. Any cheetah imagery serves as illustrative East African context, not a promise of standard sightings.'
    },
    destinations: {
      kicker: 'Curated Geography of Uganda',
      title: 'Explore Uganda: The Pearl of Africa',
      subtitle:
        'From the cloud-cloaked peaks of the Rwenzori Mountains to the surging rapids of the Nile and the ancient rainforests of Bwindi, Uganda encompasses Africa’s most diverse landscapes.',
      allRegions: 'All Uganda',
      showing: 'Showing',
      verifiedCount: 'verified destinations',
      recommendedStay: 'Recommended stay',
      overview: 'Overview',
      modalHighlights: 'Key Highlights & Activities',
      modalWildlife: 'Wildlife Spotlight',
      modalPractical: 'Practical Safari Advice',
      planSafariTo: 'Plan a Safari to'
    },
    experiences: {
      kicker: 'African Safari Portfolios',
      title: 'Choose Your Adventure in Uganda',
      subtitle:
        'Whether your dream is spending one quiet hour with mountain gorillas or navigating the rapids of the River Nile, our collections are handcrafted to inspire.',
      tabPackages: 'Curated Safari Packages (8)',
      tabCategories: '16 Adventure Categories',
      filterStyle: 'Filter by Travel Style:',
      filterDuration: 'Filter by Duration:',
      allStyles: 'All Styles',
      anyDuration: 'Any Duration',
      signatureHighlights: 'Signature Highlights:',
      dayByDay: 'Day-by-Day Outline',
      included: 'Included in This Safari',
      excluded: 'Excluded / Optional',
      pricingGuaranteeTitle: 'Honest Pricing & Availability Guarantee:',
      pricingGuaranteeDesc:
        'Because lodge availability, seasonality, and official UWA gorilla/chimpanzee permits fluctuate dynamically, we prepare custom transparent proposals based on your exact preferences.',
      requestCustomQuote: 'Request a Custom Quote for This Tour'
    },
    footer: {
      quickNav: 'Quick Navigation',
      signatureDest: 'Signature Destinations',
      ethicalStandards: 'Ethical Standards',
      ethicalDesc:
        'We operate strictly within lawful Ugandan regulatory standards under the Uganda Wildlife Authority (UWA) permit systems. We champion zero single-use plastics and support local communities.',
      allRightsReserved: 'All rights reserved. Mukono, Uganda.',
      travelInfo: 'Travel Information',
      bookingTerms: 'Booking Terms & Privacy',
      staffPortal: 'Staff Portal'
    },
    booking: {
      title: 'Plan Your Uganda Journey',
      subtitle:
        'Tell us about your dream African safari. Our Mukono-based travel specialists will handcraft a personalized itinerary and transparent quote for you.',
      step1: '1. Travelers & Dates',
      step2: '2. Destinations & Experiences',
      step3: '3. Style & Preferences',
      step4: '4. Contact Details & Submission',
      yourName: 'Full Name',
      emailAddress: 'Email Address',
      phoneNumber: 'Phone / WhatsApp Number',
      countryOfResidence: 'Country of Residence',
      preferredContactMethod: 'Preferred Contact Method',
      dates: 'Target Travel Dates or Month',
      datesFlexible: 'My travel dates are flexible',
      durationDays: 'Estimated Length of Stay (Days)',
      adults: 'Adults (16+)',
      children: 'Children (Under 16)',
      selectDestinations: 'Select Preferred Destinations',
      selectActivities: 'Select Desired Activities & Experiences',
      travelStyle: 'Preferred Travel Style',
      accommodationPreference: 'Accommodation Preference',
      transportPreference: 'Safari Transport Preference',
      airportPickup: 'Include Entebbe Airport (EBB) Transfers',
      budgetRange: 'Estimated Budget per Traveler (USD)',
      specialRequests: 'Special Requests, Fitness Level, or Dietary Needs',
      consentText:
        'I consent to Mwanaweika Tours and Travel contacting me regarding this trip enquiry. My personal data will be kept strictly private.',
      submitEnquiry: 'Send My Safari Enquiry',
      whatsappInstant: 'Enquire Instantly on WhatsApp',
      successTitle: 'Enquiry Received With Thanks!',
      successMessage:
        'Our safari planning team in Mukono is reviewing your preferences. We will prepare your custom proposal and reply within 24 hours.',
      referenceCodeLabel: 'Your Safari Reference Code',
      whatsappDirectNote: 'Prefer an immediate response? You can also message our team directly on WhatsApp with your reference code.'
    },
    travelGuide: {
      title: 'Essential Uganda Traveler Information',
      subtitle: 'Authoritative, practical guidance to help you prepare smoothly for your safari in the Pearl of Africa.',
      visas: 'Passport & Visa Requirements',
      health: 'Health, Yellow Fever & Vaccinations',
      currency: 'Currency, Payments & Money',
      climate: 'Climate & Best Seasons',
      packing: 'Safari Packing Recommendations',
      responsibleTourism: 'Responsible Visitor Conduct & Ethics'
    }
  },

  fr: {
    brand: {
      name: 'Mwanaweika Tours and Travel',
      slogan: 'Découvrez l’Ouganda. Vivez l’Afrique. Créez des souvenirs pour la vie.',
      location: 'Mukono, Ouganda'
    },
    nav: {
      home: 'Accueil',
      destinations: 'Destinations',
      experiences: 'Expériences',
      planAndBook: 'Planifier & Réserver',
      planMySafari: 'Mon Safari',
      contactUs: 'Contactez-nous',
      switchLanguage: 'Langue',
      travelerGuide: 'Guide Voyageur',
      whatsappChat: 'Discussion WhatsApp'
    },
    hero: {
      kicker: 'La Perle de l’Afrique',
      headline: 'L’Ouganda vous appelle. Votre aventure commence ici.',
      subheadline:
        'Des rencontres inoubliables avec la faune et les forêts brumeuses au majestueux Nil et aux cultures africaines vibrantes, découvrez l’extraordinaire beauté de l’Ouganda avec Mwanaweika Tours and Travel.',
      exploreBtn: 'Explorer l’Ouganda',
      planBtn: 'Planifier Mon Safari',
      trustLine: 'Faune · Nature · Culture · Aventure · Voyages Inoubliables'
    },
    common: {
      viewDetails: 'Voir l’Expérience',
      planVisit: 'Organiser une Visite',
      requestQuote: 'Demander un Devis',
      duration: 'Durée',
      bestSeason: 'Meilleure Saison',
      travelerProfile: 'Idéal Pour',
      highlights: 'Points Forts',
      close: 'Fermer',
      submit: 'Envoyer la Demande',
      submitting: 'Envoi en cours...',
      loading: 'Chargement...',
      learnMore: 'En Savoir Plus',
      all: 'Tout',
      search: 'Rechercher par parc, région ou mot-clé...',
      filter: 'Filtrer par',
      phone: 'Téléphone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      status: 'Statut'
    },
    home: {
      welcomeBadge: 'Bienvenue en Ouganda',
      welcomeTitle: 'Une Rencontre Authentique Avec la Perle de l’Afrique',
      welcomeText1:
        'Niché au cœur de l’Afrique de l’Est, l’Ouganda abrite plus de la moitié des gorilles de montagne au monde, de vastes sanctuaires de chimpanzés et la source mythique du Nil.',
      welcomeText2:
        'Basée à Mukono, Mwanaweika Tours and Travel allie hospitalité ougandaise et organisation de safari haut de gamme, avec des guides certifiés et dévoués à la conservation.',
      whyUsTitle: 'Pourquoi Voyager Avec Mwanaweika',
      whyUsSubtitle: 'Une expertise locale enracinée en Ouganda et un engagement indéfectible pour un tourisme responsable.',
      reason1Title: 'Guides Locaux Certifiés',
      reason1Desc: 'Nés en Ouganda, nos guides expérimentés partagent les secrets de la savane et des forêts primaires.',
      reason2Title: 'Tourisme Éthique & Conservation',
      reason2Desc: 'Respect strict des règles de l’Uganda Wildlife Authority (UWA) et soutien direct aux communautés locales.',
      reason3Title: 'Itinéraires Sur-Mesure',
      reason3Desc: 'Des circuits personnalisés pour photographes, couples en lune de miel, familles et explorateurs.',
      reason4Title: 'Transparence & Sérénité',
      reason4Desc: 'Conseils honnêtes sur les saisons, devis clairs sans frais cachés et assistance continue via WhatsApp.',
      featuredSafaris: 'Circuits Safari Recommandés',
      featuredSafarisSub: 'Des voyages minutieusement conçus alliant observation animalière, paysages grandioses et confort.',
      destinationsPreviewTitle: 'Destinations Emblématiques',
      destinationsPreviewSub: 'Forêts impénétrables, savanes verdoyantes, chutes tonitruantes et monts enneigés.',
      conservationTitle: 'Voyagez de Manière Responsable',
      conservationText: 'Chaque safari préserve les habitats naturels et soutient la survie des gorilles de montagne.',
      testimonialsTitle: 'Témoignages de Voyageurs',
      testimonialsSub: 'Les retours d’explorateurs du monde entier ayant découvert l’Ouganda à nos côtés.',
      ctaKicker: 'Commencez Votre Voyage en Afrique',
      ctaTitle: 'Prêt à Découvrir la Perle de l’Afrique ?',
      ctaSubtitle:
        'Contactez notre équipe de Mukono dès aujourd’hui. Transmettez-nous vos dates et envies pour recevoir un itinéraire personnalisé et transparent.',
      ctaWhatsApp: 'Écrire Directement sur WhatsApp',
      viewAllCircuits: 'Voir les 8 Circuits Complets',
      exploreAllDestinations: 'Explorer les 17 Destinations',
      wildlifeEthicsKicker: 'Éthique & Réalité Géographique',
      wildlifeEthicsTitle: 'Rencontres Sauvages en Milieu Naturel',
      wildlifeEthicsText:
        'Les parcs nationaux d’Ouganda sont des écosystèmes sauvages protégés. L’observation des animaux dépend de leurs déplacements naturels et de la météo.',
      cheetahNoticeTitle: 'Précision sur les guépards en Ouganda :',
      cheetahNoticeText:
        'Contrairement aux lions et léopards, les guépards sont rares en Ouganda et présents uniquement dans la vallée reculée de Kidepo.'
    },
    destinations: {
      kicker: 'Géographie Choisie de l’Ouganda',
      title: 'Explorez l’Ouganda : La Perle de l’Afrique',
      subtitle: 'Des monts enneigés du Rwenzori aux rapides du Nil et aux forêts primaires de Bwindi.',
      allRegions: 'Tout l’Ouganda',
      showing: 'Affichage de',
      verifiedCount: 'destinations vérifiées',
      recommendedStay: 'Durée conseillée',
      overview: 'Présentation',
      modalHighlights: 'Points Forts & Activités',
      modalWildlife: 'Faune Emblématique',
      modalPractical: 'Conseils Pratiques Safari',
      planSafariTo: 'Organiser un Safari vers'
    },
    experiences: {
      kicker: 'Portefeuille de Safaris Africains',
      title: 'Choisissez Votre Aventure en Ouganda',
      subtitle: 'Partir à la rencontre des gorilles ou dompter les eaux vives du Nil : vivez des moments inoubliables.',
      tabPackages: 'Circuits Safaris Recommandés (8)',
      tabCategories: '16 Catégories d’Aventure',
      filterStyle: 'Filtrer par Style de Voyage :',
      filterDuration: 'Filtrer par Durée :',
      allStyles: 'Tous les Styles',
      anyDuration: 'Toutes Durées',
      signatureHighlights: 'Temps Forts :',
      dayByDay: 'Itinéraire Jour par Jour',
      included: 'Inclus dans ce Safari',
      excluded: 'Non Inclus / Optionnel',
      pricingGuaranteeTitle: 'Transparence Tarifaire & Disponibilités :',
      pricingGuaranteeDesc: 'Les disponibilités et permis UWA variant au quotidien, nous vous proposons un devis exact sur-mesure.',
      requestCustomQuote: 'Demander un Devis pour ce Circuit'
    },
    footer: {
      quickNav: 'Navigation Rapide',
      signatureDest: 'Destinations Emblématiques',
      ethicalStandards: 'Engagements Éthiques',
      ethicalDesc: 'Opérateur officiel respectant les permis de l’Uganda Wildlife Authority (UWA) et zéro plastique à usage unique.',
      allRightsReserved: 'Tous droits réservés. Mukono, Ouganda.',
      travelInfo: 'Infos Voyageurs',
      bookingTerms: 'Conditions & Confidentialité',
      staffPortal: 'Portail Équipe'
    },
    booking: {
      title: 'Planifiez Votre Voyage en Ouganda',
      subtitle: 'Décrivez votre safari idéal. Nos spécialistes à Mukono créeront pour vous un itinéraire sur-mesure.',
      step1: '1. Voyageurs & Dates',
      step2: '2. Destinations & Activités',
      step3: '3. Style & Logement',
      step4: '4. Coordonnées & Envoi',
      yourName: 'Nom Complet',
      emailAddress: 'Adresse Email',
      phoneNumber: 'Téléphone / WhatsApp',
      countryOfResidence: 'Pays de Résidence',
      preferredContactMethod: 'Moyen de contact préféré',
      dates: 'Dates envisagées ou mois de voyage',
      datesFlexible: 'Mes dates sont flexibles',
      durationDays: 'Durée estimée (jours)',
      adults: 'Adultes (16+)',
      children: 'Enfants (< 16)',
      selectDestinations: 'Destinations souhaitées',
      selectActivities: 'Activités et expériences souhaitées',
      travelStyle: 'Style de voyage',
      accommodationPreference: 'Type d’hébergement',
      transportPreference: 'Transport safari souhaité',
      airportPickup: 'Inclure le transfert depuis l’aéroport d’Entebbe (EBB)',
      budgetRange: 'Budget estimé par voyageur (USD)',
      specialRequests: 'Besoins particuliers ou régimes alimentaires',
      consentText: 'J’accepte que Mwanaweika Tours and Travel me contacte concernant cette demande de devis.',
      submitEnquiry: 'Envoyer ma demande de safari',
      whatsappInstant: 'Demande instantanée via WhatsApp',
      successTitle: 'Demande bien reçue !',
      successMessage: 'Notre équipe à Mukono prépare votre proposition sur-mesure sous 24 heures.',
      referenceCodeLabel: 'Votre code de référence',
      whatsappDirectNote: 'Pour une réponse immédiate, écrivez-nous directement sur WhatsApp.'
    },
    travelGuide: {
      title: 'Guide Pratique du Voyageur en Ouganda',
      subtitle: 'Conseils indispensables pour préparer sereinement votre safari.',
      visas: 'Visas & Formalités d’Entrée',
      health: 'Santé, Fièvre Jaune & Paludisme',
      currency: 'Monnaie & Moyens de Paiement',
      climate: 'Climat & Meilleures Périodes',
      packing: 'Valise & Équipements Safari',
      responsibleTourism: 'Charte du Voyageur Responsable'
    }
  },

  de: {
    brand: {
      name: 'Mwanaweika Tours and Travel',
      slogan: 'Entdecken Sie Uganda. Erleben Sie Afrika. Erinnerungen fürs Leben schaffen.',
      location: 'Mukono, Uganda'
    },
    nav: {
      home: 'Startseite',
      destinations: 'Reiseziele',
      experiences: 'Erlebnisse',
      planAndBook: 'Planen & Buchen',
      planMySafari: 'Safari Planen',
      contactUs: 'Kontakt',
      switchLanguage: 'Sprache',
      travelerGuide: 'Reiseführer',
      whatsappChat: 'WhatsApp Chat'
    },
    hero: {
      kicker: 'Die Perle Afrikas',
      headline: 'Uganda ruft. Ihr Abenteuer beginnt hier.',
      subheadline:
        'Von unvergesslichen Tierbegegnungen und nebelverhangenen Bergwäldern bis hin zum mächtigen Nil und lebendigen Kulturen – entdecken Sie Ugandas Schönheit mit Mwanaweika Tours and Travel.',
      exploreBtn: 'Uganda Entdecken',
      planBtn: 'Safari Planen',
      trustLine: 'Tierwelt · Natur · Kultur · Abenteuer · Unvergessliche Reisen'
    },
    common: {
      viewDetails: 'Erlebnis Ansehen',
      planVisit: 'Besuch Planen',
      requestQuote: 'Angebot Anfordern',
      duration: 'Dauer',
      bestSeason: 'Beste Reisezeit',
      travelerProfile: 'Ideal Für',
      highlights: 'Höhepunkte',
      close: 'Schließen',
      submit: 'Anfrage Senden',
      submitting: 'Wird gesendet...',
      loading: 'Lädt...',
      learnMore: 'Mehr Erfahren',
      all: 'Alle',
      search: 'Nach Park, Region oder Stichwort suchen...',
      filter: 'Filtern nach',
      phone: 'Telefon',
      whatsapp: 'WhatsApp',
      email: 'E-Mail',
      status: 'Status'
    },
    home: {
      welcomeBadge: 'Willkommen in Uganda',
      welcomeTitle: 'Eine authentische Begegnung mit der Perle Afrikas',
      welcomeText1:
        'Uganda beherbergt mehr als die Hälfte der weltweit verbliebenen Berggorillas, ausgedehnte Schimpansen-Refugien und die gewaltige Quelle des Nils.',
      welcomeText2:
        'Mit Sitz in Mukono verbindet Mwanaweika Tours and Travel persönliche Beratung mit tiefem Respekt vor Natur und lokaler Kultur.',
      whyUsTitle: 'Warum mit Mwanaweika reisen',
      whyUsSubtitle: 'Authentische ugandische Gastfreundschaft und kompromissloser Naturschutz.',
      reason1Title: 'Einheimische zertifizierte Guides',
      reason1Desc: 'Unsere erfahrenen Guides kennen jede Ecke Ugandas und garantieren unvergessliche Erlebnisse.',
      reason2Title: 'Verantwortungsvoller Tourismus',
      reason2Desc: 'Volle Einhaltung der UWA-Vorschriften und aktive Unterstützung lokaler Gemeinschaften.',
      reason3Title: 'Individuelle Maßanfertigung',
      reason3Desc: 'Keine Stangenware: Jede Reise wird exakt auf Ihre Wünsche und Ihr Budget abgestimmt.',
      reason4Title: 'Transparenz & Verlässlichkeit',
      reason4Desc: 'Ehrliche Angaben zu Sichtungen und Jahreszeiten, faire Preise und direkte Betreuung via WhatsApp.',
      featuredSafaris: 'Ausgewählte Safaris',
      featuredSafarisSub: 'Handverlesene Routen zwischen Tierbeobachtung, atemberaubender Natur und herzlicher Kultur.',
      destinationsPreviewTitle: 'Ugandas faszinierendste Orte',
      destinationsPreviewSub: 'Regenwälder, Savannen, tosendes Wasser und schneebedeckte Gipfel.',
      conservationTitle: 'Reisen mit Verantwortung',
      conservationText: 'Ihre Safari schützt gefährdete Berggorillas und unterstützt ugandische Schutzgebiete.',
      testimonialsTitle: 'Gästestimmen',
      testimonialsSub: 'Erfahrungen von Reisenden aus aller Welt.',
      ctaKicker: 'Beginnen Sie Ihre Afrikareise',
      ctaTitle: 'Bereit, die Perle Afrikas zu entdecken?',
      ctaSubtitle: 'Kontaktieren Sie unser Safariteam in Mukono für ein transparentes, individuelles Reiseangebot.',
      ctaWhatsApp: 'Direkt über WhatsApp schreiben',
      viewAllCircuits: 'Alle 8 Safarirouten ansehen',
      exploreAllDestinations: 'Alle 17 Reiseziele entdecken',
      wildlifeEthicsKicker: 'Naturschutz & Geografische Genauigkeit',
      wildlifeEthicsTitle: 'Echte Wildnisbegegnungen',
      wildlifeEthicsText: 'Ugandas Nationalparks sind wilde Ökosysteme. Tierbeobachtungen sind authentisch und naturbedingt.',
      cheetahNoticeTitle: 'Hinweis zu Geparden in Uganda:',
      cheetahNoticeText: 'Geparden sind in Uganda selten und nur im abgelegenen Kidepo-Tal beheimatet.'
    },
    destinations: {
      kicker: 'Ugandas Geografie im Überblick',
      title: 'Entdecken Sie Uganda: Die Perle Afrikas',
      subtitle: 'Von den schneebedeckten Rwenzori-Gipfeln bis zu den Nilfällen und den Bwindi-Urwäldern.',
      allRegions: 'Ganz Uganda',
      showing: 'Anzeige von',
      verifiedCount: 'verifizierten Reisezielen',
      recommendedStay: 'Empfohlene Reisedauer',
      overview: 'Übersicht',
      modalHighlights: 'Höhepunkte & Aktivitäten',
      modalWildlife: 'Tierwelt',
      modalPractical: 'Praktische Safari-Tipps',
      planSafariTo: 'Safari planen nach'
    },
    experiences: {
      kicker: 'Afrikanische Safari-Kollektion',
      title: 'Wählen Sie Ihr Abenteuer in Uganda',
      subtitle: 'Begegnungen mit Berggorillas oder Wildwasser auf dem Nil: unvergessliche Augenblicke erwarten Sie.',
      tabPackages: 'Ausgewählte Safaris (8)',
      tabCategories: '16 Abenteuer-Kategorien',
      filterStyle: 'Nach Reisestil filtern:',
      filterDuration: 'Nach Dauer filtern:',
      allStyles: 'Alle Reisestile',
      anyDuration: 'Jede Dauer',
      signatureHighlights: 'Besondere Höhepunkte:',
      dayByDay: 'Tagesablauf im Detail',
      included: 'Inkludierte Leistungen',
      excluded: 'Nicht inkludiert / Optional',
      pricingGuaranteeTitle: 'Transparente Preise & Verfügbarkeiten:',
      pricingGuaranteeDesc: 'Wir erstellen individuelle Angebote basierend auf Ihren exakten Wünschen und aktuellen UWA-Genehmigungen.',
      requestCustomQuote: 'Angebot für diese Tour anfordern'
    },
    footer: {
      quickNav: 'Schnellnavigation',
      signatureDest: 'Top-Reiseziele',
      ethicalStandards: 'Ethische Standards',
      ethicalDesc: 'Offizieller Reiseveranstalter mit UWA-Zulassung, ohne Einwegplastik und mit direkter Förderung lokaler Gemeinden.',
      allRightsReserved: 'Alle Rechte vorbehalten. Mukono, Uganda.',
      travelInfo: 'Reiseinfos',
      bookingTerms: 'Buchungsbedingungen & Datenschutz',
      staffPortal: 'Mitarbeiter-Portal'
    },
    booking: {
      title: 'Planen Sie Ihre Reise nach Uganda',
      subtitle: 'Teilen Sie uns Ihre Wünsche mit. Unsere Safarispezialisten in Mukono erstellen ein unverbindliches Angebot.',
      step1: '1. Reisende & Daten',
      step2: '2. Ziele & Aktivitäten',
      step3: '3. Stil & Unterkunft',
      step4: '4. Kontaktdaten & Absenden',
      yourName: 'Vollständiger Name',
      emailAddress: 'E-Mail-Adresse',
      phoneNumber: 'Telefon / WhatsApp',
      countryOfResidence: 'Wohnsitzland',
      preferredContactMethod: 'Bevorzugter Kontaktweg',
      dates: 'Reisedaten oder Wunschmonat',
      datesFlexible: 'Meine Reisedaten sind flexibel',
      durationDays: 'Voraussichtliche Reisedauer (Tage)',
      adults: 'Erwachsene (16+)',
      children: 'Kinder (< 16)',
      selectDestinations: 'Gewünschte Reiseziele',
      selectActivities: 'Gewünschte Aktivitäten',
      travelStyle: 'Reisestil',
      accommodationPreference: 'Unterkunftskategorie',
      transportPreference: 'Safari-Fahrzeug',
      airportPickup: 'Flughafentransfer Entebbe (EBB) erwünscht',
      budgetRange: 'Geschätztes Budget pro Person (USD)',
      specialRequests: 'Besondere Wünsche oder Ernährungsanforderungen',
      consentText: 'Ich willige ein, dass Mwanaweika Tours and Travel mich bezüglich dieser Reiseanfrage kontaktiert.',
      submitEnquiry: 'Reiseanfrage absenden',
      whatsappInstant: 'Sofortige WhatsApp-Anfrage',
      successTitle: 'Anfrage erfolgreich erhalten!',
      successMessage: 'Unser Team in Mukono meldet sich innerhalb von 24 Stunden mit einem maßgeschneiderten Angebot.',
      referenceCodeLabel: 'Ihr Referenzcode',
      whatsappDirectNote: 'Für schnelle Fragen erreichen Sie uns direkt auf WhatsApp.'
    },
    travelGuide: {
      title: 'Praktischer Reiseführer Uganda',
      subtitle: 'Wichtige Informationen zur optimalen Vorbereitung Ihrer Safari.',
      visas: 'Visum & Einreisebestimmungen',
      health: 'Gelbfieber, Malaria & Gesundheit',
      currency: 'Währung & Zahlungsmethoden',
      climate: 'Klima & Beste Reisezeiten',
      packing: 'Packliste für die Safari',
      responsibleTourism: 'Verhaltenskodex & Naturschutz'
    }
  },

  es: {
    brand: {
      name: 'Mwanaweika Tours and Travel',
      slogan: 'Descubre Uganda. Vive África. Crea Recuerdos para Toda la Vida.',
      location: 'Mukono, Uganda'
    },
    nav: {
      home: 'Inicio',
      destinations: 'Destinos',
      experiences: 'Experiencias',
      planAndBook: 'Planear & Reservar',
      planMySafari: 'Planear Safari',
      contactUs: 'Contacto',
      switchLanguage: 'Idioma',
      travelerGuide: 'Guía del Viajero',
      whatsappChat: 'Chat WhatsApp'
    },
    hero: {
      kicker: 'La Perla de África',
      headline: 'Uganda te llama. Tu gran aventura comienza aquí.',
      subheadline:
        'Desde encuentros inolvidables con la fauna y bosques nubosos hasta el imponente río Nilo y vibrantes culturas africanas, descubre la extraordinaria belleza de Uganda con Mwanaweika Tours and Travel.',
      exploreBtn: 'Explorar Uganda',
      planBtn: 'Planear Mi Safari',
      trustLine: 'Fauna · Naturaleza · Cultura · Aventura · Viajes Inolvidables'
    },
    common: {
      viewDetails: 'Ver Experiencia',
      planVisit: 'Planear Visita',
      requestQuote: 'Solicitar Presupuesto',
      duration: 'Duración',
      bestSeason: 'Mejor Época',
      travelerProfile: 'Ideal Para',
      highlights: 'Destacados',
      close: 'Cerrar',
      submit: 'Enviar Solicitud',
      submitting: 'Enviando...',
      loading: 'Cargando...',
      learnMore: 'Más Información',
      all: 'Todos',
      search: 'Buscar por parque, región o palabra clave...',
      filter: 'Filtrar por',
      phone: 'Teléfono',
      whatsapp: 'WhatsApp',
      email: 'Correo',
      status: 'Estado'
    },
    home: {
      welcomeBadge: 'Bienvenidos a Uganda',
      welcomeTitle: 'Un Encuentro Auténtico con la Perla de África',
      welcomeText1:
        'En el corazón de África Oriental, Uganda alberga más de la mitad de los gorilas de montaña del planeta, incontables chimpancés y las fuentes del río Nilo.',
      welcomeText2:
        'Con sede en Mukono, Mwanaweika Tours and Travel crea safaris a medida guiados por profesionales locales que protegen los ecosistemas y apoyan a las comunidades.',
      whyUsTitle: 'Por qué viajar con Mwanaweika',
      whyUsSubtitle: 'Hospitalidad ugandesa, conocimiento local y pasión por el turismo responsable.',
      reason1Title: 'Guías Locales Certificados',
      reason1Desc: 'Nacidos en Uganda, nuestros guías dominan los caminos y la vida salvaje como nadie.',
      reason2Title: 'Turismo Responsable y Ético',
      reason2Desc: 'Cumplimiento absoluto de las normas de UWA y apoyo tangible a las comunidades rurales.',
      reason3Title: 'Itinerarios Personalizados',
      reason3Desc: 'Diseñamos viajes adaptados a fotógrafos, lunas de miel, familias y viajeros solitarios.',
      reason4Title: 'Claridad y Compromiso',
      reason4Desc: 'Sin sorpresas ni gastos ocultos, con atención continua vía WhatsApp.',
      featuredSafaris: 'Safaris Destacados',
      featuredSafarisSub: 'Rutas inolvidables combinando naturaleza virgen, confort y cultura.',
      destinationsPreviewTitle: 'Destinos Emblemáticos',
      destinationsPreviewSub: 'Selvas impenetrables, sabanas doradas, cascadas y cumbres legendarias.',
      conservationTitle: 'Viaja con Responsabilidad',
      conservationText: 'Cada safari apoya la conservación del gorila de montaña y el bienestar comunitario.',
      testimonialsTitle: 'Opiniones de Viajeros',
      testimonialsSub: 'Testimonios reales de quienes vivieron la magia de Uganda con nosotros.',
      ctaKicker: 'Comienza tu Viaje Africano',
      ctaTitle: '¿Listo para Descubrir la Perla de África?',
      ctaSubtitle: 'Contáctanos hoy para recibir un itinerario personalizado y transparente.',
      ctaWhatsApp: 'Chatear en WhatsApp',
      viewAllCircuits: 'Ver los 8 Circuitos Completos',
      exploreAllDestinations: 'Explorar los 17 Destinos',
      wildlifeEthicsKicker: 'Ética y Realidad de la Fauna',
      wildlifeEthicsTitle: 'Encuentros en Hábitats Salvajes',
      wildlifeEthicsText: 'Los parques nacionales de Uganda son ecosistemas protegidos y salvajes.',
      cheetahNoticeTitle: 'Aviso sobre guepardos en Uganda:',
      cheetahNoticeText: 'Los guepardos son escasos en Uganda y sólo habitan el remoto valle de Kidepo.'
    },
    destinations: {
      kicker: 'Geografía de Uganda',
      title: 'Explora Uganda: La Perla de África',
      subtitle: 'Montañas legendarias, rápidos caudalosos y selvas milenarias.',
      allRegions: 'Toda Uganda',
      showing: 'Mostrando',
      verifiedCount: 'destinos verificados',
      recommendedStay: 'Estancia recomendada',
      overview: 'Descripción General',
      modalHighlights: 'Actividades y Destacados',
      modalWildlife: 'Fauna Salvaje',
      modalPractical: 'Consejos Prácticos',
      planSafariTo: 'Planear Safari a'
    },
    experiences: {
      kicker: 'Colección de Safaris',
      title: 'Elige tu Aventura en Uganda',
      subtitle: 'Gorilas de montaña, rafting en el Nilo y safaris inolvidables.',
      tabPackages: 'Circuitos Destacados (8)',
      tabCategories: '16 Categorías de Aventura',
      filterStyle: 'Filtrar por Estilo:',
      filterDuration: 'Filtrar por Duración:',
      allStyles: 'Todos los Estilos',
      anyDuration: 'Cualquier Duración',
      signatureHighlights: 'Lo Más Destacado:',
      dayByDay: 'Itinerario Día a Día',
      included: 'Incluido en este Safari',
      excluded: 'No Incluido / Opcional',
      pricingGuaranteeTitle: 'Transparencia en Precios:',
      pricingGuaranteeDesc: 'Diseñamos presupuestos personalizados y claros según disponibilidad de permisos de UWA.',
      requestCustomQuote: 'Pedir Presupuesto para este Safari'
    },
    footer: {
      quickNav: 'Navegación Rápida',
      signatureDest: 'Destinos Principales',
      ethicalStandards: 'Estándares Éticos',
      ethicalDesc: 'Operador registrado cumpliendo estrictamente con la Uganda Wildlife Authority.',
      allRightsReserved: 'Todos los derechos reservados. Mukono, Uganda.',
      travelInfo: 'Información Práctica',
      bookingTerms: 'Términos y Privacidad',
      staffPortal: 'Portal del Equipo'
    },
    booking: {
      title: 'Planea tu Viaje a Uganda',
      subtitle: 'Cuéntanos tu viaje soñado y prepararemos una propuesta detallada y personalizada.',
      step1: '1. Viajeros y Fechas',
      step2: '2. Destinos y Actividades',
      step3: '3. Estilo y Alojamientos',
      step4: '4. Contacto y Envío',
      yourName: 'Nombre Completo',
      emailAddress: 'Correo Electrónico',
      phoneNumber: 'Teléfono / WhatsApp',
      countryOfResidence: 'País de Residencia',
      preferredContactMethod: 'Canal de contacto preferido',
      dates: 'Fechas o mes estimado de viaje',
      datesFlexible: 'Mis fechas son flexibles',
      durationDays: 'Duración estimada (días)',
      adults: 'Adultos (16+)',
      children: 'Niños (< 16)',
      selectDestinations: 'Destinos de interés',
      selectActivities: 'Actividades preferidas',
      travelStyle: 'Estilo de viaje',
      accommodationPreference: 'Tipo de alojamiento',
      transportPreference: 'Vehículo safari',
      airportPickup: 'Incluir traslados en aeropuerto Entebbe (EBB)',
      budgetRange: 'Presupuesto estimado por viajero (USD)',
      specialRequests: 'Requerimientos dietéticos o peticiones especiales',
      consentText: 'Autorizo a Mwanaweika Tours and Travel a contactarme para gestionar mi solicitud.',
      submitEnquiry: 'Enviar solicitud de safari',
      whatsappInstant: 'Solicitar por WhatsApp',
      successTitle: '¡Solicitud recibida con éxito!',
      successMessage: 'Nuestro equipo en Mukono preparará su propuesta personalizada en menos de 24 horas.',
      referenceCodeLabel: 'Su código de referencia',
      whatsappDirectNote: '¿Prefiere una respuesta inmediata? Escríbanos a WhatsApp con su código.'
    },
    travelGuide: {
      title: 'Guía Práctica del Viajero',
      subtitle: 'Consejos esenciales para organizar su safari en Uganda.',
      visas: 'Requisitos de Visado y Pasaporte',
      health: 'Salud, Fiebre Amarilla y Malaria',
      currency: 'Moneda y Pagos',
      climate: 'Clima y Mejores Épocas',
      packing: 'Qué llevar en la maleta',
      responsibleTourism: 'Código de Conducta y Conservación'
    }
  },

  it: {
    brand: {
      name: 'Mwanaweika Tours and Travel',
      slogan: 'Scopri l’Uganda. Vivi l’Africa. Crea ricordi per tutta la vita.',
      location: 'Mukono, Uganda'
    },
    nav: {
      home: 'Pagina iniziale',
      destinations: 'Destinazioni',
      experiences: 'Esperienze',
      planAndBook: 'Pianifica & Prenota',
      planMySafari: 'Pianifica Safari',
      contactUs: 'Contattaci',
      switchLanguage: 'Lingua',
      travelerGuide: 'Guida Viaggiatore',
      whatsappChat: 'Chat WhatsApp'
    },
    hero: {
      kicker: 'La Perla d’Africa',
      headline: 'L’Uganda ti chiama. La tua avventura inizia qui.',
      subheadline:
        'Da straordinari incontri con la fauna e foreste nebbiose fino al Nilo e alle ricche culture locali, vivi l’Uganda autentica con Mwanaweika Tours and Travel.',
      exploreBtn: 'Esplora l’Uganda',
      planBtn: 'Pianifica Safari',
      trustLine: 'Fauna · Natura · Cultura · Avventura · Viaggi Straordinari'
    },
    common: {
      viewDetails: 'Vedi Esperienza',
      planVisit: 'Pianifica Visita',
      requestQuote: 'Richiedi Preventivo',
      duration: 'Durata',
      bestSeason: 'Miglior Periodo',
      travelerProfile: 'Ideale Per',
      highlights: 'Punti Salienti',
      close: 'Chiudi',
      submit: 'Invia Richiesta',
      submitting: 'Invio in corso...',
      loading: 'Caricamento...',
      learnMore: 'Scopri di Più',
      all: 'Tutto',
      search: 'Cerca per parco o regione...',
      filter: 'Filtra per',
      phone: 'Telefono',
      whatsapp: 'WhatsApp',
      email: 'Email',
      status: 'Stato'
    },
    home: {
      welcomeBadge: 'Benvenuti in Uganda',
      welcomeTitle: 'Un incontro autentico con la Perla d’Africa',
      welcomeText1: 'Oltre la metà dei gorilla di montagna del pianeta vive in Uganda, tra foreste incontaminate e fiumi maestosi.',
      welcomeText2: 'Mwanaweika Tours and Travel a Mukono progetta viaggi su misura con guide locali esperte e massimo rispetto dell’ambiente.',
      whyUsTitle: 'Perché scegliere Mwanaweika',
      whyUsSubtitle: 'Passione, autenticità e professionalità per un viaggio indimenticabile.',
      reason1Title: 'Guide Locali Esperte',
      reason1Desc: 'Conoscenza profonda del territorio e massima sicurezza.',
      reason2Title: 'Turismo Etico e Sostenibile',
      reason2Desc: 'Salvaguardia della fauna selvatica e sostegno alle comunità locali.',
      reason3Title: 'Itinerari Personalizzati',
      reason3Desc: 'Viaggi creati su misura per coppie, famiglie e fotografi.',
      reason4Title: 'Trasparenza Totale',
      reason4Desc: 'Nessun costo nascosto e assistenza costante su WhatsApp.',
      featuredSafaris: 'I Nostri Safari in Evidenza',
      featuredSafarisSub: 'Itinerari curati nei minimi dettagli tra natura e avventura.',
      destinationsPreviewTitle: 'Destinazioni Principali',
      destinationsPreviewSub: 'Dalle foreste di Bwindi alle cascate Murchison.',
      conservationTitle: 'Viaggia Responsabilmente',
      conservationText: 'Ogni viaggio contribuisce direttamente alla conservazione della biodiversità.',
      testimonialsTitle: 'Dicono di Noi',
      testimonialsSub: 'Le parole dei viaggiatori che hanno esplorato l’Uganda con noi.',
      ctaKicker: 'Inizia il Tuo Viaggio in Africa',
      ctaTitle: 'Pronto a Scoprire la Perla d’Africa?',
      ctaSubtitle: 'Contatta il nostro team di Mukono per ricevere un itinerario su misura e trasparente.',
      ctaWhatsApp: 'Scrivici su WhatsApp',
      viewAllCircuits: 'Vedi gli 8 Safari Completi',
      exploreAllDestinations: 'Esplora le 17 Destinazioni',
      wildlifeEthicsKicker: 'Etica e Tutela della Fauna',
      wildlifeEthicsTitle: 'Incontri nel Loro Habitat Naturale',
      wildlifeEthicsText: 'I parchi nazionali dell’Uganda sono ecosistemi protetti e incontaminati.',
      cheetahNoticeTitle: 'Nota sui ghepardi in Uganda:',
      cheetahNoticeText: 'I ghepardi sono rari e avvistabili solo nella remota valle di Kidepo.'
    },
    destinations: {
      kicker: 'Geografia dell’Uganda',
      title: 'Esplora l’Uganda: La Perla d’Africa',
      subtitle: 'Dalle vette innevate del Rwenzori alle cascate del Nilo e alle foreste di Bwindi.',
      allRegions: 'Tutta l’Uganda',
      showing: 'Mostrando',
      verifiedCount: 'destinazioni verificate',
      recommendedStay: 'Soggiorno consigliato',
      overview: 'Panoramica',
      modalHighlights: 'Attività e Punti Salienti',
      modalWildlife: 'Fauna Selvatica',
      modalPractical: 'Consigli Pratici',
      planSafariTo: 'Pianifica un Safari per'
    },
    experiences: {
      kicker: 'Catalogo Safari Africani',
      title: 'Scegli la Tua Avventura in Uganda',
      subtitle: 'Gorilla di montagna, rafting sul Nilo e safari memorabili.',
      tabPackages: 'Safari Consigliati (8)',
      tabCategories: '16 Categorie di Avventura',
      filterStyle: 'Filtra per Stile di Viaggio:',
      filterDuration: 'Filtra per Durata:',
      allStyles: 'Tutti gli Stili',
      anyDuration: 'Qualsiasi Durata',
      signatureHighlights: 'Punti di Forza:',
      dayByDay: 'Itinerario Giorno per Giorno',
      included: 'Incluso nel Safari',
      excluded: 'Non Incluso / Facoltativo',
      pricingGuaranteeTitle: 'Trasparenza Prezzi:',
      pricingGuaranteeDesc: 'Creiamo preventivi precisi in base alle disponibilità ufficiali dei permessi UWA.',
      requestCustomQuote: 'Richiedi Preventivo per questo Tour'
    },
    footer: {
      quickNav: 'Navigazione',
      signatureDest: 'Destinazioni Iconiche',
      ethicalStandards: 'Standard Etici',
      ethicalDesc: 'Operatore registrato in piena conformità con l’Uganda Wildlife Authority.',
      allRightsReserved: 'Tutti i diritti riservati. Mukono, Uganda.',
      travelInfo: 'Informazioni Utili',
      bookingTerms: 'Termini e Privacy',
      staffPortal: 'Portale Staff'
    },
    booking: {
      title: 'Organizza il Tuo Viaggio in Uganda',
      subtitle: 'Compila il modulo per ricevere un itinerario personalizzato e trasparente.',
      step1: '1. Viaggiatori e Date',
      step2: '2. Destinazioni e Attività',
      step3: '3. Stile e Alloggi',
      step4: '4. Contatti e Invio',
      yourName: 'Nome Completo',
      emailAddress: 'Indirizzo Email',
      phoneNumber: 'Telefono / WhatsApp',
      countryOfResidence: 'Paese di Residenza',
      preferredContactMethod: 'Metodo di contatto preferito',
      dates: 'Date o mese indicativo',
      datesFlexible: 'Date flessibili',
      durationDays: 'Durata prevista (giorni)',
      adults: 'Adulti (16+)',
      children: 'Bambini (< 16)',
      selectDestinations: 'Destinazioni desiderate',
      selectActivities: 'Attività desiderate',
      travelStyle: 'Stile di viaggio',
      accommodationPreference: 'Tipologia alloggio',
      transportPreference: 'Mezzo di trasporto',
      airportPickup: 'Transfer aeroporto Entebbe (EBB)',
      budgetRange: 'Budget indicativo a persona (USD)',
      specialRequests: 'Richieste particolari o esigenze alimentari',
      consentText: 'Acconsento al trattamento dei dati per la gestione di questa richiesta.',
      submitEnquiry: 'Invia richiesta safari',
      whatsappInstant: 'Richiedi subito via WhatsApp',
      successTitle: 'Richiesta ricevuta!',
      successMessage: 'Il nostro team a Mukono ti risponderà entro 24 ore.',
      referenceCodeLabel: 'Codice di riferimento',
      whatsappDirectNote: 'Puoi anche scriverci direttamente su WhatsApp indicando il tuo codice.'
    },
    travelGuide: {
      title: 'Guida Pratica per l’Uganda',
      subtitle: 'Tutto ciò che serve sapere per preparare al meglio la tua partenza.',
      visas: 'Passaporto e Visto',
      health: 'Salute e Febbre Gialla',
      currency: 'Valuta e Pagamenti',
      climate: 'Clima e Stagioni',
      packing: 'Cosa Mettere in Valigia',
      responsibleTourism: 'Codice Etico e Conservazione'
    }
  },

  zh: {
    brand: {
      name: 'Mwanaweika Tours and Travel',
      slogan: '探索乌干达 · 体验非洲 · 缔造一生难忘的回忆',
      location: '乌干达 · 穆科诺 (Mukono)'
    },
    nav: {
      home: '首页',
      destinations: '精选目的地',
      experiences: '探险体验',
      planAndBook: '定制行程与预订',
      planMySafari: '定制我的游猎',
      contactUs: '联系我们',
      switchLanguage: '语言',
      travelerGuide: '旅行指南',
      whatsappChat: 'WhatsApp 咨询'
    },
    hero: {
      kicker: '非洲明珠 · 乌干达',
      headline: '乌干达在呼唤。属于您的奇幻探险从此启程。',
      subheadline:
        '从布温迪云雾森林中的珍稀山地大猩猩，到波澜壮阔的尼罗河源头与充满活力的非洲原生态文化，与 Mwanaweika Tours and Travel 一同领略乌干达超凡脱俗的自然美景。',
      exploreBtn: '探索乌干达',
      planBtn: '规划专属游猎',
      trustLine: '野生动物 · 原始自然 · 部落文化 · 奇幻冒险 · 终身难忘'
    },
    common: {
      viewDetails: '查看详情',
      planVisit: '规划访问',
      requestQuote: '索取专属报价',
      duration: '行程天数',
      bestSeason: '最佳季节',
      travelerProfile: '适宜人群',
      highlights: '精彩亮点',
      close: '关闭',
      submit: '提交定制需求',
      submitting: '正在提交...',
      loading: '正在加载...',
      learnMore: '了解更多',
      all: '全部',
      search: '按公园、地区或关键字搜索...',
      filter: '筛选',
      phone: '电话',
      whatsapp: 'WhatsApp',
      email: '电子邮箱',
      status: '状态'
    },
    home: {
      welcomeBadge: '欢迎来到乌干达',
      welcomeTitle: '真正深入非洲明珠的非凡旅程',
      welcomeText1:
        '坐落于东非核心地带，乌干达拥有全球半数以上的野生山地大猩猩、繁茂的黑猩猩栖息地、壮丽的默奇森瀑布与赤道雪山。',
      welcomeText2:
        'Mwanaweika Tours and Travel 总部位于乌干达穆科诺，由本土持证资深向导团队亲自打造，坚持保护野生动物家园并支持当地社区繁荣。',
      whyUsTitle: '为什么选择 Mwanaweika',
      whyUsSubtitle: '纯正的当地经验、合规合法的生态操作与无微不至的国际旅行服务。',
      reason1Title: '本土持证专业向导',
      reason1Desc: '在乌干达土生土长，通晓国家公园野生动物迁徙规律与私密观景点。',
      reason2Title: '负责任的生态旅游',
      reason2Desc: '严格遵循乌干达野生动物管理局 (UWA) 规定，将收益回馈生态保护与当地社区。',
      reason3Title: '量身定制专属路线',
      reason3Desc: '根据摄影师、家庭度假、蜜月情侣和探险家需求量身策划。',
      reason4Title: '透明真诚无隐藏费用',
      reason4Desc: '客观告知动物观察实际情况与最佳季节，全程 WhatsApp 及电话直通无忧。',
      featuredSafaris: '推荐游猎线路',
      featuredSafarisSub: '精心平衡动物追寻、自然奇观与高端生态野奢营地体验。',
      destinationsPreviewTitle: '经典乌干达目的地',
      destinationsPreviewSub: '布温迪不可穿越国家公园、伊丽莎白女王国家公园、默奇森瀑布等。',
      conservationTitle: '负责任旅行 · 守护生态明珠',
      conservationText: '每一次探险都严格尊重野生动物间距，共同守护濒危物种。',
      testimonialsTitle: '真实旅客心声',
      testimonialsSub: '来自全球旅行者的真实游猎体验分享。',
      ctaKicker: '开启您的非洲之旅',
      ctaTitle: '准备好探索非洲明珠了吗？',
      ctaSubtitle: '立即联系我们在穆科诺的游猎团队，我们将为您出具透明且详尽的定制方案。',
      ctaWhatsApp: '通过 WhatsApp 沟通',
      viewAllCircuits: '查看全部 8 条线路',
      exploreAllDestinations: '探索全部 17 个目的地',
      wildlifeEthicsKicker: '野生动物生态伦理',
      wildlifeEthicsTitle: '荒野自然中的真实偶遇',
      wildlifeEthicsText: '乌干达国家公园均为纯原生态保护区，动物观察遵循自然法则。',
      cheetahNoticeTitle: '关于乌干达猎豹的重要说明：',
      cheetahNoticeText: '猎豹在乌干达极为少见，仅分布于偏远的北部基德波山谷。'
    },
    destinations: {
      kicker: '乌干达精选地理版图',
      title: '探索乌干达：非洲明珠',
      subtitle: '从鲁文佐里雪山到尼罗河瀑布与布温迪原始云雾雨林。',
      allRegions: '全乌干达',
      showing: '当前展示',
      verifiedCount: '个认证目的地',
      recommendedStay: '建议游览时间',
      overview: '概览介绍',
      modalHighlights: '特色亮点与体验',
      modalWildlife: '珍稀野生动物',
      modalPractical: '出行实用建议',
      planSafariTo: '定制前往以下目的地的行程：'
    },
    experiences: {
      kicker: '非洲游猎作品集',
      title: '选择属于您的乌干达探险',
      subtitle: '无论是追踪山地大猩猩还是尼罗河白水漂流，精彩体验应有尽有。',
      tabPackages: '精选游猎套餐 (8)',
      tabCategories: '16 大探险分类',
      filterStyle: '按出行风格筛选：',
      filterDuration: '按天数筛选：',
      allStyles: '全部风格',
      anyDuration: '任意天数',
      signatureHighlights: '核心特色亮点：',
      dayByDay: '逐日行程概览',
      included: '费用包含',
      excluded: '费用不含 / 自选项目',
      pricingGuaranteeTitle: '诚实透明报价保障：',
      pricingGuaranteeDesc: '因国家公园许可证及野奢营地房态实时变动，我们根据您的精确需求提供量身报价。',
      requestCustomQuote: '索取此路线专属报价'
    },
    footer: {
      quickNav: '快速导航',
      signatureDest: '代表性目的地',
      ethicalStandards: '生态与合规标准',
      ethicalDesc: '严格遵循乌干达野生动物管理局 (UWA) 规定，杜绝一次性塑料，全力扶持当地社区。',
      allRightsReserved: '版权所有 · 乌干达穆科诺。',
      travelInfo: '实用旅行信息',
      bookingTerms: '预订条款与隐私',
      staffPortal: '工作人员通道'
    },
    booking: {
      title: '定制您的乌干达游猎之旅',
      subtitle: '告诉我们您的旅行梦想与期望，我们在穆科诺的旅行规划师将为您量身定制透明详细的行程方案。',
      step1: '1. 出行人数与日期',
      step2: '2. 意向目的地与体验',
      step3: '3. 旅行风格与住宿偏好',
      step4: '4. 联系信息与提交',
      yourName: '您的姓名',
      emailAddress: '电子邮箱',
      phoneNumber: '电话 / WhatsApp',
      countryOfResidence: '常住国家/地区',
      preferredContactMethod: '首选沟通方式',
      dates: '预计出行日期或月份',
      datesFlexible: '出行日期可灵活调整',
      durationDays: '预计游览天数',
      adults: '成人 (16岁以上)',
      children: '儿童 (16岁以下)',
      selectDestinations: '选择意向目的地',
      selectActivities: '选择意向活动与体验',
      travelStyle: '偏好旅行风格',
      accommodationPreference: '住宿偏好标准',
      transportPreference: '游猎用车需求',
      airportPickup: '需要恩德培国际机场 (EBB) 接送',
      budgetRange: '每人预计预算 (美元 USD)',
      specialRequests: '特殊偏好、体能情况或餐饮禁忌',
      consentText: '我同意 Mwanaweika Tours and Travel 就此行程咨询与我取得联系。',
      submitEnquiry: '提交我的游猎需求',
      whatsappInstant: '通过 WhatsApp 快速咨询',
      successTitle: '需求已成功收到！',
      successMessage: '我们的穆科诺游猎专家将在24小时内为您出具专属方案。',
      referenceCodeLabel: '您的专属咨询代码',
      whatsappDirectNote: '如需更迅速回复，可携带此代码直接在 WhatsApp 上联系我们。'
    },
    travelGuide: {
      title: '乌干达旅行实用指南',
      subtitle: '权威实用的行前准备指南，助您从容踏上非洲游猎之旅。',
      visas: '护照与电子签证要求',
      health: '健康免疫、黄热病与防疟',
      currency: '乌干达先令与外币现金',
      climate: '气候特点与最佳季节',
      packing: '游猎必备行李与着装建议',
      responsibleTourism: '负责任旅行守则与生态伦理'
    }
  },

  ar: {
    brand: {
      name: 'مواناويكا للسياحة والسفر',
      slogan: 'اكتشف أوغندا. عش تجربة إفريقيا. اصنع ذكريات تدوم مدى الحياة.',
      location: 'موكونو، أوغندا'
    },
    nav: {
      home: 'الرئيسية',
      destinations: 'الوجهات',
      experiences: 'التجارب',
      planAndBook: 'التخطيط والحجز',
      planMySafari: 'خطط لرحلتك',
      contactUs: 'اتصل بنا',
      switchLanguage: 'اللغة',
      travelerGuide: 'دليل المسافر',
      whatsappChat: 'محادثة واتساب'
    },
    hero: {
      kicker: 'لؤلؤة إفريقيا',
      headline: 'أوغندا تناديكم. مغامرتكم الكبرى تبدأ هنا.',
      subheadline:
        'من اللقاءات الفريدة مع الغوريلا الجبلية والغابات الاستوائية الساحرة إلى شلالات نهر النيل الهادرة وثقافات إفريقيا العريقة، اكتشفوا جمال أوغندا مع مواناويكا للسياحة والسفر.',
      exploreBtn: 'استكشف أوغندا',
      planBtn: 'خطط لرحلة السفاري',
      trustLine: 'حياة برية · طبيعة بكر · ثقافة أصيلة · مغامرات · ذكريات خالدة'
    },
    common: {
      viewDetails: 'عرض التجربة',
      planVisit: 'تخطيط الزيارة',
      requestQuote: 'طلب عرض سعر',
      duration: 'المدة',
      bestSeason: 'أفضل موسم',
      travelerProfile: 'مثالي لـ',
      highlights: 'أبرز المعالم',
      close: 'إغلاق',
      submit: 'إرسال الطلب',
      submitting: 'جاري الإرسال...',
      loading: 'جاري التحميل...',
      learnMore: 'المزيد',
      all: 'الكل',
      search: 'بحث بالمتنزه أو المنطقة أو النشاط...',
      filter: 'تصفية حسب',
      phone: 'الهاتف',
      whatsapp: 'واتساب',
      email: 'البريد الإلكتروني',
      status: 'الحالة'
    },
    home: {
      welcomeBadge: 'مرحبًا بكم في أوغندا',
      welcomeTitle: 'لقاء أصيل مع لؤلؤة إفريقيا',
      welcomeText1: 'تحتضن أوغندا أكثر من نصف غوريلا الجبال المتبقية في العالم، إلى جانب غابات الشمبانزي الكثيفة ومنبع نهر النيل العظيم.',
      welcomeText2: 'يقع مقرنا في موكونو بأوغندا، ونقدم رحلات سفاري فاخرة ومصممة خصيصاً على أيدي مرشدين محليين معتمدين.',
      whyUsTitle: 'لماذا تختار مواناويكا للسفر',
      whyUsSubtitle: 'خبرة محلية حقيقية، كرم ضيافة أوغندي أصيل، والتزام راسخ بحماية الحياة البرية.',
      reason1Title: 'مرشدون محليون معتمدون',
      reason1Desc: 'خبرة عميقة بمسارات المتنزهات الوطنية وسلوكيات الحيوانات.',
      reason2Title: 'سياحة مسؤولة ومستدامة',
      reason2Desc: 'التزام تام بإرشادات هيئة الحياة البرية الأوغندية ودعم المجتمعات المحلية.',
      reason3Title: 'رحلات مفصلة حسب رغبتكم',
      reason3Desc: 'برامج خاصة تناسب العائلات، عشاق التصوير، ورحلات شهر العسل.',
      reason4Title: 'شفافية ومصداقية تامة',
      reason4Desc: 'أسعار واضحة وتواصل مباشر مستمر عبر واتساب والهاتف.',
      featuredSafaris: 'رحلات السفاري المختارة',
      featuredSafarisSub: 'برامج متكاملة تجمع بين متعة مشاهدة الحيوانات وروعة المناظر الطبيعية.',
      destinationsPreviewTitle: 'وجهات أوغندا الشهيرة',
      destinationsPreviewSub: 'غابات بويندي، متنزه الملكة إليزابيث، شلالات مورشيسون وجبال رونزوري.',
      conservationTitle: 'سافر بوعي ومسؤولية',
      conservationText: 'كل رحلة تنظمها مواناويكا تسهم مباشرة في حماية البيئة ودعم المجتمعات المحلية.',
      testimonialsTitle: 'آراء المسافرين',
      testimonialsSub: 'تجارب حقيقية لمسافرين من شتى أنحاء العالم استكشفوا أوغندا برفقتنا.',
      ctaKicker: 'ابدأ رحلتك الإفريقية',
      ctaTitle: 'هل أنت مستعد لاكتشاف لؤلؤة إفريقيا؟',
      ctaSubtitle: 'تواصل مع فريقنا في موكونو اليوم لإعداد برنامج خاص وعرض سعر شفاف.',
      ctaWhatsApp: 'تواصل عبر واتساب',
      viewAllCircuits: 'عرض جميع مسارات السفاري (8)',
      exploreAllDestinations: 'استكشف الوجهات الـ 17',
      wildlifeEthicsKicker: 'أخلاقيات الحياة البرية',
      wildlifeEthicsTitle: 'لقاءات حقيقية في بيئات بكر',
      wildlifeEthicsText: 'متنزهات أوغندا بيئات برية محمية طبيعياً.',
      cheetahNoticeTitle: 'تنويه بشأن الفهود في أوغندا:',
      cheetahNoticeText: 'الفهود نادرة في أوغندا وتوجد فقط في وادي كيديبو الشمالي.'
    },
    destinations: {
      kicker: 'جغرافيا أوغندا الساحرة',
      title: 'استكشف أوغندا: لؤلؤة إفريقيا',
      subtitle: 'من قمم جبال رونزوري الجليدية إلى شلالات النيل وغابات بويندي.',
      allRegions: 'جميع أقاليم أوغندا',
      showing: 'عرض',
      verifiedCount: 'وجهة معتمدة',
      recommendedStay: 'المدة المقترحة',
      overview: 'نظرة عامة',
      modalHighlights: 'أبرز الأنشطة والمعالم',
      modalWildlife: 'الحياة البرية',
      modalPractical: 'نصائح عملية للسفاري',
      planSafariTo: 'تخطيط رحلة سفاري إلى'
    },
    experiences: {
      kicker: 'باقة تجارب السفاري',
      title: 'اختر مغامرتك في أوغندا',
      subtitle: 'من تتبع الغوريلا إلى ركوب أمواج النيل الأبيض.',
      tabPackages: 'رحلات السفاري المختارة (8)',
      tabCategories: '16 فئة مغامرة',
      filterStyle: 'تصفية حسب نمط الرحلة:',
      filterDuration: 'تصفية حسب المدة:',
      allStyles: 'كافة الأنماط',
      anyDuration: 'أي مدة',
      signatureHighlights: 'أبرز المزايا:',
      dayByDay: 'البرنامج يوماً بيوم',
      included: 'مشمول في الرحلة',
      excluded: 'غير مشمول / اختياري',
      pricingGuaranteeTitle: 'ضمان الشفافية والأسعار:',
      pricingGuaranteeDesc: 'نقدم عروض أسعار حقيقية ومفصلة تتوافق مع التوافر الفعلي لتصاريح UWA.',
      requestCustomQuote: 'طلب عرض سعر لهذه الرحلة'
    },
    footer: {
      quickNav: 'روابط سريعة',
      signatureDest: 'أشهر الوجهات',
      ethicalStandards: 'المعايير البيئية والأخلاقية',
      ethicalDesc: 'مشغل مرخص ملتزم تماماً بقوانين هيئة الحياة البرية الأوغندية وخالٍ من البلاستيك.',
      allRightsReserved: 'جميع الحقوق محفوظة. موكونو، أوغندا.',
      travelInfo: 'معلومات السفر',
      bookingTerms: 'الشروط والخصوصية',
      staffPortal: 'بوابة الموظفين'
    },
    booking: {
      title: 'خطط لرحلتك الاستثنائية في أوغندا',
      subtitle: 'أخبرنا عن تطلعاتك وسيقوم خبراؤنا في موكونو بإعداد برنامج مخصص وعرض سعر شفاف.',
      step1: '1. عدد المسافرين والتواريخ',
      step2: '2. الوجهات والتجارب',
      step3: '3. نمط الرحلة والإقامة',
      step4: '4. بيانات التواصل والإرسال',
      yourName: 'الاسم الكامل',
      emailAddress: 'البريد الإلكتروني',
      phoneNumber: 'رقم الهاتف / واتساب',
      countryOfResidence: 'بلد الإقامة',
      preferredContactMethod: 'طريقة التواصل المفضلة',
      dates: 'التواريخ المستهدفة أو الشهر',
      datesFlexible: 'تواريخ الرحلة مرنة',
      durationDays: 'المدة المقدرة (بالأيام)',
      adults: 'البالغون (16+)',
      children: 'الأطفال (أقل من 16)',
      selectDestinations: 'الوجهات المفضلة',
      selectActivities: 'الأنشطة المرغوبة',
      travelStyle: 'نمط الرحلة',
      accommodationPreference: 'فئة الإقامة',
      transportPreference: 'مركبة السفاري',
      airportPickup: 'خدمة الاستقبال والتوديع في مطار عنتيبي (EBB)',
      budgetRange: 'الميزانية التقديرية للشخص (دولار أمريكي)',
      specialRequests: 'طلبات خاصة، حمية غذائية أو اعتبارات صحية',
      consentText: 'أوافق على قيام شركة مواناويكا بالتواصل معي بخصوص هذا الطلب مع الحفاظ التام على خصوصيتي.',
      submitEnquiry: 'إرسال طلب السفاري',
      whatsappInstant: 'تواصل فوري عبر واتساب',
      successTitle: 'تم استلام طلبكم بنجاح!',
      successMessage: 'يقوم فريقنا بمراجعة تفاصيل رحلتكم وسنوافيكم بالعرض المفصل خلال 24 ساعة.',
      referenceCodeLabel: 'رمز الحجز الخاص بكم',
      whatsappDirectNote: 'للحصول على استجابة فورية، يمكنكم مراسلتنا مباشرة على واتساب متضمنين رمزكم.'
    },
    travelGuide: {
      title: 'دليل المسافر إلى أوغندا',
      subtitle: 'معلومات رسمية وعملية تساعدكم على الاستعداد الأمثل لرحلتكم.',
      visas: 'التأشيرات وجوازات السفر',
      health: 'الصحة، الحمى الصفراء والملاريا',
      currency: 'العملة وطرق الدفع',
      climate: 'الطقس وأفضل أوقات السفر',
      packing: 'نصائح تجهيز الحقائب',
      responsibleTourism: 'آداب الزيارة والسياحة المسؤولة'
    }
  },

  sw: {
    brand: {
      name: 'Mwanaweika Tours and Travel',
      slogan: 'Gundua Uganda. Pata Uzoefu wa Afrika. Tengeneza Kumbukumbu za Maisha.',
      location: 'Mukono, Uganda'
    },
    nav: {
      home: 'Mwanzo',
      destinations: 'Maeneo',
      experiences: 'Uzoefu & Ziara',
      planAndBook: 'Panga & Weka Nafasi',
      planMySafari: 'Panga Safari Yangu',
      contactUs: 'Wasiliana Nasi',
      switchLanguage: 'Lugha',
      travelerGuide: 'Mwongozo wa Msafiri',
      whatsappChat: 'Mazungumzo ya WhatsApp'
    },
    hero: {
      kicker: 'Lulu ya Afrika',
      headline: 'Uganda Inakuita. Safari Yako Inaanzia Hapa.',
      subheadline:
        'Kutoka kwa wanyamapori wa kuvutia na misitu ya milimani ya ukungu hadi Mto Nile na mila za kipekee za Kiafrika, gundua uzuri wa Uganda pamoja na Mwanaweika Tours and Travel.',
      exploreBtn: 'Gundua Uganda',
      planBtn: 'Panga Safari Yangu',
      trustLine: 'Wanyamapori · Asili · Utamaduni · Vituko · Kumbukumbu Isiyosahaulika'
    },
    common: {
      viewDetails: 'Angalia Zaidi',
      planVisit: 'Panga Kutembelea',
      requestQuote: 'Omba Makadirio',
      duration: 'Muda',
      bestSeason: 'Msimu Bora',
      travelerProfile: 'Inafaa Kwa',
      highlights: 'Vivutio Vikuu',
      close: 'Funga',
      submit: 'Tuma Maombi',
      submitting: 'Inatuma...',
      loading: 'Inapakia...',
      learnMore: 'Fahamu Zaidi',
      all: 'Yote',
      search: 'Tafuta mbuga au eneo...',
      filter: 'Chuja kwa',
      phone: 'Simu',
      whatsapp: 'WhatsApp',
      email: 'Barua Pepe',
      status: 'Hali'
    },
    home: {
      welcomeBadge: 'Karibu Uganda',
      welcomeTitle: 'Uzoefu Halisi wa Lulu ya Afrika',
      welcomeText1:
        'Uganda inahifadhi zaidi ya nusu ya sokwe wa milimani duniani, misitu mikubwa ya sokwe-mtu, na chanzo cha Mto Nile.',
      welcomeText2:
        'Tukiwa na makao makuu Mukono, Uganda, tunapanga safari za kiwango cha juu zikiongozwa na waongoza watalii wazawa wenye ujuzi mkubwa na upendo wa mazingira.',
      whyUsTitle: 'Kwa Nini Usafiri na Mwanaweika',
      whyUsSubtitle: 'Uzoefu thabiti wa ndani, ukarimu wa dhati na utunzaji wa mazingira.',
      reason1Title: 'Waongoza Watalii Wenye Uzoefu',
      reason1Desc: 'Wazaliwa wa Uganda wanaojua kila kona ya mbuga zetu.',
      reason2Title: 'Utalii Wenye Maadili',
      reason2Desc: 'Kuzingatia sheria za Shirika la Wanyamapori la Uganda (UWA) na kuinua jamii zetu.',
      reason3Title: 'Safari Zilizopangwa Kwako',
      reason3Desc: 'Mipango ya kipekee kwa familia, wanandoa na wapiga picha.',
      reason4Title: 'Uwazi na Uaminifu',
      reason4Desc: 'Bei wazi bila malipo yaliyofichika na mawasiliano ya moja kwa moja.',
      featuredSafaris: 'Safari Zetu Bora',
      featuredSafarisSub: 'Ratiba zilizoundwa kwa ustadi zikichanganya wanyama na mandhari nzuri.',
      destinationsPreviewTitle: 'Maeneo Maarufu ya Uganda',
      destinationsPreviewSub: 'Bwindi, Queen Elizabeth, Murchison Falls na Milima ya Rwenzori.',
      conservationTitle: 'Safiri kwa Wajibu',
      conservationText: 'Kila safari inasaidia uhifadhi wa wanyamapori na kuwainua wananchi.',
      testimonialsTitle: 'Maoni ya Wasafiri',
      testimonialsSub: 'Uzoefu halisi kutoka kwa wageni waliotembelea Uganda nasi.',
      ctaKicker: 'Anza Safari Yako ya Afrika',
      ctaTitle: 'Uko Tayari Kugundua Lulu ya Afrika?',
      ctaSubtitle: 'Wasiliana na timu yetu Mukono leo upate ratiba na makadirio ya wazi.',
      ctaWhatsApp: 'Wasiliana kwa WhatsApp',
      viewAllCircuits: 'Tazama Safari Zote 8',
      exploreAllDestinations: 'Gundua Maeneo Yote 17',
      wildlifeEthicsKicker: 'Maadili ya Wanyamapori',
      wildlifeEthicsTitle: 'Mikutano ya Kweli Katika Asili',
      wildlifeEthicsText: 'Mbuga za wanyama za Uganda ni mifumo halisi ya asili iliyolindwa.',
      cheetahNoticeTitle: 'Kuhusu Duma nchini Uganda:',
      cheetahNoticeText: 'Duma ni adimu sana Uganda na wanapatikana tu katika Bonde la Kidepo.'
    },
    destinations: {
      kicker: 'Jiografia ya Uganda',
      title: 'Gundua Uganda: Lulu ya Afrika',
      subtitle: 'Kuanzia vilele vya milima ya theluji ya Rwenzori hadi maporomoko ya Nile na misitu ya Bwindi.',
      allRegions: 'Uganda Yote',
      showing: 'Inaonyesha',
      verifiedCount: 'maeneo yaliyothibitishwa',
      recommendedStay: 'Muda uliopendekezwa',
      overview: 'Maelezo ya Jumla',
      modalHighlights: 'Vivutio na Shughuli',
      modalWildlife: 'Wanyamapori',
      modalPractical: 'Ushauri wa Kitalii',
      planSafariTo: 'Panga Safari ya kwenda'
    },
    experiences: {
      kicker: 'Mkusanyiko wa Safari za Afrika',
      title: 'Chagua Vituko Vyako nchini Uganda',
      subtitle: 'Kutoka kuona sokwe wa milimani hadi michezo ya maji Mto Nile.',
      tabPackages: 'Safari Zilizopangwa (8)',
      tabCategories: 'Aina 16 za Vituko',
      filterStyle: 'Chuja kwa Mtindo:',
      filterDuration: 'Chuja kwa Muda:',
      allStyles: 'Mitindo Yote',
      anyDuration: 'Muda Wowote',
      signatureHighlights: 'Vivutio Maalum:',
      dayByDay: 'Ratiba ya Siku kwa Siku',
      included: 'Vilivyojumuishwa',
      excluded: 'Havijajumuishwa / Hiari',
      pricingGuaranteeTitle: 'Uhakika wa Bei na Nafasi:',
      pricingGuaranteeDesc: 'Tunakuandalia bei halisi kulingana na vibali vya UWA.',
      requestCustomQuote: 'Omba Makadirio ya Ziara Hii'
    },
    footer: {
      quickNav: 'Viungo vya Haraka',
      signatureDest: 'Maeneo Maarufu',
      ethicalStandards: 'Viwango vya Maadili',
      ethicalDesc: 'Opereta anayezingatia sheria za UWA na kutunza mazingira bila plastiki.',
      allRightsReserved: 'Haki zote zimehifadhiwa. Mukono, Uganda.',
      travelInfo: 'Taarifa za Safari',
      bookingTerms: 'Masharti na Faragha',
      staffPortal: 'Lango la Wafanyakazi'
    },
    booking: {
      title: 'Panga Safari Yako ya Uganda',
      subtitle: 'Tueleze kuhusu safari unayotamani, wataalamu wetu Mukono watakuandalia ratiba na makadirio wazi.',
      step1: '1. Wasafiri na Tarehe',
      step2: '2. Maeneo na Shughuli',
      step3: '3. Mtindo na Malazi',
      step4: '4. Mawasiliano na Kutuma',
      yourName: 'Jina Kamili',
      emailAddress: 'Barua Pepe',
      phoneNumber: 'Simu / WhatsApp',
      countryOfResidence: 'Nchi Unayoishi',
      preferredContactMethod: 'Njia Unayopendelea Kuwasiliana',
      dates: 'Tarehe au Mwezi Unaokusudia',
      datesFlexible: 'Tarehe zangu zinaweza kubadilika',
      durationDays: 'Muda wa Kukaa (Siku)',
      adults: 'Watu Wazima (16+)',
      children: 'Watoto (Chini ya 16)',
      selectDestinations: 'Chagua Maeneo',
      selectActivities: 'Chagua Shughuli',
      travelStyle: 'Mtindo wa Safari',
      accommodationPreference: 'Kiwango cha Malazi',
      transportPreference: 'Gari la Safari',
      airportPickup: 'Huduma ya Kupokelewa Uwanja wa Ndege Entebbe (EBB)',
      budgetRange: 'Makadirio ya Bajeti kwa Mtu (USD)',
      specialRequests: 'Maombi Maalum au Mahitaji ya Chakula',
      consentText: 'Ninakubali Mwanaweika Tours and Travel kuwasiliana nami kuhusu ombi hili.',
      submitEnquiry: 'Tuma Ombi la Safari',
      whatsappInstant: 'Wasiliana Mara Moja kwa WhatsApp',
      successTitle: 'Tumepokea Ombi Lako!',
      successMessage: 'Timu yetu Mukono inafanyia kazi ombi lako na itakujibu ndani ya saa 24.',
      referenceCodeLabel: 'Nambari Yako ya Kumbukumbu',
      whatsappDirectNote: 'Kwa majibu ya haraka zaidi, tuandikie WhatsApp na nambari yako ya kumbukumbu.'
    },
    travelGuide: {
      title: 'Mwongozo wa Msafiri Nchini Uganda',
      subtitle: 'Taarifa muhimu na za kweli zitakazokusaidia kujiandaa vyema.',
      visas: 'Mahitaji ya Pasipoti na Visa',
      health: 'Afya, Homa ya Manjano na Malaria',
      currency: 'Fedha na Njia za Malipo',
      climate: 'Hali ya Hewa na Misimu Bora',
      packing: 'Vitu Muhimu vya Kubeba',
      responsibleTourism: 'Maadili ya Utalii na Uhifadhi'
    }
  },

  nl: {
    brand: {
      name: 'Mwanaweika Tours and Travel',
      slogan: 'Ontdek Oeganda. Beleef Afrika. Creëer herinneringen voor het leven.',
      location: 'Mukono, Oeganda'
    },
    nav: {
      home: 'Startpagina',
      destinations: 'Bestemmingen',
      experiences: 'Ervaringen',
      planAndBook: 'Plannen & Boeken',
      planMySafari: 'Plan Mijn Safari',
      contactUs: 'Contact',
      switchLanguage: 'Taal',
      travelerGuide: 'Reisgids',
      whatsappChat: 'WhatsApp Chat'
    },
    hero: {
      kicker: 'De Parel van Afrika',
      headline: 'Oeganda roept. Jouw avontuur begint hier.',
      subheadline:
        'Van ontmoetingen met berggorilla’s en nevelige bergwouden tot de machtige Nijl en warme Afrikaanse gastvrijheid: ontdek het buitengewone Oeganda met Mwanaweika Tours and Travel.',
      exploreBtn: 'Ontdek Oeganda',
      planBtn: 'Plan Mijn Safari',
      trustLine: 'Wildlife · Natuur · Cultuur · Avontuur · Onvergetelijke Reizen'
    },
    common: {
      viewDetails: 'Bekijk Ervaring',
      planVisit: 'Plan een Bezoek',
      requestQuote: 'Vrijblijvende Offerte',
      duration: 'Duur',
      bestSeason: 'Beste Reistijd',
      travelerProfile: 'Ideaal Voor',
      highlights: 'Hoogtepunten',
      close: 'Sluiten',
      submit: 'Aanvraag Verzenden',
      submitting: 'Verzenden...',
      loading: 'Laden...',
      learnMore: 'Meer Informatie',
      all: 'Alles',
      search: 'Zoek op park of regio...',
      filter: 'Filteren op',
      phone: 'Telefoon',
      whatsapp: 'WhatsApp',
      email: 'E-mail',
      status: 'Status'
    },
    home: {
      welcomeBadge: 'Welkom in Oeganda',
      welcomeTitle: 'Een authentieke ontmoeting met de Parel van Afrika',
      welcomeText1:
        'Oeganda herbergt meer dan de helft van alle berggorilla’s ter wereld, uitgestrekte chimpanseebossen en de bron van de Nijl.',
      welcomeText2:
        'Gevestigd in Mukono verzorgen wij doordachte maatreizen met deskundige lokale gidsen en respect voor mens en natuur.',
      whyUsTitle: 'Waarom reizen met Mwanaweika',
      whyUsSubtitle: 'Gefundeerd op Oegandese gastvrijheid, lokale kennis en duurzaam natuurbeheer.',
      reason1Title: 'Gecertificeerde Lokale Gidsen',
      reason1Desc: 'Jarenlange ervaring in alle nationale parken.',
      reason2Title: 'Duurzaam & Ethisch Toerisme',
      reason2Desc: 'Strikte naleving van UWA-richtlijnen en directe steun aan lokale gemeenschappen.',
      reason3Title: 'Volledig Maatwerk',
      reason3Desc: 'Geen standaardtours; uw wensen en tempo staan centraal.',
      reason4Title: 'Eerlijk & Transparant',
      reason4Desc: 'Geen verborgen kosten en persoonlijk contact via WhatsApp.',
      featuredSafaris: 'Uitgelichte Safarireizen',
      featuredSafarisSub: 'Zorgvuldig samengestelde routes langs wildlife en overweldigende natuur.',
      destinationsPreviewTitle: 'Topbestemmingen Oeganda',
      destinationsPreviewSub: 'Bwindi, Queen Elizabeth, Murchison Falls en het Rwenzori-gebergte.',
      conservationTitle: 'Reis met Respect',
      conservationText: 'Iedere safari draagt bij aan het behoud van bedreigde diersoorten.',
      testimonialsTitle: 'Ervaringen van Reizigers',
      testimonialsSub: 'Verhalen van reizigers die met ons op pad gingen.',
      ctaKicker: 'Start Jouw Afrika Reis',
      ctaTitle: 'Klaar om de Parel van Afrika te ontdekken?',
      ctaSubtitle: 'Neem contact op met ons team in Mukono voor een transparant en persoonlijk reisvoorstel.',
      ctaWhatsApp: 'Direct op WhatsApp chatten',
      viewAllCircuits: 'Bekijk Alle 8 Safariroutes',
      exploreAllDestinations: 'Ontdek Alle 17 Bestemmingen',
      wildlifeEthicsKicker: 'Wildlife Ethiek & Geografie',
      wildlifeEthicsTitle: 'Echte Ontmoetingen in de Natuur',
      wildlifeEthicsText: 'De nationale parken van Oeganda zijn beschermde wilde ecosystemen.',
      cheetahNoticeTitle: 'Belangrijk over jachtluipaarden in Oeganda:',
      cheetahNoticeText: 'Jachtluipaarden zijn zeer zeldzaam in Oeganda en komen uitsluitend voor in het afgelegen Kidepo-dal.'
    },
    destinations: {
      kicker: 'Geografie van Oeganda',
      title: 'Verken Oeganda: De Parel van Afrika',
      subtitle: 'Van gletsjers in het Rwenzori-gebergte tot de Nijl en de oerbossen van Bwindi.',
      allRegions: 'Heel Oeganda',
      showing: 'Weergave van',
      verifiedCount: 'geverifieerde bestemmingen',
      recommendedStay: 'Aanbevolen verblijf',
      overview: 'Overzicht',
      modalHighlights: 'Hoogtepunten & Activiteiten',
      modalWildlife: 'Dierenleven',
      modalPractical: 'Praktische Safari Tips',
      planSafariTo: 'Plan een Safari naar'
    },
    experiences: {
      kicker: 'Afrikaanse Safari Portfolio',
      title: 'Kies Jouw Avontuur in Oeganda',
      subtitle: 'Van berggorilla’s tot wildwatervaren op de Nijl: onvergetelijke ervaringen.',
      tabPackages: 'Aanbevolen Safaris (8)',
      tabCategories: '16 Avontuur Categorieën',
      filterStyle: 'Filter op Reisstijl:',
      filterDuration: 'Filter op Duur:',
      allStyles: 'Alle Reisstijlen',
      anyDuration: 'Elke Duur',
      signatureHighlights: 'Belangrijkste Hoogtepunten:',
      dayByDay: 'Dagprogramma',
      included: 'Inclusief',
      excluded: 'Exclusief / Optioneel',
      pricingGuaranteeTitle: 'Eerlijke Prijzen & Beschikbaarheid:',
      pricingGuaranteeDesc: 'Wij maken offertes op maat conform officiële UWA-vergunningen.',
      requestCustomQuote: 'Offerte Aanvragen voor Deze Tour'
    },
    footer: {
      quickNav: 'Snelle Navigatie',
      signatureDest: 'Topbestemmingen',
      ethicalStandards: 'Ethische Normen',
      ethicalDesc: 'Officieel geregistreerde reisorganisatie conform UWA-richtlijnen en vrij van wegwerpplastic.',
      allRightsReserved: 'Alle rechten voorbehouden. Mukono, Oeganda.',
      travelInfo: 'Reisinformatie',
      bookingTerms: 'Voorwaarden & Privacy',
      staffPortal: 'Medewerkers Portal'
    },
    booking: {
      title: 'Stel Jouw Oeganda Reis Samen',
      subtitle: 'Deel uw reisideeën en onze experts in Mukono maken een passend voorstel op maat.',
      step1: '1. Reizigers & Data',
      step2: '2. Bestemmingen & Activiteiten',
      step3: '3. Reisstijl & Accommodatie',
      step4: '4. Gegevens & Verzenden',
      yourName: 'Volledige Naam',
      emailAddress: 'E-mailadres',
      phoneNumber: 'Telefoon / WhatsApp',
      countryOfResidence: 'Woonland',
      preferredContactMethod: 'Voorkeur contactkanaal',
      dates: 'Gewenste reisdata of maand',
      datesFlexible: 'Mijn reisdata zijn flexibel',
      durationDays: 'Geschatte reisduur (dagen)',
      adults: 'Volwassenen (16+)',
      children: 'Kinderen (< 16)',
      selectDestinations: 'Gewenste bestemmingen',
      selectActivities: 'Gewenste activiteiten',
      travelStyle: 'Reisstijl',
      accommodationPreference: 'Accommodatievoorkeur',
      transportPreference: 'Safari Voertuig',
      airportPickup: 'Luchthaventransfers Entebbe (EBB) inbegrepen',
      budgetRange: 'Geschat budget per persoon (USD)',
      specialRequests: 'Bijzondere wensen of dieetvereisten',
      consentText: 'Ik ga ermee akkoord dat Mwanaweika Tours and Travel contact met mij opneemt.',
      submitEnquiry: 'Reisaanvraag Verzenden',
      whatsappInstant: 'Direct contact via WhatsApp',
      successTitle: 'Aanvraag succesvol ontvangen!',
      successMessage: 'Ons team in Mukono reageert binnen 24 uur met een persoonlijk reisvoorstel.',
      referenceCodeLabel: 'Uw referentiecode',
      whatsappDirectNote: 'Heeft u spoedvragen? Stuur uw referentiecode via WhatsApp.'
    },
    travelGuide: {
      title: 'Praktische Reisinformatie Oeganda',
      subtitle: 'Alles wat u moet weten voor een zorgeloze safari in Oeganda.',
      visas: 'Visum & Paspoort',
      health: 'Gele Koorts & Gezondheid',
      currency: 'Valuta & Betalingen',
      climate: 'Klimaat & Reisseizoenen',
      packing: 'Paklijst voor Safari',
      responsibleTourism: 'Duurzaam Reizen & Richtlijnen'
    }
  },

  pt: {
    brand: {
      name: 'Mwanaweika Tours and Travel',
      slogan: 'Descubra o Uganda. Viva a África. Crie Memórias para Toda a Vida.',
      location: 'Mukono, Uganda'
    },
    nav: {
      home: 'Início',
      destinations: 'Destinos',
      experiences: 'Experiências',
      planAndBook: 'Planejar & Reservar',
      planMySafari: 'Planejar Safari',
      contactUs: 'Fale Conosco',
      switchLanguage: 'Idioma',
      travelerGuide: 'Guia do Viajante',
      whatsappChat: 'Chat WhatsApp'
    },
    hero: {
      kicker: 'A Pérola de África',
      headline: 'O Uganda chama por si. A sua grande aventura começa aqui.',
      subheadline:
        'De encontros com gorilas da montanha a florestas tropicais e às águas do Nilo, viva o Uganda autêntico com a Mwanaweika Tours and Travel.',
      exploreBtn: 'Explorar o Uganda',
      planBtn: 'Planejar Meu Safari',
      trustLine: 'Vida Selvagem · Natureza · Cultura · Aventura · Momentos Inesquecíveis'
    },
    common: {
      viewDetails: 'Ver Experiência',
      planVisit: 'Planejar Visita',
      requestQuote: 'Pedir Orçamento',
      duration: 'Duração',
      bestSeason: 'Melhor Época',
      travelerProfile: 'Ideal Para',
      highlights: 'Destaques',
      close: 'Fechar',
      submit: 'Enviar Pedido',
      submitting: 'Enviando...',
      loading: 'Carregando...',
      learnMore: 'Saber Mais',
      all: 'Tudo',
      search: 'Pesquisar por parque ou região...',
      filter: 'Filtrar por',
      phone: 'Telefone',
      whatsapp: 'WhatsApp',
      email: 'E-mail',
      status: 'Status'
    },
    home: {
      welcomeBadge: 'Bem-vindo ao Uganda',
      welcomeTitle: 'Um Encontro Autêntico com a Pérola de África',
      welcomeText1:
        'Mais de metade dos gorilas de montanha do mundo vivem no Uganda, ao lado de chimpanzés e da nascente do Rio Nilo.',
      welcomeText2:
        'Com sede em Mukono, a Mwanaweika Tours and Travel organiza viagens sob medida com guias locais credenciados.',
      whyUsTitle: 'Por que Viajar com a Mwanaweika',
      whyUsSubtitle: 'Hospitalidade calorosa, conhecimento local profundo e preservação da vida selvagem.',
      reason1Title: 'Guias Nacionais Certificados',
      reason1Desc: 'Nascidos no Uganda com profundo domínio dos parques e trilhas.',
      reason2Title: 'Turismo Ético e Sustentável',
      reason2Desc: 'Respeito absoluto pelas normas da UWA e apoio a comunidades locais.',
      reason3Title: 'Roteiros Sob Medida',
      reason3Desc: 'Viagens adaptadas a casais, famílias e fotógrafos.',
      reason4Title: 'Transparência Total',
      reason4Desc: 'Sem custos ocultos e apoio direto por WhatsApp.',
      featuredSafaris: 'Safaris em Destaque',
      featuredSafarisSub: 'Roteiros equilibrados entre vida selvagem e paisagens deslumbrantes.',
      destinationsPreviewTitle: 'Destinos Imperdíveis',
      destinationsPreviewSub: 'Bwindi, Queen Elizabeth, Murchison Falls e muito mais.',
      conservationTitle: 'Viaje com Responsabilidade',
      conservationText: 'Cada safari apoia diretamente a proteção de espécies ameaçadas.',
      testimonialsTitle: 'Opiniões de Viajantes',
      testimonialsSub: 'Relatos de aventureiros de todo o mundo.',
      ctaKicker: 'Inicie Sua Jornada Africana',
      ctaTitle: 'Pronto para Descobrir a Pérola de África?',
      ctaSubtitle: 'Fale com nossa equipe em Mukono para receber um roteiro personalizado e transparente.',
      ctaWhatsApp: 'Falar no WhatsApp',
      viewAllCircuits: 'Ver Todos os 8 Safaris',
      exploreAllDestinations: 'Explorar Todos os 17 Destinos',
      wildlifeEthicsKicker: 'Ética e Preservação',
      wildlifeEthicsTitle: 'Encontros Genuínos na Natureza',
      wildlifeEthicsText: 'Os parques nacionais do Uganda são ecossistemas selvagens e protegidos.',
      cheetahNoticeTitle: 'Nota sobre guepardos no Uganda:',
      cheetahNoticeText: 'Guepardos são raros e habitam apenas o remoto vale de Kidepo.'
    },
    destinations: {
      kicker: 'Geografia do Uganda',
      title: 'Explore o Uganda: A Pérola de África',
      subtitle: 'Das montanhas Rwenzori às quedas do Nilo e florestas de Bwindi.',
      allRegions: 'Todo o Uganda',
      showing: 'Exibindo',
      verifiedCount: 'destinos verificados',
      recommendedStay: 'Estadia recomendada',
      overview: 'Visão Geral',
      modalHighlights: 'Atividades e Destaques',
      modalWildlife: 'Vida Selvagem',
      modalPractical: 'Conselhos Práticos',
      planSafariTo: 'Planejar Safari para'
    },
    experiences: {
      kicker: 'Catálogo de Safaris',
      title: 'Escolha Sua Aventura no Uganda',
      subtitle: 'Encontros com gorilas da montanha, rafting no Nilo e momentos únicos.',
      tabPackages: 'Safaris Recomendados (8)',
      tabCategories: '16 Categorias de Aventura',
      filterStyle: 'Filtrar por Estilo:',
      filterDuration: 'Filtrar por Duração:',
      allStyles: 'Todos os Estilos',
      anyDuration: 'Qualquer Duração',
      signatureHighlights: 'Destaques Especiais:',
      dayByDay: 'Roteiro Dia a Dia',
      included: 'Incluído no Safari',
      excluded: 'Não Incluído / Opcional',
      pricingGuaranteeTitle: 'Transparência de Preços:',
      pricingGuaranteeDesc: 'Montamos orçamentos personalizados e transparentes conforme autorizações da UWA.',
      requestCustomQuote: 'Solicitar Orçamento para Este Tour'
    },
    footer: {
      quickNav: 'Navegação Rápida',
      signatureDest: 'Destinos em Destaque',
      ethicalStandards: 'Padrões Éticos',
      ethicalDesc: 'Operador registrado e alinhado com a Uganda Wildlife Authority.',
      allRightsReserved: 'Todos os direitos reservados. Mukono, Uganda.',
      travelInfo: 'Informações de Viagem',
      bookingTerms: 'Termos e Privacidade',
      staffPortal: 'Portal da Equipe'
    },
    booking: {
      title: 'Planeje Sua Viagem ao Uganda',
      subtitle: 'Conte-nos sobre a sua viagem dos sonhos e montaremos uma proposta personalizada.',
      step1: '1. Viajantes e Datas',
      step2: '2. Destinos e Atividades',
      step3: '3. Estilo e Alojamento',
      step4: '4. Contato e Envio',
      yourName: 'Nome Completo',
      emailAddress: 'Endereço de E-mail',
      phoneNumber: 'Telefone / WhatsApp',
      countryOfResidence: 'País de Residência',
      preferredContactMethod: 'Método de contato preferido',
      dates: 'Datas previstas ou mês da viagem',
      datesFlexible: 'Minhas datas são flexíveis',
      durationDays: 'Duração estimada (dias)',
      adults: 'Adultos (16+)',
      children: 'Crianças (< 16)',
      selectDestinations: 'Destinos de interesse',
      selectActivities: 'Atividades desejadas',
      travelStyle: 'Estilo de viagem',
      accommodationPreference: 'Tipo de hospedagem',
      transportPreference: 'Veículo de safari',
      airportPickup: 'Incluir traslados no aeroporto de Entebbe (EBB)',
      budgetRange: 'Orçamento estimado por pessoa (USD)',
      specialRequests: 'Necessidades dietéticas ou pedidos especiais',
      consentText: 'Autorizo a Mwanaweika Tours and Travel a entrar em contato sobre este pedido.',
      submitEnquiry: 'Enviar Pedido de Safari',
      whatsappInstant: 'Atendimento Rápido no WhatsApp',
      successTitle: 'Pedido Recebido com Sucesso!',
      successMessage: 'Nossa equipe em Mukono enviará sua proposta detalhada em até 24 horas.',
      referenceCodeLabel: 'Seu Código de Referência',
      whatsappDirectNote: 'Para atendimento imediato, envie seu código diretamente pelo WhatsApp.'
    },
    travelGuide: {
      title: 'Guia do Viajante no Uganda',
      subtitle: 'Informações práticas e essenciais para a sua viagem à África.',
      visas: 'Passaporte e Visto Eletrônico',
      health: 'Febre Amarela, Malária e Saúde',
      currency: 'Moeda e Pagamentos',
      climate: 'Clima e Melhores Estações',
      packing: 'O Que Levar na Mala',
      responsibleTourism: 'Código de Conduta e Conservação'
    }
  }
};
