import React from "react";
import { ProjectsHero } from "@/components/design-2/proyectos/projects-hero";
import { ConceptText } from "@/components/design-2/section2-concept";
import { ProjectShowcase } from "@/components/design-2/proyectos/project-showcase";
import { Section8ContactForm } from "@/components/design-2/section8-contact-form";
import { Section6Map } from "@/components/design-2/section6-map";

export default function ProyectosPage() {
  return (
    <>
      <ProjectsHero />
      
      <div className="relative z-10 bg-white" style={{ color: 'rgba(10, 10, 10, 1)' }}>
        
        {/* Intro Concept */}
        <ConceptText 
          label="INVERSIÓN"
          title="CONSTRUYENDO PATRIMONIO EN ZONAS DE ALTO VALOR."
          description={
            <>
              <strong>Seguridad y Crecimiento.</strong>
              <br /><br />
              Nuestra selección estratégica de terrenos en Honduras garantiza plusvalía inmediata. No vendemos tierra, vendemos oportunidades de futuro en las regiones de mayor desarrollo económico.
            </>
          }
          className="py-32 md:py-48"
        />

        {/* Project 1: Danlí */}
        <ProjectShowcase 
          city="DANLÍ"
          title="CIUDAD DORADA"
          description="Un desarrollo exclusivo en la ciudad de las colinas. Infraestructura moderna integrada con la belleza natural de la región oriental."
          image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          features={[
            "Acceso Pavimentado",
            "Circuito Cerrado",
            "Áreas Verdes",
            "Agua y Luz 24/7"
          ]}
        />

        {/* Project 2: San Lorenzo */}
        <ProjectShowcase 
          city="SAN LORENZO"
          title="BRISAS DEL SUR"
          description="Inversión estratégica cerca del puerto más importante del pacífico. Un enclave logístico y residencial en pleno auge comercial."
          image="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop"
          features={[
            "Alta Plusvalía Comercial",
            "Cerca del Puerto",
            "Terrenos Planos",
            "Escritura Inmediata"
          ]}
          reversed
        />

        {/* Project 3: Talanga */}
        <ProjectShowcase 
          city="TALANGA"
          title="VALLE VERDE"
          description="La nueva expansión de Francisco Morazán. Un proyecto diseñado para familias que buscan tranquilidad a minutos de la capital."
          image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
          features={[
            "Clima Agradable",
            "Agua Potable",
            "Calles Amplias",
            "Financiamiento Directo"
          ]}
        />

        {/* Value Proposition / Guarantee */}
        <div className="bg-[#f5f5f5] py-32">
             <ConceptText 
              label="GARANTÍA"
              title="CERTEZA JURÍDICA ABSOLUTA."
              description={
                <>
                  <strong>Tu tranquilidad es nuestra prioridad.</strong>
                  <br /><br />
                  Cada lote cuenta con su documentación en regla, catastro y escritura pública. Invertir con INMAER es invertir con la seguridad de que tu patrimonio es legalmente tuyo desde el primer día.
                </>
              }
              className="py-0"
            />
        </div>

        {/* Map Section reuse */}
        <Section6Map />

        {/* Final CTA */}
        <div className="bg-[#2E2E2E]">
             <Section8ContactForm />
        </div>
       
      </div>
    </>
  );
}
