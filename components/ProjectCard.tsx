import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = { project: Project };

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <Image
          src={project.image}
          alt={`Captura de ${project.name}`}
          fill
          className="project-image"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </div>
      <div className="project-content">
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-tags">
          {project.version && <span>{project.version}</span>}
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="project-actions">
          <a className="button button-primary button-small" href={project.url} target="_blank" rel="noreferrer">
            {project.urlLabel ?? "Ver proyecto"} <span aria-hidden="true">→</span>
          </a>
          {project.githubUrl && (
            <a className="button button-secondary button-small" href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
