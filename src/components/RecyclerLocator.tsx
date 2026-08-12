import React, { useState } from 'react';
import { Search, MapPin, Star, ShieldCheck, CheckCircle, Navigation, ArrowUpRight, Phone, Clock } from 'lucide-react';
import { Recycler } from '../types';

interface RecyclerLocatorProps {
  onBookDropoff: (recycler: Recycler) => void;
}

export const RecyclerLocator: React.FC<RecyclerLocatorProps> = ({ onBookDropoff }) => {
  const [filter, setFilter] = useState<'All' | 'Kiosk' | 'Dismantler'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string>('rec-1');

  const recyclers: Recycler[] = [
    {
      id: 'rec-1',
      name: 'EcoGreen Tech Dismantlers',
      type: 'AUTHORIZED DISMANTLER',
      address: 'Plot 42, Industrial Zone 2, Mumbai, MH',
      distance: '2.4 km away',
      rating: 4.9,
      openStatus: 'Open Today • 9:00 AM - 7:00 PM',
      lat: 45,
      lng: 35,
      certifications: ['e-Stewards', 'R2 Certified', 'ISO 14001'],
      acceptedTypes: ['Smartphones', 'Laptops', 'Batteries', 'PCBs'],
    },
    {
      id: 'rec-2',
      name: 'Cirql Smart Drop-Off Kiosk #08',
      type: '24/7 SMART KIOSK',
      address: 'Phoenix Mall Ground Floor, Lower Parel, Mumbai',
      distance: '3.8 km away',
      rating: 4.8,
      openStatus: 'Open 24/7',
      lat: 65,
      lng: 60,
      certifications: ['ISO 14001', 'Automated Sanitization'],
      acceptedTypes: ['Smartphones', 'Tablets', 'Smartwatches', 'Earbuds'],
    },
    {
      id: 'rec-3',
      name: 'RecycleCraft E-Waste Hub',
      type: 'REFURBISHMENT CENTER',
      address: 'Sector 18, Electronic City, Bengaluru, KA',
      distance: '5.1 km away',
      rating: 4.7,
      openStatus: 'Open Today • 10:00 AM - 6:30 PM',
      lat: 30,
      lng: 70,
      certifications: ['R2 Certified', 'Zero Landfill'],
      acceptedTypes: ['Laptops', 'Desktops', 'Monitors', 'Servers'],
    },
    {
      id: 'rec-4',
      name: 'GreenTech E-Solutions Dismantling',
      type: 'AUTHORIZED DISMANTLER',
      address: 'MIDC Industrial Area, Andheri East, Mumbai',
      distance: '6.4 km away',
      rating: 4.9,
      openStatus: 'Open Today • 8:30 AM - 8:00 PM',
      lat: 75,
      lng: 25,
      certifications: ['e-Stewards', 'ISO 14001', 'CPCB Licensed'],
      acceptedTypes: ['All Heavy E-Waste', 'Corporate Assets', 'Batteries'],
    },
  ];

  const filteredRecyclers = recyclers.filter((r) => {
    const matchesFilter =
      filter === 'All' ||
      (filter === 'Kiosk' && r.type === '24/7 SMART KIOSK') ||
      (filter === 'Dismantler' && r.type === 'AUTHORIZED DISMANTLER');

    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.address.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const selectedRecycler = recyclers.find((r) => r.id === selectedId) || recyclers[0];

  return (
    <section id="recyclers" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span className="text-xs font-bold text-emerald-900 tracking-wide uppercase">
                Certified Recycler Network
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2 font-sans">
              Locate Nearby E-Waste Drop-Offs
            </h2>

            <p className="text-lg text-slate-600 font-medium">
              Find verified recyclers, smart kiosks, and eco-dismantlers near you.
            </p>
          </div>

          {/* Filter Pill Buttons */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setFilter('All')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'All'
                  ? 'bg-[#1b4332] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setFilter('Kiosk')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'Kiosk'
                  ? 'bg-[#1b4332] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              24/7 Kiosks
            </button>
            <button
              onClick={() => setFilter('Dismantler')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'Dismantler'
                  ? 'bg-[#1b4332] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dismantlers
            </button>
          </div>
        </div>

        {/* TWO COLUMN RECYCLER MAP LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: SEARCH & CARDS LIST (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 max-h-[580px]">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search city, pincode, or center name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-2xs"
              />
            </div>

            {/* Scrollable Recyclers List */}
            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1">
              {filteredRecyclers.map((r) => {
                const isSelected = r.id === selectedId;
                return (
                  <div
                    key={r.id}
                    onClick={() => setSelectedId(r.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-emerald-50/40 border-emerald-600 ring-2 ring-emerald-500/20 shadow-md'
                        : 'bg-white border-slate-200/90 hover:border-emerald-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md ${
                        r.type === '24/7 SMART KIOSK'
                          ? 'bg-emerald-100 text-emerald-900'
                          : r.type === 'AUTHORIZED DISMANTLER'
                          ? 'bg-emerald-900 text-emerald-100'
                          : 'bg-slate-100 text-slate-800'
                      }`}>
                        {r.type}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{r.rating}</span>
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-1">{r.name}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{r.address}</span>
                    </p>

                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600 pt-3 border-t border-slate-100">
                      <span className="text-emerald-800 font-bold">{r.distance}</span>
                      <span className="text-slate-500">{r.openStatus}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: STYLIZED DARK INTERACTIVE MAP (7 COLS) */}
          <div className="lg:col-span-7 bg-[#0b1a13] rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden shadow-2xl border border-emerald-500/30 min-h-[480px]">
            
            {/* Map Header Status */}
            <div className="flex justify-between items-center z-10 bg-[#07130d]/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-emerald-900/60 mb-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>GEO-LOCATION ACTIVE (MUMBAI REGION)</span>
              </div>
              <span className="text-emerald-200/70">{filteredRecyclers.length} Centers Displayed</span>
            </div>

            {/* Stylized Map Grid & Pin Canvas */}
            <div className="relative flex-1 w-full my-4 rounded-2xl bg-[#09150f] border border-emerald-950/80 overflow-hidden min-h-[260px] flex items-center justify-center">
              
              {/* Map Road / Grid SVG overlay */}
              <svg className="absolute inset-0 w-full h-full text-emerald-500/10" viewBox="0 0 500 300">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                {/* Stylized roads */}
                <path d="M0 150 Q 250 80, 500 200" stroke="#10b981" strokeWidth="3" strokeOpacity="0.25" fill="none" />
                <path d="M180 0 Q 220 180, 300 300" stroke="#10b981" strokeWidth="2" strokeOpacity="0.2" fill="none" />
                <circle cx="250" cy="140" r="90" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />
              </svg>

              {/* Map Pins for Recyclers */}
              {recyclers.map((r) => {
                const isSelected = r.id === selectedId;
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelectedId(r.id)}
                    className="absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${r.lng}%`, top: `${r.lat}%` }}
                  >
                    <div className="relative">
                      {isSelected && (
                        <span className="absolute -inset-2 rounded-full bg-emerald-400/30 animate-ping"></span>
                      )}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-125 ${
                        isSelected
                          ? 'bg-emerald-400 text-slate-950 ring-4 ring-emerald-500/40 scale-110'
                          : 'bg-[#1b4332] text-emerald-300 border border-emerald-400/50'
                      }`}>
                        <MapPin className="w-4 h-4 fill-current" />
                      </div>
                      <div className="absolute top-9 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white text-[9px] font-mono px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {r.name}
                      </div>
                    </div>
                  </button>
                );
              })}

            </div>

            {/* Selected Recycler Floating Overlay Card (Matching Image 4) */}
            <div className="z-10 bg-white rounded-2xl p-5 shadow-2xl text-slate-900 border border-emerald-100 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                    {selectedRecycler.type}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-1">{selectedRecycler.name}</h4>
                  <p className="text-xs text-slate-500">{selectedRecycler.address}</p>
                </div>

                <button
                  onClick={() => onBookDropoff(selectedRecycler)}
                  className="bg-[#1b4332] hover:bg-[#113123] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shrink-0 transition-all hover:scale-105"
                >
                  Book Drop-off
                </button>
              </div>

              <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-mono text-[10px] text-slate-400 font-bold block mb-1">CERTIFICATIONS</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedRecycler.certifications.map((c) => (
                      <span key={c} className="bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-semibold">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-slate-400 font-bold block mb-1">ACCEPTED E-WASTE</span>
                  <p className="text-slate-700 font-medium text-[11px]">
                    {selectedRecycler.acceptedTypes.join(', ')}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
