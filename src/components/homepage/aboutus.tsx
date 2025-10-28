'use client';
 
import { useEffect, useState } from 'react';
import Image from 'next/image';
 
const AboutUs = () => {
 
  return (
    <section
      id="about"
      className="relative bg-white overflow-visible"
      style={{ fontFamily: 'Instrument Sans, sans-serif', paddingTop: '3.68rem', paddingBottom: '5.52rem' }}
    >
      <style jsx>{`
        @keyframes scaleLoop {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        :global(.animate-scale-loop) {
          animation: scaleLoop 8s ease-in-out infinite;
        }
       
        /* Orange container base styles */
        .orange-container {
          position: absolute;
          left: 50%;
          z-index: 20;
        }
       
        @media (max-width: 1023px) {
          .desktop-grid {
            display: flex !important;
            flex-direction: column !important;
          }
          .desktop-padding {
            padding-left: 0.92rem !important;
            padding-right: 0.92rem !important;
          }
          .content-order {
            order: 1 !important;
            padding-left: 0.92rem !important;
            padding-right: 0.92rem !important;
            text-align: center !important;
           
          }
          .image-order {
            order: 2 !important;
            padding-left: 2rem !important;
            padding-right: 0.92rem !important;
            padding-top: 0 !important;
            display: flex !important;
            overflow: visible !important;
          }
          .mobile-title {
            font-size: 1.84rem !important;
            margin-bottom: 1.38rem !important;
            font-family: 'Instrument Sans, sans-serif' !important;
          }
          .mobile-text {
            font-size: 0.805rem !important;
             gap: 0.92rem !important;
            font-family: 'Instrument Sans, sans-serif' !important;
          }
          .mobile-image-container {
            width: 100% !important;
            max-width: 322px !important;
            margin: 0 auto !important;
            display: block !important;
            position: relative !important;
          }
          .mobile-image {
            height: 302px !important;
            border-radius: 18.4px !important;
            width: 100% !important;
            display: block !important;
            position: relative !important;
            overflow: hidden !important;
            z-index: 10 !important;
          }
          .orange-container {
            width: 335px !important;
            height: 110px !important;
            bottom: 0px !important;
            transform: translateX(-50%) !important;
          }
          .mobile-orange-padding {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .mobile-feature-icon {
            width: 2rem !important;
            height: 2rem !important;
            margin-bottom: 0.1rem !important;
            border-radius: 0.6rem !important;
          }
          .mobile-feature-text {
            font-size: 0.6325rem !important;
            font-family: 'Instrument Sans, sans-serif' !important;
          }
          .mobile-feature-items {
            gap: 1rem !important;
          }
          .mobile-arrow-left {
            left: 0.46rem !important;
            bottom: 55.2px !important;
            opacity: 0.5 !important;
            width: 55.2px !important;
            height: 110.4px !important;
          }
          .mobile-arrow-right {
            right: 2.5rem !important;
            bottom: 30.4px !important;
            opacity: 0.5 !important;
            width: 13.8px !important;
            height: 110.4px !important;
          }
        }
       
        @media (min-width: 640px) and (max-width: 1023px) {
          .desktop-padding {
            padding-left: 1.84rem !important;
            padding-right: 1.84rem !important;
          }
          .content-order {
            padding-left: 1.84rem !important;
            padding-right: 1.84rem !important;
          }
          .image-order {
            padding-left: 1.84rem !important;
            padding-right: 1.84rem !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            overflow: visible !important;
          }
          .mobile-title {
            font-size: 4rem !important;
            font-family: 'Instrument Sans, sans-serif' !important;
          }
          .mobile-text {
            font-size: 1rem !important;
            font-family: 'Instrument Sans, sans-serif' !important;
          }
          .mobile-image-container {
            max-width: 348px !important;
            margin: 0 auto !important;
            display: block !important;
            position: relative !important;
            padding-left: 73.6px !important;
          }
          .mobile-image {
            height: 298px !important;
            width: 140% !important;
            display: block !important;
            position: relative !important;
            overflow: hidden !important;
            z-index: 10 !important;
          }
          .orange-container {
            width: 414px !important;
            bottom: -30.4px !important;
            transform: translateX(-50%) !important;
            padding-left: 50px !important;
          }
          .mobile-feature-icon {
            width: 3.22rem !important;
            height: 3.22rem !important;
          }
          .mobile-feature-text {
            font-size: 0.69rem !important;
            font-family: 'Instrument Sans, sans-serif' !important;
          }
          .mobile-feature-items {
            gap: 1.2rem !important;
          }
          .mobile-arrow-left {
            left: 0.69rem !important;
            bottom: 64.4px !important;
            opacity: 0.75 !important;
            width: 73.6px !important;
            height: 147.2px !important;
          }
          .mobile-arrow-right {
            right: 2.5rem !important;
            bottom: 138px !important;
            opacity: 0.65 !important;
            width: 16.56px !important;
            height: 147.2px !important;
          }
        }
 
        @media (min-width: 1024px) {
          .laptop-desktop-width {
            width: 414px !important;
          }
          .laptop-image-offset {
            transform: translateY(6.44px) translateX(30px) !important;
          }
          .orange-container {
            width: 450px !important;
            height: 110.4px !important;
            bottom: calc(-25.76px - 46px) !important;
            transform: translateX(calc(-50% - 60px)) !important;
          }
        }
      `}</style>
 
      <div className="max-w-[1900px] mx-auto px-[14.72px] desktop-padding" style={{ paddingBottom: '3.68rem', overflow: 'visible' }}>
        <div className="grid grid-cols-2 gap-[18.4px] items-start desktop-grid" style={{ overflow: 'visible' }}>
          {/* Left Half - Content */}
          <div className="flex flex-col justify-start pr-[9.2px] pl-[46px] content-order">
            {/* Title */}
            <h2 className="text-[70px] font-bold mb-[40px] text-black mobile-title" style={{ fontFamily: 'Instrument Sans, sans-serif' ,marginTop:0}}>
              About <span className="text-[#EB8145]">Us</span>
            </h2>
 
            {/* Paragraphs */}
            <div className="space-y-[40px] leading-[142%]  text-[20px] mobile-text" style={{  color :'#4F4F4F', fontFamily: 'Instrument Sans, sans-serif' }}>
              <p>
                NF Solutions is a <strong className="font-#4F4F4F font-normal">premier advisory and consulting firm</strong> dedicated to navigating
                the complexities of the <strong className="font-#4F4F4F font-normal">global Engineering, Procurement, and Construction
                (EPC) market</strong>. We are specialists in empowering businesses to achieve
                sustainable international growth through expert guidance and strategic support.
              </p>
 
              <p>
                Our core mission is to provide <strong className="font-#4F4F4F font-normal">comprehensive Technical and Commercial
                support</strong> that bridges borders and creates opportunities. With a deep
                understanding of the challenges and nuances of global expansion, we equip our
                clients with the insights and strategies needed to thrive.
              </p>
 
              <p>
                Operating from our strategic offices in <strong className="font-#4F4F4F font-normal">Singapore, India, and the UAE</strong>, we serve a
                global clientele in an increasingly demanding EPC landscape. Our expertise is
                trusted across a diverse range of critical sectors, including <strong className="font-#4F4F4F font-normal">Oil & Gas, Refining,
                Power, Chemical & Petrochemical, and Renewable Industries</strong>.
              </p>
            </div>
          </div>
 
          {/* Right Half - Image */}
          <div className="relative flex justify-center pr-[46px] image-order">
            <div className="relative w-full max-w-[414px] mobile-image-container laptop-desktop-width laptop-image-offset">
              <div
                className="relative w-full h-[437px] rounded-[27.6px] overflow-hidden shadow-2xl mobile-image"
              >
                <Image
                  src="/aboutus.png"
                  alt="About NF Solutions"
                  width={414}
                  height={437}
                  className="object-cover animate-scale-loop w-full h-full"
                  style={{ borderRadius: '9.2px' }}
                  priority
                />
              </div>
 
              {/* Orange Rectangle with Features */}
              <div className="orange-container">
                <div
                  className="relative px-[14.72px] h-full flex items-center mobile-orange-padding"
                  style={{
                    background: '#EB8145',
                    boxShadow: '0px 3.11px 3.11px 0px #00000040',
                    borderRadius: '13.8px'
                  }}
                >
                  {/* Feature Items */}
                  <div className="flex items-center justify-around w-full mobile-feature-items">
                    {/* Proven Track Record */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-[14.72px] h-[14.72px] mb-[3.68px] bg-white rounded-[18.4px] flex items-center justify-center shadow-md mobile-feature-icon">
                        <Image src="/trackrecord.svg" alt="Track Record" width={29.44} height={29.44} />
                      </div>
                      <span className="text-[12.88px] font-semibold whitespace-nowrap mobile-feature-text" style={{ color: '#FFFFFF', fontFamily: 'Instrument Sans, sans-serif' }}>Proven Track Record</span>
                    </div>
 
                    {/* EPC Market Expertise */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-[14.72px] h-[14.72px] mb-[3.68px] bg-white rounded-[18.4px] flex items-center justify-center shadow-md mobile-feature-icon">
                        <Image src="/expertise.svg" alt="Expertise" width={29.44} height={29.44} />
                      </div>
                      <span className="text-[12.88px] font-semibold whitespace-nowrap mobile-feature-text" style={{ color: '#FFFFFF', fontFamily: 'Instrument Sans, sans-serif' }}>EPC Market Expertise</span>
                    </div>
 
                    {/* Global Operations */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-[14.72px] h-[14.72px] mb-[3.68px] bg-white rounded-[18.4px] flex items-center justify-center shadow-md mobile-feature-icon">
                        <Image src="/operations.svg" alt="Global Operations" width={29.44} height={29.44} />
                      </div>
                      <span className="text-[12.88px] font-semibold whitespace-nowrap mobile-feature-text" style={{ color: '#FFFFFF', fontFamily: 'Instrument Sans, sans-serif' }}>Global Operations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* Decorative Arrows */}
      <div
        className="absolute left-[3.68px] -bottom-[8px] opacity-100 "
      >
        <Image src="/aboutus_leftb.png" alt="Left Arrow" width={142} height={184} />
      </div>
      <div
        className="absolute bottom-[165.6px] opacity-100 mobile-arrow-right"
        style={{ right: '14.72px' }}
      >
        <Image src="/aboutus_rightb.png" alt="Right Arrow" width={65} height={244} />
      </div>
    </section>
  );
};
 
export default AboutUs;