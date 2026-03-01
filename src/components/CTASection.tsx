import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  variant?: "default" | "highlight";
}

const CTASection = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "default"
}: CTASectionProps) => {
  return (
    <section className={`section-padding ${
      variant === "highlight" ? "bg-foreground text-background" : "bg-muted"
    }`}>
      <div className="container-narrow text-center">
        <h2 className="font-serif text-display-sm mb-4">{title}</h2>
        {description && (
          <p className={`text-body-lg mb-8 max-w-2xl mx-auto ${
            variant === "highlight" ? "text-background/70" : "text-muted-foreground"
          }`}>
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryAction.href}
            className={variant === "highlight" ? "btn-primary bg-background text-foreground hover:bg-background/90" : "btn-primary"}
          >
            {primaryAction.label}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          {secondaryAction && (
            <Link
              to={secondaryAction.href}
              className={`btn-ghost ${variant === "highlight" ? "text-background hover:text-background/80" : ""}`}
            >
              {secondaryAction.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
