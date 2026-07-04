// ─── Centralized project data ───
// Used by PortfolioSection (grid) and individual project pages

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import type { Lang } from "@/i18n/LanguageContext";

type Bi = { fr: string; en: string };
type BiList = { fr: string[]; en: string[] };

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
  title: Bi;
  category: string;
  tags: BiList;
  shortDescription: Bi;
  fullDescription: Bi;
  /** Fallback cover image from /src/assets */
  coverImage: string;
  gradient: string;
  year: string;
  deliverables: BiList;
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
    title: {
      fr: "Stratégie de Communication 360°",
      en: "360° Communication Strategy",
    },
    category: "Stratégie",
    tags: {
      fr: ["Stratégie RS", "Plan de communication", "Segmentation audience"],
      en: ["Social Strategy", "Communication Plan", "Audience Segmentation"],
    },
    shortDescription: {
      fr: "Plan de communication multi-canal et stratégie réseaux sociaux pour Revival Business.",
      en: "Multi-channel communication plan and social media strategy for Revival Business.",
    },
    fullDescription: {
      fr: "Élaboration d'un plan de communication complet pour Revival Business : stratégie réseaux sociaux multi-canal (LinkedIn, Instagram, Facebook), segmentation d'audience ciblant les nouveaux entrepreneurs et gestionnaires de PME. Mise en place d'outils de reporting via Metricool pour mesurer et optimiser les performances des campagnes. Planification de contenu structurée en deux phases stratégiques avec une approche de contenu adaptée à chaque plateforme et à chaque segment d'audience.",
      en: "Full communication plan for Revival Business: multi-channel social media strategy (LinkedIn, Instagram, Facebook), audience segmentation targeting new entrepreneurs and SME managers. Reporting tools implemented via Metricool to measure and optimize campaign performance. Content planning structured over two strategic phases with a tailored approach for each platform and audience segment.",
    },
    coverImage: portfolio1,
    gradient: "from-orange-400 to-orange-600",
    year: "2024",
    deliverables: {
      fr: [
        "Plan de communication multi-canal",
        "Stratégie réseaux sociaux (LinkedIn, Instagram, Facebook)",
        "Segmentation d'audience — 2 cibles (entrepreneurs & gestionnaires PME)",
        "Mise en place Metricool — reporting & analytics",
        "Planification de contenu sur 2 phases stratégiques",
        "Stratégie de contenu par plateforme",
      ],
      en: [
        "Multi-channel communication plan",
        "Social media strategy (LinkedIn, Instagram, Facebook)",
        "Audience segmentation — 2 targets (entrepreneurs & SME managers)",
        "Metricool setup — reporting & analytics",
        "Content planning over 2 strategic phases",
        "Platform-specific content strategy",
      ],
    },
    media: [],
  },
  {
    slug: "guidelance",
    client: "Guidelance",
    title: {
      fr: "Social Media & Direction Artistique",
      en: "Social Media & Art Direction",
    },
    category: "Stratégie",
    tags: {
      fr: ["Social Media", "Création de contenu", "Direction artistique", "Photographie"],
      en: ["Social Media", "Content Creation", "Art Direction", "Photography"],
    },
    shortDescription: {
      fr: "Gestion complète des réseaux sociaux et direction artistique pour Guidelance.",
      en: "End-to-end social media management and art direction for Guidelance.",
    },
    fullDescription: {
      fr: "Gestion complète des réseaux sociaux pour Guidelance : création de contenus visuels Instagram avec identité forte, couverture photographique d'événements, production de Reels, et déclinaison de la charte graphique SKISS sur l'ensemble des supports digitaux. Chaque contenu a été pensé pour renforcer l'image de marque et maximiser l'engagement sur les réseaux sociaux.",
      en: "Full social media management for Guidelance: creation of Instagram visual content with a strong identity, event photography coverage, Reels production, and rollout of the SKISS graphic guidelines across every digital touchpoint. Every asset was designed to strengthen the brand image and maximize social engagement.",
    },
    coverImage: portfolio2,
    gradient: "from-amber-700 to-yellow-500",
    year: "2024",
    deliverables: {
      fr: [
        "Gestion complète du compte Instagram",
        "Création de 25+ contenus visuels brandés",
        "Couverture photographique événementielle",
        "Production de Reels",
        "Direction artistique des supports digitaux",
      ],
      en: [
        "Full Instagram account management",
        "25+ branded visual assets created",
        "Event photography coverage",
        "Reels production",
        "Art direction of digital assets",
      ],
    },
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
    title: {
      fr: "Branding & Identité Visuelle Complète",
      en: "Full Branding & Visual Identity",
    },
    category: "Branding",
    tags: {
      fr: ["Logo Design", "Identité visuelle", "Papeterie", "Signalétique"],
      en: ["Logo Design", "Visual Identity", "Stationery", "Signage"],
    },
    shortDescription: {
      fr: "Création de l'identité visuelle complète pour WIP, de la conception du logo à la signalétique.",
      en: "Full visual identity for WIP, from logo design to signage.",
    },
    fullDescription: {
      fr: "Création de l'identité visuelle complète pour WIP (Working In Progress) : design du logo avec concept handshake intégré symbolisant le partenariat et la collaboration. Déclinaisons couleur multiples (gradient coral-brun & vert-cyan), cartes de visite pour Jacques Allaert (CEO), papeterie corporate, enseigne lumineuse extérieure, et bannières digitales pour le secteur sécurité et technologie. Un travail de branding complet du concept initial jusqu'aux applications concrètes.",
      en: "Full visual identity for WIP (Working In Progress): logo design with a built-in handshake concept symbolizing partnership and collaboration. Multiple color variations (coral-brown & green-cyan gradients), business cards for Jacques Allaert (CEO), corporate stationery, outdoor illuminated sign, and digital banners for the security and technology sector. A complete branding project from initial concept to concrete applications.",
    },
    coverImage: "/portfolio/wip/cover.jpeg",
    gradient: "from-gray-800 to-gray-600",
    year: "2024",
    deliverables: {
      fr: [
        "Conception du logo — concept handshake",
        "Déclinaisons couleur (4 palettes)",
        "Cartes de visite recto/verso",
        "Papeterie corporate complète",
        "Enseigne lumineuse extérieure",
        "Bannières digitales multi-formats",
        "Charte graphique documentée",
      ],
      en: [
        "Logo design — handshake concept",
        "Color variations (4 palettes)",
        "Double-sided business cards",
        "Full corporate stationery",
        "Outdoor illuminated sign",
        "Multi-format digital banners",
        "Documented brand guidelines",
      ],
    },
    media: [],
  },
  {
    slug: "the-fin-competition",
    client: "The Fin Competition",
    title: {
      fr: "After Movie Événementiel",
      en: "Event After Movie",
    },
    category: "Vidéo",
    tags: {
      fr: ["Production vidéo", "After Movie", "Événementiel"],
      en: ["Video Production", "After Movie", "Events"],
    },
    shortDescription: {
      fr: "Production de l'After Movie pour The Fin Competition — captation et montage dynamique.",
      en: "After Movie production for The Fin Competition — filming and dynamic editing.",
    },
    fullDescription: {
      fr: "Production complète de l'After Movie pour The Fin Competition : captation vidéo intégrale de l'événement, montage dynamique avec étalonnage professionnel et sound design. Deux versions livrées : une version longue pour la diffusion principale et une version courte optimisée pour les réseaux sociaux.",
      en: "Full After Movie production for The Fin Competition: complete event video coverage, dynamic editing with professional color grading and sound design. Two versions delivered: a long cut for main broadcast and a short one optimized for social media.",
    },
    coverImage: portfolio4,
    gradient: "from-blue-500 to-cyan-400",
    year: "2024",
    deliverables: {
      fr: [
        "Captation vidéo intégrale de l'événement",
        "After Movie — version longue (3min+)",
        "Version courte optimisée réseaux sociaux",
        "Étalonnage et sound design",
      ],
      en: [
        "Full event video coverage",
        "After Movie — long version (3min+)",
        "Short version optimized for social media",
        "Color grading and sound design",
      ],
    },
    media: [
      { type: "video", src: "/portfolio/the-fin-competition/aftermovie.mov", aspect: "landscape" },
    ],
  },
  {
    slug: "vregas",
    client: "Vregas",
    title: {
      fr: "Production Vidéo & Contenu",
      en: "Video & Content Production",
    },
    category: "Vidéo",
    tags: {
      fr: ["Production vidéo", "Contenu de marque"],
      en: ["Video Production", "Brand Content"],
    },
    shortDescription: {
      fr: "Production et montage de vidéos promotionnelles pour Vregas.",
      en: "Production and editing of promotional videos for Vregas.",
    },
    fullDescription: {
      fr: "Création de contenus vidéo pour Vregas : production et montage de vidéos promotionnelles mettant en valeur l'univers de la marque. Des vidéos pensées pour capter l'attention et transmettre l'énergie unique de Vregas à travers un montage dynamique et une direction artistique soignée.",
      en: "Video content creation for Vregas: production and editing of promotional videos showcasing the brand universe. Videos crafted to grab attention and convey Vregas's unique energy through dynamic editing and refined art direction.",
    },
    coverImage: portfolio5,
    gradient: "from-purple-600 to-pink-500",
    year: "2024",
    deliverables: {
      fr: [
        "Production vidéo promotionnelle",
        "Montage et post-production",
        "Contenus de marque multi-formats",
      ],
      en: [
        "Promotional video production",
        "Editing and post-production",
        "Multi-format brand content",
      ],
    },
    media: [
      { type: "video", src: "/portfolio/vregas/vregas-main.mp4", aspect: "portrait" },
      { type: "video", src: "/portfolio/vregas/vregas-short.mp4", aspect: "portrait" },
    ],
  },
  {
    slug: "cite-des-nuages",
    client: "La Cité des Nuages",
    title: {
      fr: "Mini-Vidéos & Direction Artistique RS",
      en: "Mini-Videos & Social Art Direction",
    },
    category: "Vidéo",
    tags: {
      fr: ["Production vidéo", "Réseaux sociaux", "Direction artistique", "Montage"],
      en: ["Video Production", "Social Media", "Art Direction", "Editing"],
    },
    shortDescription: {
      fr: "Création de mini-vidéos dynamiques pour La Cité des Nuages, boutique de produits dérivés cinéma & animation à Waterloo.",
      en: "Dynamic mini-videos for La Cité des Nuages, a movie & animation merch store in Waterloo.",
    },
    fullDescription: {
      fr: "Création de mini-vidéos pour le compte de La Cité des Nuages, un magasin de produits dérivés liés au cinéma et aux séries d'animation, situé à Waterloo. L'objectif était de développer une véritable direction artistique sur les réseaux sociaux à travers des mini-montages dynamiques, mettant en valeur les produits phares de la boutique avec un univers visuel fort et immersif.",
      en: "Mini-videos created for La Cité des Nuages, a merchandise store dedicated to film and animation series, located in Waterloo. The goal was to build a real art direction on social media through dynamic mini-edits, showcasing the store's flagship products with a strong, immersive visual universe.",
    },
    coverImage: "/portfolio/cite-des-nuages/cover.jpeg",
    gradient: "from-indigo-600 to-violet-500",
    year: "2024",
    deliverables: {
      fr: [
        "Création de 9+ mini-vidéos dynamiques",
        "Direction artistique réseaux sociaux",
        "Montage et post-production",
        "Mise en valeur produits dérivés cinéma & animation",
      ],
      en: [
        "9+ dynamic mini-videos created",
        "Social media art direction",
        "Editing and post-production",
        "Showcasing film & animation merchandise",
      ],
    },
    media: [
      { type: "video", src: "/portfolio/cite-des-nuages/generique.mov", aspect: "landscape" },
      { type: "image", src: "/portfolio/cite-des-nuages/cover.jpeg", alt: "La Cité des Nuages — Ahsoka" },
      { type: "video", src: "/portfolio/cite-des-nuages/video-1.mp4", aspect: "portrait" },
      { type: "video", src: "/portfolio/cite-des-nuages/video-2.mp4", aspect: "portrait" },
      { type: "video", src: "/portfolio/cite-des-nuages/video-3.mp4", aspect: "portrait" },
      { type: "video", src: "/portfolio/cite-des-nuages/video-4.mp4", aspect: "portrait" },
      { type: "video", src: "/portfolio/cite-des-nuages/video-5.mp4", aspect: "portrait" },
      { type: "video", src: "/portfolio/cite-des-nuages/video-6.mp4", aspect: "portrait" },
      { type: "video", src: "/portfolio/cite-des-nuages/video-7.mp4", aspect: "portrait" },
      { type: "video", src: "/portfolio/cite-des-nuages/video-8.mp4", aspect: "portrait" },
      { type: "video", src: "/portfolio/cite-des-nuages/video-9.mp4", aspect: "portrait" },
    ],
  },
  {
    slug: "men-at-work",
    client: "Men at Work",
    title: {
      fr: "Branding & Identité Visuelle",
      en: "Branding & Visual Identity",
    },
    category: "Branding",
    tags: {
      fr: ["Logo Design", "Identité visuelle", "Typographie", "Charte graphique"],
      en: ["Logo Design", "Visual Identity", "Typography", "Brand Guidelines"],
    },
    shortDescription: {
      fr: "Création de l'identité visuelle complète pour Men at Work : logo, palettes de couleurs, typographie et déclinaisons.",
      en: "Full visual identity for Men at Work: logo, color palettes, typography and variations.",
    },
    fullDescription: {
      fr: "Conception de l'identité visuelle complète pour Men at Work : création du logotype avec un concept de silhouette humaine stylisée intégré aux lettres « m » et « n ». Développement de multiples palettes de couleurs gradient (cyan-bleu, corail-brun, turquoise, lavande), déclinaisons du logo sur fonds colorés et sombres, sélection typographique (Smooth Circulars pour les titres, Lato pour le corps), et mise en application sur cartes de visite et supports digitaux.",
      en: "Full visual identity design for Men at Work: logotype built around a stylized human silhouette concept integrated into the 'm' and 'n' letters. Development of multiple gradient color palettes (cyan-blue, coral-brown, turquoise, lavender), logo variations on colored and dark backgrounds, typography selection (Smooth Circulars for titles, Lato for body), and rollout onto business cards and digital assets.",
    },
    coverImage: "/portfolio/men-at-work/cover.jpg",
    gradient: "from-cyan-500 to-blue-600",
    year: "2024",
    deliverables: {
      fr: [
        "Conception du logotype — concept silhouette",
        "Palettes de couleurs gradient (4 déclinaisons)",
        "Déclinaisons logo multi-fonds",
        "Sélection typographique (Smooth Circulars + Lato)",
        "Cartes de visite recto/verso",
        "Charte graphique documentée",
      ],
      en: [
        "Logotype design — silhouette concept",
        "Gradient color palettes (4 variations)",
        "Logo variations on multiple backgrounds",
        "Typography selection (Smooth Circulars + Lato)",
        "Double-sided business cards",
        "Documented brand guidelines",
      ],
    },
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
    title: {
      fr: "Couverture Événementielle Complète",
      en: "Full Event Coverage",
    },
    category: "Événementiel",
    tags: {
      fr: ["Photographie", "Vidéo", "Événementiel", "After Movie"],
      en: ["Photography", "Video", "Events", "After Movie"],
    },
    shortDescription: {
      fr: "Couverture 360° du Tournoi de Paddel Wilmeyer : photo, vidéo et aftermovie.",
      en: "360° coverage of the Wilmeyer Padel Tournament: photo, video and aftermovie.",
    },
    fullDescription: {
      fr: "Couverture complète du Tournoi de Paddel Wilmeyer : reportage photographique professionnel (97 photos), production de l'After Movie, création d'un Reel Halloween, et montage de clips musicaux. Un accompagnement 360° de l'image événementielle du client, de la captation à la post-production.",
      en: "Full coverage of the Wilmeyer Padel Tournament: professional photo reporting (97 photos), After Movie production, a Halloween Reel, and music-video edits. A 360° partnership on the client's event image, from filming to post-production.",
    },
    coverImage: portfolio6,
    gradient: "from-emerald-500 to-teal-400",
    year: "2024",
    deliverables: {
      fr: [
        "Reportage photographique (97 photos)",
        "After Movie complet",
        "Reel Halloween",
        "Clips musicaux — montage",
      ],
      en: [
        "Photo reporting (97 photos)",
        "Full After Movie",
        "Halloween Reel",
        "Music clips — editing",
      ],
    },
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

/** Localized view of a project for a given language. */
export interface LocalizedProject {
  slug: string;
  client: string;
  title: string;
  category: string;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  gradient: string;
  year: string;
  deliverables: string[];
  media: ProjectMedia[];
}

export function localizeProject(p: Project, lang: Lang): LocalizedProject {
  return {
    slug: p.slug,
    client: p.client,
    title: p.title[lang],
    category: p.category,
    tags: p.tags[lang],
    shortDescription: p.shortDescription[lang],
    fullDescription: p.fullDescription[lang],
    coverImage: p.coverImage,
    gradient: p.gradient,
    year: p.year,
    deliverables: p.deliverables[lang],
    media: p.media,
  };
}
