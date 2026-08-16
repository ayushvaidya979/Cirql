// Metal Content Database (Smartphones & Laptops)
// Source: Cirql Comprehensive Metal Extraction Dataset

export interface MetalYieldItem {
  metal: string;
  amountG: number;
  percent: string;
}

export interface DeviceModelData {
  brand: string;
  model: string;
  category: 'Smartphone' | 'Laptop / PC';
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

export const METAL_DATABASE: Record<string, Record<string, Record<string, DeviceModelData>>> = {
  "Smartphone": {
    "Nokia": {
      "Nokia 3310": {
        "brand": "Nokia",
        "model": "Nokia 3310",
        "category": "Smartphone",
        "releaseYear": 2000,
        "deviceWeightG": 133,
        "metals": {
          "goldG": 0.01777,
          "silverG": 0.17737,
          "copperG": 6.65,
          "palladiumG": 0.00713,
          "platinumG": 0.00032
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01777,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.17737,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00713,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00032,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 6.65,
            "percent": "5.00000%"
          }
        ]
      },
      "Nokia 1100": {
        "brand": "Nokia",
        "model": "Nokia 1100",
        "category": "Smartphone",
        "releaseYear": 2003,
        "deviceWeightG": 86,
        "metals": {
          "goldG": 0.01149,
          "silverG": 0.11469,
          "copperG": 4.3,
          "palladiumG": 0.00461,
          "platinumG": 0.00021
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01149,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.11469,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00461,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00021,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 4.3,
            "percent": "5.00000%"
          }
        ]
      },
      "Nokia 6600": {
        "brand": "Nokia",
        "model": "Nokia 6600",
        "category": "Smartphone",
        "releaseYear": 2003,
        "deviceWeightG": 125,
        "metals": {
          "goldG": 0.0167,
          "silverG": 0.1667,
          "copperG": 6.25,
          "palladiumG": 0.0067,
          "platinumG": 0.0003
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0167,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.1667,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0067,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0003,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 6.25,
            "percent": "5.00000%"
          }
        ]
      },
      "Nokia 1110": {
        "brand": "Nokia",
        "model": "Nokia 1110",
        "category": "Smartphone",
        "releaseYear": 2005,
        "deviceWeightG": 74,
        "metals": {
          "goldG": 0.00989,
          "silverG": 0.09869,
          "copperG": 3.7,
          "palladiumG": 0.00397,
          "platinumG": 0.00018
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.00989,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.09869,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00397,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00018,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 3.7,
            "percent": "5.00000%"
          }
        ]
      },
      "Nokia N70": {
        "brand": "Nokia",
        "model": "Nokia N70",
        "category": "Smartphone",
        "releaseYear": 2005,
        "deviceWeightG": 127,
        "metals": {
          "goldG": 0.01697,
          "silverG": 0.16937,
          "copperG": 6.35,
          "palladiumG": 0.00681,
          "platinumG": 0.0003
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01697,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.16937,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00681,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0003,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 6.35,
            "percent": "5.00000%"
          }
        ]
      },
      "Nokia N95": {
        "brand": "Nokia",
        "model": "Nokia N95",
        "category": "Smartphone",
        "releaseYear": 2007,
        "deviceWeightG": 120,
        "metals": {
          "goldG": 0.01603,
          "silverG": 0.16003,
          "copperG": 6,
          "palladiumG": 0.00643,
          "platinumG": 0.00029
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01603,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.16003,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00643,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00029,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 6,
            "percent": "5.00000%"
          }
        ]
      },
      "Nokia 5233": {
        "brand": "Nokia",
        "model": "Nokia 5233",
        "category": "Smartphone",
        "releaseYear": 2009,
        "deviceWeightG": 106,
        "metals": {
          "goldG": 0.01416,
          "silverG": 0.14136,
          "copperG": 5.3,
          "palladiumG": 0.00568,
          "platinumG": 0.00025
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01416,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.14136,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00568,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00025,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 5.3,
            "percent": "5.00000%"
          }
        ]
      },
      "Nokia N8": {
        "brand": "Nokia",
        "model": "Nokia N8",
        "category": "Smartphone",
        "releaseYear": 2010,
        "deviceWeightG": 135,
        "metals": {
          "goldG": 0.02254,
          "silverG": 0.22505,
          "copperG": 8.775,
          "palladiumG": 0.00905,
          "platinumG": 0.00041
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02254,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.22505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00905,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00041,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 8.775,
            "percent": "6.50000%"
          }
        ]
      },
      "Nokia Lumia 920": {
        "brand": "Nokia",
        "model": "Nokia Lumia 920",
        "category": "Smartphone",
        "releaseYear": 2012,
        "deviceWeightG": 185,
        "metals": {
          "goldG": 0.03089,
          "silverG": 0.3084,
          "copperG": 14.8,
          "palladiumG": 0.01239,
          "platinumG": 0.00056
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03089,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3084,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01239,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00056,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.8,
            "percent": "8.00000%"
          }
        ]
      },
      "Nokia 105": {
        "brand": "Nokia",
        "model": "Nokia 105",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 73,
        "metals": {
          "goldG": 0.00975,
          "silverG": 0.09735,
          "copperG": 3.65,
          "palladiumG": 0.00391,
          "platinumG": 0.00018
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.00975,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.09735,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00391,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00018,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 3.65,
            "percent": "5.00000%"
          }
        ]
      },
      "Nokia Lumia 520": {
        "brand": "Nokia",
        "model": "Nokia Lumia 520",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 124,
        "metals": {
          "goldG": 0.02071,
          "silverG": 0.20671,
          "copperG": 9.92,
          "palladiumG": 0.00831,
          "platinumG": 0.00037
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02071,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.20671,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00831,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00037,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 9.92,
            "percent": "8.00000%"
          }
        ]
      },
      "Nokia 6 (2017)": {
        "brand": "Nokia",
        "model": "Nokia 6 (2017)",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 169,
        "metals": {
          "goldG": 0.02822,
          "silverG": 0.28172,
          "copperG": 13.52,
          "palladiumG": 0.01132,
          "platinumG": 0.00051
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02822,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01132,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00051,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.52,
            "percent": "8.00000%"
          }
        ]
      },
      "Nokia 7 Plus": {
        "brand": "Nokia",
        "model": "Nokia 7 Plus",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 183,
        "metals": {
          "goldG": 0.03056,
          "silverG": 0.30506,
          "copperG": 14.64,
          "palladiumG": 0.01226,
          "platinumG": 0.00055
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03056,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.30506,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01226,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00055,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.64,
            "percent": "8.00000%"
          }
        ]
      },
      "Nokia 8.1": {
        "brand": "Nokia",
        "model": "Nokia 8.1",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 180,
        "metals": {
          "goldG": 0.03006,
          "silverG": 0.30006,
          "copperG": 14.4,
          "palladiumG": 0.01206,
          "platinumG": 0.00054
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03006,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.30006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01206,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00054,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Nokia 5.4": {
        "brand": "Nokia",
        "model": "Nokia 5.4",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Nokia C12": {
        "brand": "Nokia",
        "model": "Nokia C12",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 174,
        "metals": {
          "goldG": 0.02906,
          "silverG": 0.29006,
          "copperG": 13.92,
          "palladiumG": 0.01166,
          "platinumG": 0.00052
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02906,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01166,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00052,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.92,
            "percent": "8.00000%"
          }
        ]
      },
      "Nokia G21": {
        "brand": "Nokia",
        "model": "Nokia G21",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Motorola": {
      "Motorola RAZR V3": {
        "brand": "Motorola",
        "model": "Motorola RAZR V3",
        "category": "Smartphone",
        "releaseYear": 2004,
        "deviceWeightG": 95,
        "metals": {
          "goldG": 0.01269,
          "silverG": 0.12669,
          "copperG": 4.75,
          "palladiumG": 0.00509,
          "platinumG": 0.00023
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01269,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.12669,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00509,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00023,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 4.75,
            "percent": "5.00000%"
          }
        ]
      },
      "Motorola Moto G (1st gen)": {
        "brand": "Motorola",
        "model": "Motorola Moto G (1st gen)",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 143,
        "metals": {
          "goldG": 0.02388,
          "silverG": 0.23838,
          "copperG": 11.44,
          "palladiumG": 0.00958,
          "platinumG": 0.00043
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02388,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00958,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00043,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.44,
            "percent": "8.00000%"
          }
        ]
      },
      "Motorola Moto E (1st gen)": {
        "brand": "Motorola",
        "model": "Motorola Moto E (1st gen)",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 142,
        "metals": {
          "goldG": 0.02371,
          "silverG": 0.23671,
          "copperG": 11.36,
          "palladiumG": 0.00951,
          "platinumG": 0.00043
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02371,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23671,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00951,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00043,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.36,
            "percent": "8.00000%"
          }
        ]
      },
      "Motorola Moto X (2nd gen)": {
        "brand": "Motorola",
        "model": "Motorola Moto X (2nd gen)",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 144,
        "metals": {
          "goldG": 0.02405,
          "silverG": 0.24005,
          "copperG": 11.52,
          "palladiumG": 0.00965,
          "platinumG": 0.00043
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02405,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00965,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00043,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.52,
            "percent": "8.00000%"
          }
        ]
      },
      "Motorola Moto G4 Plus": {
        "brand": "Motorola",
        "model": "Motorola Moto G4 Plus",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 155,
        "metals": {
          "goldG": 0.02588,
          "silverG": 0.25839,
          "copperG": 12.4,
          "palladiumG": 0.01039,
          "platinumG": 0.00047
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02588,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01039,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00047,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Motorola Moto Z": {
        "brand": "Motorola",
        "model": "Motorola Moto Z",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 136,
        "metals": {
          "goldG": 0.02271,
          "silverG": 0.22671,
          "copperG": 10.88,
          "palladiumG": 0.00911,
          "platinumG": 0.00041
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02271,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.22671,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00911,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00041,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.88,
            "percent": "8.00000%"
          }
        ]
      },
      "Motorola One Power": {
        "brand": "Motorola",
        "model": "Motorola One Power",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 198,
        "metals": {
          "goldG": 0.03307,
          "silverG": 0.33007,
          "copperG": 15.84,
          "palladiumG": 0.01327,
          "platinumG": 0.00059
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03307,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33007,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01327,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00059,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.84,
            "percent": "8.00000%"
          }
        ]
      },
      "Motorola Razr (2019 foldable)": {
        "brand": "Motorola",
        "model": "Motorola Razr (2019 foldable)",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 205,
        "metals": {
          "goldG": 0.03424,
          "silverG": 0.34174,
          "copperG": 17.425,
          "palladiumG": 0.01374,
          "platinumG": 0.00061
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03424,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.34174,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01374,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00061,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 17.425,
            "percent": "8.50000%"
          }
        ]
      },
      "Motorola Edge 20": {
        "brand": "Motorola",
        "model": "Motorola Edge 20",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 163,
        "metals": {
          "goldG": 0.02722,
          "silverG": 0.27172,
          "copperG": 13.04,
          "palladiumG": 0.01092,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02722,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01092,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.04,
            "percent": "8.00000%"
          }
        ]
      },
      "Motorola Moto G73 5G": {
        "brand": "Motorola",
        "model": "Motorola Moto G73 5G",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 179,
        "metals": {
          "goldG": 0.02989,
          "silverG": 0.29839,
          "copperG": 14.32,
          "palladiumG": 0.01199,
          "platinumG": 0.00054
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02989,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01199,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00054,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.32,
            "percent": "8.00000%"
          }
        ]
      },
      "Motorola Edge 50 Pro": {
        "brand": "Motorola",
        "model": "Motorola Edge 50 Pro",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 186,
        "metals": {
          "goldG": 0.03106,
          "silverG": 0.31006,
          "copperG": 14.88,
          "palladiumG": 0.01246,
          "platinumG": 0.00056
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03106,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01246,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00056,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.88,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "BlackBerry": {
      "BlackBerry 8700": {
        "brand": "BlackBerry",
        "model": "BlackBerry 8700",
        "category": "Smartphone",
        "releaseYear": 2006,
        "deviceWeightG": 133,
        "metals": {
          "goldG": 0.01777,
          "silverG": 0.17737,
          "copperG": 6.65,
          "palladiumG": 0.00713,
          "platinumG": 0.00032
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01777,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.17737,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00713,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00032,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 6.65,
            "percent": "5.00000%"
          }
        ]
      },
      "BlackBerry Bold 9700": {
        "brand": "BlackBerry",
        "model": "BlackBerry Bold 9700",
        "category": "Smartphone",
        "releaseYear": 2009,
        "deviceWeightG": 122,
        "metals": {
          "goldG": 0.0163,
          "silverG": 0.1627,
          "copperG": 6.1,
          "palladiumG": 0.00654,
          "platinumG": 0.00029
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0163,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.1627,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00654,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00029,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 6.1,
            "percent": "5.00000%"
          }
        ]
      },
      "BlackBerry Curve 8520": {
        "brand": "BlackBerry",
        "model": "BlackBerry Curve 8520",
        "category": "Smartphone",
        "releaseYear": 2009,
        "deviceWeightG": 106,
        "metals": {
          "goldG": 0.01416,
          "silverG": 0.14136,
          "copperG": 5.3,
          "palladiumG": 0.00568,
          "platinumG": 0.00025
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01416,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.14136,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00568,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00025,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 5.3,
            "percent": "5.00000%"
          }
        ]
      },
      "BlackBerry Curve 9300": {
        "brand": "BlackBerry",
        "model": "BlackBerry Curve 9300",
        "category": "Smartphone",
        "releaseYear": 2010,
        "deviceWeightG": 106,
        "metals": {
          "goldG": 0.01416,
          "silverG": 0.14136,
          "copperG": 5.3,
          "palladiumG": 0.00568,
          "platinumG": 0.00025
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01416,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.14136,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00568,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00025,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 5.3,
            "percent": "5.00000%"
          }
        ]
      },
      "BlackBerry Torch 9800": {
        "brand": "BlackBerry",
        "model": "BlackBerry Torch 9800",
        "category": "Smartphone",
        "releaseYear": 2010,
        "deviceWeightG": 161,
        "metals": {
          "goldG": 0.02689,
          "silverG": 0.26839,
          "copperG": 10.465,
          "palladiumG": 0.01079,
          "platinumG": 0.00048
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02689,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.26839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01079,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00048,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.465,
            "percent": "6.50000%"
          }
        ]
      },
      "BlackBerry Z10": {
        "brand": "BlackBerry",
        "model": "BlackBerry Z10",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 137,
        "metals": {
          "goldG": 0.02288,
          "silverG": 0.22838,
          "copperG": 10.96,
          "palladiumG": 0.00918,
          "platinumG": 0.00041
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02288,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.22838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00918,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00041,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.96,
            "percent": "8.00000%"
          }
        ]
      },
      "BlackBerry Passport": {
        "brand": "BlackBerry",
        "model": "BlackBerry Passport",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 196,
        "metals": {
          "goldG": 0.03273,
          "silverG": 0.32673,
          "copperG": 15.68,
          "palladiumG": 0.01313,
          "platinumG": 0.00059
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03273,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.32673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01313,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00059,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.68,
            "percent": "8.00000%"
          }
        ]
      },
      "BlackBerry KEYone": {
        "brand": "BlackBerry",
        "model": "BlackBerry KEYone",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 180,
        "metals": {
          "goldG": 0.03006,
          "silverG": 0.30006,
          "copperG": 14.4,
          "palladiumG": 0.01206,
          "platinumG": 0.00054
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03006,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.30006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01206,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00054,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.4,
            "percent": "8.00000%"
          }
        ]
      },
      "BlackBerry Key2": {
        "brand": "BlackBerry",
        "model": "BlackBerry Key2",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 168,
        "metals": {
          "goldG": 0.02806,
          "silverG": 0.28006,
          "copperG": 13.44,
          "palladiumG": 0.01126,
          "platinumG": 0.0005
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02806,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01126,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0005,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.44,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "LG": {
      "LG KG90": {
        "brand": "LG",
        "model": "LG KG90",
        "category": "Smartphone",
        "releaseYear": 2006,
        "deviceWeightG": 92,
        "metals": {
          "goldG": 0.01229,
          "silverG": 0.12269,
          "copperG": 4.6,
          "palladiumG": 0.00493,
          "platinumG": 0.00022
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01229,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.12269,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00493,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00022,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 4.6,
            "percent": "5.00000%"
          }
        ]
      },
      "LG Optimus L3": {
        "brand": "LG",
        "model": "LG Optimus L3",
        "category": "Smartphone",
        "releaseYear": 2012,
        "deviceWeightG": 105,
        "metals": {
          "goldG": 0.01753,
          "silverG": 0.17503,
          "copperG": 8.4,
          "palladiumG": 0.00704,
          "platinumG": 0.00032
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01753,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.17503,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00704,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00032,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 8.4,
            "percent": "8.00000%"
          }
        ]
      },
      "LG G2": {
        "brand": "LG",
        "model": "LG G2",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 143,
        "metals": {
          "goldG": 0.02388,
          "silverG": 0.23838,
          "copperG": 11.44,
          "palladiumG": 0.00958,
          "platinumG": 0.00043
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02388,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00958,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00043,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.44,
            "percent": "8.00000%"
          }
        ]
      },
      "LG G3": {
        "brand": "LG",
        "model": "LG G3",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 149,
        "metals": {
          "goldG": 0.02488,
          "silverG": 0.24838,
          "copperG": 11.92,
          "palladiumG": 0.00998,
          "platinumG": 0.00045
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02488,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00998,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00045,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.92,
            "percent": "8.00000%"
          }
        ]
      },
      "LG G4": {
        "brand": "LG",
        "model": "LG G4",
        "category": "Smartphone",
        "releaseYear": 2015,
        "deviceWeightG": 155,
        "metals": {
          "goldG": 0.02588,
          "silverG": 0.25839,
          "copperG": 12.4,
          "palladiumG": 0.01039,
          "platinumG": 0.00047
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02588,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01039,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00047,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.4,
            "percent": "8.00000%"
          }
        ]
      },
      "LG G5": {
        "brand": "LG",
        "model": "LG G5",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 159,
        "metals": {
          "goldG": 0.02655,
          "silverG": 0.26505,
          "copperG": 12.72,
          "palladiumG": 0.01065,
          "platinumG": 0.00048
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02655,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.26505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01065,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00048,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.72,
            "percent": "8.00000%"
          }
        ]
      },
      "LG Q6": {
        "brand": "LG",
        "model": "LG Q6",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 149,
        "metals": {
          "goldG": 0.02488,
          "silverG": 0.24838,
          "copperG": 11.92,
          "palladiumG": 0.00998,
          "platinumG": 0.00045
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02488,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00998,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00045,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.92,
            "percent": "8.00000%"
          }
        ]
      },
      "LG G7 ThinQ": {
        "brand": "LG",
        "model": "LG G7 ThinQ",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 162,
        "metals": {
          "goldG": 0.02705,
          "silverG": 0.27005,
          "copperG": 12.96,
          "palladiumG": 0.01085,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02705,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01085,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.96,
            "percent": "8.00000%"
          }
        ]
      },
      "LG V50 ThinQ": {
        "brand": "LG",
        "model": "LG V50 ThinQ",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 183,
        "metals": {
          "goldG": 0.03056,
          "silverG": 0.30506,
          "copperG": 15.555,
          "palladiumG": 0.01226,
          "platinumG": 0.00055
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03056,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.30506,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01226,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00055,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.555,
            "percent": "8.50000%"
          }
        ]
      },
      "LG Wing": {
        "brand": "LG",
        "model": "LG Wing",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 260,
        "metals": {
          "goldG": 0.04342,
          "silverG": 0.43342,
          "copperG": 22.1,
          "palladiumG": 0.01742,
          "platinumG": 0.00078
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.04342,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.43342,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01742,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00078,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 22.1,
            "percent": "8.50000%"
          }
        ]
      }
    },
    "Apple": {
      "iPhone (Original)": {
        "brand": "Apple",
        "model": "iPhone (Original)",
        "category": "Smartphone",
        "releaseYear": 2007,
        "deviceWeightG": 135,
        "metals": {
          "goldG": 0.02254,
          "silverG": 0.22505,
          "copperG": 8.775,
          "palladiumG": 0.00905,
          "platinumG": 0.00041
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02254,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.22505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00905,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00041,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 8.775,
            "percent": "6.50000%"
          }
        ]
      },
      "iPhone 3G": {
        "brand": "Apple",
        "model": "iPhone 3G",
        "category": "Smartphone",
        "releaseYear": 2008,
        "deviceWeightG": 133,
        "metals": {
          "goldG": 0.02221,
          "silverG": 0.22171,
          "copperG": 8.645,
          "palladiumG": 0.00891,
          "platinumG": 0.0004
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02221,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.22171,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00891,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0004,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 8.645,
            "percent": "6.50000%"
          }
        ]
      },
      "iPhone 3GS": {
        "brand": "Apple",
        "model": "iPhone 3GS",
        "category": "Smartphone",
        "releaseYear": 2009,
        "deviceWeightG": 135,
        "metals": {
          "goldG": 0.02254,
          "silverG": 0.22505,
          "copperG": 8.775,
          "palladiumG": 0.00905,
          "platinumG": 0.00041
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02254,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.22505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00905,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00041,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 8.775,
            "percent": "6.50000%"
          }
        ]
      },
      "iPhone 4": {
        "brand": "Apple",
        "model": "iPhone 4",
        "category": "Smartphone",
        "releaseYear": 2010,
        "deviceWeightG": 137,
        "metals": {
          "goldG": 0.02288,
          "silverG": 0.22838,
          "copperG": 8.905,
          "palladiumG": 0.00918,
          "platinumG": 0.00041
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02288,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.22838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00918,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00041,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 8.905,
            "percent": "6.50000%"
          }
        ]
      },
      "iPhone 4S": {
        "brand": "Apple",
        "model": "iPhone 4S",
        "category": "Smartphone",
        "releaseYear": 2011,
        "deviceWeightG": 140,
        "metals": {
          "goldG": 0.02338,
          "silverG": 0.23338,
          "copperG": 9.1,
          "palladiumG": 0.00938,
          "platinumG": 0.00042
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02338,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23338,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00938,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00042,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 9.1,
            "percent": "6.50000%"
          }
        ]
      },
      "iPhone 5": {
        "brand": "Apple",
        "model": "iPhone 5",
        "category": "Smartphone",
        "releaseYear": 2012,
        "deviceWeightG": 112,
        "metals": {
          "goldG": 0.0187,
          "silverG": 0.1867,
          "copperG": 8.96,
          "palladiumG": 0.0075,
          "platinumG": 0.00034
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0187,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.1867,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0075,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00034,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 8.96,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 5S": {
        "brand": "Apple",
        "model": "iPhone 5S",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 112,
        "metals": {
          "goldG": 0.0187,
          "silverG": 0.1867,
          "copperG": 8.96,
          "palladiumG": 0.0075,
          "platinumG": 0.00034
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0187,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.1867,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0075,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00034,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 8.96,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 6": {
        "brand": "Apple",
        "model": "iPhone 6",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 129,
        "metals": {
          "goldG": 0.02154,
          "silverG": 0.21504,
          "copperG": 10.32,
          "palladiumG": 0.00864,
          "platinumG": 0.00039
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02154,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.21504,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00864,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00039,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.32,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 6 Plus": {
        "brand": "Apple",
        "model": "iPhone 6 Plus",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 172,
        "metals": {
          "goldG": 0.02872,
          "silverG": 0.28672,
          "copperG": 13.76,
          "palladiumG": 0.01152,
          "platinumG": 0.00052
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02872,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28672,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01152,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00052,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.76,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 6S": {
        "brand": "Apple",
        "model": "iPhone 6S",
        "category": "Smartphone",
        "releaseYear": 2015,
        "deviceWeightG": 143,
        "metals": {
          "goldG": 0.02388,
          "silverG": 0.23838,
          "copperG": 11.44,
          "palladiumG": 0.00958,
          "platinumG": 0.00043
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02388,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00958,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00043,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.44,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 7": {
        "brand": "Apple",
        "model": "iPhone 7",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 138,
        "metals": {
          "goldG": 0.02305,
          "silverG": 0.23005,
          "copperG": 11.04,
          "palladiumG": 0.00925,
          "platinumG": 0.00041
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02305,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00925,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00041,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.04,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 8": {
        "brand": "Apple",
        "model": "iPhone 8",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 148,
        "metals": {
          "goldG": 0.02472,
          "silverG": 0.24672,
          "copperG": 11.84,
          "palladiumG": 0.00992,
          "platinumG": 0.00044
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02472,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24672,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00992,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00044,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.84,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone X": {
        "brand": "Apple",
        "model": "iPhone X",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 174,
        "metals": {
          "goldG": 0.02906,
          "silverG": 0.29006,
          "copperG": 14.79,
          "palladiumG": 0.01166,
          "platinumG": 0.00052
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02906,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01166,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00052,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.79,
            "percent": "8.50000%"
          }
        ]
      },
      "iPhone 11": {
        "brand": "Apple",
        "model": "iPhone 11",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 194,
        "metals": {
          "goldG": 0.0324,
          "silverG": 0.3234,
          "copperG": 15.52,
          "palladiumG": 0.013,
          "platinumG": 0.00058
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0324,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3234,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.013,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00058,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.52,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 11 Pro Max": {
        "brand": "Apple",
        "model": "iPhone 11 Pro Max",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 226,
        "metals": {
          "goldG": 0.03774,
          "silverG": 0.37674,
          "copperG": 19.21,
          "palladiumG": 0.01514,
          "platinumG": 0.00068
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03774,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.37674,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01514,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00068,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 19.21,
            "percent": "8.50000%"
          }
        ]
      },
      "iPhone 12": {
        "brand": "Apple",
        "model": "iPhone 12",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 162,
        "metals": {
          "goldG": 0.027,
          "silverG": 0.27,
          "copperG": 12.96,
          "palladiumG": 0.0108,
          "platinumG": 0.00054
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.027,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0108,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00054,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.96,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone SE (2nd generation)": {
        "brand": "Apple",
        "model": "iPhone SE (2nd generation)",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 148,
        "metals": {
          "goldG": 0.02472,
          "silverG": 0.24672,
          "copperG": 11.84,
          "palladiumG": 0.00992,
          "platinumG": 0.00044
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02472,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24672,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00992,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00044,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.84,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 13": {
        "brand": "Apple",
        "model": "iPhone 13",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 174,
        "metals": {
          "goldG": 0.02901,
          "silverG": 0.29001,
          "copperG": 13.92,
          "palladiumG": 0.01161,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02901,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29001,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01161,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.92,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 13 Pro Max": {
        "brand": "Apple",
        "model": "iPhone 13 Pro Max",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 238,
        "metals": {
          "goldG": 0.03968,
          "silverG": 0.39668,
          "copperG": 19.04,
          "palladiumG": 0.01588,
          "platinumG": 0.00078
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03968,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.39668,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01588,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00078,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 19.04,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 14": {
        "brand": "Apple",
        "model": "iPhone 14",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 172,
        "metals": {
          "goldG": 0.02867,
          "silverG": 0.28667,
          "copperG": 13.76,
          "palladiumG": 0.01147,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02867,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28667,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01147,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.76,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 14 Pro": {
        "brand": "Apple",
        "model": "iPhone 14 Pro",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 206,
        "metals": {
          "goldG": 0.03434,
          "silverG": 0.34334,
          "copperG": 16.48,
          "palladiumG": 0.01374,
          "platinumG": 0.00068
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03434,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.34334,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01374,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00068,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.48,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 14 Pro Max": {
        "brand": "Apple",
        "model": "iPhone 14 Pro Max",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 240,
        "metals": {
          "goldG": 0.04001,
          "silverG": 0.40001,
          "copperG": 19.2,
          "palladiumG": 0.01601,
          "platinumG": 0.00079
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.04001,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.40001,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01601,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00079,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 19.2,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone SE (3rd generation)": {
        "brand": "Apple",
        "model": "iPhone SE (3rd generation)",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 144,
        "metals": {
          "goldG": 0.024,
          "silverG": 0.24,
          "copperG": 11.52,
          "palladiumG": 0.00961,
          "platinumG": 0.00048
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.024,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00961,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00048,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.52,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 15": {
        "brand": "Apple",
        "model": "iPhone 15",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 171,
        "metals": {
          "goldG": 0.02851,
          "silverG": 0.28501,
          "copperG": 13.68,
          "palladiumG": 0.01141,
          "platinumG": 0.00056
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02851,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28501,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01141,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00056,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.68,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 15 Pro": {
        "brand": "Apple",
        "model": "iPhone 15 Pro",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 187,
        "metals": {
          "goldG": 0.03117,
          "silverG": 0.31167,
          "copperG": 14.96,
          "palladiumG": 0.01247,
          "platinumG": 0.00062
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03117,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31167,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01247,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00062,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.96,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 15 Pro Max": {
        "brand": "Apple",
        "model": "iPhone 15 Pro Max",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 221,
        "metals": {
          "goldG": 0.03684,
          "silverG": 0.36834,
          "copperG": 17.68,
          "palladiumG": 0.01474,
          "platinumG": 0.00073
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03684,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.36834,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01474,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00073,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 17.68,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 16": {
        "brand": "Apple",
        "model": "iPhone 16",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 170,
        "metals": {
          "goldG": 0.02839,
          "silverG": 0.28339,
          "copperG": 13.6,
          "palladiumG": 0.01139,
          "platinumG": 0.00051
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02839,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28339,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01139,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00051,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.6,
            "percent": "8.00000%"
          }
        ]
      },
      "iPhone 16 Pro Max": {
        "brand": "Apple",
        "model": "iPhone 16 Pro Max",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 227,
        "metals": {
          "goldG": 0.03791,
          "silverG": 0.37841,
          "copperG": 19.295,
          "palladiumG": 0.01521,
          "platinumG": 0.00068
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03791,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.37841,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01521,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00068,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 19.295,
            "percent": "8.50000%"
          }
        ]
      }
    },
    "HTC": {
      "HTC Dream (T-Mobile G1 platform)": {
        "brand": "HTC",
        "model": "HTC Dream (T-Mobile G1 platform)",
        "category": "Smartphone",
        "releaseYear": 2008,
        "deviceWeightG": 158,
        "metals": {
          "goldG": 0.02639,
          "silverG": 0.26339,
          "copperG": 10.27,
          "palladiumG": 0.01059,
          "platinumG": 0.00047
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02639,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.26339,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01059,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00047,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.27,
            "percent": "6.50000%"
          }
        ]
      },
      "HTC Desire": {
        "brand": "HTC",
        "model": "HTC Desire",
        "category": "Smartphone",
        "releaseYear": 2010,
        "deviceWeightG": 135,
        "metals": {
          "goldG": 0.02254,
          "silverG": 0.22505,
          "copperG": 8.775,
          "palladiumG": 0.00905,
          "platinumG": 0.00041
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02254,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.22505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00905,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00041,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 8.775,
            "percent": "6.50000%"
          }
        ]
      },
      "HTC One X": {
        "brand": "HTC",
        "model": "HTC One X",
        "category": "Smartphone",
        "releaseYear": 2012,
        "deviceWeightG": 130,
        "metals": {
          "goldG": 0.02171,
          "silverG": 0.21671,
          "copperG": 10.4,
          "palladiumG": 0.00871,
          "platinumG": 0.00039
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02171,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.21671,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00871,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00039,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.4,
            "percent": "8.00000%"
          }
        ]
      },
      "HTC One (M7)": {
        "brand": "HTC",
        "model": "HTC One (M7)",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 143,
        "metals": {
          "goldG": 0.02388,
          "silverG": 0.23838,
          "copperG": 11.44,
          "palladiumG": 0.00958,
          "platinumG": 0.00043
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02388,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00958,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00043,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.44,
            "percent": "8.00000%"
          }
        ]
      },
      "HTC One (M8)": {
        "brand": "HTC",
        "model": "HTC One (M8)",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 160,
        "metals": {
          "goldG": 0.02672,
          "silverG": 0.26672,
          "copperG": 12.8,
          "palladiumG": 0.01072,
          "platinumG": 0.00048
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02672,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.26672,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01072,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00048,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.8,
            "percent": "8.00000%"
          }
        ]
      },
      "HTC One M9": {
        "brand": "HTC",
        "model": "HTC One M9",
        "category": "Smartphone",
        "releaseYear": 2015,
        "deviceWeightG": 157,
        "metals": {
          "goldG": 0.02622,
          "silverG": 0.26172,
          "copperG": 12.56,
          "palladiumG": 0.01052,
          "platinumG": 0.00047
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02622,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.26172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01052,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00047,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.56,
            "percent": "8.00000%"
          }
        ]
      },
      "HTC 10": {
        "brand": "HTC",
        "model": "HTC 10",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 161,
        "metals": {
          "goldG": 0.02689,
          "silverG": 0.26839,
          "copperG": 12.88,
          "palladiumG": 0.01079,
          "platinumG": 0.00048
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02689,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.26839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01079,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00048,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.88,
            "percent": "8.00000%"
          }
        ]
      },
      "HTC U11": {
        "brand": "HTC",
        "model": "HTC U11",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 169,
        "metals": {
          "goldG": 0.02822,
          "silverG": 0.28172,
          "copperG": 13.52,
          "palladiumG": 0.01132,
          "platinumG": 0.00051
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02822,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01132,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00051,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.52,
            "percent": "8.00000%"
          }
        ]
      },
      "HTC U12+": {
        "brand": "HTC",
        "model": "HTC U12+",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 188,
        "metals": {
          "goldG": 0.0314,
          "silverG": 0.3134,
          "copperG": 15.04,
          "palladiumG": 0.0126,
          "platinumG": 0.00056
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0314,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3134,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0126,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00056,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.04,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Micromax": {
      "Micromax X449": {
        "brand": "Micromax",
        "model": "Micromax X449",
        "category": "Smartphone",
        "releaseYear": 2010,
        "deviceWeightG": 88,
        "metals": {
          "goldG": 0.01176,
          "silverG": 0.11736,
          "copperG": 4.4,
          "palladiumG": 0.00472,
          "platinumG": 0.00021
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01176,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.11736,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00472,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00021,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 4.4,
            "percent": "5.00000%"
          }
        ]
      },
      "Micromax A116 Canvas HD": {
        "brand": "Micromax",
        "model": "Micromax A116 Canvas HD",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 165,
        "metals": {
          "goldG": 0.02755,
          "silverG": 0.27505,
          "copperG": 13.2,
          "palladiumG": 0.01106,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02755,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01106,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Micromax Canvas 2": {
        "brand": "Micromax",
        "model": "Micromax Canvas 2",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 170,
        "metals": {
          "goldG": 0.02839,
          "silverG": 0.28339,
          "copperG": 13.6,
          "palladiumG": 0.01139,
          "platinumG": 0.00051
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02839,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28339,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01139,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00051,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.6,
            "percent": "8.00000%"
          }
        ]
      },
      "Micromax Yu Yureka": {
        "brand": "Micromax",
        "model": "Micromax Yu Yureka",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 153,
        "metals": {
          "goldG": 0.02555,
          "silverG": 0.25505,
          "copperG": 12.24,
          "palladiumG": 0.01025,
          "platinumG": 0.00046
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02555,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01025,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00046,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.24,
            "percent": "8.00000%"
          }
        ]
      },
      "Micromax Canvas 6": {
        "brand": "Micromax",
        "model": "Micromax Canvas 6",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 165,
        "metals": {
          "goldG": 0.02755,
          "silverG": 0.27505,
          "copperG": 13.2,
          "palladiumG": 0.01106,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02755,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01106,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Micromax Canvas Infinity": {
        "brand": "Micromax",
        "model": "Micromax Canvas Infinity",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 150,
        "metals": {
          "goldG": 0.02505,
          "silverG": 0.25005,
          "copperG": 12,
          "palladiumG": 0.01005,
          "platinumG": 0.00045
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02505,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01005,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00045,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12,
            "percent": "8.00000%"
          }
        ]
      },
      "Micromax In Note 1": {
        "brand": "Micromax",
        "model": "Micromax In Note 1",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 209,
        "metals": {
          "goldG": 0.0349,
          "silverG": 0.3484,
          "copperG": 16.72,
          "palladiumG": 0.014,
          "platinumG": 0.00063
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0349,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3484,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.014,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00063,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.72,
            "percent": "8.00000%"
          }
        ]
      },
      "Micromax In 2b": {
        "brand": "Micromax",
        "model": "Micromax In 2b",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Samsung": {
      "Galaxy S": {
        "brand": "Samsung",
        "model": "Galaxy S",
        "category": "Smartphone",
        "releaseYear": 2010,
        "deviceWeightG": 119,
        "metals": {
          "goldG": 0.01987,
          "silverG": 0.19837,
          "copperG": 7.735,
          "palladiumG": 0.00797,
          "platinumG": 0.00036
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01987,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.19837,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00797,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00036,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 7.735,
            "percent": "6.50000%"
          }
        ]
      },
      "Galaxy Ace": {
        "brand": "Samsung",
        "model": "Galaxy Ace",
        "category": "Smartphone",
        "releaseYear": 2011,
        "deviceWeightG": 113,
        "metals": {
          "goldG": 0.01887,
          "silverG": 0.18837,
          "copperG": 7.345,
          "palladiumG": 0.00757,
          "platinumG": 0.00034
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01887,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.18837,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00757,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00034,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 7.345,
            "percent": "6.50000%"
          }
        ]
      },
      "Galaxy Note": {
        "brand": "Samsung",
        "model": "Galaxy Note",
        "category": "Smartphone",
        "releaseYear": 2011,
        "deviceWeightG": 178,
        "metals": {
          "goldG": 0.02973,
          "silverG": 0.29673,
          "copperG": 11.57,
          "palladiumG": 0.01193,
          "platinumG": 0.00053
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02973,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01193,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00053,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.57,
            "percent": "6.50000%"
          }
        ]
      },
      "Galaxy S2": {
        "brand": "Samsung",
        "model": "Galaxy S2",
        "category": "Smartphone",
        "releaseYear": 2011,
        "deviceWeightG": 116,
        "metals": {
          "goldG": 0.01937,
          "silverG": 0.19337,
          "copperG": 7.54,
          "palladiumG": 0.00777,
          "platinumG": 0.00035
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01937,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.19337,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00777,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00035,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 7.54,
            "percent": "6.50000%"
          }
        ]
      },
      "Galaxy Y": {
        "brand": "Samsung",
        "model": "Galaxy Y",
        "category": "Smartphone",
        "releaseYear": 2011,
        "deviceWeightG": 97,
        "metals": {
          "goldG": 0.0162,
          "silverG": 0.1617,
          "copperG": 6.305,
          "palladiumG": 0.0065,
          "platinumG": 0.00029
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0162,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.1617,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0065,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00029,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 6.305,
            "percent": "6.50000%"
          }
        ]
      },
      "Galaxy S3": {
        "brand": "Samsung",
        "model": "Galaxy S3",
        "category": "Smartphone",
        "releaseYear": 2012,
        "deviceWeightG": 133,
        "metals": {
          "goldG": 0.02221,
          "silverG": 0.22171,
          "copperG": 10.64,
          "palladiumG": 0.00891,
          "platinumG": 0.0004
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02221,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.22171,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00891,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0004,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.64,
            "percent": "8.00000%"
          }
        ]
      },
      "Galaxy Note 3": {
        "brand": "Samsung",
        "model": "Galaxy Note 3",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 168,
        "metals": {
          "goldG": 0.02806,
          "silverG": 0.28006,
          "copperG": 13.44,
          "palladiumG": 0.01126,
          "platinumG": 0.0005
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02806,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01126,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0005,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.44,
            "percent": "8.00000%"
          }
        ]
      },
      "Galaxy S4": {
        "brand": "Samsung",
        "model": "Galaxy S4",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 130,
        "metals": {
          "goldG": 0.02171,
          "silverG": 0.21671,
          "copperG": 10.4,
          "palladiumG": 0.00871,
          "platinumG": 0.00039
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02171,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.21671,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00871,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00039,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Guru E1200": {
        "brand": "Samsung",
        "model": "Guru E1200",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 74,
        "metals": {
          "goldG": 0.00989,
          "silverG": 0.09869,
          "copperG": 3.7,
          "palladiumG": 0.00397,
          "platinumG": 0.00018
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.00989,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.09869,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00397,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00018,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 3.7,
            "percent": "5.00000%"
          }
        ]
      },
      "Galaxy S5": {
        "brand": "Samsung",
        "model": "Galaxy S5",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 145,
        "metals": {
          "goldG": 0.02422,
          "silverG": 0.24172,
          "copperG": 11.6,
          "palladiumG": 0.00971,
          "platinumG": 0.00044
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02422,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00971,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00044,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.6,
            "percent": "8.00000%"
          }
        ]
      },
      "Galaxy S6": {
        "brand": "Samsung",
        "model": "Galaxy S6",
        "category": "Smartphone",
        "releaseYear": 2015,
        "deviceWeightG": 138,
        "metals": {
          "goldG": 0.02305,
          "silverG": 0.23005,
          "copperG": 11.04,
          "palladiumG": 0.00925,
          "platinumG": 0.00041
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02305,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00925,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00041,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.04,
            "percent": "8.00000%"
          }
        ]
      },
      "Galaxy S7": {
        "brand": "Samsung",
        "model": "Galaxy S7",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 152,
        "metals": {
          "goldG": 0.02538,
          "silverG": 0.25338,
          "copperG": 12.16,
          "palladiumG": 0.01018,
          "platinumG": 0.00046
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02538,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25338,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01018,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00046,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.16,
            "percent": "8.00000%"
          }
        ]
      },
      "Galaxy Note 8": {
        "brand": "Samsung",
        "model": "Galaxy Note 8",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 195,
        "metals": {
          "goldG": 0.03256,
          "silverG": 0.32506,
          "copperG": 16.575,
          "palladiumG": 0.01307,
          "platinumG": 0.00059
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03256,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.32506,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01307,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00059,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.575,
            "percent": "8.50000%"
          }
        ]
      },
      "Galaxy S8": {
        "brand": "Samsung",
        "model": "Galaxy S8",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 155,
        "metals": {
          "goldG": 0.02588,
          "silverG": 0.25839,
          "copperG": 12.4,
          "palladiumG": 0.01039,
          "platinumG": 0.00047
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02588,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01039,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00047,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Galaxy S9": {
        "brand": "Samsung",
        "model": "Galaxy S9",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 163,
        "metals": {
          "goldG": 0.02722,
          "silverG": 0.27172,
          "copperG": 13.04,
          "palladiumG": 0.01092,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02722,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01092,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.04,
            "percent": "8.00000%"
          }
        ]
      },
      "Galaxy Fold": {
        "brand": "Samsung",
        "model": "Galaxy Fold",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 276,
        "metals": {
          "goldG": 0.04609,
          "silverG": 0.46009,
          "copperG": 23.46,
          "palladiumG": 0.01849,
          "platinumG": 0.00083
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.04609,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.46009,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01849,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00083,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 23.46,
            "percent": "8.50000%"
          }
        ]
      },
      "Galaxy S10": {
        "brand": "Samsung",
        "model": "Galaxy S10",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 157,
        "metals": {
          "goldG": 0.02622,
          "silverG": 0.26172,
          "copperG": 12.56,
          "palladiumG": 0.01052,
          "platinumG": 0.00047
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02622,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.26172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01052,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00047,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.56,
            "percent": "8.00000%"
          }
        ]
      },
      "Galaxy S20": {
        "brand": "Samsung",
        "model": "Galaxy S20",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 163,
        "metals": {
          "goldG": 0.02722,
          "silverG": 0.27172,
          "copperG": 13.04,
          "palladiumG": 0.01092,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02722,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01092,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.04,
            "percent": "8.00000%"
          }
        ]
      },
      "Samsung Galaxy M31": {
        "brand": "Samsung",
        "model": "Samsung Galaxy M31",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 191,
        "metals": {
          "goldG": 0.03184,
          "silverG": 0.31834,
          "copperG": 15.28,
          "palladiumG": 0.01274,
          "platinumG": 0.00063
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03184,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31834,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01274,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00063,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.28,
            "percent": "8.00000%"
          }
        ]
      },
      "Samsung Galaxy Note20 Ultra": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Note20 Ultra",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 208,
        "metals": {
          "goldG": 0.03467,
          "silverG": 0.34667,
          "copperG": 16.64,
          "palladiumG": 0.01387,
          "platinumG": 0.00069
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03467,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.34667,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01387,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00069,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.64,
            "percent": "8.00000%"
          }
        ]
      },
      "Samsung Galaxy A52": {
        "brand": "Samsung",
        "model": "Samsung Galaxy A52",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 189,
        "metals": {
          "goldG": 0.03151,
          "silverG": 0.31501,
          "copperG": 15.12,
          "palladiumG": 0.01261,
          "platinumG": 0.00062
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03151,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31501,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01261,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00062,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.12,
            "percent": "8.00000%"
          }
        ]
      },
      "Samsung Galaxy S21": {
        "brand": "Samsung",
        "model": "Samsung Galaxy S21",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 169,
        "metals": {
          "goldG": 0.02817,
          "silverG": 0.28167,
          "copperG": 13.52,
          "palladiumG": 0.01127,
          "platinumG": 0.00056
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02817,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28167,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01127,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00056,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.52,
            "percent": "8.00000%"
          }
        ]
      },
      "Galaxy S22": {
        "brand": "Samsung",
        "model": "Galaxy S22",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 167,
        "metals": {
          "goldG": 0.02789,
          "silverG": 0.27839,
          "copperG": 13.36,
          "palladiumG": 0.01119,
          "platinumG": 0.0005
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02789,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01119,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0005,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.36,
            "percent": "8.00000%"
          }
        ]
      },
      "Galaxy Z Flip5": {
        "brand": "Samsung",
        "model": "Galaxy Z Flip5",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 187,
        "metals": {
          "goldG": 0.03123,
          "silverG": 0.31173,
          "copperG": 15.895,
          "palladiumG": 0.01253,
          "platinumG": 0.00056
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03123,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01253,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00056,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.895,
            "percent": "8.50000%"
          }
        ]
      },
      "Galaxy Z Fold5": {
        "brand": "Samsung",
        "model": "Galaxy Z Fold5",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 253,
        "metals": {
          "goldG": 0.04225,
          "silverG": 0.42175,
          "copperG": 21.505,
          "palladiumG": 0.01695,
          "platinumG": 0.00076
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.04225,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.42175,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01695,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00076,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 21.505,
            "percent": "8.50000%"
          }
        ]
      },
      "Samsung Galaxy A34 5G": {
        "brand": "Samsung",
        "model": "Samsung Galaxy A34 5G",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 199,
        "metals": {
          "goldG": 0.03317,
          "silverG": 0.33167,
          "copperG": 15.92,
          "palladiumG": 0.01327,
          "platinumG": 0.00066
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03317,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33167,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01327,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00066,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.92,
            "percent": "8.00000%"
          }
        ]
      },
      "Samsung Galaxy A54 5G": {
        "brand": "Samsung",
        "model": "Samsung Galaxy A54 5G",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 202,
        "metals": {
          "goldG": 0.03367,
          "silverG": 0.33667,
          "copperG": 16.16,
          "palladiumG": 0.01347,
          "platinumG": 0.00067
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03367,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33667,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01347,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00067,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.16,
            "percent": "8.00000%"
          }
        ]
      },
      "Samsung Galaxy F23 5G": {
        "brand": "Samsung",
        "model": "Samsung Galaxy F23 5G",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 195,
        "metals": {
          "goldG": 0.03251,
          "silverG": 0.32501,
          "copperG": 15.6,
          "palladiumG": 0.01301,
          "platinumG": 0.00064
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03251,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.32501,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01301,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00064,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.6,
            "percent": "8.00000%"
          }
        ]
      },
      "Samsung Galaxy M14 5G": {
        "brand": "Samsung",
        "model": "Samsung Galaxy M14 5G",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 206,
        "metals": {
          "goldG": 0.03434,
          "silverG": 0.34334,
          "copperG": 16.48,
          "palladiumG": 0.01374,
          "platinumG": 0.00068
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03434,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.34334,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01374,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00068,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.48,
            "percent": "8.00000%"
          }
        ]
      },
      "Samsung Galaxy S23": {
        "brand": "Samsung",
        "model": "Samsung Galaxy S23",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 168,
        "metals": {
          "goldG": 0.02801,
          "silverG": 0.28001,
          "copperG": 13.44,
          "palladiumG": 0.01121,
          "platinumG": 0.00055
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02801,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28001,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01121,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00055,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.44,
            "percent": "8.00000%"
          }
        ]
      },
      "Samsung Galaxy S24 Ultra": {
        "brand": "Samsung",
        "model": "Samsung Galaxy S24 Ultra",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 232,
        "metals": {
          "goldG": 0.03867,
          "silverG": 0.38667,
          "copperG": 18.56,
          "palladiumG": 0.01547,
          "platinumG": 0.00077
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03867,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.38667,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01547,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00077,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 18.56,
            "percent": "8.00000%"
          }
        ]
      },
      "Galaxy S25": {
        "brand": "Samsung",
        "model": "Galaxy S25",
        "category": "Smartphone",
        "releaseYear": 2025,
        "deviceWeightG": 162,
        "metals": {
          "goldG": 0.02705,
          "silverG": 0.27005,
          "copperG": 12.96,
          "palladiumG": 0.01085,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02705,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01085,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.96,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Sony": {
      "Sony Ericsson Xperia X10": {
        "brand": "Sony",
        "model": "Sony Ericsson Xperia X10",
        "category": "Smartphone",
        "releaseYear": 2010,
        "deviceWeightG": 135,
        "metals": {
          "goldG": 0.02254,
          "silverG": 0.22505,
          "copperG": 8.775,
          "palladiumG": 0.00905,
          "platinumG": 0.00041
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02254,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.22505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00905,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00041,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 8.775,
            "percent": "6.50000%"
          }
        ]
      },
      "Sony Xperia S": {
        "brand": "Sony",
        "model": "Sony Xperia S",
        "category": "Smartphone",
        "releaseYear": 2012,
        "deviceWeightG": 144,
        "metals": {
          "goldG": 0.02405,
          "silverG": 0.24005,
          "copperG": 11.52,
          "palladiumG": 0.00965,
          "platinumG": 0.00043
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02405,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00965,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00043,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.52,
            "percent": "8.00000%"
          }
        ]
      },
      "Sony Xperia Z": {
        "brand": "Sony",
        "model": "Sony Xperia Z",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 146,
        "metals": {
          "goldG": 0.02438,
          "silverG": 0.24338,
          "copperG": 11.68,
          "palladiumG": 0.00978,
          "platinumG": 0.00044
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02438,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24338,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00978,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00044,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.68,
            "percent": "8.00000%"
          }
        ]
      },
      "Sony Xperia Z2": {
        "brand": "Sony",
        "model": "Sony Xperia Z2",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 163,
        "metals": {
          "goldG": 0.02722,
          "silverG": 0.27172,
          "copperG": 13.04,
          "palladiumG": 0.01092,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02722,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01092,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.04,
            "percent": "8.00000%"
          }
        ]
      },
      "Sony Xperia Z3": {
        "brand": "Sony",
        "model": "Sony Xperia Z3",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 152,
        "metals": {
          "goldG": 0.02538,
          "silverG": 0.25338,
          "copperG": 12.16,
          "palladiumG": 0.01018,
          "platinumG": 0.00046
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02538,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25338,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01018,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00046,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.16,
            "percent": "8.00000%"
          }
        ]
      },
      "Sony Xperia Z5": {
        "brand": "Sony",
        "model": "Sony Xperia Z5",
        "category": "Smartphone",
        "releaseYear": 2015,
        "deviceWeightG": 154,
        "metals": {
          "goldG": 0.02572,
          "silverG": 0.25672,
          "copperG": 12.32,
          "palladiumG": 0.01032,
          "platinumG": 0.00046
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02572,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25672,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01032,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00046,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.32,
            "percent": "8.00000%"
          }
        ]
      },
      "Sony Xperia XZ": {
        "brand": "Sony",
        "model": "Sony Xperia XZ",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 161,
        "metals": {
          "goldG": 0.02689,
          "silverG": 0.26839,
          "copperG": 12.88,
          "palladiumG": 0.01079,
          "platinumG": 0.00048
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02689,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.26839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01079,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00048,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.88,
            "percent": "8.00000%"
          }
        ]
      },
      "Sony Xperia XZ2": {
        "brand": "Sony",
        "model": "Sony Xperia XZ2",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 198,
        "metals": {
          "goldG": 0.03307,
          "silverG": 0.33007,
          "copperG": 15.84,
          "palladiumG": 0.01327,
          "platinumG": 0.00059
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03307,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33007,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01327,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00059,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.84,
            "percent": "8.00000%"
          }
        ]
      },
      "Sony Xperia 1": {
        "brand": "Sony",
        "model": "Sony Xperia 1",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 178,
        "metals": {
          "goldG": 0.02973,
          "silverG": 0.29673,
          "copperG": 15.13,
          "palladiumG": 0.01193,
          "platinumG": 0.00053
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02973,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01193,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00053,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.13,
            "percent": "8.50000%"
          }
        ]
      },
      "Sony Xperia 5 IV": {
        "brand": "Sony",
        "model": "Sony Xperia 5 IV",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 172,
        "metals": {
          "goldG": 0.02872,
          "silverG": 0.28672,
          "copperG": 14.62,
          "palladiumG": 0.01152,
          "platinumG": 0.00052
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02872,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28672,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01152,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00052,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.62,
            "percent": "8.50000%"
          }
        ]
      }
    },
    "Spice": {
      "Spice M-5250": {
        "brand": "Spice",
        "model": "Spice M-5250",
        "category": "Smartphone",
        "releaseYear": 2010,
        "deviceWeightG": 90,
        "metals": {
          "goldG": 0.01202,
          "silverG": 0.12002,
          "copperG": 4.5,
          "palladiumG": 0.00482,
          "platinumG": 0.00022
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01202,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.12002,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00482,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00022,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 4.5,
            "percent": "5.00000%"
          }
        ]
      },
      "Spice Stellar Pinnacle": {
        "brand": "Spice",
        "model": "Spice Stellar Pinnacle",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 140,
        "metals": {
          "goldG": 0.02338,
          "silverG": 0.23338,
          "copperG": 11.2,
          "palladiumG": 0.00938,
          "platinumG": 0.00042
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02338,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23338,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00938,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00042,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Spice Xlife 512": {
        "brand": "Spice",
        "model": "Spice Xlife 512",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 150,
        "metals": {
          "goldG": 0.02505,
          "silverG": 0.25005,
          "copperG": 12,
          "palladiumG": 0.01005,
          "platinumG": 0.00045
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02505,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01005,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00045,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Karbonn": {
      "Karbonn K440": {
        "brand": "Karbonn",
        "model": "Karbonn K440",
        "category": "Smartphone",
        "releaseYear": 2011,
        "deviceWeightG": 85,
        "metals": {
          "goldG": 0.01136,
          "silverG": 0.11336,
          "copperG": 4.25,
          "palladiumG": 0.00456,
          "platinumG": 0.0002
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01136,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.11336,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00456,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0002,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 4.25,
            "percent": "5.00000%"
          }
        ]
      },
      "Karbonn A1": {
        "brand": "Karbonn",
        "model": "Karbonn A1",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 130,
        "metals": {
          "goldG": 0.02171,
          "silverG": 0.21671,
          "copperG": 10.4,
          "palladiumG": 0.00871,
          "platinumG": 0.00039
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02171,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.21671,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00871,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00039,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Karbonn Titanium S5": {
        "brand": "Karbonn",
        "model": "Karbonn Titanium S5",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 160,
        "metals": {
          "goldG": 0.02672,
          "silverG": 0.26672,
          "copperG": 12.8,
          "palladiumG": 0.01072,
          "platinumG": 0.00048
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02672,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.26672,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01072,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00048,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.8,
            "percent": "8.00000%"
          }
        ]
      },
      "Karbonn Titanium Mach Two": {
        "brand": "Karbonn",
        "model": "Karbonn Titanium Mach Two",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 150,
        "metals": {
          "goldG": 0.02505,
          "silverG": 0.25005,
          "copperG": 12,
          "palladiumG": 0.01005,
          "platinumG": 0.00045
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02505,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01005,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00045,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12,
            "percent": "8.00000%"
          }
        ]
      },
      "Karbonn Aura Note": {
        "brand": "Karbonn",
        "model": "Karbonn Aura Note",
        "category": "Smartphone",
        "releaseYear": 2015,
        "deviceWeightG": 197,
        "metals": {
          "goldG": 0.0329,
          "silverG": 0.3284,
          "copperG": 15.76,
          "palladiumG": 0.0132,
          "platinumG": 0.00059
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0329,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3284,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0132,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00059,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.76,
            "percent": "8.00000%"
          }
        ]
      },
      "Karbonn K9 Kavach 4G": {
        "brand": "Karbonn",
        "model": "Karbonn K9 Kavach 4G",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 150,
        "metals": {
          "goldG": 0.02505,
          "silverG": 0.25005,
          "copperG": 12,
          "palladiumG": 0.01005,
          "platinumG": 0.00045
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02505,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01005,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00045,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Lava": {
      "Lava Arc": {
        "brand": "Lava",
        "model": "Lava Arc",
        "category": "Smartphone",
        "releaseYear": 2011,
        "deviceWeightG": 90,
        "metals": {
          "goldG": 0.01202,
          "silverG": 0.12002,
          "copperG": 4.5,
          "palladiumG": 0.00482,
          "platinumG": 0.00022
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01202,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.12002,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00482,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00022,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 4.5,
            "percent": "5.00000%"
          }
        ]
      },
      "Lava Iris 504Q": {
        "brand": "Lava",
        "model": "Lava Iris 504Q",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 140,
        "metals": {
          "goldG": 0.02338,
          "silverG": 0.23338,
          "copperG": 11.2,
          "palladiumG": 0.00938,
          "platinumG": 0.00042
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02338,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23338,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00938,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00042,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Lava X1": {
        "brand": "Lava",
        "model": "Lava X1",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 130,
        "metals": {
          "goldG": 0.02171,
          "silverG": 0.21671,
          "copperG": 10.4,
          "palladiumG": 0.00871,
          "platinumG": 0.00039
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02171,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.21671,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00871,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00039,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Lava Z25": {
        "brand": "Lava",
        "model": "Lava Z25",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 155,
        "metals": {
          "goldG": 0.02588,
          "silverG": 0.25839,
          "copperG": 12.4,
          "palladiumG": 0.01039,
          "platinumG": 0.00047
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02588,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01039,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00047,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Lava Z61 Pro": {
        "brand": "Lava",
        "model": "Lava Z61 Pro",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 170,
        "metals": {
          "goldG": 0.02839,
          "silverG": 0.28339,
          "copperG": 13.6,
          "palladiumG": 0.01139,
          "platinumG": 0.00051
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02839,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28339,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01139,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00051,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.6,
            "percent": "8.00000%"
          }
        ]
      },
      "Lava Blaze": {
        "brand": "Lava",
        "model": "Lava Blaze",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 195,
        "metals": {
          "goldG": 0.03256,
          "silverG": 0.32506,
          "copperG": 15.6,
          "palladiumG": 0.01307,
          "platinumG": 0.00059
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03256,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.32506,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01307,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00059,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.6,
            "percent": "8.00000%"
          }
        ]
      },
      "Lava Blaze 2": {
        "brand": "Lava",
        "model": "Lava Blaze 2",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Lava Yuva 3": {
        "brand": "Lava",
        "model": "Lava Yuva 3",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 192,
        "metals": {
          "goldG": 0.03206,
          "silverG": 0.32006,
          "copperG": 15.36,
          "palladiumG": 0.01286,
          "platinumG": 0.00058
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03206,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.32006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01286,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00058,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.36,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Intex": {
      "Intex Neo": {
        "brand": "Intex",
        "model": "Intex Neo",
        "category": "Smartphone",
        "releaseYear": 2012,
        "deviceWeightG": 90,
        "metals": {
          "goldG": 0.01202,
          "silverG": 0.12002,
          "copperG": 4.5,
          "palladiumG": 0.00482,
          "platinumG": 0.00022
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.01202,
            "percent": "0.01336%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.12002,
            "percent": "0.13336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00482,
            "percent": "0.00536%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00022,
            "percent": "0.00024%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 4.5,
            "percent": "5.00000%"
          }
        ]
      },
      "Intex Aqua Y2 Pro": {
        "brand": "Intex",
        "model": "Intex Aqua Y2 Pro",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 130,
        "metals": {
          "goldG": 0.02171,
          "silverG": 0.21671,
          "copperG": 10.4,
          "palladiumG": 0.00871,
          "platinumG": 0.00039
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02171,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.21671,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00871,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00039,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Intex Cloud X1": {
        "brand": "Intex",
        "model": "Intex Cloud X1",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 120,
        "metals": {
          "goldG": 0.02004,
          "silverG": 0.20004,
          "copperG": 9.6,
          "palladiumG": 0.00804,
          "platinumG": 0.00036
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02004,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.20004,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00804,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00036,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 9.6,
            "percent": "8.00000%"
          }
        ]
      },
      "Intex Aqua Power": {
        "brand": "Intex",
        "model": "Intex Aqua Power",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Intex Elyt-e1": {
        "brand": "Intex",
        "model": "Intex Elyt-e1",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 155,
        "metals": {
          "goldG": 0.02588,
          "silverG": 0.25839,
          "copperG": 12.4,
          "palladiumG": 0.01039,
          "platinumG": 0.00047
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02588,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01039,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00047,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Intex Indie 12": {
        "brand": "Intex",
        "model": "Intex Indie 12",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 175,
        "metals": {
          "goldG": 0.02922,
          "silverG": 0.29173,
          "copperG": 14,
          "palladiumG": 0.01173,
          "platinumG": 0.00052
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02922,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01173,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00052,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Vivo": {
      "Vivo X1": {
        "brand": "Vivo",
        "model": "Vivo X1",
        "category": "Smartphone",
        "releaseYear": 2012,
        "deviceWeightG": 130,
        "metals": {
          "goldG": 0.0217,
          "silverG": 0.2167,
          "copperG": 10.4,
          "palladiumG": 0.0087,
          "platinumG": 0.0004
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0217,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.2167,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0087,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0004,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Vivo Y11": {
        "brand": "Vivo",
        "model": "Vivo Y11",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 122,
        "metals": {
          "goldG": 0.02037,
          "silverG": 0.20337,
          "copperG": 9.76,
          "palladiumG": 0.00817,
          "platinumG": 0.00037
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02037,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.20337,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00817,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00037,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 9.76,
            "percent": "8.00000%"
          }
        ]
      },
      "Vivo Y51": {
        "brand": "Vivo",
        "model": "Vivo Y51",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 148,
        "metals": {
          "goldG": 0.02472,
          "silverG": 0.24672,
          "copperG": 11.84,
          "palladiumG": 0.00992,
          "platinumG": 0.00044
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02472,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24672,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00992,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00044,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.84,
            "percent": "8.00000%"
          }
        ]
      },
      "Vivo V3": {
        "brand": "Vivo",
        "model": "Vivo V3",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 138,
        "metals": {
          "goldG": 0.023,
          "silverG": 0.23,
          "copperG": 10.4,
          "palladiumG": 0.0092,
          "platinumG": 0.0005
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.023,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0092,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0005,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.4,
            "percent": "7.53623%"
          }
        ]
      },
      "Vivo Y53": {
        "brand": "Vivo",
        "model": "Vivo Y53",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 147,
        "metals": {
          "goldG": 0.02455,
          "silverG": 0.24505,
          "copperG": 11.76,
          "palladiumG": 0.00985,
          "platinumG": 0.00044
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02455,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00985,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00044,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.76,
            "percent": "8.00000%"
          }
        ]
      },
      "Vivo V9": {
        "brand": "Vivo",
        "model": "Vivo V9",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 150,
        "metals": {
          "goldG": 0.02505,
          "silverG": 0.25005,
          "copperG": 12,
          "palladiumG": 0.01005,
          "platinumG": 0.00045
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02505,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01005,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00045,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12,
            "percent": "8.00000%"
          }
        ]
      },
      "Vivo V15 Pro": {
        "brand": "Vivo",
        "model": "Vivo V15 Pro",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 179,
        "metals": {
          "goldG": 0.02989,
          "silverG": 0.29839,
          "copperG": 14.32,
          "palladiumG": 0.01199,
          "platinumG": 0.00054
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02989,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01199,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00054,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.32,
            "percent": "8.00000%"
          }
        ]
      },
      "Vivo V17": {
        "brand": "Vivo",
        "model": "Vivo V17",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 186.7,
        "metals": {
          "goldG": 0.0311,
          "silverG": 0.3112,
          "copperG": 13.13,
          "palladiumG": 0.0124,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0311,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3112,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0124,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.13,
            "percent": "7.03267%"
          }
        ]
      },
      "Vivo Y91": {
        "brand": "Vivo",
        "model": "Vivo Y91",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 154,
        "metals": {
          "goldG": 0.02572,
          "silverG": 0.25672,
          "copperG": 12.32,
          "palladiumG": 0.01032,
          "platinumG": 0.00046
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02572,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25672,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01032,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00046,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.32,
            "percent": "8.00000%"
          }
        ]
      },
      "Vivo V19": {
        "brand": "Vivo",
        "model": "Vivo V19",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 186.5,
        "metals": {
          "goldG": 0.0311,
          "silverG": 0.3108,
          "copperG": 13.65,
          "palladiumG": 0.0124,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0311,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3108,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0124,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.65,
            "percent": "7.31903%"
          }
        ]
      },
      "Vivo X50": {
        "brand": "Vivo",
        "model": "Vivo X50",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 171,
        "metals": {
          "goldG": 0.02856,
          "silverG": 0.28506,
          "copperG": 13.68,
          "palladiumG": 0.01146,
          "platinumG": 0.00051
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02856,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28506,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01146,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00051,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.68,
            "percent": "8.00000%"
          }
        ]
      },
      "Vivo V21": {
        "brand": "Vivo",
        "model": "Vivo V21",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 176,
        "metals": {
          "goldG": 0.02939,
          "silverG": 0.29339,
          "copperG": 14.08,
          "palladiumG": 0.01179,
          "platinumG": 0.00053
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02939,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29339,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01179,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00053,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.08,
            "percent": "8.00000%"
          }
        ]
      },
      "Vivo X60": {
        "brand": "Vivo",
        "model": "Vivo X60",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 179,
        "metals": {
          "goldG": 0.0298,
          "silverG": 0.2983,
          "copperG": 13.39,
          "palladiumG": 0.0119,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0298,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.2983,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0119,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.39,
            "percent": "7.48045%"
          }
        ]
      },
      "Vivo Y21": {
        "brand": "Vivo",
        "model": "Vivo Y21",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 182,
        "metals": {
          "goldG": 0.0303,
          "silverG": 0.3033,
          "copperG": 14.3,
          "palladiumG": 0.0121,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0303,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3033,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0121,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.3,
            "percent": "7.85714%"
          }
        ]
      },
      "Vivo V25": {
        "brand": "Vivo",
        "model": "Vivo V25",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 171,
        "metals": {
          "goldG": 0.0285,
          "silverG": 0.285,
          "copperG": 13.65,
          "palladiumG": 0.0114,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0285,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.285,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0114,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.65,
            "percent": "7.98246%"
          }
        ]
      },
      "Vivo X80": {
        "brand": "Vivo",
        "model": "Vivo X80",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 179,
        "metals": {
          "goldG": 0.02989,
          "silverG": 0.29839,
          "copperG": 15.215,
          "palladiumG": 0.01199,
          "platinumG": 0.00054
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02989,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01199,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00054,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.215,
            "percent": "8.50000%"
          }
        ]
      },
      "Vivo V29": {
        "brand": "Vivo",
        "model": "Vivo V29",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 186,
        "metals": {
          "goldG": 0.03106,
          "silverG": 0.31006,
          "copperG": 14.88,
          "palladiumG": 0.01246,
          "platinumG": 0.00056
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03106,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01246,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00056,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.88,
            "percent": "8.00000%"
          }
        ]
      },
      "Vivo V30": {
        "brand": "Vivo",
        "model": "Vivo V30",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 186,
        "metals": {
          "goldG": 0.031,
          "silverG": 0.31,
          "copperG": 14.3,
          "palladiumG": 0.0124,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.031,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0124,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.3,
            "percent": "7.68817%"
          }
        ]
      },
      "Vivo X100": {
        "brand": "Vivo",
        "model": "Vivo X100",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 204,
        "metals": {
          "goldG": 0.034,
          "silverG": 0.34,
          "copperG": 14.3,
          "palladiumG": 0.0136,
          "platinumG": 0.0007
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.034,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.34,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0136,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0007,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.3,
            "percent": "7.00980%"
          }
        ]
      },
      "Vivo X200": {
        "brand": "Vivo",
        "model": "Vivo X200",
        "category": "Smartphone",
        "releaseYear": 2025,
        "deviceWeightG": 196,
        "metals": {
          "goldG": 0.0327,
          "silverG": 0.3267,
          "copperG": 15.34,
          "palladiumG": 0.0131,
          "platinumG": 0.0007
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0327,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3267,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0131,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0007,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.34,
            "percent": "7.82653%"
          }
        ]
      }
    },
    "Xolo": {
      "Xolo X500": {
        "brand": "Xolo",
        "model": "Xolo X500",
        "category": "Smartphone",
        "releaseYear": 2012,
        "deviceWeightG": 130,
        "metals": {
          "goldG": 0.02171,
          "silverG": 0.21671,
          "copperG": 10.4,
          "palladiumG": 0.00871,
          "platinumG": 0.00039
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02171,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.21671,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00871,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00039,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Xolo Q1000": {
        "brand": "Xolo",
        "model": "Xolo Q1000",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 145,
        "metals": {
          "goldG": 0.02422,
          "silverG": 0.24172,
          "copperG": 11.6,
          "palladiumG": 0.00971,
          "platinumG": 0.00044
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02422,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00971,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00044,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.6,
            "percent": "8.00000%"
          }
        ]
      },
      "Xolo Black 1X": {
        "brand": "Xolo",
        "model": "Xolo Black 1X",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 158,
        "metals": {
          "goldG": 0.02639,
          "silverG": 0.26339,
          "copperG": 12.64,
          "palladiumG": 0.01059,
          "platinumG": 0.00047
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02639,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.26339,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01059,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00047,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.64,
            "percent": "8.00000%"
          }
        ]
      },
      "Xolo Era 4G": {
        "brand": "Xolo",
        "model": "Xolo Era 4G",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 165,
        "metals": {
          "goldG": 0.02755,
          "silverG": 0.27505,
          "copperG": 13.2,
          "palladiumG": 0.01106,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02755,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01106,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.2,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Oppo": {
      "Oppo Find 5": {
        "brand": "Oppo",
        "model": "Oppo Find 5",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 154,
        "metals": {
          "goldG": 0.02572,
          "silverG": 0.25672,
          "copperG": 12.32,
          "palladiumG": 0.01032,
          "platinumG": 0.00046
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02572,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25672,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01032,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00046,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.32,
            "percent": "8.00000%"
          }
        ]
      },
      "Oppo A37": {
        "brand": "Oppo",
        "model": "Oppo A37",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 137,
        "metals": {
          "goldG": 0.02288,
          "silverG": 0.22838,
          "copperG": 10.96,
          "palladiumG": 0.00918,
          "platinumG": 0.00041
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02288,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.22838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00918,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00041,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.96,
            "percent": "8.00000%"
          }
        ]
      },
      "Oppo F1": {
        "brand": "Oppo",
        "model": "Oppo F1",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 141,
        "metals": {
          "goldG": 0.02355,
          "silverG": 0.23505,
          "copperG": 11.28,
          "palladiumG": 0.00945,
          "platinumG": 0.00042
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02355,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00945,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00042,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.28,
            "percent": "8.00000%"
          }
        ]
      },
      "Oppo F3": {
        "brand": "Oppo",
        "model": "Oppo F3",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 152,
        "metals": {
          "goldG": 0.02538,
          "silverG": 0.25338,
          "copperG": 12.16,
          "palladiumG": 0.01018,
          "platinumG": 0.00046
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02538,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25338,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01018,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00046,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.16,
            "percent": "8.00000%"
          }
        ]
      },
      "Oppo Find X": {
        "brand": "Oppo",
        "model": "Oppo Find X",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 186,
        "metals": {
          "goldG": 0.03106,
          "silverG": 0.31006,
          "copperG": 15.81,
          "palladiumG": 0.01246,
          "platinumG": 0.00056
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03106,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01246,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00056,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.81,
            "percent": "8.50000%"
          }
        ]
      },
      "Oppo Reno 2": {
        "brand": "Oppo",
        "model": "Oppo Reno 2",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 189,
        "metals": {
          "goldG": 0.03156,
          "silverG": 0.31506,
          "copperG": 15.12,
          "palladiumG": 0.01266,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03156,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31506,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01266,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.12,
            "percent": "8.00000%"
          }
        ]
      },
      "Oppo F17 Pro": {
        "brand": "Oppo",
        "model": "Oppo F17 Pro",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 164,
        "metals": {
          "goldG": 0.02739,
          "silverG": 0.27339,
          "copperG": 13.12,
          "palladiumG": 0.01099,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02739,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27339,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01099,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.12,
            "percent": "8.00000%"
          }
        ]
      },
      "Oppo Reno 6": {
        "brand": "Oppo",
        "model": "Oppo Reno 6",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 173,
        "metals": {
          "goldG": 0.02889,
          "silverG": 0.28839,
          "copperG": 13.84,
          "palladiumG": 0.01159,
          "platinumG": 0.00052
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02889,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01159,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00052,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.84,
            "percent": "8.00000%"
          }
        ]
      },
      "Oppo Find N2 Flip": {
        "brand": "Oppo",
        "model": "Oppo Find N2 Flip",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 191,
        "metals": {
          "goldG": 0.0319,
          "silverG": 0.3184,
          "copperG": 16.235,
          "palladiumG": 0.0128,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0319,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3184,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0128,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.235,
            "percent": "8.50000%"
          }
        ]
      },
      "Oppo Reno 12": {
        "brand": "Oppo",
        "model": "Oppo Reno 12",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 177,
        "metals": {
          "goldG": 0.02956,
          "silverG": 0.29506,
          "copperG": 14.16,
          "palladiumG": 0.01186,
          "platinumG": 0.00053
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02956,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29506,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01186,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00053,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.16,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Redmi (Xiaomi)": {
      "Redmi 1": {
        "brand": "Redmi (Xiaomi)",
        "model": "Redmi 1",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 158,
        "metals": {
          "goldG": 0.0263,
          "silverG": 0.2633,
          "copperG": 10.4,
          "palladiumG": 0.0105,
          "platinumG": 0.0005
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0263,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.2633,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0105,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0005,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.4,
            "percent": "6.58228%"
          }
        ]
      },
      "Redmi 4 Prime": {
        "brand": "Redmi (Xiaomi)",
        "model": "Redmi 4 Prime",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 150,
        "metals": {
          "goldG": 0.025,
          "silverG": 0.25,
          "copperG": 13.13,
          "palladiumG": 0.01,
          "platinumG": 0.0005
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.025,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0005,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.13,
            "percent": "8.75333%"
          }
        ]
      },
      "Redmi 5": {
        "brand": "Redmi (Xiaomi)",
        "model": "Redmi 5",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 157,
        "metals": {
          "goldG": 0.0262,
          "silverG": 0.2617,
          "copperG": 12.09,
          "palladiumG": 0.0105,
          "platinumG": 0.0005
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0262,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.2617,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0105,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0005,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.09,
            "percent": "7.70064%"
          }
        ]
      },
      "Redmi 6": {
        "brand": "Redmi (Xiaomi)",
        "model": "Redmi 6",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 164,
        "metals": {
          "goldG": 0.0273,
          "silverG": 0.2733,
          "copperG": 11.7,
          "palladiumG": 0.0109,
          "platinumG": 0.0005
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0273,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.2733,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0109,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0005,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.7,
            "percent": "7.13415%"
          }
        ]
      },
      "Redmi Note 5": {
        "brand": "Redmi (Xiaomi)",
        "model": "Redmi Note 5",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 180,
        "metals": {
          "goldG": 0.03,
          "silverG": 0.3,
          "copperG": 13,
          "palladiumG": 0.012,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03,
            "percent": "0.01667%"
          },
          {
            "metal": "Gold (Au)",
            "amountG": 0.03,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3,
            "percent": "0.16667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.012,
            "percent": "0.00667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.012,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13,
            "percent": "7.22222%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13,
            "percent": "7.22222%"
          }
        ]
      },
      "Redmi 8A": {
        "brand": "Redmi (Xiaomi)",
        "model": "Redmi 8A",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 188,
        "metals": {
          "goldG": 0.0313,
          "silverG": 0.3133,
          "copperG": 14.3,
          "palladiumG": 0.0125,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0313,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3133,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0125,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.3,
            "percent": "7.60638%"
          }
        ]
      },
      "Redmi Note 7": {
        "brand": "Redmi (Xiaomi)",
        "model": "Redmi Note 7",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 186,
        "metals": {
          "goldG": 0.031,
          "silverG": 0.31,
          "copperG": 13,
          "palladiumG": 0.0124,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.031,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0124,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13,
            "percent": "6.98925%"
          }
        ]
      },
      "Redmi 9 Pro": {
        "brand": "Redmi (Xiaomi)",
        "model": "Redmi 9 Pro",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 198,
        "metals": {
          "goldG": 0.033,
          "silverG": 0.33,
          "copperG": 14.326,
          "palladiumG": 0.0132,
          "platinumG": 0.0007
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.033,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0132,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0007,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.326,
            "percent": "7.23535%"
          }
        ]
      },
      "Redmi 10": {
        "brand": "Redmi (Xiaomi)",
        "model": "Redmi 10",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 181,
        "metals": {
          "goldG": 0.0302,
          "silverG": 0.3017,
          "copperG": 14.3,
          "palladiumG": 0.0121,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0302,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3017,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0121,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.3,
            "percent": "7.90055%"
          }
        ]
      },
      "Redmi Note 11": {
        "brand": "Redmi (Xiaomi)",
        "model": "Redmi Note 11",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 179,
        "metals": {
          "goldG": 0.0298,
          "silverG": 0.2983,
          "copperG": 14.3,
          "palladiumG": 0.0119,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0298,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.2983,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0119,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.3,
            "percent": "7.98883%"
          }
        ]
      },
      "Redmi Note 15": {
        "brand": "Redmi (Xiaomi)",
        "model": "Redmi Note 15",
        "category": "Smartphone",
        "releaseYear": 2026,
        "deviceWeightG": 178,
        "metals": {
          "goldG": 0.0297,
          "silverG": 0.2967,
          "copperG": 14.976,
          "palladiumG": 0.0119,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0297,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.2967,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0119,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.976,
            "percent": "8.41348%"
          }
        ]
      }
    },
    "Videocon": {
      "Videocon A15": {
        "brand": "Videocon",
        "model": "Videocon A15",
        "category": "Smartphone",
        "releaseYear": 2013,
        "deviceWeightG": 130,
        "metals": {
          "goldG": 0.02171,
          "silverG": 0.21671,
          "copperG": 10.4,
          "palladiumG": 0.00871,
          "platinumG": 0.00039
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02171,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.21671,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00871,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00039,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Videocon Infinium Z45 Amaze": {
        "brand": "Videocon",
        "model": "Videocon Infinium Z45 Amaze",
        "category": "Smartphone",
        "releaseYear": 2015,
        "deviceWeightG": 145,
        "metals": {
          "goldG": 0.02422,
          "silverG": 0.24172,
          "copperG": 11.6,
          "palladiumG": 0.00971,
          "platinumG": 0.00044
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02422,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00971,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00044,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.6,
            "percent": "8.00000%"
          }
        ]
      },
      "Videocon Graphite V45DC": {
        "brand": "Videocon",
        "model": "Videocon Graphite V45DC",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 150,
        "metals": {
          "goldG": 0.02505,
          "silverG": 0.25005,
          "copperG": 12,
          "palladiumG": 0.01005,
          "platinumG": 0.00045
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02505,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01005,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00045,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Honor": {
      "Honor 6": {
        "brand": "Honor",
        "model": "Honor 6",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 130,
        "metals": {
          "goldG": 0.02171,
          "silverG": 0.21671,
          "copperG": 10.4,
          "palladiumG": 0.00871,
          "platinumG": 0.00039
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02171,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.21671,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00871,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00039,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Honor 8": {
        "brand": "Honor",
        "model": "Honor 8",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 153,
        "metals": {
          "goldG": 0.02555,
          "silverG": 0.25505,
          "copperG": 12.24,
          "palladiumG": 0.01025,
          "platinumG": 0.00046
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02555,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01025,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00046,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.24,
            "percent": "8.00000%"
          }
        ]
      },
      "Honor 9 Lite": {
        "brand": "Honor",
        "model": "Honor 9 Lite",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 149,
        "metals": {
          "goldG": 0.02488,
          "silverG": 0.24838,
          "copperG": 11.92,
          "palladiumG": 0.00998,
          "platinumG": 0.00045
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02488,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00998,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00045,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.92,
            "percent": "8.00000%"
          }
        ]
      },
      "Honor 20": {
        "brand": "Honor",
        "model": "Honor 20",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 174,
        "metals": {
          "goldG": 0.02906,
          "silverG": 0.29006,
          "copperG": 13.92,
          "palladiumG": 0.01166,
          "platinumG": 0.00052
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02906,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01166,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00052,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.92,
            "percent": "8.00000%"
          }
        ]
      },
      "Honor 50": {
        "brand": "Honor",
        "model": "Honor 50",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 175,
        "metals": {
          "goldG": 0.02922,
          "silverG": 0.29173,
          "copperG": 14,
          "palladiumG": 0.01173,
          "platinumG": 0.00052
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02922,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01173,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00052,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14,
            "percent": "8.00000%"
          }
        ]
      },
      "Honor 90": {
        "brand": "Honor",
        "model": "Honor 90",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 200,
        "metals": {
          "goldG": 0.0334,
          "silverG": 0.3334,
          "copperG": 16,
          "palladiumG": 0.0134,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0334,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3334,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0134,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16,
            "percent": "8.00000%"
          }
        ]
      },
      "Honor Magic6 Pro": {
        "brand": "Honor",
        "model": "Honor Magic6 Pro",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 225,
        "metals": {
          "goldG": 0.03757,
          "silverG": 0.37507,
          "copperG": 19.125,
          "palladiumG": 0.01507,
          "platinumG": 0.00068
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03757,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.37507,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01507,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00068,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 19.125,
            "percent": "8.50000%"
          }
        ]
      }
    },
    "OnePlus": {
      "OnePlus One": {
        "brand": "OnePlus",
        "model": "OnePlus One",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 162,
        "metals": {
          "goldG": 0.02705,
          "silverG": 0.27005,
          "copperG": 12.96,
          "palladiumG": 0.01085,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02705,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01085,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.96,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus 2": {
        "brand": "OnePlus",
        "model": "OnePlus 2",
        "category": "Smartphone",
        "releaseYear": 2015,
        "deviceWeightG": 175,
        "metals": {
          "goldG": 0.02922,
          "silverG": 0.29173,
          "copperG": 14,
          "palladiumG": 0.01173,
          "platinumG": 0.00052
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02922,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01173,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00052,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus X": {
        "brand": "OnePlus",
        "model": "OnePlus X",
        "category": "Smartphone",
        "releaseYear": 2015,
        "deviceWeightG": 138,
        "metals": {
          "goldG": 0.02305,
          "silverG": 0.23005,
          "copperG": 11.04,
          "palladiumG": 0.00925,
          "platinumG": 0.00041
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02305,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23005,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00925,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00041,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.04,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus 3": {
        "brand": "OnePlus",
        "model": "OnePlus 3",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 158,
        "metals": {
          "goldG": 0.02639,
          "silverG": 0.26339,
          "copperG": 12.64,
          "palladiumG": 0.01059,
          "platinumG": 0.00047
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02639,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.26339,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01059,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00047,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.64,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus 5": {
        "brand": "OnePlus",
        "model": "OnePlus 5",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 153,
        "metals": {
          "goldG": 0.02555,
          "silverG": 0.25505,
          "copperG": 12.24,
          "palladiumG": 0.01025,
          "platinumG": 0.00046
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02555,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01025,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00046,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.24,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus 6": {
        "brand": "OnePlus",
        "model": "OnePlus 6",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 177,
        "metals": {
          "goldG": 0.02956,
          "silverG": 0.29506,
          "copperG": 14.16,
          "palladiumG": 0.01186,
          "platinumG": 0.00053
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02956,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29506,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01186,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00053,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.16,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus 7 Pro": {
        "brand": "OnePlus",
        "model": "OnePlus 7 Pro",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 206,
        "metals": {
          "goldG": 0.0344,
          "silverG": 0.3434,
          "copperG": 17.51,
          "palladiumG": 0.0138,
          "platinumG": 0.00062
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0344,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3434,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0138,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00062,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 17.51,
            "percent": "8.50000%"
          }
        ]
      },
      "OnePlus 8 Pro": {
        "brand": "OnePlus",
        "model": "OnePlus 8 Pro",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 199,
        "metals": {
          "goldG": 0.03323,
          "silverG": 0.33173,
          "copperG": 16.915,
          "palladiumG": 0.01333,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03323,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01333,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.915,
            "percent": "8.50000%"
          }
        ]
      },
      "OnePlus 9": {
        "brand": "OnePlus",
        "model": "OnePlus 9",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 183,
        "metals": {
          "goldG": 0.03056,
          "silverG": 0.30506,
          "copperG": 14.64,
          "palladiumG": 0.01226,
          "platinumG": 0.00055
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03056,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.30506,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01226,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00055,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.64,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus 10 Pro 5G": {
        "brand": "OnePlus",
        "model": "OnePlus 10 Pro 5G",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 201,
        "metals": {
          "goldG": 0.03351,
          "silverG": 0.33501,
          "copperG": 16.08,
          "palladiumG": 0.01341,
          "platinumG": 0.00066
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03351,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33501,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01341,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00066,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.08,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus 11 5G": {
        "brand": "OnePlus",
        "model": "OnePlus 11 5G",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 205,
        "metals": {
          "goldG": 0.03417,
          "silverG": 0.34167,
          "copperG": 16.4,
          "palladiumG": 0.01367,
          "platinumG": 0.00068
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03417,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.34167,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01367,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00068,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.4,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus Nord 3 5G": {
        "brand": "OnePlus",
        "model": "OnePlus Nord 3 5G",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 193.5,
        "metals": {
          "goldG": 0.03226,
          "silverG": 0.32251,
          "copperG": 15.48,
          "palladiumG": 0.01291,
          "platinumG": 0.00064
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03226,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.32251,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01291,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00064,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.48,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus 12": {
        "brand": "OnePlus",
        "model": "OnePlus 12",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 220,
        "metals": {
          "goldG": 0.03667,
          "silverG": 0.36667,
          "copperG": 17.6,
          "palladiumG": 0.01467,
          "platinumG": 0.00073
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03667,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.36667,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01467,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00073,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 17.6,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus 12R": {
        "brand": "OnePlus",
        "model": "OnePlus 12R",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 207,
        "metals": {
          "goldG": 0.03451,
          "silverG": 0.34501,
          "copperG": 16.56,
          "palladiumG": 0.01381,
          "platinumG": 0.00068
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03451,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.34501,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01381,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00068,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.56,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus Nord 4": {
        "brand": "OnePlus",
        "model": "OnePlus Nord 4",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 199.5,
        "metals": {
          "goldG": 0.03326,
          "silverG": 0.33251,
          "copperG": 15.96,
          "palladiumG": 0.01331,
          "platinumG": 0.00066
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03326,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33251,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01331,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00066,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.96,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus 13": {
        "brand": "OnePlus",
        "model": "OnePlus 13",
        "category": "Smartphone",
        "releaseYear": 2025,
        "deviceWeightG": 210,
        "metals": {
          "goldG": 0.03501,
          "silverG": 0.35001,
          "copperG": 16.8,
          "palladiumG": 0.01401,
          "platinumG": 0.00069
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03501,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.35001,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01401,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00069,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.8,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus 13R": {
        "brand": "OnePlus",
        "model": "OnePlus 13R",
        "category": "Smartphone",
        "releaseYear": 2025,
        "deviceWeightG": 206,
        "metals": {
          "goldG": 0.03434,
          "silverG": 0.34334,
          "copperG": 16.48,
          "palladiumG": 0.01374,
          "platinumG": 0.00068
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03434,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.34334,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01374,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00068,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.48,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus Nord 5": {
        "brand": "OnePlus",
        "model": "OnePlus Nord 5",
        "category": "Smartphone",
        "releaseYear": 2025,
        "deviceWeightG": 211,
        "metals": {
          "goldG": 0.03517,
          "silverG": 0.35167,
          "copperG": 16.88,
          "palladiumG": 0.01407,
          "platinumG": 0.0007
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03517,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.35167,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01407,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0007,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.88,
            "percent": "8.00000%"
          }
        ]
      },
      "OnePlus Nord CE5": {
        "brand": "OnePlus",
        "model": "OnePlus Nord CE5",
        "category": "Smartphone",
        "releaseYear": 2025,
        "deviceWeightG": 199,
        "metals": {
          "goldG": 0.03317,
          "silverG": 0.33167,
          "copperG": 15.92,
          "palladiumG": 0.01327,
          "platinumG": 0.00066
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03317,
            "percent": "0.01667%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33167,
            "percent": "0.16667%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01327,
            "percent": "0.00667%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00066,
            "percent": "0.00033%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.92,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Panasonic": {
      "Panasonic Eluga A": {
        "brand": "Panasonic",
        "model": "Panasonic Eluga A",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 149,
        "metals": {
          "goldG": 0.02488,
          "silverG": 0.24838,
          "copperG": 11.92,
          "palladiumG": 0.00998,
          "platinumG": 0.00045
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02488,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00998,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00045,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.92,
            "percent": "8.00000%"
          }
        ]
      },
      "Panasonic P55 Novo": {
        "brand": "Panasonic",
        "model": "Panasonic P55 Novo",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 145,
        "metals": {
          "goldG": 0.02422,
          "silverG": 0.24172,
          "copperG": 11.6,
          "palladiumG": 0.00971,
          "platinumG": 0.00044
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02422,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00971,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00044,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.6,
            "percent": "8.00000%"
          }
        ]
      },
      "Panasonic Eluga Ray 800": {
        "brand": "Panasonic",
        "model": "Panasonic Eluga Ray 800",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 168,
        "metals": {
          "goldG": 0.02806,
          "silverG": 0.28006,
          "copperG": 13.44,
          "palladiumG": 0.01126,
          "platinumG": 0.0005
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02806,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01126,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0005,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.44,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Xiaomi (Mi)": {
      "Mi 3": {
        "brand": "Xiaomi (Mi)",
        "model": "Mi 3",
        "category": "Smartphone",
        "releaseYear": 2014,
        "deviceWeightG": 145,
        "metals": {
          "goldG": 0.02422,
          "silverG": 0.24172,
          "copperG": 11.6,
          "palladiumG": 0.00971,
          "platinumG": 0.00044
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02422,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24172,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00971,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00044,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.6,
            "percent": "8.00000%"
          }
        ]
      },
      "Mi 4i": {
        "brand": "Xiaomi (Mi)",
        "model": "Mi 4i",
        "category": "Smartphone",
        "releaseYear": 2015,
        "deviceWeightG": 130,
        "metals": {
          "goldG": 0.02171,
          "silverG": 0.21671,
          "copperG": 10.4,
          "palladiumG": 0.00871,
          "platinumG": 0.00039
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02171,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.21671,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00871,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00039,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 10.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Mi A1": {
        "brand": "Xiaomi (Mi)",
        "model": "Mi A1",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 165,
        "metals": {
          "goldG": 0.02755,
          "silverG": 0.27505,
          "copperG": 13.2,
          "palladiumG": 0.01106,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02755,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01106,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Mi A2": {
        "brand": "Xiaomi (Mi)",
        "model": "Mi A2",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 168,
        "metals": {
          "goldG": 0.02806,
          "silverG": 0.28006,
          "copperG": 13.44,
          "palladiumG": 0.01126,
          "platinumG": 0.0005
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02806,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01126,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0005,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.44,
            "percent": "8.00000%"
          }
        ]
      },
      "Mi 10": {
        "brand": "Xiaomi (Mi)",
        "model": "Mi 10",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 208,
        "metals": {
          "goldG": 0.03474,
          "silverG": 0.34674,
          "copperG": 17.68,
          "palladiumG": 0.01394,
          "platinumG": 0.00062
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03474,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.34674,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01394,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00062,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 17.68,
            "percent": "8.50000%"
          }
        ]
      },
      "Mi 11X": {
        "brand": "Xiaomi (Mi)",
        "model": "Mi 11X",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 196,
        "metals": {
          "goldG": 0.03273,
          "silverG": 0.32673,
          "copperG": 15.68,
          "palladiumG": 0.01313,
          "platinumG": 0.00059
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03273,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.32673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01313,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00059,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.68,
            "percent": "8.00000%"
          }
        ]
      },
      "Xiaomi 13 Pro": {
        "brand": "Xiaomi (Mi)",
        "model": "Xiaomi 13 Pro",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 210,
        "metals": {
          "goldG": 0.03507,
          "silverG": 0.35007,
          "copperG": 17.85,
          "palladiumG": 0.01407,
          "platinumG": 0.00063
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03507,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.35007,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01407,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00063,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 17.85,
            "percent": "8.50000%"
          }
        ]
      },
      "Xiaomi 14": {
        "brand": "Xiaomi (Mi)",
        "model": "Xiaomi 14",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 193,
        "metals": {
          "goldG": 0.03223,
          "silverG": 0.32173,
          "copperG": 16.405,
          "palladiumG": 0.01293,
          "platinumG": 0.00058
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03223,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.32173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01293,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00058,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.405,
            "percent": "8.50000%"
          }
        ]
      }
    },
    "Google": {
      "Google Pixel": {
        "brand": "Google",
        "model": "Google Pixel",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 143,
        "metals": {
          "goldG": 0.02388,
          "silverG": 0.23838,
          "copperG": 11.44,
          "palladiumG": 0.00958,
          "platinumG": 0.00043
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02388,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00958,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00043,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.44,
            "percent": "8.00000%"
          }
        ]
      },
      "Google Pixel 2": {
        "brand": "Google",
        "model": "Google Pixel 2",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 143,
        "metals": {
          "goldG": 0.02388,
          "silverG": 0.23838,
          "copperG": 11.44,
          "palladiumG": 0.00958,
          "platinumG": 0.00043
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02388,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00958,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00043,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.44,
            "percent": "8.00000%"
          }
        ]
      },
      "Google Pixel 3a": {
        "brand": "Google",
        "model": "Google Pixel 3a",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 147,
        "metals": {
          "goldG": 0.02455,
          "silverG": 0.24505,
          "copperG": 11.76,
          "palladiumG": 0.00985,
          "platinumG": 0.00044
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02455,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.24505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00985,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00044,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.76,
            "percent": "8.00000%"
          }
        ]
      },
      "Google Pixel 4a": {
        "brand": "Google",
        "model": "Google Pixel 4a",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 143,
        "metals": {
          "goldG": 0.02388,
          "silverG": 0.23838,
          "copperG": 11.44,
          "palladiumG": 0.00958,
          "platinumG": 0.00043
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02388,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.23838,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.00958,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00043,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 11.44,
            "percent": "8.00000%"
          }
        ]
      },
      "Google Pixel 6": {
        "brand": "Google",
        "model": "Google Pixel 6",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 207,
        "metals": {
          "goldG": 0.03457,
          "silverG": 0.34507,
          "copperG": 16.56,
          "palladiumG": 0.01387,
          "platinumG": 0.00062
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03457,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.34507,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01387,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00062,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.56,
            "percent": "8.00000%"
          }
        ]
      },
      "Google Pixel 7 Pro": {
        "brand": "Google",
        "model": "Google Pixel 7 Pro",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 212,
        "metals": {
          "goldG": 0.0354,
          "silverG": 0.3534,
          "copperG": 18.02,
          "palladiumG": 0.0142,
          "platinumG": 0.00064
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0354,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3534,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0142,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00064,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 18.02,
            "percent": "8.50000%"
          }
        ]
      },
      "Google Pixel 8": {
        "brand": "Google",
        "model": "Google Pixel 8",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 187,
        "metals": {
          "goldG": 0.03123,
          "silverG": 0.31173,
          "copperG": 14.96,
          "palladiumG": 0.01253,
          "platinumG": 0.00056
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03123,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01253,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00056,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.96,
            "percent": "8.00000%"
          }
        ]
      },
      "Google Pixel 9 Pro": {
        "brand": "Google",
        "model": "Google Pixel 9 Pro",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 199,
        "metals": {
          "goldG": 0.03323,
          "silverG": 0.33173,
          "copperG": 16.915,
          "palladiumG": 0.01333,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03323,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01333,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.915,
            "percent": "8.50000%"
          }
        ]
      }
    },
    "Infinix": {
      "Infinix Hot 4": {
        "brand": "Infinix",
        "model": "Infinix Hot 4",
        "category": "Smartphone",
        "releaseYear": 2016,
        "deviceWeightG": 154,
        "metals": {
          "goldG": 0.02572,
          "silverG": 0.25672,
          "copperG": 12.32,
          "palladiumG": 0.01032,
          "platinumG": 0.00046
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02572,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25672,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01032,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00046,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.32,
            "percent": "8.00000%"
          }
        ]
      },
      "Infinix Zero 5": {
        "brand": "Infinix",
        "model": "Infinix Zero 5",
        "category": "Smartphone",
        "releaseYear": 2017,
        "deviceWeightG": 165,
        "metals": {
          "goldG": 0.02755,
          "silverG": 0.27505,
          "copperG": 13.2,
          "palladiumG": 0.01106,
          "platinumG": 0.00049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02755,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.27505,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01106,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00049,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Infinix Note 7": {
        "brand": "Infinix",
        "model": "Infinix Note 7",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 200,
        "metals": {
          "goldG": 0.0334,
          "silverG": 0.3334,
          "copperG": 16,
          "palladiumG": 0.0134,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0334,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3334,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0134,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16,
            "percent": "8.00000%"
          }
        ]
      },
      "Infinix Zero 8": {
        "brand": "Infinix",
        "model": "Infinix Zero 8",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 200,
        "metals": {
          "goldG": 0.0334,
          "silverG": 0.3334,
          "copperG": 16,
          "palladiumG": 0.0134,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0334,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3334,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0134,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16,
            "percent": "8.00000%"
          }
        ]
      },
      "Infinix Note 12": {
        "brand": "Infinix",
        "model": "Infinix Note 12",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Infinix Zero 30 5G": {
        "brand": "Infinix",
        "model": "Infinix Zero 30 5G",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 187,
        "metals": {
          "goldG": 0.03123,
          "silverG": 0.31173,
          "copperG": 14.96,
          "palladiumG": 0.01253,
          "platinumG": 0.00056
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03123,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01253,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00056,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.96,
            "percent": "8.00000%"
          }
        ]
      },
      "Infinix Note 40 Pro": {
        "brand": "Infinix",
        "model": "Infinix Note 40 Pro",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "POCO": {
      "POCO F1": {
        "brand": "POCO",
        "model": "POCO F1",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 182,
        "metals": {
          "goldG": 0.03039,
          "silverG": 0.30339,
          "copperG": 14.56,
          "palladiumG": 0.01219,
          "platinumG": 0.00055
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03039,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.30339,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01219,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00055,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.56,
            "percent": "8.00000%"
          }
        ]
      },
      "POCO M2 Pro": {
        "brand": "POCO",
        "model": "POCO M2 Pro",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 209,
        "metals": {
          "goldG": 0.0349,
          "silverG": 0.3484,
          "copperG": 16.72,
          "palladiumG": 0.014,
          "platinumG": 0.00063
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0349,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3484,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.014,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00063,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.72,
            "percent": "8.00000%"
          }
        ]
      },
      "POCO X2": {
        "brand": "POCO",
        "model": "POCO X2",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 208,
        "metals": {
          "goldG": 0.03474,
          "silverG": 0.34674,
          "copperG": 16.64,
          "palladiumG": 0.01394,
          "platinumG": 0.00062
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03474,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.34674,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01394,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00062,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.64,
            "percent": "8.00000%"
          }
        ]
      },
      "POCO X3": {
        "brand": "POCO",
        "model": "POCO X3",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 215,
        "metals": {
          "goldG": 0.0359,
          "silverG": 0.35841,
          "copperG": 17.2,
          "palladiumG": 0.01441,
          "platinumG": 0.00065
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0359,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.35841,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01441,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00065,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 17.2,
            "percent": "8.00000%"
          }
        ]
      },
      "POCO F3": {
        "brand": "POCO",
        "model": "POCO F3",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 196,
        "metals": {
          "goldG": 0.03273,
          "silverG": 0.32673,
          "copperG": 15.68,
          "palladiumG": 0.01313,
          "platinumG": 0.00059
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03273,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.32673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01313,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00059,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.68,
            "percent": "8.00000%"
          }
        ]
      },
      "POCO X4 Pro 5G": {
        "brand": "POCO",
        "model": "POCO X4 Pro 5G",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 205,
        "metals": {
          "goldG": 0.03424,
          "silverG": 0.34174,
          "copperG": 16.4,
          "palladiumG": 0.01374,
          "platinumG": 0.00061
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03424,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.34174,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01374,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00061,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.4,
            "percent": "8.00000%"
          }
        ]
      },
      "POCO F5": {
        "brand": "POCO",
        "model": "POCO F5",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 181,
        "metals": {
          "goldG": 0.03023,
          "silverG": 0.30173,
          "copperG": 14.48,
          "palladiumG": 0.01213,
          "platinumG": 0.00054
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03023,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.30173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01213,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00054,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.48,
            "percent": "8.00000%"
          }
        ]
      },
      "POCO X6 Pro": {
        "brand": "POCO",
        "model": "POCO X6 Pro",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 186,
        "metals": {
          "goldG": 0.03106,
          "silverG": 0.31006,
          "copperG": 14.88,
          "palladiumG": 0.01246,
          "platinumG": 0.00056
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03106,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01246,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00056,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.88,
            "percent": "8.00000%"
          }
        ]
      },
      "POCO F7": {
        "brand": "POCO",
        "model": "POCO F7",
        "category": "Smartphone",
        "releaseYear": 2025,
        "deviceWeightG": 195,
        "metals": {
          "goldG": 0.03256,
          "silverG": 0.32506,
          "copperG": 15.6,
          "palladiumG": 0.01307,
          "platinumG": 0.00059
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03256,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.32506,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01307,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00059,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.6,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Realme": {
      "Realme 1": {
        "brand": "Realme",
        "model": "Realme 1",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 155,
        "metals": {
          "goldG": 0.02588,
          "silverG": 0.25839,
          "copperG": 12.4,
          "palladiumG": 0.01039,
          "platinumG": 0.00047
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02588,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01039,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00047,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Realme 2 Pro": {
        "brand": "Realme",
        "model": "Realme 2 Pro",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 173,
        "metals": {
          "goldG": 0.02889,
          "silverG": 0.28839,
          "copperG": 13.84,
          "palladiumG": 0.01159,
          "platinumG": 0.00052
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02889,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.28839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01159,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00052,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.84,
            "percent": "8.00000%"
          }
        ]
      },
      "Realme 3 Pro": {
        "brand": "Realme",
        "model": "Realme 3 Pro",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 182,
        "metals": {
          "goldG": 0.03039,
          "silverG": 0.30339,
          "copperG": 14.56,
          "palladiumG": 0.01219,
          "platinumG": 0.00055
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03039,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.30339,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01219,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00055,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.56,
            "percent": "8.00000%"
          }
        ]
      },
      "Realme X": {
        "brand": "Realme",
        "model": "Realme X",
        "category": "Smartphone",
        "releaseYear": 2019,
        "deviceWeightG": 174,
        "metals": {
          "goldG": 0.02906,
          "silverG": 0.29006,
          "copperG": 13.92,
          "palladiumG": 0.01166,
          "platinumG": 0.00052
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02906,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.29006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01166,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00052,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 13.92,
            "percent": "8.00000%"
          }
        ]
      },
      "Realme 6": {
        "brand": "Realme",
        "model": "Realme 6",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 191,
        "metals": {
          "goldG": 0.0319,
          "silverG": 0.3184,
          "copperG": 15.28,
          "palladiumG": 0.0128,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0319,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3184,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0128,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.28,
            "percent": "8.00000%"
          }
        ]
      },
      "Realme X7 Pro": {
        "brand": "Realme",
        "model": "Realme X7 Pro",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 184,
        "metals": {
          "goldG": 0.03073,
          "silverG": 0.30673,
          "copperG": 14.72,
          "palladiumG": 0.01233,
          "platinumG": 0.00055
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03073,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.30673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01233,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00055,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.72,
            "percent": "8.00000%"
          }
        ]
      },
      "Realme GT": {
        "brand": "Realme",
        "model": "Realme GT",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 186,
        "metals": {
          "goldG": 0.03106,
          "silverG": 0.31006,
          "copperG": 14.88,
          "palladiumG": 0.01246,
          "platinumG": 0.00056
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03106,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31006,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01246,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00056,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.88,
            "percent": "8.00000%"
          }
        ]
      },
      "Realme 9 Pro+": {
        "brand": "Realme",
        "model": "Realme 9 Pro+",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 182,
        "metals": {
          "goldG": 0.03039,
          "silverG": 0.30339,
          "copperG": 14.56,
          "palladiumG": 0.01219,
          "platinumG": 0.00055
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03039,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.30339,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01219,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00055,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 14.56,
            "percent": "8.00000%"
          }
        ]
      },
      "Realme 11 Pro+": {
        "brand": "Realme",
        "model": "Realme 11 Pro+",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Realme 13 Pro+": {
        "brand": "Realme",
        "model": "Realme 13 Pro+",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "Tecno": {
      "Tecno Camon 11": {
        "brand": "Tecno",
        "model": "Tecno Camon 11",
        "category": "Smartphone",
        "releaseYear": 2018,
        "deviceWeightG": 155,
        "metals": {
          "goldG": 0.02588,
          "silverG": 0.25839,
          "copperG": 12.4,
          "palladiumG": 0.01039,
          "platinumG": 0.00047
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.02588,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.25839,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01039,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00047,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 12.4,
            "percent": "8.00000%"
          }
        ]
      },
      "Tecno Spark 6": {
        "brand": "Tecno",
        "model": "Tecno Spark 6",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Tecno Camon 18": {
        "brand": "Tecno",
        "model": "Tecno Camon 18",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Tecno Phantom X2": {
        "brand": "Tecno",
        "model": "Tecno Phantom X2",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 16.15,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.15,
            "percent": "8.50000%"
          }
        ]
      },
      "Tecno Camon 30": {
        "brand": "Tecno",
        "model": "Tecno Camon 30",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      }
    },
    "iQOO": {
      "iQOO 3": {
        "brand": "iQOO",
        "model": "iQOO 3",
        "category": "Smartphone",
        "releaseYear": 2020,
        "deviceWeightG": 214,
        "metals": {
          "goldG": 0.03574,
          "silverG": 0.35674,
          "copperG": 17.12,
          "palladiumG": 0.01434,
          "platinumG": 0.00064
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03574,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.35674,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01434,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00064,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 17.12,
            "percent": "8.00000%"
          }
        ]
      },
      "iQOO 7": {
        "brand": "iQOO",
        "model": "iQOO 7",
        "category": "Smartphone",
        "releaseYear": 2021,
        "deviceWeightG": 196,
        "metals": {
          "goldG": 0.03273,
          "silverG": 0.32673,
          "copperG": 15.68,
          "palladiumG": 0.01313,
          "platinumG": 0.00059
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03273,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.32673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01313,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00059,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.68,
            "percent": "8.00000%"
          }
        ]
      },
      "iQOO 9": {
        "brand": "iQOO",
        "model": "iQOO 9",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 202,
        "metals": {
          "goldG": 0.03373,
          "silverG": 0.33673,
          "copperG": 16.16,
          "palladiumG": 0.01353,
          "platinumG": 0.00061
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03373,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01353,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00061,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.16,
            "percent": "8.00000%"
          }
        ]
      },
      "iQOO 11": {
        "brand": "iQOO",
        "model": "iQOO 11",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 199,
        "metals": {
          "goldG": 0.03323,
          "silverG": 0.33173,
          "copperG": 16.915,
          "palladiumG": 0.01333,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03323,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01333,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.915,
            "percent": "8.50000%"
          }
        ]
      },
      "iQOO 12": {
        "brand": "iQOO",
        "model": "iQOO 12",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 199,
        "metals": {
          "goldG": 0.03323,
          "silverG": 0.33173,
          "copperG": 16.915,
          "palladiumG": 0.01333,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03323,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01333,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.915,
            "percent": "8.50000%"
          }
        ]
      },
      "iQOO 13": {
        "brand": "iQOO",
        "model": "iQOO 13",
        "category": "Smartphone",
        "releaseYear": 2025,
        "deviceWeightG": 200,
        "metals": {
          "goldG": 0.0334,
          "silverG": 0.3334,
          "copperG": 17,
          "palladiumG": 0.0134,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.0334,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.3334,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0134,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 17,
            "percent": "8.50000%"
          }
        ]
      }
    },
    "Nothing": {
      "Nothing Phone (1)": {
        "brand": "Nothing",
        "model": "Nothing Phone (1)",
        "category": "Smartphone",
        "releaseYear": 2022,
        "deviceWeightG": 193,
        "metals": {
          "goldG": 0.03223,
          "silverG": 0.32173,
          "copperG": 15.44,
          "palladiumG": 0.01293,
          "platinumG": 0.00058
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03223,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.32173,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01293,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00058,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.44,
            "percent": "8.00000%"
          }
        ]
      },
      "Nothing Phone (2)": {
        "brand": "Nothing",
        "model": "Nothing Phone (2)",
        "category": "Smartphone",
        "releaseYear": 2023,
        "deviceWeightG": 201,
        "metals": {
          "goldG": 0.03357,
          "silverG": 0.33507,
          "copperG": 16.08,
          "palladiumG": 0.01347,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03357,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33507,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01347,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.08,
            "percent": "8.00000%"
          }
        ]
      },
      "Nothing Phone (2a)": {
        "brand": "Nothing",
        "model": "Nothing Phone (2a)",
        "category": "Smartphone",
        "releaseYear": 2024,
        "deviceWeightG": 190,
        "metals": {
          "goldG": 0.03173,
          "silverG": 0.31673,
          "copperG": 15.2,
          "palladiumG": 0.01273,
          "platinumG": 0.00057
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03173,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.31673,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01273,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00057,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 15.2,
            "percent": "8.00000%"
          }
        ]
      },
      "Nothing Phone (3a)": {
        "brand": "Nothing",
        "model": "Nothing Phone (3a)",
        "category": "Smartphone",
        "releaseYear": 2025,
        "deviceWeightG": 201,
        "metals": {
          "goldG": 0.03357,
          "silverG": 0.33507,
          "copperG": 16.08,
          "palladiumG": 0.01347,
          "platinumG": 0.0006
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.03357,
            "percent": "0.01670%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.33507,
            "percent": "0.16670%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.01347,
            "percent": "0.00670%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0006,
            "percent": "0.00030%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 16.08,
            "percent": "8.00000%"
          }
        ]
      }
    }
  },
  "Laptop / PC": {
    "Apple": {
      "MacBook Air M1 (13-inch)": {
        "brand": "Apple",
        "model": "MacBook Air M1 (13-inch)",
        "category": "Laptop / PC",
        "releaseYear": 2020,
        "deviceWeightG": 1290,
        "metals": {
          "goldG": 0.2322,
          "silverG": 1.393,
          "copperG": 329,
          "palladiumG": 0.0826,
          "platinumG": 0.00439
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2322,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.393,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 329,
            "percent": "25.50388%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0826,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00439,
            "percent": "0.00034%"
          }
        ]
      },
      "MacBook Air M2 (13.6-inch)": {
        "brand": "Apple",
        "model": "MacBook Air M2 (13.6-inch)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1240,
        "metals": {
          "goldG": 0.2232,
          "silverG": 1.339,
          "copperG": 316.2,
          "palladiumG": 0.0794,
          "platinumG": 0.00422
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2232,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.339,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 316.2,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0794,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00422,
            "percent": "0.00034%"
          }
        ]
      },
      "MacBook Air M2 (15.3-inch)": {
        "brand": "Apple",
        "model": "MacBook Air M2 (15.3-inch)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1510,
        "metals": {
          "goldG": 0.2718,
          "silverG": 1.631,
          "copperG": 385.1,
          "palladiumG": 0.0966,
          "platinumG": 0.00513
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2718,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.631,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 385.1,
            "percent": "25.50331%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0966,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00513,
            "percent": "0.00034%"
          }
        ]
      },
      "MacBook Air M3 (13.6-inch)": {
        "brand": "Apple",
        "model": "MacBook Air M3 (13.6-inch)",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1240,
        "metals": {
          "goldG": 0.2232,
          "silverG": 1.339,
          "copperG": 316.2,
          "palladiumG": 0.0794,
          "platinumG": 0.00422
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2232,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.339,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 316.2,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0794,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00422,
            "percent": "0.00034%"
          }
        ]
      },
      "MacBook Air M3 (15.3-inch)": {
        "brand": "Apple",
        "model": "MacBook Air M3 (15.3-inch)",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1510,
        "metals": {
          "goldG": 0.2718,
          "silverG": 1.631,
          "copperG": 385.1,
          "palladiumG": 0.0966,
          "platinumG": 0.00513
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2718,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.631,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 385.1,
            "percent": "25.50331%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0966,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00513,
            "percent": "0.00034%"
          }
        ]
      },
      "MacBook Pro 13-inch (M1)": {
        "brand": "Apple",
        "model": "MacBook Pro 13-inch (M1)",
        "category": "Laptop / PC",
        "releaseYear": 2020,
        "deviceWeightG": 1400,
        "metals": {
          "goldG": 0.252,
          "silverG": 1.512,
          "copperG": 357,
          "palladiumG": 0.0896,
          "platinumG": 0.00476
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.252,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.512,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 357,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0896,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00476,
            "percent": "0.00034%"
          }
        ]
      },
      "MacBook Pro 13-inch (M2)": {
        "brand": "Apple",
        "model": "MacBook Pro 13-inch (M2)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1400,
        "metals": {
          "goldG": 0.252,
          "silverG": 1.512,
          "copperG": 357,
          "palladiumG": 0.0896,
          "platinumG": 0.00476
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.252,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.512,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 357,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0896,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00476,
            "percent": "0.00034%"
          }
        ]
      },
      "MacBook Pro 14-inch (M1 Pro)": {
        "brand": "Apple",
        "model": "MacBook Pro 14-inch (M1 Pro)",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1600,
        "metals": {
          "goldG": 0.312,
          "silverG": 1.888,
          "copperG": 456,
          "palladiumG": 0.1152,
          "platinumG": 0.00608
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.312,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.888,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 456,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1152,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00608,
            "percent": "0.00038%"
          }
        ]
      },
      "MacBook Pro 14-inch (M2 Pro)": {
        "brand": "Apple",
        "model": "MacBook Pro 14-inch (M2 Pro)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1600,
        "metals": {
          "goldG": 0.312,
          "silverG": 1.888,
          "copperG": 456,
          "palladiumG": 0.1152,
          "platinumG": 0.00608
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.312,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.888,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 456,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1152,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00608,
            "percent": "0.00038%"
          }
        ]
      },
      "MacBook Pro 14-inch (M3)": {
        "brand": "Apple",
        "model": "MacBook Pro 14-inch (M3)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1550,
        "metals": {
          "goldG": 0.279,
          "silverG": 1.674,
          "copperG": 395.3,
          "palladiumG": 0.0992,
          "platinumG": 0.00527
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.279,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.674,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 395.3,
            "percent": "25.50323%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0992,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00527,
            "percent": "0.00034%"
          }
        ]
      },
      "MacBook Pro 14-inch (M3 Pro / Max)": {
        "brand": "Apple",
        "model": "MacBook Pro 14-inch (M3 Pro / Max)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1620,
        "metals": {
          "goldG": 0.3159,
          "silverG": 1.912,
          "copperG": 461.7,
          "palladiumG": 0.1166,
          "platinumG": 0.00616
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3159,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.912,
            "percent": "0.11802%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 461.7,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1166,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00616,
            "percent": "0.00038%"
          }
        ]
      },
      "MacBook Pro 16-inch (M1 Max)": {
        "brand": "Apple",
        "model": "MacBook Pro 16-inch (M1 Max)",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 2200,
        "metals": {
          "goldG": 0.429,
          "silverG": 2.596,
          "copperG": 627,
          "palladiumG": 0.1584,
          "platinumG": 0.00836
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.429,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.596,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 627,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1584,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00836,
            "percent": "0.00038%"
          }
        ]
      },
      "MacBook Pro 16-inch (M2 Max)": {
        "brand": "Apple",
        "model": "MacBook Pro 16-inch (M2 Max)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2150,
        "metals": {
          "goldG": 0.4193,
          "silverG": 2.537,
          "copperG": 612.8,
          "palladiumG": 0.1548,
          "platinumG": 0.00817
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4193,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.537,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 612.8,
            "percent": "28.50233%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1548,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00817,
            "percent": "0.00038%"
          }
        ]
      },
      "MacBook Pro 16-inch (M3 Max)": {
        "brand": "Apple",
        "model": "MacBook Pro 16-inch (M3 Max)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2160,
        "metals": {
          "goldG": 0.4212,
          "silverG": 2.549,
          "copperG": 615.6,
          "palladiumG": 0.1555,
          "platinumG": 0.00821
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4212,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.549,
            "percent": "0.11801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 615.6,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1555,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00821,
            "percent": "0.00038%"
          }
        ]
      },
      "MacBook Pro 13-inch (Intel Retina)": {
        "brand": "Apple",
        "model": "MacBook Pro 13-inch (Intel Retina)",
        "category": "Laptop / PC",
        "releaseYear": 2019,
        "deviceWeightG": 1370,
        "metals": {
          "goldG": 0.2466,
          "silverG": 1.48,
          "copperG": 349.4,
          "palladiumG": 0.0877,
          "platinumG": 0.00466
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2466,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.48,
            "percent": "0.10803%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 349.4,
            "percent": "25.50365%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0877,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00466,
            "percent": "0.00034%"
          }
        ]
      },
      "MacBook Pro 15-inch (Intel Touch Bar)": {
        "brand": "Apple",
        "model": "MacBook Pro 15-inch (Intel Touch Bar)",
        "category": "Laptop / PC",
        "releaseYear": 2018,
        "deviceWeightG": 1830,
        "metals": {
          "goldG": 0.3569,
          "silverG": 2.159,
          "copperG": 521.6,
          "palladiumG": 0.1318,
          "platinumG": 0.00695
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3569,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.159,
            "percent": "0.11798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 521.6,
            "percent": "28.50273%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1318,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00695,
            "percent": "0.00038%"
          }
        ]
      },
      "MacBook Pro 16-inch (Intel i9)": {
        "brand": "Apple",
        "model": "MacBook Pro 16-inch (Intel i9)",
        "category": "Laptop / PC",
        "releaseYear": 2019,
        "deviceWeightG": 2000,
        "metals": {
          "goldG": 0.39,
          "silverG": 2.36,
          "copperG": 570,
          "palladiumG": 0.144,
          "platinumG": 0.0076
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.39,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.36,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 570,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.144,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0076,
            "percent": "0.00038%"
          }
        ]
      }
    },
    "Dell": {
      "Dell XPS 13 (9315)": {
        "brand": "Dell",
        "model": "Dell XPS 13 (9315)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1170,
        "metals": {
          "goldG": 0.2106,
          "silverG": 1.264,
          "copperG": 298.4,
          "palladiumG": 0.0749,
          "platinumG": 0.00398
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2106,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.264,
            "percent": "0.10803%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 298.4,
            "percent": "25.50427%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0749,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00398,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell XPS 13 Plus (9320)": {
        "brand": "Dell",
        "model": "Dell XPS 13 Plus (9320)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1240,
        "metals": {
          "goldG": 0.2232,
          "silverG": 1.339,
          "copperG": 316.2,
          "palladiumG": 0.0794,
          "platinumG": 0.00422
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2232,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.339,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 316.2,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0794,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00422,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell XPS 15 (9520)": {
        "brand": "Dell",
        "model": "Dell XPS 15 (9520)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1900,
        "metals": {
          "goldG": 0.342,
          "silverG": 2.052,
          "copperG": 484.5,
          "palladiumG": 0.1216,
          "platinumG": 0.00646
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.342,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.052,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 484.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1216,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00646,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell XPS 15 (9530)": {
        "brand": "Dell",
        "model": "Dell XPS 15 (9530)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1920,
        "metals": {
          "goldG": 0.3456,
          "silverG": 2.074,
          "copperG": 489.6,
          "palladiumG": 0.1229,
          "platinumG": 0.00653
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3456,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.074,
            "percent": "0.10802%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 489.6,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1229,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00653,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell XPS 17 (9730)": {
        "brand": "Dell",
        "model": "Dell XPS 17 (9730)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2440,
        "metals": {
          "goldG": 0.4758,
          "silverG": 2.879,
          "copperG": 695.4,
          "palladiumG": 0.1757,
          "platinumG": 0.00927
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4758,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.879,
            "percent": "0.11799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 695.4,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1757,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00927,
            "percent": "0.00038%"
          }
        ]
      },
      "Dell Inspiron 14 (5430)": {
        "brand": "Dell",
        "model": "Dell Inspiron 14 (5430)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1540,
        "metals": {
          "goldG": 0.2772,
          "silverG": 1.663,
          "copperG": 392.7,
          "palladiumG": 0.0986,
          "platinumG": 0.00524
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2772,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.663,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 392.7,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0986,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00524,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell Inspiron 15 (3520)": {
        "brand": "Dell",
        "model": "Dell Inspiron 15 (3520)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1680,
        "metals": {
          "goldG": 0.3024,
          "silverG": 1.814,
          "copperG": 428.4,
          "palladiumG": 0.1075,
          "platinumG": 0.00571
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3024,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.814,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 428.4,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1075,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00571,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell Inspiron 15 (3530)": {
        "brand": "Dell",
        "model": "Dell Inspiron 15 (3530)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1660,
        "metals": {
          "goldG": 0.2988,
          "silverG": 1.793,
          "copperG": 423.3,
          "palladiumG": 0.1062,
          "platinumG": 0.00564
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2988,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.793,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 423.3,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1062,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00564,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell Inspiron 16 (5630)": {
        "brand": "Dell",
        "model": "Dell Inspiron 16 (5630)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1820,
        "metals": {
          "goldG": 0.3276,
          "silverG": 1.966,
          "copperG": 464.1,
          "palladiumG": 0.1165,
          "platinumG": 0.00619
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3276,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.966,
            "percent": "0.10802%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 464.1,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1165,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00619,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell Latitude 3420": {
        "brand": "Dell",
        "model": "Dell Latitude 3420",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1520,
        "metals": {
          "goldG": 0.2736,
          "silverG": 1.642,
          "copperG": 387.6,
          "palladiumG": 0.0973,
          "platinumG": 0.00517
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2736,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.642,
            "percent": "0.10803%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 387.6,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0973,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00517,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell Latitude 5420": {
        "brand": "Dell",
        "model": "Dell Latitude 5420",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1400,
        "metals": {
          "goldG": 0.252,
          "silverG": 1.512,
          "copperG": 357,
          "palladiumG": 0.0896,
          "platinumG": 0.00476
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.252,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.512,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 357,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0896,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00476,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell Latitude 5430": {
        "brand": "Dell",
        "model": "Dell Latitude 5430",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1360,
        "metals": {
          "goldG": 0.2448,
          "silverG": 1.469,
          "copperG": 346.8,
          "palladiumG": 0.087,
          "platinumG": 0.00462
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2448,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.469,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 346.8,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.087,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00462,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell Latitude 7440": {
        "brand": "Dell",
        "model": "Dell Latitude 7440",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1330,
        "metals": {
          "goldG": 0.2394,
          "silverG": 1.436,
          "copperG": 339.2,
          "palladiumG": 0.0851,
          "platinumG": 0.00452
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2394,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.436,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 339.2,
            "percent": "25.50376%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0851,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00452,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell Vostro 3520": {
        "brand": "Dell",
        "model": "Dell Vostro 3520",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1690,
        "metals": {
          "goldG": 0.3042,
          "silverG": 1.825,
          "copperG": 431,
          "palladiumG": 0.1082,
          "platinumG": 0.00575
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3042,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.825,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 431,
            "percent": "25.50296%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1082,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00575,
            "percent": "0.00034%"
          }
        ]
      },
      "Dell Alienware m15 R7": {
        "brand": "Dell",
        "model": "Dell Alienware m15 R7",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 2690,
        "metals": {
          "goldG": 0.4977,
          "silverG": 3.013,
          "copperG": 739.8,
          "palladiumG": 0.1829,
          "platinumG": 0.00968
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4977,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.013,
            "percent": "0.11201%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 739.8,
            "percent": "27.50186%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1829,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00968,
            "percent": "0.00036%"
          }
        ]
      },
      "Dell Alienware m16 R1": {
        "brand": "Dell",
        "model": "Dell Alienware m16 R1",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 3250,
        "metals": {
          "goldG": 0.6012,
          "silverG": 3.64,
          "copperG": 893.8,
          "palladiumG": 0.221,
          "platinumG": 0.0117
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.6012,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.64,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 893.8,
            "percent": "27.50154%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.221,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0117,
            "percent": "0.00036%"
          }
        ]
      },
      "Dell Alienware x14 R2": {
        "brand": "Dell",
        "model": "Dell Alienware x14 R2",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1910,
        "metals": {
          "goldG": 0.3534,
          "silverG": 2.139,
          "copperG": 525.3,
          "palladiumG": 0.1299,
          "platinumG": 0.00688
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3534,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.139,
            "percent": "0.11199%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 525.3,
            "percent": "27.50262%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1299,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00688,
            "percent": "0.00036%"
          }
        ]
      },
      "Dell Alienware x16 R1": {
        "brand": "Dell",
        "model": "Dell Alienware x16 R1",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2720,
        "metals": {
          "goldG": 0.5032,
          "silverG": 3.046,
          "copperG": 748,
          "palladiumG": 0.185,
          "platinumG": 0.00979
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.5032,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.046,
            "percent": "0.11199%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 748,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.185,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00979,
            "percent": "0.00036%"
          }
        ]
      },
      "Dell G15 Gaming (5530)": {
        "brand": "Dell",
        "model": "Dell G15 Gaming (5530)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2810,
        "metals": {
          "goldG": 0.5199,
          "silverG": 3.147,
          "copperG": 772.8,
          "palladiumG": 0.1911,
          "platinumG": 0.01012
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.5199,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.147,
            "percent": "0.11199%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 772.8,
            "percent": "27.50178%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1911,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.01012,
            "percent": "0.00036%"
          }
        ]
      },
      "Dell G16 Gaming (7630)": {
        "brand": "Dell",
        "model": "Dell G16 Gaming (7630)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2870,
        "metals": {
          "goldG": 0.531,
          "silverG": 3.214,
          "copperG": 789.3,
          "palladiumG": 0.1952,
          "platinumG": 0.01033
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.531,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.214,
            "percent": "0.11199%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 789.3,
            "percent": "27.50174%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1952,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.01033,
            "percent": "0.00036%"
          }
        ]
      }
    },
    "HP": {
      "HP Pavilion 14": {
        "brand": "HP",
        "model": "HP Pavilion 14",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1410,
        "metals": {
          "goldG": 0.2538,
          "silverG": 1.523,
          "copperG": 359.6,
          "palladiumG": 0.0902,
          "platinumG": 0.00479
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2538,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.523,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 359.6,
            "percent": "25.50355%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0902,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00479,
            "percent": "0.00034%"
          }
        ]
      },
      "HP Pavilion 15": {
        "brand": "HP",
        "model": "HP Pavilion 15",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1750,
        "metals": {
          "goldG": 0.315,
          "silverG": 1.89,
          "copperG": 446.3,
          "palladiumG": 0.112,
          "platinumG": 0.00595
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.315,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.89,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 446.3,
            "percent": "25.50286%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.112,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00595,
            "percent": "0.00034%"
          }
        ]
      },
      "HP Pavilion Plus 14": {
        "brand": "HP",
        "model": "HP Pavilion Plus 14",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1440,
        "metals": {
          "goldG": 0.2592,
          "silverG": 1.555,
          "copperG": 367.2,
          "palladiumG": 0.0922,
          "platinumG": 0.0049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2592,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.555,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 367.2,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0922,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0049,
            "percent": "0.00034%"
          }
        ]
      },
      "HP Pavilion x360 14": {
        "brand": "HP",
        "model": "HP Pavilion x360 14",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1510,
        "metals": {
          "goldG": 0.2718,
          "silverG": 1.631,
          "copperG": 385.1,
          "palladiumG": 0.0966,
          "platinumG": 0.00513
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2718,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.631,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 385.1,
            "percent": "25.50331%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0966,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00513,
            "percent": "0.00034%"
          }
        ]
      },
      "HP Envy 13": {
        "brand": "HP",
        "model": "HP Envy 13",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1300,
        "metals": {
          "goldG": 0.234,
          "silverG": 1.404,
          "copperG": 331.5,
          "palladiumG": 0.0832,
          "platinumG": 0.00442
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.234,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.404,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 331.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0832,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00442,
            "percent": "0.00034%"
          }
        ]
      },
      "HP Envy x360 15": {
        "brand": "HP",
        "model": "HP Envy x360 15",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1820,
        "metals": {
          "goldG": 0.3276,
          "silverG": 1.966,
          "copperG": 464.1,
          "palladiumG": 0.1165,
          "platinumG": 0.00619
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3276,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.966,
            "percent": "0.10802%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 464.1,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1165,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00619,
            "percent": "0.00034%"
          }
        ]
      },
      "HP Envy 16": {
        "brand": "HP",
        "model": "HP Envy 16",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2340,
        "metals": {
          "goldG": 0.4563,
          "silverG": 2.761,
          "copperG": 666.9,
          "palladiumG": 0.1685,
          "platinumG": 0.00889
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4563,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.761,
            "percent": "0.11799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 666.9,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1685,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00889,
            "percent": "0.00038%"
          }
        ]
      },
      "HP Spectre x360 13.5": {
        "brand": "HP",
        "model": "HP Spectre x360 13.5",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1360,
        "metals": {
          "goldG": 0.2448,
          "silverG": 1.469,
          "copperG": 346.8,
          "palladiumG": 0.087,
          "platinumG": 0.00462
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2448,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.469,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 346.8,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.087,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00462,
            "percent": "0.00034%"
          }
        ]
      },
      "HP Spectre x360 14 (2024)": {
        "brand": "HP",
        "model": "HP Spectre x360 14 (2024)",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1440,
        "metals": {
          "goldG": 0.2592,
          "silverG": 1.555,
          "copperG": 367.2,
          "palladiumG": 0.0922,
          "platinumG": 0.0049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2592,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.555,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 367.2,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0922,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0049,
            "percent": "0.00034%"
          }
        ]
      },
      "HP Spectre x360 16": {
        "brand": "HP",
        "model": "HP Spectre x360 16",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2010,
        "metals": {
          "goldG": 0.3618,
          "silverG": 2.171,
          "copperG": 512.6,
          "palladiumG": 0.1286,
          "platinumG": 0.00683
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3618,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.171,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 512.6,
            "percent": "25.50249%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1286,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00683,
            "percent": "0.00034%"
          }
        ]
      },
      "HP OMEN 16 Gaming": {
        "brand": "HP",
        "model": "HP OMEN 16 Gaming",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2370,
        "metals": {
          "goldG": 0.4385,
          "silverG": 2.654,
          "copperG": 651.8,
          "palladiumG": 0.1612,
          "platinumG": 0.00853
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4385,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.654,
            "percent": "0.11198%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 651.8,
            "percent": "27.50211%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1612,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00853,
            "percent": "0.00036%"
          }
        ]
      },
      "HP OMEN 17 Gaming": {
        "brand": "HP",
        "model": "HP OMEN 17 Gaming",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2780,
        "metals": {
          "goldG": 0.5143,
          "silverG": 3.114,
          "copperG": 764.5,
          "palladiumG": 0.189,
          "platinumG": 0.01001
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.5143,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.114,
            "percent": "0.11201%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 764.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.189,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.01001,
            "percent": "0.00036%"
          }
        ]
      },
      "HP OMEN Transcend 16": {
        "brand": "HP",
        "model": "HP OMEN Transcend 16",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2170,
        "metals": {
          "goldG": 0.4014,
          "silverG": 2.43,
          "copperG": 596.8,
          "palladiumG": 0.1476,
          "platinumG": 0.00781
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4014,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.43,
            "percent": "0.11198%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 596.8,
            "percent": "27.50230%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1476,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00781,
            "percent": "0.00036%"
          }
        ]
      },
      "HP Victus 15 Gaming": {
        "brand": "HP",
        "model": "HP Victus 15 Gaming",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2290,
        "metals": {
          "goldG": 0.4237,
          "silverG": 2.565,
          "copperG": 629.8,
          "palladiumG": 0.1557,
          "platinumG": 0.00824
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4237,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.565,
            "percent": "0.11201%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 629.8,
            "percent": "27.50218%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1557,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00824,
            "percent": "0.00036%"
          }
        ]
      },
      "HP Victus 16 Gaming": {
        "brand": "HP",
        "model": "HP Victus 16 Gaming",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2460,
        "metals": {
          "goldG": 0.4551,
          "silverG": 2.755,
          "copperG": 676.5,
          "palladiumG": 0.1673,
          "platinumG": 0.00886
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4551,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.755,
            "percent": "0.11199%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 676.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1673,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00886,
            "percent": "0.00036%"
          }
        ]
      },
      "HP 14s (Intel/AMD)": {
        "brand": "HP",
        "model": "HP 14s (Intel/AMD)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1460,
        "metals": {
          "goldG": 0.2628,
          "silverG": 1.577,
          "copperG": 372.3,
          "palladiumG": 0.0934,
          "platinumG": 0.00496
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2628,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.577,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 372.3,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0934,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00496,
            "percent": "0.00034%"
          }
        ]
      },
      "HP 15s (Intel/AMD)": {
        "brand": "HP",
        "model": "HP 15s (Intel/AMD)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1690,
        "metals": {
          "goldG": 0.3042,
          "silverG": 1.825,
          "copperG": 431,
          "palladiumG": 0.1082,
          "platinumG": 0.00575
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3042,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.825,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 431,
            "percent": "25.50296%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1082,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00575,
            "percent": "0.00034%"
          }
        ]
      },
      "HP 250 G9 Business": {
        "brand": "HP",
        "model": "HP 250 G9 Business",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1740,
        "metals": {
          "goldG": 0.3132,
          "silverG": 1.879,
          "copperG": 443.7,
          "palladiumG": 0.1114,
          "platinumG": 0.00592
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3132,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.879,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 443.7,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1114,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00592,
            "percent": "0.00034%"
          }
        ]
      },
      "HP EliteBook 840 G8": {
        "brand": "HP",
        "model": "HP EliteBook 840 G8",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1320,
        "metals": {
          "goldG": 0.2376,
          "silverG": 1.426,
          "copperG": 336.6,
          "palladiumG": 0.0845,
          "platinumG": 0.00449
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2376,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.426,
            "percent": "0.10803%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 336.6,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0845,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00449,
            "percent": "0.00034%"
          }
        ]
      },
      "HP EliteBook 840 G9": {
        "brand": "HP",
        "model": "HP EliteBook 840 G9",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1360,
        "metals": {
          "goldG": 0.2448,
          "silverG": 1.469,
          "copperG": 346.8,
          "palladiumG": 0.087,
          "platinumG": 0.00462
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2448,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.469,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 346.8,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.087,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00462,
            "percent": "0.00034%"
          }
        ]
      },
      "HP EliteBook 840 G10": {
        "brand": "HP",
        "model": "HP EliteBook 840 G10",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1360,
        "metals": {
          "goldG": 0.2448,
          "silverG": 1.469,
          "copperG": 346.8,
          "palladiumG": 0.087,
          "platinumG": 0.00462
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2448,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.469,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 346.8,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.087,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00462,
            "percent": "0.00034%"
          }
        ]
      },
      "HP ProBook 440 G9": {
        "brand": "HP",
        "model": "HP ProBook 440 G9",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1380,
        "metals": {
          "goldG": 0.2484,
          "silverG": 1.49,
          "copperG": 351.9,
          "palladiumG": 0.0883,
          "platinumG": 0.00469
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2484,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.49,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 351.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0883,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00469,
            "percent": "0.00034%"
          }
        ]
      },
      "HP ProBook 450 G10": {
        "brand": "HP",
        "model": "HP ProBook 450 G10",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1790,
        "metals": {
          "goldG": 0.3222,
          "silverG": 1.933,
          "copperG": 456.5,
          "palladiumG": 0.1146,
          "platinumG": 0.00609
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3222,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.933,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 456.5,
            "percent": "25.50279%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1146,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00609,
            "percent": "0.00034%"
          }
        ]
      },
      "HP ZBook Studio G9 Workstation": {
        "brand": "HP",
        "model": "HP ZBook Studio G9 Workstation",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1730,
        "metals": {
          "goldG": 0.3374,
          "silverG": 2.041,
          "copperG": 493.1,
          "palladiumG": 0.1246,
          "platinumG": 0.00657
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3374,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.041,
            "percent": "0.11798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 493.1,
            "percent": "28.50289%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1246,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00657,
            "percent": "0.00038%"
          }
        ]
      }
    },
    "Lenovo": {
      "ThinkPad X1 Carbon Gen 9": {
        "brand": "Lenovo",
        "model": "ThinkPad X1 Carbon Gen 9",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1130,
        "metals": {
          "goldG": 0.2034,
          "silverG": 1.22,
          "copperG": 288.2,
          "palladiumG": 0.0723,
          "platinumG": 0.00384
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2034,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.22,
            "percent": "0.10796%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 288.2,
            "percent": "25.50442%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0723,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00384,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkPad X1 Carbon Gen 10": {
        "brand": "Lenovo",
        "model": "ThinkPad X1 Carbon Gen 10",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1120,
        "metals": {
          "goldG": 0.2016,
          "silverG": 1.21,
          "copperG": 285.6,
          "palladiumG": 0.0717,
          "platinumG": 0.00381
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2016,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.21,
            "percent": "0.10804%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 285.6,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0717,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00381,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkPad X1 Carbon Gen 11": {
        "brand": "Lenovo",
        "model": "ThinkPad X1 Carbon Gen 11",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1120,
        "metals": {
          "goldG": 0.2016,
          "silverG": 1.21,
          "copperG": 285.6,
          "palladiumG": 0.0717,
          "platinumG": 0.00381
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2016,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.21,
            "percent": "0.10804%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 285.6,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0717,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00381,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkPad X1 Carbon Gen 12": {
        "brand": "Lenovo",
        "model": "ThinkPad X1 Carbon Gen 12",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1090,
        "metals": {
          "goldG": 0.1962,
          "silverG": 1.177,
          "copperG": 278,
          "palladiumG": 0.0698,
          "platinumG": 0.00371
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.1962,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.177,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 278,
            "percent": "25.50459%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0698,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00371,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkPad X1 Yoga Gen 8": {
        "brand": "Lenovo",
        "model": "ThinkPad X1 Yoga Gen 8",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1380,
        "metals": {
          "goldG": 0.2484,
          "silverG": 1.49,
          "copperG": 351.9,
          "palladiumG": 0.0883,
          "platinumG": 0.00469
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2484,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.49,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 351.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0883,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00469,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkPad T14 Gen 3": {
        "brand": "Lenovo",
        "model": "ThinkPad T14 Gen 3",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1330,
        "metals": {
          "goldG": 0.2394,
          "silverG": 1.436,
          "copperG": 339.2,
          "palladiumG": 0.0851,
          "platinumG": 0.00452
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2394,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.436,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 339.2,
            "percent": "25.50376%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0851,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00452,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkPad T14 Gen 4": {
        "brand": "Lenovo",
        "model": "ThinkPad T14 Gen 4",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1320,
        "metals": {
          "goldG": 0.2376,
          "silverG": 1.426,
          "copperG": 336.6,
          "palladiumG": 0.0845,
          "platinumG": 0.00449
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2376,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.426,
            "percent": "0.10803%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 336.6,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0845,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00449,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkPad T14s Gen 4": {
        "brand": "Lenovo",
        "model": "ThinkPad T14s Gen 4",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1250,
        "metals": {
          "goldG": 0.225,
          "silverG": 1.35,
          "copperG": 318.8,
          "palladiumG": 0.08,
          "platinumG": 0.00425
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.225,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.35,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 318.8,
            "percent": "25.50400%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.08,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00425,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkPad E14 Gen 4": {
        "brand": "Lenovo",
        "model": "ThinkPad E14 Gen 4",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1590,
        "metals": {
          "goldG": 0.2862,
          "silverG": 1.717,
          "copperG": 405.5,
          "palladiumG": 0.1018,
          "platinumG": 0.00541
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2862,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.717,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 405.5,
            "percent": "25.50314%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1018,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00541,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkPad E15 Gen 4": {
        "brand": "Lenovo",
        "model": "ThinkPad E15 Gen 4",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1780,
        "metals": {
          "goldG": 0.3204,
          "silverG": 1.922,
          "copperG": 453.9,
          "palladiumG": 0.1139,
          "platinumG": 0.00605
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3204,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.922,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 453.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1139,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00605,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkPad E16 Gen 1": {
        "brand": "Lenovo",
        "model": "ThinkPad E16 Gen 1",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1770,
        "metals": {
          "goldG": 0.3186,
          "silverG": 1.912,
          "copperG": 451.4,
          "palladiumG": 0.1133,
          "platinumG": 0.00602
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3186,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.912,
            "percent": "0.10802%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 451.4,
            "percent": "25.50282%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1133,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00602,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkPad P1 Gen 6 Workstation": {
        "brand": "Lenovo",
        "model": "ThinkPad P1 Gen 6 Workstation",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1780,
        "metals": {
          "goldG": 0.3471,
          "silverG": 2.1,
          "copperG": 507.3,
          "palladiumG": 0.1282,
          "platinumG": 0.00676
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3471,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.1,
            "percent": "0.11798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 507.3,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1282,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00676,
            "percent": "0.00038%"
          }
        ]
      },
      "ThinkBook 14 Gen 5": {
        "brand": "Lenovo",
        "model": "ThinkBook 14 Gen 5",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1420,
        "metals": {
          "goldG": 0.2556,
          "silverG": 1.534,
          "copperG": 362.1,
          "palladiumG": 0.0909,
          "platinumG": 0.00483
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2556,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.534,
            "percent": "0.10803%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 362.1,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0909,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00483,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkBook 15 Gen 5": {
        "brand": "Lenovo",
        "model": "ThinkBook 15 Gen 5",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1700,
        "metals": {
          "goldG": 0.306,
          "silverG": 1.836,
          "copperG": 433.5,
          "palladiumG": 0.1088,
          "platinumG": 0.00578
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.306,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.836,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 433.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1088,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00578,
            "percent": "0.00034%"
          }
        ]
      },
      "ThinkBook 16p Gen 4": {
        "brand": "Lenovo",
        "model": "ThinkBook 16p Gen 4",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2200,
        "metals": {
          "goldG": 0.429,
          "silverG": 2.596,
          "copperG": 627,
          "palladiumG": 0.1584,
          "platinumG": 0.00836
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.429,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.596,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 627,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1584,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00836,
            "percent": "0.00038%"
          }
        ]
      },
      "IdeaPad Slim 1": {
        "brand": "Lenovo",
        "model": "IdeaPad Slim 1",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1400,
        "metals": {
          "goldG": 0.252,
          "silverG": 1.512,
          "copperG": 357,
          "palladiumG": 0.0896,
          "platinumG": 0.00476
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.252,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.512,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 357,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0896,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00476,
            "percent": "0.00034%"
          }
        ]
      },
      "IdeaPad Slim 3": {
        "brand": "Lenovo",
        "model": "IdeaPad Slim 3",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1620,
        "metals": {
          "goldG": 0.2916,
          "silverG": 1.75,
          "copperG": 413.1,
          "palladiumG": 0.1037,
          "platinumG": 0.00551
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2916,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.75,
            "percent": "0.10802%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 413.1,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1037,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00551,
            "percent": "0.00034%"
          }
        ]
      },
      "IdeaPad Slim 5": {
        "brand": "Lenovo",
        "model": "IdeaPad Slim 5",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1850,
        "metals": {
          "goldG": 0.333,
          "silverG": 1.998,
          "copperG": 471.8,
          "palladiumG": 0.1184,
          "platinumG": 0.00629
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.333,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.998,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 471.8,
            "percent": "25.50270%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1184,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00629,
            "percent": "0.00034%"
          }
        ]
      },
      "IdeaPad Slim 5i Pro": {
        "brand": "Lenovo",
        "model": "IdeaPad Slim 5i Pro",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1950,
        "metals": {
          "goldG": 0.351,
          "silverG": 2.106,
          "copperG": 497.3,
          "palladiumG": 0.1248,
          "platinumG": 0.00663
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.351,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.106,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 497.3,
            "percent": "25.50256%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1248,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00663,
            "percent": "0.00034%"
          }
        ]
      },
      "IdeaPad Gaming 3": {
        "brand": "Lenovo",
        "model": "IdeaPad Gaming 3",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 2315,
        "metals": {
          "goldG": 0.4283,
          "silverG": 2.593,
          "copperG": 636.6,
          "palladiumG": 0.1574,
          "platinumG": 0.00833
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4283,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.593,
            "percent": "0.11201%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 636.6,
            "percent": "27.49892%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1574,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00833,
            "percent": "0.00036%"
          }
        ]
      },
      "Legion 5 Pro": {
        "brand": "Lenovo",
        "model": "Legion 5 Pro",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2550,
        "metals": {
          "goldG": 0.4718,
          "silverG": 2.856,
          "copperG": 701.3,
          "palladiumG": 0.1734,
          "platinumG": 0.00918
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4718,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.856,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 701.3,
            "percent": "27.50196%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1734,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00918,
            "percent": "0.00036%"
          }
        ]
      },
      "Legion 7i Pro": {
        "brand": "Lenovo",
        "model": "Legion 7i Pro",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2800,
        "metals": {
          "goldG": 0.518,
          "silverG": 3.136,
          "copperG": 770,
          "palladiumG": 0.1904,
          "platinumG": 0.01008
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.518,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.136,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 770,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1904,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.01008,
            "percent": "0.00036%"
          }
        ]
      },
      "Legion Slim 5": {
        "brand": "Lenovo",
        "model": "Legion Slim 5",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2400,
        "metals": {
          "goldG": 0.444,
          "silverG": 2.688,
          "copperG": 660,
          "palladiumG": 0.1632,
          "platinumG": 0.00864
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.444,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.688,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 660,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1632,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00864,
            "percent": "0.00036%"
          }
        ]
      },
      "LOQ 15 Gaming": {
        "brand": "Lenovo",
        "model": "LOQ 15 Gaming",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 2400,
        "metals": {
          "goldG": 0.444,
          "silverG": 2.688,
          "copperG": 660,
          "palladiumG": 0.1632,
          "platinumG": 0.00864
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.444,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.688,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 660,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1632,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00864,
            "percent": "0.00036%"
          }
        ]
      },
      "Yoga 6": {
        "brand": "Lenovo",
        "model": "Yoga 6",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1370,
        "metals": {
          "goldG": 0.2466,
          "silverG": 1.48,
          "copperG": 349.4,
          "palladiumG": 0.0877,
          "platinumG": 0.00466
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2466,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.48,
            "percent": "0.10803%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 349.4,
            "percent": "25.50365%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0877,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00466,
            "percent": "0.00034%"
          }
        ]
      },
      "Yoga 7i 2-in-1": {
        "brand": "Lenovo",
        "model": "Yoga 7i 2-in-1",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1490,
        "metals": {
          "goldG": 0.2682,
          "silverG": 1.609,
          "copperG": 380,
          "palladiumG": 0.0954,
          "platinumG": 0.00507
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2682,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.609,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 380,
            "percent": "25.50336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0954,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00507,
            "percent": "0.00034%"
          }
        ]
      },
      "Yoga 9i Dual-Screen": {
        "brand": "Lenovo",
        "model": "Yoga 9i Dual-Screen",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1380,
        "metals": {
          "goldG": 0.2484,
          "silverG": 1.49,
          "copperG": 351.9,
          "palladiumG": 0.0883,
          "platinumG": 0.00469
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2484,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.49,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 351.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0883,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00469,
            "percent": "0.00034%"
          }
        ]
      },
      "Yoga Slim 7 Pro OLED": {
        "brand": "Lenovo",
        "model": "Yoga Slim 7 Pro OLED",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1420,
        "metals": {
          "goldG": 0.2556,
          "silverG": 1.534,
          "copperG": 362.1,
          "palladiumG": 0.0909,
          "platinumG": 0.00483
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2556,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.534,
            "percent": "0.10803%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 362.1,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0909,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00483,
            "percent": "0.00034%"
          }
        ]
      }
    },
    "Asus": {
      "ZenBook 13 OLED": {
        "brand": "Asus",
        "model": "ZenBook 13 OLED",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1140,
        "metals": {
          "goldG": 0.2052,
          "silverG": 1.231,
          "copperG": 290.7,
          "palladiumG": 0.073,
          "platinumG": 0.00388
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2052,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.231,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 290.7,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.073,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00388,
            "percent": "0.00034%"
          }
        ]
      },
      "ZenBook 14 OLED (UX3405)": {
        "brand": "Asus",
        "model": "ZenBook 14 OLED (UX3405)",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1200,
        "metals": {
          "goldG": 0.216,
          "silverG": 1.296,
          "copperG": 306,
          "palladiumG": 0.0768,
          "platinumG": 0.00408
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.216,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.296,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 306,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0768,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00408,
            "percent": "0.00034%"
          }
        ]
      },
      "ZenBook 14 Flip OLED": {
        "brand": "Asus",
        "model": "ZenBook 14 Flip OLED",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1500,
        "metals": {
          "goldG": 0.27,
          "silverG": 1.62,
          "copperG": 382.5,
          "palladiumG": 0.096,
          "platinumG": 0.0051
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.27,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.62,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 382.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.096,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0051,
            "percent": "0.00034%"
          }
        ]
      },
      "ZenBook 15 OLED": {
        "brand": "Asus",
        "model": "ZenBook 15 OLED",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1400,
        "metals": {
          "goldG": 0.252,
          "silverG": 1.512,
          "copperG": 357,
          "palladiumG": 0.0896,
          "platinumG": 0.00476
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.252,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.512,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 357,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0896,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00476,
            "percent": "0.00034%"
          }
        ]
      },
      "ZenBook Duo (2024 Dual Screen)": {
        "brand": "Asus",
        "model": "ZenBook Duo (2024 Dual Screen)",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1650,
        "metals": {
          "goldG": 0.297,
          "silverG": 1.782,
          "copperG": 420.8,
          "palladiumG": 0.1056,
          "platinumG": 0.00561
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.297,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.782,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 420.8,
            "percent": "25.50303%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1056,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00561,
            "percent": "0.00034%"
          }
        ]
      },
      "ZenBook Pro 16X OLED": {
        "brand": "Asus",
        "model": "ZenBook Pro 16X OLED",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2400,
        "metals": {
          "goldG": 0.468,
          "silverG": 2.832,
          "copperG": 684,
          "palladiumG": 0.1728,
          "platinumG": 0.00912
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.468,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.832,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 684,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1728,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00912,
            "percent": "0.00038%"
          }
        ]
      },
      "ROG Zephyrus G14 (2023)": {
        "brand": "Asus",
        "model": "ROG Zephyrus G14 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1720,
        "metals": {
          "goldG": 0.3182,
          "silverG": 1.926,
          "copperG": 473,
          "palladiumG": 0.117,
          "platinumG": 0.00619
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3182,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.926,
            "percent": "0.11198%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 473,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.117,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00619,
            "percent": "0.00036%"
          }
        ]
      },
      "ROG Zephyrus G14 (2024)": {
        "brand": "Asus",
        "model": "ROG Zephyrus G14 (2024)",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1570,
        "metals": {
          "goldG": 0.2905,
          "silverG": 1.758,
          "copperG": 431.8,
          "palladiumG": 0.1068,
          "platinumG": 0.00565
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2905,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.758,
            "percent": "0.11197%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 431.8,
            "percent": "27.50318%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1068,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00565,
            "percent": "0.00036%"
          }
        ]
      },
      "ROG Zephyrus G16 (2024)": {
        "brand": "Asus",
        "model": "ROG Zephyrus G16 (2024)",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1850,
        "metals": {
          "goldG": 0.3423,
          "silverG": 2.072,
          "copperG": 508.8,
          "palladiumG": 0.1258,
          "platinumG": 0.00666
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3423,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.072,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 508.8,
            "percent": "27.50270%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1258,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00666,
            "percent": "0.00036%"
          }
        ]
      },
      "ROG Zephyrus M16": {
        "brand": "Asus",
        "model": "ROG Zephyrus M16",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2100,
        "metals": {
          "goldG": 0.3885,
          "silverG": 2.352,
          "copperG": 577.5,
          "palladiumG": 0.1428,
          "platinumG": 0.00756
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3885,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.352,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 577.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1428,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00756,
            "percent": "0.00036%"
          }
        ]
      },
      "ROG Strix G15": {
        "brand": "Asus",
        "model": "ROG Strix G15",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 2300,
        "metals": {
          "goldG": 0.4255,
          "silverG": 2.576,
          "copperG": 632.5,
          "palladiumG": 0.1564,
          "platinumG": 0.00828
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4255,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.576,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 632.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1564,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00828,
            "percent": "0.00036%"
          }
        ]
      },
      "ROG Strix G16": {
        "brand": "Asus",
        "model": "ROG Strix G16",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2500,
        "metals": {
          "goldG": 0.4625,
          "silverG": 2.8,
          "copperG": 687.5,
          "palladiumG": 0.17,
          "platinumG": 0.009
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4625,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.8,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 687.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.17,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.009,
            "percent": "0.00036%"
          }
        ]
      },
      "ROG Strix SCAR 16": {
        "brand": "Asus",
        "model": "ROG Strix SCAR 16",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2600,
        "metals": {
          "goldG": 0.481,
          "silverG": 2.912,
          "copperG": 715,
          "palladiumG": 0.1768,
          "platinumG": 0.00936
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.481,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.912,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 715,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1768,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00936,
            "percent": "0.00036%"
          }
        ]
      },
      "ROG Strix SCAR 18": {
        "brand": "Asus",
        "model": "ROG Strix SCAR 18",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 3100,
        "metals": {
          "goldG": 0.5735,
          "silverG": 3.472,
          "copperG": 852.5,
          "palladiumG": 0.2108,
          "platinumG": 0.01116
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.5735,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.472,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 852.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.2108,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.01116,
            "percent": "0.00036%"
          }
        ]
      },
      "ROG Flow X13": {
        "brand": "Asus",
        "model": "ROG Flow X13",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1300,
        "metals": {
          "goldG": 0.2405,
          "silverG": 1.456,
          "copperG": 357.5,
          "palladiumG": 0.0884,
          "platinumG": 0.00468
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2405,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.456,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 357.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0884,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00468,
            "percent": "0.00036%"
          }
        ]
      },
      "ROG Flow Z13 Tablet": {
        "brand": "Asus",
        "model": "ROG Flow Z13 Tablet",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1180,
        "metals": {
          "goldG": 0.2183,
          "silverG": 1.322,
          "copperG": 324.5,
          "palladiumG": 0.0802,
          "platinumG": 0.00425
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2183,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.322,
            "percent": "0.11203%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 324.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0802,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00425,
            "percent": "0.00036%"
          }
        ]
      },
      "TUF Gaming F15": {
        "brand": "Asus",
        "model": "TUF Gaming F15",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2200,
        "metals": {
          "goldG": 0.407,
          "silverG": 2.464,
          "copperG": 605,
          "palladiumG": 0.1496,
          "platinumG": 0.00792
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.407,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.464,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 605,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1496,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00792,
            "percent": "0.00036%"
          }
        ]
      },
      "TUF Gaming A15": {
        "brand": "Asus",
        "model": "TUF Gaming A15",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2200,
        "metals": {
          "goldG": 0.407,
          "silverG": 2.464,
          "copperG": 605,
          "palladiumG": 0.1496,
          "platinumG": 0.00792
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.407,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.464,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 605,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1496,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00792,
            "percent": "0.00036%"
          }
        ]
      },
      "TUF Gaming F17": {
        "brand": "Asus",
        "model": "TUF Gaming F17",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2600,
        "metals": {
          "goldG": 0.481,
          "silverG": 2.912,
          "copperG": 715,
          "palladiumG": 0.1768,
          "platinumG": 0.00936
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.481,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.912,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 715,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1768,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00936,
            "percent": "0.00036%"
          }
        ]
      },
      "VivoBook 14": {
        "brand": "Asus",
        "model": "VivoBook 14",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1500,
        "metals": {
          "goldG": 0.27,
          "silverG": 1.62,
          "copperG": 382.5,
          "palladiumG": 0.096,
          "platinumG": 0.0051
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.27,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.62,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 382.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.096,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0051,
            "percent": "0.00034%"
          }
        ]
      },
      "VivoBook 15 (X1502)": {
        "brand": "Asus",
        "model": "VivoBook 15 (X1502)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1700,
        "metals": {
          "goldG": 0.306,
          "silverG": 1.836,
          "copperG": 433.5,
          "palladiumG": 0.1088,
          "platinumG": 0.00578
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.306,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.836,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 433.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1088,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00578,
            "percent": "0.00034%"
          }
        ]
      },
      "VivoBook S 14 OLED": {
        "brand": "Asus",
        "model": "VivoBook S 14 OLED",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1500,
        "metals": {
          "goldG": 0.27,
          "silverG": 1.62,
          "copperG": 382.5,
          "palladiumG": 0.096,
          "platinumG": 0.0051
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.27,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.62,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 382.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.096,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0051,
            "percent": "0.00034%"
          }
        ]
      },
      "VivoBook S 15 OLED": {
        "brand": "Asus",
        "model": "VivoBook S 15 OLED",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1700,
        "metals": {
          "goldG": 0.306,
          "silverG": 1.836,
          "copperG": 433.5,
          "palladiumG": 0.1088,
          "platinumG": 0.00578
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.306,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.836,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 433.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1088,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00578,
            "percent": "0.00034%"
          }
        ]
      },
      "VivoBook Pro 15 OLED": {
        "brand": "Asus",
        "model": "VivoBook Pro 15 OLED",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1800,
        "metals": {
          "goldG": 0.351,
          "silverG": 2.124,
          "copperG": 513,
          "palladiumG": 0.1296,
          "platinumG": 0.00684
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.351,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.124,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 513,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1296,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00684,
            "percent": "0.00038%"
          }
        ]
      },
      "VivoBook Go 15": {
        "brand": "Asus",
        "model": "VivoBook Go 15",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1630,
        "metals": {
          "goldG": 0.2934,
          "silverG": 1.76,
          "copperG": 415.7,
          "palladiumG": 0.1043,
          "platinumG": 0.00554
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2934,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.76,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 415.7,
            "percent": "25.50307%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1043,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00554,
            "percent": "0.00034%"
          }
        ]
      },
      "ExpertBook B1": {
        "brand": "Asus",
        "model": "ExpertBook B1",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1450,
        "metals": {
          "goldG": 0.261,
          "silverG": 1.566,
          "copperG": 369.8,
          "palladiumG": 0.0928,
          "platinumG": 0.00493
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.261,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.566,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 369.8,
            "percent": "25.50345%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0928,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00493,
            "percent": "0.00034%"
          }
        ]
      },
      "ExpertBook B9": {
        "brand": "Asus",
        "model": "ExpertBook B9",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 990,
        "metals": {
          "goldG": 0.1782,
          "silverG": 1.069,
          "copperG": 252.5,
          "palladiumG": 0.0634,
          "platinumG": 0.00337
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.1782,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.069,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 252.5,
            "percent": "25.50505%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0634,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00337,
            "percent": "0.00034%"
          }
        ]
      }
    },
    "Acer": {
      "Acer Aspire 3": {
        "brand": "Acer",
        "model": "Acer Aspire 3",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1700,
        "metals": {
          "goldG": 0.306,
          "silverG": 1.836,
          "copperG": 433.5,
          "palladiumG": 0.1088,
          "platinumG": 0.00578
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.306,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.836,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 433.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1088,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00578,
            "percent": "0.00034%"
          }
        ]
      },
      "Acer Aspire 5": {
        "brand": "Acer",
        "model": "Acer Aspire 5",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1780,
        "metals": {
          "goldG": 0.3204,
          "silverG": 1.922,
          "copperG": 453.9,
          "palladiumG": 0.1139,
          "platinumG": 0.00605
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3204,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.922,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 453.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1139,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00605,
            "percent": "0.00034%"
          }
        ]
      },
      "Acer Aspire 7 Gaming": {
        "brand": "Acer",
        "model": "Acer Aspire 7 Gaming",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2150,
        "metals": {
          "goldG": 0.3978,
          "silverG": 2.408,
          "copperG": 591.3,
          "palladiumG": 0.1462,
          "platinumG": 0.00774
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3978,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.408,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 591.3,
            "percent": "27.50233%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1462,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00774,
            "percent": "0.00036%"
          }
        ]
      },
      "Acer Swift 3 / Go 14": {
        "brand": "Acer",
        "model": "Acer Swift 3 / Go 14",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1250,
        "metals": {
          "goldG": 0.225,
          "silverG": 1.35,
          "copperG": 318.8,
          "palladiumG": 0.08,
          "platinumG": 0.00425
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.225,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.35,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 318.8,
            "percent": "25.50400%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.08,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00425,
            "percent": "0.00034%"
          }
        ]
      },
      "Acer Swift X 14": {
        "brand": "Acer",
        "model": "Acer Swift X 14",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1550,
        "metals": {
          "goldG": 0.3023,
          "silverG": 1.829,
          "copperG": 441.7,
          "palladiumG": 0.1116,
          "platinumG": 0.00589
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3023,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.829,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 441.7,
            "percent": "28.49677%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1116,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00589,
            "percent": "0.00038%"
          }
        ]
      },
      "Acer Swift Edge 16 OLED": {
        "brand": "Acer",
        "model": "Acer Swift Edge 16 OLED",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1230,
        "metals": {
          "goldG": 0.2214,
          "silverG": 1.328,
          "copperG": 313.7,
          "palladiumG": 0.0787,
          "platinumG": 0.00418
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2214,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.328,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 313.7,
            "percent": "25.50407%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0787,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00418,
            "percent": "0.00034%"
          }
        ]
      },
      "Acer Predator Helios 300": {
        "brand": "Acer",
        "model": "Acer Predator Helios 300",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 2500,
        "metals": {
          "goldG": 0.4625,
          "silverG": 2.8,
          "copperG": 687.5,
          "palladiumG": 0.17,
          "platinumG": 0.009
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4625,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.8,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 687.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.17,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.009,
            "percent": "0.00036%"
          }
        ]
      },
      "Acer Predator Helios 16": {
        "brand": "Acer",
        "model": "Acer Predator Helios 16",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2600,
        "metals": {
          "goldG": 0.481,
          "silverG": 2.912,
          "copperG": 715,
          "palladiumG": 0.1768,
          "platinumG": 0.00936
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.481,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.912,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 715,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1768,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00936,
            "percent": "0.00036%"
          }
        ]
      },
      "Acer Predator Helios 18": {
        "brand": "Acer",
        "model": "Acer Predator Helios 18",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 3250,
        "metals": {
          "goldG": 0.6012,
          "silverG": 3.64,
          "copperG": 893.8,
          "palladiumG": 0.221,
          "platinumG": 0.0117
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.6012,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.64,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 893.8,
            "percent": "27.50154%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.221,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0117,
            "percent": "0.00036%"
          }
        ]
      },
      "Acer Predator Triton 14": {
        "brand": "Acer",
        "model": "Acer Predator Triton 14",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1700,
        "metals": {
          "goldG": 0.3145,
          "silverG": 1.904,
          "copperG": 467.5,
          "palladiumG": 0.1156,
          "platinumG": 0.00612
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3145,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.904,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 467.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1156,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00612,
            "percent": "0.00036%"
          }
        ]
      },
      "Acer Nitro 5": {
        "brand": "Acer",
        "model": "Acer Nitro 5",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 2500,
        "metals": {
          "goldG": 0.4625,
          "silverG": 2.8,
          "copperG": 687.5,
          "palladiumG": 0.17,
          "platinumG": 0.009
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4625,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.8,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 687.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.17,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.009,
            "percent": "0.00036%"
          }
        ]
      },
      "Acer Nitro 16": {
        "brand": "Acer",
        "model": "Acer Nitro 16",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2700,
        "metals": {
          "goldG": 0.4995,
          "silverG": 3.024,
          "copperG": 742.5,
          "palladiumG": 0.1836,
          "platinumG": 0.00972
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4995,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.024,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 742.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1836,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00972,
            "percent": "0.00036%"
          }
        ]
      },
      "Acer Nitro V 15": {
        "brand": "Acer",
        "model": "Acer Nitro V 15",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2110,
        "metals": {
          "goldG": 0.3903,
          "silverG": 2.363,
          "copperG": 580.3,
          "palladiumG": 0.1435,
          "platinumG": 0.0076
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3903,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.363,
            "percent": "0.11199%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 580.3,
            "percent": "27.50237%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1435,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0076,
            "percent": "0.00036%"
          }
        ]
      },
      "Acer TravelMate P2": {
        "brand": "Acer",
        "model": "Acer TravelMate P2",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1600,
        "metals": {
          "goldG": 0.288,
          "silverG": 1.728,
          "copperG": 408,
          "palladiumG": 0.1024,
          "platinumG": 0.00544
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.288,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.728,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 408,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1024,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00544,
            "percent": "0.00034%"
          }
        ]
      },
      "Acer Extensa 15": {
        "brand": "Acer",
        "model": "Acer Extensa 15",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1900,
        "metals": {
          "goldG": 0.342,
          "silverG": 2.052,
          "copperG": 484.5,
          "palladiumG": 0.1216,
          "platinumG": 0.00646
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.342,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.052,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 484.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1216,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00646,
            "percent": "0.00034%"
          }
        ]
      }
    },
    "Samsung": {
      "Samsung Galaxy Book": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Book",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1550,
        "metals": {
          "goldG": 0.279,
          "silverG": 1.674,
          "copperG": 395.3,
          "palladiumG": 0.0992,
          "platinumG": 0.00527
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.279,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.674,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 395.3,
            "percent": "25.50323%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0992,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00527,
            "percent": "0.00034%"
          }
        ]
      },
      "Samsung Galaxy Book2": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Book2",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1570,
        "metals": {
          "goldG": 0.2826,
          "silverG": 1.696,
          "copperG": 400.4,
          "palladiumG": 0.1005,
          "platinumG": 0.00534
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2826,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.696,
            "percent": "0.10803%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 400.4,
            "percent": "25.50318%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1005,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00534,
            "percent": "0.00034%"
          }
        ]
      },
      "Samsung Galaxy Book2 Pro 360": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Book2 Pro 360",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1410,
        "metals": {
          "goldG": 0.2538,
          "silverG": 1.523,
          "copperG": 359.6,
          "palladiumG": 0.0902,
          "platinumG": 0.00479
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2538,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.523,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 359.6,
            "percent": "25.50355%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0902,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00479,
            "percent": "0.00034%"
          }
        ]
      },
      "Samsung Galaxy Book3 360": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Book3 360",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1460,
        "metals": {
          "goldG": 0.2628,
          "silverG": 1.577,
          "copperG": 372.3,
          "palladiumG": 0.0934,
          "platinumG": 0.00496
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2628,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.577,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 372.3,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0934,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00496,
            "percent": "0.00034%"
          }
        ]
      },
      "Samsung Galaxy Book3 Pro": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Book3 Pro",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1560,
        "metals": {
          "goldG": 0.2808,
          "silverG": 1.685,
          "copperG": 397.8,
          "palladiumG": 0.0998,
          "platinumG": 0.0053
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2808,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.685,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 397.8,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0998,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0053,
            "percent": "0.00034%"
          }
        ]
      },
      "Samsung Galaxy Book3 Pro 360": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Book3 Pro 360",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1660,
        "metals": {
          "goldG": 0.2988,
          "silverG": 1.793,
          "copperG": 423.3,
          "palladiumG": 0.1062,
          "platinumG": 0.00564
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2988,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.793,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 423.3,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1062,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00564,
            "percent": "0.00034%"
          }
        ]
      },
      "Samsung Galaxy Book3 Ultra": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Book3 Ultra",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1790,
        "metals": {
          "goldG": 0.3312,
          "silverG": 2.005,
          "copperG": 492.3,
          "palladiumG": 0.1217,
          "platinumG": 0.00644
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3312,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.005,
            "percent": "0.11201%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 492.3,
            "percent": "27.50279%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1217,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00644,
            "percent": "0.00036%"
          }
        ]
      },
      "Samsung Galaxy Book4": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Book4",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1580,
        "metals": {
          "goldG": 0.2844,
          "silverG": 1.706,
          "copperG": 402.9,
          "palladiumG": 0.1011,
          "platinumG": 0.00537
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2844,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.706,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 402.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1011,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00537,
            "percent": "0.00034%"
          }
        ]
      },
      "Samsung Galaxy Book4 360": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Book4 360",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1460,
        "metals": {
          "goldG": 0.2628,
          "silverG": 1.577,
          "copperG": 372.3,
          "palladiumG": 0.0934,
          "platinumG": 0.00496
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2628,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.577,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 372.3,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0934,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00496,
            "percent": "0.00034%"
          }
        ]
      },
      "Samsung Galaxy Book4 Pro": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Book4 Pro",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1230,
        "metals": {
          "goldG": 0.2214,
          "silverG": 1.328,
          "copperG": 313.7,
          "palladiumG": 0.0787,
          "platinumG": 0.00418
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2214,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.328,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 313.7,
            "percent": "25.50407%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0787,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00418,
            "percent": "0.00034%"
          }
        ]
      },
      "Samsung Galaxy Book4 Pro 360": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Book4 Pro 360",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1660,
        "metals": {
          "goldG": 0.2988,
          "silverG": 1.793,
          "copperG": 423.3,
          "palladiumG": 0.1062,
          "platinumG": 0.00564
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2988,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.793,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 423.3,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1062,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00564,
            "percent": "0.00034%"
          }
        ]
      },
      "Samsung Galaxy Book4 Ultra": {
        "brand": "Samsung",
        "model": "Samsung Galaxy Book4 Ultra",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1860,
        "metals": {
          "goldG": 0.3441,
          "silverG": 2.083,
          "copperG": 511.5,
          "palladiumG": 0.1265,
          "platinumG": 0.0067
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3441,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.083,
            "percent": "0.11199%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 511.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1265,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0067,
            "percent": "0.00036%"
          }
        ]
      }
    },
    "MSI": {
      "MSI GF63 Thin": {
        "brand": "MSI",
        "model": "MSI GF63 Thin",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1860,
        "metals": {
          "goldG": 0.3441,
          "silverG": 2.083,
          "copperG": 511.5,
          "palladiumG": 0.1265,
          "platinumG": 0.0067
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3441,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.083,
            "percent": "0.11199%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 511.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1265,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0067,
            "percent": "0.00036%"
          }
        ]
      },
      "MSI Cyborg 15": {
        "brand": "MSI",
        "model": "MSI Cyborg 15",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1980,
        "metals": {
          "goldG": 0.3663,
          "silverG": 2.218,
          "copperG": 544.5,
          "palladiumG": 0.1346,
          "platinumG": 0.00713
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3663,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.218,
            "percent": "0.11202%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 544.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1346,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00713,
            "percent": "0.00036%"
          }
        ]
      },
      "MSI Katana 15": {
        "brand": "MSI",
        "model": "MSI Katana 15",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2250,
        "metals": {
          "goldG": 0.4163,
          "silverG": 2.52,
          "copperG": 618.8,
          "palladiumG": 0.153,
          "platinumG": 0.0081
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4163,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.52,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 618.8,
            "percent": "27.50222%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.153,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0081,
            "percent": "0.00036%"
          }
        ]
      },
      "MSI Sword 15": {
        "brand": "MSI",
        "model": "MSI Sword 15",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 2250,
        "metals": {
          "goldG": 0.4163,
          "silverG": 2.52,
          "copperG": 618.8,
          "palladiumG": 0.153,
          "platinumG": 0.0081
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4163,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.52,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 618.8,
            "percent": "27.50222%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.153,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0081,
            "percent": "0.00036%"
          }
        ]
      },
      "MSI Stealth 14 Studio": {
        "brand": "MSI",
        "model": "MSI Stealth 14 Studio",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1700,
        "metals": {
          "goldG": 0.3145,
          "silverG": 1.904,
          "copperG": 467.5,
          "palladiumG": 0.1156,
          "platinumG": 0.00612
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3145,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.904,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 467.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1156,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00612,
            "percent": "0.00036%"
          }
        ]
      },
      "MSI Stealth 16 Studio": {
        "brand": "MSI",
        "model": "MSI Stealth 16 Studio",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1990,
        "metals": {
          "goldG": 0.3682,
          "silverG": 2.229,
          "copperG": 547.3,
          "palladiumG": 0.1353,
          "platinumG": 0.00716
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3682,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.229,
            "percent": "0.11201%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 547.3,
            "percent": "27.50251%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1353,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00716,
            "percent": "0.00036%"
          }
        ]
      },
      "MSI Raider GE68 HX": {
        "brand": "MSI",
        "model": "MSI Raider GE68 HX",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2700,
        "metals": {
          "goldG": 0.4995,
          "silverG": 3.024,
          "copperG": 742.5,
          "palladiumG": 0.1836,
          "platinumG": 0.00972
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4995,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.024,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 742.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1836,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00972,
            "percent": "0.00036%"
          }
        ]
      },
      "MSI Titan GT77 HX": {
        "brand": "MSI",
        "model": "MSI Titan GT77 HX",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 3300,
        "metals": {
          "goldG": 0.6105,
          "silverG": 3.696,
          "copperG": 907.5,
          "palladiumG": 0.2244,
          "platinumG": 0.01188
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.6105,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.696,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 907.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.2244,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.01188,
            "percent": "0.00036%"
          }
        ]
      },
      "MSI Modern 14": {
        "brand": "MSI",
        "model": "MSI Modern 14",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1400,
        "metals": {
          "goldG": 0.252,
          "silverG": 1.512,
          "copperG": 357,
          "palladiumG": 0.0896,
          "platinumG": 0.00476
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.252,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.512,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 357,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0896,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00476,
            "percent": "0.00034%"
          }
        ]
      },
      "MSI Modern 15": {
        "brand": "MSI",
        "model": "MSI Modern 15",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1700,
        "metals": {
          "goldG": 0.306,
          "silverG": 1.836,
          "copperG": 433.5,
          "palladiumG": 0.1088,
          "platinumG": 0.00578
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.306,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.836,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 433.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1088,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00578,
            "percent": "0.00034%"
          }
        ]
      },
      "MSI Prestige 14 EVO": {
        "brand": "MSI",
        "model": "MSI Prestige 14 EVO",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1490,
        "metals": {
          "goldG": 0.2682,
          "silverG": 1.609,
          "copperG": 380,
          "palladiumG": 0.0954,
          "platinumG": 0.00507
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2682,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.609,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 380,
            "percent": "25.50336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0954,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00507,
            "percent": "0.00034%"
          }
        ]
      },
      "MSI Prestige 16 Studio": {
        "brand": "MSI",
        "model": "MSI Prestige 16 Studio",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1900,
        "metals": {
          "goldG": 0.3705,
          "silverG": 2.242,
          "copperG": 541.5,
          "palladiumG": 0.1368,
          "platinumG": 0.00722
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3705,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.242,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 541.5,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1368,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00722,
            "percent": "0.00038%"
          }
        ]
      },
      "MSI Creator Z16": {
        "brand": "MSI",
        "model": "MSI Creator Z16",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 2200,
        "metals": {
          "goldG": 0.429,
          "silverG": 2.596,
          "copperG": 627,
          "palladiumG": 0.1584,
          "platinumG": 0.00836
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.429,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.596,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 627,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1584,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00836,
            "percent": "0.00038%"
          }
        ]
      },
      "MSI Bravo 15": {
        "brand": "MSI",
        "model": "MSI Bravo 15",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2250,
        "metals": {
          "goldG": 0.4163,
          "silverG": 2.52,
          "copperG": 618.8,
          "palladiumG": 0.153,
          "platinumG": 0.0081
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4163,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.52,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 618.8,
            "percent": "27.50222%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.153,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0081,
            "percent": "0.00036%"
          }
        ]
      }
    },
    "Microsoft": {
      "Surface Laptop 3 (13.5-inch)": {
        "brand": "Microsoft",
        "model": "Surface Laptop 3 (13.5-inch)",
        "category": "Laptop / PC",
        "releaseYear": 2019,
        "deviceWeightG": 1265,
        "metals": {
          "goldG": 0.2277,
          "silverG": 1.366,
          "copperG": 322.6,
          "palladiumG": 0.081,
          "platinumG": 0.0043
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2277,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.366,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 322.6,
            "percent": "25.50198%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.081,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0043,
            "percent": "0.00034%"
          }
        ]
      },
      "Surface Laptop 4 (13.5-inch)": {
        "brand": "Microsoft",
        "model": "Surface Laptop 4 (13.5-inch)",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1265,
        "metals": {
          "goldG": 0.2277,
          "silverG": 1.366,
          "copperG": 322.6,
          "palladiumG": 0.081,
          "platinumG": 0.0043
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2277,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.366,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 322.6,
            "percent": "25.50198%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.081,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0043,
            "percent": "0.00034%"
          }
        ]
      },
      "Surface Laptop 5 (13.5-inch)": {
        "brand": "Microsoft",
        "model": "Surface Laptop 5 (13.5-inch)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1297,
        "metals": {
          "goldG": 0.2335,
          "silverG": 1.401,
          "copperG": 330.7,
          "palladiumG": 0.083,
          "platinumG": 0.00441
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2335,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.401,
            "percent": "0.10802%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 330.7,
            "percent": "25.49730%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.083,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00441,
            "percent": "0.00034%"
          }
        ]
      },
      "Surface Laptop 5 (15-inch)": {
        "brand": "Microsoft",
        "model": "Surface Laptop 5 (15-inch)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1545,
        "metals": {
          "goldG": 0.2781,
          "silverG": 1.669,
          "copperG": 394,
          "palladiumG": 0.0989,
          "platinumG": 0.00525
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2781,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.669,
            "percent": "0.10803%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 394,
            "percent": "25.50162%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0989,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00525,
            "percent": "0.00034%"
          }
        ]
      },
      "Surface Laptop 6 (13.5-inch)": {
        "brand": "Microsoft",
        "model": "Surface Laptop 6 (13.5-inch)",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1380,
        "metals": {
          "goldG": 0.2484,
          "silverG": 1.49,
          "copperG": 351.9,
          "palladiumG": 0.0883,
          "platinumG": 0.00469
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2484,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.49,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 351.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0883,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00469,
            "percent": "0.00034%"
          }
        ]
      },
      "Surface Laptop Studio": {
        "brand": "Microsoft",
        "model": "Surface Laptop Studio",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1820,
        "metals": {
          "goldG": 0.3549,
          "silverG": 2.148,
          "copperG": 518.7,
          "palladiumG": 0.131,
          "platinumG": 0.00692
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3549,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.148,
            "percent": "0.11802%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 518.7,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.131,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00692,
            "percent": "0.00038%"
          }
        ]
      },
      "Surface Laptop Studio 2": {
        "brand": "Microsoft",
        "model": "Surface Laptop Studio 2",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1980,
        "metals": {
          "goldG": 0.3861,
          "silverG": 2.336,
          "copperG": 564.3,
          "palladiumG": 0.1426,
          "platinumG": 0.00752
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3861,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.336,
            "percent": "0.11798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 564.3,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1426,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00752,
            "percent": "0.00038%"
          }
        ]
      },
      "Surface Laptop Go 2": {
        "brand": "Microsoft",
        "model": "Surface Laptop Go 2",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1127,
        "metals": {
          "goldG": 0.2029,
          "silverG": 1.217,
          "copperG": 287.4,
          "palladiumG": 0.0721,
          "platinumG": 0.00383
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2029,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.217,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 287.4,
            "percent": "25.50133%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0721,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00383,
            "percent": "0.00034%"
          }
        ]
      },
      "Surface Laptop Go 3": {
        "brand": "Microsoft",
        "model": "Surface Laptop Go 3",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1130,
        "metals": {
          "goldG": 0.2034,
          "silverG": 1.22,
          "copperG": 288.2,
          "palladiumG": 0.0723,
          "platinumG": 0.00384
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2034,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.22,
            "percent": "0.10796%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 288.2,
            "percent": "25.50442%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0723,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00384,
            "percent": "0.00034%"
          }
        ]
      },
      "Surface Pro 7": {
        "brand": "Microsoft",
        "model": "Surface Pro 7",
        "category": "Laptop / PC",
        "releaseYear": 2019,
        "deviceWeightG": 775,
        "metals": {
          "goldG": 0.1395,
          "silverG": 0.837,
          "copperG": 197.6,
          "palladiumG": 0.0496,
          "platinumG": 0.00264
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.1395,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.837,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 197.6,
            "percent": "25.49677%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0496,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00264,
            "percent": "0.00034%"
          }
        ]
      },
      "Surface Pro 8": {
        "brand": "Microsoft",
        "model": "Surface Pro 8",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 891,
        "metals": {
          "goldG": 0.1604,
          "silverG": 0.962,
          "copperG": 227.2,
          "palladiumG": 0.057,
          "platinumG": 0.00303
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.1604,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.962,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 227.2,
            "percent": "25.49944%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.057,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00303,
            "percent": "0.00034%"
          }
        ]
      },
      "Surface Pro 9": {
        "brand": "Microsoft",
        "model": "Surface Pro 9",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 879,
        "metals": {
          "goldG": 0.1582,
          "silverG": 0.949,
          "copperG": 224.1,
          "palladiumG": 0.0563,
          "platinumG": 0.00299
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.1582,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.949,
            "percent": "0.10796%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 224.1,
            "percent": "25.49488%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0563,
            "percent": "0.00641%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00299,
            "percent": "0.00034%"
          }
        ]
      },
      "Surface Pro 10": {
        "brand": "Microsoft",
        "model": "Surface Pro 10",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 879,
        "metals": {
          "goldG": 0.1582,
          "silverG": 0.949,
          "copperG": 224.1,
          "palladiumG": 0.0563,
          "platinumG": 0.00299
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.1582,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.949,
            "percent": "0.10796%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 224.1,
            "percent": "25.49488%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0563,
            "percent": "0.00641%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00299,
            "percent": "0.00034%"
          }
        ]
      },
      "Surface Book 3 (13.5-inch)": {
        "brand": "Microsoft",
        "model": "Surface Book 3 (13.5-inch)",
        "category": "Laptop / PC",
        "releaseYear": 2020,
        "deviceWeightG": 1534,
        "metals": {
          "goldG": 0.2991,
          "silverG": 1.81,
          "copperG": 437.2,
          "palladiumG": 0.1104,
          "platinumG": 0.00583
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2991,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.81,
            "percent": "0.11799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 437.2,
            "percent": "28.50065%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1104,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00583,
            "percent": "0.00038%"
          }
        ]
      },
      "Surface Book 3 (15-inch)": {
        "brand": "Microsoft",
        "model": "Surface Book 3 (15-inch)",
        "category": "Laptop / PC",
        "releaseYear": 2020,
        "deviceWeightG": 1905,
        "metals": {
          "goldG": 0.3715,
          "silverG": 2.248,
          "copperG": 542.9,
          "palladiumG": 0.1372,
          "platinumG": 0.00724
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3715,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.248,
            "percent": "0.11801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 542.9,
            "percent": "28.49869%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1372,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00724,
            "percent": "0.00038%"
          }
        ]
      }
    },
    "Xiaomi": {
      "Xiaomi Mi Notebook 14": {
        "brand": "Xiaomi",
        "model": "Xiaomi Mi Notebook 14",
        "category": "Laptop / PC",
        "releaseYear": 2020,
        "deviceWeightG": 1500,
        "metals": {
          "goldG": 0.27,
          "silverG": 1.62,
          "copperG": 382.5,
          "palladiumG": 0.096,
          "platinumG": 0.0051
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.27,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.62,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 382.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.096,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0051,
            "percent": "0.00034%"
          }
        ]
      },
      "Xiaomi Mi Notebook 14 Horizon Edition": {
        "brand": "Xiaomi",
        "model": "Xiaomi Mi Notebook 14 Horizon Edition",
        "category": "Laptop / PC",
        "releaseYear": 2020,
        "deviceWeightG": 1350,
        "metals": {
          "goldG": 0.243,
          "silverG": 1.458,
          "copperG": 344.3,
          "palladiumG": 0.0864,
          "platinumG": 0.00459
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.243,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.458,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 344.3,
            "percent": "25.50370%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0864,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00459,
            "percent": "0.00034%"
          }
        ]
      },
      "Xiaomi Mi Notebook Pro": {
        "brand": "Xiaomi",
        "model": "Xiaomi Mi Notebook Pro",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1460,
        "metals": {
          "goldG": 0.2628,
          "silverG": 1.577,
          "copperG": 372.3,
          "palladiumG": 0.0934,
          "platinumG": 0.00496
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2628,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.577,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 372.3,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0934,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00496,
            "percent": "0.00034%"
          }
        ]
      },
      "Xiaomi Mi Notebook Ultra": {
        "brand": "Xiaomi",
        "model": "Xiaomi Mi Notebook Ultra",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1700,
        "metals": {
          "goldG": 0.306,
          "silverG": 1.836,
          "copperG": 433.5,
          "palladiumG": 0.1088,
          "platinumG": 0.00578
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.306,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.836,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 433.5,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1088,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00578,
            "percent": "0.00034%"
          }
        ]
      },
      "RedmiBook 15 e-Learning": {
        "brand": "Xiaomi",
        "model": "RedmiBook 15 e-Learning",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1800,
        "metals": {
          "goldG": 0.324,
          "silverG": 1.944,
          "copperG": 459,
          "palladiumG": 0.1152,
          "platinumG": 0.00612
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.324,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.944,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 459,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1152,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00612,
            "percent": "0.00034%"
          }
        ]
      },
      "RedmiBook 15 Pro": {
        "brand": "Xiaomi",
        "model": "RedmiBook 15 Pro",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1800,
        "metals": {
          "goldG": 0.324,
          "silverG": 1.944,
          "copperG": 459,
          "palladiumG": 0.1152,
          "platinumG": 0.00612
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.324,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.944,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 459,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1152,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00612,
            "percent": "0.00034%"
          }
        ]
      },
      "RedmiBook Pro 14 (2023)": {
        "brand": "Xiaomi",
        "model": "RedmiBook Pro 14 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1460,
        "metals": {
          "goldG": 0.2628,
          "silverG": 1.577,
          "copperG": 372.3,
          "palladiumG": 0.0934,
          "platinumG": 0.00496
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2628,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.577,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 372.3,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0934,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00496,
            "percent": "0.00034%"
          }
        ]
      },
      "RedmiBook Pro 15 (2023)": {
        "brand": "Xiaomi",
        "model": "RedmiBook Pro 15 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1780,
        "metals": {
          "goldG": 0.3204,
          "silverG": 1.922,
          "copperG": 453.9,
          "palladiumG": 0.1139,
          "platinumG": 0.00605
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3204,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.922,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 453.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1139,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00605,
            "percent": "0.00034%"
          }
        ]
      },
      "Redmi G Gaming Laptop": {
        "brand": "Xiaomi",
        "model": "Redmi G Gaming Laptop",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 2500,
        "metals": {
          "goldG": 0.4625,
          "silverG": 2.8,
          "copperG": 687.5,
          "palladiumG": 0.17,
          "platinumG": 0.009
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4625,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.8,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 687.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.17,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.009,
            "percent": "0.00036%"
          }
        ]
      }
    },
    "Realme": {
      "Realme Book (Slim) i3": {
        "brand": "Realme",
        "model": "Realme Book (Slim) i3",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1380,
        "metals": {
          "goldG": 0.2484,
          "silverG": 1.49,
          "copperG": 351.9,
          "palladiumG": 0.0883,
          "platinumG": 0.00469
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2484,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.49,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 351.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0883,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00469,
            "percent": "0.00034%"
          }
        ]
      },
      "Realme Book (Slim) i5": {
        "brand": "Realme",
        "model": "Realme Book (Slim) i5",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1380,
        "metals": {
          "goldG": 0.2484,
          "silverG": 1.49,
          "copperG": 351.9,
          "palladiumG": 0.0883,
          "platinumG": 0.00469
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2484,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.49,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 351.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0883,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00469,
            "percent": "0.00034%"
          }
        ]
      },
      "Realme Book Prime": {
        "brand": "Realme",
        "model": "Realme Book Prime",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1370,
        "metals": {
          "goldG": 0.2466,
          "silverG": 1.48,
          "copperG": 349.4,
          "palladiumG": 0.0877,
          "platinumG": 0.00466
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2466,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.48,
            "percent": "0.10803%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 349.4,
            "percent": "25.50365%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0877,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00466,
            "percent": "0.00034%"
          }
        ]
      },
      "Realme Book Enhanced Edition": {
        "brand": "Realme",
        "model": "Realme Book Enhanced Edition",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1370,
        "metals": {
          "goldG": 0.2466,
          "silverG": 1.48,
          "copperG": 349.4,
          "palladiumG": 0.0877,
          "platinumG": 0.00466
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2466,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.48,
            "percent": "0.10803%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 349.4,
            "percent": "25.50365%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0877,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00466,
            "percent": "0.00034%"
          }
        ]
      }
    },
    "Infinix": {
      "Infinix INBook X1": {
        "brand": "Infinix",
        "model": "Infinix INBook X1",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1480,
        "metals": {
          "goldG": 0.2664,
          "silverG": 1.598,
          "copperG": 377.4,
          "palladiumG": 0.0947,
          "platinumG": 0.00503
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2664,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.598,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 377.4,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0947,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00503,
            "percent": "0.00034%"
          }
        ]
      },
      "Infinix INBook X1 Slim": {
        "brand": "Infinix",
        "model": "Infinix INBook X1 Slim",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1240,
        "metals": {
          "goldG": 0.2232,
          "silverG": 1.339,
          "copperG": 316.2,
          "palladiumG": 0.0794,
          "platinumG": 0.00422
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2232,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.339,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 316.2,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0794,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00422,
            "percent": "0.00034%"
          }
        ]
      },
      "Infinix INBook X2": {
        "brand": "Infinix",
        "model": "Infinix INBook X2",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1240,
        "metals": {
          "goldG": 0.2232,
          "silverG": 1.339,
          "copperG": 316.2,
          "palladiumG": 0.0794,
          "platinumG": 0.00422
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2232,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.339,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 316.2,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0794,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00422,
            "percent": "0.00034%"
          }
        ]
      },
      "Infinix INBook X2 Plus": {
        "brand": "Infinix",
        "model": "Infinix INBook X2 Plus",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1580,
        "metals": {
          "goldG": 0.2844,
          "silverG": 1.706,
          "copperG": 402.9,
          "palladiumG": 0.1011,
          "platinumG": 0.00537
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2844,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.706,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 402.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1011,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00537,
            "percent": "0.00034%"
          }
        ]
      },
      "Infinix INBook Y1 Plus": {
        "brand": "Infinix",
        "model": "Infinix INBook Y1 Plus",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1760,
        "metals": {
          "goldG": 0.3168,
          "silverG": 1.901,
          "copperG": 448.8,
          "palladiumG": 0.1126,
          "platinumG": 0.00598
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3168,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.901,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 448.8,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1126,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00598,
            "percent": "0.00034%"
          }
        ]
      },
      "Infinix ZERO Book 13th Gen": {
        "brand": "Infinix",
        "model": "Infinix ZERO Book 13th Gen",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1800,
        "metals": {
          "goldG": 0.324,
          "silverG": 1.944,
          "copperG": 459,
          "palladiumG": 0.1152,
          "platinumG": 0.00612
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.324,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.944,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 459,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1152,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00612,
            "percent": "0.00034%"
          }
        ]
      },
      "Infinix ZERO Book Ultra": {
        "brand": "Infinix",
        "model": "Infinix ZERO Book Ultra",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1800,
        "metals": {
          "goldG": 0.351,
          "silverG": 2.124,
          "copperG": 513,
          "palladiumG": 0.1296,
          "platinumG": 0.00684
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.351,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.124,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 513,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1296,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00684,
            "percent": "0.00038%"
          }
        ]
      }
    },
    "LG": {
      "LG Gram 14 (2022)": {
        "brand": "LG",
        "model": "LG Gram 14 (2022)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 999,
        "metals": {
          "goldG": 0.1798,
          "silverG": 1.079,
          "copperG": 254.7,
          "palladiumG": 0.0639,
          "platinumG": 0.0034
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.1798,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.079,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 254.7,
            "percent": "25.49550%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0639,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0034,
            "percent": "0.00034%"
          }
        ]
      },
      "LG Gram 14 (2023)": {
        "brand": "LG",
        "model": "LG Gram 14 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 999,
        "metals": {
          "goldG": 0.1798,
          "silverG": 1.079,
          "copperG": 254.7,
          "palladiumG": 0.0639,
          "platinumG": 0.0034
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.1798,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.079,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 254.7,
            "percent": "25.49550%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0639,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0034,
            "percent": "0.00034%"
          }
        ]
      },
      "LG Gram 15 (2023)": {
        "brand": "LG",
        "model": "LG Gram 15 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1140,
        "metals": {
          "goldG": 0.2052,
          "silverG": 1.231,
          "copperG": 290.7,
          "palladiumG": 0.073,
          "platinumG": 0.00388
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2052,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.231,
            "percent": "0.10798%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 290.7,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.073,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00388,
            "percent": "0.00034%"
          }
        ]
      },
      "LG Gram 16 (2023)": {
        "brand": "LG",
        "model": "LG Gram 16 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1199,
        "metals": {
          "goldG": 0.2158,
          "silverG": 1.295,
          "copperG": 305.7,
          "palladiumG": 0.0767,
          "platinumG": 0.00408
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2158,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.295,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 305.7,
            "percent": "25.49625%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0767,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00408,
            "percent": "0.00034%"
          }
        ]
      },
      "LG Gram 17 (2023)": {
        "brand": "LG",
        "model": "LG Gram 17 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1350,
        "metals": {
          "goldG": 0.243,
          "silverG": 1.458,
          "copperG": 344.3,
          "palladiumG": 0.0864,
          "platinumG": 0.00459
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.243,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.458,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 344.3,
            "percent": "25.50370%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0864,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00459,
            "percent": "0.00034%"
          }
        ]
      },
      "LG Gram Style 16": {
        "brand": "LG",
        "model": "LG Gram Style 16",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1230,
        "metals": {
          "goldG": 0.2214,
          "silverG": 1.328,
          "copperG": 313.7,
          "palladiumG": 0.0787,
          "platinumG": 0.00418
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2214,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.328,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 313.7,
            "percent": "25.50407%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0787,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00418,
            "percent": "0.00034%"
          }
        ]
      },
      "LG UltraPC 16": {
        "brand": "LG",
        "model": "LG UltraPC 16",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1600,
        "metals": {
          "goldG": 0.288,
          "silverG": 1.728,
          "copperG": 408,
          "palladiumG": 0.1024,
          "platinumG": 0.00544
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.288,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.728,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 408,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1024,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00544,
            "percent": "0.00034%"
          }
        ]
      }
    },
    "Razer": {
      "Razer Blade 14 (2022)": {
        "brand": "Razer",
        "model": "Razer Blade 14 (2022)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1780,
        "metals": {
          "goldG": 0.3293,
          "silverG": 1.994,
          "copperG": 489.5,
          "palladiumG": 0.121,
          "platinumG": 0.00641
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3293,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.994,
            "percent": "0.11202%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 489.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.121,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00641,
            "percent": "0.00036%"
          }
        ]
      },
      "Razer Blade 14 (2023)": {
        "brand": "Razer",
        "model": "Razer Blade 14 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1840,
        "metals": {
          "goldG": 0.3404,
          "silverG": 2.061,
          "copperG": 506,
          "palladiumG": 0.1251,
          "platinumG": 0.00662
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3404,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.061,
            "percent": "0.11201%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 506,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1251,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00662,
            "percent": "0.00036%"
          }
        ]
      },
      "Razer Blade 15 (2022)": {
        "brand": "Razer",
        "model": "Razer Blade 15 (2022)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 2010,
        "metals": {
          "goldG": 0.3719,
          "silverG": 2.251,
          "copperG": 552.8,
          "palladiumG": 0.1367,
          "platinumG": 0.00724
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3719,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.251,
            "percent": "0.11199%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 552.8,
            "percent": "27.50249%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1367,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00724,
            "percent": "0.00036%"
          }
        ]
      },
      "Razer Blade 15 (2023)": {
        "brand": "Razer",
        "model": "Razer Blade 15 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2010,
        "metals": {
          "goldG": 0.3719,
          "silverG": 2.251,
          "copperG": 552.8,
          "palladiumG": 0.1367,
          "platinumG": 0.00724
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3719,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.251,
            "percent": "0.11199%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 552.8,
            "percent": "27.50249%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1367,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00724,
            "percent": "0.00036%"
          }
        ]
      },
      "Razer Blade 16 (2023)": {
        "brand": "Razer",
        "model": "Razer Blade 16 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2450,
        "metals": {
          "goldG": 0.4533,
          "silverG": 2.744,
          "copperG": 673.8,
          "palladiumG": 0.1666,
          "platinumG": 0.00882
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4533,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.744,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 673.8,
            "percent": "27.50204%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1666,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00882,
            "percent": "0.00036%"
          }
        ]
      },
      "Razer Blade 16 (2024 OLED)": {
        "brand": "Razer",
        "model": "Razer Blade 16 (2024 OLED)",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 2450,
        "metals": {
          "goldG": 0.4533,
          "silverG": 2.744,
          "copperG": 673.8,
          "palladiumG": 0.1666,
          "platinumG": 0.00882
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4533,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.744,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 673.8,
            "percent": "27.50204%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1666,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00882,
            "percent": "0.00036%"
          }
        ]
      },
      "Razer Blade 17 (2022)": {
        "brand": "Razer",
        "model": "Razer Blade 17 (2022)",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 2750,
        "metals": {
          "goldG": 0.5088,
          "silverG": 3.08,
          "copperG": 756.3,
          "palladiumG": 0.187,
          "platinumG": 0.0099
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.5088,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.08,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 756.3,
            "percent": "27.50182%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.187,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0099,
            "percent": "0.00036%"
          }
        ]
      },
      "Razer Blade 18 (2023)": {
        "brand": "Razer",
        "model": "Razer Blade 18 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 3170,
        "metals": {
          "goldG": 0.5865,
          "silverG": 3.55,
          "copperG": 871.8,
          "palladiumG": 0.2156,
          "platinumG": 0.01141
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.5865,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.55,
            "percent": "0.11199%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 871.8,
            "percent": "27.50158%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.2156,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.01141,
            "percent": "0.00036%"
          }
        ]
      },
      "Razer Book 13": {
        "brand": "Razer",
        "model": "Razer Book 13",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1400,
        "metals": {
          "goldG": 0.252,
          "silverG": 1.512,
          "copperG": 357,
          "palladiumG": 0.0896,
          "platinumG": 0.00476
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.252,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.512,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 357,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0896,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00476,
            "percent": "0.00034%"
          }
        ]
      }
    },
    "Honor": {
      "Honor MagicBook 14": {
        "brand": "Honor",
        "model": "Honor MagicBook 14",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1380,
        "metals": {
          "goldG": 0.2484,
          "silverG": 1.49,
          "copperG": 351.9,
          "palladiumG": 0.0883,
          "platinumG": 0.00469
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2484,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.49,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 351.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0883,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00469,
            "percent": "0.00034%"
          }
        ]
      },
      "Honor MagicBook 15": {
        "brand": "Honor",
        "model": "Honor MagicBook 15",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1530,
        "metals": {
          "goldG": 0.2754,
          "silverG": 1.652,
          "copperG": 390.2,
          "palladiumG": 0.0979,
          "platinumG": 0.0052
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2754,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.652,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 390.2,
            "percent": "25.50327%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0979,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0052,
            "percent": "0.00034%"
          }
        ]
      },
      "Honor MagicBook X14 (2023)": {
        "brand": "Honor",
        "model": "Honor MagicBook X14 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1400,
        "metals": {
          "goldG": 0.252,
          "silverG": 1.512,
          "copperG": 357,
          "palladiumG": 0.0896,
          "platinumG": 0.00476
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.252,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.512,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 357,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0896,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00476,
            "percent": "0.00034%"
          }
        ]
      },
      "Honor MagicBook X16 (2023)": {
        "brand": "Honor",
        "model": "Honor MagicBook X16 (2023)",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1750,
        "metals": {
          "goldG": 0.315,
          "silverG": 1.89,
          "copperG": 446.3,
          "palladiumG": 0.112,
          "platinumG": 0.00595
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.315,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.89,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 446.3,
            "percent": "25.50286%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.112,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00595,
            "percent": "0.00034%"
          }
        ]
      },
      "Honor MagicBook Pro 16": {
        "brand": "Honor",
        "model": "Honor MagicBook Pro 16",
        "category": "Laptop / PC",
        "releaseYear": 2024,
        "deviceWeightG": 1790,
        "metals": {
          "goldG": 0.3312,
          "silverG": 2.005,
          "copperG": 492.3,
          "palladiumG": 0.1217,
          "platinumG": 0.00644
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3312,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.005,
            "percent": "0.11201%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 492.3,
            "percent": "27.50279%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1217,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00644,
            "percent": "0.00036%"
          }
        ]
      }
    },
    "Gigabyte": {
      "Gigabyte G5 Gaming": {
        "brand": "Gigabyte",
        "model": "Gigabyte G5 Gaming",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2080,
        "metals": {
          "goldG": 0.3848,
          "silverG": 2.33,
          "copperG": 572,
          "palladiumG": 0.1414,
          "platinumG": 0.00749
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3848,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.33,
            "percent": "0.11202%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 572,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1414,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00749,
            "percent": "0.00036%"
          }
        ]
      },
      "Gigabyte G7 Gaming": {
        "brand": "Gigabyte",
        "model": "Gigabyte G7 Gaming",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2580,
        "metals": {
          "goldG": 0.4773,
          "silverG": 2.89,
          "copperG": 709.5,
          "palladiumG": 0.1754,
          "platinumG": 0.00929
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4773,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.89,
            "percent": "0.11202%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 709.5,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1754,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00929,
            "percent": "0.00036%"
          }
        ]
      },
      "AERO 14 OLED Creator": {
        "brand": "Gigabyte",
        "model": "AERO 14 OLED Creator",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1490,
        "metals": {
          "goldG": 0.2905,
          "silverG": 1.758,
          "copperG": 424.7,
          "palladiumG": 0.1073,
          "platinumG": 0.00566
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2905,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.758,
            "percent": "0.11799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 424.7,
            "percent": "28.50336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1073,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00566,
            "percent": "0.00038%"
          }
        ]
      },
      "AERO 16 OLED Creator": {
        "brand": "Gigabyte",
        "model": "AERO 16 OLED Creator",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2100,
        "metals": {
          "goldG": 0.4095,
          "silverG": 2.478,
          "copperG": 598.5,
          "palladiumG": 0.1512,
          "platinumG": 0.00798
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4095,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.478,
            "percent": "0.11800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 598.5,
            "percent": "28.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1512,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00798,
            "percent": "0.00038%"
          }
        ]
      },
      "AORUS 15 Gaming": {
        "brand": "Gigabyte",
        "model": "AORUS 15 Gaming",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2250,
        "metals": {
          "goldG": 0.4163,
          "silverG": 2.52,
          "copperG": 618.8,
          "palladiumG": 0.153,
          "platinumG": 0.0081
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.4163,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.52,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 618.8,
            "percent": "27.50222%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.153,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0081,
            "percent": "0.00036%"
          }
        ]
      },
      "AORUS 17 Gaming": {
        "brand": "Gigabyte",
        "model": "AORUS 17 Gaming",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 2800,
        "metals": {
          "goldG": 0.518,
          "silverG": 3.136,
          "copperG": 770,
          "palladiumG": 0.1904,
          "platinumG": 0.01008
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.518,
            "percent": "0.01850%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 3.136,
            "percent": "0.11200%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 770,
            "percent": "27.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1904,
            "percent": "0.00680%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.01008,
            "percent": "0.00036%"
          }
        ]
      }
    },
    "VAIO": {
      "VAIO SX14": {
        "brand": "VAIO",
        "model": "VAIO SX14",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1080,
        "metals": {
          "goldG": 0.1944,
          "silverG": 1.166,
          "copperG": 275.4,
          "palladiumG": 0.0691,
          "platinumG": 0.00367
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.1944,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.166,
            "percent": "0.10796%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 275.4,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0691,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00367,
            "percent": "0.00034%"
          }
        ]
      },
      "VAIO FE14": {
        "brand": "VAIO",
        "model": "VAIO FE14",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1550,
        "metals": {
          "goldG": 0.279,
          "silverG": 1.674,
          "copperG": 395.3,
          "palladiumG": 0.0992,
          "platinumG": 0.00527
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.279,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.674,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 395.3,
            "percent": "25.50323%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0992,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00527,
            "percent": "0.00034%"
          }
        ]
      },
      "VAIO FE15": {
        "brand": "VAIO",
        "model": "VAIO FE15",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1750,
        "metals": {
          "goldG": 0.315,
          "silverG": 1.89,
          "copperG": 446.3,
          "palladiumG": 0.112,
          "platinumG": 0.00595
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.315,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.89,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 446.3,
            "percent": "25.50286%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.112,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00595,
            "percent": "0.00034%"
          }
        ]
      },
      "VAIO SE14": {
        "brand": "VAIO",
        "model": "VAIO SE14",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1390,
        "metals": {
          "goldG": 0.2502,
          "silverG": 1.501,
          "copperG": 354.5,
          "palladiumG": 0.089,
          "platinumG": 0.00473
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2502,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.501,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 354.5,
            "percent": "25.50360%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.089,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00473,
            "percent": "0.00034%"
          }
        ]
      },
      "VAIO E15": {
        "brand": "VAIO",
        "model": "VAIO E15",
        "category": "Laptop / PC",
        "releaseYear": 2021,
        "deviceWeightG": 1770,
        "metals": {
          "goldG": 0.3186,
          "silverG": 1.912,
          "copperG": 451.4,
          "palladiumG": 0.1133,
          "platinumG": 0.00602
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3186,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.912,
            "percent": "0.10802%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 451.4,
            "percent": "25.50282%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1133,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00602,
            "percent": "0.00034%"
          }
        ]
      }
    },
    "Dynabook": {
      "Dynabook Portégé X30L": {
        "brand": "Dynabook",
        "model": "Dynabook Portégé X30L",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 904,
        "metals": {
          "goldG": 0.1627,
          "silverG": 0.976,
          "copperG": 230.5,
          "palladiumG": 0.0579,
          "platinumG": 0.00307
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.1627,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 0.976,
            "percent": "0.10796%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 230.5,
            "percent": "25.49779%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0579,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00307,
            "percent": "0.00034%"
          }
        ]
      },
      "Dynabook Portégé X40": {
        "brand": "Dynabook",
        "model": "Dynabook Portégé X40",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1440,
        "metals": {
          "goldG": 0.2592,
          "silverG": 1.555,
          "copperG": 367.2,
          "palladiumG": 0.0922,
          "platinumG": 0.0049
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2592,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.555,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 367.2,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0922,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0049,
            "percent": "0.00034%"
          }
        ]
      },
      "Dynabook Satellite Pro C40": {
        "brand": "Dynabook",
        "model": "Dynabook Satellite Pro C40",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1550,
        "metals": {
          "goldG": 0.279,
          "silverG": 1.674,
          "copperG": 395.3,
          "palladiumG": 0.0992,
          "platinumG": 0.00527
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.279,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.674,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 395.3,
            "percent": "25.50323%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0992,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00527,
            "percent": "0.00034%"
          }
        ]
      },
      "Dynabook Satellite Pro C50": {
        "brand": "Dynabook",
        "model": "Dynabook Satellite Pro C50",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1760,
        "metals": {
          "goldG": 0.3168,
          "silverG": 1.901,
          "copperG": 448.8,
          "palladiumG": 0.1126,
          "platinumG": 0.00598
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3168,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.901,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 448.8,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1126,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00598,
            "percent": "0.00034%"
          }
        ]
      },
      "Dynabook Tecra A40": {
        "brand": "Dynabook",
        "model": "Dynabook Tecra A40",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1450,
        "metals": {
          "goldG": 0.261,
          "silverG": 1.566,
          "copperG": 369.8,
          "palladiumG": 0.0928,
          "platinumG": 0.00493
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.261,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.566,
            "percent": "0.10800%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 369.8,
            "percent": "25.50345%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0928,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00493,
            "percent": "0.00034%"
          }
        ]
      }
    },
    "Huawei": {
      "Huawei MateBook D14": {
        "brand": "Huawei",
        "model": "Huawei MateBook D14",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1380,
        "metals": {
          "goldG": 0.2484,
          "silverG": 1.49,
          "copperG": 351.9,
          "palladiumG": 0.0883,
          "platinumG": 0.00469
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2484,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.49,
            "percent": "0.10797%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 351.9,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0883,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00469,
            "percent": "0.00034%"
          }
        ]
      },
      "Huawei MateBook D15": {
        "brand": "Huawei",
        "model": "Huawei MateBook D15",
        "category": "Laptop / PC",
        "releaseYear": 2022,
        "deviceWeightG": 1560,
        "metals": {
          "goldG": 0.2808,
          "silverG": 1.685,
          "copperG": 397.8,
          "palladiumG": 0.0998,
          "platinumG": 0.0053
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2808,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.685,
            "percent": "0.10801%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 397.8,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0998,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.0053,
            "percent": "0.00034%"
          }
        ]
      },
      "Huawei MateBook 14": {
        "brand": "Huawei",
        "model": "Huawei MateBook 14",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1490,
        "metals": {
          "goldG": 0.2682,
          "silverG": 1.609,
          "copperG": 380,
          "palladiumG": 0.0954,
          "platinumG": 0.00507
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2682,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.609,
            "percent": "0.10799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 380,
            "percent": "25.50336%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0954,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00507,
            "percent": "0.00034%"
          }
        ]
      },
      "Huawei MateBook 16s": {
        "brand": "Huawei",
        "model": "Huawei MateBook 16s",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1990,
        "metals": {
          "goldG": 0.3881,
          "silverG": 2.348,
          "copperG": 567.2,
          "palladiumG": 0.1433,
          "platinumG": 0.00756
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.3881,
            "percent": "0.01950%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 2.348,
            "percent": "0.11799%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 567.2,
            "percent": "28.50251%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.1433,
            "percent": "0.00720%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00756,
            "percent": "0.00038%"
          }
        ]
      },
      "Huawei MateBook X Pro": {
        "brand": "Huawei",
        "model": "Huawei MateBook X Pro",
        "category": "Laptop / PC",
        "releaseYear": 2023,
        "deviceWeightG": 1260,
        "metals": {
          "goldG": 0.2268,
          "silverG": 1.361,
          "copperG": 321.3,
          "palladiumG": 0.0806,
          "platinumG": 0.00428
        },
        "rawMetals": [
          {
            "metal": "Gold (Au)",
            "amountG": 0.2268,
            "percent": "0.01800%"
          },
          {
            "metal": "Silver (Ag)",
            "amountG": 1.361,
            "percent": "0.10802%"
          },
          {
            "metal": "Copper (Cu)",
            "amountG": 321.3,
            "percent": "25.50000%"
          },
          {
            "metal": "Palladium (Pd)",
            "amountG": 0.0806,
            "percent": "0.00640%"
          },
          {
            "metal": "Platinum (Pt)",
            "amountG": 0.00428,
            "percent": "0.00034%"
          }
        ]
      }
    }
  }
};

export function getCategories(): ('Smartphone' | 'Laptop / PC')[] {
  return ['Smartphone', 'Laptop / PC'];
}

export function getBrandsForCategory(category: 'Smartphone' | 'Laptop / PC'): string[] {
  const catData = METAL_DATABASE[category];
  if (!catData) return [];
  return Object.keys(catData);
}

export function getModelsForBrand(category: 'Smartphone' | 'Laptop / PC', brand: string): DeviceModelData[] {
  const catData = METAL_DATABASE[category];
  if (!catData || !catData[brand]) return [];
  return Object.values(catData[brand]);
}

export function getDeviceModelData(
  category: 'Smartphone' | 'Laptop / PC',
  brand: string,
  model: string
): DeviceModelData | undefined {
  const catData = METAL_DATABASE[category];
  if (!catData || !catData[brand]) return undefined;
  return catData[brand][model];
}
