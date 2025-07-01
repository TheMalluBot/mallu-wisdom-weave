
const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-kerala-gradient"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-kerala-gold/20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-kerala-red/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-kerala-white/10 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-kerala-gold/15 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      {/* Wave Effect at Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C54.08,13.36,143.09,34.07,321.39,56.44Z" 
            fill="rgba(253, 251, 247, 0.1)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroBackground;
