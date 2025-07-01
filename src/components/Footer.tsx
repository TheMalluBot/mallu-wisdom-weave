
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
    <footer className="bg-kerala-forest text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main footer content */}
        <div className={`grid lg:grid-cols-4 gap-12 mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-soft">
                <span className="text-kerala-forest font-bold text-xl kerala-heading">M</span>
              </div>
              <div>
                <h3 className="kerala-heading text-2xl font-bold">MyMallu.com</h3>
                <span className="kerala-malayalam text-primary font-medium">മൈമല്ലു.കോം</span>
              </div>
            </div>
            <p className="kerala-malayalam text-white/90 mb-6 leading-relaxed max-w-lg">
              കേരളത്തിന്റെ കാലാതീതമായ പാരമ്പര്യങ്ങളെ അത്യാധുനിക സാങ്കേതികവിദ്യയുമായി ബന്ധിപ്പിക്കുന്നു. 
              ദൈവത്തിന്റെ സ്വന്തം നാടിന്റെ മാന്ത്രികത അനുഭവിക്കൂ.
            </p>
            
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="kerala-malayalam font-semibold mb-6 text-primary">പര്യവേക്ഷണം ചെയ്യൂ</h4>
            <ul className="space-y-4">
              {[
                { name: 'AI Fashion', ml: 'AI ഫാഷൻ' },
                { name: 'Kerala Stories', ml: 'കേരള കഥകൾ' },
                { name: 'Wisdom Hub', ml: 'ജ്ഞാന കേന്ദ്രം' },
                { name: 'Cultural Heritage', ml: 'സാംസ്കാരിക പൈതൃകം' }
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="kerala-body text-white/80 hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="kerala-malayalam text-sm text-primary/80">{item.ml}</div>
                    </div>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="kerala-malayalam font-semibold mb-4 text-primary">അപ്ഡേറ്റ് ചെയ്യൂ</h4>
            <p className="kerala-malayalam text-white/80 mb-6 leading-relaxed">
              പരമ്പരാഗത ടിപ്പുകളും സാംസ്കാരിക ഉൾക്കാഴ്ചകളും നിങ്ങളുടെ ഇൻബോക്സിൽ ലഭിക്കൂ
            </p>
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  type="email" 
                  placeholder="നിങ്ങളുടെ ഇമെയിൽ വിലാസം"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-primary kerala-malayalam"
                />
              </div>
              <Button className="w-full kerala-malayalam bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg">
                സബ്സ്ക്രൈബ് ചെയ്യൂ
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`border-t border-white/20 pt-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="kerala-body text-white/80">
              © 2024 MyMallu.com. Made in God's Own Country with ❤️
            </div>
            
            <div className="flex items-center space-x-8 kerala-body">
              <a href="#" className="text-white/80 hover:text-primary transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors duration-200">Terms of Service</a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-white/80">Kerala, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
