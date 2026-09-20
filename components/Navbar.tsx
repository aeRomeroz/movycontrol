'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        
        <Link href="#inicio" className="flex items-center gap-2">
          <div className="relative h-8 w-auto min-w-[140px] sm:min-w-[180px] md:h-11 md:w-56">
            <Image
              src="/logo_navbar.png"
              alt="MOVIMIENTO Y CONTROL — MOVYCONTROL"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#inicio" className="text-slate-300 hover:text-sky-400 transition-colors">
            Inicio
          </Link>
          <Link href="#servicios" className="text-slate-300 hover:text-sky-400 transition-colors">
            Servicios
          </Link>
          <Link href="#nosotros" className="text-slate-300 hover:text-sky-400 transition-colors">
            Nosotros
          </Link>
          <Link href="#contacto" className="text-slate-300 hover:text-sky-400 transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contacto"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded-md transition shadow-md shadow-sky-500/20"
          >
            Diagnóstico
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
          <Link
            href="#inicio"
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-sky-400 py-1 font-medium"
          >
            Inicio
          </Link>
          <Link
            href="#servicios"
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-sky-400 py-1 font-medium"
          >
            Servicios
          </Link>
          <Link
            href="#nosotros"
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-sky-400 py-1 font-medium"
          >
            Nosotros
          </Link>
          <Link
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-sky-400 py-1 font-medium"
          >
            Contacto
          </Link>
          <Link
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="bg-sky-500 hover:bg-sky-600 text-white text-center font-semibold text-xs uppercase tracking-wider py-2.5 rounded-md transition mt-2"
          >
            Diagnóstico
          </Link>
        </div>
      )}
    </header>
  );
}