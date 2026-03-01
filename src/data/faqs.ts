export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What is A2 milk and why is it important?",
    answer: "A2 milk comes from indigenous Indian cow breeds like Gir, Sahiwal, and Red Sindhi. Unlike A1 milk from foreign breeds, A2 milk contains only A2 beta-casein protein, which is easier to digest and has been linked to various health benefits. Our ghee is made exclusively from A2 milk from Gir cows.",
    category: "products"
  },
  {
    id: "faq-2",
    question: "What is the Bilona method?",
    answer: "Bilona is the traditional Vedic method of making ghee. First, we culture A2 milk into curd overnight. The curd is then hand-churned using a wooden churner (bilona) to separate butter. This butter is slow-cooked over wood fire until it becomes golden ghee. This process preserves nutrients and gives our ghee its distinctive aroma.",
    category: "process"
  },
  {
    id: "faq-3",
    question: "What does 'cold-pressed' mean for oils?",
    answer: "Cold-pressing means our oils are extracted without heat or chemicals. We use traditional wooden ghanis (presses) that rotate slowly, keeping temperatures below 50°C. This preserves the oil's natural color, flavor, aroma, and nutritional value—unlike refined oils that are heated and chemically processed.",
    category: "process"
  },
  {
    id: "faq-4",
    question: "How do I store ghee and cold-pressed oils?",
    answer: "Store ghee at room temperature away from direct sunlight. It doesn't need refrigeration and actually becomes easier to use at room temperature. Cold-pressed oils should be stored in a cool, dark place and used within 3-4 months of opening. Always use a dry spoon to avoid moisture contamination.",
    category: "usage"
  },
  {
    id: "faq-5",
    question: "Are your products lab-tested?",
    answer: "Yes, every batch is tested at NABL-accredited laboratories. We test for purity, adulteration, heavy metals, and in the case of our ghee, A1/A2 protein content. All lab reports are available on our website and can be verified using the batch number on your product.",
    category: "quality"
  },
  {
    id: "faq-6",
    question: "Why is your ghee more expensive than regular ghee?",
    answer: "Our A2 Bilona ghee requires 25-30 litres of A2 milk to produce just 1 litre of ghee. The traditional process is labor-intensive and time-consuming. Indigenous cows produce less milk than hybrid breeds, making A2 milk itself more precious. The result is a ghee of exceptional purity and quality.",
    category: "pricing"
  },
  {
    id: "faq-7",
    question: "Can I use cold-pressed oils for deep frying?",
    answer: "Yes! Our groundnut oil has a high smoke point (around 230°C) making it perfect for deep frying. Coconut oil is great for medium-heat cooking. Mustard oil should be heated until it reaches smoke point once, then cooled slightly before cooking—this mellows its pungency and makes it ideal for Indian cooking.",
    category: "usage"
  },
  {
    id: "faq-8",
    question: "Where do you source your ingredients?",
    answer: "We work directly with farmers and cooperatives across India. Our A2 milk comes from Gir cow farms in Gujarat, groundnuts from Saurashtra, mustard seeds from Rajasthan, coconuts from Kerala, and sesame seeds from Madhya Pradesh. We prioritize organic and traditional farming practices.",
    category: "sourcing"
  }
];

export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter(f => f.category === category);
};
