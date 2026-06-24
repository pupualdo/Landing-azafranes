"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AzafranesLogoProps {
  variant?: "hero" | "navbar" | "footer" | "icon";
  className?: string;
  animated?: boolean;
}

/**
 * SVG del logo "Proyecto Azafranes"
 * Estilo: tipografía serif antigua (IM Fell English), bordes ligeramente orgánicos,
 * aspecto artesanal, blanco hueso #f5f0e8 sobre fondo oscuro.
 *
 * La "Á" es el elemento dominante, con acento flotante. Luego "azafranes" en
 * minúsculas anchas, y "Chiloé" pequeño abajo.
 */
const AFont = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 160 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Acento (´) flotante sobre la A — con imperfección sutil */}
    <path
      d="M80 18 L92 48 L88 50 Q80 44 78 42 Q74 38 72 33 Q70 28 72 24 Q74 20 80 18 Z"
      fill="#f5f0e8"
    />

    {/* Brazo izquierdo de la A — trazo orgánico con leve irregularidad */}
    <path
      d="
        M82 50
        Q80 48 78 50
        L34 148
        Q30 156 28 162
        Q26 168 28 172
        Q30 176 34 178
        Q38 179 42 177
        L80 108
        L118 177
        Q122 179 126 178
        Q130 176 132 172
        Q134 168 132 162
        Q130 156 126 148
        L88 58
        Q86 54 84 52
        Z
      "
      fill="#f5f0e8"
    />

    {/* Barra transversal de la A — sutilmente curvada e imperfecta */}
    <path
      d="
        M48 130
        Q56 126 68 124
        Q80 122 92 124
        Q104 126 112 130
        Q108 134 96 136
        Q84 138 72 137
        Q60 136 50 133
        Z
      "
      fill="#f5f0e8"
      opacity="0.55"
    />
  </svg>
);

const AzafranesText = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 620 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* a */}
    <path
      d="M20 60 Q16 42 20 32 Q24 24 32 22 Q38 20 42 24 L50 32 Q50 28 48 24 L52 22 L54 38 L54 52 Q54 58 52 60 Q48 64 40 64 Q32 64 26 60 Z"
      fill="#f5f0e8"
    />
    <path d="M28 48 Q36 46 44 48 L44 36 Q36 32 30 36 Q26 40 28 48 Z" fill="#f5f0e8" opacity="0.55"/>

    {/* z */}
    <path
      d="M70 26 L108 26 L106 28 Q102 34 98 40 L84 54 Q76 62 72 64 L112 64 L110 62 L110 58 L114 56 L116 62 L114 66 L68 66 Q64 66 66 62 L68 58 Q72 52 80 44 L94 30 L70 30 Z"
      fill="#f5f0e8"
    />

    {/* a2 */}
    <path
      d="M134 60 Q130 42 134 32 Q138 24 146 22 Q152 20 156 24 L164 32 Q164 28 162 24 L166 22 L168 38 L168 52 Q168 58 166 60 Q162 64 154 64 Q146 64 140 60 Z"
      fill="#f5f0e8"
    />
    <path d="M142 48 Q150 46 158 48 L158 36 Q150 32 144 36 Q140 40 142 48 Z" fill="#f5f0e8" opacity="0.55"/>

    {/* f */}
    <path
      d="M190 22 L202 22 L202 34 L212 34 L210 38 L202 38 L202 50 Q202 56 206 58 Q210 60 214 58 L214 54 L218 56 L216 62 Q210 66 202 64 Q194 62 192 56 L192 38 L186 38 L188 34 L192 34 Z"
      fill="#f5f0e8"
    />

    {/* r */}
    <path
      d="M234 36 L234 64 L230 64 L230 24 L240 24 Q248 24 252 28 Q256 32 254 38 Q252 44 246 46 L238 48 L238 36 Z M242 36 Q248 34 250 30 Q252 26 248 24 L242 24 L242 36 Z"
      fill="#f5f0e8"
    />

    {/* a3 */}
    <path
      d="M278 60 Q274 42 278 32 Q282 24 290 22 Q296 20 300 24 L308 32 Q308 28 306 24 L310 22 L312 38 L312 52 Q312 58 310 60 Q306 64 298 64 Q290 64 284 60 Z"
      fill="#f5f0e8"
    />
    <path d="M286 48 Q294 46 302 48 L302 36 Q294 32 288 36 Q284 40 286 48 Z" fill="#f5f0e8" opacity="0.55"/>

    {/* n */}
    <path
      d="M332 24 L370 24 L370 62 L366 64 L362 64 L334 40 L334 56 Q334 62 338 62 L342 62 L340 66 L332 66 Q326 65 326 58 L326 26 Q326 22 332 24 Z M364 30 L338 52 L364 30 Z"
      fill="#f5f0e8"
    />

    {/* e */}
    <path
      d="M398 44 Q392 42 388 44 Q382 48 382 54 Q382 60 388 62 Q396 64 406 60 L408 64 Q398 68 388 66 Q380 64 376 58 Q372 50 376 40 Q380 30 390 26 Q398 24 406 28 Q412 32 414 40 L398 44 Z M390 36 Q386 38 386 42 Q386 46 390 46 L400 44 L400 38 Q400 34 396 34 Z"
      fill="#f5f0e8"
    />

    {/* s */}
    <path
      d="M438 28 Q444 24 452 24 Q460 24 464 28 Q468 32 466 38 Q464 42 458 44 L450 46 Q444 48 442 52 Q440 56 444 58 Q448 60 454 58 L458 54 L462 56 L460 62 Q454 66 446 66 Q438 66 434 62 Q430 58 432 52 Q434 46 440 44 L448 42 Q454 40 456 36 Q458 32 454 30 Q450 28 444 30 L440 34 L436 32 Z"
      fill="#f5f0e8"
    />

    {/* Punto final ornamental */}
    <circle cx="480" cy="56" r="3" fill="#f5f0e8" opacity="0.4" />
  </svg>
);

const ChiloeText = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 240 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* C */}
    <path
      d="M28 14 Q32 6 42 4 Q50 3 56 8 L52 12 Q48 8 42 8 Q36 9 34 14 Q32 20 36 24 Q40 26 46 24 Q50 22 52 18 L56 20 Q52 26 44 28 Q34 28 28 22 Q24 18 28 14 Z"
      fill="#f5f0e8"
      opacity="0.6"
    />

    {/* h */}
    <path
      d="M70 4 L74 4 L74 14 Q76 8 82 6 Q88 4 92 8 L92 22 Q92 24 90 24 L86 24 L86 14 Q84 10 80 10 Q76 10 74 14 L74 24 L70 24 Z"
      fill="#f5f0e8"
      opacity="0.6"
    />

    {/* i */}
    <path
      d="M102 8 L106 8 L106 24 L102 24 Z M104 4 Q106 4 106 6 Q106 8 104 8 Q102 8 102 6 Q102 4 104 4 Z"
      fill="#f5f0e8"
      opacity="0.6"
    />

    {/* l */}
    <path
      d="M118 4 L122 4 L122 22 Q122 26 126 26 L130 26 L128 28 L122 28 Q116 28 116 22 L116 10 L118 10 Z"
      fill="#f5f0e8"
      opacity="0.6"
    />

    {/* o */}
    <path
      d="M148 14 Q148 8 154 6 Q160 4 164 6 Q170 8 170 14 Q170 20 164 22 Q160 24 154 22 Q148 20 148 14 Z M154 10 Q150 11 150 14 Q150 17 154 18 Q158 17 158 14 Q158 11 154 10 Z"
      fill="#f5f0e8"
      opacity="0.6"
    />

    {/* e (con acento) */}
    <path
      d="M188 12 Q184 11 182 13 Q178 16 180 19 Q182 22 188 22 Q194 22 198 20 L198 24 Q192 26 186 26 Q178 26 174 22 Q170 18 172 13 Q174 9 180 7 Q186 5 192 8 Q196 10 196 14 L188 12 Z M182 10 Q180 12 182 14 L190 14 L190 11 Q188 9 184 10 Z"
      fill="#f5f0e8"
      opacity="0.6"
    />
    {/* Acento agudo sobre la e */}
    <path
      d="M206 3 L210 10 L202 10 Z"
      fill="#f5f0e8"
      opacity="0.5"
    />
  </svg>
);

export function AzafranesLogo({
  variant = "hero",
  className = "",
  animated = true,
}: AzafranesLogoProps) {
  const animProps = animated
    ? {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.2, ease: [0.77, 0, 0.18, 1] as [number, number, number, number] },
      }
    : {};

  if (variant === "icon") {
    return (
      <motion.div className={cn("flex items-center justify-center", className)} {...animProps}>
        <AFont className="w-10 h-14" />
      </motion.div>
    );
  }

  if (variant === "navbar") {
    return (
      <motion.div
        className={cn("flex items-center gap-3", className)}
        {...(animated ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.5 } } : {})}
      >
        <AFont className="w-7 h-10 flex-shrink-0" />
        <span className="text-sm tracking-[0.25em] uppercase font-[var(--font-heading)] text-[#f5f0e8] leading-none">
          azafranes
        </span>
      </motion.div>
    );
  }

  if (variant === "footer") {
    return (
      <motion.div
        className={cn("flex items-center gap-3", className)}
        {...(animated ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8 } } : {})}
      >
        <AFont className="w-8 h-11 flex-shrink-0" />
        <div className="flex flex-col leading-tight">
          <span className="text-base tracking-[0.3em] uppercase font-[var(--font-heading)] text-[#f5f0e8]">
            azafranes
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#8a8580]/60 font-[var(--font-heading)]">
            Chiloé
          </span>
        </div>
      </motion.div>
    );
  }

  // Hero variant — full logo centerpiece
  return (
    <motion.div
      className={cn("flex flex-col items-center", className)}
      {...animProps}
    >
      {/* Á — símbolo principal */}
      <motion.div
        {...(animated ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.2, ease: [0.77, 0, 0.18, 1] as [number, number, number, number], delay: 0.2 },
        } : {})}
        className="mb-2"
      >
        <AFont className="w-28 h-40 md:w-40 md:h-56" />
      </motion.div>

      {/* azafranes — texto principal */}
      <motion.div
        {...(animated ? {
          initial: { opacity: 0, y: 15 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.2, ease: [0.77, 0, 0.18, 1] as [number, number, number, number], delay: 0.5 },
        } : {})}
        className="mb-1"
      >
        <AzafranesText className="w-[320px] h-10 md:w-[480px] md:h-14" />
      </motion.div>

      {/* Chiloé — descriptor geográfico */}
      <motion.div
        {...(animated ? {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.2, ease: [0.77, 0, 0.18, 1] as [number, number, number, number], delay: 0.8 },
        } : {})}
      >
        <ChiloeText className="w-[130px] h-4 md:w-[160px] md:h-5" />
      </motion.div>
    </motion.div>
  );
}
