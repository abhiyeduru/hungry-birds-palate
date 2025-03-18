
import React from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="section-title">
              Our <span className="text-gold">Story</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2015, Hungry Birds began with a simple passion: to create extraordinary 
              dining experiences through exceptional non-vegetarian cuisine. Our journey started with 
              our head chef's vision to blend traditional recipes with modern techniques, creating 
              a unique culinary signature that has defined us ever since.
            </p>
            <p className="text-muted-foreground mb-6">
              Over the years, we've grown into a destination for those seeking memorable meals 
              in an elegant atmosphere. We pride ourselves on sourcing the finest ingredients, 
              preparing each dish with meticulous attention to detail, and serving our guests 
              with genuine warmth.
            </p>
            <Button variant="outline" className="mt-4">Learn More</Button>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-1/2 aspect-square rounded-lg overflow-hidden border-4 border-dark-100 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Our chef preparing food" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
          <div className="p-6 rounded-lg glass">
            <h3 className="text-xl font-serif font-bold mb-4 text-gold">Our Mission</h3>
            <p className="text-muted-foreground">
              To create unforgettable culinary moments by blending tradition with innovation, 
              and serving dishes that delight all the senses.
            </p>
          </div>
          
          <div className="p-6 rounded-lg glass">
            <h3 className="text-xl font-serif font-bold mb-4 text-gold">Our Chef</h3>
            <p className="text-muted-foreground">
              With over 15 years of experience in luxury restaurants across the world, 
              Chef Michael brings passion and expertise to every dish.
            </p>
          </div>
          
          <div className="p-6 rounded-lg glass">
            <h3 className="text-xl font-serif font-bold mb-4 text-gold">Our Ingredients</h3>
            <p className="text-muted-foreground">
              We source only the finest quality ingredients from trusted local suppliers, 
              ensuring freshness and flavor in every bite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
