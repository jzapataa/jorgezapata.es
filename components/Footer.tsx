import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div>
          <div className="footer-brand">
            <span>Jorge Zapata</span>
            <i aria-hidden="true" />
          </div>
          <p>Software · IA · Automatización · Tecnología</p>
        </div>

        <nav className="footer-nav" aria-label="Navegación de pie de página">
          <Link href="/">Inicio</Link>
          <Link href="/recursos">Recursos</Link>
          <Link href="/#proyectos">Proyectos</Link>
          <Link href="/#sobre-mi">Sobre mí</Link>
          <Link href="/#contacto">Contacto</Link>
        </nav>

        <div className="footer-socials">
          <a href="https://github.com/jzapataa" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/jorgezapatatech" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com/JorgeBytes" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com/@JorgeBytes" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>

      <div className="section-shell footer-bottom">
        <span>© {new Date().getFullYear()} Jorge Zapata</span>
        <span className="footer-line" aria-hidden="true" />
        <span>Construyendo, probando y compartiendo.</span>
      </div>
    </footer>
  );
}
