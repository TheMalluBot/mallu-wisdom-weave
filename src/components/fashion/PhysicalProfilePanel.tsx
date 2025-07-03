
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { UserProfile } from '@/pages/AIFashion';

interface PhysicalProfilePanelProps {
  userProfile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  completionPercentage: number;
}

const PhysicalProfilePanel = ({ userProfile, updateProfile, completionPercentage }: PhysicalProfilePanelProps) => {
  const bodyShapes = [
    { id: 'pear', name: 'Pear', icon: '🍐', description: 'Wider hips, narrower shoulders' },
    { id: 'apple', name: 'Apple', icon: '🍎', description: 'Fuller midsection, narrower hips' },
    { id: 'hourglass', name: 'Hourglass', icon: '⏳', description: 'Balanced shoulders and hips' },
    { id: 'rectangle', name: 'Rectangle', icon: '▬', description: 'Straight, minimal curves' },
    { id: 'inverted-triangle', name: 'Inverted Triangle', icon: '🔻', description: 'Broader shoulders, narrower hips' }
  ];

  const builds = [
    { id: 'petite', name: 'Petite' },
    { id: 'slim', name: 'Slim' },
    { id: 'average', name: 'Average' },
    { id: 'curvy', name: 'Curvy' },
    { id: 'plus-size', name: 'Plus Size' }
  ];

  const skinTones = [
    { id: 'fair', name: 'Fair', color: '#F5DEB3' },
    { id: 'light', name: 'Light', color: '#DEB887' },
    { id: 'medium', name: 'Medium', color: '#CD853F' },
    { id: 'olive', name: 'Olive', color: '#9CAF88' },
    { id: 'tan', name: 'Tan', color: '#D2B48C' },
    { id: 'deep', name: 'Deep', color: '#8B4513' }
  ];

  const faceShapes = [
    { id: 'oval', name: 'Oval', icon: '⭕' },
    { id: 'round', name: 'Round', icon: '🔵' },
    { id: 'square', name: 'Square', icon: '⬜' },
    { id: 'heart', name: 'Heart', icon: '💖' },
    { id: 'diamond', name: 'Diamond', icon: '💎' },
    { id: 'long', name: 'Long', icon: '📏' }
  ];

  return (
    <Card className="bg-[#252631] border-[#2a2d3a] h-full">
      <CardHeader>
        <CardTitle className="text-white kerala-serif flex items-center justify-between">
          Physical Profile
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
        {/* Body Shape Selection */}
        <div className="space-y-3">
          <Label className="text-white font-semibold">Body Shape</Label>
          <div className="grid grid-cols-1 gap-2">
            {bodyShapes.map((shape) => (
              <button
                key={shape.id}
                onClick={() => updateProfile({ bodyShape: shape.id })}
                className={`p-3 rounded-lg border transition-all text-left ${
                  userProfile.bodyShape === shape.id
                    ? 'bg-[#ffa726]/20 border-[#ffa726] text-[#ffa726]'
                    : 'bg-[#2a2d3a] border-[#3a3d4a] text-gray-300 hover:border-[#ffa726]/50'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-xl mr-3">{shape.icon}</span>
                  <div>
                    <div className="font-medium">{shape.name}</div>
                    <div className="text-xs opacity-70">{shape.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Height Slider */}
        <div className="space-y-3">
          <Label className="text-white font-semibold">
            Height: {userProfile.height} cm ({Math.floor(userProfile.height / 30.48 * 12 / 12)}'
            {Math.round((userProfile.height / 30.48 * 12) % 12)}")
          </Label>
          <Slider
            value={[userProfile.height]}
            onValueChange={(value) => updateProfile({ height: value[0] })}
            max={188}
            min={145}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>4'8"</span>
            <span>6'2"</span>
          </div>
        </div>

        {/* Build Selection */}
        <div className="space-y-3">
          <Label className="text-white font-semibold">Build</Label>
          <div className="grid grid-cols-2 gap-2">
            {builds.map((build) => (
              <button
                key={build.id}
                onClick={() => updateProfile({ build: build.id })}
                className={`p-2 rounded-lg border transition-all text-sm ${
                  userProfile.build === build.id
                    ? 'bg-[#ffa726]/20 border-[#ffa726] text-[#ffa726]'
                    : 'bg-[#2a2d3a] border-[#3a3d4a] text-gray-300 hover:border-[#ffa726]/50'
                }`}
              >
                {build.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skin Tone Selection */}
        <div className="space-y-3">
          <Label className="text-white font-semibold">Skin Tone</Label>
          <div className="grid grid-cols-2 gap-2">
            {skinTones.map((tone) => (
              <button
                key={tone.id}
                onClick={() => updateProfile({ skinTone: tone.id })}
                className={`p-2 rounded-lg border transition-all text-sm flex items-center ${
                  userProfile.skinTone === tone.id
                    ? 'bg-[#ffa726]/20 border-[#ffa726] text-[#ffa726]'
                    : 'bg-[#2a2d3a] border-[#3a3d4a] text-gray-300 hover:border-[#ffa726]/50'
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full mr-2 border border-gray-500"
                  style={{ backgroundColor: tone.color }}
                ></div>
                {tone.name}
              </button>
            ))}
          </div>
        </div>

        {/* Face Shape Selection */}
        <div className="space-y-3">
          <Label className="text-white font-semibold">Face Shape</Label>
          <div className="grid grid-cols-2 gap-2">
            {faceShapes.map((face) => (
              <button
                key={face.id}
                onClick={() => updateProfile({ faceShape: face.id })}
                className={`p-2 rounded-lg border transition-all text-sm flex items-center ${
                  userProfile.faceShape === face.id
                    ? 'bg-[#ffa726]/20 border-[#ffa726] text-[#ffa726]'
                    : 'bg-[#2a2d3a] border-[#3a3d4a] text-gray-300 hover:border-[#ffa726]/50'
                }`}
              >
                <span className="mr-2">{face.icon}</span>
                {face.name}
              </button>
            ))}
          </div>
        </div>

        {/* Age Group */}
        <div className="space-y-3">
          <Label className="text-white font-semibold">Age Group</Label>
          <select
            value={userProfile.ageGroup}
            onChange={(e) => updateProfile({ ageGroup: e.target.value })}
            className="w-full p-2 bg-[#2a2d3a] border border-[#3a3d4a] rounded-lg text-white focus:border-[#ffa726] focus:outline-none"
          >
            <option value="">Select age group</option>
            <option value="teen">Teen (13-19)</option>
            <option value="young-adult">Young Adult (20-29)</option>
            <option value="adult">Adult (30-45)</option>
            <option value="mature">Mature (45+)</option>
          </select>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhysicalProfilePanel;
