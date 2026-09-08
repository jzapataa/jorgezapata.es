import type { GetServerSideProps } from "next";
import Link from "next/link";
import DownloadLink from "@/components/DownloadLink";
import { MainLayout } from "@/components/layouts/MainLayout";
import SiteHead from "@/components/SiteHead";
import { getResourceBySlug, type Resource } from "@/data/resources";
import { getDownloadCount } from "@/lib/downloads";

type ResourceDetailProps = {
  resource: Resource;
  downloadCount: number;
};

export default function ResourceDetailPage({ resource, downloadCount }: ResourceDetailProps) {
  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(`${resource.updatedAt}T12:00:00Z`));

  return (
    <>
      <SiteHead
        title={`${resource.name} | Recursos de Jorge Zapata`}
        description={resource.description}
        canonicalPath={`/recursos/${resource.slug}`}
        image={resource.image || "/avatar.webp"}
      />
      <MainLayout>
        <section className="resource-detail-hero section-shell">
          <Link href="/recursos" className="breadcrumb">← Recursos</Link>
          <span className="resource-detail-category">{resource.category}</span>
          <h1>{resource.name}</h1>
          <p>{resource.description}</p>
        </section>

        <div className="section-shell resource-detail-grid">
          <div className="resource-detail-content">
            <div className="resource-preview">
              <div className="resource-preview-grid" aria-hidden="true" />
              <div className="resource-preview-card">
                <span>{resource.category.toUpperCase()}</span>
                <strong>{resource.name}</strong>
                <small>{resource.platform.join(" · ")}</small>
              </div>
            </div>

            <section className="detail-section">
              <p className="eyebrow">QUÉ HACE</p>
              <h2>Una automatización pequeña para quitar trabajo repetitivo.</h2>
              <ul className="detail-list">
                {resource.whatItDoes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="detail-section">
              <p className="eyebrow">REQUISITOS</p>
              <h2>Antes de empezar.</h2>
              <ul className="detail-list">
                {resource.requirements.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="detail-section">
              <p className="eyebrow">INSTALACIÓN</p>
              <h2>Cómo ponerlo en marcha.</h2>
              <ol className="instruction-list">
                {resource.instructions.map((item, index) => (
                  <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
                ))}
              </ol>
            </section>

            {resource.tutorialUrl && (
              <section className="detail-section">
                <p className="eyebrow">TUTORIAL</p>
                <h2>Ver cómo funciona.</h2>
                <a className="text-link" href={resource.tutorialUrl} target="_blank" rel="noreferrer">
                  Abrir vídeo/tutorial <span aria-hidden="true">→</span>
                </a>
              </section>
            )}
          </div>

          <aside className="resource-download-card">
            <p className="eyebrow">OBTENER RECURSO</p>
            <h2>{resource.name}</h2>
            <div className="download-meta">
              <div><span>Versión</span><strong>{resource.version}</strong></div>
              <div><span>Actualizado</span><strong>{formattedDate}</strong></div>
              <div><span>Descargas</span><strong>{downloadCount.toLocaleString("es-ES")}</strong></div>
            </div>
            <DownloadLink
              slug={resource.slug}
              name={resource.name}
              category={resource.category}
              available={resource.available}
              className="button button-primary download-button"
            >
              Descargar / Obtener <span aria-hidden="true">→</span>
            </DownloadLink>
            <div className="compatibility">
              <span>Compatible con</span>
              <div>{resource.platform.map((item) => <i key={item}>{item}</i>)}</div>
            </div>
          </aside>
        </div>

        <div className="mobile-download-bar">
          <div><small>{resource.category}</small><strong>{resource.name}</strong></div>
          <DownloadLink
            slug={resource.slug}
            name={resource.name}
            category={resource.category}
            available={resource.available}
            className="button button-primary button-small"
          >
            Obtener
          </DownloadLink>
        </div>
      </MainLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ResourceDetailProps> = async ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const resource = getResourceBySlug(slug);
  if (!resource) return { notFound: true };

  try {
    return { props: { resource, downloadCount: await getDownloadCount(slug) } };
  } catch (error) {
    console.error("No se ha podido cargar el contador del recurso", error);
    return { props: { resource, downloadCount: 0 } };
  }
};
