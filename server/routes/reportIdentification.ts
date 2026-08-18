/**
 * routes/reportIdentification.ts
 * -------------------------------------------------------------
 * POST /api/report-identification
 * Lets a user flag a wrong device prediction from the identify-device
 * flow. Stores it for later review / model retraining.
 */

import { Router, Request, Response } from 'express';
import { db } from '../config/db.js';

const router = Router();

export interface IdentificationReport {
  id: string;
  deviceType: string;
  predictedModel: string;
  correctModel: string | null;
  confidence: number | null;
  notes: string | null;
  reportedAt: string;
}

router.post('/report-identification', async (req: Request, res: Response) => {
  const { deviceType, predictedModel, correctModel, confidence, notes } = req.body || {};

  if (!deviceType || !predictedModel) {
    return res.status(400).json({ error: 'deviceType and predictedModel are required.' });
  }

  const report: IdentificationReport = {
    id: `rep-${Date.now()}`,
    deviceType,
    predictedModel,
    correctModel: correctModel || null,
    confidence: confidence ?? null,
    notes: notes || null,
    reportedAt: new Date().toISOString(),
  };

  try {
    const existingReports = (db.get('identification_reports' as any) as IdentificationReport[]) || [];
    existingReports.unshift(report);
    db.set('identification_reports' as any, existingReports as any);
  } catch (e) {
    // Fallback if db schema doesn't have the key yet
    console.warn('Could not persist to db, logged report:', e);
  }

  console.log('[identification-report]', report);

  return res.json({ ok: true, data: report });
});

export default router;
