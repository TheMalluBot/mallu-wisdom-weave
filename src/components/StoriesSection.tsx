
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
      color: "from-kerala-gold/25 to-kerala-red/25"
    },
    {
      title: "Backwater Tales",
      titleMl: "കായലിന്റെ കഥകൾ",
      preview: "Stories whispered by the gentle waters of Kumarakom, where time flows like the eternal tides...",
      category: "പ്രകൃതി • Nature",
      icon: Waves,
      readTime: "7 min read",
      color: "from-kerala-green/25 to-blue-500/25"
    },
    {
      title: "Temple Chronicles",
      titleMl: "ക്ഷേത്ര ചരിത്രം",
      preview: "Ancient wisdom carved in stone and preserved in time, revealing the secrets of Kerala's sacred architecture...",
      category: "ചരിത്രം • History",
      icon: Building,
      readTime: "6 min read",
      color: "from-kerala-red/25 to-kerala-gold/25"
    },
    {
      title: "Spice Route Stories",
      titleMl: "മസാല വ്യാപാര കഥകൾ",
      preview: "How Kerala became the spice capital of the world, attracting traders from across the ancient world...",
      category: "വ്യാപാരം • Trade",
      icon: Zap,
      readTime: "8 min read",
      color: "from-kerala-green/25 to-kerala-gold/25"
    },
    {
      title: "Fisherman's Tales",
      titleMl: "മത്സ്യത്തൊഴിലാളിയുടെ കഥകൾ",
      preview: "Stories from the Arabian Sea shores, where brave fishermen face the mighty ocean every dawn...",
      category: "സംസ്കാരം • Culture",
      icon: Fish,
      readTime: "4 min read",
      color: "from-blue-500/25 to-kerala-green/25"
    },
    {
      title: "Coconut Palm Legends",
      titleMl: "തെങ്ങിന്റെ ഇതിഹാസങ്ങൾ",
      preview: "The tree of life and its magical properties, sustaining generations of Malayalis with its gifts...",
      category: "പ്രകൃതി • Nature",
      icon: TreePine,
      readTime: "5 min read",
      color: "from-kerala-green/25 to-kerala-gold/25"
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
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Enhanced section header with original Kerala styling */}
        <div className={`text-center mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-kerala-green/15 to-kerala-gold/15 border-2 border-kerala-green/40 backdrop-blur-sm mb-8 shadow-xl">
            <BookOpen className="w-6 h-6 text-kerala-green" />
            <span className="text-kerala-green font-bold text-xl kerala-serif">സാംസ്കാരിക കഥകൾ</span>
            <span className="text-gray-700 font-semibold">• Cultural Stories</span>
          </div>
          <h2 className="kerala-serif text-5xl md:text-7xl font-bold text-kerala-green mb-6 kerala-text-shadow">
            Malayalam Stories
          </h2>
          <p className="text-2xl text-kerala-green/80 max-w-3xl mx-auto font-light leading-relaxed">
            കേരളത്തിന്റെ സമൃദ്ധമായ സാംസ്കാരിക പൈതൃകം കണ്ടെത്തുക
          </p>
        </div>

        {/* Enhanced stories grid with original Kerala styling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((story, index) => {
            const IconComponent = story.icon;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 border-kerala-gold/30 hover:border-kerala-gold/60 bg-gradient-to-br ${story.color} backdrop-blur-sm transform hover:-translate-y-3 hover:scale-105 shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-kerala-gold/40 to-kerala-green/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-kerala-gold/50 shadow-xl">
                    <IconComponent className="w-10 h-10 text-kerala-green" />
                  </div>
                  <CardTitle className="text-2xl text-kerala-green text-center mb-3 kerala-serif">
                    {story.title}
                  </CardTitle>
                  <div className="text-kerala-gold font-bold text-center mb-4 kerala-serif">
                    {story.titleMl}
                  </div>
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <span className="px-6 py-3 bg-gradient-to-r from-kerala-green/25 to-kerala-gold/25 rounded-full text-kerala-green font-bold border-2 border-kerala-gold/40 shadow-lg">{story.category}</span>
                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                      <Clock className="w-4 h-4" />
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-800 leading-relaxed mb-8 text-base">
                    {story.preview}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn text-kerala-green hover:text-white hover:bg-kerala-green font-bold py-4 rounded-2xl border-2 border-kerala-green/40 hover:border-kerala-green transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    വായിക്കൂ • Read Story
                    <ArrowRight className="w-5 h-5 ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced CTA with original Kerala styling */}
        <div className={`text-center mt-20 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button className="bg-gradient-to-r from-kerala-green to-kerala-green-light hover:from-kerala-green-light hover:to-kerala-green text-white font-bold px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg kerala-serif">
            എല്ലാ കഥകളും കാണൂ • Explore All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
