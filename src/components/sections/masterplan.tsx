"use client";

import { FadeIn } from "@/components/animations";

export function MasterplanSection() {
  return (
    <section
      id="masterplan"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#050505]"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Two-column grid: SVG masterplan + explanatory text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Left column — Masterplan SVG (7/12) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm group">
                {/* Dark gradient base */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c0b0a] via-[#0f0e0d] to-[#080808]" />

                {/* Subtle grid pattern — architectural blueprint feel */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(245,240,232,0.4) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(245,240,232,0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: "30px 30px",
                  }}
                />

                {/* Inner glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-[#050505]/20" />

                {/* Decorative border frame */}
                <div className="absolute inset-3 border border-[#f5f0e8]/8 pointer-events-none" />

                {/* ============ SVG MASTERPLAN ============ */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 800 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Outer property boundary */}
                  <path
                    d="M80 80 C120 40, 300 30, 500 50 C650 65, 740 100, 760 200 C780 320, 770 430, 720 500 C670 560, 500 580, 300 570 C150 560, 60 520, 40 420 C20 320, 30 150, 80 80Z"
                    stroke="rgba(245,240,232,0.15)"
                    strokeWidth="1"
                    fill="none"
                    className="group-hover:opacity-80 transition-opacity duration-700"
                  />

                  {/* ===== NATURAL AREAS (translucent blobs) ===== */}

                  {/* Bosque Nativo Norte — top-left */}
                  <ellipse
                    cx="180"
                    cy="150"
                    rx="90"
                    ry="60"
                    fill="rgba(80,120,80,0.08)"
                    stroke="rgba(80,120,80,0.2)"
                    strokeWidth="0.5"
                    transform="rotate(-15, 180, 150)"
                  />
                  <text
                    x="180"
                    y="148"
                    textAnchor="middle"
                    fill="rgba(80,120,80,0.3)"
                    fontSize="8"
                    fontFamily="serif"
                    fontStyle="italic"
                    letterSpacing="2"
                  >
                    Bosque Nativo
                  </text>

                  {/* Humedal Sur — bottom-center */}
                  <ellipse
                    cx="500"
                    cy="460"
                    rx="110"
                    ry="55"
                    fill="rgba(60,100,130,0.08)"
                    stroke="rgba(60,100,130,0.2)"
                    strokeWidth="0.5"
                    transform="rotate(8, 500, 460)"
                  />
                  <text
                    x="500"
                    y="458"
                    textAnchor="middle"
                    fill="rgba(60,100,130,0.3)"
                    fontSize="8"
                    fontFamily="serif"
                    fontStyle="italic"
                    letterSpacing="2"
                  >
                    Humedal
                  </text>

                  {/* Pradera Este — right side */}
                  <ellipse
                    cx="680"
                    cy="320"
                    rx="60"
                    ry="80"
                    fill="rgba(180,160,100,0.06)"
                    stroke="rgba(180,160,100,0.18)"
                    strokeWidth="0.5"
                  />
                  <text
                    x="680"
                    y="318"
                    textAnchor="middle"
                    fill="rgba(180,160,100,0.25)"
                    fontSize="8"
                    fontFamily="serif"
                    fontStyle="italic"
                    letterSpacing="2"
                  >
                    Pradera Abierta
                  </text>

                  {/* Área de Reserva — small top-right */}
                  <ellipse
                    cx="620"
                    cy="120"
                    rx="50"
                    ry="40"
                    fill="rgba(100,140,90,0.06)"
                    stroke="rgba(100,140,90,0.18)"
                    strokeWidth="0.5"
                  />
                  <text
                    x="620"
                    y="118"
                    textAnchor="middle"
                    fill="rgba(100,140,90,0.25)"
                    fontSize="7"
                    fontFamily="serif"
                    fontStyle="italic"
                    letterSpacing="2"
                  >
                    Reserva
                  </text>

                  {/* ===== CAMINOS INTERIORES (dashed decorative paths) ===== */}

                  {/* Camino principal de acceso */}
                  <path
                    d="M100 520 C180 480, 220 400, 260 340 C300 280, 320 250, 360 220 C400 190, 440 180, 480 200 C520 220, 540 260, 560 300"
                    stroke="rgba(245,240,232,0.12)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    fill="none"
                  />

                  {/* Camino secundario — ramal norte */}
                  <path
                    d="M360 220 C340 180, 310 140, 280 120 C250 100, 220 90, 180 100"
                    stroke="rgba(245,240,232,0.08)"
                    strokeWidth="0.8"
                    strokeDasharray="3 5"
                    fill="none"
                  />

                  {/* Camino secundario — ramal este */}
                  <path
                    d="M480 200 C530 180, 580 160, 620 170 C660 180, 690 210, 700 250"
                    stroke="rgba(245,240,232,0.08)"
                    strokeWidth="0.8"
                    strokeDasharray="3 5"
                    fill="none"
                  />

                  {/* Camino terciario — hacia humedal */}
                  <path
                    d="M540 260 C550 320, 530 380, 500 420"
                    stroke="rgba(245,240,232,0.06)"
                    strokeWidth="0.6"
                    strokeDasharray="2 6"
                    fill="none"
                  />

                  {/* Camino terciario — conexión oeste */}
                  <path
                    d="M260 340 C220 380, 180 420, 160 460"
                    stroke="rgba(245,240,232,0.06)"
                    strokeWidth="0.6"
                    strokeDasharray="2 6"
                    fill="none"
                  />

                  {/* ===== SECTORES NUMERADOS ===== */}

                  {/* Sector 1 */}
                  <circle
                    cx="330"
                    cy="300"
                    r="18"
                    stroke="rgba(245,240,232,0.2)"
                    strokeWidth="0.5"
                    fill="rgba(245,240,232,0.04)"
                  />
                  <text
                    x="330"
                    y="305"
                    textAnchor="middle"
                    fill="rgba(245,240,232,0.35)"
                    fontSize="11"
                    fontFamily="sans-serif"
                    fontWeight="300"
                    letterSpacing="1"
                  >
                    01
                  </text>

                  {/* Sector 2 */}
                  <circle
                    cx="450"
                    cy="280"
                    r="18"
                    stroke="rgba(245,240,232,0.2)"
                    strokeWidth="0.5"
                    fill="rgba(245,240,232,0.04)"
                  />
                  <text
                    x="450"
                    y="285"
                    textAnchor="middle"
                    fill="rgba(245,240,232,0.35)"
                    fontSize="11"
                    fontFamily="sans-serif"
                    fontWeight="300"
                    letterSpacing="1"
                  >
                    02
                  </text>

                  {/* Sector 3 */}
                  <circle
                    cx="550"
                    cy="340"
                    r="18"
                    stroke="rgba(245,240,232,0.2)"
                    strokeWidth="0.5"
                    fill="rgba(245,240,232,0.04)"
                  />
                  <text
                    x="550"
                    y="345"
                    textAnchor="middle"
                    fill="rgba(245,240,232,0.35)"
                    fontSize="11"
                    fontFamily="sans-serif"
                    fontWeight="300"
                    letterSpacing="1"
                  >
                    03
                  </text>

                  {/* Sector 4 */}
                  <circle
                    cx="230"
                    cy="220"
                    r="16"
                    stroke="rgba(245,240,232,0.2)"
                    strokeWidth="0.5"
                    fill="rgba(245,240,232,0.04)"
                  />
                  <text
                    x="230"
                    y="225"
                    textAnchor="middle"
                    fill="rgba(245,240,232,0.35)"
                    fontSize="10"
                    fontFamily="sans-serif"
                    fontWeight="300"
                    letterSpacing="1"
                  >
                    04
                  </text>

                  {/* Sector 5 */}
                  <circle
                    cx="600"
                    cy="230"
                    r="16"
                    stroke="rgba(245,240,232,0.2)"
                    strokeWidth="0.5"
                    fill="rgba(245,240,232,0.04)"
                  />
                  <text
                    x="600"
                    y="235"
                    textAnchor="middle"
                    fill="rgba(245,240,232,0.35)"
                    fontSize="10"
                    fontFamily="sans-serif"
                    fontWeight="300"
                    letterSpacing="1"
                  >
                    05
                  </text>

                  {/* Sector 6 */}
                  <circle
                    cx="420"
                    cy="400"
                    r="16"
                    stroke="rgba(245,240,232,0.2)"
                    strokeWidth="0.5"
                    fill="rgba(245,240,232,0.04)"
                  />
                  <text
                    x="420"
                    y="405"
                    textAnchor="middle"
                    fill="rgba(245,240,232,0.35)"
                    fontSize="10"
                    fontFamily="sans-serif"
                    fontWeight="300"
                    letterSpacing="1"
                  >
                    06
                  </text>

                  {/* ===== ORIENTACIÓN CARDINAL ===== */}

                  {/* North arrow — top-right corner */}
                  <g transform="translate(730, 72)">
                    <line
                      x1="0"
                      y1="18"
                      x2="0"
                      y2="0"
                      stroke="rgba(245,240,232,0.25)"
                      strokeWidth="0.8"
                    />
                    <polygon
                      points="0,0 -4,8 4,8"
                      fill="rgba(245,240,232,0.25)"
                    />
                    <text
                      x="0"
                      y="30"
                      textAnchor="middle"
                      fill="rgba(245,240,232,0.25)"
                      fontSize="7"
                      fontFamily="sans-serif"
                      fontWeight="300"
                      letterSpacing="2"
                    >
                      N
                    </text>
                  </g>

                  {/* Scale bar — bottom-right */}
                  <g transform="translate(640, 555)">
                    <line
                      x1="0"
                      y1="0"
                      x2="80"
                      y2="0"
                      stroke="rgba(245,240,232,0.12)"
                      strokeWidth="0.8"
                    />
                    <line
                      x1="0"
                      y1="-3"
                      x2="0"
                      y2="3"
                      stroke="rgba(245,240,232,0.12)"
                      strokeWidth="0.8"
                    />
                    <line
                      x1="80"
                      y1="-3"
                      x2="80"
                      y2="3"
                      stroke="rgba(245,240,232,0.12)"
                      strokeWidth="0.8"
                    />
                    <line
                      x1="40"
                      y1="-2"
                      x2="40"
                      y2="2"
                      stroke="rgba(245,240,232,0.08)"
                      strokeWidth="0.6"
                    />
                    <text
                      x="40"
                      y="12"
                      textAnchor="middle"
                      fill="rgba(245,240,232,0.15)"
                      fontSize="6"
                      fontFamily="sans-serif"
                      letterSpacing="1"
                    >
                      100 m
                    </text>
                  </g>

                  {/* Grid dots at major intersections (subtle architectural reference) */}
                  <g fill="rgba(245,240,232,0.04)">
                    <circle cx="200" cy="200" r="1.5" />
                    <circle cx="200" cy="400" r="1.5" />
                    <circle cx="400" cy="200" r="1.5" />
                    <circle cx="400" cy="400" r="1.5" />
                    <circle cx="600" cy="200" r="1.5" />
                    <circle cx="600" cy="400" r="1.5" />
                  </g>

                  {/* Entry point indicator */}
                  <g transform="translate(100, 520)">
                    <path
                      d="M-6,0 L-2,-6 L2,-6 L6,0 L2,6 L-2,6Z"
                      stroke="rgba(245,240,232,0.15)"
                      strokeWidth="0.5"
                      fill="rgba(245,240,232,0.03)"
                    />
                    <text
                      x="0"
                      y="16"
                      textAnchor="middle"
                      fill="rgba(245,240,232,0.15)"
                      fontSize="6"
                      fontFamily="sans-serif"
                      letterSpacing="1"
                    >
                      ACCESO
                    </text>
                  </g>
                </svg>

                {/* Bottom legend bar */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#8a8580]/50 font-[var(--font-sans)]">
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-4 h-[1px] border-t border-dashed border-[#f5f0e8]/20" />
                    Caminos interiores
                  </span>
                  <span className="hidden sm:inline">Escala indicativa</span>
                  <span>Masterplan — Proyecto Los Azafranes</span>
                </div>

                {/* Hover rim light */}
                <div className="absolute inset-0 border border-white/[0.04] rounded-sm pointer-events-none group-hover:border-white/[0.08] transition-all duration-700" />
              </div>
            </FadeIn>
          </div>

          {/* Right column — Text explanation (5/12) */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-10 md:space-y-14">
            {/* Heading */}
            <div className="space-y-3">
              <FadeIn direction="up" delay={0.1}>
                <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8a8580] font-[var(--font-sans)]">
                  El plano
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] leading-none">
                  Masterplan
                </h2>
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
                  El masterplan de Proyecto Los Azafranes no se impuso sobre el paisaje:
                  emergi&oacute; de &eacute;l. Cada sector fue delimitado
                  siguiendo las curvas de nivel, los claros naturales del bosque
                  y la direcci&oacute;n de los vientos predominantes. No hay
                  dos parcelas id&eacute;nticas, porque la tierra no se repite.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                <p className="font-[var(--font-serif)] text-base md:text-lg leading-relaxed text-[#f5f0e8]/80">
                  Seis sectores (01–06) articulan las 26 hect&aacute;reas,
                  conectados por una red de caminos interiores que serpentean
                  respetando la pendiente natural. Las &aacute;reas de bosque
                  nativo, humedal y pradera abierta act&uacute;an como
                  pulmones del proyecto, garantizando que m&aacute;s del 60%
                  del territorio permanezca como reserva ecol&oacute;gica.
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
              <div className="grid grid-cols-3 gap-6 pt-6 md:pt-8 border-t border-[#f5f0e8]/10">
                <div className="space-y-1">
                  <p className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#f5f0e8]">
                    26
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#8a8580] font-[var(--font-sans)]">
                    Hect&aacute;reas
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#f5f0e8]">
                    6
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#8a8580] font-[var(--font-sans)]">
                    Sectores
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#f5f0e8]">
                    60%
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#8a8580] font-[var(--font-sans)]">
                    Reserva natural
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
