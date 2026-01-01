import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, ArrowRight, Zap, Workflow, Bot } from "lucide-react";

const courses = [
  {
    id: "n8n",
    name: "n8n",
    tagline: "Open-Source Workflow Automation",
    description: "Learn to build powerful automation workflows with n8n, an open-source, self-hostable workflow automation tool. Master connecting APIs, processing data, and creating complex automation logic without writing extensive code.",
    applications: ["API integrations", "Data transformation", "Webhook handling", "Self-hosted automation"],
    estimatedTime: "8 hours",
    difficulty: "Intermediate",
    icon: Workflow,
    accentColor: "hsl(8, 100%, 68%)", // n8n coral/orange
    bgGradient: "from-[hsl(8,100%,68%)] to-[hsl(15,100%,55%)]",
  },
  {
    id: "make",
    name: "Make",
    tagline: "Visual Automation Platform",
    description: "Master Make (formerly Integromat), a powerful visual automation platform. Create sophisticated scenarios that connect your apps and automate workflows with an intuitive drag-and-drop interface.",
    applications: ["Multi-step workflows", "Data routing", "Error handling", "Scheduled automation"],
    estimatedTime: "6 hours",
    difficulty: "Beginner",
    icon: Bot,
    accentColor: "hsl(263, 70%, 50%)", // Make purple
    bgGradient: "from-[hsl(263,70%,50%)] to-[hsl(280,70%,40%)]",
  },
  {
    id: "zapier",
    name: "Zapier",
    tagline: "Connect Your Apps & Automate",
    description: "Get started with Zapier, the industry-leading automation platform. Learn to create Zaps that connect thousands of apps, automate repetitive tasks, and streamline your business operations effortlessly.",
    applications: ["App integrations", "Trigger-based automation", "Multi-step Zaps", "Team collaboration"],
    estimatedTime: "5 hours",
    difficulty: "Beginner",
    icon: Zap,
    accentColor: "hsl(24, 100%, 50%)", // Zapier orange
    bgGradient: "from-[hsl(24,100%,50%)] to-[hsl(15,100%,45%)]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Course() {
  return (
    <main className="relative min-h-screen">
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <span className="inline-block font-mono text-xs tracking-widest text-foreground/50 uppercase mb-4">
              AI Automation Courses
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              Master Automation
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
              Learn the most powerful automation tools used by enterprises worldwide. 
              Build workflows that save hours of manual work.
            </p>
          </motion.div>

          {/* Course Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {courses.map((course) => (
              <motion.div
                key={course.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative bg-background border border-foreground/10 overflow-hidden h-full flex flex-col">
                  {/* Color accent bar */}
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${course.bgGradient}`}
                  />

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${course.accentColor}20` }}
                      >
                        <course.icon
                          className="w-6 h-6"
                          style={{ color: course.accentColor }}
                        />
                      </div>
                      <span
                        className="font-mono text-xs px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: `${course.accentColor}15`,
                          color: course.accentColor,
                        }}
                      >
                        {course.difficulty}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="font-display text-3xl font-bold mb-2"
                      style={{ color: course.accentColor }}
                    >
                      {course.name}
                    </h2>
                    <p className="font-body text-sm text-foreground/50 mb-4">
                      {course.tagline}
                    </p>

                    {/* Description */}
                    <p className="font-body text-foreground/70 mb-6 flex-1">
                      {course.description}
                    </p>

                    {/* Applications */}
                    <div className="mb-6">
                      <p className="font-mono text-xs text-foreground/40 uppercase tracking-wider mb-3">
                        What you'll learn
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {course.applications.map((app) => (
                          <span
                            key={app}
                            className="font-body text-xs px-3 py-1.5 bg-foreground/5 text-foreground/60 border border-foreground/10"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-foreground/10">
                      <div className="flex items-center gap-2 text-foreground/50">
                        <Clock className="w-4 h-4" />
                        <span className="font-mono text-sm">
                          {course.estimatedTime}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 font-body text-sm transition-colors"
                        style={{ color: course.accentColor }}
                      >
                        Start Learning
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${course.accentColor}08, transparent 40%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-20"
          >
            <p className="font-body text-foreground/50 mb-6">
              More courses coming soon. Stay tuned for updates.
            </p>
            <a href="#cta" className="magnetic-btn text-xs">
              <span>Get Notified</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
