import SectionHeading from "./SectionHeading";

const groups = [
  { title: "Backend", items: ["Java", "Spring Boot", "APIs"] },
  { title: "Frontend", items: ["Angular", "React", "Next.js"] },
  { title: "Data & Platform", items: ["PostgreSQL", "Docker", "Infraestructura"] },
  { title: "IA & Automatización", items: ["IA aplicada", "Agentes", "Automatización"] },
];

export default function TechStack() {
  return (
    <section className="section-shell section-block" id="stack">
      <SectionHeading eyebrow="TECNOLOGÍAS" title="Un stack para construir, automatizar y escalar." />
      <div className="tech-grid">
        {groups.map((group) => (
          <article key={group.title} className="tech-card">
            <div className="tech-card-icon" aria-hidden="true">◫</div>
            <div>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <span className="tech-arrow" aria-hidden="true">→</span>
          </article>
        ))}
      </div>
    </section>
  );
}
