import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Envío por Zoho SMTP. Los dos dominios (lostaninos.cl + proyectoazafranes.cl)
// están en la misma cuenta de Zoho (superadmin contacto@lostaninos.cl),
// por eso se autentica con ese buzón y el correo va dirigido al buzón de Azafranes.
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const nombre = String(data.nombre || "").trim();
    const email = String(data.email || "").trim();
    const telefono = String(data.telefono || "").trim();
    const mensaje = String(data.mensaje || "").trim();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { success: false, error: "faltan campos requeridos" },
        { status: 400 },
      );
    }
    if (!email.includes("@") || !email.split("@")[1]?.includes(".")) {
      return NextResponse.json({ success: false, error: "email inválido" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "contacto@lostaninos.cl",
        pass: process.env.SMTP_PASS || "",
      },
    });

    await transporter.sendMail({
      from: '"Proyecto Azafranes (web)" <contacto@lostaninos.cl>',
      to: process.env.CONTACT_EMAIL || "contacto@proyectoazafranes.cl",
      replyTo: email,
      subject: "Nuevo contacto web — Proyecto Azafranes",
      text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje}`,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Error envío contacto Azafranes:", e);
    return NextResponse.json(
      { success: false, error: "no se pudo enviar" },
      { status: 500 },
    );
  }
}
