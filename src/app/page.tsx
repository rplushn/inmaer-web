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
      {/* 1. HERO: Sober, Elegant, Minimalist (New Request) */}
      <MainHero />
      
      <div className="relative z-10 bg-white" style={{ color: 'rgba(10, 10, 10, 1)' }}>
        
        {/* 2. INTRO: The Manifesto */}
        <ConceptText 
          label="MANIFIESTO"
          title="ARQUITECTURA DE INVERSIÓN PATRIMONIAL."
          description={
            <>
              <strong>Más allá del metro cuadrado.</strong>
              <br /><br />
              Creemos que la tierra no es solo un activo, es el fundamento de la libertad financiera. Diseñamos ecosistemas donde la plusvalía es una consecuencia inevitable de la ubicación estratégica y la planificación urbana consciente.
            </>
          }
          className="py-32 md:py-48"
        />

        {/* 3. STORY: Legacy (Why Us - Past) */}
        <StorySection 
          label="LEGADO"
          title="UNA DÉCADA DE CERTEZA"
          description={
            <>
              <p>En un mercado saturado de promesas, nosotros ofrecemos escrituras. Nacimos en la zona oriental con una premisa innegociable: la seguridad jurídica ante todo.</p>
              <p>Cada proyecto de INMAER es un testimonio tangible de cumplimiento, desde la primera piedra hasta la entrega final de tu patrimonio.</p>
            </>
          }
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        />

        {/* 4. STORY: Innovation (Why Us - Future) */}
        <StorySection 
          label="VISIÓN"
          title="URBANISMO QUE RESPIRA"
          description={
            <>
              <p>Rompemos con la monotonía del concreto. Nuestros desarrollos integran la naturaleza como el amenity principal.</p>
              <p>Desde Danlí hasta San Lorenzo, creamos espacios donde la vida moderna y el entorno natural coexisten en perfecto equilibrio, garantizando calidad de vida para generaciones.</p>
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

        {/* 9. DARK QUOTE SECTION */}
        <div className="bg-black text-white py-40 md:py-56 text-center px-4">
          <div className="container mx-auto max-w-5xl">
             <h2 
                className="text-4xl md:text-6xl font-thin uppercase leading-tight mb-8"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                "Invertir en tierra es invertir en el único recurso que ya no se fabrica."
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
