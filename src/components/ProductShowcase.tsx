import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./RevealText";
import { MagneticButton } from "./MagneticButton";

export function ProductShowcase() {
  const features = [
    {
      icon: "🤖",
      title: "AI Tutor",
      description: "24/7 personalized guidance that adapts to your learning style and pace.",
    },
    {
      icon: "🛤️",
      title: "Adaptive Paths",
      description: "Dynamic curricula that evolve based on your progress and goals.",
    },
    {
      icon: "📊",
      title: "Real-Time Insights",
      description: "Understand your strengths and gaps with detailed analytics.",
    },
    {
      icon: "🧪",
      title: "Interactive Labs",
      description: "Hands-on exercises that cement concepts through practice.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-xs tracking-[0.2em] uppercase mb-6">
            The Solution
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Intelligence that teaches.
          </h2>
          <p className="font-serif text-lg text-muted-foreground">
            Binox combines cutting-edge AI with proven learning science to
            create an experience that's truly personal.
          </p>
        </FadeIn>

        {/* Product Demo Area */}
        <FadeIn delay={0.2}>
          <div className="relative mx-auto max-w-4xl mb-16">
            {/* Mock Interface */}
            <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden relative group shadow-xl">
              {/* Simulated UI */}
              <div className="absolute inset-0 p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-lg">🎓</span>
                    </div>
                    <div>
                      <div className="w-24 h-3 bg-foreground/10 rounded mb-2" />
                      <div className="w-16 h-2 bg-foreground/5 rounded" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg border border-border" />
                    <div className="w-8 h-8 rounded-lg border border-border" />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {/* Main Content Area */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="w-full h-40 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-center"
                      >
                        <span className="text-4xl mb-2 block">🤖</span>
                        <span className="font-display text-lg text-primary">AI Tutor Active</span>
                      </motion.div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-10 rounded-lg bg-background border border-border" />
                      <div className="w-20 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        Send
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-border bg-background">
                      <div className="text-xs font-mono text-muted-foreground mb-3">Progress</div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: "72%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          viewport={{ once: true }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                      <div className="text-right mt-2 font-mono text-sm text-foreground">72%</div>
                    </div>
                    <div className="p-4 rounded-xl border border-border bg-background">
                      <div className="text-xs font-mono text-muted-foreground mb-3">Next Up</div>
                      <div className="space-y-2">
                        <div className="w-full h-8 bg-secondary/50 rounded-lg" />
                        <div className="w-full h-8 bg-secondary/50 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-2xl">
                <MagneticButton variant="primary" className="text-sm">
                  Try Live Demo
                </MagneticButton>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Feature Grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          staggerDelay={0.1}
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}