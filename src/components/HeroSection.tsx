
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-kerala-white via-white to-kerala-green/5">
      
      {/* Enhanced traditional Kerala pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DAA520' fill-opacity='1'%3E%3Cpath d='M40 40c0-6.5-5.5-12-12-12s-12 5.5-12 12 5.5 12 12 12 12-5.5 12-12zm12 0c0-6.5-5.5-12-12-12s-12 5.5-12 12 5.5 12 12 12 12-5.5 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Enhanced Kerala cultural badge */}
        <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-kerala-gold/15 to-kerala-green/15 border border-kerala-gold/30 backdrop-blur-sm mb-8 shadow-xl">
          <div className="w-3 h-3 bg-kerala-gold rounded-full animate-pulse shadow-lg"></div>
          <span className="text-kerala-green font-semibold text-lg kerala-serif">കേരളത്തിന്റെ സാംസ്കാരിക അനുഭവം</span>
          <span className="text-gray-600 font-medium">• Cultural Experience of Kerala</span>
        </div>
        
        {/* Enhanced Kerala-themed typography */}
        <h1 className="kerala-serif text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="text-kerala-green drop-shadow-lg">Experience</span>
          <span className="block text-transparent bg-gradient-to-r from-kerala-gold via-kerala-gold-dark to-kerala-red bg-clip-text drop-shadow-lg">
            Kerala's Soul
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl mb-8 text-kerala-green/90 max-w-4xl mx-auto font-light leading-relaxed kerala-text-shadow">
          Where Ancient Wisdom Meets Modern Innovation
        </p>
        
        <p className="text-xl mb-16 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Discover the magic of God's Own Country through AI-powered cultural experiences, traditional stories, and timeless wisdom passed down through generations
        </p>

        {/* Enhanced Kerala-themed CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-kerala-green to-kerala-green-light hover:from-kerala-green-light hover:to-kerala-green text-white font-semibold px-10 py-6 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-lg"
          >
            പരീക്ഷിക്കൂ • Try AI Fashion
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-3 border-kerala-gold text-kerala-green hover:bg-kerala-gold/10 hover:border-kerala-gold-dark font-semibold px-10 py-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
          >
            <Play className="w-5 h-5 mr-3" />
            കാണൂ • Watch Demo
          </Button>
        </div>

        {/* Enhanced Kerala heritage stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-white via-kerala-gold/5 to-kerala-gold/10 backdrop-blur-sm border-2 border-kerala-gold/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl font-bold text-kerala-green mb-4 kerala-serif">5000+</div>
            <div className="text-kerala-gold font-bold text-lg mb-2">വർഷങ്ങൾ</div>
            <div className="text-gray-700 font-medium">Years of Heritage</div>
          </div>
          <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-white via-kerala-green/5 to-kerala-green/10 backdrop-blur-sm border-2 border-kerala-green/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl font-bold text-kerala-green mb-4 kerala-serif">44</div>
            <div className="text-kerala-gold font-bold text-lg mb-2">നദികൾ</div>
            <div className="text-gray-700 font-medium">Sacred Rivers</div>
          </div>
          <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-white via-kerala-red/5 to-kerala-red/10 backdrop-blur-sm border-2 border-kerala-red/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-8 h-8 text-kerala-gold fill-current" />
              <div className="text-5xl font-bold text-kerala-green kerala-serif">4.9</div>
            </div>
            <div className="text-kerala-gold font-bold text-lg mb-2">റേറ്റിംഗ്</div>
            <div className="text-gray-700 font-medium">User Experience</div>
          </div>
        </div>
      </div>

      {/* Enhanced traditional Kerala scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 border-3 border-kerala-gold rounded-full flex justify-center shadow-lg">
          <div className="w-2 h-4 bg-kerala-gold rounded-full mt-2 animate-bounce shadow-md"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
