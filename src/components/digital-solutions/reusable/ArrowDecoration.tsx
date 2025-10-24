import React from 'react';
import Image from 'next/image';

interface ArrowDecorationProps {
  type: 'aboutus_rightb' | 'arrowrightt';
  position?: 'top-right' | 'bottom-left' | 'center';
  className?: string;
}

const ArrowDecoration: React.FC<ArrowDecorationProps> = ({ 
  type, 
  position = 'center',
  className = ''
}) => {
  const getArrowImage = () => {
    switch (type) {
      case 'aboutus_rightb':
        return '/aboutus_rightb.png';
      case 'arrowrightt':
        return '/arrowrightt.png';
      default:
        return '/aboutus_rightb.png';
    }
  };

  const getPositionStyles = () => {
    switch (position) {
      case 'top-right':
        return { top: 'clamp(10px, 2vw, 20px)', right: 'clamp(10px, 2vw, 20px)' };
      case 'bottom-left':
        return { bottom: 'clamp(10px, 2vw, 20px)', left: 'clamp(10px, 2vw, 20px)' };
      case 'center':
      default:
        return {};
    }
  };

  return (
    <>
      <style jsx>{`
        .arrow-decoration {
          pointer-events: none;
          opacity: 0.6;
          z-index: 5;
        }
        
        .arrow-image {
          width: clamp(60px, 10vw, 120px);
          height: clamp(60px, 10vw, 120px);
          object-fit: contain;
        }
        
        @media (max-width: 768px) {
          .arrow-decoration {
            opacity: 0.4;
          }
          .arrow-image {
            width: clamp(40px, 8vw, 80px);
            height: clamp(40px, 8vw, 80px);
          }
        }
        
        @media (max-width: 480px) {
          .arrow-decoration {
            opacity: 0.3;
          }
          .arrow-image {
            width: clamp(30px, 6vw, 60px);
            height: clamp(30px, 6vw, 60px);
          }
        }
      `}</style>
      
      <div 
        className={`arrow-decoration ${className}`}
        style={getPositionStyles()}
      >
        <Image
          src={getArrowImage()}
          alt="Decorative arrow"
          width={120}
          height={120}
          className="arrow-image"
        />
      </div>
    </>
  );
};

export default ArrowDecoration;