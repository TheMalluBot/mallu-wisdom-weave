
import HeroSection from '@/components/HeroSection';
import AIFashionSection from '@/components/AIFashionSection';
import StoriesSection from '@/components/StoriesSection';
import WisdomHub from '@/components/WisdomHub';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AIFashionSection />
      <StoriesSection />
      <WisdomHub />
      <Footer />
    </div>
  );
};

export default Index;
