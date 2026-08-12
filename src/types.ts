export interface Recycler {
  id: string;
  name: string;
  type: 'AUTHORIZED DISMANTLER' | '24/7 SMART KIOSK' | 'REFURBISHMENT CENTER';
  address: string;
  distance: string;
  rating: number;
  openStatus: string;
  lat: number;
  lng: number;
  certifications: string[];
  acceptedTypes: string[];
}

export interface RewardItem {
  id: string;
  category: string;
  title: string;
  coinsCost: number;
  image: string;
  badge: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
