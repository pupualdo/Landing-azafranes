"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tour360ButtonProps {
  variant?: "hero" | "inline" | "card" | "floating" | "masterplan";
  className?: string;
  label?: string;
}

const TOUR_URL = "https://vtour.cl/360/butalcura1/tour";

function CompassIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("w-5 h-5", className)}>
      {/* Compass rose — 4 cardinal lines */}
      {/* N — slightly longer */}
      <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* S */}
      <line x1="12" y1="16" x2="12" y2="22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* E */}
      <line x1="16" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* W */}
      <line x1="2" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* Center dot */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      {/* Subtle ring */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

export function Tour360Button({
  variant = "hero",
  className = "",
  label = "Tour 360°",
}: Tour360ButtonProps) {
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
        className={cn(
          "group w-full sm:w-auto px-8 py-3 flex items-center gap-4",
          "opacity-40 hover:opacity-90 transition-all duration-700",
          className
        )}
      >
        <span className="group-hover:animate-spin-slow transition-transform duration-700">
          <CompassIcon className="w-5 h-5 text-[#f5f0e8]" />
        </span>
        <span className="font-[var(--font-heading)] tracking-[0.2em] uppercase text-sm text-[#f5f0e8]">
          {label}
        </span>
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-[#f5f0e8] group-hover:translate-x-1 transition-transform duration-300">
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
        className={cn(
          "group w-full py-4 px-6 flex items-center gap-4",
          "opacity-40 hover:opacity-90 transition-all duration-700",
          className
        )}
      >
        <span className="group-hover:animate-spin-slow transition-transform duration-700">
          <CompassIcon className="w-4 h-4 text-[#f5f0e8]" />
        </span>
        <span className="font-[var(--font-heading)] tracking-[0.2em] uppercase text-sm text-[#f5f0e8]">
          {label}
        </span>
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-[#f5f0e8] group-hover:translate-x-1 transition-transform duration-300">
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
        className={cn(
          "group px-6 py-3 flex items-center gap-4",
          "opacity-40 hover:opacity-90 transition-all duration-700",
          className
        )}
      >
        <span className="group-hover:animate-spin-slow transition-transform duration-700">
          <CompassIcon className="w-4 h-4 text-[#f5f0e8]" />
        </span>
        <span className="font-[var(--font-heading)] tracking-[0.2em] uppercase text-sm text-[#f5f0e8]">
          {label}
        </span>
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#f5f0e8] group-hover:translate-x-1 transition-transform duration-300">
          <path d="M2 8h10M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    );
  }

  // === MASTERPLAN (large, centered) ===
  if (variant === "masterplan") {
    return (
      <motion.a
        href={TOUR_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.77, 0, 0.18, 1] as [number, number, number, number], delay: 0.3 }}
        className={cn(
          "group inline-flex items-center justify-center gap-5 md:gap-6",
          "opacity-50 hover:opacity-100 transition-all duration-700",
          "px-10 md:px-14 py-5 md:py-6",
          className
        )}
      >
        <span className="group-hover:animate-spin-slow transition-transform duration-700">
          <CompassIcon className="w-6 h-6 md:w-7 md:h-7 text-[#f5f0e8]" />
        </span>
        <span className="font-[var(--font-heading)] tracking-[0.15em] uppercase text-sm md:text-base text-[#f5f0e8]">
          {label}
        </span>
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 md:w-5 md:h-5 text-[#f5f0e8] group-hover:translate-x-1 transition-transform duration-300">
          <path d="M2 8h10M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.a>
    );
  }

  // === FLOATING (default) ===
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
        "inline-flex items-center gap-3 px-5 py-2.5",
        "opacity-50 hover:opacity-100 transition-all duration-700",
        className
      )}
    >
      <span className="group-hover:animate-spin-slow transition-transform duration-700">
        <CompassIcon className="w-5 h-5 text-[#f5f0e8]" />
      </span>
      <span className="font-[var(--font-heading)] tracking-[0.15em] uppercase text-xs text-[#f5f0e8]">
        Tour 360°
      </span>
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#f5f0e8]/50 group-hover:text-[#f5f0e8] group-hover:translate-x-0.5 transition-all duration-300">
        <path d="M2 8h10M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.a>
  );
}
