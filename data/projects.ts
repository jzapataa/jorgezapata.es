export type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Fepemur.org",
    description:
      "Web de la Federación de Peñas Murcianistas, diseñada para centralizar información, actualidad y recursos de la federación con una experiencia responsive.",
    technologies: ["Next.js", "TypeScript", "Responsive", "SEO"],
    image: "/portafolio/fepemur.png",
    url: "https://fepemur.org",
  },
];
