import step1Milk from '@/assets/steps/step-1-milk.jpg';
import step2Curd from '@/assets/steps/step-2-curd.jpg';
import step3Churning from '@/assets/steps/step-3-churning.jpg';
import step4Heating from '@/assets/steps/step-4-heating.jpg';
import step5Ghee from '@/assets/steps/step-5-ghee.jpg';
import oil1Seeds from '@/assets/steps/oil-1-seeds.jpg';
import oil2Pressing from '@/assets/steps/oil-2-pressing.jpg';
import oil3Settling from '@/assets/steps/oil-3-settling.jpg';
import oil4Aroma from '@/assets/steps/oil-4-aroma.jpg';
import oil5Ready from '@/assets/steps/oil-5-ready.jpg';

export interface StoryStep {
  id: number;
  title: string;
  caption: string;
  image: string;
  colorTemp: string;
}

export const bilonaSteps: StoryStep[] = [
  {
    id: 1,
    title: "A2 Milk Collection",
    caption: "Fresh milk from native Sahiwal & Gir cows, grazed on organic pastures.",
    image: step1Milk,
    colorTemp: "bg-stone-50"
  },
  {
    id: 2,
    title: "Curd Setting",
    caption: "Milk transforms overnight into thick, probiotic-rich curd.",
    image: step2Curd,
    colorTemp: "bg-amber-50/50"
  },
  {
    id: 3,
    title: "Hand Churning",
    caption: "The bilona method—rhythmic churning extracts pure makkhan.",
    image: step3Churning,
    colorTemp: "bg-amber-50"
  },
  {
    id: 4,
    title: "Slow Heating",
    caption: "Low flame, patient stirring. Golden warmth rises slowly.",
    image: step4Heating,
    colorTemp: "bg-amber-100/70"
  },
  {
    id: 5,
    title: "Pure Ghee",
    caption: "Aromatic, granular, golden—exactly how it should be.",
    image: step5Ghee,
    colorTemp: "bg-amber-100"
  }
];

export const oilPressSteps: StoryStep[] = [
  {
    id: 1,
    title: "Seed Selection",
    caption: "Premium black & yellow mustard seeds, sourced from trusted farms.",
    image: oil1Seeds,
    colorTemp: "bg-stone-100"
  },
  {
    id: 2,
    title: "Wooden Pressing",
    caption: "Traditional ghani extraction—no heat, no chemicals.",
    image: oil2Pressing,
    colorTemp: "bg-stone-50"
  },
  {
    id: 3,
    title: "Natural Settling",
    caption: "Oil rests and settles, natural sediment separates gently.",
    image: oil3Settling,
    colorTemp: "bg-amber-50/30"
  },
  {
    id: 4,
    title: "Aroma Preserved",
    caption: "The pungent, bold character of mustard—completely intact.",
    image: oil4Aroma,
    colorTemp: "bg-amber-50/50"
  },
  {
    id: 5,
    title: "Ready to Cook",
    caption: "From our press to your kitchen—pure, potent, everyday.",
    image: oil5Ready,
    colorTemp: "bg-amber-50"
  }
];

export interface PainPoint {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const painPoints: PainPoint[] = [
  {
    id: 1,
    title: "Ultra-processed cooking fats",
    description: "Refined oils stripped of nutrients, loaded with chemicals.",
    icon: "🏭"
  },
  {
    id: 2,
    title: "Overheated & unstable oils",
    description: "High-heat extraction destroys natural benefits.",
    icon: "🔥"
  },
  {
    id: 3,
    title: "Lost traditional nourishment",
    description: "Our kitchens forgot the wisdom of slow-made fats.",
    icon: "⏳"
  }
];
