import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLanguage();
  return (
    <section className="relative h-screen min-h-screen flex items-end justify-center overflow-hidden bg-background">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full gradient-purple opacity-20 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full gradient-coral opacity-15 blur-[100px]" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full gradient-teal opacity-10 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 text-center pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] text-white mb-6 font-body font-light"
        >
          {ui.hero.eyebrow[lang]}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-8"
        >
          {ui.hero.headlineStart[lang]}
          <br />
          {ui.hero.headlineMid[lang]}
          <span className="text-gradient-warm italic">
            {ui.hero.headlineAccent[lang]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 font-body font-normal"
        >
          {ui.hero.description[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="gradient-warm px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
          >
            {ui.hero.ctaPrimary[lang]}
          </Link>
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
          >
            {ui.hero.ctaSecondary[lang]}
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
