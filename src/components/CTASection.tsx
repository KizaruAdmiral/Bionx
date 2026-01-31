import { motion } from "framer-motion";
import { FadeIn } from "./RevealText";
import { MagneticButton } from "./MagneticButton";
import { useState } from "react";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", company: "" });
    }, 1500);
  };

  return (
    <section id="cta" className="section-dark py-32 md:py-40 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <FadeIn className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4 block">
              Get Started
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Ready to learn smarter?
            </h2>
            <p className="font-serif text-lg text-foreground/60 max-w-2xl mx-auto">
              Join thousands of learners and teams transforming how they acquire
              knowledge. Start free, upgrade when you're ready.
            </p>
          </FadeIn>

          {/* Form Card */}
          <FadeIn delay={0.2}>
            <div className="border border-foreground/10 bg-card p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase text-foreground/50 mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-foreground/50 focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase text-foreground/50 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-foreground/50 focus:outline-none transition-colors"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs tracking-wider uppercase text-foreground/50 mb-2 block">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-foreground/50 focus:outline-none transition-colors"
                    placeholder="Company name"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="glow-btn w-full sm:w-auto disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Start Free Trial"}
                  </button>
                  <span className="text-foreground/30">or</span>
                  <MagneticButton variant="ghost" className="w-full sm:w-auto">
                    Watch Demo
                  </MagneticButton>
                </div>

                <p className="font-mono text-xs text-foreground/40 text-center pt-4">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </form>
            </div>
          </FadeIn>

          {/* Urgency Element */}
          <FadeIn delay={0.4} className="mt-12 text-center">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/10"
            >
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
              <span className="font-mono text-sm text-foreground/60">
                <span className="text-foreground">847</span> learners joined this week
              </span>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
