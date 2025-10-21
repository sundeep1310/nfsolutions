'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HomepageHero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
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

        .hamburger-menu {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
          margin-right: 12px;
        }

        .hamburger-line {
          width: 24px;
          height: 2px;
          background-color: #FFFFFF;
          margin: 5px 0;
          transition: 0.3s;
        }

        .hamburger-menu.active .hamburger-line:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .hamburger-menu.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger-menu.active .hamburger-line:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: -100%;
          width: 80%;
          max-width: 300px;
          height: 100vh;
          background-color: #000000;
          transition: left 0.3s ease-in-out;
          z-index: 999;
          padding-top: 80px;
        }

        .mobile-menu.open {
          left: 0;
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          display: none;
          z-index: 998;
        }

        .mobile-menu-overlay.open {
          display: block;
        }

        .mobile-menu a {
          display: block;
          color: #FFFFFF;
          padding: 16px 24px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 400;
          font-family: 'Instrument Sans', sans-serif;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: background-color 0.3s;
        }

        .mobile-menu a:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .mobile-menu-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: #FFFFFF;
          font-size: 24px;
          cursor: pointer;
          padding: 8px;
          z-index: 1000;
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

        /* Show hamburger only on mobile (640px and below) */
        @media (max-width: 640px) {
          .nav-links {
            display: none !important;
          }
          .hamburger-menu {
            display: block !important;
          }
          .cta-button {
            display: none !important;
          }
        }

        /* Ensure hamburger is hidden on tablet and desktop */
        @media (min-width: 641px) {
          .hamburger-menu {
            display: none !important;
          }
        }
      `}</style>

      <div className="relative w-full overflow-hidden" style={{ minHeight: '100vh', fontFamily: 'Instrument Sans, sans-serif', margin: 0, padding: 0 }}>
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
            right: 0,
            bottom: 0,
            margin: 0,
            padding: 0,
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

        {/* Mobile Menu Overlay */}
        <div 
          className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
        />

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <button 
            className="mobile-menu-close"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
          <a href="#about" onClick={() => handleMobileMenuClick('about')}>
            About Us
          </a>
          <a href="#why" onClick={() => handleMobileMenuClick('why')}>
            Why Us
          </a>
          <a href="#services" onClick={() => handleMobileMenuClick('services')}>
            Our Services
          </a>
          <a href="#team" onClick={() => handleMobileMenuClick('team')}>
            Our Team
          </a>
          <a href="#contact" onClick={() => handleMobileMenuClick('contact')}>
            Contact Us
          </a>
        </div>

        {/* Navbar Container with Padding */}
        <div className="nav-container relative z-10 pt-[30px] px-[60px]" style={{ position: 'sticky', top: '0' }}>
          {/* Sticky Rounded Navbar */}
          <nav 
            className="rounded-full px-6 shadow-lg backdrop-blur-sm"
            style={{ backgroundColor: '#000000', paddingTop: '20px', paddingBottom: '20px' }}
          >
            <div className="flex items-center justify-between">
              {/* Logo Section with Hamburger */}
              <div className="flex items-center gap-3" style={{ marginLeft: '20px' }}>
                {/* Hamburger Menu Button */}
                <button 
                  className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                  onClick={toggleMobileMenu}
                  aria-label="Toggle menu"
                >
                  <div className="hamburger-line"></div>
                  <div className="hamburger-line"></div>
                  <div className="hamburger-line"></div>
                </button>
                
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
                className="cta-button relative hover:shadow-xl bg-transparent border-0"
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
                  style={{ transition: 'opacity 1s ease-in-out', width: 'clamp(100px, 12vw, 180px)', height: 'auto' }}
                />
                <span 
                  className="cta-text absolute flex items-center justify-center" 
                  style={{ 
                    color: '#EB8145', 
                    fontWeight: 600, 
                    fontSize: 'clamp(9px, 1vw, 14px)',
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