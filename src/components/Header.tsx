
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const NavLink = ({ 
  to, 
  children,
  onClick
}: { 
  to: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    className="relative text-sm font-medium hover:text-gold transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gold after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
    onClick={onClick}
  >
    {children}
  </Link>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 lg:px-8',
        isScrolled
          ? 'py-4 bg-dark/90 backdrop-blur-md shadow-md'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold gold-text">
          Hungry Birds
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/reservations">Reservations</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden md:block">
          <Button>Book a Table</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-gold transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden transform transition-transform duration-300 ease-in-out pt-20',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-6">
          <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMobileMenu}>About Us</NavLink>
          <NavLink to="/menu" onClick={closeMobileMenu}>Menu</NavLink>
          <NavLink to="/reservations" onClick={closeMobileMenu}>Reservations</NavLink>
          <NavLink to="/gallery" onClick={closeMobileMenu}>Gallery</NavLink>
          <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
          <Button onClick={closeMobileMenu} className="mt-6">Book a Table</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
