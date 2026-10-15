import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Destination, SafariPackage, EnquirySubmission } from '../types';
import { destinationsData } from '../data/destinations';
import {
  Calendar,
  Users,
  MapPin,
  Compass,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  Phone
} from 'lucide-react';

interface PlanAndBookViewProps {
  initialDestination?: Destination | null;
  initialPackage?: SafariPackage | null;
  onClearInitialSelections: () => void;
}

export const PlanAndBookView: React.FC<PlanAndBookViewProps> = ({
  initialDestination,
  initialPackage,
  onClearInitialSelections
}) => {
  const { t } = useLanguage();

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [preferredContact, setPreferredContact] = useState<'whatsapp' | 'email' | 'phone'>('whatsapp');

  const [travelDates, setTravelDates] = useState('');
  const [isDatesFlexible, setIsDatesFlexible] = useState(true);
  const [durationDays, setDurationDays] = useState('7');
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);

  const [travelStyle, setTravelStyle] = useState('Mid-Range');
  const [accommodationType, setAccommodationType] = useState('Comfortable Mid-Range Lodges');
  const [transportPreference, setTransportPreference] = useState('4x4 Safari Land Cruiser (Pop-up Roof)');
  const [airportPickup, setAirportPickup] = useState(true);
  const [flightDetails, setFlightDetails] = useState('');
  const [budgetPerPerson, setBudgetPerPerson] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  // Submission & Validation States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<EnquirySubmission | null>(null);
  const [validationError, setValidationError] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // Pre-populate if passed from destination or package view
  useEffect(() => {
    if (initialDestination) {
      if (!selectedDestinations.includes(initialDestination.name)) {
        setSelectedDestinations((prev) => [...prev, initialDestination.name]);
      }
    }
    if (initialPackage) {
      setDurationDays(initialPackage.durationDays.toString());
      setTravelStyle(initialPackage.travelStyle);
      setSpecialRequests((prev) =>
        prev ? `${prev}\nInterested in package: ${initialPackage.title}` : `Interested in package: ${initialPackage.title}`
      );
    }
  }, [initialDestination, initialPackage]);

  const toggleDestination = (name: string) => {
    setSelectedDestinations((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
    );
  };

  const toggleExperience = (exp: string) => {
    setSelectedExperiences((prev) =>
      prev.includes(exp) ? prev.filter((e) => e !== exp) : [...prev, exp]
    );
  };

  const generateReferenceCode = () => {
    const year = new Date().getFullYear();
    const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `MW-${year}-${randomChars}`;
  };

  const validateForm = () => {
    if (!fullName.trim()) return 'Please enter your full name.';
    if (!email.trim() || !email.includes('@')) return 'Please provide a valid email address.';
    if (!phone.trim()) return 'Please enter a contact phone or WhatsApp number.';
    if (!country.trim()) return 'Please indicate your country of residence.';
    if (!privacyConsent) return 'Please check the consent box to submit your safari enquiry.';
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateForm();
    if (err) {
      setValidationError(err);
      return;
    }

    setValidationError('');
    setIsSubmitting(true);

    setTimeout(() => {
      const newEnquiry: EnquirySubmission = {
        id: 'enq_' + Date.now(),
        referenceCode: generateReferenceCode(),
        createdAt: new Date().toISOString(),
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        country: country.trim(),
        preferredContact,
        travelDates: travelDates || 'Flexible / To Be Determined',
        isDatesFlexible,
        durationDays: durationDays || '7',
        adultsCount,
        childrenCount,
        destinations: selectedDestinations,
        experiences: selectedExperiences,
        travelStyle,
        accommodationType,
        transportPreference,
        airportPickup,
        flightDetails: flightDetails.trim(),
        budgetPerPerson: budgetPerPerson.trim(),
        specialRequests: specialRequests.trim(),
        privacyConsent,
        status: 'New'
      };

      // Store in localStorage
      try {
        const stored = JSON.parse(localStorage.getItem('mwanaweika_enquiries') || '[]');
        stored.unshift(newEnquiry);
        localStorage.setItem('mwanaweika_enquiries', JSON.stringify(stored));
      } catch (e) {
        console.error('Storage error:', e);
      }

      setSubmittedEnquiry(newEnquiry);
      setIsSubmitting(false);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 700);
  };

  const handleWhatsAppEnquiry = () => {
    const message = `Hello Mwanaweika Tours and Travel!%0A%0A*SAFARI ENQUIRY*%0A*Name:* ${encodeURIComponent(
      fullName || 'Traveler'
    )}%0A*Country:* ${encodeURIComponent(country || 'International')}%0A*Group Size:* ${adultsCount} Adults, ${childrenCount} Children%0A*Duration:* ${durationDays} Days%0A*Style:* ${travelStyle}%0A*Destinations:* ${encodeURIComponent(
      selectedDestinations.join(', ') || 'Custom Recommendation'
    )}%0A*Activities:* ${encodeURIComponent(
      selectedExperiences.join(', ') || 'Gorilla & Wildlife'
    )}%0A*Preferred Dates:* ${encodeURIComponent(
      travelDates || (isDatesFlexible ? 'Flexible' : 'Not specified')
    )}%0A%0APlease prepare a tailor-made proposal and quote for our trip. Thank you!`;

    window.open(`https://wa.me/256705750506?text=${message}`, '_blank');
  };

  const copyRefCode = () => {
    if (submittedEnquiry) {
      navigator.clipboard.writeText(submittedEnquiry.referenceCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const popularActivitiesList = [
    'Mountain Gorilla Trekking (Bwindi / Mgahinga)',
    'Chimpanzee Tracking (Kibale Forest)',
    'Savannah Big Game Drives (Lions, Elephants, Leopards)',
    'Kazinga Channel Boat Cruise',
    'Murchison Falls Nile Boat Safari',
    'White Rhino Tracking on Foot (Ziwa)',
    'Prehistoric Shoebill Stork Quest',
    'River Nile White Water Rafting (Jinja)',
    'Sipi Falls Waterfall Hiking & Coffee Tour',
    'Lake Bunyonyi Canoe & Relaxation',
    'Rwenzori Mountain Foothill Walks',
    'Traditional Ugandan Cultural Encounters'
  ];

  return (
    <div className="w-full bg-[#F7F4EA]/90 backdrop-blur-md min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#246B45]">
            <Compass className="w-4 h-4" />
            <span>Tailor-Made Safari Planning</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D2A] tracking-tight">
            {t.booking.title}
          </h1>

          <p className="text-sm sm:text-base text-[#202922]/80 max-w-2xl mx-auto leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        {/* Selected Pre-load Banner */}
        {(initialDestination || initialPackage) && !submittedEnquiry && (
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Planning for{' '}
                <strong>
                  {initialDestination ? initialDestination.name : initialPackage?.title}
                </strong>
                . We've pre-loaded your selections below!
              </span>
            </div>
            <button
              onClick={onClearInitialSelections}
              className="text-xs text-emerald-700 underline hover:text-emerald-900 cursor-pointer"
            >
              Reset
            </button>
          </div>
        )}

        {/* SUCCESS CONFIRMATION STATE */}
        {submittedEnquiry ? (
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#202922]/10 shadow-lg space-y-8 animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D2A]">
                {t.booking.successTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#202922]/80 max-w-lg mx-auto leading-relaxed">
                {t.booking.successMessage}
              </p>
            </div>

            {/* Reference Code Card */}
            <div className="p-6 bg-[#F7F4EA] rounded-xl border border-[#202922]/15 text-center space-y-2 max-w-md mx-auto">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                {t.booking.referenceCodeLabel}
              </span>
              <div className="flex items-center justify-center gap-3">
                <span className="font-mono text-2xl font-bold text-[#123D2A] tracking-wider">
                  {submittedEnquiry.referenceCode}
                </span>
                <button
                  onClick={copyRefCode}
                  className="p-1.5 rounded-md hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                  title="Copy reference code"
                >
                  {copiedCode ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
                Please save this reference code for future communications.
              </p>
            </div>

            {/* Summary Review */}
            <div className="border-t border-slate-100 pt-6 space-y-4 text-xs text-slate-700">
              <div className="font-semibold text-[#123D2A] text-sm">Trip Summary Submitted:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-lg">
                <div><strong>Lead Traveler:</strong> {submittedEnquiry.fullName} ({submittedEnquiry.country})</div>
                <div><strong>Party:</strong> {submittedEnquiry.adultsCount} Adults, {submittedEnquiry.childrenCount} Children</div>
                <div><strong>Duration:</strong> {submittedEnquiry.durationDays} Days ({submittedEnquiry.travelDates})</div>
                <div><strong>Travel Style:</strong> {submittedEnquiry.travelStyle}</div>
                {submittedEnquiry.destinations.length > 0 && (
                  <div className="sm:col-span-2">
                    <strong>Destinations:</strong> {submittedEnquiry.destinations.join(', ')}
                  </div>
                )}
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 bg-[#123D2A] text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="font-serif font-bold text-base text-[#D9AC55]">
                  Need an Immediate Response?
                </div>
                <p className="text-xs text-[#F7F4EA]/80 max-w-md">
                  Message our Mukono office directly on WhatsApp with your reference code <strong>{submittedEnquiry.referenceCode}</strong>.
                </p>
              </div>

              <a
                href={`https://wa.me/256705750506?text=Hello%20Mwanaweika%20Tours!%20I%20have%20submitted%20safari%20enquiry%20reference%20${submittedEnquiry.referenceCode}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#D9AC55] hover:bg-[#ebd28b] text-[#123D2A] font-semibold text-xs rounded-md transition-colors whitespace-nowrap"
              >
                Open WhatsApp Now
              </a>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setSubmittedEnquiry(null)}
                className="text-xs text-[#246B45] font-semibold underline hover:text-[#123D2A] cursor-pointer"
              >
                Submit another enquiry
              </button>
            </div>
          </div>
        ) : (
          /* BOOKING & ENQUIRY FORM */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-10 border border-[#202922]/10 shadow-sm space-y-10"
          >
            {validationError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-xs text-red-800 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{validationError}</span>
              </div>
            )}

            {/* STEP 1: Travelers & Dates */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#202922]/10 pb-2">
                <Calendar className="w-4 h-4 text-[#246B45]" />
                <h2 className="font-serif text-lg font-bold text-[#123D2A]">{t.booking.step1}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                    {t.booking.dates}
                  </label>
                  <input
                    type="text"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    placeholder="e.g. October 2026 or Nov 10 - Nov 20"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                  />
                  <label className="flex items-center gap-2 mt-2 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isDatesFlexible}
                      onChange={(e) => setIsDatesFlexible(e.target.checked)}
                      className="rounded text-[#246B45] focus:ring-[#246B45]"
                    />
                    <span>{t.booking.datesFlexible}</span>
                  </label>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                    {t.booking.durationDays}
                  </label>
                  <select
                    value={durationDays}
                    onChange={(e) => setDurationDays(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                  >
                    <option value="3">3 Days (Quick Gorilla or Murchison Safari)</option>
                    <option value="5">5 Days (Primates & Waterfalls)</option>
                    <option value="7">7 Days (The Classic Uganda Circuit)</option>
                    <option value="9">9 Days (Wildlife Photography & Trekking)</option>
                    <option value="12">12 Days (The Grand Uganda Discovery)</option>
                    <option value="15+">15+ Days (Comprehensive Uganda In-Depth)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                    {t.booking.adults}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={adultsCount}
                    onChange={(e) => setAdultsCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                    {t.booking.children}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="15"
                    value={childrenCount}
                    onChange={(e) => setChildrenCount(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                  />
                  <span className="text-[10px] text-slate-500 block mt-1">
                    Note: Mountain gorilla trekking has a statutory minimum age of 15 years per UWA rules.
                  </span>
                </div>
              </div>
            </div>

            {/* STEP 2: Preferred Destinations & Desired Activities */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#202922]/10 pb-2">
                <MapPin className="w-4 h-4 text-[#246B45]" />
                <h2 className="font-serif text-lg font-bold text-[#123D2A]">{t.booking.step2}</h2>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#123D2A] block mb-2">
                  {t.booking.selectDestinations} (Select all that interest you)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {destinationsData.map((dest) => {
                    const isSelected = selectedDestinations.includes(dest.name);
                    return (
                      <button
                        type="button"
                        key={dest.id}
                        onClick={() => toggleDestination(dest.name)}
                        className={`text-left p-2.5 rounded-lg text-xs font-medium transition-colors border cursor-pointer ${
                          isSelected
                            ? 'bg-[#123D2A] text-white border-[#123D2A]'
                            : 'bg-[#F7F4EA]/50 text-[#202922]/80 border-[#202922]/10 hover:bg-[#e9e4d3]'
                        }`}
                      >
                        <div className="font-semibold line-clamp-1">{dest.name}</div>
                        <div className={`text-[10px] ${isSelected ? 'text-[#D9AC55]' : 'text-slate-500'}`}>
                          {dest.regionLabel}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <label className="text-xs font-semibold text-[#123D2A] block mb-2">
                  {t.booking.selectActivities}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {popularActivitiesList.map((act) => {
                    const isSelected = selectedExperiences.includes(act);
                    return (
                      <label
                        key={act}
                        className={`flex items-center gap-2.5 p-2 rounded-lg text-xs cursor-pointer border transition-colors ${
                          isSelected
                            ? 'bg-emerald-50 text-emerald-900 border-emerald-300 font-semibold'
                            : 'bg-[#F7F4EA]/40 text-[#202922]/80 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleExperience(act)}
                          className="rounded text-[#246B45] focus:ring-[#246B45]"
                        />
                        <span>{act}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* STEP 3: Travel Style & Preferences */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#202922]/10 pb-2">
                <Compass className="w-4 h-4 text-[#246B45]" />
                <h2 className="font-serif text-lg font-bold text-[#123D2A]">{t.booking.step3}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                    {t.booking.travelStyle}
                  </label>
                  <select
                    value={travelStyle}
                    onChange={(e) => setTravelStyle(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                  >
                    <option value="Mid-Range">Mid-Range (Comfortable Safari Quality)</option>
                    <option value="Luxury">Luxury (Premier Lodges & Luxury Tents)</option>
                    <option value="Adventure & Active">Adventure & Active (Trekking, Rafting)</option>
                    <option value="Photography">Photography (Dedicated Vehicle & Light)</option>
                    <option value="Family Friendly">Family Friendly (Paced for Children)</option>
                    <option value="Honeymoon / Romance">Honeymoon / Romance (Private Suites)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                    {t.booking.accommodationPreference}
                  </label>
                  <select
                    value={accommodationType}
                    onChange={(e) => setAccommodationType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                  >
                    <option value="Comfortable Mid-Range Lodges">Comfortable Mid-Range Lodges</option>
                    <option value="5-Star Luxury Safari Lodges">5-Star Luxury Safari Lodges</option>
                    <option value="Luxury Tented Safari Camps">Luxury Tented Safari Camps</option>
                    <option value="Eco-Resorts & Forest Cottages">Eco-Resorts & Forest Cottages</option>
                    <option value="Clean Budget Safari Guesthouses">Clean Budget Safari Guesthouses</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                    {t.booking.transportPreference}
                  </label>
                  <select
                    value={transportPreference}
                    onChange={(e) => setTransportPreference(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                  >
                    <option value="4x4 Safari Land Cruiser (Pop-up Roof)">4x4 Safari Land Cruiser (Pop-up Roof) - Recommended</option>
                    <option value="4x4 Safari Minivan (Pop-up Roof)">4x4 Safari Minivan (Pop-up Roof)</option>
                    <option value="Domestic Bush Flight + 4x4 Ground Vehicle">Domestic Bush Flight + 4x4 Ground Vehicle</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                    {t.booking.budgetRange}
                  </label>
                  <input
                    type="text"
                    value={budgetPerPerson}
                    onChange={(e) => setBudgetPerPerson(e.target.value)}
                    placeholder="e.g. $2,000 - $3,500 USD per person"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                  />
                </div>
              </div>

              {/* Airport Transfer Toggle */}
              <div className="pt-2">
                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={airportPickup}
                    onChange={(e) => setAirportPickup(e.target.checked)}
                    className="rounded text-[#246B45] focus:ring-[#246B45]"
                  />
                  <span>{t.booking.airportPickup}</span>
                </label>
                {airportPickup && (
                  <input
                    type="text"
                    value={flightDetails}
                    onChange={(e) => setFlightDetails(e.target.value)}
                    placeholder="Arrival flight details (airline & flight number if known)"
                    className="mt-2 w-full px-3.5 py-2 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md"
                  />
                )}
              </div>
            </div>

            {/* STEP 4: Contact Details & Special Requests */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#202922]/10 pb-2">
                <Users className="w-4 h-4 text-[#246B45]" />
                <h2 className="font-serif text-lg font-bold text-[#123D2A]">{t.booking.step4}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                    {t.booking.yourName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                    {t.booking.emailAddress} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                    {t.booking.phoneNumber} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000 or WhatsApp number"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                    {t.booking.countryOfResidence} *
                  </label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. United States, Germany, France, Uganda"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                  {t.booking.preferredContactMethod}
                </label>
                <div className="flex items-center gap-4 text-xs text-slate-700">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      checked={preferredContact === 'whatsapp'}
                      onChange={() => setPreferredContact('whatsapp')}
                      className="text-[#246B45] focus:ring-[#246B45]"
                    />
                    <span>WhatsApp (Fastest)</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      checked={preferredContact === 'email'}
                      onChange={() => setPreferredContact('email')}
                      className="text-[#246B45] focus:ring-[#246B45]"
                    />
                    <span>Email</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      checked={preferredContact === 'phone'}
                      onChange={() => setPreferredContact('phone')}
                      className="text-[#246B45] focus:ring-[#246B45]"
                    />
                    <span>Phone Call</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#123D2A] block mb-1">
                  {t.booking.specialRequests}
                </label>
                <textarea
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Share any specific interests (e.g. bird photography, vegetarian diet, mobility considerations, or anniversary celebration)..."
                  className="w-full px-3.5 py-2 text-xs bg-[#F7F4EA]/50 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45]"
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="mt-0.5 rounded text-[#246B45] focus:ring-[#246B45]"
                  />
                  <span>{t.booking.consentText}</span>
                </label>
              </div>
            </div>

            {/* Submission Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <button
                type="button"
                onClick={handleWhatsAppEnquiry}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-[#123D2A] bg-[#D9AC55]/20 hover:bg-[#D9AC55]/30 border border-[#D9AC55]/50 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#123D2A]" />
                <span>{t.booking.whatsappInstant}</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-[#246B45] hover:bg-[#123D2A] rounded-md transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? t.common.submitting : t.booking.submitEnquiry}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
