import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./RevealText";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Binox understood my learning gaps before I even knew they existed. It's like having a mentor who knows exactly what you need.",
      author: "Sarah Chen",
      role: "Software Engineer @ Google",
      metric: "3x faster skill acquisition",
      avatar: "👩‍💻",
    },
    {
      quote:
        "We onboarded 500 employees in half the time. The AI adapts to each person's pace—something no traditional program could do.",
      author: "Marcus Williams",
      role: "Head of L&D @ Stripe",
      metric: "50% reduction in training time",
      avatar: "👨‍💼",
    },
    {
      quote:
        "As a lifelong learner, I've tried dozens of platforms. Binox is the first that genuinely feels personalized, not just marketed that way.",
      author: "Dr. Emily Rodriguez",
      role: "Research Scientist",
      metric: "92% completion rate",
      avatar: "👩‍🔬",
    },
  ];

  const metrics = [
    { value: "500K+", label: "Active Learners" },
    { value: "94%", label: "Completion Rate" },
    { value: "4.9", label: "User Rating" },
    { value: "150+", label: "Enterprise Clients" },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-xs tracking-[0.2em] uppercase mb-6">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Words from the wise.
          </h2>
        </FadeIn>

        {/* Metrics Bar */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonials */}
        <StaggerContainer
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="group h-full flex flex-col">
                <div className="flex-1 p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{testimonial.avatar}</span>
                    <div>
                      <div className="font-display font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="font-body text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <blockquote className="font-serif text-foreground/80 mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-auto">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs">
                      {testimonial.metric}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Logos */}
        <FadeIn delay={0.4} className="mt-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {["Google", "Microsoft", "Amazon", "Meta", "Apple", "Stripe", "Airbnb", "Netflix"].map((company, index) => (
              <span
                key={index}
                className="font-display text-lg text-muted-foreground/40 hover:text-primary transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}