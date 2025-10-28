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
        return 'top: clamp(10px, 2vw, 20px); right: 0 !important;';
      case 'bottom-left':
        return 'bottom: clamp(10px, 2vw, 20px); right: 0 !important;';
      case 'center':
      default:
        return 'right: 0 !important;';
    }
  };

  return (
    <>
      <style jsx>{`
        .arrow-decoration {
          pointer-events: none;
          opacity: 0.6;
          z-index: 5;
          position: absolute !important;
          ${getPositionStyles()}
          left: auto !important;
          transform: none !important;
          margin: 0 !important;
        }
        
        .arrow-image {
          width: ${type === 'aboutus_rightb' ? 'clamp(40px, 6vw, 80px)' : 'clamp(60px, 10vw, 120px)'};
          height: clamp(60px, 10vw, 120px);
          object-fit: contain;
        }
        
        @media (max-width: 768px) {
          .arrow-decoration {
            opacity: 0.4;
          }
          .arrow-image {
            width: ${type === 'aboutus_rightb' ? 'clamp(30px, 5vw, 60px)' : 'clamp(40px, 8vw, 80px)'};
            height: clamp(40px, 8vw, 80px);
          }
        }
        
        @media (max-width: 480px) {
          .arrow-decoration {
            opacity: 0.3;
          }
          .arrow-image {
            width: ${type === 'aboutus_rightb' ? 'clamp(20px, 4vw, 40px)' : 'clamp(30px, 6vw, 60px)'};
            height: clamp(30px, 6vw, 60px);
          }
        }
      `}</style>
      
      <div className={`arrow-decoration ${className}`}>
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