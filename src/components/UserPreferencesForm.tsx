
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';

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

  const bodyTypes = [
    { value: 'pear', label: 'Pear Shape' },
    { value: 'apple', label: 'Apple Shape' },
    { value: 'rectangle', label: 'Rectangle Shape' },
    { value: 'hourglass', label: 'Hourglass Shape' },
    { value: 'inverted-triangle', label: 'Inverted Triangle' }
  ];

  const skinTones = [
    { value: 'warm', label: 'Warm Undertones' },
    { value: 'cool', label: 'Cool Undertones' },
    { value: 'neutral', label: 'Neutral Undertones' }
  ];

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

  const handleSubmit = () => {
    onSubmit(preferences);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="kerala-serif text-2xl text-kerala-green">
            Personal Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Height */}
          <div className="space-y-2">
            <Label>Height: {preferences.height} cm</Label>
            <Slider
              value={[preferences.height]}
              onValueChange={(value) => setPreferences({...preferences, height: value[0]})}
              max={200}
              min={140}
              step={1}
              className="w-full"
            />
          </div>

          {/* Body Type */}
          <div className="space-y-2">
            <Label>Body Type</Label>
            <Select onValueChange={(value) => setPreferences({...preferences, bodyType: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select your body type" />
              </SelectTrigger>
              <SelectContent>
                {bodyTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Skin Tone */}
          <div className="space-y-2">
            <Label>Skin Tone</Label>
            <Select onValueChange={(value) => setPreferences({...preferences, skinTone: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select your skin tone" />
              </SelectTrigger>
              <SelectContent>
                {skinTones.map((tone) => (
                  <SelectItem key={tone.value} value={tone.value}>
                    {tone.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Age Group */}
          <div className="space-y-2">
            <Label>Age Group</Label>
            <Select onValueChange={(value) => setPreferences({...preferences, ageGroup: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select age group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="18-25">18-25 years</SelectItem>
                <SelectItem value="26-35">26-35 years</SelectItem>
                <SelectItem value="36-45">36-45 years</SelectItem>
                <SelectItem value="46-55">46-55 years</SelectItem>
                <SelectItem value="55+">55+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

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
