import { Router } from 'express';
import * as authController from '../controllers/authController.js';
import * as aiController from '../controllers/aiController.js';
import * as mapsController from '../controllers/mapsController.js';
import * as recyclersController from '../controllers/recyclersController.js';
import * as bookingsController from '../controllers/bookingsController.js';
import * as estimatorController from '../controllers/estimatorController.js';
import * as rewardsController from '../controllers/rewardsController.js';
import * as inquiriesController from '../controllers/inquiriesController.js';
import * as statsController from '../controllers/statsController.js';

const router = Router();

// Health Check
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Cirql E-Waste API Backend',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    googleApis: {
      geminiVision: Boolean(process.env.GEMINI_API_KEY),
      googleMaps: Boolean(process.env.GOOGLE_MAPS_API_KEY),
      googleAuth: Boolean(process.env.GOOGLE_CLIENT_ID),
    },
  });
});

// Auth Routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/google', authController.googleAuth);
router.get('/auth/me', authController.getMe);

// AI Device Scanner (Google Gemini Vision API)
router.post('/ai/scan-device', aiController.scanDevice);

// Google Maps & Geocoding
router.get('/maps/geocode', mapsController.geocodeAddress);
router.get('/maps/nearby', mapsController.getNearbyRecyclers);

// Recyclers & Facilities Directory (All 29 Facilities)
router.get('/recyclers', recyclersController.getAllRecyclers);
router.get('/recyclers/:id', recyclersController.getRecyclerById);

// Drop-off Bookings & QR Verification
router.post('/bookings', bookingsController.createBooking);
router.get('/bookings', bookingsController.getBookings);
router.get('/bookings/verify/:passCode', bookingsController.verifyPass);

// Value Estimator & E-Waste Scrap Calculation
router.post('/estimator/calculate', estimatorController.calculateValuation);

// Rewards & Redemptions
router.get('/rewards', rewardsController.getRewards);
router.post('/rewards/redeem', rewardsController.redeemReward);

// Corporate & Contact Inquiries
router.post('/inquiries/corporate', inquiriesController.submitCorporateInquiry);
router.post('/inquiries/contact', inquiriesController.submitContactMessage);

// Stats & Impact Metrics
router.get('/stats', statsController.getPlatformStats);

export default router;
