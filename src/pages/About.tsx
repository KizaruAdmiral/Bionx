import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/RevealText";
import { Linkedin } from "lucide-react";
import knight1 from "@/assets/knight-1.jpg";
import knight2 from "@/assets/knight-2.jpg";
import knight3 from "@/assets/knight-3.jpg";

const teamMembers = [
  {
    name: "King Tai",
    role: "Co-Founder",
    image: knight1,
    linkedin: "https://linkedin.com",
    description:
      "King previously taught flagship AI courses led by pioneers like Prof. Andrew Ng (founder of Coursera, Google Brain), Prof. Chris Manning (foundational work in AI), and other world-renowned AI leaders. He led cutting-edge research on AI agents focused on reasoning over large-scale business data. King also founded AI x Education, a leading think tank on AI adoption in education with over 9,000 educators. He holds a Master's in Computer Science (AI) and has led AI programs for over 5,000 professionals across tech, education, and enterprise sectors.",
  },
  {
    name: "Oscar Kwan",
    role: "Co-Founder",
    image: knight2,
    linkedin: "https://linkedin.com",
    description:
      "Former Data Scientist at Meta, where he built large-scale ML models for core product teams, with prior experience in analytics and product experience at leading tech companies. Oscar is an Accel Fellow, founder of AI community initiatives, and a frequent speaker at national AI forums, where he focuses on helping non-technical workforces adopt AI through workflow automation. He holds a Master's in Management Science and Engineering, with a focus on AI adoption and technology management.",
  },
  {
    name: "Marco Leung",
    role: "Co-Founder",
    image: knight3,
    linkedin: "https://linkedin.com",
    description:
      "Former founding engineer at a Y Combinator startup, where he built advanced AI agent tools. He previously conducted research at Microsoft on generative AI and human AI collaboration. Marco holds a Master's in Learning, Design and Technology and a B.S. in Computer Science. He advises on learning programs and has led AI adoption and training for institutions such as Tencent, Goodnotes, and Fortune 500 companies.",
  },
];

const About = () => {
  return (
    <main className="relative">
      {/* Film Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="font-mono text-sm tracking-widest text-foreground/60 uppercase mb-4 block">
              About Binox
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
              Learn Smarter,
              <br />
              Not Harder
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-body text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto text-justify">
              At Binox, we're reshaping how individuals and organizations learn
              in the AI era. Our AI-first education platform delivers
              personalized, adaptive learning experiences that meet you exactly
              where you are. Whether you're an individual looking to upskill or
              an enterprise seeking to transform your workforce, Binox equips
              every learner with role-specific AI learning paths, while
              providing leaders with visibility into progress, adoption, and
              measurable impact.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground text-center mb-16">
              Our AI Expert Team
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={0.1 * index}>
                <motion.div
                  className="flex flex-col items-center text-center group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Photo */}
                  <div className="relative w-48 h-48 mb-6 overflow-hidden border-2 border-foreground/20 group-hover:border-foreground/40 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="font-mono text-sm text-foreground/60 uppercase tracking-wider mb-4">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="font-body text-sm text-foreground/70 leading-relaxed mb-6 text-justify">
                    {member.description}
                  </p>

                  {/* LinkedIn Button */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/20 hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase tracking-wider">
                      LinkedIn
                    </span>
                  </a>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default About;
