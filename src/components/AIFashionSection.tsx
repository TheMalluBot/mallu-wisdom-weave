
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt, Star, Sparkles } from 'lucide-react';

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
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-kerala-white to-kerala-green/8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Enhanced section header with original Kerala styling */}
        <div className={`text-center mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-kerala-red/15 to-kerala-gold/15 border-2 border-kerala-gold/40 backdrop-blur-sm mb-8 shadow-xl">
            <Sparkles className="w-6 h-6 text-kerala-gold animate-glow" />
            <span className="text-kerala-green font-bold text-xl kerala-serif">AI ഫാഷൻ അനുഭവം</span>
            <span className="text-gray-700 font-semibold">• AI Fashion Experience</span>
          </div>
          <h2 className="kerala-serif text-5xl md:text-7xl font-bold text-kerala-green mb-6 kerala-text-shadow">
            Virtual Try-On Experience
          </h2>
          <p className="text-2xl text-kerala-green/80 max-w-3xl mx-auto font-light leading-relaxed">
            പരമ്പരാഗതവും ആധുനികവുമായ കേരള ഫാഷൻ അനുഭവിക്കൂ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Enhanced avatar preview with original Kerala styling */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-white via-kerala-gold/10 to-kerala-green/10 rounded-3xl p-16 shadow-2xl border-3 border-kerala-gold/40 backdrop-blur-sm">
                <div className="aspect-square bg-gradient-to-br from-kerala-green/15 to-kerala-gold/15 rounded-3xl flex items-center justify-center mb-10 border-2 border-kerala-gold/30 shadow-xl">
                  <div className="text-8xl animate-float">👤</div>
                  <div className="absolute top-6 right-6 w-4 h-4 bg-kerala-gold rounded-full animate-pulse shadow-lg"></div>
                </div>
                <Button className="w-full bg-gradient-to-r from-kerala-green to-kerala-green-light hover:from-kerala-green-light hover:to-kerala-green text-white font-bold py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg kerala-serif">
                  വെർച്വൽ ഫിറ്റിംഗ് ആരംഭിക്കൂ
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced outfit selector with original Kerala styling */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Enhanced category tabs */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-2xl font-semibold transition-all duration-300 text-left shadow-xl ${
                    selectedCategory === category.id 
                      ? 'bg-gradient-to-r from-kerala-green to-kerala-green-light text-white shadow-2xl transform scale-105 border-2 border-kerala-gold' 
                      : 'bg-white text-kerala-green hover:bg-kerala-gold/10 border-2 border-kerala-gold/30 shadow-xl hover:shadow-2xl hover:-translate-y-1'
                  }`}
                >
                  <div className="font-bold text-lg">{category.name}</div>
                  <div className="text-sm opacity-90 kerala-serif">{category.malayalam}</div>
                </button>
              ))}
            </div>

            {/* Enhanced outfit list */}
            <div className="space-y-6">
              {outfits[selectedCategory as keyof typeof outfits].map((outfit, index) => (
                <Card key={index} className="border-2 border-kerala-gold/30 hover:border-kerala-gold/60 transition-all duration-300 hover:shadow-2xl bg-gradient-to-r from-white via-kerala-gold/5 to-kerala-green/5 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-kerala-gold/30 to-kerala-green/30 flex items-center justify-center border-2 border-kerala-gold/40 shadow-lg">
                          <Shirt className="w-8 h-8 text-kerala-green" />
                        </div>
                        <div>
                          <h5 className="font-bold text-kerala-green text-xl">{outfit.name}</h5>
                          <p className="text-kerala-gold font-semibold kerala-serif">{outfit.malayalam}</p>
                          <p className="text-gray-700 font-medium">{outfit.color}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Star className="w-5 h-5 text-kerala-gold fill-current" />
                            <span className="font-medium text-gray-700">{outfit.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-kerala-green mb-4">{outfit.price}</div>
                        <Button className="bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green hover:text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
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
