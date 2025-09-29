const AboutMe: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Imagen opcional */}
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64">
          <img
            src="avatar.webp" 
            alt="Jorge Zapata"
            className="w-full h-full rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Hola, soy Jorge Zapata</h2>
          <p className="text-gray-700 mb-4">
            Soy desarrollador de software especializado en soluciones de digitalización y automatización. 
            Me apasiona crear productos que faciliten procesos y ayuden a empresas a crecer de manera eficiente.
          </p>
          <p className="text-gray-700">
            Actualmente estoy trabajando en proyectos propios y ofreciendo servicios de software, 
            combinando experiencia técnica y enfoque práctico para lograr resultados reales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
