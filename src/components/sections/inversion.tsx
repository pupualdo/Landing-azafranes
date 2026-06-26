"use client";

import { FadeIn } from "@/components/animations";

/* ── Pencil-sketch SVG icons ──
   Graphite-pencil aesthetic: loose overlapping strokes, hatching,
   irregular lines, stray marks — like an artist's sketchbook. */

function SketchCompass({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Outer ring — loose double stroke */}
      <path d="M20 3c-2.5.3-5 1-7 2.5C11 7 8 10 7.5 13c-.5 2.5-.2 5 .5 7 .5 2 2 3.5 3.5 5 1.5 1.5 3.5 2.5 5.5 3 2 .5 4 .5 6 0 2-.5 3.5-1.5 5-2.5 1.5-1.5 2.5-3 3-5 .5-2 .8-4 .5-6-.3-2-1-3.5-2-5-1.5-1.5-3-2.5-5-3.5-1.5-.5-3.5-1-5.5-1z" strokeWidth="1.3" opacity=".55" />
      <path d="M20 3.5c-2 .2-4 .8-5.5 2-1.5 1.2-2.5 2.5-3 4-.5 1.5-.5 3 0 4.5.5 1.5 1.3 2.8 2.5 3.8 1.3 1 2.8 1.5 4.5 1.8 1.5.2 3.2.2 4.7-.2 1.5-.3 2.8-1 4-2 1.2-1 2-2.3 2.5-3.8.3-1.5.3-3.2 0-4.7-.4-1.5-1-2.8-2-3.8-1-1-2.3-2-4-2.5-1.7-.5-3.5-.6-5.2-.6z" strokeWidth=".9" opacity=".35" />
      {/* Compass rose — sketchy strokes */}
      <path d="M20 6v11M20 16v5" strokeWidth="1.1" opacity=".6" />
      <path d="M20 6v2M20 14v3" strokeWidth=".8" opacity=".35" />
      <path d="M9 14h6M18 14h8M22 14h3" strokeWidth="1" opacity=".45" />
      {/* Diagonal ticks */}
      <path d="M12.5 9.5l3.5 3.5M27 10l-3.5 3.5M12.5 18.5l3-3M27 18l-3.5-3" strokeWidth=".9" opacity=".3" />
      {/* Center scribble */}
      <circle cx="20" cy="14" r="1.8" fill="currentColor" stroke="none" opacity=".7" />
      <circle cx="20" cy="14" r="2.5" strokeWidth=".7" opacity=".25" />
    </svg>
  );
}

function SketchGem({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Diamond — loose double contour */}
      <path d="M20 4c-1.5.4-3 1-4.2 1.8L9.5 9.5c-1.2.8-2 1.8-2.5 3-.6 1.2-.8 2.5-.8 3.8 0 1.2.2 2.5.8 3.8.5 1.2 1.3 2.2 2.5 3l6.3 3.7c1.2.6 2.5 1 4 1.2 1.5.2 3 .2 4.5-.2 1.5-.3 2.8-.8 4-1.5 1.2-.7 2.3-1.5 3-2.5.7-1 1.3-2.2 1.7-3.5.3-1.3.3-2.7 0-4-.2-1.3-.8-2.5-1.5-3.5-.8-1-1.8-2-3-2.8l-6.3-3.5c-1-.4-2.2-.8-3.7-1z" strokeWidth="1.3" opacity=".55" />
      <path d="M20 4.5c-1 .3-2.2.7-3.2 1.3l-6 3.5c-1 .6-1.7 1.5-2.2 2.5-.5 1-.7 2-.7 3.2 0 1 .2 2 .7 3 .4 1 1.1 1.8 2 2.5l6 3.8c1 .5 2.2 1 3.4 1.2 1.2.2 2.5.2 3.7-.2 1.2-.3 2.3-.7 3.3-1.3 1-.6 1.8-1.3 2.5-2 .7-1 1.1-1.8 1.3-2.8.3-1 .3-2.2 0-3.3-.2-1-.6-2-1.2-2.8-.7-1-1.5-1.7-2.5-2.3L24.8 8c-1-.5-2-.8-3.3-1" strokeWidth=".9" opacity=".35" />
      {/* Facet lines — sketchy hatching */}
      <path d="M20 5v30M9 12L20 20M31 12L20 20M9 28L20 20M31 28L20 20" strokeWidth=".9" opacity=".35" />
      <path d="M13 10L20 20M27 10L20 20M13 30L20 20M27 30L20 20" strokeWidth=".6" opacity=".2" />
      {/* Center highlight scribble */}
      <circle cx="20" cy="20" r="1.2" fill="currentColor" stroke="none" opacity=".75" />
      <path d="M18.5 18.5l3 3M21.5 18.5l-3 3" strokeWidth=".6" opacity=".25" />
    </svg>
  );
}

function SketchGrowth({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Ground — sketchy horizontal strokes */}
      <path d="M3 33.5c3-.3 5.5-.5 8-.5 3 0 5.5.2 8 .5 2.5.3 5 .5 8 .5" strokeWidth="1.2" opacity=".4" />
      <path d="M5 34.5c2-.2 4.5-.3 7-.3 3 0 5.5.2 7.5.3 2.3.2 4.8.3 7.5.3" strokeWidth=".8" opacity=".25" />
      {/* Stem — wobbling vertical */}
      <path d="M20 32c-.3-2-.5-5-.5-9 0-3.5.2-7 .5-10 .3-2.5.7-5 1.2-7" strokeWidth="1.4" opacity=".65" />
      <path d="M19.2 31c-.2-2-.4-5-.4-9 0-3.5.2-7 .4-10 .2-2.5.5-5 1-7" strokeWidth=".8" opacity=".3" />
      {/* Left leaves — loose strokes */}
      <path d="M20 26c-1.2-.4-3-1.2-4.5-2.2-1.5-1-2.8-2-3.8-3" strokeWidth="1.1" opacity=".55" />
      <path d="M20 25.5c-1-.3-2.5-1-3.8-1.8-1.2-.8-2.2-1.8-3.2-2.7" strokeWidth=".7" opacity=".25" />
      {/* Right leaves */}
      <path d="M20 22c1-.5 2.5-1.3 4-2.2 1.5-1 2.8-2 3.8-3" strokeWidth="1.1" opacity=".55" />
      <path d="M20 21.5c.8-.4 2-.1 3.2-1.8 1.2-.8 2.2-1.7 3-2.5" strokeWidth=".7" opacity=".25" />
      {/* Top shoots */}
      <path d="M20 16c-.8-.3-2-.8-2.8-1.5-.8-.6-1.3-1.2-1.8-2" strokeWidth="1" opacity=".45" />
      <path d="M20 16c.7-.3 1.8-.7 2.5-1.2.8-.5 1.3-1 1.8-1.8" strokeWidth="1" opacity=".45" />
      {/* Tiny bud at top */}
      <circle cx="20" cy="6.5" r="1.5" strokeWidth="1" opacity=".5" />
      <circle cx="20" cy="6.5" r=".7" fill="currentColor" stroke="none" opacity=".6" />
    </svg>
  );
}

const highlights = [
  {
    icon: SketchCompass,
    label: "Destino emergente",
    description:
      "Chiloé despierta al mundo como el nuevo horizonte del sur austral. Quien llega hoy, llega primero.",
  },
  {
    icon: SketchGem,
    label: "Proyectos escasos",
    description:
      "En una isla de bosques infinitos, los proyectos bien diseñados caben en una mano. Proyecto Azafranes es uno de ellos.",
  },
  {
    icon: SketchGrowth,
    label: "Plusvalía sostenida",
    description:
      "La tierra no se fabrica. En Chiloé, cada metro de naturaleza protegida vale más que el anterior.",
  },
];

export function InversionSection() {
  return (
    <section
      id="inversion"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#050505] overflow-hidden"
    >
      {/* Mar animation background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/mar-austral.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1]" style={{
        background: `linear-gradient(
          to bottom,
          #050505 0%,
          rgba(5,5,5,0.92) 6%,
          rgba(5,5,5,0.80) 14%,
          rgba(5,5,5,0.65) 24%,
          rgba(5,5,5,0.52) 38%,
          rgba(5,5,5,0.48) 50%,
          rgba(5,5,5,0.52) 62%,
          rgba(5,5,5,0.65) 76%,
          rgba(5,5,5,0.80) 86%,
          rgba(5,5,5,0.92) 94%,
          #050505 100%
        )`
      }} />
      {/* Subtle top border */}
      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />

      <div className="mx-auto max-w-7xl relative z-[2]">
        {/* Two-column grid: main text + quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Text column */}
          <div className="lg:col-span-7 space-y-10 md:space-y-14">
            {/* Heading */}
            <div className="space-y-3">
              <FadeIn direction="up" delay={0.1}>
                <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8a8580] font-[var(--font-sans)]">
                  Nuestra Historia
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className="flex items-center gap-8 md:gap-10 lg:gap-12">
                  <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] leading-none">
                    Patrimonio
                    <br />
                    <span className="italic font-[var(--font-serif)] font-light text-[#f5f0e8]/60 text-3xl md:text-4xl lg:text-5xl">
                      que florece
                    </span>
                  </h2>
                  {/* Latitudes Australes logo — transparent PNG */}
                  <img
                    src="/logo-latitudes-australes.png"
                    alt="Latitudes Australes"
                    className="w-40 md:w-52 lg:w-60 h-auto flex-shrink-0 opacity-90"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Body paragraphs */}
            <div className="space-y-6 md:space-y-8">
              <FadeIn direction="up" delay={0.4}>
                <p className="font-[var(--font-serif)] text-base md:text-lg leading-relaxed text-[#f5f0e8]/80">
                  Con m&aacute;s de 7 a&ntilde;os de experiencia, 12 proyectos desarrollados
                  y m&aacute;s de 300 terrenos vendidos, Latitudes Australes presenta
                  Proyecto Azafranes: su d&eacute;cimo tercer proyecto de parcelas, ubicado en
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
                <div key={item.label} className="space-y-5 group">
                  {/* Icon — free-floating pencil sketch, no geometric container */}
                  <div className="flex items-center gap-4">
                    <Icon className="w-10 h-10 text-[#f5f0e8]/45 group-hover:text-[#f5f0e8]/75 transition-all duration-500" />
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
