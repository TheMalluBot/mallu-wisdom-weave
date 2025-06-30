
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
      stat: "5000+ വർഷം",
      statEn: "5000+ Years",
      description: "പുരാതന ചികിത്സാ ജ്ഞാനം ആധുനിക ആരോഗ്യത്തിനായി",
      descriptionEn: "Ancient healing wisdom for modern wellness",
      tips: [
        "പ്രതിരോധശേഷി വർധിപ്പിക്കാൻ മഞ്ഞൾ പാൽ",
        "വായിലെ ആരോഗ്യത്തിന് തെങ്ങ എണ്ണ കഴുകൽ",
        "പ്രകൃതിദത്ത ത്വക്ക് ശുദ്ധീകരണത്തിന് വേപ്പില",
        "ദഹനത്തിന് ഇഞ്ചി ചായ"
      ],
      color: "from-kerala-green/25 to-green-400/25"
    },
    {
      title: "Household Tips",
      titleMl: "വീട്ടിലെ ഉപയോഗപ്രദമായ കാര്യങ്ങൾ",
      icon: Home,
      stat: "100% പ്രകൃതിദത്തം",
      statEn: "100% Natural",
      description: "ആധുനിക വീടുകൾക്കായി പരമ്പരാഗത രീതികൾ",
      descriptionEn: "Traditional methods for modern homes",
      tips: [
        "പരിസ്ഥിതി സൗഹൃദ വൃത്തിയാക്കലിന് തെങ്ങിന്റെ പുറംതൊലി",
        "ജൈവിക പ്ലേറ്റുകളായി വാഴയില",
        "പ്രകൃതിദത്ത വായു ശുദ്ധീകരണത്തിന് തുളസി",
        "ലോഹം തിളക്കാൻ പുളി"
      ],
      color: "from-kerala-gold/25 to-yellow-400/25"
    },
    {
      title: "Kerala Facts",
      titleMl: "കേരള വിവരങ്ങൾ",
      icon: BarChart3,
      stat: "100% സാക്ഷരത",
      statEn: "100% Literacy",
      description: "ദൈവത്തിന്റെ സ്വന്തം നാടിനെക്കുറിച്ചുള്ള അത്ഭുത വിവരങ്ങൾ",
      descriptionEn: "Amazing facts about God's Own Country",
      tips: [
        "100% സാക്ഷരത നേടിയ ആദ്യ സംസ്ഥാനം",
        "കായലുകൾ 900 കിലോമീറ്ററിലധികം വ്യാപിച്ചുകിടക്കുന്നു",
        "കേരളത്തിലൂടെ 44 നദികൾ ഒഴുകുന്നു",
        "2500 അതുല്യ സസ്യജാലങ്ങളുടെ ആവാസം"
      ],
      color: "from-kerala-red/25 to-red-400/25"
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
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-kerala-white to-kerala-gold/8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Enhanced section header with original Kerala styling */}
        <div className={`text-center mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-kerala-gold/15 to-kerala-green/15 border-2 border-kerala-gold/40 backdrop-blur-sm mb-8 shadow-xl">
            <Lightbulb className="w-6 h-6 text-kerala-gold animate-glow" />
            <span className="text-kerala-green font-bold text-xl kerala-serif">പരമ്പരാഗത അറിവ്</span>
            <span className="text-gray-700 font-semibold">• Traditional Knowledge</span>
          </div>
          <h2 className="kerala-serif text-5xl md:text-7xl font-bold text-kerala-green mb-6 kerala-text-shadow">
            Kerala Wisdom Hub
          </h2>
          <p className="text-2xl text-kerala-green/80 max-w-3xl mx-auto font-light leading-relaxed">
            ആധുനിക ജീവിതത്തിനായി നൂറ്റാണ്ടുകളുടെ പരമ്പരാഗത അറിവ് അനുഭവിക്കൂ
          </p>
        </div>

        {/* Enhanced wisdom grid with original Kerala styling */}
        <div className="grid md:grid-cols-3 gap-10">
          {wisdomCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 border-kerala-gold/30 hover:border-kerala-gold/60 bg-gradient-to-br ${category.color} backdrop-blur-sm transform hover:-translate-y-3 hover:scale-105 shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-6">
                  <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-kerala-gold/40 to-kerala-green/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-kerala-gold/50 shadow-xl">
                    <IconComponent className="w-12 h-12 text-kerala-green" />
                  </div>
                  <CardTitle className="text-2xl text-kerala-green mb-4 kerala-serif">
                    {category.title}
                  </CardTitle>
                  <div className="text-kerala-gold font-bold mb-6 kerala-serif">
                    {category.titleMl}
                  </div>
                  <div className="inline-block px-6 py-4 bg-gradient-to-r from-kerala-green to-kerala-green-light text-white font-bold rounded-2xl shadow-xl">
                    <div className="text-lg">{category.stat}</div>
                    <div className="text-sm opacity-90">{category.statEn}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <div className="text-center mb-8">
                    <p className="text-kerala-green font-bold mb-3 text-lg">
                      {category.description}
                    </p>
                    <p className="text-gray-700 font-medium">
                      {category.descriptionEn}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {category.tips.slice(0, 3).map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-white/60 to-kerala-gold/10 border-2 border-kerala-gold/30 shadow-lg">
                        <div className="w-3 h-3 rounded-full bg-kerala-gold mt-2 flex-shrink-0 shadow-md" />
                        <span className="text-kerala-green font-semibold">{tip}</span>
                      </div>
                    ))}
                    
                    <Button variant="ghost" className="w-full mt-6 text-kerala-green hover:text-white hover:bg-kerala-green/90 border-2 border-kerala-green/40 hover:border-kerala-green rounded-2xl py-4 transition-all duration-300 font-bold shadow-lg hover:shadow-xl">
                      എല്ലാ ടിപ്പുകളും കാണൂ
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced CTA with original Kerala styling */}
        <div className={`text-center mt-20 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button className="bg-gradient-to-r from-kerala-green to-kerala-green-light hover:from-kerala-green-light hover:to-kerala-green text-white font-bold px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg kerala-serif">
            എല്ലാ ജ്ഞാനവും പര്യവേക്ഷണം ചെയ്യൂ • Explore All Wisdom
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WisdomHub;
