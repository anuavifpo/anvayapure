import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import anvayaLogo from "@/assets/anvaya-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={anvayaLogo} 
                alt="AnvayaPure" 
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Premium organic ghee and cold-pressed oils, crafted using traditional methods. 
              From our farms to your kitchen, with transparency at every step.
            </p>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <a href="mailto:hello@anvayapure.com" className="flex items-center gap-3 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                hello@anvayapure.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Ahmedabad, Gujarat, India
              </span>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link to="/collections/ghee" className="hover:text-background transition-colors">A2 Desi Ghee</Link>
              </li>
              <li>
                <Link to="/collections/oils" className="hover:text-background transition-colors">Cold-Pressed Oils</Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-background transition-colors">Compare Products</Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-serif text-lg mb-6">Learn</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link to="/blog" className="hover:text-background transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/lab-reports" className="hover:text-background transition-colors">Lab Reports</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-background transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-background transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Trust & Quality */}
          <div>
            <h4 className="font-serif text-lg mb-6">Trust & Quality</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">✓</span>
                FSSAI Certified
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">✓</span>
                Every Batch Lab Tested
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">✓</span>
                No Preservatives or Additives
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">✓</span>
                Traditional Methods Only
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">✓</span>
                Direct Farm Sourcing
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>© {currentYear} AnvayaPure. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
              <Link to="/shipping" className="hover:text-background transition-colors">Shipping</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
