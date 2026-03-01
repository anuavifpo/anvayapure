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
import { bilonaSteps } from '@/data/stories';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import productGheeJar from '@/assets/product-ghee-jar.jpg';
import girCowFarm from '@/assets/gir-cow-farm.jpg';

const gheeFAQs = [
  {
    question: "What is the Bilona method?",
    answer: "The Bilona method is a traditional process where milk is first converted to curd, then hand-churned using a wooden churner (bilona) to extract butter. This butter is then slow-cooked over a wood fire to make ghee. This preserves more nutrients and creates a distinctive aroma."
  },
  {
    question: "What makes A2 milk different?",
    answer: "A2 milk comes from indigenous cow breeds like Sahiwal and Gir. It contains only A2 beta-casein protein, which is easier to digest compared to A1 protein found in most commercial milk from hybrid breeds."
  },
  {
    question: "How should I store the ghee?",
    answer: "Store in a cool, dry place away from direct sunlight. Our ghee has a shelf life of 12 months. Use a dry spoon to scoop—moisture can affect quality."
  },
  {
    question: "Is it suitable for high-heat cooking?",
    answer: "Yes! A2 Bilona ghee has a high smoke point (around 250°C), making it excellent for frying, sautéing, and deep-frying without breaking down into harmful compounds."
  },
  {
    question: "Why is Bilona ghee more expensive than regular ghee?",
    answer: "Bilona ghee requires about 25-30 litres of milk to produce 1 litre of ghee, compared to 15-20 litres for commercial methods. The hand-churning process also takes significantly more time and labor."
  }
];

const benefits = [
  "Rich in fat-soluble vitamins A, D, E, and K",
  "Contains butyric acid for gut health",
  "High smoke point—ideal for Indian cooking",
  "Easier to digest than commercial ghee",
  "Traditional Ayurvedic superfood",
  "No preservatives or additives"
];

const GheePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToStory = () => {
    const storySection = document.getElementById('bilona-story');
    storySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const gheeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "A2 Desi Cow Ghee - Traditional Bilona Method",
    "description": "Learn about Anvaya Pure A2 Desi Cow Ghee made from Sahiwal cow milk using the traditional Bilona method. Understand the process, benefits, and what makes it different.",
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
        title="A2 Desi Cow Ghee - Bilona Method | Our Process"
        description="Discover the traditional Bilona method of making A2 Desi Cow Ghee from Sahiwal cows. Learn about our process, the benefits of A2 ghee, and why traditional methods matter."
        canonical="/ghee"
        keywords="A2 ghee, bilona ghee, desi cow ghee, Sahiwal ghee, pure ghee, traditional ghee, organic ghee, Bilona method, A2 milk benefits"
        jsonLd={gheeJsonLd}
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
            src={productGheeJar}
            alt="Traditional A2 Desi Ghee"
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
              Understanding A2 Ghee
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              The Ghee Your Grandmother Made
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Slow-churned from A2 Sahiwal cow milk using the traditional Bilona method. 
              Discover why this ancient process creates ghee that's nutritionally superior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToStory}
                className="btn-primary"
              >
                See the Bilona Process
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <Link 
                to="/shop"
                className="btn-secondary"
              >
                Shop A2 Ghee
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* What is A2 Ghee Section */}
      <section className="py-20 md:py-28">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
                The Difference
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                What Makes A2 Ghee Special?
              </h2>
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p>
                  A2 ghee comes from the milk of indigenous Indian cow breeds like Sahiwal, 
                  Gir, and Red Sindhi. These cows produce milk containing only the A2 type 
                  of beta-casein protein—the original protein found in all cow milk for 
                  thousands of years.
                </p>
                <p>
                  Modern hybrid breeds produce A1 protein, which some research suggests 
                  may be harder to digest. A2 milk and ghee are considered gentler on the 
                  digestive system and closer to what our ancestors consumed.
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
            <div className="rounded-2xl overflow-hidden">
              <img
                src={girCowFarm}
                alt="Sahiwal cows at our partner farm"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bilona Story - Sticky Scroll */}
      <div id="bilona-story">
        <StickyScrollStory
          steps={bilonaSteps}
          title="The Bilona Method"
          subtitle="Our 5-Step Process"
        />
      </div>

      {/* Why Bilona Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-narrow px-4">
          <div className="text-center mb-12">
            <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
              The Science
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Why the Bilona Method Matters
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6 border border-border">
              <span className="text-4xl mb-4 block">🥛</span>
              <h3 className="font-serif text-xl text-foreground mb-2">Curd-Based Process</h3>
              <p className="text-sm text-muted-foreground">
                Unlike commercial methods that heat cream directly, Bilona converts milk to curd first. 
                This fermentation adds beneficial probiotics and makes nutrients more bioavailable.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border">
              <span className="text-4xl mb-4 block">🪵</span>
              <h3 className="font-serif text-xl text-foreground mb-2">Hand Churning</h3>
              <p className="text-sm text-muted-foreground">
                The wooden bilona churner operates at low speeds, preventing heat buildup that 
                can damage delicate fatty acids and fat-soluble vitamins.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border">
              <span className="text-4xl mb-4 block">🔥</span>
              <h3 className="font-serif text-xl text-foreground mb-2">Slow Wood Fire</h3>
              <p className="text-sm text-muted-foreground">
                Gentle wood fire cooking over several hours develops the distinctive golden color 
                and nutty aroma while preserving the medicinal properties valued in Ayurveda.
              </p>
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
          <ProductFAQ faqs={gheeFAQs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-narrow px-4 text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Ready to taste the difference?
          </h2>
          <p className="text-background/70 text-lg mb-10 max-w-xl mx-auto">
            Experience pure A2 ghee made the traditional way. Every batch is lab-tested 
            and crafted with care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-colors"
            >
              Shop A2 Ghee
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

export default GheePage;
