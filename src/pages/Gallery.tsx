
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { initAnimateOnScroll } from '@/lib/animations';

// Gallery data
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Elegantly plated gourmet steak',
    category: 'Main Course',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    alt: 'Chef preparing a signature dish',
    category: 'Kitchen',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Restaurant interior with ambient lighting',
    category: 'Ambiance',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Seafood platter with fresh oysters',
    category: 'Seafood',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80',
    alt: 'Craft cocktail preparation',
    category: 'Beverages',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    alt: 'Perfectly grilled chicken with herbs',
    category: 'Main Course',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Private dining room setting',
    category: 'Ambiance',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Dessert presentation with chocolate garnish',
    category: 'Desserts',
  }
];

// Gallery categories
const categories = [
  { id: "all", name: "All" },
  { id: "Main Course", name: "Main Course" },
  { id: "Seafood", name: "Seafood" },
  { id: "Ambiance", name: "Ambiance" },
  { id: "Kitchen", name: "Kitchen" },
  { id: "Beverages", name: "Beverages" },
  { id: "Desserts", name: "Desserts" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = React.useState("all");

  useEffect(() => {
    const cleanup = initAnimateOnScroll();
    return cleanup;
  }, []);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-12 animate-on-scroll">
              <h1 className="section-title">
                Our <span className="text-gold">Gallery</span>
              </h1>
              <p className="section-subtitle">
                Explore our culinary creations and the elegant ambiance of Hungry Birds
              </p>
            </div>
            
            {/* Category Filters */}
            <div className="flex overflow-x-auto space-x-2 mb-12 pb-2 animate-on-scroll justify-center">
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
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
              {filteredImages.map((image) => (
                <div 
                  key={image.id}
                  className="group overflow-hidden rounded-lg bg-dark-100 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative">
                    <AspectRatio ratio={4/3}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-lg font-medium mb-2">{image.alt}</p>
                        <span className="inline-block px-3 py-1 bg-gold text-dark text-sm rounded-full">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
