import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId, LanguageCode } from '../types';
import { Phone, Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenTravelInfo: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenTravelInfo,
  onOpenAdmin
}) => {
  const { t, language, setLanguage, availableLanguages } = useLanguage();

  return (
    <footer className="relative z-10 bg-[#123D2A]/65 backdrop-blur-md text-[#F7F4EA] border-t border-[#D9AC55]/40 pt-16 pb-12 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#246B45] flex items-center justify-center text-[#D9AC55] font-serif font-bold text-xl shadow-sm border border-[#36875B]/60 shrink-0">
                M
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  {t.brand.name}
                </span>
                <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#D9AC55] font-semibold block">
                  {t.brand.location}
                </span>
              </div>
            </div>

            <p className="text-sm font-serif italic text-[#D9AC55] max-w-sm">
              “{t.brand.slogan}”
            </p>

            <p className="text-xs text-[#F7F4EA]/80 leading-relaxed max-w-sm">
              {t.hero.subheadline}
            </p>

            {/* Direct Contacts */}
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-[#F7F4EA]/90">
                <MapPin className="w-4 h-4 text-[#D9AC55] shrink-0" />
                <span>Mukono, Uganda (East Africa)</span>
              </div>

              <div className="flex items-center gap-2.5 text-[#F7F4EA]/90 flex-wrap">
                <Phone className="w-4 h-4 text-[#D9AC55] shrink-0" />
                <a href="tel:+256705750506" className="hover:text-white transition-colors">
                  +256 705 750506
                </a>
                <span className="text-white/40">·</span>
                <a href="tel:+256783354352" className="hover:text-white transition-colors">
                  +256 783 354352
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-[#F7F4EA]/90">
                <Mail className="w-4 h-4 text-[#D9AC55] shrink-0" />
                <a href="mailto:phillipmwanaweika@gmail.com" className="hover:text-white transition-colors">
                  phillipmwanaweika@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9AC55]">
              {t.footer.quickNav}
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F4EA]/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.destinations}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experiences')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.experiences}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('book')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.planAndBook}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTravelInfo}
                  className="hover:text-white transition-colors cursor-pointer text-[#D9AC55] text-left"
                >
                  {t.nav.travelerGuide}
                </button>
              </li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9AC55]">
              {t.footer.signatureDest}
            </h4>
            <ul className="space-y-1.5 text-xs text-[#F7F4EA]/80">
              <li>Bwindi Impenetrable National Park</li>
              <li>Queen Elizabeth National Park</li>
              <li>Murchison Falls National Park</li>
              <li>Kibale Forest National Park</li>
              <li>Kidepo Valley National Park</li>
              <li>Rwenzori Mountains</li>
              <li>Jinja & Source of the Nile</li>
              <li>Lake Bunyonyi</li>
            </ul>
          </div>

          {/* Responsible Tourism & Language selector */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9AC55]">
              {t.footer.ethicalStandards}
            </h4>
            <p className="text-xs text-[#F7F4EA]/80 leading-relaxed">
              {t.footer.ethicalDesc}
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-[#D9AC55] block mb-1.5 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>{t.nav.switchLanguage}:</span>
              </span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                className="w-full bg-[#123D2A]/90 text-white text-xs border border-[#246B45] rounded-md p-2 focus:outline-none focus:border-[#D9AC55] cursor-pointer"
                aria-label={t.nav.switchLanguage}
              >
                {availableLanguages.map((l) => (
                  <option key={l.code} value={l.code} className="bg-[#123D2A] text-white">
                    {l.nativeName} ({l.name}) [{l.code.toUpperCase()}]
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Staff Link */}
        <div className="pt-8 border-t border-[#246B45]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F4EA]/70">
          <div>
            &copy; {new Date().getFullYear()} {t.brand.name}. {t.footer.allRightsReserved} {t.brand.location}.
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <button
              onClick={onOpenTravelInfo}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.travelInfo}
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('book')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.bookingTerms}
            </button>
            <span>·</span>
            <button
              onClick={onOpenAdmin}
              className="text-[#D9AC55] hover:text-white transition-colors cursor-pointer font-medium"
            >
              {t.footer.staffPortal}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
