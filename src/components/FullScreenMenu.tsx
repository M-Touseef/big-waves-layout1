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
      {/* Background */}
      <div className="absolute inset-0 bg-obsidian/95 backdrop-blur-2xl grain"></div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-10 flex items-center gap-3 font-body text-[10px] tracking-[0.2em] uppercase text-text-muted hover:text-text-light transition-colors cursor-pointer"
      >
        Close
        <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-white/20 transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </button>

      {/* Content Grid */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-stretch px-8 md:px-16 lg:px-24 pt-24 pb-12">
        {/* Left: Navigation Links */}
        <div className="flex-1 flex flex-col justify-center">
          <nav className="space-y-1">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="group flex items-baseline gap-6 py-3 transition-all duration-500"
                style={{
                  transitionDelay: isOpen ? `${i * 80 + 200}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <span className="font-body text-xs text-gold/60 tracking-[0.15em]">
                  {item.number}
                </span>
                <span className="font-display text-4xl md:text-5xl lg:text-6xl text-text-light/80 group-hover:text-text-light transition-colors duration-300 leading-tight">
                  {item.label}
                </span>
                <span className="w-0 group-hover:w-12 h-px bg-gold transition-all duration-500"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Info Panel */}
        <div
          className="lg:w-80 flex flex-col justify-end lg:justify-center gap-12 mt-12 lg:mt-0 lg:border-l lg:border-white/5 lg:pl-16"
          style={{
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.6s ease 0.6s',
          }}
        >
          {/* Company Categories */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text-muted mb-4">
              Industries
            </h4>
            <div className="flex flex-wrap gap-2">
              {companies.map((c) => (
                <span
                  key={c}
                  className="font-body text-xs text-text-muted/70 border border-white/5 rounded-lg px-3 py-1.5"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            {[
              { value: '7', label: 'Companies' },
              { value: '6+', label: 'Countries' },
              { value: 'KSA', label: 'Headquartered' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-gold">{stat.value}</div>
                <div className="font-body text-[10px] tracking-[0.15em] uppercase text-text-muted mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text-muted mb-3">
              Headquarters
            </h4>
            <p className="font-body text-sm text-text-muted/80 leading-relaxed">
              International Business District,
              Riyadh, Saudi Arabia
            </p>
            <p className="font-body text-sm text-text-muted/60 mt-1">
              info@bigwave.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
