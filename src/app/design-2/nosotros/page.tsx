import React from "react";
import { NosotrosHero } from "@/components/design-2/nosotros/nosotros-hero";
import { ConceptText } from "@/components/design-2/section2-concept";
import { StorySection } from "@/components/design-2/nosotros/story-section";
import { ValuesGrid } from "@/components/design-2/nosotros/values-grid";
import { Section5Projects } from "@/components/design-2/section5-projects";
import { Section8ContactForm } from "@/components/design-2/section8-contact-form";

export default function NosotrosPage() {
  return (
    <>
      <NosotrosHero />
      
      <div className="relative z-10 bg-white" style={{ color: 'rgba(10, 10, 10, 1)' }}>
        
        {/* 1. Intro Concept */}
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

        {/* 2. Story: Origins */}
        <StorySection 
          label="NUESTROS INICIOS"
          title="DESDE DANLÍ PARA EL MUNDO"
          description={
            <>
              <p>Hace más de 10 años, identificamos una necesidad latente en El Paraíso: la falta de desarrollos urbanísticos planificados, seguros y con visión de largo plazo.</p>
              <p>Comenzamos con un sueño en la "Ciudad de las Colinas", apostando por nuestra tierra cuando pocos lo hacían. Hoy, esa apuesta se ha convertido en miles de hogares y una reputación intachable de cumplimiento y solidez.</p>
            </>
          }
          image="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2074&auto=format&fit=crop"
        />

        {/* 3. Evolution: Residential & Commercial */}
        <StorySection 
          label="EVOLUCIÓN"
          title="DE RESIDENCIALES A MOTORES ECONÓMICOS"
          description={
            <>
              <p>Nuestra visión no se detuvo en la vivienda. Entendimos que para crear comunidades verdaderas, necesitábamos impulsar la economía local.</p>
              <p>Así nacieron nuestros proyectos de <strong>Plazas Comerciales</strong>, creando ecosistemas donde la vida familiar y la actividad económica coexisten, generando empleo y plusvalía en cada metro cuadrado que desarrollamos.</p>
            </>
          }
          image="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
          reversed
        />

        {/* 4. Values Grid */}
        <ValuesGrid />

        {/* 5. Stats (Results) */}
        <Section5Projects className="bg-white" />

        {/* 6. Philosophy Quote */}
        <div className="bg-black text-white py-32 md:py-48 text-center px-4">
          <div className="container mx-auto max-w-4xl">
             <h2 
                className="text-3xl md:text-5xl font-light uppercase leading-tight mb-8"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                "No vendemos tierra, vendemos el escenario donde ocurrirán los mejores momentos de tu vida."
              </h2>
              <p className="text-gray-400 uppercase tracking-widest text-sm">
                — Filosofía INMAER
              </p>
          </div>
        </div>

        {/* 7. Future Vision */}
        <ConceptText 
          label="FUTURO"
          title="EXPANSIÓN HACIA NUEVOS HORIZONTES."
          description={
            <>
              <strong>Crecimiento Sostenible.</strong>
              <br /><br />
              Con presencia consolidada en Danlí, San Lorenzo y Talanga, nuestra mirada está puesta en seguir conectando Honduras. Continuamos identificando zonas estratégicas para llevar nuestro sello de calidad y certeza jurídica a más familias.
            </>
          }
          className="bg-[#f5f5f5] py-32 md:py-48"
        />

        {/* 8. CTA */}
        <div className="bg-[#2E2E2E]">
             <Section8ContactForm />
        </div>
       
      </div>
    </>
  );
}
