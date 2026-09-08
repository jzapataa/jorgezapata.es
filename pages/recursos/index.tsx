import type { GetServerSideProps } from "next";
import { useMemo, useState } from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import ResourceCard from "@/components/ResourceCard";
import SiteHead from "@/components/SiteHead";
import { resources, type ResourceCategory } from "@/data/resources";
import { getDownloadCounts, type DownloadCounts } from "@/lib/downloads";

const categories: Array<"Todos" | ResourceCategory> = [
  "Todos",
  "Atajo",
  "Plantilla",
  "Script",
  "Herramienta",
  "Guía",
];

type ResourcesPageProps = {
  downloadCounts: DownloadCounts;
};

export default function ResourcesPage({ downloadCounts }: ResourcesPageProps) {
  const [category, setCategory] = useState<(typeof categories)[number]>("Todos");
  const visibleResources = useMemo(
    () => category === "Todos" ? resources : resources.filter((resource) => resource.category === category),
    [category]
  );

  return (
    <>
      <SiteHead
        title="Recursos | Jorge Zapata"
        description="Atajos de iPhone, automatizaciones, plantillas, scripts y herramientas gratuitas creadas por Jorge Zapata."
        canonicalPath="/recursos"
      />
      <MainLayout>
        <section className="page-hero section-shell">
          <p className="eyebrow">RECURSOS</p>
          <h1>Herramientas que puedes usar de verdad.</h1>
          <p>
            Atajos, automatizaciones, plantillas y pequeños recursos que creo para resolver problemas concretos y comparto aquí.
          </p>
        </section>

        <section className="section-shell resources-library" aria-label="Biblioteca de recursos">
          <div className="resource-filters" role="group" aria-label="Filtrar recursos por categoría">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "filter-active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {visibleResources.length > 0 ? (
            <div className="resource-grid resource-grid-library">
              {visibleResources.map((resource) => (
                <ResourceCard
                  key={resource.slug}
                  resource={resource}
                  downloadCount={downloadCounts[resource.slug]}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>Todavía no hay recursos en esta categoría.</p>
              <span>Irán apareciendo conforme los vaya publicando.</span>
            </div>
          )}
        </section>
      </MainLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ResourcesPageProps> = async ({ res }) => {
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");

  try {
    return { props: { downloadCounts: await getDownloadCounts() } };
  } catch (error) {
    console.error("No se han podido cargar los contadores de descarga", error);
    return { props: { downloadCounts: {} } };
  }
};
