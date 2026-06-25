import { useEffect, useRef } from 'react';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullScreenMenu = ({ isOpen, onClose }: FullScreenMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const navItems = [
    { number: '01', label: 'Ecosystem', href: '#introduction' },
    { number: '02', label: 'About', href: '#philosophy' },
    { number: '03', label: 'Contact', href: '#contact' },
  ];

  const companies = [
    'Maritime', 'Architecture', 'Commerce', 'Luxury Fashion', 'Yacht Engineering', 'Marine Consultancy', 'Networking'
  ];

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background with grain */}
      <div className="absolute inset-0 bg-obsidian/95 backdrop-blur-2xl grain"></div>

      {/* Floating Golden Ambient Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Close Button - Lifted to z-50 to ensure clickability above the grid */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-50 flex items-center gap-3 font-body text-[10px] tracking-[0.2em] uppercase text-text-muted hover:text-gold transition-all duration-300 cursor-pointer group"
      >
        <span>Close</span>
        <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 group-hover:border-gold/50 group-hover:bg-gold/10 group-hover:shadow-[0_0_12px_rgba(197,160,89,0.2)] transition-all duration-500">
          <svg className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </button>

      {/* Content Grid */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-stretch px-8 md:px-16 lg:px-24 pt-24 pb-12">
        {/* Left: Navigation Links */}
        <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto lg:mx-0 lg:pr-12">
          <nav className="space-y-4">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="group flex items-center gap-6 py-4 border-b border-white/[0.03] hover:border-gold/20 transition-all duration-500"
                style={{
                  transitionDelay: isOpen ? `${i * 80 + 200}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <span className="font-body text-xs text-gold/60 tracking-[0.15em] transition-transform duration-300 group-hover:scale-110 group-hover:text-gold">
                  {item.number}
                </span>
                <span className="font-display text-4xl md:text-5xl lg:text-6xl text-text-light/80 group-hover:text-text-light group-hover:translate-x-2 transition-all duration-500 leading-tight">
                  {item.label}
                </span>
                <svg className="w-5 h-5 text-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Info Panel Card */}
        <div
          className="lg:w-[380px] flex flex-col gap-10 mt-12 lg:mt-0 lg:border-l lg:border-white/5 lg:pl-12 justify-center"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          }}
        >
          <div className="bg-navy/40 border border-white/[0.04] backdrop-blur-md rounded-2xl p-8 space-y-8 relative overflow-hidden group">
            {/* Ambient Card Background Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-500"></div>

            {/* Company Categories */}
            <div>
              <h4 className="font-body text-[9px] tracking-[0.25em] uppercase text-gold/80 mb-4 font-semibold">
                Industries & Sectors
              </h4>
              <div className="flex flex-wrap gap-2">
                {companies.map((c) => (
                  <span
                    key={c}
                    className="font-body text-[10px] text-text-muted hover:text-gold hover:border-gold/20 transition-all duration-300 border border-white/5 rounded-lg px-2.5 py-1.5 bg-obsidian/30"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-white/[0.04]"></div>

            {/* Stats */}
            <div>
              <h4 className="font-body text-[9px] tracking-[0.25em] uppercase text-gold/80 mb-4 font-semibold">
                Global Footprint
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '7', label: 'Ecosystem' },
                  { value: '6+', label: 'Countries' },
                  { value: 'KSA', label: 'Hub' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-2 rounded-xl bg-obsidian/20 border border-white/[0.02] hover:border-gold/10 transition-colors duration-300">
                    <div className="font-display text-2xl md:text-3xl text-gold font-medium">{stat.value}</div>
                    <div className="font-body text-[9px] tracking-[0.1em] uppercase text-text-muted/60 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-white/[0.04]"></div>

            {/* Contact / HQ */}
            <div>
              <h4 className="font-body text-[9px] tracking-[0.25em] uppercase text-gold/80 mb-3 font-semibold">
                HQ Address
              </h4>
              <p className="font-body text-xs text-text-muted/80 leading-relaxed">
                International Business District, Riyadh, Saudi Arabia
              </p>
              <a 
                href="mailto:info@bigwave.com"
                className="inline-block font-body text-xs text-gold/80 hover:text-gold transition-colors mt-2"
              >
                info@bigwave.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
