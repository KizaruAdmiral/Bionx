import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/RevealText";
import { Check, Target, Lightbulb, Trophy } from "lucide-react";

export default function Features() {
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

  const solutions = [
    {
      icon: Target,
      title: "AI-Powered Personalization",
      description:
        "Our AI analyzes your learning patterns, strengths, and areas for improvement to create a curriculum that's uniquely yours.",
    },
    {
      icon: Lightbulb,
      title: "Active Learning Design",
      description:
        "Interactive exercises, real-time quizzes, and hands-on projects ensure you're not just watching—you're doing.",
    },
    {
      icon: Trophy,
      title: "24/7 AI Tutoring",
      description:
        "Get instant feedback, explanations, and guidance whenever you need it. No waiting, no scheduling, just learning.",
    },
  ];

  const proofs = [
    { metric: "93%", label: "Completion Rate", comparison: "vs 15% industry average" },
    { metric: "2.5x", label: "Faster Learning", comparison: "compared to traditional methods" },
    { metric: "98%", label: "Satisfaction Score", comparison: "from 10,000+ learners" },
    { metric: "40%", label: "Cost Reduction", comparison: "vs traditional training programs" },
  ];

  const capabilities = [
    {
      title: "Personalized Learning Paths",
      description: "AI analyzes your goals, skills, and learning style to create a custom curriculum.",
      tags: ["AI-Powered", "Adaptive"],
    },
    {
      title: "Real-Time AI Tutoring",
      description: "Get instant explanations, feedback, and guidance whenever you need it.",
      tags: ["24/7 Support", "Conversational"],
    },
    {
      title: "Progress Intelligence",
      description: "Detailed analytics show exactly where you excel and where to focus.",
      tags: ["Insights", "Tracking"],
    },
    {
      title: "Interactive Exercises",
      description: "Hands-on labs and quizzes that adapt to your current understanding.",
      tags: ["Practice", "Assessment"],
    },
    {
      title: "Team Collaboration",
      description: "Learn together with cohorts, share progress, and compete on leaderboards.",
      tags: ["Social", "Enterprise"],
    },
    {
      title: "Enterprise Integration",
      description: "SSO, analytics dashboards, and LMS integration for seamless deployment.",
      tags: ["Security", "Admin"],
    },
  ];

  const comparisons = [
    { feature: "Personalized curriculum", binox: true, traditional: false },
    { feature: "24/7 AI tutor access", binox: true, traditional: false },
    { feature: "Adaptive pacing", binox: true, traditional: false },
    { feature: "Real-time feedback", binox: true, traditional: false },
    { feature: "Progress analytics", binox: true, traditional: false },
    { feature: "Content updates", binox: "Continuous", traditional: "Yearly" },
  ];

  return (
    <main className="relative min-h-screen">
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation />

      {/* Hero Section - The Future of Learning is Here */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 border border-foreground/20 rounded-full" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 border border-foreground/20 rounded-full" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="inline-block font-mono text-xs tracking-widest text-foreground/50 uppercase mb-4">
              Features
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              The Future of Learning is Here
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto text-justify">
              Discover how AI-powered education transforms the way you learn, adapt, and grow. 
              Every feature designed to maximize your potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-foreground/20 rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="mb-16 max-w-3xl">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4 block">
              The Problem
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Education hasn't evolved.
            </h2>
            <p className="font-serif text-lg text-foreground/60 text-justify">
              For centuries, we've learned the same way—listening to lectures, reading textbooks, 
              hoping something sticks. The world has changed. Learning must change with it.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {problems.map((problem, index) => (
              <StaggerItem key={index}>
                <div className="group relative h-full">
                  <div className="absolute -inset-px bg-gradient-to-b from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6 border border-foreground/10 bg-background h-full">
                    <span className="font-mono text-5xl font-bold text-foreground/5 absolute top-4 right-4">
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="font-body text-foreground/60 leading-relaxed text-justify">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-16 max-w-3xl">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4 block">
              The Solution
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Learning that adapts to you.
            </h2>
            <p className="font-serif text-lg text-foreground/60 text-justify">
              Our AI-powered platform understands how you learn best and continuously 
              optimizes your educational journey.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {solutions.map((solution, index) => (
              <StaggerItem key={index}>
                <div className="group h-full p-8 border border-foreground/10 hover:border-foreground/30 transition-all duration-300">
                  <div className="w-12 h-12 border border-foreground/20 flex items-center justify-center mb-6 group-hover:border-foreground/40 transition-colors">
                    <solution.icon className="w-6 h-6 text-foreground/60 group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="font-body text-foreground/60 leading-relaxed text-justify">
                    {solution.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Proof */}
      <section className="section-dark py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4 block">
              The Proof
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Results that speak for themselves.
            </h2>
            <p className="font-serif text-lg text-foreground/60 text-justify">
              Numbers don't lie. See how our platform transforms learning outcomes across industries.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {proofs.map((proof, index) => (
              <StaggerItem key={index}>
                <div className="text-center p-8 border border-foreground/10 hover:border-foreground/30 transition-all duration-300">
                  <span className="font-display text-4xl md:text-5xl font-bold text-foreground block mb-2">
                    {proof.metric}
                  </span>
                  <span className="font-display text-lg font-semibold text-foreground block mb-1">
                    {proof.label}
                  </span>
                  <span className="font-mono text-xs text-foreground/40">
                    {proof.comparison}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-light py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-background/60 mb-4 block">
              Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-background mb-6">
              Built for how you learn.
            </h2>
            <p className="font-serif text-lg text-background/80 text-justify">
              Every feature designed to maximize retention and minimize wasted time.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" staggerDelay={0.1}>
            {capabilities.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="group h-full p-6 border border-background/10 hover:border-background/30 transition-all duration-300">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-background/30 text-background/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-background mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-background/80 leading-relaxed text-justify">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4 block">
              Comparison
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Binox vs. Traditional Learning
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto border border-foreground/10 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-foreground text-background">
                <div className="p-4 font-mono text-xs uppercase tracking-wider">
                  Feature
                </div>
                <div className="p-4 font-mono text-xs uppercase tracking-wider text-center border-l border-background/10">
                  Binox
                </div>
                <div className="p-4 font-mono text-xs uppercase tracking-wider text-center border-l border-background/10">
                  Traditional
                </div>
              </div>
              {/* Rows */}
              {comparisons.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 border-t border-foreground/10"
                >
                  <div className="p-4 font-body text-sm text-foreground/80">
                    {row.feature}
                  </div>
                  <div className="p-4 text-center border-l border-foreground/10">
                    {typeof row.binox === "boolean" ? (
                      row.binox ? (
                        <Check className="w-5 h-5 text-foreground mx-auto" />
                      ) : (
                        <span className="text-foreground/30">—</span>
                      )
                    ) : (
                      <span className="font-mono text-sm text-foreground">{row.binox}</span>
                    )}
                  </div>
                  <div className="p-4 text-center border-l border-foreground/10">
                    {typeof row.traditional === "boolean" ? (
                      row.traditional ? (
                        <Check className="w-5 h-5 text-foreground mx-auto" />
                      ) : (
                        <span className="text-foreground/30">—</span>
                      )
                    ) : (
                      <span className="font-mono text-sm text-foreground/60">{row.traditional}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Security Badges */}
          <FadeIn delay={0.3} className="mt-16 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {["SOC 2", "GDPR", "ISO 27001", "FERPA"].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 px-4 py-2 border border-foreground/20"
                >
                  <span className="w-4 h-4 rounded-full border border-foreground/40" />
                  <span className="font-mono text-xs text-foreground/60">{badge} Compliant</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
