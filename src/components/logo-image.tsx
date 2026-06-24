"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoImageProps {
  variant?: "hero" | "navbar" | "footer" | "icon";
  className?: string;
  animated?: boolean;
}

export function LogoImage({
  variant = "hero",
  className = "",
  animated = true,
}: LogoImageProps) {
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
          ? {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8, delay: 0.5 },
            }
          : {})}
      >
        <Image
          src="/logo-azafranes.png"
          alt="azafranes"
          width={100}
          height={40}
          className="h-8 w-auto object-contain"
          priority
        />
      </motion.div>
    );
  }

  if (variant === "footer") {
    return (
      <motion.div
        className={cn("flex items-center", className)}
        {...(animated
          ? {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8 },
            }
          : {})}
      >
        <Image
          src="/logo-azafranes.png"
          alt="azafranes"
          width={160}
          height={60}
          className="h-12 w-auto object-contain"
        />
      </motion.div>
    );
  }

  if (variant === "icon") {
    return (
      <motion.div className={cn("flex items-center justify-center", className)} {...animProps}>
        <Image
          src="/logo-azafranes.png"
          alt="azafranes"
          width={48}
          height={48}
          className="w-10 h-10 object-contain"
        />
      </motion.div>
    );
  }

  // Hero variant
  return (
    <motion.div
      className={cn("flex flex-col items-center", className)}
      {...animProps}
    >
      <Image
        src="/logo-azafranes.png"
        alt="azafranes"
        width={400}
        height={400}
        className="w-56 md:w-80 lg:w-96 h-auto object-contain"
        priority
      />
    </motion.div>
  );
}
