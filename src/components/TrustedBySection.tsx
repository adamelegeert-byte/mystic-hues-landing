import clientWilmeyer from "@/assets/client-wilmeyer.png";
import clientWip from "@/assets/client-wip.png";
import clientFa from "@/assets/client-fa.png";
import clientThefin from "@/assets/client-thefin.png";

const logos = [
  { src: clientWilmeyer, alt: "Wilmeyer" },
  { src: clientWip, alt: "WIP For You" },
  { src: clientFa, alt: "FA" },
  { src: clientThefin, alt: "The Fin" },
];

const TrustedBySection = () => {
  // Double the logos for seamless infinite scroll
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative py-16 bg-card/80 border-y border-border/30 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-10">
        They Trusted Us
      </p>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-card/80 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-card/80 to-transparent" />

      {/* Scrolling track */}
      <div className="group flex items-center">
        <div className="flex items-center gap-16 md:gap-24 animate-scroll-left group-hover:[animation-play-state:paused]">
          {allLogos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-16 w-auto object-contain shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
