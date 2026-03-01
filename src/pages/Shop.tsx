import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Shield, Leaf, Sparkles, Plus, Clock, Flame } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ProductVariantSelector from '@/components/cinematic/ProductVariantSelector';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import productGheeJar from '@/assets/product-ghee-jar.jpg';
import productMustardOil from '@/assets/product-mustard-oil.jpg';

const gheeVariants = [
  { id: '500ml', size: '500ml', price: 1099, compareAtPrice: 1299 },
  { id: '1L', size: '1 Litre', price: 1999, compareAtPrice: 2399 },
  { id: '2L', size: '2 Litre', price: 3799, compareAtPrice: 4499 }
];

const blackMustardVariants = [
  { id: '1L', size: '1 Litre', price: 549 },
  { id: '2L', size: '2 Litre', price: 999, compareAtPrice: 1098 },
  { id: '5L', size: '5 Litre', price: 2399, compareAtPrice: 2745 }
];

const yellowMustardVariants = [
  { id: '1L', size: '1 Litre', price: 499 },
  { id: '2L', size: '2 Litre', price: 949, compareAtPrice: 998 },
  { id: '5L', size: '5 Litre', price: 2199, compareAtPrice: 2495 }
];

const combos = [
  {
    id: 'kitchen-essentials',
    name: 'Kitchen Essentials Combo',
    description: 'A2 Ghee (1L) + Black Mustard Oil (2L) — Perfect for everyday Indian cooking',
    originalPrice: 2998,
    comboPrice: 2599,
    savings: 399,
    items: [
      { name: 'A2 Desi Ghee', variant: '1 Litre', image: productGheeJar },
      { name: 'Black Mustard Oil', variant: '2 Litre', image: productMustardOil }
    ],
    badge: 'Most Popular'
  },
  {
    id: 'pure-pantry',
    name: 'Pure Pantry Pack',
    description: 'A2 Ghee (2L) + Black Mustard Oil (5L) — Stock up and save big',
    originalPrice: 6198,
    comboPrice: 5499,
    savings: 699,
    items: [
      { name: 'A2 Desi Ghee', variant: '2 Litre', image: productGheeJar },
      { name: 'Black Mustard Oil', variant: '5 Litre', image: productMustardOil }
    ],
    badge: 'Best Value'
  },
  {
    id: 'oil-duo',
    name: 'Mustard Oil Duo',
    description: 'Black Mustard (2L) + Yellow Mustard (2L) — Try both varieties',
    originalPrice: 1948,
    comboPrice: 1749,
    savings: 199,
    items: [
      { name: 'Black Mustard Oil', variant: '2 Litre', image: productMustardOil },
      { name: 'Yellow Mustard Oil', variant: '2 Litre', image: productMustardOil }
    ],
    badge: 'Try Both'
  }
];

const trustFeatures = [
  { icon: Truck, title: 'Free Delivery', description: 'On orders above ₹999' },
  { icon: Shield, title: 'Lab Tested', description: 'Every batch verified' },
  { icon: Leaf, title: '100% Natural', description: 'No preservatives' },
  { icon: ShoppingBag, title: 'Easy Returns', description: '7-day return policy' }
];

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set offer end date to 3 days from now (resets on page load for demo)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    endDate.setHours(23, 59, 59, 999);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="bg-background/20 backdrop-blur-sm px-2 py-1 rounded font-mono font-bold text-lg min-w-[2.5rem] text-center">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase tracking-wide mt-1 opacity-80">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-1.5">
      <Clock className="w-4 h-4 mr-1" />
      <TimeBlock value={timeLeft.days} label="Days" />
      <span className="text-lg font-bold">:</span>
      <TimeBlock value={timeLeft.hours} label="Hrs" />
      <span className="text-lg font-bold">:</span>
      <TimeBlock value={timeLeft.minutes} label="Min" />
      <span className="text-lg font-bold">:</span>
      <TimeBlock value={timeLeft.seconds} label="Sec" />
    </div>
  );
};

const Shop = () => {
  const prefersReducedMotion = useReducedMotion();
  const productsRef = useRef<HTMLDivElement>(null);
  const combosRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(productsRef, { once: true, margin: "-50px" });
  const combosInView = useInView(combosRef, { once: true, margin: "-50px" });
  const { addItem } = useCart();

  const handleAddCombo = (combo: typeof combos[0]) => {
    // Add combo as a single item
    addItem({
      id: combo.id,
      title: combo.name,
      variant: combo.items.map(i => `${i.name} (${i.variant})`).join(' + '),
      price: combo.comboPrice,
      image: combo.items[0].image
    });
    toast.success(`${combo.name} added to cart!`);
  };

  const shopJsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Anvaya Pure Shop",
    "description": "Shop premium A2 Desi Cow Ghee and Cold Pressed Mustard Oils",
    "url": "https://anvayapure.com/shop",
    "priceRange": "₹₹",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Anvaya Pure Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "A2 Desi Cow Ghee"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Cold Pressed Mustard Oil"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Shop A2 Ghee & Cold Pressed Oils - Anvaya Pure"
        description="Buy premium A2 Desi Cow Ghee made with Bilona method and traditional cold pressed mustard oils. Free delivery on orders above ₹999. Lab tested, 100% natural."
        canonical="/shop"
        keywords="buy A2 ghee, buy cold pressed oil, Bilona ghee online, kachi ghani oil, pure ghee shop, mustard oil online"
        jsonLd={shopJsonLd}
      />
      <Header />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-sand to-background">
        <div className="container-wide px-4">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
              Shop Anvaya Pure
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Pure Ghee & Oils,<br />
              <span className="text-primary">Delivered Fresh</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Handcrafted using traditional methods. Every batch lab-tested for purity. 
              Free delivery on orders above ₹999.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-8 border-y border-border bg-muted/30">
        <div className="container-wide px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{feature.title}</p>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-16 md:py-24">
        <div className="container-wide px-4">
          {/* A2 Ghee */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20"
          >
            <div className="order-2 lg:order-1">
              <span className="text-caption uppercase tracking-widest text-primary mb-2 block">
                Bestseller
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                A2 Desi Cow Ghee
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Slow-churned from Sahiwal cow milk using the traditional Bilona method. 
                Golden, aromatic, and pure—exactly as nature intended.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Bilona Method', 'A2 Sahiwal Milk', 'Lab Tested'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <ProductVariantSelector
                productId="ghee-a2"
                productTitle="A2 Desi Ghee (Bilona)"
                productImage={productGheeJar}
                variants={gheeVariants}
              />
              <Link 
                to="/ghee" 
                className="inline-block mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Learn about our Bilona process →
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden bg-sand">
                <img
                  src={productGheeJar}
                  alt="A2 Desi Ghee Jar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Black Mustard Oil */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20"
          >
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-sand">
                <img
                  src={productMustardOil}
                  alt="Black Mustard Oil Bottle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-caption uppercase tracking-widest text-primary mb-2 block">
                Cold Pressed
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Black Mustard Oil
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Bold, pungent, traditional. Wood-pressed at low temperatures to preserve 
                natural flavor and nutrients. Perfect for tadka, pickles, and authentic Indian cooking.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Kachi Ghani', 'Wood Pressed', 'No Chemicals'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <ProductVariantSelector
                productId="oil-black"
                productTitle="Black Mustard Oil"
                productImage={productMustardOil}
                variants={blackMustardVariants}
              />
              <Link 
                to="/oil" 
                className="inline-block mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Learn about cold-pressing →
              </Link>
            </div>
          </motion.div>

          {/* Yellow Mustard Oil */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <span className="text-caption uppercase tracking-widest text-primary mb-2 block">
                Cold Pressed
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Yellow Mustard Oil
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Mild, aromatic, versatile. A gentler mustard oil perfect for everyday cooking, 
                salads, and even as a natural hair and body oil.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Mild Flavor', 'Multi-Purpose', 'Natural Care'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <ProductVariantSelector
                productId="oil-yellow"
                productTitle="Yellow Mustard Oil"
                productImage={productMustardOil}
                variants={yellowMustardVariants}
              />
              <Link 
                to="/oil" 
                className="inline-block mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Compare Black vs Yellow →
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden bg-sand">
                <img
                  src={productMustardOil}
                  alt="Yellow Mustard Oil Bottle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Combo Offers Section */}
      <section ref={combosRef} className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        {/* Urgency Banner */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-destructive via-destructive to-destructive/90 py-3">
          <div className="container-wide px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-destructive-foreground">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 animate-pulse" />
                <span className="font-semibold text-sm sm:text-base">Limited Time Offer!</span>
              </div>
              <CountdownTimer />
            </div>
          </div>
        </div>

        <div className="container-wide px-4 pt-16">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={combosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Save More</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Frequently Bought Together
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Bundle and save! Our most popular combinations, curated for your kitchen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {combos.map((combo, index) => (
              <motion.div
                key={combo.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                animate={combosInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl border border-border overflow-hidden group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                {/* Badge */}
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {combo.badge}
                    </span>
                  </div>
                  
                  {/* Product Images */}
                  <div className="flex items-center justify-center p-6 bg-sand/50">
                    <div className="flex items-center gap-2">
                      {combo.items.map((item, i) => (
                        <div key={item.name} className="flex items-center">
                          <div className="w-20 h-20 rounded-xl overflow-hidden bg-background shadow-sm">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {i < combo.items.length - 1 && (
                            <Plus className="w-5 h-5 text-muted-foreground mx-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-foreground mb-2">{combo.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {combo.description}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-2xl font-semibold text-foreground">
                      ₹{combo.comboPrice.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{combo.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      Save ₹{combo.savings}
                    </span>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => handleAddCombo(combo)}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add Combo to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Reports CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container-narrow px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Don't Just Trust—Verify
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Every batch is tested at NABL-accredited labs. View the complete test reports 
            for any product before you buy.
          </p>
          <Link 
            to="/lab-reports"
            className="btn-secondary"
          >
            View Lab Reports
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
