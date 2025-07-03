
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserPreferencesForm from './UserPreferencesForm';
import SmartRecommendations from './SmartRecommendations';
import KeralaFashionGuide from './KeralaFashionGuide';

interface UserPreferences {
  height: number;
  bodyType: string;
  skinTone: string;
  ageGroup: string;
  occasions: string[];
  colorPreferences: string[];
  budgetRange: string;
  styleGoals: string[];
}

const AIFashionSection = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'preferences' | 'recommendations'>('intro');
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);

  const handlePreferencesSubmit = (preferences: UserPreferences) => {
    setUserPreferences(preferences);
    setCurrentStep('recommendations');
  };

  const resetToStart = () => {
    setCurrentStep('intro');
    setUserPreferences(null);
  };

  if (currentStep === 'preferences') {
    return (
      <section className="py-20 bg-kerala-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="kerala-serif text-4xl md:text-5xl font-bold text-kerala-green mb-6">
              Tell Us About You
            </h2>
            <p className="text-xl text-kerala-green/80 max-w-3xl mx-auto">
              Help our AI stylist understand your preferences for personalized recommendations
            </p>
          </div>
          
          <UserPreferencesForm onSubmit={handlePreferencesSubmit} />
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep('intro')}
              className="text-kerala-green border-kerala-green hover:bg-kerala-green hover:text-white"
            >
              Back to Overview
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (currentStep === 'recommendations' && userPreferences) {
    return (
      <section className="py-20 bg-kerala-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="kerala-serif text-4xl md:text-5xl font-bold text-kerala-green mb-6">
              Your AI Fashion Recommendations
            </h2>
            <p className="text-xl text-kerala-green/80 max-w-3xl mx-auto">
              Personalized styling suggestions based on your preferences and Kerala's rich fashion heritage
            </p>
          </div>
          
          <SmartRecommendations preferences={userPreferences} />
          
          <div className="text-center mt-12 space-x-4">
            <Button 
              onClick={() => setCurrentStep('preferences')}
              variant="outline"
              className="text-kerala-green border-kerala-green hover:bg-kerala-green hover:text-white"
            >
              Update Preferences
            </Button>
            <Button 
              onClick={resetToStart}
              className="bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green"
            >
              Start Over
            </Button>
          </div>
        </div>
      </section>
    );
  }

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
            onClick={() => setCurrentStep('preferences')}
            size="lg"
            className="bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green font-semibold px-8 py-4 text-lg rounded-full"
          >
            Get My AI Recommendations ✨
          </Button>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="features">AI Features</TabsTrigger>
            <TabsTrigger value="guide">Kerala Fashion Guide</TabsTrigger>
            <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-8">
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
            <Card className="bg-kerala-gradient text-white">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="kerala-serif text-2xl font-bold mb-4">Try Our AI Stylist</h3>
                    <p className="mb-6">
                      Get personalized recommendations based on your body type, preferences, and Kerala's fashion heritage.
                    </p>
                    <Button 
                      onClick={() => setCurrentStep('preferences')}
                      className="bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green"
                    >
                      Start Styling Session
                    </Button>
                  </div>
                  <div className="text-center">
                    <div className="text-8xl animate-kerala-float">👗</div>
                    <p className="mt-4 text-kerala-white/80">AI-Powered Fashion Assistant</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide">
            <KeralaFashionGuide />
          </TabsContent>

          <TabsContent value="how-it-works" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Profile Creation',
                  description: 'Share your physical attributes, style preferences, and goals',
                  icon: '👤'
                },
                {
                  step: '2', 
                  title: 'AI Analysis',
                  description: 'Our AI analyzes your profile and Kerala fashion database',
                  icon: '🤖'
                },
                {
                  step: '3',
                  title: 'Smart Suggestions',
                  description: 'Receive personalized outfit recommendations and styling tips',
                  icon: '✨'
                },
                {
                  step: '4',
                  title: 'Shop & Style',
                  description: 'Get direct shopping links and complete your perfect look',
                  icon: '🛍️'
                }
              ].map((item) => (
                <Card key={item.step} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-bold text-kerala-green mb-2">
                      Step {item.step}: {item.title}
                    </h3>
                    <p className="text-kerala-green/70 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-kerala-white border-kerala-gold border-2">
              <CardHeader>
                <CardTitle className="text-kerala-green text-center">
                  Why Choose Our AI Fashion Assistant?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl mb-3">🎯</div>
                    <h4 className="font-semibold text-kerala-green mb-2">Personalized</h4>
                    <p className="text-kerala-green/70 text-sm">
                      Recommendations tailored to your unique body type and preferences
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl mb-3">🏛️</div>
                    <h4 className="font-semibold text-kerala-green mb-2">Cultural</h4>
                    <p className="text-kerala-green/70 text-sm">
                      Authentic Kerala fashion heritage integrated with modern styling
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl mb-3">🧠</div>
                    <h4 className="font-semibold text-kerala-green mb-2">Smart</h4>
                    <p className="text-kerala-green/70 text-sm">
                      AI-powered analysis for optimal color, fit, and style recommendations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AIFashionSection;
