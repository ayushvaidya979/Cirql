// ─────────────────────────────────────────────────────────────
//  Cirql Metal Market Prices (India)
//  Last updated: 16 August 2026
//  Sources:
//    Gold   24K – MCX / IBJA spot rate
//    Silver      – MCX spot (₹2,50,000/kg → ₹250/g)
//    Platinum    – International spot $1,753.48/oz → converted
//    Palladium   – International spot $1,316.47/oz → converted
//    Copper      – International spot $6.60/lb → converted
//    Aluminium   – International spot $3,247.70/tonne → converted
// ─────────────────────────────────────────────────────────────

export interface MetalPrice {
  symbol: string;
  name: string;
  pricePerGram: number;
  pricePerMg: number;
  source: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
}

export const METAL_PRICES: Record<string, MetalPrice> = {
  gold: {
    symbol: 'Au',
    name: 'Gold (24K)',
    pricePerGram: 15513,
    pricePerMg: 15.513,
    source: '₹15,513/g – MCX/IBJA 24K spot',
    colorClass: 'amber',
    bgClass: 'bg-amber-500/15',
    borderClass: 'border-amber-500/40',
    textClass: 'text-amber-300',
  },
  silver: {
    symbol: 'Ag',
    name: 'Silver',
    pricePerGram: 250,
    pricePerMg: 0.25,
    source: '₹250/g – MCX spot (₹2,50,000/kg)',
    colorClass: 'slate',
    bgClass: 'bg-slate-400/15',
    borderClass: 'border-slate-400/40',
    textClass: 'text-slate-200',
  },
  platinum: {
    symbol: 'Pt',
    name: 'Platinum',
    pricePerGram: 5390,
    pricePerMg: 5.39,
    source: "₹5,390/g – Int'l spot \$1,753.48/oz",
    colorClass: 'indigo',
    bgClass: 'bg-indigo-400/15',
    borderClass: 'border-indigo-400/40',
    textClass: 'text-indigo-200',
  },
  palladium: {
    symbol: 'Pd',
    name: 'Palladium',
    pricePerGram: 4046,
    pricePerMg: 4.046,
    source: "₹4,046/g – Int'l spot \$1,316.47/oz",
    colorClass: 'teal',
    bgClass: 'bg-teal-500/15',
    borderClass: 'border-teal-500/40',
    textClass: 'text-teal-300',
  },
  copper: {
    symbol: 'Cu',
    name: 'Copper',
    pricePerGram: 1.39,
    pricePerMg: 0.00139,
    source: "₹1.39/g – Int'l spot \$6.60/lb",
    colorClass: 'orange',
    bgClass: 'bg-orange-500/15',
    borderClass: 'border-orange-500/40',
    textClass: 'text-orange-300',
  },
  aluminium: {
    symbol: 'Al',
    name: 'Aluminium',
    pricePerGram: 0.31,
    pricePerMg: 0.00031,
    source: "₹0.31/g – Int'l spot \$3,247.70/tonne",
    colorClass: 'sky',
    bgClass: 'bg-sky-400/15',
    borderClass: 'border-sky-400/40',
    textClass: 'text-sky-300',
  },
};

export const METAL_PRICES_LIST: MetalPrice[] = [
  METAL_PRICES.gold,
  METAL_PRICES.silver,
  METAL_PRICES.platinum,
  METAL_PRICES.palladium,
  METAL_PRICES.copper,
  METAL_PRICES.aluminium,
];

export const METAL_PRICES_DATE = '16 Aug 2026';

export function calcIntrinsicValue(metals: {
  goldG: number;
  silverG: number;
  copperG: number;
  palladiumG: number;
  platinumG: number;
}): {
  total: number;
  breakdown: { metal: string; symbol: string; grams: number; value: number; textClass: string }[];
} {
  const rows = [
    { metal: 'Gold',      symbol: 'Au', grams: metals.goldG,      price: METAL_PRICES.gold.pricePerGram,      textClass: METAL_PRICES.gold.textClass },
    { metal: 'Silver',    symbol: 'Ag', grams: metals.silverG,    price: METAL_PRICES.silver.pricePerGram,    textClass: METAL_PRICES.silver.textClass },
    { metal: 'Copper',    symbol: 'Cu', grams: metals.copperG,    price: METAL_PRICES.copper.pricePerGram,    textClass: METAL_PRICES.copper.textClass },
    { metal: 'Palladium', symbol: 'Pd', grams: metals.palladiumG, price: METAL_PRICES.palladium.pricePerGram, textClass: METAL_PRICES.palladium.textClass },
    { metal: 'Platinum',  symbol: 'Pt', grams: metals.platinumG,  price: METAL_PRICES.platinum.pricePerGram,  textClass: METAL_PRICES.platinum.textClass },
  ];

  const breakdown = rows.map((r) => ({
    metal: r.metal,
    symbol: r.symbol,
    grams: r.grams,
    value: r.grams * r.price,
    textClass: r.textClass,
  }));

  const total = breakdown.reduce((sum, r) => sum + r.value, 0);
  return { total, breakdown };
}
