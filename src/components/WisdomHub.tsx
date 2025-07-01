
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
      stat: "5000+",
      statLabel: "വർഷങ്ങൾ • Years",
      description: "പുരാതന ചികിത്സാ ജ്ഞാനം ആധുനിക ആരോഗ്യത്തിനായി",
      descriptionEn: "Ancient healing wisdom for modern wellness",
      tips: [
        "പ്രതിരോധശേഷി വർധിപ്പിക്കാൻ മഞ്ഞൾ പാൽ",
        "വായിലെ ആരോഗ്യത്തിന് തെങ്ങ എണ്ണ കഴുകൽ",
        "പ്രകൃതിദത്ത ത്വക്ക് ശുദ്ധീകരണത്തിന് വേപ്പില"
      ]
    },
    {
      title: "Household Tips",
      titleMl: "വീട്ടിലെ ഉപയോഗപ്രദമായ കാര്യങ്ങൾ",
      icon: Home,
      stat: "100%",
      statLabel: "പ്രകൃതിദത്തം • Natural",
      description: "ആധുനിക വീടുകൾക്കായി പരമ്പരാഗത രീതികൾ",
      descriptionEn: "Traditional methods for modern homes",
      tips: [
        "പരിസ്ഥിതി സൗഹൃദ വൃത്തിയാക്കലിന് തെങ്ങിന്റെ പുറംതൊലി",
        "ജൈവിക പ്ലേറ്റുകളായി വാഴയില",
        "പ്രകൃതിദത്ത വായു ശുദ്ധീകരണത്തിന് തുളസി"
      ]
    },
    {
      title: "Kerala Facts",
      titleMl: "കേരള വിവരങ്ങൾ",
      icon: BarChart3,
      stat: "100%",
      statLabel: "സാക്ഷരത • Literacy",
      description: "ദൈവത്തിന്റെ സ്വന്തം നാടിനെക്കുറിച്ചുള്ള അത്ഭുത വിവരങ്ങൾ",
      descriptionEn: "Amazing facts about God's Own Country",
      tips: [
        "100% സാക്ഷരത നേടിയ ആദ്യ സംസ്ഥാനം",
        "കായലുകൾ 900 കിലോമീറ്ററിലധികം വ്യാപിച്ചുകിടക്കുന്നു",
        "കേരളത്തിലൂടെ 44 നദികൾ ഒഴുകുന്നു"
      ]
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
    <section ref={sectionRef} className="py-24 bg-background kerala-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border shadow-soft mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="kerala-malayalam text-kerala-forest font-medium">പരമ്പരാഗത അറിവ്</span>
            <span className="text-muted-foreground">•</span>
            <span className="kerala-body text-muted-foreground font-medium">Traditional Knowledge</span>
          </div>
          <h2 className="kerala-heading text-display-lg font-bold text-kerala-forest mb-4">
            Kerala Wisdom Hub
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto kerala-malayalam">
            ആധുനിക ജീവിതത്തിനായി നൂറ്റാണ്ടുകളുടെ പരമ്പരാഗത അറിവ് അനുഭവിക്കൂ
          </p>
        </div>

        {/* Wisdom Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {wisdomCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-strong border border-border bg-card transform hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <CardTitle className="kerala-heading text-lg text-kerala-forest mb-2">
                    {category.title}
                  </CardTitle>
                  <div className="kerala-malayalam text-primary font-medium mb-4">
                    {category.titleMl}
                  </div>
                  <div className="inline-block px-4 py-2 bg-kerala-forest text-white rounded-lg shadow-soft">
                    <div className="kerala-body font-bold">{category.stat}</div>
                    <div className="kerala-malayalam text-xs opacity-90">{category.statLabel}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <div className="text-center mb-6">
                    <p className="kerala-malayalam text-kerala-forest font-medium mb-2 text-sm">
                      {category.description}
                    </p>
                    <p className="kerala-body text-muted-foreground text-sm">
                      {category.descriptionEn}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {category.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start space-x-3 p-3 rounded-lg bg-muted">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="kerala-malayalam text-kerala-forest font-medium text-sm">{tip}</span>
                      </div>
                    ))}
                    
                    <Button variant="ghost" className="w-full mt-4 kerala-body text-kerala-forest hover:text-primary-foreground hover:bg-kerala-forest border border-border hover:border-kerala-forest rounded-lg py-3 transition-all duration-300 font-medium">
                      <span className="kerala-malayalam mr-2">എല്ലാ ടിപ്പുകളും കാണൂ</span>
                      View All Tips
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button className="kerala-body bg-kerala-forest hover:bg-kerala-forest-light text-white font-semibold px-8 py-4 rounded-lg shadow-medium hover:shadow-strong transform hover:-translate-y-1 transition-all duration-300">
            <span className="kerala-malayalam mr-2">എല്ലാ ജ്ഞാനവും പര്യവേക്ഷണം ചെയ്യൂ</span>
            Explore All Wisdom
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WisdomHub;
