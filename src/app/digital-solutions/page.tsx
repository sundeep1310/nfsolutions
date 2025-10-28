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
  title: 'Digital Solutions | NF Solutions',
  description: 'Transform your business with cutting-edge AI, cloud, data engineering, and digital transformation solutions. Partner with NF Solutions for enterprise-grade platforms.',
  keywords: 'digital transformation, AI solutions, cloud migration, data engineering, UX design, enterprise platforms, machine learning, cloud infrastructure',
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