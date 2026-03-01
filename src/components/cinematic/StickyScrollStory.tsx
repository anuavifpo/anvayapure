import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { StoryStep } from '@/data/stories';

interface StickyScrollStoryProps {
  steps: StoryStep[];
  title: string;
  subtitle: string;
}

const StickyScrollStory = ({ steps, title, subtitle }: StickyScrollStoryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which step we're on based on scroll
  const stepIndex = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);

  if (prefersReducedMotion) {
    // Reduced motion fallback - static stepper
    return (
      <section className="py-24 md:py-32">
        <div className="container-wide px-4">
          <div className="text-center mb-16">
            <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
              {subtitle}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              {title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div key={step.id} className="bg-muted/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {step.id}
                  </span>
                  <h3 className="font-serif text-lg">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{step.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="relative"
      style={{ height: `${steps.length * 100}vh` }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {steps.map((step, index) => (
          <StepContent
            key={step.id}
            step={step}
            index={index}
            totalSteps={steps.length}
            scrollProgress={scrollYProgress}
            title={title}
            subtitle={subtitle}
          />
        ))}

        {/* Chapter Indicator */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-20">
          {steps.map((step, index) => (
            <ChapterDot 
              key={step.id} 
              index={index} 
              stepIndex={stepIndex}
              totalSteps={steps.length}
            />
          ))}
        </div>

        {/* Mobile Step Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden z-20">
          <motion.div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
            <StepCounter stepIndex={stepIndex} totalSteps={steps.length} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface StepContentProps {
  step: StoryStep;
  index: number;
  totalSteps: number;
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  title: string;
  subtitle: string;
}

const StepContent = ({ step, index, totalSteps, scrollProgress, title, subtitle }: StepContentProps) => {
  const stepProgress = 1 / totalSteps;
  const start = index * stepProgress;
  const end = (index + 1) * stepProgress;
  const middle = start + stepProgress / 2;

  const opacity = useTransform(
    scrollProgress,
    [start, start + 0.05, middle, end - 0.05, end],
    index === 0 
      ? [1, 1, 1, 0.3, 0] 
      : index === totalSteps - 1 
        ? [0, 0.3, 1, 1, 1]
        : [0, 0.3, 1, 0.3, 0]
  );

  const scale = useTransform(
    scrollProgress,
    [start, middle, end],
    [0.95, 1, 0.95]
  );

  const y = useTransform(
    scrollProgress,
    [start, middle, end],
    [30, 0, -30]
  );

  return (
    <motion.div
      className={`absolute inset-0 ${step.colorTemp} flex items-center`}
      style={{ opacity }}
    >
      <div className="container-wide px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div className="lg:pl-20" style={{ y }}>
          {index === 0 && (
            <div className="mb-8">
              <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
                {subtitle}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
                {title}
              </h2>
            </div>
          )}
          <div className="flex items-start gap-4">
            <span className="font-serif text-6xl md:text-7xl text-primary/20">
              {String(step.id).padStart(2, '0')}
            </span>
            <div className="pt-2">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-lg max-w-md">
                {step.caption}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div 
          className="relative aspect-square max-w-lg mx-auto lg:mx-0"
          style={{ scale }}
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface ChapterDotProps {
  index: number;
  stepIndex: ReturnType<typeof useTransform<number, number>>;
  totalSteps: number;
}

const ChapterDot = ({ index, stepIndex, totalSteps }: ChapterDotProps) => {
  const isActive = useTransform(stepIndex, (v) => Math.round(v) === index);
  const scale = useTransform(isActive, (active) => active ? 1.5 : 1);
  const opacity = useTransform(isActive, (active) => active ? 1 : 0.4);

  return (
    <motion.div
      className="relative flex items-center gap-3"
      style={{ opacity }}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-primary"
        style={{ scale }}
      />
      <motion.span 
        className="text-xs font-medium text-foreground whitespace-nowrap"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        Step {String(index + 1).padStart(2, '0')}
      </motion.span>
    </motion.div>
  );
};

interface StepCounterProps {
  stepIndex: ReturnType<typeof useTransform<number, number>>;
  totalSteps: number;
}

const StepCounter = ({ stepIndex, totalSteps }: StepCounterProps) => {
  const currentStep = useTransform(stepIndex, (v) => Math.round(v) + 1);
  
  return (
    <motion.span className="text-sm font-medium text-foreground">
      Step <motion.span>{currentStep}</motion.span> of {totalSteps}
    </motion.span>
  );
};

export default StickyScrollStory;
