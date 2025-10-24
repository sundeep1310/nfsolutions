import React from 'react';
import HomepageHero from '../components/homepage/homepagehero';
import OurServices from '../components/homepage/ourservices';
import AboutUs from '../components/homepage/aboutus';
import SystemsExpertise from '../components/homepage/systemsexpertise'
import OurTeamPage from '@/components/homepage/ourteam';
import IndustryWeServe from '@/components/homepage/industryweserve';
import Partner from '@/components/homepage/partner';
import ContactUsPage from '@/components/homepage/contact-us';
import Navbar from '@/components/navbar';



export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <HomepageHero />
      <AboutUs />
      <Partner />
      <OurServices />
      <SystemsExpertise />
      <IndustryWeServe />
      <OurTeamPage />
      <ContactUsPage />
      
      {/* Add other sections here */}
    </div>
  );
}

