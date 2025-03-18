
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
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    date: "February 28, 2023",
    text: "Hungry Birds exceeded all my expectations. From the moment we walked in, the atmosphere was inviting and elegant. The Grilled Lamb Chops were cooked to perfection!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Robert Davis",
    rating: 4,
    date: "April 10, 2023",
    text: "Celebrated my anniversary here and it was a night to remember. The food was exceptional, especially the seafood platter. Highly recommended for any special occasion.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
              <img src="https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ff92caffcdd63681a35134a6770ed3b&auto=format&fit=crop&w=1951&q=80" alt="Culinary Excellence Award" className="h-20 mx-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4">
              <img src="https://images.unsplash.com/photo-1522205408450-add114ad53fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=368f45b0888aeb0b7b08e3a1084d3ede&auto=format&fit=crop&w=1950&q=80" alt="Best Fine Dining 2022" className="h-20 mx-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=94a1e718d89ca60a6337a6008341ca50&auto=format&fit=crop&w=1950&q=80" alt="Michelin Star" className="h-20 mx-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4">
              <img src="https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89719a0d55dd05e2deae4120227e6efc&auto=format&fit=crop&w=1953&q=80" alt="Zagat Rated" className="h-20 mx-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
