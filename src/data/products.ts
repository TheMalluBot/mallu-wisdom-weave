
export interface Product {
  id: string;
  name: string;
  category: 'traditional' | 'fusion' | 'modern' | 'accessories';
  subcategory: string;
  description: string;
  price: string;
  colors: string[];
  sizes: string[];
  occasions: string[];
  bodyShapes: string[];
  heightRecommendations: string[];
  skinTones: string[];
  images: string[];
  features: string[];
  stylingTips: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  // Traditional Kerala Wear
  {
    id: 'kasavu-saree-1',
    name: 'Premium Kasavu Saree with Peacock Border',
    category: 'traditional',
    subcategory: 'Kasavu Sarees',
    description: 'Authentic handwoven Kerala Kasavu saree with intricate peacock motifs and gold zari border',
    price: '₹4,500 - ₹8,000',
    colors: ['Kerala Gold', 'Ivory White', 'Temple Red'],
    sizes: ['Free Size'],
    occasions: ['Festival/Celebration', 'Wedding', 'Traditional Events'],
    bodyShapes: ['pear', 'hourglass', 'rectangle'],
    heightRecommendations: ['average', 'tall'],
    skinTones: ['fair', 'medium', 'warm'],
    images: ['🥻'],
    features: ['Handwoven', 'Pure Cotton', 'Gold Zari Work', 'Traditional Design'],
    stylingTips: [
      'Pair with traditional gold jewelry',
      'Use matching blouse with contrast piping',
      'Drape in traditional Kerala style for authenticity'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'set-saree-1',
    name: 'Elegant Set Saree with Embroidered Blouse',
    category: 'traditional',
    subcategory: 'Set Sarees',
    description: 'Ready-to-wear set saree with pre-stitched pleats and matching embroidered blouse',
    price: '₹3,200 - ₹6,500',
    colors: ['Emerald Green', 'Deep Blue', 'Maroon'],
    sizes: ['S', 'M', 'L', 'XL'],
    occasions: ['Festival/Celebration', 'Wedding', 'Party/Social'],
    bodyShapes: ['apple', 'pear', 'inverted-triangle'],
    heightRecommendations: ['petite', 'average'],
    skinTones: ['cool', 'neutral', 'deep'],
    images: ['👘'],
    features: ['Pre-stitched', 'Embroidered Blouse', 'Easy Draping', 'Machine Washable'],
    stylingTips: [
      'Perfect for beginners to saree draping',
      'Add statement jewelry to enhance the look',
      'Choose contrasting dupatta for layered styling'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 89
  },

  // Fusion Wear
  {
    id: 'anarkali-1',
    name: 'A-Line Kerala Print Anarkali',
    category: 'fusion',
    subcategory: 'Anarkali Suits',
    description: 'Flowing A-line Anarkali with traditional Kerala boat and palm motifs',
    price: '₹2,800 - ₹5,200',
    colors: ['Kerala Gold', 'Temple Red', 'Deep Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    occasions: ['Festival/Celebration', 'Party/Social', 'Wedding'],
    bodyShapes: ['pear', 'apple', 'rectangle'],
    heightRecommendations: ['petite', 'average', 'tall'],
    skinTones: ['warm', 'neutral', 'fair'],
    images: ['👗'],
    features: ['Flowy Silhouette', 'Traditional Prints', 'Comfortable Fit', 'Dupatta Included'],
    stylingTips: [
      'Empire waist flatters most body types',
      'Pair with statement earrings',
      'Choose fitted leggings for balanced proportions'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 'indo-western-1',
    name: 'High-Low Kurta with Palazzo Set',
    category: 'fusion',
    subcategory: 'Indo-Western',
    description: 'Contemporary high-low kurta with wide-leg palazzo pants and printed dupatta',
    price: '₹1,800 - ₹3,500',
    colors: ['Coral Pink', 'Mint Green', 'Lavender'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    occasions: ['Casual Daily', 'Work/Office', 'Party/Social'],
    bodyShapes: ['apple', 'rectangle', 'inverted-triangle'],
    heightRecommendations: ['tall', 'average'],
    skinTones: ['cool', 'fair', 'neutral'],
    images: ['👔'],
    features: ['High-Low Hem', 'Wide Leg Palazzo', 'Breathable Fabric', 'Modern Cut'],
    stylingTips: [
      'High-low hem creates vertical lines',
      'Wide palazzo balances upper body',
      'Add a belt to define waist'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 127
  },

  // Modern Wear
  {
    id: 'wrap-dress-1',
    name: 'V-Neck Wrap Dress with Kerala Motifs',
    category: 'modern',
    subcategory: 'Dresses',
    description: 'Flattering wrap dress with subtle Kerala-inspired prints and modern silhouette',
    price: '₹1,500 - ₹2,800',
    colors: ['Navy Blue', 'Forest Green', 'Burgundy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    occasions: ['Work/Office', 'Casual Daily', 'Party/Social'],
    bodyShapes: ['apple', 'pear', 'hourglass'],
    heightRecommendations: ['petite', 'average'],
    skinTones: ['cool', 'deep', 'neutral'],
    images: ['👗'],
    features: ['Wrap Silhouette', 'V-Neckline', 'Knee Length', 'Machine Washable'],
    stylingTips: [
      'V-neck elongates the neckline',
      'Wrap style flatters all body types',
      'Perfect for transitional occasions'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 98
  },

  // Accessories
  {
    id: 'jewelry-set-1',
    name: 'Traditional Kerala Gold Temple Jewelry Set',
    category: 'accessories',
    subcategory: 'Jewelry',
    description: 'Authentic temple jewelry set with necklace, earrings, and bracelet in traditional Kerala design',
    price: '₹2,500 - ₹12,000',
    colors: ['Antique Gold', 'Rose Gold'],
    sizes: ['Adjustable'],
    occasions: ['Festival/Celebration', 'Wedding', 'Traditional Events'],
    bodyShapes: ['all'],
    heightRecommendations: ['all'],
    skinTones: ['warm', 'medium', 'deep'],
    images: ['💍'],
    features: ['Temple Design', 'Antique Finish', 'Adjustable', 'Tarnish Resistant'],
    stylingTips: [
      'Perfect for traditional Kerala sarees',
      'Complements warm skin tones beautifully',
      'Layer with delicate chains for modern look'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 245
  },
  {
    id: 'silver-jewelry-1',
    name: 'Contemporary Silver Statement Necklace',
    category: 'accessories',
    subcategory: 'Jewelry',
    description: 'Modern silver necklace with geometric patterns inspired by Kerala architecture',
    price: '₹800 - ₹2,200',
    colors: ['Silver', 'Oxidized Silver'],
    sizes: ['Adjustable'],
    occasions: ['Casual Daily', 'Work/Office', 'Party/Social'],
    bodyShapes: ['all'],
    heightRecommendations: ['all'],
    skinTones: ['cool', 'fair', 'neutral'],
    images: ['📿'],
    features: ['Geometric Design', 'Adjustable Length', 'Lightweight', 'Hypoallergenic'],
    stylingTips: [
      'Perfect for fusion and modern wear',
      'Complements cool undertones',
      'Great for layering with other pieces'
    ],
    inStock: true,
    rating: 4.3,
    reviews: 76
  }
];

export const getProductRecommendations = (userProfile: any) => {
  let filteredProducts = [...products];

  // Filter by body shape
  if (userProfile.bodyShape) {
    filteredProducts = filteredProducts.filter(product => 
      product.bodyShapes.includes(userProfile.bodyShape) || 
      product.bodyShapes.includes('all')
    );
  }

  // Filter by height
  const heightCategory = userProfile.height < 160 ? 'petite' : 
                        userProfile.height > 170 ? 'tall' : 'average';
  filteredProducts = filteredProducts.filter(product => 
    product.heightRecommendations.includes(heightCategory) || 
    product.heightRecommendations.includes('all')
  );

  // Filter by skin tone
  if (userProfile.skinTone) {
    filteredProducts = filteredProducts.filter(product => 
      product.skinTones.includes(userProfile.skinTone) || 
      product.skinTones.includes('all')
    );
  }

  // Filter by occasions
  if (userProfile.occasions && userProfile.occasions.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      product.occasions.some(occasion => userProfile.occasions.includes(occasion))
    );
  }

  // Sort by rating and in-stock status
  return filteredProducts
    .sort((a, b) => {
      if (a.inStock !== b.inStock) return a.inStock ? -1 : 1;
      return b.rating - a.rating;
    })
    .slice(0, 12); // Limit to top 12 recommendations
};
