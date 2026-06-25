import { useEffect } from 'react';
import type { Company } from './CompanyShowcase';

interface CompanyOverlayProps {
  company: Company;
  onClose: () => void;
}

export const CompanyOverlay = ({ company, onClose }: CompanyOverlayProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-obsidian/80 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Overlay Panel */}
      <div className="relative z-10 w-[92%] max-w-5xl max-h-[90vh] overflow-y-auto bg-navy/95 border border-white/[0.06] rounded-2xl shadow-2xl animate-slide-up">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-white/20 text-text-muted hover:text-text-light transition-all cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Visual */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
            <img
              src={company.image}
              alt={company.name}
              className="absolute inset-0 w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/50"></div>

            <div className="absolute bottom-6 left-6">
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold/80">
                {company.industry}
              </span>
              <h3 className="font-display text-3xl text-text-light mt-1">{company.name}</h3>
              <span className="font-body text-[12px] text-text-muted mt-1">{company.country}</span>
            </div>
          </div>

          {/* Right: Details */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-gold"></span>
              <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text-muted">
                Company Profile
              </span>
            </div>

            <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-text-muted/90 mb-8">
              {company.fullDescription}
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-text-muted/50 block mb-1">
                  Business Focus
                </span>
                <span className="font-body text-[14px] text-text-light/80">
                  {company.focus}
                </span>
              </div>
              <div>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-text-muted/50 block mb-1">
                  Location
                </span>
                <span className="font-body text-[14px] text-text-light/80">
                  {company.country}
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-white/5 mb-8"></div>

            <div className="flex items-center gap-4">
              {company.website ? (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.15em] uppercase bg-gold/10 hover:bg-gold/20 text-gold border border-gold/20 hover:border-gold/40 px-6 py-3 rounded-xl transition-all duration-300"
                >
                  Visit Website <span>↗</span>
                </a>
              ) : (
                <span className="font-body text-[10px] tracking-[0.15em] uppercase text-text-muted/40 px-6 py-3">
                  Website coming soon
                </span>
              )}
              <button
                onClick={onClose}
                className="font-body text-[10px] tracking-[0.15em] uppercase text-text-muted hover:text-text-light px-6 py-3 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
