import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import { 
  Zap, Workflow, Bot, Sparkles, FlaskConical, Megaphone, DollarSign
} from "lucide-react";

const courses = [
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
    website: "https://n8n.io",
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
    website: "https://www.make.com",
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
    website: "https://zapier.com",
  },
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
    website: "https://www.jasper.ai",
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
    website: "https://www.canva.com",
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
    website: "https://www.hubspot.com",
  },
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
    website: "https://www.perplexity.ai",
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
    website: "https://www.quantilope.com",
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
    website: "https://www.crayon.co",
  },
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
    website: "https://ramp.com",
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
    website: "https://www.datarails.com",
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
    website: "https://venasolutions.com",
  },
];

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <main className="relative min-h-screen">
        <div className="grain-overlay" aria-hidden="true" />
        <Navigation />
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Course Not Found
            </h1>
            <p className="font-body text-foreground/60 mb-8">
              The course you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate("/course")}
              className="magnetic-btn text-sm"
            >
              <span>Back to Courses</span>
            </button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const CourseIcon = course.icon;

  return (
    <main className="relative min-h-screen">
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation />

      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/course")}
          className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-foreground/10 hover:border-foreground/30 transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors" />
          <span className="font-body text-sm text-foreground/60 group-hover:text-foreground transition-colors">
            Back to Courses
          </span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(ellipse at top, ${course.accentColor}, transparent 70%)`,
          }}
        />

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Course Icon & Category */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: `${course.accentColor}20` }}
              >
                <CourseIcon
                  className="w-8 h-8"
                  style={{ color: course.accentColor }}
                />
              </div>
              <div>
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
            </div>

            {/* Title */}
            <h1
              className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-4"
              style={{ color: course.accentColor }}
            >
              {course.name}
            </h1>
            <p className="font-body text-xl text-foreground/60 mb-8">
              {course.tagline}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-foreground/50">
                <Clock className="w-5 h-5" />
                <span className="font-mono text-sm">{course.estimatedTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-foreground/10 p-8 md:p-12 bg-background/50"
          >
            {/* Description */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                About This Course
              </h2>
              <p className="font-body text-lg text-foreground/70 leading-relaxed text-justify mb-6">
                {course.description}
              </p>
              
              {/* Website Link */}
              <a
                href={course.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-base transition-colors hover:opacity-80"
                style={{ color: course.accentColor }}
              >
                <ExternalLink className="w-4 h-4" />
                {course.website}
              </a>
            </div>

            {/* What You'll Learn */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                What You'll Learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.applications.map((app, index) => (
                  <motion.div
                    key={app}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 border border-foreground/10"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: course.accentColor }}
                    />
                    <span className="font-body text-foreground/80">{app}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-foreground/10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 font-display text-lg tracking-wide transition-all duration-300"
                style={{
                  backgroundColor: course.accentColor,
                  color: "hsl(var(--background))",
                }}
              >
                Begin Course
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
