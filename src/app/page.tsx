import React from 'react';
import type { Metadata } from 'next';
import HomepageHero from '../components/homepage/homepagehero';
import OurServices from '../components/homepage/ourservices';
import AboutUs from '../components/homepage/aboutus';
import SystemsExpertise from '../components/homepage/systemsexpertise'
import OurTeamPage from '@/components/homepage/ourteam';
import IndustryWeServe from '@/components/homepage/industryweserve';
import Partner from '@/components/homepage/partner';
import ContactUsPage from '@/components/homepage/contact-us';
import Navbar from '@/components/navbar';
import FloatingContacts from '@/components/floatingcontacts';
import Footer from '@/components/digital-solutions/reusable/footer';

export const metadata: Metadata = {
  title: 'NF Solutions | Global EPC Technical and Commercial Advisory',
  description: 'NF Solutions: Expert technical and commercial advisory for the global EPC market. We drive international growth for clients in Oil & Gas, Power, and Renewables.',
};

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <FloatingContacts/>
      <HomepageHero />
      <AboutUs />
      <Partner />
      <OurServices />
      <SystemsExpertise />
      <IndustryWeServe />
      <OurTeamPage />
      <ContactUsPage />
      <Footer/>
      
    </div>
  );
}