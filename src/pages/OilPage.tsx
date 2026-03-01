import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import StickyScrollStory from '@/components/cinematic/StickyScrollStory';
import ProductFAQ from '@/components/cinematic/ProductFAQ';
import TestimonialsSection from '@/components/cinematic/TestimonialsSection';
import { oilPressSteps } from '@/data/stories';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import productMustardOil from '@/assets/product-mustard-oil.jpg';

const oilFAQs = [
  {
    question: "What does 'cold-pressed' mean?",
    answer: "Cold-pressed means the oil is extracted using a traditional wooden ghani or press at low temperatures (below 50°C). This preserves the natural flavor, nutrients, and antioxidants that are lost in refined, heat-extracted oils."
  },
  {
    question: "Black vs Yellow mustard oil—what's the difference?",
    answer: "Black mustard oil has a stronger, more pungent flavor—perfect for pickles, tadka, and North Indian cooking. Yellow mustard oil is milder and more versatile, suitable for everyday cooking and even as a hair/massage oil."
  },
  {
    question: "Is mustard oil safe for cooking?",
    answer: "Yes! When heated, mustard oil's pungency mellows, leaving a pleasant nutty flavor. It has a high smoke point (~250°C) making it excellent for Indian cooking methods like deep frying and tempering."
  },
  {
    question: "How should I store mustard oil?",
    answer: "Store in a cool, dark place away from direct sunlight. Keep the bottle tightly sealed. Our cold-pressed oils have a natural shelf life of 6-9 months without any preservatives."
  },
  {
    question: "Why is cold-pressed oil more expensive?",
    answer: "Cold-pressing yields less oil compared to heat extraction and chemical processes. A wooden ghani also requires more time and care. However, the nutritional benefits and authentic taste make it worthwhile."
  }
];

const comparisonData = [
  { feature: 'Pungency', black: 'High', yellow: 'Mild' },
  { feature: 'Flavor', black: 'Bold, sharp', yellow: 'Nutty, subtle' },
  { feature: 'Best For', black: 'Tadka, pickles', yellow: 'Everyday cooking' },
  { feature: 'Color', black: 'Deep amber', yellow: 'Light golden' },
  { feature: 'Aroma', black: 'Strong, traditional', yellow: 'Gentle, mild' }
];

const benefits = [
  "Rich in omega-3 and omega-6 fatty acids",
  "Contains natural antioxidants",
  "High smoke point for Indian cooking",
  "Antibacterial and antifungal properties",
  "Promotes heart health",
  "No chemicals or preservatives"
];

const OilPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToStory = () => {
    const storySection = document.getElementById('oil-story');
    storySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const oilJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cold Pressed Mustard Oil - Kachi Ghani Wood Pressed",
    "description": "Learn about traditional cold pressed mustard oil made using wood press (kachi ghani). Understand the process, types, and benefits of authentic Indian cooking oil.",
    "author": {
      "@type": "Organization",
      "name": "Anvaya Pure"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Anvaya Pure"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Cold Pressed Mustard Oil - Kachi Ghani | Our Process"
        description="Discover traditional cold pressed mustard oil made using wood press (kachi ghani). Learn about Black vs Yellow mustard, the extraction process, and health benefits."
        canonical="/oil"
        keywords="cold pressed mustard oil, kachi ghani oil, wood pressed oil, black mustard oil, yellow mustard oil, pure mustard oil, traditional cooking oil"
        jsonLd={oilJsonLd}
      />
      <Header />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden"
      >
        {/* Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={prefersReducedMotion ? {} : { y }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 z-10" />
          <img
            src={productMustardOil}
            alt="Cold Pressed Mustard Oil"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <motion.div 
          className="relative z-20 container-wide px-4"
          style={prefersReducedMotion ? {} : { opacity }}
        >
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
              Understanding Cold-Pressed Oils
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Wood-Pressed. Bold. Pure.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Traditional kachi ghani mustard oil—cold-pressed without heat or chemicals. 
              Discover why this ancient method produces oil that's nutritionally superior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToStory}
                className="btn-primary"
              >
                See the Cold-Press Process
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <Link 
                to="/shop"
                className="btn-secondary"
              >
                Shop Mustard Oils
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* What is Cold-Pressed Section */}
      <section className="py-20 md:py-28">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden">
              <img
                src={productMustardOil}
                alt="Traditional wooden ghani for oil extraction"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
                The Difference
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                What is Cold-Pressed Oil?
              </h2>
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p>
                  Cold-pressed oil, also known as "kachi ghani" or wood-pressed oil, is extracted 
                  using a traditional wooden press (ghani) that operates at low temperatures—
                  typically below 50°C.
                </p>
                <p>
                  Unlike refined oils that use high heat and chemical solvents to maximize yield, 
                  cold-pressing preserves the oil's natural color, flavor, aroma, and most importantly, 
                  its nutritional value.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oil Story - Sticky Scroll */}
      <div id="oil-story">
        <StickyScrollStory
          steps={oilPressSteps}
          title="Seed to Oil, Pressed Slowly"
          subtitle="The Cold-Press Journey"
        />
      </div>

      {/* Black vs Yellow Comparison */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-narrow px-4">
          <div className="text-center mb-12">
            <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
              Compare
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Black vs Yellow Mustard Oil
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Both are cold-pressed and pure, but each has its own character and best uses.
            </p>
          </div>

          <div className="bg-background rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 font-medium text-sm">
              <span className="text-muted-foreground">Feature</span>
              <span className="text-center">Black Mustard</span>
              <span className="text-center">Yellow Mustard</span>
            </div>
            {comparisonData.map((row, index) => (
              <div 
                key={row.feature}
                className={`grid grid-cols-3 gap-4 p-4 ${
                  index !== comparisonData.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <span className="text-muted-foreground text-sm">{row.feature}</span>
                <span className="text-center text-sm">{row.black}</span>
                <span className="text-center text-sm">{row.yellow}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cold-Pressed vs Refined */}
      <section className="py-20 md:py-28">
        <div className="container-narrow px-4">
          <div className="text-center mb-12">
            <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
              The Science
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Cold-Pressed vs Refined Oil
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="font-serif text-xl text-foreground mb-4">Cold-Pressed (Kachi Ghani)</h3>
              <ul className="space-y-3">
                {[
                  'Extracted at low temperatures (<50°C)',
                  'Retains natural color and aroma',
                  'Rich in antioxidants and vitamins',
                  'No chemicals used',
                  'Natural, authentic taste'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-xl p-6">
              <h3 className="font-serif text-xl text-foreground mb-4">Refined Oil</h3>
              <ul className="space-y-3">
                {[
                  'High heat extraction (>100°C)',
                  'Bleached to remove color',
                  'Nutrients destroyed by processing',
                  'Chemical solvents used',
                  'Neutral, bland taste'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5 text-destructive">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQs */}
      <section className="py-20 md:py-28">
        <div className="container-narrow px-4">
          <div className="text-center mb-12">
            <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <ProductFAQ faqs={oilFAQs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-narrow px-4 text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Bring the real thing to your kitchen
          </h2>
          <p className="text-background/70 text-lg mb-10 max-w-xl mx-auto">
            Pure, cold-pressed mustard oil—the way it was always meant to be. 
            Every batch tested for quality and purity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-colors"
            >
              Shop Mustard Oils
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              to="/lab-reports"
              className="inline-flex items-center justify-center px-8 py-4 border border-background/30 text-background rounded-full font-medium hover:bg-background/10 transition-colors"
            >
              View Lab Reports
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OilPage;
