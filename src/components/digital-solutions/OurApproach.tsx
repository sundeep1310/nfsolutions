'use client';

import React from 'react';
import Image from 'next/image';

const OurApproach: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Digital Platforms Delivered' },
    { value: '99.9%', label: 'Client Application Uptime' },
    { value: '100+', label: 'Successful Cloud Migrations' },
    { value: '+20%', label: 'Improvement in Customer Retention' },
    { value: '60%', label: 'Faster Data Processing & Reporting' }
  ];

  return (
    <>
      <style jsx>{`
        .approach-section {
          padding: clamp(60px, 8vw, 80px) 0;
          background-color: white;
          font-family: 'Instrument Sans, sans-serif';
        }
        
        .approach-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 32px);
        }
        
        .approach-header {
          text-align: center;
          margin-bottom: clamp(40px, 5vw, 48px);
          padding: clamp(50px, 6vw, 70px) clamp(30px, 4vw, 50px) 0;
        }
        
        .approach-title {
          font-weight: bold;
          margin-bottom: clamp(20px, 2.5vw, 24px);
          color: #1a1a1a;
          font-family: 'Instrument Sans, sans-serif';
          font-size: clamp(36px, 6vw, 72px);
        }
        
        .approach-title-highlight {
          color: #EB8145;
        }
        
        .approach-description {
          line-height: 1.6;
          color: #4F4F4F;
          font-family: 'Instrument Sans, sans-serif';
          font-size: clamp(16px, 2.4vw, 24px);
          margin-bottom: clamp(40px, 5vw, 60px);
        }
        
        .approach-description-bold {
          font-weight: bold;
          color: #1a1a1a;
        }
        
        .stats-wrapper {
          margin-top: clamp(50px, 6vw, 64px);
          margin-bottom: clamp(50px, 6vw, 64px);
          padding: clamp(30px, 4vw, 50px) clamp(30px, 4vw, 50px) clamp(20px, 3vw, 30px);
        }
        
        .stats-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #1a1a1a;
          padding: clamp(16px, 2vw, 20px);
          min-height: clamp(100px, 12vw, 140px);
          border-radius: clamp(16px, 2vw, 24px);
          flex-wrap: wrap;
          gap: clamp(16px, 2vw, 20px);
        }
        
        .stat-item {
          text-align: center;
          flex: 1;
          min-width: clamp(120px, 15vw, 160px);
        }
        
        .stat-value {
          color: #FFFFFF;
          font-family: 'Instrument Sans, sans-serif';
          font-weight: bold;
          font-size: clamp(24px, 4vw, 44px);
          margin-bottom: clamp(12px, 1.5vw, 24px);
        }
        
        .stat-label {
          font-weight: 500;
          line-height: 1.4;
          color: #FFFFFF;
          font-family: 'Instrument Sans, sans-serif';
          font-size: clamp(12px, 1.4vw, 17px);
        }
        
        .stat-divider {
          margin: 0 clamp(12px, 1.5vw, 16px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .divider-image {
          object-fit: contain;
          width: clamp(1px, 0.2vw, 2px);
          height: clamp(40px, 6vw, 72px);
        }
        
        @media (max-width: 1024px) {
          .stats-container {
            flex-direction: column;
            gap: clamp(20px, 3vw, 30px);
          }
          
          .stat-item {
            min-width: auto;
            width: 100%;
          }
          
          .stat-divider {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .approach-header {
            padding: clamp(30px, 4vw, 50px) clamp(20px, 3vw, 30px) 0;
          }
          
          .stats-wrapper {
            padding: clamp(20px, 3vw, 30px) clamp(20px, 3vw, 30px) clamp(15px, 2vw, 20px);
          }
          
          .stats-container {
            padding: clamp(12px, 1.5vw, 16px);
            min-height: clamp(80px, 10vw, 120px);
          }
        }
        
        @media (max-width: 480px) {
          .approach-container {
            padding: 0 clamp(16px, 3vw, 24px);
          }
          
          .approach-header {
            padding: clamp(20px, 3vw, 30px) clamp(16px, 2.5vw, 20px) 0;
          }
          
          .stats-wrapper {
            padding: clamp(16px, 2.5vw, 20px) clamp(16px, 2.5vw, 20px) clamp(12px, 1.5vw, 16px);
          }
        }
      `}</style>
      
      <section className="approach-section">
        <div className="approach-container">
          {/* Section Title */}
          <div className="approach-header">
            <h2 className="approach-title">
              Our <span className="approach-title-highlight">Approach</span>
            </h2>
            <p className="approach-description">
              We combine deep engineering expertise with a strategic, business-first mindset. We don&apos;t just build software; we architect solutions for{' '}
              <span className="approach-description-bold">performance, scale, and long-term value</span>. By integrating agile development, automated quality engineering, and a data-driven culture, we ensure your digital initiatives deliver measurable business outcomes.
            </p>
          </div>

          {/* Stats Single Row with Vertical Dividers */}
          <div className="stats-wrapper">
            <div className="stats-container">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="stat-item">
                    <div className="stat-value">
                      {stat.value}
                    </div>
                    <div className="stat-label">
                      {stat.label}
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="stat-divider">
                      <Image
                        src="/vertical.png"
                        alt="Divider"
                        width={2}
                        height={72}
                        className="divider-image"
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurApproach;