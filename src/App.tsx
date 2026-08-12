import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { ValueEstimator } from './components/ValueEstimator';
import { RecyclerLocator } from './components/RecyclerLocator';
import { Rewards } from './components/Rewards';
import { Corporate } from './components/Corporate';
import { WhyCirql } from './components/WhyCirql';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { AIScannerModal } from './components/AIScannerModal';
import { AuthModal } from './components/AuthModal';
import { BookingModal } from './components/BookingModal';
import { Recycler } from './types';

export function App() {
  const [scannerOpen, setScannerOpen] = useState(false);
  const [scannerVal, setScannerVal] = useState(3851);
  const [scannerDevice, setScannerDevice] = useState('Apple Smartphone');

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'login'>('login');

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRecycler, setSelectedRecycler] = useState<Recycler | null>(null);

  const handleOpenScanner = (calcVal?: number, deviceName?: string) => {
    if (calcVal) setScannerVal(calcVal);
    if (deviceName) setScannerDevice(deviceName);
    setScannerOpen(true);
  };

  const handleOpenAuth = (mode: 'signin' | 'login') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleBookDropoff = (recycler: Recycler) => {
    setSelectedRecycler(recycler);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8faf7] text-slate-900 font-sans selection:bg-emerald-600 selection:text-white flex flex-col">
      {/* Navigation */}
      <Navbar onOpenAuth={handleOpenAuth} onOpenScanner={() => handleOpenScanner()} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 01 HERO */}
        <Hero onOpenScanner={() => handleOpenScanner()} />

        {/* 02 HOW CIRQL WORKS */}
        <HowItWorks onOpenScanner={() => handleOpenScanner()} />

        {/* 03 VALUE ESTIMATOR */}
        <ValueEstimator onOpenScanner={handleOpenScanner} />

        {/* 04 RECYCLER LOCATOR */}
        <RecyclerLocator onBookDropoff={handleBookDropoff} />

        {/* 05 GREEN REWARDS */}
        <Rewards />

        {/* 06 CORPORATE E-WASTE */}
        <Corporate />

        {/* 07 WHY CIRQL */}
        <WhyCirql />

        {/* 08 TESTIMONIALS */}
        <Testimonials />

        {/* 09 FAQ */}
        <FAQ />

        {/* 10 CONTACT */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <AIScannerModal
        isOpen={scannerOpen}
        onClose={() => setScannerOpen(false)}
        initialValue={scannerVal}
        initialDevice={scannerDevice}
      />

      <AuthModal
        isOpen={authModalOpen}
        mode={authMode}
        onClose={() => setAuthModalOpen(false)}
      />

      <BookingModal
        recycler={selectedRecycler}
        onClose={() => {
          setBookingModalOpen(false);
          setSelectedRecycler(null);
        }}
      />
    </div>
  );
}

export default App;
