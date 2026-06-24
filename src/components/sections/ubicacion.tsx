"use client";

import { MapPin, Globe } from "lucide-react";
import { FadeIn } from "@/components/animations";

const ubicacion = [
  {
    icon: MapPin,
    title: "Ubicación exacta",
    description: "Coordenadas precisas del Proyecto Los Azafranes en la Isla Grande de Chiloé.",
    href: "https://google.com/maps/@-42.231881,-73.6748725,2230m/data=!3m2!1e3!4b1!4m2!6m1!1s17BhbcnOJMuk83Fq03Oxg5DoUVouWkcI?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D",
    cta: "Ver en Google Maps",
  },
  {
    icon: Globe,
    title: "Proyección del loteo",
    description: "Vista satelital del predio completo con la distribución de las 75 parcelas.",
    href: "https://www.google.com/maps/search/-42.227748,+-73.683589?entry=tts&g_ep=EgoyMDI2MDYyMS4wIPu8ASoASAFQAw%3D%3D&skid=5792c15e-8806-4361-9e50-05ac7759dbe5",
    cta: "Explorar loteo",
  },
];

export function UbicacionSection() {
  return (
    <section
      id="ubicacion"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#050505]"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 md:mb-20 lg:mb-24 max-w-2xl">
          <FadeIn direction="up" delay={0.1}>
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8a8580] font-[var(--font-sans)]">
              Ubicación
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] leading-none mt-3">
              Donde la naturaleza
              <br />
              <span className="italic font-[var(--font-serif)] font-light text-[#f5f0e8]/60 text-3xl md:text-4xl lg:text-5xl">
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
                <div className="group relative bg-[#0a0a0a] border border-[#f5f0e8]/5 hover:border-[#f5f0e8]/15 transition-all duration-500 p-8 md:p-10 lg:p-12 flex flex-col h-full">
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

                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#f5f0e8]/0 group-hover:border-[#f5f0e8]/10 transition-all duration-500" />
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
