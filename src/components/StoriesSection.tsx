
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StoriesSection = () => {
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);

  const stories = [
    {
      title: "The Legend of Mahabali",
      titleMl: "മഹാബലിയുടെ കഥ",
      preview: "The beloved king who visits Kerala every year during Onam...",
      category: "Mythology",
      emoji: "👑"
    },
    {
      title: "Backwater Tales",
      titleMl: "കായലിന്റെ കഥകൾ",
      preview: "Stories whispered by the gentle waters of Kumarakom...",
      category: "Nature",
      emoji: "🛶"
    },
    {
      title: "Temple Chronicles",
      titleMl: "ക്ഷേത്ര ചരിത്രം",
      preview: "Ancient wisdom carved in stone and preserved in time...",
      category: "History",
      emoji: "🛕"
    },
    {
      title: "Spice Route Stories",
      titleMl: "മസാല വ്യാപാര കഥകൾ",
      preview: "How Kerala became the spice capital of the world...",
      category: "Trade",
      emoji: "🌶️"
    },
    {
      title: "Fisherman's Tales",
      titleMl: "മത്സ്യത്തൊഴിലാളിയുടെ കഥകൾ",
      preview: "Stories from the Arabian Sea shores...",
      category: "Culture",
      emoji: "🎣"
    },
    {
      title: "Coconut Palm Legends",
      titleMl: "തെങ്ങിന്റെ ഇതിഹാസങ്ങൾ",
      preview: "The tree of life and its magical properties...",
      category: "Nature",
      emoji: "🥥"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-kerala-green to-kerala-green-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-float">🎭</div>
        <div className="absolute top-32 right-20 text-4xl animate-float" style={{ animationDelay: '1s' }}>📜</div>
        <div className="absolute bottom-20 left-1/4 text-5xl animate-float" style={{ animationDelay: '2s' }}>🏛️</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="kerala-serif text-4xl md:text-5xl font-bold text-kerala-white mb-6">
            Malayalam Stories
            <span className="block text-2xl mt-2 text-kerala-gold">കേരള കഥകൾ</span>
          </h2>
          <p className="text-xl text-kerala-white/90 max-w-3xl mx-auto">
            Discover the rich tapestry of Kerala's cultural heritage through timeless tales
          </p>
        </div>

        {/* Book Opening Animation Container */}
        <div className="relative mb-12">
          <div className="bg-kerala-white/10 rounded-3xl p-8 backdrop-blur-sm border border-kerala-gold/30">
            <div className="text-center text-kerala-white/80 mb-6">
              <div className="text-6xl mb-4 animate-glow">📖</div>
              <p className="text-lg">Open the pages of Kerala's legendary tales</p>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card 
              key={index}
              className="bg-kerala-white/95 backdrop-blur-sm border-kerala-gold/30 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              onMouseEnter={() => setHoveredStory(index)}
              onMouseLeave={() => setHoveredStory(null)}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-3 group-hover:animate-bounce transition-all duration-300">
                  {story.emoji}
                </div>
                <CardTitle className="kerala-serif text-xl text-kerala-green mb-2">
                  {story.title}
                </CardTitle>
                <div className="text-kerala-green/60 text-sm font-medium">
                  {story.titleMl}
                </div>
                <span className="inline-block px-3 py-1 bg-kerala-gold/20 text-kerala-green text-xs rounded-full mt-2">
                  {story.category}
                </span>
              </CardHeader>
              
              <CardContent>
                <p className="text-kerala-green/80 text-sm leading-relaxed mb-4">
                  {story.preview}
                </p>
                
                <div className={`transition-all duration-500 ${
                  hoveredStory === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                } overflow-hidden`}>
                  <div className="border-t border-kerala-gold/30 pt-3">
                    <button className="text-kerala-red hover:text-kerala-red-light font-medium text-sm transition-colors duration-300">
                      Read Full Story →
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-kerala-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-kerala-gold/30">
            <span className="text-kerala-white">Discover more stories from God's Own Country</span>
            <div className="animate-bounce">📚</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
