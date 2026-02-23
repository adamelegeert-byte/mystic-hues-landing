import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getProjectBySlug, projects } from "@/data/projects";
import type { ProjectMedia } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/** Renders a single media item — images or videos (9:16 portrait or 16:9 landscape) */
const MediaItem = ({ item, index }: { item: ProjectMedia; index: number }) => {
  if (item.type === "video") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className={`relative overflow-hidden rounded-xl border border-border/30 bg-card ${
          item.aspect === "portrait"
            ? "aspect-[9/16] max-w-[280px]"
            : "aspect-video col-span-full md:col-span-2"
        }`}
      >
        <video
          src={item.src}
          controls
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative aspect-square overflow-hidden rounded-xl border border-border/30 group cursor-pointer"
    >
      <img
        src={item.src}
        alt={item.alt || ""}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </motion.div>
  );
};

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">
            Projet introuvable
          </h1>
          <Link
            to="/#portfolio"
            className="text-accent font-body hover:underline"
          >
            Retour au portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Find next & previous projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  // Separate portrait videos from other media for layout
  const portraitVideos = project.media.filter(
    (m) => m.type === "video" && m.aspect === "portrait"
  );
  const landscapeVideos = project.media.filter(
    (m) => m.type === "video" && m.aspect === "landscape"
  );
  const images = project.media.filter((m) => m.type === "image");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Background cover image with overlay */}
        <div className="absolute inset-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au portfolio
            </Link>
          </motion.div>

          {/* Project info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-accent/90 text-accent-foreground border-none">
                {project.category}
              </Badge>
              <Badge
                variant="outline"
                className="border-border/50 text-muted-foreground"
              >
                {project.year}
              </Badge>
            </div>

            <p className="text-sm uppercase tracking-widest text-muted-foreground font-body mb-2">
              {project.client}
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>

            <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl">
              {project.fullDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-body"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 border-t border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
              Livrables
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
              {project.deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/30"
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-sm font-body text-foreground/90">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Gallery */}
      {project.media.length > 0 && (
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-10">
              Le projet en détail
            </h2>

            {/* Landscape videos — full width */}
            {landscapeVideos.length > 0 && (
              <div className="mb-12 space-y-6">
                {landscapeVideos.map((v, i) => (
                  <MediaItem key={`lv-${i}`} item={v} index={i} />
                ))}
              </div>
            )}

            {/* Portrait videos — side by side in 9:16 */}
            {portraitVideos.length > 0 && (
              <div className="mb-12">
                <h3 className="font-display text-lg font-semibold mb-6 text-muted-foreground">
                  Vidéos
                </h3>
                <div className="flex flex-wrap gap-6 justify-start">
                  {portraitVideos.map((v, i) => (
                    <MediaItem key={`pv-${i}`} item={v} index={i} />
                  ))}
                </div>
              </div>
            )}

            {/* Images grid */}
            {images.length > 0 && (
              <div>
                <h3 className="font-display text-lg font-semibold mb-6 text-muted-foreground">
                  Galerie
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((img, i) => (
                    <MediaItem key={`img-${i}`} item={img} index={i} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Navigation — Next / Previous */}
      <section className="py-16 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              to={`/projets/${prevProject.slug}`}
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs font-body uppercase tracking-widest mb-0.5">
                  Projet précédent
                </p>
                <p className="font-display font-semibold">
                  {prevProject.client}
                </p>
              </div>
            </Link>

            <Link
              to={`/projets/${nextProject.slug}`}
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
            >
              <div>
                <p className="text-xs font-body uppercase tracking-widest mb-0.5">
                  Projet suivant
                </p>
                <p className="font-display font-semibold">
                  {nextProject.client}
                </p>
              </div>
              <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectPage;
