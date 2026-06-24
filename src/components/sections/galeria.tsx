"use client";

import { FadeIn } from "@/components/animations";
import { motion } from "framer-motion";

// ─── Gallery images data ─────────────────────────────────────────────────────
// Asymmetric Pinterest-style masonry layout. 12 photos selected from the
// complete Azafranes collection — forest interiors, paths, sky, wetlands.
const gallery = [
  { src: "/assets/photos/galeria/af_01.jpg", alt: "Bosque nativo de Chiloé: musgo, corteza y profundidad verde", aspect: "4 / 5" },
  { src: "/assets/photos/galeria/af_02.jpg", alt: "Interior del bosque chilote: luz tamizada entre copas centenarias", aspect: "16 / 10" },
  { src: "/assets/photos/galeria/af_03.jpg", alt: "Sendero natural entre parcelas en Dalcahue, Chiloé", aspect: "3 / 4" },
  { src: "/assets/photos/galeria/af_04.jpg", alt: "Helechos vibrantes del sotobosque: el verde de Chiloé en primer plano", aspect: "1 / 1" },
  { src: "/assets/photos/galeria/af_05.jpg", alt: "Bosque profundo: texturas y capas de vegetación nativa", aspect: "16 / 9" },
  { src: "/assets/photos/galeria/af_06.jpg", alt: "Humedal y turberas: el paisaje vivo de la Isla Grande", aspect: "3 / 4" },
  { src: "/assets/photos/galeria/af_08.jpg", alt: "Cielo azul sobre el dosel del bosque de Chiloé", aspect: "4 / 5" },
  { src: "/assets/photos/galeria/af_09.jpg", alt: "Copas de árboles y nubes: la inmensidad del sur desde tierra", aspect: "1 / 1" },
  { src: "/assets/photos/galeria/af_10.jpg", alt: "Eucaliptos y claros de luz: diversidad del terreno Proyecto Los Azafranes", aspect: "3 / 2" },
  { src: "/assets/photos/galeria/af_11.jpg", alt: "Linde del bosque con cielo abierto: parcelas con vista en Chiloé", aspect: "9 / 16" },
  { src: "/assets/photos/galeria/af_12.jpg", alt: "Sendero entre líquenes y musgo: el suelo vivo del bosque sur", aspect: "4 / 3" },
  { src: "/assets/photos/galeria/af_14.jpg", alt: "Camino natural entre parcelas: acceso y privacidad en Proyecto Los Azafranes", aspect: "1 / 1" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function GaleriaSection() {
  return (
    <section
      id="galeria"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#050505]"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* ── Heading ─────────────────────────────────────────────────── */}
        <FadeIn className="max-w-7xl mx-auto mb-16 md:mb-20">
          <div className="text-center space-y-4">
            <FadeIn direction="up" delay={0.1}>
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8a8580] font-[var(--font-sans)]">
Proyecto Los Azafranes
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] leading-none">
                Galería
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="font-[var(--font-serif)] text-lg md:text-xl italic text-[#8a8580] max-w-xl mx-auto leading-relaxed">
                El sur no se describe, se contempla. Cada imagen es una
                ventana al alma de Chiloé.
              </p>
            </FadeIn>
          </div>
        </FadeIn>

        {/* ── True Masonry via CSS columns ──────────────────────────── */}
        {/* 1 col mobile, 2 cols tablet, 3 cols desktop — per spec */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 lg:gap-6 space-y-4 md:space-y-5 lg:space-y-6">
          {gallery.map((image, idx) => (
            <FadeIn key={idx} direction="up" delay={0.08 + idx * 0.05}>
              <motion.div
                className="group relative overflow-hidden rounded-sm break-inside-avoid cursor-pointer"
                whileHover={{ scale: 1.012 }}
                transition={{ duration: 0.4, ease: [0.77, 0, 0.18, 1] }}
              >
                {/* Image container with dynamic aspect ratio */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: image.aspect }}
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url('${image.src}')` }}
                  />

                  {/* Overlay — dark gradient that deepens on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-[#050505]/10 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Caption — slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="font-[var(--font-serif)] text-xs md:text-sm italic text-[#f5f0e8]/80 leading-relaxed">
                      {image.alt}
                    </p>
                  </div>

                  {/* Decorative corner brackets */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#f5f0e8]/0 group-hover:border-[#f5f0e8]/25 transition-all duration-500" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#f5f0e8]/0 group-hover:border-[#f5f0e8]/25 transition-all duration-500" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* ── Footer note ───────────────────────────────────────────── */}
        <FadeIn direction="up" delay={0.8}>
          <div className="mt-16 md:mt-20 text-center">
            <p className="font-[var(--font-sans)] text-xs tracking-[0.2em] uppercase text-[#8a8580]/50">
              Fotografía &mdash; La mirada del sur
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />
    </section>
  );
}
