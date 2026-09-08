import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function AboutMe() {
  return (
    <section className="section-shell section-block" id="sobre-mi">
      <div className="about-grid">
        <div className="about-image-wrap">
          <div className="about-image-glow" aria-hidden="true" />
          <Image
            src="/avatar.webp"
            alt="Jorge Zapata"
            width={280}
            height={280}
            className="about-image"
          />
        </div>

        <div className="about-copy">
          <SectionHeading eyebrow="SOBRE MÍ" title="Desarrollo software y siempre tengo algo entre manos." />
          <p>
            Trabajo principalmente en desarrollo de software y arquitectura de aplicaciones. Me interesan
            especialmente el backend, la IA aplicada, la automatización y construir productos que resuelvan
            problemas reales.
          </p>
          <p>
            Esta web es el lugar donde junto esos proyectos, experimentos y recursos, y donde comparto lo
            que voy aprendiendo mientras los construyo.
          </p>
          <div className="about-pill-row" aria-label="Áreas de interés">
            <span>Software</span>
            <span>IA aplicada</span>
            <span>Productos & automatización</span>
          </div>
        </div>
      </div>
    </section>
  );
}
