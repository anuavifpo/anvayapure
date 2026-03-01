import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ChevronRight, Minus, Plus, ShoppingBag, Truck, Shield, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import VariantSelector from "@/components/VariantSelector";
import TrustBadgeRow from "@/components/TrustBadgeRow";
import LabReportPreview from "@/components/LabReportPreview";
import FAQAccordion from "@/components/FAQAccordion";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { getProductByHandle, products as allProducts, type ProductVariant } from "@/data/products";
import { getLabReportById } from "@/data/labReports";
import { faqs } from "@/data/faqs";

const ProductPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const product = getProductByHandle(handle || "");
  
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product?.variants[0] || null
  );
  const [quantity, setQuantity] = useState(1);

  if (!product || !selectedVariant) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-wide section-padding text-center">
          <h1 className="font-serif text-display-sm text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const labReport = product.labReportId ? getLabReportById(product.labReportId) : null;
  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && p.collection === product.collection)
    .slice(0, 3);

  const productFaqs = faqs.filter(f => 
    f.category === 'usage' || f.category === 'quality'
  ).slice(0, 4);

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
            <Link to={`/collections/${product.collection}`} className="hover:text-foreground transition-colors">
              {product.collection === 'ghee' ? 'A2 Ghee' : 'Oils'}
            </Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-foreground">{product.title}</li>
        </ol>
      </nav>

      {/* Product Section */}
      <section className="container-wide section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} productName={product.title} />

          {/* Product Info */}
          <div className="lg:pt-4">
            <p className="text-caption uppercase text-primary mb-2">
              {product.collection === 'ghee' ? 'A2 Desi Ghee' : 'Cold-Pressed Oil'}
            </p>
            <h1 className="font-serif text-display-sm text-foreground mb-2">
              {product.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {product.subtitle}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-2xl font-medium text-foreground">
                ₹{selectedVariant.price.toLocaleString()}
              </span>
              {selectedVariant.compareAtPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{selectedVariant.compareAtPrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-primary font-medium">
                    Save ₹{(selectedVariant.compareAtPrice - selectedVariant.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Variant Selector */}
            <div className="mb-6">
              <VariantSelector
                variants={product.variants}
                selectedVariant={selectedVariant}
                onSelect={setSelectedVariant}
              />
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm font-medium text-foreground mb-3 block">Quantity</label>
              <div className="flex items-center gap-1 border border-border rounded-md w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-muted transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-muted transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className="btn-primary w-full mb-4"
              disabled={!selectedVariant.inStock}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              {selectedVariant.inStock ? 'Add to Cart' : 'Sold Out'}
            </button>

            {/* Quick Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border mb-6">
              <div className="text-center">
                <Truck className="w-5 h-5 mx-auto mb-2 text-sage-dark" />
                <p className="text-xs text-muted-foreground">Free Shipping<br />over ₹999</p>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 mx-auto mb-2 text-sage-dark" />
                <p className="text-xs text-muted-foreground">100% Pure<br />Guaranteed</p>
              </div>
              <div className="text-center">
                <Award className="w-5 h-5 mx-auto mb-2 text-sage-dark" />
                <p className="text-xs text-muted-foreground">FSSAI<br />Certified</p>
              </div>
            </div>

            {/* Lab Report Link */}
            {labReport && (
              <div className="mb-6">
                <LabReportPreview report={labReport} variant="compact" />
              </div>
            )}

            {/* Description */}
            <div className="prose-brand">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="bg-muted/30 section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Features */}
            <div>
              <h3 className="font-serif text-lg text-foreground mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-sage mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="font-serif text-lg text-foreground mb-4">Ingredients</h3>
              <ul className="space-y-2">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div>
              <h3 className="font-serif text-lg text-foreground mb-4">How to Use</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.usage}
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-serif text-lg text-foreground mb-4">Certifications</h3>
              <ul className="space-y-2">
                {product.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-sage-dark mt-0.5 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-serif text-heading text-foreground mb-6">About This Product</h2>
          <p className="prose-brand text-body-lg">{product.longDescription}</p>
        </div>
      </section>

      {/* Lab Report Full */}
      {labReport && (
        <section className="section-padding bg-muted/30">
          <div className="container-narrow">
            <h2 className="font-serif text-heading text-foreground mb-8 text-center">
              Lab Report & Verification
            </h2>
            <LabReportPreview report={labReport} />
          </div>
        </section>
      )}

      {/* Trust Badges */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-serif text-heading text-foreground mb-8 text-center">
            Our Promise to You
          </h2>
          <TrustBadgeRow />
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <FAQAccordion faqs={productFaqs} title="Frequently Asked Questions" />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="font-serif text-heading text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title="Questions About This Product?"
        description="Our team is here to help. Contact us for any queries about our products or process."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "View All Products", href: "/collections/ghee" }}
      />

      <Footer />
    </div>
  );
};

export default ProductPage;
