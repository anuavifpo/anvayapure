import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import NatureHero from '@/components/cinematic/NatureHero';
import WhyItMattersCards from '@/components/cinematic/WhyItMattersCards';
import SplitNavigator from '@/components/cinematic/SplitNavigator';
import MissionVision from '@/components/cinematic/MissionVision';
import ProofDrawer from '@/components/cinematic/ProofDrawer';
import ConversionCTA from '@/components/cinematic/ConversionCTA';
import QuickBuyButton from '@/components/cinematic/QuickBuyButton';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const CinematicIndex = () => {
  useSmoothScroll();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Anvaya Pure",
    "description": "Premium A2 Desi Cow Ghee and Cold Pressed Mustard Oils made using traditional Bilona method",
    "url": "https://anvayapure.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="A2 Desi Cow Ghee, Cold Pressed Oils - Bilona Method"
        description="Experience Anvaya Pure: Premium A2 Desi Cow Ghee from Sahiwal cows, made using the traditional Bilona method. 100% natural, FSSAI certified, lab-tested. Rich in taste and nutrition."
        canonical="/"
        keywords="A2 ghee, desi cow ghee, bilona ghee, cold pressed mustard oil, Sahiwal cow ghee, organic ghee, FSSAI certified"
        jsonLd={jsonLd}
      />
      <Header />
      <NatureHero />
      <WhyItMattersCards />
      <SplitNavigator />
      <MissionVision />
      <ProofDrawer />
      <ConversionCTA />
      <Footer />
      <QuickBuyButton />
    </div>
  );
};

export default CinematicIndex;
