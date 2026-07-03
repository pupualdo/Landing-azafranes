"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/animations";

export function ConceptoSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const frameY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      id="concepto"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#050505]"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Two-column grid: text + decorative image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Text column */}
          <div className="lg:col-span-7 space-y-10 md:space-y-14">
            {/* Heading */}
            <div className="space-y-3">
              <FadeIn direction="up" delay={0.1}>
                <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8a8580] font-[var(--font-sans)]">
                  El proyecto
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] leading-none">
                  Concepto
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p className="font-[var(--font-serif)] text-lg md:text-xl italic text-[#8a8580] leading-relaxed">
                  Donde el sur encuentra su voz m&aacute;s &iacute;ntima.
                </p>
              </FadeIn>
            </div>

            {/* Body paragraphs */}
            <div className="space-y-6 md:space-y-8">
              <FadeIn direction="up" delay={0.4}>
                <p className="font-[var(--font-serif)] text-base md:text-lg leading-relaxed text-[#f5f0e8]/80">
                  En el coraz&oacute;n de la Isla Grande de Chilo&eacute;, donde
                  se impone un bosque ancestral nativo rodeado de matices de
                  verdes intensos, nace Proyecto Azafranes. Cuarenta y nueve
                  hect&aacute;reas de parcelas en venta en Chiloé que no se domestican, se habitan. Un paisaje
                  de ensue&ntilde;o donde compartir en familia otra bella puesta
                  de sol en la parcela propia.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                <p className="font-[var(--font-serif)] text-base md:text-lg leading-relaxed text-[#f5f0e8]/80">
                  Setenta y cinco terrenos en venta en Chiloé, cada uno distinto. Cada parcela ha sido
                  trazada respetando la topograf&iacute;a original. El proyecto
                  cuenta con caminos de ripio que permiten el acceso directo a
                  cada parcela en veh&iacute;culo. La arquitectura se integra
                  sin imponerse: madera, piedra, luz&mdash;materias que el sur
                  entiende.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.6}>
                <p className="font-[var(--font-serif)] text-base md:text-lg leading-relaxed text-[#f5f0e8]/80">
                  Aqu&iacute; el tiempo se mide en estaciones, no en horas.
                  Canelo, array&aacute;n, coihue, ulmo y lenga custodian el
                  silencio. Chucaos, bandurrias, loros y pud&uacute;es habitan
                  el sotobosque. Comprar terreno en Chiloé de bosque nativo protector no es adquirir tierra: es
                  resguardar un patrimonio de aire limpio, de vida lenta, de
                  naturaleza intacta.
                </p>
              </FadeIn>
            </div>

            {/* Elegant stats row */}
            <FadeIn direction="up" delay={0.7}>
              <div className="grid grid-cols-3 gap-6 pt-6 md:pt-8 border-t border-[#f5f0e8]/10">
                <div className="space-y-1">
                  <p className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#f5f0e8]">
                    49
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#8a8580] font-[var(--font-sans)]">
                    Hect&aacute;reas
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#f5f0e8]">
                    72
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#8a8580] font-[var(--font-sans)]">
                    Parcelas
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#f5f0e8]">
                    Bosque
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#8a8580] font-[var(--font-sans)]">
                    Nativo
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Párrafo descriptivo — debajo de los stats */}
            <FadeIn direction="up" delay={0.75}>
              <div className="pt-8 md:pt-10 space-y-4">
                <p className="font-[var(--font-serif)] text-base md:text-lg leading-relaxed text-[#f5f0e8]/80">
                  En Azafranes, el bosque nativo de Chiloé no es el paisaje de
                  fondo, es el proyecto mismo. 72 parcelas de 5.000 m² trazadas
                  entre árboles y naturaleza, a pocos minutos de Dalcahue y con
                  acceso directo desde la Ruta 5 Sur. Cada terreno llega con
                  título propio, caminos interiores y hay posibilidad de
                  financiamiento directo: sin bancos, sin intermediarios.
                </p>
                <p className="font-[var(--font-serif)] text-lg md:text-xl italic text-[#f5f0e8]/70 leading-relaxed">
                  Una oportunidad de adquirir tierra en la Isla Grande de Chiloé
                  antes de que deje de estar disponible.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Decorative image column — parallax */}
          <div className="lg:col-span-5">
            <FadeIn direction="right" delay={0.3}>
              <div
                ref={imageRef}
                className="relative aspect-[3/4] w-full overflow-hidden group"
              >
                {/* Image with parallax */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('/assets/photos/closeups/closeup_01_moss.jpg')",
                    y: imageY,
                    scale: 1.08,
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-[#050505]/20" />
                {/* Decorative frame — counter-parallax */}
                <motion.div
                  className="absolute inset-4 border border-[#f5f0e8]/10 pointer-events-none"
                  style={{ y: frameY }}
                />
                {/* Bottom caption */}
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-[var(--font-serif)] text-sm italic text-[#f5f0e8]/60">
                    Bosque nativo de Chilo&eacute;
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />
    </section>
  );
}
