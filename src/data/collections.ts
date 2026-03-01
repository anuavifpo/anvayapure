export interface Collection {
  id: string;
  handle: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  productCount: number;
}

export const collections: Collection[] = [
  {
    id: "col-1",
    handle: "ghee",
    title: "A2 Desi Ghee",
    subtitle: "Traditional Bilona Method",
    description: "Handcrafted from A2 Gir cow milk using the ancient Bilona process. Our ghee is slow-cooked over wood fire for that distinctive golden hue and rich aroma.",
    image: "/placeholder.svg",
    productCount: 1
  },
  {
    id: "col-2",
    handle: "oils",
    title: "Cold-Pressed Oils",
    subtitle: "Wood Ghani Extracted",
    description: "Pure, unrefined oils extracted using traditional wooden ghani. No heat, no chemicals—just the natural goodness of seeds pressed the old-fashioned way.",
    image: "/placeholder.svg",
    productCount: 4
  }
];

export const getCollectionByHandle = (handle: string): Collection | undefined => {
  return collections.find(c => c.handle === handle);
};
