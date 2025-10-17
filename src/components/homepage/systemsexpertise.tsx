"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const SystemsExpertise: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  const expertiseItems = [
    'Machinery & Rotating Equipment',
    'Engineered Packages & Systems',
    'Static Equipment (Vessels, Heat Exchangers, etc.)',
    'Electrical Equipment & Bulk Materials',
    'Instrumentation, Control & Automation Systems',
    'Steel Structures',
    'Piping & Associated Bulk Materials'
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const element = parallaxRef.current;
        const elementTop = element.offsetTop;
        const parallaxSpeed = 0.5;
        
        if (scrolled > elementTop - window.innerHeight && scrolled < elementTop + element.offsetHeight) {
          const yPos = -(scrolled - elementTop) * parallaxSpeed;
          element.style.transform = `translateY(${yPos}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-white" style={{ minHeight: '56vw', paddingTop: '2vw', paddingBottom: '2vw', paddingLeft: '2vw', paddingRight: '2vw' }}>
      {/* Container with rounded corners - LARGER */}
      <div className="relative mx-auto" style={{ maxWidth: '90%', height: '50vw', borderRadius: '2.5vw', overflow: 'hidden' }}>
        {/* Background Image with Scale Animation */}
        <div ref={parallaxRef} className="absolute inset-0 w-full h-full animate-scale-in-out">
          <Image
            src="/equipment_bg.jpg"
            alt="Equipment Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex items-start z-10" style={{ paddingLeft: '3vw', paddingTop: '3vw' }}>
          <div className="flex w-full">
            {/* Black Box */}
            <div 
              className="bg-black flex flex-col" 
              style={{ 
                backgroundColor: 'rgba(26, 26, 26, 0.95)',
                width: '32.886vw',
                borderRadius: '1.359375vw',
                padding: '2.175vw',
                transform: 'translateX(calc(8vw - 100px)) translateY(55px)'
              }}
            >
              {/* Title */}
              <h2 className="font-bold leading-[1.1]" style={{ color: '#ffffff', fontSize: '2.61vw', marginBottom: '1.0875vw' }}>
                Equipment &<br />Systems Expertise
              </h2>

              {/* Description */}
              <p className="leading-relaxed" style={{ color: '#ffffff', fontSize: '0.76125vw', marginBottom: '1.74vw' }}>
                Our strategic advantage is our <span className="font-bold">deep, practical knowledge</span> of the core equipment and products that define EPC projects. This familiarity enables us to provide <span className="font-bold">effective, real-world solutions</span> and strengthens our collaboration across the contractor ecosystem. Our expertise includes:
              </p>

              {/* Expertise List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.87vw' }}>
                {expertiseItems.map((item, index) => (
                  <div key={index} className="flex items-center" style={{ gap: '0.6525vw' }}>
                    <div 
                      className="flex-shrink-0 rounded-full flex items-center justify-center" 
                      style={{ 
                        backgroundColor: '#EB8145',
                        width: '2.3925vw',
                        height: '2.3925vw'
                      }}
                    >
                      {/* SVG icon */}
                      <Image
                        src={`/systemsexpertise${index + 1}.svg`}
                        alt={item}
                        width={28}
                        height={28}
                        className="object-contain"
                        style={{ 
                          width: '1.5225vw',
                          height: '1.5225vw'
                        }}
                      />
                    </div>
                    <span className="font-medium" style={{ color: '#ffffff', fontSize: '0.76125vw' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Arrow Decoration */}
            <div className="flex-1 relative flex items-end justify-end" style={{ paddingRight: '2vw' }}>
              <div style={{ marginBottom: '-3vw' }}>
                <Image
                  src="/aboutus_rightb.png"
                  alt="Arrow decoration"
                  width={80}
                  height={110}
                  className="object-contain opacity-100"
                  style={{
                    width: '2vw',
                    height: 'auto'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes scale-in-out {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-scale-in-out {
          animation: scale-in-out 20s ease-in-out infinite;
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 1024px) {
          section {
            min-height: 65vw !important;
          }
        }

        @media (max-width: 768px) {
          section {
            min-height: 130vw !important;
            padding: 4vw !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SystemsExpertise;