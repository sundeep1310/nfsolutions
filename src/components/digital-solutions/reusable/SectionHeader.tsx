import React from 'react';
import SectionIcon from './SectionIcon';

interface SectionHeaderProps {
  icon: string;
  iconAlt: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  iconSize?: number;
  titleMarginLeft?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  icon, 
  iconAlt, 
  title, 
  titleHighlight,
  subtitle,
  iconSize = 80,
  titleMarginLeft
}) => {
  return (
    <>
      <style jsx>{`
        .section-header-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(15px, 2vw, 20px);
          margin-bottom: clamp(30px, 4vw, 40px);
        }
        
        .section-content {
          flex: 1;
          text-align: left;
          ${titleMarginLeft ? `margin-left: ${titleMarginLeft};` : ''}
        }
        
        .section-title {
          font-weight: bold;
          color: #1a1a1a;
          font-family: 'Instrument Sans, sans-serif';
          line-height: 1.2;
          font-size: clamp(32px, 5vw, 64px);
          margin-bottom: clamp(12px, 1.5vw, 16px);
          padding-left: clamp(50px, 12vw, 150px);
        }
        
        .section-title-highlight {
          color: #EB8145;
        }
        
        .section-subtitle {
          font-size: clamp(14px, 1.8vw, 18px);
          color: #4F4F4F;
          font-family: 'Instrument Sans, sans-serif';
          padding-left: clamp(50px, 12vw, 150px);
        }
        
        @media (max-width: 768px) {
          .section-header-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          
          .section-content {
            text-align: center;
            margin-left: 0 !important;
          }
          
          .section-title,
          .section-subtitle {
            padding-left: 0;
          }
        }
        
        @media (max-width: 480px) {
          .section-header-container {
            gap: 15px;
          }
        }
      `}</style>
      
      <div className="section-header-container">
        <SectionIcon icon={icon} alt={iconAlt} size={iconSize} />
        <div className="section-content">
          <h2 className="section-title">
            {title} <span className="section-title-highlight">{titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;