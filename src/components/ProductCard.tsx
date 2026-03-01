import { Link } from "react-router-dom";
import { type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const lowestPrice = Math.min(...product.variants.map(v => v.price));
  const hasDiscount = product.variants.some(v => v.compareAtPrice);

  return (
    <Link
      to={`/products/${product.handle}`}
      className="group block"
    >
      <article className="bg-card rounded-lg overflow-hidden card-hover">
        {/* Image */}
        <div className="image-container aspect-square">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {hasDiscount && (
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded">
              Sale
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-caption uppercase text-muted-foreground mb-1">
            {product.collection === 'ghee' ? 'A2 Ghee' : 'Cold-Pressed Oil'}
          </p>
          <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.subtitle}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-base font-medium text-foreground">
              From ₹{lowestPrice.toLocaleString()}
            </span>
            {hasDiscount && product.variants[0].compareAtPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.variants[0].compareAtPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
