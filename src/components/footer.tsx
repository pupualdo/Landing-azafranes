import { LogoOriginal } from "@/components/logo-original";

export function Footer() {
  return (
    <footer className="border-t border-white/5 pt-12 pb-28 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <LogoOriginal variant="footer" animated={false} />
        <div className="text-center">
          <p className="text-xs text-[#5a5550] tracking-[0.05em]">
            &copy; {new Date().getFullYear()} — Todos los derechos reservados
          </p>
          <p className="text-xs text-[#5a5550]/40 mt-1 tracking-[0.05em]">
            <a
              href="/terminos-y-condiciones"
              className="hover:text-[#8a8580] transition-colors duration-300"
            >
              T&eacute;rminos y Condiciones
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
