
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark pt-16 pb-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-serif font-bold gold-text mb-6">Hungry Birds</h3>
            <p className="text-muted-foreground mb-6">
              Experience exceptional cuisine crafted with passion, tradition, and the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-dark-200 text-muted-foreground hover:bg-gold hover:text-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-dark-200 text-muted-foreground hover:bg-gold hover:text-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-dark-200 text-muted-foreground hover:bg-gold hover:text-dark transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-gold transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-muted-foreground hover:text-gold transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 text-gold flex-shrink-0" size={20} />
                <span className="text-muted-foreground">
                  123 Gourmet Avenue, Culinary District, New York, NY 10001
                </span>
              </li>
              <li className="flex">
                <Phone className="mr-3 text-gold flex-shrink-0" size={20} />
                <span className="text-muted-foreground">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex">
                <Mail className="mr-3 text-gold flex-shrink-0" size={20} />
                <span className="text-muted-foreground">
                  info@hungrybirds.com
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates on events, special promotions, and new menu items.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-dark-100 border border-border focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gold text-dark font-medium rounded-md hover:bg-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dark-200 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Hungry Birds. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
