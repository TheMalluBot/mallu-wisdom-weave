
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const KeralaFashionGuide = () => {
  const traditionalWear = [
    {
      name: 'Kasavu Saree',
      description: 'Traditional Kerala saree with golden border',
      significance: 'Symbol of prosperity and auspiciousness',
      occasions: ['Onam', 'Vishu', 'Marriages', 'Temple visits'],
      colors: 'Off-white with golden zari border',
      styling: 'Drape with pleats on the right side, pallu over left shoulder'
    },
    {
      name: 'Mundu and Neriyathu',
      description: 'Two-piece traditional attire for women',
      significance: 'Ancient Kerala tradition, represents elegance',
      occasions: ['Classical performances', 'Cultural events', 'Festivals'],
      colors: 'Cream, white, or colored with golden border',
      styling: 'Mundu as lower garment, Neriyathu as upper drape'
    },
    {
      name: 'Set Saree (Davani)',
      description: 'Two-piece set with blouse and lungi-style bottom',
      significance: 'Comfort meets tradition',
      occasions: ['Daily wear', 'Casual functions', 'Home festivities'],
      colors: 'Varied colors with coordinated borders',
      styling: 'Easy to wear, perfect for beginners'
    }
  ];

  const colorSignificance = [
    {
      color: 'Gold',
      meaning: 'Prosperity, auspiciousness, divine blessings',
      usage: 'Festivals, weddings, religious ceremonies',
      psychology: 'Boosts confidence, attracts positive energy'
    },
    {
      color: 'White/Cream',
      meaning: 'Purity, peace, spirituality',
      usage: 'Temple visits, prayers, traditional events',
      psychology: 'Calming, promotes inner peace'
    },
    {
      color: 'Red',
      meaning: 'Power, passion, celebration',
      usage: 'Weddings, celebrations, bold statements',
      psychology: 'Energizing, commands attention'
    },
    {
      color: 'Green',
      meaning: 'Nature, growth, harmony',
      usage: 'Daily wear, casual events, monsoon season',
      psychology: 'Refreshing, promotes balance'
    }
  ];

  const seasonalRecommendations = [
    {
      season: 'Monsoon (June - September)',
      recommendations: [
        'Dark colors that don\'t show water stains',
        'Quick-dry fabrics like cotton blends',
        'Avoid heavy silks and delicate materials',
        'Waterproof accessories'
      ],
      colors: ['Deep green', 'Navy blue', 'Maroon', 'Dark purple']
    },
    {
      season: 'Summer (March - May)',
      recommendations: [
        'Light, breathable cotton fabrics',
        'Light colors to reflect heat',
        'Loose-fitting silhouettes',
        'Minimal layering'
      ],
      colors: ['White', 'Cream', 'Light blue', 'Pale yellow']
    },
    {
      season: 'Winter/Festival (October - February)',
      recommendations: [
        'Rich silks and heavy fabrics',
        'Vibrant festival colors',
        'Layering with shawls and dupattas',
        'Statement jewelry'
      ],
      colors: ['Royal blue', 'Emerald green', 'Gold', 'Deep red']
    }
  ];

  const festivalCalendar = [
    {
      festival: 'Onam',
      month: 'August/September',
      traditional: 'Kasavu saree with golden blouse',
      modern: 'Off-white kurta set with gold accessories',
      significance: 'Celebrates harvest and prosperity'
    },
    {
      festival: 'Vishu',
      month: 'April',
      traditional: 'New clothes in bright colors',
      modern: 'Yellow or golden outfit for new beginnings',
      significance: 'New Year, fresh starts'
    },
    {
      festival: 'Thiruvathira',
      month: 'December/January',
      traditional: 'White saree with golden border',
      modern: 'Elegant white ensemble with gold accents',
      significance: 'Celebrates femininity and devotion'
    },
    {
      festival: 'Navaratri',
      month: 'September/October',
      traditional: 'Nine different colored sarees',
      modern: 'Color-coordinated fusion wear',
      significance: 'Nine forms of goddess, each with specific colors'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h2 className="kerala-serif text-3xl font-bold text-kerala-green mb-4">
          Kerala Fashion & Cultural Guide
        </h2>
        <p className="text-kerala-green/80 max-w-2xl mx-auto">
          Discover the rich heritage and cultural significance behind Kerala's traditional attire
        </p>
      </div>

      <Tabs defaultValue="traditional" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="traditional">Traditional Wear</TabsTrigger>
          <TabsTrigger value="colors">Color Psychology</TabsTrigger>
          <TabsTrigger value="seasonal">Seasonal Guide</TabsTrigger>
          <TabsTrigger value="festivals">Festival Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="traditional" className="space-y-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traditionalWear.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-kerala-green">{item.name}</CardTitle>
                  <p className="text-kerala-green/70 text-sm">{item.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-kerala-green mb-1">Cultural Significance</h4>
                    <p className="text-sm text-kerala-green/70">{item.significance}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kerala-green mb-1">Perfect For</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.occasions.map((occasion, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-kerala-gold/20 rounded-full">
                          {occasion}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kerala-green mb-1">Styling Tips</h4>
                    <p className="text-sm text-kerala-green/70">{item.styling}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="colors" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            {colorSignificance.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-kerala-green flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full ${
                      item.color === 'Gold' ? 'bg-kerala-gold' :
                      item.color === 'White/Cream' ? 'bg-kerala-white border border-kerala-green/20' :
                      item.color === 'Red' ? 'bg-kerala-red' :
                      'bg-kerala-green'
                    }`}></div>
                    {item.color}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-kerala-green mb-1">Cultural Meaning</h4>
                    <p className="text-sm text-kerala-green/70">{item.meaning}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kerala-green mb-1">Best Used For</h4>
                    <p className="text-sm text-kerala-green/70">{item.usage}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kerala-green mb-1">Psychological Impact</h4>
                    <p className="text-sm text-kerala-green/70">{item.psychology}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="seasonal" className="space-y-4">
          <div className="grid gap-6">
            {seasonalRecommendations.map((season, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-kerala-green">{season.season}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-kerala-green mb-2">Styling Recommendations</h4>
                    <ul className="space-y-1">
                      {season.recommendations.map((rec, i) => (
                        <li key={i} className="text-sm text-kerala-green/70 flex items-start gap-2">
                          <span className="text-kerala-gold">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kerala-green mb-2">Recommended Colors</h4>
                    <div className="flex flex-wrap gap-2">
                      {season.colors.map((color, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-kerala-gold/20 rounded-full">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="festivals" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            {festivalCalendar.map((festival, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-kerala-green">{festival.festival}</CardTitle>
                  <p className="text-kerala-green/60">{festival.month}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-kerala-green mb-1">Traditional Choice</h4>
                    <p className="text-sm text-kerala-green/70">{festival.traditional}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kerala-green mb-1">Modern Alternative</h4>
                    <p className="text-sm text-kerala-green/70">{festival.modern}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kerala-green mb-1">Cultural Significance</h4>
                    <p className="text-sm text-kerala-green/70">{festival.significance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default KeralaFashionGuide;
