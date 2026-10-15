import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId, Destination, SafariPackage } from '../types';
import { safariPackages } from '../data/experiences';
import { destinationsData } from '../data/destinations';
import { getDestinationCardSummary, getSafariPackageCardCopy } from '../data/cardTranslations';
import {
  Compass,
  Shield,
  Heart,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  Leaf,
  Star,
  Info,
  Camera,
  X,
  Maximize2
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onSelectDestination: (dest: Destination) => void;
  onSelectPackage: (pkg: SafariPackage) => void;
}

interface SafariMoment {
  image: string;
  tag: string;
  title: string;
  location: string;
  description: string;
}

const safariMoments: SafariMoment[] = [
  {
    image: '/src/assets/images/tourists_watching_lions_1792014392788.jpg',
    tag: 'Savannah Game Drive',
    title: 'Watching Lions from 4x4 Land Cruisers',
    location: 'Queen Elizabeth National Park',
    description: 'Guests observing wild lions resting peacefully in golden morning grass from custom pop-up roof safari vehicles.'
  },
  {
    image: '/src/assets/images/safari_boat_cruise_nile_1792014395306.jpg',
    tag: 'Water Safari',
    title: 'River Nile & Kazinga Boat Cruising',
    location: 'Kazinga Channel & Murchison Falls',
    description: 'Passengers on deck cruising alongside colossal hippo pods and elephant herds drinking at the riverbanks.'
  },
  {
    image: '/src/assets/images/tourists_hiking_rainforest_1792014394040.jpg',
    tag: 'Primate Expedition',
    title: 'Teams Hiking Bwindi Rainforest with Rangers',
    location: 'Bwindi Impenetrable National Park',
    description: 'Adventurous travelers trekking misty mountain ridges with certified Uganda Wildlife Authority guides.'
  },
  {
    image: '/src/assets/images/tourists_rhino_tracking_1792014395455.jpg',
    tag: 'Walking Safari',
    title: 'On-Foot White Rhino Tracking with Rangers',
    location: 'Ziwa Rhino Sanctuary',
    description: 'Walking safely across verdant plains with expert conservation rangers to encounter wild white rhinos.'
  },
  {
    image: '/src/assets/images/african_leopard_tree_1792014396244.jpg',
    tag: 'Big Cat Encounter',
    title: 'Elusive African Leopard in Wild Acacia',
    location: 'Queen Elizabeth & Murchison Falls',
    description: 'Spotting masterfully camouflaged leopards lounging on branches in Ishasha and Kasenyi savannahs.'
  },
  {
    image: '/src/assets/images/kibale_wild_chimpanzee_1792011289913.jpg',
    tag: 'Canopy Primates',
    title: 'Chimpanzee Tracking in Kibale Forest',
    location: 'Kibale National Park',
    description: 'Tracking our closest primate relatives through lush tropical canopy echoing with iconic pant-hoots.'
  }
];

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectDestination,
  onSelectPackage
}) => {
  const { t, language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<SafariMoment | null>(null);

  const featuredPackages = safariPackages.slice(0, 3);
  const previewDestinations = destinationsData.slice(0, 4);

  return (
    <div className="w-full">
      {/* Trust & Verification Strip (translucent over fixed background) */}
      <div className="bg-[#123D2A]/75 backdrop-blur-md text-[#F7F4EA] border-b border-[#246B45]/40 py-4 px-4 sm:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#246B45] flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-[#D9AC55]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">{t.brand.location}</div>
              <div className="text-[11px] text-[#F7F4EA]/70">Locally Based Operator</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#246B45] flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 text-[#D9AC55]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Licensed UWA Guides</div>
              <div className="text-[11px] text-[#F7F4EA]/70">Official Wildlife Protocols</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#246B45] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#D9AC55]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">100% Tailor-Made</div>
              <div className="text-[11px] text-[#F7F4EA]/70">Private & Custom Safaris</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#246B45] flex items-center justify-center shrink-0">
              <Leaf className="w-4 h-4 text-[#D9AC55]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">{t.footer.ethicalStandards}</div>
              <div className="text-[11px] text-[#F7F4EA]/70">Habitat & Community Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction: The Pearl of Africa (translucent ivory over fixed background) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F7F4EA]/90 backdrop-blur-md rounded-2xl p-6 sm:p-12 border border-[#202922]/10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#246B45]">
                <span>01</span>
                <span>·</span>
                <span>{t.home.welcomeBadge}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123D2A] leading-tight text-balance">
                {t.home.welcomeTitle}
              </h2>

              <p className="text-[#202922]/85 text-base sm:text-lg leading-relaxed">
                {t.home.welcomeText1}
              </p>

              <p className="text-[#202922]/85 text-base sm:text-lg leading-relaxed">
                {t.home.welcomeText2}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('destinations')}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#123D2A] hover:bg-[#246B45] rounded-md transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>{t.hero.exploreBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('book')}
                  className="px-6 py-3 text-sm font-semibold text-[#123D2A] bg-white hover:bg-slate-50 border border-[#202922]/15 rounded-md transition-colors cursor-pointer"
                >
                  {t.common.requestQuote}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#202922]/10 bg-white">
                <img
                  src="/src/assets/images/bwindi_mountain_gorilla_1792011288764.jpg"
                  alt="Mountain gorilla in Bwindi rainforest"
                  referrerPolicy="no-referrer"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#D9AC55] font-semibold block mb-1">
                    Bwindi Impenetrable Forest
                  </span>
                  <h3 className="font-serif text-xl font-bold leading-snug">
                    Over 50% of the World’s Wild Mountain Gorillas
                  </h3>
                  <p className="text-xs text-[#F7F4EA]/80 mt-1">
                    Protected under strict Uganda Wildlife Authority conservation rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Safari Packages (Translucent White Card Section) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/92 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-[#202922]/10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#246B45] mb-2">
                <span>02</span>
                <span>·</span>
                <span>{t.experiences.title}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D2A]">
                {t.home.featuredSafaris}
              </h2>
              <p className="text-sm sm:text-base text-[#202922]/70 mt-2 max-w-2xl">
                {t.home.featuredSafarisSub}
              </p>
            </div>

            <button
              onClick={() => onNavigate('experiences')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#246B45] hover:text-[#123D2A] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>{t.home.viewAllCircuits}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => {
              const cardCopy = getSafariPackageCardCopy(language, pkg.id, pkg.title, pkg.overview);
              return (
              <div
                key={pkg.id}
                className="bg-[#F7F4EA] rounded-xl overflow-hidden border border-[#202922]/10 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={cardCopy.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#123D2A]/90 text-[#F7F4EA] text-xs font-medium px-3 py-1 rounded backdrop-blur-sm">
                    {pkg.durationLabel}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] uppercase tracking-wider text-[#D9AC55] font-semibold">
                      {pkg.travelStyle} Safari
                    </span>
                    <h3 className="font-serif text-lg font-bold leading-tight">
                      {cardCopy.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-[#202922]/75 leading-relaxed line-clamp-3">
                    {cardCopy.summary}
                  </p>

                  <div className="space-y-1.5 border-t border-[#202922]/10 pt-3">
                    <div className="text-xs font-semibold text-[#123D2A]">{t.common.highlights}:</div>
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="text-xs text-[#202922]/80 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#246B45] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-[#123D2A] hover:bg-[#246B45] rounded transition-colors text-center cursor-pointer"
                    >
                      {t.common.viewDetails}
                    </button>
                    <button
                      onClick={() => onNavigate('book')}
                      className="py-2.5 px-3 text-xs font-semibold text-[#123D2A] bg-white hover:bg-slate-50 border border-[#202922]/15 rounded transition-colors text-center cursor-pointer"
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
      </section>

      {/* NEW DEDICATED SECTION: Life on Safari — Real Travelers & Wildlife In Action */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#123D2A]/85 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-[#D9AC55]/30 shadow-xl text-white space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D9AC55] mb-2">
                <Camera className="w-4 h-4" />
                <span>Moments From The Trail</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Life on Safari: In the Field with Mwanaweika
              </h2>
              <p className="text-sm text-[#F7F4EA]/80 mt-2 max-w-2xl leading-relaxed">
                From hiking misty rainforest canopies with official park rangers to drifting past bathing elephants on the River Nile and tracking savannah lions from open Land Cruisers.
              </p>
            </div>

            <button
              onClick={() => onNavigate('book')}
              className="px-6 py-2.5 bg-[#D9AC55] hover:bg-[#ebd28b] text-[#123D2A] font-semibold text-xs rounded-md transition-colors cursor-pointer self-start md:self-auto shadow-md"
            >
              Plan Your Adventure
            </button>
          </div>

          {/* 6-Card High-Fidelity Photo Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariMoments.map((moment, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(moment)}
                className="group cursor-pointer rounded-xl overflow-hidden bg-black/40 border border-[#D9AC55]/30 hover:border-[#D9AC55] transition-all duration-300 flex flex-col hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#123D2A]/90 text-[#D9AC55] text-[11px] font-semibold px-2.5 py-0.5 rounded border border-[#D9AC55]/30 backdrop-blur-sm">
                    {moment.tag}
                  </div>

                  {/* Zoom indicator */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-[#D9AC55]" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#D9AC55] font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{moment.location}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold leading-tight group-hover:text-[#D9AC55] transition-colors">
                      {moment.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2 bg-[#123D2A]/60">
                  <p className="text-xs text-[#F7F4EA]/80 leading-relaxed">
                    {moment.description}
                  </p>
                  <div className="text-[11px] text-[#D9AC55] font-semibold flex items-center gap-1 pt-1">
                    <span>View photo details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Preview (Translucent Ivory Section) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F4EA]/90 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-[#202922]/10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#246B45] mb-2">
                <span>03</span>
                <span>·</span>
                <span>{t.destinations.title}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D2A]">
                {t.home.destinationsPreviewTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#202922]/70 mt-2 max-w-2xl">
                {t.home.destinationsPreviewSub}
              </p>
            </div>

            <button
              onClick={() => onNavigate('destinations')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#246B45] hover:text-[#123D2A] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>{t.home.exploreAllDestinations}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewDestinations.map((dest) => {
              const summary = getDestinationCardSummary(language, dest.id, dest.shortDesc);
              return (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-[#202922]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/90 text-[#123D2A] text-[11px] font-semibold px-2 py-0.5 rounded">
                    {dest.regionLabel}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif text-base font-bold leading-tight group-hover:text-[#D9AC55] transition-colors">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-[#202922]/75 line-clamp-2 leading-relaxed">
                    {summary}
                  </p>

                  <div className="text-[11px] text-[#246B45] font-semibold flex items-center justify-between border-t border-slate-100 pt-2">
                    <span>{dest.duration}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      {t.common.learnMore} &rarr;
                    </span>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Journey with Mwanaweika: VISIBLE WINDOW OVER FIXED BACKGROUND */}
      <section className="py-24 bg-[#123D2A]/45 backdrop-blur-md text-[#F7F4EA] border-y border-[#D9AC55]/30 relative z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D9AC55] mb-3">
              <span>04</span>
              <span>·</span>
              <span>{t.home.whyUsTitle}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              {t.home.whyUsTitle}
            </h2>
            <p className="text-[#F7F4EA]/90 text-base leading-relaxed text-balance">
              {t.home.whyUsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#123D2A]/75 backdrop-blur-sm p-6 rounded-xl border border-[#D9AC55]/30 hover:border-[#D9AC55]/70 hover:bg-[#123D2A]/90 transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#246B45] flex items-center justify-center text-[#D9AC55]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">{t.home.reason1Title}</h3>
              <p className="text-xs text-[#F7F4EA]/80 leading-relaxed">{t.home.reason1Desc}</p>
            </div>

            <div className="bg-[#123D2A]/75 backdrop-blur-sm p-6 rounded-xl border border-[#D9AC55]/30 hover:border-[#D9AC55]/70 hover:bg-[#123D2A]/90 transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#246B45] flex items-center justify-center text-[#D9AC55]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">{t.home.reason2Title}</h3>
              <p className="text-xs text-[#F7F4EA]/80 leading-relaxed">{t.home.reason2Desc}</p>
            </div>

            <div className="bg-[#123D2A]/75 backdrop-blur-sm p-6 rounded-xl border border-[#D9AC55]/30 hover:border-[#D9AC55]/70 hover:bg-[#123D2A]/90 transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#246B45] flex items-center justify-center text-[#D9AC55]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">{t.home.reason3Title}</h3>
              <p className="text-xs text-[#F7F4EA]/80 leading-relaxed">{t.home.reason3Desc}</p>
            </div>

            <div className="bg-[#123D2A]/75 backdrop-blur-sm p-6 rounded-xl border border-[#D9AC55]/30 hover:border-[#D9AC55]/70 hover:bg-[#123D2A]/90 transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#246B45] flex items-center justify-center text-[#D9AC55]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">{t.home.reason4Title}</h3>
              <p className="text-xs text-[#F7F4EA]/80 leading-relaxed">{t.home.reason4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Documentary & Ethical Sighting Honesty */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/92 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-[#202922]/10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#246B45]">
                <Leaf className="w-3.5 h-3.5" />
                <span>{t.home.wildlifeEthicsKicker}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D2A]">
                {t.home.wildlifeEthicsTitle}
              </h3>
              <p className="text-sm text-[#202922]/80 leading-relaxed">
                {t.home.wildlifeEthicsText}
              </p>
              <div className="p-4 bg-[#F7F4EA] rounded-lg border border-[#202922]/10 flex items-start gap-3 text-xs text-[#202922]/80">
                <Info className="w-4 h-4 text-[#246B45] shrink-0 mt-0.5" />
                <div>
                  <strong>{t.home.cheetahNoticeTitle}</strong> {t.home.cheetahNoticeText}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="p-5 bg-[#123D2A] text-white rounded-xl shadow-md">
                <div className="text-2xl font-serif font-bold text-[#D9AC55]">98%+</div>
                <div className="text-xs font-semibold mt-0.5">Historical Gorilla Tracking Success</div>
                <div className="text-[11px] text-[#F7F4EA]/70 mt-1">
                  On permitted habituated family treks led by Uganda Wildlife Authority rangers.
                </div>
              </div>

              <div className="p-5 bg-[#246B45] text-white rounded-xl shadow-md">
                <div className="text-2xl font-serif font-bold text-white">1,060+</div>
                <div className="text-xs font-semibold mt-0.5">Recorded Bird Species</div>
                <div className="text-[11px] text-[#F7F4EA]/80 mt-1">
                  Including Albertine Rift endemics and the rare prehistoric Shoebill stork.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F4EA]/90 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-[#202922]/10 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#246B45] mb-2">
              <span>05</span>
              <span>·</span>
              <span>{t.home.testimonialsTitle}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D2A]">
              {t.home.testimonialsTitle}
            </h2>
            <p className="text-sm text-[#202922]/70 mt-2">
              {t.home.testimonialsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white border border-[#202922]/10 space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#D9AC55]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#202922]/85 italic leading-relaxed">
                  “Standing three meters from a silverback gorilla in Bwindi was the single most humbling moment of my life. Mwanaweika arranged our permits seamlessly and our guide was an absolute fountain of knowledge.”
                </p>
              </div>
              <div className="pt-3 border-t border-[#202922]/10">
                <div className="text-xs font-bold text-[#123D2A]">Dr. Helen & David Vance</div>
                <div className="text-[11px] text-slate-500">London, United Kingdom · 7-Day Classic Safari</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#202922]/10 space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#D9AC55]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#202922]/85 italic leading-relaxed">
                  “As a wildlife photographer, timing and angles are everything. The team gave us our own private 4x4 with open roof hatches and beanbag mounts. We photographed lions in Ishasha and elephants bathing in Kazinga.”
                </p>
              </div>
              <div className="pt-3 border-t border-[#202922]/10">
                <div className="text-xs font-bold text-[#123D2A]">Marcus & Elena Weber</div>
                <div className="text-[11px] text-slate-500">Munich, Germany · Wildlife Photography Tour</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#202922]/10 space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#D9AC55]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#202922]/85 italic leading-relaxed">
                  “We traveled with our 10-year-old and 13-year-old. The boat cruises on Murchison Falls and walking with zebras in Lake Mburo were perfectly tailored to our pace. Honest, warm, and deeply professional team.”
                </p>
              </div>
              <div className="pt-3 border-t border-[#202922]/10">
                <div className="text-xs font-bold text-[#123D2A]">The Dubois Family</div>
                <div className="text-[11px] text-slate-500">Lyon, France · Family Safari Circuit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner (Translucent over fixed background) */}
      <section className="py-24 sm:py-28 bg-[#123D2A]/40 backdrop-blur-md text-white relative z-10 overflow-hidden border-t border-[#D9AC55]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D9AC55] font-semibold block">
            {t.home.ctaKicker}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto text-balance">
            {t.home.ctaTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#F7F4EA]/90 max-w-2xl mx-auto leading-relaxed">
            {t.home.ctaSubtitle}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('book')}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-[#123D2A] bg-[#D9AC55] hover:bg-[#ebd28b] rounded-md transition-all cursor-pointer shadow-xl"
            >
              {t.nav.planMySafari}
            </button>

            <a
              href="https://wa.me/256705750506?text=Hello%20Mwanaweika%20Tours!%20I%20am%20ready%20to%20plan%20my%20Uganda%20safari."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-[#246B45]/90 hover:bg-[#246B45] backdrop-blur-sm rounded-md transition-all cursor-pointer border border-[#36875B] shadow-xl"
            >
              {t.home.ctaWhatsApp}
            </a>
          </div>
        </div>
      </section>

      {/* PHOTO PREVIEW MODAL */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 my-6">
            <div className="relative max-h-[70vh] bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[70vh] object-contain mx-auto"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
                aria-label={t.common.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-white space-y-3">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-wider text-[#246B45] font-semibold bg-[#F7F4EA] px-2.5 py-1 rounded">
                  {selectedPhoto.tag}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#246B45]" />
                  <span>{selectedPhoto.location}</span>
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#123D2A]">
                {selectedPhoto.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedPhoto.description}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {t.common.close}
                </button>
                <button
                  onClick={() => {
                    setSelectedPhoto(null);
                    onNavigate('book');
                  }}
                  className="px-6 py-2 text-xs font-semibold text-white bg-[#246B45] hover:bg-[#123D2A] rounded-md transition-colors cursor-pointer shadow-sm"
                >
                  Plan This Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
