"use client";

import { FadeIn } from "@/components/animations";
import { Tour360Button } from "@/components/tour-360";

export function MasterplanSection() {
  return (
    <section
      id="masterplan"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#050505]"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Text explanation — full width */}
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-14">
          {/* Heading */}
          <div className="space-y-3">
            <FadeIn direction="up" delay={0.1}>
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8a8580] font-[var(--font-sans)]">
                El plano
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 md:gap-6">
                <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] leading-none">
                  Masterplan
                </h2>
                <div className="flex-shrink-0">
                  <Tour360Button variant="masterplan" label="Masterplan en 360°" />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="font-[var(--font-serif)] text-lg md:text-xl italic text-[#8a8580] leading-relaxed">
                Un territorio trazado por la topograf&iacute;a misma.
              </p>
            </FadeIn>
          </div>

          {/* Body paragraphs */}
          <div className="space-y-6 md:space-y-8">
            <FadeIn direction="up" delay={0.4}>
              <p className="font-[var(--font-serif)] text-base md:text-lg leading-relaxed text-[#f5f0e8]/80">
                El masterplan de Proyecto Azafranes no se impuso sobre el paisaje:
                emergi&oacute; de &eacute;l. Cada sector fue delimitado
                siguiendo las curvas de nivel, los claros naturales del bosque
                y la direcci&oacute;n de los vientos predominantes. No hay
                dos parcelas id&eacute;nticas, porque la tierra no se repite.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <p className="font-[var(--font-serif)] text-base md:text-lg leading-relaxed text-[#f5f0e8]/80">
                72 terrenos articulan las 49 hect&aacute;reas,
                conectados por una red de caminos interiores que serpentean
                respetando la pendiente natural. Las &aacute;reas de bosque
                nativo, humedal y pradera abierta act&uacute;an como
                pulmones del proyecto, con 10 hect&aacute;reas destinadas
                a reserva ecol&oacute;gica permanente.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <p className="font-[var(--font-serif)] text-base md:text-lg leading-relaxed text-[#f5f0e8]/80">
                El acceso &uacute;nico desde el camino vecinal asegura
                privacidad absoluta. Terrenos con acceso directo desde la ruta 5 sur en Chiloé. Desde all&iacute;, los senderos se
                despliegan como ramas de un &aacute;rbol, llevando a cada
                parcela sin alterar el suelo m&aacute;s de lo necesario.
                El norte magn&eacute;tico orienta las visuales: todas las
                parcelas miran al bosque, al humedal o al mar interior de
                Chilo&eacute;.
              </p>
            </FadeIn>
          </div>

          {/* Key statistics bar */}
          <FadeIn direction="up" delay={0.7}>
            <div className="grid grid-cols-2 gap-6 pt-6 md:pt-8 border-t border-[#f5f0e8]/10">
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
                  10
                </p>
                <p className="text-xs tracking-[0.15em] uppercase text-[#8a8580] font-[var(--font-sans)]">
                  hect&aacute;reas de reserva natural
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />
    </section>
  );
}
