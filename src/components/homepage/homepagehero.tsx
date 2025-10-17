'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HomepageHero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('ourservices');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
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
          .nav-container {
            padding-left: 30px !important;
            padding-right: 30px !important;
          }
          .hero-content {
            padding-left: 30px !important;
            padding-right: 30px !important;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 15px !important;
          }
          .hero-content {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }

        @media (max-width: 640px) {
          .nav-links {
            display: none !important;
          }
        }
      `}</style>

      <div className="relative w-full overflow-hidden" style={{ minHeight: '100vh', fontFamily: 'Instrument Sans, sans-serif' }}>
        {/* Background Image with Scale Animation */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
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

        {/* Navbar Container with Padding */}
        <div className="nav-container relative z-10 pt-[30px] px-[60px]" style={{ position: 'sticky', top: '0' }}>
          {/* Sticky Rounded Navbar */}
          <nav 
            className="rounded-full px-6 shadow-lg backdrop-blur-sm"
            style={{ backgroundColor: '#000000', paddingTop: '20px', paddingBottom: '20px' }}
          >
            <div className="flex items-center justify-between">
              {/* Logo Section */}
              <div className="flex items-center gap-3" style={{ marginLeft: '40px' }}>
                <div className="relative bg-white rounded-full flex items-center justify-center overflow-hidden" style={{ width: '48px', height: '48px' }}>
                  <Image
                    src="/nflogo.png"
                    alt="NF Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span style={{ color: '#FFFFFF', fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 600, fontFamily: 'Instrument Sans, sans-serif' }} className="whitespace-nowrap">NF Solutions</span>
              </div>

              {/* Center Navigation */}
              <div className="nav-links flex items-center" style={{ gap: 'clamp(24px, 3vw, 48px)' }}>
                <a href="#about" style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 16px)', textDecoration: 'none', fontFamily: 'Instrument Sans, sans-serif' }} className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  About Us
                </a>
                <a href="#why" style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 16px)', textDecoration: 'none', fontFamily: 'Instrument Sans, sans-serif' }} className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  Why Us
                </a>
                <a href="#services" style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 16px)', textDecoration: 'none', fontFamily: 'Instrument Sans, sans-serif' }} className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  Our Services
                </a>
                <a href="#team" style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 16px)', textDecoration: 'none', fontFamily: 'Instrument Sans, sans-serif' }} className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  Our Team
                </a>
                <a href="#contact" style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 16px)', textDecoration: 'none', fontFamily: 'Instrument Sans, sans-serif' }} className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  Contact Us
                </a>
              </div>

              {/* Digital Solutions CTA - Image with Text Overlay and Hover Effect */}
              <button 
                onClick={scrollToContact}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative hover:shadow-xl bg-transparent border-0"
                style={{ 
                  background: 'transparent',
                  transition: 'all 1s ease'
                }}
              >
                <Image
                  src={isHovered ? "/homecta2.png" : "/homecta.png"}
                  alt="Digital Solutions"
                  width={180}
                  height={45}
                  className="object-contain"
                  style={{ transition: 'opacity 1s ease-in-out', width: 'clamp(140px, 15vw, 180px)', height: 'auto' }}
                />
                <span 
                  className="absolute flex items-center justify-center" 
                  style={{ 
                    color: '#EB8145', 
                    fontWeight: 600, 
                    fontSize: 'clamp(12px, 1.2vw, 14px)',
                    fontFamily: 'Instrument Sans, sans-serif',
                    top: '50%',
                    left: '40%',
                    transform: 'translate(-50%, -65%)',
                    width: '100%'
                  }}
                >
                  Digital Solutions
                </span>
              </button>
            </div>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="hero-content relative z-10 px-[60px]">
          <div className="flex items-center min-h-[calc(100vh-120px)] pt-8 pb-16">
            <div style={{ maxWidth: '900px' }}>
              <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, lineHeight: '1.2', fontFamily: 'Instrument Sans, sans-serif' }} className="mb-6">
                Your Strategic Partner for Growth in the Global EPC Sector
              </h1>
              
              <p style={{ color: '#FFFFFF', fontSize: 'clamp(16px, 1.5vw, 20px)', fontWeight: 400, lineHeight: '1.6', opacity: 0.9, fontFamily: 'Instrument Sans, sans-serif', maxWidth: '600px' }} className="mb-8">
                Driving successful international business development through expert technical and commercial advisory.
              </p>

              {/* Know More Button */}
              <button
                onClick={scrollToServices}
                className="rounded-full font-semibold transition-all ease-out hover:shadow-2xl hover:brightness-110 active:scale-95 border-0 outline-none"
                style={{ 
                  backgroundColor: '#EB8145',
                  color: '#FFFFFF',
                  transitionDuration: '300ms',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  padding: 'clamp(12px, 1.5vw, 16px) clamp(40px, 5vw, 56px)',
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  fontFamily: 'Instrument Sans, sans-serif'
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