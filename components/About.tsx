// components/About.tsx
import Image from 'next/image';
import { CheckCircle2, Shield, Wrench, Award } from 'lucide-react';

const features = [
  'Laboratorio especializado en electrónica de potencia y control.',
  'Diagnóstico preciso mediante pruebas estáticas y dinámicas.',
  'Mantenimiento preventivo para reducir tiempos muertos en planta.'
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-6">
              <Award className="w-3.5 h-3.5" />
              <span>Sobre MOVYCONTROL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Comprometidos con la continuidad operativa de tu industria
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              En <strong className="text-white">MOVYCONTROL</strong> brindamos soluciones integrales para el sector industrial. Nos especializamos en la reparación, diagnóstico y mantenimiento de equipos de automatización, garantizando estándares óptimos de rendimiento.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-lg text-sky-400 border border-slate-800">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Garantía</h4>
                  <p className="text-xs text-slate-400">En cada reparación</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-lg text-sky-400 border border-slate-800">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Taller Técnico</h4>
                  <p className="text-xs text-slate-400">Equipamiento moderno</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
            <div className="relative h-[380px] sm:h-[460px] w-full">
              <Image
                src="/taller_general.png"
                alt="Taller de servicio MOVYCONTROL"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            </div>

            <div className="absolute bottom-0 inset-x-0 p-6 bg-slate-950/80 backdrop-blur-md border-t border-slate-800">
              <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
                Instalaciones Técnicas
              </p>
              <p className="text-sm text-slate-200">
                Instalaciones equipadas para pruebas dinámicas y diagnósticos de alta precisión.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}