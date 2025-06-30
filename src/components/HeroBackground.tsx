
const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-green via-kerala-green-light to-kerala-red opacity-90"></div>
      
      {/* Animated Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,215,0,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,20,60,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(74,124,89,0.1)_0%,transparent_50%)]"></div>
      </div>
      
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-black/20"></div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-kerala-gold/30 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-l from-kerala-red/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-kerala-white/10 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Modern Wave Pattern */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 215, 0, 0.3)" />
              <stop offset="50%" stopColor="rgba(253, 251, 247, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 215, 0, 0.3)" />
            </linearGradient>
          </defs>
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C54.08,13.36,143.09,34.07,321.39,56.44Z" 
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-kerala-gold rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBackground;
