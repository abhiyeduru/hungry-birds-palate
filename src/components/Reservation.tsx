
import React from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';

const Reservation = () => {
  return (
    <section id="reservation" className="section-padding bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h2 className="section-title">
              Make a <span className="text-gold">Reservation</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Reserve your table to enjoy a memorable dining experience at Hungry Birds. 
              We look forward to serving you with our signature hospitality and cuisine.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 rounded-md bg-dark border border-border focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 rounded-md bg-dark border border-border focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-2 rounded-md bg-dark border border-border focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm mb-1">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    className="w-full px-4 py-2 rounded-md bg-dark border border-border focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6+ People</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 rounded-md bg-dark border border-border focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm mb-1">
                    Time
                  </label>
                  <select
                    id="time"
                    className="w-full px-4 py-2 rounded-md bg-dark border border-border focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="special" className="block text-sm mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="special"
                  rows={3}
                  placeholder="Any special requests or dietary requirements..."
                  className="w-full px-4 py-2 rounded-md bg-dark border border-border focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                ></textarea>
              </div>
              
              <Button type="submit" size="lg" fullWidth>
                Reserve Table
              </Button>
            </form>
          </div>
          
          <div className="relative h-full min-h-[400px] lg:min-h-0 animate-on-scroll">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src="/reservation.jpg"
                alt="Restaurant ambiance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <div className="p-6 glass rounded-lg inline-block">
                <h3 className="text-xl font-serif font-bold mb-2">Opening Hours</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between gap-x-4">
                    <span>Monday - Thursday</span>
                    <span className="text-gold">5:00 PM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between gap-x-4">
                    <span>Friday - Saturday</span>
                    <span className="text-gold">4:00 PM - 11:00 PM</span>
                  </li>
                  <li className="flex justify-between gap-x-4">
                    <span>Sunday</span>
                    <span className="text-gold">5:00 PM - 9:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
