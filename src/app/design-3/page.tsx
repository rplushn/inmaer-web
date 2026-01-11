import React from "react";
import { HeroBold } from "@/components/design-3/hero-bold";
import { FeaturesBold } from "@/components/design-3/features-bold";
import { ProjectsGridBold } from "@/components/design-3/projects-grid-bold";
import { Section3Amenities } from "@/components/design-2/section3-amenities";
import { Section5Projects } from "@/components/design-2/section5-projects";
import { Section6Map } from "@/components/design-2/section6-map";
import { Section8ContactForm } from "@/components/design-2/section8-contact-form";
import { ConceptText } from "@/components/design-2/section2-concept";
import { ContactInfoHighlight } from "@/components/design-2/contacto/contact-info-highlight";

export default function Design3Page() {
  return (
    <>
      {/* 1. HERO: Bold Corporate Style */}
      <HeroBold />
      
      <div className="relative z-10 bg-white" style={{ color: 'rgba(10, 10, 10, 1)' }}>
        
        {/* 2. INTRO: Clean & Direct */}
        <div className="container mx-auto px-6 md:px-12 py-32 md:py-48">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            "No vendemos ilusiones. Vendemos <span className="text-blue-600">tierra firme</span>, documentos en regla y un futuro financiero sólido."
          </h2>
        </div>

        {/* 3. FEATURES: Cards with Icons (Modern) */}
        <FeaturesBold />

        {/* 4. VIDEO: Lifestyle (Reused but effective) */}
        <div className="py-20 bg-black">
             <Section3Amenities />
        </div>

        {/* 5. PROJECTS GRID: Visual Heavy */}
        <ProjectsGridBold />

        {/* 6. STATS: Big Numbers */}
        <Section5Projects className="bg-blue-900 text-white" />

        {/* 7. PHILOSOPHY: Corporate */}
        <ConceptText 
          label="NUESTRA MISIÓN"
          title="TRANSFORMAR EL ORIENTE DE HONDURAS."
          description="Desde 2015, hemos liderado el desarrollo urbano en Danlí y sus alrededores. Nuestra visión es clara: crear espacios donde el comercio y la familia prosperen juntos."
          className="bg-gray-100 py-32"
        />

        {/* 8. INNOVATION 2026 */}
        <div className="container mx-auto px-6 md:px-12 py-32 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop" alt="Call Center" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block">Nuevo en 2026</span>
            <h2 className="text-4xl font-bold mb-6">Atención Centralizada</h2>
            <p className="text-lg text-gray-600 mb-8">
              Lanzamos nuestro Call Center y Portal de Clientes para que tengas control total de tu inversión desde tu celular.
            </p>
            <button className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
              Conocer Más
            </button>
          </div>
        </div>

        {/* 9. MAP */}
        <Section6Map />

        {/* 10. DIRECT CONTACT */}
        <div className="bg-gray-50 border-t border-gray-200">
             <ContactInfoHighlight />
        </div>

        {/* 11. FINAL CTA */}
        <div className="bg-[#1a1a1a]">
            <div className="container mx-auto px-6 py-24 text-center text-white">
                <h2 className="text-4xl md:text-6xl font-black mb-8">¿LISTO PARA INVERTIR?</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Agenda una visita hoy mismo y conoce por qué somos la desarrolladora número uno del oriente.
                </p>
            </div>
        </div>

        {/* 12. FORM */}
        <div className="bg-black">
             <Section8ContactForm />
        </div>

      </div>
    </>
  );
}
