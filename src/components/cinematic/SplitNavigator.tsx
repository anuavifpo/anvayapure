import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import productGheeJar from '@/assets/product-ghee-jar.jpg';
import productMustardOil from '@/assets/product-mustard-oil.jpg';

const SplitNavigator = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  const sides = [
    {
      id: 'left',
      title: 'A2 Ghee',
      tagline: 'Slow-made. Aromatic. Traditional.',
      link: '/ghee',
      cta: 'Explore Ghee',
      image: productGheeJar,
      gradient: 'from-amber-900/80'
    },
    {
      id: 'right',
      title: 'Cold-Pressed Oils',
      tagline: 'Wood-pressed. Bold. Everyday cooking.',
      link: '/oil',
      cta: 'Explore Oils',
      image: productMustardOil,
      gradient: 'from-stone-900/80'
    }
  ];

  return (
    <section ref={ref} className="py-4">
      <div className="container-wide px-4">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
            Choose Your Path
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Two Traditions, One Promise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 min-h-[500px] md:min-h-[600px]">
          {sides.map((side, index) => (
            <motion.div
              key={side.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: index === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
              className="relative group"
              onMouseEnter={() => setHoveredSide(side.id as 'left' | 'right')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <Link to={side.link} className="block h-full">
                <div className="relative h-full overflow-hidden rounded-2xl">
                  {/* Background Image */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: hoveredSide === side.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <img
                      src={side.image}
                      alt={side.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${side.gradient} via-transparent to-transparent`} />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                    <motion.div
                      animate={{
                        y: hoveredSide === side.id ? -10 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">
                        {side.title}
                      </h3>
                      <p className="text-white/80 text-lg mb-6">
                        {side.tagline}
                      </p>
                      <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all duration-300">
                        {side.cta}
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SplitNavigator;
