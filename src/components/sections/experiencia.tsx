"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const panels = [
  {
    id: "bosque",
    image:
      "/assets/photos/closeups/closeup_01_moss.jpg",
    label: "01",
    subtitle: "Bosque húmedo",
    text: "La lluvia despierta el musgo milenario. Cada hoja guarda un murmullo que solo el silencio entiende.",
  },
  {
    id: "niebla",
    image:
      "/assets/photos/closeups/closeup_niebla.jpg",
    label: "02",
    subtitle: "Mañanas con niebla",
    text: "El mundo se desdibuja entre vapores. No hay prisa donde la bruma esculpe el horizonte.",
  },
  {
    id: "fuego",
    image:
      "/assets/photos/closeups/closeup_fuego.jpg",
    label: "03",
    subtitle: "Fuego y madera",
    text: "La lumbre baila contra la noche austral. La madera cruje historias que el viento no olvida.",
  },
  {
    id: "mar",
    image:
      "/assets/photos/closeups/closeup_mar_aves.jpg",
    label: "04",
    subtitle: "Mar y aves",
    text: "El mar respira al ritmo de las gaviotas. Más allá de la orilla, solo existe el azul infinito.",
  },
  {
    id: "silencio",
    image:
      "/assets/photos/closeups/closeup_silencio.jpg",
    label: "05",
    subtitle: "Silencio profundo",
    text: "Aquí el tiempo se detiene. No hay eco que no sea el latido de la tierra misma.",
  },
];

function Panel({
  panel,
  index,
}: {
  panel: (typeof panels)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [60, 0, 0, -40]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 0.9],
    [0, 1, 1, 0]
  );
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section
      id={panel.id}
      ref={ref}
      className="relative h-screen w-full overflow-hidden will-change-transform"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${panel.image}')`,
          scale: imageScale,
        }}
      />

      {/* Dark overlay — multi-stop vignette: pure black edge → quick ramp to 85% vignette → bright center → back to black */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            #050505 0%,
            rgba(5,5,5,0.88) 4%,
            rgba(5,5,5,0.60) 12%,
            rgba(5,5,5,0.35) 25%,
            rgba(5,5,5,0.25) 50%,
            rgba(5,5,5,0.35) 75%,
            rgba(5,5,5,0.60) 88%,
            rgba(5,5,5,0.88) 96%,
            #050505 100%
          )`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-transparent to-[#050505]/50" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 lg:px-20 text-center"
        style={{ y: textY }}
      >
        <motion.div
          style={{ opacity: textOpacity }}
          className="max-w-3xl mx-auto space-y-6 md:space-y-8"
        >
          {/* Label number */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.77, 0, 0.18, 1] }}
            className="block text-xs tracking-[0.3em] uppercase text-[#8a8580]/60 font-[var(--font-sans)]"
          >
            {panel.label}
          </motion.span>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.77, 0, 0.18, 1] }}
            className="font-[var(--font-heading)] text-3xl md:text-5xl lg:text-6xl text-[#f5f0e8] leading-none"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.85), 0 0 40px rgba(0,0,0,0.5), 0 0 4px rgba(0,0,0,0.6)" }}
          >
            {panel.subtitle}
          </motion.h2>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.77, 0, 0.18, 1] }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/40 to-transparent mx-auto"
          />

          {/* Poetic text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.45, ease: [0.77, 0, 0.18, 1] }}
            className="font-[var(--font-serif)] text-lg md:text-2xl lg:text-3xl italic leading-relaxed text-[#f5f0e8]/80 max-w-xl mx-auto"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8), 0 0 24px rgba(0,0,0,0.4)" }}
          >
            &ldquo;{panel.text}&rdquo;
          </motion.p>

          {/* Bottom decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.77, 0, 0.18, 1] }}
            className="w-8 h-px bg-gradient-to-r from-transparent via-[#8a8580]/30 to-transparent mx-auto"
          />
        </motion.div>
      </motion.div>

      {/* Scroll progress indicator on right edge */}
      <motion.div
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2"
        style={{ opacity }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#8a8580]/40 font-[var(--font-sans)] writing-mode-vertical">
          {panel.label} / 0{panels.length}
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-[#f5f0e8]/20 to-transparent" />
      </motion.div>
    </section>
  );
}

export function ExperienciaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="relative w-full bg-[#050505]"
    >
      {/* Opening title card */}
      <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/photos/closeups/closeup_02_helechos.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(5,5,5,0.85) 0%,
              rgba(5,5,5,0.55) 15%,
              rgba(5,5,5,0.30) 35%,
              rgba(5,5,5,0.22) 55%,
              rgba(5,5,5,0.35) 72%,
              rgba(5,5,5,0.60) 86%,
              rgba(5,5,5,0.88) 96%,
              #050505 100%
            )`,
          }}
        />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1] }}
          className="relative z-10 text-center px-6"
        >
          <span className="block text-xs tracking-[0.3em] uppercase text-[#8a8580]/60 font-[var(--font-sans)] mb-6">
            La experiencia
          </span>
          <h2 className="font-[var(--font-heading)] text-5xl md:text-7xl lg:text-8xl text-[#f5f0e8] leading-none mb-4" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9), 0 0 50px rgba(0,0,0,0.6)" }}>
            Habitar el sur
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/30 to-transparent mx-auto my-6" />
          <p className="font-[var(--font-serif)] text-lg md:text-xl italic text-[#8a8580] max-w-lg mx-auto">
            Cinco instantes que definen un territorio
          </p>
        </motion.div>

      </div>

      {/* Cinematic panels */}
      {panels.map((panel, index) => (
        <Panel key={panel.id} panel={panel} index={index} />
      ))}

      {/* Closing card */}
      <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-[#050505]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1] }}
          className="text-center px-6"
        >
          <div className="w-px h-16 bg-gradient-to-b from-[#f5f0e8]/40 to-transparent mx-auto mb-8" />
          <p className="font-[var(--font-serif)] text-xl md:text-3xl italic text-[#f5f0e8]/50 max-w-xl mx-auto leading-relaxed">
            Proyecto Azafranes — un legado de silencio y naturaleza.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
