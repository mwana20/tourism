export type LanguageCode =
  | 'en' // English
  | 'fr' // French
  | 'de' // German
  | 'es' // Spanish
  | 'it' // Italian
  | 'zh' // Chinese Simplified
  | 'ar' // Arabic (RTL)
  | 'sw' // Kiswahili
  | 'nl' // Dutch
  | 'pt'; // Portuguese

export type PageId = 'home' | 'destinations' | 'experiences' | 'book';

export interface Destination {
  id: string;
  name: string;
  region: 'western' | 'northern' | 'eastern' | 'central' | 'southwestern';
  regionLabel: string;
  heroImage: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  bestSeason: string;
  duration: string;
  travelerType: string;
  activities: string[];
  altitude?: string;
  wildlifeHighlights: string[];
  practicalTips: string;
}

export interface SafariPackage {
  id: string;
  title: string;
  slug: string;
  image: string;
  route: string;
  durationDays: number;
  durationLabel: string;
  priceNote: string; // e.g. "Custom Quote on Request"
  category: string;
  travelStyle: 'Luxury' | 'Mid-Range' | 'Adventure' | 'Family' | 'Photography';
  overview: string;
  shortDesc?: string;
  highlights: string[];
  itinerarySummary: { day: string; title: string; desc: string }[];
  included: string[];
  excluded: string[];
  recommendedFor: string;
}

export interface WildlifeItem {
  id: string;
  commonName: string;
  scientificName: string;
  category: 'big_five' | 'primates' | 'savannah' | 'birds' | 'illustrative';
  image: string;
  ugandaLocation: string;
  sightingNote: string;
  isIllustrativeAfricanOnly?: boolean;
}

export interface EnquirySubmission {
  id: string;
  referenceCode: string;
  createdAt: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  preferredContact: 'whatsapp' | 'email' | 'phone';
  travelDates: string;
  isDatesFlexible: boolean;
  durationDays: string;
  adultsCount: number;
  childrenCount: number;
  destinations: string[];
  experiences: string[];
  travelStyle: string;
  accommodationType: string;
  transportPreference: string;
  airportPickup: boolean;
  flightDetails?: string;
  budgetPerPerson?: string;
  specialRequests?: string;
  privacyConsent: boolean;
  status: 'New' | 'In Review' | 'Quoted' | 'Confirmed' | 'Archived';
}
