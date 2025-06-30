
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Crown, Waves, Building, Zap, Fish, TreePine, ArrowRight, Star } from 'lucide-react';

const StoriesSection = () => {
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stories = [
    {
      title: "The Legend of Mahabali",
      titleMl: "മഹാബലിയുടെ കഥ",
      preview: "The beloved king who visits Kerala every year during Onam, bringing prosperity and joy to his people...",
      category: "Mythology",
      icon: Crown,
      readTime: "5 min read",
      popularity: 4.9
    },
    {
      title: "Backwater Tales",
      titleMl: "കായലിന്റെ കഥകൾ",
      preview: "Stories whispered by the gentle waters of Kumarakom, where time flows like the eternal tides...",
      category: "Nature",
      icon: Waves,
      readTime: "7 min read",
      popularity: 4.7
    },
    {
      title: "Temple Chronicles",
      titleMl: "ക്ഷേത്ര ചരിത്രം",
      preview: "Ancient wisdom carved in stone and preserved in time, revealing the secrets of Kerala's sacred architecture...",
      category: "History",
      icon: Building,
      readTime: "6 min read",
      popularity: 4.8
    },
    {
      title: "Spice Route Stories",
      titleMl: "മസാല വ്യാപാര കഥകൾ",
      preview: "How Kerala became the spice capital of the world, attracting traders from across the ancient world...",
      category: "Trade",
      icon: Zap,
      readTime: "8 min read",
      popularity: 4.6
    },
    {
      title: "Fisherman's Tales",
      titleMl: "മത്സ്യത്തൊഴിലാളിയുടെ കഥകൾ",
      preview: "Stories from the Arabian Sea shores, where brave fishermen face the mighty ocean every dawn...",
      category: "Culture",
      icon: Fish,
      readTime: "4 min read",
      popularity: 4.5
    },
    {
      title: "Coconut Palm Legends",
      titleMl: "തെങ്ങിന്റെ ഇതിഹാസങ്ങൾ",
      preview: "The tree of life and its magical properties, sustaining generations of Malayalis with its gifts...",
      category: "Nature",
      icon: TreePine,
      readTime: "5 min read",
      popularity: 4.8
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-kerala-green via-kerala-green-light to-kerala-green relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-kerala-gold animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-kerala-white animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-kerala-red animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Modern Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kerala-white/10 backdrop-blur-sm border border-kerala-gold/30 mb-6">
            <BookOpen className="w-5 h-5 text-kerala-gold" />
            <span className="text-kerala-white font-medium">Cultural Stories</span>
          </div>
          <h2 className="kerala-serif text-5xl md:text-7xl font-bold text-kerala-white mb-6">
            Malayalam Stories
            <span className="block text-3xl md:text-4xl text-kerala-gold font-normal mt-2">കേരള കഥകൾ</span>
          </h2>
          <p className="text-xl text-kerala-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover the rich tapestry of Kerala's cultural heritage through timeless tales
          </p>
        </div>

        {/* Interactive Book Animation */}
        <div className={`relative mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="max-w-md mx-auto">
            <div className="glass-effect rounded-3xl p-8 border border-kerala-gold/30 text-center">
              <div className="text-6xl mb-4 animate-glow">📖</div>
              <p className="text-kerala-white/80 text-lg">Open the pages of Kerala's legendary tales</p>
              <div className="mt-4 flex justify-center space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full bg-kerala-gold animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modern Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => {
            const IconComponent = story.icon;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 transform bg-kerala-white/95 backdrop-blur-sm border border-kerala-gold/30 overflow-hidden relative ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredStory(index)}
                onMouseLeave={() => setHoveredStory(null)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-kerala-gold/5 to-kerala-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="text-center relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-kerala-gold/20 to-kerala-red/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-kerala-green" />
                  </div>
                  <CardTitle className="kerala-serif text-xl text-kerala-green mb-2">
                    {story.title}
                  </CardTitle>
                  <div className="text-kerala-green/60 text-sm font-medium mb-3">
                    {story.titleMl}
                  </div>
                  <div className="flex items-center justify-center gap-4 text-xs text-kerala-green/60">
                    <span className="px-3 py-1 bg-kerala-gold/20 rounded-full">{story.category}</span>
                    <span>{story.readTime}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-kerala-green/80 text-sm leading-relaxed mb-4">
                    {story.preview}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-kerala-gold fill-current" />
                      <span className="text-sm text-kerala-green/70">{story.popularity}</span>
                    </div>
                    <div className="text-xs text-kerala-green/60">Popular</div>
                  </div>
                  
                  <div className={`transition-all duration-500 ${
                    hoveredStory === index ? 'opacity-100 max-h-20 translate-y-0' : 'opacity-0 max-h-0 translate-y-2'
                  } overflow-hidden`}>
                    <div className="border-t border-kerala-green/20 pt-4">
                      <Button 
                        variant="ghost" 
                        className="w-full group/btn text-kerala-red hover:text-kerala-red-light hover:bg-kerala-red/10 font-medium text-sm transition-all duration-300"
                      >
                        Read Full Story
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-6 glass-effect rounded-2xl px-10 py-6 border border-kerala-gold/30">
            <BookOpen className="w-8 h-8 text-kerala-gold" />
            <div className="text-left">
              <p className="text-kerala-white font-semibold text-lg">Discover More Stories</p>
              <p className="text-kerala-white/70 text-sm">Traditional knowledge for modern living</p>
            </div>
            <Button className="bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green font-semibold rounded-xl px-6">
              Explore All
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
