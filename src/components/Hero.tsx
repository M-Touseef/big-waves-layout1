import { useEffect, useRef, useState } from 'react';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-obsidian">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster=""
        >
          <source src="/videos/big_waves_hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/30 to-obsidian/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 via-transparent to-obsidian/50"></div>

        {/* Vignette */}
        <div className="absolute inset-0 vignette"></div>

        {/* Grain */}
        <div className="absolute inset-0 grain"></div>

        {/* Subtle navy tint */}
        <div className="absolute inset-0 bg-navy/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Eyebrow */}
        <div
          className="mb-8"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          }}
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-gold/40"></span>
            <span className="font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-gold/80">
              A Global Business Ecosystem
            </span>
            <span className="w-8 h-px bg-gold/40"></span>
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className="max-w-4xl"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(25px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
          }}
        >
          <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-text-light leading-[1.05] tracking-[0.01em]">
            Building Across
          </span>
          <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-[0.01em] mt-1">
            <span className="text-text-light">Borders</span>
            <span className="text-gold">.</span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p
          className="max-w-lg mt-8 font-body text-[15px] md:text-[17px] leading-[1.7] text-text-muted/80"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s',
          }}
        >
          A multinational holding company operating across energy,
          manufacturing, trading, and technology — connecting industries
          and markets worldwide.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.1s',
          }}
        >
          <a
            href="#companies"
            className="group inline-flex items-center gap-3 font-body text-[11px] tracking-[0.15em] uppercase bg-gold/10 hover:bg-gold/20 text-gold border border-gold/25 hover:border-gold/50 px-7 py-3.5 rounded-xl transition-all duration-400"
          >
            Explore Our Companies
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>


      {/* Bottom gradient for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};
