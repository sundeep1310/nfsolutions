'use client';

import React from 'react';
import SectionHeader from './reusable/SectionHeader';
import ServiceCard from './reusable/ServiceCard';
import ArrowDecoration from './reusable/ArrowDecoration';

const DigitalEngineeringSection: React.FC = () => {
  const services = [
    {
      image: '/digital-product-platform.png',
      title: 'Product & Platform Engineering',
      description: 'Develop modern, AI-powered enterprise platforms tailored to business needs.'
    },
    {
      image: '/digital-app-dev.png',
      title: 'Application Development & Management',
      description: 'Build high-performance, secure, stable user-centric applications.'
    },
    {
      image: '/digital-app-modernization.png',
      title: 'Application Modernization',
      description: 'Re-architect legacy applications to be truly cloud-native, scalable, and agile.'
    },
    {
      image: '/digital-quality-eng.png',
      title: 'Quality Engineering',
      description: 'Integrate automated testing and validation across every project.'
    }
  ];

  return (
    <>
      <style jsx>{`
        .digital-engineering-section {
          position: relative;
          background-color: white;
          font-family: 'Instrument Sans, sans-serif';
          padding-top: clamp(20px, 3vw, 30px);
          padding-bottom: clamp(20px, 2vw, 30px);
          margin-bottom: clamp(20px, 2vw, 30px);
        }
        
        .digital-container {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: clamp(30px, 6vw, 80px);
          padding-right: clamp(30px, 6vw, 80px);
        }
        
        .services-wrapper {
          margin-left: clamp(50px, 20vw, 250px);
          width: fit-content;
          margin-top: clamp(40px, 5vw, 60px);
        }
        
        .services-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(clamp(280px, 40vw, 630px), 1fr));
          column-gap: clamp(8px, 1vw, 12px);
          row-gap: clamp(8px, 1vw, 12px);
          justify-content: start;
        }
        
        .arrow-right {
          position: absolute;
          top: 33.33%;
          right: clamp(20px, 2vw, 32px);
        }
        
        .arrow-bottom {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        
        @media (max-width: 1024px) {
          .services-wrapper {
            margin-left: clamp(30px, 15vw, 150px);
          }
          
          .arrow-right {
            right: clamp(15px, 1.5vw, 25px);
          }
        }
        
        @media (max-width: 768px) {
          .digital-engineering-section {
            padding-top: clamp(15px, 2.5vw, 25px);
          }
          
          .services-wrapper {
            margin-left: clamp(20px, 8vw, 80px);
            margin-top: clamp(30px, 4vw, 40px);
            width: 100%;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            justify-items: center;
          }
          
          .arrow-right {
            top: 20%;
            right: clamp(10px, 1vw, 20px);
          }
        }
        
        @media (max-width: 480px) {
          .digital-container {
            padding-left: clamp(16px, 4vw, 30px);
            padding-right: clamp(16px, 4vw, 30px);
          }
          
          .services-wrapper {
            margin-left: clamp(10px, 4vw, 40px);
            margin-top: clamp(20px, 3vw, 30px);
          }
          
          .services-grid {
            column-gap: clamp(6px, 0.8vw, 10px);
            row-gap: clamp(6px, 0.8vw, 10px);
          }
          
          .arrow-right {
            right: clamp(8px, 0.8vw, 15px);
            top: 15%;
          }
        }
      `}</style>
      
      <section className="digital-engineering-section">
        <div className="digital-container">
          <SectionHeader
            icon="/digital-engineering-icon.svg"
            iconAlt="Digital Engineering"
            title="Digital"
            titleHighlight="Engineering"
            subtitle="Designing, Building & Modernizing Enterprise-Grade Platforms"
          />

          {/* Services Grid - 2x2 Layout with responsive gaps and positioning */}
          <div className="services-wrapper">
            <div className="services-grid">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  imageAlt={service.title}
                  useIconOnly={false}
                  alignLeft={false}
                  textSize="normal"
                  centerText={true}
                  titleFontSize="28px"
                  descriptionFontSize="18px"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Arrow - arrowrightt beside first row cards */}
        <ArrowDecoration 
          type="arrowrightt" 
          className="absolute arrow-right"
        />

        {/* Decorative Arrow - aboutus_rightb at end */}
        <ArrowDecoration 
          type="aboutus_rightb" 
          className="absolute arrow-bottom"
        />
      </section>
    </>
  );
};

export default DigitalEngineeringSection;