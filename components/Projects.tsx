import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section className="section-shell section-block" id="proyectos">
      <SectionHeading eyebrow="PROYECTOS" title="Cosas que estoy construyendo." />
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
        <div className="project-placeholder" aria-label="Próximos proyectos">
          <span aria-hidden="true">+</span>
          <strong>Próximos proyectos</strong>
          <p>Más cosas en camino.</p>
        </div>
      </div>
    </section>
  );
}
