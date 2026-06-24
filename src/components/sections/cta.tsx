"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { FadeIn } from "@/components/animations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SendHorizonal, Mail, Phone } from "lucide-react";

export function CtaSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a send — replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    toast.success("Mensaje enviado con éxito", {
      description:
        "Gracias por tu interés. Te responderemos a la brevedad.",
    });

    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contacto"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#050505]"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* ---- Top CTA block ---- */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 lg:mb-32">
          <FadeIn direction="up" delay={0.1}>
            <p className="font-[var(--font-serif)] text-2xl md:text-3xl lg:text-4xl italic text-[#f5f0e8] leading-snug mb-8">
              &ldquo;Hay lugares que no se explican.{" "}
              <span className="text-[#f5f0e8]/80">Se viven.</span>&rdquo;
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.25}>
            <a href="#formulario">
              <Button
                size="lg"
                className="font-[var(--font-sans)] text-sm tracking-[0.15em] uppercase h-11 px-8 rounded-lg border border-[#f5f0e8]/20 bg-transparent text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#050505] transition-all duration-500"
              >
                Solicitar informaci&oacute;n
                <SendHorizonal className="size-4 ml-2" />
              </Button>
            </a>
          </FadeIn>
        </div>

        {/* ---- Two-column: Form + Contact data ---- */}
        <div
          id="formulario"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20"
        >
          {/* --- Form column --- */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.3}>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name + Email on one row on md+ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="nombre"
                      className="font-[var(--font-sans)] text-xs tracking-[0.15em] uppercase text-[#8a8580]"
                    >
                      Nombre
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="h-10 bg-transparent border border-[#f5f0e8]/10 text-[#f5f0e8] placeholder:text-[#8a8580]/50 focus-visible:border-[#f5f0e8]/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-[var(--font-sans)] text-xs tracking-[0.15em] uppercase text-[#8a8580]"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="h-10 bg-transparent border border-[#f5f0e8]/10 text-[#f5f0e8] placeholder:text-[#8a8580]/50 focus-visible:border-[#f5f0e8]/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label
                    htmlFor="telefono"
                    className="font-[var(--font-sans)] text-xs tracking-[0.15em] uppercase text-[#8a8580]"
                  >
                    Tel&eacute;fono
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 XXXX XXXX"
                    required
                    className="h-10 bg-transparent border border-[#f5f0e8]/10 text-[#f5f0e8] placeholder:text-[#8a8580]/50 focus-visible:border-[#f5f0e8]/30 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="mensaje"
                    className="font-[var(--font-sans)] text-xs tracking-[0.15em] uppercase text-[#8a8580]"
                  >
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cu&eacute;ntanos sobre tu inter&eacute;s..."
                    rows={5}
                    required
                    className="min-h-[120px] bg-transparent border border-[#f5f0e8]/10 text-[#f5f0e8] placeholder:text-[#8a8580]/50 focus-visible:border-[#f5f0e8]/30 transition-colors"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="font-[var(--font-sans)] text-sm tracking-[0.15em] uppercase w-full h-11 rounded-lg border border-[#f5f0e8]/20 bg-transparent text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#050505] transition-all duration-500 disabled:opacity-40"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin size-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Enviar mensaje
                        <SendHorizonal className="size-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </FadeIn>
          </div>

          {/* --- Contact data column --- */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeIn direction="right" delay={0.4}>
              <div className="space-y-10">
                <div>
                  <p className="font-[var(--font-heading)] text-3xl md:text-4xl text-[#f5f0e8] leading-none mb-2">
                    Contacto
                  </p>
                  <p className="font-[var(--font-serif)] text-base italic text-[#8a8580]">
                    Estamos para escucharte
                  </p>
                </div>

                {/* Divider */}
                <div className="w-12 h-px bg-[#f5f0e8]/20" />

                {/* Email */}
                <div className="space-y-2">
                  <p className="font-[var(--font-sans)] text-xs tracking-[0.15em] uppercase text-[#8a8580] flex items-center gap-2">
                    <Mail className="size-3.5" />
                    Email
                  </p>
                  <a
                    href="mailto:info@proyectoazafranes.cl"
                    className="font-[var(--font-serif)] text-base md:text-lg text-[#f5f0e8] hover:text-[#f5f0e8]/70 transition-colors duration-300"
                  >
                    info@proyectoazafranes.cl
                  </a>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <p className="font-[var(--font-sans)] text-xs tracking-[0.15em] uppercase text-[#8a8580] flex items-center gap-2">
                    <Phone className="size-3.5" />
                    Tel&eacute;fono
                  </p>
                  <a
                    href="tel:+56982657527"
                    className="font-[var(--font-serif)] text-base md:text-lg text-[#f5f0e8] hover:text-[#f5f0e8]/70 transition-colors duration-300"
                  >
                    +56 9 8265 7527
                  </a>
                </div>

                {/* Subtle decorative text */}
                <p className="font-[var(--font-serif)] text-sm italic text-[#8a8580]/60 pt-4">
                  Chilo&eacute;, Chile &mdash; Donde el sur encuentra su voz.
                </p>
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
