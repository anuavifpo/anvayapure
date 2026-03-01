import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import heroGhee from '@/assets/hero-ghee.jpg';

const NatureHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const trustChips = [
    "Bilona Method",
    "Sahiwal A2 Milk", 
    "Lab-Tested (QR Proof)"
  ];

  return (
    <section 
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={prefersReducedMotion ? {} : { y }}
      >
        {/* Strong overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background z-10" />
        <div className="absolute inset-0 bg-foreground/20 z-[5]" />
        <img
          src={heroGhee}
          alt="Golden ghee in natural light"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-20 container-wide text-center px-4"
        style={prefersReducedMotion ? {} : { opacity }}
      >
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.1] tracking-tight drop-shadow-sm">
            Return to real fat.<br />
            <span className="text-primary drop-shadow-sm">Cook the way your body understands.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 drop-shadow-sm">
            Traditional A2 ghee & cold-pressed oils—made slowly, tested rigorously, 
            delivered fresh to your kitchen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link 
              to="/ghee" 
              className="btn-primary text-base px-8 py-4"
            >
              Buy A2 Ghee
            </Link>
            <Link 
              to="/oil" 
              className="btn-secondary text-base px-8 py-4"
            >
              Buy Cold-Pressed Oils
            </Link>
          </div>

          {/* Trust Chips */}
          <div className="flex flex-wrap gap-3 justify-center">
            {trustChips.map((chip, index) => (
              <motion.span
                key={chip}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-full text-sm text-foreground/80"
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs text-foreground/70 tracking-wide uppercase drop-shadow-sm">
          Scroll to see why it matters
        </span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NatureHero;
