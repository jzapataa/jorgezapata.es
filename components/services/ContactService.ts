type ContactForm = { name: string; email: string; message: string };
type ContactResponse = { message: string };

export const sendContact = async (form: ContactForm): Promise<ContactResponse> => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Error enviando formulario");
  }

  return res.json();
};
