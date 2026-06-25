import { useEffect, useRef, useState } from 'react';

export const ContactFooter = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-obsidian min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Oversized Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
        <span className="font-display text-[150px] md:text-[250px] lg:text-[400px] text-white/[0.02] tracking-tighter whitespace-nowrap">
          BIG WAVE
        </span>
      </div>

      {/* Main Content Area (Centered) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center mt-20">
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-gold/60 block mb-8">
            Connect
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[100px] text-text-light leading-[0.95] tracking-tight">
            The Future<br />Is Built Here<span className="text-gold">.</span>
          </h2>
        </div>

        {/* Minimalist Contact Links */}
        <div
          className="mt-16 md:mt-24 flex flex-col sm:flex-row items-center gap-10 md:gap-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
          }}
        >
          <a
            href="mailto:info@bigwave.com"
            className="group relative font-body text-[13px] md:text-[15px] tracking-[0.2em] uppercase text-text-muted hover:text-text-light transition-colors duration-500"
          >
            info@bigwave.com
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full"></span>
          </a>
          
          <span className="hidden sm:block w-px h-8 bg-white/10"></span>

          <a
            href="tel:+966000000000"
            className="group relative font-body text-[13px] md:text-[15px] tracking-[0.2em] uppercase text-text-muted hover:text-text-light transition-colors duration-500"
          >
            +966 (0) 00 000 0000
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Abstract Structural Footer Bar */}
      <div
        className="relative z-10 px-8 md:px-16 pb-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.5s ease 0.8s',
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-t border-white/[0.05] pt-12">
          
          {/* Left: Location & Brand */}
          <div className="flex flex-col gap-4 text-center lg:text-left w-full lg:w-auto">
            <span className="font-display text-2xl text-text-light tracking-wide">
              Big Wave Holding
            </span>
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-text-muted/40 leading-relaxed">
              International Business District<br />
              Riyadh, Saudi Arabia
            </span>
          </div>



        </div>
      </div>
    </section>
  );
};
