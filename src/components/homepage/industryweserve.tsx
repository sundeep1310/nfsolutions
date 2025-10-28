"use client";
import React from 'react';
import Image from 'next/image';
 
const IndustryWeServe: React.FC = () => {
  const industryItems = [
    'Oil & Gas',
    'Refining',
    'Power Generation',
    'Chemical & Petrochemical',
    'Renewable Industries'
  ];
 
  return (
    <section className="relative w-full bg-white" style={{ minHeight: '50vw', paddingTop: '4vw', paddingBottom: '4vw', paddingRight: 'calc(2vw + 10px)', fontFamily: 'Instrument Sans, sans-serif' }}>
      {/* Container with rounded corners */}
      <div className="relative mx-[20px]" style={{  height: '50vw', borderRadius: '2.5vw', overflow: 'hidden' }}>
        {/* Background Image with Scale Animation */}
        <div className="absolute inset-0 w-full h-full animate-scale-in-out">
          <Image
            src="/industry_bg.png"
            alt="Industry Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
 
        {/* Content Container */}
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="flex w-full items-center justify-center h-full">
            {/* Black Box - Right positioned */}
            <div
              className="bg-black flex flex-col justify-between"
              style={{
                backgroundColor: '#2a2a2a',
                width: '32.625vw',
                height: '38.5625vw',
                transform: 'translateX(calc(15vw + 100px))',
                borderRadius: '1.6875vw',
                padding: '2.25vw'
              }}
            >
              {/* Text Container with padding */}
              <div style={{ padding: '1.6875vw' }}>
                {/* Title */}
                <h2 className="font-bold leading-tight" style={{ color: '#ffffff', fontSize: "clamp(18px, 4vw, 70px)" }}>
                  Industries We<br />Serve
                </h2>
 
                {/* Description */}
                <p className="leading-relaxed" style={{ color: '#dbd6d6ff', fontSize: 'clamp(12px, 1.305vw, 20px)', marginTop: '1.35vw' }}>
                  We apply our <span className="font-bold">specialized expertise</span> to projects in the world&apos;s most demanding sectors:
                </p>
 
                {/* Industry List */}
                <div className="flex flex-col justify-between" style={{ marginTop: '2vw', height: '15.75vw' }}>
                  {industryItems.map((item, index) => (
                    <div key={index} className="flex items-center" style={{ gap: '0.675vw' }}>
                      {/* SVG icon without orange container */}
                      <Image
                        src={`/industryweserve${index + 1}.svg`}
                        alt={item}
                        width={48}
                        height={48}
                        className="object-contain flex-shrink-0"
                        style={{
                          width: '2.5vw',
                          height: '2.5vw'
                        }}
                      />
                      <span className="font-medium" style={{ color: '#ffffff', fontSize: 'clamp(14px, 1.305vw, 24px)', }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* Left Bottom - Arrow Decoration */}
        <div className="absolute z-20" style={{ bottom: '2vw', left: '2vw' }}>
          <Image
            src="/arrow_leftb.png"
            alt="Arrow decoration"
            width={80}
            height={110}
            className="object-contain opacity-80"
            style={{
              width: '2vw',
              height: 'auto'
            }}
          />
        </div>
      </div>
 
      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes scale-in-out {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
 
        .animate-scale-in-out {
          animation: scale-in-out 20s ease infinite;
        }
 
        /* 2xl screens and larger - reduce image width by 10% */
        @media (min-width: 1536px) {
          section > div {
            max-width: 99.2% !important;
          }
         
          section > div > div:nth-child(2) > div > div {
            transform: translateX(calc(15vw + 85px)) !important;
          }
        }
 
        /* Mobile and Tablet responsive adjustments only */
        @media (max-width: 1024px) {
          section {
            min-height: 65vw !important;
          }
         
          section > div {
            max-width: 95% !important;
            height: 75vw !important;
            border-radius: 4vw !important;
            padding: 0 18px !important;
          }
         
          section > div > div:nth-child(1) {
            left: 18px !important;
            right: 18px !important;
            width: calc(100% - 36px) !important;
          }
         
          section > div > div:nth-child(2) > div > div {
            width: 60vw !important;
            height: 50vw !important;
            transform: translateX(0) !important;
            border-radius: 3vw !important;
            padding: 3vw !important;
            margin: 7.5vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div {
            padding: 2vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div h2 {
            font-size: 4.5vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div p {
            font-size: 2.2vw !important;
            margin-top: 2vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div > div:last-child {
            margin-top: 4vw !important;
            height: 22vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div > div:last-child > div {
            gap: 1.5vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div > div:last-child > div img {
            width: 3.3vw !important;
            height: 3.3vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div > div:last-child > div span {
            font-size: 1.8vw !important;
          }
         
          section > div > div:nth-child(3) {
            bottom: 3vw !important;
            left: 3vw !important;
          }
         
          section > div > div:nth-child(3) img {
            width: 4vw !important;
          }
        }
 
        @media (max-width: 768px) {
          section {
         
            min-height: 120vw !important;
          }
         
          section > div {
            max-width: 95% !important;
            height: 120vw !important;
            border-radius: 8vw !important;
          }
         
          section > div > div:nth-child(1) {
            left: 18px !important;
            right: 18px !important;
            width: calc(100% - 36px) !important;
          }
         
          section > div > div:nth-child(2) > div > div {
            width: 70vw !important;
            height: 85vw !important;
            transform: translateX(0) !important;
            border-radius: 8vw !important;
            padding: 4vw !important;
            margin: 12.5vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div {
            padding: 3vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div h2 {
            font-size: 6vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div p {
            font-size: 3vw !important;
            margin-top: 3vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div > div:last-child {
            margin-top: 5vw !important;
            height: 25vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div > div:last-child > div {
            gap: 2vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div > div:last-child > div img {
            width: 3.96vw !important;
            height: 3.96vw !important;
          }
         
          section > div > div:nth-child(2) > div > div > div > div:last-child > div span {
            font-size: 2.5vw !important;
          }
         
          section > div > div:nth-child(3) {
            bottom: 4vw !important;
            left: 4vw !important;
          }
         
          section > div > div:nth-child(3) img {
            width: 6vw !important;
          }
        }
      `}</style>
    </section>
  );
};
 
export default IndustryWeServe;