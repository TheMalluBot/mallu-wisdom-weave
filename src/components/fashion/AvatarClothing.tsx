
import { UserProfile } from '@/pages/AIFashion';

interface AvatarClothingProps {
  userProfile: UserProfile;
  skinToneColor: string;
}

const AvatarClothing = ({ userProfile, skinToneColor }: AvatarClothingProps) => {
  const getOutfitColors = () => {
    const colorPalettes = {
      fair: { primary: '#D4AF37', secondary: '#8B4513', accent: '#C1121F' },
      light: { primary: '#1B4332', secondary: '#D4AF37', accent: '#F72585' },
      medium: { primary: '#D4AF37', secondary: '#1B4332', accent: '#C1121F' },
      olive: { primary: '#2D5016', secondary: '#D4AF37', accent: '#C1121F' },
      tan: { primary: '#D4AF37', secondary: '#1B4332', accent: '#90323D' },
      deep: { primary: '#D4AF37', secondary: '#F4E4A6', accent: '#C1121F' }
    };
    
    return colorPalettes[userProfile.skinTone as keyof typeof colorPalettes] || colorPalettes.light;
  };

  const getSareeStyle = () => {
    const bodySpecificStyles = {
      pear: "M120 200 Q110 220 115 280 Q125 320 140 330 Q155 320 165 280 Q170 220 160 200 Q150 190 140 200 Q130 190 120 200",
      apple: "M115 200 Q105 220 110 280 Q120 320 140 330 Q160 320 170 280 Q175 220 165 200 Q155 185 140 195 Q125 185 115 200",
      hourglass: "M125 200 Q115 220 120 280 Q130 320 140 330 Q150 320 160 280 Q165 220 155 200 Q145 190 140 195 Q135 190 125 200",
      rectangle: "M128 200 Q118 220 125 280 Q135 320 140 330 Q145 320 155 280 Q162 220 152 200 Q145 185 140 190 Q135 185 128 200",
      'inverted-triangle': "M118 200 Q108 220 115 280 Q125 320 140 330 Q155 320 165 280 Q172 220 162 200 Q152 185 140 190 Q128 185 118 200"
    };
    
    return bodySpecificStyles[userProfile.bodyShape as keyof typeof bodySpecificStyles] || bodySpecificStyles.rectangle;
  };

  const colors = getOutfitColors();

  return (
    <g className="avatar-clothing transition-all duration-700">
      {/* Traditional Kerala Saree */}
      <defs>
        <pattern id="kasavuBorder" patternUnits="userSpaceOnUse" width="4" height="4">
          <rect width="4" height="4" fill={colors.primary} />
          <rect width="2" height="4" fill={colors.secondary} />
        </pattern>
        
        <linearGradient id="sareeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.primary} stopOpacity="0.9" />
          <stop offset="100%" stopColor={colors.primary} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      
      {/* Saree Drape */}
      <path
        d={getSareeStyle()}
        fill="url(#sareeGradient)"
        stroke={colors.secondary}
        strokeWidth="1"
        className="transition-all duration-700"
      />
      
      {/* Kasavu Border */}
      <path
        d="M120 320 Q140 325 160 320 Q165 315 160 310 Q140 315 120 310 Q115 315 120 320"
        fill="url(#kasavuBorder)"
        className="transition-all duration-700"
      />
      
      {/* Blouse */}
      <rect
        x="120"
        y="160"
        width="40"
        height="35"
        rx="5"
        fill={colors.secondary}
        stroke={colors.accent}
        strokeWidth="1"
        className="transition-all duration-700"
      />
      
      {/* Blouse Details (sleeves) */}
      <ellipse cx="110" cy="175" rx="12" ry="18" fill={colors.secondary} />
      <ellipse cx="170" cy="175" rx="12" ry="18" fill={colors.secondary} />
      
      {/* Pallu (over shoulder) */}
      <path
        d="M130 160 Q120 150 125 140 Q135 145 145 140 Q155 145 155 155 Q150 165 140 170"
        fill={colors.primary}
        fillOpacity="0.8"
        className="transition-all duration-700"
      />
      
      {/* Traditional Pleats */}
      <g className="pleats">
        <line x1="135" y1="280" x2="135" y2="320" stroke={colors.secondary} strokeWidth="1" opacity="0.6" />
        <line x1="140" y1="280" x2="140" y2="320" stroke={colors.secondary} strokeWidth="1" opacity="0.6" />
        <line x1="145" y1="280" x2="145" y2="320" stroke={colors.secondary} strokeWidth="1" opacity="0.6" />
      </g>
      
      {/* Style-specific adjustments based on occasions */}
      {userProfile.occasions.includes('Festival/Celebration') && (
        <g className="festival-elements">
          {/* Extra gold accents */}
          <circle cx="140" cy="180" r="3" fill={colors.primary} opacity="0.8" />
          <circle cx="135" cy="185" r="2" fill={colors.primary} opacity="0.6" />
          <circle cx="145" cy="185" r="2" fill={colors.primary} opacity="0.6" />
        </g>
      )}
      
      {userProfile.occasions.includes('Work/Office') && (
        <g className="professional-elements">
          {/* Simplified, elegant styling */}
          <rect x="138" y="178" width="4" height="4" fill={colors.secondary} opacity="0.7" />
        </g>
      )}
    </g>
  );
};

export default AvatarClothing;
