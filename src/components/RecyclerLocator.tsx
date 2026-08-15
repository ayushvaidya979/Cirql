import React, { useState, useEffect, useRef } from 'react';
import {
  Search, MapPin, Star, ShieldCheck, CheckCircle2, Navigation,
  ArrowUpRight, Phone, Mail, Clock, Layers, LocateFixed, ExternalLink,
  Building2, Wrench, RefreshCw, Filter, Sparkles, PhoneCall, Send, ChevronDown
} from 'lucide-react';
import L from 'leaflet';
import { Recycler } from '../types';
import { RECYCLERS_DATA } from '../data/recyclersData';

interface RecyclerLocatorProps {
  onBookDropoff: (recycler: Recycler) => void;
}

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
  const [filterType, setFilterType] = useState<'All' | 'Recycler' | 'Refurbisher' | 'Dismantler'>('All');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string>('R0001');
  const [mapStyle, setMapStyle] = useState<'voyager' | 'light' | 'satellite'>('voyager');

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});

  // Distinct states from data
  const availableStates = Array.from(new Set(RECYCLERS_DATA.map((r) => r.state || 'Other'))).filter(Boolean);

  const filteredRecyclers = RECYCLERS_DATA.filter((r) => {
    const matchesType =
      filterType === 'All' ||
      (filterType === 'Recycler' && (r.facilityCategory === 'Recycler' || r.type.includes('RECYCLER'))) ||
      (filterType === 'Refurbisher' && (r.facilityCategory === 'Refurbisher' || r.type.includes('REFURBISHMENT'))) ||
      (filterType === 'Dismantler' && (r.facilityCategory === 'Dismantler' || r.facilityCategory === 'Recycler/Dismantler' || r.type.includes('DISMANTLER')));

    const matchesState =
      selectedState === 'All' || r.state === selectedState;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      r.id.toLowerCase().includes(query) ||
      r.name.toLowerCase().includes(query) ||
      (r.city && r.city.toLowerCase().includes(query)) ||
      (r.regionalOffice && r.regionalOffice.toLowerCase().includes(query)) ||
      (r.state && r.state.toLowerCase().includes(query)) ||
      (r.pincode && r.pincode.toLowerCase().includes(query)) ||
      r.address.toLowerCase().includes(query) ||
      (r.phone && r.phone.toLowerCase().includes(query)) ||
      (r.email && r.email.toLowerCase().includes(query)) ||
      (r.capacity && String(r.capacity).toLowerCase().includes(query)) ||
      r.acceptedTypes.some((t) => t.toLowerCase().includes(query));

    return matchesType && matchesState && matchesSearch;
  });

  const selectedRecycler =
    filteredRecyclers.find((r) => r.id === selectedId) ||
    RECYCLERS_DATA.find((r) => r.id === selectedId) ||
    filteredRecyclers[0] ||
    RECYCLERS_DATA[0];

  /* ───────────────────────────────────────────────────────────────────────────
     INITIALIZE LEAFLET MAP
  ─────────────────────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [19.2970, 73.0645],
      zoom: 8,
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
    Object.values(markersRef.current).forEach((m) => m.remove());
    markersRef.current = {};

    filteredRecyclers.forEach((r) => {
      const isSelected = r.id === selectedId;

      // Color coding based on facility type
      const badgeBg =
        r.facilityCategory === 'Refurbisher'
          ? isSelected ? 'bg-amber-400 text-amber-950' : 'bg-amber-100 text-amber-900'
          : r.facilityCategory === 'Dismantler'
            ? isSelected ? 'bg-indigo-300 text-indigo-950' : 'bg-indigo-100 text-indigo-900'
            : isSelected ? 'bg-emerald-400 text-[#091e17]' : 'bg-emerald-100 text-emerald-800';

      const borderClass = isSelected
        ? 'bg-[#1b4332] text-white shadow-2xl scale-110 border-2 border-emerald-400 ring-2 ring-emerald-500/30'
        : 'bg-white/95 text-slate-800 shadow-md hover:scale-105 border border-slate-200 backdrop-blur-md';

      const pinHtml = `
        <div class="relative group cursor-pointer flex items-center justify-center">
          ${isSelected ? `
            <div class="absolute -inset-3 rounded-full bg-emerald-500/30 animate-ping"></div>
            <div class="absolute -inset-2 rounded-full bg-emerald-500/40 blur-sm"></div>
          ` : ''}
          <div class="relative flex items-center gap-2 rounded-2xl px-3 py-1.5 transition-all duration-300 ${borderClass}">
            <div class="w-6 h-6 rounded-xl flex items-center justify-center font-bold text-[10px] ${badgeBg}">
              ${r.id}
            </div>
            <div class="flex flex-col">
              <span class="text-[11px] font-extrabold tracking-tight leading-none whitespace-nowrap ${isSelected ? 'text-white' : 'text-slate-800'
        }">
                ${r.name.length > 20 ? r.name.substring(0, 20) + '...' : r.name}
              </span>
              <span class="text-[9px] font-semibold mt-0.5 whitespace-nowrap ${isSelected ? 'text-emerald-300' : 'text-emerald-700'
        }">
                ${r.city || ''} • ${r.capacity || 'Certified'}
              </span>
            </div>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: pinHtml,
        className: 'custom-leaflet-marker',
        iconSize: [175, 42],
        iconAnchor: [87, 21],
      });

      const marker = L.marker([r.lat, r.lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        setSelectedId(r.id);
      });

      markersRef.current[r.id] = marker;
    });

    // Auto-fit bounds if filtering by state and we have results
    if (filteredRecyclers.length > 0 && selectedState !== 'All') {
      const bounds = L.latLngBounds(filteredRecyclers.map((r) => [r.lat, r.lng]));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 11 });
    }
  }, [filteredRecyclers, selectedId, selectedState]);

  /* ───────────────────────────────────────────────────────────────────────────
     PAN/FLY MAP TO SELECTED RECYCLER
  ─────────────────────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!mapRef.current || !selectedRecycler) return;
    mapRef.current.flyTo([selectedRecycler.lat, selectedRecycler.lng], 13, {
      animate: true,
      duration: 1.2,
    });
  }, [selectedId]);

  const handleResetView = () => {
    if (!mapRef.current) return;
    if (selectedState !== 'All' && filteredRecyclers.length > 0) {
      const bounds = L.latLngBounds(filteredRecyclers.map((r) => [r.lat, r.lng]));
      mapRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 11 });
    } else {
      mapRef.current.flyTo([19.2970, 73.0645], 7, { animate: true, duration: 1 });
    }
  };

  const handleDirections = (r: Recycler) => {
    const query = encodeURIComponent(`${r.name}, ${r.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section id="recyclers" className="py-24 bg-[#f4f7f4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-emerald-800" />
              <span className="text-xs font-bold text-emerald-900 tracking-wide uppercase">
                Official Directory of Recyclers &amp; Dismantlers ({RECYCLERS_DATA.length} Verified Facilities)
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 font-sans text-gradient-glass">
              Locate Certified E-Waste Facilities
            </h2>

            <p className="text-lg text-slate-600 font-medium max-w-2xl">
              Connect directly with verified recyclers, authorized dismantlers, and refurbishment centers across India with real contact details &amp; processing capacities.
            </p>
          </div>

          {/* Type Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 glass-pill p-1.5 rounded-2xl self-start md:self-auto">
            {(['All', 'Recycler', 'Refurbisher', 'Dismantler'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${filterType === type
                    ? 'bg-[#1b4332] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
              >
                {type === 'All' ? 'All Types' : type === 'Recycler' ? 'Recyclers' : type === 'Refurbisher' ? 'Refurbishers' : 'Dismantlers'}
              </button>
            ))}
          </div>
        </div>

        {/* ── SECONDARY FILTERS BAR (STATE + SEARCH STATS) ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-white/70 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 custom-scrollbar">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 shrink-0 pl-1">
              <Filter className="w-3.5 h-3.5 text-emerald-700" /> State:
            </span>
            <button
              onClick={() => setSelectedState('All')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0 ${selectedState === 'All'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              All India ({RECYCLERS_DATA.length})
            </button>
            {availableStates.map((st) => {
              const count = RECYCLERS_DATA.filter((r) => r.state === st).length;
              return (
                <button
                  key={st}
                  onClick={() => setSelectedState(st)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0 ${selectedState === st
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                >
                  {st} ({count})
                </button>
              );
            })}
          </div>

          <div className="text-xs font-semibold text-slate-600 pr-1">
            Showing <span className="font-extrabold text-emerald-900">{filteredRecyclers.length}</span> facilities
          </div>
        </div>

        {/* ── TWO COLUMN MAIN LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* ════ LEFT COLUMN: SEARCH & RECYCLER CARDS LIST (5 COLS) ════ */}
          <div className="lg:col-span-5 flex flex-col space-y-4 max-h-[700px]">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search facility name, city, phone, email, pincode, state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass-card rounded-2xl pl-12 pr-4 py-3.5 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 shadow-sm"
              />
            </div>

            {/* List */}
            <div className="space-y-3.5 overflow-y-auto pr-1.5 custom-scrollbar flex-1">
              {filteredRecyclers.length === 0 ? (
                <div className="glass-card rounded-2xl p-8 text-center text-slate-500 text-sm">
                  No registered recyclers or dismantlers found matching your criteria.
                </div>
              ) : (
                filteredRecyclers.map((r) => {
                  const isSelected = r.id === selectedId;
                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelectedId(r.id)}
                      className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer relative ${isSelected
                          ? 'glass-emerald border-2 border-emerald-500/50 shadow-lg ring-2 ring-emerald-500/20 -translate-y-0.5'
                          : 'card-glass hover:bg-white/80 hover:shadow-md'
                        }`}
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-mono text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-slate-900 text-white shadow-2xs">
                            {r.id}
                          </span>
                          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md ${r.facilityCategory === 'Refurbisher'
                              ? 'bg-amber-100 text-amber-900 border border-amber-200'
                              : r.facilityCategory === 'Dismantler'
                                ? 'bg-indigo-100 text-indigo-900 border border-indigo-200'
                                : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                            }`}>
                            {r.type}
                          </span>
                        </div>

                        {r.capacity && (
                          <span className="text-[10px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md shrink-0">
                            Cap: {r.capacity}
                          </span>
                        )}
                      </div>

                      <h4 className="text-base font-bold text-slate-900 mb-1 leading-snug">{r.name}</h4>

                      <p className="text-xs text-slate-500 flex items-start gap-1.5 mb-2.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{r.address}</span>
                      </p>

                      {/* Contact Info Snippets */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs py-2 my-2 border-y border-slate-200/60 text-slate-600">
                        {r.phone && (
                          <a
                            href={`tel:${r.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 hover:text-emerald-700 font-semibold truncate group"
                          >
                            <Phone className="w-3 h-3 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="truncate">{r.phone}</span>
                          </a>
                        )}
                        {r.email && (
                          <a
                            href={`mailto:${r.email}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 hover:text-emerald-700 font-semibold truncate group"
                          >
                            <Mail className="w-3 h-3 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="truncate">{r.email}</span>
                          </a>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-emerald-800 font-extrabold flex items-center gap-1 text-[11px]">
                          <Building2 className="w-3 h-3 text-emerald-600" />
                          {r.city}, {r.state}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50/80 border border-amber-200/80 px-2 py-0.5 rounded-md">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{r.rating}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* ════ RIGHT COLUMN: LEAFLET MAP VIEWPORT (7 COLS) ════ */}
          <div className="lg:col-span-7 rounded-[32px] overflow-hidden relative flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-white/80 min-h-[700px] bg-slate-100">

            {/* ── MAP OVERLAY TOP HEADER ── */}
            <div className="absolute top-4 left-4 right-4 z-[500] flex items-center justify-between gap-3 pointer-events-none">

              {/* Live Badge */}
              <div className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 px-4 py-2 shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-800">
                  {selectedState === 'All' ? 'National Facility Map' : `${selectedState} Facilities`}
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
                      className={`px-3 py-1.5 rounded-full capitalize transition-all ${mapStyle === styleKey
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
            <div ref={mapContainerRef} className="w-full h-full min-h-[700px] z-[1]" />

            {/* ── MAP OVERLAY BOTTOM SELECTED CARD (COMPACT & SLEEK) ── */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-[500] pointer-events-auto">
              <div className="glass-card rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/90 backdrop-blur-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">

                  {/* Left: Info & Title */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                      <span className="font-mono text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-900 text-white">
                        {selectedRecycler.id}
                      </span>
                      <span className="inline-flex rounded bg-emerald-100/90 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-emerald-900 border border-emerald-200">
                        {selectedRecycler.type}
                      </span>
                      {selectedRecycler.capacity && (
                        <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          Cap: {selectedRecycler.capacity}
                        </span>
                      )}
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        ★ {selectedRecycler.rating}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug truncate">
                      {selectedRecycler.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                      {selectedRecycler.address}
                    </p>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-1.5 flex-wrap shrink-0">
                    {selectedRecycler.phone && (
                      <a
                        href={`tel:${selectedRecycler.phone}`}
                        className="inline-flex items-center justify-center gap-1 rounded-lg bg-emerald-50 border border-emerald-300/80 hover:bg-emerald-100 px-2.5 py-1.5 text-[11px] font-bold text-emerald-900 shadow-xs transition-all"
                        title={`Call ${selectedRecycler.phone}`}
                      >
                        <PhoneCall className="w-3 h-3 text-emerald-700" />
                        <span>Call</span>
                      </a>
                    )}
                    {selectedRecycler.email && (
                      <a
                        href={`mailto:${selectedRecycler.email}`}
                        className="inline-flex items-center justify-center gap-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 px-2.5 py-1.5 text-[11px] font-bold text-slate-700 shadow-xs transition-all"
                        title={`Email ${selectedRecycler.email}`}
                      >
                        <Send className="w-3 h-3 text-emerald-700" />
                        <span>Email</span>
                      </a>
                    )}
                    <button
                      onClick={() => handleDirections(selectedRecycler)}
                      className="inline-flex items-center justify-center gap-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 px-2.5 py-1.5 text-[11px] font-bold text-slate-700 shadow-xs transition-all"
                    >
                      <ExternalLink className="w-3 h-3 text-emerald-700" />
                      <span>Directions</span>
                    </button>
                    <button
                      onClick={() => onBookDropoff(selectedRecycler)}
                      className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#1b4332] hover:bg-[#112a1f] px-3 py-1.5 text-[11px] font-bold text-white shadow-md transition-all hover:scale-[1.02]"
                    >
                      <span>Book Drop-off</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Micro Details Ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 pt-2 mt-2 border-t border-slate-200/60 text-[10px]">
                  <div className="flex items-center gap-1 text-slate-600 truncate max-w-xs">
                    <span className="font-bold text-slate-500 uppercase tracking-wide">RO:</span>
                    <span className="font-semibold text-slate-800 truncate">
                      {selectedRecycler.regionalOffice} ({selectedRecycler.city}, {selectedRecycler.state})
                    </span>
                  </div>

                  <div className="flex items-center gap-1 overflow-hidden">
                    <span className="font-bold text-slate-500 uppercase tracking-wide shrink-0">Accepted:</span>
                    <span className="font-semibold text-slate-700 truncate max-w-xs">
                      {selectedRecycler.acceptedTypes.slice(0, 3).join(', ')}
                      {selectedRecycler.acceptedTypes.length > 3 ? ` +${selectedRecycler.acceptedTypes.length - 3} more` : ''}
                    </span>
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
