'use client';

import React, { useState, useEffect } from 'react';

const ContactUsPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const locations = [
    {
      country: 'India',
      address: '[Street Address]',
      cityState: '[City, State, PIN Code]',
      countryName: 'India',
      phone: '[Phone Number]',
      email: 'india@nfsolutions.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903857!3d12.953945613398634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890'
    },
    {
      country: 'Singapore',
      address: '[Street Address]',
      cityState: '[City, Postal Code]',
      countryName: 'Singapore',
      phone: '[Phone Number]',
      email: 'singapore@nfsolutions.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036362434!2d103.67943949453125!3d1.3143393999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2ssg!4v1234567890'
    },
    {
      country: 'UAE (Middle East Hub)',
      address: '[Street Address or PO Box]',
      cityState: '[City, Emirate]',
      countryName: 'United Arab Emirates',
      phone: '[Phone Number]',
      email: 'uae@nfsolutions.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828087848!2d54.29778835!3d24.453884399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1234567890'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between max-md:flex-col max-md:space-y-4">
          <div className="flex items-center space-x-3">
            <img src="nflogo1.png" alt="NF Solutions Logo" style={{ height: '54px', width: 'auto' }} />
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">NF Solutions</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-md:text-center" style={{ marginRight: '50px' }}>
            <span className="text-gray-900">Contact </span>
            <span style={{ color: '#EB8145' }}>Us</span>
          </h1>
        </div>
      </header>

      {/* Contact line image */}
      <div className="w-full">
        <img src="contactline.png" alt="Contact line" className="w-full h-auto" />
      </div>

      {/* Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-gray-700 text-base leading-relaxed">
          We are here to help you navigate the complexities of the global EPC market. Whether you have a specific project in mind, a question about our services, 
          or would like to explore a potential partnership, our team of experts is ready to assist you.
        </p>
      </div>

      {/* Location Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-6">
        {locations.map((location, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-row items-start max-[768px]:flex-col">
              {/* Map Section - 70% width with 20px padding on left and right */}
              <div className="relative bg-gray-200 w-[70%] max-[768px]:w-full" style={{ padding: '20px' }}>
                <div className="absolute z-10 bg-white rounded-lg shadow-md p-2" style={{ top: '30px', left: '30px', width: '150px' }}>
                  <img src="contactuscard.png" alt="Contact Us Card" className="w-full h-auto" />
                </div>
                <iframe
                  src={location.mapUrl}
                  className="border-0 rounded max-[768px]:w-full"
                  style={{ height: '220px', width: '70%' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Info Section - 30% width, left aligned */}
              <div className="p-4 sm:p-6 md:p-8 bg-white w-[30%] max-[768px]:w-full" style={{ textAlign: 'left' }}>
                <div className="mb-4">
                  <h2 className="text-lg sm:text-xl font-bold" style={{ color: '#EB8145' }}>{location.country}</h2>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">NF Solutions</h3>
                  </div>
                  
                  <div className="text-sm sm:text-base text-gray-700">
                    <p>{location.address}</p>
                  </div>
                  
                  <div className="text-sm sm:text-base text-gray-700">
                    <p>{location.cityState}</p>
                  </div>
                  
                  <div className="text-sm sm:text-base text-gray-700">
                    <p>{location.countryName}</p>
                  </div>
                  
                  <div className="text-sm sm:text-base text-gray-700">
                    <p><span className="font-semibold">Phone:</span> {location.phone}</p>
                  </div>
                  
                  <div className="text-sm sm:text-base text-gray-700">
                    <p><span className="font-semibold">Email:</span> {location.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="py-4 mt-auto" style={{ backgroundColor: '#EB8145' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white text-sm">© 2025. All Rights Reserved</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          style={{ 
            backgroundColor: '#EB8145',
            bottom: '32px',
            right: '32px',
            width: '64px',
            height: '64px',
            zIndex: 50
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D6713D'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EB8145'}
          aria-label="Scroll to top"
        >
          <img 
            src="arrow.png" 
            alt="Scroll to top" 
            style={{ width: '32px', height: '32px', display: 'block' }}
          />
        </button>
      )}
    </div>
  );
};

export default ContactUsPage;