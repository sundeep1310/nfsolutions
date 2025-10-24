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
    <section 
      className="relative bg-gray-50 data-section"
      style={{ 
        fontFamily: 'Instrument Sans, sans-serif',
        paddingTop: '30px',
        paddingBottom: '10px',
        marginBottom: '10px'
      }}
    >
      <style jsx>{`
        @media (max-width: 1023px) {
          .data-section {
            padding-top: 40px !important;
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
          }
          .data-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .data-grid-wrapper {
            margin-left: 0 !important;
            margin-top: 40px !important;
            width: 100% !important;
            margin-bottom: -75% !important;
          }
          .data-grid {
            grid-template-columns: 1fr !important;
            justify-content: center !important;
            transform: scale(0.5);
            transform-origin: top center;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-8 data-container" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
        <SectionHeader
          icon="/data-icon.svg"
          iconAlt="Data Engineering"
          title="Data Engineering &"
          titleHighlight="Analytics"
          subtitle="Building the Data Foundation for Intelligent Decisions"
        />

        {/* Services Grid - 2x2 Layout with 12px gaps and 250px right movement (100px + 50px + 100px) */}
        <div className="data-grid-wrapper" style={{ marginLeft: '250px', width: 'fit-content', marginTop: '60px' }}>
          <div 
            className="relative data-grid"
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'auto auto',
              columnGap: '12px',
              rowGap: '12px',
              justifyContent: 'start'
            }}
          >
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
  );
};

export default DataEngineeringSection;