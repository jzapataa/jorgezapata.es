export type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  imageFit?: "cover" | "contain";
  url: string;
  urlLabel?: string;
  githubUrl?: string;
  version?: string;
};

export const projects: Project[] = [
  {
    name: "Fepemur.org",
    description:
      "Web de la Federación de Peñas Murcianistas, diseñada para centralizar información, actualidad y recursos de la federación con una experiencia responsive.",
    technologies: ["WordPress", "Responsive", "SEO"],
    image: "/portafolio/fepemur.png",
    url: "https://fepemur.org",
  },
  {
    name: "Jira Story Analyzer",
    version: "v1.0.1",
    description:
      "Analizador de historias de Jira con IA que evalúa primero si una historia está suficientemente definida antes de generar una estimación. Detecta gaps, riesgos, supuestos y preguntas pendientes, y solo muestra horas cuando existe un rango defendible.",
    technologies: ["Python 3.12", "Streamlit", "Gemini 2.5 Flash Lite", "Pydantic", "Pytest", "GitHub Actions"],
    image: "/portafolio/jira-story-analyzer.svg",
    imageFit: "contain",
    url: "https://jira-story-analyzer-jz.streamlit.app",
    urlLabel: "Ver demo",
    githubUrl: "https://github.com/jzapataa/asistente-historias-agile",
  },
];
