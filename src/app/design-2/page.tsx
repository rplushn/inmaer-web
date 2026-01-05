import React from "react";
import { Hero } from "@/components/design-2/hero";
import { ConceptText } from "@/components/design-2/section2-concept";
import { Section3Amenities } from "@/components/design-2/section3-amenities";
import { Section4Projects } from "@/components/design-2/section4-projects";
import { Section5Projects } from "@/components/design-2/section5-projects";
import { Section6Map } from "@/components/design-2/section6-map";
import { Section7Projects } from "@/components/design-2/section7-projects";
import { Section8Cta1 } from "@/components/design-2/section8-cta1";

export default function DesignPage2() {
  return (
    <>
      <div className="-mt-20">
        <Hero />
      </div>
      <div className="relative z-10 bg-background" style={{ color: 'rgba(10, 10, 10, 1)' }}>
        <ConceptText />
        <Section3Amenities />
        <ConceptText
          label={null}
          title="UN LUGAR DONDE LA NATURALEZA, EL DISEÑO Y LA OPORTUNIDAD SE UNEN."
          buttonText="NUESTRA VISIÓN +"
        />
        
        <Section4Projects />
        <Section5Projects
          sectionLabel="Nuestro Impacto"
          heading="Transformando ideas en experiencias duraderas, "
          subheading="a través de diseño cuidadoso y tecnología confiable."
          descriptionHeading="Construido para crecer, no solo para lanzar."
          description=" Creamos productos digitales que escalan con tu negocio. Desde el concepto hasta la producción, nuestro equipo se enfoca en rendimiento, precisión y sistemas de diseño que resisten el paso del tiempo."
          image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg"
          stats={[
            {
              value: "120+",
              label: "Proyectos lanzados a nivel mundial",
              description:
                "Desde startups hasta marcas globales, hemos ayudado a más de 120 clientes a construir experiencias digitales significativas que generan impacto medible.",
            },
            {
              value: "98%",
              label: "Tasa de retención de clientes",
              logos: [
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
              ],
            },
          ]}
        />
        <Section6Map />
        <Section7Projects />
        <Section8Cta1 />
      </div>
    </>
  );
}
