import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./RevealText";
import { Check } from "lucide-react";

export function FeaturesGrid() {
  const features = [
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
    <section className="section-light py-32 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="mb-20 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-background/40 mb-4 block">
            Capabilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-background mb-6">
            Built for how you learn.
          </h2>
          <p className="font-serif text-lg text-background/60">
            Every feature designed to maximize retention and minimize wasted time.
          </p>
        </FadeIn>

        {/* Features Grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          staggerDelay={0.1}
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="group h-full p-8 border border-background/10 hover:border-background/30 transition-all duration-300">
                <div className="flex flex-wrap gap-2 mb-4">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-background/20 text-background/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-semibold text-background mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-background/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Comparison Table */}
        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-background text-center mb-8">
              Binox vs. Traditional Learning
            </h3>
            <div className="border border-background/10 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-background text-foreground">
                <div className="p-4 font-mono text-xs uppercase tracking-wider">
                  Feature
                </div>
                <div className="p-4 font-mono text-xs uppercase tracking-wider text-center border-l border-foreground/10">
                  Binox
                </div>
                <div className="p-4 font-mono text-xs uppercase tracking-wider text-center border-l border-foreground/10">
                  Traditional
                </div>
              </div>
              {/* Rows */}
              {comparisons.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 border-t border-background/10"
                >
                  <div className="p-4 font-body text-sm text-background/80">
                    {row.feature}
                  </div>
                  <div className="p-4 text-center border-l border-background/10">
                    {typeof row.binox === "boolean" ? (
                      row.binox ? (
                        <Check className="w-5 h-5 text-background mx-auto" />
                      ) : (
                        <span className="text-background/30">—</span>
                      )
                    ) : (
                      <span className="font-mono text-sm text-background">{row.binox}</span>
                    )}
                  </div>
                  <div className="p-4 text-center border-l border-background/10">
                    {typeof row.traditional === "boolean" ? (
                      row.traditional ? (
                        <Check className="w-5 h-5 text-background mx-auto" />
                      ) : (
                        <span className="text-background/30">—</span>
                      )
                    ) : (
                      <span className="font-mono text-sm text-background/50">{row.traditional}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Security Badges */}
        <FadeIn delay={0.4} className="mt-20 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["SOC 2", "GDPR", "ISO 27001", "FERPA"].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 px-4 py-2 border border-background/20"
              >
                <span className="w-4 h-4 rounded-full border border-background/40" />
                <span className="font-mono text-xs text-background/60">{badge} Compliant</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
