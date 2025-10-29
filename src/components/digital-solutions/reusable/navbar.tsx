'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const pathname = usePathname();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Force a full page refresh when navigating to home
    window.location.href = '/';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleMobileMenu();
    window.location.href = '/';
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'why', 'ourservices', 'team', 'contact', 'hero', 'main', 'content'];
      const scrollPosition = window.scrollY;
      
      let isInSection = false;
      
      // Check if we're at the very top (first 200px)
      if (scrollPosition <= 200) {
        isInSection = false; // Solid navbar at top
      } else {
        // Check if we're inside any section OR if no sections exist, make it transparent after scrolling
        let sectionsFound = false;
        sections.forEach(sectionId => {
          const section = document.getElementById(sectionId);
          if (section) {
            sectionsFound = true;
            const sectionTop = section.offsetTop - 100; // Add buffer
            const sectionBottom = sectionTop + section.offsetHeight + 100; // Add buffer
            
            // Check if we're inside this section
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
              isInSection = true;
            }
          }
        });
        
        // If no sections found, default to transparent when scrolled
        if (!sectionsFound && scrollPosition > 200) {
          isInSection = true;
        }
      }
      
      setIsTransparent(isInSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
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
          z-index: 9999;
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
          z-index: 9998;
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
          z-index: 10000;
        }

        .sticky-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100%;
        }

        @media (max-width: 1024px) {
          
        }

        @media (max-width: 768px) {
         
        }

        @media (max-width: 640px) {
          .nav-links {
            display: none !important;
          }
          .hamburger-menu {
            display: none !important;
          }
        }

        @media (min-width: 641px) {
          .hamburger-menu {
            display: none !important;
          }
        }
      `}</style>

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
        <Link href="/" onClick={handleMobileHomeClick}>
          Home
        </Link>
      </div>

      {/* Sticky Navbar Container */}
      <div className="sticky-navbar">
        <div className="">
          <nav 
            className=" px-6 shadow-lg backdrop-blur-sm"
            style={{ 
              backgroundColor: isTransparent ? 'transparent' : '#000000', 
              paddingTop: '12px', 
              paddingBottom: '12px',
              transition: 'background-color 0.3s ease'
            }}
          >
            <div className="flex items-center justify-between">
              {/* Logo Section with Hamburger */}
              <Link href="/" onClick={handleHomeClick} className="flex items-center gap-3" style={{ paddingLeft: '12px' }}>
                {/* Hamburger Menu Button */}
                <button 
                  className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleMobileMenu();
                  }}
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
                    width={65}
                    height={65}
                    className="object-contain"
                  />
                </div>
                <span style={{ color: '#FFFFFF', fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 600, fontFamily: 'Instrument Sans, sans-serif' }} className="whitespace-nowrap">NF Solutions</span>
              </Link>

              {/* Center Navigation - Removed all menu items */}
              <div className="nav-links flex items-center" style={{ gap: 'clamp(24px, 3vw, 48px)' }}>
                {/* Navigation items removed - keeping the container for consistency */}
              </div>

              {/* Home CTA - Replacing Digital Solutions */}
              <Link 
                href="/"
                onClick={handleHomeClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="cta-button relative hover:shadow-xl bg-transparent border-0 cursor-pointer"
                style={{ 
                  background: 'transparent',
                  transition: 'all 1s ease',
                  paddingRight: '15px'
                }}
              >
                <Image
                  src={isHovered ? "/homecta2.png" : "/homecta.png"}
                  alt="Home"
                  width={140}
                  height={55}
                  className="object-contain"
                  style={{ transition: 'opacity 1s ease-in-out', width: 'clamp(90px, 9vw, 140px)', height: 'auto' }}
                />
                <span 
                  className="cta-text absolute flex items-center justify-center" 
                  style={{ 
                    color: '#EB8145', 
                    fontWeight: 600, 
                    fontSize: 'clamp(9px, 0.9vw, 13px)',
                    fontFamily: 'Instrument Sans, sans-serif',
                    top: '50%',
                    left: '40%',
                    transform: 'translate(-50%, -65%)',
                    width: '100%'
                  }}
                >
                  Home
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;