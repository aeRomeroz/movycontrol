import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wrench, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-slate-950 text-white overflow-hidden py-20 lg:py-28 border-b border-slate-800">
      <div className="absolute inset-0 z-0">
        <Image
          src="/taller_hero.png"
          alt="Fondo Taller MOVYCONTROL"
          fill
          priority
          className="object-cover object-center opacity-20"
        />
      </div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-slate-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />
    
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Servicio Técnico en Automatización Industrial</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
            Soluciones Especializadas en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Automatización Industrial
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Reparación, mantenimiento, diagnóstico de fallas y pruebas de rendimiento para tarjetas electrónicas, servomotores y equipos de control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3.5 px-7 rounded-lg transition-all shadow-lg shadow-sky-500/25"
            >
              Solicitar Diagnóstico
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800 text-slate-200 font-semibold py-3.5 px-7 rounded-lg transition-all"
            >
              Explorar Servicios
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-900 rounded-md text-sky-400 border border-slate-800">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Soporte Técnico</p>
                <p className="text-xs text-slate-400">Preventivo y correctivo</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-900 rounded-md text-sky-400 border border-slate-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Garantía de Calidad</p>
                <p className="text-xs text-slate-400">Pruebas en taller</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="p-2 bg-slate-900 rounded-md text-sky-400 border border-slate-800">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Respuesta Rápida</p>
                <p className="text-xs text-slate-400">Diagnóstico oportuno</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}