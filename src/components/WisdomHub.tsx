
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Home, BarChart3, ChevronDown, ChevronUp, Lightbulb, Star, TrendingUp } from 'lucide-react';

const WisdomHub = () => {
  const [expandedTile, setExpandedTile] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ ayurveda: 0, households: 0, literacy: 0 });
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
      color: "from-green-600 to-green-400",
      bgColor: "from-green-50 to-emerald-50",
      count: 5000
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
      color: "from-kerala-gold to-yellow-400",
      bgColor: "from-yellow-50 to-orange-50",
      count: 100
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
      color: "from-kerala-red to-red-400",
      bgColor: "from-red-50 to-pink-50",
      count: 100
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          wisdomCategories.forEach((_, index) => {
            const target = wisdomCategories[index].count;
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => ({
                ...prev,
                [index === 0 ? 'ayurveda' : index === 1 ? 'households' : 'literacy']: Math.floor(current)
              }));
            }, 20);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTileClick = (index: number) => {
    setExpandedTile(expandedTile === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-kerala-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-kerala-green animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-kerala-gold animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Modern Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-kerala-green/20 to-kerala-gold/20 backdrop-blur-sm mb-6">
            <Lightbulb className="w-5 h-5 text-kerala-green" />
            <span className="text-kerala-green font-medium">Traditional Knowledge</span>
          </div>
          <h2 className="kerala-serif text-5xl md:text-7xl font-bold text-kerala-green mb-6">
            Kerala Wisdom Hub
            <span className="block text-3xl md:text-4xl text-kerala-gold font-normal mt-2">കേരള ജ്ഞാന കേന്ദ്രം</span>
          </h2>
          <p className="text-xl text-kerala-green/70 max-w-3xl mx-auto leading-relaxed">
            Unlock centuries of traditional knowledge and practical wisdom for modern living
          </p>
        </div>

        {/* Stats Overview */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center glass-effect rounded-2xl p-8 border border-kerala-green/20">
            <TrendingUp className="w-12 h-12 text-kerala-green mx-auto mb-4" />
            <div className="text-4xl font-bold text-kerala-green mb-2">{counters.ayurveda}+</div>
            <div className="text-kerala-green/70">Years of Ayurveda</div>
          </div>
          <div className="text-center glass-effect rounded-2xl p-8 border border-kerala-gold/20">
            <Star className="w-12 h-12 text-kerala-gold mx-auto mb-4" />
            <div className="text-4xl font-bold text-kerala-gold mb-2">{counters.households}%</div>
            <div className="text-kerala-green/70">Natural Solutions</div>
          </div>
          <div className="text-center glass-effect rounded-2xl p-8 border border-kerala-red/20">
            <BarChart3 className="w-12 h-12 text-kerala-red mx-auto mb-4" />
            <div className="text-4xl font-bold text-kerala-red mb-2">{counters.literacy}%</div>
            <div className="text-kerala-green/70">Literacy Rate</div>
          </div>
        </div>

        {/* Modern Wisdom Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {wisdomCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 transform overflow-hidden border-0 shadow-xl ${
                  expandedTile === index ? 'md:col-span-3 lg:col-span-1' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => handleTileClick(index)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-50`} />
                
                <CardHeader className="text-center relative z-10 pb-4">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="kerala-serif text-2xl text-kerala-green mb-3">
                    {category.title}
                  </CardTitle>
                  <div className="text-kerala-green/60 text-base mb-4">
                    {category.titleMl}
                  </div>
                  <div className={`inline-block px-6 py-3 bg-gradient-to-r ${category.color} text-white font-bold rounded-2xl shadow-lg`}>
                    {category.stat}
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 px-8 pb-8">
                  <p className="text-kerala-green/80 text-center mb-6 text-lg">
                    {category.description}
                  </p>
                  
                  {/* Expanded Content */}
                  <div className={`transition-all duration-500 ${
                    expandedTile === index 
                      ? 'opacity-100 max-h-96 transform translate-y-0' 
                      : 'opacity-0 max-h-0 transform translate-y-4'
                  } overflow-hidden`}>
                    <div className="border-t border-kerala-green/20 pt-6">
                      <h4 className="font-bold text-kerala-green mb-4 text-lg">Traditional Tips:</h4>
                      <div className="grid gap-3">
                        {category.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-start space-x-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mt-2 flex-shrink-0`} />
                            <span className="text-kerala-green/80 text-sm leading-relaxed">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <div className="text-center mt-6">
                    <div className="inline-flex items-center gap-2 text-kerala-green/60 text-sm font-medium">
                      {expandedTile === index ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Show More
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-8 glass-effect rounded-3xl px-12 py-8 border border-kerala-gold/30">
            <Lightbulb className="w-12 h-12 text-kerala-gold animate-pulse" />
            <div className="text-left">
              <p className="text-kerala-green font-bold text-xl mb-2">Discover More Wisdom</p>
              <p className="text-kerala-green/70">Traditional knowledge for modern living</p>
            </div>
            <Button className="bg-gradient-to-r from-kerala-green to-kerala-green-light hover:from-kerala-green-light hover:to-kerala-green text-white font-semibold rounded-2xl px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              Explore All Tips
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisdomHub;
