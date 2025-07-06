import React from 'react';
import { Building2, MapPin } from 'lucide-react';

export default function BusinessInfo({ businessName, location }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-blue-600 p-3 rounded-lg">
          <Building2 className="text-white text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{businessName}</h3>
          <p className="text-gray-600 flex items-center">
            <MapPin className="mr-1" /> {location}
          </p>
        </div>
      </div>
      <div className="bg-green-100 px-3 py-1 rounded-full text-green-700 flex items-center">
        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
        Live Data
      </div>
    </div>
  );
}