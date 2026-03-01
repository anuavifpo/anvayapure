import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const QuickBuyButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const { totalItems, openCart } = useCart();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setIsVisible(value > 0.25);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={openCart}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors md:px-6 md:py-4"
          aria-label="Open cart"
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="font-medium hidden sm:inline">Quick Buy</span>
          {totalItems > 0 && (
            <span className="bg-background text-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default QuickBuyButton;
