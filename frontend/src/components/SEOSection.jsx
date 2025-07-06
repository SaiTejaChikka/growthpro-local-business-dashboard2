import React from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

export default function SEOSection({ headline, handleRegenerate, isLoading }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-green-500 p-3 rounded-lg mr-3">
            <Sparkles className="text-white" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">SEO Headline</h4>
            <p className="text-gray-600">Optimized for search engines</p>
          </div>
        </div>
        <button
          onClick={handleRegenerate}
          disabled={isLoading}
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-75"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            <>
              <RefreshCw className="w-4 h-4" />
              New Headline
            </>
          )}
        </button>
      </div>
      
      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
        <p className="text-gray-900 font-medium">{headline}</p>
        <div className="flex gap-2 mt-3">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
            SEO Optimized
          </span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
            High Click Rate
          </span>
        </div>
      </div>
    </div>
  );
}