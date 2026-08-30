import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/translations";
import logo from "@/assets/logo.png";
import companyName from "@/assets/company-name.png";

const Footer = () => {
  const { lang } = useLanguage();
  const links = [
    { label: ui.footer.services[lang], href: "/#services" },
    { label: ui.footer.portfolio[lang], href: "/#portfolio" },
    { label: ui.footer.testimonials[lang], href: "/#testimonials" },
    { label: ui.footer.contact[lang], href: "/contact" },
  ];
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo SKISS" className="h-8 w-auto" />
            <img src={companyName} alt="SKISS" className="h-4 w-auto" />
          </Link>

          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} {ui.footer.rights[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
