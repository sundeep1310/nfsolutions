'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offsets
  const imageOffset = scrollY * 0.05;
  const arrowLeftOffset = scrollY * 0.03;
  const arrowRightOffset = scrollY * 0.04;

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
      `}</style>

      <div className="max-w-[1600px] mx-auto px-16" style={{ paddingBottom: '4rem' }}>
        <div className="grid grid-cols-2 gap-20 items-start">
          {/* Left Half - Content */}
          <div className="flex flex-col justify-start pr-10 pl-[50px]">
            {/* Title */}
            <h2 className="text-[60px] font-bold mb-10 text-black">
              About <span className="text-[#EB8145]">Us</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-[16px]">
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
          <div className="relative flex justify-center pr-[50px] pt-[60px]">
            <div className="relative" style={{ width: '450px' }}>
              <div 
                className="relative w-full h-[475px] rounded-[30px] overflow-hidden shadow-2xl transition-transform duration-100 ease-out"
                style={{ transform: `translateY(${imageOffset}px)` }}
              >
                <Image
                  src="/aboutus.png"
                  alt="About NF Solutions"
                  fill
                  className="object-cover animate-scale-loop"
                  style={{ borderRadius: '10px' }}
                />
              </div>

              {/* Orange Rectangle with Features */}
              <div className="absolute left-1/2 z-20" style={{ width: '570px', height: '120px', bottom: 'calc(-28px - 50px)', transform: 'translateX(calc(-50% - 120px))' }}>
                <div 
                  className="relative px-16 h-full flex items-center"
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
                      <div className="w-16 h-16 mb-4 bg-white rounded-2xl flex items-center justify-center shadow-md">
                        <Image src="/trackrecord.svg" alt="Track Record" width={32} height={32} />
                      </div>
                      <span className="text-sm font-semibold whitespace-nowrap" style={{ color: '#FFFFFF' }}>Proven Track Record</span>
                    </div>

                    {/* EPC Market Expertise */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 bg-white rounded-2xl flex items-center justify-center shadow-md">
                        <Image src="/expertise.svg" alt="Expertise" width={32} height={32} />
                      </div>
                      <span className="text-sm font-semibold whitespace-nowrap" style={{ color: '#FFFFFF' }}>EPC Market Expertise</span>
                    </div>

                    {/* Global Operations */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 bg-white rounded-2xl flex items-center justify-center shadow-md">
                        <Image src="/operations.svg" alt="Global Operations" width={32} height={32} />
                      </div>
                      <span className="text-sm font-semibold whitespace-nowrap" style={{ color: '#FFFFFF' }}>Global Operations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Arrows with Parallax */}
      <div 
        className="absolute left-4 bottom-[80px] opacity-200 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${arrowLeftOffset}px)` }}
      >
        <Image src="/aboutus_leftb.png" alt="Left Arrow" width={100} height={200} />
      </div>
      <div 
        className="absolute bottom-[180px] opacity-100 transition-transform duration-100 ease-out"
        style={{ right: '16px', transform: `translateY(${arrowRightOffset}px)` }}
      >
        <Image src="/aboutus_rightb.png" alt="Right Arrow" width={20} height={200} />
      </div>
    </section>
  );
};

export default AboutUs;