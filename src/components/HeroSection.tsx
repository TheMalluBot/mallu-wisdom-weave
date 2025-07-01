
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-kerala-white to-kerala-coconut kerala-pattern">
      
      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-700 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Cultural Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border shadow-soft mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="kerala-malayalam text-kerala-forest font-medium">കേരളത്തിന്റെ സാംസ്കാരിക അനുഭവം</span>
          <span className="text-muted-foreground">•</span>
          <span className="kerala-body text-muted-foreground font-medium">Cultural Experience of Kerala</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="kerala-heading text-display-xl md:text-display-xl font-bold mb-6 text-kerala-forest">
          Experience
          <span className="block text-transparent bg-gradient-to-r from-primary via-kerala-gold-dark to-accent bg-clip-text">
            Kerala's Soul
          </span>
        </h1>
        
        <p className="text-title-lg mb-6 text-kerala-forest/80 max-w-4xl mx-auto kerala-body">
          Where Ancient Wisdom Meets Modern Innovation
        </p>
        
        <p className="text-body-lg mb-12 text-muted-foreground max-w-3xl mx-auto kerala-body">
          Discover the magic of God's Own Country through AI-powered cultural experiences, traditional stories, and timeless wisdom passed down through generations
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="kerala-body bg-kerala-forest hover:bg-kerala-forest-light text-white font-semibold px-8 py-6 rounded-lg transition-all duration-300 shadow-medium hover:shadow-strong transform hover:-translate-y-1"
          >
            <span className="kerala-malayalam mr-2">പരീക്ഷിക്കൂ</span>
            Try AI Fashion
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="kerala-body border-2 border-kerala-forest text-kerala-forest hover:bg-kerala-forest hover:text-white font-semibold px-8 py-6 rounded-lg transition-all duration-300 shadow-soft hover:shadow-medium"
          >
            <Play className="w-4 h-4 mr-2" />
            <span className="kerala-malayalam mr-2">കാണൂ</span>
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="text-display-md font-bold text-kerala-forest mb-2 kerala-heading">5000+</div>
            <div className="kerala-malayalam text-primary font-semibold mb-1">വർഷങ്ങൾ</div>
            <div className="kerala-body text-muted-foreground">Years of Heritage</div>
          </div>
          <div className="text-center p-8 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="text-display-md font-bold text-kerala-forest mb-2 kerala-heading">44</div>
            <div className="kerala-malayalam text-primary font-semibold mb-1">നദികൾ</div>
            <div className="kerala-body text-muted-foreground">Sacred Rivers</div>
          </div>
          <div className="text-center p-8 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-6 h-6 text-primary fill-current" />
              <div className="text-display-md font-bold text-kerala-forest kerala-heading">4.9</div>
            </div>
            <div className="kerala-malayalam text-primary font-semibold mb-1">റേറ്റിംഗ്</div>
            <div className="kerala-body text-muted-foreground">User Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
