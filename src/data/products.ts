import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Eternal Elegance Ring',
    description: 'A timeless solitaire ring featuring a brilliant cut diamond set in 18k white gold. Perfect for engagements or special occasions.',
    price: 2500,
    category: 'rings',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
    ],
    featured: true,
    materials: ['18k White Gold', 'Diamond'],
    inStock: true,
  },
  {
    id: '2',
    name: 'Rose Garden Necklace',
    description: 'Delicate rose gold necklace with intricate floral motifs and pink sapphire accents. A perfect blend of nature and luxury.',
    price: 1800,
    category: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
    ],
    featured: true,
    materials: ['18k Rose Gold', 'Pink Sapphire'],
    inStock: true,
  },
  {
    id: '3',
    name: 'Celestial Drop Earrings',
    description: 'Stunning drop earrings featuring star and moon motifs with sparkling diamonds. Inspired by the night sky.',
    price: 1200,
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
    ],
    featured: false,
    materials: ['14k Yellow Gold', 'Diamond'],
    inStock: true,
  },
  {
    id: '4',
    name: 'Ocean Wave Bracelet',
    description: 'Fluid bracelet design inspired by ocean waves, crafted in sterling silver with blue topaz stones.',
    price: 850,
    category: 'bracelets',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
    ],
    featured: false,
    materials: ['Sterling Silver', 'Blue Topaz'],
    inStock: true,
  },
  {
    id: '5',
    name: 'Vintage Pearl Ring',
    description: 'Classic vintage-inspired ring featuring a lustrous pearl surrounded by intricate gold filigree work.',
    price: 950,
    category: 'rings',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
    ],
    featured: false,
    materials: ['14k Yellow Gold', 'Pearl'],
    inStock: true,
  },
  {
    id: '6',
    name: 'Diamond Cascade Necklace',
    description: 'Luxurious necklace with cascading diamonds that catch light beautifully. A statement piece for special occasions.',
    price: 3200,
    category: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
    ],
    featured: true,
    materials: ['18k White Gold', 'Diamond'],
    inStock: true,
  },
  {
    id: '7',
    name: 'Butterfly Stud Earrings',
    description: 'Delicate butterfly-shaped earrings with colorful gemstone wings. Perfect for everyday elegance.',
    price: 680,
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
    ],
    featured: false,
    materials: ['14k Rose Gold', 'Multi-colored Gemstones'],
    inStock: true,
  },
  {
    id: '8',
    name: 'Infinity Tennis Bracelet',
    description: 'Elegant tennis bracelet with infinity symbol motifs and continuous line of diamonds.',
    price: 2100,
    category: 'bracelets',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
    ],
    featured: true,
    materials: ['18k White Gold', 'Diamond'],
    inStock: true,
  },
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'rings', name: 'Rings', count: products.filter(p => p.category === 'rings').length },
  { id: 'necklaces', name: 'Necklaces', count: products.filter(p => p.category === 'necklaces').length },
  { id: 'earrings', name: 'Earrings', count: products.filter(p => p.category === 'earrings').length },
  { id: 'bracelets', name: 'Bracelets', count: products.filter(p => p.category === 'bracelets').length },
];

export const featuredProducts = products.filter(product => product.featured);
