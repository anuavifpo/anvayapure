import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { painPoints } from '@/data/stories';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const WhyItMattersCards = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container-wide px-4">
        <motion.div
          ref={ref}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
            The Modern Problem
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Why This Matters Today
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: prefersReducedMotion ? 0 : index * 0.15 
              }}
              className="group"
            >
              <div className="bg-background border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
                <span className="text-4xl mb-6 block">{point.icon}</span>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersCards;
