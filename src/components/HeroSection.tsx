
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        
        {/* Clean badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm mb-8">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-gray-600 text-sm font-medium">AI-Powered Cultural Experience</span>
        </div>
        
        {/* Clean typography */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
          Experience Kerala
          <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
            Like Never Before
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
          AI Fashion Meets Traditional Wisdom
        </p>
        
        <p className="text-lg mb-12 text-gray-500 max-w-2xl mx-auto">
          Try virtual Malayalam attire, discover ancient stories, and unlock Kerala's best-kept secrets through cutting-edge technology
        </p>

        {/* Clean CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="group bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Try AI Fashion
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-medium px-8 py-4 rounded-lg transition-all duration-200"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </Button>
        </div>

        {/* Clean stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
            <div className="text-gray-600 text-sm">Years of Wisdom</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-gray-600 text-sm">Traditional Stories</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <div className="text-3xl font-bold text-gray-900">4.9</div>
            </div>
            <div className="text-gray-600 text-sm">User Rating</div>
          </div>
        </div>
      </div>

      {/* Simple scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
