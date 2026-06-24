import { LogoOriginal } from "@/components/logo-original";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-14 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <LogoOriginal variant="footer" animated={false} />
        <div className="text-center md:text-right">
          <p className="text-xs text-[#5a5550] tracking-[0.05em]">
            &copy; {new Date().getFullYear()} — Todos los derechos reservados
          </p>
          <p className="text-xs text-[#5a5550]/50 mt-1 tracking-[0.05em]">
            Un proyecto de Latitudes Australes
          </p>
        </div>
      </div>
    </footer>
  );
}
