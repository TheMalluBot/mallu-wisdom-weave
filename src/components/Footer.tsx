
const Footer = () => {
  return (
    <footer className="relative bg-kerala-green text-kerala-white overflow-hidden">
      {/* Animated Wave Pattern */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="kerala-serif text-3xl font-bold text-kerala-gold mb-4">
                MyMallu.com
                <span className="block text-lg text-kerala-white/80 mt-2">മൈമല്ലു.കോം</span>
              </h3>
              <p className="text-kerala-white/80 mb-6 leading-relaxed">
                Bridging Kerala's timeless traditions with cutting-edge technology. 
                Experience the magic of God's Own Country like never before.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-kerala-gold/20 rounded-full flex items-center justify-center hover:bg-kerala-gold/30 transition-colors cursor-pointer">
                  <span className="text-kerala-gold">📘</span>
                </div>
                <div className="w-10 h-10 bg-kerala-gold/20 rounded-full flex items-center justify-center hover:bg-kerala-gold/30 transition-colors cursor-pointer">
                  <span className="text-kerala-gold">📷</span>
                </div>
                <div className="w-10 h-10 bg-kerala-gold/20 rounded-full flex items-center justify-center hover:bg-kerala-gold/30 transition-colors cursor-pointer">
                  <span className="text-kerala-gold">🐦</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-kerala-gold mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-kerala-white/80 hover:text-kerala-gold transition-colors">AI Fashion</a></li>
                <li><a href="#" className="text-kerala-white/80 hover:text-kerala-gold transition-colors">Kerala Stories</a></li>
                <li><a href="#" className="text-kerala-white/80 hover:text-kerala-gold transition-colors">Wisdom Hub</a></li>
                <li><a href="#" className="text-kerala-white/80 hover:text-kerala-gold transition-colors">Cultural Heritage</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-kerala-gold mb-4">Daily Kerala Wisdom</h4>
              <p className="text-kerala-white/80 text-sm mb-4">
                Get traditional tips and cultural insights delivered to your inbox
              </p>
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-kerala-white/10 border border-kerala-gold/30 rounded-full px-4 py-2 text-kerala-white placeholder-kerala-white/60 focus:outline-none focus:border-kerala-gold"
                />
                <button className="bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green font-semibold py-2 rounded-full transition-colors">
                  Subscribe ✨
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-kerala-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-kerala-white/60 text-sm mb-4 md:mb-0">
              © 2024 MyMallu.com. Made with ❤️ in God's Own Country
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-kerala-white/60 hover:text-kerala-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-kerala-white/60 hover:text-kerala-gold transition-colors">Terms of Service</a>
              <div className="flex items-center space-x-2">
                <span className="text-kerala-white/60">Powered by</span>
                <span className="text-kerala-gold">Kerala Spirit</span>
                <span className="animate-glow">🌟</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="animate-float absolute top-20 left-10 text-3xl">🛶</div>
        <div className="animate-float absolute top-32 right-20 text-2xl" style={{ animationDelay: '1s' }}>🥥</div>
        <div className="animate-float absolute bottom-20 left-1/4 text-4xl" style={{ animationDelay: '2s' }}>🌴</div>
      </div>
    </footer>
  );
};

export default Footer;
