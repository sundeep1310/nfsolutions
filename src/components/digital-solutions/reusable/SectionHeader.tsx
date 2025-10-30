import React, { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iconWrapperRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const [lineHeight, setLineHeight] = useState('70vh');
  const [curveOffsetTopPx, setCurveOffsetTopPx] = useState(0);
  const [curveOffsetBottomPx, setCurveOffsetBottomPx] = useState(0);
  const [curveVerticalShift, setCurveVerticalShift] = useState(0);

  useEffect(() => {
    // Only run on client
    const updateMetrics = () => {
      const w = window.innerWidth;

      // responsive line height
      if (w >= 2560) setLineHeight('90vh');
      else if (w >= 1920) setLineHeight('86vh');
      else if (w >= 1536) setLineHeight('80vh');
      else if (w >= 1280) setLineHeight('75vh');
      else if (w >= 1024) setLineHeight('70vh');
      else setLineHeight('0vh');

      const parent = containerRef.current;
      const iconEl = iconWrapperRef.current;
      const titleEl = titleRef.current;

      if (!parent || !iconEl || !titleEl) {
        setCurveOffsetTopPx(0);
        setCurveOffsetBottomPx(0);
        setCurveVerticalShift(0);
        return;
      }

      // geometry
      const parentRect = parent.getBoundingClientRect();
      const iconRect = iconEl.getBoundingClientRect();
      const titleRect = titleEl.getBoundingClientRect();

      const iconCenterX = iconRect.left + iconRect.width / 2;
      const titleStartX = titleRect.left;

      // --- TUNABLE: responsive base tweak (anchor right of title start) ---
      const baseTweak = (w >= 2560 ? 160 : w >= 1920 ? 130 : w >= 1536 ? 120 : w >= 1440 ? 110 : w >= 1280 ? 100 : w >= 1024 ? 60 : 60);

      // --- TUNABLE: extraRight nudges for top/bottom separately ---
      const extraRightTop = (w >= 2560 ? 120 : w >= 1920 ? 120 : w >= 1440 ? 60 : w >= 1280 ? 40 : 20);
      const extraRightBottom = (w >= 2560 ? 140 : w >= 1920 ? 120 : w >= 1440 ? 80 : w >= 1280 ? 60 : 104);

      // compute raw offset
      const rawOffset = (titleStartX + baseTweak) - iconCenterX;

      // clamp to keep SVG within the container area
      const maxOffset = Math.max(300, parentRect.width * 0.55);
      const minOffset = -maxOffset;
      const clamped = Math.min(maxOffset, Math.max(minOffset, rawOffset));

      // produce final values with separate nudges
      const finalTop = Math.round(clamped + extraRightTop);
      const finalBottom = Math.round(clamped + extraRightBottom);

      setCurveOffsetTopPx(finalTop);
      setCurveOffsetBottomPx(finalBottom);

      // small vertical tweak so curves align better when title sits lower/higher
      const verticalShift = Math.max(-80, Math.min(80, Math.round((titleRect.top - parentRect.top) * 0.12)));
      setCurveVerticalShift(verticalShift);
    };

    // initial run on mount
    updateMetrics();

    // update on resize / orientation change
    window.addEventListener('resize', updateMetrics);
    window.addEventListener('orientationchange', updateMetrics);
    return () => {
      window.removeEventListener('resize', updateMetrics);
      window.removeEventListener('orientationchange', updateMetrics);
    };
  }, []);

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
          transition: all 0.25s ease;
        }

        .connecting-line.top {
          top: calc(-1 * var(--line-height) + 6px);
          height: var(--line-height);
        }

        .connecting-line.bottom {
          bottom: calc(-1 * var(--line-height) + 6px);
          height: var(--line-height);
        }

        /* Use two offset variables so top/bottom can differ */
        .curved-line {
          position: absolute;
          left: calc(50% + var(--curve-offset-top));
          transform: translateX(-50%) translateY(var(--curve-vertical));
          z-index: 1;
          width: clamp(420px, 30vw, 760px);
          height: clamp(180px, 18vw, 360px);
          pointer-events: none;
        }

        .bottom-curved-line {
          position: absolute;
          left: calc(50% + var(--curve-offset-bottom));
          transform: translateX(-50%) translateY(var(--curve-vertical));
          z-index: 1;
          width: clamp(420px, 30vw, 760px);
          height: clamp(180px, 18vw, 360px);
          pointer-events: none;
        }

        .curved-line { top: clamp(-180px, -18vh, -200px); }
        .bottom-curved-line { bottom: clamp(-800px, -80vh, -860px); }

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

        .section-title-highlight { color: #EB8145; }

        .section-subtitle {
          font-size: clamp(14px, 1.305vw, 24px);
          color: #4F4F4F;
          font-family: 'Instrument Sans, sans-serif';
          padding-left: clamp(35px, 9vw, 120px);
        }

        @media (max-width: 1023px) {
          .connecting-line,
          .curved-line,
          .bottom-curved-line {
            display: none;
          }
          .section-header-container { flex-direction: column; text-align: center; gap: 20px; }
          .section-content { text-align: center; margin-left: 0 !important; }
          .section-title, .section-subtitle { padding-left: 0; }
        }
      `}</style>

      <div
        ref={containerRef}
        className="section-header-container"
        style={
          {
            '--line-height': lineHeight,
            '--curve-offset-top': `${curveOffsetTopPx}px`,
            '--curve-offset-bottom': `${curveOffsetBottomPx}px`,
            '--curve-vertical': `${curveVerticalShift}px`
          } as React.CSSProperties
        }
      >
        <div ref={iconWrapperRef} className="section-icon-wrapper">
          {!isFirst && <div className="connecting-line top" />}
          <div className="connecting-line bottom" />
{/*
          {isFirst && (
            <svg
              className="curved-line"
              width="100%"
              height="100%"
              viewBox="0 0 750 280"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M0 280 L0 200 Q0 160 40 160 L710 160 Q730 160 730 140 L730 100"
                stroke="#EB8145"
                strokeWidth="3"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              <image href="/dot1.png" x="720" y="90" width="20" height="20" />
            </svg>
          )}

          {isLast && (
            <svg
              className="bottom-curved-line"
              width="100%"
              height="100%"
              viewBox="0 0 750 280"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M0 40 L0 80 Q0 120 40 120 L710 120 Q730 120 730 140 L730 180"
                stroke="#EB8145"
                strokeWidth="3"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              <image href="/dot2.png" x="720" y="170" width="20" height="20" />
            </svg>
          )}
*/}
          <SectionIcon icon={icon} alt={iconAlt} size={iconSize} />
        </div>

        <div className="section-content">
          <h2 ref={titleRef} className="section-title">
            {title} <span className="section-title-highlight">{titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;