
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import MenuCard from './MenuCard';
import Button from './Button';

// Mock data for menu items
const menuItems = [
  {
    id: 1,
    name: "Crispy Fried Chicken",
    description: "Tender chicken marinated with special spices, served with our signature sauce",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    category: "Main Course",
    spiceLevel: 2 as const,
    isChefSpecial: true,
  },
  {
    id: 2,
    name: "Grilled Lamb Chops",
    description: "Tender lamb chops marinated in herbs and spices, grilled to perfection",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Main Course",
    spiceLevel: 1 as const,
  },
  {
    id: 3,
    name: "Butter Chicken",
    description: "Classic creamy tomato curry with tender chicken pieces and aromatic spices",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Main Course",
    spiceLevel: 2 as const,
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Seafood Platter",
    description: "Selection of fresh prawns, calamari, and fish fillets, served with dipping sauces",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1599687267812-35c05ff70ee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Appetizers",
    spiceLevel: 1 as const,
  },
  {
    id: 5,
    name: "Chicken Wings",
    description: "Crispy chicken wings tossed in our special hot sauce, served with blue cheese dip",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
    category: "Appetizers",
    spiceLevel: 3 as const,
    isBestSeller: true,
  },
  {
    id: 6,
    name: "Premium Steak",
    description: "Perfectly aged beef steak cooked to your preference, served with seasonal vegetables",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Main Course",
    isChefSpecial: true,
  },
];

// Menu category options
const categories = [
  { id: "all", name: "All" },
  { id: "appetizers", name: "Appetizers" },
  { id: "main-course", name: "Main Course" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category.toLowerCase() === activeCategory);

  const specialItems = menuItems.filter(item => item.isChefSpecial);

  return (
    <section id="menu" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="section-title">
            Our <span className="text-gold">Menu</span>
          </h2>
          <p className="section-subtitle">
            Discover our selection of exquisite dishes, crafted with passion and the finest ingredients
          </p>
        </div>
        
        {/* Chef's Specials */}
        <div className="mb-16 animate-on-scroll">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">
            Chef's <span className="text-gold">Specials</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialItems.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
        </div>
        
        {/* Menu Categories */}
        <div className="flex overflow-x-auto space-x-2 mb-8 pb-2 animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "px-4 py-2 rounded-full whitespace-nowrap transition-colors",
                activeCategory === category.id
                  ? "bg-gold text-dark font-medium"
                  : "bg-dark-200 hover:bg-dark-300 text-foreground"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Button>View Full Menu</Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
