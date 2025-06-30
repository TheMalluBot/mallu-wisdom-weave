
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Crown, Waves, Building, Zap, Fish, TreePine, ArrowRight, Clock } from 'lucide-react';

const StoriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stories = [
    {
      title: "The Legend of Mahabali",
      titleMl: "മഹാബലിയുടെ കഥ",
      preview: "The beloved king who visits Kerala every year during Onam, bringing prosperity and joy to his people...",
      category: "പുരാണം • Mythology",
      icon: Crown,
      readTime: "5 min read",
      color: "from-kerala-gold/20 to-kerala-red/20"
    },
    {
      title: "Backwater Tales",
      titleMl: "കായലിന്റെ കഥകൾ",
      preview: "Stories whispered by the gentle waters of Kumarakom, where time flows like the eternal tides...",
      category: "പ്രകൃതി • Nature",
      icon: Waves,
      readTime: "7 min read",
      color: "from-kerala-green/20 to-blue-500/20"
    },
    {
      title: "Temple Chronicles",
      titleMl: "ക്ഷേത്ര ചരിത്രം",
      preview: "Ancient wisdom carved in stone and preserved in time, revealing the secrets of Kerala's sacred architecture...",
      category: "ചരിത്രം • History",
      icon: Building,
      readTime: "6 min read",
      color: "from-kerala-red/20 to-kerala-gold/20"
    },
    {
      title: "Spice Route Stories",
      titleMl: "മസാല വ്യാപാര കഥകൾ",
      preview: "How Kerala became the spice capital of the world, attracting traders from across the ancient world...",
      category: "വ്യാപാരം • Trade",
      icon: Zap,
      readTime: "8 min read",
      color: "from-kerala-green/20 to-kerala-gold/20"
    },
    {
      title: "Fisherman's Tales",
      titleMl: "മത്സ്യത്തൊഴിലാളിയുടെ കഥകൾ",
      preview: "Stories from the Arabian Sea shores, where brave fishermen face the mighty ocean every dawn...",
      category: "സംസ്കാരം • Culture",
      icon: Fish,
      readTime: "4 min read",
      color: "from-blue-500/20 to-kerala-green/20"
    },
    {
      title: "Coconut Palm Legends",
      titleMl: "തെങ്ങിന്റെ ഇതിഹാസങ്ങൾ",
      preview: "The tree of life and its magical properties, sustaining generations of Malayalis with its gifts...",
      category: "പ്രകൃതി • Nature",
      icon: TreePine,
      readTime: "5 min read",
      color: "from-kerala-green/20 to-kerala-gold/20"
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Kerala-themed section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-kerala-green/10 to-kerala-gold/10 border border-kerala-green/30 mb-6">
            <BookOpen className="w-5 h-5 text-kerala-green" />
            <span className="text-kerala-green font-medium">സാംസ്കാരിക കഥകൾ</span>
            <span className="text-gray-600">• Cultural Stories</span>
          </div>
          <h2 className="kerala-serif text-4xl md:text-5xl font-bold text-kerala-green mb-4">
            Malayalam Stories
          </h2>
          <p className="text-xl text-kerala-green/70 max-w-2xl mx-auto">
            കേരളത്തിന്റെ സമൃദ്ധമായ സാംസ്കാരിക പൈതൃകം കണ്ടെത്തുക
          </p>
        </div>

        {/* Kerala-themed stories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => {
            const IconComponent = story.icon;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border border-kerala-gold/20 hover:border-kerala-gold/40 bg-gradient-to-br ${story.color} backdrop-blur-sm transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-kerala-gold/30 to-kerala-green/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-kerala-gold/40">
                    <IconComponent className="w-8 h-8 text-kerala-green" />
                  </div>
                  <CardTitle className="text-xl text-kerala-green text-center mb-2 kerala-serif">
                    {story.title}
                  </CardTitle>
                  <div className="text-kerala-gold font-medium text-center mb-3">
                    {story.titleMl}
                  </div>
                  <div className="flex items-center justify-center gap-4 text-xs">
                    <span className="px-4 py-2 bg-gradient-to-r from-kerala-green/20 to-kerala-gold/20 rounded-full text-kerala-green font-medium border border-kerala-gold/30">{story.category}</span>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {story.preview}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn text-kerala-green hover:text-white hover:bg-kerala-green font-medium text-sm py-3 rounded-xl border border-kerala-green/30 hover:border-kerala-green transition-all duration-300"
                  >
                    വായിക്കൂ • Read Story
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Kerala-themed CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button className="bg-gradient-to-r from-kerala-green to-kerala-green-light hover:from-kerala-green-light hover:to-kerala-green text-white font-medium px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            എല്ലാ കഥകളും കാണൂ • Explore All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
