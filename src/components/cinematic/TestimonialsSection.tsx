import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    text: "The aroma when you open the jar—that's when you know it's real. My grandmother used to make ghee exactly like this.",
    rating: 5
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    text: "Finally, a ghee that doesn't leave that heavy feeling. The Bilona method makes all the difference.",
    rating: 5
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Ahmedabad",
    text: "Been using their cold-pressed oils for 6 months. My family noticed the difference in taste immediately.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30">
      <div className="container-wide px-4">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-caption uppercase tracking-widest text-primary mb-4 block">
            Real Stories
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : index * 0.15 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
