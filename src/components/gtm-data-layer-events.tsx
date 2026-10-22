"use client";

import { useEffect } from "react";

/**
 * Eventos dataLayer globales para Tag Manager.
 * - whatsapp_click: clic en cualquier enlace/botón de WhatsApp (wa.me, api.whatsapp.com).
 * No se incluyen datos personales en los eventos.
 */
export function GTMDataLayerEvents() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.("a, button");
      if (!el) return;
      const href = (el as HTMLAnchorElement).href || "";
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "whatsapp_click" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
