import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./RevealText";
import { MagneticButton } from "./MagneticButton";

export function ProductShowcase() {
  const features = [
    {
      icon: "◈",
      title: "AI Tutor",
      description: "24/7 personalized guidance that adapts to your learning style and pace.",
    },
    {
      icon: "◇",
      title: "Adaptive Paths",
      description: "Dynamic curricula that evolve based on your progress and goals.",
    },
    {
      icon: "○",
      title: "Real-Time Insights",
      description: "Understand your strengths and gaps with detailed analytics.",
    },
    {
      icon: "△",
      title: "Interactive Labs",
      description: "Hands-on exercises that cement concepts through practice.",
    },
  ];

  return (
    <section className="section-light py-32 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="mb-20 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-background/40 mb-4 block">
            The Solution
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-background mb-6">
            Intelligence that teaches.
          </h2>
          <p className="font-serif text-lg text-background/60">
            Binox combines cutting-edge AI with proven learning science to
            create an experience that's truly personal.
          </p>
        </FadeIn>

        {/* Product Demo Area */}
        <FadeIn delay={0.2}>
          <div className="relative mx-auto max-w-5xl mb-20">
            {/* Mock Interface */}
            <div className="aspect-video bg-background border border-background/10 overflow-hidden relative group">
              {/* Simulated UI */}
              <div className="absolute inset-0 p-6 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-foreground/10" />
                    <div>
                      <div className="w-24 h-3 bg-foreground/20 mb-2" />
                      <div className="w-16 h-2 bg-foreground/10" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 border border-foreground/10" />
                    <div className="w-8 h-8 border border-foreground/10" />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Main Content Area */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="w-full h-48 bg-foreground/5 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="font-display text-2xl text-foreground/20"
                      >
                        ◈ AI Tutor Active
                      </motion.div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-10 bg-foreground/5 border border-foreground/10" />
                      <div className="w-20 h-10 bg-foreground" />
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-4">
                    <div className="p-4 border border-foreground/10">
                      <div className="text-xs font-mono text-foreground/40 mb-3">Progress</div>
                      <div className="w-full h-2 bg-foreground/10 overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: "72%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          viewport={{ once: true }}
                          className="h-full bg-foreground"
                        />
                      </div>
                      <div className="text-right mt-2 font-mono text-sm text-foreground/60">72%</div>
                    </div>
                    <div className="p-4 border border-foreground/10">
                      <div className="text-xs font-mono text-foreground/40 mb-3">Next Up</div>
                      <div className="space-y-2">
                        <div className="w-full h-8 bg-foreground/5" />
                        <div className="w-full h-8 bg-foreground/5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <MagneticButton variant="secondary" className="text-sm border-foreground text-foreground hover:bg-foreground hover:text-background">
                  Try Live Demo
                </MagneticButton>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Feature Grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="group p-6 border border-background/10 hover:bg-background/5 transition-colors duration-300">
                <span className="text-3xl mb-4 block text-background/30 group-hover:text-background transition-colors">
                  {feature.icon}
                </span>
                <h3 className="font-display text-lg font-semibold text-background mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-background/60">
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
