import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";
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

  // Check if a project has portrait videos (to show 9:16 thumbnail)
  const hasPortraitVideo = (slug: string) => {
    const project = projects.find((p) => p.slug === slug);
    return project?.media.some(
      (m) => m.type === "video" && m.aspect === "portrait"
    );
  };

  // Get first portrait video for a project
  const getFirstPortraitVideo = (slug: string) => {
    const project = projects.find((p) => p.slug === slug);
    return project?.media.find(
      (m) => m.type === "video" && m.aspect === "portrait"
    );
  };

  // Get first landscape video, then fallback to any video
  const getFirstLandscapeVideo = (slug: string) => {
    const project = projects.find((p) => p.slug === slug);
    return project?.media.find(
      (m) => m.type === "video" && m.aspect === "landscape"
    );
  };

  const getFirstVideo = (slug: string) => {
    const project = projects.find((p) => p.slug === slug);
    return project?.media.find((m) => m.type === "video");
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-body">
            Découvrez nos projets récents
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Nos Réalisations
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-accent text-accent-foreground border-accent shadow-lg shadow-accent/20"
                  : "bg-secondary/60 text-secondary-foreground border-border/50 hover:bg-secondary hover:border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const landscapeVid = getFirstLandscapeVideo(project.slug);
              const portraitVid = getFirstPortraitVideo(project.slug);
              const anyVid = getFirstVideo(project.slug);
              const showVideo = !!anyVid;

              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => navigate(`/projets/${project.slug}`)}
                  className="group relative rounded-xl overflow-hidden cursor-pointer bg-card border border-border/30 hover:border-accent/20 transition-colors duration-500"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {showVideo && landscapeVid ? (
                      <video
                        src={landscapeVid.src}
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : showVideo && portraitVid ? (
                      <div className="w-full h-full bg-black/40 flex items-center justify-center">
                        <video
                          src={portraitVid.src}
                          muted
                          loop
                          playsInline
                          autoPlay
                          className="h-full w-auto max-w-none object-contain"
                        />
                      </div>
                    ) : showVideo && anyVid ? (
                      <video
                        src={anyVid.src}
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}

                    {/* Category badge */}
                    <Badge className="absolute top-4 left-4 bg-background/70 text-foreground backdrop-blur-sm border-none text-xs z-10">
                      {project.category}
                    </Badge>

                    {/* Video indicator */}
                    {showVideo && (
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center z-10">
                        <Play className="w-3.5 h-3.5 text-foreground fill-foreground" />
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-center p-6">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-body">
                        {project.client}
                      </p>
                      <h3 className="font-display text-lg font-bold mb-3 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm font-light text-muted-foreground leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-accent text-xs font-body font-medium">
                        <span>Voir le projet</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs text-muted-foreground font-body">
                        {project.client}
                      </p>
                      <p className="text-xs text-muted-foreground/60 font-body">
                        {project.year}
                      </p>
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-secondary/80 text-muted-foreground font-body"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
