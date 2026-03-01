import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import TrustBadgeRow from "@/components/TrustBadgeRow";
import CTASection from "@/components/CTASection";
import { getCollectionByHandle, collections } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import { ChevronRight } from "lucide-react";

const CollectionPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const collection = getCollectionByHandle(handle || "");
  const products = getProductsByCollection(handle || "");

  if (!collection) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-wide section-padding text-center">
          <h1 className="font-serif text-display-sm text-foreground mb-4">
            Collection Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The collection you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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
          <li>
            <Link to="/collections/ghee" className="hover:text-foreground transition-colors">Collections</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-foreground">{collection.title}</li>
        </ol>
      </nav>

      {/* Collection Header */}
      <section className="container-wide section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-display-sm md:text-display text-foreground mb-4">
              {collection.title}
            </h1>
            <p className="text-caption uppercase text-primary mb-4">
              {collection.subtitle}
            </p>
            <p className="text-body-lg text-muted-foreground mb-8">
              {collection.description}
            </p>
            <div className="flex gap-4">
              {collections.map((col) => (
                <Link
                  key={col.id}
                  to={`/collections/${col.handle}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    col.handle === handle
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {col.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="image-container aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src={collection.image}
              alt={collection.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 border-y border-border bg-muted/30">
        <div className="container-wide">
          <TrustBadgeRow variant="compact" />
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-heading text-foreground">
              {products.length} {products.length === 1 ? 'Product' : 'Products'}
            </h2>
          </div>

          {products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No products found in this collection.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Have Questions?"
        description="Learn about our traditional process or view our lab reports for complete transparency."
        primaryAction={{ label: "Our Process", href: "/our-process" }}
        secondaryAction={{ label: "Lab Reports", href: "/lab-reports" }}
      />

      <Footer />
    </div>
  );
};

export default CollectionPage;
