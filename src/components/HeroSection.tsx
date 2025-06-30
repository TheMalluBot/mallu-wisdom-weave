
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Kerala-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-white via-white to-kerala-green/5"></div>
      
      {/* Traditional Kerala pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DAA520' fill-opacity='1'%3E%3Cpath d='M30 30c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        
        {/* Kerala cultural badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-kerala-gold/10 to-kerala-green/10 border border-kerala-gold/20 backdrop-blur-sm mb-8">
          <div className="w-3 h-3 bg-kerala-gold rounded-full animate-pulse"></div>
          <span className="text-kerala-green font-medium">കേരളത്തിന്റെ സാംസ്കാരിക അനുഭവം</span>
          <span className="text-gray-600 text-sm">• Cultural Experience</span>
        </div>
        
        {/* Kerala-themed typography */}
        <h1 className="kerala-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-kerala-green">Experience</span>
          <span className="block text-transparent bg-gradient-to-r from-kerala-gold via-kerala-gold-dark to-kerala-red bg-clip-text">
            Kerala's Soul
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 text-kerala-green/80 max-w-3xl mx-auto font-light leading-relaxed">
          Where Ancient Wisdom Meets Modern Innovation
        </p>
        
        <p className="text-lg mb-12 text-gray-600 max-w-2xl mx-auto">
          Discover the magic of God's Own Country through AI-powered cultural experiences, traditional stories, and timeless wisdom
        </p>

        {/* Kerala-themed CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-kerala-green to-kerala-green-light hover:from-kerala-green-light hover:to-kerala-green text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            പരീക്ഷിക്കൂ • Try AI Fashion
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-2 border-kerala-gold text-kerala-green hover:bg-kerala-gold/10 hover:border-kerala-gold-dark font-medium px-8 py-4 rounded-xl transition-all duration-300"
          >
            <Play className="w-4 h-4 mr-2" />
            കാണൂ • Watch Demo
          </Button>
        </div>

        {/* Kerala heritage stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-kerala-gold/5 backdrop-blur-sm border border-kerala-gold/20 shadow-lg">
            <div className="text-4xl font-bold text-kerala-green mb-2">5000+</div>
            <div className="text-kerala-gold font-medium mb-1">വർഷങ്ങൾ</div>
            <div className="text-gray-600 text-sm">Years of Heritage</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-kerala-green/5 backdrop-blur-sm border border-kerala-green/20 shadow-lg">
            <div className="text-4xl font-bold text-kerala-green mb-2">44</div>
            <div className="text-kerala-gold font-medium mb-1">നദികൾ</div>
            <div className="text-gray-600 text-sm">Sacred Rivers</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-kerala-red/5 backdrop-blur-sm border border-kerala-red/20 shadow-lg">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Star className="w-6 h-6 text-kerala-gold fill-current" />
              <div className="text-4xl font-bold text-kerala-green">4.9</div>
            </div>
            <div className="text-kerala-gold font-medium mb-1">റേറ്റിംഗ്</div>
            <div className="text-gray-600 text-sm">User Experience</div>
          </div>
        </div>
      </div>

      {/* Traditional Kerala scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-kerala-gold rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-kerala-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
