import { useState, useEffect, useRef } from 'react';
import { CompanyOverlay } from './CompanyOverlay';

export interface Company {
  id: string;
  name: string;
  country: string;
  industry: string;
  description: string;
  fullDescription: string;
  image: string;
  website: string | null;
  focus: string;
}

const companies: Company[] = [
  {
    id: 'waterline',
    name: 'Waterline',
    country: 'Egypt',
    industry: 'Maritime & Marine',
    description: 'Pioneering maritime solutions across the Red Sea and Mediterranean.',
    fullDescription: 'Waterline pioneers maritime solutions across the Red Sea and Mediterranean, delivering vessel management and marine infrastructure services. With deep expertise in port operations and fleet logistics, Waterline ensures safe, efficient, and environmentally responsible maritime activity across one of the world\'s most vital shipping corridors.',
    image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1200&q=80',
    website: 'https://waterlineegypt.com',
    focus: 'Vessel management, Marine infrastructure, Port operations',
  },
  {
    id: 'my-network',
    name: 'My Network',
    country: 'Saudi Arabia',
    industry: 'Networking & Business',
    description: 'Connecting entrepreneurs and industry leaders across the Gulf region.',
    fullDescription: 'My Network connects entrepreneurs and industry leaders across the Gulf region through curated business experiences and strategic partnerships. The platform facilitates high-value introductions, exclusive networking events, and collaborative opportunities that accelerate growth for ambitious professionals and enterprises across Saudi Arabia and the wider GCC.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
    website: 'https://mynetworkksa.com',
    focus: 'Business networking, Strategic partnerships, Curated experiences',
  },
  {
    id: 'qnet',
    name: 'QNet',
    country: 'International',
    industry: 'Global Commerce',
    description: 'A global commerce platform bridging markets and creating international trade pathways.',
    fullDescription: 'QNet is a global commerce platform bridging markets and creating pathways for international trade and cultural exchange. Operating across multiple continents, QNet connects producers, distributors, and consumers through innovative commerce solutions that transcend borders and build lasting economic relationships between diverse markets.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    website: null,
    focus: 'International trade, Market connectivity, Commerce platforms',
  },
  {
    id: 'stylies',
    name: 'Stylies',
    country: 'Switzerland',
    industry: 'Luxury Fashion',
    description: 'Swiss-crafted luxury fashion bringing European elegance to global clientele.',
    fullDescription: 'Stylies represents the pinnacle of Swiss-crafted luxury fashion, bringing European elegance to discerning global clientele with a focus on bespoke tailoring. Every garment embodies precision craftsmanship, curated materials, and timeless design — an investment in personal distinction that reflects the refined standards of Swiss excellence.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
    website: null,
    focus: 'Bespoke tailoring, Luxury garments, Swiss craftsmanship',
  },
  {
    id: 'alpin-group',
    name: 'Alpin Group',
    country: 'Germany',
    industry: 'Yacht Parts & Accessories',
    description: 'German-engineered precision yacht components for the superyacht industry.',
    fullDescription: 'Alpin Group delivers German-engineered precision yacht components and marine accessories designed for the superyacht industry. With manufacturing excellence rooted in Germany\'s engineering tradition, every component meets the exacting standards demanded by the world\'s most prestigious shipyards and superyacht builders.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80',
    website: null,
    focus: 'Superyacht components, Marine accessories, Precision engineering',
  },
  {
    id: 'windsor-patania',
    name: 'WindsorPatania',
    country: 'UK / KSA / Italy',
    industry: 'Architecture & Urban Design',
    description: 'Internationally acclaimed architecture blending heritage with contemporary vision.',
    fullDescription: 'WindsorPatania is an internationally acclaimed architecture studio blending heritage-inspired design with contemporary vision. With offices across the United Kingdom, Saudi Arabia, and Italy, the studio delivers transformative projects — from cultural landmarks to luxury residential developments — that shape skylines and redefine urban environments.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80',
    website: 'https://windsorpatania.com',
    focus: 'Urban design, Cultural landmarks, Luxury developments',
  },
  {
    id: 'chain-moray',
    name: 'Chain Moray',
    country: 'Saudi Arabia',
    industry: 'Marine Consultancy',
    description: 'Specializing in underwater surveys, hull inspections, and maritime compliance.',
    fullDescription: 'Chain Moray specializes in underwater surveys, hull inspections, and comprehensive maritime compliance across the Arabian Gulf. As a trusted marine consultancy, the firm provides critical assessment services that protect vessel integrity, ensure regulatory compliance, and support the safe operation of maritime fleets in one of the world\'s busiest waterways.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
    website: 'https://chain-moray.com',
    focus: 'Underwater surveys, Hull inspections, Maritime compliance',
  },
];

export const CompanyShowcase = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [overlayCompany, setOverlayCompany] = useState<Company | null>(null);
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
    <>
      <section
        id="companies"
        ref={sectionRef}
        className="relative bg-obsidian py-28 md:py-36 overflow-hidden"
      >
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
          <div
            className="flex items-center gap-3 mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            <span className="w-8 h-px bg-gold"></span>
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text-muted">
              Portfolio
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-[56px] text-text-light leading-[1.1]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            The Ecosystem
          </h2>
        </div>

        {/* Company Panels */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="space-y-px">
            {companies.map((company, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={company.id}
                  className="relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group border border-white/[0.04] hover:border-white/[0.08]"
                  style={{
                    height: isActive ? '420px' : '90px',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `height 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease ${index * 0.08 + 0.4}s, transform 0.8s ease ${index * 0.08 + 0.4}s, border-color 0.3s ease`,
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={company.image}
                      alt={company.name}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isActive ? 'scale-105 brightness-50' : 'scale-100 brightness-[0.15]'
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/50 to-transparent"></div>
                  </div>

                  {/* Default State: Company Bar */}
                  <div className="relative z-10 h-[90px] flex items-center justify-between px-8 md:px-10">
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="font-body text-[11px] text-gold/50 tracking-[0.1em]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-xl md:text-2xl text-text-light/90 group-hover:text-text-light transition-colors">
                        {company.name}
                      </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                      <span className="font-body text-[11px] tracking-[0.12em] uppercase text-text-muted/60">
                        {company.industry}
                      </span>
                      <span className="font-body text-[11px] tracking-[0.12em] text-text-muted/40">
                        {company.country}
                      </span>
                      <svg
                        className={`w-4 h-4 text-gold/40 transition-all duration-500 ${
                          isActive ? 'rotate-180 text-gold' : ''
                        }`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded State */}
                  <div
                    className={`relative z-10 px-8 md:px-10 pb-10 transition-all duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div
                      className="w-12 h-px bg-gold mb-6 origin-left"
                      style={{
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
                      }}
                    ></div>

                    <p className="font-body text-[15px] leading-[1.7] text-text-muted/80 max-w-2xl mb-6">
                      {company.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <span className="font-body text-[10px] tracking-[0.15em] uppercase text-text-muted/50 border border-white/5 px-3 py-1.5 rounded-lg">
                        {company.industry}
                      </span>
                      <span className="font-body text-[10px] tracking-[0.15em] uppercase text-text-muted/50 border border-white/5 px-3 py-1.5 rounded-lg">
                        {company.country}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOverlayCompany(company);
                        }}
                        className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.15em] uppercase bg-gold/10 hover:bg-gold/20 text-gold border border-gold/20 hover:border-gold/40 px-5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer"
                      >
                        View Details <span>→</span>
                      </button>
                      {company.website && (
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.15em] uppercase text-text-muted hover:text-text-light px-5 py-2.5 transition-colors"
                        >
                          Visit Website <span>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {overlayCompany && (
        <CompanyOverlay
          company={overlayCompany}
          onClose={() => setOverlayCompany(null)}
        />
      )}
    </>
  );
};
