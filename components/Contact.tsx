import React, { useState } from "react";
import { sendContact } from "./services/ContactService";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await sendContact(form);
      setStatus("success");
      setFeedback(response.message);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "No se ha podido enviar el mensaje.");
    }
  };

  return (
    <section className="section-shell section-block" id="contacto">
      <div className="contact-grid">
        <div className="contact-copy">
          <SectionHeading
            eyebrow="CONTACTO"
            title="Hablemos."
            description="Si quieres escribirme sobre tecnología, proyectos, colaboración o trabajo, puedes hacerlo desde aquí."
          />

          <div className="contact-links">
            <a href="mailto:info@jorgezapata.es"><span>Email</span><strong>info@jorgezapata.es</strong></a>
            <a href="https://linkedin.com/in/jorgezapatatech" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>/in/jorgezapatatech</strong></a>
            <a href="https://github.com/jzapataa" target="_blank" rel="noreferrer"><span>GitHub</span><strong>@jzapataa</strong></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} required />
          </div>
          <button className="button button-primary submit-button" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando…" : "Enviar mensaje"} <span aria-hidden="true">→</span>
          </button>
          {feedback && (
            <p className={`form-feedback ${status === "error" ? "form-feedback-error" : ""}`} role="status">
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
