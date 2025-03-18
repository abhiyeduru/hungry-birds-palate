
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  image?: string;
  rating: number;
  date: string;
  text: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  rating,
  date,
  text,
  className,
}) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-lg bg-dark-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-dark-200">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gold/10 text-gold font-medium text-lg">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div className="ml-3">
            <h4 className="font-medium">{name}</h4>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-gold fill-gold" : "text-gray-600"}
            />
          ))}
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm flex-grow">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
