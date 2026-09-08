import Link from "next/link";
import { featuredResources } from "@/data/resources";
import ResourceCard from "./ResourceCard";
import SectionHeading from "./SectionHeading";

type FeaturedResourcesProps = {
  downloadCounts?: Record<string, number>;
};

export default function FeaturedResources({ downloadCounts = {} }: FeaturedResourcesProps) {
  return (
    <section className="section-shell section-block" id="recursos">
      <div className="section-heading-row">
        <SectionHeading
          eyebrow="RECURSOS"
          title="Recursos para hacer más con la tecnología."
          description="Atajos, automatizaciones, plantillas y herramientas que voy creando y compartiendo."
        />
        <Link href="/recursos" className="text-link">
          Ver todos los recursos <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="resource-grid">
        {featuredResources.map((resource) => (
          <ResourceCard
            key={resource.slug}
            resource={resource}
            downloadCount={downloadCounts[resource.slug]}
          />
        ))}
      </div>
    </section>
  );
}
