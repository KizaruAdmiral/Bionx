import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-evolution.jpg";
import { MagneticButton } from "./MagneticButton";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const trustLogos = [
    "Stanford",
    "MIT",
    "Google",
    "Microsoft",
    "Harvard",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ x: imageX, scale }}
        className="absolute inset-0 w-[120%] h-full -left-[10%]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/30 z-10" />
        <img
          src={heroImage}
          alt="Evolution of education through time"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container mx-auto px-6 text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-foreground/60">
            The Future of Learning is Here
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6"
        >
          Learn Smarter,
          <br />
          <span className="text-foreground/80">Not Harder.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12"
        >
          AI-powered education that adapts to your mind. From ancient wisdom to
          cutting-edge technology, Binox evolves with every learner.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton variant="primary" className="text-sm">
            Start Your AI Journey
          </MagneticButton>
          <MagneticButton variant="secondary" className="text-sm">
            Watch Demo
          </MagneticButton>
        </motion.div>

        {/* Trust Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-foreground/40 mb-6">
            Trusted by learners at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustLogos.map((logo, index) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="font-display text-sm md:text-base font-medium text-foreground/30 hover:text-foreground/60 transition-colors"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs tracking-wider text-foreground/40">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-foreground/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
