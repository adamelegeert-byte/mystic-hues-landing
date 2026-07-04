import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, TrendingUp, Camera } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/translations";

const serviceMeta = [
  {
    icon: Sparkles,
    gradient: "gradient-purple",
    glow: "glow-purple",
  },
  {
    icon: TrendingUp,
    gradient: "gradient-warm",
    glow: "glow-coral",
  },
  {
    icon: Camera,
    gradient: "gradient-teal",
    glow: "glow-teal",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const services = serviceMeta.map((meta, i) => ({
    ...meta,
    title: ui.services.items[i].title[lang],
    description: ui.services.items[i].description[lang],
  }));

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full gradient-teal opacity-10 blur-[120px]" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-body">
            {ui.services.eyebrow[lang]}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            {ui.services.title[lang]}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card rounded-2xl p-8 md:p-10 border border-border hover:border-accent/30 transition-all duration-500"
            >
              <div
                className={`w-14 h-14 rounded-xl ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 rounded-2xl ${service.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
