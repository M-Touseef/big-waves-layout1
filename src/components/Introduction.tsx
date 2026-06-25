import { useEffect, useRef, useState } from 'react';

// Custom hook/component for counting up animation
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number | string, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const numericEnd = typeof end === 'string' ? parseInt(end.replace(/\D/g, ''), 10) : end;

  useEffect(() => {
    if (isNaN(numericEnd)) return;
    
    let startTime: number | null = null;
    let observer: IntersectionObserver;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easeProgress * numericEnd));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericEnd, duration]);

  if (isNaN(numericEnd)) {
    return <span>{end}</span>;
  }

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export const Introduction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="introduction"
      ref={sectionRef}
      className="relative bg-navy py-20 md:py-28 overflow-hidden border-b border-white/[0.02]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Massive Typography Header */}
        <div className="relative z-20 mb-20 md:mb-32">
          <div
            className="flex items-center gap-4 mb-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            <span className="w-12 h-px bg-gold"></span>
            <span className="font-body text-[11px] tracking-[0.4em] uppercase text-text-muted/80">
              The Holding Group
            </span>
          </div>

          <h2
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[110px] text-text-light leading-[0.95] tracking-tight max-w-5xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            One Vision.<br />
            <span className="text-text-muted/40 italic">Multiple Industries.</span>
          </h2>
        </div>

        {/* Asymmetrical Overlapping Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-start">
          
          {/* Left: Real-Time Corporate Image Collage */}
          <div
            className="lg:col-span-7 relative z-10 w-full min-h-[400px] sm:min-h-[500px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
            }}
          >
            {/* Main Image - Boardroom */}
            <div className="absolute right-0 top-0 w-[75%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-20 border border-white/5 group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                alt="Executive Boardroom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* Secondary Image - Port/Maritime */}
            <div className="absolute left-0 bottom-0 w-[60%] aspect-square rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30 border border-white/10 group -translate-y-4 lg:translate-y-8">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80"
                alt="Global Maritime Port"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                loading="lazy"
              />
            </div>

            {/* Floating Stat Card */}
            <div className="absolute top-[10%] left-[5%] bg-obsidian/80 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl z-40 max-w-[200px]">
              <div className="font-display text-4xl text-gold mb-1">
                <AnimatedCounter end={24} duration={2500} />
              </div>
              <div className="font-body text-[9px] tracking-[0.2em] uppercase text-text-light/80 leading-relaxed">
                Years Building Global Businesses
              </div>
            </div>
          </div>

          {/* Right Floating Editorial Text & Animated Stats */}
          <div
            className="lg:col-span-5 lg:-ml-24 relative z-20 lg:mt-32"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
              transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
            }}
          >
            <div className="bg-obsidian/95 backdrop-blur-2xl border border-white/[0.05] p-10 md:p-14 lg:p-16 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
              <div className="w-10 h-px bg-gold mb-10"></div>
              
              <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-text-muted/90 mb-14">
                Big Wave Holding is a diversified international group with a portfolio
                spanning maritime services, architecture, global commerce, luxury fashion,
                and precision engineering. Headquartered in Riyadh's International Business
                District, we build and invest in businesses that shape industries
                and connect markets across continents.
              </p>

              {/* Animated Stats Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { label: 'Industries', value: 7 },
                  { label: 'Companies', value: 7 },
                  { label: 'Countries', value: 6, suffix: '+' },
                  { label: 'Headquarters', value: 'KSA' },
                ].map((item, idx) => (
                  <div key={item.label} className="flex flex-col relative group">
                    <div className="absolute -left-4 top-0 w-px h-0 bg-gold/30 group-hover:h-full transition-all duration-500"></div>
                    <span className="font-display text-4xl md:text-5xl text-text-light mb-2">
                      {typeof item.value === 'number' ? (
                        <AnimatedCounter end={item.value} duration={2000 + (idx * 500)} suffix={item.suffix} />
                      ) : (
                        item.value
                      )}
                    </span>
                    <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text-muted/50">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
