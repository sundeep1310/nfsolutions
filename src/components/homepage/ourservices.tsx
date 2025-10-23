"use client";
import React from 'react';
import Image from 'next/image';

const OurServices: React.FC = () => {
  return (
    <section id="ourservices" className="py-36 md:py-36 py-16 bg-white relative overflow-hidden" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
      <div className="max-w-[1400px] mx-auto px-[10px] md:px-[20px] lg:px-8">

        {/* Title */}
        <h2 className="text-[60px] md:text-[52px] xl:text-[67px] 2xl:text-[82px] sm:text-[45px] text-[37px] font-bold text-center mb-4">
          Our Services & <span className="text-[#EB8145]">Expertise</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-center mb-16 md:mb-16 mb-8 max-w-3xl mx-auto leading-relaxed md:text-base text-sm" style={{ color: '#4F4F4F' }}>
          <span className="text-gray-700">NF Solutions</span> provides expert advisory and support services to ensure your success in the global EPC market. We offer both{' '}
          <span className="md:inline block"></span>
          <span className="font-bold text-gray-900">strategic guidance and hands-on EPC project management</span> through two core offerings:
        </p>

        {/* Content Layout */}
        <div className="flex min-[1024px]:flex-row flex-col gap-24 min-[1024px]:gap-24 md:gap-12 gap-8 items-center">
          {/* Left Image */}
          <div className="w-[50%] min-[1024px]:w-[50%] md:w-full w-full p-[15px] max-[1023px]:pr-[25px] md:p-[15px] p-2">
            <div className="relative w-full h-[320px] xl:h-[400px] 2xl:h-[480px] md:h-[280px] h-[240px] rounded-[40px] md:rounded-[40px] rounded-[20px] overflow-hidden shadow-xl">
              <Image
                src="/ourservices.png"
                alt="Our Services"
                fill
                className="object-cover animate-scale-loop"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-[50%] min-[1024px]:w-[50%] md:w-full w-full p-[15px] pr-[18px] md:p-[15px] md:pr-[15px] p-2 pr-2">
            <div className="p-[70px] min-[1024px]:p-[70px] md:p-8 p-4 space-y-2 md:space-y-6 space-y-4">
            {/* Consultancy Services */}
            <div>
              <div className="flex flex-row items-center gap-8 md:gap-8 gap-6 mb-1 md:mb-3 mb-2">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 md:w-16 md:h-16 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Image src="/consultancy.svg" alt="Consultancy" width={40} height={40} className="xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 md:w-8 md:h-8 w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl xl:text-3xl 2xl:text-4xl md:text-xl text-lg font-bold">Consultancy Services</h3>
              </div>
              <p className="leading-relaxed xl:text-lg 2xl:text-xl md:text-base text-sm" style={{ color: '#4F4F4F' }}>
                As part of our EPC advisory focus, we deliver <span className="font-bold text-gray-900">tailored advisory</span> for your specific technical and commercial challenges. Our experts provide <span className="font-bold text-gray-900">in-depth analysis, strategic planning, and actionable recommendations</span> to help you navigate complex projects, enter new markets, and optimize your operations.
              </p>
            </div>

            {/* Key Account Services */}
            <div>
              <div className="flex flex-row items-center gap-8 md:gap-8 gap-6 mb-3 md:mb-3 mb-2">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 md:w-16 md:h-16 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Image src="/account.svg" alt="Key Account" width={40} height={40} className="xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 md:w-8 md:h-8 w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl xl:text-3xl 2xl:text-4xl md:text-xl text-lg font-bold">Key Account Services</h3>
              </div>
              <p className="leading-relaxed xl:text-lg 2xl:text-xl md:text-base text-sm" style={{ color: '#4F4F4F' }}>
                We provide highly experienced engineers to act as a <span className="font-bold text-gray-900">seamless extension of your team</span>. They can manage the full scope of required activities on your behalf, ensuring project objectives are met with precision and expertise.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Arrow - Top Right */}
      <div className="absolute right-8 top-8 z-10 min-[1024px]:block md:hidden hidden">
        <Image
          src="/arrowrightt.png"
          alt=""
          width={108}
          height={108}
          className="opacity-100"
        />
      </div>

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
      `}</style>
    </section>
  );
};

export default OurServices;