import React from "react";
import { MainHero } from "@/components/design-2/main-hero";
import { ConceptText } from "@/components/design-2/section2-concept";
import { StorySection } from "@/components/design-2/nosotros/story-section";
import { ProjectsTeaser } from "@/components/design-2/projects-teaser";
import { Section5Projects } from "@/components/design-2/section5-projects";
import { ValuesGrid } from "@/components/design-2/nosotros/values-grid";
import { Section6Map } from "@/components/design-2/section6-map";
import { ContactInfoHighlight } from "@/components/design-2/contacto/contact-info-highlight";
import { Section8ContactForm } from "@/components/design-2/section8-contact-form";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO: Cimentando Tu Patrimonio */}
      <MainHero />
      
      <div className="relative z-10 bg-white" style={{ color: 'rgba(10, 10, 10, 1)' }}>
        
        {/* 2. INTRO: El Manifiesto Nuevo - Enfocado en Propiedad y Valor */}
        <ConceptText 
          label="MANIFIESTO"
          title="TU TIERRA, TU LEGADO."
          description={
            <>
              <strong>La libertad comienza con un terreno propio.</strong>
              <br /><br />
              Desarrollamos proyectos urbanizados, con servicios reales y escrituras en mano. Creamos espacios donde tu inversión está segura y crece día a día, garantizando el futuro de tu familia.
            </>
          }
          className="py-32 md:py-48"
        />

        {/* 3. STORY: Legado Sólido */}
        <StorySection 
          label="LEGADO"
          title="UNA DÉCADA CUMPLIENDO"
          description={
            <>
              <p>En INMAER no vendemos promesas, entregamos realidades. Nacimos en la zona oriental con una misión clara: facilitar el acceso a una vivienda digna y segura.</p>
              <p>Cada proyecto es un testimonio de cumplimiento. Desde calles bien trazadas hasta sistemas de agua potable eficientes, nuestra obra gris es la garantía de tu bienestar.</p>
            </>
          }
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        />

        {/* 4. STORY: Visión Constructiva */}
        <StorySection 
          label="VISIÓN"
          title="CONSTRUCCIÓN QUE PERDURA"
          description={
            <>
              <p>Llevamos el desarrollo urbano a donde más se necesita. Transformamos lotes baldíos en comunidades vibrantes con alta plusvalía.</p>
              <p>Desde Danlí hasta San Lorenzo, nuestros desarrollos son sinónimo de solidez y crecimiento económico para la región.</p>
            </>
          }
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          reversed
        />

        {/* 5. BREAK: Big Numbers */}
        <Section5Projects className="bg-[#f9f9f9]" />

        {/* 6. PORTFOLIO TEASER (Clean Grid) */}
        <ProjectsTeaser />

        {/* 7. PHILOSOPHY / VALUES */}
        <ValuesGrid />

        {/* 8. INNOVATION 2026 (Call Center highlight reused cleanly) */}
        <StorySection 
          label="SERVICIO 2026"
          title="ATENCIÓN SIN FRONTERAS"
          description={
            <>
              <p>La distancia no es un obstáculo. Con nuestro nuevo Call Center Centralizado y Portal de Clientes, gestionas tu inversión desde cualquier parte del mundo.</p>
              <p>Transparencia total en tus pagos, avances y consultas. Tu patrimonio, a un clic de distancia.</p>
            </>
          }
          image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
        />

        {/* 9. DARK QUOTE SECTION - Updated */}
        <div className="bg-black text-white py-40 md:py-56 text-center px-4">
          <div className="container mx-auto max-w-5xl">
             <h2 
                className="text-4xl md:text-6xl font-thin uppercase leading-tight mb-8"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                "Invertir en tierra es la forma más segura de construir libertad."
              </h2>
              <div className="h-px w-20 bg-white/30 mx-auto"></div>
          </div>
        </div>

        {/* 10. MAP */}
        <Section6Map />

        {/* 11. DIRECT LINE (As requested) */}
        <div className="border-t border-gray-100">
          <ContactInfoHighlight />
        </div>

        {/* 12. FINAL FORM */}
        <div className="bg-[#2E2E2E]">
          <Section8ContactForm />
        </div>

      </div>
    </>
  );
}
