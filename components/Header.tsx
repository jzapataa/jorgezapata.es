import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Recursos", href: "/recursos" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return router.pathname === "/";
    if (href === "/recursos") return router.pathname.startsWith("/recursos");
    return false;
  };

  return (
    <header className="site-nav-wrap">
      <nav className="site-nav" aria-label="Navegación principal">
        <Link href="/" className="brand" aria-label="Jorge Zapata, inicio">
          <span>Jorge Zapata</span>
          <span className="brand-mark" aria-hidden="true" />
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="desktop-socials" aria-label="Redes profesionales">
          <a href="https://github.com/jzapataa" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jorgezapatatech"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      {open && (
        <div id="mobile-navigation" className="mobile-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="mobile-socials">
            <a href="https://github.com/jzapataa" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jorgezapatatech"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
