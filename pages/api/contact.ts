import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type ContactResponse = {
  message: string;
};

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { name, email, message } = req.body as Partial<ContactForm>;
  const cleanName = name?.trim();
  const cleanEmail = email?.trim();
  const cleanMessage = message?.trim();

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return res.status(400).json({ message: "Completa todos los campos obligatorios." });
  }

  if (!isValidEmail(cleanEmail) || cleanName.length > 100 || cleanEmail.length > 200 || cleanMessage.length > 5000) {
    return res.status(400).json({ message: "Revisa los datos del formulario." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
    });

    await transporter.sendMail({
      from: `"Jorge Zapata" <${process.env.MAIL_USER}>`,
      to: cleanEmail,
      subject: "Gracias por contactarme",
      text: `Hola ${cleanName}, gracias por tu mensaje. Me pondré en contacto contigo lo antes posible.`,
    });

    await transporter.sendMail({
      from: `"Web Contacto" <${process.env.MAIL_USER}>`,
      to: "info@jorgezapata.es",
      replyTo: cleanEmail,
      subject: `Nuevo contacto de ${cleanName}`,
      text: `Nuevo mensaje recibido:\n\nNombre: ${cleanName}\nCorreo: ${cleanEmail}\nMensaje: ${cleanMessage}`,
    });

    return res.status(200).json({ message: "Mensaje enviado correctamente." });
  } catch (error) {
    console.error("Error enviando formulario de contacto", error);
    return res.status(500).json({ message: "No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde." });
  }
}
