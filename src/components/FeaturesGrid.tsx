import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./RevealText";
import { Check } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      title: "Personalized Learning Paths",
      description: "AI analyzes your goals, skills, and learning style to create a custom curriculum.",
      tags: ["AI-Powered", "Adaptive"],
      icon: "🎯",
    },
    {
      title: "Real-Time AI Tutoring",
      description: "Get instant explanations, feedback, and guidance whenever you need it.",
      tags: ["24/7 Support", "Conversational"],
      icon: "🤖",
    },
    {
      title: "Progress Intelligence",
      description: "Detailed analytics show exactly where you excel and where to focus.",
      tags: ["Insights", "Tracking"],
      icon: "📊",
    },
    {
      title: "Interactive Exercises",
      description: "Hands-on labs and quizzes that adapt to your current understanding.",
      tags: ["Practice", "Assessment"],
      icon: "🧪",
    },
    {
      title: "Team Collaboration",
      description: "Learn together with cohorts, share progress, and compete on leaderboards.",
      tags: ["Social", "Enterprise"],
      icon: "👥",
    },
    {
      title: "Enterprise Integration",
      description: "SSO, analytics dashboards, and LMS integration for seamless deployment.",
      tags: ["Security", "Admin"],
      icon: "🔐",
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
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-xs tracking-[0.2em] uppercase mb-6">
            Capabilities
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Built for how you learn.
          </h2>
          <p className="font-serif text-lg text-muted-foreground">
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
              <div className="group h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div className="flex flex-wrap gap-1">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Comparison Table */}
        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
              Binox vs. Traditional Learning
            </h3>
            <div className="rounded-2xl border border-border overflow-hidden bg-card">
              {/* Header */}
              <div className="grid grid-cols-3 bg-secondary">
                <div className="p-4 font-mono text-xs uppercase tracking-wider text-foreground">
                  Feature
                </div>
                <div className="p-4 font-mono text-xs uppercase tracking-wider text-center border-l border-border text-primary">
                  Binox
                </div>
                <div className="p-4 font-mono text-xs uppercase tracking-wider text-center border-l border-border text-muted-foreground">
                  Traditional
                </div>
              </div>
              {/* Rows */}
              {comparisons.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 border-t border-border"
                >
                  <div className="p-4 font-body text-sm text-foreground">
                    {row.feature}
                  </div>
                  <div className="p-4 text-center border-l border-border">
                    {typeof row.binox === "boolean" ? (
                      row.binox ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )
                    ) : (
                      <span className="font-mono text-sm text-primary">{row.binox}</span>
                    )}
                  </div>
                  <div className="p-4 text-center border-l border-border">
                    {typeof row.traditional === "boolean" ? (
                      row.traditional ? (
                        <Check className="w-5 h-5 text-foreground mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )
                    ) : (
                      <span className="font-mono text-sm text-muted-foreground">{row.traditional}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Security Badges */}
        <FadeIn delay={0.4} className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["SOC 2", "GDPR", "ISO 27001", "FERPA"].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card"
              >
                <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </span>
                <span className="font-mono text-xs text-foreground">{badge} Compliant</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}