
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
      color: "from-kerala-green/20 to-green-400/20"
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
      color: "from-kerala-gold/20 to-yellow-400/20"
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
      color: "from-kerala-red/20 to-red-400/20"
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-kerala-white to-kerala-gold/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Kerala-themed section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-kerala-gold/10 to-kerala-green/10 border border-kerala-gold/30 mb-6">
            <Lightbulb className="w-5 h-5 text-kerala-gold" />
            <span className="text-kerala-green font-medium">പരമ്പരാഗത അറിവ്</span>
            <span className="text-gray-600">• Traditional Knowledge</span>
          </div>
          <h2 className="kerala-serif text-4xl md:text-5xl font-bold text-kerala-green mb-4">
            Kerala Wisdom Hub
          </h2>
          <p className="text-xl text-kerala-green/70 max-w-2xl mx-auto">
            ആധുനിക ജീവിതത്തിനായി നൂറ്റാണ്ടുകളുടെ പരമ്പരാഗത അറിവ് അനുഭവിക്കൂ
          </p>
        </div>

        {/* Kerala-themed wisdom grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {wisdomCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border border-kerala-gold/20 hover:border-kerala-gold/40 bg-gradient-to-br ${category.color} backdrop-blur-sm transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-kerala-gold/30 to-kerala-green/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-kerala-gold/40">
                    <IconComponent className="w-10 h-10 text-kerala-green" />
                  </div>
                  <CardTitle className="text-xl text-kerala-green mb-3 kerala-serif">
                    {category.title}
                  </CardTitle>
                  <div className="text-kerala-gold font-medium text-sm mb-4">
                    {category.titleMl}
                  </div>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-kerala-green to-kerala-green-light text-white font-medium rounded-xl text-sm shadow-lg">
                    <div>{category.stat}</div>
                    <div className="text-xs opacity-90">{category.statEn}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <div className="text-center mb-6">
                    <p className="text-kerala-green font-medium mb-2">
                      {category.description}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {category.descriptionEn}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {category.tips.slice(0, 3).map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-white/50 to-kerala-gold/5 border border-kerala-gold/20">
                        <div className="w-2 h-2 rounded-full bg-kerala-gold mt-2 flex-shrink-0" />
                        <span className="text-kerala-green text-sm font-medium">{tip}</span>
                      </div>
                    ))}
                    
                    <Button variant="ghost" className="w-full mt-4 text-kerala-green hover:text-white hover:bg-kerala-green/90 border border-kerala-green/30 hover:border-kerala-green rounded-xl py-3 transition-all duration-300">
                      എല്ലാ ടിപ്പുകളും കാണൂ
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Kerala-themed CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button className="bg-gradient-to-r from-kerala-green to-kerala-green-light hover:from-kerala-green-light hover:to-kerala-green text-white font-medium px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            എല്ലാ ജ്ഞാനവും പര്യവേക്ഷണം ചെയ്യൂ • Explore All Wisdom
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WisdomHub;
