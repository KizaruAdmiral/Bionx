import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./RevealText";

export function ProblemSection() {
  const problems = [
    {
      title: "One-Size-Fits-None",
      description:
        "Traditional courses treat every learner the same. But your brain is unique—why shouldn't your education be?",
      icon: "🎯",
    },
    {
      title: "Passive Consumption",
      description:
        "Watching videos and reading slides doesn't create lasting knowledge. Real learning requires active engagement.",
      icon: "💡",
    },
    {
      title: "No Guidance",
      description:
        "Without personalized feedback, you're left guessing. Did you truly understand, or just memorize?",
      icon: "🧭",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <FadeIn className="mb-16 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive font-mono text-xs tracking-[0.2em] uppercase mb-6">
            The Problem
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Education hasn't evolved.
            <br />
            <span className="text-muted-foreground">Until now.</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground">
            For centuries, we've learned the same way—listening to lectures,
            reading textbooks, hoping something sticks.
          </p>
        </FadeIn>

        {/* Problem Cards */}
        <StaggerContainer
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {problems.map((problem, index) => (
            <StaggerItem key={index}>
              <div className="group relative h-full">
                <div className="relative p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                  <span className="text-4xl mb-4 block">{problem.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Transition Statement */}
        <FadeIn delay={0.5} className="mt-20 text-center">
          <p className="font-serif text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            "What if learning could understand you as well as you want to
            understand the world?"
          </p>
        </FadeIn>
      </div>
    </section>
  );
}