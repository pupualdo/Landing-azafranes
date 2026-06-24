"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoAzafranesProps {
  variant?: "hero" | "navbar" | "footer" | "icon";
  className?: string;
  animated?: boolean;
}

/**
 * Logo "azafranes" — solo las letras en blanco hueso (#f5f0e8),
 * sin fondo, para que se vea el paisaje a través.
 *
 * Inspirado en la descripción del logo original:
 * - "Á" grande y dominante como símbolo principal
 * - Serif antigua, bordes orgánicos
 * - "azafranes" en minúsculas anchas debajo
 * - "Chiloé" pequeño como descriptor geográfico
 * - Sin cuadro, sin fondo, solo el texto
 */

function ALetter({ size = "hero" }: { size?: "hero" | "small" }) {
  const w = size === "hero" ? 140 : 28;
  const h = size === "hero" ? 190 : 38;
  return (
    <svg
      viewBox="0 0 140 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: w, height: h }}
      className="flex-shrink-0"
    >
      {/* Tilde (´) flotante */}
      <path
        d="M70 10 L82 38 L58 38 Z"
        fill="#f5f0e8"
      />
      {/* Brazo izquierdo de la A — con leve irregularidad artesanal */}
      <path
        d="
          M72 40
          Q70 38 68 40
          L28 130
          Q24 138 22 144
          Q20 150 22 154
          Q24 158 28 160
          Q32 161 36 159
          L72 94
          L108 159
          Q112 161 116 160
          Q120 158 122 154
          Q124 150 122 144
          Q120 138 116 130
          L76 48
          Q74 44 72 40
          Z
        "
        fill="#f5f0e8"
      />
      {/* Barra transversal */}
      <path
        d="
          M40 116
          Q48 112 60 110
          Q72 108 84 110
          Q96 112 104 116
          Q100 120 88 122
          Q76 124 64 123
          Q52 122 42 119
          Z
        "
        fill="#f5f0e8"
        opacity="0.5"
      />
    </svg>
  );
}

function AzafranesWordmark({ size = "hero" }: { size?: "hero" | "small" }) {
  const w = size === "hero" ? 480 : 100;
  const h = size === "hero" ? 55 : 12;
  return (
    <svg
      viewBox="0 0 480 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: w, height: h }}
    >
      {/* a */}
      <path d="M14 48 Q10 34 14 26 Q18 18 26 16 Q30 15 34 18 L40 26 Q40 22 38 18 L42 16 L44 32 L44 44 Q44 48 42 50 Q38 52 32 52 Q24 52 18 48 Z" fill="#f5f0e8"/>
      <path d="M22 40 Q28 38 36 40 L36 30 Q28 26 22 30 Q18 34 22 40 Z" fill="#f5f0e8" opacity="0.5"/>

      {/* z */}
      <path d="M56 20 L88 20 L86 22 Q82 28 78 34 L66 46 Q58 52 54 54 L90 54 L88 52 L88 48 L92 46 L94 52 L92 56 L52 56 Q48 56 50 52 L52 48 Q56 42 62 36 L76 24 L56 24 Z" fill="#f5f0e8"/>

      {/* a2 */}
      <path d="M108 48 Q104 34 108 26 Q112 18 120 16 Q124 15 128 18 L134 26 Q134 22 132 18 L136 16 L138 32 L138 44 Q138 48 136 50 Q132 52 126 52 Q118 52 112 48 Z" fill="#f5f0e8"/>
      <path d="M116 40 Q122 38 130 40 L130 30 Q122 26 116 30 Q112 34 116 40 Z" fill="#f5f0e8" opacity="0.5"/>

      {/* f */}
      <path d="M154 16 L164 16 L164 28 L172 28 L170 32 L164 32 L164 42 Q164 48 168 50 Q172 52 176 50 L176 46 L180 48 L178 54 Q172 58 164 56 Q156 54 154 48 L154 32 L148 32 L150 28 L154 28 Z" fill="#f5f0e8"/>

      {/* r */}
      <path d="M192 30 L192 54 L188 54 L188 18 L196 18 Q202 18 206 22 Q210 26 208 32 Q206 38 200 40 L194 42 L194 30 Z M198 30 Q204 28 206 24 Q208 20 204 18 L198 18 L198 30 Z" fill="#f5f0e8"/>

      {/* a3 */}
      <path d="M228 48 Q224 34 228 26 Q232 18 240 16 Q244 15 248 18 L254 26 Q254 22 252 18 L256 16 L258 32 L258 44 Q258 48 256 50 Q252 52 246 52 Q238 52 232 48 Z" fill="#f5f0e8"/>
      <path d="M236 40 Q242 38 250 40 L250 30 Q242 26 236 30 Q232 34 236 40 Z" fill="#f5f0e8" opacity="0.5"/>

      {/* n */}
      <path d="M274 18 L306 18 L306 52 L302 54 L298 54 L276 34 L276 48 Q276 52 280 52 L284 52 L282 56 L274 56 Q268 55 268 48 L268 20 Q268 16 274 18 Z M302 24 L280 44 L302 24 Z" fill="#f5f0e8"/>

      {/* e */}
      <path d="M328 36 Q322 34 318 36 Q312 40 312 46 Q312 52 318 54 Q326 56 336 52 L338 56 Q328 60 318 58 Q310 56 306 50 Q302 42 306 34 Q310 24 320 20 Q328 18 336 22 Q342 26 344 34 L328 36 Z M320 30 Q316 32 316 36 Q316 40 320 40 L330 38 L330 32 Q330 28 326 28 Z" fill="#f5f0e8"/>

      {/* s */}
      <path d="M360 22 Q366 18 374 18 Q382 18 386 22 Q390 26 388 32 Q386 36 380 38 L372 40 Q366 42 364 46 Q362 50 366 52 Q370 54 376 52 L380 48 L384 50 L382 56 Q376 60 368 60 Q360 60 356 56 Q352 52 354 46 Q356 40 362 38 L370 36 Q376 34 378 30 Q380 26 376 24 Q372 22 366 24 L362 28 L358 26 Z" fill="#f5f0e8"/>

      {/* Punto ornamental */}
      <circle cx="398" cy="46" r="3" fill="#f5f0e8" opacity="0.35" />
    </svg>
  );
}

function ChiloeWordmark({ size = "hero" }: { size?: "hero" | "small" }) {
  const w = size === "hero" ? 180 : 60;
  const h = size === "hero" ? 20 : 7;
  const op = 0.55;
  return (
    <svg
      viewBox="0 0 180 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: w, height: h }}
    >
      <path d="M20 10 Q24 4 32 3 Q38 2 42 6 L40 9 Q36 6 32 6 Q28 7 26 10 Q24 14 28 18 Q32 20 38 18 Q42 16 44 12 L48 14 Q44 20 36 22 Q26 22 20 16 Q16 12 20 10 Z" fill="#f5f0e8" opacity={op}/>
      <path d="M54 3 L56 3 L56 11 Q58 6 64 4 Q68 3 72 6 L72 18 Q72 19 70 19 L68 19 L68 11 Q66 8 62 8 Q58 8 56 11 L56 19 L54 19 Z" fill="#f5f0e8" opacity={op}/>
      <path d="M80 6 L82 6 L82 19 L80 19 Z M81 3 Q82 3 82 4 Q82 6 81 6 Q80 6 80 4 Q80 3 81 3 Z" fill="#f5f0e8" opacity={op}/>
      <path d="M90 3 L92 3 L92 18 Q92 20 94 20 L98 20 L96 21 L92 21 Q88 21 88 18 L88 8 L90 8 Z" fill="#f5f0e8" opacity={op}/>
      <path d="M112 10 Q112 6 116 4 Q120 3 124 4 Q128 6 128 10 Q128 14 124 16 Q120 18 116 16 Q112 14 112 10 Z M116 8 Q114 8 114 10 Q114 12 116 13 Q118 12 118 10 Q118 8 116 8 Z" fill="#f5f0e8" opacity={op}/>
      <path d="M142 9 Q138 8 136 10 Q132 12 134 15 Q136 18 142 18 Q148 18 152 16 L152 18 Q146 20 140 20 Q132 20 128 16 Q124 12 126 8 Q128 4 134 2 Q140 1 146 4 Q150 6 150 10 L142 9 Z M136 8 Q134 10 136 12 L144 12 L144 9 Q142 8 138 8 Z" fill="#f5f0e8" opacity={op}/>
      <path d="M160 2 L162 6 L158 6 Z" fill="#f5f0e8" opacity={op * 0.8}/>
    </svg>
  );
}

export function LogoAzafranes({
  variant = "hero",
  className = "",
  animated = true,
}: LogoAzafranesProps) {
  if (variant === "icon") {
    return (
      <motion.div
        className={cn("flex items-center justify-center", className)}
        {...(animated ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, ease: [0.77, 0, 0.18, 1] as [number, number, number, number] },
        } : {})}
      >
        <ALetter size="small" />
      </motion.div>
    );
  }

  if (variant === "navbar") {
    return (
      <motion.div
        className={cn("flex items-center gap-2", className)}
        {...(animated ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.8, delay: 0.5 },
        } : {})}
      >
        <ALetter size="small" />
        <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-[var(--font-heading)] text-[#f5f0e8] leading-none">
          azafranes
        </span>
      </motion.div>
    );
  }

  if (variant === "footer") {
    return (
      <motion.div
        className={cn("flex items-center gap-2", className)}
        {...(animated ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.8 },
        } : {})}
      >
        <ALetter size="small" />
        <div className="flex flex-col leading-tight">
          <span className="text-sm tracking-[0.25em] uppercase font-[var(--font-heading)] text-[#f5f0e8]">
            azafranes
          </span>
          <span className="text-[9px] tracking-[0.35em] uppercase text-[#8a8580]/50 font-[var(--font-heading)]">
            Chiloé
          </span>
        </div>
      </motion.div>
    );
  }

  // Hero variant
  return (
    <motion.div
      className={cn("flex flex-col items-center", className)}
      {...(animated ? {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.2, ease: [0.77, 0, 0.18, 1] as [number, number, number, number] },
      } : {})}
    >
      <ALetter size="hero" />
      <AzafranesWordmark size="hero" />
      <ChiloeWordmark size="hero" />
    </motion.div>
  );
}
