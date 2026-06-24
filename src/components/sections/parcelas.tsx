"use client";

import { FadeIn } from "@/components/animations";
import { Tour360Button } from "@/components/tour-360";

const parcelas = [
  {
    num: "01",
    nombre: "Bosque Norte",
    superficie: "5.000 – 7.000 m²",
    specs: [
      { key: "Orientación", val: "Noreste, luz matinal" },
      { key: "Bosque", val: "Lenga y coigüe centenario" },
      { key: "Vista", val: "Mar interior" },
      { key: "Agua", val: "Pozo disponible" },
      { key: "Luz", val: "En proyección" },
      { key: "Acceso", val: "Ripio consolidado" },
    ],
  },
  {
    num: "02",
    nombre: "Pradera Sur",
    superficie: "5.000 – 7.000 m²",
    specs: [
      { key: "Orientación", val: "Sur, protegida del viento" },
      { key: "Bosque", val: "Arrayanes y tepúes" },
      { key: "Vista", val: "Bosque nativo" },
      { key: "Agua", val: "Vertiente natural" },
      { key: "Luz", val: "En proyección" },
      { key: "Acceso", val: "Ripio consolidado" },
    ],
  },
  {
    num: "03",
    nombre: "Mirador del Este",
    superficie: "5.000 – 7.000 m²",
    specs: [
      { key: "Orientación", val: "Este, amanecer al mar" },
      { key: "Bosque", val: "Coigüe y canelo nativo" },
      { key: "Vista", val: "Mar y humedal" },
      { key: "Agua", val: "Pozo disponible" },
      { key: "Luz", val: "En proyección" },
      { key: "Acceso", val: "Ripio consolidado" },
    ],
  },
];

export function ParcelasSection() {
  return (
    <section
      id="parcelas"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#050505]"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 md:mb-20 lg:mb-24 max-w-2xl">
          <FadeIn direction="up" delay={0.1}>
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8a8580] font-[var(--font-sans)]">
              Las parcelas
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] leading-none mt-3">
              Tres umbrales al sur
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="font-[var(--font-serif)] text-lg md:text-xl italic text-[#8a8580] leading-relaxed mt-4">
              Parcelas de 5.000 m² en Chiloé. Porciones de tierra donde el sur se expresa sin filtro. Cada una
              es un mundo distinto, un umbral hacia lo esencial.
            </p>
          </FadeIn>
        </div>

        {/* Cards — editorial grid with 1px separator */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#f5f0e8]/8">
          {parcelas.map((parcela, idx) => (
            <FadeIn key={idx} direction="up" delay={0.15 + idx * 0.12}>
              <div className="group bg-[#050505] px-6 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14 flex flex-col gap-5 transition-colors duration-500 hover:bg-[#080808] h-full">
                {/* Número */}
                <span className="font-[var(--font-serif)] text-xs tracking-[0.25em] text-[#8a8580]">
                  {parcela.num}
                </span>

                {/* Nombre */}
                <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#f5f0e8] leading-none">
                  {parcela.nombre}
                </h3>

                {/* Superficie */}
                <span className="font-[var(--font-serif)] text-sm italic text-[#8a8580] font-light">
                  {parcela.superficie}
                </span>

                {/* Especificaciones */}
                <div className="flex flex-col mt-2">
                  {parcela.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-baseline py-2.5 border-b border-[#f5f0e8]/[0.04] last:border-b-0"
                    >
                      <span className="text-[0.65rem] tracking-[0.12em] uppercase text-[#8a8580] shrink-0 mr-3">
                        {spec.key}
                      </span>
                      <span className="font-[var(--font-serif)] text-xs italic text-[#f5f0e8]/70 text-right leading-relaxed">
                        {spec.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom note */}
        <FadeIn direction="up" delay={0.7}>
          <div className="mt-16 md:mt-20 text-center">
            <p className="font-[var(--font-serif)] text-sm md:text-base italic text-[#8a8580]/60 max-w-xl mx-auto leading-relaxed">
              Cada parcela en Dalcahue conserva su carácter único. Las dimensiones y
              características pueden variar según la topografía y ubicación
              dentro del predio.
            </p>
            <div className="mt-8">
              <Tour360Button variant="inline" label="Recorrer el terreno en 360°" />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />
    </section>
  );
}
