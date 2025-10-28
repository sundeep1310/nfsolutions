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
    <section className="relative w-full bg-white" style={{  fontFamily: 'Instrument Sans, sans-serif' }}>
      {/* Container with rounded corners - LARGER */}
      <div className="relative mx-[20px]" style={{ maxWidth: '90%', height: '50vw', borderRadius: '2.5vw', overflow: 'hidden' }}>
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
              <p className="leading-relaxed" style={{ color: '#ffffff', fontSize: '0.68vw', marginBottom: '1.74vw' }}>
                Our strategic advantage is our <span className="font-bold">deep, practical knowledge</span> of the core equipment and products that define EPC projects. This familiarity enables us to provide <span className="font-bold">effective, real-world solutions</span> and strengthens our collaboration across the contractor ecosystem. Our expertise includes:
              </p>
 
              {/* Expertise List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.87vw' }}>
                {expertiseItems.map((item, index) => (
                  <div key={index} className="flex items-center" style={{ gap: '0.6525vw' }}>
                    <div className="flex-shrink-0 flex items-center justify-center">
                      {/* SVG icon */}
                      <Image
                        src={`/systemsexpertise${index + 1}.svg`}
                        alt={item}
                        width={48}
                        height={48}
                        className="object-contain"
                        style={{
                          width: '2.64vw',
                          height: '2.64vw'
                        }}
                      />
                    </div>
                    <span className="font-medium" style={{ color: '#ffffff', fontSize: '0.76125vw' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Right Side - Arrow Decoration */}
            <div className="flex-1 relative flex items-end justify-end">
              <div style={{ marginBottom: '-3vw' }}>
                <Image
                  src="/aboutus_rightb.png"
                  alt="Arrow decoration"
                  width={80}
                  height={210}
                  className="object-contain opacity-100"
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
 
        /* 2xl screens and larger - reduce container width by 10% */
        @media (min-width: 1536px) {
          section > div {
            max-width: 100% !important;
          }
        }
 
        /* Mobile and Tablet responsive adjustments only */
        @media (max-width: 1024px) {
          section {
            min-height: 75vw !important;
       
          }
         
          section > div {
            max-width: 100% !important;
            height: 75vw !important;
            border-radius: 4vw !important;
          }
         
          section > div > div:nth-child(2) {
            padding: 5vw 3vw 3vw 3vw !important;
            align-items: center !important;
            justify-content: center !important;
          }
         
          section > div > div:nth-child(2) > div {
            justify-content: center !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child {
            width: 50vw !important;
            height: 55vw !important;
            transform: translateX(0) translateY(-5vw) !important;
            border-radius: 3vw !important;
            padding: 2vw !important;
            margin: 12.5vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child h2 {
            font-size: 4vw !important;
            margin-bottom: 1.2vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child p {
            font-size: 1.6vw !important;
            margin-bottom: 2vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child > div {
            gap: 1vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child > div > div {
            gap: 0.8vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child > div > div > div img {
            width: 3.3vw !important;
            height: 3.3vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child > div > div span {
            font-size: 1.6vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:last-child {
            display: none !important;
          }
        }
 
        @media (max-width: 768px) {
          section {
            min-height: 100vw !important;
            padding: 2vw 10px 2vw 10px !important;
          }
         
          section > div {
            max-width: 95% !important;
            height: 100vw !important;
            border-radius: 6vw !important;
          }
         
          section > div > div:nth-child(2) {
            padding: 8vw 2vw 2vw 2vw !important;
            align-items: center !important;
            justify-content: center !important;
          }
         
          section > div > div:nth-child(2) > div {
            justify-content: center !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child {
            width: 60vw !important;
            height: 75vw !important;
            transform: translateX(0) translateY(-8vw) !important;
            border-radius: 4vw !important;
            padding: 3vw !important;
            margin: 15vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child h2 {
            font-size: 5vw !important;
            margin-bottom: 2vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child p {
            font-size: 2.2vw !important;
            margin-bottom: 2.5vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child > div {
            gap: 1.2vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child > div > div {
            gap: 1.2vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child > div > div > div img {
            width: 3.96vw !important;
            height: 3.96vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:first-child > div > div span {
            font-size: 2.2vw !important;
          }
         
          section > div > div:nth-child(2) > div > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
 
export default SystemsExpertise;