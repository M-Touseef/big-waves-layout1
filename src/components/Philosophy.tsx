import { useState, useEffect, useRef } from 'react';

const principles = [
  {
    title: 'Global Perspective',
    description: 'We see opportunity where borders meet. Operating across eight countries and six industries, our decisions are informed by diverse markets, cultures, and economic environments.',
  },
  {
    title: 'Operational Excellence',
    description: 'Every business in our portfolio is measured by the same standard — sustainable performance. We invest in systems, talent, and processes that compound over decades.',
  },
  {
    title: 'Sustainable Growth',
    description: 'We build for the long term. Our investments prioritize industries and markets where responsible growth creates lasting value for communities and stakeholders alike.',
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

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mt-8">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group relative px-8 py-10 cursor-pointer border border-white/[0.04] bg-navy/20 backdrop-blur-md rounded-2xl hover:border-gold/30 hover:bg-navy/40 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(197,160,89,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: `${index * 150 + 500}ms`
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Premium Glow Backing */}
              <div
                className="absolute -inset-2 bg-gradient-to-b from-gold/8 to-transparent blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 pointer-events-none"
                style={{
                  transform: activeIndex === index ? 'scale(1.05)' : 'scale(0.95)',
                }}
              />

              {/* Glowing Top Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center rounded-t-2xl"></div>

              {/* Number Circle Badge */}
              <div className="w-9 h-9 mx-auto rounded-full border border-gold/20 flex items-center justify-center font-body text-[10px] text-gold/85 tracking-widest mb-6 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(197,160,89,0.2)]">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-text-light mb-4 transition-all duration-300 group-hover:text-gold group-hover:translate-x-0.5">
                {principle.title}
              </h3>

              {/* Gold line separator */}
              <div
                className="w-8 h-px bg-gold/30 mx-auto mb-5 origin-left transition-all duration-500"
                style={{
                  transform: activeIndex === index ? 'scaleX(2)' : 'scaleX(1)',
                  backgroundColor: activeIndex === index ? 'var(--color-gold)' : 'rgba(197, 160, 89, 0.3)',
                }}
              ></div>

              {/* Description */}
              <p
                className="font-body text-[13px] md:text-[14px] leading-[1.7] text-text-muted/60 transition-all duration-500"
                style={{
                  opacity: activeIndex === index ? 1 : 0.6,
                  color: activeIndex === index ? '#F7F5F0' : undefined,
                }}
              >
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
