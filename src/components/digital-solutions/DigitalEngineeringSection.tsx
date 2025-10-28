'use client';

import React, { useEffect, useState } from 'react';
import SectionHeader from './reusable/SectionHeader';
import ServiceCard from './reusable/ServiceCard';
import ArrowDecoration from './reusable/ArrowDecoration';

const DigitalEngineeringSection: React.FC = () => {
  const [titleMargin, setTitleMargin] = useState<string | undefined>(undefined);
  const [cardTextSizes, setCardTextSizes] = useState({ title: "28px", description: "18px" });

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
        }
      `}</style>
      
      <section 
        className="section-wrapper relative bg-white py-16 sm:py-20"
        style={{ 
          fontFamily: 'Instrument Sans, sans-serif'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-16">
          {/* Header Section */}
          <div 
            className="header-section mb-16 sm:mb-20" 
            style={{ 
              marginLeft: 'clamp(15px, 1.17vw, 30px)' 
            }}
          >
            <SectionHeader
              icon="/digital-engineering-icon.svg"
              iconAlt="Digital Engineering"
              title="Digital"
              titleHighlight="Engineering"
              subtitle="Designing, Building & Modernizing Enterprise-Grade Platforms"
              titleMarginLeft={titleMargin}
            />
          </div>

          {/* Services Grid - 2x2 Layout using flexbox for better spacing control */}
          <div 
            className="w-full max-[500px]:flex max-[500px]:flex-col"
            style={{
              marginLeft: 'clamp(100px, 9.8vw, 250px)',
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
    </>
  );
};

export default DigitalEngineeringSection;