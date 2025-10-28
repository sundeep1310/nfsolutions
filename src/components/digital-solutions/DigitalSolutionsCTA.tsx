'use client';

import React from 'react';

const DigitalSolutionsCTA: React.FC = () => {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('contact');
    if (consultationSection) {
      consultationSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <style jsx>{`
        .cta-section {
          position: relative;
          overflow: hidden;
          margin-top: 0;
          margin-bottom: 0;
          font-family: 'Instrument Sans, sans-serif';
          background-image: url(/future.png);
          background-size: contain;
          background-position: center bottom;
          background-repeat: no-repeat;
          width: 100%;
          height: fit-content;
          position: relative;
          clear: both;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(120px, 15vw, 200px) 0 clamp(110px, 14vw, 190px) 0;
          color: white;
        }
        
        .cta-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 clamp(20px, 4vw, 40px);
        }
        
        .cta-title {
          font-weight: bold;
          color: white;
          font-family: 'Instrument Sans, sans-serif';
          font-size: clamp(24px, 4vw, 40px);
          line-height: 1.1;
          margin-bottom: clamp(40px, 6vw, 80px);
        }
        
        .cta-button {
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          background-color: white;
          color: black;
          font-family: 'Instrument Sans, sans-serif';
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          font-size: clamp(14px, 1.8vw, 18px);
          padding: clamp(16px, 2.5vw, 24px) clamp(20px, 3vw, 32px);
        }
        
        .cta-button:hover {
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          transform: scale(1.05);
        }
        
        .cta-button:active {
          transform: scale(0.95);
        }
        
        @media (min-width: 1536px) {
          .cta-section {
            background-size: 100% 100%;
          }
        }
        
        @media (max-width: 768px) {
          .cta-section {
            background-size: cover;
            padding: clamp(80px, 12vw, 140px) 0 clamp(70px, 10vw, 120px) 0;
          }
          
          .cta-content {
            padding: 0 clamp(16px, 3vw, 30px);
          }
          
          .cta-title {
            margin-bottom: clamp(30px, 5vw, 60px);
          }
        }
        
        @media (max-width: 480px) {
          .cta-section {
            padding: clamp(60px, 10vw, 100px) 0 clamp(50px, 8vw, 90px) 0;
          }
          
          .cta-content {
            padding: 0 clamp(12px, 2.5vw, 20px);
          }
          
          .cta-title {
            margin-bottom: clamp(25px, 4vw, 50px);
          }
        }
      `}</style>
      
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Build Your<br />Digital Future?
          </h2>
          <button
            onClick={scrollToConsultation}
            className="cta-button"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </>
  );
};

export default DigitalSolutionsCTA;