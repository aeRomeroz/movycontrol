import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} MOVIMIENTO Y CONTROL (MOVYCONTROL). Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <Link href="#inicio" className="hover:text-slate-300 transition-colors">
            Inicio
          </Link>
          <Link href="#servicios" className="hover:text-slate-300 transition-colors">
            Servicios
          </Link>
          <Link href="#nosotros" className="hover:text-slate-300 transition-colors">
            Nosotros
          </Link>
          <Link href="#contacto" className="hover:text-slate-300 transition-colors">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}