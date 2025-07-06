
import { useState } from 'react';
import PhysicalProfilePanel from '@/components/fashion/PhysicalProfilePanel';
import StylePreferencesPanel from '@/components/fashion/StylePreferencesPanel';
import ProductRecommendations from '@/components/fashion/ProductRecommendations';
import SmartFilters from '@/components/fashion/SmartFilters';

export interface UserProfile {
  // Physical attributes
  bodyShape: string;
  height: number;
  build: string;
  skinTone: string;
  skinUndertone: string;
  faceShape: string;
  ageGroup: string;
  
  // Style preferences
  occasions: string[];
  styleGoals: string[];
  favoriteColors: string[];
  avoidColors: string[];
  boldnessPreference: number;
  
  // Completion tracking
  physicalComplete: boolean;
  styleComplete: boolean;
}

const AIFashion = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    bodyShape: '',
    height: 165,
    build: '',
    skinTone: '',
    skinUndertone: '',
    faceShape: '',
    ageGroup: '',
    occasions: [],
    styleGoals: [],
    favoriteColors: [],
    avoidColors: [],
    boldnessPreference: 50,
    physicalComplete: false,
    styleComplete: false
  });

  const updateProfile = (updates: Partial<UserProfile>) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
  };

  const calculatePhysicalCompletion = () => {
    const requiredFields = ['bodyShape', 'build', 'skinTone', 'faceShape', 'ageGroup'];
    const completed = requiredFields.filter(field => userProfile[field as keyof UserProfile]).length;
    return Math.round((completed / requiredFields.length) * 100);
  };

  const calculateStyleCompletion = () => {
    let completed = 0;
    if (userProfile.occasions.length > 0) completed++;
    if (userProfile.styleGoals.length > 0) completed++;
    if (userProfile.favoriteColors.length > 0) completed++;
    return Math.round((completed / 3) * 100);
  };

  const hasMinimumProfile = () => {
    return userProfile.bodyShape || userProfile.skinTone || userProfile.occasions.length > 0;
  };

  return (
    <div className="min-h-screen bg-[#1a1b23] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#252631] to-[#2a2d3a] border-b border-[#2a2d3a]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="kerala-serif text-4xl font-bold text-white mb-2">
            AI Fashion Assistant
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            Discover perfect Kerala fashion tailored to your unique style and body type
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#ffa726] rounded-full"></div>
              <span className="text-gray-300">Profile: {calculatePhysicalCompletion()}% Complete</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300">Preferences: {calculateStyleCompletion()}% Complete</span>
            </div>
            {hasMinimumProfile() && (
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">Smart Recommendations Active</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Panel - Smart Filters (20%) */}
          <div className="lg:col-span-1">
            <SmartFilters 
              userProfile={userProfile}
              updateProfile={updateProfile}
            />
          </div>

          {/* Center Panel - Product Recommendations (60%) */}
          <div className="lg:col-span-3">
            <ProductRecommendations userProfile={userProfile} />
          </div>

          {/* Right Panel - Configuration (20%) */}
          <div className="lg:col-span-1 space-y-6">
            <PhysicalProfilePanel 
              userProfile={userProfile}
              updateProfile={updateProfile}
              completionPercentage={calculatePhysicalCompletion()}
            />
            
            <StylePreferencesPanel 
              userProfile={userProfile}
              updateProfile={updateProfile}
              completionPercentage={calculateStyleCompletion()}
            />
          </div>
        </div>

        {/* Smart Insights Section */}
        {hasMinimumProfile() && (
          <div className="mt-12 p-6 bg-gradient-to-r from-[#252631] to-[#2a2d3a] rounded-lg border border-[#2a2d3a]">
            <h3 className="kerala-serif text-2xl font-bold text-white mb-4">Your Style Insights</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="text-[#ffa726] font-semibold">Perfect Matches</h4>
                <p className="text-gray-300 text-sm">12 products curated for your body type</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌈</div>
                <h4 className="text-[#ffa726] font-semibold">Color Harmony</h4>
                <p className="text-gray-300 text-sm">Colors that enhance your skin tone</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✨</div>
                <h4 className="text-[#ffa726] font-semibold">Style Evolution</h4>
                <p className="text-gray-300 text-sm">Recommendations improve with your choices</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIFashion;
