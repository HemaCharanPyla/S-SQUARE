
export interface PricingItem {
  name: string;
  price: string;
}

export interface PricingCategory {
  category: string;
  items: PricingItem[];
}

export interface GalleryItem {
  id: number;
  url: string;
  category: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}
