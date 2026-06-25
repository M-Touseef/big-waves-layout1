import { useState, useEffect, useRef } from 'react';

const principles = [
  {
    title: 'Global Perspective',
    description: 'We see opportunity where borders meet. Operating across eight countries and six industries, our decisions are informed by diverse markets, cultures, and economic environments.',
    image: '/global_perspective.png',
  },
  {
    title: 'Operational Excellence',
    description: 'Every business in our portfolio is measured by the same standard — sustainable performance. We invest in systems, talent, and processes that compound over decades.',
    image: '/operational_excellence.png',
  },
  {
    title: 'Sustainable Growth',
    description: 'We build for the long term. Our investments prioritize industries and markets where responsible growth creates lasting value for communities and stakeholders alike.',
    image: '/sustainable_growth.png',
  },
];

export const Philosophy = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative bg-obsidian py-28 md:py-36 overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
      
      {/* Floating Golden Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Eyebrow */}
        <div
          className="flex items-center justify-center gap-3 mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          <span className="w-8 h-px bg-gold/30"></span>
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text-muted">
            Our Philosophy
          </span>
          <span className="w-8 h-px bg-gold/30"></span>
        </div>

        {/* Main Statement */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-text-light leading-[1.15] max-w-3xl mx-auto flex flex-col gap-2">
          <span
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            Discipline builds empires<span className="text-gold">.</span>
          </span>
          <span
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
            }}
          >
            Vision sustains them<span className="text-gold">.</span>
          </span>
        </h2>

        {/* Gold divider */}
        <div
          className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-12 mb-16"
          style={{
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
          }}
        ></div>

        {/* Principles 3D Flip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mt-8">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="perspective-1000 w-full h-[380px] group cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: `${index * 150 + 500}ms`
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Inner Card Wrapper with transition */}
              <div className="relative w-full h-full duration-700 preserve-3d group-hover:rotate-y-180 transition-transform ease-[cubic-bezier(0.16,1,0.3,1)]">
                
                {/* FRONT SIDE (Image & Title) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl border border-white/[0.04] bg-navy/20 backdrop-blur-md overflow-hidden flex flex-col justify-between p-8">
                  {/* Background Image with dark vignette */}
                  <div className="absolute inset-0 -z-10">
                    <img 
                      src={principle.image} 
                      alt={principle.title} 
                      className="w-full h-full object-cover brightness-[0.4] scale-100 group-hover:scale-105 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
                  </div>

                  {/* Top: Circle Badge with Number */}
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center font-body text-[10px] text-gold/85 tracking-widest transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10 group-hover:shadow-[0_0_12px_rgba(197,160,89,0.2)]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Bottom: Title & Line */}
                  <div className="text-left">
                    <h3 className="font-display text-2xl text-text-light group-hover:text-gold transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <div 
                      className="w-8 h-px bg-gold/30 mt-3 origin-left transition-all duration-500"
                      style={{
                        transform: activeIndex === index ? 'scaleX(2)' : 'scaleX(1)',
                        backgroundColor: activeIndex === index ? 'var(--color-gold)' : 'rgba(197, 160, 89, 0.3)',
                      }}
                    ></div>
                  </div>
                </div>

                {/* BACK SIDE (Text / Description) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl border border-gold/20 bg-navy/95 backdrop-blur-xl p-8 flex flex-col justify-between text-left">
                  {/* Card Glow Element */}
                  <div className="absolute -inset-2 bg-gradient-to-b from-gold/5 to-transparent blur-xl rounded-3xl -z-10 pointer-events-none" />

                  {/* Top Heading */}
                  <div>
                    <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold/70 block mb-1">
                      {String(index + 1).padStart(2, '0')} — Principle
                    </span>
                    <h4 className="font-display text-2xl text-text-light">
                      {principle.title}
                    </h4>
                    <div className="w-12 h-px bg-gold/40 mt-3 mb-6"></div>
                  </div>

                  {/* Middle Description */}
                  <p className="font-body text-[13px] md:text-[14px] leading-[1.8] text-text-muted/90 flex-grow pr-1">
                    {principle.description}
                  </p>

                  {/* Bottom indicator */}
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-body text-[9px] tracking-wider text-text-muted/40 uppercase">
                      Philosophy Ecosystem
                    </span>
                    <span className="text-gold/60 text-xs">→</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
