"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "56982657527"; // Replace with actual number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola! Me gustaría recibir información sobre las parcelas Proyecto Los Azafranes."
);

export function WhatsAppButton() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, duration: 0.5, ease: [0.77, 0, 0.18, 1] }}
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#f5f0e8]/10 border border-white/10 backdrop-blur-xl hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-500 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-[#f5f0e8] group-hover:text-white transition-colors duration-300" />
    </motion.a>
  );
}
