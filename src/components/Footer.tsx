import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Send, CheckCircle, Leaf, Recycle, HelpCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
      return;
    }
    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#081c15] text-white pt-20 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-emerald-900/60">
          
          {/* BRAND COLUMN (4 COLS) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#234d40] to-[#2d6a4f] p-0.5 shadow-md flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#234d40] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <Leaf className="w-6 h-6 text-emerald-400 absolute opacity-90 group-hover:scale-110 transition-transform duration-300" />
                  <Recycle className="w-4 h-4 text-emerald-200 absolute bottom-1 right-1 opacity-75 group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-white font-sans">
                  Cir<span className="text-emerald-400">ql</span>
                </span>
                <p className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                  Recycle Today, Build Tomorrow
                </p>
              </div>
            </div>

            <p className="text-xs text-emerald-200/70 leading-relaxed max-w-sm">
              Cirql is an AI-powered e-waste platform connecting consumers and enterprises with responsible recycling and resource recovery.
            </p>
          </div>

          {/* QUICK NAVIGATION (3 COLS) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="hover:text-emerald-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => { e.preventDefault(); handleNavClick('#how-it-works'); }} className="hover:text-emerald-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#value-estimator" onClick={(e) => { e.preventDefault(); handleNavClick('#value-estimator'); }} className="hover:text-emerald-400 transition-colors">Value Estimator</a>
              </li>
              <li>
                <a href="#recyclers" onClick={(e) => { e.preventDefault(); handleNavClick('#recyclers'); }} className="hover:text-emerald-400 transition-colors">Recycler Directory</a>
              </li>
              <li>
                <a href="#rewards" onClick={(e) => { e.preventDefault(); handleNavClick('#rewards'); }} className="hover:text-emerald-400 transition-colors">Green Rewards</a>
              </li>
              <li>
                <Link to="/help" className="text-emerald-300 hover:text-emerald-200 font-bold transition-colors flex items-center gap-1.5 mt-1">
                  <span>Help Center &amp; Support →</span>
                </Link>
              </li>
            </ul>
          </div>


          {/* LEGAL (2 COLS) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              LEGAL &amp; COMPLIANCE
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Data Sanitization</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sustainability SLA</a></li>
            </ul>
          </div>

          {/* STAY UPDATED (3 COLS) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              STAY UPDATED
            </h4>
            <p className="text-xs text-emerald-200/70">
              Subscribe to get eco-mining insights and recycling bonuses.
            </p>

            {subscribed ? (
              <div className="bg-emerald-950 p-3 rounded-xl border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Subscribed! Thank you for joining Cirql.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-emerald-700/60 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.15)',
                  }}
                />
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs shadow transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400/60 font-medium">
          <p>© 2026 Cirql. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-1.5 text-emerald-300 font-bold">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>Building a cleaner circular future.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
