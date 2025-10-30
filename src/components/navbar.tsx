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

  const scrollToServices = () => {
    const servicesSection = document.getElementById('ourservices');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleDigitalSolutionsClick = () => {
    // If already on digital solutions page, scroll to top
    if (pathname === '/digital-solutions') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // Otherwise, Link will handle navigation
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'why', 'ourservices', 'team', 'contact', 'digital-solutions'];
      const scrollPosition = window.scrollY + 100; 
      
      let isAtSectionBoundary = false;
      
      // Check if we're at the very top
      if (scrollPosition <= 150) {
        isAtSectionBoundary = true;
      } else {
        // Check each section
        sections.forEach(sectionId => {
          const section = document.getElementById(sectionId);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            // Check if we're near the start or end of a section (within 100px)
            if (Math.abs(scrollPosition - sectionTop) <= 100 || 
                Math.abs(scrollPosition - sectionBottom) <= 100) {
              isAtSectionBoundary = true;
            }
          }
        });
      }
      
      setIsTransparent(!isAtSectionBoundary);
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

       

        @media (max-width: 768px) {
          
        }

        @media (max-width: 767px) {
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

        @media (min-width: 767px) {
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
        <Link href="/#about" onClick={() => { handleMobileMenuClick('about'); toggleMobileMenu(); }}>
          About Us
        </Link>
        <Link href="/#why" onClick={() => { handleMobileMenuClick('why'); toggleMobileMenu(); }}>
          Why Us
        </Link>
        <Link href="/#ourservices" onClick={() => { handleMobileMenuClick('services'); toggleMobileMenu(); }}>
          Our Services
        </Link>
        <Link href="/#team" onClick={() => { handleMobileMenuClick('team'); toggleMobileMenu(); }}>
          Our Team
        </Link>
        <Link href="/#contact" onClick={() => { handleMobileMenuClick('contact'); toggleMobileMenu(); }}>
          Contact Us
        </Link>
        <Link href="/digital-solutions" onClick={toggleMobileMenu}>
          Digital Solutions
        </Link>
      </div>

      {/* Sticky Navbar Container */}
      <div className="sticky-navbar">
        <div className="  ">
          <nav 
            className=" px-6 shadow-lg backdrop-blur-sm"
            style={{ 
              backgroundColor: isTransparent ? '#000000' : '#000000', 
              paddingTop: '12px', 
              paddingBottom: '12px',
              transition: 'background-color 0.3s ease'
            }}
          >
            <div className="flex items-center justify-between gap-3">
              {/* Logo Section with Hamburger */}
               <Link href="/" className="flex items-center gap-3" style={{ marginLeft: '20px' ,paddingLeft: '12px', textDecoration:"none" }}>
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
                <span style={{ color: '#FFFFFF', fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 600, fontFamily: 'Instrument Sans, sans-serif' }} className="whitespace-nowrap">Solutions</span>
              </Link>

              {/* Center Navigation */}
              <div className="nav-links flex items-center px-[6px]" style={{ gap: 'clamp(20px, 3vw, 40px)' }}>
                <Link href="/#about" style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 16px)', textDecoration: 'none', fontFamily: 'Instrument Sans, sans-serif' }} className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  About Us
                </Link>
                <Link href="/#why" style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 16px)', textDecoration: 'none', fontFamily: 'Instrument Sans, sans-serif' }} className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  Why Us
                </Link>
                <Link href="/#ourservices" style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 16px)', textDecoration: 'none', fontFamily: 'Instrument Sans, sans-serif' }} className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  Our Services
                </Link>
                <Link href="/#team" style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 16px)', textDecoration: 'none', fontFamily: 'Instrument Sans, sans-serif' }} className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  Our Team
                </Link>
                <Link href="/#contact" style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 16px)', textDecoration: 'none', fontFamily: 'Instrument Sans, sans-serif' }} className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  Contact Us
                </Link>
              </div>

              {/* Digital Solutions CTA */}
              <Link 
                href="/digital-solutions"
                onClick={handleDigitalSolutionsClick}
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
                  alt="Digital Solutions"
                  width={80}
                  height={45}
                  className="object-contain"
                  style={{ transition: 'opacity 1s ease-in-out', width: 'clamp(120px, 12vw, 180px)', height: 'auto' }}
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
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;