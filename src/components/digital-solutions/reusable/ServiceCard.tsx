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
  const defaultTitleSize = textSize === 'large' ? '36.96px' : '10.395px';
  const defaultDescriptionSize = textSize === 'large' ? '13.86px' : '8.085px';
  
  return (
    <div 
      className="relative overflow-hidden group transition-transform duration-700 ease-in-out w-full max-w-full"
      style={{ 
        height: 'clamp(380px, 15vw, 520px)',
        maxWidth: 'clamp(478px, 23vw, 780px)',
        backgroundColor: useIconOnly ? 'transparent' : '#1a1a1a',
        borderRadius: '14px'
      }}
    >
      {/* Background Image - only show if not using icon only */}
      {!useIconOnly && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            style={{ borderRadius: '14px' }}
          />
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%)',
              borderRadius: '14px'
            }}
          />
        </div>
      )}

      {/* Content */}
      <div 
        className="relative h-full flex flex-col p-5 z-10"
        style={{
          justifyContent: useIconOnly && alignLeft ? 'flex-start' : (useIconOnly ? 'center' : 'flex-end'),
          alignItems: centerText ? 'center' : (useIconOnly && alignLeft ? 'flex-start' : (useIconOnly ? 'center' : 'flex-start')),
          textAlign: centerText ? 'center' : (useIconOnly && alignLeft ? 'left' : (useIconOnly ? 'center' : 'left')),
          paddingBottom: bottomPadding !== '0px' ? bottomPadding : '20px'
        }}
      >
        {/* Icon above title - only show when useIconOnly is true */}
        {useIconOnly && (
          <div className="mb-3">
            <Image
              src={image}
              alt={`${title}`}
              width={iconSize}
              height={iconSize}
              className="object-contain group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}
        
        <h3 
          className="font-bold mb-4"
          style={{ 
            color: useIconOnly ? '#1a1a1a' : '#FFFFFF',
            fontFamily: 'Instrument Sans, sans-serif',
            lineHeight: '1.25',
            fontSize: titleFontSize || defaultTitleSize,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {title}
        </h3>
        <p 
          className="leading-relaxed"
          style={{ 
            color: useIconOnly ? '#4F4F4F' : '#E0E0E0',
            fontFamily: 'Instrument Sans, sans-serif',
            lineHeight: '1.4',
            fontSize: descriptionFontSize || defaultDescriptionSize,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            maxWidth: centerText ? '80%' : '100%',
            margin: centerText ? '0 auto' : '0'
          }}
        >
          {description}
        </p>
      </div>

      {/* Hover Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(235,129,69,0.1) 0%, rgba(235,129,69,0.2) 100%)',
          borderRadius: '14px'
        }}
      />
    </div>
  );
};

export default ServiceCard;