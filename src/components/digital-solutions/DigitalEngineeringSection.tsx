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
    <section 
      className="relative bg-white digital-section"
      style={{ 
        fontFamily: 'Instrument Sans, sans-serif',
        paddingTop: '30px',
        paddingBottom: '10px',
        marginBottom: '10px'
      }}
    >
      <style jsx>{`
        @media (max-width: 1023px) {
          .digital-section {
            padding-top: 40px !important;
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
          }
          .digital-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .digital-grid-wrapper {
            margin-left: 0 !important;
            margin-top: 40px !important;
            width: 100% !important;
            margin-bottom: -75% !important;
          }
          .digital-grid {
            grid-template-columns: 1fr !important;
            justify-content: center !important;
            transform: scale(0.5);
            transform-origin: top center;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-8 digital-container" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
        <SectionHeader
          icon="/digital-engineering-icon.svg"
          iconAlt="Digital Engineering"
          title="Digital"
          titleHighlight="Engineering"
          subtitle="Designing, Building & Modernizing Enterprise-Grade Platforms"
        />

        {/* Services Grid - 2x2 Layout with 12px gaps and 250px right movement (100px + 50px + 100px) */}
        <div className="digital-grid-wrapper" style={{ marginLeft: '250px', width: 'fit-content', marginTop: '60px' }}>
          <div 
            className="relative digital-grid"
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

      {/* Decorative Arrow - arrowrightt beside first row cards */}
      <ArrowDecoration 
        type="arrowrightt" 
        className="absolute top-1/3 right-8"
      />

      {/* Decorative Arrow - aboutus_rightb at end */}
      <ArrowDecoration 
        type="aboutus_rightb" 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
      />
    </section>
  );
};

export default DigitalEngineeringSection;