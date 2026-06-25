import { useState, useEffect, useRef } from 'react';
import { FullScreenMenu } from './FullScreenMenu';

export const Navbar = () => {
  const [scrollState, setScrollState] = useState<'top' | 'scrolled'>('top');
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollState(currentY > 40 ? 'scrolled' : 'top');
      if (currentY > lastScrollY.current && currentY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Ecosystem', href: '#introduction' },
    { label: 'About', href: '#philosophy' },
  ];

  return (
    <>
      <div
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${scrollState === 'top' ? 'top-6' : 'top-3'}`}
      >
        <nav
          className={`relative flex items-center justify-between w-[92%] max-w-6xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-2xl border ${
            scrollState === 'top'
              ? 'py-4 px-8 bg-transparent border-transparent'
              : 'py-3 px-6 bg-transparent border-transparent backdrop-blur-md'
          }`}
        >
          {/* Logo + Descriptor */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-display text-xl tracking-[0.04em] text-text-light transition-all duration-300 group-hover:text-gold">
              Big Wave
            </span>
            <span className="hidden md:block h-4 w-px bg-white/10"></span>
            <span className="hidden md:block font-body text-[10px] tracking-[0.2em] uppercase text-text-muted">
              Holding Group
            </span>
          </a>

          {/* Center Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative font-body text-[11px] tracking-[0.18em] uppercase text-text-muted hover:text-text-light transition-colors duration-300 py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right: CTA + Menu */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 font-body text-[10px] tracking-[0.16em] uppercase bg-gold/10 hover:bg-gold/20 text-gold border border-gold/20 hover:border-gold/40 px-5 py-2.5 rounded-xl transition-all duration-300"
            >
              <span>Get in Touch</span>
              <span className="text-xs">→</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-col items-end gap-[5px] p-2 group cursor-pointer"
              aria-label="Open menu"
            >
              <span className="block h-px w-5 bg-text-muted group-hover:bg-text-light group-hover:w-6 transition-all duration-300"></span>
              <span className="block h-px w-4 bg-text-muted group-hover:bg-text-light group-hover:w-6 transition-all duration-300"></span>
            </button>
          </div>
        </nav>
      </div>

      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
