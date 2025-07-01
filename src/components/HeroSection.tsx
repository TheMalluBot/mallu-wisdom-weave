
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <HeroBackground />

      {/* Main content positioned on the left side for better contrast with the image */}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="text-left">
            {/* Enhanced Typography */}
            <div className="mb-8">
              <h1 className="kerala-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-kerala-white kerala-text-shadow leading-tight">
                Experience Kerala
                <span className="block text-kerala-gold kerala-text-shadow-soft mt-2">
                  Like Never Before
                </span>
              </h1>
              
              {/* Malayalam Subtitle */}
              <p className="kerala-malayalam text-lg md:text-xl text-kerala-white/90 mb-4 kerala-text-shadow-soft">
                കേരളത്തിന്റെ സൗന്ദര്യം അനുഭവിക്കൂ
              </p>
            </div>
            
            <p className="text-xl md:text-2xl mb-6 text-kerala-white/90 leading-relaxed kerala-text-shadow-soft font-medium">
              AI Fashion Meets Traditional Wisdom
            </p>
            
            <p className="text-lg mb-10 text-kerala-white/80 leading-relaxed max-w-lg">
              Try virtual Malayalam attire, discover ancient stories, and unlock Kerala's best-kept secrets through our backwater adventures
            </p>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="group bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-kerala-gold hover:shadow-kerala-glow border-2 border-kerala-gold-light/20"
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
                className="group border-2 border-kerala-white/80 text-kerala-white hover:bg-kerala-white hover:text-kerala-green font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 shadow-kerala-soft"
              >
                <span className="flex items-center gap-3">
                  Explore Backwaters
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

          {/* Right column - space for the beautiful image to show through */}
          <div className="hidden lg:flex items-center justify-center">
            {/* Floating houseboat icon to complement the image */}
            <div className="animate-kerala-float opacity-30">
              <svg className="w-32 h-32 text-kerala-gold" viewBox="0 0 200 100">
                <path d="M20 70 L180 70 L170 50 L30 50 Z" fill="currentColor" opacity="0.6"/>
                <path d="M40 50 L160 50 L150 40 L50 40 Z" fill="currentColor" opacity="0.8"/>
                <rect x="70" y="20" width="60" height="20" rx="10" fill="currentColor"/>
                <circle cx="100" cy="75" r="3" fill="currentColor"/>
              </svg>
            </div>
          </div>
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
