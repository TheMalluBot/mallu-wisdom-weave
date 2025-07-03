
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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

interface Recommendation {
  id: string;
  name: string;
  category: 'traditional' | 'fusion' | 'modern';
  description: string;
  colors: string[];
  occasions: string[];
  price: string;
  image: string;
  stylingTips: string[];
  whyRecommended: string;
}

interface SmartRecommendationsProps {
  preferences: UserPreferences;
}

const SmartRecommendations = ({ preferences }: SmartRecommendationsProps) => {
  // Smart recommendation logic based on user preferences
  const generateRecommendations = (): Recommendation[] => {
    const recommendations: Recommendation[] = [];

    // Height-based recommendations
    if (preferences.height < 160) {
      recommendations.push({
        id: '1',
        name: 'High-Waisted Kasavu Saree',
        category: 'traditional',
        description: 'Traditional Kerala saree with high-waisted draping to elongate silhouette',
        colors: ['Kerala Gold', 'Ivory White'],
        occasions: ['Festival/Celebration', 'Traditional Events'],
        price: '₹3,500 - ₹8,000',
        image: '🥻',
        stylingTips: [
          'Drape pallu at shoulder height',
          'Use minimal jewelry to avoid overwhelming',
          'Pointed toe footwear recommended'
        ],
        whyRecommended: 'High-waisted draping creates vertical lines perfect for your height'
      });
    } else {
      recommendations.push({
        id: '2',
        name: 'Layered Fusion Ensemble',
        category: 'fusion',
        description: 'Indo-western outfit with horizontal patterns and layering',
        colors: ['Emerald Green', 'Temple Red'],
        occasions: ['Party/Social', 'Casual Daily'],
        price: '₹2,500 - ₹6,000',
        image: '👗',
        stylingTips: [
          'Layer with contrasting dupatta',
          'Wide-leg palazzo pants',
          'Statement belt at natural waist'
        ],
        whyRecommended: 'Horizontal patterns and layering complement your tall frame beautifully'
      });
    }

    // Body type specific recommendations
    if (preferences.bodyType === 'pear') {
      recommendations.push({
        id: '3',
        name: 'A-Line Anarkali with Statement Top',
        category: 'fusion',
        description: 'Flowy A-line silhouette with embroidered bodice to balance proportions',
        colors: ['Deep Blue', 'Kerala Gold'],
        occasions: ['Wedding', 'Festival/Celebration'],
        price: '₹4,000 - ₹12,000',
        image: '👘',
        stylingTips: [
          'Focus on upper body with statement neckline',
          'Avoid tight bottoms',
          'Use bright colors on top half'
        ],
        whyRecommended: 'A-line cut balances your natural proportions perfectly'
      });
    }

    if (preferences.bodyType === 'apple') {
      recommendations.push({
        id: '4',
        name: 'V-Neck Wrap Style Kurta',
        category: 'modern',
        description: 'Flattering V-neck with wrap styling and flowy fabric',
        colors: ['Coral Pink', 'Saffron Yellow'],
        occasions: ['Work/Office', 'Casual Daily'],
        price: '₹1,500 - ₹4,000',
        image: '👔',
        stylingTips: [
          'Empire waistline to elongate torso',
          'Flowy fabric that skims the body',
          'Minimal accessories at neckline'
        ],
        whyRecommended: 'V-neck and wrap style create a flattering silhouette for your body type'
      });
    }

    // Skin tone based color recommendations
    const getColorRecommendations = () => {
      switch (preferences.skinTone) {
        case 'warm':
          return ['Kerala Gold', 'Coral Pink', 'Saffron Yellow', 'Temple Red'];
        case 'cool':
          return ['Deep Blue', 'Emerald Green', 'Ivory White', 'Cool Pink'];
        case 'neutral':
          return ['Kerala Gold', 'Emerald Green', 'Deep Blue', 'Ivory White'];
        default:
          return ['Kerala Gold', 'Emerald Green'];
      }
    };

    // Add color-specific recommendation
    const colorRecs = getColorRecommendations();
    recommendations.push({
      id: '5',
      name: 'Color-Perfect Traditional Set',
      category: 'traditional',
      description: 'Specially curated colors that complement your skin tone',
      colors: colorRecs,
      occasions: preferences.occasions,
      price: preferences.budgetRange === 'under-1000' ? '₹800 - ₹1,000' : '₹2,000 - ₹8,000',
      image: '🎨',
      stylingTips: [
        `Your ${preferences.skinTone} undertones work best with these colors`,
        'Mix warm and cool accessories based on occasion',
        'Consider seasonal variations'
      ],
      whyRecommended: `These colors enhance your ${preferences.skinTone} undertones beautifully`
    });

    return recommendations;
  };

  const recommendations = generateRecommendations();

  const getStylingTips = () => {
    const tips = [];
    
    if (preferences.height < 160) {
      tips.push('Vertical lines and monochromatic looks elongate your silhouette');
      tips.push('High-waisted bottoms create the illusion of longer legs');
      tips.push('Avoid horizontal stripes and chunky belts');
    } else if (preferences.height > 170) {
      tips.push('Horizontal patterns and color blocking work beautifully on you');
      tips.push('Layering adds visual interest without overwhelming');
      tips.push('Wide-leg pants and flowy fabrics complement your frame');
    }

    if (preferences.skinTone === 'warm') {
      tips.push('Gold jewelry and warm metals enhance your natural glow');
    } else if (preferences.skinTone === 'cool') {
      tips.push('Silver jewelry and cool metals complement your undertones');
    }

    return tips;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Personalized Styling Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="kerala-serif text-2xl text-kerala-green">
            Your Personalized Styling Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {getStylingTips().map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-kerala-gold text-xl">💡</span>
                <p className="text-kerala-green/80">{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <div className="grid lg:grid-cols-2 gap-6">
        {recommendations.map((rec) => (
          <Card key={rec.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-kerala-green">{rec.name}</CardTitle>
                  <p className="text-kerala-green/60 mt-1">{rec.description}</p>
                </div>
                <span className="text-4xl">{rec.image}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {rec.colors.map((color) => (
                  <Badge key={color} variant="outline" className="text-kerala-green border-kerala-gold">
                    {color}
                  </Badge>
                ))}
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-kerala-green">Why we recommend this:</h4>
                <p className="text-sm text-kerala-green/70">{rec.whyRecommended}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-kerala-green">Styling Tips:</h4>
                <ul className="text-sm text-kerala-green/70 space-y-1">
                  {rec.stylingTips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-kerala-gold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-kerala-green/20">
                <span className="font-semibold text-kerala-green">{rec.price}</span>
                <Button 
                  size="sm" 
                  className="bg-kerala-gold hover:bg-kerala-gold-dark text-kerala-green"
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SmartRecommendations;
