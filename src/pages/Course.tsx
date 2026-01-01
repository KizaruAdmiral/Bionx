import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Clock, ArrowRight, Zap, Workflow, Bot, Search,
  Sparkles, FlaskConical, Megaphone, DollarSign
} from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
  {
    id: "all",
    name: "All Courses",
    icon: Sparkles,
    color: "hsl(var(--foreground))",
  },
  {
    id: "automation",
    name: "AI Automation",
    icon: Workflow,
    color: "hsl(263, 70%, 50%)",
  },
  {
    id: "marketing",
    name: "AI Marketing",
    icon: Megaphone,
    color: "hsl(340, 82%, 52%)",
  },
  {
    id: "research",
    name: "AI Research",
    icon: FlaskConical,
    color: "hsl(199, 89%, 48%)",
  },
  {
    id: "finance",
    name: "Financial Management",
    icon: DollarSign,
    color: "hsl(142, 71%, 45%)",
  },
];

const courses = [
  // AI Automation
  {
    id: "n8n",
    name: "n8n",
    category: "automation",
    tagline: "Open-Source Workflow Automation",
    description: "Learn to build powerful automation workflows with n8n, an open-source, self-hostable workflow automation tool. Master connecting APIs, processing data, and creating complex automation logic without writing extensive code.",
    applications: ["API integrations", "Data transformation", "Webhook handling", "Self-hosted automation"],
    estimatedTime: "8 hours",
    difficulty: "Intermediate",
    icon: Workflow,
    accentColor: "hsl(8, 100%, 68%)",
    bgGradient: "from-[hsl(8,100%,68%)] to-[hsl(15,100%,55%)]",
  },
  {
    id: "make",
    name: "Make",
    category: "automation",
    tagline: "Visual Automation Platform",
    description: "Master Make (formerly Integromat), a powerful visual automation platform. Create sophisticated scenarios that connect your apps and automate workflows with an intuitive drag-and-drop interface.",
    applications: ["Multi-step workflows", "Data routing", "Error handling", "Scheduled automation"],
    estimatedTime: "6 hours",
    difficulty: "Beginner",
    icon: Bot,
    accentColor: "hsl(263, 70%, 50%)",
    bgGradient: "from-[hsl(263,70%,50%)] to-[hsl(280,70%,40%)]",
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "automation",
    tagline: "Connect Your Apps & Automate",
    description: "Get started with Zapier, the industry-leading automation platform. Learn to create Zaps that connect thousands of apps, automate repetitive tasks, and streamline your business operations effortlessly.",
    applications: ["App integrations", "Trigger-based automation", "Multi-step Zaps", "Team collaboration"],
    estimatedTime: "5 hours",
    difficulty: "Beginner",
    icon: Zap,
    accentColor: "hsl(24, 100%, 50%)",
    bgGradient: "from-[hsl(24,100%,50%)] to-[hsl(15,100%,45%)]",
  },
  // AI Marketing
  {
    id: "jasper",
    name: "Jasper",
    category: "marketing",
    tagline: "AI-Powered Content Creation",
    description: "Master Jasper AI, the leading AI writing assistant for marketing teams. Learn to generate high-converting copy, blog posts, social media content, and marketing campaigns at scale with AI assistance.",
    applications: ["Copywriting", "Blog generation", "Ad creation", "Brand voice training"],
    estimatedTime: "4 hours",
    difficulty: "Beginner",
    icon: Sparkles,
    accentColor: "hsl(262, 83%, 58%)",
    bgGradient: "from-[hsl(262,83%,58%)] to-[hsl(280,83%,48%)]",
  },
  {
    id: "canva",
    name: "Canva",
    category: "marketing",
    tagline: "AI-Enhanced Design Platform",
    description: "Unlock Canva's AI-powered design features to create stunning marketing visuals. Learn to use Magic Write, text-to-image generation, background remover, and automated design suggestions for professional results.",
    applications: ["Social graphics", "Presentations", "Video editing", "Brand kits"],
    estimatedTime: "5 hours",
    difficulty: "Beginner",
    icon: Sparkles,
    accentColor: "hsl(199, 89%, 48%)",
    bgGradient: "from-[hsl(199,89%,48%)] to-[hsl(180,89%,38%)]",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "marketing",
    tagline: "AI-Driven Marketing Automation",
    description: "Leverage HubSpot's AI tools for comprehensive marketing automation. Master predictive lead scoring, content optimization, chatbots, and intelligent campaign management to drive growth.",
    applications: ["Lead scoring", "Email marketing", "CRM automation", "Analytics"],
    estimatedTime: "10 hours",
    difficulty: "Intermediate",
    icon: Megaphone,
    accentColor: "hsl(24, 100%, 50%)",
    bgGradient: "from-[hsl(24,100%,50%)] to-[hsl(10,100%,45%)]",
  },
  // AI Research
  {
    id: "perplexity",
    name: "Perplexity AI",
    category: "research",
    tagline: "AI-Powered Research Engine",
    description: "Master Perplexity AI, the revolutionary AI search engine. Learn advanced research techniques, citation management, and how to leverage AI for comprehensive market research and competitive analysis.",
    applications: ["Market research", "Competitive analysis", "Academic research", "Fact-checking"],
    estimatedTime: "3 hours",
    difficulty: "Beginner",
    icon: FlaskConical,
    accentColor: "hsl(195, 100%, 40%)",
    bgGradient: "from-[hsl(195,100%,40%)] to-[hsl(210,100%,35%)]",
  },
  {
    id: "quantilope",
    name: "Quantilope",
    category: "research",
    tagline: "Automated Consumer Research",
    description: "Learn Quantilope's AI-powered consumer insights platform. Master automated survey design, advanced analytics, and real-time consumer research methodologies to make data-driven decisions.",
    applications: ["Consumer insights", "Survey automation", "Trend analysis", "Brand tracking"],
    estimatedTime: "7 hours",
    difficulty: "Advanced",
    icon: FlaskConical,
    accentColor: "hsl(340, 82%, 52%)",
    bgGradient: "from-[hsl(340,82%,52%)] to-[hsl(320,82%,42%)]",
  },
  {
    id: "crayon",
    name: "Crayon",
    category: "research",
    tagline: "Competitive Intelligence Platform",
    description: "Master Crayon's AI-driven competitive intelligence. Learn to track competitor movements, analyze market trends, and build comprehensive battlecards to stay ahead in your industry.",
    applications: ["Competitor tracking", "Win/loss analysis", "Battlecards", "Market intelligence"],
    estimatedTime: "6 hours",
    difficulty: "Intermediate",
    icon: FlaskConical,
    accentColor: "hsl(262, 70%, 55%)",
    bgGradient: "from-[hsl(262,70%,55%)] to-[hsl(280,70%,45%)]",
  },
  // Financial Management
  {
    id: "ramp",
    name: "Ramp",
    category: "finance",
    tagline: "AI-Powered Expense Management",
    description: "Master Ramp's AI-driven corporate card and expense management platform. Learn to automate expense tracking, optimize spending, and leverage AI insights for smarter financial decisions.",
    applications: ["Expense automation", "Spend analytics", "Receipt matching", "Budget controls"],
    estimatedTime: "4 hours",
    difficulty: "Beginner",
    icon: DollarSign,
    accentColor: "hsl(142, 71%, 45%)",
    bgGradient: "from-[hsl(142,71%,45%)] to-[hsl(160,71%,35%)]",
  },
  {
    id: "datarails",
    name: "Datarails",
    category: "finance",
    tagline: "FP&A Automation Platform",
    description: "Learn Datarails' AI-powered financial planning and analysis platform. Master automated data consolidation, real-time reporting, and predictive analytics to transform your finance operations.",
    applications: ["Financial planning", "Data consolidation", "Reporting automation", "Forecasting"],
    estimatedTime: "8 hours",
    difficulty: "Advanced",
    icon: DollarSign,
    accentColor: "hsl(220, 90%, 56%)",
    bgGradient: "from-[hsl(220,90%,56%)] to-[hsl(240,90%,46%)]",
  },
  {
    id: "vena",
    name: "Vena Solutions",
    category: "finance",
    tagline: "Complete Planning Platform",
    description: "Master Vena's comprehensive planning platform that combines Excel with AI-powered automation. Learn to build financial models, streamline budgeting, and create dynamic forecasts with intelligent insights.",
    applications: ["Budgeting", "Financial modeling", "Scenario planning", "Workflow automation"],
    estimatedTime: "10 hours",
    difficulty: "Intermediate",
    icon: DollarSign,
    accentColor: "hsl(24, 95%, 53%)",
    bgGradient: "from-[hsl(24,95%,53%)] to-[hsl(10,95%,43%)]",
  },
];

const HOURLY_RATE = 33;

const getPrice = (estimatedTime: string): number => {
  const hours = parseInt(estimatedTime);
  return hours * HOURLY_RATE;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Course() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
      const matchesSearch = 
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
            className="text-center mb-12"
          >
            <span className="inline-block font-mono text-xs tracking-widest text-foreground/50 uppercase mb-4">
              AI Courses
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              Master AI Tools
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
              From automation to marketing to research — learn the AI tools 
              transforming how businesses operate.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            {/* Search Input */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 bg-background/50 border-foreground/10 focus:border-foreground/30 font-body"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const isActive = selectedCategory === category.id;
                const CategoryIcon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      flex items-center gap-2 px-5 py-2.5 font-body text-sm transition-all duration-300
                      border rounded-full
                      ${isActive 
                        ? "border-foreground/30 bg-foreground/10 text-foreground" 
                        : "border-foreground/10 bg-transparent text-foreground/50 hover:text-foreground/70 hover:border-foreground/20"
                      }
                    `}
                  >
                    <CategoryIcon 
                      className="w-4 h-4" 
                      style={{ color: isActive ? category.color : undefined }}
                    />
                    <span>{category.name}</span>
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="font-mono text-xs px-2 py-0.5 rounded-full bg-foreground/10"
                      >
                        {filteredCourses.length}
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Course Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  variants={cardVariants}
                  layout
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

                      {/* Price & Time */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-foreground/50">
                          <Clock className="w-4 h-4" />
                          <span className="font-mono text-sm">
                            {course.estimatedTime}
                          </span>
                        </div>
                        <span 
                          className="font-display text-2xl font-bold"
                          style={{ color: course.accentColor }}
                        >
                          ${getPrice(course.estimatedTime)}
                        </span>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-6 border-t border-foreground/10">
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
          </AnimatePresence>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-body text-foreground/50 text-lg">
                No courses found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 font-body text-sm text-foreground/70 underline hover:text-foreground transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}

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
