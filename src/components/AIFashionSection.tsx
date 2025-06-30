
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt, Sparkles, Eye, Heart, Star } from 'lucide-react';

const AIFashionSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('traditional');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { id: 'traditional', name: 'Traditional Sarees', icon: Shirt, color: 'from-kerala-gold to-yellow-400' },
    { id: 'fusion', name: 'Modern Fusion', icon: Sparkles, color: 'from-kerala-red to-red-400' },
    { id: 'mundu', name: 'Mundu Collections', icon: Star, color: 'from-kerala-green to-green-400' },
    { id: 'festival', name: 'Festival Wear', icon: Heart, color: 'from-purple-500 to-pink-400' }
  ];

  const outfits = {
    traditional: [
      { name: 'Kasavu Saree', color: 'Golden Border', price: '₹2,999', rating: 4.8 },
      { name: 'Kanchipuram Silk', color: 'Royal Purple', price: '₹4,999', rating: 4.9 },
      { name: 'Malabar Cotton', color: 'Emerald Green', price: '₹1,899', rating: 4.7 }
    ],
    fusion: [
      { name: 'Indo-Western Kurta', color: 'Sunset Orange', price: '₹2,499', rating: 4.6 },
      { name: 'Contemporary Lehenga', color: 'Ocean Blue', price: '₹3,799', rating: 4.8 },
      { name: 'Modern Saree Gown', color: 'Rose Gold', price: '₹2,999', rating: 4.5 }
    ],
    mundu: [
      { name: 'Traditional Mundu', color: 'Pure White', price: '₹999', rating: 4.7 },
      { name: 'Designer Mundu', color: 'Golden Zari', price: '₹1,599', rating: 4.8 },
      { name: 'Festival Mundu', color: 'Temple Red', price: '₹1,299', rating: 4.6 }
    ],
    festival: [
      { name: 'Onam Special', color: 'Marigold Yellow', price: '₹2,199', rating: 4.9 },
      { name: 'Vishu Outfit', color: 'Spring Green', price: '₹1,899', rating: 4.7 },
      { name: 'Temple Wear', color: 'Sacred Saffron', price: '₹2,599', rating: 4.8 }
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
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-kerala-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-kerala-gold animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-kerala-red animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Modern Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-kerala-gold/20 to-kerala-red/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-5 h-5 text-kerala-gold" />
            <span className="text-kerala-green font-medium">AI Fashion Experience</span>
          </div>
          <h2 className="kerala-serif text-5xl md:text-7xl font-bold text-kerala-green mb-6">
            Virtual Try-On
            <span className="block text-3xl md:text-4xl text-kerala-gold font-normal mt-2">
              കേരള ഫാഷൻ
            </span>
          </h2>
          <p className="text-xl text-kerala-green/70 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of tradition and technology with our AI-powered fashion showcase
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Avatar Preview */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-kerala-gold to-kerala-red rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-kerala-green to-kerala-green-light rounded-3xl p-12 h-[500px] flex items-center justify-center overflow-hidden">
                {/* 3D Avatar Placeholder */}
                <div className="relative">
                  <div className="w-48 h-48 bg-gradient-to-br from-kerala-white/20 to-kerala-gold/20 rounded-full backdrop-blur-sm border border-kerala-gold/30 flex items-center justify-center">
                    <div className="text-8xl animate-float">🧑‍🎨</div>
                  </div>
                  <div className="absolute -inset-8 border-2 border-dashed border-kerala-gold/30 rounded-full animate-spin opacity-50" style={{ animationDuration: '10s' }}></div>
                </div>
                
                {/* Floating UI Elements */}
                <div className="absolute top-8 right-8 glass-effect rounded-full p-3">
                  <Eye className="w-6 h-6 text-kerala-gold" />
                </div>
                <div className="absolute bottom-8 left-8 glass-effect rounded-full p-3">
                  <Heart className="w-6 h-6 text-kerala-red" />
                </div>
              </div>
            </div>
            
            {/* Try-On Button */}
            <div className="text-center mt-8">
              <Button className="group bg-gradient-to-r from-kerala-gold to-yellow-400 hover:from-kerala-gold-dark hover:to-kerala-gold text-kerala-green font-semibold rounded-2xl px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Try Virtual Fitting
              </Button>
            </div>
          </div>

          {/* Modern Outfit Selector */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Category Pills */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={category.id}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                      selectedCategory === category.id 
                        ? 'border-kerala-gold shadow-lg shadow-kerala-gold/20' 
                        : 'border-gray-200 hover:border-kerala-gold/50'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} mx-auto mb-3 flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-kerala-green text-sm">{category.name}</h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Outfit Grid */}
            <div className="space-y-4">
              <h4 className="kerala-serif text-2xl font-semibold text-kerala-green mb-6">
                {categories.find(c => c.id === selectedCategory)?.name}
              </h4>
              <div className="space-y-4">
                {outfits[selectedCategory as keyof typeof outfits].map((outfit, index) => (
                  <Card 
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-kerala-green/20 overflow-hidden"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-kerala-gold/20 to-kerala-red/20 flex items-center justify-center">
                            <Shirt className="w-8 h-8 text-kerala-green" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-kerala-green text-lg">{outfit.name}</h5>
                            <p className="text-kerala-green/60">{outfit.color}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-3 h-3 ${i < Math.floor(outfit.rating) ? 'text-kerala-gold fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-kerala-green/60">{outfit.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-kerala-green mb-2">{outfit.price}</div>
                          <Button 
                            size="sm" 
                            className="bg-kerala-green hover:bg-kerala-green-light text-white rounded-full px-4 transition-all duration-300 group-hover:scale-105"
                          >
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
      </div>
    </section>
  );
};

export default AIFashionSection;
