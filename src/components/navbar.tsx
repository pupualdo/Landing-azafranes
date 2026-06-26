"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogoOriginal } from "@/components/logo-original";

const navItems = [
  { label: "Concepto", href: "#concepto" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Masterplan", href: "#masterplan" },
  { label: "Nuestra Historia", href: "#inversion" },
  { label: "Ubicacion", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.18, 1], delay: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center"
          >
            <LogoOriginal variant="navbar" animated={false} />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm tracking-[0.15em] uppercase text-[#8a8580] hover:text-[#f5f0e8] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger>
              <Menu className="w-5 h-5 text-[#f5f0e8] cursor-pointer" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#050505] border-l border-white/5 w-full max-w-[300px]"
            >
              <div className="flex flex-col gap-8 mt-16 px-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm tracking-[0.2em] uppercase text-[#8a8580] hover:text-[#f5f0e8] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </motion.header>
    </>
  );
}
