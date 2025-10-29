"use client";
import React from 'react';

const OurTeamPage = () => {
  return (
    <section
    id="team" 
    className="relative  bg-black text-white overflow-hidden bg-[url('/ourteam_bg.png')] bg-cover bg-top-left bg-no-repeat"
    >
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src="/ourteam_bg.png"
          alt="Background"
          className="w-full h-full object-fill opacity-100"
          style={{ minHeight: '100%', minWidth: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 ">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="  font-bold " style={{ color: 'white', fontSize: "clamp(18px, 4vw, 70px)", marginBottom:"0px" }}>
            Our <span style={{ color: '#EB8145' }}>Team</span>
          </h1>
          <p style={{ color: 'white',fontSize: 'clamp(12px, 1.305vw, 20px)' , marginBottom:"0px" ,maxWidth:"80vw"}} className=" mx-auto px-2  ">
            NF Solutions is powered by a team that blends deep engineering expertise with a relentless focus on client success.
          </p>
        </div>

        {/* Wrapped Container with Images and Text */}
        <div className="mx-auto team-container">
          <div className="team-inner-container" style={{ backgroundColor: 'black', padding: '20px 35px', borderRadius: '24px' }}>
            {/* Images Section */}
            <div className="flex flex-row mb-6 justify-start items-start team-images-container" style={{ gap: '32px' }}>
              {/* Left Large Image */}
              <div className="relative bg-gray-700 flex-shrink-0 team-image-left" style={{ width: '800px', height: '240px', overflow: 'hidden', borderRadius: '24px' }}>
                <img
                  src="/ourteam1.png"
                  alt="Engineering team collaboration"
                  className="animate-scale-loop"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Right Small Image */}
              <div className="relative bg-gray-700 flex-shrink-0 team-image-right" style={{ width: '280px', height: '240px', overflow: 'hidden', borderRadius: '24px' }}>
                <img
                  src="/ourteam2.png"
                  alt="Site inspection"
                  className="animate-scale-loop"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Team Attributes  */}
            <div className="space-y-0">

  {/* Tenacious & Professional  */}
              <div className="flex flex-row items-start border-b border-[#ffffff] py-3 team-attribute" style={{ gap: '80px' }}>
                <h3 className="font-[500px] tracking-wide flex-shrink-0 uppercase " style={{ color: 'white',fontSize: 'clamp(14px, 1vw, 24px)', width: '320px' }}>
                  Engineer-Led and Managed
                </h3>
                <p className="flex-1 " style={{ color: 'white',fontSize: 'clamp(12px, 1vw, 20px)', lineHeight: '1.6' }}>
                Our leadership has decades of hands-on experience in machinery, packages, and complex EPC projects.
                </p>
              </div>
              <div className="flex flex-row items-start border-b border-[#ffffff] py-3 team-attribute" style={{ gap: '80px' }}>
                <h3 className="font-[500px] tracking-wide flex-shrink-0 uppercase team-attribute-title" style={{ color: 'white',fontSize: 'clamp(14px, 1vw, 24px)', width: '320px' }}>
                  Proven Global Track Record
                </h3>
                <p className="flex-1 " style={{ color: 'white',fontSize: 'clamp(12px, 1vw, 20px)', lineHeight: '1.6' }}>
                  We have proven success working alongside major EPC contractors and end-users in key markets like the Middle East, India, and Singapore.
                </p>
              </div>
              <div className="flex flex-row items-start border-b border-[#ffffff] py-3 team-attribute" style={{ gap: '80px' }}>
                <h3 className="font-[500px] tracking-wide flex-shrink-0 uppercase team-attribute-title" style={{ color: 'white', fontSize: 'clamp(14px, 1vw, 24px)', width: '320px' }}>
                Relationship-Focused
                </h3>
                <p className="flex-1 " style={{ color: 'white', fontSize: 'clamp(12px, 1vw, 20px)', lineHeight: '1.6' }}>
             We leverage our extensive networks and commercial expertise to build strong, long-term partnerships.
                </p>
              </div>
              <div className="flex flex-row items-start  py-3 team-attribute" style={{ gap: '80px' }}>
                <h3 className="font-[500px] tracking-wide flex-shrink-0 uppercase team-attribute-title" style={{ color: 'white', fontSize: 'clamp(14px, 1vw, 24px)', width: '320px' }}>
                  TENACIOUS & PROFESSIONAL
                </h3>
                <p className="flex-1 " style={{ color: 'white',fontSize: 'clamp(12px, 1vw, 20px)', lineHeight: '1.6' }}>
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
/* Default (for mobile ≤1023px) */
    #team {
      background-size: contain;
      background-position: top left;
    }

    /* For tablets and larger (≥1024px) */
    @media (min-width: 1024px) {
      #team {
        background-size: cover;
        background-position: top left;
      }
    }
        /* Default max-width for all screens */
        .team-container {
          max-width: 1200px;
        }

        /* Style for team attributes with bottom line */
        .team-attribute-with-bottom-line {
          border-bottom: 1px solid white;
          padding-bottom: 8px;
          width: fit-content;
        }

        /* Laptop screens only - 1024px to 1535px */
        @media (min-width: 1024px) and (max-width: 1535px) {

          .team-container {
            margin-bottom: 50px;
          }
        }

        /* 2XL screens and above - Bigger container */
        @media (min-width: 1536px) {
          #team {
            display: flex;
            align-items: stretch;
          }

          .main-content-wrapper {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 20px !important;
          }

          .team-container {
            max-width: 1700px;
            margin-right: 10px;
            margin-bottom: 50px;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          
          .team-inner-container {
            padding: 40px 60px 60px 60px !important;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          
          .team-image-left {
            width: 950px !important;
            height: 300px !important;
          }
          
          .team-image-right {
            width: 350px !important;
            height: 300px !important;
          }
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
    </section>
  );
};

export default OurTeamPage;