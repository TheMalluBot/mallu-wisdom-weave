
const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/ebc556c8-6576-4580-a2fb-dfa229a2247f.png"
          alt="Kerala Backwaters"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/40"></div>
      
      {/* Additional overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      
      {/* Subtle Kerala pattern overlay */}
      <div className="absolute inset-0 bg-kerala-pattern opacity-10"></div>

      {/* Floating Kerala Cultural Elements - positioned to not interfere with the image */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0">
          {/* Traditional Lamp - positioned in upper left area */}
          <div className="absolute top-20 left-10 w-16 h-16 opacity-30">
            <svg viewBox="0 0 100 100" className="w-full h-full text-kerala-gold animate-kerala-glow">
              <ellipse cx="50" cy="70" rx="25" ry="8" fill="currentColor"/>
              <ellipse cx="50" cy="65" rx="20" ry="6" fill="currentColor"/>
              <path d="M45 55 Q50 45 55 55 Q50 50 45 55" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Spice/Cardamom - positioned in right area */}
          <div className="absolute top-40 right-20 w-12 h-12 opacity-25">
            <svg viewBox="0 0 100 100" className="w-full h-full text-kerala-gold animate-kerala-float">
              <ellipse cx="50" cy="50" rx="15" ry="30" fill="currentColor"/>
              <ellipse cx="50" cy="50" rx="10" ry="25" fill="currentColor" opacity="0.7"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Enhanced Wave Effect at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
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
