import React, { useState } from 'react';
import TopNavigation from './components/TopNavigation';
import MainTitle from './components/MainTitle';
import BusinessInputForm from './components/BusinessInputForm';
import ResultsSection from './components/ResultsSection';

const API_BASE_URL = 'https://growthpro-local-business-dashboard2-one.vercel.app';

function DashboardApp() {
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHeadlineLoading, setIsHeadlineLoading] = useState(false);
  
  const [businessData, setBusinessData] = useState({
    rating: 0,
    reviews: 0,
    headline: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!businessName || !location) {
      alert('Please fill in both fields');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('https://growthpro-local-business-dashboard2-one.vercel.app/business-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: businessName, location })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch business data');
      }

      setBusinessData({
        rating: data.rating,
        reviews: data.reviews,
        headline: data.headline
      });
      setShowResults(true);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = async () => {
    if (!businessName || !location) return;
    
    setIsHeadlineLoading(true);
    
    try {
      const response = await fetch(
        `${API_BASE_URL}/regenerate-headline?name=${encodeURIComponent(businessName)}&location=${encodeURIComponent(location)}`
      );
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate new headline');
      }

      setBusinessData(prev => ({ ...prev, headline: data.headline }));
    } catch (error) {
      alert(error.message);
    } finally {
      setIsHeadlineLoading(false);
    }
  };

  const handleReset = () => {
    setBusinessName('');
    setLocation('');
    setShowResults(false);
    setBusinessData({ rating: 0, reviews: 0, headline: '' });
  };

  const engagementScore = Math.round(businessData.rating * 20);

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNavigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <MainTitle />
        
        {!showResults ? (
          <BusinessInputForm 
            businessName={businessName}
            location={location}
            isLoading={isLoading}
            setBusinessName={setBusinessName}
            setLocation={setLocation}
            handleSubmit={handleSubmit}
          />
        ) : (
          <ResultsSection 
            businessName={businessName}
            location={location}
            rating={businessData.rating}
            reviews={businessData.reviews}
            headline={businessData.headline}
            engagementScore={engagementScore}
            handleRegenerate={handleRegenerate}
            handleReset={handleReset}
            isHeadlineLoading={isHeadlineLoading}
          />
        )}
      </div>
    </div>
  );
}

export default DashboardApp;
