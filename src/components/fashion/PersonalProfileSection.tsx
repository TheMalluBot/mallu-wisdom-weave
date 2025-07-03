
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
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

interface PersonalProfileSectionProps {
  preferences: UserPreferences;
  setPreferences: (preferences: UserPreferences) => void;
}

const PersonalProfileSection = ({ preferences, setPreferences }: PersonalProfileSectionProps) => {
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

  return (
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
  );
};

export default PersonalProfileSection;
