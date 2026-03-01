import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import TrustBadgeRow from "@/components/TrustBadgeRow";
import StoryBlock from "@/components/StoryBlock";
import CTASection from "@/components/CTASection";
import { getFeaturedProducts } from "@/data/products";
import { collections } from "@/data/collections";

import heroGhee from "@/assets/hero-ghee.jpg";
import bilonaProcess from "@/assets/bilona-process.jpg";
import labTesting from "@/assets/lab-testing.jpg";
import oilsCollection from "@/assets/oils-collection.jpg";

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-sand overflow-hidden">
        <div className="container-wide py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <span className="inline-block text-caption uppercase tracking-widest text-primary mb-4">
                Pure • Traditional • Trusted
              </span>
              <h1 className="font-serif text-display-sm md:text-display text-foreground mb-6 text-balance">
                Pure Ghee & Oils,<br />
                <span className="text-primary">Made the Old Way</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8 max-w-lg">
                Experience the taste of tradition with our A2 Desi Ghee and cold-pressed oils. 
                Handcrafted using ancient methods, lab-tested for purity, 
                and delivered fresh from our farms to your kitchen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/collections/ghee" className="btn-primary">
                  Shop A2 Ghee
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/our-process" className="btn-secondary">
                  <Play className="w-4 h-4 mr-2" />
                  See Our Process
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="image-container aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroGhee}
                  alt="A2 Desi Ghee jar with golden ghee"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:left-auto md:-right-4 bg-background shadow-xl rounded-lg p-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Every Batch</p>
                    <p className="text-xs text-muted-foreground">Lab Tested & Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-b border-border">
        <div className="container-wide">
          <TrustBadgeRow />
        </div>
      </section>

      {/* Collections Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-serif text-heading md:text-display-sm text-foreground mb-4">
              Our Collections
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our range of traditionally crafted ghee and cold-pressed oils, 
              each made with care and verified for purity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {collections.map((collection, index) => (
              <Link
                key={collection.id}
                to={`/collections/${collection.handle}`}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="image-container aspect-[16/9]">
                  <img
                    src={index === 0 ? heroGhee : oilsCollection}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-caption uppercase text-background/70 mb-2">
                    {collection.productCount} {collection.productCount === 1 ? 'Product' : 'Products'}
                  </p>
                  <h3 className="font-serif text-subheading md:text-heading text-background mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-background/80 mb-4 line-clamp-2">
                    {collection.subtitle}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-background group-hover:translate-x-2 transition-transform">
                    Explore Collection
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-serif text-heading md:text-display-sm text-foreground mb-2">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Our most loved products, trusted by thousands of families.
              </p>
            </div>
            <Link to="/collections/ghee" className="btn-ghost">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Story */}
      <section className="section-padding">
        <div className="container-wide">
          <StoryBlock
            image={bilonaProcess}
            imageAlt="Traditional Bilona churning process"
            subtitle="The Bilona Method"
            title="Crafted With Care, The Ancient Way"
            description="Our A2 ghee is made using the traditional Bilona method—a labor of love passed down through generations. We culture A2 milk into curd, hand-churn it to extract butter, and slow-cook it over wood fire. The result is a ghee of unmatched purity and aroma."
          >
            <Link to="/our-process" className="btn-secondary">
              Learn More About Our Process
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </StoryBlock>
        </div>
      </section>

      {/* Why Different */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-serif text-heading md:text-display-sm mb-4">
              Why AnvayaPure is Different
            </h2>
            <p className="text-background/70 text-body-lg max-w-2xl mx-auto">
              We're not just selling products—we're preserving traditions and building trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Process Before Price",
                description: "We show you exactly how your ghee is made before asking you to buy. Transparency isn't a feature—it's our foundation."
              },
              {
                number: "02",
                title: "Verified Purity",
                description: "Every batch is tested at NABL-accredited labs. We publish the results. No hidden ingredients, no compromises."
              },
              {
                number: "03",
                title: "Direct From Source",
                description: "We work directly with farmers and artisans. You know exactly where your food comes from and who made it."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <span className="font-serif text-6xl text-background/10 absolute -top-4 left-0">
                  {item.number}
                </span>
                <div className="pt-12">
                  <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                  <p className="text-background/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Reports Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <StoryBlock
            image={labTesting}
            imageAlt="Lab testing equipment and certificates"
            subtitle="Trust & Verification"
            title="Every Batch Tested. Every Report Published."
            description="We believe trust is earned, not claimed. That's why we test every batch of our products at independent, NABL-accredited laboratories and publish the complete reports online. Just enter your batch number to see exactly what's in your jar."
            reverse
          >
            <Link to="/lab-reports" className="btn-primary">
              View Lab Reports
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </StoryBlock>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-sand">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-heading md:text-display-sm text-foreground mb-12">
            What Our Customers Say
          </h2>
          <div className="max-w-3xl mx-auto">
            <blockquote className="font-serif text-subheading md:text-heading text-foreground mb-6 leading-relaxed">
              "The aroma when you open the jar—that's when you know it's real. 
              My grandmother used to make ghee exactly like this."
            </blockquote>
            <cite className="not-italic">
              <span className="block text-base font-medium text-foreground">Priya Sharma</span>
              <span className="text-sm text-muted-foreground">Mumbai, Maharashtra</span>
            </cite>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Taste the Difference?"
        description="Join thousands of families who've made the switch to pure, traditional ghee and oils."
        primaryAction={{ label: "Shop Now", href: "/collections/ghee" }}
        secondaryAction={{ label: "Compare Products", href: "/compare" }}
        variant="highlight"
      />

      <Footer />
    </div>
  );
};

export default Index;
