import Link from "next/link";
import type { Resource } from "@/data/resources";
import DownloadLink from "./DownloadLink";

type ResourceCardProps = {
  resource: Resource;
  downloadCount?: number | null;
};

export default function ResourceCard({ resource, downloadCount = 0 }: ResourceCardProps) {
  return (
    <article className="resource-card">
      <Link href={`/recursos/${resource.slug}`} className="resource-card-main">
        <div className="resource-card-topline">
          <span className="resource-icon" aria-hidden="true">⌁</span>
          <span className="resource-category">{resource.category.toUpperCase()} · {resource.platform[0].toUpperCase()}</span>
        </div>
        <h3>{resource.name}</h3>
        <p>{resource.description}</p>
        <div className="resource-meta">
          <span>v{resource.version}</span>
          <span>{resource.platform.slice(0, 2).join(" · ")}</span>
          <span>↓ {(downloadCount ?? 0).toLocaleString("es-ES")}</span>
        </div>
      </Link>
      <DownloadLink
        slug={resource.slug}
        name={resource.name}
        category={resource.category}
        available={resource.available}
        className="resource-card-action"
      >
        Obtener recurso <span aria-hidden="true">→</span>
      </DownloadLink>
    </article>
  );
}
