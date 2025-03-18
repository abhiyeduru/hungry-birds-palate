
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationContent from '@/components/Reservation';

const ReservationPage = () => {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Header />
      <div className="pt-24">
        <ReservationContent />
      </div>
      <Footer />
    </div>
  );
};

export default ReservationPage;
