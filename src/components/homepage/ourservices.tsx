"use client";
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const OurServices: React.FC = () => {
  // --- motion variants (typed) ---
  const imageVariant: Variants = {
    hidden: { opacity: 0, scale: 0.98, y: 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { when: 'beforeChildren', staggerChildren: 0.14 }
    }
  };

  const blockVariant: Variants = {
    hidden: { opacity: 0, x: 18 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const headingVariant: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      id="ourservices"
      className=" md:py-36 py-16 mb-[20px] bg-white relative  bg-[url('/ourservice_bg.png')] bg-contain bg-top-right bg-no-repeat"
      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
    >
      <div className="max-w-[2400px] mx-auto px-[10px] md:px-[20px] lg:px-8 ">
        {/* Title */}
        <motion.h2
          className=" font-bold text-center "
          style={{ fontSize: "clamp(31px, 4.35vw, 74px)", marginBottom: "0px" }}
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Our Services & <span className="text-[#EB8145]">Expertise</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center mb-16 md:mb-16 mb-8  mx-auto leading-relaxed "
          style={{ color: '#4F4F4F', fontSize: 'clamp(14px, 1.305vw, 24px)', maxWidth: "80vw" }}
          variants={blockVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.28 }}
        >
          <span className="text-gray-700">NF Solutions</span> provides expert advisory and support services to ensure your success in the global EPC market. We offer {' '}
          <span className="md:inline block"></span>
          <strong className="font-bold text-gray-900">strategic guidance ,hands-on EPC project management, and state-of-the-art technology </strong> through three core offerings:
        </motion.p>

        {/* Content Layout (parent controls stagger for right blocks) */}
        <div className="flex min-[1024px]:flex-row flex-col gap-12 min-[1024px]:gap-24  items-center">
          {/* Left Image */}
          <motion.div
            className="w-[90%]"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="relative w-full h-[460px] xl:h-[500px] 2xl:h-[580px] md:h-[280px]  md:rounded-[40px] rounded-[20px] overflow-hidden shadow-xl ">
              <Image
                src="/ourservices.png"
                alt="Our Services"
                fill
                className="object-cover animate-scale-loop"
                priority
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className=" w-[90%] p-[15px] pr-[18px] md:p-[15px] md:pr-[15px] p-2 pr-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className=" min-[1024px]:p-[20px]  ">
              {/* Consultancy Services */}
              <motion.div variants={blockVariant} className="mb-6">
                <div className="flex flex-row items-center gap-6 md:gap-20 xl:gap-24  mb-2 md:mb-3 ">
                  <div className="flex-shrink-0 ">
                    <div className="w-20 h-20  xl:w-28 xl:h-28 2xl:w-28 2xl:h-28 md:w-16 md:h-16 w-12 h-12 ml-8 md:ml-10 bg-black rounded-full flex items-center justify-center">
                      <Image src="/consultancy.svg" alt="Consultancy" width={40} height={40} className="xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 md:w-8 md:h-8 w-6 h-6" />
                    </div>
                  </div>
                  <h3 className=" font-bold" style={{ fontSize: 'clamp(20px, 1.305vw, 28px)', marginLeft: "10px", marginTop: "0px", marginBottom: "0px" }}>Consultancy Services</h3>
                </div>
                <p className="leading-relaxed" style={{ color: '#4F4F4F', fontSize: 'clamp(14px, 1.305vw, 20px)' }}>
                  As part of our EPC advisory focus, we deliver <strong className="font-bold text-gray-900">tailored advisory</strong> for your specific technical and commercial challenges. Our experts provide <strong className="font-bold text-gray-900">in-depth analysis, strategic planning, and actionable recommendations</strong> to help you navigate complex projects, enter new markets, and optimize your operations.
                </p>
              </motion.div>

              {/* Core Engineering Services */}
              <motion.div variants={blockVariant} className="mb-6">
                <div className="flex flex-row items-center gap-8 md:gap-8  mb-3 md:mb-3 ">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 md:w-16 md:h-16 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Image src="/account.svg" alt="Key Account" width={40} height={40} className="xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 md:w-8 md:h-8 w-6 h-6" />
                    </div>
                  </div>
                  <h3 className=" font-bold" style={{ fontSize: 'clamp(20px, 1.305vw, 28px)', marginLeft: "10px", marginTop: "0px", marginBottom: "0px" }}>Core Engineering Services</h3>
                </div>
                <p className="leading-relaxed " style={{ color: '#4F4F4F', fontSize: 'clamp(14px, 1.305vw, 20px)' }}>
                  We provide highly experienced engineers to act as a <strong className=" text-gray-900">seamless extension of your team</strong>. They can manage the full scope of required activities on your behalf, ensuring project objectives are met with precision and expertise.
                </p>
              </motion.div>

              {/* Digital Solutions */}
              <motion.div variants={blockVariant}>
                <div className="flex flex-row items-center gap-8 md:gap-8  mb-3 md:mb-3 ">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 md:w-16 md:h-16 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Image src="/digital.svg" alt="Key Account" width={40} height={40} className="xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 md:w-8 md:h-8 w-6 h-6" />
                    </div>
                  </div>
                  <h3 className=" font-bold" style={{ fontSize: 'clamp(20px, 1.305vw, 28px)', marginLeft: "10px", marginTop: "0px", marginBottom: "0px" }}>Digital Solutions</h3>
                </div>
                <p className="leading-relaxed " style={{ color: '#4F4F4F', fontSize: 'clamp(14px, 1.305vw, 20px)' }}>
                  We <strong className=" text-gray-900">integrate advanced technologies</strong> and data-driven strategies into your operations. This approach <strong className=" text-gray-900">enhances</strong> project controls, <strong className=" text-gray-900">mitigates risks,</strong> and <strong className=" text-gray-900">empowers your team</strong> with the tools for predictable and <strong className=" text-gray-900">successful project outcomes.</strong>
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>
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
