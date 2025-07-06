import React from 'react';

export default function BottomButtons({ handleReset }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <button
        onClick={handleReset}
        className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-300 shadow-sm"
      >
        Check Another Business
      </button>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md">
        Download Report
      </button>
    </div>
  );
}