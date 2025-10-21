"use client";
import React from 'react';

const OurTeamPage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src="/ourteam_bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
          style={{ minHeight: '100%', minWidth: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4" style={{ color: 'white' }}>
            Our <span style={{ color: '#EB8145' }}>Team</span>
          </h1>
          <p style={{ color: 'white' }} className="text-xs sm:text-sm md:text-base lg:text-lg max-w-4xl mx-auto px-2">
            NF Solutions is powered by a team that blends deep engineering expertise with a relentless focus on client success.
          </p>
        </div>

        {/* Wrapped Container with Images and Text - EXACTLY AS ORIGINAL */}
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          <div style={{ backgroundColor: 'black', padding: '20px 35px', borderRadius: '24px' }}>
            {/* Images Section - 2 Photos - Always in Row - EXACTLY AS ORIGINAL */}
            <div className="flex flex-row mb-6 justify-start items-start team-images-container" style={{ gap: '32px' }}>
              {/* Left Large Image - EXACTLY AS ORIGINAL */}
              <div className="relative bg-gray-700 flex-shrink-0 team-image-left" style={{ width: '800px', height: '240px', overflow: 'hidden', borderRadius: '24px' }}>
                <img
                  src="/ourteam1.png"
                  alt="Engineering team collaboration"
                  className="animate-scale-loop"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Right Small Image - EXACTLY AS ORIGINAL */}
              <div className="relative bg-gray-700 flex-shrink-0 team-image-right" style={{ width: '280px', height: '240px', overflow: 'hidden', borderRadius: '24px' }}>
                <img
                  src="/ourteam2.png"
                  alt="Site inspection"
                  className="animate-scale-loop"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Team Attributes - EXACTLY AS ORIGINAL */}
            <div className="space-y-0">
              {/* Engineer-Led - EXACTLY AS ORIGINAL */}
              <div className="flex flex-row items-start border-t border-gray-600 py-3 team-attribute" style={{ gap: '80px' }}>
                <h3 className="font-bold tracking-wide flex-shrink-0 uppercase team-attribute-title" style={{ color: 'white', fontSize: '14px', width: '280px' }}>
                  ENGINEER-LED AND MANAGED
                </h3>
                <p className="flex-1 team-attribute-text" style={{ color: 'white', fontSize: '14px', lineHeight: '1.6' }}>
                  Our leadership has decades of hands-on experience in machinery, packages, and complex EPC projects.
                </p>
              </div>

              {/* Proven Track Record - EXACTLY AS ORIGINAL */}
              <div className="flex flex-row items-start border-t border-gray-600 py-3 team-attribute" style={{ gap: '80px' }}>
                <h3 className="font-bold tracking-wide flex-shrink-0 uppercase team-attribute-title" style={{ color: 'white', fontSize: '14px', width: '280px' }}>
                  PROVEN GLOBAL TRACK RECORD
                </h3>
                <p className="flex-1 team-attribute-text" style={{ color: 'white', fontSize: '14px', lineHeight: '1.6' }}>
                  We have proven success working alongside major EPC contractors and end-users in key markets like the Middle East, India, and Singapore.
                </p>
              </div>

              {/* Relationship-Focused - EXACTLY AS ORIGINAL */}
              <div className="flex flex-row items-start border-t border-gray-600 py-3 team-attribute" style={{ gap: '80px' }}>
                <h3 className="font-bold tracking-wide flex-shrink-0 uppercase team-attribute-title" style={{ color: 'white', fontSize: '14px', width: '280px' }}>
                  RELATIONSHIP-FOCUSED
                </h3>
                <p className="flex-1 team-attribute-text" style={{ color: 'white', fontSize: '14px', lineHeight: '1.6' }}>
                  We leverage our extensive networks and commercial expertise to build strong, long-term partnerships.
                </p>
              </div>

              {/* Tenacious & Professional - EXACTLY AS ORIGINAL */}
              <div className="flex flex-row items-start border-t border-gray-600 py-3 team-attribute" style={{ gap: '80px' }}>
                <h3 className="font-bold tracking-wide flex-shrink-0 uppercase team-attribute-title" style={{ color: 'white', fontSize: '14px', width: '280px' }}>
                  TENACIOUS & PROFESSIONAL
                </h3>
                <p className="flex-1 team-attribute-text" style={{ color: 'white', fontSize: '14px', lineHeight: '1.6' }}>
                  Our approach is fair, competent, and unwavering. We are determined to achieve the best possible outcome for your business, building relationships founded on trust and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scaleLoop {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-scale-loop {
          animation: scaleLoop 8s ease-in-out infinite;
        }

        /* Mobile and Tablet ONLY - Below 1024px */
        @media (max-width: 1023px) {
          /* Adjust container padding */
          .mx-auto > div {
            padding: 16px !important;
            border-radius: 12px !important;
          }
          
          /* Stack images vertically */
          .team-images-container {
            flex-direction: column !important;
            gap: 16px !important;
          }
          
          /* Make images responsive */
          .team-image-left,
          .team-image-right {
            width: 100% !important;
            height: 200px !important;
            border-radius: 12px !important;
          }
          
          /* Stack text sections vertically */
          .team-attribute {
            flex-direction: column !important;
            gap: 12px !important;
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
          
          /* Make titles full width */
          .team-attribute-title {
            width: 100% !important;
            font-size: 12px !important;
          }
          
          /* Adjust paragraph text */
          .team-attribute-text {
            font-size: 12px !important;
            line-height: 1.5 !important;
          }
        }
        
        /* Tablet specific (640px - 1023px) */
        @media (min-width: 640px) and (max-width: 1023px) {
          .mx-auto > div {
            padding: 20px !important;
          }
          
          .team-image-left,
          .team-image-right {
            height: 220px !important;
          }
          
          .team-attribute-title {
            font-size: 13px !important;
          }
          
          .team-attribute-text {
            font-size: 13px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OurTeamPage;