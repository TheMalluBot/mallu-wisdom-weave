
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Facebook, Instagram, Twitter, MapPin } from 'lucide-react';

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
    <footer className="bg-gradient-to-br from-kerala-green via-kerala-green-light to-kerala-green text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Enhanced main footer content with original Kerala styling */}
        <div className={`grid lg:grid-cols-4 gap-16 mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Enhanced brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-kerala-gold to-kerala-gold-dark flex items-center justify-center shadow-2xl border-2 border-kerala-gold/50">
                <span className="text-kerala-green font-bold text-2xl kerala-serif">M</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold kerala-serif">MyMallu.com</h3>
                <span className="text-kerala-gold text-lg font-bold kerala-serif">മൈമല്ലു.കോം</span>
              </div>
            </div>
            <p className="text-kerala-white/95 mb-8 leading-relaxed max-w-lg text-lg">
              കേരളത്തിന്റെ കാലാതീതമായ പാരമ്പര്യങ്ങളെ അത്യാധുനിക സാങ്കേതികവിദ്യയുമായി ബന്ധിപ്പിക്കുന്നു. 
              ദൈവത്തിന്റെ സ്വന്തം നാടിന്റെ മാന്ത്രികത അനുഭവിക്കൂ.
            </p>
            
            <div className="flex space-x-6">
              <div className="w-16 h-16 bg-kerala-gold/30 rounded-3xl flex items-center justify-center hover:bg-kerala-gold/40 transition-colors duration-300 cursor-pointer backdrop-blur-sm border-2 border-kerala-gold/50 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <Facebook className="w-8 h-8 text-kerala-gold" />
              </div>
              <div className="w-16 h-16 bg-kerala-gold/30 rounded-3xl flex items-center justify-center hover:bg-kerala-gold/40 transition-colors duration-300 cursor-pointer backdrop-blur-sm border-2 border-kerala-gold/50 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <Instagram className="w-8 h-8 text-kerala-gold" />
              </div>
              <div className="w-16 h-16 bg-kerala-gold/30 rounded-3xl flex items-center justify-center hover:bg-kerala-gold/40 transition-colors duration-300 cursor-pointer backdrop-blur-sm border-2 border-kerala-gold/50 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <Twitter className="w-8 h-8 text-kerala-gold" />
              </div>
            </div>
          </div>

          {/* Enhanced quick links */}
          <div>
            <h4 className="font-bold mb-8 text-kerala-gold text-2xl kerala-serif">പര്യവേക്ഷണം ചെയ്യൂ</h4>
            <ul className="space-y-6">
              {[
                { name: 'AI Fashion', ml: 'AI ഫാഷൻ' },
                { name: 'Kerala Stories', ml: 'കേരള കഥകൾ' },
                { name: 'Wisdom Hub', ml: 'ജ്ഞാന കേന്ദ്രം' },
                { name: 'Cultural Heritage', ml: 'സാംസ്കാരിക പൈതൃകം' }
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-kerala-white/90 hover:text-kerala-gold transition-colors duration-200 flex items-center gap-3 group text-lg">
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm text-kerala-gold/90 kerala-serif">{item.ml}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-kerala-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-kerala-gold text-2xl kerala-serif">അപ്ഡേറ്റ് ചെയ്യൂ</h4>
            <p className="text-kerala-white/90 mb-8 text-lg leading-relaxed">
              പരമ്പരാഗത ടിപ്പുകളും സാംസ്കാരിക ഉൾക്കാഴ്ചകളും നിങ്ങളുടെ ഇൻബോക്സിൽ ലഭിക്കൂ
            </p>
            <div className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kerala-gold" />
                <input 
                  type="email" 
                  placeholder="നിങ്ങളുടെ ഇമെയിൽ വിലാസം"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-kerala-gold/15 border-2 border-kerala-gold/40 rounded-2xl text-white placeholder-kerala-gold/70 focus:outline-none focus:border-kerala-gold backdrop-blur-sm shadow-xl text-lg"
                />
              </div>
              <Button className="w-full bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green hover:text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg kerala-serif">
                സബ്സ്ക്രൈബ് ചെയ്യൂ
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced bottom bar */}
        <div className={`border-t border-kerala-gold/40 pt-12 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-kerala-white/90 text-lg">
              © 2024 MyMallu.com. <span className="text-kerala-gold text-2xl">❤️</span> Made in God's Own Country with Love
            </div>
            
            <div className="flex items-center space-x-10 text-lg">
              <a href="#" className="text-kerala-white/90 hover:text-kerala-gold transition-colors duration-200 font-medium">Privacy Policy</a>
              <a href="#" className="text-kerala-white/90 hover:text-kerala-gold transition-colors duration-200 font-medium">Terms of Service</a>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-kerala-gold" />
                <span className="text-kerala-white/90 font-medium">Kerala, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
