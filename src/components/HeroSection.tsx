import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Creative abstract background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full gradient-purple opacity-20 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full gradient-coral opacity-15 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body"
        >
          Dream It, Design It, Do It
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
        >
          We Craft Stories
          <br />
          That <span className="text-gradient-warm italic">Convert</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
        >
          We blend creative vision with commercial strategy to build brands that
          stand out and drive measurable results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="gradient-purple px-8 py-4 rounded-full text-accent-foreground font-medium hover:opacity-90 transition-opacity glow-purple"
          >
            Start Your Project
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
