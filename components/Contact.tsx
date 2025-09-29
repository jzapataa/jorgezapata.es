import React, { useState } from "react";
import { sendContact } from "./services/ContactService";

const Contact: React.FC = () => {
const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await sendContact(form);
    console.log(response);
    alert(response.message);
  };

  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          📬 Contacto
        </h3>

        <p className="text-center text-gray-600 mb-12">
          ¿Tienes un proyecto en mente o quieres más información?  
          Completa el formulario y te responderé lo antes posible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6"
        >
          {/* Nombre */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#30CDBC] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#30CDBC] focus:outline-none"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Mensaje
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#30CDBC] focus:outline-none"
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#46EE7C] to-[#30CDBC] text-[#45417D] font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition cursor-pointer hover:text-white"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
