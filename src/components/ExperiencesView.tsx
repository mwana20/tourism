import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SafariPackage } from '../types';
import { experienceCategories, safariPackages } from '../data/experiences';
import { getExperienceCategoryCardCopy, getSafariPackageCardCopy } from '../data/cardTranslations';
import {
  Compass,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  Filter,
  Sparkles,
  X,
  MapPin,
  Camera,
  Footprints,
  Mountain,
  Droplets,
  Waves,
  Feather,
  HeartHandshake,
  Users,
  Heart,
  Tent,
  Anchor,
  Map,
  Aperture,
  Smile,
  Info
} from 'lucide-react';

interface ExperiencesViewProps {
  selectedPackage: SafariPackage | null;
  onSelectPackage: (pkg: SafariPackage | null) => void;
  onBookPackage: (pkg: SafariPackage) => void;
}

// Icon mapper helper
const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Compass': return Compass;
    case 'Footprints': return Footprints;
    case 'Smile': return Smile;
    case 'Camera': return Camera;
    case 'Mountain': return Mountain;
    case 'Droplets': return Droplets;
    case 'Waves': return Waves;
    case 'Feather': return Feather;
    case 'HeartHandshake': return HeartHandshake;
    case 'Sparkles': return Sparkles;
    case 'Users': return Users;
    case 'Heart': return Heart;
    case 'Tent': return Tent;
    case 'Anchor': return Anchor;
    case 'Map': return Map;
    case 'Aperture': return Aperture;
    default: return Compass;
  }
};

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({
  selectedPackage,
  onSelectPackage,
  onBookPackage
}) => {
  const { t, language } = useLanguage();
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'packages' | 'categories'>('packages');

  const filteredPackages = useMemo(() => {
    return safariPackages.filter((pkg) => {
      const matchesStyle = selectedStyle === 'all' || pkg.travelStyle.toLowerCase() === selectedStyle.toLowerCase();
      let matchesDuration = true;
      if (selectedDuration === 'short') matchesDuration = pkg.durationDays <= 4;
      else if (selectedDuration === 'medium') matchesDuration = pkg.durationDays >= 5 && pkg.durationDays <= 7;
      else if (selectedDuration === 'long') matchesDuration = pkg.durationDays >= 8;
      return matchesStyle && matchesDuration;
    });
  }, [selectedStyle, selectedDuration]);

  return (
    <div className="w-full bg-[#F7F4EA]/90 backdrop-blur-md min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#246B45]">
            <Compass className="w-4 h-4" />
            <span>{t.experiences.kicker}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D2A] tracking-tight">
            {t.experiences.title}
          </h1>

          <p className="text-sm sm:text-base text-[#202922]/80 max-w-3xl leading-relaxed">
            {t.experiences.subtitle}
          </p>
        </div>

        {/* View Switcher: Curated Circuits vs 16 Adventure Categories */}
        <div className="flex items-center gap-2 p-1 bg-white border border-[#202922]/10 rounded-lg max-w-md shadow-sm">
          <button
            onClick={() => setActiveTab('packages')}
            className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer text-center ${
              activeTab === 'packages'
                ? 'bg-[#123D2A] text-white shadow-sm'
                : 'text-[#202922]/70 hover:text-[#123D2A]'
            }`}
          >
            {t.experiences.tabPackages} (8)
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer text-center ${
              activeTab === 'categories'
                ? 'bg-[#123D2A] text-white shadow-sm'
                : 'text-[#202922]/70 hover:text-[#123D2A]'
            }`}
          >
            {t.experiences.tabCategories} (16)
          </button>
        </div>

        {/* TAB 1: SAFARI PACKAGES */}
        {activeTab === 'packages' && (
          <div className="space-y-8">
            {/* Filter Ribbons */}
            <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#202922]/10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-2 w-full md:w-auto">
                <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
                  {t.experiences.filterStyle}:
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {['all', 'Luxury', 'Mid-Range', 'Adventure', 'Photography', 'Family'].map((style) => (
                    <button
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                        selectedStyle === style
                          ? 'bg-[#246B45] text-white font-semibold'
                          : 'bg-[#F7F4EA] text-[#202922]/80 hover:bg-[#e9e4d3]'
                      }`}
                    >
                      {style === 'all' ? t.experiences.allStyles : style}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 w-full md:w-auto">
                <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
                  {t.experiences.filterDuration}:
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    { id: 'all', label: t.experiences.anyDuration },
                    { id: 'short', label: '1 – 4 Days' },
                    { id: 'medium', label: '5 – 7 Days' },
                    { id: 'long', label: '8+ Days' }
                  ].map((dur) => (
                    <button
                      key={dur.id}
                      onClick={() => setSelectedDuration(dur.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                        selectedDuration === dur.id
                          ? 'bg-[#246B45] text-white font-semibold'
                          : 'bg-[#F7F4EA] text-[#202922]/80 hover:bg-[#e9e4d3]'
                      }`}
                    >
                      {dur.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => {
                const cardCopy = getSafariPackageCardCopy(language, pkg.id, pkg.title, pkg.overview);
                return (
                <div
                  key={pkg.id}
                  className="bg-white rounded-xl overflow-hidden border border-[#202922]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#123D2A]/90 text-[#F7F4EA] text-xs font-semibold px-3 py-1 rounded backdrop-blur-sm">
                      {pkg.durationLabel}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 text-[#123D2A] text-xs font-semibold px-3 py-1 rounded backdrop-blur-sm">
                      {pkg.travelStyle}
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="flex items-center gap-1 text-[11px] text-[#D9AC55] font-semibold mb-1">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="line-clamp-1">{pkg.route}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold leading-tight group-hover:text-[#D9AC55] transition-colors">
                        {cardCopy.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs text-[#202922]/80 leading-relaxed line-clamp-3">
                      {cardCopy.summary}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-3">
                      <div className="text-xs font-bold text-[#123D2A]">{t.common.highlights}:</div>
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="text-xs text-[#202922]/85 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#246B45] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => onSelectPackage(pkg)}
                        className="flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-[#123D2A] hover:bg-[#246B45] rounded-md transition-colors text-center cursor-pointer"
                      >
                        {t.common.viewDetails}
                      </button>
                      <button
                        onClick={() => onBookPackage(pkg)}
                        className="flex-1 py-2.5 px-3 text-xs font-semibold text-[#123D2A] bg-[#F7F4EA] hover:bg-[#e9e4d3] border border-[#202922]/15 rounded-md transition-colors text-center cursor-pointer"
                      >
                        {t.common.requestQuote}
                      </button>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: 16 ADVENTURE CATEGORIES */}
        {activeTab === 'categories' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceCategories.map((cat) => {
              const IconComp = getCategoryIcon(cat.iconName);
              const cardCopy = getExperienceCategoryCardCopy(language, cat.id, cat.title, cat.shortDesc);
              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-xl overflow-hidden border border-[#202922]/10 shadow-sm hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cardCopy.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#123D2A]/90 text-[#D9AC55] flex items-center justify-center backdrop-blur-sm">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="font-serif text-lg font-bold leading-tight group-hover:text-[#D9AC55] transition-colors">
                        {cardCopy.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <p className="text-xs text-[#202922]/75 leading-relaxed line-clamp-3">
                      {cardCopy.summary}
                    </p>

                    <div className="border-t border-slate-100 pt-2">
                      <div className="text-[11px] font-semibold text-[#123D2A] mb-1">
                        Key Locations:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cat.destinations.map((d, i) => (
                          <span
                            key={i}
                            className="text-[10px] bg-[#F7F4EA] text-[#246B45] font-medium px-1.5 py-0.5 rounded border border-[#202922]/10"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* DETAILED PACKAGE MODAL */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 my-6">
            <div className="relative h-64 sm:h-72">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <button
                onClick={() => onSelectPackage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
                aria-label={t.common.close}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-[#D9AC55] font-semibold">
                    {selectedPackage.travelStyle} Safari
                  </span>
                  <span>·</span>
                  <span className="text-xs text-white/90">{selectedPackage.durationLabel}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                  {selectedPackage.title}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-[#F7F4EA]/90 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D9AC55] shrink-0" />
                  <span>{selectedPackage.route}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#123D2A]">{t.destinations.overview}</h3>
                <p className="text-xs sm:text-sm text-[#202922]/85 leading-relaxed">
                  {selectedPackage.overview}
                </p>
              </div>

              {/* Day-by-Day Itinerary Summary */}
              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-[#123D2A]">{t.experiences.dayByDay}</h3>
                <div className="space-y-2.5">
                  {selectedPackage.itinerarySummary.map((item, idx) => (
                    <div key={idx} className="p-3 bg-[#F7F4EA] rounded-lg border border-[#202922]/10 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-white bg-[#123D2A] px-2 py-0.5 rounded">
                          {item.day}
                        </span>
                        <span className="text-xs font-semibold text-[#123D2A]">{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed pl-1">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/60 space-y-2">
                  <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{t.experiences.included}</span>
                  </div>
                  <ul className="text-xs text-emerald-950 space-y-1.5">
                    {selectedPackage.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/60 space-y-2">
                  <div className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>{t.experiences.excluded}</span>
                  </div>
                  <ul className="text-xs text-amber-950 space-y-1.5">
                    {selectedPackage.excluded.map((exc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing & Customization Note */}
              <div className="p-4 bg-[#F7F4EA] rounded-lg border border-[#202922]/10 text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-[#123D2A]">
                  {t.experiences.pricingGuaranteeTitle}:
                </div>
                <p>
                  {t.experiences.pricingGuaranteeDesc}
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Ideal for: {selectedPackage.recommendedFor}
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onSelectPackage(null)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {t.common.close}
                </button>
                <button
                  onClick={() => {
                    onBookPackage(selectedPackage);
                    onSelectPackage(null);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-[#246B45] hover:bg-[#123D2A] rounded-md transition-colors cursor-pointer shadow-sm"
                >
                  {t.experiences.requestCustomQuote}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
