import { HeroSection } from "@/components/sections/hero";
import { ConceptoSection } from "@/components/sections/concepto";
import { UbicacionSection } from "@/components/sections/ubicacion";
import { ParcelasSection } from "@/components/sections/parcelas";
import { InversionSection } from "@/components/sections/inversion";
import { ExperienciaSection } from "@/components/sections/experiencia";
import { MasterplanSection } from "@/components/sections/masterplan";
import { GaleriaSection } from "@/components/sections/galeria";
import { CtaSection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConceptoSection />
      <ExperienciaSection />
      <GaleriaSection />
      <UbicacionSection />
      <MasterplanSection />
      <ParcelasSection />
      <InversionSection />
      <CtaSection />
    </>
  );
}
