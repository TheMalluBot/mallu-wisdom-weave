
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PersonalProfileSection from '@/components/fashion/PersonalProfileSection';
import StylePreferencesSection from '@/components/fashion/StylePreferencesSection';

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

interface UserPreferencesFormProps {
  onSubmit: (preferences: UserPreferences) => void;
}

const UserPreferencesForm = ({ onSubmit }: UserPreferencesFormProps) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    height: 160,
    bodyType: '',
    skinTone: '',
    ageGroup: '',
    occasions: [],
    colorPreferences: [],
    budgetRange: '',
    styleGoals: []
  });

  const handleSubmit = () => {
    onSubmit(preferences);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PersonalProfileSection 
        preferences={preferences}
        setPreferences={setPreferences}
      />
      
      <StylePreferencesSection 
        preferences={preferences}
        setPreferences={setPreferences}
      />

      <Button 
        onClick={handleSubmit}
        className="w-full bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green font-semibold py-3"
        size="lg"
      >
        Get My AI Fashion Recommendations ✨
      </Button>
    </div>
  );
};

export default UserPreferencesForm;
