
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AIFashionSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('traditional');
  
  const categories = [
    { id: 'traditional', name: 'Traditional Sarees', emoji: '🥻' },
    { id: 'fusion', name: 'Modern Fusion', emoji: '✨' },
    { id: 'mundu', name: 'Mundu Collections', emoji: '👘' },
    { id: 'festival', name: 'Festival Wear', emoji: '🎭' }
  ];

  const outfits = {
    traditional: [
      { name: 'Kasavu Saree', color: 'Golden Border', image: '👗' },
      { name: 'Kanchipuram Silk', color: 'Royal Purple', image: '👘' },
      { name: 'Malabar Cotton', color: 'Emerald Green', image: '🥻' }
    ],
    fusion: [
      { name: 'Indo-Western Kurta', color: 'Sunset Orange', image: '👔' },
      { name: 'Contemporary Lehenga', color: 'Ocean Blue', image: '👗' },
      { name: 'Modern Saree Gown', color: 'Rose Gold', image: '👘' }
    ],
    mundu: [
      { name: 'Traditional Mundu', color: 'Pure White', image: '👘' },
      { name: 'Designer Mundu', color: 'Golden Zari', image: '👗' },
      { name: 'Festival Mundu', color: 'Temple Red', image: '🥻' }
    ],
    festival: [
      { name: 'Onam Special', color: 'Marigold Yellow', image: '👗' },
      { name: 'Vishu Outfit', color: 'Spring Green', image: '👘' },
      { name: 'Temple Wear', color: 'Sacred Saffron', image: '🥻' }
    ]
  };

  return (
    <section className="py-20 bg-kerala-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="kerala-serif text-4xl md:text-5xl font-bold text-kerala-green mb-6">
            AI Fashion Experience
          </h2>
          <p className="text-xl text-kerala-green/80 max-w-3xl mx-auto">
            From Kasavu to Contemporary - Find Your Perfect Look
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Side */}
          <div className="relative">
            <div className="bg-kerala-gradient rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="text-9xl animate-float">👤</div>
              <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <Button className="bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green font-semibold rounded-full px-6">
                  Try It On ✨
                </Button>
              </div>
            </div>
          </div>

          {/* Outfit Selector Side */}
          <div>
            {/* Category Selection */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {categories.map((category) => (
                <Card 
                  key={category.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id 
                      ? 'ring-2 ring-kerala-gold bg-kerala-gold/10' 
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{category.emoji}</div>
                    <h3 className="font-semibold text-kerala-green">{category.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Outfit Grid */}
            <div className="space-y-4">
              <h4 className="kerala-serif text-2xl font-semibold text-kerala-green mb-4">
                {categories.find(c => c.id === selectedCategory)?.name}
              </h4>
              <div className="grid gap-4">
                {outfits[selectedCategory as keyof typeof outfits].map((outfit, index) => (
                  <Card 
                    key={index}
                    className="cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-kerala-green/20"
                  >
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="text-3xl">{outfit.image}</div>
                      <div>
                        <h5 className="font-semibold text-kerala-green">{outfit.name}</h5>
                        <p className="text-kerala-green/60">{outfit.color}</p>
                      </div>
                      <div className="ml-auto">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="text-kerala-green border-kerala-green hover:bg-kerala-green hover:text-white"
                        >
                          Select
                        </Button>
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
