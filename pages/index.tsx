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
  <>
    <Head>
      <title>Jorge Zapata | Desarrollo web</title>
      <meta
        name="description"
        content="Soy Jorge ZSapata, especialista en desarrollo web y automatización de procesos cotidianos como chatbots y bots de correo" />
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
  </>
)


};


export default Home;