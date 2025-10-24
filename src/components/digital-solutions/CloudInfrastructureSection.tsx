'use client';

import React from 'react';
import SectionHeader from './reusable/SectionHeader';
import ServiceCard from './reusable/ServiceCard';

const CloudInfrastructureSection: React.FC = () => {
  const services = [
    {
      image: '/cloud-migration.png',
      title: 'Cloud Migration & Deployment',
      description: 'Migrate applications and workloads securely with minimal downtime and zero business disruption.'
    },
    {
      image: '/cloud-security.png',
      title: 'Cloud Security & CloudOps',
      description: '24/7 monitoring with proactive protection against evolving threats.'
    },
    {
      image: '/cloud-data-mgmt.png',
      title: 'Cloud Data Management',
      description: 'Organize and centralize data for seamless access across the enterprise.'
    },
    {
      image: '/cloud-consulting.png',
      title: 'Cloud Consulting Services',
      description: 'Architect future-proof infrastructure with expert strategy and planning.'
    }
  ];

  return (
    <section 
      className="relative bg-gray-50 cloud-section"
      style={{ 
        fontFamily: 'Instrument Sans, sans-serif',
        position: 'relative',
        zIndex: 1,
        paddingTop: '30px',
        paddingBottom: '10px',
        marginBottom: '10px'
      }}
    >
      <style jsx>{`
        @media (max-width: 1023px) {
          .cloud-section {
            padding-top: 40px !important;
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
          }
          .cloud-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .cloud-grid-wrapper {
            margin-left: 0 !important;
            margin-top: 40px !important;
            margin-bottom: -75% !important;
          }
          .cloud-grid {
            grid-template-columns: 1fr !important;
            justify-content: center !important;
            transform: scale(0.5);
            transform-origin: top center;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-8 cloud-container" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
        <SectionHeader
          icon="/cloud-icon.svg"
          iconAlt="Cloud & Infrastructure"
          title="Cloud &"
          titleHighlight="Infrastructure"
          subtitle="Secure, Optimized, Always-On Environments for Modern Enterprises"
        />

        {/* Services Grid - 2x2 Layout with 12px gaps and 250px right movement to align with other sections */}
        <div className="cloud-grid-wrapper" style={{ marginLeft: '250px', marginTop: '60px' }}>
          <div 
            className="relative cloud-grid"
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
                useIconOnly={true}
                alignLeft={true}
                iconSize={120}
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

export default CloudInfrastructureSection;