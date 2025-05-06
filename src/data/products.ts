export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  stripeLink: string;
  images: string[];
  featured?: boolean;
  isGuide?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Python Mousepad',
    slug: 'python-mousepad',
    description: 'Master Python programming with this comprehensive mousepad featuring essential functions, methods, and syntax. Perfect for beginners and professionals alike, this mousepad puts Python\'s most useful references at your fingertips.',
    price: '$38.99',
    stripeLink: 'https://buy.stripe.com/4gw4irdDMaY80M0cMN',
    images: [
      '/IMG_0279.jpg',
      '/IMG_2E242E5B19BF-1.jpeg',
    ]
  },
  {
    id: '2',
    name: 'Java Mousepad',
    slug: 'java-mousepad',
    description: 'Elevate your Java development with this detailed reference mousepad. Covering essential Java classes, methods, and syntax patterns, this mousepad is designed to help you code more efficiently without constant documentation lookups.',
    price: '$39.99',
    stripeLink: 'https://buy.stripe.com/9AQ02b0R0eak2U8dQS',
    images: [
      '/IMG_0281.jpg',
      '/IMG_3BD7FC637BDB-1.jpeg',
    ]
  },
  {
    id: '3',
    name: 'Excel Mousepad',
    slug: 'excel-mousepad',
    description: 'Boost your spreadsheet productivity with our Excel Cheat Sheet mousepad. Featuring shortcuts for navigation, formatting, formulas, and data analysis, this mousepad helps you work smarter and faster in Excel.',
    price: '$38.99',
    stripeLink: 'https://buy.stripe.com/7sI6qz1V4feo7aobIL',
    images: [
      '/excel1.jpg',
      '/excel2.jpg',
    ]
  },
  {
    id: '4',
    name: 'Windows/Mac Shortcuts Mousepad',
    slug: 'shortcuts-mousepad',
    description: 'Streamline your workflow with our dual-system shortcuts mousepad. Featuring essential keyboard shortcuts for both Windows and Mac OS, this mousepad is perfect for users who work across platforms or teams with mixed operating systems.',
    price: '$38.99',
    stripeLink: 'https://buy.stripe.com/00gg1957ggisgKY4gk',
    images: [
      '/IMG_0282.jpg',
      '/IMG_64985474CFA0-1.jpeg',
    ]
  },
  {
    id: '5',
    name: 'A Guide to Grow FAST on Threads',
    slug: 'threads-growth-guide',
    description: 'Unlock the secrets to rapid growth on Threads with our comprehensive guide. Learn proven strategies, content optimization techniques, and engagement tactics to build a thriving presence on Meta\'s fastest-growing social platform.',
    price: '$4.99',
    stripeLink: 'https://buy.stripe.com/4gw5mv8js6HSbqE005',
    images: [
      '/threads.png'
    ],
    featured: true,
    isGuide: true
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};
