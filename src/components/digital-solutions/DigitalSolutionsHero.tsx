'use client';

import React, { useEffect } from 'react';

const DigitalSolutionsHero: React.FC = () => {
  useEffect(() => {
    // Force remove any margins/padding that might be causing the issue
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    htmlElement.style.margin = '0';
    htmlElement.style.padding = '0';
    htmlElement.style.width = '100%';
    htmlElement.style.height = '100%';
    htmlElement.style.overflowX = 'hidden';
    htmlElement.style.overflowY = 'auto';
    
    bodyElement.style.margin = '0';
    bodyElement.style.padding = '0';
    bodyElement.style.width = '100%';
    bodyElement.style.height = '100%';
    bodyElement.style.overflowX = 'hidden';
    
    return () => {
    };
  }, []);

  const scrollToConsultation = () => {
    window.open('https://verveo.com', '_blank');
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            overscroll-behavior: none;
          }

          @keyframes scaleAndZoom {
            0% {
              transform: scale(1);
              transform-origin: left center;
            }
            50% {
              transform: scaleX(1.15);
              transform-origin: left center;
            }
            100% {
              transform: scale(1);
              transform-origin: left center;
            }
          }

          .hero-container {
            height: 100vh;
            font-family: 'Instrument Sans, sans-serif';
            margin: 0;
            padding: 0;
            width: 100%;
            position: relative;
            overflow: hidden;
            min-height: 500px;
          }
          
          .hero-background {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          
          .hero-bg-animation {
            width: 100%;
            height: 100%;
            animation: scaleAndZoom 8s ease-in-out infinite;
            position: absolute;
            background-image: url(/digital-solutions-hero-bg.png);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          
          .hero-content-wrapper {
            padding-left: clamp(30px, 6vw, 75px);
            padding-right: clamp(20px, 3vw, 40px);
            width: 100%;
            height: 100vh;
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            min-height: 500px;
          }
          
          .hero-content {
            max-width: clamp(300px, 90vw, 900px);
            width: 100%;
          }
          
          .hero-title {
            color: #FFFFFF;
            font-family: 'Instrument Sans, sans-serif';
            line-height: 1.1;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
            font-size: clamp(31px, 4.35vw, 74px);
            font-weight: bold;
            margin-bottom: clamp(16px, 2.5vw, 24px);
          }
          
          .hero-subtitle {
            color: #FFFFFF;
            font-family: 'Instrument Sans, sans-serif';
            line-height: 1.6;
            max-width: clamp(280px, 80vw, 600px);
            text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
            font-size: clamp(14px, 1.305vw, 24px);
            margin-bottom: clamp(30px, 4vw, 40px);
          }
          
          .hero-button {
            background-color: #EB8145;
            color: #FFFFFF;
            font-family: 'Instrument Sans, sans-serif';
            border: none;
            cursor: pointer;
            padding: clamp(16px, 2.5vw, 20px) clamp(32px, 4vw, 48px);
            border-radius: 50px;
            font-weight: 600;
            font-size: clamp(16px, 2vw, 20px);
            transition: all 0.3s ease;
          }
          
          .hero-button:hover {
            box-shadow: 0 15px 35px rgba(235, 129, 69, 0.4);
            filter: brightness(1.1);
          }
          
          .hero-button:active {
            transform: scale(0.95);
          }
          
          @media (min-width: 1536px) {
            .hero-content {
              max-width: 1500px;
            }
            
            .hero-title {
              max-width: 1500px;
            }
            
            .hero-subtitle {
              max-width: 800px;
            }
          }
          
          @media (max-width: 768px) {
            .hero-container {
              min-height: 400px;
            }
            
            .hero-content-wrapper {
              padding-left: clamp(20px, 4vw, 50px);
              padding-right: clamp(16px, 2.5vw, 30px);
              min-height: 400px;
            }
            
            .hero-title {
              text-align: left;
            }
            
            .hero-subtitle {
              text-align: left;
            }
          }
          
          @media (max-width: 480px) {
            .hero-container {
              min-height: 350px;
            }
            
            .hero-content-wrapper {
              padding-left: clamp(16px, 3vw, 30px);
              padding-right: clamp(12px, 2vw, 20px);
              min-height: 350px;
            }
          }
        `
      }} />

      <div className="hero-container">
        {/* Background Image */}
        <div className="hero-background">
          <div className="hero-bg-animation" />
        </div>

        {/* Content */}
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              From Strategy to Scale:{' '}
              <span style={{ color: '#FFFFFF' }}>Your Partner</span>
              <br />
              in Digital Transformation.
            </h1>

            <p className="hero-subtitle">
              We help enterprises across the globe leverage data, cloud, and AI to build modern platforms, enhance customer experiences, and accelerate growth.
            </p>

            <button
              onClick={scrollToConsultation}
              className="hero-button"
            >
              Talk to Our Experts
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalSolutionsHero;