
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/pages/AIFashion';

interface RecommendationsSectionProps {
  userProfile: UserProfile;
}

const RecommendationsSection = ({ userProfile }: RecommendationsSectionProps) => {
  const generateRecommendations = () => {
    const recommendations = [];

    // Body shape specific recommendations
    if (userProfile.bodyShape === 'pear') {
      recommendations.push({
        id: 'pear-kasavu',
        name: 'High-Waisted Kasavu Saree',
        category: 'Traditional',
        description: 'A-line draping with statement blouse to balance your beautiful pear silhouette',
        outfit: '🥻',
        colors: ['Kerala Gold', 'Ivory'],
        why: 'A-line draping draws attention upward, creating perfect balance for pear shapes',
        tips: ['High-waisted draping', 'Statement jewelry on top', 'Avoid tight blouses'],
        price: '₹3,500 - ₹8,000'
      });
    }

    if (userProfile.bodyShape === 'apple') {
      recommendations.push({
        id: 'apple-empire',
        name: 'Empire Waist Kerala Dress',
        category: 'Fusion',
        description: 'Flowing empire waist design with traditional Kerala patterns',
        outfit: '👗',
        colors: ['Emerald Green', 'Temple Red'],
        why: 'Empire waist sits above natural waistline, creating a flattering silhouette',
        tips: ['V-neck styling', 'Flowy fabrics', 'Minimal waist emphasis'],
        price: '₹2,500 - ₹6,000'
      });
    }

    // Height-based recommendations
    if (userProfile.height < 160) {
      recommendations.push({
        id: 'petite-styling',
        name: 'Petite-Perfect Kerala Ensemble',
        category: 'Modern',
        description: 'Vertical lines and high-waisted styling to enhance your petite frame',
        outfit: '👚',
        colors: ['Deep Blue', 'Kerala Gold'],
        why: 'Vertical styling and proportional cuts create the illusion of height',
        tips: ['Monochromatic looks', 'High-waisted bottoms', 'Pointed footwear'],
        price: '₹1,800 - ₹4,500'
      });
    }

    // Style goal specific
    if (userProfile.styleGoals.includes('elegant')) {
      recommendations.push({
        id: 'elegant-traditional',
        name: 'Royal Kerala Elegance',
        category: 'Premium Traditional',
        description: 'Sophisticated traditional wear with royal Kerala heritage elements',
        outfit: '👑',
        colors: ['Maroon', 'Kerala Gold'],
        why: 'Classic silhouettes and rich colors embody timeless elegance',
        tips: ['Minimal accessories', 'Classic draping', 'Rich fabrics'],
        price: '₹8,000 - ₹15,000'
      });
    }

    return recommendations;
  };

  const getStylingTips = () => {
    const tips = [];
    
    if (userProfile.height < 160) {
      tips.push({
        icon: '📏',
        title: 'Height Enhancement',
        tip: 'Vertical lines and monochromatic outfits create length and elegance'
      });
    }

    if (userProfile.bodyShape === 'pear') {
      tips.push({
        icon: '⚖️',
        title: 'Balance Your Silhouette',
        tip: 'Draw attention upward with statement necklaces and detailed blouses'
      });
    }

    if (userProfile.skinTone === 'warm') {
      tips.push({
        icon: '🌟',
        title: 'Color Harmony',
        tip: 'Gold jewelry and warm colors like coral, saffron enhance your natural glow'
      });
    }

    return tips;
  };

  const recommendations = generateRecommendations();
  const stylingTips = getStylingTips();

  return (
    <div className="space-y-8">
      {/* Smart Styling Tips */}
      {stylingTips.length > 0 && (
        <Card className="bg-[#252631] border-[#2a2d3a]">
          <CardHeader>
            <CardTitle className="text-white kerala-serif text-2xl">
              Your Personal Styling Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stylingTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-[#2a2d3a] rounded-lg">
                  <span className="text-2xl">{tip.icon}</span>
                  <div>
                    <h4 className="text-[#ffa726] font-semibold mb-1">{tip.title}</h4>
                    <p className="text-gray-300 text-sm">{tip.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Recommendations */}
      <div>
        <h3 className="kerala-serif text-3xl font-bold text-white mb-6">
          Personalized Recommendations
        </h3>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {recommendations.map((rec) => (
            <Card key={rec.id} className="bg-[#252631] border-[#2a2d3a] hover:border-[#ffa726]/50 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-xl">{rec.name}</CardTitle>
                    <p className="text-gray-300 mt-1">{rec.description}</p>
                    <Badge className="mt-2 bg-[#ffa726]/20 text-[#ffa726] border-[#ffa726]/30">
                      {rec.category}
                    </Badge>
                  </div>
                  <span className="text-4xl">{rec.outfit}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {rec.colors.map((color) => (
                    <Badge key={color} variant="outline" className="text-gray-300 border-gray-500">
                      {color}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[#ffa726]">Why this works for you:</h4>
                  <p className="text-sm text-gray-300">{rec.why}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[#ffa726]">Styling Tips:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {rec.tips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-[#ffa726] mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#2a2d3a]">
                  <span className="font-semibold text-white">{rec.price}</span>
                  <Button className="bg-[#ffa726] hover:bg-[#ff9800] text-black font-semibold">
                    Shop Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationsSection;
