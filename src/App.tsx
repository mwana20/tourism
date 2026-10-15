import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { PageId, Destination, SafariPackage } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HomeView } from './components/HomeView';
import { DestinationsView } from './components/DestinationsView';
import { ExperiencesView } from './components/ExperiencesView';
import { PlanAndBookView } from './components/PlanAndBookView';
import { TravelInfoModal } from './components/TravelInfoModal';
import { AdminModal } from './components/AdminModal';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

const MainAppContent: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activePage, setActivePage] = useState<PageId>('home');

  // Selected entities for modals
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<SafariPackage | null>(null);

  // Pre-load states for Plan & Book form
  const [bookingPreloadDest, setBookingPreloadDest] = useState<Destination | null>(null);
  const [bookingPreloadPkg, setBookingPreloadPkg] = useState<SafariPackage | null>(null);

  // Modals
  const [travelInfoOpen, setTravelInfoOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlanDestination = (dest: Destination) => {
    setBookingPreloadDest(dest);
    setActivePage('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookPackage = (pkg: SafariPackage) => {
    setBookingPreloadPkg(pkg);
    setActivePage('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearPreloads = () => {
    setBookingPreloadDest(null);
    setBookingPreloadPkg(null);
  };

  return (
    <div className={`min-h-screen w-full max-w-full overflow-x-hidden flex flex-col relative text-[#202922] ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Fixed Background Image: Seen behind translucent sections including the footer */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/src/assets/images/queen_elizabeth_elephants_1792011289529.jpg"
          alt="Uganda Savannah Landscape with African Elephants"
          className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.12] saturate-[1.1] scale-100"
        />
        {/* Atmospheric lighting gradient overlay that preserves image visibility while maintaining contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#123D2A]/50 via-[#123D2A]/20 to-black/75" />
      </div>

      {/* Navbar with 3-Zone Contract & Language Selector */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenTravelInfo={() => setTravelInfoOpen(true)}
      />

      {/* Main Content Area: Maximum 4 Primary Pages */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden relative z-10">
        {activePage === 'home' && (
          <>
            <HeroSection
              onExplore={() => handleNavigate('destinations')}
              onPlan={() => handleNavigate('book')}
            />
            <HomeView
              onNavigate={handleNavigate}
              onSelectDestination={(dest) => {
                setSelectedDestination(dest);
                setActivePage('destinations');
              }}
              onSelectPackage={(pkg) => {
                setSelectedPackage(pkg);
                setActivePage('experiences');
              }}
            />
          </>
        )}

        {activePage === 'destinations' && (
          <DestinationsView
            selectedDestination={selectedDestination}
            onSelectDestination={setSelectedDestination}
            onPlanDestination={handlePlanDestination}
          />
        )}

        {activePage === 'experiences' && (
          <ExperiencesView
            selectedPackage={selectedPackage}
            onSelectPackage={setSelectedPackage}
            onBookPackage={handleBookPackage}
          />
        )}

        {activePage === 'book' && (
          <PlanAndBookView
            initialDestination={bookingPreloadDest}
            initialPackage={bookingPreloadPkg}
            onClearInitialSelections={handleClearPreloads}
          />
        )}
      </main>

      {/* Footer: Translucent so fixed background is clearly visible behind it */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTravelInfo={() => setTravelInfoOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Global Modals */}
      <TravelInfoModal
        isOpen={travelInfoOpen}
        onClose={() => setTravelInfoOpen(false)}
      />

      <AdminModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
