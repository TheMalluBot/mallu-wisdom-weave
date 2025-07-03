
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { UserProfile } from '@/pages/AIFashion';

interface StylePreferencesPanelProps {
  userProfile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  completionPercentage: number;
}

const StylePreferencesPanel = ({ userProfile, updateProfile, completionPercentage }: StylePreferencesPanelProps) => {
  const occasions = [
    { id: 'daily', name: 'Daily Wear', icon: '👔' },
    { id: 'office', name: 'Office/Professional', icon: '💼' },
    { id: 'festive', name: 'Festive/Traditional', icon: '🎊' },
    { id: 'party', name: 'Party/Evening', icon: '🎉' },
    { id: 'wedding', name: 'Wedding/Special', icon: '💒' },
    { id: 'casual', name: 'Casual Outings', icon: '🚶‍♀️' }
  ];

  const styleGoals = [
    { id: 'taller', name: 'Look Taller', icon: '📏' },
    { id: 'slimmer', name: 'Look Slimmer', icon: '⏳' },
    { id: 'curves', name: 'Enhance Curves', icon: '💃' },
    { id: 'professional', name: 'Professional Appearance', icon: '👩‍💼' },
    { id: 'youthful', name: 'Youthful Look', icon: '✨' },
    { id: 'elegant', name: 'Elegant Style', icon: '👑' },
    { id: 'comfort', name: 'Comfort Priority', icon: '🤗' },
    { id: 'trendy', name: 'Trendy/Fashion-Forward', icon: '🔥' }
  ];

  const colors = [
    { id: 'kerala-gold', name: 'Kerala Gold', color: '#D4AF37' },
    { id: 'emerald', name: 'Emerald', color: '#50C878' },
    { id: 'temple-red', name: 'Temple Red', color: '#C1121F' },
    { id: 'ivory', name: 'Ivory', color: '#FFFFF0' },
    { id: 'deep-blue', name: 'Deep Blue', color: '#003366' },
    { id: 'coral', name: 'Coral', color: '#FF7F7F' },
    { id: 'saffron', name: 'Saffron', color: '#F4C430' },
    { id: 'maroon', name: 'Maroon', color: '#800000' }
  ];

  const handleArrayToggle = (array: string[], value: string, field: keyof UserProfile) => {
    const newArray = array.includes(value)
      ? array.filter(item => item !== value)
      : [...array, value];
    updateProfile({ [field]: newArray });
  };

  return (
    <Card className="bg-[#252631] border-[#2a2d3a] h-full">
      <CardHeader>
        <CardTitle className="text-white kerala-serif flex items-center justify-between">
          Style Preferences
          <div className="flex items-center">
            <span className="text-sm text-[#ffa726] mr-2">{completionPercentage}%</span>
            <div className="w-16 h-2 bg-[#2a2d3a] rounded-full">
              <div 
                className="h-2 bg-[#ffa726] rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6 overflow-y-auto max-h-[700px]">
        {/* Occasion Preferences */}
        <div className="space-y-3">
          <Label className="text-white font-semibold">Occasions (Select Multiple)</Label>
          <div className="space-y-2">
            {occasions.map((occasion) => (
              <div key={occasion.id} className="flex items-center space-x-3">
                <Checkbox
                  id={occasion.id}
                  checked={userProfile.occasions.includes(occasion.id)}
                  onCheckedChange={() => handleArrayToggle(userProfile.occasions, occasion.id, 'occasions')}
                />
                <label 
                  htmlFor={occasion.id}
                  className="text-gray-300 text-sm flex items-center cursor-pointer"
                >
                  <span className="mr-2">{occasion.icon}</span>
                  {occasion.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Style Goals */}
        <div className="space-y-3">
          <Label className="text-white font-semibold">Style Goals (Select Multiple)</Label>
          <div className="space-y-2">
            {styleGoals.map((goal) => (
              <div key={goal.id} className="flex items-center space-x-3">
                <Checkbox
                  id={goal.id}
                  checked={userProfile.styleGoals.includes(goal.id)}
                  onCheckedChange={() => handleArrayToggle(userProfile.styleGoals, goal.id, 'styleGoals')}
                />
                <label 
                  htmlFor={goal.id}
                  className="text-gray-300 text-sm flex items-center cursor-pointer"
                >
                  <span className="mr-2">{goal.icon}</span>
                  {goal.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Colors */}
        <div className="space-y-3">
          <Label className="text-white font-semibold">Favorite Colors</Label>
          <div className="grid grid-cols-2 gap-2">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => handleArrayToggle(userProfile.favoriteColors, color.id, 'favoriteColors')}
                className={`p-2 rounded-lg border transition-all text-xs flex items-center ${
                  userProfile.favoriteColors.includes(color.id)
                    ? 'bg-[#ffa726]/20 border-[#ffa726] text-[#ffa726]'
                    : 'bg-[#2a2d3a] border-[#3a3d4a] text-gray-300 hover:border-[#ffa726]/50'
                }`}
              >
                <div 
                  className="w-3 h-3 rounded-full mr-2 border border-gray-500"
                  style={{ backgroundColor: color.color }}
                ></div>
                {color.name}
              </button>
            ))}
          </div>
        </div>

        {/* Colors to Avoid */}
        <div className="space-y-3">
          <Label className="text-white font-semibold">Colors to Avoid</Label>
          <div className="grid grid-cols-2 gap-2">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => handleArrayToggle(userProfile.avoidColors, color.id, 'avoidColors')}
                className={`p-2 rounded-lg border transition-all text-xs flex items-center ${
                  userProfile.avoidColors.includes(color.id)
                    ? 'bg-red-500/20 border-red-500 text-red-400'
                    : 'bg-[#2a2d3a] border-[#3a3d4a] text-gray-300 hover:border-red-500/50'
                }`}
              >
                <div 
                  className="w-3 h-3 rounded-full mr-2 border border-gray-500"
                  style={{ backgroundColor: color.color }}
                ></div>
                {color.name}
              </button>
            ))}
          </div>
        </div>

        {/* Boldness Preference */}
        <div className="space-y-3">
          <Label className="text-white font-semibold">
            Style Boldness: {userProfile.boldnessPreference < 30 ? 'Conservative' : 
                            userProfile.boldnessPreference < 70 ? 'Balanced' : 'Bold'}
          </Label>
          <Slider
            value={[userProfile.boldnessPreference]}
            onValueChange={(value) => updateProfile({ boldnessPreference: value[0] })}
            max={100}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>Conservative</span>
            <span>Bold</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StylePreferencesPanel;
