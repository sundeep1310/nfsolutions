"use client";
import React from 'react';
import Image from 'next/image';

const OurServices: React.FC = () => {
  return (
    <section id="ourservices" className="py-36 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center mb-4">
          Our Services & <span className="text-[#EB8145]">Expertise</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          <span className="text-gray-700">NF Solutions</span> provides expert advisory and support services to ensure your success in the global EPC market. We offer both{' '}<br/>
          <span className="font-bold text-gray-900">strategic guidance and hands-on EPC project management</span> through two core offerings:
        </p>

        {/* Content Layout */}
        <div className="flex flex-row gap-24 items-center">
          {/* Left Image */}
          <div className="w-[50%] p-[15px]">
            <div className="relative w-full h-[320px] xl:h-[400px] 2xl:h-[480px] rounded-[40px] overflow-hidden shadow-xl">
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
          <div className="w-[50%] p-[15px] pr-[18px]">
            <div className="p-[70px] space-y-2">
            {/* Consultancy Services */}
            <div>
              <div className="flex flex-row items-center gap-5 mb-1">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-black rounded-full flex items-center justify-center">
                    <Image src="/consultancy.svg" alt="Consultancy" width={40} height={40} className="xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
                  </div>
                </div>
                <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold">Consultancy Services</h3>
              </div>
              <p className="text-gray-600 leading-relaxed xl:text-lg 2xl:text-xl">
                As part of our EPC advisory focus, we deliver <span className="font-bold text-gray-900">tailored advisory</span> for your specific technical and commercial challenges. Our experts provide <span className="font-bold text-gray-900">in-depth analysis, strategic planning, and actionable recommendations</span> to help you navigate complex projects, enter new markets, and optimize your operations.
              </p>
            </div>

            {/* Key Account Services */}
            <div>
              <div className="flex flex-row items-center gap-5 mb-3">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-black rounded-full flex items-center justify-center">
                    <Image src="/account.svg" alt="Key Account" width={40} height={40} className="xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
                  </div>
                </div>
                <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold">Key Account Services</h3>
              </div>
              <p className="text-gray-600 leading-relaxed xl:text-lg 2xl:text-xl">
                We provide highly experienced engineers to act as a <span className="font-bold text-gray-900">seamless extension of your team</span>. They can manage the full scope of required activities on your behalf, ensuring project objectives are met with precision and expertise.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Arrow - Top Right */}
      <div className="absolute right-8 top-8 z-10">
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