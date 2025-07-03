
import { useState } from 'react';
import UserPreferencesForm from '@/components/UserPreferencesForm';
import SmartRecommendations from '@/components/SmartRecommendations';

interface UserPreferences {
  height: number;
  bodyType: string;
  skinTone: string;
  ageGroup: string;
  occasions: string[];
  colorPreferences: string[];
  budgetRange: string;
  styleGoals: string[];
}

const AIFashion = () => {
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);

  const handlePreferencesSubmit = (preferences: UserPreferences) => {
    setUserPreferences(preferences);
  };

  return (
    <div className="min-h-screen bg-kerala-white">
      {/* Header */}
      <div className="bg-kerala-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="kerala-serif text-4xl md:text-5xl font-bold mb-4">
            AI Fashion Assistant
          </h1>
          <p className="text-xl text-kerala-white/90 max-w-2xl mx-auto">
            Discover your perfect Kerala-inspired style with personalized AI recommendations
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[65%_35%] gap-8 min-h-[600px]">
          {/* Left Side - Avatar/Visual Area (65%) */}
          <div className="bg-gradient-to-br from-kerala-green/5 to-kerala-gold/5 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-9xl mb-6 animate-kerala-float">👤</div>
              <h3 className="kerala-serif text-2xl font-bold text-kerala-green mb-4">
                Your Virtual Avatar
              </h3>
              <p className="text-kerala-green/70 max-w-md">
                {userPreferences 
                  ? `Height: ${userPreferences.height}cm | Body Type: ${userPreferences.bodyType} | Skin Tone: ${userPreferences.skinTone}`
                  : "Complete your preferences to see personalized styling recommendations"
                }
              </p>
              
              {userPreferences && (
                <div className="mt-8 p-6 bg-white/50 rounded-xl backdrop-blur-sm">
                  <h4 className="font-semibold text-kerala-green mb-3">Your Style Profile</h4>
                  <div className="space-y-2 text-sm text-kerala-green/80">
                    <div>Age Group: {userPreferences.ageGroup}</div>
                    <div>Budget: {userPreferences.budgetRange}</div>
                    <div>Occasions: {userPreferences.occasions.join(', ')}</div>
                    <div>Style Goals: {userPreferences.styleGoals.join(', ')}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Preferences Form (35%) */}
          <div className="bg-white rounded-2xl shadow-kerala-soft p-6 overflow-y-auto max-h-[80vh]">
            <UserPreferencesForm onSubmit={handlePreferencesSubmit} />
          </div>
        </div>

        {/* Recommendations Section */}
        {userPreferences && (
          <div className="mt-12">
            <SmartRecommendations preferences={userPreferences} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AIFashion;
