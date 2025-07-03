
import { UserProfile } from '@/pages/AIFashion';

interface AvatarAccessoriesProps {
  userProfile: UserProfile;
}

const AvatarAccessories = ({ userProfile }: AvatarAccessoriesProps) => {
  const getJewelryStyle = () => {
    const jewelry = {
      oval: { earrings: 'long-chandelier', necklace: 'layered' },
      round: { earrings: 'long-drop', necklace: 'long-chain' },
      square: { earrings: 'rounded-studs', necklace: 'choker' },
      heart: { earrings: 'wide-hoops', necklace: 'statement' },
      diamond: { earrings: 'chandelier', necklace: 'simple-chain' },
      long: { earrings: 'wide-studs', necklace: 'choker-set' }
    };
    
    return jewelry[userProfile.faceShape as keyof typeof jewelry] || jewelry.oval;
  };

  const getMetalColor = () => {
    const warmUndertones = ['fair', 'tan', 'medium'];
    return warmUndertones.includes(userProfile.skinTone) ? '#D4AF37' : '#C0C0C0';
  };

  const jewelryStyle = getJewelryStyle();
  const metalColor = getMetalColor();

  return (
    <g className="avatar-accessories transition-all duration-500">
      {/* Enhanced Traditional Kerala Jewelry */}
      <defs>
        <radialGradient id="goldGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor={metalColor} />
        </radialGradient>
        
        <pattern id="jewelryPattern" patternUnits="userSpaceOnUse" width="2" height="2">
          <circle cx="1" cy="1" r="0.3" fill="#FFD700" opacity="0.8" />
        </pattern>
      </defs>
      
      {/* Traditional Earrings based on face shape */}
      {jewelryStyle.earrings === 'long-chandelier' && (
        <g className="chandelier-earrings">
          {/* Left earring */}
          <g className="left-earring">
            <circle cx="115" cy="108" r="2" fill="url(#goldGradient)" />
            <path d="M115 110 L112 116 L118 116 Z" fill="url(#goldGradient)" />
            <circle cx="115" cy="118" r="2.5" fill="url(#goldGradient)" />
            <circle cx="112" cy="122" r="1.5" fill="#C1121F" opacity="0.9" />
            <circle cx="118" cy="122" r="1.5" fill="#C1121F" opacity="0.9" />
            <circle cx="115" cy="125" r="2" fill="url(#goldGradient)" />
          </g>
          
          {/* Right earring */}
          <g className="right-earring">
            <circle cx="165" cy="108" r="2" fill="url(#goldGradient)" />
            <path d="M165 110 L162 116 L168 116 Z" fill="url(#goldGradient)" />
            <circle cx="165" cy="118" r="2.5" fill="url(#goldGradient)" />
            <circle cx="162" cy="122" r="1.5" fill="#C1121F" opacity="0.9" />
            <circle cx="168" cy="122" r="1.5" fill="#C1121F" opacity="0.9" />
            <circle cx="165" cy="125" r="2" fill="url(#goldGradient)" />
          </g>
        </g>
      )}
      
      {jewelryStyle.earrings === 'long-drop' && (
        <g className="drop-earrings">
          <ellipse cx="115" cy="115" rx="2" ry="8" fill="url(#goldGradient)" />
          <ellipse cx="165" cy="115" rx="2" ry="8" fill="url(#goldGradient)" />
          <circle cx="115" cy="123" r="3" fill="#C1121F" opacity="0.8" />
          <circle cx="165" cy="123" r="3" fill="#C1121F" opacity="0.8" />
        </g>
      )}
      
      {jewelryStyle.earrings === 'wide-hoops' && (
        <g className="hoop-earrings">
          <ellipse cx="112" cy="115" rx="5" ry="4" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
          <ellipse cx="168" cy="115" rx="5" ry="4" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
        </g>
      )}
      
      {/* Traditional Necklaces */}
      {jewelryStyle.necklace === 'layered' && (
        <g className="layered-necklace">
          {/* Short choker */}
          <ellipse cx="140" cy="145" rx="18" ry="3" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
          <circle cx="140" cy="148" r="2" fill="#C1121F" opacity="0.9" />
          
          {/* Medium chain */}
          <path d="M122 150 Q140 158 158 150" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
          <circle cx="140" cy="158" r="3" fill="url(#goldGradient)" />
          <circle cx="140" cy="158" r="1.5" fill="#C1121F" opacity="0.9" />
          
          {/* Long chain */}
          <path d="M125 155 Q140 165 155 155" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
          <ellipse cx="140" cy="165" rx="4" ry="2" fill="url(#goldGradient)" />
        </g>
      )}
      
      {jewelryStyle.necklace === 'statement' && (
        <g className="statement-necklace">
          <ellipse cx="140" cy="150" rx="20" ry="5" fill="none" stroke="url(#goldGradient)" strokeWidth="3" />
          <circle cx="140" cy="155" r="4" fill="url(#goldGradient)" />
          <circle cx="135" cy="153" r="2" fill="#C1121F" opacity="0.9" />
          <circle cx="145" cy="153" r="2" fill="#C1121F" opacity="0.9" />
          <circle cx="130" cy="152" r="1.5" fill="url(#goldGradient)" />
          <circle cx="150" cy="152" r="1.5" fill="url(#goldGradient)" />
        </g>
      )}
      
      {jewelryStyle.necklace === 'choker' && (
        <g className="choker-necklace">
          <ellipse cx="140" cy="145" rx="16" ry="2" fill="none" stroke="url(#goldGradient)" strokeWidth="3" />
          <rect x="138" y="144" width="4" height="2" rx="1" fill="#C1121F" opacity="0.9" />
        </g>
      )}
      
      {/* Traditional Kerala accessories based on occasions */}
      {userProfile.occasions.includes('festive') && (
        <g className="festival-accessories">
          {/* Maang Tikka (forehead jewelry) */}
          <circle cx="140" cy="85" r="2.5" fill="url(#goldGradient)" />
          <path d="M140 82 L137 78 L143 78 Z" fill="url(#goldGradient)" />
          <circle cx="140" cy="80" r="1" fill="#C1121F" opacity="0.9" />
          <line x1="140" y1="85" x2="140" y2="75" stroke="url(#goldGradient)" strokeWidth="1" />
          
          {/* Bangles */}
          <g className="bangles">
            <ellipse cx="105" cy="225" rx="8" ry="2" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
            <ellipse cx="105" cy="227" rx="8" ry="2" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
            <ellipse cx="175" cy="225" rx="8" ry="2" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
            <ellipse cx="175" cy="227" rx="8" ry="2" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
          </g>
          
          {/* Hair ornament */}
          <circle cx="155" cy="80" r="1.5" fill="url(#goldGradient)" />
          <circle cx="125" cy="80" r="1.5" fill="url(#goldGradient)" />
        </g>
      )}
      
      {userProfile.occasions.includes('wedding') && (
        <g className="wedding-accessories">
          {/* Heavy Traditional Jewelry Set */}
          <rect x="136" y="142" width="8" height="12" rx="2" fill="url(#goldGradient)" />
          <circle cx="140" cy="154" r="4" fill="#C1121F" opacity="0.9" />
          <circle cx="136" cy="151" r="2" fill="url(#goldGradient)" />
          <circle cx="144" cy="151" r="2" fill="url(#goldGradient)" />
          
          {/* Nose Ring (Nath) */}
          <circle cx="143" cy="112" r="2" fill="none" stroke="url(#goldGradient)" strokeWidth="1" />
          <circle cx="143" cy="112" r="0.5" fill="#C1121F" opacity="0.9" />
          
          {/* Armlets */}
          <ellipse cx="105" cy="190" rx="6" ry="3" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
          <ellipse cx="175" cy="190" rx="6" ry="3" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
        </g>
      )}
      
      {/* Hair Accessories - Gajra (Flower garland) */}
      {(userProfile.occasions.includes('festive') || userProfile.occasions.includes('wedding')) && (
        <g className="gajra">
          <circle cx="120" cy="85" r="1.5" fill="#FFEAA7" />
          <circle cx="125" cy="82" r="1.5" fill="#FFEAA7" />
          <circle cx="130" cy="80" r="1.5" fill="#FFEAA7" />
          <circle cx="135" cy="79" r="1.5" fill="#FFEAA7" />
          <circle cx="140" cy="78" r="1.5" fill="#FFEAA7" />
          <circle cx="145" cy="79" r="1.5" fill="#FFEAA7" />
          <circle cx="150" cy="80" r="1.5" fill="#FFEAA7" />
          <circle cx="155" cy="82" r="1.5" fill="#FFEAA7" />
          <circle cx="160" cy="85" r="1.5" fill="#FFEAA7" />
          
          {/* Flower centers */}
          <circle cx="125" cy="82" r="0.5" fill="#FFA500" />
          <circle cx="135" cy="79" r="0.5" fill="#FFA500" />
          <circle cx="145" cy="79" r="0.5" fill="#FFA500" />
          <circle cx="155" cy="82" r="0.5" fill="#FFA500" />
        </g>
      )}
      
      {/* Age-appropriate and style-specific accessories */}
      {userProfile.ageGroup === 'young-adult' && (
        <g className="modern-accessories">
          <circle cx="115" cy="115" r="2.5" fill="url(#goldGradient)" />
          <circle cx="165" cy="115" r="2.5" fill="url(#goldGradient)" />
          <circle cx="115" cy="115" r="1" fill="#C1121F" opacity="0.8" />
          <circle cx="165" cy="115" r="1" fill="#C1121F" opacity="0.8" />
        </g>
      )}
      
      {userProfile.ageGroup === 'mature' && (
        <g className="elegant-accessories">
          <ellipse cx="140" cy="145" rx="15" ry="2" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
          <rect x="113" y="112" width="6" height="6" rx="3" fill="url(#goldGradient)" />
          <rect x="161" y="112" width="6" height="6" rx="3" fill="url(#goldGradient)" />
          <circle cx="116" cy="115" r="1" fill="#C1121F" opacity="0.9" />
          <circle cx="164" cy="115" r="1" fill="#C1121F" opacity="0.9" />
        </g>
      )}
      
      {/* Bindi (forehead decoration) */}
      <circle cx="140" cy="95" r="1.5" fill="#C1121F" opacity="0.9" />
      <circle cx="140" cy="95" r="0.5" fill="#FFD700" opacity="0.8" />
    </g>
  );
};

export default AvatarAccessories;
