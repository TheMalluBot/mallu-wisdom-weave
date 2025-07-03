
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
      oval: "M140 80 Q120 85 115 110 Q120 135 140 140 Q160 135 165 110 Q160 85 140 80",
      round: "M140 80 Q115 85 110 110 Q115 135 140 140 Q165 135 170 110 Q165 85 140 80",
      square: "M140 80 Q118 82 115 110 Q118 138 140 140 Q162 138 165 110 Q162 82 140 80",
      heart: "M140 80 Q115 85 112 105 Q118 135 140 140 Q162 135 168 105 Q165 85 140 80",
      diamond: "M140 80 Q125 90 120 110 Q125 130 140 140 Q155 130 160 110 Q155 90 140 80",
      long: "M140 75 Q125 80 120 110 Q125 140 140 145 Q155 140 160 110 Q155 80 140 75"
    };
    
    return faceShapes[userProfile.faceShape as keyof typeof faceShapes] || faceShapes.oval;
  };

  return (
    <g className="avatar-base transition-all duration-500">
      {/* Body */}
      <path
        d={getBodyShape()}
        fill={skinToneColor}
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1"
        className="transition-all duration-500"
      />
      
      {/* Head */}
      <path
        d={getFaceShape()}
        fill={skinToneColor}
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1"
        className="transition-all duration-500"
      />
      
      {/* Neck */}
      <rect
        x="135"
        y="140"
        width="10"
        height="20"
        fill={skinToneColor}
        className="transition-all duration-500"
      />
      
      {/* Arms */}
      <ellipse
        cx="105"
        cy="200"
        rx="8"
        ry="35"
        fill={skinToneColor}
        className="transition-all duration-500"
      />
      <ellipse
        cx="175"
        cy="200"
        rx="8"
        ry="35"
        fill={skinToneColor}
        className="transition-all duration-500"
      />
      
      {/* Hands */}
      <circle cx="105" cy="235" r="6" fill={skinToneColor} />
      <circle cx="175" cy="235" r="6" fill={skinToneColor} />
      
      {/* Facial Features */}
      <g className="facial-features">
        {/* Eyes */}
        <circle cx="130" cy="110" r="2" fill="#2D3748" />
        <circle cx="150" cy="110" r="2" fill="#2D3748" />
        
        {/* Nose */}
        <line x1="140" y1="115" x2="140" y2="120" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
        
        {/* Mouth */}
        <path d="M135 125 Q140 128 145 125" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" fill="none" />
      </g>
      
      {/* Hair (basic) */}
      <path
        d="M140 80 Q115 75 110 95 Q108 110 115 110 Q120 85 140 80 Q160 85 165 110 Q172 110 170 95 Q165 75 140 80"
        fill="#2D3748"
        className="transition-all duration-500"
      />
    </g>
  );
};

export default AvatarBase;
