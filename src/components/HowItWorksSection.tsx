import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./RevealText";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Tell Us Your Goals",
      description:
        "Share what you want to learn, your current level, and available time. Our AI builds your foundation.",
    },
    {
      number: "02",
      title: "Get Your Personal Path",
      description:
        "Receive a curriculum designed specifically for you—no generic courses, just targeted learning.",
    },
    {
      number: "03",
      title: "Learn with AI Support",
      description:
        "Study at your pace with 24/7 AI tutoring. Ask questions, get explanations, practice concepts.",
    },
    {
      number: "04",
      title: "Track & Adapt",
      description:
        "Watch your progress unfold. The AI continuously refines your path based on your performance.",
    },
  ];

  return (
    <section id="how-it-works" className="section-dark py-32 md:py-40 relative overflow-hidden">
      {/* Background Line */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-foreground/10 to-transparent -translate-x-1/2 hidden lg:block" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="mb-20 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4 block">
            Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Four steps to mastery.
          </h2>
          <p className="font-serif text-lg text-foreground/60">
            From zero to expert, guided every step of the way.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="relative">
          <StaggerContainer className="space-y-0" staggerDelay={0.2}>
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div
                  className={`flex items-center gap-8 md:gap-16 py-12 border-t border-foreground/10 ${
                    index === steps.length - 1 ? "border-b" : ""
                  }`}
                >
                  {/* Number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 border border-foreground/20 flex items-center justify-center group hover:border-foreground/50 transition-colors"
                  >
                    <span className="font-display text-2xl md:text-3xl font-bold text-foreground/20 group-hover:text-foreground/80 transition-colors">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-foreground/60 max-w-xl">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (desktop) */}
                  <div className="hidden md:block flex-shrink-0">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-foreground/20"
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
