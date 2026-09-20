// app/api/contacto/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn('⚠️ RESEND_API_KEY no encontrada.');
      return NextResponse.json(
        { error: 'Configuración de correo no encontrada en el servidor.' },
        { status: 500 }
      );
    }

    // Instanciar Resend DENTRO de la función POST
    const resend = new Resend(apiKey);

    const response = await resend.emails.send({ 
      from: 'MOVYCONTROL Web <admin@movycontrol.com>',
      to: ['admin@movycontrol.com'],
      subject: `Nueva Solicitud de Diagnóstico: ${equipo}`,
      html: `
        <h2>Nueva Solicitud de Diagnóstico</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa / Planta:</strong> ${empresa || 'No especificada'}</p>
        <p><strong>Teléfono / WhatsApp para Respuesta:</strong> ${telefono}</p>
        <p><strong>Equipo y Marca:</strong> ${equipo}</p>
        <p><strong>Descripción del Problema:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    if (response.error) {
      console.error('Error de Resend:', response.error);
      return NextResponse.json(
        { error: 'Error al enviar el correo.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Solicitud enviada correctamente.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en API contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}