import { Check, X } from "lucide-react";
import { type ProductComparison } from "@/data/comparison";

interface ComparisonTableProps {
  comparison: ProductComparison;
}

const ComparisonTable = ({ comparison }: ComparisonTableProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      {/* Header */}
      <div className="grid grid-cols-3 bg-muted">
        <div className="p-4 border-b border-r border-border">
          <span className="text-sm font-medium text-muted-foreground">Feature</span>
        </div>
        <div className="p-4 border-b border-r border-border bg-sage/10">
          <span className="text-sm font-medium text-foreground">AnvayaPure</span>
        </div>
        <div className="p-4 border-b border-border">
          <span className="text-sm font-medium text-muted-foreground">Conventional</span>
        </div>
      </div>

      {/* Rows */}
      {comparison.items.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-3 ${
            item.highlight ? 'bg-primary/5' : index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
          }`}
        >
          <div className="p-4 border-b border-r border-border">
            <span className={`text-sm ${item.highlight ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
              {item.feature}
            </span>
          </div>
          <div className="p-4 border-b border-r border-border flex items-center gap-2">
            <Check className="w-4 h-4 text-sage flex-shrink-0" />
            <span className="text-sm text-foreground">{item.ourProduct}</span>
          </div>
          <div className="p-4 border-b border-border flex items-center gap-2">
            {item.ourProduct !== item.conventional && (
              <X className="w-4 h-4 text-destructive/60 flex-shrink-0" />
            )}
            <span className="text-sm text-muted-foreground">{item.conventional}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComparisonTable;
