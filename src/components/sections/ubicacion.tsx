"use client";

import { FadeIn } from "@/components/animations";

/* ── Hand-drawn style SVG icons ── */

function HandPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Pin body — organic teardrop */}
      <path d="M12 21.5c-.5-.7-2.5-3.5-4.5-6.2-2-2.7-3.5-5-3.5-7.3 0-4.2 3.5-6.5 8-6.5s8 2.3 8 6.5c0 2.3-1.5 4.6-3.5 7.3-2 2.7-4 5.5-4.5 6.2z" />
      {/* Inner ring — highlights the center */}
      <circle cx="12" cy="8" r="2.8" strokeWidth="1" opacity=".6" />
      {/* Center dot */}
      <circle cx="12" cy="8" r="1.2" fill="currentColor" stroke="none" opacity=".8" />
    </svg>
  );
}

function HandGlobe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Outer circle — slightly irregular */}
      <path d="M12 2.5c-1.8.2-3.5.8-5 1.8-1.5 1-2.7 2.3-3.5 3.7-.8 1.5-1 3-1 4.5 0 1.5.2 3 1 4.5.8 1.4 2 2.7 3.5 3.7 1.5 1 3.2 1.6 5 1.8 1.8-.2 3.5-.8 5-1.8 1.5-1 2.7-2.3 3.5-3.7.8-1.5 1-3 1-4.5 0-1.5-.2-3-1-4.5-.8-1.4-2-2.7-3.5-3.7-1.5-1-3.2-1.6-5-1.8z" />
      {/* Latitude arcs */}
      <path d="M3.5 12h17" strokeWidth=".9" opacity=".4" />
      <path d="M4.5 8h15M4.5 16h15" strokeWidth=".7" opacity=".25" />
      {/* Longitude arcs */}
      <path d="M12 2.5v19" strokeWidth=".9" opacity=".4" />
      <path d="M8 3.5c-.2 2.5-.2 6 0 8.5M16 3.5c.2 2.5.2 6 0 8.5" strokeWidth=".7" opacity=".25" />
    </svg>
  );
}

const ubicacion = [
  {
    icon: HandPin,
    title: "Ubicación exacta",
    description: "Coordenadas precisas del Proyecto Azafranes en la Isla Grande de Chiloé.",
    href: "https://www.google.com/maps/search/-42.227748,+-73.683589?entry=tts&g_ep=EgoyMDI2MDYyMS4wIPu8ASoASAFQAw%3D%3D&skid=5792c15e-8806-4361-9e50-05ac7759dbe5",
    cta: "Ver en Google Maps",
  },
  {
    icon: HandGlobe,
    title: "Proyección del loteo",
    description: "Vista satelital del predio completo con la distribución de las 72 parcelas.",
    href: "https://google.com/maps/@-42.231881,-73.6748725,2230m/data=!3m2!1e3!4b1!4m2!6m1!1s17BhbcnOJMuk83Fq03Oxg5DoUVouWkcI?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D",
    cta: "Explorar loteo",
  },
];

export function UbicacionSection() {
  return (
    <section
      id="ubicacion"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#050505] overflow-hidden"
    >
      {/* Background closeup photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
        style={{ backgroundImage: "url('/assets/external/hojas-closeup.jpg')" }}
      />
      {/* Multi-stop dark overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(5,5,5,0.88) 0%,
            rgba(5,5,5,0.70) 12%,
            rgba(5,5,5,0.45) 30%,
            rgba(5,5,5,0.35) 50%,
            rgba(5,5,5,0.45) 70%,
            rgba(5,5,5,0.65) 88%,
            rgba(5,5,5,0.85) 100%
          )`,
        }}
      />
      {/* Subtle top border */}
      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent z-10" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section heading */}
        <div className="mb-16 md:mb-20 lg:mb-24 max-w-2xl">
          <FadeIn direction="up" delay={0.1}>
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8a8580] font-[var(--font-sans)]">
              Ubicación
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] leading-none mt-3" style={{ textShadow: "0 0 14px rgba(245,240,232,0.20), 0 2px 8px rgba(0,0,0,0.40)" }}>
              Donde la naturaleza
              <br />
              <span className="italic font-[var(--font-serif)] font-light text-[#f5f0e8] text-3xl md:text-4xl lg:text-5xl" style={{ textShadow: "0 0 10px rgba(245,240,232,0.18), 0 2px 6px rgba(0,0,0,0.35)" }}>
                se vuelve refugio
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {ubicacion.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={idx} direction="up" delay={0.2 + idx * 0.15}>
                <div className="group relative p-8 md:p-10 lg:p-12 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full border border-[#f5f0e8]/10 flex items-center justify-center mb-6 group-hover:border-[#f5f0e8]/25 transition-all duration-500">
                    <Icon className="w-5 h-5 text-[#f5f0e8]/50 group-hover:text-[#f5f0e8]/80 transition-all duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#f5f0e8] leading-none mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-[var(--font-serif)] text-sm md:text-base leading-relaxed text-[#8a8580] mb-8 flex-1">
                    {item.description}
                  </p>

                  {/* CTA Link */}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 font-[var(--font-sans)] text-xs tracking-[0.15em] uppercase text-[#f5f0e8]/60 hover:text-[#f5f0e8] transition-colors duration-300"
                  >
                    {item.cta}
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="w-3.5 h-3.5 text-[#f5f0e8]/30 group-hover/link:text-[#f5f0e8]/60 group-hover/link:translate-x-0.5 transition-all duration-300"
                    >
                      <path
                        d="M10 3l4 4-4 4M14 7H2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom note */}
        <FadeIn direction="up" delay={0.7}>
          <p className="mt-12 md:mt-16 text-center font-[var(--font-serif)] text-sm italic text-[#8a8580]/50 max-w-lg mx-auto leading-relaxed">
            Isla Grande de Chiloé, Región de Los Lagos, Chile — Lat. 42° S
          </p>
        </FadeIn>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />
    </section>
  );
}
