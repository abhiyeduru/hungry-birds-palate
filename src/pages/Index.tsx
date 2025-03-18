
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';
import { initAnimations } from '@/lib/animations';
import TestimonialCard from '@/components/TestimonialCard';

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: "Michael Thompson",
    rating: 5,
    date: "March 15, 2023",
    text: "The finest dining experience I've had in years! The Butter Chicken was absolutely divine, and the service was impeccable. I'll definitely be coming back with my family and friends.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: "/testimonial1.jpg",
    rating: 5,
    date: "February 28, 2023",
    text: "Hungry Birds exceeded all my expectations. From the moment we walked in, the atmosphere was inviting and elegant. The Grilled Lamb Chops were cooked to perfection!",
  },
  {
    id: 3,
    name: "Robert Davis",
    rating: 4,
    date: "April 10, 2023",
    text: "Celebrated my anniversary here and it was a night to remember. The food was exceptional, especially the seafood platter. Highly recommended for any special occasion.",
  },
];

const Index = () => {
  useEffect(() => {
    // Initialize animations when component mounts
    initAnimations();

    // Re-run animations when window is resized
    const handleResize = () => {
      initAnimations();
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Header />
      <Hero />
      <About />
      
      {/* Featured section */}
      <section className="section-padding bg-dark-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12 animate-on-scroll">
            <h2 className="section-title">
              What Our <span className="text-gold">Guests Say</span>
            </h2>
            <p className="section-subtitle">
              Don't take our word for it – here's what our satisfied guests have to say
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      <Menu />
      <Reservation />
      
      {/* Awards section */}
      <section className="section-padding bg-dark-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12 animate-on-scroll">
            <h2 className="section-title">
              Our <span className="text-gold">Recognition</span>
            </h2>
            <p className="section-subtitle">
              We're honored to be recognized for our commitment to culinary excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-center animate-on-scroll">
            <div className="p-4">
              <img src="/award1.png" alt="Culinary Excellence Award" className="h-20 mx-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4">
              <img src="/award2.png" alt="Best Fine Dining 2022" className="h-20 mx-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4">
              <img src="/award3.png" alt="Michelin Star" className="h-20 mx-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4">
              <img src="/award4.png" alt="Zagat Rated" className="h-20 mx-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
