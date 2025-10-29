'use client';
 
import React from 'react';
import Image from 'next/image';
 
const HomepageHero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('ourservices');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
 
  return (
    <>
      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          width: 100%;
          position: relative;
          margin: 0;
          padding: 0;
          overscroll-behavior: none;
        }
 
        @keyframes slowZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
 
        @media (max-width: 1024px) {
          .hero-content {
            padding-left: 30px !important;
            padding-right: 30px !important;
          }
        }
 
        @media (max-width: 768px) {
          .hero-content {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>
 
      <div className="relative w-full" style={{
        height: '100vh',
        fontFamily: 'Instrument Sans, sans-serif',
        margin: 0,
        padding: 0
      }}>
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 "
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 0,
            padding: 0,
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              animation: 'slowZoom 20s ease-in-out infinite',
              position: 'relative',
            }}
          >
            <Image
              src="/hero-bg.png"
              alt="EPC Background"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>
 
        {/* Hero Content */}
        <div className="hero-content relative z-10 px-[60px] py-[60px]">
          <div className="flex items-center min-h-[100vh] mt-[-40px] md:mt-[-30px]  ">
            <div style={{ maxWidth: '1200px' }}>
              <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(31px, 4.35vw, 74px)', fontWeight: 600,lineHeight: '1.2', fontFamily: 'Instrument Sans, sans-serif', margin:0 }} >
                Your Strategic Partner for Growth in the Global EPC Sector
              </h1>
             
              <p style={{ color: '#FFFFFF', fontSize: 'clamp(14px, 1.305vw, 24px)', fontWeight: 400,lineHeight: '1.6', opacity: 0.9, fontFamily: 'Instrument Sans, sans-serif', maxWidth: '900px',marginTop:0,marginLeft:0 }} >
                Driving successful international business development through expert technical <br/> and commercial advisory.
              </p>
 
              {/* Know More Button */}
              <button
                onClick={scrollToServices}
                className="rounded-full font-semibold transition-all ease-out hover:shadow-2xl hover:brightness-110 active:scale-95 border-0 outline-none"
                style={{
                  backgroundColor: '#EB8145',
                  color: '#FFFFFF',
                  transitionDuration: '300ms',
           
                  padding: 'clamp(12px, 1.5vw, 16px) clamp(40px, 5vw, 56px)',
                  fontSize: 'clamp(14px, 1.044vw, 20px)',
                  fontFamily: 'Instrument Sans, sans-serif',
               
                }}
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default HomepageHero;