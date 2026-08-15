import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { RECYCLERS_DATA } from '../../src/data/recyclersData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../data');
const DB_FILE = path.join(DATA_DIR, 'store.json');

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  passwordHash?: string;
  phone?: string;
  googleId?: string;
  avatar?: string;
  cirqlCoins: number;
  totalEwasteKg: number;
  co2SavedKg: number;
  treesPlanted: number;
  createdAt: string;
}

export interface BookingRecord {
  id: string;
  passCode: string;
  userId?: string;
  userName: string;
  userEmail: string;
  userPhone?: string;
  recyclerId: string;
  recyclerName: string;
  recyclerAddress: string;
  deviceType: string;
  date: string;
  timeSlot: string;
  status: 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface ScanRecord {
  id: string;
  userId?: string;
  deviceType: string;
  detectedModel: string;
  conditionGrade: 'A+' | 'A' | 'B' | 'C' | 'Scrap';
  confidenceScore: number;
  estimatedValue: number;
  materialYield: {
    goldGrams: number;
    silverGrams: number;
    copperGrams: number;
    plasticGrams: number;
  };
  carbonOffsetKg: number;
  imageUrl?: string;
  createdAt: string;
}

export interface RewardRecord {
  id: string;
  category: string;
  title: string;
  coinsCost: number;
  image: string;
  badge: string;
  partner: string;
}

export interface RedemptionRecord {
  id: string;
  userId: string;
  rewardId: string;
  rewardTitle: string;
  coinsSpent: number;
  code: string;
  status: 'active' | 'used';
  createdAt: string;
}

export interface InquiryRecord {
  id: string;
  type: 'corporate' | 'contact';
  companyName?: string;
  contactName: string;
  email: string;
  phone?: string;
  estimatedVolume?: string;
  message: string;
  createdAt: string;
}

export interface DatabaseSchema {
  users: UserRecord[];
  recyclers: any[];
  bookings: BookingRecord[];
  scans: ScanRecord[];
  rewards: RewardRecord[];
  redemptions: RedemptionRecord[];
  inquiries: InquiryRecord[];
}

const INITIAL_REWARDS: RewardRecord[] = [
  {
    id: 'rew-1',
    category: 'Voucher',
    title: '₹500 Croma Electronics Voucher',
    coinsCost: 450,
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60',
    badge: 'Popular',
    partner: 'Croma',
  },
  {
    id: 'rew-2',
    category: 'Impact',
    title: 'Plant 5 Trees in Western Ghats',
    coinsCost: 300,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=60',
    badge: 'Eco Impact',
    partner: 'Grow-Trees India',
  },
  {
    id: 'rew-3',
    category: 'Cashback',
    title: '₹1,000 Direct UPI Payout',
    coinsCost: 900,
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&auto=format&fit=crop&q=60',
    badge: 'Instant Transfer',
    partner: 'UPI Auto-Credit',
  },
  {
    id: 'rew-4',
    category: 'Brand Perk',
    title: 'Boat Audio 20% Off Coupon',
    coinsCost: 200,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
    badge: 'Partner Discount',
    partner: 'boAt Lifestyle',
  },
];

class Database {
  private data: DatabaseSchema;

  constructor() {
    this.data = this.loadData();
  }

  private loadData(): DatabaseSchema {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }

      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        return JSON.parse(raw);
      }
    } catch (err) {
      console.warn('Error reading database file, initializing defaults:', err);
    }

    const defaultData: DatabaseSchema = {
      users: [
        {
          id: 'usr-demo-1',
          name: 'Priya Sharma',
          email: 'priya@cirql.eco',
          cirqlCoins: 1250,
          totalEwasteKg: 14.8,
          co2SavedKg: 42.5,
          treesPlanted: 6,
          createdAt: new Date().toISOString(),
        },
      ],
      recyclers: RECYCLERS_DATA,
      bookings: [],
      scans: [],
      rewards: INITIAL_REWARDS,
      redemptions: [],
      inquiries: [],
    };

    this.saveData(defaultData);
    return defaultData;
  }

  public saveData(customData?: DatabaseSchema): void {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.writeFileSync(DB_FILE, JSON.stringify(customData || this.data, null, 2), 'utf-8');
    } catch (err) {
      console.error('Failed to write database file:', err);
    }
  }

  public get<K extends keyof DatabaseSchema>(collection: K): DatabaseSchema[K] {
    return this.data[collection];
  }

  public set<K extends keyof DatabaseSchema>(collection: K, items: DatabaseSchema[K]): void {
    this.data[collection] = items;
    this.saveData();
  }
}

export const db = new Database();
