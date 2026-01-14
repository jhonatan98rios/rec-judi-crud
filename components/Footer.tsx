import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-sm text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Recuperação Empresarial.
            <br className="md:hidden" />
            <span className="ml-1">
              Todos os direitos reservados.
            </span>
          </div>

          {/* Links institucionais */}
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/politica-de-privacidade"
              className="text-slate-400 hover:text-slate-200 transition"
            >
              Política de Privacidade
            </Link>

            <Link
              href="/lgpd"
              className="text-slate-400 hover:text-slate-200 transition"
            >
              LGPD
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
