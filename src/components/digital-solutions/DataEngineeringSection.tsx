'use client';

import React from 'react';
import SectionHeader from './reusable/SectionHeader';
import ServiceCard from './reusable/ServiceCard';

const DataEngineeringSection: React.FC = () => {
  const services = [
    {
      image: '/data-modernization.png',
      title: 'Data Modernization & Engineering',
      description: 'Build a clean, scalable data infrastructure that supports analytics and growth.'
    },
    {
      image: '/data-analytics.png',
      title: 'Data Analytics & Visualization',
      description: 'Transform complex data into clear, predictive dashboards that guide decisions.'
    },
    {
      image: '/data-warehouse.png',
      title: 'Data Warehousing & Lakehouse Solutions',
      description: 'Design and build centralized repositories for data to power enterprise-wide analytics.'
    },
    {
      image: '/data-governance.png',
      title: 'Data Governance & Management',
      description: 'Ensure data quality, integrity, and security across the enterprise.'
    }
  ];

  return (
    <>
      <style jsx>{`
        .data-section {
          position: relative;
          background-color: #f9fafb;
          font-family: 'Instrument Sans, sans-serif';
          padding-top: clamp(20px, 3vw, 30px);
          padding-bottom: clamp(20px, 2vw, 30px);
          margin-bottom: clamp(20px, 2vw, 30px);
        }
        
        .data-container {
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
        
        @media (max-width: 1024px) {
          .services-wrapper {
            margin-left: clamp(30px, 15vw, 150px);
          }
        }
        
        @media (max-width: 768px) {
          .data-section {
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
        }
        
        @media (max-width: 480px) {
          .data-container {
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
        }
      `}</style>
      
      <section className="data-section">
        <div className="data-container">
          <SectionHeader
            icon="/data-icon.svg"
            iconAlt="Data Engineering"
            title="Data Engineering &"
            titleHighlight="Analytics"
            subtitle="Building the Data Foundation for Intelligent Decisions"
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
      </section>
    </>
  );
};

export default DataEngineeringSection;