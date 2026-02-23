import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
cd /tmp/mystic-hues-landing

# Stage tous les fichiers
git add \
  src/App.tsx \
  src/components/PortfolioSection.tsx \
  src/components/ScrollToTop.tsx \
  src/data/projects.ts \
  src/pages/projets/ProjectPage.tsx \
  public/portfolio/

# Commit
git commit -m "feat: portfolio avec vrais assets, pages projet dédiées et vidéos 9:16

- Ajout données centralisées des 6 projets (src/data/projects.ts)
- PortfolioSection: images réelles, vidéos autoplay, navigation vers pages projet
- Pages projet dédiées avec route /projets/:slug
- Vidéos affichées en 9:16 (portrait) pour Vregas, Wilmeyer, Guidelance
- Galerie photos pour Wilmeyer (9 photos sélectionnées)
- Assets copiés depuis ~/Desktop/Loveble/ (images, vidéos, PDFs)
- ScrollToTop pour navigation fluide entre pages
- Navigation projet précédent/suivant

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"

# Push
git push origin main
