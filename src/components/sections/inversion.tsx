"use client";

import { FadeIn } from "@/components/animations";
import { TrendingUp, Mountain, Compass } from "lucide-react";

const highlights = [
  {
    icon: Compass,
    label: "Destino emergente",
    description:
      "Chiloé despierta al mundo como el nuevo horizonte del sur austral. Quien llega hoy, llega primero.",
  },
  {
    icon: Mountain,
    label: "Proyectos escasos",
    description:
      "En una isla de bosques infinitos, los proyectos bien diseñados caben en una mano. Proyecto Los Azafranes es uno de ellos.",
  },
  {
    icon: TrendingUp,
    label: "Plusvalía sostenida",
    description:
      "La tierra no se fabrica. En Chiloé, cada metro de naturaleza protegida vale más que el anterior.",
  },
];

export function InversionSection() {
  return (
    <section
      id="inversion"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#050505]"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Two-column grid: main text + quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Text column */}
          <div className="lg:col-span-7 space-y-10 md:space-y-14">
            {/* Heading */}
            <div className="space-y-3">
              <FadeIn direction="up" delay={0.1}>
                <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8a8580] font-[var(--font-sans)]">
                  Inversión
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] leading-none">
                  Patrimonio
                  <br />
                  <span className="italic font-[var(--font-serif)] font-light text-[#f5f0e8]/60 text-3xl md:text-4xl lg:text-5xl">
                    que florece
                  </span>
                </h2>
              </FadeIn>
            </div>

            {/* Body paragraphs */}
            <div className="space-y-6 md:space-y-8">
              <FadeIn direction="up" delay={0.4}>
                <p className="font-[var(--font-serif)] text-base md:text-lg leading-relaxed text-[#f5f0e8]/80">
                  Con m&aacute;s de 7 a&ntilde;os de experiencia, 12 proyectos desarrollados
                  y m&aacute;s de 300 terrenos vendidos, Latitudes Australes presenta
                  Proyecto Los Azafranes: su d&eacute;cimo tercer proyecto de parcelas, ubicado en
                  la Isla Grande de Chilo&eacute;. Si buscas terrenos en venta en Chiloé con financiamiento directo, aquí podr&aacute;s hacer crecer tu
                  familia, tu inversi&oacute;n y tu patrimonio.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                <p className="font-[var(--font-serif)] text-base md:text-lg leading-relaxed text-[#f5f0e8]/80">
                  Comprar tierra en Chiloé no es una decisión financiera
                  cualquiera. La isla grande del sur —con sus bosques
                  milenarios, sus mareas y su luz horizontal— se perfila como
                  el próximo capítulo del desarrollo inmobiliario patagónico.
                  Pero hay algo que el mapa no muestra: los proyectos bien
                  concebidos son extraordinariamente escasos.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.6}>
                <p className="font-[var(--font-serif)] text-base md:text-lg leading-relaxed text-[#f5f0e8]/80">
                  Quien invierte en terrenos en Chilo&eacute; no solo asegura un refugio
                  para el descanso. Siembra un patrimonio que madura con las
                  estaciones, en un rinc&oacute;n del mundo donde la naturaleza sigue
                  siendo la protagonista y el ruido urbano no llega. La plusvalía de los terrenos en Chiloé no se mide en meses: se cuenta en décadas de valorización silenciosa.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Quote column */}
          <div className="lg:col-span-5 lg:pt-16">
            <FadeIn direction="right" delay={0.3}>
              <div className="relative">
                {/* Opening quote mark */}
                <span className="absolute -top-6 -left-2 text-6xl md:text-7xl font-[var(--font-heading)] text-[#f5f0e8]/10 leading-none select-none">
                  &ldquo;
                </span>
                <blockquote className="relative z-10 pl-6 md:pl-8 border-l border-[#f5f0e8]/15">
                  <p className="font-[var(--font-serif)] text-xl md:text-2xl lg:text-3xl italic leading-relaxed text-[#f5f0e8]/70">
                    Invertir en tierra es comprar un bien que no se deprecia. En
                    Chiloé, donde cada proyecto cuidado es una rareza, esa tierra
                    vale más que su extensión.
                  </p>
                  <footer className="mt-6 font-[var(--font-sans)] text-xs tracking-[0.2em] uppercase text-[#8a8580]">
                    &mdash; El valor de lo escaso
                  </footer>
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Three highlights row */}
        <FadeIn direction="up" delay={0.7}>
          <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pt-12 md:pt-16 border-t border-[#f5f0e8]/10">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="space-y-4 group">
                  {/* Icon */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full border border-[#f5f0e8]/10 flex items-center justify-center group-hover:border-[#f5f0e8]/25 transition-all duration-500">
                      <Icon className="w-4 h-4 text-[#f5f0e8]/50 group-hover:text-[#f5f0e8]/80 transition-all duration-500" />
                    </div>
                    <h3 className="font-[var(--font-heading)] text-sm tracking-[0.15em] uppercase text-[#f5f0e8]/80">
                      {item.label}
                    </h3>
                  </div>
                  {/* Description */}
                  <p className="font-[var(--font-serif)] text-sm md:text-base leading-relaxed text-[#f5f0e8]/50 group-hover:text-[#f5f0e8]/70 transition-all duration-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />
    </section>
  );
}
