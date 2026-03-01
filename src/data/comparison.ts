export interface ComparisonItem {
  feature: string;
  ourProduct: string;
  conventional: string;
  highlight?: boolean;
}

export interface ProductComparison {
  id: string;
  productType: string;
  title: string;
  description: string;
  items: ComparisonItem[];
}

export const comparisons: ProductComparison[] = [
  {
    id: "comp-ghee",
    productType: "ghee",
    title: "A2 Bilona Ghee vs Regular Ghee",
    description: "Understand the difference between traditionally made A2 ghee and mass-produced alternatives.",
    items: [
      { feature: "Milk Source", ourProduct: "A2 Gir Cow Milk", conventional: "Mixed / A1 Milk", highlight: true },
      { feature: "Protein Type", ourProduct: "A2 Beta Casein Only", conventional: "A1 Beta Casein (harder to digest)" },
      { feature: "Processing Method", ourProduct: "Traditional Bilona (Hand Churned)", conventional: "Machine Cream Separation" },
      { feature: "Cooking Method", ourProduct: "Slow Wood Fire", conventional: "Industrial Steam/Gas" },
      { feature: "Milk Required (per litre)", ourProduct: "25-30 Litres", conventional: "10-15 Litres", highlight: true },
      { feature: "Aroma", ourProduct: "Rich, Distinct, Grainy", conventional: "Mild to None" },
      { feature: "Color", ourProduct: "Golden Yellow", conventional: "Pale Yellow" },
      { feature: "Texture", ourProduct: "Granular, Creamy", conventional: "Smooth, Uniform" },
      { feature: "Additives", ourProduct: "None", conventional: "May Contain Flavoring", highlight: true },
      { feature: "Lab Testing", ourProduct: "Every Batch Tested", conventional: "Varies" },
    ]
  },
  {
    id: "comp-oils",
    productType: "oils",
    title: "Cold-Pressed vs Refined Oils",
    description: "See how traditional wood-pressed oils compare to chemically refined alternatives.",
    items: [
      { feature: "Extraction Method", ourProduct: "Wood Ghani (Cold Pressed)", conventional: "Solvent Extraction + Refining", highlight: true },
      { feature: "Temperature", ourProduct: "Below 50°C", conventional: "Above 100°C" },
      { feature: "Chemicals Used", ourProduct: "None", conventional: "Hexane, Caustic Soda, etc.", highlight: true },
      { feature: "Natural Aroma", ourProduct: "Preserved", conventional: "Removed (Deodorized)" },
      { feature: "Natural Color", ourProduct: "Preserved", conventional: "Bleached" },
      { feature: "Nutrients", ourProduct: "Intact", conventional: "Significantly Reduced", highlight: true },
      { feature: "Antioxidants", ourProduct: "High", conventional: "Low" },
      { feature: "Trans Fats", ourProduct: "None", conventional: "May Form During Processing" },
      { feature: "Shelf Life", ourProduct: "6-8 Months", conventional: "1-2 Years" },
      { feature: "Taste", ourProduct: "Rich, Natural", conventional: "Neutral, Bland" },
    ]
  }
];

export const getComparisonByType = (type: string): ProductComparison | undefined => {
  return comparisons.find(c => c.productType === type);
};
