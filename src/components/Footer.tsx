
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Facebook, Instagram, Twitter, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-gradient-to-br from-kerala-green to-kerala-green-light text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main footer content with Kerala theme */}
        <div className={`grid lg:grid-cols-4 gap-12 mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          
          {/* Brand section with Kerala elements */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-kerala-gold to-kerala-gold-dark flex items-center justify-center shadow-lg">
                <span className="text-kerala-green font-bold text-xl kerala-serif">M</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold kerala-serif">MyMallu.com</h3>
                <span className="text-kerala-gold text-sm font-medium">മൈമല്ലു.കോം</span>
              </div>
            </div>
            <p className="text-kerala-white/90 mb-6 leading-relaxed max-w-md">
              കേരളത്തിന്റെ കാലാതീതമായ പാരമ്പര്യങ്ങളെ അത്യാധുനിക സാങ്കേതികവിദ്യയുമായി ബന്ധിപ്പിക്കുന്നു. 
              ദൈവത്തിന്റെ സ്വന്തം നാടിന്റെ മാന്ത്രികത അനുഭവിക്കൂ.
            </p>
            
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-kerala-gold/20 rounded-2xl flex items-center justify-center hover:bg-kerala-gold/30 transition-colors duration-300 cursor-pointer backdrop-blur-sm border border-kerala-gold/30">
                <Facebook className="w-6 h-6 text-kerala-gold" />
              </div>
              <div className="w-12 h-12 bg-kerala-gold/20 rounded-2xl flex items-center justify-center hover:bg-kerala-gold/30 transition-colors duration-300 cursor-pointer backdrop-blur-sm border border-kerala-gold/30">
                <Instagram className="w-6 h-6 text-kerala-gold" />
              </div>
              <div className="w-12 h-12 bg-kerala-gold/20 rounded-2xl flex items-center justify-center hover:bg-kerala-gold/30 transition-colors duration-300 cursor-pointer backdrop-blur-sm border border-kerala-gold/30">
                <Twitter className="w-6 h-6 text-kerala-gold" />
              </div>
            </div>
          </div>

          {/* Quick links with Malayalam */}
          <div>
            <h4 className="font-semibold mb-6 text-kerala-gold text-lg">പര്യവേക്ഷണം ചെയ്യൂ</h4>
            <ul className="space-y-4">
              {[
                { name: 'AI Fashion', ml: 'AI ഫാഷൻ' },
                { name: 'Kerala Stories', ml: 'കേരള കഥകൾ' },
                { name: 'Wisdom Hub', ml: 'ജ്ഞാന കേന്ദ്രം' },
                { name: 'Cultural Heritage', ml: 'സാംസ്കാരിക പൈതൃകം' }
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-kerala-white/80 hover:text-kerala-gold transition-colors duration-200 flex items-center gap-2 group">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-kerala-gold/80">{item.ml}</div>
                    </div>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-kerala-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter with Kerala styling */}
          <div>
            <h4 className="font-semibold mb-4 text-kerala-gold text-lg">അപ്ഡേറ്റ് ചെയ്യൂ</h4>
            <p className="text-kerala-white/80 text-sm mb-6">
              പരമ്പരാഗത ടിപ്പുകളും സാംസ്കാരിക ഉൾക്കാഴ്ചകളും നിങ്ങളുടെ ഇൻബോക്സിൽ ലഭിക്കൂ
            </p>
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-kerala-gold" />
                <input 
                  type="email" 
                  placeholder="നിങ്ങളുടെ ഇമെയിൽ വിലാസം"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-kerala-gold/10 border border-kerala-gold/30 rounded-xl text-white placeholder-kerala-gold/60 focus:outline-none focus:border-kerala-gold backdrop-blur-sm"
                />
              </div>
              <Button className="w-full bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green hover:text-white font-medium py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                സബ്സ്ക്രൈബ് ചെയ്യൂ
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar with Kerala elements */}
        <div className={`border-t border-kerala-gold/30 pt-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-kerala-white/80 text-sm">
              © 2024 MyMallu.com. <span className="text-kerala-gold">❤️</span> Made in God's Own Country with Love
            </div>
            
            <div className="flex items-center space-x-8 text-sm">
              <a href="#" className="text-kerala-white/80 hover:text-kerala-gold transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-kerala-white/80 hover:text-kerala-gold transition-colors duration-200">Terms of Service</a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-kerala-gold" />
                <span className="text-kerala-white/80">Kerala, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
