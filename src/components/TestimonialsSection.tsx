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
    },
    {
      quote:
        "We onboarded 500 employees in half the time. The AI adapts to each person's pace—something no traditional program could do.",
      author: "Marcus Williams",
      role: "Head of L&D @ Stripe",
      metric: "50% reduction in training time",
    },
    {
      quote:
        "As a lifelong learner, I've tried dozens of platforms. Binox is the first that genuinely feels personalized, not just marketed that way.",
      author: "Dr. Emily Rodriguez",
      role: "Research Scientist",
      metric: "92% completion rate",
    },
  ];

  const metrics = [
    { value: "500K+", label: "Active Learners" },
    { value: "94%", label: "Completion Rate" },
    { value: "4.9", label: "User Rating" },
    { value: "150+", label: "Enterprise Clients" },
  ];

  return (
    <section className="section-dark py-32 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="mb-20 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4 block">
            Proof
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Words from the wise.
          </h2>
        </FadeIn>

        {/* Metrics Bar */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-foreground/10">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {metric.value}
                </div>
                <div className="font-mono text-xs tracking-wider text-foreground/50 uppercase">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonials */}
        <StaggerContainer
          className="grid md:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="group h-full flex flex-col">
                <div className="flex-1 p-8 border border-foreground/10 bg-card hover:border-foreground/30 transition-colors duration-500">
                  <blockquote className="font-serif text-lg text-foreground/80 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-auto">
                    <div className="font-display font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="font-body text-sm text-foreground/50">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="p-4 border border-t-0 border-foreground/10 bg-foreground/5">
                  <span className="font-mono text-xs text-foreground/60">
                    {testimonial.metric}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Logos Marquee */}
        <FadeIn delay={0.4} className="mt-20">
          <div className="border-t border-foreground/10 pt-12">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-foreground/30 text-center mb-8">
              Trusted by teams at
            </p>
            <div className="relative overflow-hidden">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex gap-16 whitespace-nowrap"
              >
                {[
                  "Google",
                  "Microsoft",
                  "Amazon",
                  "Meta",
                  "Apple",
                  "Stripe",
                  "Airbnb",
                  "Netflix",
                  "Google",
                  "Microsoft",
                  "Amazon",
                  "Meta",
                  "Apple",
                  "Stripe",
                  "Airbnb",
                  "Netflix",
                ].map((company, index) => (
                  <span
                    key={index}
                    className="font-display text-xl text-foreground/20"
                  >
                    {company}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
