'use client';

import React from 'react';
import SectionHeader from './reusable/SectionHeader';
import ServiceCard from './reusable/ServiceCard';
import ArrowDecoration from './reusable/ArrowDecoration';

const AIMLSection: React.FC = () => {
  const services = [
    {
      image: '/ai-generative.png',
      title: 'Generative AI Solutions',
      description: 'Develop custom LLM-powered applications, chatbots, and content creation tools.'
    },
    {
      image: '/ai-ml-predictive.png',
      title: 'Machine Learning & Predictive Modeling',
      description: 'Build and deploy custom models for forecasting, personalization, and anomaly detection.'
    },
    {
      image: '/ai-mlops.png',
      title: 'MLOps & AI Operations',
      description: 'Automate the deployment, monitoring, and management of AI/ML models for scalable, reliable performance.'
    },
    {
      image: '/ai-strategy.png',
      title: 'AI Strategy & Integration',
      description: 'Embed AI capabilities into existing platforms to automate processes and enhance decision-making.'
    }
  ];

  return (
    <section 
      className="relative bg-gray-50 aiml-section"
      style={{ 
        fontFamily: 'Instrument Sans, sans-serif',
        paddingTop: '90px',
        paddingBottom: '10px',
        marginBottom: '10px'
      }}
    >
      <style jsx>{`
        @media (max-width: 1023px) {
          .aiml-section {
            padding-top: 40px !important;
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
          }
          .aiml-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .aiml-grid-wrapper {
            margin-left: 0 !important;
            margin-top: 40px !important;
            margin-bottom: -75% !important;
          }
          .aiml-grid {
            grid-template-columns: 1fr !important;
            justify-content: center !important;
            transform: scale(0.5);
            transform-origin: top center;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-8 aiml-container" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
        <SectionHeader
          icon="/ai-icon.svg"
          iconAlt="AI & ML"
          title="Artificial "
          titleHighlight="Intelligence & ML"
          subtitle="Integrating Intelligent Automation to Drive Growth and Efficiency"
        />

        {/* Services Grid - 2x2 Layout with 12px gaps and 250px right movement to align with other sections */}
        <div className="aiml-grid-wrapper" style={{ marginLeft: '250px', marginTop: '60px' }}>
          <div 
            className="relative aiml-grid"
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
                descriptionFontSize="19px"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Arrow - aboutus_rightb at start */}
      <ArrowDecoration 
        type="aboutus_rightb" 
        position="top-right"
        className="absolute"
      />
    </section>
  );
};

export default AIMLSection;