import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Single Scroll Landing Page */}
      <HeroSection />
      <ProblemSection />
      <ProductShowcase />
      <HowItWorksSection />
      <TestimonialsSection />
      <FeaturesGrid />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
