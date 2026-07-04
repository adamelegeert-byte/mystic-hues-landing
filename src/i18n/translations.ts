import type { Lang } from "./LanguageContext";

type Dict = Record<string, { fr: string; en: string }>;

export const ui = {
  nav: {
    services: { fr: "Services", en: "Services" },
    portfolio: { fr: "Portfolio", en: "Portfolio" },
    testimonials: { fr: "Témoignages", en: "Testimonials" },
    contact: { fr: "Contact", en: "Contact" },
    cta: { fr: "Commencer", en: "Get Started" },
  },
  hero: {
    eyebrow: { fr: "Rêvez-le, Dessinez-le, Réalisez-le", en: "Dream It, Design It, Do It" },
    headlineStart: { fr: "On crée des histoires", en: "We Craft Stories" },
    headlineMid: { fr: "qui ", en: "That " },
    headlineAccent: { fr: "convertissent", en: "Convert" },
    description: {
      fr: "Nous mêlons vision créative et stratégie commerciale pour construire des marques qui se démarquent et génèrent des résultats mesurables.",
      en: "We blend creative vision with commercial strategy to build brands that stand out and drive measurable results.",
    },
    ctaPrimary: { fr: "Lancer votre projet", en: "Start Your Project" },
    ctaSecondary: { fr: "Voir nos réalisations", en: "View Our Work" },
  },
  trusted: {
    label: { fr: "Ils nous font confiance", en: "They Trust Us" },
  },
  services: {
    eyebrow: { fr: "Ce que nous faisons", en: "What We Do" },
    title: { fr: "Nos Services", en: "Our Services" },
    items: [
      {
        title: { fr: "Création de contenu", en: "Content Creation" },
        description: {
          fr: "Des réseaux sociaux qui captent l'attention aux films de marque cinématographiques, nous créons du contenu qui engage.",
          en: "From scroll-stopping social media to cinematic brand films, we create content that captures attention and drives engagement.",
        },
      },
      {
        title: { fr: "Stratégie commerciale", en: "Commercial Strategy" },
        description: {
          fr: "Des stratégies pilotées par la donnée qui alignent votre histoire de marque avec vos objectifs, transformant les abonnés en clients.",
          en: "Data-driven strategies that align your brand story with business objectives, turning followers into customers.",
        },
      },
      {
        title: { fr: "Identité de marque", en: "Brand Identity" },
        description: {
          fr: "Des systèmes visuels qui disent qui vous êtes en un clin d'œil — logos, typographie, palettes de couleurs et chartes graphiques complètes.",
          en: "Visual systems that communicate who you are at a glance — logos, typography, color palettes, and complete brand guidelines.",
        },
      },
    ],
  },
  portfolio: {
    eyebrow: { fr: "Découvrez nos projets récents", en: "Discover our recent projects" },
    title: { fr: "Nos Réalisations", en: "Our Work" },
    viewProject: { fr: "Voir le projet", en: "View project" },
    categories: {
      Tous: { fr: "Tous", en: "All" },
      Stratégie: { fr: "Stratégie", en: "Strategy" },
      Branding: { fr: "Branding", en: "Branding" },
      Vidéo: { fr: "Vidéo", en: "Video" },
      Événementiel: { fr: "Événementiel", en: "Events" },
    } as Record<string, { fr: string; en: string }>,
  },
  testimonials: {
    eyebrow: { fr: "Ils nous adorent", en: "Client Love" },
    title: { fr: "Ce qu'ils disent", en: "What They Say" },
    items: [
      {
        quote: {
          fr: "Ils n'ont pas juste créé du contenu — ils ont bâti tout un univers visuel autour de notre marque. Les ventes ont augmenté de 40 % en trois mois.",
          en: "They didn't just create content — they built an entire visual universe around our brand. Sales increased 40% in three months.",
        },
        name: { fr: "Sophie Martin", en: "Sophie Martin" },
        role: { fr: "CEO, Luxe Cosmetics", en: "CEO, Luxe Cosmetics" },
      },
      {
        quote: {
          fr: "La stratégie était nette, l'exécution impeccable. Notre engagement social a triplé et nous avons enfin une voix de marque cohérente.",
          en: "The strategy was sharp, the execution flawless. Our social engagement tripled and we finally had a cohesive brand voice.",
        },
        name: { fr: "Antoine Duval", en: "Antoine Duval" },
        role: { fr: "Fondateur, Maison Duval", en: "Founder, Maison Duval" },
      },
      {
        quote: {
          fr: "Travailler avec cette équipe, c'est comme avoir un département créatif interne. Ils ont compris notre vision dès le premier jour.",
          en: "Working with this team felt like having an in-house creative department. They understood our vision from day one.",
        },
        name: { fr: "Clara Rodriguez", en: "Clara Rodriguez" },
        role: { fr: "Directrice Marketing, Atelier Blanc", en: "Marketing Director, Atelier Blanc" },
      },
    ],
  },
  contact: {
    eyebrow: { fr: "Parlons-en", en: "Let's Talk" },
    title: { fr: "Lancez votre projet", en: "Start Your Project" },
    description: {
      fr: "Parlez-nous de votre vision. Nous serions ravis d'échanger avec vous.",
      en: "Tell us about your vision. We'd love to hear from you.",
    },
    nameLabel: { fr: "Nom", en: "Name" },
    namePlaceholder: { fr: "Votre nom", en: "Your name" },
    emailLabel: { fr: "Email", en: "Email" },
    emailPlaceholder: { fr: "votre@email.com", en: "your@email.com" },
    messageLabel: { fr: "Message", en: "Message" },
    messagePlaceholder: { fr: "Parlez-nous de votre projet...", en: "Tell us about your project..." },
    submit: { fr: "Envoyer le message", en: "Send Message" },
    toast: { fr: "Message envoyé ! Nous vous répondons rapidement.", en: "Message sent! We'll get back to you shortly." },
  },
  footer: {
    services: { fr: "Services", en: "Services" },
    portfolio: { fr: "Portfolio", en: "Portfolio" },
    testimonials: { fr: "Témoignages", en: "Testimonials" },
    contact: { fr: "Contact", en: "Contact" },
    rights: { fr: "© 2025 Créative. Tous droits réservés.", en: "© 2025 Créative. All rights reserved." },
  },
  project: {
    notFound: { fr: "Projet introuvable", en: "Project not found" },
    backToPortfolio: { fr: "Retour au portfolio", en: "Back to portfolio" },
    deliverables: { fr: "Livrables", en: "Deliverables" },
    inDetail: { fr: "Le projet en détail", en: "The project in detail" },
    videos: { fr: "Vidéos", en: "Videos" },
    gallery: { fr: "Galerie", en: "Gallery" },
    previous: { fr: "Projet précédent", en: "Previous project" },
    next: { fr: "Projet suivant", en: "Next project" },
  },
} as const;

export function t(lang: Lang, entry: { fr: string; en: string }): string {
  return entry[lang];
}

export type UIStrings = typeof ui;
export type _Dict = Dict;