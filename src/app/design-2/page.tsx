import React from "react";
import { Hero } from "@/components/design-2/hero";
import { ConceptText } from "@/components/design-2/section2-concept";
import { Section3Amenities } from "@/components/design-2/section3-amenities";
import { Section4Projects } from "@/components/design-2/section4-projects";

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
      </div>
    </>
  );
}
