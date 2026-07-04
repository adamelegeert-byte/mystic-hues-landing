import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, ArrowUpRight } from "lucide-react";
import { projects, categories } from "@/data/projects";

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("Tous");
  const navigate = useNavigate();

  const filtered =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const getVideo = (slug: string) => {
    const project = projects.find((p) => p.slug === slug);
    return (
      project?.media.find(
        (m) => m.type === "video" && m.aspect === "landscape"
      ) ?? project?.media.find((m) => m.type === "video")
    );
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 w-[500px] h-[500px] rounded-full gradient-warm opacity-10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 w-[500px] h-[500px] rounded-full gradient-warm opacity-[0.05] blur-[120px]" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-body font-light">
            Archive & Collaborations
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Nos <span className="text-gradient-warm italic">Réalisations</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 border ${
                activeFilter === cat
                  ? "gradient-warm text-white border-transparent shadow-lg shadow-accent/20"
                  : "bg-secondary/60 text-secondary-foreground border-border/50 hover:bg-secondary hover:border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />

          <div className="space-y-24 md:space-y-32">
            {filtered.map((project, idx) => {
              const video = getVideo(project.slug);
              const isRight = idx % 2 === 0;

              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex flex-col md:flex-row items-center"
                >
                  {/* Node desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full gradient-warm opacity-40 blur-md group-hover:opacity-80 transition-opacity duration-500" />
                    <span className="relative w-3 h-3 rounded-full gradient-warm border-2 border-background shadow-[0_0_15px_hsl(var(--accent)/0.8)] group-hover:scale-150 transition-transform duration-500" />
                  </div>
                  {/* Node mobile */}
                  <div className="md:hidden absolute left-4 -translate-x-1/2 top-2 z-20">
                    <span className="block w-3 h-3 rounded-full gradient-warm shadow-[0_0_10px_hsl(var(--accent)/0.8)]" />
                  </div>

                  {/* Text side */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 mb-10 md:mb-0 relative ${
                      isRight
                        ? "md:pr-16 md:text-right md:order-1"
                        : "md:pl-16 md:order-2"
                    }`}
                  >
                    {/* Big year watermark */}
                    <span
                      className={`hidden md:block absolute -top-10 text-[7rem] leading-none font-display font-extrabold text-foreground/[0.04] select-none pointer-events-none ${
                        isRight ? "right-0" : "left-0"
                      }`}
                    >
                      {project.year}
                    </span>

                    <div className="relative z-10">
                      <p className="text-xs uppercase tracking-[0.3em] text-gradient-warm font-body font-semibold mb-3">
                        {project.year} · {project.category}
                      </p>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-body font-light">
                        {project.client}
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 font-body font-normal max-w-md md:inline-block">
                        {project.shortDescription}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mb-6 ${
                          isRight ? "md:justify-end" : ""
                        }`}
                      >
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-border/60 text-muted-foreground font-body"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => navigate(`/projets/${project.slug}`)}
                        className={`inline-flex items-center gap-2 text-sm font-body font-semibold text-foreground transition-colors group/btn ${
                          isRight ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span>Voir le projet</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </button>
                    </div>
                  </div>

                  {/* Visual side */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isRight ? "md:pl-16 md:order-2" : "md:pr-16 md:order-1"
                    }`}
                  >
                    <div
                      onClick={() => navigate(`/projets/${project.slug}`)}
                      className="relative overflow-hidden rounded-sm cursor-pointer shadow-2xl group-hover:rounded-2xl transition-all duration-700"
                    >
                      <div className="aspect-video overflow-hidden bg-card">
                        {video ? (
                          <video
                            src={video.src}
                            muted
                            loop
                            playsInline
                            autoPlay
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-[900ms]"
                          />
                        ) : (
                          <img
                            src={project.coverImage}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-[900ms]"
                          />
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                      {video && (
                        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center">
                          <Play className="w-3.5 h-3.5 text-foreground fill-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Footer accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-32 text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground/60 font-body font-light">
            La suite s'écrit ensemble
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;