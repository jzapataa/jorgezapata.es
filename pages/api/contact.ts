import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type ContactResponse = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { name, email, message } = req.body as ContactForm;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

  try {
    // Crear el transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
    });

    // 1️⃣ Correo de agradecimiento al remitente
    await transporter.sendMail({
      from: `"Jorge Zapata" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Gracias por contactarme",
      text: `Hola ${name}, gracias por tu mensaje. Me pondré en contacto contigo a la mayor brevedad posible.`,
      html: `<p>Hola <strong>${name}</strong>,</p>
             <p>Gracias por tu mensaje. Me pondré en contacto contigo a la mayor brevedad posible.</p>`,
    });

    // 2️⃣ Correo de notificación a ti mismo (info@jorgezapata.es)
    await transporter.sendMail({
      from: `"Web Contacto" <${process.env.MAIL_USER}>`,
      to: "info@jorgezapata.es",
      subject: `Nuevo contacto de ${name}`,
      text: `Nuevo mensaje recibido:

Nombre: ${name}
Correo: ${email}
Mensaje: ${message}`,
    });


    return res
      .status(200)
      .json({ message: "Email enviado, notificación recibida y contacto guardado ✅" });
  } catch (error) {
    console.error("❌ Error al enviar correo o guardar:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}
