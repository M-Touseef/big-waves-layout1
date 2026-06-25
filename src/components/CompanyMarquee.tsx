import React from 'react';

const companies = [
  { name: 'Waterline', website: 'https://waterlineegypt.com' },
  { name: 'My Network', website: 'https://mynetworkksa.com' },
  { name: 'QNet', website: '#' },
  { name: 'Stylies', website: '#' },
  { name: 'Alpin Group', website: '#' },
  { name: 'WindsorPatania', website: 'https://windsorpatania.com' },
  { name: 'Chain Moray', website: 'https://chain-moray.com' }
];

export const CompanyMarquee = () => {
  // Duplicate array multiple times to ensure seamless infinite scrolling 
  // on ultra-wide monitors without JS calculations
  const marqueeItems = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="relative w-full bg-navy/40 backdrop-blur-md py-5 md:py-7 overflow-hidden border-y border-white/[0.08]">
      {/* Subtle top/bottom glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-50"></div>

      {/* Decorative gradient masks for fading out the edges */}
      <div className="absolute top-0 bottom-0 left-0 w-20 md:w-64 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 md:w-64 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-[max-content] animate-marquee hover:[animation-play-state:paused] py-2">
        {marqueeItems.map((company, idx) => (
          <React.Fragment key={`${company.name}-${idx}`}>
            <a
              href={company.website}
              target={company.website !== '#' ? "_blank" : "_self"}
              rel="noreferrer"
              className="px-8 md:px-14 flex items-center group cursor-pointer"
            >
              <span className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-text-muted/70 transition-all duration-500 group-hover:text-gold group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(197,160,89,0.6)] whitespace-nowrap">
                {company.name}
              </span>
            </a>
            {/* Elegant Glowing Diamond Separator */}
            <span className="flex items-center justify-center">
              <span className="w-1.5 h-1.5 rotate-45 bg-gold/30 shadow-[0_0_8px_rgba(197,160,89,0.4)]"></span>
            </span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
