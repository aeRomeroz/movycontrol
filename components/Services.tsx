// components/Services.tsx
import { Wrench, Cpu, Activity, Gauge, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Reparación Especializada',
    description:
      '',
    badge: 'Electrónica',
  },
  {
    icon: Cpu,
    title: 'Mantenimiento Preventivo',
    description:
      '',
    badge: 'Preventivo / Correctivo',
  },
  {
    icon: Activity,
    title: 'Diagnóstico de Fallas',
    description:
      '',
    badge: 'Análisis Técnico',
  },
  {
    icon: Gauge,
    title: 'Pruebas de Alto Rendimiento',
    description:
      '',
    badge: 'Pruebas de Carga',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Soporte técnico integral de laboratorio e ingeniería para la recuperación y optimización de sus sistemas automatizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-950/60 border border-slate-800 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-sky-400 transition-colors">
                  <span>Solicitar atención</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}