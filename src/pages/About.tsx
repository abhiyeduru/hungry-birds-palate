
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutContent from '@/components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Header />
      <div className="pt-24">
        <AboutContent />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
