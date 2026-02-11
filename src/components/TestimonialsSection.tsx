import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "They didn't just create content — they built an entire visual universe around our brand. Sales increased 40% in three months.",
    name: "Sophie Martin",
    role: "CEO, Luxe Cosmetics",
    gradient: "gradient-purple",
  },
  {
    quote:
      "The strategy was sharp, the execution flawless. Our social engagement tripled and we finally had a cohesive brand voice.",
    name: "Antoine Duval",
    role: "Founder, Maison Duval",
    gradient: "gradient-warm",
  },
  {
    quote:
      "Working with this team felt like having an in-house creative department. They understood our vision from day one.",
    name: "Clara Rodriguez",
    role: "Marketing Director, Atelier Blanc",
    gradient: "gradient-teal",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full gradient-coral opacity-5 blur-[150px]" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-body">
            Client Love
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            What They Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-card rounded-2xl p-8 md:p-10 border border-border"
            >
              <div className={`w-10 h-10 rounded-lg ${testimonial.gradient} flex items-center justify-center mb-6`}>
                <Quote className="w-5 h-5 text-accent-foreground" />
              </div>
              <p className="text-foreground/90 font-body leading-relaxed mb-8 text-lg italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-lg">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm font-body">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
