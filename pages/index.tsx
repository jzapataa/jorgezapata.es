import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Portfolio } from "@/components/Portfolio";
import Products from "@/components/Products";
import Skills from "@/components/Skills";
import Head from "next/head";
import React from "react";

const Home: React.FC = () => {
return (
  <html lang="es">
    <Head>
      <title>Jorge Zapata - Desarrollo web</title>
      <meta
        name="description"
        content="Construyo páginas web modernas y chatbots personalizados. Digitaliza tu negocio conmigo 🚀" />

    </Head>

    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <MainLayout>
        <AboutMe />
        <Skills />
        <Products />
        <Portfolio />
        <Contact />
        </MainLayout>
    </div>
  </html>
)


};


export default Home;