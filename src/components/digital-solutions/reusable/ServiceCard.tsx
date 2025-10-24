import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  imageAlt?: string;
  useIconOnly?: boolean;
  alignLeft?: boolean;
  textSize?: 'normal' | 'large';
  centerText?: boolean;
  iconSize?: number;
  titleFontSize?: string;
  descriptionFontSize?: string;
  bottomPadding?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  image, 
  title, 
  description,
  imageAlt = 'Service illustration',
  useIconOnly = false,
  alignLeft = false,
  textSize = 'normal',
  centerText = false,
  iconSize = 80,
  titleFontSize,
  descriptionFontSize,
  bottomPadding = '0px'
}) => {
  // Use custom font sizes if provided, otherwise use default calculated sizes
  const defaultTitleSize = textSize === 'large' ? '36.96px' : '10.395px';
  const defaultDescriptionSize = textSize === 'large' ? '13.86px' : '8.085px';
  
  return (
    <>
      <style jsx>{`
        .service-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.7s ease-in-out;
          height: clamp(250px, 30vw, 350px);
          width: clamp(280px, 40vw, 630px);
          background-color: ${useIconOnly ? 'transparent' : '#1a1a1a'};
          border-radius: 14px;
        }
        
        .service-card:hover {
          transform: scale(1.02);
        }
        
        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 14px;
        }
        
        .background-image img {
          object-fit: cover;
          opacity: 0.4;
          border-radius: 14px;
          transition: all 0.7s ease;
        }
        
        .service-card:hover .background-image img {
          opacity: 0.5;
          transform: scale(1.05);
        }
        
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%);
          border-radius: 14px;
        }
        
        .card-content {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: clamp(15px, 2vw, 20px);
          z-index: 10;
          justify-content: ${useIconOnly && alignLeft ? 'flex-start' : (useIconOnly ? 'center' : 'flex-end')};
          align-items: ${centerText ? 'center' : (useIconOnly && alignLeft ? 'flex-start' : (useIconOnly ? 'center' : 'flex-start'))};
          text-align: ${centerText ? 'center' : (useIconOnly && alignLeft ? 'left' : (useIconOnly ? 'center' : 'left'))};
          padding-bottom: ${bottomPadding !== '0px' ? bottomPadding : 'clamp(15px, 2vw, 20px)'};
        }
        
        .icon-container {
          margin-bottom: clamp(8px, 1vw, 12px);
          transition: transform 0.7s ease;
        }
        
        .service-card:hover .icon-container {
          transform: scale(1.05);
        }
        
        .service-title {
          font-weight: bold;
          margin-bottom: clamp(12px, 1.5vw, 16px);
          color: ${useIconOnly ? '#1a1a1a' : '#FFFFFF'};
          font-family: 'Instrument Sans, sans-serif';
          line-height: 1.25;
          font-size: ${titleFontSize ? `clamp(calc(${titleFontSize} * 0.7), 2.5vw, ${titleFontSize})` : `clamp(calc(${defaultTitleSize} * 0.7), 2.5vw, ${defaultTitleSize})`};
        }
        
        .service-description {
          color: ${useIconOnly ? '#4F4F4F' : '#E0E0E0'};
          font-family: 'Instrument Sans, sans-serif';
          line-height: 1.4;
          font-size: ${descriptionFontSize ? `clamp(calc(${descriptionFontSize} * 0.8), 1.8vw, ${descriptionFontSize})` : `clamp(calc(${defaultDescriptionSize} * 0.8), 1.8vw, ${defaultDescriptionSize})`};
          max-width: ${centerText ? '80%' : '100%'};
          margin: ${centerText ? '0 auto' : '0'};
        }
        
        .hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          background: linear-gradient(180deg, rgba(235,129,69,0.1) 0%, rgba(235,129,69,0.2) 100%);
          border-radius: 14px;
          transition: opacity 0.7s ease;
          pointer-events: none;
        }
        
        .service-card:hover .hover-effect {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .service-card {
            height: clamp(200px, 35vw, 280px);
            width: clamp(250px, 45vw, 400px);
          }
          
          .card-content {
            padding: clamp(12px, 2vw, 16px);
          }
          
          .service-title {
            margin-bottom: clamp(8px, 1.2vw, 12px);
          }
        }
        
        @media (max-width: 480px) {
          .service-card {
            height: clamp(180px, 40vw, 250px);
            width: clamp(220px, 50vw, 350px);
          }
          
          .card-content {
            padding: clamp(10px, 1.5vw, 14px);
          }
          
          .icon-container {
            margin-bottom: clamp(6px, 0.8vw, 10px);
          }
          
          .service-title {
            margin-bottom: clamp(6px, 1vw, 10px);
          }
        }
      `}</style>
      
      <div className="service-card group">
        {/* Background Image - only show if not using icon only */}
        {!useIconOnly && (
          <div className="background-image">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="gradient-overlay" />
          </div>
        )}

        {/* Content */}
        <div className="card-content">
          {/* Icon above title - only show when useIconOnly is true */}
          {useIconOnly && (
            <div className="icon-container">
              <Image
                src={image}
                alt={`${title}`}
                width={iconSize}
                height={iconSize}
                className="object-contain"
                style={{
                  width: `clamp(${iconSize * 0.6}px, 8vw, ${iconSize}px)`,
                  height: `clamp(${iconSize * 0.6}px, 8vw, ${iconSize}px)`
                }}
              />
            </div>
          )}
          
          <h3 className="service-title">
            {title}
          </h3>
          <p className="service-description">
            {description}
          </p>
        </div>

        {/* Hover Effect */}
        <div className="hover-effect" />
      </div>
    </>
  );
};

export default ServiceCard;