
import { Card, CardContent } from '@/components/ui/card';
import { UserProfile } from '@/pages/AIFashion';

interface AvatarPanelProps {
  userProfile: UserProfile;
}

const AvatarPanel = ({ userProfile }: AvatarPanelProps) => {
  const getAvatarStyle = () => {
    const styles = [];
    
    if (userProfile.height < 160) styles.push('Petite styling');
    else if (userProfile.height > 170) styles.push('Tall styling');
    
    if (userProfile.bodyShape) styles.push(`${userProfile.bodyShape} optimized`);
    if (userProfile.skinTone) styles.push(`${userProfile.skinTone} tone matched`);
    
    return styles;
  };

  const getOutfitRecommendation = () => {
    if (!userProfile.bodyShape) return "Complete your profile to see personalized styling";
    
    switch (userProfile.bodyShape) {
      case 'pear':
        return "Wearing A-line Kerala saree with statement blouse - perfect for your pear shape!";
      case 'apple':
        return "Styling empire waist Kasavu saree with V-neck blouse - flattering for apple shapes!";
      case 'hourglass':
        return "Fitted traditional saree with belt accessory - showcases your hourglass figure!";
      case 'rectangle':
        return "Layered Kerala ensemble with ruffled blouse - adds curves to rectangle shape!";
      case 'inverted-triangle':
        return "Flowing saree with detailed bottom border - balances your shoulder line!";
      default:
        return "Traditional Kerala styling customized for your unique profile";
    }
  };

  return (
    <Card className="bg-[#252631] border-[#2a2d3a] h-full">
      <CardContent className="p-8 flex flex-col items-center justify-center h-full">
        {/* Avatar Display */}
        <div className="relative mb-8">
          <div className="w-80 h-96 bg-gradient-to-b from-[#ffa726]/20 to-[#ff7043]/20 rounded-2xl flex items-center justify-center border border-[#ffa726]/30">
            <div className="text-center">
              <div className="text-9xl mb-4 animate-bounce">👤</div>
              <div className="text-4xl mb-2">🥻</div>
              <p className="text-[#ffa726] font-semibold">Kerala Traditional Wear</p>
            </div>
          </div>
          
          {/* Professional lighting effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-[#ffa726]/10 to-transparent rounded-3xl blur-xl"></div>
        </div>

        {/* Avatar Info */}
        <div className="text-center max-w-sm">
          <h3 className="kerala-serif text-2xl font-bold text-white mb-4">
            Your Virtual Stylist
          </h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            {getOutfitRecommendation()}
          </p>

          {/* Active Styling Features */}
          {getAvatarStyle().length > 0 && (
            <div className="space-y-2">
              <p className="text-[#ffa726] font-semibold text-sm">Active Styling:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {getAvatarStyle().map((style, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-[#ffa726]/20 text-[#ffa726] rounded-full text-xs border border-[#ffa726]/30"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Real-time Updates Indicator */}
        {(userProfile.bodyShape || userProfile.skinTone || userProfile.height !== 165) && (
          <div className="mt-6 flex items-center text-green-400 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Live styling updates active
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AvatarPanel;
