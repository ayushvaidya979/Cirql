export type FacilityCategory = 'Recycler' | 'Refurbisher' | 'Dismantler' | 'Recycler/Dismantler' | 'Kiosk';

export interface Recycler {
  id: string;
  name: string;
  type: string;
  facilityCategory?: FacilityCategory;
  state?: string;
  city?: string;
  regionalOffice?: string;
  pincode?: string;
  address: string;
  phone?: string;
  email?: string;
  capacity?: string | number;
  distance?: string;
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

export type DeviceCategory = 'Smartphone' | 'Laptop / PC';

export interface MetalYieldItem {
  metal: string;
  amountG: number;
  percent: string;
}

export interface DeviceModelData {
  brand: string;
  model: string;
  category: DeviceCategory;
  releaseYear: number;
  deviceWeightG: number;
  metals: {
    goldG: number;
    silverG: number;
    copperG: number;
    palladiumG: number;
    platinumG: number;
  };
  rawMetals: MetalYieldItem[];
}

