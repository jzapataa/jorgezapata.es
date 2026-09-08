import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">JORGE ZAPATA</p>
          <h1 id="hero-title">
            Software, IA y <span>automatización.</span>
          </h1>
          <p className="hero-lead">Tecnología que construyo, pruebo y comparto.</p>
          <p className="hero-description">
            Desarrollo software, exploro el potencial de la inteligencia artificial y creo
            herramientas que me hacen la vida más fácil. Aquí comparto proyectos, recursos y
            todo lo que voy aprendiendo por el camino.
          </p>

          <div className="hero-actions">
            <Link href="/recursos" className="button button-primary">
              Explorar recursos <span aria-hidden="true">→</span>
            </Link>
            <a className="button button-secondary" href="https://github.com/jzapataa" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              className="button button-secondary"
              href="https://linkedin.com/in/jorgezapatatech"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="hero-stack" aria-label="Tecnologías principales">
            <span>TECNOLOGÍAS PRINCIPALES</span>
            <p>Java · Spring Boot · Next.js · IA aplicada · Automatización</p>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="tech-orbit tech-orbit-one" />
          <div className="tech-orbit tech-orbit-two" />
          <div className="code-panel">
            <div className="window-dots"><i /><i /><i /></div>
            <pre><code>{`// Ideas que se convierten en herramientas
const betterTools = {
  automate: true,
  create: true,
  share: true
}`}</code></pre>
          </div>
          <div className="mini-resource-panel">
            <span className="mini-icon">⌁</span>
            <div>
              <strong>Registro de gastos</strong>
              <small>Atajo de iPhone</small>
            </div>
            <span className="mini-arrow">→</span>
          </div>
          <div className="build-label">
            <span>BUILD</span>
            <span>CREATE</span>
            <span>SHARE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
