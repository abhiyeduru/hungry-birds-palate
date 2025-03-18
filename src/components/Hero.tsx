
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';

const heroImages = [
  '/hero1.jpg',
  '/hero2.jpg',
  '/hero3.jpg',
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 bg-cover bg-center bg-no-repeat",
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
            <span className="text-gold">Indulge</span> in the Finest <br /> Non-Veg Delicacies
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience exceptional cuisine crafted with passion, tradition, and the finest ingredients
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg">Explore Menu</Button>
            <Button size="lg" variant="outline">Book a Table</Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <div className="h-14 w-[2px] bg-gold/50 mt-4"></div>
        <span className="sr-only">Scroll down</span>
      </div>
    </section>
  );
};

export default Hero;
