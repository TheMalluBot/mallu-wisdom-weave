
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WisdomHub = () => {
  const [expandedTile, setExpandedTile] = useState<number | null>(null);

  const wisdomCategories = [
    {
      title: "Ayurvedic Health Hacks",
      titleMl: "ആയുർവേദ ആരോഗ്യ രഹസ്യങ്ങൾ",
      icon: "🌿",
      stat: "5000+ Years",
      description: "Ancient healing wisdom for modern wellness",
      tips: [
        "Turmeric milk for immunity",
        "Coconut oil pulling for oral health",
        "Neem leaves for skin purification",
        "Ginger tea for digestion"
      ],
      color: "from-green-600 to-green-400"
    },
    {
      title: "Household Tips",
      titleMl: "വീട്ടിലെ ഉപയോഗപ്രദമായ കാര്യങ്ങൾ",
      icon: "🏠",
      stat: "100% Natural",
      description: "Traditional methods for modern homes",
      tips: [
        "Coconut husk for cleaning",
        "Banana leaves as natural plates",
        "Tulsi for air purification",
        "Tamarind for metal polishing"
      ],
      color: "from-kerala-gold to-yellow-400"
    },
    {
      title: "Kerala Facts",
      titleMl: "കേരള വിവരങ്ങൾ",
      icon: "📊",
      stat: "100% Literacy",
      description: "Amazing facts about God's Own Country",
      tips: [
        "First state to achieve 100% literacy",
        "Backwaters span 900km",
        "44 rivers flow through Kerala",
        "Home to 2500+ plant species"
      ],
      color: "from-kerala-red to-red-400"
    }
  ];

  const handleTileClick = (index: number) => {
    setExpandedTile(expandedTile === index ? null : index);
  };

  return (
    <section className="py-20 bg-kerala-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="kerala-serif text-4xl md:text-5xl font-bold text-kerala-green mb-6">
            Kerala Wisdom Hub
            <span className="block text-2xl mt-2 text-kerala-gold">കേരള ജ്ഞാന കേന്ദ്രം</span>
          </h2>
          <p className="text-xl text-kerala-green/80 max-w-3xl mx-auto">
            Unlock centuries of traditional knowledge and practical wisdom
          </p>
        </div>

        {/* Wisdom Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {wisdomCategories.map((category, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-500 hover:scale-105 transform group relative overflow-hidden ${
                expandedTile === index ? 'row-span-2' : ''
              }`}
              onClick={() => handleTileClick(index)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <CardHeader className="text-center relative z-10">
                <div className="text-5xl mb-4 group-hover:animate-bounce transition-all duration-300">
                  {category.icon}
                </div>
                <CardTitle className="kerala-serif text-xl text-kerala-green mb-2">
                  {category.title}
                </CardTitle>
                <div className="text-kerala-green/60 text-sm mb-3">
                  {category.titleMl}
                </div>
                <div className="inline-block px-4 py-2 bg-kerala-gold/20 text-kerala-green font-bold rounded-full">
                  {category.stat}
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-kerala-green/80 text-center mb-4">
                  {category.description}
                </p>
                
                {/* Expanded Content */}
                <div className={`transition-all duration-500 ${
                  expandedTile === index 
                    ? 'opacity-100 max-h-96 transform translate-y-0' 
                    : 'opacity-0 max-h-0 transform translate-y-4'
                } overflow-hidden`}>
                  <div className="border-t border-kerala-green/20 pt-4">
                    <h4 className="font-semibold text-kerala-green mb-3">Traditional Tips:</h4>
                    <ul className="space-y-2">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-2 text-sm text-kerala-green/80">
                          <span className="text-kerala-gold mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Click Indicator */}
                <div className="text-center mt-4">
                  <div className={`inline-block text-kerala-green/60 text-sm transition-transform duration-300 ${
                    expandedTile === index ? 'rotate-180' : ''
                  }`}>
                    ⌄ {expandedTile === index ? 'Show Less' : 'Show More'}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-kerala-gradient rounded-full px-8 py-6 text-kerala-white">
            <div className="text-2xl animate-glow">💡</div>
            <div>
              <p className="font-semibold">Discover More Wisdom</p>
              <p className="text-sm opacity-90">Traditional knowledge for modern living</p>
            </div>
            <div className="text-2xl animate-float">🌟</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisdomHub;
