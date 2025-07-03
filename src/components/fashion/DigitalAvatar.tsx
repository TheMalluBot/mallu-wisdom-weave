
import { UserProfile } from '@/pages/AIFashion';
import AvatarBase from './AvatarBase';
import AvatarClothing from './AvatarClothing';
import AvatarAccessories from './AvatarAccessories';

interface DigitalAvatarProps {
  userProfile: UserProfile;
}

const DigitalAvatar = ({ userProfile }: DigitalAvatarProps) => {
  const getAvatarHeight = () => {
    // Scale avatar based on height (165cm = 100% scale)
    const baseHeight = 165;
    const scale = userProfile.height / baseHeight;
    return Math.max(0.8, Math.min(1.2, scale)); // Constrain between 80% and 120%
  };

  const getSkinToneColor = () => {
    const skinTones = {
      fair: '#F5DEB3',
      light: '#DEB887',
      medium: '#CD853F',
      olive: '#9CAF88',
      tan: '#D2B48C',
      deep: '#8B4513'
    };
    return skinTones[userProfile.skinTone as keyof typeof skinTones] || '#DEB887';
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div 
        className="relative transition-all duration-500 ease-in-out"
        style={{ 
          transform: `scale(${getAvatarHeight()})`,
          filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))'
        }}
      >
        {/* Main Avatar SVG Container */}
        <svg
          width="280"
          height="400"
          viewBox="0 0 280 400"
          className="transition-all duration-500"
        >
          {/* Background Circle */}
          <defs>
            <radialGradient id="backgroundGradient" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="rgba(255, 167, 38, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 167, 38, 0.05)" />
            </radialGradient>
          </defs>
          
          <circle
            cx="140"
            cy="200"
            r="130"
            fill="url(#backgroundGradient)"
            className="animate-pulse"
          />

          {/* Avatar Base (Body Structure) */}
          <AvatarBase 
            userProfile={userProfile}
            skinToneColor={getSkinToneColor()}
          />

          {/* Avatar Clothing */}
          <AvatarClothing 
            userProfile={userProfile}
            skinToneColor={getSkinToneColor()}
          />

          {/* Avatar Accessories */}
          <AvatarAccessories 
            userProfile={userProfile}
          />
        </svg>

        {/* Real-time Update Indicator */}
        {(userProfile.bodyShape || userProfile.skinTone || userProfile.height !== 165) && (
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center bg-[#ffa726] text-[#1a1b23] px-3 py-1 rounded-full text-xs font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Live Updates Active
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalAvatar;
