'use client';

import React, { useEffect, useState } from 'react';
import SectionHeader from './reusable/SectionHeader';
import ServiceCard from './reusable/ServiceCard';
import ArrowDecoration from './reusable/ArrowDecoration';

const DataEngineeringSection: React.FC = () => {
  const [titleMargin, setTitleMargin] = useState<string | undefined>(undefined);
  const [cardTextSizes, setCardTextSizes] = useState({ title: "28px", description: "18px" });

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

  useEffect(() => {
    const updateCardSizes = () => {
      if (window.innerWidth >= 1536) {
        // Target all service cards and update their max-width and height
        const serviceCards = document.querySelectorAll('.service-card-container > div');
        serviceCards.forEach((card: Element) => {
          const htmlCard = card as HTMLElement;
          if (htmlCard.style.maxWidth) {
            htmlCard.style.maxWidth = 'clamp(650px, 32vw, 1100px)';
          }
          if (htmlCard.style.height) {
            htmlCard.style.height = 'clamp(420px, 17vw, 580px)';
          }
        });
        setTitleMargin(undefined);
        setCardTextSizes({ title: "28px", description: "18px" });
      } else if (window.innerWidth >= 1024) {
        // Reset to original size for laptop screens
        const serviceCards = document.querySelectorAll('.service-card-container > div');
        serviceCards.forEach((card: Element) => {
          const htmlCard = card as HTMLElement;
          if (htmlCard.style.maxWidth) {
            htmlCard.style.maxWidth = 'clamp(478px, 23vw, 780px)';
          }
          if (htmlCard.style.height) {
            htmlCard.style.height = 'clamp(300px, 15vw, 440px)';
          }
        });
        setTitleMargin('-100px');
        setCardTextSizes({ title: "28px", description: "18px" });
      } else if (window.innerWidth >= 501) {
        // Tablet and mobile screens - reduce height by 50px, increase width by 30px
        const serviceCards = document.querySelectorAll('.service-card-container > div');
        serviceCards.forEach((card: Element) => {
          const htmlCard = card as HTMLElement;
          if (htmlCard.style.maxWidth) {
            htmlCard.style.maxWidth = 'clamp(508px, 23vw, 810px)';
          }
          if (htmlCard.style.height) {
            htmlCard.style.height = 'clamp(250px, 15vw, 390px)';
          }
        });
        setTitleMargin(undefined);
        setCardTextSizes({ title: "20px", description: "14px" });
      } else {
        // Mobile screens below 501px - reduce height by 50px, increase width by 30px
        const serviceCards = document.querySelectorAll('.service-card-container > div');
        serviceCards.forEach((card: Element) => {
          const htmlCard = card as HTMLElement;
          if (htmlCard.style.maxWidth) {
            htmlCard.style.maxWidth = 'clamp(508px, 23vw, 810px)';
          }
          if (htmlCard.style.height) {
            htmlCard.style.height = 'clamp(250px, 15vw, 390px)';
          }
        });
        setTitleMargin(undefined);
        setCardTextSizes({ title: "18px", description: "13px" });
      }
    };

    // Initial check
    updateCardSizes();

    // Listen for window resize
    window.addEventListener('resize', updateCardSizes);

    return () => {
      window.removeEventListener('resize', updateCardSizes);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @media (min-width: 1536px) {
          .services-row {
            gap: 25px !important;
            margin-bottom: 25px !important;
          }
          .services-row:last-child {
            margin-bottom: 0 !important;
          }
          .service-card-container {
            flex: 1.2 !important;
          }
          .header-section {
            margin-left: clamp(100px, 9.8vw, 250px) !important;
          }
        }
        @media (min-width: 1440px) and (max-width: 1535px) {
          .services-row {
            gap: 20px !important;
            margin-bottom: 20px !important;
          }
          .services-row:last-child {
            margin-bottom: 0 !important;
          }
        }
        @media (min-width: 1024px) and (max-width: 1535px) {
          .header-section {
            margin-left: 60px !important;
          }
        }
        @media (min-width: 1024px) {
          .section-wrapper {
            padding-top: 8px !important;
            padding-bottom: 8px !important;
          }
        }
        @media (max-width: 1023px) {
          .section-wrapper {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .decorative-arrow {
            display: none !important;
          }
        }
      `}</style>
      
      <section 
        className="section-wrapper relative bg-gray-50 py-16 sm:py-20"
        style={{ 
          fontFamily: 'Instrument Sans, sans-serif'
        }}
      >
        {/* Right side decorative image */}
        <img 
          src="/aboutus_rightb.png" 
          alt="Decorative"
          className="decorative-arrow"
          style={{
            position: 'absolute',
            right: 0,
            top: '-80px',
            width: '40px',
            height: '250px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-16">
          {/* Header Section */}
          <div 
            className="header-section mb-16 sm:mb-20" 
            style={{ 
              marginLeft: 'clamp(15px, 1.17vw, 30px)' 
            }}
          >
            <SectionHeader
              icon="/data-icon.svg"
              iconAlt="Data Engineering"
              title="Data Engineering &"
              titleHighlight="Analytics"
              subtitle="Building the Data Foundation for Intelligent Decisions"
              titleMarginLeft={titleMargin}
            />
          </div>

          {/* Services Grid - 2x2 Layout using flexbox for better spacing control */}
          <div 
            className="w-full max-[500px]:flex max-[500px]:flex-col"
            style={{
              marginLeft: typeof window !== 'undefined' && window.innerWidth >= 1440 && window.innerWidth < 1536 ? 'clamp(20px, calc(9.8vw - 80px), 170px)' : 'clamp(100px, 9.8vw, 250px)',
              marginRight: 'clamp(40px, 3.9vw, 100px)',
              maxWidth: 'calc(100vw - clamp(140px, 13.7vw, 350px))'
            }}
          >
            {/* Top row */}
            <div className="services-row flex gap-[10px] mb-[10px] max-[500px]:flex-col max-[500px]:gap-[10px]">
              <div className="service-card-container flex-1 min-w-0 flex justify-end">
                <ServiceCard
                  image={services[0].image}
                  title={services[0].title}
                  description={services[0].description}
                  imageAlt={services[0].title}
                  useIconOnly={false}
                  alignLeft={false}
                  textSize="normal"
                  centerText={true}
                  titleFontSize={cardTextSizes.title}
                  descriptionFontSize={cardTextSizes.description}
                />
              </div>
              <div className="service-card-container flex-1 min-w-0 flex justify-start">
                <ServiceCard
                  image={services[1].image}
                  title={services[1].title}
                  description={services[1].description}
                  imageAlt={services[1].title}
                  useIconOnly={false}
                  alignLeft={false}
                  textSize="normal"
                  centerText={true}
                  titleFontSize={cardTextSizes.title}
                  descriptionFontSize={cardTextSizes.description}
                />
              </div>
            </div>
            
            {/* Bottom row */}
            <div className="services-row flex gap-[10px] max-[500px]:flex-col max-[500px]:gap-[10px]">
              <div className="service-card-container flex-1 min-w-0 flex justify-end">
                <ServiceCard
                  image={services[2].image}
                  title={services[2].title}
                  description={services[2].description}
                  imageAlt={services[2].title}
                  useIconOnly={false}
                  alignLeft={false}
                  textSize="normal"
                  centerText={true}
                  titleFontSize={cardTextSizes.title}
                  descriptionFontSize={cardTextSizes.description}
                />
              </div>
              <div className="service-card-container flex-1 min-w-0 flex justify-start">
                <ServiceCard
                  image={services[3].image}
                  title={services[3].title}
                  description={services[3].description}
                  imageAlt={services[3].title}
                  useIconOnly={false}
                  alignLeft={false}
                  textSize="normal"
                  centerText={true}
                  titleFontSize={cardTextSizes.title}
                  descriptionFontSize={cardTextSizes.description}
                />
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default DataEngineeringSection;