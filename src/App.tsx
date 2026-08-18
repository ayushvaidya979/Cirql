import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import { RecentNumbers } from './components/RecentNumbers';
import { Footer } from './components/Footer';

import { AIScannerModal } from './components/AIScannerModal';
import { AuthModal } from './components/AuthModal';
import { BookingModal } from './components/BookingModal';

import { HelpCenter } from './pages/HelpCenter';
import { Recycler } from './types';
import { api, UserProfile } from './services/api';

interface MainLandingProps {
  onOpenScanner: (calcVal?: number, deviceName?: string) => void;
  onBookDropoff: (recycler: Recycler) => void;
}

function MainLanding({ onOpenScanner, onBookDropoff }: MainLandingProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    }
  }, [location]);

  return (
    <main className="flex-grow">
      {/* 01 HERO (Scan CTA protected by Auth gate) */}
      <Hero onOpenScanner={() => onOpenScanner()} />

      {/* 02 HOW CIRQL WORKS */}
      <HowItWorks onOpenScanner={() => onOpenScanner()} />

      {/* 03 VALUE ESTIMATOR (Discover Value CTA protected by Auth gate) */}
      <ValueEstimator onOpenScanner={onOpenScanner} />

      {/* 04 RECYCLER LOCATOR (Book Drop-off CTA protected by Auth gate) */}
      <RecyclerLocator onBookDropoff={onBookDropoff} />

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

      {/* 10 RECENT NUMBERS */}
      <RecentNumbers />

      {/* 11 CONTACT */}
      <Contact />
    </main>
  );
}

function AppContent() {
  const [user, setUser] = useState<UserProfile | null>(() => api.auth.getCurrentUser());
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const [scannerOpen, setScannerOpen] = useState(false);
  const [scannerVal, setScannerVal] = useState(3851);
  const [scannerDevice, setScannerDevice] = useState('Apple Smartphone');

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'login'>('signin');

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRecycler, setSelectedRecycler] = useState<Recycler | null>(null);

  // Sync session with backend on load
  useEffect(() => {
    const token = localStorage.getItem('cirql_token');
    if (token) {
      api.auth
        .getMe()
        .then((res) => {
          if (res.success && res.data?.user) {
            setUser(res.data.user);
            localStorage.setItem('cirql_user', JSON.stringify(res.data.user));
          }
        })
        .catch(() => {
          // Token expired or invalid
        });
    }
  }, []);

  const handleOpenAuth = (mode: 'signin' | 'login') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleLogout = () => {
    api.auth.logout();
    setUser(null);
  };

  const handleAuthSuccess = (authUser: UserProfile) => {
    setUser(authUser);
    if (pendingAction) {
      const actionToRun = pendingAction;
      setPendingAction(null);
      setTimeout(() => {
        actionToRun();
      }, 300);
    }
  };

  // Auth gate helper: prompts sign-in popup if user is not authenticated
  const requireAuth = (action: () => void) => {
    if (!user) {
      setPendingAction(() => action);
      handleOpenAuth('signin');
    } else {
      action();
    }
  };

  // 1. Scan your device / Discover true value CTA
  const handleOpenScanner = (calcVal?: number, deviceName?: string) => {
    requireAuth(() => {
      if (calcVal) setScannerVal(calcVal);
      if (deviceName) setScannerDevice(deviceName);
      setScannerOpen(true);
    });
  };

  // 2. Map section / Recycler drop-off booking CTA
  const handleBookDropoff = (recycler: Recycler) => {
    requireAuth(() => {
      setSelectedRecycler(recycler);
      setBookingModalOpen(true);
    });
  };

  return (
    <div className="min-h-screen bg-[#f8faf7] text-slate-900 font-sans selection:bg-emerald-600 selection:text-white flex flex-col">
      {/* Navigation with dynamic Auth / Profile Logo */}
      <Navbar
        user={user}
        onOpenAuth={handleOpenAuth}
        onOpenScanner={() => handleOpenScanner()}
        onLogout={handleLogout}
      />

      {/* Routed Content */}
      <Routes>
        <Route
          path="/"
          element={
            <MainLanding
              onOpenScanner={handleOpenScanner}
              onBookDropoff={handleBookDropoff}
            />
          }
        />
        <Route path="/help" element={<HelpCenter />} />
        <Route
          path="*"
          element={
            <MainLanding
              onOpenScanner={handleOpenScanner}
              onBookDropoff={handleBookDropoff}
            />
          }
        />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Floating Help Widget mounted outside <Routes> so visible everywhere */}


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
        onClose={() => {
          setAuthModalOpen(false);
          setPendingAction(null);
        }}
        onAuthSuccess={handleAuthSuccess}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        recycler={selectedRecycler}
        onClose={() => {
          setBookingModalOpen(false);
          setSelectedRecycler(null);
        }}
      />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
