
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { initAnimateOnScroll } from '@/lib/animations';

const Index = () => {
  useEffect(() => {
    const cleanup = initAnimateOnScroll();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
