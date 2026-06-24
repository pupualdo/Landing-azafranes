"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoOriginalProps {
  variant?: "hero" | "navbar" | "footer" | "icon";
  className?: string;
  animated?: boolean;
}

export function LogoOriginal({
  variant = "hero",
  className = "",
  animated = true,
}: LogoOriginalProps) {
  const animProps = animated
    ? {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 1.2,
          ease: [0.77, 0, 0.18, 1] as [number, number, number, number],
        },
      }
    : {};

  if (variant === "navbar") {
    return (
      <motion.div
        className={cn("flex items-center", className)}
        {...(animated
          ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.5 } }
          : {})}
      >
        <Image
          src="/logo-azafranes-transparente.png"
          alt="Proyecto Azafranes"
          width={200}
          height={80}
          className="h-14 w-auto object-contain"
          priority
          unoptimized
        />
      </motion.div>
    );
  }

  if (variant === "footer") {
    return (
      <motion.div
        className={cn("flex items-center", className)}
        {...(animated
          ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8 } }
          : {})}
      >
        <Image
          src="/logo-azafranes-transparente.png"
          alt="Proyecto Azafranes"
          width={160}
          height={60}
          className="h-12 w-auto object-contain"
          unoptimized
        />
      </motion.div>
    );
  }

  if (variant === "icon") {
    return (
      <motion.div className={cn("flex items-center justify-center", className)} {...animProps}>
        <Image
          src="/logo-azafranes-transparente.png"
          alt="Proyecto Azafranes"
          width={48}
          height={48}
          className="w-10 h-10 object-contain"
          unoptimized
        />
      </motion.div>
    );
  }

  // Hero variant — PNG only, logo is self-contained
  return (
    <motion.div
      className={cn("flex flex-col items-center", className)}
      {...animProps}
    >
      <Image
        src="/logo-azafranes-transparente.png"
        alt="Proyecto Azafranes"
        width={500}
        height={500}
        className="w-64 md:w-96 lg:w-[28rem] h-auto object-contain"
        priority
        unoptimized
      />
    </motion.div>
  );
}
