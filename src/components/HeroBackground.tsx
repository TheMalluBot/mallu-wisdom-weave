
const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-kerala-gradient"></div>
      
      {/* Kerala Pattern Overlay */}
      <div className="absolute inset-0 bg-kerala-pattern opacity-40"></div>
      
      {/* Overlay for optimal text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      
      {/* Floating Kerala Cultural Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Coconut Palm Silhouette */}
          <div className="absolute top-20 left-10 w-32 h-32 opacity-30">
            <svg viewBox="0 0 100 100" className="w-full h-full text-kerala-gold">
              <path d="M50 90 L50 40 M30 45 Q40 35 50 40 Q60 35 70 45 M25 50 Q35 40 50 40 Q65 40 75 50 M35 55 Q45 45 50 40 Q55 45 65 55" 
                    stroke="currentColor" strokeWidth="2" fill="none" className="animate-kerala-pulse"/>
            </svg>
          </div>
          
          {/* Traditional Lamp (Diya) */}
          <div className="absolute top-40 right-20 w-24 h-24 opacity-40">
            <svg viewBox="0 0 100 100" className="w-full h-full text-kerala-gold animate-kerala-glow">
              <ellipse cx="50" cy="70" rx="25" ry="8" fill="currentColor"/>
              <ellipse cx="50" cy="65" rx="20" ry="6" fill="currentColor"/>
              <path d="M45 55 Q50 45 55 55 Q50 50 45 55" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Spice/Cardamom */}
          <div className="absolute bottom-32 left-1/4 w-20 h-20 opacity-25">
            <svg viewBox="0 0 100 100" className="w-full h-full text-kerala-green animate-kerala-float">
              <ellipse cx="50" cy="50" rx="15" ry="30" fill="currentColor"/>
              <ellipse cx="50" cy="50" rx="10" ry="25" fill="currentColor" opacity="0.7"/>
            </svg>
          </div>
          
          {/* Temple Architecture Element */}
          <div className="absolute bottom-20 right-10 w-28 h-28 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-kerala-gold">
              <rect x="20" y="60" width="60" height="30" fill="currentColor"/>
              <polygon points="15,60 50,30 85,60" fill="currentColor"/>
              <rect x="40" y="70" width="20" height="20" fill="rgba(0,0,0,0.3)"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Enhanced Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(254, 250, 224, 0.1)" />
              <stop offset="50%" stopColor="rgba(212, 175, 55, 0.2)" />
              <stop offset="100%" stopColor="rgba(254, 250, 224, 0.1)" />
            </linearGradient>
          </defs>
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C54.08,13.36,143.09,34.07,321.39,56.44Z" 
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroBackground;
