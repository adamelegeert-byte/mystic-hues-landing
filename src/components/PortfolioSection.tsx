import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const categories = ["Tous", "Stratégie", "Branding", "Vidéo", "Événementiel"];

interface Project {
  client: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  gradient: string;
  videos?: string[];
}

const projects: Project[] = [
  {
    client: "Revival Business",
    title: "Stratégie de Communication 360°",
    category: "Stratégie",
    tags: ["Stratégie RS", "Plan de communication", "Segmentation audience"],
    description: "Élaboration d'un plan de communication complet pour Revival Business : stratégie réseaux sociaux multi-canal (LinkedIn, Instagram, Facebook), segmentation d'audience (entrepreneurs & gestionnaires PME), mise en place d'outils de reporting via Metricool, et planification de contenu sur deux phases stratégiques.",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    client: "Guidelance",
    title: "Social Media & Direction Artistique",
    category: "Stratégie",
    tags: ["Social Media", "Création de contenu", "Direction artistique", "Photographie"],
    description: "Gestion complète des réseaux sociaux pour Guidelance : création de contenus visuels Instagram avec identité forte, couverture photographique d'événements, production de Reels, et déclinaison de la charte graphique SKISS sur l'ensemble des supports digitaux.",
    gradient: "from-amber-700 to-yellow-500",
  },
  {
    client: "WIP — Working In Progress",
    title: "Branding & Identité Visuelle Complète",
    category: "Branding",
    tags: ["Logo Design", "Identité visuelle", "Papeterie", "Signalétique"],
    description: "Création de l'identité visuelle complète pour WIP (Working In Progress) : design du logo avec concept handshake intégré, déclinaisons couleur (gradient coral-brun & vert-cyan), cartes de visite pour Jacques Allaert (CEO), papeterie corporate, enseigne lumineuse, et bannières digitales pour le secteur sécurité et technologie.",
    gradient: "from-gray-800 to-gray-600",
  },
  {
    client: "The Fin Competition",
    title: "After Movie Événementiel",
    category: "Vidéo",
    tags: ["Production vidéo", "After Movie", "Événementiel"],
    description: "Production complète de l'After Movie pour The Fin Competition : captation vidéo de l'événement, montage dynamique en deux versions (version longue et version courte optimisée pour les réseaux sociaux).",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    client: "Vregas",
    title: "Production Vidéo & Contenu",
    category: "Vidéo",
    tags: ["Production vidéo", "Contenu de marque"],
    description: "Création de contenus vidéo pour Vregas : production et montage de vidéos promotionnelles mettant en valeur l'univers de la marque.",
    gradient: "from-purple-600 to-pink-500",
    videos: ["/videos/vregas/VREGAS.mp4", "/videos/vregas/Vregas_20.09_1.mp4"],
  },
  {
    client: "Wilmeyer",
    title: "Couverture Événementielle Complète",
    category: "Événementiel",
    tags: ["Photographie", "Vidéo", "Événementiel", "After Movie"],
    description: "Couverture complète du Tournoi de Paddel Wilmeyer : reportage photographique professionnel (97 photos), production de l'After Movie, création d'un Reel Halloween, et montage de clips musicaux. Un accompagnement 360° de l'image événementielle du client.",
    gradient: "from-emerald-500 to-teal-400",
    videos: ["/videos/wilmeyer/Halloween_Wilmeyer_Reel.mp4"],
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

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
                  ? "bg-accent text-accent-foreground border-accent shadow-lg"
                  : "bg-secondary/60 text-secondary-foreground border-border/50 hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.client}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer bg-card border border-border/30"
              >
                {/* Placeholder image or video */}
                {'videos' in project && project.videos ? (
                  <div className="relative aspect-[16/10] bg-background transition-transform duration-500 group-hover:scale-105">
                    <video
                      src={project.videos[0]}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-background/70 text-foreground backdrop-blur-sm border-none text-xs z-10">
                      {project.category}
                    </Badge>
                  </div>
                ) : (
                  <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                    <span className="text-2xl md:text-3xl font-display font-bold text-white/90 text-center px-6 drop-shadow-lg">
                      {project.client}
                    </span>
                    <Badge className="absolute top-4 left-4 bg-background/70 text-foreground backdrop-blur-sm border-none text-xs">
                      {project.category}
                    </Badge>
                  </div>
                )}

                {/* Hover overlay with description */}
                <div className="absolute inset-0 bg-background/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-body">
                    {project.client}
                  </p>
                  <h3 className="font-display text-lg font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-body">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom info */}
                <div className="p-5">
                  <p className="text-xs text-muted-foreground font-body mb-1">{project.client}</p>
                  <h3 className="font-display text-base font-bold text-foreground">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary/80 text-muted-foreground font-body">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
