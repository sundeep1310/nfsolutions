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
          top: -100vh;
          height: 100vh;
        }
        
        .connecting-line.bottom {
          bottom: -100vh;
          height: 100vh;
        }
        
        .curved-line {
          position: absolute;
          top: clamp(-200px, -31.47vh, -270px);
          left: 50%;
          transform: translateX(0%);
          z-index: 1;
          width: 650px;
          height: 280px;
        }
        
        .bottom-curved-line {
          position: absolute;
          bottom: clamp(-900px, -122.38vh, -1050px);
          left: 49%;
          transform: translateX(0%);
          z-index: 1;
          width: 650px;
          height: 280px;
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
        
        /* Desktop - Large screens (2560px+) */
        @media (min-width: 2560px) {
          .curved-line {
            top: clamp(-220px, -31.47vh, -280px);
            width: 750px;
            height: 300px;
          }
          
          .bottom-curved-line {
            bottom: clamp(-950px, -122.38vh, -1040px);
            width: 750px;
            height: 300px;
          }
          
          .connecting-line.top {
            top: -68vh;
            height: 82vh;
          }
          
          .connecting-line.bottom {
            bottom: -68vh;
            height: 82vh;
          }
          
          .section-icon-wrapper :global(.section-icon) {
            width: 100px !important;
            height: 100px !important;
          }
        }
        
        /* Desktop - Extra large screens (1920px - 2559px) */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .curved-line {
            top: clamp(-210px, -31.47vh, -250px);
            width: 700px;
            height: 290px;
          }
          
          .bottom-curved-line {
            bottom: clamp(-920px, -122.38vh, -970px);
            width: 700px;
            height: 290px;
          }
          
          .connecting-line.top {
            top: -64vh;
            height: 98vh;
          }
          
          .connecting-line.bottom {
            bottom: -64vh;
            height: 98vh;
          }
        }
        
        /* Desktop - Large screens (1536px - 1919px) */
        @media (min-width: 1536px) and (max-width: 1919px) {
          .curved-line {
            top: clamp(-160px, -31.47vh, -180px);
            width: 600px;
            height: 260px;
          }
          
          .bottom-curved-line {
            bottom: clamp(-930px, -122.38vh, -980px);
            width: 600px;
            height: 260px;
          }
          
          .connecting-line.top {
            top: -95vh;
            height: 104vh;
          }
          
          .connecting-line.bottom {
            bottom: clamp(-80vh, -95vh, -110vh);
            height: clamp(90vh, 104vh, 120vh);
          }
        }
        
        /* Desktop - Large screens (1440px - 1535px) */
        @media (min-width: 1440px) and (max-width: 1535px) {
          .curved-line {
            top: clamp(-160px, -31.47vh, -180px);
            width: 600px;
            height: 260px;
          }
          
          .bottom-curved-line {
            bottom: clamp(-780px, -122.38vh, -830px);
            width: 600px;
            height: 260px;
          }
          
          .connecting-line.top {
            top: -77vh;
            height: 104vh;
          }
          
          .connecting-line.bottom {
            bottom: clamp(-62vh, -77vh, -92vh);
            height: clamp(72vh, 104vh, 102vh);
          }
        }
        
        /* Desktop - Medium screens (1280px - 1439px) */
        @media (min-width: 1280px) and (max-width: 1439px) {
          .curved-line {
            top: clamp(-140px, -31.47vh, -160px);
            width: 550px;
            height: 240px;
          }
          
          .bottom-curved-line {
            bottom: clamp(-700px, -122.38vh, -750px);
            width: 550px;
            height: 240px;
          }
          
          .connecting-line.top {
            top: -69vh;
            height: 92vh;
          }
          
          .connecting-line.bottom {
            bottom: clamp(-54vh, -69vh, -84vh);
            height: clamp(64vh, 92vh, 94vh);
          }
        }
        
        /* Desktop - Standard screens (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .curved-line {
            top: clamp(-140px, -31.47vh, -160px);
            width: 500px;
            height: 220px;
          }
          
          .bottom-curved-line {
            bottom: clamp(-680px, -122.38vh, -730px);
            width: 500px;
            height: 220px;
          }
          
          .connecting-line.top {
            top: -70vh;
            height: 98vh;
          }
          
          .connecting-line.bottom {
            bottom: clamp(-55vh, -70vh, -85vh);
            height: clamp(65vh, 98vh, 95vh);
          }
        }
        
        /* Tablet and below */
        @media (max-width: 1023px) {
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
                d="M0 280 L0 200 Q0 160 40 160 L710 160 Q730 160 730 140 L730 100" 
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