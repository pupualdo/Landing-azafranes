"use client";

import { MapPin, Droplets, Zap, Wifi, Trees, Bird } from "lucide-react";
import { FadeIn } from "@/components/animations";

const locations = [
  { name: "Aeropuerto de Castro", time: "15 min" },
  { name: "Dalcahue", time: "20 min" },
  { name: "Castro", time: "30 min" },
  { name: "Curaco de Vélez", time: "25 min" },
  { name: "Quemchi", time: "30 min" },
];

const servicios = [
  {
    icon: Droplets,
    label: "Agua",
    desc: "Abundancia de agua subterránea. Es posible obtener agua de pozo a muy poca profundidad. Coordinaremos la construcción comunitaria de pozos compartidos.",
  },
  {
    icon: Zap,
    label: "Luz",
    desc: "Concesión eléctrica aprobada por la empresa local. La postación está en la entrada del proyecto. Cada propietario puede solicitar la instalación.",
  },
  {
    icon: Wifi,
    label: "Conectividad",
    desc: "El lugar cuenta con zonas con señal de celular. Factibilidad de internet rural para mantenerte conectado cuando lo necesites.",
  },
  {
    icon: Trees,
    label: "Flora nativa",
    desc: "Canelo, arrayán, laurel, roble, coihue, raulí, ciruelillo, avellano, radal, ulmo, luma, meli, tepu, quiaca y maqui.",
  },
  {
    icon: Bird,
    label: "Fauna",
    desc: "Zorzal, tiuque, lechuza, loros, bandurrias, peucos, treiles, jotes, chiflador, torcazas, chucaos, caranchos, loicas, tordos y pudúes.",
  },
];

export function UbicacionSection() {
  return (
    <section
      id="ubicacion"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#050505]"
    >
      {/* Section heading */}
      <FadeIn className="max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="text-center md:text-left">
          <span className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#8a8580] font-[var(--font-serif)]">
            Ubicación
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-[var(--font-heading)] text-[#f5f0e8] mt-4 leading-tight">
            Donde la naturaleza
            <br />
            <span className="italic font-[var(--font-serif)] font-light text-[#f5f0e8]/70">
              se vuelve refugio
            </span>
          </h2>
        </div>
      </FadeIn>

      {/* Two-column layout: map placeholder + info */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-stretch">
        {/* Column 1: Map placeholder (3/5) */}
        <FadeIn
          direction="left"
          className="lg:col-span-3 relative overflow-hidden rounded-sm min-h-[320px] md:min-h-[420px] lg:min-h-[500px] group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#111111] to-[#0a0a0a]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(245,240,232,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245,240,232,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-[#050505]/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="absolute inset-0 rounded-full bg-[#f5f0e8]/5 animate-ping" style={{ animationDuration: "3s" }} />
            <span className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f5f0e8]/30 opacity-75" style={{ animationDuration: "2.5s" }} />
              <span className="relative inline-flex rounded-full h-5 w-5 bg-[#f5f0e8]/80 shadow-[0_0_20px_rgba(245,240,232,0.3)]" />
            </span>
          </div>
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.06]"
            viewBox="0 0 600 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <ellipse cx="300" cy="250" rx="200" ry="160" stroke="#f5f0e8" strokeWidth="0.5" />
            <ellipse cx="300" cy="250" rx="260" ry="210" stroke="#f5f0e8" strokeWidth="0.5" />
            <ellipse cx="300" cy="250" rx="320" ry="260" stroke="#f5f0e8" strokeWidth="0.5" />
            <ellipse cx="300" cy="250" rx="380" ry="310" stroke="#f5f0e8" strokeWidth="0.5" />
            <path d="M100 420 Q300 480 500 420" stroke="#f5f0e8" strokeWidth="0.5" opacity="0.4" />
            <path d="M80 380 Q300 440 520 380" stroke="#f5f0e8" strokeWidth="0.4" opacity="0.3" />
          </svg>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] md:text-xs tracking-[0.15em] uppercase text-[#8a8580]/60">
            <span>Chiloé — Archipiélago</span>
            <span>Lat. 42° S</span>
          </div>
          <div className="absolute inset-0 border border-white/[0.04] rounded-sm pointer-events-none group-hover:border-white/[0.08] transition-all duration-700" />
        </FadeIn>

        {/* Column 2: Information (2/5) */}
        <FadeIn
          direction="right"
          delay={0.15}
          className="lg:col-span-2 flex flex-col justify-center"
        >
          <div className="space-y-8">
            {/* Main location */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-[#f5f0e8]/60 shrink-0" />
                <span className="text-xs tracking-[0.25em] uppercase text-[#8a8580] font-[var(--font-serif)]">
                  Ubicación
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-[var(--font-heading)] text-[#f5f0e8] leading-snug">
                Sector El Prado
              </h3>
              <p className="text-base md:text-lg font-[var(--font-serif)] font-light italic text-[#f5f0e8]/60 mt-1">
                Parcelas cerca de Dalcahue, Chiloé
              </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-[1px] bg-white/10" />

            {/* Proximity */}
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase text-[#8a8580] mb-5 font-[var(--font-serif)]">
                Cercanía
              </h4>
              <ul className="space-y-3">
                {locations.map((loc) => (
                  <li
                    key={loc.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-sm md:text-base text-[#f5f0e8]/80 font-[var(--font-serif)] font-light">
                      {loc.name}
                    </span>
                    <span className="text-xs md:text-sm font-[var(--font-serif)] italic text-[#f5f0e8]/50 whitespace-nowrap">
                      {loc.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="w-12 h-[1px] bg-white/10" />

            {/* Environment */}
            <div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5f0e8]/30 mt-2 shrink-0" />
                <p className="text-sm md:text-base font-[var(--font-serif)] font-light italic text-[#f5f0e8]/60 leading-relaxed">
                  Entorno natural protegido. Terrenos en la Isla de Chiloé con bosque nativo, humedales y vistas
                  abiertas al mar interior. Un territorio donde el paisaje
                  permanece intacto.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* ── Servicios, Flora & Fauna ── */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-28">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {servicios.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div key={i} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full border border-[#f5f0e8]/10 flex items-center justify-center shrink-0 group-hover:border-[#f5f0e8]/25 transition-all duration-500">
                      <Icon className="w-3.5 h-3.5 text-[#f5f0e8]/50 group-hover:text-[#f5f0e8]/80 transition-all duration-500" />
                    </div>
                    <h4 className="text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/70 font-[var(--font-sans)]">
                      {srv.label}
                    </h4>
                  </div>
                  <p className="text-sm font-[var(--font-serif)] text-[#8a8580] leading-relaxed pl-11">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>

      {/* Bottom decorative line */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-20">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>
    </section>
  );
}
