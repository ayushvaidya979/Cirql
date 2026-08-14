import React, { useState, useEffect } from 'react';
import { Menu, X, User, Leaf, Recycle } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (mode: 'signin' | 'login') => void;
  onOpenScanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onOpenScanner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'how-it-works', 'value-estimator', 'recyclers', 'rewards', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Value Estimator', href: '#value-estimator', id: 'value-estimator' },
    { name: 'Recyclers', href: '#recyclers', id: 'recyclers' },
    { name: 'Rewards', href: '#rewards', id: 'rewards' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e && e.preventDefault) e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'glass-nav py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between">

          {/* LEFT SIDE: Cirql Logo & Tagline */}
          <div
            className="flex items-center gap-3 cursor-pointer flex-shrink-0"
            onClick={(e) => handleNavClick(e as any, '#home')}
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#234d40] to-[#2d6a4f] p-0.5 shadow-md flex items-center justify-center group hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#234d40] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                {/* Leaf */}
                <Leaf
                  className="w-6 h-6 text-emerald-400 absolute opacity-90 group-hover:scale-110 transition-transform duration-300"
                />
                {/* Recycle Symbol */}
                <Recycle
                  className="w-4 h-4 text-emerald-200 absolute bottom-1 right-1 opacity-75 group-hover:rotate-12 transition-transform duration-300"
                  strokeWidth={2.5}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-sans">
                  Cir<span className="text-[#234d40]">ql</span>
                </span>
              </div>

              <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Recycle Today, Build Tomorrow
              </p>
            </div>
          </div>

          {/* CENTER NAVIGATION: Horizontally Centered */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base font-medium transition-colors relative py-1 ${isActive ? 'text-[#234d40] font-bold' : 'text-[#2b2b2b] hover:text-[#234d40]'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#234d40] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT SIDE: Sign In | [Login] */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenAuth('signin')}
              className="text-base font-medium text-[#2b2b2b] hover:text-[#2d6457] transition-colors py-2 px-1"
            >
              Sign In
            </button>

            <span className="h-4 w-[1px] bg-slate-300"></span>

            <button
              onClick={() => onOpenAuth('login')}
              className="flex items-center gap-2 bg-[#2d6457] hover:bg-[#234d40] text-white px-6 py-2.5 rounded-full font-medium text-base transition-all duration-200 hover:scale-[1.02] shadow-2xs"
            >
              <User className="w-4 h-4 text-white" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-emerald-950 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-b px-6 pt-4 pb-6 mt-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${activeSection === link.id
                    ? 'bg-emerald-50 text-[#234d40] font-bold border-l-4 border-[#234d40]'
                    : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signin');
                }}
                className="w-full text-center py-2.5 rounded-xl text-slate-700 font-semibold border border-slate-200"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="w-full text-center py-2.5 rounded-xl text-white font-semibold bg-[#2d6457] flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-white" />
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
