import fs from "fs";
import path from "path";
import { FadeIn } from "@/components/animations";

function formatLegalText(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      elements.push(<div key={i} className="h-2" />);
      i++;
      continue;
    }

    if (line === "TÉRMINOS Y CONDICIONES") {
      i++;
      continue; // skip main title, we have our own
    }

    if (
      /^(PRIMERO|SEGUNDO|TERCERO|CUARTO|QUINTO|SEXTO|SEPTIMO):/i.test(line)
    ) {
      elements.push(
        <h3
          key={i}
          className="font-[var(--font-heading)] text-sm md:text-base text-[#f5f0e8] mt-8 mb-3 pb-1.5 border-b border-[#f5f0e8]/8"
        >
          {line}
        </h3>
      );
      i++;
      continue;
    }

    if (/^(I{1,3})\./.test(line.trim())) {
      elements.push(
        <h4
          key={i}
          className="font-[var(--font-heading)] text-xs md:text-sm text-[#f5f0e8]/60 mt-4 mb-1.5"
        >
          {line.trim()}
        </h4>
      );
      i++;
      continue;
    }

    if (line.trim() === "Nota final") {
      elements.push(
        <h4
          key={i}
          className="font-[var(--font-heading)] text-xs md:text-sm text-[#f5f0e8]/60 mt-8 mb-1.5"
        >
          {line.trim()}
        </h4>
      );
      i++;
      continue;
    }

    if (line.trim().startsWith("Fecha de última actualización:")) {
      elements.push(
        <p
          key={i}
          className="font-[var(--font-sans)] text-[10px] md:text-xs text-[#5a5550] mt-10 pt-4 border-t border-[#f5f0e8]/5"
        >
          {line.trim()}
        </p>
      );
      i++;
      continue;
    }

    elements.push(
      <p
        key={i}
        className="font-[var(--font-serif)] text-xs md:text-sm leading-relaxed text-[#f5f0e8]/50 mb-2"
      >
        {line.trim()}
      </p>
    );
    i++;
  }

  return elements;
}

export function TerminosSection() {
  const filePath = path.join(process.cwd(), "content", "terminos-y-condiciones.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <section
      id="terminos"
      className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#050505]"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/6 to-transparent" />

      <div className="mx-auto max-w-3xl">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#f5f0e8] text-center mb-10">
            Términos y Condiciones
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-1">
            {formatLegalText(content)}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
