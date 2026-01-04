import React from "react";
import { Hero222 } from "@/components/design-2/heroB";
import { ConceptText } from "@/components/design-2/concept-text";
import { Feature1b } from "@/components/design-2/feature1b";

export default function DesignPage2() {
  return (
    <>
      <div className="-mt-20">
        <Hero222 />
      </div>
      <div className="relative z-10 bg-background">
        <ConceptText />
        <Feature1b />
        <ConceptText
          label={null}
          title="UN LUGAR DONDE LA NATURALEZA, EL DISEÑO Y LA OPORTUNIDAD SE UNEN."
          buttonText="NUESTRA VISIÓN +"
        />
      </div>
    </>
  );
}
