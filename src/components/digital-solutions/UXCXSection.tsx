'use client';

import React from 'react';
import SectionHeader from './reusable/SectionHeader';
import ServiceCard from './reusable/ServiceCard';
import ArrowDecoration from './reusable/ArrowDecoration';

const UXCXSection: React.FC = () => {
  const services = [
    {
      image: '/ux-strategy.png',
      title: 'UX/CX Strategy & Journey Design',
      description: 'Analyze, design, and optimize end-to-end user and customer journeys for simplicity & retention.'
    },
    {
      image: '/ux-modernization.png',
      title: 'Digital Experience Modernization',
      description: 'Transform outdated interfaces, workflows, and engagement models into intuitive, evolved digital experiences.'
    },
    {
      image: '/ux-research.png',
      title: 'UX Research & Usability Testing',
      description: 'Gather deep user insights through research and validate designs with rigorous usability testing.'
    },
    {
      image: '/ux-design-systems.png',
      title: 'Scalable Design Systems & UX Frameworks',
      description: 'Consistent, flexible, & dev-aligned design systems for cross-platform multichannel experiences.'
    }
  ];

  return (
    <>
      <style jsx>{`
        .ux-section {
          position: relative;
          background-color: white;
          font-family: 'Instrument Sans, sans-serif';
          padding-top: clamp(20px, 3vw, 30px);
          padding-bottom: clamp(20px, 2vw, 30px);
          margin-bottom: clamp(20px, 2vw, 30px);
        }
        
        .ux-container {
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
        
        .arrow-top {
          position: absolute;
          top: clamp(10px, 2vw, 20px);
          right: clamp(10px, 2vw, 20px);
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
          
          .arrow-top {
            right: clamp(8px, 1.5vw, 15px);
          }
        }
        
        @media (max-width: 768px) {
          .ux-section {
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
          
          .arrow-top {
            top: clamp(8px, 1.5vw, 15px);
            right: clamp(6px, 1vw, 12px);
          }
        }
        
        @media (max-width: 480px) {
          .ux-container {
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
          
          .arrow-top {
            top: clamp(6px, 1vw, 12px);
            right: clamp(4px, 0.8vw, 10px);
          }
        }
      `}</style>
      
      <section className="ux-section">
        <div className="ux-container">
          <SectionHeader
            icon="/ux-icon.svg"
            iconAlt="UX/CX Transformation"
            title="UX / CX"
            titleHighlight="Transformation"
            subtitle="Elevating Experiences with Strategy & Design"
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

        {/* Decorative Arrow - arrowrightt at start */}
        <ArrowDecoration 
          type="arrowrightt" 
          position="top-right"
          className="absolute arrow-top"
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

export default UXCXSection;