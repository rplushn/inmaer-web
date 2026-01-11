import React from "react";
import { ContactHero } from "@/components/design-2/contacto/contact-hero";
import { ConceptText } from "@/components/design-2/section2-concept";
import { ContactInfoHighlight } from "@/components/design-2/contacto/contact-info-highlight";
import { StorySection } from "@/components/design-2/nosotros/story-section";
import { OfficeLocations } from "@/components/design-2/contacto/office-locations";
import { Section6Map } from "@/components/design-2/section6-map";
import { Section8ContactForm } from "@/components/design-2/section8-contact-form";

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      
      <div className="relative z-10 bg-white" style={{ color: 'rgba(10, 10, 10, 1)' }}>
        
        {/* 1. Intro Concept */}
        <ConceptText 
          label="SOPORTE"
          title="TU VISIÓN, NUESTRO COMPROMISO."
          description={
            <>
              <strong>Estamos aquí para ti.</strong>
              <br /><br />
              En INMAER, la relación con nuestros clientes no termina con la firma de un contrato. Es apenas el comienzo. Hemos diseñado un ecosistema de atención para acompañarte en cada paso de tu inversión.
            </>
          }
          className="py-32 md:py-48"
        />

        {/* 2. Big Phone Number */}
        <ContactInfoHighlight />

        {/* 3. New Call Center Narrative */}
        <StorySection 
          label="INNOVACIÓN 2026"
          title="NUEVO CALL CENTER ESPECIALIZADO"
          description={
            <>
              <p>Este 2026 marca un hito en nuestra atención al cliente. Estamos inaugurando nuestro <strong>Call Center Centralizado</strong>, equipado con tecnología de punta para reducir tiempos de espera y brindar respuestas inmediatas.</p>
              <p>Un equipo dedicado exclusivamente a resolver tus dudas sobre financiamiento, documentación y avances de obra, disponible a una llamada de distancia.</p>
            </>
          }
          image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
        />

        {/* 4. Payment Portal Narrative */}
        <StorySection 
          label="DIGITALIZACIÓN"
          title="PORTAL DE PAGOS EN LÍNEA"
          description={
            <>
              <p>Tu comodidad es nuestra prioridad. Hemos lanzado nuestro nuevo <strong>Portal de Clientes</strong>, una plataforma segura donde podrás gestionar tus pagos, descargar estados de cuenta y visualizar el progreso de tu inversión desde cualquier lugar del mundo.</p>
              <p>Sin filas, sin horarios. El control total de tu patrimonio en la palma de tu mano.</p>
            </>
          }
          image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
          reversed
        />

        {/* 5. Office Locations Grid */}
        <OfficeLocations />

        {/* 6. Map Section */}
        <Section6Map />

        {/* 7. Promise/Closing Text */}
        <div className="bg-[#f5f5f5] py-32 md:py-40">
             <ConceptText 
              label="CERCANÍA"
              title="VISÍTANOS Y CONSTRUYAMOS JUNTOS."
              description={
                <>
                  <strong>Puertas Abiertas.</strong>
                  <br /><br />
                  Ya sea en nuestras oficinas corporativas en Tegucigalpa o en nuestra sede en Danlí, nuestro equipo está listo para recibirte con el profesionalismo y la calidez que nos caracteriza.
                </>
              }
              className="py-0"
            />
        </div>

        {/* 8. Final Form */}
        <div className="bg-[#2E2E2E]">
             <Section8ContactForm />
        </div>
       
      </div>
    </>
  );
}
