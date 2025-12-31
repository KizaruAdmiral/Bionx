import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./RevealText";

export function ProblemSection() {
  const problems = [
    {
      title: "One-Size-Fits-None",
      description:
        "Traditional courses treat every learner the same. But your brain is unique—why shouldn't your education be?",
    },
    {
      title: "Passive Consumption",
      description:
        "Watching videos and reading slides doesn't create lasting knowledge. Real learning requires active engagement.",
    },
    {
      title: "No Guidance",
      description:
        "Without personalized feedback, you're left guessing. Did you truly understand, or just memorize?",
    },
  ];

  return (
    <section className="section-dark py-32 md:py-40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-foreground/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-foreground/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <FadeIn className="mb-20 max-w-3xl">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4 block">
            The Problem
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Education hasn't evolved.
            <br />
            <span className="text-foreground/50">Until now.</span>
          </h2>
          <p className="font-serif text-lg text-foreground/60">
            For centuries, we've learned the same way—listening to lectures,
            reading textbooks, hoping something sticks. The world has changed.
            Learning must change with it.
          </p>
        </FadeIn>

        {/* Problem Cards */}
        <StaggerContainer
          className="grid md:grid-cols-3 gap-8 md:gap-12"
          staggerDelay={0.15}
        >
          {problems.map((problem, index) => (
            <StaggerItem key={index}>
              <div className="group relative">
                <div className="absolute -inset-px bg-gradient-to-b from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 border border-foreground/10 bg-background">
                  <span className="font-mono text-6xl font-bold text-foreground/5 absolute top-4 right-6">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {problem.title}
                  </h3>
                  <p className="font-body text-foreground/60 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Transition Statement */}
        <FadeIn delay={0.5} className="mt-32 text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent mb-16"
          />
          <p className="font-serif text-2xl md:text-3xl text-foreground/80 max-w-3xl mx-auto italic">
            "What if learning could understand you as well as you want to
            understand the world?"
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
