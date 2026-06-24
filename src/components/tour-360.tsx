"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tour360ButtonProps {
  variant?: "hero" | "inline" | "card" | "floating";
  className?: string;
  label?: string;
}

const TOUR_URL = "https://vtour.cl/360/butalcura1/tour";

export function Tour360Button({
  variant = "hero",
  className = "",
  label = "Tour Virtual 360°",
}: Tour360ButtonProps) {
  // Base shared styles
  const base =
    "inline-flex items-center justify-center gap-3 " +
    "bg-[#050505] border border-white/40 " +
    "text-white text-sm tracking-[0.2em] uppercase font-medium " +
    "transition-all duration-300 " +
    "hover:bg-white hover:text-[#050505] hover:border-white " +
    "shadow-xl shadow-black/50";

  const iconBox =
    "flex items-center justify-center w-9 h-9 rounded-full " +
    "bg-white/10 border border-white/30 flex-shrink-0 " +
    "group-hover:bg-[#050505]/10 group-hover:border-[#050505]/30";

  const iconColor = "text-white group-hover:text-[#050505] transition-colors duration-300";

  // === HERO ===
  if (variant === "hero") {
    return (
      <motion.a
        href={TOUR_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.77, 0, 0.18, 1] as [number, number, number, number],
          delay: 2.4,
        }}
        className={cn(base, "group w-full sm:w-auto px-10 py-4", className)}
      >
        <span className={iconBox}>
          <svg viewBox="0 0 24 24" fill="none" className={`w-5 h-5 ${iconColor}`}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
            <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
        <span>Tour 360°</span>
        <svg viewBox="0 0 16 16" fill="none" className={`w-4 h-4 ${iconColor}`}>
          <path d="M2 8h10M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.a>
    );
  }

  // === CARD ===
  if (variant === "card") {
    return (
      <a
        href={TOUR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, "group w-full py-4 px-6", className)}
      >
        <span className={iconBox}>
          <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${iconColor}`}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
            <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
        {label}
        <svg viewBox="0 0 16 16" fill="none" className={`w-4 h-4 ${iconColor}`}>
          <path d="M2 8h10M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    );
  }

  // === INLINE ===
  if (variant === "inline") {
    return (
      <a
        href={TOUR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, "group px-6 py-3", className)}
      >
        <span className={cn(iconBox, "w-8 h-8")}>
          <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${iconColor}`}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
        {label}
        <svg viewBox="0 0 16 16" fill="none" className={`w-3.5 h-3.5 ${iconColor}`}>
          <path d="M2 8h10M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    );
  }

  // === FLOATING ===
  return (
    <motion.a
      href={TOUR_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 0.8, ease: [0.77, 0, 0.18, 1] as [number, number, number, number] }}
      className={cn(
        "fixed bottom-8 left-8 z-50 group",
        "inline-flex items-center gap-3 px-6 py-3",
        "bg-[#050505] border-2 border-white/50",
        "text-xs tracking-[0.2em] uppercase text-white font-semibold",
        "transition-all duration-300",
        "hover:bg-white hover:text-[#050505] hover:border-white",
        "shadow-2xl shadow-black/60",
        className
      )}
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/30 group-hover:bg-[#050505]/10 group-hover:border-[#050505]/30 flex-shrink-0 transition-all duration-300">
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white group-hover:text-[#050505] transition-colors duration-300">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
          <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
      <span>Tour 360°</span>
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-white/50 group-hover:text-[#050505]/50 transition-colors duration-300">
        <path d="M10 3l4 4-4 4M14 7H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.a>
  );
}
