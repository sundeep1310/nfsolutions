import React, { useEffect, useRef, useState } from "react";
import SectionIcon from "./SectionIcon";

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
  isLast = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iconWrapperRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  // CSS vars we will expose
  const [vars, setVars] = useState({
    lineHeight: "70vh",
    connectLeft: 0, // px
    curveLeftTop: 0, // px
    curveLeftBottom: 0, // px
    curveTop: 0, // px from container top
    curveBottom: 0, // px from container top (we will set using top or bottom)
  });

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    let rafId: number | null = null;
    let timeoutId: number | null = null;
    const prev = { ...vars }; // shallow copy for comparison

    const doUpdate = () => {
      const parent = containerRef.current;
      const iconWrap = iconWrapperRef.current;
      const titleEl = titleRef.current;
      if (!parent || !iconWrap || !titleEl) return;

      const w = window.innerWidth;
      const lineHeight =
        w >= 2560
          ? "90vh"
          : w >= 1920
          ? "86vh"
          : w >= 1536
          ? "80vh"
          : w >= 1280
          ? "75vh"
          : w >= 1024
          ? "70vh"
          : "0vh";

      const parentRect = parent.getBoundingClientRect();
      const iconRect = iconWrap.getBoundingClientRect();

      const iconCenterX = iconRect.left + iconRect.width / 2;
      const connectX = iconCenterX;

      const targetPercentTop = 0.03;
      const targetPercentBottom = 0.03;
      const targetTopX = parentRect.left + parentRect.width * targetPercentTop;
      const targetBottomX =
        parentRect.left + parentRect.width * targetPercentBottom;
      const deltaTop = targetTopX - connectX;
      const deltaBottom = targetBottomX - connectX;
      const maxDelta = Math.max(300, parentRect.width * 0.45);
      const clampedTop = Math.min(maxDelta, Math.max(-maxDelta, deltaTop));
      const clampedBottom = Math.min(
        maxDelta,
        Math.max(-maxDelta, deltaBottom)
      );
      const curveTop = Math.round(
        iconRect.top - parentRect.top - iconRect.height * 2
      );
      const curveBottomTop = Math.round(
        iconRect.top - parentRect.top + iconRect.height * 6
      );
      const connectLeftPx = Math.round(connectX - parentRect.left);

      const next = {
        lineHeight,
        connectLeft: connectLeftPx,
        curveLeftTop: Math.round(clampedTop),
        curveLeftBottom: Math.round(clampedBottom),
        curveTop,
        curveBottom: curveBottomTop,
      };

      // shallow compare to avoid redundant state updates
      const changed = Object.keys(next).some(
        (k) => next[k as keyof typeof next] !== prev[k as keyof typeof prev]
      );
      if (changed) {
        setVars(next);
        Object.assign(prev, next);
      }
    };

    const schedule = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(doUpdate);
    };

    // initial and small delayed update (fonts/images)
    schedule();
    timeoutId = window.setTimeout(schedule, 300);

    // watch for window resizes
    const onResize = () => {
      // debounce with rAF — ensures we don't spam
      schedule();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    // If available, use ResizeObserver on the parent for layout changes
    let ro: ResizeObserver | null = null;
    if (containerRef.current && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => schedule());
      ro.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      if (rafId) cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
      if (ro && containerRef.current) ro.unobserve(containerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty deps okay — if you use props inside, add them here

  // Build style object injecting CSS variables (pixel values)
  const cssVars = {
    "--line-height": vars.lineHeight,
    "--connect-left": `${vars.connectLeft}px`,
    "--curve-left-top": `${vars.curveLeftTop}px`,
    "--curve-left-bottom": `${vars.curveLeftBottom}px`,
    "--curve-top": `${vars.curveTop}px`,
    "--curve-bottom": `${vars.curveBottom}px`,
  } as React.CSSProperties;

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

        /* vertical connector: centered on the icon; its left is set by --connect-left px */
        .connecting-line {
          position: absolute;
          left: var(--connect-left); /* px value */
          width: 3px;
          background-color: #eb8145;
          z-index: 1;
          transform: translateX(-50%); /* center the thin line on the value */
        }

        .connecting-line.top {
          top: calc(-1 * var(--line-height) + 6px);
          height: var(--line-height);
        }

        .connecting-line.bottom {
          bottom: calc(-1 * var(--line-height) + 6px);
          height: var(--line-height);
        }

        /* curved SVGs: position left relative to the connecting line by adding the computed delta */
        .curved-line {
          position: absolute;
          left: calc(var(--connect-left) + var(--curve-left-top)); /* px + px */
          top: var(--curve-top); /* px */
          z-index: 1;
          width: clamp(420px, 30vw, 760px);
          height: clamp(180px, 18vw, 360px);
          pointer-events: none;
          transform: translateX(0);
        }

        .bottom-curved-line {
          position: absolute;
          left: calc(var(--connect-left) + var(--curve-left-bottom));
          top: var(--curve-bottom);
          z-index: 1;
          width: clamp(420px, 30vw, 760px);
          height: clamp(180px, 18vw, 360px);
          pointer-events: none;
          transform: translateX(0);
        }

        /* fine tune the path bounding boxes (still responsive) */
        .curved-line svg,
        .bottom-curved-line svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .section-content {
          flex: 1;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
          ${titleMarginLeft ? `margin-left: ${titleMarginLeft};` : ""}
        }

        .section-title {
          font-weight: bold;
          color: #1a1a1a;
          font-family: "Instrument Sans, sans-serif";
          line-height: 1.2;
          font-size: clamp(31px, 4.35vw, 74px);
          margin-bottom: clamp(2px, 0.25vw, 3px);
          margin-top: clamp(3px, 0.5vw, 6px);
          padding-left: clamp(35px, 9vw, 120px);
        }

        .section-title-highlight {
          color: #eb8145;
        }

        .section-subtitle {
          font-size: clamp(14px, 1.305vw, 24px);
          color: #4f4f4f;
          font-family: "Instrument Sans, sans-serif";
          padding-left: clamp(35px, 9vw, 120px);
        }
        @media (max-width: 1520px) {
          .bottom-curved-line {
            display: none !important;
          }
        }
        /* hide decorative connectors on small screens */
        @media (max-width: 1023px) {
          .connecting-line,
          .curved-line,
          .bottom-curved-line {
            display: none;
          }
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
      `}</style>

      <div
        ref={containerRef}
        className="section-header-container"
        style={cssVars}
      >
        <div ref={iconWrapperRef} className="section-icon-wrapper">
          {/* vertical connectors anchored by --connect-left */}
          {!isFirst && <div className="connecting-line top" />}
          <div className="connecting-line bottom" />

          {/* top curved (only for first section) */}
          {isFirst && (
            <div className="curved-line" aria-hidden>
              <svg
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
            </div>
          )}

          {/* bottom curved (only for last section) */}
          {isLast && (
            <div className="bottom-curved-line" aria-hidden>
              <svg
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
                <image
                  href="/dot2.png"
                  x="720"
                  y="170"
                  width="20"
                  height="20"
                />
              </svg>
            </div>
          )}

          <SectionIcon icon={icon} alt={iconAlt} size={iconSize} />
        </div>

        <div className="section-content">
          <h2 ref={titleRef} className="section-title">
            {title}{" "}
            <span className="section-title-highlight">{titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;