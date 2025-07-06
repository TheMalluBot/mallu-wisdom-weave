
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { UserProfile } from '@/pages/AIFashion';

interface SmartFiltersProps {
  userProfile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const SmartFilters = ({ userProfile, updateProfile }: SmartFiltersProps) => {
  const categories = [
    { id: 'traditional', name: 'Traditional', icon: '🥻', count: 8 },
    { id: 'fusion', name: 'Fusion', icon: '👗', count: 12 },
    { id: 'modern', name: 'Modern', icon: '👔', count: 6 },
    { id: 'accessories', name: 'Accessories', icon: '💍', count: 15 }
  ];

  const occasions = [
    'Festival/Celebration',
    'Wedding',
    'Party/Social', 
    'Work/Office',
    'Casual Daily',
    'Traditional Events'
  ];

  const priceRanges = [
    { id: 'under-1000', label: 'Under ₹1,000', min: 0, max: 1000 },
    { id: '1000-3000', label: '₹1,000 - ₹3,000', min: 1000, max: 3000 },
    { id: '3000-8000', label: '₹3,000 - ₹8,000', min: 3000, max: 8000 },
    { id: '8000+', label: '₹8,000+', min: 8000, max: 50000 }
  ];

  const handleOccasionChange = (occasion: string, checked: boolean) => {
    const updatedOccasions = checked 
      ? [...userProfile.occasions, occasion]
      : userProfile.occasions.filter(o => o !== occasion);
    
    updateProfile({ occasions: updatedOccasions });
  };

  return (
    <div className="space-y-6">
      {/* Quick Categories */}
      <Card className="bg-[#252631] border-[#2a2d3a]">
        <CardHeader>
          <CardTitle className="text-white text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="flex items-center p-3 bg-[#2a2d3a] rounded-lg hover:bg-[#2a2d3a]/80 cursor-pointer transition-colors group"
              >
                <span className="text-2xl mr-3">{category.icon}</span>
                <div>
                  <p className="text-white font-medium group-hover:text-[#ffa726] transition-colors">
                    {category.name}
                  </p>
                  <p className="text-gray-400 text-xs">{category.count} items</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Occasions Filter */}
      <Card className="bg-[#252631] border-[#2a2d3a]">
        <CardHeader>
          <CardTitle className="text-white text-lg">Occasions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {occasions.map((occasion) => (
            <div key={occasion} className="flex items-center space-x-2">
              <Checkbox
                id={occasion}
                checked={userProfile.occasions.includes(occasion)}
                onCheckedChange={(checked) => handleOccasionChange(occasion, checked as boolean)}
                className="border-gray-500 data-[state=checked]:bg-[#ffa726] data-[state=checked]:border-[#ffa726]"
              />
              <Label 
                htmlFor={occasion} 
                className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors"
              >
                {occasion}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card className="bg-[#252631] border-[#2a2d3a]">
        <CardHeader>
          <CardTitle className="text-white text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {priceRanges.map((range) => (
            <div 
              key={range.id}
              className="flex items-center justify-between p-2 hover:bg-[#2a2d3a] rounded cursor-pointer transition-colors"
            >
              <span className="text-gray-300 text-sm">{range.label}</span>
              <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                12 items
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Style Preferences */}
      <Card className="bg-[#252631] border-[#2a2d3a]">
        <CardHeader>
          <CardTitle className="text-white text-lg">Style Boldness</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Conservative</span>
              <span>Bold</span>
            </div>
            <Slider
              value={[userProfile.boldnessPreference]}
              onValueChange={(value) => updateProfile({ boldnessPreference: value[0] })}
              max={100}
              step={10}
              className="w-full"
            />
            <div className="text-center">
              <Badge className="bg-[#ffa726]/20 text-[#ffa726] border-[#ffa726]/30">
                {userProfile.boldnessPreference}% Bold
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Filters Summary */}
      {(userProfile.occasions.length > 0 || userProfile.styleGoals.length > 0) && (
        <Card className="bg-[#252631] border-[#2a2d3a]">
          <CardHeader>
            <CardTitle className="text-white text-lg">Active Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {userProfile.occasions.map((occasion) => (
                <Badge 
                  key={occasion}
                  className="bg-[#ffa726]/20 text-[#ffa726] border-[#ffa726]/30"
                >
                  {occasion}
                </Badge>
              ))}
              {userProfile.styleGoals.map((goal) => (
                <Badge 
                  key={goal}
                  className="bg-blue-500/20 text-blue-400 border-blue-500/30"
                >
                  {goal}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SmartFilters;
