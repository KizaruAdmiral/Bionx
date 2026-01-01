import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Zap, Crown, Building2, Plus, Minus } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "How does the AI tutoring work?",
    answer: "Our AI tutor uses advanced language models to provide personalized, real-time assistance. It adapts to your learning style, explains concepts in multiple ways, and provides practice problems tailored to your skill level. Think of it as having a patient, knowledgeable tutor available 24/7."
  },
  {
    question: "Can I switch plans at any time?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, your current plan remains active until the end of your billing period."
  },
  {
    question: "What's included in the free trial?",
    answer: "The Pro trial gives you full access to all Pro features for 14 days, including unlimited AI tutoring, advanced analytics, and custom learning paths. No credit card required to start."
  },
  {
    question: "How do team features work for Enterprise?",
    answer: "Enterprise plans include a centralized admin dashboard, team progress tracking, custom content assignment, and detailed analytics across your organization. You can also create custom learning paths for different departments or roles."
  },
  {
    question: "Is my learning data private and secure?",
    answer: "Yes, we take privacy seriously. All data is encrypted at rest and in transit. We're SOC 2 Type II compliant, and Enterprise plans include additional security features like SSO, audit logs, and data residency options."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not completely satisfied, contact our support team for a full refund, no questions asked."
  },
];

const pricingPlans = [
  {
    name: "Free",
    icon: Zap,
    description: "Perfect for exploring AI-powered learning",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      { name: "5 AI tutoring sessions/month", included: true },
      { name: "Basic course library", included: true },
      { name: "Progress tracking", included: true },
      { name: "Community forum access", included: true },
      { name: "Email support", included: true },
      { name: "Advanced AI features", included: false },
      { name: "Priority support", included: false },
      { name: "Custom learning paths", included: false },
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    icon: Crown,
    description: "For serious learners who want to accelerate",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      { name: "Unlimited AI tutoring", included: true },
      { name: "Full course library", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority community access", included: true },
      { name: "Priority support", included: true },
      { name: "Custom learning paths", included: true },
      { name: "Offline mode", included: true },
      { name: "Team features", included: false },
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    description: "For teams and organizations at scale",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      { name: "Everything in Pro", included: true },
      { name: "Unlimited team members", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated success manager", included: true },
      { name: "SSO & advanced security", included: true },
      { name: "Custom content creation", included: true },
      { name: "API access", included: true },
      { name: "SLA guarantee", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6 mt-32"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-widest text-foreground/50 uppercase">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-foreground/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-foreground/5 transition-colors"
              >
                <span className="font-body text-lg font-medium pr-8">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-foreground/60" />
                  ) : (
                    <Plus className="w-5 h-5 text-foreground/60" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="font-body text-foreground/60 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="font-body text-foreground/60">
            Still have questions?{" "}
            <a href="#" className="text-foreground underline underline-offset-4 hover:no-underline">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 text-center mb-16"
        >
          <span className="font-mono text-xs tracking-widest text-foreground/50 uppercase">
            Simple Pricing
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-6">
            Invest in Your Future
          </h1>
          <p className="font-body text-lg text-foreground/60 max-w-2xl mx-auto">
            Choose the plan that fits your learning journey. All plans include our core AI-powered features.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span
              className={cn(
                "font-body text-sm transition-colors",
                !isYearly ? "text-foreground" : "text-foreground/40"
              )}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={cn(
                "relative w-14 h-7 rounded-full transition-colors duration-300",
                isYearly ? "bg-foreground" : "bg-foreground/20"
              )}
              aria-label="Toggle billing period"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={cn(
                  "absolute top-1 w-5 h-5 rounded-full",
                  isYearly ? "left-8 bg-background" : "left-1 bg-foreground"
                )}
              />
            </button>
            <span
              className={cn(
                "font-body text-sm transition-colors",
                isYearly ? "text-foreground" : "text-foreground/40"
              )}
            >
              Yearly
              <span className="ml-2 text-xs font-mono text-foreground/50">
                (Save 17%)
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={cn(
                  "relative rounded-2xl p-8 transition-all duration-300",
                  plan.popular
                    ? "bg-foreground text-background border-2 border-foreground"
                    : "bg-background border border-foreground/10 hover:border-foreground/30"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-background text-foreground font-mono text-xs px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <plan.icon
                    className={cn(
                      "w-6 h-6",
                      plan.popular ? "text-background" : "text-foreground"
                    )}
                  />
                  <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                </div>

                <p
                  className={cn(
                    "font-body text-sm mb-6",
                    plan.popular ? "text-background/70" : "text-foreground/60"
                  )}
                >
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span
                      className={cn(
                        "font-body text-sm",
                        plan.popular ? "text-background/60" : "text-foreground/50"
                      )}
                    >
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  {isYearly && plan.monthlyPrice > 0 && (
                    <p
                      className={cn(
                        "font-mono text-xs mt-2",
                        plan.popular ? "text-background/50" : "text-foreground/40"
                      )}
                    >
                      ${Math.round(plan.yearlyPrice / 12)}/month billed annually
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check
                          className={cn(
                            "w-5 h-5 flex-shrink-0 mt-0.5",
                            plan.popular ? "text-background" : "text-foreground"
                          )}
                        />
                      ) : (
                        <X
                          className={cn(
                            "w-5 h-5 flex-shrink-0 mt-0.5",
                            plan.popular ? "text-background/30" : "text-foreground/20"
                          )}
                        />
                      )}
                      <span
                        className={cn(
                          "font-body text-sm",
                          feature.included
                            ? plan.popular
                              ? "text-background"
                              : "text-foreground"
                            : plan.popular
                            ? "text-background/40"
                            : "text-foreground/40"
                        )}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full py-3 px-6 rounded-lg font-body text-sm font-medium transition-all duration-300",
                    plan.popular
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "border border-foreground/20 hover:bg-foreground hover:text-background"
                  )}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
