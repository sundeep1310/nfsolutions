"use client";
import { useState, useEffect } from 'react';

export default function Partner() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(0); 
  const [scrollY, setScrollY] = useState(0);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true when component mounts on client side
    setIsClient(true);
    
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

  // Calculate dynamic height only on client side
  const getMinHeight = () => {
    if (!isClient) return '100vh'; // Default height for SSR
    return window.innerWidth >= 1536 ? '85vh' : '100vh';
  };

  // Calculate dynamic padding only on client side
  const getPaddingTop = () => {
    if (!isClient) return '64px'; // Default padding for SSR
    return window.innerWidth >= 1536 ? '32px' : '64px';
  };

  const getPaddingBottom = () => {
    if (!isClient) return '64px'; // Default padding for SSR
    return window.innerWidth >= 1536 ? '8px' : '64px';
  };

  const getMarginBottom = () => {
    if (!isClient) return '96px'; // Default margin for SSR
    return window.innerWidth >= 1536 ? '48px' : '96px';
  };

  return (
    <div 
    id="why" 
    className="bg-gray-100 relative overflow-hidden" style={{ 
      fontFamily: 'Instrument Sans, sans-serif',
      minHeight: getMinHeight()
    }}>
      {/* Static Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("./partner_bg.jpg")',
          opacity: 1.0,
          fontFamily: 'Instrument Sans, sans-serif'
        }}
      />

      <div className="relative z-10 container mx-auto px-8" style={{ 
        paddingLeft: '20px', 
        paddingRight: '10px', 
        fontFamily: 'Instrument Sans, sans-serif',
        paddingTop: getPaddingTop(),
        paddingBottom: getPaddingBottom()
      }}>
        {/* Header Section */}
        <div className="flex items-center" style={{ 
          flexDirection: isMobileOrTablet ? 'column' : 'row',
          alignItems: isMobileOrTablet ? 'center' : 'center',
          textAlign: isMobileOrTablet ? 'center' : 'left',
          fontFamily: 'Instrument Sans, sans-serif',
          marginBottom: getMarginBottom()
        }}>
          {/* Left 40% - Why Partner with Us */}
          <div className="flex items-center justify-center" style={{ 
            width: isMobileOrTablet ? '100%' : '40%',
            marginBottom: isMobileOrTablet ? '32px' : '0',
            paddingLeft: isMobileOrTablet ? '0' : '40px',
            fontFamily: 'Instrument Sans, sans-serif'
          }}>
            <div style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
              <h1 className="font-bold text-white" style={{
                fontSize: isMobileOrTablet ? '41px' : '59px',
                marginBottom: '-5px',
                lineHeight: '1',
                fontFamily: 'Instrument Sans, sans-serif'
              }}>
                Why <span style={{ color: '#EB8145', fontFamily: 'Instrument Sans, sans-serif' }}>Partner</span>
              </h1>
              <h1 className="font-bold text-white" style={{
                fontSize: isMobileOrTablet ? '41px' : '59px',
                lineHeight: '1',
                fontFamily: 'Instrument Sans, sans-serif'
              }}>
                with Us
              </h1>
            </div>
          </div>
          
          {/* Right 60% - NF Solutions text */}
          <div style={{ 
            width: isMobileOrTablet ? '100%' : '60%', 
            marginTop: isMobileOrTablet ? '0' : '0',
            paddingLeft: isMobileOrTablet ? '16px' : '40px',
            paddingRight: isMobileOrTablet ? '16px' : '180px',
            textAlign: isMobileOrTablet ? 'center' : 'left',
            fontFamily: 'Instrument Sans, sans-serif'
          }}>
            <div className="text-white leading-relaxed" style={{ fontSize: '15px', fontFamily: 'Instrument Sans, sans-serif' }}>
              <p className="mb-4" style={{color : '#4F4F4F',  fontFamily: 'Instrument Sans, sans-serif' }}>
                <strong style={{ fontFamily: 'Instrument Sans, sans-serif' }}>NF Solutions</strong> combines over <strong style={{ fontFamily: 'Instrument Sans, sans-serif' }}>15 years of specialized EPC market experience</strong> with a forward-thinking global perspective. Our integrated technical and commercial support is designed for one purpose: to make your international expansion successful. We don&apos;t just advise; we <strong style={{ fontFamily: 'Instrument Sans, sans-serif' }}>build the roadmap for your growth</strong>, incorporating crucial elements like project risk management to ensure success in the world&apos;s most demanding industries.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Row */}
        <div className="flex max-w-[1400px] mx-auto" style={{ 
          gap: '12px', 
          paddingRight: isMobileOrTablet ? '0' : '30px', 
          flexDirection: isMobileOrTablet ? 'column' : 'row',
          alignItems: isMobileOrTablet ? 'center' : 'stretch',
          width: isMobileOrTablet ? '100%' : 'auto',
          fontFamily: 'Instrument Sans, sans-serif'
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
                  backgroundPosition: 'center',
                  fontFamily: 'Instrument Sans, sans-serif'
                }}
                onMouseEnter={() => !isMobileOrTablet && setHoveredCard(index)}
                onMouseLeave={() => !isMobileOrTablet && setHoveredCard(0)} 
              >
                {/* Darker overlay on hover */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" style={{ fontFamily: 'Instrument Sans, sans-serif' }} />
                
                {/* Card Content */}
                <div className="relative h-full p-8 flex flex-col" style={{
                  justifyContent: isMobileOrTablet ? 'center' : (isExpanded ? 'end' : 'end'),
                  fontFamily: 'Instrument Sans, sans-serif'
                }}>
                  {/* Text wrapper */}
                  <div style={{ 
                    padding: '10px',
                    marginBottom: isExpanded && !isMobileOrTablet ? '0' : (isMobileOrTablet ? '0' : '-100px'),
                    transform: isExpanded && !isMobileOrTablet ? 'translateY(-38px)' : 'translateY(55px)',
                    fontFamily: 'Instrument Sans, sans-serif',
                    transition: 'all 0.5s ease-in-out'
                  }}>
                    <h2 
                      className={`text-2xl md:text-3xl font-bold transition-all duration-500 ${
                        isExpanded && !isMobileOrTablet ? 'mb-3' : 'mb-2'
                      }`}
                      style={{ 
                        color: '#FFFFFF',
                        textAlign: isMobileOrTablet ? 'center' : 'left',
                        fontFamily: 'Instrument Sans, sans-serif'
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
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      <p className="text-sm md:text-base leading-relaxed" style={{ 
                        color: '#FFFFFF',
                        textAlign: isMobileOrTablet ? 'center' : 'left',
                        fontFamily: 'Instrument Sans, sans-serif'
                      }}>
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button Images  */}
                  {!isMobileOrTablet && (
                    <div className={`flex items-center pb-[15px] transition-all duration-500 ${
                      isExpanded ? 'justify-start pl-[15px]' : 'justify-center'
                    }`} style={{
                      transform: isExpanded ? 'translateY(0)' : 'translateY(-8px)',
                      fontFamily: 'Instrument Sans, sans-serif'
                    }}>
                      <img 
                        src={isExpanded ? '/partnercta2.png' : '/partnercta1.png'}
                        alt={isExpanded ? 'Less Details' : 'More Details'}
                        style={{ height: isExpanded ? '30px' : '35px', fontFamily: 'Instrument Sans, sans-serif' }}
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