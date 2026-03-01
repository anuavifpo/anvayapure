import { type ProductVariant } from "@/data/products";

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariant: ProductVariant;
  onSelect: (variant: ProductVariant) => void;
}

const VariantSelector = ({ variants, selectedVariant, onSelect }: VariantSelectorProps) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Size</label>
      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => onSelect(variant)}
            disabled={!variant.inStock}
            className={`relative px-5 py-3 rounded-md border text-sm font-medium transition-all ${
              selectedVariant.id === variant.id
                ? "border-primary bg-primary/5 text-foreground"
                : variant.inStock
                ? "border-border hover:border-primary/50 text-foreground"
                : "border-border bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            <span>{variant.size}</span>
            {!variant.inStock && (
              <span className="absolute -top-2 -right-2 text-xs bg-muted-foreground text-background px-2 py-0.5 rounded">
                Sold Out
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VariantSelector;
