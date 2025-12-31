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
    <main className="relative">
      {/* Film Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem/Solution Narrative */}
      <ProblemSection />
      
      {/* Product Showcase */}
      <ProductShowcase />
      
      {/* How It Works */}
      <HowItWorksSection />
      
      {/* Social Proof */}
      <TestimonialsSection />
      
      {/* Technical Differentiators */}
      <FeaturesGrid />
      
      {/* Conversion Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
