import React from 'react';
import { Building2, MapPin, Search } from 'lucide-react';

export default function BusinessInputForm({ 
  businessName, 
  location, 
  isLoading, 
  setBusinessName, 
  setLocation, 
  handleSubmit 
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="text-center mb-6">
        <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Building2 className="text-white text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Get Started</h3>
        <p className="text-gray-600">Enter your business information</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Name
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-3.5 text-gray-400" />
            <input
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg"
              placeholder="Your business name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3.5 text-gray-400" />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg"
              placeholder="City or address"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium mt-4 flex justify-center items-center gap-2"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <>
              <Search /> Get Analytics
            </>
          )}
        </button>
      </form>
    </div>
  );
}