import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Proyecto Azafranes",
  description:
    "Términos y condiciones de uso del sitio web de Proyecto Azafranes. Política de privacidad, responsabilidad, propiedad intelectual y tratamiento de datos personales.",
  openGraph: {
    title: "Términos y Condiciones | Proyecto Azafranes",
    description:
      "Términos y condiciones de uso del sitio web de Proyecto Azafranes.",
    locale: "es_CL",
    type: "website",
  },
};

function formatLegalText(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (!line.trim()) {
      elements.push(<div key={i} className="h-4" />);
      i++;
      continue;
    }

    // Main title
    if (line === "TÉRMINOS Y CONDICIONES") {
      elements.push(
        <h1
          key={i}
          className="font-[var(--font-heading)] text-3xl md:text-4xl text-[#f5f0e8] text-center mb-12"
        >
          {line}
        </h1>
      );
      i++;
      continue;
    }

    // Section headers (PRIMERO:, SEGUNDO:, etc.)
    if (
      /^(PRIMERO|SEGUNDO|TERCERO|CUARTO|QUINTO|SEXTO|SEPTIMO):/i.test(line)
    ) {
      elements.push(
        <h2
          key={i}
          className="font-[var(--font-heading)] text-lg md:text-xl text-[#f5f0e8] mt-10 mb-4 pb-2 border-b border-[#f5f0e8]/10"
        >
          {line}
        </h2>
      );
      i++;
      continue;
    }

    // Sub-headers (I., II., III.)
    if (/^(I{1,3})\./.test(line.trim())) {
      elements.push(
        <h3
          key={i}
          className="font-[var(--font-heading)] text-base text-[#f5f0e8]/80 mt-6 mb-2"
        >
          {line.trim()}
        </h3>
      );
      i++;
      continue;
    }

    // "Nota final"
    if (line.trim() === "Nota final") {
      elements.push(
        <h3
          key={i}
          className="font-[var(--font-heading)] text-base text-[#f5f0e8]/80 mt-10 mb-2"
        >
          {line.trim()}
        </h3>
      );
      i++;
      continue;
    }

    // Fecha de última actualización
    if (line.trim().startsWith("Fecha de última actualización:")) {
      elements.push(
        <p
          key={i}
          className="font-[var(--font-sans)] text-xs text-[#5a5550] mt-12 pt-6 border-t border-[#f5f0e8]/5"
        >
          {line.trim()}
        </p>
      );
      i++;
      continue;
    }

    // Regular paragraphs
    elements.push(
      <p
        key={i}
        className="font-[var(--font-serif)] text-sm md:text-base leading-relaxed text-[#f5f0e8]/70 mb-3"
      >
        {line.trim()}
      </p>
    );
    i++;
  }

  return elements;
}

export default function TerminosPage() {
  const filePath = path.join(process.cwd(), "content", "terminos-y-condiciones.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <section className="w-full min-h-screen bg-[#050505]">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {formatLegalText(content)}
      </div>
    </section>
  );
}
