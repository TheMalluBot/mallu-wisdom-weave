
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, BookOpen } from 'lucide-react';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      {/* Dynamic Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-32 h-32 rounded-full bg-kerala-gold/10 backdrop-blur-sm animate-float"
          style={{
            top: '10%',
            left: `${20 + mousePosition.x * 0.05}%`,
            transform: `translate(-50%, -50%)`,
          }}
        />
        <div 
          className="absolute w-24 h-24 rounded-full bg-kerala-red/10 backdrop-blur-sm animate-float"
          style={{
            top: '70%',
            right: `${10 + mousePosition.x * 0.03}%`,
            animationDelay: '1s',
          }}
        />
        <div 
          className="absolute w-40 h-40 rounded-full bg-kerala-white/5 backdrop-blur-sm animate-float"
          style={{
            bottom: '20%',
            left: `${30 + mousePosition.y * 0.02}%`,
            animationDelay: '2s',
          }}
        />
      </div>

      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Modern Glass Card Container */}
        <div className="glass-effect rounded-3xl p-12 mb-8 border border-kerala-gold/20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kerala-gold/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-kerala-gold" />
            <span className="text-kerala-white text-sm font-medium">AI-Powered Cultural Experience</span>
          </div>
          
          <h1 className="kerala-serif text-6xl md:text-8xl font-bold mb-6 text-kerala-white kerala-text-shadow">
            Experience Kerala
            <span className="block text-kerala-gold bg-gradient-to-r from-kerala-gold to-yellow-300 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-6 text-kerala-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            AI Fashion Meets Traditional Wisdom
          </p>
          
          <p className="text-xl mb-12 text-kerala-white/70 max-w-3xl mx-auto leading-relaxed">
            Try virtual Malayalam attire, discover ancient stories, and unlock Kerala's best-kept secrets through cutting-edge technology
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-kerala-gold to-yellow-400 hover:from-kerala-gold-dark hover:to-kerala-gold text-kerala-green font-semibold px-10 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
              Try AI Fashion
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-2 border-kerala-white/30 text-kerala-white hover:bg-kerala-white/10 backdrop-blur-sm font-semibold px-10 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <BookOpen className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Explore Stories
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-kerala-gold mb-2">5000+</div>
            <div className="text-kerala-white/80">Years of Wisdom</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-kerala-gold mb-2">100+</div>
            <div className="text-kerala-white/80">Traditional Stories</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-kerala-gold mb-2">∞</div>
            <div className="text-kerala-white/80">Fashion Possibilities</div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-kerala-white/60 text-sm font-medium">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-kerala-gold/50 rounded-full flex justify-center backdrop-blur-sm">
            <ArrowDown className="w-4 h-4 text-kerala-gold mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
