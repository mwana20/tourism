import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId, LanguageCode } from '../types';
import { Globe, Menu, X, Phone, MessageSquare, ChevronDown, Check } from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenTravelInfo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, onOpenTravelInfo }) => {
  const { t, language, setLanguage, availableLanguages } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'destinations', label: t.nav.destinations },
    { id: 'experiences', label: t.nav.experiences },
    { id: 'book', label: t.nav.planAndBook }
  ];

  const handleNavClick = (pageId: PageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLangObj = availableLanguages.find((l) => l.code === language) || availableLanguages[0];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#123D2A] text-[#F7F4EA] text-xs py-2 px-3 sm:px-6 lg:px-8 border-b border-[#246B45]/40 w-full max-w-full overflow-hidden relative z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 sm:gap-4 text-[#F7F4EA]/90 truncate">
            <span className="font-medium text-[#D9AC55] tracking-wide shrink-0">
              {t.brand.location}
            </span>
            <span className="hidden sm:inline text-[#F7F4EA]/40">|</span>
            <a href="tel:+256705750506" className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 text-[#D9AC55] shrink-0" />
              <span>+256 705 750506</span>
            </a>
            <span className="hidden md:inline text-[#F7F4EA]/40">/</span>
            <a href="tel:+256783354352" className="hidden md:inline hover:text-white transition-colors whitespace-nowrap">
              +256 783 354352
            </a>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onOpenTravelInfo && (
              <button
                onClick={onOpenTravelInfo}
                className="hover:text-[#D9AC55] text-[#F7F4EA]/80 transition-colors cursor-pointer hidden md:inline whitespace-nowrap"
              >
                {t.nav.travelerGuide}
              </button>
            )}
            <a
              href="https://wa.me/256705750506?text=Hello%20Mwanaweika%20Tours%20and%20Travel!%20I%20would%20like%20to%20enquire%20about%20a%20safari%20in%20Uganda."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9AC55] hover:text-white flex items-center gap-1.5 transition-colors font-medium whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span>{t.nav.whatsappChat}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar: w-full max-w-full ensures no mobile horizontal scroll */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#202922]/10 transition-all duration-200 w-full max-w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 relative w-full">
          {/* Zone 1: Brand title wordmark (constrained max-width on mobile to avoid overflow) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-none flex items-center gap-2 sm:gap-3 min-w-0 max-w-[calc(100vw-145px)] sm:max-w-none shrink"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#123D2A] flex items-center justify-center text-[#D9AC55] font-serif font-bold text-base sm:text-xl shadow-sm border border-[#246B45] shrink-0">
              M
            </div>
            <div className="min-w-0 overflow-hidden">
              <span className="font-serif text-base sm:text-2xl font-bold tracking-tight text-[#123D2A] block leading-none truncate">
                Mwanaweika
              </span>
              <span className="text-[9px] sm:text-[11px] font-sans uppercase tracking-[0.12em] sm:tracking-[0.2em] text-[#246B45] font-semibold block mt-0.5 sm:mt-1 truncate">
                Tours and Travel
              </span>
            </div>
          </button>

          {/* Zone 2: 4 single-line nav links (desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#202922]/80">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive ? 'text-[#123D2A] font-semibold' : 'hover:text-[#123D2A]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#246B45] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Selector & Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto relative">
            {/* Language Selector Dropdown Container */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-semibold text-[#123D2A] bg-[#F7F4EA] hover:bg-[#e9e4d3] rounded-md transition-all cursor-pointer border border-[#202922]/15 shadow-sm active:scale-95"
                aria-label={t.nav.switchLanguage}
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-4 h-4 text-[#246B45] shrink-0" />
                <span className="font-bold tracking-wide uppercase text-xs">{currentLangObj.code}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                    langDropdownOpen ? 'rotate-180 text-[#246B45]' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu Popover: Fully visible on both mobile and desktop */}
              {langDropdownOpen && (
                <>
                  {/* Backdrop to dismiss when clicking anywhere outside */}
                  <div
                    className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[1px]"
                    onClick={() => setLangDropdownOpen(false)}
                  />

                  <div className="fixed sm:absolute right-2 sm:right-0 top-16 sm:top-full mt-2 w-[calc(100vw-16px)] sm:w-72 max-w-sm bg-white border-2 border-[#246B45]/40 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-600 border-b border-slate-100 flex items-center justify-between bg-[#F7F4EA]/60 rounded-t-lg">
                      <span className="flex items-center gap-1.5 text-[#123D2A]">
                        <Globe className="w-3.5 h-3.5 text-[#246B45]" />
                        <span>{t.nav.switchLanguage}</span>
                      </span>
                      <span className="text-[10px] bg-[#123D2A]/10 text-[#123D2A] px-2 py-0.5 rounded font-bold">
                        {availableLanguages.length}
                      </span>
                    </div>

                    <div className="max-h-80 overflow-y-auto py-1 divide-y divide-slate-100">
                      {availableLanguages.map((l) => {
                        const isCurrent = language === l.code;
                        return (
                          <button
                            type="button"
                            key={l.code}
                            onClick={() => {
                              setLanguage(l.code as LanguageCode);
                              setLangDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                              isCurrent
                                ? 'bg-[#123D2A] text-white font-semibold'
                                : 'text-[#202922] hover:bg-[#F7F4EA]'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className="font-medium">{l.nativeName}</span>
                              <span className={`text-[11px] ${isCurrent ? 'text-[#D9AC55]' : 'text-slate-400'}`}>
                                ({l.name})
                              </span>
                            </span>
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded font-bold ${
                                  isCurrent
                                    ? 'bg-[#246B45] text-white'
                                    : 'bg-slate-100 text-slate-600'
                                }`}
                              >
                                {l.code}
                              </span>
                              {isCurrent && <Check className="w-3.5 h-3.5 text-[#D9AC55]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Primary Action Button (desktop & tablet) */}
            <button
              onClick={() => handleNavClick('book')}
              className="hidden sm:inline-flex px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#246B45] hover:bg-[#123D2A] rounded-md shadow-sm transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 border border-[#246B45]"
            >
              {t.nav.planMySafari}
            </button>

            {/* Mobile Menu Hamburger Button: ALWAYS VISIBLE WITHOUT SCROLLING RIGHT */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center p-2 text-[#123D2A] bg-[#F7F4EA] hover:bg-[#e9e4d3] active:bg-[#ded8c4] rounded-md cursor-pointer transition-colors shrink-0 border border-[#202922]/20 shadow-sm"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#123D2A]" />
              ) : (
                <Menu className="w-5 h-5 text-[#123D2A]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#202922]/10 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-150 shadow-2xl max-h-[85vh] overflow-y-auto">
            {/* Quick Action Button */}
            <button
              onClick={() => handleNavClick('book')}
              className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#246B45] hover:bg-[#123D2A] rounded-md shadow-sm transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{t.nav.planMySafari}</span>
            </button>

            {/* 4 Main Page Links */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3.5 py-3 rounded-md text-base font-medium transition-colors cursor-pointer ${
                    activePage === link.id
                      ? 'bg-[#123D2A] text-white font-semibold'
                      : 'text-[#202922] hover:bg-[#F7F4EA]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              {onOpenTravelInfo && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTravelInfo();
                  }}
                  className="text-left px-3.5 py-3 rounded-md text-base font-medium text-[#246B45] hover:bg-[#F7F4EA] transition-colors cursor-pointer"
                >
                  {t.nav.travelerGuide}
                </button>
              )}
            </div>

            {/* Language Switcher in Mobile Drawer */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#246B45]" />
                <span>{t.nav.switchLanguage}</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {availableLanguages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code as LanguageCode);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 text-xs rounded-lg text-left font-medium flex items-center justify-between transition-colors cursor-pointer border ${
                      language === l.code
                        ? 'bg-[#123D2A] text-white border-[#123D2A] font-semibold'
                        : 'bg-[#F7F4EA] text-[#202922] border-slate-200 hover:bg-[#e9e4d3]'
                    }`}
                  >
                    <span className="truncate">{l.nativeName}</span>
                    <span className={`text-[10px] uppercase font-mono ${language === l.code ? 'text-[#D9AC55]' : 'text-slate-400'}`}>
                      {l.code}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Contact Shortcuts */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://wa.me/256705750506?text=Hello%20Mwanaweika%20Tours!%20I%20am%20interested%20in%20a%20Uganda%20safari."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-sm font-semibold text-[#123D2A] bg-[#D9AC55]/20 hover:bg-[#D9AC55]/30 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#123D2A]" />
                <span>{t.nav.whatsappChat} (+256 705 750506)</span>
              </a>

              <a
                href="tel:+256705750506"
                className="text-xs text-center text-slate-600 py-1 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#246B45]" />
                <span>{t.common.phone}: 0705750506 / 0783354352</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
