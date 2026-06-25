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
      { threshold: 0.2 }
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
      {/* Subtle background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>

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
        <h2
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-text-light leading-[1.15] max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(25px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
          }}
        >
          Discipline builds empires<span className="text-gold">.</span>
          <br />
          Vision sustains them<span className="text-gold">.</span>
        </h2>

        {/* Gold divider */}
        <div
          className="w-12 h-px bg-gold/40 mx-auto mt-12 mb-16"
          style={{
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
          }}
        ></div>

        {/* Principles */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease 0.7s',
          }}
        >
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group relative px-8 py-10 cursor-pointer border border-white/[0.03] rounded-xl hover:border-gold/30 hover:bg-gold/[0.02] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(197,160,89,0.05)] transition-all duration-500 ease-out"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Number */}
              <span className="font-body text-[11px] tracking-[0.15em] text-gold/40 mb-4 block transition-transform duration-500 group-hover:scale-110 origin-left">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl text-text-light mb-4 transition-colors duration-300 group-hover:text-gold">
                {principle.title}
              </h3>

              {/* Gold line */}
              <div
                className="w-6 h-px bg-gold mx-auto mb-5 origin-left transition-all duration-500"
                style={{
                  transform: activeIndex === index ? 'scaleX(2)' : 'scaleX(1)',
                  opacity: activeIndex === index ? 1 : 0.3,
                }}
              ></div>

              {/* Description */}
              <p
                className="font-body text-[13px] md:text-[14px] leading-[1.7] text-text-muted/60 transition-all duration-500"
                style={{
                  opacity: activeIndex === index ? 1 : 0.6,
                  color: activeIndex === index ? '#9BA1AA' : undefined,
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
