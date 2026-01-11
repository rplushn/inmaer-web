import React from "react";
import { UltraHero } from "@/components/design-2/ultra-hero";
import { ConceptText } from "@/components/design-2/section2-concept";
import { Section3Amenities } from "@/components/design-2/section3-amenities";
import { Section4Projects } from "@/components/design-2/section4-projects";
import { Section5Projects } from "@/components/design-2/section5-projects";
import { Section5Lifestyle } from "@/components/design-2/section5-lifestyle";
import { Section6Map } from "@/components/design-2/section6-map";
import { Section8ContactForm } from "@/components/design-2/section8-contact-form";
import { StorySection } from "@/components/design-2/nosotros/story-section";
import { ContactInfoHighlight } from "@/components/design-2/contacto/contact-info-highlight";
import { ValuesGrid } from "@/components/design-2/nosotros/values-grid";

export default function HomePage() {
  return (
    <>
      {/* 1. ULTRA HERO: Video Background & Powerful Message */}
      <UltraHero />
      
      <div className="relative z-10 bg-white" style={{ color: 'rgba(10, 10, 10, 1)' }}>
        
        {/* 2. INTRO NARRATIVA: Essence */}
        <ConceptText 
          label="NUESTRA ESENCIA"
          title="MÁS DE UNA DÉCADA CONSTRUYENDO EL FUTURO DE HONDURAS."
          description={
            <>
              <strong>Raíces en el Oriente.</strong>
              <br /><br />
              INMAER no es solo una desarrolladora inmobiliaria; somos el motor de crecimiento de la zona oriental. Nacimos en Danlí con la misión de transformar la manera en que las familias hondureñas invierten en su patrimonio.
            </>
          }
          className="py-32 md:py-48"
        />

        {/* 3. VIDEO LIFESTYLE: Emotional Connection */}
        <Section3Amenities />

        {/* 4. VALUE PROP: Smart Investment */}
        <StorySection 
          label="PROPUESTA DE VALOR"
          title="INVERSIÓN INTELIGENTE EN TIERRA FIRME"
          description={
            <>
              <p>En un mercado volátil, la tierra sigue siendo el activo más seguro. Pero no cualquier tierra.</p>
              <p>Nuestra especialidad es identificar zonas de <strong>alto potencial de apreciación</strong> antes que el mercado lo haga evidente. Al invertir con INMAER, no solo compras metros cuadrados; aseguras una posición estratégica en el desarrollo económico de Honduras.</p>
            </>
          }
          image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
        />

        {/* 5. DESIGN PHILOSOPHY: Conscious Urbanism */}
        <ConceptText
          label="DISEÑO"
          title="UN LUGAR DONDE LA NATURALEZA Y LA OPORTUNIDAD SE UNEN."
          description={
            <>
              <strong>Urbanismo Consciente.</strong>
              <br /><br />
              Cada proyecto es planificado respetando la topografía y el entorno natural, creando comunidades que respiran y perduran en el tiempo.
            </>
          }
          className="py-32 md:py-40"
        />
        
        {/* 6. PORTFOLIO: The Product */}
        <Section4Projects />

        {/* 7. STATS: Social Proof */}
        <Section5Projects className="bg-white" />

        {/* 8. LIFESTYLE STANDARD: Quality Assurance (Dark) */}
        <Section5Lifestyle />

        {/* 9. VALUES: Pillars of Trust */}
        <ValuesGrid />

        {/* 10. MAP: Strategic Locations */}
        <Section6Map />

        {/* 11. DIRECT LINE: Immediate Contact (New Requirement) */}
        <div className="border-t border-gray-100">
          <ContactInfoHighlight />
        </div>

        {/* 12. CLOSING FORM: Call to Action */}
        <div className="bg-[#2E2E2E]">
          <Section8ContactForm />
        </div>

      </div>
    </>
  );
}
