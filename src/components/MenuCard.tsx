
import React from 'react';
import { cn } from '@/lib/utils';

interface SpiceLevelProps {
  level: 1 | 2 | 3;
  className?: string;
}

const SpiceLevel: React.FC<SpiceLevelProps> = ({ level, className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-2 h-2 rounded-full mr-1",
            i < level ? "bg-red-500" : "bg-gray-600"
          )}
        />
      ))}
    </div>
  );
};

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  spiceLevel?: 1 | 2 | 3;
  isChefSpecial?: boolean;
  isBestSeller?: boolean;
  className?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({
  name,
  description,
  price,
  image,
  category,
  spiceLevel,
  isChefSpecial = false,
  isBestSeller = false,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl bg-dark-100 h-full",
        className
      )}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {(isChefSpecial || isBestSeller) && (
        <div className="absolute top-4 left-4 z-10">
          <div className={cn(
            "px-2 py-1 rounded text-xs font-medium",
            isChefSpecial ? "bg-gold text-dark" : "bg-red-600 text-white"
          )}>
            {isChefSpecial ? "Chef's Special" : "Best Seller"}
          </div>
        </div>
      )}
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif font-bold">{name}</h3>
          {spiceLevel && <SpiceLevel level={spiceLevel} />}
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-gold font-medium">${price.toFixed(2)}</span>
          <button className="text-sm text-gold hover:text-gold-light transition-colors">
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
