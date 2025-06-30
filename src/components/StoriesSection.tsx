
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
      category: "Mythology",
      icon: Crown,
      readTime: "5 min read",
    },
    {
      title: "Backwater Tales",
      titleMl: "കായലിന്റെ കഥകൾ",
      preview: "Stories whispered by the gentle waters of Kumarakom, where time flows like the eternal tides...",
      category: "Nature",
      icon: Waves,
      readTime: "7 min read",
    },
    {
      title: "Temple Chronicles",
      titleMl: "ക്ഷേത്ര ചരിത്രം",
      preview: "Ancient wisdom carved in stone and preserved in time, revealing the secrets of Kerala's sacred architecture...",
      category: "History",
      icon: Building,
      readTime: "6 min read",
    },
    {
      title: "Spice Route Stories",
      titleMl: "മസാല വ്യാപാര കഥകൾ",
      preview: "How Kerala became the spice capital of the world, attracting traders from across the ancient world...",
      category: "Trade",
      icon: Zap,
      readTime: "8 min read",
    },
    {
      title: "Fisherman's Tales",
      titleMl: "മത്സ്യത്തൊഴിലാളിയുടെ കഥകൾ",
      preview: "Stories from the Arabian Sea shores, where brave fishermen face the mighty ocean every dawn...",
      category: "Culture",
      icon: Fish,
      readTime: "4 min read",
    },
    {
      title: "Coconut Palm Legends",
      titleMl: "തെങ്ങിന്റെ ഇതിഹാസങ്ങൾ",
      preview: "The tree of life and its magical properties, sustaining generations of Malayalis with its gifts...",
      category: "Nature",
      icon: TreePine,
      readTime: "5 min read",
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
        
        {/* Clean section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-sm">Cultural Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Malayalam Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the rich tapestry of Kerala's cultural heritage through timeless tales
          </p>
        </div>

        {/* Clean stories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => {
            const IconComponent = story.icon;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                    <IconComponent className="w-6 h-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 text-center mb-2">
                    {story.title}
                  </CardTitle>
                  <div className="text-gray-500 text-sm text-center mb-3">
                    {story.titleMl}
                  </div>
                  <div className="flex items-center justify-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">{story.category}</span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {story.preview}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium text-sm"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Simple CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-xl">
            Explore All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
