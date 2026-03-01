import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { comparisons } from "@/data/comparison";
import { faqs } from "@/data/faqs";

const Compare = () => {
  const processFaqs = faqs.filter(f => f.category === 'process').slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <nav className="container-wide py-4 border-b border-border">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-foreground">Compare Products</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <span className="inline-block text-caption uppercase tracking-widest text-primary mb-4">
            Make an Informed Choice
          </span>
          <h1 className="font-serif text-display-sm md:text-display text-foreground mb-6">
            Compare & Understand
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            See how traditional methods compare to industrial alternatives. 
            We believe that understanding the difference helps you make better choices for your family.
          </p>
        </div>
      </section>

      {/* Ghee Comparison */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          {comparisons.map((comparison) => (
            <div key={comparison.id} className="mb-16 last:mb-0">
              <div className="max-w-2xl mb-8">
                <h2 className="font-serif text-heading text-foreground mb-3">
                  {comparison.title}
                </h2>
                <p className="text-muted-foreground">
                  {comparison.description}
                </p>
              </div>
              <ComparisonTable comparison={comparison} />
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-serif text-heading text-foreground mb-12 text-center">
            Key Takeaways
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-sage/10 p-8 rounded-xl">
              <h3 className="font-serif text-xl text-foreground mb-4">More Milk, Better Ghee</h3>
              <p className="text-muted-foreground">
                Bilona ghee requires 25-30 liters of milk per liter of ghee, compared to 
                10-15 liters for industrial methods. This means more nutrients and richer flavor.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-xl">
              <h3 className="font-serif text-xl text-foreground mb-4">A2 vs A1 Matters</h3>
              <p className="text-muted-foreground">
                A2 milk from indigenous breeds is easier to digest and has been linked to 
                better gut health. Our ghee is made exclusively from A2 Gir cow milk.
              </p>
            </div>
            <div className="bg-sage/10 p-8 rounded-xl">
              <h3 className="font-serif text-xl text-foreground mb-4">Cold-Pressed Preserves</h3>
              <p className="text-muted-foreground">
                Industrial refining removes nutrients along with impurities. Cold-pressing 
                preserves natural antioxidants, vitamins, and the oil's distinctive flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Comparison */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide">
          <h2 className="font-serif text-heading md:text-display-sm mb-12 text-center">
            The Visual Difference
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="image-container aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src="/placeholder.svg"
                  alt="AnvayaPure A2 Ghee - golden and granular"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-2">AnvayaPure A2 Ghee</h3>
              <p className="text-background/70 text-sm">
                Golden color, granular texture, rich aroma. The hallmarks of traditionally made ghee.
              </p>
            </div>
            <div>
              <div className="image-container aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Industrial ghee - pale and smooth"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-2">Industrial Ghee</h3>
              <p className="text-background/70 text-sm">
                Pale yellow, smooth texture, mild aroma. Efficient production, but lacking character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-narrow">
          <FAQAccordion faqs={processFaqs} title="Common Questions About Our Process" />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Make the Switch?"
        description="Join thousands of families who've chosen tradition over industrial."
        primaryAction={{ label: "Shop A2 Ghee", href: "/collections/ghee" }}
        secondaryAction={{ label: "View Lab Reports", href: "/lab-reports" }}
        variant="highlight"
      />

      <Footer />
    </div>
  );
};

export default Compare;
