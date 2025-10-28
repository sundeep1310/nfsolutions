'use client';
 
import React from 'react';
 
const Footer: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .footer-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #EB8145;
          padding: 8px 0;
          min-height: 18px;
        }
       
        .footer-text {
          color: #FFFFFF;
          font-size: clamp(14px, 2vw, 24px);
          font-weight: 400;
          font-family: 'Instrument Sans';
          margin: 0;
          text-align: center;
          padding: 0 20px;
        }
       
        @media (max-width: 768px) {
          .footer-container {
            padding: 12px 0;
            min-height: 35px;
          }
        }
       
        @media (max-width: 480px) {
          .footer-container {
            padding: 10px 0;
            min-height: 35px;
          }
          .footer-text {
            padding: 0 16px;
          }
        }
      `}</style>
     
      <footer className="footer-container">
        <p className="footer-text">
          © 2025. All Rights Reserved
        </p>
      </footer>
    </>
  );
};
 
export default Footer;