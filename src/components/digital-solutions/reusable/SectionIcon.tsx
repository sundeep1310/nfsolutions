import React from 'react';
import Image from 'next/image';

interface SectionIconProps {
  icon: string;
  alt: string;
  size?: number;
}

const SectionIcon: React.FC<SectionIconProps> = ({ icon, alt, size = 64 }) => {
  return (
    <>
      <style jsx>{`
        .section-icon {
          flex-shrink: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #EB8145;
          box-shadow: 0 4px 12px rgba(235, 129, 69, 0.3);
          width: clamp(48px, 6vw, ${size}px);
          height: clamp(48px, 6vw, ${size}px);
        }
        
        .section-icon-image {
          object-fit: contain;
          width: 60%;
          height: 60%;
        }
        
        @media (max-width: 768px) {
          .section-icon {
            width: clamp(40px, 8vw, 60px);
            height: clamp(40px, 8vw, 60px);
          }
        }
        
        @media (max-width: 480px) {
          .section-icon {
            width: clamp(36px, 10vw, 50px);
            height: clamp(36px, 10vw, 50px);
          }
        }
      `}</style>
      
      <div className="section-icon">
        <Image
          src={icon}
          alt={alt}
          width={size * 0.6}
          height={size * 0.6}
          className="section-icon-image"
        />
      </div>
    </>
  );
};

export default SectionIcon;