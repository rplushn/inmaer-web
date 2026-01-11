import React from "react";
import { Hero } from "@/components/design-2/hero";
import { ConceptText } from "@/components/design-2/section2-concept";
import { Section3Amenities } from "@/components/design-2/section3-amenities";
import { Section4Projects } from "@/components/design-2/section4-projects";
import { Section5Projects } from "@/components/design-2/section5-projects";
import { Section5Lifestyle } from "@/components/design-2/section5-lifestyle";
import { Section6Map } from "@/components/design-2/section6-map";
import Section7Projects from "@/components/design-2/section7-projects";
import { Section8ContactForm } from "@/components/design-2/section8-contact-form";

export default function DesignPage2() {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-transparent" style={{ color: 'rgba(10, 10, 10, 1)' }}>
        <div className="space-y-32 md:space-y-40 pb-32 md:pb-40">
          <ConceptText />
          <Section3Amenities />
          <ConceptText
            label={null}
            title="UN LUGAR DONDE LA NATURALEZA, EL DISEÑO Y LA OPORTUNIDAD SE UNEN."
            buttonText="NUESTRA VISIÓN +"
          />
          
          <Section4Projects />
          <Section5Projects />
          <Section5Lifestyle />
          <Section6Map />
        </div>
        
        {/* Dark Footer Area */}
        <div>
          <Section7Projects />
          
          {/* Light Break Section - Elegant Layout */}
          <ConceptText 
            label="FILOSOFÍA"
            title="INNOVACIÓN QUE PERDURA."
            description={
              <>
                <strong>Tu inversión merece lo extraordinario.</strong>
                <br /><br />
                Cada proyecto de INMAER es un testimonio de nuestra dedicación a la excelencia, el diseño sostenible y el valor a largo plazo. No solo construimos espacios, elevamos estándares.
              </>
            }
            className="bg-white text-black py-48 md:py-64"
          />

          <Section8ContactForm />
        </div>
      </div>
    </>
  );
}
