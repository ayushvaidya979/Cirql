import { Request, Response } from 'express';
import { db } from '../config/db.js';

export const getAllRecyclers = (req: Request, res: Response) => {
  try {
    const { state, type, search } = req.query;
    let recyclers = db.get('recyclers');

    if (state && state !== 'All') {
      recyclers = recyclers.filter((r: any) => r.state?.toLowerCase() === String(state).toLowerCase());
    }

    if (type && type !== 'All') {
      const typeStr = String(type).toLowerCase();
      recyclers = recyclers.filter((r: any) =>
        r.facilityCategory?.toLowerCase() === typeStr ||
        r.type?.toLowerCase().includes(typeStr)
      );
    }

    if (search) {
      const query = String(search).toLowerCase().trim();
      recyclers = recyclers.filter((r: any) =>
        r.id?.toLowerCase().includes(query) ||
        r.name?.toLowerCase().includes(query) ||
        r.city?.toLowerCase().includes(query) ||
        r.state?.toLowerCase().includes(query) ||
        r.regionalOffice?.toLowerCase().includes(query) ||
        r.pincode?.includes(query) ||
        r.address?.toLowerCase().includes(query) ||
        r.phone?.includes(query) ||
        r.email?.toLowerCase().includes(query) ||
        r.acceptedTypes?.some((t: string) => t.toLowerCase().includes(query))
      );
    }

    // Compute aggregate capacity
    const totalFacilities = recyclers.length;
    const states = Array.from(new Set(db.get('recyclers').map((r: any) => r.state).filter(Boolean)));

    return res.json({
      success: true,
      data: {
        total: totalFacilities,
        states,
        facilities: recyclers,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getRecyclerById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const recyclers = db.get('recyclers');
    const facility = recyclers.find((r: any) => r.id.toLowerCase() === id.toLowerCase());

    if (!facility) {
      return res.status(404).json({ success: false, message: 'Facility not found' });
    }

    return res.json({ success: true, data: facility });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
