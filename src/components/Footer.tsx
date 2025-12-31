import { motion } from "framer-motion";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const links = {
    Product: ["Features", "Pricing", "Enterprise", "Roadmap"],
    Resources: ["Blog", "Documentation", "Tutorials", "API"],
    Company: ["About", "Careers", "Press", "Contact"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <footer className="section-dark border-t border-foreground/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-2xl font-bold text-foreground mb-6 block">
              BINOX
            </a>
            <p className="font-body text-foreground/50 mb-6 max-w-xs">
              AI-powered education that adapts to how you think, learn, and grow.
            </p>
            
            {/* Newsletter */}
            <div>
              <label className="font-mono text-xs tracking-wider uppercase text-foreground/40 mb-3 block">
                Stay Updated
              </label>
              <form className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border border-foreground/20 px-4 py-2 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/40 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-mono text-xs tracking-wider uppercase text-foreground/40 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors link-underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-foreground/40">
            © 2024 Binox. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-mono text-xs text-foreground/40 hover:text-foreground transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
