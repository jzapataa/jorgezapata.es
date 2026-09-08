import type { GetServerSideProps } from "next";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import FeaturedResources from "@/components/FeaturedResources";
import Hero from "@/components/Hero";
import { MainLayout } from "@/components/layouts/MainLayout";
import Projects from "@/components/Projects";
import SiteHead from "@/components/SiteHead";
import TechStack from "@/components/TechStack";
import { getDownloadCounts, type DownloadCounts } from "@/lib/downloads";

type HomeProps = {
  downloadCounts: DownloadCounts;
};

export default function Home({ downloadCounts }: HomeProps) {
  return (
    <>
      <SiteHead />
      <MainLayout>
        <Hero />
        <FeaturedResources downloadCounts={downloadCounts} />
        <TechStack />
        <Projects />
        <AboutMe />
        <Contact />
      </MainLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    return { props: { downloadCounts: await getDownloadCounts() } };
  } catch (error) {
    console.error("No se han podido cargar los contadores de descarga", error);
    return { props: { downloadCounts: {} } };
  }
};
