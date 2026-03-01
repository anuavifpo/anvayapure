import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StoryBlock from "@/components/StoryBlock";
import TrustBadgeRow from "@/components/TrustBadgeRow";
import CTASection from "@/components/CTASection";

const About = () => {
  const team = [
    {
      name: "Vikram Patel",
      role: "Founder",
      description: "Third-generation farmer with a mission to preserve traditional food practices."
    },
    {
      name: "Priya Desai",
      role: "Quality Head",
      description: "Food scientist ensuring every batch meets our exacting standards."
    },
    {
      name: "Ramesh Joshi",
      role: "Farm Manager",
      description: "20 years of experience raising indigenous cattle using organic practices."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us - Our Story & Mission"
        description="And so, Anvaya Pure was born — to keep alive the art of making pure ghee and oils the traditional way. Meet our team and learn about our mission to bring real food back to Indian kitchens."
        canonical="/about"
        keywords="Anvaya Pure story, traditional ghee makers, organic food India, farm to table, indigenous cows"
      />
      <Header />

      {/* Breadcrumb */}
      <nav className="container-wide py-4 border-b border-border">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-foreground">About Us</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-caption uppercase tracking-widest text-primary mb-4">
                Our Story
              </span>
              <h1 className="font-serif text-display-sm md:text-display text-foreground mb-6">
                Bringing Back<br />
                <span className="text-primary">Real Food</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-6">
                AnvayaPure was born from a simple frustration: why is it so hard to find 
                truly pure ghee and oils in India—the land where these were invented?
              </p>
              <p className="text-body-lg text-muted-foreground">
                We started with a question, and found an answer in the wisdom of our grandparents. 
                Traditional methods, indigenous breeds, and honest practices. No shortcuts, no compromises.
              </p>
            </div>
            <div className="image-container aspect-square rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="AnvayaPure founders"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-heading md:text-display-sm mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl text-background/80 leading-relaxed font-serif">
            "To make pure, traditionally-crafted food accessible to every Indian family, 
            while preserving the practices and livelihoods of those who keep these traditions alive."
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-serif text-heading text-foreground mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Purity",
                description: "No additives, no preservatives, no shortcuts. Just the real thing, made the right way."
              },
              {
                title: "Tradition",
                description: "Ancient methods that have stood the test of time, preserved for future generations."
              },
              {
                title: "Transparency",
                description: "We show you exactly what goes into our products and how they're made."
              },
              {
                title: "Sustainability",
                description: "Supporting indigenous breeds, organic farming, and rural livelihoods."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl text-sage-dark">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <StoryBlock
            image="/placeholder.svg"
            imageAlt="Gir cows on our farm"
            subtitle="How It Started"
            title="A Journey Back to Our Roots"
            description="It started when our founder Vikram couldn't find ghee that tasted like what his grandmother used to make. The market was flooded with 'pure' ghee that had no aroma, no granules, no soul. He went searching for answers and found them in the villages of Gujarat, where farmers still kept indigenous breeds and made ghee the old way."
          >
            <p className="text-muted-foreground mb-4">
              What began as a personal quest became a mission. Today, we work with over 50 farming 
              families across Gujarat, supporting their traditional practices while bringing their 
              products to urban homes.
            </p>
          </StoryBlock>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-serif text-heading text-foreground mb-12 text-center">
            The People Behind AnvayaPure
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="image-container aspect-square rounded-full overflow-hidden mb-4 max-w-[200px] mx-auto">
                  <img
                    src="/placeholder.svg"
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-sand">
        <div className="container-wide">
          <h2 className="font-serif text-heading text-foreground mb-12 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Partner Families" },
              { number: "500+", label: "Gir Cows" },
              { number: "10,000+", label: "Happy Customers" },
              { number: "100%", label: "Lab Tested" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="font-serif text-display-sm text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-serif text-heading text-foreground mb-8 text-center">
            Certifications & Trust
          </h2>
          <TrustBadgeRow />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Join the Pure Food Movement"
        description="Experience the difference that tradition makes."
        primaryAction={{ label: "Shop Now", href: "/collections/ghee" }}
        secondaryAction={{ label: "Contact Us", href: "/contact" }}
        variant="highlight"
      />

      <Footer />
    </div>
  );
};

export default About;
