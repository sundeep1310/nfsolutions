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
  isFirst?: boolean;
  isLast?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  icon, 
  iconAlt, 
  title, 
  titleHighlight,
  subtitle,
  iconSize = 80,
  titleMarginLeft,
  isFirst = false,
  isLast = false
}) => {
  return (
    <>
      <style jsx>{`
        .section-header-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(15px, 1.39vw, 25px);
          margin-bottom: clamp(30px, 4vw, 40px);
          position: relative;
        }
        
        .section-icon-wrapper {
          position: relative;
          z-index: 2;
        }
        
        .connecting-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          background-color: #EB8145;
          z-index: 1;
        }
        
        .connecting-line.top {
          top: clamp(-100vh, calc(-100vh + 30vw), -70vh);
          height: clamp(70vh, calc(100vh - 30vw), 100vh);
        }
        
        .connecting-line.bottom {
          bottom: clamp(calc(-100vh - 100px), calc(-100vh + 33vw - 50px), calc(-67vh));
          height: clamp(calc(70vh + 50px), calc(100vh - 30vw), calc(130vh + 100px));
        }
        
        .curved-line {
          position: absolute;
          top: clamp(-190px, -12.5vw, -270px);
          left: 50%;
          transform: translateX(0%);
          z-index: 1;
          width: clamp(450px, 45.1vw, 650px);
          height: clamp(195px, 19.4vw, 280px);
        }
        
        .bottom-curved-line {
          position: absolute;
          bottom: clamp(-780px, -59.0vw, -930px);
          left: 49%;
          transform: translateX(0%);
          z-index: 1;
          width: clamp(450px, 45.1vw, 650px);
          height: clamp(195px, 19.4vw, 280px);
        }
        
        .section-content {
          flex: 1;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
          ${titleMarginLeft ? `margin-left: ${titleMarginLeft};` : ''}
        }
        
        .section-title {
          font-weight: bold;
          color: #1a1a1a;
          font-family: 'Instrument Sans, sans-serif';
          line-height: 1.2;
          font-size: clamp(31px, 4.35vw, 74px);
          margin-bottom: clamp(2px, 0.25vw, 3px);
          margin-top: clamp(3px, 0.5vw, 6px);
          padding-left: clamp(35px, 9vw, 120px);
        }
        
        .section-title-highlight {
          color: #EB8145;
        }
        
        .section-subtitle {
          font-size: clamp(14px, 1.305vw, 24px);
          color: #4F4F4F;
          font-family: 'Instrument Sans, sans-serif';
          padding-left: clamp(35px, 9vw, 120px);
        }
        
        @media (min-width: 1024px) and (max-width: 2000px) {
          .connecting-line.bottom {
            bottom: calc(-75vh);
            height: calc(90vh);
          }
        }
        
        @media (max-width: 2560px) {
          .curved-line {
            top: -230px;
            width: 750px;
            height: 280px;
          }
          
          .bottom-curved-line {
            bottom: -930px;
            width: 750px;
            height: 280px;
          }
          
          .section-icon-wrapper :global(.section-icon) {
            width: 100px !important;
            height: 100px !important;
          }
        }
        
        @media (max-width: 1024px) {
          .curved-line {
            top: -140px;
            width: 400px;
            height: 200px;
          }
          
          .bottom-curved-line {
            bottom: -730px;
            width: 400px;
            height: 200px;
          }
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
          
          .connecting-line {
            display: none;
          }
          
          .curved-line {
            display: none;
          }
          
          .bottom-curved-line {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .section-header-container {
            gap: 15px;
          }
        }
      `}</style>
      
      <div className="section-header-container">
        <div className="section-icon-wrapper">
          {!isFirst && <div className="connecting-line top"></div>}
          <div className="connecting-line bottom"></div>
          {isFirst && (
            <svg className="curved-line" width="100%" height="100%" viewBox="0 0 750 280" fill="none" preserveAspectRatio="xMidYMid meet">
              <path 
                d="M0 240 L0 200 Q0 160 40 160 L710 160 Q730 160 730 140 L730 100" 
                stroke="#EB8145" 
                strokeWidth="3" 
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              <image
                href="/dot1.png"
                x="720"
                y="90"
                width="20"
                height="20"
              />
            </svg>
          )}
          {isLast && (
            <svg className="bottom-curved-line" width="100%" height="100%" viewBox="0 0 750 280" fill="none" preserveAspectRatio="xMidYMid meet">
              <path 
                d="M0 40 L0 80 Q0 120 40 120 L710 120 Q730 120 730 140 L730 180" 
                stroke="#EB8145" 
                strokeWidth="3" 
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              <image
                href="/dot2.png"
                x="720"
                y="170"
                width="20"
                height="20"
              />
            </svg>
          )}
          <SectionIcon icon={icon} alt={iconAlt} size={iconSize} />
        </div>
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