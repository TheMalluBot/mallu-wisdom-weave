
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const AIFashionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-kerala-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="kerala-serif text-4xl md:text-5xl font-bold text-kerala-green mb-6">
            AI Fashion Experience
          </h2>
          <p className="text-xl text-kerala-green/80 max-w-3xl mx-auto mb-8">
            From Kasavu to Contemporary - Find Your Perfect Look with Smart AI Styling
          </p>
          
          <Button 
            onClick={() => navigate('/ai-fashion')}
            size="lg"
            className="bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green font-semibold px-8 py-4 text-lg rounded-full"
          >
            Try AI Fashion Assistant ✨
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">🎯</div>
              <CardTitle className="text-kerala-green">Smart Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-kerala-green/70">
                <li>• Height-based styling advice</li>
                <li>• Body type optimization</li>
                <li>• Color psychology integration</li>
                <li>• Occasion-specific suggestions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">🏛️</div>
              <CardTitle className="text-kerala-green">Kerala Heritage</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-kerala-green/70">
                <li>• Traditional Kasavu sarees</li>
                <li>• Mundu collections</li>
                <li>• Festival wear guidance</li>
                <li>• Cultural significance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">🎨</div>
              <CardTitle className="text-kerala-green">Personalized Styling</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-kerala-green/70">
                <li>• Skin tone analysis</li>
                <li>• Budget-friendly options</li>
                <li>• Style goal achievement</li>
                <li>• Mix & match suggestions</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Preview */}
        <Card className="bg-kerala-gradient text-white mt-12">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="kerala-serif text-2xl font-bold mb-4">Experience AI Fashion</h3>
                <p className="mb-6">
                  Get personalized recommendations based on your body type, preferences, and Kerala's fashion heritage.
                </p>
                <Button 
                  onClick={() => navigate('/ai-fashion')}
                  className="bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green"
                >
                  Start Your Fashion Journey
                </Button>
              </div>
              <div className="text-center">
                <div className="text-8xl animate-kerala-float">👗</div>
                <p className="mt-4 text-kerala-white/80">AI-Powered Fashion Assistant</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIFashionSection;
