import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-foreground text-background hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]",
    secondary: "bg-transparent border border-foreground/30 text-foreground hover:bg-foreground hover:text-background",
    ghost: "bg-transparent text-foreground hover:bg-foreground/10",
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4",
        "font-display text-sm tracking-[0.2em] uppercase",
        "transition-all duration-500",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
