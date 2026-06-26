"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "icon" | "minimal";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animated?: boolean;
}

const sizeMap = {
  sm: { icon: "w-8 h-8", text: "text-sm", tracking: "tracking-[0.15em]" },
  md: { icon: "w-10 h-10", text: "text-base", tracking: "tracking-[0.2em]" },
  lg: { icon: "w-14 h-14", text: "text-lg", tracking: "tracking-[0.3em]" },
  xl: { icon: "w-20 h-20", text: "text-2xl", tracking: "tracking-[0.4em]" },
};

export function Logo({
  variant = "full",
  size = "md",
  className = "",
  animated = true,
}: LogoProps) {
  const s = sizeMap[size];

  // The 'Á' logomark — custom SVG letter with premium styling
  const Logomark = () => (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(s.icon, "flex-shrink-0")}
      aria-label="Proyecto Azafranes"
    >
      {/* Accent mark (´) */}
      <motion.path
        d="M50 8 L58 28 L42 28 Z"
        fill="currentColor"
        className="text-[#f5f0e8]"
        initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
        animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.77, 0, 0.18, 1] }}
      />
      {/* Left leg of A */}
      <motion.path
        d="M50 40 L12 112 L30 112 L50 76 L70 112 L88 112 L50 40 Z"
        fill="currentColor"
        className="text-[#f5f0e8]"
        initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
        animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.77, 0, 0.18, 1] }}
      />
      {/* Crossbar */}
      <motion.rect
        x="28"
        y="84"
        width="44"
        height="5"
        rx="2"
        fill="currentColor"
        className="text-[#f5f0e8]/60"
        initial={animated ? { scaleX: 0, opacity: 0 } : undefined}
        animate={animated ? { scaleX: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.77, 0, 0.18, 1] }}
        style={{ transformOrigin: "50px 86.5px" }}
      />
    </svg>
  );

  if (variant === "icon") {
    return (
      <motion.div
        className={cn("flex items-center justify-center", className)}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <Logomark />
      </motion.div>
    );
  }

  if (variant === "minimal") {
    return (
      <motion.div
        className={cn("flex items-center gap-2", className)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Logomark />
        <span
          className={cn(
            s.text,
            s.tracking,
            "uppercase font-[var(--font-heading)] text-[#f5f0e8] leading-none"
          )}
        >
          Azafranes
        </span>
      </motion.div>
    );
  }

  // Full variant
  return (
    <motion.div
      className={cn("flex items-center gap-3", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Logomark />
      <div className="flex flex-col leading-tight">
        <span
          className={cn(
            s.text,
            s.tracking,
            "uppercase font-[var(--font-heading)] text-[#f5f0e8]"
          )}
        >
          Proyecto
        </span>
        <span
          className={cn(
            s.text,
            s.tracking,
            "uppercase font-[var(--font-heading)] text-[#f5f0e8]/70"
          )}
        >
          Azafranes
        </span>
      </div>
    </motion.div>
  );
}
