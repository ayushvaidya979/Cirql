import React, { useState, useMemo } from 'react';
import { Smartphone, Laptop, Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface ValueEstimatorProps {
  onOpenScanner: (calculatedVal?: number, deviceName?: string) => void;
}

export const ValueEstimator: React.FC<ValueEstimatorProps> = ({ onOpenScanner }) => {
  const [category, setCategory] = useState<'Smartphone' | 'Laptop / PC'>('Smartphone');
  const [brand, setBrand] = useState('Apple');
  const [ageYears, setAgeYears] = useState<number>(2); // 0 to 6
  const [condition, setCondition] = useState<'Flawless' | 'Minor Scratches' | 'Cracked Display' | 'Dead'>('Minor Scratches');
  const [includeAdapter, setIncludeAdapter] = useState(true);

  const categories = [
    { name: 'Smartphone', icon: Smartphone },
    { name: 'Laptop / PC', icon: Laptop },
  ] as const;

  const brandsMap: Record<string, string[]> = {
    Smartphone: ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Google', 'Sony'],
    'Laptop / PC': ['Apple', 'Dell', 'HP', 'Lenovo', 'Asus', 'Acer'],
  };

  const currentBrands = brandsMap[category] || ['Apple', 'Samsung', 'Dell'];

  // Dynamic Cash Valuation Calculation
  const { estimatedCash, ecoCoins, metalYields } = useMemo(() => {
    let base = 4200;
    if (category === 'Laptop / PC') base = 11500;

    let brandMult = 1.0;
    if (brand === 'Apple') brandMult = 1.35;
    else if (brand === 'Samsung' || brand === 'Sony') brandMult = 1.15;
    else if (brand === 'Dell' || brand === 'HP') brandMult = 1.08;

    let ageFactor = 1.0 - (ageYears * 0.1);
    if (ageFactor < 0.3) ageFactor = 0.3;

    let condMult = 1.0;
    if (condition === 'Minor Scratches') condMult = 0.82;
    if (condition === 'Cracked Display') condMult = 0.55;
    if (condition === 'Dead') condMult = 0.32;

    let total = Math.round(base * brandMult * ageFactor * condMult);
    if (includeAdapter) total += 250;

    const coins = Math.round(total * 0.08);

    const metals = 'Gold, Copper, Palladium';

    return { estimatedCash: total, ecoCoins: coins, metalYields: metals };
  }, [category, brand, ageYears, condition, includeAdapter]);

  const handleCategoryChange = (cat: typeof category) => {
    setCategory(cat);
    const newBrands = brandsMap[cat];
    if (newBrands && !newBrands.includes(brand)) {
      setBrand(newBrands[0]);
    }
  };

  return (
    <section id="value-estimator" className="py-24 bg-[#f8faf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-300/60 px-4 py-1.5 rounded-full mb-4 shadow-2xs">
            <span className="text-sm">📱</span>
            <span className="text-xs font-bold text-emerald-900 tracking-wide uppercase">
              Instant E-Waste Calculator
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient-glass">
            Discover Your Device's True Recycle Value
          </h2>

          <p className="text-lg text-slate-600 font-medium">
            Get an estimate based on device condition, components and current material demand.
          </p>
        </div>

        {/* TWO-COLUMN CALCULATOR INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CARD: SELECTION FORM (7 COLS) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
            
            {/* 1. SELECT DEVICE CATEGORY */}
            <div className="mb-8">
              <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">
                1. SELECT DEVICE CATEGORY
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {categories.map((cat) => {
                  const IconComp = cat.icon;
                  const isSelected = category === cat.name;
                  return (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => handleCategoryChange(cat.name)}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all text-center ${
                        isSelected
                          ? 'bg-[#234d40] text-white border-[#234d40] shadow-md scale-[1.02]'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                      }`}
                    >
                      <IconComp className={`w-6 h-6 mb-2 ${isSelected ? 'text-emerald-300' : 'text-slate-600'}`} />
                      <span className="text-xs font-semibold leading-tight">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* BRAND & AGE SLIDER GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Brand Dropdown */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                  BRAND / MANUFACTURER
                </label>
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer"
                >
                  {currentBrands.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Age Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    DEVICE AGE ({ageYears} YEARS OLD)
                  </label>
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
                  <span>3 yrs</span>
                  <span>6+ yrs</span>
                </div>
              </div>
            </div>

            {/* WORKING CONDITION */}
            <div className="mb-8">
              <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                WORKING CONDITION
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
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                        isSelected
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

          {/* RIGHT CARD: LIVE VALUATION PANEL (5 COLS) */}
          <div className="lg:col-span-5 bg-[#2a5247] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-emerald-500/30 relative overflow-hidden flex flex-col justify-between min-h-[480px]">
            
            {/* Ambient Lighting Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-widest">
                    LIVE VALUATION
                  </span>
                </div>
                <span className="text-xs font-semibold bg-emerald-950/80 px-3 py-1 rounded-full text-emerald-200 border border-emerald-800">
                  {condition}
                </span>
              </div>

              {/* Selected Device Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {brand} {category}
              </h3>

              {/* ESTIMATED CASH BUYBACK DISPLAY */}
              <div className="mb-6 bg-emerald-950/50 p-6 rounded-2xl border border-emerald-800/60 relative">
                <p className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  ESTIMATED CASH BUYBACK
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
                    ₹{estimatedCash.toLocaleString('en-IN')}
                  </span>
                  <span className="text-lg font-bold text-emerald-300">INR</span>
                </div>
                <p className="text-[11px] text-emerald-200/70 mt-2 font-medium">
                  Guaranteed price locks for 7 days upon scheduling pickup.
                </p>
              </div>

              {/* Yields & Bonus Breakdown */}
              <div className="space-y-3 mb-8 bg-emerald-950/30 p-4 rounded-xl border border-emerald-900/50 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200/80">Precious Metals Yield:</span>
                  <span className="font-bold text-emerald-300">{metalYields}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200/80">Green Reward Bonus:</span>
                  <span className="font-bold text-amber-300">+{ecoCoins} Eco-Coins</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200/80">Doorstep Pickup:</span>
                  <span className="font-bold text-white">Free &amp; Insured</span>
                </div>
              </div>
            </div>

            {/* CTA & Security Banner */}
            <div>
              <button
                onClick={() => onOpenScanner(estimatedCash, `${brand} ${category}`)}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base py-4 px-6 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2 group mb-4"
              >
                <span>Scan &amp; Lock This Price</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-emerald-300/80 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Data Risk — Military Grade Data Wipe Included</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
