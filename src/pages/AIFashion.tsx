
import { useState } from 'react';
import AvatarPanel from '@/components/fashion/AvatarPanel';
import PhysicalProfilePanel from '@/components/fashion/PhysicalProfilePanel';
import StylePreferencesPanel from '@/components/fashion/StylePreferencesPanel';
import RecommendationsSection from '@/components/fashion/RecommendationsSection';

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

  return (
    <div className="min-h-screen bg-[#1a1b23] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#252631] to-[#2a2d3a] border-b border-[#2a2d3a]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="kerala-serif text-4xl font-bold text-white mb-2">
            AI Fashion Assistant
          </h1>
          <p className="text-gray-300 text-lg">
            Personalized styling based on your unique profile and Kerala's fashion heritage
          </p>
        </div>
      </div>

      {/* Three Panel Layout */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[800px]">
          {/* Left Panel - Avatar Display (50%) */}
          <div className="lg:col-span-2">
            <AvatarPanel userProfile={userProfile} />
          </div>

          {/* Middle Panel - Physical Configuration (25%) */}
          <div className="lg:col-span-1">
            <PhysicalProfilePanel 
              userProfile={userProfile}
              updateProfile={updateProfile}
              completionPercentage={calculatePhysicalCompletion()}
            />
          </div>

          {/* Right Panel - Style Configuration (25%) */}
          <div className="lg:col-span-1">
            <StylePreferencesPanel 
              userProfile={userProfile}
              updateProfile={updateProfile}
              completionPercentage={calculateStyleCompletion()}
            />
          </div>
        </div>

        {/* Recommendations Section */}
        {(userProfile.physicalComplete || userProfile.styleComplete || 
          calculatePhysicalCompletion() > 60 || calculateStyleCompletion() > 60) && (
          <div className="mt-12">
            <RecommendationsSection userProfile={userProfile} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AIFashion;
