export interface Weaver {
  id: string;
  name: string;
  age?: number;
  region: string;
  yearsExperience: number;
  specialization?: string;
  bio?: string;
  portraitImage?: string;
  processImages?: string[];
  story?: string;
  products?: string[];
}

export interface Product {
  id: string;
  name: string;
  collection: CollectionId;
  price: number;
  priceCurrency: "GHS" | "USD" | "EUR";
  description: string;
  images: string[];
  weaver: {
    id: string;
    name: string;
    region: string;
    yearsExperience: number;
  };
  sizes: string[];
  materials: string;
  construction?: string;
  careInstructions: string;
  symbolism?: string;
  featured?: boolean;
}

export interface Collection {
  id: CollectionId;
  name: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  priceTier: string;
  targetAudience: string;
  heroImage: string;
  description_short: string;
  products: string[];
  keyBenefits?: string[];
  colors?: string[];
  occasion?: string[];
  wearerProfile?: string;
}

export type CollectionId = "heritage" | "statesman" | "future";

export const COLLECTIONS = {
  HERITAGE: "heritage",
  STATESMAN: "statesman",
  FUTURE: "future",
} as const;

export const COLLECTION_ORDER: CollectionId[] = ["heritage", "statesman", "future"];
