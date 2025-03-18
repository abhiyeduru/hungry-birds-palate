
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuContent from '@/components/Menu';
import { initAnimateOnScroll } from '@/lib/animations';

const MenuPage = () => {
  useEffect(() => {
    const cleanup = initAnimateOnScroll();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Header />
      <div className="pt-24">
        <MenuContent />
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
