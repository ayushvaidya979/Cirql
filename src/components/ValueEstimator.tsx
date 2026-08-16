import React, { useState, useMemo } from 'react';
import {
  Smartphone,
  Laptop,
  Check,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Search,
  Scale,
  Calendar,
  ChevronDown
} from 'lucide-react';
import {
  getBrandsForCategory,
  getModelsForBrand,
  getDeviceModelData,
  DeviceModelData
} from '../data/metalContentData';

interface ValueEstimatorProps {
  onOpenScanner: (calculatedVal?: number, deviceName?: string) => void;
}

export const ValueEstimator: React.FC<ValueEstimatorProps> = ({ onOpenScanner }) => {
  const [category, setCategory] = useState<'Smartphone' | 'Laptop / PC'>('Smartphone');
  const [brand, setBrand] = useState<string>('Apple');
  const [selectedModel, setSelectedModel] = useState<string>('iPhone 15 Pro Max');
  const [modelSearch, setModelSearch] = useState<string>('');
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState<boolean>(false);
  const [ageYears, setAgeYears] = useState<number>(2); // 0 to 6
  const [condition, setCondition] = useState<'Flawless' | 'Minor Scratches' | 'Cracked Display' | 'Dead'>('Minor Scratches');
  const [includeAdapter, setIncludeAdapter] = useState(true);

  const categories = [
    { name: 'Smartphone' as const, icon: Smartphone, label: 'Smartphones', stats: '29 Brands • 291 Models' },
    { name: 'Laptop / PC' as const, icon: Laptop, label: 'Laptops / PCs', stats: '19 Brands • 234 Models' },
  ];


  // Available brands for the active category
  const availableBrands = useMemo(() => {
    return getBrandsForCategory(category);
  }, [category]);

  // Available models for the active category and brand
  const availableModels = useMemo(() => {
    return getModelsForBrand(category, brand);
  }, [category, brand]);

  // Filtered models if search term is entered
  const filteredModels = useMemo(() => {
    if (!modelSearch.trim()) return availableModels;
    const q = modelSearch.toLowerCase();
    return availableModels.filter(
      (m) =>
        m.model.toLowerCase().includes(q) ||
        m.releaseYear.toString().includes(q)
    );
  }, [availableModels, modelSearch]);

  // Current active model details
  const activeDeviceData: DeviceModelData | undefined = useMemo(() => {
    return (
      getDeviceModelData(category, brand, selectedModel) ||
      availableModels[0]
    );
  }, [category, brand, selectedModel, availableModels]);

  // Auto-sync brand & model when category or brand changes
  const handleCategoryChange = (cat: 'Smartphone' | 'Laptop / PC') => {
    setCategory(cat);
    const newBrands = getBrandsForCategory(cat);
    const defaultBrand = newBrands.includes(brand) ? brand : newBrands[0] || 'Apple';
    setBrand(defaultBrand);
    const modelsForBrand = getModelsForBrand(cat, defaultBrand);
    const defaultModel = modelsForBrand[0]?.model || '';
    setSelectedModel(defaultModel);
    setModelSearch('');
    setIsModelDropdownOpen(false);

    if (modelsForBrand[0]?.releaseYear) {
      const currentYear = 2026;
      const calculatedAge = Math.min(6, Math.max(0, currentYear - modelsForBrand[0].releaseYear));
      setAgeYears(calculatedAge);
    }
  };

  const handleBrandChange = (newBrand: string) => {
    setBrand(newBrand);
    const modelsForBrand = getModelsForBrand(category, newBrand);
    const defaultModel = modelsForBrand[0]?.model || '';
    setSelectedModel(defaultModel);
    setModelSearch('');
    setIsModelDropdownOpen(false);

    if (modelsForBrand[0]?.releaseYear) {
      const currentYear = 2026;
      const calculatedAge = Math.min(6, Math.max(0, currentYear - modelsForBrand[0].releaseYear));
      setAgeYears(calculatedAge);
    }
  };

  const handleModelSelect = (m: DeviceModelData) => {
    setSelectedModel(m.model);
    setIsModelDropdownOpen(false);
    setModelSearch('');

    if (m.releaseYear) {
      const currentYear = 2026;
      const calculatedAge = Math.min(6, Math.max(0, currentYear - m.releaseYear));
      setAgeYears(calculatedAge);
    }
  };

  // Dynamic Cash Valuation & Metals Calculation
  const { estimatedCash, ecoCoins, metalsValuation } = useMemo(() => {
    // Standard live precious metal market prices in INR (per gram)
    // Gold: ~₹7,200/g, Silver: ~₹88/g, Palladium: ~₹3,100/g, Platinum: ~₹2,800/g, Copper: ~₹0.85/g
    const GOLD_PRICE_INR = 7200;
    const SILVER_PRICE_INR = 88;
    const PALLADIUM_PRICE_INR = 3100;
    const PLATINUM_PRICE_INR = 2800;
    const COPPER_PRICE_INR = 0.85;

    let intrinsicMetalValue = 0;

    if (activeDeviceData) {
      const { goldG, silverG, copperG, palladiumG, platinumG } = activeDeviceData.metals;
      intrinsicMetalValue =
        goldG * GOLD_PRICE_INR +
        silverG * SILVER_PRICE_INR +
        palladiumG * PALLADIUM_PRICE_INR +
        platinumG * PLATINUM_PRICE_INR +
        copperG * COPPER_PRICE_INR;
    }

    // Base functional & refurbish component value
    let base = category === 'Laptop / PC' ? 11500 : 4200;

    // Premium tier multiplier based on brand
    let brandMult = 1.0;
    if (brand === 'Apple') brandMult = 1.38;
    else if (brand === 'Samsung' || brand === 'OnePlus' || brand === 'Sony' || brand === 'Google') brandMult = 1.18;
    else if (brand === 'Dell' || brand === 'HP' || brand === 'Lenovo' || brand === 'Asus') brandMult = 1.12;
    else if (
      brand === 'Xiaomi (Mi)' ||
      brand === 'POCO' ||
      brand === 'Nothing' ||
      brand === 'iQOO' ||
      brand === 'Realme' ||
      brand === 'Vivo' ||
      brand === 'Oppo'
    )
      brandMult = 1.05;

    // Age depreciation
    let ageFactor = 1.0 - ageYears * 0.09;
    if (ageFactor < 0.32) ageFactor = 0.32;

    // Working condition multiplier
    let condMult = 1.0;
    if (condition === 'Minor Scratches') condMult = 0.84;
    if (condition === 'Cracked Display') condMult = 0.56;
    if (condition === 'Dead') condMult = 0.34;

    // Calculate total guaranteed cash buyback
    const functionalValue = base * brandMult * ageFactor * condMult;
    const recoverableMetalCash = intrinsicMetalValue * 1.25 * condMult;
    let total = Math.round(functionalValue + recoverableMetalCash);

    if (includeAdapter) total += 250;

    const coins = Math.max(50, Math.round(total * 0.08));

    return {
      estimatedCash: total,
      ecoCoins: coins,
      metalsValuation: Math.round(intrinsicMetalValue)
    };
  }, [category, brand, activeDeviceData, ageYears, condition, includeAdapter]);

  return (
    <section id="value-estimator" className="py-24 bg-[#f8faf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-300/60 px-4 py-1.5 rounded-full mb-4 shadow-2xs">
            <span className="text-sm">⚡</span>
            <span className="text-xs font-bold text-emerald-900 tracking-wide uppercase">
              Material Database &amp; E-Waste Calculator
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient-glass">
            Discover Your Device's True Metal &amp; Cash Value
          </h2>

          <p className="text-lg text-slate-600 font-medium">
            Explore verified lab-grade precious metal yields (Gold, Silver, Palladium, Platinum, Copper) across 291+ mobile models and computers with instant guaranteed buyback estimates.
          </p>
        </div>

        {/* TWO-COLUMN CALCULATOR INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT CARD: SELECTION FORM (7 COLS) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
            {/* 1. SELECT DEVICE CATEGORY */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  1. SELECT DEVICE CATEGORY
                </label>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  {category === 'Smartphone' ? '29 Mobile Brands • 291 Models' : '19 Laptop Brands • 234 Models'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((cat) => {
                  const IconComp = cat.icon;
                  const isSelected = category === cat.name;
                  return (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => handleCategoryChange(cat.name)}
                      className={`flex items-center gap-3 p-4 rounded-2xl border transition-all text-left ${
                        isSelected
                          ? 'bg-[#234d40] text-white border-[#234d40] shadow-md scale-[1.01]'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40'
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white/10 text-emerald-300' : 'bg-slate-100 text-slate-600'}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-bold block leading-snug">{cat.label}</span>
                        <span className={`text-[11px] ${isSelected ? 'text-emerald-200/80' : 'text-slate-500'}`}>
                          {cat.stats}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* 2. BRAND & MODEL SELECTION (SIDE BY SIDE) */}
            <div className="mb-8">
              <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                2. SELECT BRAND &amp; MODEL NAME
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Brand Selector */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span>Brand / Manufacturer</span>
                    <span className="text-[10px] text-slate-400 font-normal">({availableBrands.length} Available)</span>
                  </label>
                  <div className="relative">
                    <select
                      value={brand}
                      onChange={(e) => handleBrandChange(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-emerald-400 rounded-xl px-3.5 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer transition-colors"
                    >
                      {availableBrands.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Model Name Selector (Dropdown + Search) */}
                <div className="relative">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>Model Name</span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100/60 px-1.5 py-0.2 rounded">
                      {availableModels.length} Models
                    </span>
                  </label>

                  {/* Model Selector Trigger Button */}
                  <div
                    onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                    className="w-full bg-slate-50 border border-slate-200 hover:border-emerald-400 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-800 flex items-center justify-between cursor-pointer focus:ring-2 focus:ring-emerald-600 transition-colors shadow-2xs"
                  >
                    <div className="truncate pr-2">
                      <span className="block truncate text-slate-900 font-bold">
                        {activeDeviceData ? activeDeviceData.model : selectedModel || 'Select Model'}
                      </span>
                      {activeDeviceData && (
                        <span className="text-[10px] text-slate-500 font-medium block">
                          Release: {activeDeviceData.releaseYear} • {activeDeviceData.deviceWeightG}g
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isModelDropdownOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                  </div>

                  {/* Dropdown Popover */}
                  {isModelDropdownOpen && (
                    <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl p-2.5 max-h-72 flex flex-col animate-in fade-in zoom-in-95 duration-150">
                      {/* Search input */}
                      <div className="relative mb-2">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder={`Search ${brand} model or year...`}
                          value={modelSearch}
                          onChange={(e) => setModelSearch(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full bg-slate-100/80 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          autoFocus
                        />
                      </div>

                      {/* Model List */}
                      <div className="overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                        {filteredModels.length === 0 ? (
                          <div className="p-3 text-center text-xs text-slate-400">
                            No models found matching "{modelSearch}"
                          </div>
                        ) : (
                          filteredModels.map((m) => {
                            const isCurrent = m.model === selectedModel;
                            return (
                              <button
                                key={m.model}
                                type="button"
                                onClick={() => handleModelSelect(m)}
                                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                                  isCurrent
                                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold'
                                    : 'text-slate-700 hover:bg-slate-100'
                                }`}
                              >
                                <div className="truncate mr-2">
                                  <span className="block truncate">{m.model}</span>
                                  <span className="text-[10px] text-slate-400 font-normal">
                                    {m.deviceWeightG}g • Gold {m.metals.goldG.toFixed(4)}g • Copper {m.metals.copperG.toFixed(1)}g
                                  </span>
                                </div>
                                <span className="text-[10px] px-2 py-0.5 rounded-md font-mono bg-slate-100 text-slate-600 shrink-0">
                                  {m.releaseYear}
                                </span>
                              </button>
                            );
                          })
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* SPECIFICATION SUMMARY PILL */}
              {activeDeviceData && (
                <div className="mt-3.5 bg-gradient-to-r from-emerald-50 via-teal-50/50 to-slate-50 border border-emerald-200/70 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-2.5 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">
                        {activeDeviceData.brand} {activeDeviceData.model}
                      </span>
                      <span className="text-[11px] text-emerald-800 font-medium">
                        Verified Dataset Record • {activeDeviceData.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600 font-medium text-[11px]">
                    <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                      <Calendar className="w-3 h-3 text-emerald-600" />
                      <strong>Year:</strong> {activeDeviceData.releaseYear}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                      <Scale className="w-3 h-3 text-emerald-600" />
                      <strong>Weight:</strong> {activeDeviceData.deviceWeightG}g
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* 3. MATERIAL & PRECIOUS METALS SPECTRUM CARD (FULL METALS BREAKDOWN) */}
            {activeDeviceData && (
              <div className="mb-8 bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <h3 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                      LAB RECOVERABLE METAL COMPOSITION
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full font-bold">
                    Official Dataset Spec
                  </span>
                </div>

                {/* 5 Metals Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-3.5">
                  {/* Gold */}
                  <div className="bg-slate-800/90 border border-amber-500/30 rounded-xl p-2.5 text-center relative group hover:border-amber-400 transition-colors">
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 font-mono font-bold text-[10px] mb-1">
                      Au
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Gold</span>
                    <span className="text-xs font-extrabold text-amber-300 font-mono block">
                      {activeDeviceData.metals.goldG >= 0.001
                        ? `${(activeDeviceData.metals.goldG * 1000).toFixed(2)} mg`
                        : `${activeDeviceData.metals.goldG.toFixed(4)} g`}
                    </span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">
                      {activeDeviceData.rawMetals.find((m) => m.metal.includes('Gold'))?.percent || '0.016%'}
                    </span>
                  </div>

                  {/* Silver */}
                  <div className="bg-slate-800/90 border border-slate-400/30 rounded-xl p-2.5 text-center relative group hover:border-slate-300 transition-colors">
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-slate-400/20 text-slate-200 font-mono font-bold text-[10px] mb-1">
                      Ag
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Silver</span>
                    <span className="text-xs font-extrabold text-slate-200 font-mono block">
                      {activeDeviceData.metals.silverG >= 0.001
                        ? `${(activeDeviceData.metals.silverG * 1000).toFixed(1)} mg`
                        : `${activeDeviceData.metals.silverG.toFixed(3)} g`}
                    </span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">
                      {activeDeviceData.rawMetals.find((m) => m.metal.includes('Silver'))?.percent || '0.166%'}
                    </span>
                  </div>

                  {/* Copper */}
                  <div className="bg-slate-800/90 border border-orange-500/30 rounded-xl p-2.5 text-center relative group hover:border-orange-400 transition-colors">
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-orange-500/20 text-orange-300 font-mono font-bold text-[10px] mb-1">
                      Cu
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Copper</span>
                    <span className="text-xs font-extrabold text-orange-300 font-mono block">
                      {activeDeviceData.metals.copperG >= 1
                        ? `${activeDeviceData.metals.copperG.toFixed(2)} g`
                        : `${(activeDeviceData.metals.copperG * 1000).toFixed(0)} mg`}
                    </span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">
                      {activeDeviceData.rawMetals.find((m) => m.metal.includes('Copper'))?.percent || '8.00%'}
                    </span>
                  </div>

                  {/* Palladium */}
                  <div className="bg-slate-800/90 border border-teal-500/30 rounded-xl p-2.5 text-center relative group hover:border-teal-400 transition-colors">
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 font-mono font-bold text-[10px] mb-1">
                      Pd
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Palladium</span>
                    <span className="text-xs font-extrabold text-teal-300 font-mono block">
                      {activeDeviceData.metals.palladiumG >= 0.001
                        ? `${(activeDeviceData.metals.palladiumG * 1000).toFixed(2)} mg`
                        : `${activeDeviceData.metals.palladiumG.toFixed(4)} g`}
                    </span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">
                      {activeDeviceData.rawMetals.find((m) => m.metal.includes('Palladium'))?.percent || '0.006%'}
                    </span>
                  </div>

                  {/* Platinum */}
                  <div className="bg-slate-800/90 border border-indigo-400/30 rounded-xl p-2.5 text-center relative group hover:border-indigo-300 transition-colors">
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-400/20 text-indigo-200 font-mono font-bold text-[10px] mb-1">
                      Pt
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Platinum</span>
                    <span className="text-xs font-extrabold text-indigo-200 font-mono block">
                      {activeDeviceData.metals.platinumG >= 0.001
                        ? `${(activeDeviceData.metals.platinumG * 1000).toFixed(2)} mg`
                        : `${activeDeviceData.metals.platinumG.toFixed(5)} g`}
                    </span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">
                      {activeDeviceData.rawMetals.find((m) => m.metal.includes('Platinum'))?.percent || '0.0003%'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-lg">
                  <span>Intrinsic Metallurgical Melt Value:</span>
                  <span className="text-emerald-300 font-bold font-mono">≈ ₹{metalsValuation.toLocaleString('en-IN')} INR</span>
                </div>
              </div>
            )}

            {/* 4. AGE & WORKING CONDITION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Age Slider */}
              <div className="sm:col-span-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    3. DEVICE USAGE AGE ({ageYears} YEARS OLD)
                  </label>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {ageYears === 0 ? 'Brand New (< 1 yr)' : `${ageYears} Years in Service`}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="6"
                  step="1"
                  value={ageYears}
                  onChange={(e) => setAgeYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
                  <span>Brand New (&lt;1 yr)</span>
                  <span>2 yrs</span>
                  <span>4 yrs</span>
                  <span>6+ yrs</span>
                </div>
              </div>
            </div>

            {/* WORKING CONDITION */}
            <div className="mb-8">
              <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                4. WORKING CONDITION
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    id: 'Flawless',
                    title: 'Flawless / Working',
                    desc: 'Fully functional, no screen cracks or major damage.',
                  },
                  {
                    id: 'Minor Scratches',
                    title: 'Minor Scratches',
                    desc: 'Normal wear & tear, screen intact, battery ok.',
                  },
                  {
                    id: 'Cracked Display',
                    title: 'Cracked Display',
                    desc: 'Screen broken or casing cracked, turns on.',
                  },
                  {
                    id: 'Dead',
                    title: 'Dead / Non-Functional',
                    desc: 'Will not turn on, severe liquid/hardware damage.',
                  },
                ].map((cond) => {
                  const isSelected = condition === cond.id;
                  return (
                    <div
                      key={cond.id}
                      onClick={() => setCondition(cond.id as any)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${isSelected
                          ? 'bg-white border-emerald-700 ring-2 ring-emerald-600/30 shadow-sm'
                          : 'bg-white border-slate-200 hover:border-emerald-300'
                        }`}
                    >
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{cond.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-snug">{cond.desc}</p>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 ml-2">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ADAPTER CHECKBOX */}
            <div className="pt-4 border-t border-slate-100 flex items-center">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={includeAdapter}
                  onChange={(e) => setIncludeAdapter(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-300 text-emerald-700 focus:ring-emerald-600 cursor-pointer"
                />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-emerald-800 transition-colors">
                  Include original power adapter / charging cable (+₹250)
                </span>
              </label>
            </div>
          </div>

          {/* RIGHT CARD: LIVE VALUATION PANEL — premium green banner */}
          <div className="lg:col-span-5 green-banner rounded-[28px] p-7 sm:p-8 text-white flex flex-col justify-between min-h-[560px] sticky top-24">
            {/* Leaf watermark */}
            <svg
              className="green-banner-leaf"
              style={{ top: '10%', transform: 'none', width: 'clamp(70px,11vw,130px)' }}
              viewBox="0 0 120 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M60 130 C60 130 10 90 10 50 C10 22 33 5 60 5 C87 5 110 22 110 50 C110 90 60 130 60 130Z"
                fill="white"
              />
              <path d="M60 130 L60 30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M60 75 C60 75 35 55 35 35" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M60 90 C60 90 85 70 85 48" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <div className="relative z-10">
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-5">
                <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-widest">
                    LIVE VALUATION
                  </span>
                </div>
                <span className="text-xs font-semibold bg-white/10 border border-white/15 px-3 py-1 rounded-full text-emerald-200">
                  {condition}
                </span>
              </div>

              {/* Selected Device Title */}
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-emerald-400/80 mb-1">
                SELECTED DEVICE &amp; MODEL
              </p>
              <h3 className="text-2xl font-extrabold text-white mb-1 leading-snug">
                {brand} {activeDeviceData ? activeDeviceData.model : selectedModel}
              </h3>
              <p className="text-xs text-emerald-200/80 mb-5 font-medium">
                {activeDeviceData ? `${activeDeviceData.category} • Year ${activeDeviceData.releaseYear} • ${activeDeviceData.deviceWeightG}g Weight` : `${category}`}
              </p>

              {/* ESTIMATED CASH BUYBACK DISPLAY */}
              <div className="mb-5 bg-black/20 border border-white/10 p-5 rounded-2xl">
                <p className="text-[10px] font-mono font-bold text-emerald-400/90 uppercase tracking-wider mb-1">
                  ESTIMATED CASH BUYBACK
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
                    ₹{estimatedCash.toLocaleString('en-IN')}
                  </span>
                  <span className="text-lg font-bold text-emerald-300">INR</span>
                </div>
                <p className="text-[11px] text-emerald-200/60 mt-1.5 font-medium">
                  Guaranteed price locks for 7 days upon scheduling pickup.
                </p>
              </div>

              {/* Comprehensive Yields & Bonus Breakdown */}
              <div className="space-y-2.5 mb-6 bg-black/15 border border-white/10 p-4 rounded-2xl text-xs">
                {activeDeviceData && (
                  <>
                    <div className="flex justify-between items-center border-b border-white/08 pb-2">
                      <span className="text-emerald-200/80 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        Gold (Au) Content:
                      </span>
                      <span className="font-mono font-bold text-amber-300">
                        {activeDeviceData.metals.goldG >= 0.001
                          ? `${(activeDeviceData.metals.goldG * 1000).toFixed(2)} mg`
                          : `${activeDeviceData.metals.goldG.toFixed(4)} g`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/08 pb-2">
                      <span className="text-emerald-200/80 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                        Silver (Ag) Content:
                      </span>
                      <span className="font-mono font-bold text-slate-100">
                        {activeDeviceData.metals.silverG >= 0.001
                          ? `${(activeDeviceData.metals.silverG * 1000).toFixed(1)} mg`
                          : `${activeDeviceData.metals.silverG.toFixed(3)} g`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/08 pb-2">
                      <span className="text-emerald-200/80 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                        Copper (Cu) Content:
                      </span>
                      <span className="font-mono font-bold text-orange-200">
                        {activeDeviceData.metals.copperG >= 1
                          ? `${activeDeviceData.metals.copperG.toFixed(2)} g`
                          : `${(activeDeviceData.metals.copperG * 1000).toFixed(0)} mg`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/08 pb-2">
                      <span className="text-emerald-200/80 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                        Palladium &amp; Platinum:
                      </span>
                      <span className="font-mono font-bold text-teal-200">
                        {(activeDeviceData.metals.palladiumG * 1000).toFixed(1)}mg Pd / {(activeDeviceData.metals.platinumG * 1000).toFixed(2)}mg Pt
                      </span>
                    </div>
                  </>
                )}

                <div className="flex justify-between items-center pt-1">
                  <span className="text-emerald-200/70">Green Reward Bonus:</span>
                  <span className="font-bold text-amber-300">+{ecoCoins} Eco-Coins</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200/70">Doorstep Pickup:</span>
                  <span className="font-bold text-white">Free &amp; Insured</span>
                </div>
              </div>
            </div>

            {/* CTA & Security Banner */}
            <div className="relative z-10">
              <button
                onClick={() =>
                  onOpenScanner(
                    estimatedCash,
                    `${brand} ${activeDeviceData ? activeDeviceData.model : selectedModel}`
                  )
                }
                className="w-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-sm py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group mb-3 cursor-pointer"
              >
                <span>Scan &amp; Lock This Price</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-emerald-300/70 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Data Risk — Certified Data Sanitization Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

