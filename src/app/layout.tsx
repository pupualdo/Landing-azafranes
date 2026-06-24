import type { Metadata } from "next";
import { IM_Fell_English, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Toaster } from "@/components/ui/sonner";

const imFell = IM_Fell_English({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Parcelas en venta en Chiloé | Terrenos con financiamiento directo | Proyecto Los Azafranes",
  description:
    "Parcelas en venta en Chiloé con bosque nativo. Terrenos de 5.000 m² en Dalcahue, con financiamiento directo. Proyecto Los Azafranes: inversión patrimonial en la Isla Grande de Chiloé. Naturaleza intacta, plusvalía sostenida.",
  keywords: [
    "parcelas en venta Chiloé",
    "terrenos en venta Chiloé",
    "comprar terreno Chiloé",
    "parcelas Dalcahue",
    "terrenos Chiloé financiamiento",
    "parcelas con bosque nativo Chiloé",
    "parcelas 5000 m2 Chiloé",
    "inversión en terrenos Chiloé",
    "plusvalía terrenos Chiloé",
    "parcelas cerca de Dalcahue",
    "terrenos Castro Chiloé",
    "terrenos isla de Chiloé",
    "Proyecto Los Azafranes",
  ],
  openGraph: {
    title: "Parcelas en venta en Chiloé | Terrenos con financiamiento directo | Proyecto Los Azafranes",
    description:
      "Parcelas en venta en Chiloé con bosque nativo. Proyecto Los Azafranes: terrenos de 5.000 m² en Dalcahue, con financiamiento directo. Naturaleza intacta, plusvalía sostenida.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${imFell.variable} ${cormorant.variable} ${inter.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#f5f0e8]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0a0a0a",
              color: "#f5f0e8",
              border: "1px solid rgba(245,240,232,0.1)",
            },
          }}
        />
      </body>
    </html>
  );
}
