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
    <section 
      className="relative bg-white ux-section"
      style={{ 
        fontFamily: 'Instrument Sans, sans-serif',
        paddingTop: '30px',
        paddingBottom: '10px',
        marginBottom: '10px'
      }}
    >
      <style jsx>{`
        @media (max-width: 1023px) {
          .ux-section {
            padding-top: 40px !important;
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
          }
          .ux-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .ux-grid-wrapper {
            margin-left: 0 !important;
            margin-top: 40px !important;
            width: 100% !important;
            margin-bottom: -75% !important;
          }
          .ux-grid {
            grid-template-columns: 1fr !important;
            justify-content: center !important;
            transform: scale(0.5);
            transform-origin: top center;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-8 ux-container" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
        <SectionHeader
          icon="/ux-icon.svg"
          iconAlt="UX/CX Transformation"
          title="UX / CX"
          titleHighlight="Transformation"
          subtitle="Elevating Experiences with Strategy & Design"
        />

        {/* Services Grid - 2x2 Layout with 12px gaps and 250px right movement (100px + 50px + 100px) */}
        <div className="ux-grid-wrapper" style={{ marginLeft: '250px', width: 'fit-content', marginTop: '60px' }}>
          <div 
            className="relative ux-grid"
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

      {/* Decorative Arrow - arrowrightt at start */}
      <ArrowDecoration 
        type="arrowrightt" 
        position="top-right"
        className="absolute"
      />

      {/* Decorative Arrow - aboutus_rightb at end */}
      <ArrowDecoration 
        type="aboutus_rightb" 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
      />
    </section>
  );
};

export default UXCXSection;