import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const ConversionCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-foreground text-background">
      <div className="container-narrow px-4 text-center">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Bring nature back to your kitchen.
          </h2>
          <p className="text-background/70 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of families who've returned to traditional, 
            pure cooking fats. Your body will thank you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ghee"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Buy Ghee Now
            </Link>
            <Link 
              to="/oil"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-colors"
            >
              Buy Oils Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionCTA;
