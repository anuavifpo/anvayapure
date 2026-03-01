export interface ProductVariant {
  id: string;
  size: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  collection: string;
  images: string[];
  variants: ProductVariant[];
  features: string[];
  ingredients: string[];
  usage: string;
  certifications: string[];
  labReportId?: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    handle: "a2-desi-ghee-bilona",
    title: "A2 Desi Ghee",
    subtitle: "Traditional Bilona Method",
    description: "Pure A2 Gir cow ghee, hand-churned using the ancient Bilona method. Rich in nutrients, with a golden hue and intoxicating aroma.",
    longDescription: "Our A2 Desi Ghee is crafted from the milk of indigenous Gir cows, raised on organic pastures in Gujarat. Using the centuries-old Bilona method, we culture the milk into curd, churn it by hand to extract butter, and slow-cook it over wood fire. The result is a ghee of exceptional purity—golden, granular, and deeply aromatic. Each batch is tested for A1 beta-casein and certified free from additives.",
    collection: "ghee",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    variants: [
      { id: "1-250", size: "250ml", price: 599, compareAtPrice: 699, sku: "GHEE-250", inStock: true },
      { id: "1-500", size: "500ml", price: 1099, compareAtPrice: 1299, sku: "GHEE-500", inStock: true },
      { id: "1-1000", size: "1 Litre", price: 1999, compareAtPrice: 2399, sku: "GHEE-1000", inStock: true },
    ],
    features: [
      "100% A2 Gir Cow Milk",
      "Traditional Bilona Churned",
      "Wood Fire Slow Cooked",
      "No Additives or Preservatives",
      "Lab Tested & Certified"
    ],
    ingredients: ["A2 Gir Cow Milk"],
    usage: "Use for cooking, frying, or as a spread. Add to dal, rice, or rotis. Take one spoon daily for wellness benefits.",
    certifications: ["FSSAI Certified", "A2 Milk Certified", "No Added Hormones"],
    labReportId: "lab-001",
    featured: true
  },
  {
    id: "2",
    handle: "cold-pressed-groundnut-oil",
    title: "Cold-Pressed Groundnut Oil",
    subtitle: "Wood Pressed, Unrefined",
    description: "Traditional wood-pressed groundnut oil with a rich nutty aroma. Perfect for everyday cooking and frying.",
    longDescription: "Sourced from select peanut farms in Saurashtra, our groundnut oil is extracted using a traditional wooden ghani. Cold-pressed at low temperatures, it retains the natural flavor, color, and nutrients lost in refined oils. The oil has a high smoke point, making it ideal for Indian cooking—from tadkas to deep frying. Completely unrefined, unbleached, and additive-free.",
    collection: "oils",
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    variants: [
      { id: "2-500", size: "500ml", price: 349, sku: "OIL-GN-500", inStock: true },
      { id: "2-1000", size: "1 Litre", price: 649, compareAtPrice: 699, sku: "OIL-GN-1000", inStock: true },
      { id: "2-5000", size: "5 Litre", price: 2999, compareAtPrice: 3249, sku: "OIL-GN-5000", inStock: true },
    ],
    features: [
      "Traditional Wood Ghani Pressed",
      "Unrefined & Unbleached",
      "High Smoke Point",
      "Rich Nutty Aroma",
      "Single Origin Gujarat"
    ],
    ingredients: ["100% Groundnut (Peanut)"],
    usage: "Ideal for frying, sautéing, and as a base for pickles. Use in place of refined oils for healthier cooking.",
    certifications: ["FSSAI Certified", "Cold Pressed Certified"],
    labReportId: "lab-002",
    featured: true
  },
  {
    id: "3",
    handle: "cold-pressed-mustard-oil",
    title: "Cold-Pressed Mustard Oil",
    subtitle: "Kachi Ghani, Pure & Pungent",
    description: "Authentic kachi ghani mustard oil with its characteristic pungency. A staple for North Indian and Bengali cuisine.",
    longDescription: "Our mustard oil is cold-pressed from the finest black mustard seeds sourced from Rajasthan. The traditional kachi ghani process preserves the oil's natural pungency, golden color, and rich omega-3 content. Used for generations in Indian kitchens, it's perfect for pickling, cooking, and even as a warming massage oil. Pure, unrefined, and naturally antibacterial.",
    collection: "oils",
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    variants: [
      { id: "3-500", size: "500ml", price: 299, sku: "OIL-MUS-500", inStock: true },
      { id: "3-1000", size: "1 Litre", price: 549, sku: "OIL-MUS-1000", inStock: true },
    ],
    features: [
      "Kachi Ghani Cold Pressed",
      "Black Mustard Seeds",
      "Natural Pungent Aroma",
      "High Omega-3 Content",
      "Multi-purpose Use"
    ],
    ingredients: ["100% Black Mustard Seeds"],
    usage: "Perfect for Bengali and Punjabi cooking, pickling, and as a warming body oil. Heat before use to mellow the pungency.",
    certifications: ["FSSAI Certified", "Cold Pressed Certified"],
    labReportId: "lab-003",
    featured: false
  },
  {
    id: "4",
    handle: "cold-pressed-coconut-oil",
    title: "Cold-Pressed Coconut Oil",
    subtitle: "Virgin, Wood Pressed",
    description: "Pure virgin coconut oil with a subtle tropical aroma. Versatile for cooking, skincare, and haircare.",
    longDescription: "Extracted from fresh Kerala coconuts using traditional wood-pressing, our virgin coconut oil retains its natural fragrance and nutrients. Unlike refined coconut oil, it's never heated, bleached, or deodorized. Rich in lauric acid and MCTs, it's as beneficial on your plate as it is on your skin. A truly multipurpose oil from farm to table to vanity.",
    collection: "oils",
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    variants: [
      { id: "4-500", size: "500ml", price: 449, sku: "OIL-COC-500", inStock: true },
      { id: "4-1000", size: "1 Litre", price: 849, compareAtPrice: 899, sku: "OIL-COC-1000", inStock: false },
    ],
    features: [
      "Virgin Cold Pressed",
      "Fresh Kerala Coconuts",
      "Wood Ghani Extracted",
      "Rich in Lauric Acid",
      "Multi-purpose Use"
    ],
    ingredients: ["100% Fresh Coconut"],
    usage: "Use for South Indian cooking, baking, skincare, and haircare. Apply directly as a moisturizer or hair mask.",
    certifications: ["FSSAI Certified", "Virgin Certified"],
    featured: false
  },
  {
    id: "5",
    handle: "cold-pressed-sesame-oil",
    title: "Cold-Pressed Sesame Oil",
    subtitle: "Til Oil, Wood Pressed",
    description: "Traditional wood-pressed sesame oil with a warm, nutty flavor. Perfect for South Indian cooking and Ayurvedic use.",
    longDescription: "Our sesame oil is extracted from premium white sesame seeds using the ancient wooden ghani method. The low-temperature pressing preserves its natural antioxidants and distinctive nutty aroma. Revered in Ayurveda for its warming properties, it's perfect for tempering, massage, and oil pulling. Each bottle carries the essence of centuries-old tradition.",
    collection: "oils",
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    variants: [
      { id: "5-500", size: "500ml", price: 399, sku: "OIL-SES-500", inStock: true },
      { id: "5-1000", size: "1 Litre", price: 749, sku: "OIL-SES-1000", inStock: true },
    ],
    features: [
      "Wood Ghani Cold Pressed",
      "White Sesame Seeds",
      "Warm Nutty Aroma",
      "Ayurveda Approved",
      "Natural Antioxidants"
    ],
    ingredients: ["100% White Sesame Seeds"],
    usage: "Ideal for South Indian cooking, tempering, massage therapy, and oil pulling. Use in place of refined oils.",
    certifications: ["FSSAI Certified", "Cold Pressed Certified"],
    featured: true
  }
];

export const getProductByHandle = (handle: string): Product | undefined => {
  return products.find(p => p.handle === handle);
};

export const getProductsByCollection = (collection: string): Product[] => {
  return products.filter(p => p.collection === collection);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};
