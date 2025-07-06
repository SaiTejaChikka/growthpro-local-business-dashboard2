import React from 'react';
import BusinessInfo from './BusinessInfo';
import MetricCard from './MetricCard';
import StarDisplay from './StarDisplay';
import ProgressBar from './ProgressBar';
import SEOSection from './SEOSection';
import BottomButtons from './BottomButtons';
import { Star, MessageSquare, Users } from 'lucide-react';

export default function ResultsSection({
  businessName,
  location,
  rating,
  reviews,
  headline,
  engagementScore,
  handleRegenerate,
  handleReset,
  isHeadlineLoading
}) {
  return (
    <div className="space-y-6">
      <BusinessInfo businessName={businessName} location={location} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard 
          title="Customer Rating" 
          value={rating} 
          icon={<Star className="text-amber-400" />}
          subtitle="out of 5.0"
          color="amber"
        >
          <StarDisplay rating={rating} />
        </MetricCard>
        
        <MetricCard 
          title="Customer Reviews" 
          value={reviews} 
          icon={<MessageSquare className="text-blue-500" />}
          subtitle="Total Reviews"
          color="blue"
        />
        
        <MetricCard 
          title="Engagement Score" 
          value={`${engagementScore}%`} 
          icon={<Users className="text-green-500" />}
          subtitle="Customer Satisfaction"
          color="green"
        >
          <ProgressBar percentage={engagementScore} />
        </MetricCard>
      </div>
      
      <SEOSection 
        headline={headline} 
        handleRegenerate={handleRegenerate}
        isLoading={isHeadlineLoading}
      />
      
      <BottomButtons handleReset={handleReset} />
    </div>
  );
}