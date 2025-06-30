
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Star, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

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
    <footer className="relative bg-gradient-to-br from-kerala-green via-kerala-green-light to-kerala-green text-kerala-white overflow-hidden">
      {/* Modern Wave Pattern */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 215, 0, 0.4)" />
              <stop offset="50%" stopColor="rgba(253, 251, 247, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 215, 0, 0.4)" />
            </linearGradient>
          </defs>
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="url(#footerWave)"
          />
        </svg>
      </div>

      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className={`grid lg:grid-cols-4 gap-12 mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-kerala-gold to-yellow-400 flex items-center justify-center">
                  <Star className="w-8 h-8 text-kerala-green" />
                </div>
                <div>
                  <h3 className="kerala-serif text-4xl font-bold text-kerala-gold">
                    MyMallu.com
                  </h3>
                  <span className="text-lg text-kerala-white/80 mt-1 block">മൈമല്ലു.കോം</span>
                </div>
              </div>
              <p className="text-kerala-white/80 mb-8 leading-relaxed text-lg max-w-md">
                Bridging Kerala's timeless traditions with cutting-edge technology. 
                Experience the magic of God's Own Country like never before.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <div className="group w-12 h-12 glass-effect rounded-2xl flex items-center justify-center hover:bg-kerala-gold/20 transition-all duration-300 cursor-pointer">
                  <Facebook className="w-6 h-6 text-kerala-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="group w-12 h-12 glass-effect rounded-2xl flex items-center justify-center hover:bg-kerala-gold/20 transition-all duration-300 cursor-pointer">
                  <Instagram className="w-6 h-6 text-kerala-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="group w-12 h-12 glass-effect rounded-2xl flex items-center justify-center hover:bg-kerala-gold/20 transition-all duration-300 cursor-pointer">
                  <Twitter className="w-6 h-6 text-kerala-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h4 className="font-bold text-kerala-gold mb-6 text-xl">Explore</h4>
              <ul className="space-y-4">
                {[
                  { name: 'AI Fashion', badge: 'New' },
                  { name: 'Kerala Stories', badge: null },
                  { name: 'Wisdom Hub', badge: 'Popular' },
                  { name: 'Cultural Heritage', badge: null }
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="group flex items-center gap-3 text-kerala-white/80 hover:text-kerala-gold transition-colors duration-300">
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-kerala-gold/20 text-kerala-gold rounded-full">
                          {item.badge}
                        </span>
                      )}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h4 className="font-bold text-kerala-gold mb-4 text-xl">Daily Kerala Wisdom</h4>
              <p className="text-kerala-white/80 text-sm mb-6 leading-relaxed">
                Get traditional tips and cultural insights delivered to your inbox every morning
              </p>
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kerala-white/60" />
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-kerala-white/10 backdrop-blur-sm border border-kerala-gold/30 rounded-2xl text-kerala-white placeholder-kerala-white/60 focus:outline-none focus:border-kerala-gold focus:bg-kerala-white/20 transition-all duration-300"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-kerala-gold to-yellow-400 hover:from-kerala-gold-dark hover:to-kerala-gold text-kerala-green font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Subscribe Now ✨
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`border-t border-kerala-white/20 pt-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-kerala-white/60">
                <span>© 2024 MyMallu.com. Made with</span>
                <Heart className="w-4 h-4 text-kerala-red fill-current animate-pulse" />
                <span>in God's Own Country</span>
              </div>
              
              <div className="flex items-center space-x-8 text-sm">
                <a href="#" className="text-kerala-white/60 hover:text-kerala-gold transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-kerala-white/60 hover:text-kerala-gold transition-colors duration-300">Terms of Service</a>
                <div className="flex items-center space-x-2">
                  <span className="text-kerala-white/60">Powered by</span>
                  <span className="text-kerala-gold font-semibold">Kerala Spirit</span>
                  <Star className="w-4 h-4 text-kerala-gold animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="animate-float absolute top-32 left-20 text-4xl">🛶</div>
        <div className="animate-float absolute top-48 right-32 text-3xl" style={{ animationDelay: '1s' }}>🥥</div>
        <div className="animate-float absolute bottom-32 left-1/3 text-5xl" style={{ animationDelay: '2s' }}>🌴</div>
        <div className="animate-float absolute bottom-48 right-20 text-3xl" style={{ animationDelay: '1.5s' }}>🪔</div>
      </div>
    </footer>
  );
};

export default Footer;
