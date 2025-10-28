"use client";
import React from 'react';
import Image from 'next/image';
 
const OurServices: React.FC = () => {
  return (
    <section id="ourservices" className=" md:py-36 py-16 mb-[20px] bg-white relative  bg-[url('/ourservice_bg.png')] bg-contain bg-top-right bg-no-repeat" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
      <div className="max-w-[2400px] mx-auto px-[10px] md:px-[20px] lg:px-8 ">
 
        {/* Title */}
        <h2 className=" font-bold text-center "style={{ fontSize: "clamp(31px, 4.35vw, 74px)",marginBottom:"0px" }}>
          Our Services & <span className="text-[#EB8145]">Expertise</span>
        </h2>
       
        {/* Subtitle */}
        <p className="text-center mb-16 md:mb-16 mb-8 max-w-3xl mx-auto leading-relaxed " style={{ color: '#4F4F4F', fontSize: 'clamp(14px, 1.305vw, 24px)' }}>
          <span className="text-gray-700">NF Solutions</span> provides expert advisory and support services to ensure your success in the global EPC market. We offer both{' '}
          <span className="md:inline block"></span>
          <strong className="font-bold text-gray-900">strategic guidance and hands-on EPC project management</strong> through two core offerings:
        </p>
 
        {/* Content Layout */}
        <div className="flex min-[1024px]:flex-row flex-col gap-12 min-[1024px]:gap-24  items-center">
          {/* Left Image */}
          <div className="w-[90%] ">
            <div className="relative w-full h-[320px] xl:h-[400px] 2xl:h-[480px] md:h-[280px]  md:rounded-[40px] rounded-[20px] overflow-hidden shadow-xl ">
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
          <div className=" w-[90%] p-[15px] pr-[18px] md:p-[15px] md:pr-[15px] p-2 pr-2">
            <div className=" min-[1024px]:p-[20px]  ">
            {/* Consultancy Services */}
            <div>
              <div className="flex flex-row items-center gap-6 md:gap-20 xl:gap-24  mb-2 md:mb-3 ">
                <div className="flex-shrink-0 ">
                  <div className="w-20 h-20  xl:w-28 xl:h-28 2xl:w-28 2xl:h-28 md:w-16 md:h-16 w-12 h-12 ml-8 md:ml-10 bg-black rounded-full flex items-center justify-center">
                    <Image src="/consultancy.svg" alt="Consultancy" width={40} height={40} className="xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 md:w-8 md:h-8 w-6 h-6" />
                  </div>
                </div>
                <h3 className=" font-bold" style={{ fontSize: 'clamp(20px, 1.305vw, 28px)' ,marginLeft:"10px",marginTop:"0px",marginBottom:"0px"  }}>Consultancy Services</h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#4F4F4F', fontSize: 'clamp(14px, 1.305vw, 20px)' }}>
                As part of our EPC advisory focus, we deliver <span className="font-bold text-gray-900">tailored advisory</span> for your specific technical and commercial challenges. Our experts provide <strong className="font-bold text-gray-900">in-depth analysis, strategic planning, and actionable recommendations</strong> to help you navigate complex projects, enter new markets, and optimize your operations.
              </p>
            </div>
 
            {/* Key Account Services */}
            <div>
              <div className="flex flex-row items-center gap-8 md:gap-8  mb-3 md:mb-3 ">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 md:w-16 md:h-16 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Image src="/account.svg" alt="Key Account" width={40} height={40} className="xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 md:w-8 md:h-8 w-6 h-6" />
                  </div>
                </div>
                <h3 className=" font-bold" style={{ fontSize: 'clamp(20px, 1vw, 28px)' ,marginLeft:"10px",marginTop:"0px",marginBottom:"0px" }}>Key Account Services</h3>
              </div>
              <p className="leading-relaxed " style={{ color: '#4F4F4F',fontSize: 'clamp(14px, 1.305vw, 20px)'  }}>
                We provide highly experienced engineers to act as a <strong className=" text-gray-900">seamless extension of your team</strong>. They can manage the full scope of required activities on your behalf, ensuring project objectives are met with precision and expertise.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
 {/* Decorative Arrow - Top Right */}
{/* <div className="pointer-events-none relative -bottom-3 -left-3  z-[9999]">
  <Image
    src="/arrowrightt.png"
    alt=""
    width={108}
    height={108}
    className="opacity-100"
    priority
  />
</div> */}
 
 
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