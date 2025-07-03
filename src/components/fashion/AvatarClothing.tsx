
import { UserProfile } from '@/pages/AIFashion';

interface AvatarClothingProps {
  userProfile: UserProfile;
  skinToneColor: string;
}

const AvatarClothing = ({ userProfile, skinToneColor }: AvatarClothingProps) => {
  const getOutfitColors = () => {
    const colorPalettes = {
      fair: { primary: '#8B4513', secondary: '#D4AF37', accent: '#C1121F', blouse: '#4A5568' },
      light: { primary: '#2D3748', secondary: '#D4AF37', accent: '#F72585', blouse: '#1A202C' },
      medium: { primary: '#D4AF37', secondary: '#2D3748', accent: '#C1121F', blouse: '#4A5568' },
      olive: { primary: '#2D5016', secondary: '#D4AF37', accent: '#C1121F', blouse: '#1A202C' },
      tan: { primary: '#8B4513', secondary: '#D4AF37', accent: '#90323D', blouse: '#2D3748' },
      deep: { primary: '#D4AF37', secondary: '#2D3748', accent: '#C1121F', blouse: '#4A5568' }
    };
    
    return colorPalettes[userProfile.skinTone as keyof typeof colorPalettes] || colorPalettes.light;
  };

  const getSareeStyle = () => {
    const bodySpecificStyles = {
      pear: {
        saree: "M118 200 Q108 220 115 280 Q125 320 140 330 Q155 320 165 280 Q172 220 162 200 Q152 190 140 200 Q128 190 118 200",
        pleats: "M135 280 L135 325 M140 280 L140 325 M145 280 L145 325 M150 280 L150 325"
      },
      apple: {
        saree: "M115 200 Q105 220 110 280 Q120 320 140 330 Q160 320 170 280 Q175 220 165 200 Q155 185 140 195 Q125 185 115 200",
        pleats: "M132 280 L132 325 M137 280 L137 325 M142 280 L142 325 M147 280 L147 325"
      },
      hourglass: {
        saree: "M125 200 Q115 220 120 280 Q130 320 140 330 Q150 320 160 280 Q165 220 155 200 Q145 190 140 195 Q135 190 125 200",
        pleats: "M134 280 L134 325 M139 280 L139 325 M144 280 L144 325 M149 280 L149 325"
      },
      rectangle: {
        saree: "M128 200 Q118 220 125 280 Q135 320 140 330 Q145 320 155 280 Q162 220 152 200 Q145 185 140 190 Q135 185 128 200",
        pleats: "M133 280 L133 325 M138 280 L138 325 M143 280 L143 325 M148 280 L148 325"
      },
      'inverted-triangle': {
        saree: "M118 200 Q108 220 115 280 Q125 320 140 330 Q155 320 165 280 Q172 220 162 200 Q152 185 140 190 Q128 185 118 200",
        pleats: "M133 280 L133 325 M138 280 L138 325 M143 280 L143 325 M148 280 L148 325"
      }
    };
    
    return bodySpecificStyles[userProfile.bodyShape as keyof typeof bodySpecificStyles] || bodySpecificStyles.rectangle;
  };

  const colors = getOutfitColors();
  const sareeStyle = getSareeStyle();

  return (
    <g className="avatar-clothing transition-all duration-700">
      {/* Enhanced Saree Patterns and Gradients */}
      <defs>
        <pattern id="kasavuBorder" patternUnits="userSpaceOnUse" width="6" height="4">
          <rect width="6" height="4" fill={colors.secondary} />
          <rect width="3" height="4" fill={colors.primary} />
          <rect width="1" height="4" fill="#FFD700" />
        </pattern>
        
        <pattern id="sareeTexture" patternUnits="userSpaceOnUse" width="8" height="8">
          <rect width="8" height="8" fill={colors.primary} opacity="0.9" />
          <circle cx="4" cy="4" r="0.5" fill={colors.secondary} opacity="0.6" />
        </pattern>
        
        <linearGradient id="sareeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.primary} stopOpacity="0.95" />
          <stop offset="50%" stopColor={colors.primary} stopOpacity="0.85" />
          <stop offset="100%" stopColor={colors.primary} stopOpacity="0.9" />
        </linearGradient>
        
        <linearGradient id="blouseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.blouse} />
          <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.8" />
        </linearGradient>
      </defs>
      
      {/* Enhanced Blouse with better fit */}
      <g className="blouse">
        {/* Main blouse body */}
        <path
          d="M120 160 Q115 165 118 180 Q120 195 140 195 Q160 195 162 180 Q165 165 160 160 Q150 155 140 160 Q130 155 120 160"
          fill="url(#blouseGradient)"
          stroke={colors.accent}
          strokeWidth="1"
          className="transition-all duration-700"
        />
        
        {/* Blouse sleeves with better shaping */}
        <ellipse cx="108" cy="175" rx="15" ry="20" fill={colors.blouse} opacity="0.9" />
        <ellipse cx="172" cy="175" rx="15" ry="20" fill={colors.blouse} opacity="0.9" />
        
        {/* Blouse neckline detail */}
        <path 
          d="M125 165 Q135 160 145 160 Q155 160 155 165" 
          stroke={colors.accent} 
          strokeWidth="2" 
          fill="none" 
        />
        
        {/* Traditional blouse patterns */}
        <circle cx="130" cy="175" r="2" fill={colors.secondary} opacity="0.7" />
        <circle cx="150" cy="175" r="2" fill={colors.secondary} opacity="0.7" />
        <circle cx="140" cy="180" r="1.5" fill={colors.secondary} opacity="0.7" />
      </g>
      
      {/* Enhanced Saree Drape */}
      <g className="saree-drape">
        {/* Main saree body */}
        <path
          d={sareeStyle.saree}
          fill="url(#sareeGradient)"
          stroke={colors.secondary}
          strokeWidth="0.5"
          className="transition-all duration-700"
        />
        
        {/* Saree texture overlay */}
        <path
          d={sareeStyle.saree}
          fill="url(#sareeTexture)"
          opacity="0.3"
          className="transition-all duration-700"
        />
        
        {/* Traditional pleats */}
        <g className="pleats" stroke={colors.secondary} strokeWidth="1" opacity="0.6">
          {sareeStyle.pleats.split(' ').map((pleat, index) => {
            if (pleat.startsWith('M') || pleat.startsWith('L')) {
              const coords = pleat.substring(1).split(' ');
              if (coords.length === 2) {
                const [x, y] = coords;
                return (
                  <line
                    key={index}
                    x1={x}
                    y1={y}
                    x2={x}
                    y2={parseInt(y) + 45}
                    className="transition-all duration-700"
                  />
                );
              }
            }
            return null;
          })}
        </g>
        
        {/* Enhanced Kasavu Border */}
        <path
          d="M118 315 Q140 320 162 315 Q165 312 162 308 Q140 313 118 308 Q115 312 118 315"
          fill="url(#kasavuBorder)"
          className="transition-all duration-700"
        />
        
        {/* Border embellishments */}
        <path
          d="M120 310 Q140 312 160 310"
          stroke="#FFD700"
          strokeWidth="1"
          fill="none"
          opacity="0.8"
        />
      </g>
      
      {/* Pallu (over shoulder drape) */}
      <g className="pallu">
        <path
          d="M125 160 Q115 145 120 130 Q130 135 145 130 Q160 135 165 145 Q160 155 150 165 Q140 170 130 165"
          fill={colors.primary}
          fillOpacity="0.85"
          stroke={colors.secondary}
          strokeWidth="0.5"
          className="transition-all duration-700"
        />
        
        {/* Pallu border */}
        <path
          d="M125 160 Q140 155 165 145"
          stroke="url(#kasavuBorder)"
          strokeWidth="3"
          fill="none"
        />
        
        {/* Pallu patterns */}
        <circle cx="135" cy="145" r="1.5" fill={colors.secondary} opacity="0.8" />
        <circle cx="145" cy="150" r="1.5" fill={colors.secondary} opacity="0.8" />
        <circle cx="155" cy="145" r="1.5" fill={colors.secondary} opacity="0.8" />
      </g>
      
      {/* Petticoat (underskirt) hem */}
      <ellipse
        cx="140"
        cy="330"
        rx="25"
        ry="3"
        fill={colors.blouse}
        opacity="0.6"
      />
      
      {/* Style-specific enhancements */}
      {userProfile.occasions.includes('festive') && (
        <g className="festival-elements">
          {/* Extra embellishments */}
          <circle cx="140" cy="200" r="2" fill="#FFD700" opacity="0.9" />
          <circle cx="135" cy="210" r="1.5" fill="#FFD700" opacity="0.7" />
          <circle cx="145" cy="210" r="1.5" fill="#FFD700" opacity="0.7" />
          <circle cx="140" cy="220" r="1" fill="#FFD700" opacity="0.8" />
        </g>
      )}
      
      {userProfile.occasions.includes('office') && (
        <g className="professional-elements">
          {/* Simplified, elegant styling */}
          <rect x="138" y="185" width="4" height="6" fill={colors.secondary} opacity="0.5" rx="1" />
        </g>
      )}
    </g>
  );
};

export default AvatarClothing;
