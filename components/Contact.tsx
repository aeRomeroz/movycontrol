// components/Contact.tsx
'use client';

import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    equipo: '',
    mensaje: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ nombre: '', empresa: '', telefono: '', equipo: '', mensaje: '' });
      } else {
        const errorData = await response.json();
        setErrorMsg(errorData.error || 'Ocurrió un error al enviar el correo.');
      }
    } catch (error) {
      setErrorMsg('Error de conexión. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Solicita un Diagnóstico
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Completa el formulario para enviar una solicitud formal por correo a nuestro equipo técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Formulario */}
          <div className="lg:col-span-7 bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-sky-500/10 text-sky-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-sky-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Correo Enviado!</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
                  Hemos recibido la información de tu equipo. Un ingeniero de nuestro taller se pondrá en contacto contigo a la brevedad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sky-400 hover:text-sky-300 text-sm font-semibold underline underline-offset-4"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-lg">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Ing. Juan Pérez"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Empresa / Planta
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. MOVYCONTROL"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+504 9999-9999"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Equipo y Marca *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Siemens SIMATIC S7"
                      value={formData.equipo}
                      onChange={(e) => setFormData({ ...formData, equipo: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Descripción del Problema *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe la falla del equipo, síntomas o códigos de error..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-500/50 text-white font-bold py-3.5 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando por Correo...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Solicitud por Correo
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Datos de Contacto */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-4">
                Información del Taller
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 text-sky-400 rounded-lg border border-slate-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Ubicación</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Búfalo, Cortés, Honduras.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 text-sky-400 rounded-lg border border-slate-800 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Atención Telefónica</h4>
                  <p className="text-sm text-slate-400">+504 0000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 text-sky-400 rounded-lg border border-slate-800 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Correo Electrónico</h4>
                  <p className="text-sm text-slate-400">servicios@movycontrol.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 text-sky-400 rounded-lg border border-slate-800 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Horario Técnico</h4>
                  <p className="text-sm text-slate-400">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}   