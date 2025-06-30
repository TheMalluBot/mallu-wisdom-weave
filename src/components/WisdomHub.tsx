
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Home, BarChart3, ChevronRight, Lightbulb } from 'lucide-react';

const WisdomHub = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const wisdomCategories = [
    {
      title: "Ayurvedic Health Hacks",
      titleMl: "ആയുർവേദ ആരോഗ്യ രഹസ്യങ്ങൾ",
      icon: Leaf,
      stat: "5000+ Years",
      description: "Ancient healing wisdom for modern wellness",
      tips: [
        "Turmeric milk for immunity boosting",
        "Coconut oil pulling for oral health",
        "Neem leaves for natural skin purification",
        "Ginger tea for digestive wellness"
      ],
    },
    {
      title: "Household Tips",
      titleMl: "വീട്ടിലെ ഉപയോഗപ്രദമായ കാര്യങ്ങൾ",
      icon: Home,
      stat: "100% Natural",
      description: "Traditional methods for modern homes",
      tips: [
        "Coconut husk for eco-friendly cleaning",
        "Banana leaves as biodegradable plates",
        "Tulsi for natural air purification",
        "Tamarind for effective metal polishing"
      ],
    },
    {
      title: "Kerala Facts",
      titleMl: "കേരള വിവരങ്ങൾ",
      icon: BarChart3,
      stat: "100% Literacy",
      description: "Amazing facts about God's Own Country",
      tips: [
        "First state to achieve 100% literacy rate",
        "Backwaters span over 900 kilometers",
        "44 rivers flow through Kerala",
        "Home to 2500+ unique plant species"
      ],
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
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Clean section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-6">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span className="text-amber-700 font-medium text-sm">Traditional Knowledge</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kerala Wisdom Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock centuries of traditional knowledge and practical wisdom for modern living
          </p>
        </div>

        {/* Clean wisdom grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {wisdomCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-gray-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                    <IconComponent className="w-8 h-8 text-gray-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-3">
                    {category.title}
                  </CardTitle>
                  <div className="text-gray-500 text-sm mb-4">
                    {category.titleMl}
                  </div>
                  <div className="inline-block px-4 py-2 bg-gray-900 text-white font-medium rounded-lg text-sm">
                    {category.stat}
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <p className="text-gray-600 text-center mb-6">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    {category.tips.slice(0, 3).map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </div>
                    ))}
                    
                    <Button variant="ghost" className="w-full mt-4 text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                      View All Tips
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
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
            Explore All Wisdom
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WisdomHub;
