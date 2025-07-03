
import { UserProfile } from '@/pages/AIFashion';

interface AvatarBaseProps {
  userProfile: UserProfile;
  skinToneColor: string;
}

const AvatarBase = ({ userProfile, skinToneColor }: AvatarBaseProps) => {
  const getBodyShape = () => {
    const baseBodyPaths = {
      pear: "M140 160 Q120 170 115 200 Q110 240 120 280 Q130 320 140 330 Q150 320 160 280 Q170 240 165 200 Q160 170 140 160",
      apple: "M140 160 Q115 170 110 200 Q105 240 115 280 Q125 320 140 330 Q155 320 165 280 Q175 240 170 200 Q165 170 140 160",
      hourglass: "M140 160 Q125 170 120 200 Q115 240 125 280 Q135 320 140 330 Q145 320 155 280 Q165 240 160 200 Q155 170 140 160",
      rectangle: "M140 160 Q130 170 128 200 Q126 240 128 280 Q130 320 140 330 Q150 320 152 280 Q154 240 152 200 Q150 170 140 160",
      'inverted-triangle': "M140 160 Q115 170 110 200 Q108 240 118 280 Q128 320 140 330 Q152 320 162 280 Q172 240 170 200 Q165 170 140 160"
    };
    
    return baseBodyPaths[userProfile.bodyShape as keyof typeof baseBodyPaths] || baseBodyPaths.rectangle;
  };

  const getFaceShape = () => {
    const faceShapes = {
      oval: "M140 70 Q120 75 115 100 Q118 125 140 130 Q162 125 165 100 Q160 75 140 70",
      round: "M140 70 Q115 75 110 100 Q115 125 140 130 Q165 125 170 100 Q165 75 140 70",
      square: "M140 70 Q118 72 115 100 Q118 128 140 130 Q162 128 165 100 Q162 72 140 70",
      heart: "M140 70 Q115 75 112 95 Q118 125 140 130 Q162 125 168 95 Q165 75 140 70",
      diamond: "M140 70 Q125 80 120 100 Q125 120 140 130 Q155 120 160 100 Q155 80 140 70",
      long: "M140 65 Q125 70 120 100 Q125 130 140 135 Q155 130 160 100 Q155 70 140 65"
    };
    
    return faceShapes[userProfile.faceShape as keyof typeof faceShapes] || faceShapes.oval;
  };

  const getHairStyle = () => {
    // Enhanced hair styling based on face shape and cultural preferences
    const hairStyles = {
      oval: "M140 70 Q115 65 108 85 Q105 95 110 105 Q115 75 140 70 Q165 75 170 105 Q175 95 172 85 Q165 65 140 70 M125 75 Q120 80 125 85 Q135 82 140 85 Q145 82 155 85 Q160 80 155 75",
      round: "M140 70 Q115 60 105 80 Q102 100 115 105 Q120 75 140 70 Q160 75 165 105 Q178 100 175 80 Q165 60 140 70",
      square: "M140 70 Q118 65 112 85 Q110 105 118 110 Q125 75 140 70 Q155 75 162 110 Q170 105 168 85 Q162 65 140 70",
      heart: "M140 70 Q115 65 110 85 Q108 100 118 105 Q125 75 140 70 Q155 75 162 105 Q172 100 170 85 Q165 65 140 70",
      diamond: "M140 70 Q125 60 118 85 Q115 105 125 110 Q135 75 140 70 Q145 75 155 110 Q165 105 162 85 Q155 60 140 70",
      long: "M140 65 Q125 55 115 80 Q112 105 125 115 Q135 70 140 65 Q145 70 155 115 Q168 105 165 80 Q155 55 140 65"
    };
    
    return hairStyles[userProfile.faceShape as keyof typeof hairStyles] || hairStyles.oval;
  };

  const darkerSkinTone = skinToneColor.replace(/\)$/, ', 0.8)').replace('rgb', 'rgba').replace('#', 'rgba(');

  return (
    <g className="avatar-base transition-all duration-500">
      {/* Enhanced Body with better proportions */}
      <defs>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={skinToneColor} />
          <stop offset="100%" stopColor={darkerSkinTone} />
        </linearGradient>
        
        <radialGradient id="faceGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor={skinToneColor} />
          <stop offset="100%" stopColor={darkerSkinTone} />
        </radialGradient>
      </defs>
      
      {/* Body with gradient shading */}
      <path
        d={getBodyShape()}
        fill="url(#bodyGradient)"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1"
        className="transition-all duration-500"
      />
      
      {/* Enhanced Head with better shading */}
      <path
        d={getFaceShape()}
        fill="url(#faceGradient)"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1"
        className="transition-all duration-500"
      />
      
      {/* Neck with shading */}
      <path
        d="M135 130 Q140 135 145 130 L145 160 Q140 165 135 160 Z"
        fill="url(#faceGradient)"
        className="transition-all duration-500"
      />
      
      {/* Enhanced Arms with better proportions */}
      <ellipse
        cx="105"
        cy="200"
        rx="10"
        ry="40"
        fill="url(#bodyGradient)"
        className="transition-all duration-500"
      />
      <ellipse
        cx="175"
        cy="200"
        rx="10"
        ry="40"
        fill="url(#bodyGradient)"
        className="transition-all duration-500"
      />
      
      {/* Enhanced Hands */}
      <circle cx="105" cy="240" r="8" fill={skinToneColor} />
      <circle cx="175" cy="240" r="8" fill={skinToneColor} />
      
      {/* Enhanced Facial Features */}
      <g className="facial-features">
        {/* Eyebrows */}
        <path d="M125 95 Q130 93 135 95" stroke="#2D3748" strokeWidth="2" fill="none" />
        <path d="M145 95 Q150 93 155 95" stroke="#2D3748" strokeWidth="2" fill="none" />
        
        {/* Eyes with more detail */}
        <ellipse cx="130" cy="100" rx="4" ry="3" fill="white" />
        <ellipse cx="150" cy="100" rx="4" ry="3" fill="white" />
        <circle cx="130" cy="100" r="2" fill="#2D3748" />
        <circle cx="150" cy="100" r="2" fill="#2D3748" />
        <circle cx="131" cy="99" r="0.5" fill="white" />
        <circle cx="151" cy="99" r="0.5" fill="white" />
        
        {/* Enhanced Nose */}
        <path d="M140 105 Q138 110 140 112 Q142 110 140 105" fill="rgba(0,0,0,0.1)" />
        
        {/* Enhanced Mouth */}
        <path d="M135 118 Q140 122 145 118" stroke="#C53030" strokeWidth="2" fill="none" />
        <path d="M137 119 Q140 121 143 119" stroke="#E53E3E" strokeWidth="1" fill="none" />
      </g>
      
      {/* Enhanced Hair with traditional Indian styling */}
      <g className="hair-style">
        <path
          d={getHairStyle()}
          fill="#2D3748"
          className="transition-all duration-500"
        />
        
        {/* Hair texture lines */}
        <path d="M125 80 Q130 85 135 80" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" fill="none" />
        <path d="M145 80 Q150 85 155 80" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" fill="none" />
        <path d="M130 82 Q135 87 140 82" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" fill="none" />
        
        {/* Traditional hair partition */}
        <line x1="140" y1="70" x2="140" y2="85" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
      </g>
      
      {/* Face contour highlights */}
      <path 
        d="M125 105 Q130 108 135 105" 
        stroke="rgba(255,255,255,0.3)" 
        strokeWidth="1" 
        fill="none" 
      />
      <path 
        d="M145 105 Q150 108 155 105" 
        stroke="rgba(255,255,255,0.3)" 
        strokeWidth="1" 
        fill="none" 
      />
    </g>
  );
};

export default AvatarBase;
