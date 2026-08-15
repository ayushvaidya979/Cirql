import { Request, Response } from 'express';
import { db } from '../config/db.js';

// Calculate Haversine distance in KM
const calculateDistanceKm = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
};

export const geocodeAddress = async (req: Request, res: Response) => {
  try {
    const { address } = req.query;
    if (!address) {
      return res.status(400).json({ success: false, message: 'Address query parameter is required' });
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (apiKey) {
      try {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          String(address)
        )}&key=${apiKey}`;
        const response = await fetch(url);
        const data: any = await response.json();

        if (data.status === 'OK' && data.results.length > 0) {
          const loc = data.results[0].geometry.location;
          return res.json({
            success: true,
            data: {
              formattedAddress: data.results[0].formatted_address,
              lat: loc.lat,
              lng: loc.lng,
              placeId: data.results[0].place_id,
            },
          });
        }
      } catch (err) {
        console.warn('Google Geocode API error, using fallback:', err);
      }
    }

    // High accuracy India city fallback lookup
    const fallbackLocations: Record<string, { lat: number; lng: number }> = {
      mumbai: { lat: 19.076, lng: 72.8777 },
      thane: { lat: 19.2183, lng: 72.9781 },
      pune: { lat: 18.5204, lng: 73.8567 },
      nashik: { lat: 19.9975, lng: 73.7898 },
      howrah: { lat: 22.5958, lng: 88.2636 },
      kolkata: { lat: 22.5726, lng: 88.3639 },
      jaipur: { lat: 26.9124, lng: 75.7873 },
      visakhapatnam: { lat: 17.6868, lng: 83.2185 },
      faridabad: { lat: 28.4089, lng: 77.3178 },
      delhi: { lat: 28.6139, lng: 77.209 },
      bhiwandi: { lat: 19.2812, lng: 73.0514 },
    };

    const queryLower = String(address).toLowerCase();
    const matchedKey = Object.keys(fallbackLocations).find((k) => queryLower.includes(k));
    const coords = matchedKey ? fallbackLocations[matchedKey] : { lat: 19.076, lng: 72.8777 };

    return res.json({
      success: true,
      data: {
        formattedAddress: String(address),
        lat: coords.lat,
        lng: coords.lng,
        source: 'local_geocoder',
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getNearbyRecyclers = async (req: Request, res: Response) => {
  try {
    const lat = parseFloat(String(req.query.lat || '19.0760'));
    const lng = parseFloat(String(req.query.lng || '72.8777'));
    const limit = parseInt(String(req.query.limit || '10'), 10);

    const recyclers = db.get('recyclers');

    const withDistances = recyclers.map((r: any) => {
      const distanceKm = calculateDistanceKm(lat, lng, r.lat, r.lng);
      return {
        ...r,
        distanceKm,
        calculatedDistance: `${distanceKm} km away`,
      };
    });

    withDistances.sort((a: any, b: any) => a.distanceKm - b.distanceKm);

    return res.json({
      success: true,
      data: withDistances.slice(0, limit),
      userLocation: { lat, lng },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
