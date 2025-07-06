import React from 'react';

export default function ProgressBar({ percentage }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mt-3 mb-4">
      <div 
        className="bg-green-500 h-2 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}