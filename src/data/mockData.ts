import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: 'Smartphone',
    subcategories: [
      { id: 'mobiles', name: 'Mobiles', image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 'laptops', name: 'Laptops', image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300' },
      { id: 'headphones', name: 'Headphones', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: 'ShirtIcon',
    subcategories: [
      { id: 'mens', name: "Men's Clothing", image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 'womens', name: "Women's Clothing", image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 'accessories', name: 'Accessories', image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  },
  {
    id: 'home',
    name: 'Home & Garden',
    icon: 'Home',
    subcategories: [
      { id: 'furniture', name: 'Furniture', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 'decor', name: 'Home Decor', image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 'kitchen', name: 'Kitchen', image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    icon: 'Dumbbell',
    subcategories: [
      { id: 'fitness', name: 'Fitness Equipment', image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 'outdoor', name: 'Outdoor Sports', image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'The most advanced iPhone ever with titanium design and A17 Pro chip.',
    price: 999,
    originalPrice: 1099,
    discount: 9,
    images: [
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1262695/pexels-photo-1262695.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    subcategory: 'mobiles',
    brand: 'Apple',
    rating: 4.8,
    reviewCount: 2543,
    inStock: true,
    features: ['A17 Pro chip', 'Titanium design', 'Pro camera system', '5G connectivity'],
    specifications: {
      'Display': '6.1-inch Super Retina XDR',
      'Storage': '128GB',
      'Camera': '48MP Main + 12MP Ultra Wide',
      'Battery': 'Up to 23 hours video playback'
    },
    tags: ['smartphone', 'premium', 'ios']
  },
  {
    id: '2',
    name: 'MacBook Pro 14"',
    description: 'Supercharged by M3 Pro chip for unprecedented performance.',
    price: 1999,
    originalPrice: 2199,
    discount: 9,
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    subcategory: 'laptops',
    brand: 'Apple',
    rating: 4.9,
    reviewCount: 1876,
    inStock: true,
    features: ['M3 Pro chip', 'Liquid Retina XDR display', 'Up to 18 hours battery', 'Advanced camera'],
    specifications: {
      'Processor': 'Apple M3 Pro',
      'Memory': '18GB Unified Memory',
      'Storage': '512GB SSD',
      'Display': '14.2-inch Liquid Retina XDR'
    },
    tags: ['laptop', 'professional', 'macOS']
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling headphones with premium sound quality.',
    price: 399,
    originalPrice: 449,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    subcategory: 'headphones',
    brand: 'Sony',
    rating: 4.7,
    reviewCount: 3421,
    inStock: true,
    features: ['Industry-leading noise canceling', '30-hour battery life', 'Quick charge', 'Multipoint connection'],
    specifications: {
      'Driver Unit': '30mm',
      'Frequency Response': '4Hz-40kHz',
      'Battery Life': '30 hours',
      'Weight': '250g'
    },
    tags: ['headphones', 'wireless', 'noise-canceling']
  },
  {
    id: '4',
    name: 'Premium Cotton T-Shirt',
    description: 'Comfortable premium cotton t-shirt with modern fit.',
    price: 29,
    originalPrice: 39,
    discount: 26,
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'fashion',
    subcategory: 'mens',
    brand: 'StyleCraft',
    rating: 4.5,
    reviewCount: 892,
    inStock: true,
    features: ['100% premium cotton', 'Modern fit', 'Pre-shrunk', 'Breathable fabric'],
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Modern',
      'Care': 'Machine washable',
      'Origin': 'Made in India'
    },
    tags: ['t-shirt', 'cotton', 'casual']
  },
  {
    id: '5',
    name: 'Elegant Summer Dress',
    description: 'Beautiful floral summer dress perfect for any occasion.',
    price: 79,
    originalPrice: 99,
    discount: 20,
    images: [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'fashion',
    subcategory: 'womens',
    brand: 'FloralFashion',
    rating: 4.6,
    reviewCount: 1234,
    inStock: true,
    features: ['Floral print', 'Comfortable fit', 'Breathable fabric', 'Machine washable'],
    specifications: {
      'Material': 'Polyester blend',
      'Length': 'Midi',
      'Fit': 'Regular',
      'Care': 'Machine wash cold'
    },
    tags: ['dress', 'summer', 'floral']
  },
  {
    id: '6',
    name: 'Modern Sofa Set',
    description: 'Luxurious 3-seater sofa with premium upholstery.',
    price: 899,
    originalPrice: 1199,
    discount: 25,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'home',
    subcategory: 'furniture',
    brand: 'ComfortHome',
    rating: 4.4,
    reviewCount: 567,
    inStock: true,
    features: ['Premium fabric', 'Solid wood frame', 'Comfortable cushions', 'Easy assembly'],
    specifications: {
      'Seating Capacity': '3 people',
      'Dimensions': '84" W x 36" D x 32" H',
      'Frame Material': 'Solid wood',
      'Upholstery': 'Premium fabric'
    },
    tags: ['sofa', 'furniture', 'living-room']
  },
  {
    id: '7',
    name: 'Professional Dumbbells Set',
    description: 'Adjustable dumbbell set perfect for home workouts.',
    price: 199,
    originalPrice: 249,
    discount: 20,
    images: [
      'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    subcategory: 'fitness',
    brand: 'FitPro',
    rating: 4.7,
    reviewCount: 1456,
    inStock: true,
    features: ['Adjustable weight', 'Comfortable grip', 'Durable construction', 'Space-saving design'],
    specifications: {
      'Weight Range': '5-50 lbs per dumbbell',
      'Material': 'Cast iron with rubber coating',
      'Grip': 'Textured handle',
      'Adjustment': 'Quick-change system'
    },
    tags: ['dumbbells', 'fitness', 'home-gym']
  },
  {
    id: '8',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'The ultimate Android flagship with S Pen and advanced AI features.',
    price: 1199,
    originalPrice: 1299,
    discount: 8,
    images: [
      'https://images.pexels.com/photos/1262695/pexels-photo-1262695.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/691034/pexels-photo-691034.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    subcategory: 'mobiles',
    brand: 'Samsung',
    rating: 4.6,
    reviewCount: 2187,
    inStock: true,
    features: ['S Pen included', '200MP camera', 'AI photo editing', '5000mAh battery'],
    specifications: {
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Storage': '256GB',
      'Camera': '200MP Main + 50MP Periscope Telephoto',
      'Battery': '5000mAh with 45W charging'
    },
    tags: ['smartphone', 'android', 's-pen']
  }
];

export const featuredProducts = products.slice(0, 4);
export const bestSellers = products.slice(2, 6);
export const newArrivals = products.slice(4, 8);