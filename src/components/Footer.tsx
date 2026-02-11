const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
            CRÉA<span className="text-gradient-purple">TIVE</span>
          </a>

          <div className="flex items-center gap-8">
            {["Services", "Portfolio", "Testimonials", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground font-body">
            © 2025 Créative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
