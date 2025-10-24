'use client';

import React from 'react';
import DigitalSolutionsHero from './DigitalSolutionsHero';
import OurApproach from './OurApproach';
import AIMLSection from './AIMLSection';
import DigitalEngineeringSection from './DigitalEngineeringSection';
import DataEngineeringSection from './DataEngineeringSection';
import UXCXSection from './UXCXSection';
import CloudInfrastructureSection from './CloudInfrastructureSection';
import DigitalSolutionsCTA from './DigitalSolutionsCTA';

const DigitalSolutions: React.FC = () => {
  return (
    <>
      <style jsx global>{`
        .digital-solutions-container {
          width: 100%;
          font-family: 'Instrument Sans, sans-serif';
          overflow-x: hidden;
        }
        
        /* Global responsive adjustments */
        @media (max-width: 768px) {
          .digital-solutions-container {
            font-size: 14px;
          }
        }
        
        @media (max-width: 480px) {
          .digital-solutions-container {
            font-size: 13px;
          }
        }
      `}</style>
      
      <div className="digital-solutions-container">
        {/* Hero Section */}
        <DigitalSolutionsHero />

        {/* Our Approach Section */}
        <OurApproach />

        {/* AI & ML Section */}
        <AIMLSection />

        {/* Digital Engineering Section */}
        <DigitalEngineeringSection />

        {/* Data Engineering & Analytics Section */}
        <DataEngineeringSection />

        {/* UX/CX Transformation Section */}
        <UXCXSection />

        {/* Cloud & Infrastructure Section */}
        <CloudInfrastructureSection />

        {/* Final CTA Section */}
        <DigitalSolutionsCTA />
      </div>
    </>
  );
};

export default DigitalSolutions;