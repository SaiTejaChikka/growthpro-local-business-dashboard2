import React from 'react';

export default function MetricCard({ title, value, icon, subtitle, color = "blue", children }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-700",
    amber: "bg-amber-100 text-amber-700",
    green: "bg-green-100 text-green-700"
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-gray-900">{title}</h4>
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
      
      <div className="text-center">
        {children}
        <div className="text-3xl font-bold text-gray-900 my-2">
          {value}
        </div>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}