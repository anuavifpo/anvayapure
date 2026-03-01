import { Shield, Leaf, FlaskConical, Award, Truck, Recycle } from "lucide-react";

interface TrustBadge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TrustBadgeRowProps {
  variant?: "default" | "compact";
}

const badges: TrustBadge[] = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "100% Pure",
    description: "No additives or preservatives"
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: "Lab Tested",
    description: "Every batch verified"
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Traditional",
    description: "Ancient methods preserved"
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "FSSAI Certified",
    description: "Government approved"
  },
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Pan India Delivery",
    description: "Secure packaging"
  },
  {
    icon: <Recycle className="w-5 h-5" />,
    title: "Sustainable",
    description: "Eco-friendly practices"
  }
];

const TrustBadgeRow = ({ variant = "default" }: TrustBadgeRowProps) => {
  const displayBadges = variant === "compact" ? badges.slice(0, 4) : badges;

  return (
    <div className={`grid gap-4 ${
      variant === "compact" 
        ? "grid-cols-2 md:grid-cols-4" 
        : "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }`}>
      {displayBadges.map((badge, index) => (
        <div
          key={index}
          className={`flex items-start gap-3 p-4 rounded-lg bg-muted/50 ${
            variant === "compact" ? "" : "md:flex-col md:items-center md:text-center"
          }`}
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-sage-dark">
            {badge.icon}
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground">{badge.title}</h4>
            <p className="text-xs text-muted-foreground mt-0.5">{badge.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadgeRow;
