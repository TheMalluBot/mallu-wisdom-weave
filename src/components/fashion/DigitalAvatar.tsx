
import { UserProfile } from '@/pages/AIFashion';
import AvatarBase from './AvatarBase';
import AvatarClothing from './AvatarClothing';
import AvatarAccessories from './AvatarAccessories';

interface DigitalAvatarProps {
  userProfile: UserProfile;
}

const DigitalAvatar = ({ userProfile }: DigitalAvatarProps) => {
  const getAvatarHeight = () => {
    const baseHeight = 165;
    const scale = userProfile.height / baseHeight;
    return Math.max(0.85, Math.min(1.15, scale));
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

  const getAvatarPose = () => {
    // Different poses based on style goals
    if (userProfile.styleGoals.includes('elegant')) {
      return 'elegant-pose';
    } else if (userProfile.styleGoals.includes('professional')) {
      return 'professional-pose';
    } else if (userProfile.styleGoals.includes('trendy')) {
      return 'dynamic-pose';
    }
    return 'classic-pose';
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div 
        className="relative transition-all duration-500 ease-in-out"
        style={{ 
          transform: `scale(${getAvatarHeight()})`,
          filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
        }}
      >
        {/* Enhanced Avatar SVG Container */}
        <svg
          width="320"
          height="420"
          viewBox="0 0 280 400"
          className="transition-all duration-500"
        >
          {/* Enhanced Background with lighting */}
          <defs>
            <radialGradient id="backgroundGradient" cx="50%" cy="25%" r="75%">
              <stop offset="0%" stopColor="rgba(255, 167, 38, 0.15)" />
              <stop offset="50%" stopColor="rgba(255, 167, 38, 0.08)" />
              <stop offset="100%" stopColor="rgba(255, 167, 38, 0.03)" />
            </radialGradient>
            
            <filter id="avatarGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background circle with enhanced styling */}
          <circle
            cx="140"
            cy="200"
            r="140"
            fill="url(#backgroundGradient)"
            className="animate-pulse"
          />
          
          {/* Subtle floor shadow */}
          <ellipse
            cx="140"
            cy="380"
            rx="50"
            ry="8"
            fill="rgba(0, 0, 0, 0.2)"
            className="transition-all duration-500"
          />

          {/* Avatar components with enhanced styling */}
          <g filter="url(#avatarGlow)" className={`avatar-container ${getAvatarPose()}`}>
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
          </g>
          
          {/* Subtle highlight on avatar */}
          <circle
            cx="120"
            cy="120"
            r="15"
            fill="rgba(255, 255, 255, 0.1)"
            className="transition-all duration-500"
          />
        </svg>

        {/* Enhanced Real-time Update Indicator */}
        {(userProfile.bodyShape || userProfile.skinTone || userProfile.height !== 165) && (
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center bg-gradient-to-r from-[#ffa726] to-[#ff9800] text-[#1a1b23] px-4 py-2 rounded-full text-xs font-medium shadow-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Real-time Styling Active
            </div>
          </div>
        )}
        
        {/* Style indicator based on current selections */}
        {userProfile.styleGoals.length > 0 && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#252631] border border-[#ffa726] text-[#ffa726] px-3 py-1 rounded-full text-xs">
              {userProfile.styleGoals[0].replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Style
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalAvatar;
