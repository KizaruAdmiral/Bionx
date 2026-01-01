import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const faqItems = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How does the AI tutoring work?",
        answer: "Our AI tutor uses advanced language models to provide personalized, real-time assistance. It adapts to your learning style, explains concepts in multiple ways, and provides practice problems tailored to your skill level. Think of it as having a patient, knowledgeable tutor available 24/7."
      },
      {
        question: "What's included in the free trial?",
        answer: "The Pro trial gives you full access to all Pro features for 14 days, including unlimited AI tutoring, advanced analytics, and custom learning paths. No credit card required to start."
      },
      {
        question: "How do I get started with Binox?",
        answer: "Simply create a free account, choose your learning goals, and our AI will recommend a personalized learning path. You can start learning immediately with our free tier or upgrade for unlimited access."
      },
    ]
  },
  {
    category: "Billing & Plans",
    questions: [
      {
        question: "Can I switch plans at any time?",
        answer: "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, your current plan remains active until the end of your billing period."
      },
      {
        question: "Can I get a refund if I'm not satisfied?",
        answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not completely satisfied, contact our support team for a full refund, no questions asked."
      },
      {
        question: "Do you offer student or educator discounts?",
        answer: "Yes! We offer 50% off Pro plans for verified students and educators. Contact our support team with your .edu email or proof of enrollment to receive your discount code."
      },
    ]
  },
  {
    category: "Enterprise & Teams",
    questions: [
      {
        question: "How do team features work for Enterprise?",
        answer: "Enterprise plans include a centralized admin dashboard, team progress tracking, custom content assignment, and detailed analytics across your organization. You can also create custom learning paths for different departments or roles."
      },
      {
        question: "Can we integrate Binox with our existing LMS?",
        answer: "Yes, Enterprise plans include API access and pre-built integrations with popular LMS platforms like Canvas, Blackboard, and Moodle. Our team can also build custom integrations for your specific needs."
      },
    ]
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        question: "Is my learning data private and secure?",
        answer: "Yes, we take privacy seriously. All data is encrypted at rest and in transit. We're SOC 2 Type II compliant, and Enterprise plans include additional security features like SSO, audit logs, and data residency options."
      },
      {
        question: "Do you sell my data to third parties?",
        answer: "Never. Your data is yours. We don't sell, share, or use your personal data for advertising. We only use anonymized, aggregate data to improve our AI models and learning experience."
      },
    ]
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

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
            Help Center
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-body text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything you need to know about Binox. Can't find the answer you're looking for? 
            <a href="#" className="text-foreground underline underline-offset-4 hover:no-underline ml-1">
              Contact our support team
            </a>
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqItems.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="font-display text-2xl font-bold mb-6 pb-4 border-b border-foreground/10">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                    
                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: questionIndex * 0.05 }}
                        className="border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-colors"
                      >
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-foreground/5 transition-colors"
                        >
                          <span className="font-body text-lg font-medium pr-8">
                            {item.question}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                          >
                            {isOpen ? (
                              <Minus className="w-5 h-5 text-foreground/60" />
                            ) : (
                              <Plus className="w-5 h-5 text-foreground/60" />
                            )}
                          </motion.div>
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
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
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mt-20 text-center p-12 border border-foreground/10 rounded-2xl"
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="font-body text-foreground/60 mb-8">
              Our support team is here to help. Get in touch and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="magnetic-btn text-sm"
              >
                <span>Contact Support</span>
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 border border-foreground/20 rounded-lg font-body text-sm hover:bg-foreground hover:text-background transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
