
import { UserProfile } from '@/pages/AIFashion';

interface AvatarAccessoriesProps {
  userProfile: UserProfile;
}

const AvatarAccessories = ({ userProfile }: AvatarAccessoriesProps) => {
  const getJewelryStyle = () => {
    // Jewelry based on face shape and cultural preferences
    const jewelry = {
      oval: { earrings: 'long', necklace: 'choker' },
      round: { earrings: 'long', necklace: 'long' },
      square: { earrings: 'rounded', necklace: 'layered' },
      heart: { earrings: 'wide', necklace: 'statement' },
      diamond: { earrings: 'chandelier', necklace: 'simple' },
      long: { earrings: 'wide', necklace: 'choker' }
    };
    
    return jewelry[userProfile.faceShape as keyof typeof jewelry] || jewelry.oval;
  };

  const getMetalColor = () => {
    // Metal choice based on skin tone
    const warmUndertones = ['fair', 'tan', 'medium'];
    return warmUndertones.includes(userProfile.skinTone) ? '#D4AF37' : '#C0C0C0';
  };

  const jewelryStyle = getJewelryStyle();
  const metalColor = getMetalColor();

  return (
    <g className="avatar-accessories transition-all duration-500">
      {/* Traditional Kerala Jewelry */}
      
      {/* Earrings based on face shape */}
      {jewelryStyle.earrings === 'long' && (
        <g className="long-earrings">
          <ellipse cx="118" cy="115" rx="2" ry="8" fill={metalColor} />
          <ellipse cx="162" cy="115" rx="2" ry="8" fill={metalColor} />
          <circle cx="118" cy="123" r="3" fill={metalColor} opacity="0.8" />
          <circle cx="162" cy="123" r="3" fill={metalColor} opacity="0.8" />
        </g>
      )}
      
      {jewelryStyle.earrings === 'wide' && (
        <g className="wide-earrings">
          <ellipse cx="115" cy="115" rx="4" ry="3" fill={metalColor} />
          <ellipse cx="165" cy="115" rx="4" ry="3" fill={metalColor} />
        </g>
      )}
      
      {jewelryStyle.earrings === 'chandelier' && (
        <g className="chandelier-earrings">
          <path d="M118 112 L115 118 L121 118 Z" fill={metalColor} />
          <path d="M162 112 L159 118 L165 118 Z" fill={metalColor} />
          <circle cx="118" cy="120" r="2" fill={metalColor} opacity="0.7" />
          <circle cx="162" cy="120" r="2" fill={metalColor} opacity="0.7" />
        </g>
      )}
      
      {/* Necklaces based on face shape */}
      {jewelryStyle.necklace === 'choker' && (
        <ellipse cx="140" cy="148" rx="15" ry="3" fill="none" stroke={metalColor} strokeWidth="2" />
      )}
      
      {jewelryStyle.necklace === 'long' && (
        <path d="M125 148 Q140 155 155 148" fill="none" stroke={metalColor} strokeWidth="2" />
      )}
      
      {jewelryStyle.necklace === 'statement' && (
        <g className="statement-necklace">
          <ellipse cx="140" cy="150" rx="18" ry="4" fill="none" stroke={metalColor} strokeWidth="2" />
          <circle cx="140" cy="154" r="4" fill={metalColor} opacity="0.8" />
        </g>
      )}
      
      {/* Traditional Kerala accessories based on occasions */}
      {userProfile.occasions.includes('Festival/Celebration') && (
        <g className="festival-accessories">
          {/* Maang Tikka */}
          <circle cx="140" cy="90" r="2" fill={metalColor} />
          <path d="M140 88 L138 85 L142 85 Z" fill={metalColor} />
          
          {/* Bangles */}
          <ellipse cx="105" cy="220" rx="6" ry="2" fill="none" stroke={metalColor} strokeWidth="1.5" />
          <ellipse cx="175" cy="220" rx="6" ry="2" fill="none" stroke={metalColor} strokeWidth="1.5" />
        </g>
      )}
      
      {userProfile.occasions.includes('Wedding') && (
        <g className="wedding-accessories">
          {/* Heavy Traditional Jewelry */}
          <rect x="138" y="145" width="4" height="8" rx="2" fill={metalColor} />
          <circle cx="140" cy="153" r="3" fill="#C1121F" opacity="0.8" />
          
          {/* Nose Ring (Nath) */}
          <circle cx="142" cy="118" r="1.5" fill="none" stroke={metalColor} strokeWidth="0.5" />
        </g>
      )}
      
      {/* Hair Accessories */}
      {userProfile.occasions.includes('Traditional Events') && (
        <g className="hair-accessories">
          {/* Gajra (Flower garland) */}
          <circle cx="125" cy="95" r="1.5" fill="#FFEAA7" />
          <circle cx="130" cy="92" r="1.5" fill="#FFEAA7" />
          <circle cx="135" cy="90" r="1.5" fill="#FFEAA7" />
          <circle cx="140" cy="89" r="1.5" fill="#FFEAA7" />
          <circle cx="145" cy="90" r="1.5" fill="#FFEAA7" />
          <circle cx="150" cy="92" r="1.5" fill="#FFEAA7" />
          <circle cx="155" cy="95" r="1.5" fill="#FFEAA7" />
        </g>
      )}
      
      {/* Age-appropriate accessories */}
      {userProfile.ageGroup === 'young-adult' && (
        <g className="modern-accessories">
          {/* Subtle modern earrings */}
          <circle cx="118" cy="115" r="2" fill={metalColor} />
          <circle cx="162" cy="115" r="2" fill={metalColor} />
        </g>
      )}
      
      {userProfile.ageGroup === 'mature' && (
        <g className="elegant-accessories">
          {/* Classic, elegant jewelry */}
          <ellipse cx="140" cy="148" rx="12" ry="2" fill="none" stroke={metalColor} strokeWidth="1.5" />
          <rect x="116" y="113" width="4" height="4" rx="2" fill={metalColor} />
          <rect x="160" y="113" width="4" height="4" rx="2" fill={metalColor} />
        </g>
      )}
    </g>
  );
};

export default AvatarAccessories;
