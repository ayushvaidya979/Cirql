import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User, Leaf, Recycle, LogOut, Coins, TreePine, ShieldCheck, ChevronDown, HelpCircle } from 'lucide-react';
import { UserProfile } from '../services/api';

interface NavbarProps {
  user: UserProfile | null;
  onOpenAuth: (mode: 'signin' | 'login') => void;
  onOpenScanner: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, onOpenAuth, onOpenScanner, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/help') {
      setActiveSection('help');
      return;
    }

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
  }, [location.pathname]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Value Estimator', href: '#value-estimator', id: 'value-estimator' },
    { name: 'Recyclers', href: '#recyclers', id: 'recyclers' },
    { name: 'Rewards', href: '#rewards', id: 'rewards' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Help', href: '/help', id: 'help' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith('/')) {
      navigate(href);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getInitials = (name: string) => {
    if (!name) return 'U';
    const parts = name.trim().split(' ');
    return parts.length > 1
      ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
      : name.substring(0, 2).toUpperCase();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
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
                <Leaf className="w-6 h-6 text-emerald-400 absolute opacity-90 group-hover:scale-110 transition-transform duration-300" />
                <Recycle className="w-4 h-4 text-emerald-200 absolute bottom-1 right-1 opacity-75 group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
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

          {/* CENTER NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base font-medium transition-colors relative py-1 ${
                    isActive ? 'text-[#234d40] font-bold' : 'text-[#2b2b2b] hover:text-[#234d40]'
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

          {/* RIGHT SIDE: Profile Logo OR Sign In / Login */}
          <div className="hidden sm:flex items-center gap-4">
            {user ? (
              /* ── USER SIGNED IN: PROFILE LOGO AT TOP RIGHT ── */
              <div className="relative" ref={profileRef}>
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-3 bg-white/80 hover:bg-white border border-slate-200/90 shadow-sm hover:shadow-md p-1.5 pr-3.5 rounded-full transition-all duration-200 group"
                >
                  {/* Profile Avatar */}
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-9 h-9 rounded-full object-cover border-2 border-emerald-500 shadow-2xs"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#1b4332] to-[#40916c] text-white flex items-center justify-center font-extrabold text-xs shadow-inner border border-emerald-300/40">
                      {getInitials(user.name)}
                    </div>
                  )}

                  {/* Name and Coins badge */}
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-slate-800 leading-tight max-w-[120px] truncate">
                      {user.name.split(' ')[0]}
                    </span>
                    <span className="text-[10px] font-extrabold text-emerald-800 flex items-center gap-0.5">
                      <Coins className="w-3 h-3 text-amber-700" />
                      {user.cirqlCoins || 100} coins
                    </span>
                  </div>

                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform" />
                </button>

                {/* Profile Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2.5 w-64 glass-card rounded-2xl p-4 shadow-2xl border border-white/90 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 z-50">
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-200/70">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1b4332] to-[#40916c] text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                        {getInitials(user.name)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-extrabold text-slate-900 truncate">{user.name}</h4>
                        <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                      </div>
                    </div>

                    {/* Stats Ribbon */}
                    <div className="grid grid-cols-2 gap-2 my-3 p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-xs">
                      <div>
                        <span className="text-[9px] font-bold uppercase text-slate-500 block">Eco Coins</span>
                        <span className="font-extrabold text-emerald-900 flex items-center gap-1">
                          <Coins className="w-3 h-3 text-amber-700" /> {user.cirqlCoins || 100}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase text-slate-500 block">Trees Planted</span>
                        <span className="font-extrabold text-emerald-900 flex items-center gap-1">
                          <TreePine className="w-3 h-3 text-emerald-700" /> {user.treesPlanted || 0}
                        </span>
                      </div>
                    </div>

                    {/* Quick Scan Action */}
                    <button
                      type="button"
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        onOpenScanner();
                      }}
                      className="w-full mb-2 bg-[#1b4332] hover:bg-[#112a1f] text-white py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Recycle className="w-3.5 h-3.5" />
                      <span>Scan New Device</span>
                    </button>

                    {/* Sign Out Action */}
                    <button
                      type="button"
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        onLogout();
                      }}
                      className="w-full text-left py-2 px-3 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5 text-rose-500" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* ── USER NOT SIGNED IN: SHOW SIGN IN & LOGIN BUTTONS ── */
              <>
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
              </>
            )}
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
                className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-[#234d40] font-bold border-l-4 border-[#234d40]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50/80 rounded-2xl border border-emerald-200/80">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1b4332] to-[#40916c] text-white flex items-center justify-center font-extrabold text-sm">
                      {getInitials(user.name)}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">{user.name}</h4>
                      <p className="text-xs text-emerald-800 font-bold">{user.cirqlCoins || 100} Coins</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onLogout();
                    }}
                    className="w-full text-center py-2.5 rounded-xl text-rose-600 font-bold bg-rose-50 flex items-center justify-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
