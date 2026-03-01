import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Variant {
  id: string;
  size: string;
  price: number;
  compareAtPrice?: number;
}

interface ProductVariantSelectorProps {
  productId: string;
  productTitle: string;
  productImage: string;
  variants: Variant[];
}

const ProductVariantSelector = ({
  productId,
  productTitle,
  productImage,
  variants
}: ProductVariantSelectorProps) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const { addItem } = useCart();
  const prefersReducedMotion = useReducedMotion();

  const handleAddToCart = () => {
    addItem({
      id: `${productId}-${selectedVariant.id}`,
      title: productTitle,
      variant: selectedVariant.size,
      price: selectedVariant.price,
      image: productImage
    });
  };

  return (
    <div className="space-y-6">
      {/* Variant Selection */}
      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-3">
          Select Size
        </label>
        <div className="flex flex-wrap gap-3">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant)}
              className={`relative px-5 py-3 rounded-xl border-2 transition-all duration-200 ${
                selectedVariant.id === variant.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {selectedVariant.id === variant.id && (
                <motion.span
                  layoutId={prefersReducedMotion ? undefined : "variant-check"}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-primary-foreground" />
                </motion.span>
              )}
              <span className="font-medium">{variant.size}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-3xl text-foreground">
          ₹{selectedVariant.price.toLocaleString()}
        </span>
        {selectedVariant.compareAtPrice && (
          <span className="text-lg text-muted-foreground line-through">
            ₹{selectedVariant.compareAtPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* Add to Cart */}
      <motion.button
        onClick={handleAddToCart}
        className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
        whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      >
        Add to Cart
      </motion.button>
    </div>
  );
};

export default ProductVariantSelector;
