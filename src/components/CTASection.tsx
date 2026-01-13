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
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden bg-primary">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <FadeIn className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground font-mono text-xs tracking-[0.2em] uppercase mb-6">
              Get Started
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground mb-6">
              Ready to learn smarter?
            </h2>
            <p className="font-serif text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Join thousands of learners and teams transforming how they acquire
              knowledge. Start free, upgrade when you're ready.
            </p>
          </FadeIn>

          {/* Form Card */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl bg-background p-8 md:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    placeholder="Company name"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium tracking-wide hover:opacity-90 disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Start Free Trial →"}
                  </button>
                  <span className="text-muted-foreground">or</span>
                  <MagneticButton variant="ghost" className="w-full sm:w-auto">
                    Watch Demo
                  </MagneticButton>
                </div>

                <p className="font-mono text-xs text-muted-foreground text-center pt-2">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </form>
            </div>
          </FadeIn>

          {/* Urgency Element */}
          <FadeIn delay={0.4} className="mt-10 text-center">
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary-foreground/10"
            >
              <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
              <span className="font-mono text-sm text-primary-foreground">
                <span className="font-bold">847</span> learners joined this week
              </span>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}