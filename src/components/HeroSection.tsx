
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
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float absolute top-20 right-20 text-6xl opacity-30">🥥</div>
        <div className="animate-float absolute bottom-32 left-16 text-4xl opacity-40" style={{ animationDelay: '1s' }}>🌴</div>
        <div className="animate-glow absolute top-40 left-20 text-3xl">🪔</div>
      </div>

      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="kerala-serif text-5xl md:text-7xl font-bold mb-6 text-kerala-white kerala-text-shadow">
          Experience Kerala
          <span className="block text-kerala-gold">Like Never Before</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-kerala-white/90 max-w-3xl mx-auto leading-relaxed">
          AI Fashion Meets Traditional Wisdom
        </p>
        
        <p className="text-lg mb-12 text-kerala-white/80 max-w-2xl mx-auto">
          Try virtual Malayalam attire, discover ancient stories, and unlock Kerala's best-kept secrets
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Try AI Fashion ✨
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-kerala-white text-kerala-white hover:bg-kerala-white hover:text-kerala-green font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Kerala Stories 📚
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-kerala-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-kerala-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
