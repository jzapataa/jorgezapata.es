// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <>
        {/* Metricool */}
        <Script
        id="metricool-tracker"
        strategy="afterInteractive" // Se carga después de que la página sea interactiva
        dangerouslySetInnerHTML={{
          __html: `
            function loadScript(a){
              var b=document.getElementsByTagName("head")[0],
              c=document.createElement("script");
              c.type="text/javascript";
              c.src="https://tracker.metricool.com/resources/be.js";
              c.onreadystatechange=a;
              c.onload=a;
              b.appendChild(c)
            }
            loadScript(function(){
              beTracker.t({hash:"47fe950fbcb48cd7241bfccef88e749a"})
            });
          `,
        }}
      />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-LWFTZ058XY`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LWFTZ058XY,');
          `}
        </Script>
  
  <Component {...pageProps} />;

  </>
  );
}
