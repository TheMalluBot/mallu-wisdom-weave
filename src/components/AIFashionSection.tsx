
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt, Star, Eye, Sparkles } from 'lucide-react';

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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-kerala-white to-kerala-green/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Kerala-themed section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-kerala-red/10 to-kerala-gold/10 border border-kerala-gold/30 mb-6">
            <Sparkles className="w-5 h-5 text-kerala-gold" />
            <span className="text-kerala-green font-medium">AI ഫാഷൻ അനുഭവം</span>
            <span className="text-gray-600">• AI Fashion Experience</span>
          </div>
          <h2 className="kerala-serif text-4xl md:text-5xl font-bold text-kerala-green mb-4">
            Virtual Try-On Experience
          </h2>
          <p className="text-xl text-kerala-green/70 max-w-2xl mx-auto">
            പരമ്പരാഗതവും ആധുനികവുമായ കേരള ഫാഷൻ അനുഭവിക്കൂ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Kerala-themed avatar preview */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-white to-kerala-gold/5 rounded-3xl p-12 shadow-2xl border border-kerala-gold/20 backdrop-blur-sm">
                <div className="aspect-square bg-gradient-to-br from-kerala-green/10 to-kerala-gold/10 rounded-2xl flex items-center justify-center mb-8 border border-kerala-gold/20">
                  <div className="text-6xl">👤</div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-kerala-gold rounded-full animate-pulse"></div>
                </div>
                <Button className="w-full bg-gradient-to-r from-kerala-green to-kerala-green-light hover:from-kerala-green-light hover:to-kerala-green text-white font-medium py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  വെർച്വൽ ഫിറ്റിംഗ് ആരംഭിക്കൂ
                </Button>
              </div>
            </div>
          </div>

          {/* Kerala-themed outfit selector */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            
            {/* Category tabs with Malayalam */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-xl font-medium transition-all duration-300 text-left ${
                    selectedCategory === category.id 
                      ? 'bg-gradient-to-r from-kerala-green to-kerala-green-light text-white shadow-xl transform scale-105' 
                      : 'bg-white text-kerala-green hover:bg-kerala-gold/5 border border-kerala-gold/20 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-sm opacity-80">{category.malayalam}</div>
                </button>
              ))}
            </div>

            {/* Outfit list with Kerala styling */}
            <div className="space-y-4">
              {outfits[selectedCategory as keyof typeof outfits].map((outfit, index) => (
                <Card key={index} className="border border-kerala-gold/20 hover:border-kerala-gold/40 transition-all duration-300 hover:shadow-xl bg-gradient-to-r from-white to-kerala-gold/5">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-kerala-gold/20 to-kerala-green/20 flex items-center justify-center border border-kerala-gold/30">
                          <Shirt className="w-7 h-7 text-kerala-green" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-kerala-green text-lg">{outfit.name}</h5>
                          <p className="text-kerala-gold font-medium">{outfit.malayalam}</p>
                          <p className="text-gray-600 text-sm">{outfit.color}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 text-kerala-gold fill-current" />
                            <span className="text-sm text-gray-600">{outfit.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-kerala-green mb-3">{outfit.price}</div>
                        <Button className="bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green hover:text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                          തിരഞ്ഞെടുക്കൂ
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
