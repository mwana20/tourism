import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import { ChevronRight, ChevronLeft, ArrowDown, ShieldCheck, MapPin, Compass } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onPlan: () => void;
}

interface HeroSlide {
  image: string;
  location: string;
  caption: string;
}

const slides: HeroSlide[] = [
  {
    image: '/src/assets/images/tourists_watching_lions_1792014392788.jpg',
    location: 'Queen Elizabeth National Park',
    caption: 'Tourists observing wild lions from custom 4x4 pop-up Land Cruiser'
  },
  {
    image: '/src/assets/images/safari_boat_cruise_nile_1792014395306.jpg',
    location: 'Kazinga Channel & River Nile',
    caption: 'Safari passenger boat viewing elephants and hippos at the riverbank'
  },
  {
    image: '/src/assets/images/tourists_hiking_rainforest_1792014394040.jpg',
    location: 'Bwindi Impenetrable Forest',
    caption: 'Guided gorilla trekking expedition led by certified UWA rangers'
  },
  {
    image: '/src/assets/images/african_leopard_tree_1792014396244.jpg',
    location: 'Queen Elizabeth & Murchison Falls',
    caption: 'Elusive African leopard resting in a wild fig acacia tree'
  },
  {
    image: '/src/assets/images/tourists_rhino_tracking_1792014395455.jpg',
    location: 'Ziwa Rhino Sanctuary',
    caption: 'Walking on foot with rangers tracking endangered white rhinos'
  },
  {
    image: '/src/assets/images/bwindi_mountain_gorilla_1792011288764.jpg',
    location: 'Bwindi Impenetrable National Park',
    caption: 'Endangered Mountain Gorilla in the mist-shrouded rainforest'
  },
  {
    image: '/src/assets/images/murchison_falls_nile_1792011288609.jpg',
    location: 'Murchison Falls National Park',
    caption: 'The mighty River Nile thundering through the rocky gorge'
  },
  {
    image: '/src/assets/images/queen_elizabeth_elephants_1792011289529.jpg',
    location: 'Queen Elizabeth Savannah Plains',
    caption: 'African bush elephant herd marching under the Rwenzori mountains'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onPlan }) => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[760px] flex items-center justify-center overflow-hidden bg-[#123D2A] text-white">
      {/* Background Cinematic Image Carousel with Scrim */}
      {slides.map((slide, index) => {
        const isCurrent = index === currentSlide;
        return (
          <div
            key={slide.location + index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
            />
            {/* Measured Multi-Stop Scrim for 4.5:1 WCAG AA text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#123D2A] via-[#123D2A]/60 to-black/40" />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        );
      })}

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D9AC55] font-semibold mb-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded border border-[#D9AC55]/30">
          <Compass className="w-3.5 h-3.5" />
          <span>{t.hero.kicker}</span>
        </div>

        {/* Master Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] mb-6 text-balance">
          {t.hero.headline}
        </h1>

        {/* Master Supporting Text */}
        <p className="text-base sm:text-lg lg:text-xl text-[#F7F4EA]/90 max-w-2xl font-normal leading-relaxed mb-8 text-balance">
          {t.hero.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-[#246B45] hover:bg-[#36875B] rounded-md shadow-lg transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 border border-[#36875B]/60"
          >
            <span>{t.hero.exploreBtn}</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onPlan}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-[#123D2A] bg-[#D9AC55] hover:bg-[#ebd28b] rounded-md shadow-lg transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{t.hero.planBtn}</span>
          </button>
        </div>

        {/* Trust Line */}
        <div className="text-xs sm:text-sm text-[#F7F4EA]/80 tracking-wide font-medium">
          {t.hero.trustLine}
        </div>

        {/* Current Scene Location Caption */}
        <div className="mt-8 text-xs text-[#F7F4EA]/70 flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#D9AC55]" />
          <span>{slides[currentSlide].location}</span>
          <span className="text-[#F7F4EA]/40">·</span>
          <span className="italic">{slides[currentSlide].caption}</span>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous scene"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all duration-150 hidden sm:flex cursor-pointer border border-white/10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next scene"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all duration-150 hidden sm:flex cursor-pointer border border-white/10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === currentSlide ? 'w-8 bg-[#D9AC55]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
