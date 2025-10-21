"use client";
import { useState, useEffect } from 'react';

export default function Partner() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(0); // First card expanded by default
  const [scrollY, setScrollY] = useState(0);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const checkMobileOrTablet = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    
    checkMobileOrTablet();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobileOrTablet);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobileOrTablet);
    };
  }, []);

  const cards = [
    {
      title: 'Proven Expertise',
      description: 'With a track record of success since 2009, we offer the stability and deep industry knowledge that only comes with years of dedicated experience in the EPC sector.',
      image: '/partner1.png'
    },
    {
      title: 'Specialized Focus',
      description: 'We are not generalists. Our sole focus on technical and commercial advisory for the EPC industry ensures you receive the most relevant, impactful, and actionable guidance.',
      image: '/partner2.png'
    },
    {
      title: 'Global Reach, Local Insight',
      description: 'Our strategic offices in Singapore, India, and the UAE provide the on-the-ground support and global perspective essential for navigating international markets successfully.',
      image: '/partner3.png'
    },
    {
      title: 'Integrated Solutions',
      description: 'We bridge the critical gap between technical feasibility and commercial viability, delivering holistic strategies that drive tangible results and sustainable growth.',
      image: '/partner4.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
      {/* Static Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/partner_bg.jpg)',
          opacity: 0.3
        }}
      />

      <div className="relative z-10 container mx-auto px-8 py-16">
        {/* Header Section */}
        <div className="flex items-center mb-24" style={{ 
          flexDirection: isMobileOrTablet ? 'column' : 'row',
          alignItems: isMobileOrTablet ? 'center' : 'center',
          textAlign: isMobileOrTablet ? 'center' : 'left'
        }}>
          {/* Left 40% - Why Partner with Us centered */}
          <div className="flex items-center justify-center" style={{ 
            width: isMobileOrTablet ? '100%' : '40%',
            marginBottom: isMobileOrTablet ? '32px' : '0'
          }}>
            <div>
              <h1 className="font-bold text-white" style={{
                fontSize: isMobileOrTablet ? '48px' : '70px',
                marginBottom: '-5px',
                lineHeight: '1'
              }}>
                Why <span style={{ color: '#EB8145' }}>Partner</span>
              </h1>
              <h1 className="font-bold text-white" style={{
                fontSize: isMobileOrTablet ? '48px' : '70px',
                lineHeight: '1'
              }}>
                with Us
              </h1>
            </div>
          </div>
          
          {/* Right 60% - NF Solutions text with 25px right padding */}
          <div style={{ 
            width: isMobileOrTablet ? '100%' : '60%', 
            marginTop: isMobileOrTablet ? '0' : '0',
            paddingLeft: isMobileOrTablet ? '16px' : '0',
            paddingRight: isMobileOrTablet ? '16px' : '25px',
            textAlign: isMobileOrTablet ? 'center' : 'left'
          }}>
            <div className="text-white leading-relaxed" style={{ fontSize: '13px' }}>
              <p className="mb-4">
                <strong>NF Solutions</strong> combines over <strong>15 years of specialized EPC market experience</strong> with a forward-thinking global perspective. Our integrated technical and commercial support is designed for one purpose: to make your international expansion successful. We don&apos;t just advise; we <strong>build the roadmap for your growth</strong>, incorporating crucial elements like project risk management to ensure success in the world&apos;s most demanding industries.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Row */}
        <div className="flex max-w-[1400px] mx-auto" style={{ 
          gap: '12px', 
          paddingRight: isMobileOrTablet ? '0' : '20px', 
          flexDirection: isMobileOrTablet ? 'column' : 'row',
          alignItems: isMobileOrTablet ? 'center' : 'stretch',
          width: isMobileOrTablet ? '100%' : 'auto'
        }}>
          {cards.map((card, index) => {
            const isExpanded = isMobileOrTablet ? true : (hoveredCard === index);
            
            return (
              <div
                key={index}
                className="relative rounded-[32px] overflow-hidden transition-all duration-700 ease-in-out"
                style={{
                  flex: isMobileOrTablet ? 'none' : (isExpanded ? '1.5' : '1'),
                  width: isMobileOrTablet ? '90%' : 'auto',
                  maxWidth: isMobileOrTablet ? '500px' : 'none',
                  minHeight: '380px',
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${card.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                onMouseEnter={() => !isMobileOrTablet && setHoveredCard(index)}
                onMouseLeave={() => !isMobileOrTablet && setHoveredCard(0)} // Return to first card expanded
              >
                {/* Darker overlay on hover */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
                
                {/* Card Content */}
                <div className="relative h-full p-8 flex flex-col justify-end">
                  {/* Text wrapper with 5px padding */}
                  <div style={{ 
                    padding: '10px',
                    marginBottom: isExpanded && !isMobileOrTablet ? '0' : (isMobileOrTablet ? '0' : '10px')
                  }}>
                    <h2 
                      className={`text-2xl md:text-3xl font-bold transition-all duration-500 ${
                        isExpanded && !isMobileOrTablet ? 'mb-3 transform -translate-y-8' : 'mb-2 transform translate-y-0'
                      }`}
                      style={{ 
                        color: '#FFFFFF',
                        textAlign: isMobileOrTablet ? 'center' : 'left'
                      }}
                    >
                      {card.title}
                    </h2>
                    
                    {/* Description - Shows when expanded */}
                    <div 
                      className={`transition-all duration-500 overflow-hidden ${
                        isExpanded
                          ? 'opacity-100 max-h-40 mb-4' 
                          : 'opacity-0 max-h-0 mb-0'
                      }`}
                    >
                      <p className="text-sm md:text-base leading-relaxed" style={{ 
                        color: '#FFFFFF',
                        textAlign: isMobileOrTablet ? 'center' : 'left'
                      }}>
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button Images - Hidden on mobile/tablet */}
                  {!isMobileOrTablet && (
                    <div className={`flex items-center pb-[15px] transition-all duration-500 ${
                      isExpanded ? 'justify-start pl-[15px]' : 'justify-center'
                    }`}>
                      <img 
                        src={isExpanded ? '/partnercta2.png' : '/partnercta1.png'}
                        alt={isExpanded ? 'Less Details' : 'More Details'}
                        style={{ height: '30px' }}
                        className="cursor-pointer transition-all duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}