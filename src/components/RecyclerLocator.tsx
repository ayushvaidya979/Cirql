import React, { useState, useEffect, useRef } from 'react';
import {
  Search, MapPin, Star, ShieldCheck, CheckCircle, Navigation,
  ArrowUpRight, Phone, Clock, Layers, Maximize2, LocateFixed, Sparkles, ExternalLink
} from 'lucide-react';
import L from 'leaflet';
import { Recycler } from '../types';

interface RecyclerLocatorProps {
  onBookDropoff: (recycler: Recycler) => void;
}

/* ─────────────────────────────────────────────────────────────────────────────
   MOCK RECYCLERS WITH ACCURATE GEOGRAPHIC COORDINATES (MUMBAI REGION)
───────────────────────────────────────────────────────────────────────────── */
const RECYCLERS: Recycler[] = [
  {
    id: 'rec-1',
    name: 'EcoGreen Tech Dismantlers',
    type: 'AUTHORIZED DISMANTLER',
    address: 'Plot 42, MIDC Industrial Zone 2, Andheri East, Mumbai',
    distance: '2.4 km away',
    rating: 4.9,
    openStatus: 'Open Today • 9:00 AM - 7:00 PM',
    lat: 19.1197,
    lng: 72.8464,
    certifications: ['e-Stewards', 'R2 Certified', 'ISO 14001', 'CPCB Licensed'],
    acceptedTypes: ['Smartphones', 'Laptops', 'Batteries', 'PCBs', 'Monitors'],
  },
  {
    id: 'rec-2',
    name: 'Cirql Smart Drop-Off Kiosk #08',
    type: '24/7 SMART KIOSK',
    address: 'Phoenix Palladium Mall, Lower Parel, Mumbai',
    distance: '3.8 km away',
    rating: 4.8,
    openStatus: 'Open 24/7',
    lat: 18.9950,
    lng: 72.8258,
    certifications: ['ISO 14001', 'Automated Sanitization'],
    acceptedTypes: ['Smartphones', 'Tablets', 'Smartwatches', 'Earbuds'],
  },
  {
    id: 'rec-3',
    name: 'RecycleCraft E-Waste Hub',
    type: 'REFURBISHMENT CENTER',
    address: 'BKC G-Block, Bandra Kurla Complex, Mumbai',
    distance: '4.5 km away',
    rating: 4.7,
    openStatus: 'Open Today • 10:00 AM - 6:30 PM',
    lat: 19.0657,
    lng: 72.8686,
    certifications: ['R2 Certified', 'Zero Landfill', 'NIST Data Wipe'],
    acceptedTypes: ['Laptops', 'Desktops', 'Monitors', 'Servers', 'PCBs'],
  },
  {
    id: 'rec-4',
    name: 'GreenTech E-Solutions Dismantling',
    type: 'AUTHORIZED DISMANTLER',
    address: 'Marol Industrial Estate, Andheri East, Mumbai',
    distance: '6.2 km away',
    rating: 4.9,
    openStatus: 'Open Today • 8:30 AM - 8:00 PM',
    lat: 19.1136,
    lng: 72.8697,
    certifications: ['e-Stewards', 'ISO 14001', 'CPCB Licensed'],
    acceptedTypes: ['All Heavy E-Waste', 'Corporate Assets', 'Batteries'],
  },
  {
    id: 'rec-5',
    name: 'CleanEarth Recovery Center',
    type: 'REFURBISHMENT CENTER',
    address: 'Hiranandani Business Park, Powai, Mumbai',
    distance: '7.1 km away',
    rating: 4.8,
    openStatus: 'Open Today • 9:30 AM - 7:00 PM',
    lat: 19.1176,
    lng: 72.9060,
    certifications: ['R2 Certified', 'ISO 9001', 'Zero Waste certified'],
    acceptedTypes: ['Telecom Gear', 'Servers', 'Smartphones', 'Laptops'],
  },
  {
    id: 'rec-6',
    name: 'Cirql EcoKiosk #14',
    type: '24/7 SMART KIOSK',
    address: 'Infiniti Mall, Malad West, Mumbai',
    distance: '9.3 km away',
    rating: 4.9,
    openStatus: 'Open 24/7',
    lat: 19.1860,
    lng: 72.8350,
    certifications: ['Automated AI Valuation', 'Instant UPI Payout'],
    acceptedTypes: ['Smartphones', 'Laptops', 'Tablets', 'Gaming Consoles'],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   MAP TILE STYLES
───────────────────────────────────────────────────────────────────────────── */
const TILE_LAYERS = {
  voyager: {
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
  light: {
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
  },
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  },
};

export const RecyclerLocator: React.FC<RecyclerLocatorProps> = ({ onBookDropoff }) => {
  const [filter, setFilter] = useState<'All' | 'Kiosk' | 'Dismantler' | 'Refurbisher'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string>('rec-1');
  const [mapStyle, setMapStyle] = useState<'voyager' | 'light' | 'satellite'>('voyager');

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});

  const filteredRecyclers = RECYCLERS.filter((r) => {
    const matchesFilter =
      filter === 'All' ||
      (filter === 'Kiosk' && r.type === '24/7 SMART KIOSK') ||
      (filter === 'Dismantler' && r.type === 'AUTHORIZED DISMANTLER') ||
      (filter === 'Refurbisher' && r.type === 'REFURBISHMENT CENTER');

    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.acceptedTypes.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const selectedRecycler = RECYCLERS.find((r) => r.id === selectedId) || RECYCLERS[0];

  /* ───────────────────────────────────────────────────────────────────────────
     INITIALIZE LEAFLET MAP
  ─────────────────────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [19.0900, 72.8600],
      zoom: 12,
      zoomControl: false,
      attributionControl: false,
    });

    const tileLayer = L.tileLayer(TILE_LAYERS[mapStyle].url, {
      maxZoom: 19,
      attribution: TILE_LAYERS[mapStyle].attribution,
    }).addTo(map);

    mapRef.current = map;
    tileLayerRef.current = tileLayer;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  /* ───────────────────────────────────────────────────────────────────────────
     UPDATE TILE LAYER ON MAP STYLE CHANGE
  ─────────────────────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!mapRef.current) return;
    if (tileLayerRef.current) {
      mapRef.current.removeLayer(tileLayerRef.current);
    }
    const layer = L.tileLayer(TILE_LAYERS[mapStyle].url, {
      maxZoom: 19,
      attribution: TILE_LAYERS[mapStyle].attribution,
    }).addTo(mapRef.current);

    tileLayerRef.current = layer;
  }, [mapStyle]);

  /* ───────────────────────────────────────────────────────────────────────────
     RENDER CUSTOM PINS ON THE MAP
  ─────────────────────────────────────────────────────────────────────────── */
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(m => m.remove());
    markersRef.current = {};

    filteredRecyclers.forEach((r) => {
      const isSelected = r.id === selectedId;

      // Custom Div Icon
      const pinHtml = `
        <div class="relative group cursor-pointer flex items-center justify-center">
          ${isSelected ? `
            <div class="absolute -inset-3 rounded-full bg-emerald-500/30 animate-ping"></div>
            <div class="absolute -inset-2 rounded-full bg-emerald-500/40 blur-sm"></div>
          ` : ''}
          <div class="relative flex items-center gap-2 rounded-2xl px-3 py-1.5 transition-all duration-300 ${
            isSelected
              ? 'bg-[#1b4332] text-white shadow-2xl scale-110 border-2 border-emerald-400'
              : 'bg-white/95 text-slate-800 shadow-lg hover:scale-105 border border-slate-200 backdrop-blur-md'
          }">
            <div class="w-6 h-6 rounded-xl flex items-center justify-center font-bold text-xs ${
              isSelected ? 'bg-emerald-400 text-[#091e17]' : 'bg-emerald-100 text-emerald-800'
            }">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-[11px] font-extrabold tracking-tight leading-none whitespace-nowrap ${
                isSelected ? 'text-white' : 'text-slate-800'
              }">
                ${r.name.length > 18 ? r.name.substring(0, 18) + '...' : r.name}
              </span>
              <span class="text-[9px] font-semibold mt-0.5 whitespace-nowrap ${
                isSelected ? 'text-emerald-300' : 'text-emerald-700'
              }">
                ★ ${r.rating} • ${r.distance}
              </span>
            </div>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: pinHtml,
        className: 'custom-leaflet-marker',
        iconSize: [160, 42],
        iconAnchor: [80, 21],
      });

      const marker = L.marker([r.lat, r.lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        setSelectedId(r.id);
      });

      markersRef.current[r.id] = marker;
    });
  }, [filteredRecyclers, selectedId]);

  /* ───────────────────────────────────────────────────────────────────────────
     PAN/FLY MAP TO SELECTED RECYCLER
  ─────────────────────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!mapRef.current || !selectedRecycler) return;
    mapRef.current.flyTo([selectedRecycler.lat, selectedRecycler.lng], 14, {
      animate: true,
      duration: 1.2,
    });
  }, [selectedId]);

  const handleResetView = () => {
    if (!mapRef.current) return;
    mapRef.current.flyTo([19.0900, 72.8600], 12, { animate: true, duration: 1 });
  };

  const handleDirections = (r: Recycler) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${r.lat},${r.lng}`, '_blank');
  };

  return (
    <section id="recyclers" className="py-24 bg-[#f4f7f4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-emerald-800" />
              <span className="text-xs font-bold text-emerald-900 tracking-wide uppercase">
                Certified Recycler Network
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 font-sans text-gradient-glass">
              Locate Nearby E-Waste Drop-Offs
            </h2>

            <p className="text-lg text-slate-600 font-medium">
              Explore verified recycling facilities, smart 24/7 kiosks, and authorized dismantlers in real-time.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 glass-pill p-1.5 rounded-2xl self-start md:self-auto">
            {(['All', 'Kiosk', 'Dismantler', 'Refurbisher'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === type
                    ? 'bg-[#1b4332] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {type === 'All' ? 'All Centers' : type === 'Kiosk' ? '24/7 Kiosks' : type === 'Dismantler' ? 'Dismantlers' : 'Refurbishers'}
              </button>
            ))}
          </div>
        </div>

        {/* ── TWO COLUMN MAIN LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ════ LEFT COLUMN: SEARCH & RECYCLER CARDS LIST (5 COLS) ════ */}
          <div className="lg:col-span-5 flex flex-col space-y-4 max-h-[640px]">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search city, area, pincode, or e-waste type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass-card rounded-2xl pl-12 pr-4 py-3.5 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 shadow-sm"
              />
            </div>

            {/* List */}
            <div className="space-y-3.5 overflow-y-auto pr-1.5 custom-scrollbar flex-1">
              {filteredRecyclers.length === 0 ? (
                <div className="glass-card rounded-2xl p-8 text-center text-slate-500 text-sm">
                  No recycling centers found matching your search.
                </div>
              ) : (
                filteredRecyclers.map((r) => {
                  const isSelected = r.id === selectedId;
                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelectedId(r.id)}
                      className={`p-5 rounded-2xl transition-all duration-300 cursor-pointer relative ${
                        isSelected
                          ? 'glass-emerald border-2 border-emerald-500/40 shadow-lg ring-2 ring-emerald-500/20 -translate-y-0.5'
                          : 'card-glass hover:bg-white/80 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                          r.type === '24/7 SMART KIOSK'
                            ? 'bg-emerald-100/90 text-emerald-900 border border-emerald-200'
                            : r.type === 'AUTHORIZED DISMANTLER'
                            ? 'bg-slate-900 text-white'
                            : 'bg-emerald-900 text-emerald-100'
                        }`}>
                          {r.type}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50/80 border border-amber-200/80 px-2 py-0.5 rounded-md">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{r.rating}</span>
                        </div>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 mb-1 leading-snug">{r.name}</h4>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span className="truncate">{r.address}</span>
                      </p>

                      <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-200/60">
                        <span className="text-emerald-800 font-extrabold flex items-center gap-1">
                          <Navigation className="w-3 h-3 text-emerald-600" />
                          {r.distance}
                        </span>
                        <span className="text-slate-500 font-semibold">{r.openStatus}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* ════ RIGHT COLUMN: REAL LEAFLET MAP VIEWPORT (7 COLS) ════ */}
          <div className="lg:col-span-7 rounded-[32px] overflow-hidden relative flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-white/80 min-h-[640px] bg-slate-100">
            
            {/* ── MAP OVERLAY TOP HEADER ── */}
            <div className="absolute top-4 left-4 right-4 z-[500] flex items-center justify-between gap-3 pointer-events-none">
              
              {/* Live Badge */}
              <div className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 px-4 py-2 shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-800">
                  Mumbai Interactive Map
                </span>
              </div>

              {/* Map Style & Center Controls */}
              <div className="pointer-events-auto flex items-center gap-2">
                {/* Tile Selector */}
                <div className="flex items-center bg-white/90 backdrop-blur-md border border-white/80 rounded-full p-1 shadow-lg text-[11px] font-bold text-slate-700">
                  {(['voyager', 'light', 'satellite'] as const).map((styleKey) => (
                    <button
                      key={styleKey}
                      onClick={() => setMapStyle(styleKey)}
                      className={`px-3 py-1.5 rounded-full capitalize transition-all ${
                        mapStyle === styleKey
                          ? 'bg-[#1b4332] text-white shadow-sm'
                          : 'hover:bg-slate-100 text-slate-600'
                      }`}
                    >
                      {styleKey}
                    </button>
                  ))}
                </div>

                {/* Recenter button */}
                <button
                  onClick={handleResetView}
                  title="Reset Map View"
                  className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-white/80 flex items-center justify-center text-slate-700 hover:text-emerald-800 hover:bg-white shadow-lg transition-all"
                >
                  <LocateFixed className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* ── REAL LEAFLET CONTAINER ── */}
            <div ref={mapContainerRef} className="w-full h-full min-h-[640px] z-[1]" />

            {/* ── MAP OVERLAY BOTTOM SELECTED CARD ── */}
            <div className="absolute bottom-4 left-4 right-4 z-[500] pointer-events-auto">
              <div className="glass-card rounded-[24px] p-5 shadow-2xl border border-white/90 backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex rounded-md bg-emerald-100 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-emerald-900 border border-emerald-200">
                        {selectedRecycler.type}
                      </span>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        ★ {selectedRecycler.rating} • {selectedRecycler.distance}
                      </span>
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-900">{selectedRecycler.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{selectedRecycler.address}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleDirections(selectedRecycler)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Directions</span>
                    </button>
                    <button
                      onClick={() => onBookDropoff(selectedRecycler)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#1b4332] hover:bg-[#112a1f] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.02]"
                    >
                      <span>Book Drop-off</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200/60 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                      Certifications
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {selectedRecycler.certifications.map((c) => (
                        <span key={c} className="rounded-md border border-emerald-200 bg-emerald-50/90 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                      Accepted E-Waste
                    </span>
                    <p className="text-[11px] font-semibold text-slate-700 truncate">
                      {selectedRecycler.acceptedTypes.join(', ')}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
