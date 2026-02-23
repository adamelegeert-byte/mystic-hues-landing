// ─── Centralized project data ───
// Used by PortfolioSection (grid) and individual project pages

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
  /** Video aspect ratio — "landscape" (16:9) or "portrait" (9:16) */
  aspect?: "landscape" | "portrait";
}

export interface Project {
  slug: string;
  client: string;
  title: string;
  category: string;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
  /** Fallback cover image from /src/assets */
  coverImage: string;
  gradient: string;
  year: string;
  deliverables: string[];
  /** All media for the project detail page */
  media: ProjectMedia[];
}

export const categories = [
  "Tous",
  "Stratégie",
  "Branding",
  "Vidéo",
  "Événementiel",
];

export const projects: Project[] = [
  {
    slug: "revival-business",
    client: "Revival Business",
    title: "Stratégie de Communication 360°",
    category: "Stratégie",
    tags: ["Stratégie RS", "Plan de communication", "Segmentation audience"],
    shortDescription:
      "Plan de communication multi-canal et stratégie réseaux sociaux pour Revival Business.",
    fullDescription:
      "Élaboration d'un plan de communication complet pour Revival Business : stratégie réseaux sociaux multi-canal (LinkedIn, Instagram, Facebook), segmentation d'audience ciblant les nouveaux entrepreneurs et gestionnaires de PME. Mise en place d'outils de reporting via Metricool pour mesurer et optimiser les performances des campagnes. Planification de contenu structurée en deux phases stratégiques avec une approche de contenu adaptée à chaque plateforme et à chaque segment d'audience.",
    coverImage: portfolio1,
    gradient: "from-orange-400 to-orange-600",
    year: "2024",
    deliverables: [
      "Plan de communication multi-canal",
      "Stratégie réseaux sociaux (LinkedIn, Instagram, Facebook)",
      "Segmentation d'audience — 2 cibles (entrepreneurs & gestionnaires PME)",
      "Mise en place Metricool — reporting & analytics",
      "Planification de contenu sur 2 phases stratégiques",
      "Stratégie de contenu par plateforme",
    ],
    media: [],
  },
  {
    slug: "guidelance",
    client: "Guidelance",
    title: "Social Media & Direction Artistique",
    category: "Stratégie",
    tags: [
      "Social Media",
      "Création de contenu",
      "Direction artistique",
      "Photographie",
    ],
    shortDescription:
      "Gestion complète des réseaux sociaux et direction artistique pour Guidelance.",
    fullDescription:
      "Gestion complète des réseaux sociaux pour Guidelance : création de contenus visuels Instagram avec identité forte, couverture photographique d'événements, production de Reels, et déclinaison de la charte graphique SKISS sur l'ensemble des supports digitaux. Chaque contenu a été pensé pour renforcer l'image de marque et maximiser l'engagement sur les réseaux sociaux.",
    coverImage: portfolio2,
    gradient: "from-amber-700 to-yellow-500",
    year: "2024",
    deliverables: [
      "Gestion complète du compte Instagram",
      "Création de 25+ contenus visuels brandés",
      "Couverture photographique événementielle",
      "Production de Reels",
      "Direction artistique des supports digitaux",
    ],
    media: [
      { type: "video", src: "/portfolio/guidelance/cover-video.mov", aspect: "landscape" },
      { type: "image", src: "/portfolio/guidelance/cover.png", alt: "SKISS x Guidelance — announcement" },
      { type: "image", src: "/portfolio/guidelance/social-1.jpeg", alt: "Guidelance — Instagram post" },
      { type: "image", src: "/portfolio/guidelance/social-2.jpeg", alt: "Guidelance — Instagram post dark" },
      { type: "image", src: "/portfolio/guidelance/social-3.jpeg", alt: "Guidelance — product announcement" },
      { type: "image", src: "/portfolio/guidelance/social-4.jpeg", alt: "Guidelance — branding" },
      { type: "image", src: "/portfolio/guidelance/social-5.jpeg", alt: "Guidelance — content" },
      { type: "image", src: "/portfolio/guidelance/social-6.jpeg", alt: "Guidelance — visual" },
      { type: "image", src: "/portfolio/guidelance/social-7.jpeg", alt: "Guidelance — social" },
      { type: "image", src: "/portfolio/guidelance/social-8.jpeg", alt: "Guidelance — community" },
      { type: "video", src: "/portfolio/guidelance/reel.mov", aspect: "portrait" },
    ],
  },
  {
    slug: "wip",
    client: "WIP — Working In Progress",
    title: "Branding & Identité Visuelle Complète",
    category: "Branding",
    tags: ["Logo Design", "Identité visuelle", "Papeterie", "Signalétique"],
    shortDescription:
      "Création de l'identité visuelle complète pour WIP, de la conception du logo à la signalétique.",
    fullDescription:
      "Création de l'identité visuelle complète pour WIP (Working In Progress) : design du logo avec concept handshake intégré symbolisant le partenariat et la collaboration. Déclinaisons couleur multiples (gradient coral-brun & vert-cyan), cartes de visite pour Jacques Allaert (CEO), papeterie corporate, enseigne lumineuse extérieure, et bannières digitales pour le secteur sécurité et technologie. Un travail de branding complet du concept initial jusqu'aux applications concrètes.",
    coverImage: portfolio3,
    gradient: "from-gray-800 to-gray-600",
    year: "2024",
    deliverables: [
      "Conception du logo — concept handshake",
      "Déclinaisons couleur (4 palettes)",
      "Cartes de visite recto/verso",
      "Papeterie corporate complète",
      "Enseigne lumineuse extérieure",
      "Bannières digitales multi-formats",
      "Charte graphique documentée",
    ],
    media: [],
  },
  {
    slug: "the-fin-competition",
    client: "The Fin Competition",
    title: "After Movie Événementiel",
    category: "Vidéo",
    tags: ["Production vidéo", "After Movie", "Événementiel"],
    shortDescription:
      "Production de l'After Movie pour The Fin Competition — captation et montage dynamique.",
    fullDescription:
      "Production complète de l'After Movie pour The Fin Competition : captation vidéo intégrale de l'événement, montage dynamique avec étalonnage professionnel et sound design. Deux versions livrées : une version longue pour la diffusion principale et une version courte optimisée pour les réseaux sociaux.",
    coverImage: portfolio4,
    gradient: "from-blue-500 to-cyan-400",
    year: "2024",
    deliverables: [
      "Captation vidéo intégrale de l'événement",
      "After Movie — version longue (3min+)",
      "Version courte optimisée réseaux sociaux",
      "Étalonnage et sound design",
    ],
    media: [
      { type: "video", src: "/portfolio/the-fin-competition/aftermovie.mov", aspect: "landscape" },
    ],
  },
  {
    slug: "vregas",
    client: "Vregas",
    title: "Production Vidéo & Contenu",
    category: "Vidéo",
    tags: ["Production vidéo", "Contenu de marque"],
    shortDescription:
      "Production et montage de vidéos promotionnelles pour Vregas.",
    fullDescription:
      "Création de contenus vidéo pour Vregas : production et montage de vidéos promotionnelles mettant en valeur l'univers de la marque. Des vidéos pensées pour capter l'attention et transmettre l'énergie unique de Vregas à travers un montage dynamique et une direction artistique soignée.",
    coverImage: portfolio5,
    gradient: "from-purple-600 to-pink-500",
    year: "2024",
    deliverables: [
      "Production vidéo promotionnelle",
      "Montage et post-production",
      "Contenus de marque multi-formats",
    ],
    media: [
      { type: "video", src: "/portfolio/vregas/vregas-main.mp4", aspect: "portrait" },
      { type: "video", src: "/portfolio/vregas/vregas-short.mp4", aspect: "portrait" },
    ],
  },
  {
    slug: "men-at-work",
    client: "Men at Work",
    title: "Branding & Identité Visuelle",
    category: "Branding",
    tags: ["Logo Design", "Identité visuelle", "Typographie", "Charte graphique"],
    shortDescription:
      "Création de l'identité visuelle complète pour Men at Work : logo, palettes de couleurs, typographie et déclinaisons.",
    fullDescription:
      "Conception de l'identité visuelle complète pour Men at Work : création du logotype avec un concept de silhouette humaine stylisée intégré aux lettres « m » et « n ». Développement de multiples palettes de couleurs gradient (cyan-bleu, corail-brun, turquoise, lavande), déclinaisons du logo sur fonds colorés et sombres, sélection typographique (Smooth Circulars pour les titres, Lato pour le corps), et mise en application sur cartes de visite et supports digitaux.",
    coverImage: portfolio3,
    gradient: "from-cyan-500 to-blue-600",
    year: "2024",
    deliverables: [
      "Conception du logotype — concept silhouette",
      "Palettes de couleurs gradient (4 déclinaisons)",
      "Déclinaisons logo multi-fonds",
      "Sélection typographique (Smooth Circulars + Lato)",
      "Cartes de visite recto/verso",
      "Charte graphique documentée",
    ],
    media: [
      { type: "image", src: "/portfolio/men-at-work/cover.jpg", alt: "Men at Work — logo support visuel" },
      { type: "image", src: "/portfolio/men-at-work/logo-versions.jpg", alt: "Men at Work — versions du logo" },
      { type: "image", src: "/portfolio/men-at-work/branded-block.jpg", alt: "Men at Work — branded block" },
      { type: "image", src: "/portfolio/men-at-work/logotype.jpg", alt: "Men at Work — logotype dérivé" },
      { type: "image", src: "/portfolio/men-at-work/typography.jpg", alt: "Men at Work — typographie" },
      { type: "image", src: "/portfolio/men-at-work/logo-palette.jpg", alt: "Men at Work — palette logo" },
      { type: "image", src: "/portfolio/men-at-work/gradient-palette.jpg", alt: "Men at Work — gradient palette" },
    ],
  },
  {
    slug: "wilmeyer",
    client: "Wilmeyer",
    title: "Couverture Événementielle Complète",
    category: "Événementiel",
    tags: ["Photographie", "Vidéo", "Événementiel", "After Movie"],
    shortDescription:
      "Couverture 360° du Tournoi de Paddel Wilmeyer : photo, vidéo et aftermovie.",
    fullDescription:
      "Couverture complète du Tournoi de Paddel Wilmeyer : reportage photographique professionnel (97 photos), production de l'After Movie, création d'un Reel Halloween, et montage de clips musicaux. Un accompagnement 360° de l'image événementielle du client, de la captation à la post-production.",
    coverImage: portfolio6,
    gradient: "from-emerald-500 to-teal-400",
    year: "2024",
    deliverables: [
      "Reportage photographique (97 photos)",
      "After Movie complet",
      "Reel Halloween",
      "Clips musicaux — montage",
    ],
    media: [
      { type: "video", src: "/portfolio/wilmeyer/wilmeyer-cover.mp4", aspect: "landscape" },
      { type: "video", src: "/portfolio/wilmeyer/wilmeyer-cover-2.mp4", aspect: "landscape" },
      { type: "video", src: "/portfolio/wilmeyer/halloween-reel.mp4", aspect: "portrait" },
      { type: "image", src: "/portfolio/wilmeyer/photos/photo-001.jpg", alt: "Tournoi de Paddel — 1" },
      { type: "image", src: "/portfolio/wilmeyer/photos/photo-003.jpg", alt: "Tournoi de Paddel — 2" },
      { type: "image", src: "/portfolio/wilmeyer/photos/photo-005.jpg", alt: "Tournoi de Paddel — 3" },
      { type: "image", src: "/portfolio/wilmeyer/photos/photo-007.jpg", alt: "Tournoi de Paddel — 4" },
      { type: "image", src: "/portfolio/wilmeyer/photos/photo-122.jpg", alt: "Tournoi de Paddel — 5" },
      { type: "image", src: "/portfolio/wilmeyer/photos/photo-147.jpg", alt: "Tournoi de Paddel — 6" },
      { type: "image", src: "/portfolio/wilmeyer/photos/photo-150.jpg", alt: "Tournoi de Paddel — 7" },
      { type: "image", src: "/portfolio/wilmeyer/photos/photo-153.jpg", alt: "Tournoi de Paddel — 8" },
      { type: "image", src: "/portfolio/wilmeyer/photos/photo-155.jpg", alt: "Tournoi de Paddel — 9" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
