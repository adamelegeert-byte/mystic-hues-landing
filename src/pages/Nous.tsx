import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import martinProfile from "@/assets/martin-profile.jpg.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/translations";

const founderMeta = [
  { key: "Martin", gradient: "gradient-purple", glow: "glow-purple", image: martinProfile.url },
  { key: "Adam", gradient: "gradient-warm", glow: "glow-coral" },
  { key: "Khan", gradient: "gradient-teal", glow: "glow-teal" },
];

const Nous = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-screen min-h-screen flex items-end justify-center overflow-hidden bg-background">
        {/* Background video */}
        <div className="absolute inset-0">
          <video
            src={heroVideo.url}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 container mx-auto px-6 text-center pb-20 md:pb-28"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white mb-4 font-body font-light">
            {ui.about.eyebrow[lang]}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold">
            {ui.about.title[lang]}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 font-body leading-relaxed">
            {ui.about.description[lang]}
          </p>
        </motion.div>
      </section>

      <main className="pt-24 pb-24 md:pt-32 md:pb-32 relative overflow-hidden">
        <div className="absolute top-10 left-0 w-80 h-80 rounded-full gradient-warm opacity-10 blur-[120px]" />

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {founderMeta.map((founder, index) => (
              <motion.article
                key={founder.key}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-card rounded-2xl p-8 md:p-10 border border-border hover:border-accent/30 transition-all duration-500"
              >
                <div
                  className={`w-24 h-24 rounded-full ${founder.gradient} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden`}
                >
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.key}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-3xl font-extrabold text-accent-foreground">
                      {founder.key.charAt(0)}
                    </span>
                  )}
                </div>

                <h2 className="font-display text-2xl font-bold mb-2">{founder.key}</h2>

                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-body font-light mb-6">
                  {ui.about.rolePlaceholder[lang]}
                </p>

                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 font-body mb-2">
                  {ui.about.contactForLabel[lang]}
                </p>
                <p className="text-muted-foreground font-body font-light leading-relaxed">
                  {ui.about.contactForPlaceholder[lang]}
                </p>

                <div
                  className={`absolute inset-0 rounded-2xl ${founder.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                />
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Nous;
