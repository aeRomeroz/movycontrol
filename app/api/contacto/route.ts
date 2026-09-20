// app/api/contacto/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializas Resend con tu clave de API (la guardas en .env.local)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nombre, empresa, telefono, equipo, mensaje } = data;

    // Validación básica
    if (!nombre || !telefono || !equipo || !mensaje) {
      return NextResponse.json(
        { error: 'Por favor completa todos los campos requeridos.' },
        { status: 400 }
      );
    }

    // Envío del correo
    await resend.emails.send({
      from: 'MOVYCONTROL Web <onboarding@resend.dev>', // Correo emisor
      to: ['admin@movycontrol.com'], // <-- ¡AQUÍ PONES EL CORREO DONDE MOVYCONTROL RECIBIRÁ LAS SOLICITUDES!
      subject: `Nueva Solicitud de Diagnóstico: ${equipo}`,
      html: `
        <h2>Nueva Solicitud de Diagnóstico desde la Web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa / Planta:</strong> ${empresa || 'No especificada'}</p>
        <p><strong>Teléfono / WhatsApp:</strong> ${telefono}</p>
        <p><strong>Equipo y Marca:</strong> ${equipo}</p>
        <p><strong>Descripción de la Falla:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Solicitud de diagnóstico enviada correctamente por correo.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Intenta nuevamente.' },
      { status: 500 }
    );
  }
}