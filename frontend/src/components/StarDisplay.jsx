import React from 'react';
import { Star } from 'lucide-react';

export default function StarDisplay({ rating }) {
  return (
    <div className="flex justify-center mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < Math.floor(rating)
              ? 'text-amber-400 fill-amber-400'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}