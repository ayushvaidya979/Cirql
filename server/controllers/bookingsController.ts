import { Request, Response } from 'express';
import { db, BookingRecord } from '../config/db.js';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const {
      recyclerId,
      recyclerName,
      recyclerAddress,
      deviceType,
      date,
      timeSlot,
      userName = 'Eco Contributor',
      userEmail = 'guest@cirql.eco',
      userPhone,
    } = req.body;

    if (!recyclerId || !date || !timeSlot) {
      return res.status(400).json({
        success: false,
        message: 'recyclerId, date and timeSlot are required',
      });
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const passCode = `CQ-${recyclerId}-${randomNum}`;

    const newBooking: BookingRecord = {
      id: `bk-${Date.now()}`,
      passCode,
      userId: (req as any).user?.id,
      userName,
      userEmail,
      userPhone,
      recyclerId,
      recyclerName: recyclerName || 'Authorized Recycling Center',
      recyclerAddress: recyclerAddress || '',
      deviceType: deviceType || 'Smartphones & Mobile Devices',
      date,
      timeSlot,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    const bookings = db.get('bookings');
    bookings.unshift(newBooking);
    db.set('bookings', bookings);

    // If user is logged in, credit coins
    if ((req as any).user?.id) {
      const users = db.get('users');
      const u = users.find((x) => x.id === (req as any).user.id);
      if (u) {
        u.cirqlCoins += 50; // +50 bonus coins for scheduling
        db.set('users', users);
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Drop-off appointment confirmed! Digital QR Access Pass generated.',
      data: newBooking,
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getBookings = (req: Request, res: Response) => {
  try {
    const bookings = db.get('bookings');
    return res.json({ success: true, data: bookings });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const verifyPass = (req: Request, res: Response) => {
  try {
    const { passCode } = req.params;
    const bookings = db.get('bookings');
    const booking = bookings.find((b) => b.passCode.toUpperCase() === passCode.toUpperCase());

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Invalid or unrecognized QR pass code' });
    }

    return res.json({
      success: true,
      data: {
        ...booking,
        verified: true,
        verificationTimestamp: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
