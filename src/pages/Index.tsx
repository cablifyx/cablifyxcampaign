import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ContentCategories from "@/components/ContentCategories";
import DevicesSection from "@/components/DevicesSection";
import PlansSection from "@/components/PlansSection";
import LiveTVSection from "@/components/LiveTVSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Parallax Background */}
      <div className="parallax-bg" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ContentCategories />
        <DevicesSection />
        <PlansSection />
        <LiveTVSection />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
