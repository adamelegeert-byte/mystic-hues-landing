import type { Lang } from "./LanguageContext";

type Dict = Record<string, { fr: string; en: string }>;

export const ui = {
  nav: {
    services: { fr: "Services", en: "Services" },
    about: { fr: "Nous", en: "About Us" },
    portfolio: { fr: "Portfolio", en: "Portfolio" },
    testimonials: { fr: "Témoignages", en: "Testimonials" },
    contact: { fr: "Contact", en: "Contact" },
    cta: { fr: "Commencer", en: "Get Started" },
  },
  about: {
    eyebrow: { fr: "Qui sommes-nous", en: "Who we are" },
    title: { fr: "Les fondateurs", en: "The Founders" },
    description: {
      fr: "SKISS est portée par trois fondateurs complémentaires. Voici qui contacter selon votre besoin.",
      en: "SKISS is driven by three complementary founders. Here's who to contact depending on your needs.",
    },
    rolePlaceholder: { fr: "Rôle à définir", en: "Role TBD" },
    contactForLabel: { fr: "Le contacter pour", en: "Contact for" },
    contactForPlaceholder: { fr: "Description à venir", en: "Description coming soon" },
    founders: {
      Martin: {
        role: { fr: "Media Buying, IA & Contenu", en: "Media Buying, AI & Content" },
        contactFor: {
          fr: [
            "Dix ans à piloter des budgets média. Des campagnes d'acquisition et de lead generation pour des marques en pharmaceutique et en événementiel, sur des objectifs de vente comme de collecte de contacts. Le coût par résultat se gagne dans le détail : structure de compte, ciblage, arbitrage des budgets, itération sur la créa.",
            "L'IA comme méthode, pas comme gadget. Son implémentation dans vos process internes : tâches répétitives automatisées, production accélérée, décisions appuyées sur la donnée plutôt que sur l'intuition. Ce qui compte, c'est le temps rendu aux équipes et les décisions prises plus vite.",
            "Et la production derrière la stratégie. Photo, vidéo, montage : les contenus sont produits en interne, jamais sous-traités. De quoi tester vite, ajuster une accroche entre deux vagues, et ne dépendre de personne pour faire vivre une campagne jusqu'au bout.",
          ],
          en: [
            "Ten years running media budgets. Acquisition and lead generation campaigns for brands in pharmaceuticals and events, built for sales targets as much as for contact collection. Cost per result is won in the details: account structure, targeting, budget arbitration, creative iteration.",
            "AI as a method, not a gadget. Embedded into your internal processes: repetitive tasks automated, production accelerated, decisions grounded in data rather than instinct. What matters is the time given back to your teams and the decisions made faster.",
            "And the production behind the strategy. Photo, video, editing: content is made in house, never outsourced. Fast to test, quick to adjust a hook between two waves, and never dependent on anyone to keep a campaign running from start to finish.",
          ],
        },
      },
      Adam: {
        role: {
          fr: "Campaign Expert RMB, Graphiste, Vidéaste, Motion Designer & IA",
          en: "Campaign Expert at RMB, Graphic Designer, Videographer, Motion Designer & AI",
        },
        contactFor: {
          fr: [
            "Campaign Expert chez RMB (Régie Média Belge), à Bruxelles. Il pilote des dispositifs publicitaires digitaux et BVOD pour certaines des plus grandes marques du pays, entre placement média, structuration des campagnes et suivi de performance.",
            "Certifié AI Foundations (OpenAI), il intègre l'intelligence artificielle à chaque étape utile : recherche, production, optimisation des contenus. Une manière de gagner du temps sans jamais sacrifier la qualité.",
            "Graphiste, vidéaste et motion designer de formation, il conçoit l'identité visuelle de SKISS de bout en bout : logo, templates, vidéos, animations. Le regard créatif qui donne forme à ce que Martin et Kahn mettent en place côté stratégie et acquisition.",
          ],
          en: [
            "Campaign Expert at RMB (Régie Média Belge), in Brussels. He runs digital and BVOD advertising campaigns for some of the country's biggest brands, from media placement to campaign structuring and performance tracking.",
            "AI Foundations certified (OpenAI), he brings artificial intelligence into every stage where it earns its place: research, production, content optimization. A way to move faster without ever cutting corners on quality.",
            "A trained graphic designer, videographer and motion designer, he shapes SKISS's visual identity from end to end: logo, templates, videos, animations. The creative eye that gives form to what Martin and Kahn build on the strategy and acquisition side.",
          ],
        },
      },
    },
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
          fr: "Des systèmes visuels qui disent qui vous êtes en un clin d'œil : logos, typographie, palettes de couleurs et chartes graphiques complètes.",
          en: "Visual systems that communicate who you are at a glance: logos, typography, color palettes, and complete brand guidelines.",
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
          fr: "Ils n'ont pas juste créé du contenu, ils ont bâti tout un univers visuel autour de notre marque. Les ventes ont augmenté de 40 % en trois mois.",
          en: "They didn't just create content. They built an entire visual universe around our brand. Sales increased 40% in three months.",
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
    companyLabel: { fr: "Entreprise", en: "Company" },
    companyPlaceholder: { fr: "Nom de votre entreprise", en: "Your company name" },
    phoneLabel: { fr: "Téléphone", en: "Phone" },
    phonePlaceholder: { fr: "+32 470 00 00 00", en: "+32 470 00 00 00" },
    serviceLabel: { fr: "Votre besoin", en: "What you need" },
    servicePlaceholder: { fr: "Sélectionnez un service", en: "Select a service" },
    serviceOptions: [
      { value: "contenu", fr: "Création de contenu", en: "Content creation" },
      { value: "strategie", fr: "Stratégie commerciale", en: "Commercial strategy" },
      { value: "branding", fr: "Identité de marque", en: "Brand identity" },
      { value: "ia", fr: "IA et création de process", en: "AI and process design" },
      { value: "media-buying", fr: "Media buying et stratégie publicitaire", en: "Media buying and ad strategy" },
    ],
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