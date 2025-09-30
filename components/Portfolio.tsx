import React from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  imageUrl: string; // path relativo a /public
  link: string;
};

const projects: Project[] = [
  {
    title: "Fepemur.org",
    description:
      "Página web de la Federación de Peñas del Real Murcia, diseño responsive y optimización móvil.",
    imageUrl: "/portafolio/fepemur.png",
    link: "https://fepemur.org",
  },
  // Añade más proyectos aquí
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">💼 Portafolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portafolio bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition cursor-pointer"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
