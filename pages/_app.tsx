// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LWFTZ058XY"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-LWFTZ058XY');
    </script>
    
  
  <Component {...pageProps} />;
    </>
      );
}
