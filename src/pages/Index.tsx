
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TeamSection from '../components/sections/TeamSection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-primary font-poppins">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-primary border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-white font-poppins font-bold text-xl">Nexora Creations</span>
            </div>
            
            <p className="text-gray-400 text-center">
              © 2024 Nexora Creations. All rights reserved. Empowering Your Digital Future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
