"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { FadeIn } from "@/components/animations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

/* ── Hand-drawn style SVG icons ── */

function HandMail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Envelope body — organic rectangle */}
      <path d="M3.5 6.5c-.3.5-.5 1-.5 1.8v8c0 1 .3 1.8.8 2.5.6.7 1.3 1.2 2.2 1.5.8.3 1.7.4 2.5.4h7c.8 0 1.7-.1 2.5-.4.9-.3 1.6-.8 2.2-1.5.5-.7.8-1.5.8-2.5v-8c0-.7-.2-1.3-.5-1.8" />
      {/* Flap */}
      <path d="M3.5 6.5l6.8 5.8c1 .8 2.4.8 3.4 0l6.8-5.8" />
      {/* Bottom edge */}
      <path d="M3.5 18.5l5-4.5M20.5 18.5l-5-4.5" strokeWidth=".9" opacity=".4" />
    </svg>
  );
}

function HandPhone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Handset shape */}
      <path d="M6.5 3.5c-.8.2-1.5.6-2 1.2-.5.6-.8 1.3-.8 2 0 .8.2 1.5.5 2.3.3.7.7 1.5 1.2 2.3.5.8 1.2 1.5 1.8 2.2.6.7 1.3 1.3 2 1.8.7.5 1.5.9 2.2 1.2.8.3 1.5.5 2.3.5.7 0 1.4-.3 2-.8.6-.5 1-1.2 1.2-2" />
      {/* Curly cord */}
      <path d="M6.5 3.5c-.5 1-.8 2.5-1 4.5-.2 2-.2 4 0 6 .2 2 .5 3.5 1 4.5" strokeWidth=".9" opacity=".5" />
    </svg>
  );
}

function HandSend({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Paper plane — organic triangle */}
      <path d="M21 3c-.3.2-.8.4-1.3.7l-15 7.5c-.7.4-1.2.8-1.5 1.2-.3.4-.4.8-.3 1 .1.3.4.5.8.6.5.1 1.2.1 2 0l5.8-1.2c.4 0 .7.2.8.5l2.2 7.2c.1.5.1 1 0 1.4 0 .5-.1.8-.4 1-.2.2-.4.2-.7 0-.3-.2-.6-.6-.9-1.2l-3-6.5" />
      {/* Motion lines */}
      <path d="M14 10l4.5-4.5M16.5 11.5l3.5-3.5" strokeWidth=".9" opacity=".35" />
    </svg>
  );
}

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
                        <HandSend className="size-4" />
                      </span>
                    )}
                  </Button>
                </div>

                {/* TyC link */}
                <p className="text-center pt-3">
                  <a
                    href="/terminos-y-condiciones"
                    className="font-[var(--font-sans)] text-[11px] tracking-[0.05em] text-[#5a5550] hover:text-[#8a8580] underline underline-offset-4 transition-colors duration-300"
                  >
                    Al enviar aceptas nuestros T&eacute;rminos y Condiciones
                  </a>
                </p>
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
                    <HandMail className="size-3.5" />
                    Email
                  </p>
                  <a
                    href="mailto:info@proyectoazafranes.cl"
                    className="font-[var(--font-serif)] text-base md:text-lg text-[#f5f0e8] hover:text-[#f5f0e8]/70 transition-colors duration-300"
                  >
                    info@proyectoazafranes.cl
                  </a>
                </div>

                {/* Phones */}
                <div className="space-y-2">
                  <p className="font-[var(--font-sans)] text-xs tracking-[0.15em] uppercase text-[#8a8580] flex items-center gap-2">
                    <HandPhone className="size-3.5" />
                    Tel&eacute;fonos
                  </p>
                  <div className="space-y-1.5">
                    <a
                      href="tel:+56982657527"
                      className="block font-[var(--font-serif)] text-base md:text-lg text-[#f5f0e8] hover:text-[#f5f0e8]/70 transition-colors duration-300"
                    >
                      +56 9 8265 7527
                    </a>
                    <a
                      href="tel:+56994456176"
                      className="block font-[var(--font-serif)] text-base md:text-lg text-[#f5f0e8] hover:text-[#f5f0e8]/70 transition-colors duration-300"
                    >
                      +56 9 9445 6176
                    </a>
                    <a
                      href="tel:+56994406865"
                      className="block font-[var(--font-serif)] text-base md:text-lg text-[#f5f0e8] hover:text-[#f5f0e8]/70 transition-colors duration-300"
                    >
                      +56 9 9440 6865
                    </a>
                  </div>
                </div>

                {/* Subtle decorative text */}
                <p className="font-[var(--font-serif)] text-sm italic text-[#8a8580]/60 pt-4">
                  Chilo&eacute;, Chile &mdash; Donde el sur encuentra su voz.
                </p>

                {/* Latitudes Australes credit — linked */}
                <p className="font-[var(--font-sans)] text-xs tracking-[0.05em] text-[#8a8580]/60 pt-3">
                  Un proyecto de{" "}
                  <a
                    href="https://www.latitudesaustrales.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8a8580] hover:text-[#f5f0e8]/70 underline underline-offset-4 transition-colors duration-300"
                  >
                    Latitudes Australes
                  </a>
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
