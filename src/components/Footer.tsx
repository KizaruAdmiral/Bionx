import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const [email, setEmail] = useState("");

  const links = {
    Product: ["Features", "Pricing", "Enterprise", "Roadmap"],
    Resources: ["Blog", "Documentation", "Tutorials", "API"],
    Company: ["About", "Careers", "Press", "Contact"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/about" className="font-display text-2xl font-bold text-background mb-6 block">
              BINOX
            </Link>
            <p className="font-body text-background/60 mb-6 max-w-xs">
              AI-powered education that adapts to how you think, learn, and grow.
            </p>
            
            {/* Newsletter */}
            <div>
              <label className="font-mono text-xs tracking-wider uppercase text-background/50 mb-3 block">
                Stay Updated
              </label>
              <form className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background/10 border border-background/20 rounded-lg px-4 py-2 text-sm text-background placeholder:text-background/40 focus:border-background/40 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-background text-foreground text-sm font-medium hover:bg-background/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-mono text-xs tracking-wider uppercase text-background/50 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-sm text-background/70 hover:text-background transition-colors"
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
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-background/50">
            © 2024 Binox. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-mono text-xs text-background/50 hover:text-background transition-colors"
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