
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt, Star, Sparkles, User } from 'lucide-react';

const AIFashionSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('traditional');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { id: 'traditional', name: 'Traditional Sarees', malayalam: 'പരമ്പരാഗത സാരികൾ' },
    { id: 'fusion', name: 'Modern Fusion', malayalam: 'ആധുനിക ഫ്യൂഷൻ' },
    { id: 'mundu', name: 'Mundu Collections', malayalam: 'മുണ്ട് ശേഖരം' },
    { id: 'festival', name: 'Festival Wear', malayalam: 'ഉത്സവ വസ്ത്രങ്ങൾ' }
  ];

  const outfits = {
    traditional: [
      { name: 'Kasavu Saree', malayalam: 'കാശാവ് സാരി', color: 'Golden Border', price: '₹2,999', rating: 4.8 },
      { name: 'Kanchipuram Silk', malayalam: 'കാഞ്ചിപുരം പട്ട്', color: 'Royal Purple', price: '₹4,999', rating: 4.9 },
      { name: 'Malabar Cotton', malayalam: 'മലബാർ കോട്ടൺ', color: 'Emerald Green', price: '₹1,899', rating: 4.7 }
    ],
    fusion: [
      { name: 'Indo-Western Kurta', malayalam: 'ഇന്തോ-വെസ്റ്റേൺ കുർത്ത', color: 'Sunset Orange', price: '₹2,499', rating: 4.6 },
      { name: 'Contemporary Lehenga', malayalam: 'കണ്ടെംപററി ലെഹങ്ക', color: 'Ocean Blue', price: '₹3,799', rating: 4.8 },
      { name: 'Modern Saree Gown', malayalam: 'മോഡേൺ സാരി ഗൗൺ', color: 'Rose Gold', price: '₹2,999', rating: 4.5 }
    ],
    mundu: [
      { name: 'Traditional Mundu', malayalam: 'പരമ്പരാഗത മുണ്ട്', color: 'Pure White', price: '₹999', rating: 4.7 },
      { name: 'Designer Mundu', malayalam: 'ഡിസൈനർ മുണ്ട്', color: 'Golden Zari', price: '₹1,599', rating: 4.8 },
      { name: 'Festival Mundu', malayalam: 'ഉത്സവ മുണ്ട്', color: 'Temple Red', price: '₹1,299', rating: 4.6 }
    ],
    festival: [
      { name: 'Onam Special', malayalam: 'ഓണം സ്പെഷ്യൽ', color: 'Marigold Yellow', price: '₹2,199', rating: 4.9 },
      { name: 'Vishu Outfit', malayalam: 'വിഷു വസ്ത്രം', color: 'Spring Green', price: '₹1,899', rating: 4.7 },
      { name: 'Temple Wear', malayalam: 'ക്ഷേത്ര വസ്ത്രം', color: 'Sacred Saffron', price: '₹2,599', rating: 4.8 }
    ]
  };

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
    <section ref={sectionRef} className="py-24 bg-background kerala-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border shadow-soft mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="kerala-malayalam text-kerala-forest font-medium">AI ഫാഷൻ അനുഭവം</span>
            <span className="text-muted-foreground">•</span>
            <span className="kerala-body text-muted-foreground font-medium">AI Fashion Experience</span>
          </div>
          <h2 className="kerala-heading text-display-lg font-bold text-kerala-forest mb-4">
            Virtual Try-On Experience
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto kerala-body">
            <span className="kerala-malayalam">പരമ്പരാഗതവും ആധുനികവുമായ കേരള ഫാഷൻ അനുഭവിക്കൂ</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Avatar Preview */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="border border-border shadow-medium">
              <CardContent className="p-12">
                <div className="aspect-square bg-muted rounded-xl flex items-center justify-center mb-8 relative overflow-hidden">
                  <User className="w-24 h-24 text-muted-foreground" />
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <Button className="w-full kerala-body bg-kerala-forest hover:bg-kerala-forest-light text-white font-semibold py-4 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
                  <span className="kerala-malayalam mr-2">വെർച്വൽ ഫിറ്റിംഗ് ആരംഭിക്കൂ</span>
                  Start Virtual Fitting
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Outfit Selector */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Category Tabs */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg kerala-body font-medium transition-all duration-300 text-left ${
                    selectedCategory === category.id 
                      ? 'bg-kerala-forest text-white shadow-medium' 
                      : 'bg-card text-foreground hover:bg-muted border border-border shadow-soft hover:shadow-medium'
                  }`}
                >
                  <div className="font-semibold text-sm">{category.name}</div>
                  <div className="kerala-malayalam text-xs opacity-80">{category.malayalam}</div>
                </button>
              ))}
            </div>

            {/* Outfit List */}
            <div className="space-y-4">
              {outfits[selectedCategory as keyof typeof outfits].map((outfit, index) => (
                <Card key={index} className="border border-border hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                          <Shirt className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h5 className="kerala-body font-semibold text-foreground">{outfit.name}</h5>
                          <p className="kerala-malayalam text-sm text-primary font-medium">{outfit.malayalam}</p>
                          <p className="kerala-body text-sm text-muted-foreground">{outfit.color}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-3 h-3 text-primary fill-current" />
                            <span className="kerala-body text-xs text-muted-foreground">{outfit.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="kerala-body text-lg font-bold text-foreground mb-2">{outfit.price}</div>
                        <Button size="sm" className="kerala-body bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium">
                          <span className="kerala-malayalam mr-1">തിരഞ്ഞെടുക്കൂ</span>
                          Select
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFashionSection;
