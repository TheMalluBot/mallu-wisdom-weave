
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

interface StylePreferencesSectionProps {
  preferences: UserPreferences;
  setPreferences: (preferences: UserPreferences) => void;
}

const StylePreferencesSection = ({ preferences, setPreferences }: StylePreferencesSectionProps) => {
  const occasions = [
    'Work/Office', 'Casual Daily', 'Festival/Celebration', 'Wedding', 'Party/Social', 'Traditional Events'
  ];

  const colors = [
    'Kerala Gold', 'Emerald Green', 'Temple Red', 'Ivory White', 'Deep Blue', 'Coral Pink', 'Saffron Yellow'
  ];

  const styleGoals = [
    'Look Taller', 'Look Slimmer', 'More Elegant', 'Confident', 'Traditional', 'Modern Fusion'
  ];

  const handleArrayChange = (array: string[], value: string, checked: boolean) => {
    if (checked) {
      return [...array, value];
    } else {
      return array.filter(item => item !== value);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="kerala-serif text-2xl text-kerala-green">
          Style Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Occasions */}
        <div className="space-y-3">
          <Label>Occasions (Select all that apply)</Label>
          <div className="grid grid-cols-2 gap-3">
            {occasions.map((occasion) => (
              <div key={occasion} className="flex items-center space-x-2">
                <Checkbox
                  id={occasion}
                  checked={preferences.occasions.includes(occasion)}
                  onCheckedChange={(checked) => 
                    setPreferences({
                      ...preferences, 
                      occasions: handleArrayChange(preferences.occasions, occasion, checked as boolean)
                    })
                  }
                />
                <Label htmlFor={occasion} className="text-sm">{occasion}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Color Preferences */}
        <div className="space-y-3">
          <Label>Color Preferences</Label>
          <div className="grid grid-cols-2 gap-3">
            {colors.map((color) => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={color}
                  checked={preferences.colorPreferences.includes(color)}
                  onCheckedChange={(checked) => 
                    setPreferences({
                      ...preferences, 
                      colorPreferences: handleArrayChange(preferences.colorPreferences, color, checked as boolean)
                    })
                  }
                />
                <Label htmlFor={color} className="text-sm">{color}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Range */}
        <div className="space-y-2">
          <Label>Budget Range</Label>
          <Select onValueChange={(value) => setPreferences({...preferences, budgetRange: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-1000">Under ₹1,000</SelectItem>
              <SelectItem value="1000-5000">₹1,000 - ₹5,000</SelectItem>
              <SelectItem value="5000-15000">₹5,000 - ₹15,000</SelectItem>
              <SelectItem value="15000+">₹15,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Style Goals */}
        <div className="space-y-3">
          <Label>Style Goals</Label>
          <div className="grid grid-cols-2 gap-3">
            {styleGoals.map((goal) => (
              <div key={goal} className="flex items-center space-x-2">
                <Checkbox
                  id={goal}
                  checked={preferences.styleGoals.includes(goal)}
                  onCheckedChange={(checked) => 
                    setPreferences({
                      ...preferences, 
                      styleGoals: handleArrayChange(preferences.styleGoals, goal, checked as boolean)
                    })
                  }
                />
                <Label htmlFor={goal} className="text-sm">{goal}</Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StylePreferencesSection;
