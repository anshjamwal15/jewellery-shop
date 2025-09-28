export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets';
  images: string[];
  featured: boolean;
  materials: string[];
  inStock: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  materials: string[];
}
