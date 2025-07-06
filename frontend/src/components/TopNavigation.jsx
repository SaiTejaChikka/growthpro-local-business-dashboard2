import React from 'react';
import { TrendingUp, Award } from 'lucide-react';

export default function TopNavigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <TrendingUp className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900">BusinessPro</h1>
            <p className="text-xs text-gray-500">Analytics Dashboard</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-gray-600">
          <Award className="w-4 h-4" />
          <span>Premium Service</span>
        </div>
      </div>
    </nav>
  );
}