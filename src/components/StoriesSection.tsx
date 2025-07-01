
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
      featured: true
    },
    {
      title: "Backwater Tales",
      titleMl: "കായലിന്റെ കഥകൾ",
      preview: "Stories whispered by the gentle waters of Kumarakom, where time flows like the eternal tides...",
      category: "പ്രകൃതി • Nature",
      icon: Waves,
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Temple Chronicles",
      titleMl: "ക്ഷേത്ര ചരിത്രം",
      preview: "Ancient wisdom carved in stone and preserved in time, revealing the secrets of Kerala's sacred architecture...",
      category: "ചരിത്രം • History",
      icon: Building,
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Spice Route Stories",
      titleMl: "മസാല വ്യാപാര കഥകൾ",
      preview: "How Kerala became the spice capital of the world, attracting traders from across the ancient world...",
      category: "വ്യാപാരം • Trade",
      icon: Zap,
      readTime: "8 min read",
      featured: false
    },
    {
      title: "Fisherman's Tales",
      titleMl: "മത്സ്യത്തൊഴിലാളിയുടെ കഥകൾ",
      preview: "Stories from the Arabian Sea shores, where brave fishermen face the mighty ocean every dawn...",
      category: "സംസ്കാരം • Culture",
      icon: Fish,
      readTime: "4 min read",
      featured: false
    },
    {
      title: "Coconut Palm Legends",
      titleMl: "തെങ്ങിന്റെ ഇതിഹാസങ്ങൾ",
      preview: "The tree of life and its magical properties, sustaining generations of Malayalis with its gifts...",
      category: "പ്രകൃതി • Nature",
      icon: TreePine,
      readTime: "5 min read",
      featured: false
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
    <section ref={sectionRef} className="py-24 bg-kerala-coconut kerala-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border shadow-soft mb-6">
            <BookOpen className="w-4 h-4 text-kerala-forest" />
            <span className="kerala-malayalam text-kerala-forest font-medium">സാംസ്കാരിക കഥകൾ</span>
            <span className="text-muted-foreground">•</span>
            <span className="kerala-body text-muted-foreground font-medium">Cultural Stories</span>
          </div>
          <h2 className="kerala-heading text-display-lg font-bold text-kerala-forest mb-4">
            Malayalam Stories
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto kerala-malayalam">
            കേരളത്തിന്റെ സമൃദ്ധമായ സാംസ്കാരിക പൈതൃകം കണ്ടെത്തുക
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => {
            const IconComponent = story.icon;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-strong border border-border bg-card transform hover:-translate-y-1 ${
                  story.featured ? 'ring-2 ring-primary/20' : ''
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="kerala-heading text-lg text-kerala-forest text-center mb-2">
                    {story.title}
                  </CardTitle>
                  <div className="kerala-malayalam text-primary font-medium text-center mb-3">
                    {story.titleMl}
                  </div>
                  <div className="flex items-center justify-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground font-medium">{story.category}</span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="kerala-body text-muted-foreground leading-relaxed mb-6 text-sm">
                    {story.preview}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full kerala-body text-kerala-forest hover:text-primary-foreground hover:bg-kerala-forest font-medium py-3 rounded-lg border border-border hover:border-kerala-forest transition-all duration-300"
                  >
                    <span className="kerala-malayalam mr-2">വായിക്കൂ</span>
                    Read Story
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button className="kerala-body bg-kerala-forest hover:bg-kerala-forest-light text-white font-semibold px-8 py-4 rounded-lg shadow-medium hover:shadow-strong transform hover:-translate-y-1 transition-all duration-300">
            <span className="kerala-malayalam mr-2">എല്ലാ കഥകളും കാണൂ</span>
            Explore All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
