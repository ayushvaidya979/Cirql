import React from 'react';
import { Globe, Sparkles, ShieldAlert, Recycle } from 'lucide-react';

export const WhyCirql: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full mb-4 shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-emerald-800" />
            <span className="text-xs font-bold text-emerald-900 tracking-wide uppercase">
              Our Environmental Mission
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-sans">
            Why Cirql is the Future
          </h2>

          <p className="text-lg text-slate-600 font-medium">
            Recovering valuable materials from e-waste can reduce pressure on virgin resource extraction.
          </p>
        </div>

        {/* 3 EDITORIAL STATISTIC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#f8faf7] rounded-3xl p-8 border border-slate-200/80 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            
            <div className="text-6xl font-extrabold text-[#1b4332] font-sans tracking-tight mb-3">
              100x
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Richer Than Gold Mines
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              1 tonne of recycled smartphones contains up to 100 times more gold than 1 tonne of raw gold ore mined from the earth.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8faf7] rounded-3xl p-8 border border-slate-200/80 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6">
              <ShieldAlert className="w-6 h-6" />
            </div>

            <div className="text-6xl font-extrabold text-[#1b4332] font-sans tracking-tight mb-3">
              53M
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Tonnes E-Waste Yearly
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              Global e-waste generated annually carries over $57 Billion in unrecovered precious metals like gold, silver, palladium and copper.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8faf7] rounded-3xl p-8 border border-slate-200/80 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6">
              <Recycle className="w-6 h-6" />
            </div>

            <div className="text-6xl font-extrabold text-[#1b4332] font-sans tracking-tight mb-3">
              0%
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Zero-Landfill Pledge
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              100% of e-waste processed through certified Cirql partner facilities is safely refurbished or dismantled with zero toxic landfill residue.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
