'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const AboutUs = () => {

  return (
    <section 
      id="about" 
      className="relative bg-white overflow-visible"
      style={{ fontFamily: 'Instrument Sans, sans-serif', paddingTop: '4rem', paddingBottom: '6rem' }}
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
            gap: 2rem !important;
          }
          .desktop-padding {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .content-order {
            order: 1 !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            text-align: center !important;
            margin-bottom: 2rem !important;
          }
          .image-order {
            order: 2 !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 0 !important;
            display: flex !important;
            overflow: visible !important;
          }
          .mobile-title {
            font-size: 2rem !important;
            margin-bottom: 1.5rem !important;
          }
          .mobile-text {
            font-size: 0.875rem !important;
            gap: 1rem !important;
          }
          .mobile-image-container {
            width: 100% !important;
            max-width: 350px !important;
            margin: 0 auto !important;
            display: block !important;
            position: relative !important;
          }
          .mobile-image {
            height: 350px !important;
            border-radius: 20px !important;
            width: 100% !important;
            display: block !important;
            position: relative !important;
            overflow: hidden !important;
            z-index: 10 !important;
          }
          .orange-container {
            width: 298px !important;
            height: 100px !important;
            bottom: -60px !important;
            transform: translateX(-50%) !important;
          }
          .mobile-orange-padding {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .mobile-feature-icon {
            width: 3rem !important;
            height: 3rem !important;
            margin-bottom: 0.75rem !important;
            border-radius: 0.75rem !important;
          }
          .mobile-feature-text {
            font-size: 0.6875rem !important;
          }
          .mobile-arrow-left {
            left: 0.5rem !important;
            bottom: 60px !important;
            opacity: 0.5 !important;
            width: 60px !important;
            height: 120px !important;
          }
          .mobile-arrow-right {
            right: 0.5rem !important;
            bottom: 120px !important;
            opacity: 0.5 !important;
            width: 15px !important;
            height: 120px !important;
          }
        }
        
        @media (min-width: 640px) and (max-width: 1023px) {
          .desktop-padding {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
          .content-order {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
          .image-order {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            overflow: visible !important;
          }
          .mobile-title {
            font-size: 2.5rem !important;
          }
          .mobile-text {
            font-size: 0.9375rem !important;
          }
          .mobile-image-container {
            max-width: 400px !important;
            margin: 0 auto !important;
            display: block !important;
            position: relative !important;
            padding-left: 80px !important;
          }
          .mobile-image {
            height: 400px !important;
            width: 100% !important;
            display: block !important;
            position: relative !important;
            overflow: hidden !important;
            z-index: 10 !important;
          }
          .orange-container {
            width: 450px !important;
            bottom: -70px !important;
            transform: translateX(-50%) !important;
            padding-left: 80px !important;
          }
          .mobile-feature-icon {
            width: 3.5rem !important;
            height: 3.5rem !important;
          }
          .mobile-feature-text {
            font-size: 0.75rem !important;
          }
          .mobile-arrow-left {
            left: 0.75rem !important;
            bottom: 70px !important;
            opacity: 0.75 !important;
            width: 80px !important;
            height: 160px !important;
          }
          .mobile-arrow-right {
            right: 0.75rem !important;
            bottom: 150px !important;
            opacity: 0.65 !important;
            width: 18px !important;
            height: 160px !important;
          }
        }

        @media (min-width: 1024px) {
          .laptop-desktop-width {
            width: 450px !important;
          }
          .laptop-image-offset {
            transform: translateY(7px) !important;
          }
          .orange-container {
            width: 570px !important;
            height: 120px !important;
            bottom: calc(-28px - 50px) !important;
            transform: translateX(calc(-50% - 120px)) !important;
          }
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto px-16 desktop-padding" style={{ paddingBottom: '4rem', overflow: 'visible' }}>
        <div className="grid grid-cols-2 gap-20 items-start desktop-grid" style={{ overflow: 'visible' }}>
          {/* Left Half - Content */}
          <div className="flex flex-col justify-start pr-10 pl-[50px] content-order">
            {/* Title */}
            <h2 className="text-[60px] font-bold mb-10 text-black mobile-title">
              About <span className="text-[#EB8145]">Us</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-[16px] mobile-text">
              <p>
                NF Solutions is a <strong className="text-gray-700 font-normal">premier advisory and consulting firm</strong> dedicated to navigating
                the complexities of the <strong className="text-gray-700 font-normal">global Engineering, Procurement, and Construction
                (EPC) market</strong>. We are specialists in empowering businesses to achieve
                sustainable international growth through expert guidance and strategic support.
              </p>

              <p>
                Our core mission is to provide <strong className="text-gray-700 font-normal">comprehensive Technical and Commercial
                support</strong> that bridges borders and creates opportunities. With a deep
                understanding of the challenges and nuances of global expansion, we equip our
                clients with the insights and strategies needed to thrive.
              </p>

              <p>
                Operating from our strategic offices in <strong className="text-gray-700 font-normal">Singapore, India, and the UAE</strong>, we serve a
                global clientele in an increasingly demanding EPC landscape. Our expertise is
                trusted across a diverse range of critical sectors, including <strong className="text-gray-700 font-normal">Oil & Gas, Refining,
                Power, Chemical & Petrochemical, and Renewable Industries</strong>.
              </p>
            </div>
          </div>

          {/* Right Half - Image */}
          <div className="relative flex justify-center pr-[50px] pt-[60px] image-order">
            <div className="relative w-full max-w-[450px] mobile-image-container laptop-desktop-width laptop-image-offset">
              <div 
                className="relative w-full h-[475px] rounded-[30px] overflow-hidden shadow-2xl mobile-image"
              >
                <Image
                  src="/aboutus.png"
                  alt="About NF Solutions"
                  width={450}
                  height={475}
                  className="object-cover animate-scale-loop w-full h-full"
                  style={{ borderRadius: '10px' }}
                  priority
                />
              </div>

              {/* Orange Rectangle with Features */}
              <div className="orange-container">
                <div 
                  className="relative px-16 h-full flex items-center mobile-orange-padding"
                  style={{
                    background: '#EB8145',
                    boxShadow: '0px 3.38px 3.38px 0px #00000040',
                    borderRadius: '15px'
                  }}
                >
                  {/* Feature Items */}
                  <div className="flex items-center justify-around w-full">
                    {/* Proven Track Record */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 bg-white rounded-2xl flex items-center justify-center shadow-md mobile-feature-icon">
                        <Image src="/trackrecord.svg" alt="Track Record" width={32} height={32} />
                      </div>
                      <span className="text-sm font-semibold whitespace-nowrap mobile-feature-text" style={{ color: '#FFFFFF' }}>Proven Track Record</span>
                    </div>

                    {/* EPC Market Expertise */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 bg-white rounded-2xl flex items-center justify-center shadow-md mobile-feature-icon">
                        <Image src="/expertise.svg" alt="Expertise" width={32} height={32} />
                      </div>
                      <span className="text-sm font-semibold whitespace-nowrap mobile-feature-text" style={{ color: '#FFFFFF' }}>EPC Market Expertise</span>
                    </div>

                    {/* Global Operations */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 bg-white rounded-2xl flex items-center justify-center shadow-md mobile-feature-icon">
                        <Image src="/operations.svg" alt="Global Operations" width={32} height={32} />
                      </div>
                      <span className="text-sm font-semibold whitespace-nowrap mobile-feature-text" style={{ color: '#FFFFFF' }}>Global Operations</span>
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
        className="absolute left-4 bottom-[80px] opacity-100 mobile-arrow-left"
      >
        <Image src="/aboutus_leftb.png" alt="Left Arrow" width={100} height={200} />
      </div>
      <div 
        className="absolute bottom-[180px] opacity-100 mobile-arrow-right"
        style={{ right: '16px' }}
      >
        <Image src="/aboutus_rightb.png" alt="Right Arrow" width={20} height={200} />
      </div>
    </section>
  );
};

export default AboutUs;