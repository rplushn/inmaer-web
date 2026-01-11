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
import { StorySection } from "@/components/design-2/nosotros/story-section";

export default function DesignPage2() {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-white" style={{ color: 'rgba(10, 10, 10, 1)' }}>
        
        {/* 1. INTRO NARRATIVA (Replicando estilo de Nosotros) */}
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

        {/* 2. VIDEO / LIFESTYLE (Amenities) */}
        <Section3Amenities />

        {/* 3. NARRATIVA DE VALOR (Nueva Sección agregada para consistencia) */}
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

        {/* 4. FILOSOFÍA DE DISEÑO */}
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
        
        {/* 5. PORTAFOLIO DE PROYECTOS */}
        <Section4Projects />

        {/* 6. RESULTADOS (Stats) */}
        <Section5Projects className="bg-white" />

        {/* 7. ESTÁNDAR INMAER (Dark Section) */}
        <Section5Lifestyle />

        {/* 8. MAPA */}
        <Section6Map />

        {/* 9. CIERRE / AMENIDADES (Dark) */}
        <div>
          <Section7Projects />
          
          {/* Light Break Section - Closing Philosophy */}
          <ConceptText 
            label="COMPROMISO"
            title="INNOVACIÓN QUE PERDURA."
            description={
              <>
                <strong>Tu legado comienza hoy.</strong>
                <br /><br />
                Cada decisión que tomamos, desde la ubicación del terreno hasta el último detalle de urbanización, está pensada para proteger y multiplicar tu inversión a largo plazo.
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
