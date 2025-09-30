// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Configuración básica */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Jorge Zapata - Desarrollo de páginas web, automatizaciones y soluciones digitales personalizadas."
        />
        <meta name="author" content="Jorge Zapata" />
        <meta name="theme-color" content="#30CDBC" />

        {/* SEO */}
        <meta property="og:title" content="Jorge Zapata - Desarrollo Web & Automatización" />
        <meta
          property="og:description"
          content="Construyo páginas web modernas y chatbots personalizados. ¿Quieres digitalizar tu negocio? Contacta conmigo."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jorgezapata.es" />
        <meta property="og:image" content="https://jorgezapata.es/avatar.webp" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
