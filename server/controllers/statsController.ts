import { Request, Response } from 'express';
import { db } from '../config/db.js';

export const getPlatformStats = (req: Request, res: Response) => {
  try {
    const recyclers = db.get('recyclers');
    const bookings = db.get('bookings');
    const users = db.get('users');
    const scans = db.get('scans');

    // Aggregate metrics
    const totalFacilities = recyclers.length;
    const totalBookings = bookings.length;
    const totalUsers = users.length;
    const totalScans = scans.length;

    // Platform environmental impact calculation
    const totalEwasteRecycledKg = 142850 + totalBookings * 4.5;
    const co2SavedKg = Math.round(totalEwasteRecycledKg * 2.85);
    const treesPlanted = 2840 + users.reduce((acc, u) => acc + (u.treesPlanted || 0), 0);
    const goldRecoveredGrams = Math.round(totalEwasteRecycledKg * 0.034 * 10) / 10;

    return res.json({
      success: true,
      data: {
        totalFacilities,
        totalBookings,
        totalUsers,
        totalScans,
        impact: {
          totalEwasteRecycledKg,
          co2SavedKg,
          treesPlanted,
          goldRecoveredGrams,
        },
        cpcbRecyclingRate2024: '62.0%',
        annualNationalGenerationLakhTonnes: 12.54,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
