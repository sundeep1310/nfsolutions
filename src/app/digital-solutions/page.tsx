import React from 'react';
import Navbar from '@/components/digital-solutions/reusable/navbar';
import DigitalSolutionsHero from '@/components/digital-solutions/DigitalSolutionsHero';
import OurApproach from '@/components/digital-solutions/OurApproach';
import AIMLSection from '@/components/digital-solutions/AIMLSection';
import DigitalEngineeringSection from '@/components/digital-solutions/DigitalEngineeringSection';
import DataEngineeringSection from '@/components/digital-solutions/DataEngineeringSection';
import UXCXSection from '@/components/digital-solutions/UXCXSection';
import CloudInfrastructureSection from '@/components/digital-solutions/CloudInfrastructureSection';
import DigitalSolutionsCTA from '@/components/digital-solutions/DigitalSolutionsCTA';
import Footer from '@/components/digital-solutions/reusable/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NF Solutions | Digital Transformation Services | Cloud, AI & Data',
  description: 'We offer expert digital engineering, cloud, data, and AI solutions to help enterprises build modern platforms, enhance customer experiences, and accelerate growth.',
};

export default function DigitalSolutionsPage() {
  return (
    <div>
      <Navbar />
      <DigitalSolutionsHero />
      <OurApproach />
      <AIMLSection  />
      <DigitalEngineeringSection/>
      <DataEngineeringSection />
      <UXCXSection />
      <CloudInfrastructureSection />
      <DigitalSolutionsCTA />
      <Footer/>
    </div>
  );
}