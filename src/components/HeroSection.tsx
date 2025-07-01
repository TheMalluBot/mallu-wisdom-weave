
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      {/* Floating Cultural Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Coconut */}
        <div className="animate-kerala-float absolute top-20 right-20 opacity-40">
          <svg className="w-16 h-16 text-kerala-gold" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" fill="currentColor" opacity="0.8"/>
            <circle cx="50" cy="50" r="25" fill="currentColor"/>
            <path d="M35 35 Q50 25 65 35" stroke="rgba(0,0,0,0.3)" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        {/* Palm Leaves */}
        <div className="animate-kerala-float absolute bottom-32 left-16 opacity-30" style={{ animationDelay: '1s' }}>
          <svg className="w-12 h-12 text-kerala-green" viewBox="0 0 100 100">
            <path d="M20 80 Q30 40 50 20 Q70 40 80 80 Q50 60 20 80" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Traditional Lamp */}
        <div className="animate-kerala-glow absolute top-40 left-20">
          <svg className="w-10 h-10 text-kerala-gold" viewBox="0 0 100 100">
            <ellipse cx="50" cy="70" rx="25" ry="8" fill="currentColor"/>
            <path d="M45 55 Q50 45 55 55" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Enhanced Typography */}
        <div className="mb-6">
          <h1 className="kerala-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-kerala-white kerala-text-shadow leading-tight">
            Experience Kerala
            <span className="block text-kerala-gold kerala-text-shadow-soft mt-2">
              Like Never Before
            </span>
          </h1>
          
          {/* Malayalam Subtitle */}
          <p className="kerala-malayalam text-lg md:text-xl text-kerala-white/90 mb-2 kerala-text-shadow-soft">
            കേരളത്തിന്റെ സൗന്ദര്യം അനുഭവിക്കൂ
          </p>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-kerala-white/90 max-w-3xl mx-auto leading-relaxed kerala-text-shadow-soft font-medium">
          AI Fashion Meets Traditional Wisdom
        </p>
        
        <p className="text-lg mb-12 text-kerala-white/80 max-w-2xl mx-auto leading-relaxed">
          Try virtual Malayalam attire, discover ancient stories, and unlock Kerala's best-kept secrets
        </p>

        {/* Enhanced Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="group bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green font-semibold px-10 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-kerala-gold hover:shadow-kerala-glow border-2 border-kerala-gold-light/20"
          >
            <span className="flex items-center gap-3">
              Try AI Fashion
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
              </svg>
            </span>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-2 border-kerala-white/80 text-kerala-white hover:bg-kerala-white hover:text-kerala-green font-semibold px-10 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 shadow-kerala-soft"
          >
            <span className="flex items-center gap-3">
              Explore Kerala Stories
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                <path d="M4 19.5C4 18.837 4.263 18.201 4.732 17.732C5.201 17.263 5.837 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 2H20V22H6.5C5.837 22 5.201 21.737 4.732 21.268C4.263 20.799 4 20.163 4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732C5.201 2.263 5.837 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Button>
        </div>

        {/* Cultural Tagline */}
        <div className="text-kerala-white/70 text-sm kerala-malayalam">
          "ദേശം എന്നാൽ മണ്ണല്ല മനുഷ്യരാണ്" - Your Gateway to Authentic Kerala
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-kerala-gold rounded-full flex justify-center bg-kerala-gold/10 backdrop-blur-sm">
          <div className="w-1 h-3 bg-kerala-gold rounded-full mt-2 animate-kerala-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
