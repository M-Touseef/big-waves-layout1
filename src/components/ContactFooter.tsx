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
          {/* Right: Social Media Icons */}
          <div className="flex justify-center lg:justify-end gap-4 w-full lg:w-auto">
            {[
              { 
                name: 'Twitter', 
                href: 'https://twitter.com', 
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ) 
              },
              { 
                name: 'Instagram', 
                href: 'https://instagram.com', 
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) 
              },
              { 
                name: 'TikTok', 
                href: 'https://tiktok.com', 
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.5-.77-.58-1.42-1.36-1.89-2.22v8.83c0 1.39-.23 2.77-.87 3.96-.94 1.72-2.73 3-4.66 3.32-2.33.37-4.83-.34-6.52-2.03-1.84-1.85-2.5-4.67-1.7-7.14.65-2.02 2.37-3.66 4.46-4.14 1.12-.26 2.29-.22 3.4.09v4.13c-.94-.34-2-.36-2.9-.01-1.12.44-1.94 1.52-2.06 2.71-.16 1.48.79 2.97 2.23 3.33 1.19.3 2.51-.07 3.27-1.07.45-.6.67-1.34.66-2.1V.02h.12z" />
                  </svg>
                ) 
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-gold/50 text-text-muted/60 hover:text-gold bg-white/[0.02] hover:bg-gold/10 transition-all duration-300 hover:shadow-[0_0_12px_rgba(197,160,89,0.2)] hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
