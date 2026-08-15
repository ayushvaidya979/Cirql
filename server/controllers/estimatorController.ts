import { Request, Response } from 'express';

interface EstimationMatrix {
  baseValue: number;
  goldGrams: number;
  silverGrams: number;
  copperGrams: number;
  carbonOffsetKg: number;
}

const CATEGORY_RATES: Record<string, EstimationMatrix> = {
  smartphone: { baseValue: 3500, goldGrams: 0.034, silverGrams: 0.35, copperGrams: 16.2, carbonOffsetKg: 18.5 },
  laptop: { baseValue: 8200, goldGrams: 0.12, silverGrams: 1.1, copperGrams: 140, carbonOffsetKg: 48.2 },
  tablet: { baseValue: 4100, goldGrams: 0.05, silverGrams: 0.5, copperGrams: 35, carbonOffsetKg: 24.1 },
  smartwatch: { baseValue: 1800, goldGrams: 0.015, silverGrams: 0.12, copperGrams: 8.5, carbonOffsetKg: 9.4 },
  pcb: { baseValue: 2800, goldGrams: 0.28, silverGrams: 1.8, copperGrams: 210, carbonOffsetKg: 32.0 },
  desktop: { baseValue: 6500, goldGrams: 0.15, silverGrams: 1.4, copperGrams: 280, carbonOffsetKg: 62.0 },
  monitor: { baseValue: 2200, goldGrams: 0.02, silverGrams: 0.15, copperGrams: 95, carbonOffsetKg: 28.0 },
  server: { baseValue: 18500, goldGrams: 0.85, silverGrams: 5.2, copperGrams: 920, carbonOffsetKg: 180.0 },
};

export const calculateValuation = (req: Request, res: Response) => {
  try {
    const { category = 'smartphone', condition = 'working', quantity = 1, brand = '' } = req.body;

    const catKey = String(category).toLowerCase();
    const matchedKey = Object.keys(CATEGORY_RATES).find((k) => catKey.includes(k)) || 'smartphone';
    const rate = CATEGORY_RATES[matchedKey];

    let conditionMultiplier = 1.0;
    if (condition === 'flawless' || condition === 'like_new') conditionMultiplier = 1.25;
    if (condition === 'good' || condition === 'working') conditionMultiplier = 1.0;
    if (condition === 'damaged' || condition === 'scratched') conditionMultiplier = 0.65;
    if (condition === 'dead' || condition === 'scrap') conditionMultiplier = 0.40;

    const qty = Math.max(1, parseInt(String(quantity), 10) || 1);
    const finalValue = Math.round(rate.baseValue * conditionMultiplier * qty);

    const metalYield = {
      goldGrams: Math.round(rate.goldGrams * qty * 1000) / 1000,
      silverGrams: Math.round(rate.silverGrams * qty * 100) / 100,
      copperGrams: Math.round(rate.copperGrams * qty * 10) / 10,
    };

    const carbonOffsetKg = Math.round(rate.carbonOffsetKg * qty * 10) / 10;
    const cirqlCoinsReward = Math.round(finalValue * 0.1); // 10% value awarded in Cirql coins

    return res.json({
      success: true,
      data: {
        category: matchedKey,
        brand: brand || 'Standard OEM',
        condition,
        quantity: qty,
        estimatedPayoutInr: finalValue,
        cirqlCoinsReward,
        carbonOffsetKg,
        metalYield,
        recommendation: conditionMultiplier >= 0.9 ? 'Eligible for Direct UPI Refurbishment Payout' : 'Directed to Certified Shredder & Smelter',
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
