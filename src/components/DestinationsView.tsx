import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Destination } from '../types';
import { destinationsData } from '../data/destinations';
import { getDestinationCardSummary } from '../data/cardTranslations';
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Compass,
  ArrowRight,
  X,
  CheckCircle2,
  Sparkles,
  Info,
  Layers
} from 'lucide-react';

interface DestinationsViewProps {
  selectedDestination: Destination | null;
  onSelectDestination: (dest: Destination | null) => void;
  onPlanDestination: (dest: Destination) => void;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({
  selectedDestination,
  onSelectDestination,
  onPlanDestination
}) => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const regions = [
    { id: 'all', label: t.destinations.allRegions },
    { id: 'southwestern', label: 'Southwestern Highlands' },
    { id: 'western', label: 'Western Albertine Rift' },
    { id: 'northern', label: 'Northern & Nile Basin' },
    { id: 'eastern', label: 'Eastern & Mount Elgon' },
    { id: 'central', label: 'Central & Lake Victoria' }
  ];

  const filteredDestinations = useMemo(() => {
    return destinationsData.filter((dest) => {
      const matchesRegion = selectedRegion === 'all' || dest.region === selectedRegion;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        dest.name.toLowerCase().includes(q) ||
        dest.shortDesc.toLowerCase().includes(q) ||
        dest.activities.some((a) => a.toLowerCase().includes(q)) ||
        dest.wildlifeHighlights.some((w) => w.toLowerCase().includes(q));
      return matchesRegion && matchesSearch;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <div className="w-full bg-[#F7F4EA]/90 backdrop-blur-md min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#246B45]">
            <Compass className="w-4 h-4" />
            <span>{t.destinations.kicker}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D2A] tracking-tight">
            {t.destinations.title}
          </h1>

          <p className="text-sm sm:text-base text-[#202922]/80 max-w-3xl leading-relaxed">
            {t.destinations.subtitle}
          </p>
        </div>

        {/* Search & Region Filters */}
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#202922]/10 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.common.search}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F7F4EA]/60 border border-[#202922]/15 rounded-md focus:outline-none focus:border-[#246B45] focus:ring-1 focus:ring-[#246B45]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Count */}
            <div className="text-xs font-medium text-slate-500 whitespace-nowrap self-end md:self-center">
              {t.destinations.showing} <span className="font-bold text-[#123D2A]">{filteredDestinations.length}</span> {t.destinations.verifiedCount}
            </div>
          </div>

          {/* Region Tabs (Button / Segmented Filter Controls) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 pb-1 border-t border-slate-100">
            {regions.map((reg) => {
              const active = selectedRegion === reg.id;
              return (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegion(reg.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    active
                      ? 'bg-[#123D2A] text-white shadow-sm'
                      : 'bg-[#F7F4EA] text-[#202922]/80 hover:bg-[#e9e4d3]'
                  }`}
                >
                  {reg.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-xl overflow-hidden border border-[#202922]/10 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#123D2A]/90 text-white text-[11px] font-medium px-2.5 py-1 rounded backdrop-blur-sm">
                  {dest.regionLabel}
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl font-bold leading-tight group-hover:text-[#D9AC55] transition-colors">
                    {dest.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#202922]/80 leading-relaxed line-clamp-3">
                  {getDestinationCardSummary(language, dest.id, dest.shortDesc)}
                </p>

                <div className="space-y-2 border-t border-[#202922]/10 pt-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-[#246B45] shrink-0" />
                    <span>{t.destinations.recommendedStay}: <strong>{dest.duration}</strong></span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-3.5 h-3.5 text-[#246B45] shrink-0" />
                    <span className="line-clamp-1">{dest.bestSeason}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-[#123D2A] bg-[#F7F4EA] hover:bg-[#e9e4d3] rounded transition-colors text-center cursor-pointer border border-[#202922]/10"
                  >
                    {t.common.viewDetails}
                  </button>

                  <button
                    onClick={() => onPlanDestination(dest)}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-[#246B45] hover:bg-[#123D2A] rounded transition-colors text-center cursor-pointer shadow-sm"
                  >
                    {t.common.planVisit}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300 p-8">
            <Compass className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#123D2A]">No destinations matched your search</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Try searching for different keywords such as "gorilla", "chimp", "waterfall", or reset your region filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#123D2A] rounded-md"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8">
            {/* Modal Image Header */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <img
                src={selectedDestination.heroImage}
                alt={selectedDestination.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <button
                onClick={() => onSelectDestination(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors cursor-pointer"
                aria-label={t.common.close}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#D9AC55] font-semibold">
                  {selectedDestination.regionLabel}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  {selectedDestination.name}
                </h2>
                {selectedDestination.altitude && (
                  <p className="text-xs text-[#F7F4EA]/80">
                    Elevation: {selectedDestination.altitude}
                  </p>
                )}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#123D2A]">{t.destinations.overview}</h3>
                <p className="text-xs sm:text-sm text-[#202922]/85 leading-relaxed">
                  {selectedDestination.fullDesc}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <h3 className="font-serif text-base font-bold text-[#123D2A]">{t.destinations.modalHighlights}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDestination.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-[#202922]/80 flex items-start gap-2 bg-[#F7F4EA] p-2.5 rounded">
                      <CheckCircle2 className="w-4 h-4 text-[#246B45] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wildlife Spotlight */}
              {selectedDestination.wildlifeHighlights.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-serif text-base font-bold text-[#123D2A]">{t.destinations.modalWildlife}</h3>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                    {selectedDestination.wildlifeHighlights.map((w, i) => (
                      <span key={i} className="bg-slate-100 px-2.5 py-1 rounded text-slate-800 font-medium">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Practical Guidance Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F7F4EA] p-4 rounded-xl text-xs">
                <div>
                  <span className="font-semibold text-[#123D2A] block mb-1">{t.destinations.recommendedStay}:</span>
                  <p className="text-slate-700">{selectedDestination.duration}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#123D2A] block mb-1">{t.common.bestSeason}:</span>
                  <p className="text-slate-700">{selectedDestination.bestSeason}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#123D2A] block mb-1">{t.common.travelerProfile}:</span>
                  <p className="text-slate-700">{selectedDestination.travelerType}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#123D2A] block mb-1">{t.destinations.modalPractical}:</span>
                  <p className="text-slate-700">{selectedDestination.practicalTips}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Custom quotes prepared by our Mukono travel desk within 24 hours.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onSelectDestination(null)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {t.common.close}
                </button>
                <button
                  onClick={() => {
                    onPlanDestination(selectedDestination);
                    onSelectDestination(null);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-[#246B45] hover:bg-[#123D2A] rounded-md transition-colors cursor-pointer shadow-sm"
                >
                  {t.destinations.planSafariTo} {selectedDestination.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
