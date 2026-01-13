import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./RevealText";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Tell Us Your Goals",
      description:
        "Share what you want to learn, your current level, and available time. Our AI builds your foundation.",
      icon: "🎯",
    },
    {
      number: "02",
      title: "Get Your Personal Path",
      description:
        "Receive a curriculum designed specifically for you—no generic courses, just targeted learning.",
      icon: "🗺️",
    },
    {
      number: "03",
      title: "Learn with AI Support",
      description:
        "Study at your pace with 24/7 AI tutoring. Ask questions, get explanations, practice concepts.",
      icon: "🤖",
    },
    {
      number: "04",
      title: "Track & Adapt",
      description:
        "Watch your progress unfold. The AI continuously refines your path based on your performance.",
      icon: "📈",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-xs tracking-[0.2em] uppercase mb-6">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Four steps to mastery.
          </h2>
          <p className="font-serif text-lg text-muted-foreground">
            From zero to expert, guided every step of the way.
          </p>
        </FadeIn>

        {/* Steps Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm">
                  {step.number}
                </div>
                
                <div className="pt-4">
                  <span className="text-3xl mb-4 block">{step.icon}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}