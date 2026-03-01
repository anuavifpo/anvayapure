import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Heart, Leaf, Users, Shield } from 'lucide-react';

const MissionVision = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const pillars = [
    {
      icon: Heart,
      title: "Preserve Tradition",
      description: "Safeguarding ancient Bilona methods passed down through generations"
    },
    {
      icon: Shield,
      title: "Ensure Purity",
      description: "Every batch lab-tested and certified for uncompromising quality"
    },
    {
      icon: Leaf,
      title: "Promote Sustainability",
      description: "Eco-conscious practices from farm to your kitchen"
    },
    {
      icon: Users,
      title: "Support Farmers",
      description: "Fair partnerships with local dairy farmers and artisans"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-foreground text-background overflow-hidden">
      <div className="container-wide px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Mission & Vision Text */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
              Our Purpose
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Blending Heritage<br />
              <span className="text-primary">with Modern Excellence</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-background/90 mb-2">Our Mission</h3>
                <p className="text-background/70 leading-relaxed">
                  To preserve and promote traditional methods of creating pure dairy and oils, 
                  ensuring every family has access to authentic, health-giving products while 
                  uplifting the communities that make them.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-background/90 mb-2">Our Vision</h3>
                <p className="text-background/70 leading-relaxed">
                  To become a trusted household name across India—synonymous with purity, 
                  tradition, and integrity—where every product tells a story of heritage 
                  meeting modern excellence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Pillars Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: prefersReducedMotion ? 0 : 0.2 + index * 0.1 
                }}
                className="group"
              >
                <div className="bg-background/5 border border-background/10 rounded-xl p-6 h-full transition-all duration-300 hover:bg-background/10 hover:border-primary/30">
                  <pillar.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-serif text-lg text-background mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-background/60 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
