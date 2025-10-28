'use client';

import React from 'react';
import Image from 'next/image';

const OurApproach: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Digital Platforms Delivered' },
    { value: '99.9%', label: 'Client Application Uptime' },
    { value: '100+', label: 'Successful Cloud Migrations' },
    { value: '+20%', label: 'Improvement in Customer Retention' },
    { value: '60%', label: 'Faster Data Processing & Reporting' }
  ];

  const [maxWidth, setMaxWidth] = React.useState('1400px');

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setMaxWidth('2200px');
      } else {
        setMaxWidth('1400px');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section className="bg-white font-['Instrument_Sans',sans-serif]" style={{ padding: 'clamp(60px, 8vw, 80px) 0' }}>
        <div className="mx-auto" style={{ padding: '0 clamp(20px, 4vw, 32px)', maxWidth }}>
          {/* Section Title */}
          <div className="text-center" style={{ 
            marginBottom: 'clamp(40px, 5vw, 48px)',
            padding: 'clamp(50px, 6vw, 70px) clamp(30px, 4vw, 50px) 0'
          }}>
            <h2 className="font-bold text-[#1a1a1a] font-['Instrument_Sans',sans-serif]" style={{
              marginBottom: 'clamp(20px, 2.5vw, 24px)',
              fontSize: 'clamp(36px, 6vw, 72px)'
            }}>
              Our <span className="text-[#EB8145]">Approach</span>
            </h2>
            <p className="leading-[1.6] text-[#4F4F4F] font-['Instrument_Sans',sans-serif]" style={{
              fontSize: 'clamp(16px, 2.4vw, 24px)',
              marginBottom: 'clamp(40px, 5vw, 60px)'
            }}>
              We combine deep engineering expertise with a strategic, business-first mindset. We don&apos;t just build software; we architect solutions for{' '}
              <span className="font-bold text-[#1a1a1a]">performance, scale, and long-term value</span>. By integrating agile development, automated quality engineering, and a data-driven culture, we ensure your digital initiatives deliver measurable business outcomes.
            </p>
          </div>

          {/* Stats Single Row with Vertical Dividers */}
          <div style={{
            marginTop: 'clamp(50px, 6vw, 64px)',
            marginBottom: 'clamp(50px, 6vw, 64px)',
            padding: 'clamp(30px, 4vw, 50px) clamp(30px, 4vw, 50px) clamp(20px, 3vw, 30px)'
          }}>
            <div className="flex flex-row items-center justify-between bg-[#1a1a1a] max-md:flex-col max-md:items-stretch max-md:justify-start max-md:gap-0" style={{
              padding: 'clamp(16px, 2vw, 20px)',
              minHeight: 'clamp(100px, 12vw, 140px)',
              borderRadius: 'clamp(16px, 2vw, 24px)',
              gap: 'clamp(8px, 1vw, 12px)'
            }}>
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="text-center flex-1 max-md:w-full max-md:flex-none max-md:py-6 max-md:border-b max-md:border-gray-600 max-md:last:border-b-0" style={{ 
                    minWidth: 'clamp(100px, 12vw, 140px)',
                    width: '100%'
                  }}>
                    <div className="text-white font-bold font-['Instrument_Sans',sans-serif]" style={{
                      fontSize: 'clamp(20px, 3.2vw, 36px)',
                      marginBottom: 'clamp(8px, 1vw, 16px)',
                      color: '#FFFFFF',
                      fontWeight: 'bold'
                    }}>
                      {stat.value}
                    </div>
                    <div className="text-white font-['Instrument_Sans',sans-serif]" style={{
                      fontSize: 'clamp(10px, 1.2vw, 14px)',
                      color: '#FFFFFF',
                      fontWeight: '600',
                      lineHeight: '1.4'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="flex items-center justify-center max-md:hidden" style={{ margin: '0 clamp(8px, 1vw, 12px)' }}>
                      <Image
                        src="/vertical.png"
                        alt="Divider"
                        width={2}
                        height={72}
                        className="object-contain"
                        style={{
                          width: 'clamp(1px, 0.2vw, 2px)',
                          height: 'clamp(40px, 6vw, 72px)'
                        }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurApproach;