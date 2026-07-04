import { useLanguage } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const links = [
    { label: ui.footer.services[lang], href: "#services" },
    { label: ui.footer.portfolio[lang], href: "#portfolio" },
    { label: ui.footer.testimonials[lang], href: "#testimonials" },
    { label: ui.footer.contact[lang], href: "#contact" },
  ];
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
            CRÉA<span className="text-gradient-purple">TIVE</span>
          </a>

          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground font-body">
            {ui.footer.rights[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
