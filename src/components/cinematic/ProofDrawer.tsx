import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { X, CheckCircle2, FileText, Shield } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const ProofDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <section ref={ref} className="py-24 md:py-32">
        <div className="container-narrow px-4">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
              Transparency First
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Proof, Not Promises
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Every batch is tested at independent labs. Every report is published. 
              Scan the QR on your jar to verify.
            </p>

            <motion.button
              onClick={() => setIsOpen(true)}
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 transition-colors"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <FileText className="w-5 h-5" />
              View Sample Lab Report
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
            />

            {/* Drawer */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { y: "100%" }}
              animate={prefersReducedMotion ? { opacity: 1 } : { y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl z-50 max-h-[85vh] overflow-y-auto"
            >
              <div className="p-6 md:p-8">
                {/* Handle */}
                <div className="w-12 h-1 bg-border rounded-full mx-auto mb-6" />

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full transition-colors"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-2xl">Sample Lab Report</h3>
                  </div>

                  {/* Sample Report Card */}
                  <div className="bg-muted/50 rounded-2xl p-6 mb-6">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Batch ID</p>
                        <p className="font-mono text-lg">#APG-2024-0892</p>
                      </div>
                      <motion.div
                        initial={prefersReducedMotion ? {} : { scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="flex items-center gap-2 bg-sage/20 text-sage-dark px-4 py-2 rounded-full"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-medium">Verified</span>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-background rounded-xl p-4">
                        <p className="text-sm text-muted-foreground mb-1">Product</p>
                        <p className="font-medium">A2 Desi Ghee (Bilona)</p>
                      </div>
                      <div className="bg-background rounded-xl p-4">
                        <p className="text-sm text-muted-foreground mb-1">Test Date</p>
                        <p className="font-medium">Dec 15, 2024</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground">Moisture Content</span>
                        <span className="font-medium text-green-600">0.12% ✓</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground">Free Fatty Acids</span>
                        <span className="font-medium text-green-600">0.28% ✓</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground">Butyric Acid (A2 Marker)</span>
                        <span className="font-medium text-green-600">Present ✓</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-muted-foreground">Adulterants</span>
                        <span className="font-medium text-green-600">Not Detected ✓</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    Tested at NABL-accredited laboratory. Full report available via QR code on product.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProofDrawer;
