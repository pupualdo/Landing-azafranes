"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { LogoOriginal } from "@/components/logo-original";
import { Tour360Button } from "@/components/tour-360";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background video — drone footage of the terrain */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{ scale: bgScale }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster="/assets/hero-bg.mp4?thumb"
          >
            <source src="/assets/videos/DJI_0678_bg.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/40 to-[#050505]/95"
          style={{ opacity: bgOpacity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <LogoOriginal variant="hero" animated={true} />

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.18, 1], delay: 1.2 }}
          className="mt-12 md:mt-16"
        >
          <p className="text-base md:text-xl lg:text-2xl font-[var(--font-serif)] font-light italic text-[#f5f0e8]/50 max-w-2xl leading-relaxed tracking-wide">
            Un refugio entre bosque, niebla y mar. Parcelas en venta en Chiloé.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1], delay: 1.8 }}
          className="mt-10"
        >
          <a
            href="#concepto"
            className="group inline-flex items-center gap-3 px-8 py-3 border border-white/15 text-xs tracking-[0.25em] uppercase text-[#f5f0e8]/70 transition-all duration-500 hover:bg-white/5 hover:border-white/30 hover:text-[#f5f0e8]"
          >
            Descubrir el proyecto
            <ArrowDown className="w-3 h-3 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Tour 360 flotante esquina inferior izquierda */}
      <Tour360Button variant="floating" />

      {/* Bottom gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10"
        style={{ opacity: bgOpacity }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-[#f5f0e8]/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
