
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt, Star, Eye } from 'lucide-react';

const AIFashionSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('traditional');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { id: 'traditional', name: 'Traditional Sarees' },
    { id: 'fusion', name: 'Modern Fusion' },
    { id: 'mundu', name: 'Mundu Collections' },
    { id: 'festival', name: 'Festival Wear' }
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
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Clean section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
            <Eye className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-700 font-medium text-sm">AI Fashion Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Virtual Try-On
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of tradition and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Clean avatar preview */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            <div className="relative">
              <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-8">
                  <div className="text-6xl">👤</div>
                </div>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 rounded-xl">
                  Try Virtual Fitting
                </Button>
              </div>
            </div>
          </div>

          {/* Clean outfit selector */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    selectedCategory === category.id 
                      ? 'bg-gray-900 text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Outfit list */}
            <div className="space-y-4">
              {outfits[selectedCategory as keyof typeof outfits].map((outfit, index) => (
                <Card key={index} className="border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                          <Shirt className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">{outfit.name}</h5>
                          <p className="text-gray-500">{outfit.color}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-600">{outfit.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900 mb-2">{outfit.price}</div>
                        <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white px-4">
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
