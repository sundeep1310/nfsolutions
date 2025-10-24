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
    <>
      <style jsx>{`
        .aiml-section {
          position: relative;
          background-color: #f9fafb;
          font-family: 'Instrument Sans, sans-serif';
          padding-top: clamp(60px, 8vw, 90px);
          padding-bottom: clamp(20px, 2vw, 30px);
          margin-bottom: clamp(20px, 2vw, 30px);
        }
        
        .aiml-container {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: clamp(30px, 6vw, 80px);
          padding-right: clamp(30px, 6vw, 80px);
        }
        
        .services-wrapper {
          margin-left: clamp(50px, 20vw, 250px);
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
          .aiml-section {
            padding-top: clamp(40px, 6vw, 60px);
          }
          
          .services-wrapper {
            margin-left: clamp(20px, 8vw, 80px);
            margin-top: clamp(30px, 4vw, 40px);
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            justify-items: center;
          }
        }
        
        @media (max-width: 480px) {
          .aiml-container {
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
      
      <section className="aiml-section">
        <div className="aiml-container">
          <SectionHeader
            icon="/ai-icon.svg"
            iconAlt="AI & ML"
            title="Artificial "
            titleHighlight="Intelligence & ML"
            subtitle="Integrating Intelligent Automation to Drive Growth and Efficiency"
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
    </>
  );
};

export default AIMLSection;