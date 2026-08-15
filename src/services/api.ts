import { Recycler, RewardItem } from '../types';

const API_BASE = '/api';

// Helper for JWT auth header
const getAuthHeaders = (): HeadersInit => {
  const token = localStorage.getItem('cirql_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  cirqlCoins: number;
  totalEwasteKg: number;
  co2SavedKg: number;
  treesPlanted: number;
}

export interface AIScanResponse {
  scanId: string;
  detectedModel: string;
  conditionGrade: 'A+' | 'A' | 'B' | 'C' | 'Scrap';
  conditionDetails: string;
  confidenceScore: number;
  estimatedValue: number;
  materialYield: {
    goldGrams: number;
    silverGrams: number;
    copperGrams: number;
    plasticGrams: number;
  };
  carbonOffsetKg: number;
  recommendation: string;
}

export interface BookingPayload {
  recyclerId: string;
  recyclerName?: string;
  recyclerAddress?: string;
  deviceType: string;
  date: string;
  timeSlot: string;
  userName?: string;
  userEmail?: string;
  userPhone?: string;
}

export interface BookingResponse {
  id: string;
  passCode: string;
  recyclerId: string;
  recyclerName: string;
  recyclerAddress: string;
  deviceType: string;
  date: string;
  timeSlot: string;
  status: string;
  createdAt: string;
}

export const api = {
  // ── AUTHENTICATION ──
  auth: {
    async register(data: { name: string; email: string; password: string; phone?: string }): Promise<ApiResponse<{ user: UserProfile; token: string }>> {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success && json.data?.token) {
        localStorage.setItem('cirql_token', json.data.token);
        localStorage.setItem('cirql_user', JSON.stringify(json.data.user));
      }
      return json;
    },

    async login(data: { email: string; password: string }): Promise<ApiResponse<{ user: UserProfile; token: string }>> {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success && json.data?.token) {
        localStorage.setItem('cirql_token', json.data.token);
        localStorage.setItem('cirql_user', JSON.stringify(json.data.user));
      }
      return json;
    },

    async googleAuth(data: { email?: string; name?: string; avatar?: string; googleId?: string }): Promise<ApiResponse<{ user: UserProfile; token: string }>> {
      const res = await fetch(`${API_BASE}/auth/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success && json.data?.token) {
        localStorage.setItem('cirql_token', json.data.token);
        localStorage.setItem('cirql_user', JSON.stringify(json.data.user));
      }
      return json;
    },

    async getMe(): Promise<ApiResponse<{ user: UserProfile }>> {
      const res = await fetch(`${API_BASE}/auth/me`, {
        headers: getAuthHeaders(),
      });
      return res.json();
    },

    logout() {
      localStorage.removeItem('cirql_token');
      localStorage.removeItem('cirql_user');
    },

    getCurrentUser(): UserProfile | null {
      try {
        const stored = localStorage.getItem('cirql_user');
        return stored ? JSON.parse(stored) : null;
      } catch {
        return null;
      }
    },
  },

  // ── GOOGLE GEMINI AI VISION SCANNER ──
  ai: {
    async scanDevice(payload: { imageBase64?: string; deviceCategory?: string; mimeType?: string }): Promise<ApiResponse<AIScanResponse>> {
      const res = await fetch(`${API_BASE}/ai/scan-device`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload),
      });
      return res.json();
    },
  },

  // ── GOOGLE MAPS & GEOCODING ──
  maps: {
    async geocode(address: string): Promise<ApiResponse<{ formattedAddress: string; lat: number; lng: number }>> {
      const res = await fetch(`${API_BASE}/maps/geocode?address=${encodeURIComponent(address)}`);
      return res.json();
    },

    async getNearby(lat: number, lng: number, limit = 10): Promise<ApiResponse<Recycler[]>> {
      const res = await fetch(`${API_BASE}/maps/nearby?lat=${lat}&lng=${lng}&limit=${limit}`);
      return res.json();
    },
  },

  // ── RECYCLERS DIRECTORY ──
  recyclers: {
    async getAll(params?: { state?: string; type?: string; search?: string }): Promise<ApiResponse<{ total: number; states: string[]; facilities: Recycler[] }>> {
      const query = new URLSearchParams(params as any).toString();
      const res = await fetch(`${API_BASE}/recyclers${query ? `?${query}` : ''}`);
      return res.json();
    },

    async getById(id: string): Promise<ApiResponse<Recycler>> {
      const res = await fetch(`${API_BASE}/recyclers/${id}`);
      return res.json();
    },
  },

  // ── DROP-OFF BOOKINGS ──
  bookings: {
    async create(payload: BookingPayload): Promise<ApiResponse<BookingResponse>> {
      const res = await fetch(`${API_BASE}/bookings`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload),
      });
      return res.json();
    },

    async getAll(): Promise<ApiResponse<BookingResponse[]>> {
      const res = await fetch(`${API_BASE}/bookings`, {
        headers: getAuthHeaders(),
      });
      return res.json();
    },

    async verifyPass(passCode: string): Promise<ApiResponse<BookingResponse & { verified: boolean }>> {
      const res = await fetch(`${API_BASE}/bookings/verify/${encodeURIComponent(passCode)}`);
      return res.json();
    },
  },

  // ── VALUE ESTIMATOR ──
  estimator: {
    async calculate(data: { category: string; condition: string; quantity: number; brand?: string }) {
      const res = await fetch(`${API_BASE}/estimator/calculate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return res.json();
    },
  },

  // ── REWARDS ──
  rewards: {
    async getAll(): Promise<ApiResponse<RewardItem[]>> {
      const res = await fetch(`${API_BASE}/rewards`);
      return res.json();
    },

    async redeem(rewardId: string, userId?: string) {
      const res = await fetch(`${API_BASE}/rewards/redeem`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ rewardId, userId }),
      });
      return res.json();
    },
  },

  // ── INQUIRIES ──
  inquiries: {
    async submitCorporate(data: { companyName?: string; contactName: string; email: string; phone?: string; estimatedVolume?: string; message?: string }) {
      const res = await fetch(`${API_BASE}/inquiries/corporate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return res.json();
    },

    async submitContact(data: { name: string; email: string; phone?: string; message: string }) {
      const res = await fetch(`${API_BASE}/inquiries/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return res.json();
    },
  },

  // ── IMPACT STATS ──
  stats: {
    async get() {
      const res = await fetch(`${API_BASE}/stats`);
      return res.json();
    },
  },
};
